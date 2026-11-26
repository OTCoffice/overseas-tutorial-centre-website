const {pageShell}=require('../site');
const a=require('./australia-electrician-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>培訓考牌</h2><p class="hero-sub">從現有背景出發，確認課程、技能評估、工作經驗與牌照，再計算完整時間及成本。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
