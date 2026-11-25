const {pageShell}=require('../site');
const a=require('./korea-undergraduate-service.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>{const cover=a.shareImageZh+'?'+a.socialImageVersion;return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'韓國本科申請',body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 韓國本科申請</div><h1>韓國本科申請</h1><h2>選校 · 語言要求 · 申請材料</h2><p class="hero-sub">分清 TOPIK、校內語言考試、免語言學部與預錄取，按學校當期簡章準備申請。</p></div></div></div></section>
<section class="band compact-band service-review-body"><main class="service-herald-main" style="min-width:0">${renderCardDirectory(a.directory)}<p>更新：2026-11-24。</p></main></section>`});};
