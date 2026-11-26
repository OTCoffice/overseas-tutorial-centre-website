// Targeted rebuild; keep both search indexes and the service directory current.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..'),a=require('../content/europe-exchange-service.json');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/europe-exchange-service.json'],{cwd:root,stdio:'inherit'});
const file=path.join(root,'zh/search/index.html'),h=fs.readFileSync(file,'utf8');
const re=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,m=h.match(re);
if(!m)throw Error('Chinese search data missing');
const rows=JSON.parse(m[2]),i=rows.findIndex(r=>r.url===a.path),entry={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh};
if(i<0)rows.unshift(entry);else rows[i]={...rows[i],...entry};
fs.writeFileSync(file,h.replace(re,(_,s,b,e)=>s+JSON.stringify(rows).replace(/</g,'\\u003c')+e));
const dir=path.join(root,'zh/site-directory/index.html');let d=fs.readFileSync(dir,'utf8');
if(!d.includes('href="'+a.path+'"')){
 const marker='<ul class="directory-list">';if(!d.includes(marker))throw Error('Directory list missing');
 d=d.replace(marker,marker+'<li data-directory-row><a href="'+a.path+'">'+a.name+'</a><small>中文內容</small></li>');
}
d=d.replace(new RegExp('(<a\\b[^>]*href="'+a.path+'"[^>]*>)[\\s\\S]*?(</a>)','g'),(_,p,q)=>p+a.name+q);
fs.writeFileSync(dir,d);
console.log('Updated Chinese search and exchange service directory.');
