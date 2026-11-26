const {pageShell}=require('../site');
const a=require('./australia-welder-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>焊接評估</h2><p class="hero-sub">按實際工法與工作背景比較職訓、技能評估及工作要求，先確認時間與成本。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
