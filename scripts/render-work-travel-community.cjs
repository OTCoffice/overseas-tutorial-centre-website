// Targeted update: hub, USA directory and existing SWT page only.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),w=require('../content/work-travel-alliance.cjs'),c=require('../content/work-travel-community.cjs');
const records=[{url:w.hub,title:'打工度假聯盟｜海外督導 OTC',desc:'各國項目、同行互助、Threads小群與Notion參與登記。',html:w.renderHub()},{url:w.hub+'usa/',title:'美國打工度假與青年交流｜海外督導 OTC',desc:'美國SWT項目、已報名者支援、同行互助及行前準備。',html:w.renderCountry(w.countries.find(x=>x.id==='usa'))}];
const swt='/zh/us-swt-work-travel-support/',file=path.join(root,swt,'index.html');let s=fs.readFileSync(file,'utf8');
s=s.replace(/<!-- OTC COMMUNITY START -->[\s\S]*?<!-- OTC COMMUNITY END -->/,'');
s=s.replace('</main>',`<!-- OTC COMMUNITY START -->${c.swt()}<!-- OTC COMMUNITY END --></main>`);
s=s.replace('先確認出發時的學生身分，再算這趟值不值得。','申請準備 · 行前支援 · 同行互助');
if(!s.includes('href="#enrolled-support"'))s=s.replace('<div class="actions">','<div class="actions"><a class="btn btn-secondary" href="#enrolled-support">已報名者支援</a><a class="btn btn-secondary" href="#community">同行互助</a>');
records.push({url:swt,title:'海外督導｜美國 SWT 暑期工遊｜全程陪跑',desc:'美國SWT申請準備、已報名者面試與行前支援、同行互助及Notion登記。',html:s});
for(const r of records)fs.writeFileSync(path.join(root,r.url,'index.html'),r.html.replace(/[ \t]+$/gm,''));
for(const filename of ['search/index.html','zh/search/index.html']){const p=path.join(root,filename);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);if(!m)throw Error('Search index missing');const a=JSON.parse(m[2]);for(const r of records){const i=a.findIndex(x=>x.url===r.url),e={type:'中文資料',title:r.title,url:r.url,desc:r.desc};if(i<0)a.push(e);else a[i]={...a[i],...e};}fs.writeFileSync(p,s.replace(re,(_,open,data,close)=>open+JSON.stringify(a).replaceAll('<','\\u003c')+close));}

console.log("Updated community content in 3 pages and 2 search indexes.");
