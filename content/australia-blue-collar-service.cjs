const {pageShell}=require('../site');
const a=require('./australia-blue-collar-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>技職規劃</h2><p class="hero-sub">按職業與現有背景比較課程、技能評估、考牌及工作準備，再計算時間和成本。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
