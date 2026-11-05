// Targeted rendering for visual communication planning; preserves other pages.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const hubs=[require('../content/social-work-planning.cjs'),require('../content/social-work-australia.cjs'),require('../content/social-work-courses.cjs'),...require('../content/social-work-global.cjs').pages];
const records=hubs.map(h=>({url:h.route,title:h.title+'｜海外督導 OTC',desc:h.description,html:h.render()}));
for(const r of records){const p=path.join(root,r.url,'index.html');fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,r.html.replace(/[ \t]+$/gm,''));}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search index missing');const rows=JSON.parse(m[2]);for(const r of records){const entry={type:'中文資料',title:r.title,url:r.url,desc:r.desc};const i=rows.findIndex(x=>x.url===r.url);if(i<0)rows.unshift(entry);else rows[i]=entry;}fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(rows).replaceAll('<','\\u003c')+c));}
const sitemap=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sitemap,'utf8');for(const r of records)if(!xml.includes('<loc>https://overseasuk.com'+r.url+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+r.url+'</loc></url>\n</urlset>');fs.writeFileSync(sitemap,xml);
const file=path.join(root,'zh/site-directory/index.html');let s=fs.readFileSync(file,'utf8');for(const r of records)if(!s.includes('href="'+r.url+'"'))s=s.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+r.url+'">'+r.title+'</a><small>中文內容</small></li>');fs.writeFileSync(file,s);
const subject=require('../content/subject-study-hub.cjs');fs.writeFileSync(path.join(root,subject.route,'index.html'),subject.render().replace(/[ \t]+$/gm,''));

console.log('Rendered social work planning and subject hub; updated search, directory and sitemap.');

fs.writeFileSync(path.join(root,"zh/services/index.html"),require("../content/service-desk.cjs")());

const legacy=path.join(root,"zh/subject-planning/social-work/courses/index.html"); fs.writeFileSync(legacy,`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>澳洲社工課程清單</title><link rel="canonical" href="https://overseasuk.com/zh/subject-planning/social-work/australia/courses/"><meta http-equiv="refresh" content="0;url=/zh/subject-planning/social-work/australia/courses/"></head><body><a href="/zh/subject-planning/social-work/australia/courses/">查看澳洲社工院校與課程清單</a></body></html>`);
