const {pageShell}=require('../site');
const a=require('./us-visa-support.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>類別材料</h2><p class="hero-sub">依赴美活動查類別、備材料，了解預約面試、續簽補件與入境安排。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
