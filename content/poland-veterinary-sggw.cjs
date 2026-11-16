const fs=require('node:fs'),path=require('node:path');
const {pageShell}=require('../site');
module.exports=()=>{
 const a=require('./poland-veterinary-sggw.json');
 const body=require('./academic-subpage.cjs')('波蘭英語獸醫｜SGGW',fs.readFileSync(path.join(__dirname,'poland-veterinary-sggw.html'),'utf8'))
 .replace('教育服務與雙語學習','華沙生命科學大學 · 課程與執業註冊')
 .replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',a.summaryZh)
 .replace('class="consolidated-page"','class="band service-review-body poland-vet-content"');
 const style='<style>.poland-vet-content{max-width:1100px;margin:auto;padding:24px 20px}.poland-vet-content h2{margin:26px 0 12px;border-bottom:1px solid #c7a25c;padding-bottom:8px}.poland-vet-content p,.poland-vet-content li{line-height:1.8}.poland-vet-content table{width:100%;border-collapse:collapse}.poland-vet-content th,.poland-vet-content td{padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #d9e2e9}.poland-vet-content a{overflow-wrap:anywhere}@media(max-width:700px){.poland-vet-page .service-hero-layout{grid-template-columns:minmax(0,1fr)!important}.poland-vet-page .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))!important}.poland-vet-page .service-hero-panel a{min-width:0;overflow-wrap:anywhere}.poland-vet-content{padding:16px}.poland-vet-content th,.poland-vet-content td{padding:7px;overflow-wrap:anywhere}}</style>';
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,bodyClass:'poland-vet-page',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:440,imageAlt:a.titleZh,body:style+body});
};
