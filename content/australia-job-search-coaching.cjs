const fs=require('fs'),vm=require('vm');
const {pageShell}=require('../site');
module.exports=()=>{
  const src=fs.readFileSync(require.resolve('../generate-site.js'),'utf8');
  const start=src.indexOf('function australiaJobSearchCoachingPage(');
  const end=src.indexOf('\nconst australiaJobSearchCoaching =',start);
  const context={pageShell,encodeURIComponent};
  vm.runInNewContext(src.slice(start,end)+'\nresult=australiaJobSearchCoachingPage("zh");',context);
  return context.result;
};
