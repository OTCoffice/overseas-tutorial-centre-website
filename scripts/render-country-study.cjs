// Targeted rendering for the country and subject directories; safe to rerun.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const hubs=[require('../content/country-study-hub.cjs'),require('../content/subject-study-hub.cjs')];
const records=hubs.map((h,i)=>({url:h.route,title:i?'學科規劃｜海外督導 OTC':'國別留學規劃｜海外督導 OTC',desc:i?'基礎課程、文科、理科、工科、商科、醫學與藝術設計。':'按亞洲、歐洲、美洲、大洋洲與非洲查閱各國留學資料。',html:h.render()}));
for(const r of records){const p=path.join(root,r.url,'index.html');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,r.html);}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search index missing');const rows=JSON.parse(m[2]);for(const r of records){const entry={type:'中文資料',title:r.title,url:r.url,desc:r.desc};const i=rows.findIndex(x=>x.url===r.url);if(i<0)rows.unshift(entry);else rows[i]=entry;}fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(rows).replaceAll('<','\\u003c')+c));}
const sitemap=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sitemap,'utf8');for(const r of records)if(!xml.includes('<loc>https://overseasuk.com'+r.url+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+r.url+'</loc></url>\n</urlset>');fs.writeFileSync(sitemap,xml);
const file=path.join(root,'zh/site-directory/index.html');let s=fs.readFileSync(file,'utf8');for(const r of records)if(!s.includes('href="'+r.url+'"'))s=s.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+r.url+'">'+r.title+'</a><small>中文內容</small></li>');fs.writeFileSync(file,s);
console.log('Rendered country and subject directories, updated search and sitemap.');
