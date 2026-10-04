const fs=require('fs'),{execFileSync}=require('child_process');
const slugs=['ecfvg','pave'];
execFileSync(process.execPath,['scripts/render-herald.cjs',...slugs.flatMap(s=>['--service','content/veterinary-'+s+'.json'])],{stdio:'inherit'});
fs.writeFileSync('zh/teaching/index.html',require('../content/teaching.cjs')());
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
for(const p of ['zh/search/index.html']){
 const s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re),entries=JSON.parse(m[2]);
 for(const slug of slugs){const a=require('../content/veterinary-'+slug+'.json'),entry={type:'職業培訓',title:a.titleZh,url:a.path,desc:a.summaryZh},i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]=entry;}
 fs.writeFileSync(p,s.replace(re,(_,h,b,t)=>h+JSON.stringify(entries).replaceAll('<','\\u003c')+t));
}
const p='zh/site-directory/index.html';let d=fs.readFileSync(p,'utf8');for(const slug of slugs){const a=require('../content/veterinary-'+slug+'.json');if(!d.includes('href="'+a.path+'"'))d=d.replace('<ul class="directory-list">',`<ul class="directory-list"><li data-directory-row><a href="${a.path}">${a.name}</a><small>職業培訓</small></li>`);}fs.writeFileSync(p,d);

for(const p of ['zh/teaching/index.html','zh/services/index.html'])fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace(/[ \t]+$/gm,''));
