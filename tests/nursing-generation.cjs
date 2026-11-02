// Run after targeted or full-site generation.
const assert=require('node:assert/strict'),fs=require('node:fs'),{execFileSync}=require('node:child_process');
const read=p=>fs.readFileSync(p,'utf8');
const baseline=p=>execFileSync('git',['show',`${process.env.NURSING_BASE_REF||'origin/main'}:${p}`],{encoding:'utf8',maxBuffer:20*1024*1024});
const destinations=require('../content/nursing-destinations.json');
const render=require('../content/nursing-template.cjs');
const hub=read('zh/nursing/index.html');
const main=hub.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
assert.match(main,/^<h2[^>]*><span id="global-nursing-pathways">國家與地區/);
assert.equal(destinations.length,14);
assert.ok(main.indexOf('nursing-destination-groups')<main.indexOf('id="planning"'));
for(const forbidden of ['nursing-international-extension','澳洲護理專業','65 家','254 項','NMC','Ahpra','NCLEX','/zh/nursing/courses/']) assert.ok(!main.includes(forbidden),'hub must contain only country entrances and common guidance: '+forbidden);
const nav=main.match(/<nav class="nursing-destination-groups"[\s\S]*?<\/nav>/)[0];
assert.equal((nav.match(/<a /g)||[]).length,14);
for(const c of destinations){
 assert.ok(nav.includes(`href="${c.path}"`));
 const html=read(c.path.slice(1)+'index.html');
 assert.ok(html.includes(c.url),`${c.name} regulator link preserved`);
 assert.ok(html.includes('id="contact"'));
 assert.ok(html.includes('href="/zh/nursing/"'));
 if(c.slug!=='australia') {
  assert.ok(html.includes(c.route),`${c.name} original route preserved`);
  assert.ok(html.includes('尚未建立'+c.name+'的院校課程清單'));
  assert.equal(html,render('nursing-'+c.slug),'country output must match its source');
 }
 assert.ok(read('sitemap.xml').includes('https://overseasuk.com'+c.path));
 for(const p of ['search/index.html','zh/search/index.html']) {
  const entries=JSON.parse(read(p).match(/id="search-data">([\s\S]*?)<\/script>/)[1]);
  assert.equal(entries.filter(x=>x.url===c.path).length,1,`${p} has one entry for ${c.path}`);
 }
}
const au=read('zh/nursing/australia/index.html');
assert.ok(au.indexOf('澳洲護理院校與課程資料庫')<au.indexOf('<h2 id="topic-0">入學要求'));
assert.match(au,/href="\/zh\/nursing\/courses\/"/);
const data=JSON.parse(read('content/nursing-course-data.json'));
assert.equal(data.length,254);assert.equal(new Set(data.map(c=>c.providerCode)).size,65);
for(const p of ['content/nursing-course-data.json','content/nursing-cricos-source.json','content/nursing-course-notes.json','content/nursing-courses-body.cjs','vercel.json','zh/services/nursing-international/index.html'])assert.equal(read(p),baseline(p),`preserve ${p}`);
const subject=read('zh/subject-planning/index.html').match(/<article id="medicine">[\s\S]*?<\/article>/)[0];
assert.ok(subject.includes('href="/zh/nursing/"'));assert.ok(!subject.includes('/zh/nursing/courses/'));
console.log('PASS: country-first hub; 14 working country routes; country details off hub; Australia database intact; search, sitemap, sources and redirect preserved.');
