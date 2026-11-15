const fs=require('node:fs'),path=require('node:path');
const {pageShell}=require('../site');
module.exports=()=>{
 const a=require('./us-eb3-other-workers.json');
 const body=require('./academic-subpage.cjs')('美國 EB-3 非技術工人移民',fs.readFileSync(path.join(__dirname,'us-eb3-other-workers.html'),'utf8'))
 .replace('教育服務與雙語學習','僱主擔保 · 申請資格 · 排期與費用')
 .replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',a.summaryZh);
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:440,imageAlt:a.titleZh,body});
};
