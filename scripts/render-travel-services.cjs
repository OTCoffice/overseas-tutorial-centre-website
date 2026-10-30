// Targeted travel service rendering; preserve all unrelated pages and search entries.
const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const names=['seoul-family-kpop-service','travel-planning','travel-services'];
const searchFile=path.join(root,'search/index.html');let search=fs.readFileSync(searchFile,'utf8');const m=search.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);if(!m)throw Error('Search data missing');const entries=JSON.parse(m[2]);
let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const name of names){const a=require('../content/'+name+'.json'),file=path.join(root,a.path,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,require('../content/'+name+'.cjs')());const entry={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh},i=entries.findIndex(x=>x.url===a.path);if(i<0)entries.unshift(entry);else entries[i]={...entries[i],...entry};if(!sitemap.includes('<loc>https://overseasuk.com'+a.path+'</loc>'))sitemap=sitemap.replace('</urlset>','<url><loc>https://overseasuk.com'+a.path+'</loc></url>\n</urlset>');}
fs.writeFileSync(searchFile,search.replace(m[0],m[1]+JSON.stringify(entries).replace(/</g,'\\u003c')+m[3]));fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
console.log('Rendered travel service pages and directories');
