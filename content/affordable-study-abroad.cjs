const {pageShell}=require('../site');
const a=require('./affordable-study-abroad.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>預算規劃</h2><p class="hero-sub">先分清旅行、交流或升學，再按可用資金、資格與時間比較。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
