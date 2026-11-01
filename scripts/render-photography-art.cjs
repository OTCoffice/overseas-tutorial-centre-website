// Targeted page + navigation rendering; does not rebuild unrelated pages or covers.
const fs=require('fs'),path=require('path');const root=path.resolve(__dirname,'..');
const a=require('../content/photography-art-planning.json'),render=require('../content/photography-art-planning.cjs');
const write=(route,html)=>{const f=path.join(root,route,'index.html');fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,html.replace(/[ \t]+$/gm,'').trimEnd()+'\n')};
write(a.path,render());
const hub=require('../content/subject-study-hub.cjs');write(hub.route,hub.render());
const desk=require('../content/service-desk.cjs');write('/zh/services/',typeof desk==='function'?desk():desk.render());
write('/zh/services/art-portfolio-coaching/',require('../content/art-portfolio-service.cjs')());
for(const f of ['search/index.html','zh/search/index.html']){const p=path.join(root,f),s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);if(!m)throw Error('Search index missing');const rows=JSON.parse(m[2]),entry={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh},i=rows.findIndex(r=>r.url===a.path);if(i<0)rows.unshift(entry);else rows[i]=entry;fs.writeFileSync(p,s.replace(re,(_,x,y,z)=>x+JSON.stringify(rows).replaceAll('<','\\u003c')+z))}
const sp=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sp,'utf8');if(!xml.includes('<loc>https://overseasuk.com'+a.path+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+a.path+'</loc></url>\n</urlset>');fs.writeFileSync(sp,xml);
const dp=path.join(root,'zh/site-directory/index.html');let directory=fs.readFileSync(dp,'utf8');if(!directory.includes('href="'+a.path+'"'))directory=directory.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+a.path+'">'+a.titleZh+'</a><small>中文內容</small></li>');fs.writeFileSync(dp,directory);
console.log('Rendered photography planning, subject/service/art links, search, directory and sitemap.');
