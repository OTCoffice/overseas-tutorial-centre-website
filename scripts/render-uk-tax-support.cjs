const {execFileSync}=require('child_process'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/uk-tax-support.json'],{cwd:root,stdio:'inherit'});
fs.writeFileSync(path.join(root,'zh/services/index.html'),require('../content/service-desk.cjs')());
