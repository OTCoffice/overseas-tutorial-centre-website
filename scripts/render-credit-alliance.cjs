const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),page=require('../content/credit-alliance.cjs');
fs.writeFileSync(path.join(root,page.route,'index.html'),page());
fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
for(const name of ['search/index.html','zh/search/index.html']){
 const file=path.join(root,name),s=fs.readFileSync(file,'utf8');
 const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=s.match(re);
 if(!m)throw Error('Missing search data');
 const rows=JSON.parse(m[2]),entry={type:'中文服務',title:page.title,url:page.route,desc:page.description};
 const i=rows.findIndex(r=>r.url===page.route);if(i<0)rows.push(entry);else rows[i]=entry;
 fs.writeFileSync(file,s.replace(re,(_,a,b,c)=>a+JSON.stringify(rows).replaceAll('<','\\u003c')+c));
}
console.log('Updated credit alliance, service desk and search.');
