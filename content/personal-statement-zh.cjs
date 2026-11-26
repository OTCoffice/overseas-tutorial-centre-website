const {pageShell}=require('../site');
const a=require('./personal-statement-zh.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>文書準備</h2><p class="hero-sub">按課程要求整理真實素材、審閱初稿及改善表達，讓每段內容回答申請問題。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});
