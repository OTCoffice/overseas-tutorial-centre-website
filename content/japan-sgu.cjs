const {pageShell}=require('../site');
const a=require('./japan-sgu.json'),frame=require('./academic-subpage.cjs');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{
 let hero=frame(a.name,'').replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,'').replace(/<main[\s\S]*?<\/main>/,'').replace('<p>海外督導 OTC｜海圖規劃・留學諮詢</p>','').replace('教育服務與雙語學習','本科及修士申請').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','日本英語授課學位：選校、英文文書、研究計畫與申請安排。');
 hero=hero.replace(/<div class="actions">[\s\S]*?<\/div>/,'').replace(/<aside class="service-hero-panel">[\s\S]*?<\/aside>/,'');
 return pageShell({title:a.titleZh,path:a.path,lang:'zh-Hant',locale:'zh',current:'services',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:'日本 SGU 英語授課本科及修士申請',body:require('./compact-academic-style.cjs')('japan-sgu-page')+hero+renderCardDirectory(a.directory),bodyClass:'japan-sgu-page'});
};
