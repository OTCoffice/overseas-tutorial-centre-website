// Targeted rendering; preserve all unrelated pages and search records.
const fs=require('fs'),path=require('path'),a=require('../content/germany-freelance-residence.json');
const root=path.resolve(__dirname,'..');
for(const [route,renderer] of [[a.path,'germany-freelance-residence'],['/zh/services/','service-desk']]){const file=path.join(root,route,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,require('../content/'+renderer+'.cjs')());}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file),s=fs.readFileSync(p,'utf8');const m=s.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);if(!m)throw Error('Search block missing');const list=JSON.parse(m[2]);const e={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh};const i=list.findIndex(x=>x.url===a.path);if(i<0)list.unshift(e);else list[i]=e;fs.writeFileSync(p,s.replace(m[0],m[1]+JSON.stringify(list).replace(/</g,'\\u003c')+m[3]));}
const p=path.join(root,'sitemap.xml');let s=fs.readFileSync(p,'utf8');if(!s.includes('https://overseasuk.com'+a.path))s=s.replace('</urlset>','<url><loc>https://overseasuk.com'+a.path+'</loc></url>\n</urlset>');fs.writeFileSync(p,s);
console.log('Rendered Germany freelance service, service hub, search and sitemap');
