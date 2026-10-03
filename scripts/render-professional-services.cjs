const fs=require('fs'),{execFileSync}=require('child_process');
const slugs=['portfolio-website-support','english-cv-interview-support','masters-country-planning','international-sourcing','business-transfer','travel-services','travel-planning'];
execFileSync(process.execPath,['scripts/render-herald.cjs',...slugs.flatMap(s=>['--service','content/'+s+'.json'])],{stdio:'inherit'});
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
const p='zh/search/index.html',s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re),entries=JSON.parse(m[2]);
for(const slug of slugs){const a=require('../content/'+slug+'.json'),entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh},i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]=entry;}
fs.writeFileSync(p,s.replace(re,(_,h,b,t)=>h+JSON.stringify(entries).replaceAll('<','\\u003c')+t));
const dir='zh/site-directory/index.html';let d=fs.readFileSync(dir,'utf8');for(const slug of slugs){const a=require('../content/'+slug+'.json');if(!d.includes('href="'+a.path+'"'))d=d.replace('<ul class="directory-list">',`<ul class="directory-list"><li data-directory-row><a href="${a.path}">${a.name}</a><small>中文內容</small></li>`);}fs.writeFileSync(dir,d);
