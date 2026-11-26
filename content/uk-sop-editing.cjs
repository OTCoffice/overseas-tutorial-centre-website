const {pageShell}=require('../site');
const a=require('./uk-sop-editing.json');
const {renderCardDirectory}=require('./card-directory.cjs');
function render(){return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1><h2>英碩文書</h2><p class="hero-sub">從申請動機、經歷證據到課程契合，按題目審閱英文初稿，提供有理由的修改回饋。</p></div></div></div></section>
${renderCardDirectory(a.directory)}`});}
module.exports=render;
module.exports.card='<section class="band compact-band"><h2>SOP修改</h2><p>英碩英文初稿的結構、證據、課程契合與表達修改。</p><a class="button" href="/zh/services/uk-sop-editing/">查看服務 →</a></section>';
