const fs=require('fs'),{execFileSync}=require('child_process');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/usa-itp-support.json'],{stdio:'inherit'});
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
const a=require('../content/usa-itp-support.json');
const file='zh/search/index.html',s=fs.readFileSync(file,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re),entries=JSON.parse(m[2]);
const entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh},i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]=entry;
fs.writeFileSync(file,s.replace(re,(_,h,b,t)=>h+JSON.stringify(entries).replaceAll('<','\\u003c')+t));
const p='zh/site-directory/index.html';let d=fs.readFileSync(p,'utf8');if(!d.includes('href="'+a.path+'"'))d=d.replace('<ul class="directory-list">',`<ul class="directory-list"><li data-directory-row><a href="${a.path}">${a.name}</a><small>中文內容</small></li>`);fs.writeFileSync(p,d);
