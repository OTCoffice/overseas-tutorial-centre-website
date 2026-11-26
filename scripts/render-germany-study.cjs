// Targeted rebuild: preserve unrelated country pages and directory styling.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..'),a=require('../content/germany-study.json');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/germany-study.json'],{cwd:root,stdio:'inherit'});
const rd=f=>fs.readFileSync(path.join(root,f),'utf8');
const wr=(f,s)=>fs.writeFileSync(path.join(root,f),s);
const f='zh/countries/index.html';let h=rd(f);
{
 const marker='<article id="destination-de">';const start=h.indexOf(marker),end=h.indexOf('</article>',start);
 if(start<0||end<0)throw Error('German country entry missing');
 const country=require('../content/country-study-destinations.json').flatMap(g=>g.countries).find(c=>c.en==='Germany');
 let entry=h.slice(start,end).replace(/<p>[\s\S]*?<\/p>/,`<p>${country.desc}</p>`);const link='<a href="'+a.path+'">德國留學 →</a>';
 if(!entry.includes('https://www.study-in-germany.com/en/'))throw Error('Official German entry missing');
 if(!entry.includes('href="'+a.path+'"'))entry=entry.replace('<div class="country-study-links">','<div class="country-study-links">'+link);
 wr(f,h.slice(0,start)+entry+h.slice(end));
}
for(const f of ['search/index.html','zh/search/index.html']){
 const h=rd(f),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=h.match(re);
 if(!m)throw Error('Search data missing: '+f);
 const rows=JSON.parse(m[2]),entry={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh},i=rows.findIndex(e=>e.url===a.path);
 if(i<0)rows.unshift(entry);else rows[i]={...rows[i],...entry};
 wr(f,h.replace(re,(_,p,b,s)=>p+JSON.stringify(rows).replace(/</g,'\\u003c')+s));
}
for(const f of ['site-directory/index.html','zh/site-directory/index.html']){
 if(!fs.existsSync(path.join(root,f)))continue;
 let h=rd(f);if(h.includes('href="'+a.path+'"'))continue;
 const marker='<ul class="directory-list">';if(!h.includes(marker))throw Error('Directory list missing: '+f);
 wr(f,h.replace(marker,marker+'<li data-directory-row><a href="'+a.path+'">德國留學</a><small>中文內容</small></li>'));
}
console.log('Updated Germany country entry, both search indexes and site directories.');
