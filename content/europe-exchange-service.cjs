const {pageShell}=require('../site');
const a=require('./europe-exchange-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>選課升碩</h2><p class="hero-sub">按兩校要求準備交換與訪問，兼顧學分、均分、實習及碩士申請。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
