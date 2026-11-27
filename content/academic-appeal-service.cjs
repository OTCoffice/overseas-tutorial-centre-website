const {pageShell}=require('../site');
const a=require('./academic-appeal-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:a.name,body:`<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">海外督導雙語世界 · 學生服務部</div><h1>${a.name}</h1><p class="hero-sub">閱讀校規、整理證據與陳述，按期限準備學業申訴。</p></div></div></div></section>${renderCardDirectory(a.directory)}`});
