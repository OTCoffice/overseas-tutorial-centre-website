const fs=require('node:fs'),path=require('node:path');
const {pageShell}=require('../site');
module.exports=()=>{
 const a=require('./us-eb3-other-workers.json');
 const body=require('./academic-subpage.cjs')('美國 EB-3 非技術工人移民',fs.readFileSync(path.join(__dirname,'us-eb3-other-workers.html'),'utf8'))
 .replace('教育服務與雙語學習','僱主擔保 · 申請資格 · 排期與費用')
 .replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',a.summaryZh)
 .replace('class="consolidated-page"','class="band service-review-body eb3-content"');
 const style='<style>.eb3-content{max-width:1100px;margin:auto;padding:24px 20px}.eb3-content h2{margin:26px 0 12px;border-bottom:1px solid #c7a25c;padding-bottom:8px}.eb3-content p,.eb3-content li{line-height:1.8}.eb3-content table{width:100%;border-collapse:collapse}.eb3-content th,.eb3-content td{padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #d9e2e9}.eb3-content a{overflow-wrap:anywhere}@media(max-width:700px){.eb3-page .service-hero-layout{grid-template-columns:minmax(0,1fr)!important}.eb3-page .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))!important}.eb3-page .service-hero-panel a{min-width:0;overflow-wrap:anywhere}.eb3-content{padding:16px}.eb3-content th,.eb3-content td{padding:7px;overflow-wrap:anywhere}}</style>';
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,bodyClass:'eb3-page',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:440,imageAlt:a.titleZh,body:style+body});
};
