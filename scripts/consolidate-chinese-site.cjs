const fs=require('fs'),path=require('path');
const {pageShell,nav}=require('../site');
const root=path.resolve(__dirname,'..');
const write=(url,html)=>{const file=path.join(root,url,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,html.replace(/[ \t]+$/gm,''));};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const pageStyle=`<style>.consolidated-page{max-width:1120px;margin:0 auto;padding:30px 24px;line-height:1.85}.consolidated-page h2{font-size:25px;margin:30px 0 14px}.consolidated-page h3{font-size:19px;margin:0 0 10px}.consolidated-page .home-groups{display:grid;grid-template-columns:1fr 1fr;gap:20px}.consolidated-page .home-group{padding:18px;border-top:3px solid #b7892c;background:#fff7e6}.consolidated-page .home-group:nth-child(4n+2){background:#eef2fa;border-color:#526f96}.consolidated-page .home-group:nth-child(4n+3){background:#edf7f3;border-color:#438d80}.consolidated-page .home-group:nth-child(4n+4){background:#fff3ed;border-color:#b64d37}.directory-list{list-style:none;padding:0}.directory-list li{padding:12px 0;border-bottom:1px solid #d6c6ab;display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:space-between}.directory-list small{color:#586b70}.directory-nav{display:flex;flex-wrap:wrap;gap:18px}.consolidated-page input[type=search]{width:100%;padding:14px;font-size:16px;border:1px solid #ab9980}@media(max-width:680px){.consolidated-page{padding:22px 16px}.consolidated-page .home-groups{grid-template-columns:1fr}}</style>`;
function render(title,url,body){return pageShell({title,path:url,lang:'zh-Hant',locale:'zh',description:title+'｜海外督導 OTC 中文資料與服務。',body:pageStyle+require('../content/academic-subpage.cjs')(title,body)});}
for(const [slug,p] of Object.entries(require('../content/chinese-core-pages.cjs')))write('zh/'+slug,render(p.title,'/zh/'+slug+'/',p.body));
const items=require('../content/legacy-site-directory.json');
const groups={learning:'課程、升學與國家',tools:'學習工具',publishing:'出版與書籍',institutions:'機構與專業服務'};
let body='<p>按主題查閱課程、工具、出版及服務。已有中文內容的項目直接進入中文頁；其餘提供中文自動翻譯入口並保留原頁。自動翻譯可能因地區或服務狀態受限。</p><nav class="directory-nav">'+Object.entries(groups).map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')+'</nav><p><label>篩選目錄<input type="search" id="directory-filter" placeholder="輸入課程、學校或服務名稱"></label></p>';
for(const [id,label] of Object.entries(groups))body+=`<section id="${id}"><h2>${label}</h2><ul class="directory-list">`+items.filter(x=>x.group===id).map(x=>{const url=x.chinese||'https://translate.google.com/translate?sl=auto&tl=zh-TW&u='+encodeURIComponent('https://overseasuk.com'+x.path);return `<li data-directory-row><a href="${escape(url)}">${escape(x.label)}</a><small>${x.chinese?'中文內容／學習工具':'中文自動翻譯'} · <a data-original-page href="${escape(x.path)}">原頁</a></small></li>`}).join('')+'</ul></section>';
body+=`<script>document.getElementById('directory-filter').addEventListener('input',function(){const q=this.value.trim().toLowerCase();document.querySelectorAll('[data-directory-row]').forEach(row=>{row.hidden=!row.textContent.toLowerCase().includes(q);if(row.hidden)row.style.display='none';else row.style.display='';});});</script>`;
write('zh/site-directory',render('全站內容目錄','/zh/site-directory/',body));
// Build a Chinese search from the existing maintained public index.
const search=fs.readFileSync(path.join(root,'search/index.html'),'utf8');
const raw=JSON.parse(search.match(/<script type="application\/json" id="search-data">([\s\S]*?)<\/script>/)[1]);
const map=new Map(items.map(x=>[x.path,x]));
raw.sort((a,b)=>Number(b.url.startsWith('/zh/'))-Number(a.url.startsWith('/zh/')));
const data=raw.map(x=>{if(x.url.startsWith('/zh/'))return {...x,type:'中文資料'};const equivalent=path.join(root,'zh',x.url,'index.html');if(fs.existsSync(equivalent)){const html=fs.readFileSync(equivalent,'utf8');const title=html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]*>/g,'')||x.title;const desc=html.match(/name="description" content="([^"]*)"/)?.[1]||'查看相關資料與服務。';return {...x,type:'中文資料',title,desc,url:'/zh'+x.url};}const item=map.get(x.url);return item?{...x,type:'資料',title:item.label,desc:item.chinese?'查看'+item.label+'的資料與服務。':'提供中文自動翻譯，保留原頁內容。',url:item.chinese||'https://translate.google.com/translate?sl=auto&tl=zh-TW&u='+encodeURIComponent('https://overseasuk.com'+item.path)}:x;});
const seen=new Set();const unique=data.filter(x=>{if(seen.has(x.url))return false;seen.add(x.url);return true;});
let searchBody=search.slice(search.indexOf('<section class="band">'),search.indexOf('<footer'));
searchBody=searchBody.replace(/<script type="application\/json" id="search-data">[\s\S]*?<\/script>/,'<script type="application/json" id="search-data">'+JSON.stringify(unique).replaceAll('<','\\u003c')+'</script>');
for(const [a,b] of [['Search keyword','搜尋關鍵字'],['Try: Level 8, Business Management, appeal, UCBELT, CSCS, Marketing...','輸入課程、國家、服務或書名……'],[' result(s) for "',' 筆結果："'],['No matching results. Try another keyword.','未找到符合的結果，請試試其他關鍵字。'],['Browse all searchable records or enter a keyword.','輸入關鍵字搜尋課程、服務及出版物。'],[' searchable records',' 筆可搜尋資料'],['No matching results','未找到符合的結果'],['Try a course title, qualification level, institution, country, app name, visa topic or keyword such as OTHM, nursing, Australia, top-up or UCBELT.','請輸入課程、資格級別、院校、國家、工具名稱或主題，例如 OTHM、護理、澳洲或 UCBELT。'],['Open page','開啟頁面'],['View page','查看頁面']])searchBody=searchBody.replaceAll(a,b);
write('zh/search',render('全站搜尋','/zh/search/',searchBody));
const home=require('../content/chinese-home.cjs')();write('',home);write('zh',home.replace('href="styles.css?','href="../styles.css?'));
// Keep all Chinese page headers on the Chinese navigation; each translation opens that same page.
let changed=0;
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name==='index.html'){const s=fs.readFileSync(p,'utf8');const url='/'+path.relative(root,path.dirname(p)).split(path.sep).join('/')+'/';const n=s.replace(/<header class="site-header">[\s\S]*?<\/header>/,nav('', 'zh',url).trim().replace(/[ \t]+$/gm,''));if(n!==s){fs.writeFileSync(p,n);changed++;}}}}
walk(path.join(root,'zh'));console.log('Chinese pages synchronised:',changed,'; legacy directory:',items.length);

