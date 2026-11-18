const {pageShell}=require('../site');
const a=require('./university-interview-coaching.json');
module.exports=()=>pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'大學入學面試與補充申請輔導：限時錄影、寫作練習、模擬回饋',shareAtBottom:true,bodyClass:'admissions-interview-page',body:`
<style>
.admissions-interview-page .page-hero .band,.admissions-interview-page .interview-content{max-width:1080px}
.admissions-interview-page .interview-content{padding-top:8px;padding-bottom:28px}
.admissions-interview-page .interview-content section{margin:22px 0}
.admissions-interview-page .interview-content p,.admissions-interview-page .interview-content li{font-size:15px;line-height:1.9}
.admissions-interview-page .interview-content .table-wrap{overflow-x:auto}
.admissions-interview-page .interview-content table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.85}
.admissions-interview-page .interview-content th,.admissions-interview-page .interview-content td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #d8d4ca}
.admissions-interview-page .interview-content thead{background:#edf1f4}
.admissions-interview-page .interview-related{border-top:1px solid #c8b89a;padding-top:14px;display:flex;gap:12px 24px;flex-wrap:wrap}
.admissions-interview-page .interview-related h2{font-size:14px;margin:0}
@media(max-width:700px){.admissions-interview-page .services-hero h1{font-size:30px}.admissions-interview-page .interview-content p,.admissions-interview-page .interview-content li{font-size:14px}.admissions-interview-page .interview-content th,.admissions-interview-page .interview-content td{padding:9px 6px}}
</style>
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">海外督導雙語世界 · 招生部</div><h1>大學入學面試與補充申請輔導</h1><p class="hero-sub">整理經歷、練習限時作答，透過模擬與回饋改善表達。</p><div class="actions"><a class="btn btn-primary" href="#interview-contact">查詢輔導</a></div></div></section>
<main class="band interview-content">${a.sections.map((s,i)=>`<section id="${s.id}"><h2 class="zh-herald-section-head" data-num="${String(i+1).padStart(2,'0')}">${s.heading}</h2>${s.paragraphs.map(p=>/^<(?:ol|div)/.test(p)?p:'<p>'+p+'</p>').join('')}</section>`).join('')}
<nav class="interview-related" aria-label="相關服務"><h2>相關服務</h2><a href="/zh/services/personal-statement-support/">個人陳述與申請文書</a><a href="/zh/services/university-application-advisory/">大學申請</a></nav></main>`}).replace('<div class="footer-col footer-contact">','<div class="footer-col footer-contact" id="interview-contact">');
