const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const w=require('../content/work-travel-alliance.cjs');
const args=process.argv.slice(2);
if(args.length&&(args.length!==2||args[0]!=='--country'||!w.countries.some(c=>c.id===args[1])))throw Error('Usage: node scripts/render-work-travel.cjs [--country COUNTRY_ID]');
const country=args[1];
const selected=country?w.countries.filter(c=>c.id===country):w.countries;
const records=[...(country?[]:[{url:w.hub,title:w.brand+'｜海外督導 OTC',desc:'按國家與地區查閱青年打工度假、青年流動、暑期工作交流及延伸旅居資料。',html:w.renderHub()}]),...selected.map(c=>{
 const japan=c.id==='japan'?require('../content/japan-working-holiday.cjs'):null;
 return {url:w.route(c),title:japan?japan.title:c.name+(c.programs.some(p=>['wh','youth','summer'].includes(p.type))?'打工度假與青年交流':'延伸旅居')+'｜海外督導 OTC',desc:japan?japan.description:c.programs.map(p=>p.title).join('、')+'：資格、材料、流程、費用與官方來源。',html:w.renderCountry(c)};
})];
for(const r of records){const file=path.join(root,r.url,'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,r.html.replace(/[ \t]+$/gm,''));}
for(const file of ['search/index.html','zh/search/index.html']){const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;const m=s.match(re);if(!m)throw Error('Search index missing: '+file);const entries=JSON.parse(m[2]);for(const r of records){const e={type:'中文資料',title:r.title,url:r.url,desc:r.desc};const i=entries.findIndex(x=>x.url===r.url);if(i<0)entries.unshift(e);else entries[i]=e;}fs.writeFileSync(p,s.replace(re,(_,a,b,c)=>a+JSON.stringify(entries).replaceAll('<','\\u003c')+c));}
const sitemap=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sitemap,'utf8');for(const r of records)if(!xml.includes('<loc>https://overseasuk.com'+r.url+'</loc>'))xml=xml.replace('</urlset>','  <url><loc>https://overseasuk.com'+r.url+'</loc></url>\n</urlset>');fs.writeFileSync(sitemap,xml);
if(!country){
const link='<nav class="band" aria-label="打工度假聯盟" style="padding-top:14px;font-size:14px"><a href="'+w.hub+'">打工度假聯盟</a> · <a href="'+w.ca+'">加拿大 IEC</a> · <a href="'+w.hub+'#destinations">其他目的地</a></nav>';
for(const url of ['/zh/us-swt-work-travel-support/','/zh/australia-job-search-coaching/']){const p=path.join(root,url,'index.html');let s=fs.readFileSync(p,'utf8');s=s.replace(/<nav class="band" aria-label="(?:工遊聯盟|打工度假聯盟)"[\s\S]*?<\/nav>/,'');s=s.replace('</header>','</header>'+link);fs.writeFileSync(p,s);}
fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
fs.writeFileSync(path.join(root,'index.html'),require('../content/chinese-home.cjs')().replace(/[ \t]+$/gm,''));
}

const directory=path.join(root,'zh/site-directory/index.html');let d=fs.readFileSync(directory,'utf8');if(!country)d=d.replaceAll('工遊聯盟','打工度假聯盟');for(const r of records){if(!d.includes('data-work-travel="'+r.url+'"')&&!d.includes('href="'+r.url+'"'))d=d.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row data-work-travel="'+r.url+'"><a href="'+r.url+'">'+r.title+'</a><small>中文內容</small></li>');else d=d.replace(new RegExp('(<a href="'+r.url+'">)[^<]*(</a>)','g'),(_,a,b)=>a+r.title+b);}fs.writeFileSync(directory,d);
console.log('Rendered '+records.length+' alliance pages and updated search, directory and sitemap'+(country?' (country only).':', plus shared navigation.'));
