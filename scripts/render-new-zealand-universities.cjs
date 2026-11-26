// Targeted rebuild: the NZ directory and its eight school pages only.
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
for(const r of require('../content/new-zealand-universities.cjs').records()){
 const target=path.join(root,r.url,'index.html');
 fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,r.html);console.log(r.url);
}
