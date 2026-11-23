// Targeted rebuild: service, search/sitemap, overview and its owning category.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,[path.join(__dirname,'render-herald.cjs'),'--service','content/international-application-support.json'],{cwd:root,stdio:'inherit'});
const desk=require('../content/service-desk.cjs');
for(const [category,file] of [[undefined,'zh/services/index.html'],['learning','zh/services/categories/learning/index.html']]){
  fs.writeFileSync(path.join(root,file),desk(category).replace(/[ \t]+$/gm,''));
}
