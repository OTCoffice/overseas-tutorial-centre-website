const {pageShell}=require('../site');
const a=require('./internship-coaching.json');
module.exports=()=>{
const intro='你好，我想諮詢實習陪跑。\n專業及年級／畢業時間：\n目標國家及實習方向：\n可開始日期、週數及每週時間：\n現有經驗及語言程度：\n希望協助的部分及預算：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('實習陪跑｜立即諮詢')+'&body='+encodeURIComponent(intro);
const cover=a.shareImageZh+'?'+a.socialImageVersion;
const btn=`<div class="phd-actions"><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a><a class="phd-email" href="${email}">電郵諮詢 →</a></div>`;
const heroBtn=`<div class="actions"><a class="btn btn-primary" href="${wa}">立即諮詢｜規劃實習</a><a class="btn btn-secondary" href="${email}">電郵諮詢</a></div>`;
return pageShell({title:a.titleZh,current:'services',bodyClass:'internship-page',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:'實習陪跑：申請準備、面試與實習復盤',body:`
<style>
.internship-page .service-hero-panel a::before,.internship-page .service-review-strip a::before{display:none}
.internship-page .services-hero .service-hero-layout>div>p:last-child{font-size:14px;line-height:1.7}
@media(max-width:900px){.internship-page .service-hero-layout{grid-template-columns:1fr}.internship-page .service-hero-panel,.internship-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.internship-page .service-hero-panel a{min-height:84px}.internship-page .service-hero-panel a strong,.internship-page .service-hero-panel a span{writing-mode:horizontal-tb}.internship-page .phd-row{grid-template-columns:1fr;gap:10px}}
.phd-layout .phd-intro{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:26px 0;border-top:3px solid #263e4f;border-bottom:1px solid #cacbc5;margin-top:28px}
.phd-layout .phd-intro h2{font-size:28px;margin:0 0 10px;line-height:1.4}.phd-intro p{font-size:15px;margin:0;color:#43525b;line-height:1.8}.phd-intro .phd-kicker{font-size:12px;margin-bottom:8px;color:#8b7549}.phd-intro .phd-button{flex-shrink:0}
.phd-steps{margin:0;padding-left:22px}.phd-steps li{padding:0 0 14px 6px;font-size:15px;line-height:1.8}.phd-steps li:last-child{padding-bottom:0}.phd-steps strong{display:block;color:#263e4f}.phd-steps span{color:#43525b}
.phd-table-wrap{overflow-x:auto;margin:16px 0}.phd-layout table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.8}.phd-layout th,.phd-layout td{text-align:left;border-bottom:1px solid #d8d9d2;padding:12px 14px;vertical-align:top}.phd-layout thead{background:#eaece7}.phd-layout tbody th{white-space:nowrap;font-weight:600}.phd-layout .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
@media(max-width:700px){.phd-layout .phd-intro{align-items:flex-start;flex-direction:column}.phd-layout th,.phd-layout td{padding:10px 6px;font-size:12px}.phd-steps li{font-size:14px}}

.phd-layout{max-width:1040px;margin:0 auto;padding:0 32px 56px}
.phd-layout *{box-sizing:border-box}
.phd-kicker{font:11px/1.5 Arial,sans-serif;letter-spacing:.16em;color:#637077;margin:0 0 14px}

.phd-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.phd-button{display:inline-flex;align-items:center;gap:32px;background:#203c50;color:#fff!important;padding:12px 22px;text-decoration:none!important;font-size:15px;border-radius:2px}
.phd-button:hover{background:#34556a}.phd-email{font-size:14px;color:#324e60;text-underline-offset:5px}
.phd-layout a:focus-visible{outline:3px solid #a88a43;outline-offset:4px}

.phd-row{display:grid;grid-template-columns:210px minmax(0,1fr);gap:32px;padding:26px 0;border-bottom:1px solid #d8d9d2;scroll-margin-top:24px}
.phd-label{display:flex;gap:14px;align-items:baseline}.phd-label span{font:12px/1.5 Georgia,serif;color:#917d56}
.phd-layout .phd-label h2{font-size:18px;line-height:1.6;font-weight:600;margin:0;color:#263e4f}
.phd-text p{font-size:15px;line-height:1.95;margin:0 0 12px;color:#43525b}.phd-text p:last-child{margin-bottom:0}
.phd-text strong{font-weight:600}.phd-contact{margin-top:30px;padding:26px 30px;background:#eaece7;border-left:3px solid #8e7c55}
.phd-layout .phd-contact h2{font-family:"Noto Serif TC","Songti TC",serif;font-size:24px;margin:0 0 10px}.phd-contact p{font-size:14px;line-height:1.85;margin:0 0 16px}.phd-contact .phd-contact-meta{margin:16px 0 0;font-size:12px;color:#5b686d}
.phd-references{display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:36px;margin-top:30px;align-items:start}
.phd-layout .phd-references h2{font-size:16px;margin:0 0 10px}.phd-references p,.phd-references li{font-size:12px;line-height:1.85;color:#647078}.phd-references ul{padding-left:18px;margin:0}.phd-references a{color:#48616e}
.phd-cover{margin:0}.phd-cover img{display:block;width:100%;height:auto;border:1px solid #d7dbd6}.phd-cover figcaption{font-size:10px;margin-top:6px;color:#788083}
@media(max-width:700px){.phd-layout{padding:0 20px 36px}.phd-row{grid-template-columns:1fr;gap:10px;padding:22px 0}.phd-text p{font-size:14px}.phd-contact{padding:22px}.phd-references{grid-template-columns:1fr;gap:20px}.phd-cover{max-width:220px}}
</style>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · INTERNSHIP COACHING</div><h1>實習陪跑</h1><h2>申請準備・面試・實習復盤</h2><p class="hero-sub">協助選擇實習方向、準備申請、練習面試，並整理實習期間的經驗與成果。可按需要選擇服務。</p>${heroBtn}<p>海外督導 OTC｜海外就業與落地服務部</p></div><aside class="service-hero-panel"><a href="#section-2"><strong>申請準備</strong><span>履歷、求職信與面試</span></a><a href="#section-3"><strong>實習選擇</strong><span>任務、督導與項目比較</span></a><a href="#section-4"><strong>在崗復盤</strong><span>工作記錄與成果整理</span></a><a href="#section-7"><strong>服務費用</strong><span>按範圍與期限確認</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="#section-1"><b>WHO</b><strong>服務對象</strong><span>大學生與畢業生</span></a><a href="#section-5"><b>STUDY</b><strong>升學銜接</strong><span>經驗與學術準備</span></a><a href="#section-6"><b>PLAN</b><strong>服務流程</strong><span>諮詢、準備與結案</span></a><a href="#consultation"><b>ASK</b><strong>實習諮詢</strong><span>時間、方向與所需協助</span></a></section>
<div class="phd-layout">
<section class="phd-intro"><div><p class="phd-kicker">實習輔導</p><h2>服務內容</h2><p>從申請準備到實習復盤，按目前需要安排支援。</p></div><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a></section>
${a.sections.map((s,i)=>`<section class="phd-row" id="section-${i+1}"><div class="phd-label"><span>${String(i+1).padStart(2,'0')}</span><h2>${s.heading}</h2></div><div class="phd-text">${(s.paragraphs||[]).map(p=>`<p>${p}</p>`).join('')}${s.steps?`<ol class="phd-steps">${s.steps.map(x=>`<li><strong>${x.title}</strong><span>${x.text}</span></li>`).join('')}</ol>`:''}${s.fees?`<div class="phd-table-wrap"><table><caption class="sr-only">實習服務及報價方式</caption><thead><tr><th scope="col">方案</th><th scope="col">服務內容</th><th scope="col">報價方式</th></tr></thead><tbody>${s.fees.map(x=>`<tr><th scope="row">${x.name}</th><td>${x.scope}</td><td>${x.basis}</td></tr>`).join('')}</tbody></table></div>`:''}${(s.after||[]).map(p=>`<p>${p}</p>`).join('')}</div></section>`).join('')}
<section class="phd-contact" id="consultation"><h2>實習諮詢</h2><p>請說明專業與年級、實習方向、目標地點、可投入時間及希望協助的部分。未確定的項目可留空，初次諮詢毋須提供證件或公司機密。</p>${btn}<p class="phd-contact-meta">海外督導 OTC｜海外就業與落地服務部<br>WhatsApp +44 7947 991572 · <a href="${email}">office@overseasuk.com</a></p></section>
<section class="phd-references"><div><h2>相關服務</h2><p><a href="/zh/services/career-contract-signing-support/">職業簽約陪跑</a> · <a href="/zh/services/business-english-study-support/">商業英語陪跑</a> · <a href="/zh/services/">服務導覽台</a></p><p>海外就業與落地服務部｜Overseas Careers &amp; Settling-in Support<br>WeChat：overseasus · 更新：2026 年 10 月</p></div><figure class="phd-cover"><img src="${cover}" width="1200" height="630" alt="實習陪跑：申請準備、面試與實習復盤" loading="lazy"><figcaption>海外督導 OTC · 實習陪跑</figcaption></figure></section>
</div>`});};
