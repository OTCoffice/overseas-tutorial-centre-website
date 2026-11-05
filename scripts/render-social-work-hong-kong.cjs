// Targeted rendering for Hong Kong social work; preserves other pages.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const hubs=require('../content/social-work-hong-kong.cjs').pages;
const records=hubs.map(h=>({url:h.route,title:h.title+'｜海外督導 OTC',desc:h.description,html:h.render()}));
for(const r of records){const p=path.join(root,r.url,'index.html');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,r.html.replace(/[ \t]+$/gm,''));}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search index missing');const rows=JSON.parse(m[2]);for(const r of records){const entry={type:'中文資料',title:r.title,url:r.url,desc:r.desc};const i=rows.findIndex(x=>x.url===r.url);if(i<0)rows.unshift(entry);else rows[i]=entry;}fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(rows).replaceAll('<','\\u003c')+c));}
console.log("Rendered Hong Kong social work guide, directory and search records.");
