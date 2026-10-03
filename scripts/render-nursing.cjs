// Targeted publishing: preserve unrelated content and maintain discoverable navigation.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const base=path.resolve(__dirname,'..');
const slugs=['nursing-hub','nursing-australia','nursing-courses'];
execFileSync(process.execPath,['scripts/render-herald.cjs',...slugs.flatMap(x=>['--service','content/'+x+'.json'])],{cwd:base,stdio:'inherit'});
const write=(p,s)=>fs.writeFileSync(path.join(base,p),s.replace(/[ \t]+$/gm,''));
write('zh/services/index.html',require('../content/service-desk.cjs')());
write('index.html',require('../content/chinese-home.cjs')());
write('zh/index.html',require('../content/chinese-home.cjs')().replace('href="styles.css?','href="../styles.css?'));
write('zh/subject-planning/index.html',require('../content/subject-study-hub.cjs').render());
const records=slugs.map(slug=>require('../content/'+slug+'.json'));
for(const file of ['zh/search/index.html']){
 const p=path.join(base,file),s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);if(!m)throw Error('Missing search data');
 const entries=JSON.parse(m[2]);for(const a of records){const e={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh},i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(e);else entries[i]=e;}
 fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(entries).replaceAll('<','\\u003c')+c));
}
const dir=path.join(base,'zh/site-directory/index.html');let d=fs.readFileSync(dir,'utf8');
for(const a of records){
 const href=a.path;
 d=d.replace(new RegExp('<li data-directory-row><a href="'+href+'">[\\s\\S]*?</li>','g'),'');
}
const rows=records.map(a=>`<li data-directory-row><a href="${a.path}">${a.name}</a><small>中文內容</small></li>`).join('');
d=d.replace(/(<section id="institutions">[\s\S]*?<ul class="directory-list">)/, '$1'+rows);
fs.writeFileSync(dir,d);
const block=`<section class="band compact-band" id="nursing-related"><h2>海外護理留學</h2><p>按現有學歷及護士資格查看留學、註冊、求職與移民準備。</p><p><a href="/zh/nursing/">護理留學 →</a>　<a href="/zh/nursing/australia/">澳洲護理專業 →</a></p></section>`;
for(const file of ['zh/immigration-info/index.html','zh/australia-job-search-coaching/index.html']){
 const p=path.join(base,file);let s=fs.readFileSync(p,'utf8');s=s.replace(/<section\b[^>]*id="nursing-related"[\s\S]*?<\/section>/,'');
 const marker=file.includes('immigration-info')?'<section class="band compact-band zh-immigration-country-board"':'</main>';
 if(file.includes('immigration-info')){const at=s.indexOf(marker);if(at<0)throw Error('Immigration template changed');s=s.slice(0,at)+block+s.slice(at);}else if(s.includes('</main>'))s=s.replace('</main>',block+'</main>');else s=s.replace('<footer',block+'<footer');
 fs.writeFileSync(p,s);
}
console.log('Nursing hub, Australia guide and navigation updated.');
