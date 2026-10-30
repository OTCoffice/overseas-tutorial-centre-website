const fs=require('fs'),{execFileSync}=require('child_process');
execFileSync(process.execPath,['scripts/render-herald.cjs','--service','content/germany-freelance-service.json'],{stdio:'inherit'});
fs.writeFileSync('zh/services/index.html',require('../content/service-desk.cjs')());
