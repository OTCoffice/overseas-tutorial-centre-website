const fs=require('fs');
const a=require('../content/graduate-job-search-visas.json');
fs.mkdirSync('zh/services/graduate-job-search-visas',{recursive:true});
fs.writeFileSync('zh/services/graduate-job-search-visas/index.html',require('../content/graduate-job-search-visas.cjs')().replace(/[ \t]+$/gm,''));
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
fs.writeFileSync('index.html',require('../content/chinese-home.cjs')().replace(/[ \t]+$/gm,''));
for(const p of ['search/index.html','zh/search/index.html']){
let html=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=html.match(re);if(!m)throw Error('Missing search data '+p);
const rows=JSON.parse(m[2]),entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh},i=rows.findIndex(x=>x.url===a.path);if(i<0)rows.unshift(entry);else rows[i]=entry;
fs.writeFileSync(p,html.replace(re,(_,h,b,t)=>h+JSON.stringify(rows).replaceAll('<','\\u003c')+t));
}
let xml=fs.readFileSync('sitemap.xml','utf8');if(!xml.includes('<loc>https://overseasuk.com'+a.path+'</loc>'))fs.writeFileSync('sitemap.xml',xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+a.path+'</loc></url>\n</urlset>'));
const p='zh/site-directory/index.html';let html=fs.readFileSync(p,'utf8');if(!html.includes('href="'+a.path+'"')){const start=html.indexOf('<section id="institutions">'),pos=html.indexOf('<ul class="directory-list">',start);if(start<0||pos<0)throw Error('Missing service directory');const n=pos+'<ul class="directory-list">'.length;html=html.slice(0,n)+`<li data-directory-row><a href="${a.path}">高學歷求職簽證｜HPI・Zoekjaar・J-Find</a><small>中文內容 · <a data-original-page href="${a.path}">原頁</a></small></li>`+html.slice(n);fs.writeFileSync(p,html);}
console.log('Rendered graduate visa page, homepage, service index, search and sitemap.');
