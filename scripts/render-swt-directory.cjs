const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
fs.writeFileSync(path.join(root,'zh/us-swt-work-travel-support/index.html'),require('../content/us-swt-service.cjs')());
console.log('Rendered SWT card directory from canonical source.');
