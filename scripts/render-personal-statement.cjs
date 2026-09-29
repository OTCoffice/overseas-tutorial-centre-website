#!/usr/bin/env node
const fs=require('fs'),{execFileSync}=require('child_process');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/personal-statement-zh.json','--service','content/personal-statement-en.json'],{stdio:'inherit'});
for(const [file,locale] of [['services/index.html','en'],['zh/services/index.html','zh'],['university-applications/index.html','en']]){
 let html=fs.readFileSync(file,'utf8');
 if(html.includes('data-personal-statement-link'))html=html.replace(/<section[^>]*data-personal-statement-link[^>]*>[\s\S]*?<\/section>/,require('../content/personal-statement-links.cjs')(locale));
 else html=html.replace('<footer',require('../content/personal-statement-links.cjs')(locale)+'<footer');
 fs.writeFileSync(file,html);
}
