const {pageShell}=require('../site');
const a=require('./change-of-major.json');
module.exports=()=>{
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'轉專業與轉學院：申請期限、先修課與學分抵免',shareAtBottom:true,bodyClass:'change-of-major-page',body:`
<style>
.change-of-major-page .page-hero .band,.change-of-major-page .change-major-content{max-width:1040px;margin-inline:auto}
.change-of-major-page .page-hero .hero-sub{max-width:60em}
.change-of-major-page .change-major-content{padding-block:24px 32px}
.change-of-major-page .change-major-content section+section{margin-top:24px}
.change-of-major-page .change-major-content p,.change-of-major-page .change-major-content li{line-height:1.78;overflow-wrap:anywhere}
.change-of-major-page .change-major-related{border-top:1px solid var(--line);margin-top:24px;padding-top:14px}
.change-of-major-page .change-major-related h2{font-size:14px;margin:0 0 10px}
.change-of-major-page .change-major-related a+a{margin-left:20px}
</style>
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">海外督導雙語世界 · 學生服務部</div><h1>轉專業與轉學院</h1><p class="hero-sub">校內轉科與跨學院申請：課程比較、先修課、學分抵免及剩餘修業安排。</p></div></section>
<main class="band change-major-content">${a.sections.map((s,i)=>`<section id="${s.id}"><h2 class="zh-herald-section-head" data-num="${String(i+1).padStart(2,'0')}">${s.heading}</h2>${s.paragraphs.map(p=>p.startsWith('<ol>')?p:'<p>'+p+'</p>').join('')}</section>`).join('')}
<nav class="change-major-related" aria-label="相關服務"><h2>相關服務</h2><a href="/zh/services/international-transfer/">國際大學轉學</a><a href="/zh/course-selection-alliance/">選課聯盟</a></nav>
</main>`});
};
