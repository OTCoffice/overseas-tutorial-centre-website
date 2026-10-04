const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const {pageShell}=require('../site');
const {schools,base,page}=require('../content/australia-language-school-pages.cjs');
for(const s of schools){
 const route=base+s.slug+'/';const out=path.join(root,route,'index.html');
 fs.mkdirSync(path.dirname(out),{recursive:true});
 fs.writeFileSync(out,pageShell({title:`${s.name}｜澳洲語校免費代辦｜海外督導 OTC`,current:'services',locale:'zh',lang:'zh-Hant',path:route,description:`${s.name}課程、校區、住宿與免費代辦申請。提交資料、申請 offer letter，再比較費用與入學條件。`,image:s.image,imageWidth:s.imageWidth,imageHeight:s.imageHeight,imageAlt:s.imageAlt,body:page(s)}));
}
const sitemap=path.join(root,'sitemap.xml');let xml=fs.readFileSync(sitemap,'utf8');for(const s of schools){const url='https://overseasuk.com'+base+s.slug+'/';if(!xml.includes('<loc>'+url+'</loc>'))xml=xml.replace('</urlset>',`  <url><loc>${url}</loc></url>\n</urlset>`);}fs.writeFileSync(sitemap,xml);
const search=path.join(root,'search/index.html');let html=fs.readFileSync(search,'utf8');const m=html.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);if(!m)throw Error('Search data missing');let items=JSON.parse(m[2]);for(const s of schools){const url=base+s.slug+'/';items=items.filter(x=>x.url!==url);items.unshift({type:'Page',title:s.name+'｜澳洲語校免費代辦',url,desc:s.cities.join('、')+'；課程、住宿、申請 offer letter 與免費代辦'});}fs.writeFileSync(search,html.replace(m[0],m[1]+JSON.stringify(items)+m[3]));
console.log('Rendered 4 Australian language school pages; updated search and sitemap.');
