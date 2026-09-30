const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const w=require('../content/work-travel-alliance.cjs');
const records=[{url:w.hub,title:'工遊聯盟｜海外督導 OTC',desc:'加拿大、美國、澳洲、英國、荷蘭與紐西蘭的工遊項目、陪跑服務、流程及費用。',html:w.renderHub()},{url:w.ca,title:'加拿大打工度假｜海外督導 OTC',desc:'IEC Working Holiday 申請資格、入池時間、文件、費用與行前陪跑。',html:w.renderCanada()}];
for(const r of records){const file=path.join(root,r.url,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,r.html.replace(/[ \t]+$/gm,''));}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search index missing: '+file);const entries=JSON.parse(m[2]);for(const r of records){const e={type:'中文資料',title:r.title,url:r.url,desc:r.desc};const i=entries.findIndex(x=>x.url===r.url);if(i<0)entries.unshift(e);else entries[i]=e;}fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(entries).replaceAll('<','\\u003c')+c));}
const sitemap=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sitemap,'utf8');for(const r of records)if(!xml.includes('<loc>https://overseasuk.com'+r.url+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+r.url+'</loc></url>\n</urlset>');fs.writeFileSync(sitemap,xml);
const link='<nav class="band" aria-label="工遊聯盟" style="padding-top:14px;font-size:14px"><a href="'+w.hub+'">工遊聯盟</a> · <a href="'+w.ca+'">加拿大 IEC</a> · <a href="'+w.hub+'#destinations">其他目的地</a></nav>';
for(const url of ['/zh/us-swt-work-travel-support/','/zh/australia-job-search-coaching/']){const p=path.join(root,url,'index.html');let s=fs.readFileSync(p,'utf8');s=s.replace(/<nav class="band" aria-label="工遊聯盟"[\s\S]*?<\/nav>/,'');s=s.replace('</header>','</header>'+link);fs.writeFileSync(p,s);}
fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
fs.writeFileSync(path.join(root,'index.html'),require('../content/chinese-home.cjs')().replace(/[ \t]+$/gm,''));
console.log('Rendered Work & Travel hub, Canada service, related navigation and search.');

const directory=path.join(root,'zh/site-directory/index.html');let d=fs.readFileSync(directory,'utf8');for(const r of records){if(!d.includes('data-work-travel="'+r.url+'"')&&!d.includes('href="'+r.url+'"'))d=d.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row data-work-travel="'+r.url+'"><a href="'+r.url+'">'+r.title+'</a><small>中文內容</small></li>');}fs.writeFileSync(directory,d);
