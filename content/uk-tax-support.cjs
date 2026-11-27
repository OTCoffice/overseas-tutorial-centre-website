const {pageShell}=require('../site');
const a=require('./uk-tax-support.json'),frame=require('./academic-subpage.cjs');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{
 let hero=frame(a.name,'').replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,'').replace(/<main[\s\S]*?<\/main>/,'').replace('<p>海外督導 OTC｜海圖規劃・留學諮詢</p>','').replace('教育服務與雙語學習','收入文件・中英翻譯・會計師溝通').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','協助整理英國與海外收入資料，跟進會計師所需文件。');
 hero=hero.replace(/<div class="actions">[\s\S]*?<\/div>/,'').replace(/<aside class="service-hero-panel">[\s\S]*?<\/aside>/,'');
 const related='<section class="band"><h2>相關服務</h2><p><a href="/zh/services/language-context-studio/">中英翻譯</a> · <a href="/zh/cross-border-property-management/">跨境房產管理</a></p></section>';

 return pageShell({title:a.titleZh,path:a.path,lang:'zh-Hant',locale:'zh',current:'services',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:'英國報稅協助：收入文件、中英翻譯、會計師溝通',body:require('./compact-academic-style.cjs')('uk-tax-page')+hero+renderCardDirectory(a.directory)+related,bodyClass:'uk-tax-page'}).replace('<div class="footer-col footer-contact">', '<div class="footer-col footer-contact"><p><a class="btn btn-primary" href="https://wa.me/447947991572?text='+encodeURIComponent('你好，我想諮詢英國報稅協助。抵英時間：\n報稅年度：\n收入地區及類型：\n是否已繳稅：\n是否已有會計師：\n期限：')+'">諮詢報稅協助</a></p>');
};
