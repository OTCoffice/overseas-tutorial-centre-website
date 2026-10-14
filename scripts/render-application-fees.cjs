const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
function write(p,s){const f=path.join(root,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s.replace(/[ \t]+$/gm,''));}
write('zh/application-fees/index.html',require('../content/application-fees.cjs')());
write('zh/services/index.html',require('../content/service-desk.cjs')());
const entry={type:'服務收費',title:'留學申請收費標準',url:'/zh/application-fees/',desc:'同等服務參考價六折；日本研究生、修士、德國申請，免費代辦與第三方費用。'};
for(const file of ['search/index.html','zh/search/index.html']){let s=fs.readFileSync(path.join(root,file),'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search block missing');const a=JSON.parse(m[2]),i=a.findIndex(x=>x.url===entry.url);if(i<0)a.unshift(entry);else a[i]=entry;write(file,s.replace(re,(_,h,b,t)=>h+JSON.stringify(a).replaceAll('<','\\u003c')+t));}
let s=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');if(!s.includes('https://overseasuk.com'+entry.url))s=s.replace('</urlset>','  <url><loc>https://overseasuk.com'+entry.url+'</loc></url>\n</urlset>');write('sitemap.xml',s);
const file='zh/site-directory/index.html';s=fs.readFileSync(path.join(root,file),'utf8');if(!s.includes('href="'+entry.url+'"'))s=s.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+entry.url+'">'+entry.title+'</a><small>中文內容</small></li>');write(file,s);
console.log('Application pricing policy rendered.');
