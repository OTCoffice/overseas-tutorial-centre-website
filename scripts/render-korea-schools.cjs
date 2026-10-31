const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
process.chdir(root);
const data=require('../content/korea-schools.json'),schools=Array.isArray(data)?data:data.schools;
const html=require('../content/korea-school-directory.cjs')(data);
let page=fs.readFileSync('content/korea-country-template.html','utf8').replaceAll('{{SCHOOL_COUNT}}',String(schools.length)).replace('{{KOREA_SCHOOLS}}',html).replace('{{HERO_APPLY}}','https://wa.me/447947991572?text='+encodeURIComponent('我想委託 OTC 辦理韓國中小學申請。孩子目前年級：；希望入學時間：；意向學校／地區：。'));
if(/\{\{[A-Z_]+\}\}/.test(page))throw Error('Unresolved template token');
fs.writeFileSync('zh/countries/south-korea/index.html',page);
fs.copyFileSync('content/korea-school-directory.css','assets/korea-school-directory.css');
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
for(const file of ['search/index.html','zh/search/index.html']){let s=fs.readFileSync(file,'utf8'),m=s.match(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/);if(!m)throw Error('Search data missing');let list=JSON.parse(m[2]);for(const row of [{type:'中文資料',title:'韓國留學入口｜中小學與大學',url:'/zh/countries/south-korea/',desc:`${schools.length} 所中小學／校區，地區、學段、入學資格與官方招生資料；大學與語言留學。`},{type:'服務',title:'韓國中小學申請｜OTC 代辦',url:'/zh/countries/south-korea/#korea-apply',desc:'委託代辦、申請文件、家長授權、學校遞交與補件、住宿及簽證資料。'}]){const i=list.findIndex(x=>x.url===row.url);if(i>=0)list[i]=row;else list.unshift(row);}fs.writeFileSync(file,s.replace(m[0],m[1]+JSON.stringify(list).replaceAll('<','\\u003c')+m[3]));}
console.log('Rendered Korea schools, application materials, service entry and search records.');