// Prefer existing Chinese equivalents, then offer explicitly labelled translation for legacy articles.
function localizeLinks(html){return html.replace(/<a\b([^>]*?)href="(\/[^"#?]*\/)([^" ]*)"([^>]*)>/g,(whole,before,url,suffix,after)=>{
 if(url==='/'||url.startsWith('/zh/')||/data-original-page/.test(whole))return whole;
 const item=map.get(url);
 const zh='/zh'+url;
 let target=fs.existsSync(path.join(root,zh,'index.html'))?zh:item?.chinese;
 if(!target&&item&&!['tools','portals'].includes(item.group))target='https://translate.google.com/translate?sl=auto&tl=zh-TW&u='+encodeURIComponent('https://overseasuk.com'+url+suffix);
 if(!target)return whole;
 const translated=target.startsWith('https://translate.google.com/');
 return '<a'+before+'href="'+escape(target+(translated?'':suffix))+'"'+after+(translated?' title="中文自動翻譯；原文保留"':'')+'>';
 });}
function syncLinks(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())syncLinks(p);else if(e.name==='index.html'){const old=fs.readFileSync(p,'utf8');const next=localizeLinks(old);if(next!==old)fs.writeFileSync(p,next);}}}
syncLinks(path.join(root,'zh'));
for(const item of items.filter(x=>x.chinese===x.path&&!['tools','portals'].includes(x.group))){const p=path.join(root,item.path,'index.html');const s=fs.readFileSync(p,'utf8');fs.writeFileSync(p,localizeLinks(s.replace(/<header class="site-header">[\s\S]*?<\/header>/,nav('','zh',item.path).trim().replace(/[ \t]+$/gm,''))));}

// Register consolidated pages after the main generator has written its sitemap.
const sitemapPath=path.join(root,'sitemap.xml');
if(fs.existsSync(sitemapPath)){
 let xml=fs.readFileSync(sitemapPath,'utf8');
 for(const slug of [...Object.keys(require('../content/chinese-core-pages.cjs')),'search','site-directory']){
  const url='https://overseasuk.com/zh/'+slug+'/';
  if(!xml.includes('<loc>'+url+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>'+url+'</loc></url>\n</urlset>');
 }
 fs.writeFileSync(sitemapPath,xml);
}

// Preserve the Work & Travel hub after directory and navigation regeneration.
require("./render-work-travel.cjs");

// Preserve nursing subject, service and country links during Chinese maintenance.
require('./render-nursing.cjs');

// Preserve veterinary certification pages and vocational-training navigation.
require("./render-veterinary-training.cjs");
