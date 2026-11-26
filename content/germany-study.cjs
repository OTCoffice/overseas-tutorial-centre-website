// Country page: the Austria page's shared shell and native academic hero,
// with the shared directory renderer instead of long-form sections.
const {pageShell}=require('../site');
const academic=require('./academic-subpage.cjs');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{
 const a=require('./germany-study.json');
 const hero=academic(a.name,'').split('<section class="band service-review-strip">')[0]
  .replace('<div class="service-hero-layout">','<div>')
  .replace(/<h2>[\s\S]*?<\/h2>/,'')
  .replace(/<p class="hero-sub">[\s\S]*?<\/p>/,`<p class="hero-sub">${a.hero}</p>`)
  .replace(/<div class="actions">[\s\S]*?<\/div>/,'')
  .replace(/<p>海外督導 OTC[\s\S]*?<\/p>/,'')
  .replace(/<aside[\s\S]*?<\/aside>/,'');
 const contact=`<section class="band"><h2>預約諮詢</h2><p>提供學歷、專業、語言程度、入學年份與預算，了解免費代辦是否適用；其他申請輔導依委託範圍書面報價，院校及第三方費用另付。</p><p><a class="btn btn-primary" href="https://wa.me/447947991572?text=%E5%BE%B7%E5%9C%8B%E7%95%99%E5%AD%B8%E8%AB%AE%E8%A9%A2">預約諮詢</a> <a href="mailto:office@overseasuk.com?subject=Germany%20study%20enquiry">電郵諮詢</a> · <a href="/zh/services/ai-tool-shop/">申請工具</a> · <a href="/zh/countries/">國家目錄</a></p></section>`;
 return pageShell({title:a.titleZh,path:a.path,current:'services',lang:'zh-Hant',locale:'zh',description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:hero+renderCardDirectory(a.directory)+contact});
};
