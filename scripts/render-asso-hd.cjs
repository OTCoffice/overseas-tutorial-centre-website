const fs=require('fs'),{execFileSync}=require('child_process');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/asso-hd-progression.json'],{stdio:'inherit'});
for(const file of ['zh/services/index.html','services/index.html','university-applications/index.html']){
 let html=fs.readFileSync(file,'utf8');
 if(!html.includes('data-asso-hd-link'))html=html.replace('<footer',require('../content/asso-hd-links.cjs')()+'<footer');
 fs.writeFileSync(file,html);
}
