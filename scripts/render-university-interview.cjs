const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),a=require('../content/university-interview-coaching.json');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/university-interview-coaching.json'],{cwd:root,stdio:'inherit'});
const searchFile=path.join(root,'zh/search/index.html');let search=fs.readFileSync(searchFile,'utf8');
search=search.replace(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/,(_,before,json,after)=>{
 const entries=JSON.parse(json).filter(e=>e.url!==a.path);entries.unshift({type:'Page',title:a.titleZh,url:a.path,desc:a.summaryZh});return before+JSON.stringify(entries).replace(/</g,'\\u003c')+after;
});fs.writeFileSync(searchFile,search);
// Keep existing manually added directory material; insert only the new service row.
const file=path.join(root,'zh/services/categories/study/index.html');let html=fs.readFileSync(file,'utf8');
if(!html.includes('href="'+a.path+'"')){
 const marker=/(<a class="desk-row" href="\/zh\/services\/university-application-advisory\/"[\s\S]*?<\/a>)/;
 if(!marker.test(html))throw Error('University application directory row missing');
 html=html.replace(marker,'$1\n<a class="desk-row" href="'+a.path+'"><strong>大學入學面試與補充申請輔導</strong><span>Kira 限時錄影、書面補充申請、經歷整理及模擬回饋。</span><i aria-hidden="true">↗</i></a>');fs.writeFileSync(file,html);
}
