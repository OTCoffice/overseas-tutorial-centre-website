const {pageShell}=require('../site');
const a=require('./korea-exchange-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>選課學分</h2><p class="hero-sub">從交換與訪問申請，到選課、學分認可及行前安排，按母校與接收校要求準備。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
