const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),a=require('../content/poland-veterinary-sggw.json');
const out=path.join(root,a.path,'index.html');
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,require('../content/poland-veterinary-sggw.cjs')().replace(/[ \t]+$/gm,''));
