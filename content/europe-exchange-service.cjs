const {pageShell}=require('../site');
const a=require('./europe-exchange-service.json');
module.exports=()=>{
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:a.titleZh,shareAtBottom:true,bodyClass:'europe-exchange-page',body:`
<style>
.europe-exchange-page .page-hero .band,.europe-exchange-page .exchange-content{max-width:1040px;margin-inline:auto}
.europe-exchange-page .page-hero .hero-sub{max-width:60em}
.europe-exchange-page .exchange-content{padding-block:24px 32px}
.europe-exchange-page .exchange-content section+section{margin-top:24px}
.europe-exchange-page .exchange-content p,.europe-exchange-page .exchange-content li{line-height:1.78;overflow-wrap:anywhere}
.europe-exchange-page .exchange-related{border-top:1px solid var(--line);margin-top:24px;padding-top:14px}
.europe-exchange-page .exchange-related h2{font-size:14px;margin:0 0 10px}
.europe-exchange-page .exchange-related a{display:inline-block;margin:0 20px 6px 0}
</style>
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">海外督導雙語世界 · 學生服務部</div><h1>歐洲交換陪跑</h1><p class="hero-sub">交換選擇、選課與學分、文件準備，以及交換期間的課業與碩士申請安排。</p></div></section>
<main class="band exchange-content">${a.sections.map((s,i)=>`<section id="${s.id}"><h2 class="zh-herald-section-head" data-num="${String(i+1).padStart(2,'0')}">${s.heading}</h2>${s.paragraphs.map(p=>p.startsWith('<ol>')?p:'<p>'+p+'</p>').join('')}</section>`).join('')}
<nav class="exchange-related" aria-label="相關服務"><h2>相關服務</h2><a href="/zh/course-selection-alliance/">選課聯盟</a><a href="/zh/services/change-of-major/">轉專業與轉學院</a><a href="/zh/services/affordable-study-abroad/#independent-study-abroad">交換與訪問生直申</a></nav>
</main>`});
};
