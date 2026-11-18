// Targeted source-backed route; preserve unrelated pages and index entries.
const fs=require('node:fs'),{execFileSync}=require('node:child_process');
const a=require('../content/japan-welder-australia.json');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/japan-welder-australia.json'],{cwd:require('node:path').resolve(__dirname,'..'),stdio:'inherit'});
for(const file of ['search/index.html','zh/search/index.html']){
 let s=fs.readFileSync(file,'utf8');s=s.replace(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,(_,b,j,e)=>{let rows=JSON.parse(j).filter(x=>x.url!==a.path);rows.unshift({type:'Insight',title:a.titleZh,url:a.path,desc:a.summaryZh});return b+JSON.stringify(rows).replace(/</g,'\\u003c')+e});fs.writeFileSync(file,s);
}
for(const file of ['zh/insights/index.html','zh/insights/settlement/index.html']){
 let s=fs.readFileSync(file,'utf8');if(s.includes('href="'+a.path+'"'))continue;
 const item='<a href="'+a.path+'"><b>NEW</b><span>'+a.date+'</span><strong>'+a.titleZh+'</strong><em>日本就業 · 澳洲職業評估</em></a>';
 const marker=file.includes('/settlement/')?'<div class="zh-review-column-list">':'<div class="zh-review-prelude">';
 if(!s.includes(marker))throw Error('Index marker missing: '+file);
 s=s.replace(marker,file.includes('/settlement/')?marker+item:'<div class="zh-review-column-list">'+item+'</div>'+marker);fs.writeFileSync(file,s);
}
