const {pageShell}=require('../site');
const a=require('./us-visa-support.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>旅費材料</h2><p class="hero-sub">按真實赴美目的準備行程、資金與表格，清楚說明境外聯繫及返程安排。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
