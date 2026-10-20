const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'zh/services/us-eb1a-niw-research-support/index.html');
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,require('../content/us-eb1a-niw-research-support.cjs')());
