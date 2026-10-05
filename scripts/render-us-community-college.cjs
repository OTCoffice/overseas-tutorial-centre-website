const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),page=require('../content/us-community-college.cjs');
const output=path.join(root,page.route,'index.html');fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,page.render());
for(const file of ['search/index.html','zh/search/index.html']){
 const p=path.join(root,file),s=fs.readFileSync(p,'utf8'),re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);if(!m)throw Error('Missing search data');
 const rows=JSON.parse(m[2]),entry={type:'申請服務',title:page.title,url:page.route,desc:'美國公民、海外居住、國際生與非州居民學費；文件、選課及轉學支援。'},i=rows.findIndex(x=>x.url===page.route);if(i<0)rows.unshift(entry);else rows[i]=entry;
 fs.writeFileSync(p,s.replace(re,(_,h,b,t)=>h+JSON.stringify(rows).replaceAll('<','\\u003c')+t));
}
const map=path.join(root,'sitemap.xml');let xml=fs.readFileSync(map,'utf8');if(!xml.includes('https://overseasuk.com'+page.route))xml=xml.replace('</urlset>',`  <url><loc>https://overseasuk.com${page.route}</loc></url>\n</urlset>`);fs.writeFileSync(map,xml);
const dir=path.join(root,'zh/site-directory/index.html');let d=fs.readFileSync(dir,'utf8');if(!d.includes('href="'+page.route+'"'))d=d.replace('<ul class="directory-list">',`<ul class="directory-list"><li data-directory-row><a href="${page.route}">${page.title}</a><small>申請服務</small></li>`);fs.writeFileSync(dir,d);
for(const file of ['countries/united-states/index.html','zh/countries/index.html','zh/services/index.html']){
 const p=path.join(root,file);let s=fs.readFileSync(p,'utf8');if(!s.includes('href="'+page.route+'"')){
  const link=`<p class="band"><a href="${page.route}">${page.title}：身分、文件、學費與轉學</a></p>`;
  if(file==='zh/countries/index.html')s=s.replace('<a href="https://educationusa.state.gov/">',`<a href="${page.route}">社區大學申請協助</a><a href="https://educationusa.state.gov/">`);else if(s.includes('</main>'))s=s.replace('</main>',link+'</main>');else s=s.replace('<footer class="site-footer">',link+'<footer class="site-footer">');
  if(!s.includes('href="'+page.route+'"'))throw Error('Missing navigation insertion: '+file);
 }fs.writeFileSync(p,s);
}
console.log('Rendered US community college page and linked country, services, search and sitemap.');
