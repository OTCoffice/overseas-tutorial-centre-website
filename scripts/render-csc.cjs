const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
function write(p,s){const f=path.join(root,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s.replace(/[ \t]+$/gm,''));}
write('zh/csc-scholarships/index.html',require('../content/csc-scholarship-pathways.cjs')());
write('zh/services/index.html',require('../content/service-desk.cjs')());
for(const slug of ['phd-application-coaching','masters-country-planning'])write('zh/services/'+slug+'/index.html',require('../content/'+slug+'.cjs')());
const entry={type:'留學規劃',title:'CSC國家公派留學｜碩士、博士與聯合培養',url:'/zh/csc-scholarships/',desc:'2027創新項目、碩士與博士資格、校內推薦、學費安排及官方入口。'};
for(const file of ['search/index.html','zh/search/index.html']){let s=fs.readFileSync(path.join(root,file),'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search block missing');const a=JSON.parse(m[2]),i=a.findIndex(x=>x.url===entry.url);if(i<0)a.unshift(entry);else a[i]=entry;write(file,s.replace(re,(_,h,b,t)=>h+JSON.stringify(a).replaceAll('<','\\u003c')+t));}
let s=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');if(!s.includes('https://overseasuk.com'+entry.url))s=s.replace('</urlset>','  <url><loc>https://overseasuk.com'+entry.url+'</loc></url>\n</urlset>');write('sitemap.xml',s);
const file='zh/site-directory/index.html';s=fs.readFileSync(path.join(root,file),'utf8');if(!s.includes('href="'+entry.url+'"'))s=s.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+entry.url+'">'+entry.title+'</a><small>中文內容</small></li>');write(file,s);
console.log('CSC hub, masters/PhD links, services, search, sitemap and directory rendered.');
