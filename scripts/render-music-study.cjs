// Render the music page and its directory entries without rebuilding the site.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');
const a=require('../content/music-study-planning.json');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/music-study-planning.json'],{cwd:root,stdio:'inherit'});
for(const [route,render] of [['/zh/subject-planning/',require('../content/subject-study-hub.cjs').render],['/zh/services/',require('../content/service-desk.cjs')]]){
 fs.writeFileSync(path.join(root,route,'index.html'),render().replace(/[ \t]+$/gm,''));
}
const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
const file=path.join(root,'zh/search/index.html');let s=fs.readFileSync(file,'utf8');
const m=s.match(re);if(!m)throw Error('Missing Chinese search data');
const rows=JSON.parse(m[2]),entry={type:'學科規劃',title:a.titleZh,url:a.path,desc:a.summaryZh};
const i=rows.findIndex(x=>x.url===a.path);if(i<0)rows.unshift(entry);else rows[i]=entry;
fs.writeFileSync(file,s.replace(re,(_,x,y,z)=>x+JSON.stringify(rows).replaceAll('<','\\u003c')+z));
const dir=path.join(root,'zh/site-directory/index.html');s=fs.readFileSync(dir,'utf8');
if(!s.includes('href="'+a.path+'"')){
 const marker='<ul class="directory-list">';if(!s.includes(marker))throw Error('Directory marker changed');
 s=s.replace(marker,marker+`<li data-directory-row><a href="${a.path}">${a.titleZh}</a><small>中文內容</small></li>`);
 fs.writeFileSync(dir,s);
}
console.log('Updated music planning, subject hub, service desk and Chinese directory/search.');
