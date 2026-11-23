const {pageShell}=require('../site');
const compactStyle=require('./compact-academic-style.cjs');
const a=require('./international-application-support.json');

module.exports=()=>{
  const css=compactStyle('international-application-support-page')+`<style>
  .international-application-support-page .services-hero{background:linear-gradient(90deg,#11263b 0%,#17374b 65%,#842d32 65%,#842d32 85%,#bc9839 85%,#bc9839 90%,#11263b 90%)}
  .international-application-support-page .services-hero .hero-sub{max-width:620px;color:#faf6eb!important}
  .international-application-support-page .services-hero h1{max-width:720px}
  .international-application-support-page .support-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 28px}
  .international-application-support-page .support-item h3{font-size:16px;color:#183747;margin:8px 0}
  @media(max-width:700px){.international-application-support-page .support-grid{grid-template-columns:1fr}.international-application-support-page .services-hero{background:linear-gradient(90deg,#11263b 0%,#17374b 94%,#842d32 94%,#842d32 97%,#bc9839 97%)}}
  </style>`;
  const body=css+`<section class="page-hero services-hero"><div class="band">
    <div class="eyebrow">OTC · 海外督導</div><h1>${a.name}</h1>
    <p class="hero-sub">${a.intro}</p>
  </div></section><main class="consolidated-page">
    <nav aria-label="麵包屑"><a href="/zh/services/">服務總覽</a> / ${a.name}</nav>
    ${a.bodyHtml}
  </main>`;
  return pageShell({title:a.titleZh,description:a.summaryZh,path:a.path,lang:'zh-Hant',locale:'zh',current:'services',bodyClass:'international-application-support-page',shareAtBottom:true,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.name,body})
    .replace('<div class="footer-col footer-contact">','<div class="footer-col footer-contact" id="service-contact">');
};
