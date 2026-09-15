const {pageShell}=require('../site');
const a=require('./australia-release-service.json');
module.exports=()=>{
const article='/zh/insights/australia-transfer-release-guide/';
const intro='你好，我想了解澳洲轉校與 Release 申請協調。\n原／新院校及專業：\n語言是否打包主課：\n主課有否開讀及 CoE 狀態：\n新校 offer／開學日期：\n最急的截止日：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro),email='mailto:office@overseasuk.com?subject='+encodeURIComponent('澳洲轉校與 Release 申請協調｜初步評估')+'&body='+encodeURIComponent(intro),cover=a.shareImageZh+'?'+a.socialImageVersion;
return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:a.titleZh,body:`<style>
.release-service-hero .service-hero-layout{display:block;max-width:100%}
.release-service-hero h1{font-size:clamp(1.8rem,4vw,2.8rem);line-height:1.4;max-width:24em}
.release-service-hero h2{font-size:1.2rem;line-height:1.6}
.release-service-hero p,.release-service-body p{font-size:1rem!important;line-height:1.9!important}
.release-service-nav a::before,.release-service-body .service-guide-card::before,.release-service-body .zh-herald-section-head::before{display:none!important}
.release-service-nav a{padding:18px!important}.release-service-nav a span{font-size:14px!important;line-height:1.6!important}
.release-service-body .service-herald-grid{grid-template-columns:minmax(0,1fr) 280px;align-items:start}
.release-service-body .service-guide-card{min-height:0;padding:20px!important}
.release-service-body .service-herald-side{align-self:start;display:block}
.release-service-body .service-guide-card,.release-service-body .service-guide-note,.release-service-body .service-side-links{margin-bottom:16px}
.release-service-body .zh-herald-section-head{padding-left:0!important;line-height:1.6}
.release-service-body .service-herald-main section{margin-bottom:28px}
@media(max-width:760px){.release-service-body .service-herald-grid{display:block}.release-service-nav{display:grid;grid-template-columns:1fr 1fr}.release-service-body .service-herald-side{margin-top:24px}.release-service-body p{overflow-wrap:anywhere}}
</style>
<section class="page-hero services-hero release-service-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC AUSTRALIA · 澳洲轉校服務台</div><h1>澳洲轉校與 Release 申請協調</h1><h2>學籍核對 · 文件整理 · 兩校聯絡</h2><p class="hero-sub">按你的課程組合及學籍狀態，整理轉校申請材料與兩校時間表。</p></div></div></div></section>
<section class="band service-review-strip release-service-nav"><a href="${wa}"><strong>初步評估</strong><span>先說院校、專業及入學期限</span></a><a href="${article}"><strong>選擇指南</strong><span>語言與主課的限制怎樣核對</span></a><a href="#scope"><strong>服務與費用</strong><span>來訊了解需求，正式服務先報價</span></a><a href="#start"><strong>準備資料</strong><span>五項背景，未確定可留空</span></a></section>
<section class="band compact-band service-review-body release-service-body"><div class="section-head compact-head service-review-head"><span>轉校服務</span><strong>按階段跟進</strong><p>先確認校方規則，再確認任務、負責人和截止日。</p></div><div class="service-herald-grid"><main class="service-herald-main" style="min-width:0"><figure class="zh-herald-share-cover" style="margin:0 0 24px"><img src="${cover}" width="1200" height="630" alt="${a.titleZh}" style="display:block;width:100%;height:auto" fetchpriority="high"></figure>${a.sections.map((s,i)=>`<section id="${i===4?'scope':'section-'+(i+1)}"><h2 class="zh-herald-section-head" data-num="${String(i+1).padStart(2,'0')}">${s.heading}</h2>${s.paragraphs.map(p=>'<p>'+p+'</p>').join('')}</section>`).join('')}<p>更新：2026-09-15。個別院校要求以當期官方資料及書面回覆為準。</p></main><aside class="service-guide-side service-herald-side" id="start"><div class="service-guide-card is-urgent"><span>開始評估</span><strong>先說明五項背景</strong><p>原／新院校與專業；語言是否打包；主課有否開讀；CoE 狀態；新校開學期限。</p><a href="${wa}">WhatsApp 說明轉校需求</a></div><div class="service-guide-card"><span>已有對話</span><strong>直接回覆原私訊</strong><p>已在 Threads 聯絡，直接在原對話補充即可；未確定的部分可留空，初次不用傳證件。</p><a href="${email}">Email 傳送背景</a></div><div class="service-guide-card"><span>提供的文件</span><strong>四份規劃文件</strong><p>學籍時間線、材料清單、申請說明，以及兩校回覆與截止日紀錄。</p><a href="#section-6">查看工作流程</a></div><div class="service-guide-note"><b>服務確認</b><p>正式協調的期間、文件、跟進方式與費用先確認，再開始服務。</p></div><div class="service-side-links"><span>查讀與聯絡</span><a href="${article}">澳洲轉校完整指南</a><a href="/application-service-standards/">申請服務準則</a><a href="${wa}">WhatsApp +44 7947 991572</a><a href="${email}">office@overseasuk.com</a></div><div class="service-guide-note"><b>微信</b><p>overseasus</p></div></aside></div><a class="zh-hero-service-button" href="/zh/services/">返回服務導覽台 →</a></section>`});
};
