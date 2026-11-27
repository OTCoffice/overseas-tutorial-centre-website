const {pageShell}=require('../site');
const a=require('./study-in-finland.json'),frame=require('./academic-subpage.cjs');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{
 let hero=frame(a.name,'').replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,'').replace(/<main[\s\S]*?<\/main>/,'').replace('<p>海外督導 OTC｜海圖規劃・留學諮詢</p>','').replace('教育服務與雙語學習','2027 本科及碩士申請｜畢業永居路線').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','海外督導雙語世界・招生部｜英語授課學位、留學預算及語言規劃。');
 hero=hero.replace(/<div class="actions">[\s\S]*?<\/div>/,'').replace(/<aside class="service-hero-panel">[\s\S]*?<\/aside>/,'');
 const related='<section class="band"><h2>相關服務</h2><p><a href="/zh/countries/nordic/">北歐留學</a> · <a href="/zh/universities/finland/">芬蘭院校</a> · <a href="/zh/services/university-application-advisory/">大學申請</a></p></section>';
 return pageShell({title:a.titleZh,path:a.path,lang:'zh-Hant',locale:'zh',current:'services',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:'芬蘭本科與碩士申請、語言規劃及畢業居留條件',body:require('./compact-academic-style.cjs')('finland-study-page')+hero+renderCardDirectory(a.directory)+related,bodyClass:'finland-study-page'});
};
