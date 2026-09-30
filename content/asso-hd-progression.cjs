const {pageShell}=require('../site');
const a=require('./asso-hd-progression.json');
module.exports=()=>{
 const message='你好，我想問 Asso／HD 升大學。\n現讀院校及課程：\n目前年級：\n想入學的年份：\n想讀的方向／最想問的問題：';
 const wa='https://wa.me/447947991572?text='+encodeURIComponent(message);
 const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('Asso／HD 升大學｜學生服務部')+'&body='+encodeURIComponent(message);
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 return pageShell({title:a.titleZh,path:a.path,locale:'zh',lang:'zh-Hant',current:'services',description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:'Asso／HD 升大學：選科、轉科、Non-JUPAS 申請',body:`
<style>
.asso-page{overflow-wrap:anywhere}.asso-page section[id]{scroll-margin-top:24px}
.asso-page .services-hero .band{padding-top:18px;padding-bottom:20px}
.asso-page .service-hero-layout{grid-template-columns:minmax(0,1.05fr) minmax(0,1.6fr);gap:28px;align-items:stretch}
.asso-page .services-hero h1{font-size:28px;line-height:1.25;margin:8px 0}
.asso-page .services-hero h1 small{display:block;font-size:18px;color:#e4d1a0;margin-top:6px;font-weight:500}
.asso-page .services-hero .hero-sub{font-family:var(--font-ui);font-size:14px;line-height:1.75;margin:12px 0 0;max-width:42em}
.asso-page .service-hero-panel{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;counter-reset:psnav}
.asso-page .service-hero-panel a{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;min-height:0;padding:16px 12px;gap:6px;counter-increment:psnav}
.asso-page .service-hero-panel a:before{content:counter(psnav,decimal-leading-zero);position:static;width:auto;height:auto;border:0;background:none;font-size:12px;opacity:.65;margin-bottom:10px}
.asso-page .service-hero-panel strong{font-size:16px;line-height:1.4}.asso-page .service-hero-panel span{font-size:12px;line-height:1.5}
.asso-page .ps-contact-wrap{padding-top:0;padding-bottom:0}.asso-page .service-review-body{padding-top:18px;padding-bottom:28px}.ps-contact-bar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 24px;padding:13px 0;border-bottom:1px solid #c7bba6;font-family:var(--font-ui);font-size:13px}
.ps-contact-bar strong{margin-right:auto}.ps-contact-bar a{text-decoration:none}.ps-contact-bar a:hover{text-decoration:underline}
.asso-page .service-herald-grid{align-items:start;grid-template-columns:minmax(0,1fr) 280px}
.asso-page .service-herald-main{padding:24px 28px;min-width:0}.asso-page .service-herald-main>section{margin-bottom:24px}
.asso-page .service-herald-main p,.asso-page li{font-size:16px;line-height:1.8}.asso-page li{margin:8px 0}
.asso-page .service-guide-side{align-self:start;display:block;height:auto;padding:16px}.asso-page .service-guide-card,.asso-page .service-side-links{display:block;height:auto;min-height:0;margin-bottom:14px;padding:18px}
.asso-page .service-guide-card:before{display:none}.asso-page .service-guide-card a{display:block;margin-top:10px}.asso-page .service-side-links a{min-height:0;padding:10px}
.asso-page .ps-cover{margin:0 0 16px;border:1px solid #c7bba6}.ps-cover img{display:block;width:100%;height:auto}
.asso-page .actions{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}.asso-page .actions .btn{padding:12px 16px;font-size:14px}
.ps-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;border-top:1px solid #c7bba6;padding-top:12px}.ps-contact-grid h3{font-size:18px;margin:12px 0}.ps-contact-grid a{display:inline-block;padding:3px 0}
@media(max-width:1000px){.asso-page .service-hero-layout{grid-template-columns:1fr 1fr}.asso-page .service-hero-panel{grid-template-columns:1fr 1fr}.asso-page .service-hero-panel a{padding:12px}.asso-page .service-hero-panel a:before{display:none}}
@media(max-width:760px){.asso-page .service-hero-layout,.asso-page .service-herald-grid{grid-template-columns:1fr}.asso-page .service-hero-layout{gap:18px}.asso-page .service-hero-panel a{min-height:72px}.asso-page .services-hero h1{font-size:28px}.asso-page .service-herald-main{padding:20px 16px}.ps-contact-bar{gap:10px 18px}.ps-contact-bar strong{width:100%}.ps-contact-grid{grid-template-columns:1fr}.asso-page .ps-cover{max-width:340px}.asso-page .service-review-body{padding-top:16px}}
.asso-contact{display:grid;grid-template-columns:1fr 1fr;gap:20px;border-top:1px solid #c7bba6;padding-top:12px}.asso-social{display:flex;flex-wrap:wrap;gap:16px}.asso-contact a{display:inline-block;padding:4px 0}@media(max-width:760px){.asso-contact{grid-template-columns:1fr}}
</style>
<div class="asso-page"><section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">海外督導 OTC · 學生服務部</div><h1>Asso／HD 升大學</h1><p class="hero-sub">香港及海外本科申請。了解轉科條件、入學年級及語文要求，按已修科目和成績選擇課程。</p></div><nav class="service-hero-panel" aria-label="按問題查看"><a href="#change-subject"><strong>選科與轉科</strong><span>要看哪些條件</span></a><a href="#entry-year"><strong>入學年級</strong><span>Year 1／Senior Year</span></a><a href="#grades"><strong>GPA 與英文</strong><span>分開核對要求</span></a><a href="#support"><strong>申請協助</strong><span>選校、文書、面試</span></a></nav></div></div></section>
<div class="band ps-contact-wrap"><div class="ps-contact-bar"><strong>升學諮詢</strong><a href="${wa}">WhatsApp +44 7947 991572 ↗</a><a href="${email}">office@overseasuk.com ↗</a><a href="#contact">微信與其他聯絡方式 →</a></div></div><section class="band compact-band service-review-body"><div class="service-herald-grid"><main class="service-herald-main">${a.sections.map((s,i)=>`<section id="${s.id}"><h2 class="zh-herald-section-head" data-num="${String(i+1).padStart(2,'0')}">${s.heading}</h2>${s.html}</section>`).join('')}
<section id="contact"><h2 class="zh-herald-section-head">聯絡學生服務部</h2><div class="asso-contact"><div><p><a href="${wa}">WhatsApp +44 7947 991572 →</a><br><a href="tel:+447947991572">電話 +44 7947 991572</a><br><a href="${email}">office@overseasuk.com</a></p></div><div><p>微信：<strong style="user-select:all">overseasus</strong><br><small>複製微信號，在微信搜尋添加。</small></p><p>首次聯絡毋須證件；成績截圖可遮去姓名和學號。</p></div></div><p class="asso-social"><a href="https://www.threads.com/@overseas_uk_otc">Threads</a><a href="https://www.instagram.com/overseas_uk_otc/">Instagram</a><a href="https://www.facebook.com/overseasus">Facebook</a><a href="https://x.com/overseas_uk_otc">X</a></p><p><small>官方資料核對：${a.checked}。例子只供了解路線；請按目標入學年度重查院校最新要求。<a href="/application-service-standards/">申請服務準則</a></small></p></section></main><aside class="service-guide-side service-herald-side"><figure class="ps-cover"><img src="${cover}" width="1200" height="630" alt="Asso／HD 升大學：選科、轉科、Non-JUPAS 申請" fetchpriority="high"></figure><div class="service-guide-card"><span>學生服務部</span><strong>諮詢與服務安排</strong><p>現讀課程、年級、想入學的年份，以及想問甚麼。</p><a href="${wa}">WhatsApp 問升學 →</a><a href="${email}">電郵學生服務部 →</a><a href="#contact">微信及其他聯絡方式 →</a></div><div class="service-guide-card"><span>準備文書</span><strong>已有初稿，或還未開始？</strong><a href="/zh/services/personal-statement-support/">查看文書協助 →</a></div></aside></div></section></div>`});};
