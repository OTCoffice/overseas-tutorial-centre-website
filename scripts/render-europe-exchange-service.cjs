const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/europe-exchange-service.json'],{cwd:root,stdio:'inherit'});
const a=require('../content/europe-exchange-service.json');
const file=path.join(root,'zh/search/index.html');
const html=fs.readFileSync(file,'utf8');
const block=/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
if(!block.test(html))throw new Error('Missing Chinese search data');
fs.writeFileSync(file,html.replace(block,(_,open,json,close)=>{
 const entries=JSON.parse(json);
 const entry={type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh};
 const i=entries.findIndex(item=>item.url===a.path);
 if(i<0)entries.unshift(entry);else entries[i]={...entries[i],...entry};
 return open+JSON.stringify(entries).replace(/</g,'\\u003c')+close;
}));
