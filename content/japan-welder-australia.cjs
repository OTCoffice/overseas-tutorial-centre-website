const {pageShell}=require('../site');
const a=require('./japan-welder-australia.json');
const {renderCardDirectory}=require('./card-directory.cjs');
module.exports=()=>pageShell({title:a.titleZh,current:'insights',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'日本焊工轉澳洲：日本就業、職業評估、州擔保',shareAtBottom:true,bodyClass:'admissions-interview-page',body:`
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
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">海外督導雙語世界 · 移居指南</div><h1>${a.titleZh}</h1><p class="hero-sub">${a.summaryZh}</p><div class="actions"><a class="btn btn-primary" href="#interview-contact">查詢服務</a></div></div></section>
<main class="band interview-content"><figure style="margin:20px 0"><img src="${a.shareImageZh}?${a.socialImageVersion}" width="1200" height="440" alt="${a.titleZh}" style="display:block;width:100%;height:auto"></figure><p>資料核查：2026年11月18日｜西澳當期細則待核</p>${renderCardDirectory(a.directory)}
<section><h2>官方來源</h2><ul>${a.resources.map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul></section><nav class="interview-related" aria-label="相關服務"><h2>相關服務</h2><a href="/zh/services/japan-employment-preparation/">日本就業準備</a><a href="/zh/insights/japan-specified-skilled-worker-guide/">日本特定技能指南</a></nav></main>`}).replace('<div class="footer-col footer-contact">','<div class="footer-col footer-contact" id="interview-contact">');
