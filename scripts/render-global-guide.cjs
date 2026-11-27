const {execFileSync}=require('child_process'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/global-guide.json'],{cwd:root,stdio:'inherit'});
fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
fs.writeFileSync(path.join(root,'zh/services/categories/study/index.html'),require('../content/service-desk.cjs')('study'));
const home=path.join(root,'index.html');
fs.writeFileSync(home,fs.readFileSync(home,'utf8').replace('<a class="cd-p" href="/zh/site-directory/#tools">學習工具 →</a>','<a class="cd-p" href="/zh/global-guide/">全球出國指南 →</a><a class="cd-s" href="/zh/site-directory/#tools">學習工具 →</a>'));
