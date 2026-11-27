const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const a=require('../content/study-in-finland.json');
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s.replace(/[ \t]+$/gm,''));
write(a.path.slice(1)+'index.html',require('../content/study-in-finland.cjs')());
const entry={type:'服務',title:a.titleZh,url:a.path,desc:a.summaryZh};
for(const f of ['search/index.html','zh/search/index.html']){
 let s=fs.readFileSync(path.join(root,f),'utf8');
 s=s.replace(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,(_,h,data,t)=>{const rows=JSON.parse(data),i=rows.findIndex(x=>x.url===a.path);if(i<0)rows.unshift(entry);else rows[i]=entry;return h+JSON.stringify(rows).replaceAll('<','\\u003c')+t;});write(f,s);
}
const f='zh/site-directory/index.html';let s=fs.readFileSync(path.join(root,f),'utf8');
if(!s.includes('href="'+a.path+'"'))s=s.replace('<ul class="directory-list">','<ul class="directory-list"><li data-directory-row><a href="'+a.path+'">芬蘭留學</a><small>本科與碩士申請、語言規劃及畢業居留</small></li>');write(f,s);
const desk=require('../content/service-desk.cjs');
for(const f of ['zh/services/index.html','zh/services/categories/study/index.html']){
 const category=f.includes('/categories/')?'study':undefined;
 const re=/<main class="band desk-index">[\s\S]*?<\/main>/;
 let h=fs.readFileSync(path.join(root,f),'utf8'),m=desk(category).match(re);if(!m||!re.test(h))throw Error('Missing desk template');write(f,h.replace(re,()=>m[0]));
}
console.log('Rendered Finland page and discovery links.');
