const {pageShell}=require('../site');
const a=require('./korea-undergraduate-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{const cover=a.shareImageZh+'?'+a.socialImageVersion;return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>選校申請</h2><p class="hero-sub">比較新生與插班途徑，分清語言、預錄取及正式入學條件，按當期簡章準備申請。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});};
