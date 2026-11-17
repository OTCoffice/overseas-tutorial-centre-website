const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),a=require('../content/ireland-language-study.json');
const write=(p,s)=>{const f=path.join(root,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s.replace(/[ \t]+$/gm,''));};
write(a.path+'index.html',require('../content/ireland-language-study.cjs')());
const moveShare=h=>{const m=h.match(/<div class="page-utility-bar" data-page-share>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);return m?h.replace(m[0],'').replace(/<footer\b/,m[0]+'\n<footer'):h;};
const parent='zh/summer-school-alliance/ireland/index.html';let h=fs.readFileSync(path.join(root,parent),'utf8');
const entry=`<div class="summer-herald-linkbox" id="ireland-language-entry"><strong>愛爾蘭語言遊學</strong><span>短期英語、青少年營隊、25週成人課程、住宿與免費代辦。</span><div class="actions"><a class="btn btn-primary" href="${a.path}">語言遊學課程與費用 →</a></div></div>`;
if(!h.includes('id="ireland-language-entry"'))h=h.replace('<div class="summer-mini-details-grid',entry+'\n<div class="summer-mini-details-grid');
write(parent,moveShare(h));
const hub='zh/summer-school-alliance/index.html';h=fs.readFileSync(path.join(root,hub),'utf8');
h=h.replace(/<article class="summer-alliance-region-card[^\"]*">\s*<span class="summer-alliance-region-flag" aria-hidden="true">🇮🇪<\/span>[\s\S]*?<\/article>/,`<article class="summer-alliance-region-card"><span class="summer-alliance-region-flag" aria-hidden="true">🇮🇪</span><div class="body"><strong>愛爾蘭 Ireland</strong><span>青少年寒暑校、短期英語與25週成人語言課程。</span><a href="/zh/summer-school-alliance/ireland/">寒暑校項目 →</a> <a href="${a.path}">語言遊學與免費代辦 →</a></div></article>`);
h=h.replace(/https%3A%2F%2Foverseasuk.com%2Fsummer-school-alliance%2F/g,'https%3A%2F%2Foverseasuk.com%2Fzh%2Fsummer-school-alliance%2F').replace('data-page-copy-link="https://overseasuk.com/summer-school-alliance/"','data-page-copy-link="https://overseasuk.com/zh/summer-school-alliance/"');
write(hub,moveShare(h));
for(const file of ['search/index.html','zh/search/index.html']){h=fs.readFileSync(path.join(root,file),'utf8');const m=h.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);if(!m)throw Error('Search data missing: '+file);const rows=JSON.parse(m[2]),e={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh},i=rows.findIndex(x=>x.url===a.path);if(i<0)rows.unshift(e);else rows[i]=e;write(file,h.replace(m[0],m[1]+JSON.stringify(rows).replace(/</g,'\\u003c')+m[3]));}
const sitemap='sitemap.xml';h=fs.readFileSync(path.join(root,sitemap),'utf8');if(!h.includes('<loc>https://overseasuk.com'+a.path+'</loc>'))h=h.replace('</urlset>',`<url><loc>https://overseasuk.com${a.path}</loc><lastmod>2026-11-17</lastmod></url>\n</urlset>`);write(sitemap,h);
console.log('Rendered Ireland language study and alliance links.');
