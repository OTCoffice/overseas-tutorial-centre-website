const {pageShell}=require('../site');
const a=require('./ssci-academic-supervision.json');
module.exports=()=>{
const intro='你好，我想諮詢 SSCI 學術督導。\n學科與研究題目：\n稿件階段與字數：\n投稿目的與目標期刊：\n希望協助的部分及期限：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('SSCI 學術督導｜諮詢')+'&body='+encodeURIComponent(intro);
const cover=a.shareImageZh+'?'+a.socialImageVersion;
const btn=`<div class="phd-actions"><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a><a class="phd-email" href="${email}">電郵諮詢 →</a></div>`;
const heroBtn=`<div class="actions"><a class="btn btn-primary" href="${wa}">諮詢學術督導</a><a class="btn btn-secondary" href="${email}">電郵諮詢</a></div>`;
return pageShell({title:a.titleZh,current:'services',bodyClass:'ssci-page',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:'SSCI 學術督導：選題、選刊、修改與返修',body:`
<style>
.ssci-page .service-hero-panel a::before,.ssci-page .service-review-strip a::before{display:none}
.ssci-page .services-hero .service-hero-layout>div>p:last-child{font-size:14px;line-height:1.7}
@media(max-width:900px){.ssci-page .service-hero-layout{grid-template-columns:1fr}.ssci-page .service-hero-panel,.ssci-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.ssci-page .service-hero-panel a{min-height:84px}.ssci-page .service-hero-panel a strong,.ssci-page .service-hero-panel a span{writing-mode:horizontal-tb}.ssci-page .phd-row{grid-template-columns:1fr;gap:10px}}
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

/* Restrained academic hierarchy: coloured section rules, warm paper and fine type. */
.ssci-page .phd-intro{background:#f0eee6;padding:24px 26px;border-top-color:#233f54}
.ssci-page .phd-intro .phd-kicker{color:#8b692b}
.ssci-page .phd-row{--section-ink:#987126;--section-wash:#f5efe1;gap:28px;padding:28px 0;border-bottom:1px solid #dcd7cc}
.ssci-page .phd-row:nth-of-type(4n+2){--section-ink:#9b782d;--section-wash:#f7f0df}
.ssci-page .phd-row:nth-of-type(4n+3){--section-ink:#46668b;--section-wash:#ebf0f6}
.ssci-page .phd-row:nth-of-type(4n){--section-ink:#3f7b72;--section-wash:#eaf2ee}
.ssci-page .phd-row:nth-of-type(4n+1){--section-ink:#a15443;--section-wash:#f6ece6}
.ssci-page .phd-label{align-self:start;padding:14px 15px;border-top:2px solid var(--section-ink);background:var(--section-wash);gap:12px}
.ssci-page .phd-label span{color:var(--section-ink);font-size:12px;letter-spacing:.06em}
.ssci-page .phd-label h2{font-size:17px;letter-spacing:.03em}
.ssci-page .phd-text{padding:7px 0 0}
.ssci-page .phd-text p{line-height:2;font-size:15px}
.ssci-page .phd-text p+p{margin-top:15px}
.ssci-page .phd-text a{color:#365f74;text-decoration:underline;text-decoration-color:#abbfc3;text-underline-offset:4px}
.ssci-page .phd-steps{list-style:none;counter-reset:steps;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 22px}
.ssci-page .phd-steps li{counter-increment:steps;padding:14px 16px;background:#f1f3ee;border-top:2px solid #7b9485;font-size:14px;line-height:1.9}
.ssci-page .phd-steps li:nth-child(2){background:#edf1f6;border-color:#7189a9}.ssci-page .phd-steps li:nth-child(3){background:#f6efe1;border-color:#b29760}.ssci-page .phd-steps li:nth-child(4){background:#f5ebe6;border-color:#b27b6b}
.ssci-page .phd-steps strong{margin-bottom:6px;font-size:15px}.ssci-page .phd-steps strong::before{content:counter(steps,decimal-leading-zero) '  ';font:12px Georgia,serif;color:#7c755d;margin-right:6px}
.ssci-page .phd-table-wrap{margin:0 0 16px;border:1px solid #d5d7d2}
.ssci-page .phd-layout thead{background:#233e50;color:#fff}.ssci-page .phd-layout tbody tr:nth-child(odd){background:#f1f3ee}.ssci-page .phd-layout tbody tr:nth-child(even){background:#faf7ef}.ssci-page .phd-layout tbody th{color:#294b60;white-space:normal;min-width:100px}
.ssci-page #section-9 .phd-text p{padding:0 0 16px;border-bottom:1px solid #dfd9cd}.ssci-page #section-9 .phd-text p:last-child{border-bottom:0;padding-bottom:0}.ssci-page #section-9 .phd-text strong{display:block;color:#28475c;font-size:16px;margin-bottom:6px}
.ssci-page .phd-contact{background:#eaf0ee;border-left-color:#65897c;padding:27px 30px}.ssci-page .phd-references{border-top:1px solid #c5ba9f;padding-top:24px}.ssci-page .phd-references h2{color:#6d5934}
@media(max-width:700px){.ssci-page .phd-row{gap:12px;padding:22px 0}.ssci-page .phd-label{padding:11px 14px}.ssci-page .phd-text{padding:0 2px}.ssci-page .phd-text p{font-size:14px}.ssci-page .phd-steps{grid-template-columns:1fr;gap:12px}.ssci-page .phd-intro,.ssci-page .phd-contact{padding:20px}.ssci-page .phd-layout th,.ssci-page .phd-layout td{padding:10px 9px}}
</style>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · ACADEMIC SUPERVISION</div><h1>SSCI 學術督導</h1><h2>選題・選刊・論文修改・投稿返修</h2><p class="hero-sub">從研究問題到審稿回覆，按稿件階段提供指導，協助你完成有依據、表達清楚的研究文章。</p>${heroBtn}<p>海外督導 OTC｜學術督導與編譯服務</p></div><aside class="service-hero-panel"><a href="#section-2"><strong>選題研究</strong><span>問題、文獻與方法</span></a><a href="#section-3"><strong>期刊選擇</strong><span>範圍、收錄與要求</span></a><a href="#section-4"><strong>論文修改</strong><span>論證、結構與表達</span></a><a href="#section-5"><strong>投稿返修</strong><span>材料與審稿回覆</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="#section-1"><b>WHO</b><strong>服務對象</strong><span>學生與獨立研究者</span></a><a href="#section-6"><b>ARTS</b><strong>電影與人文</strong><span>主題與期刊契合度</span></a><a href="#section-8"><b>FEES</b><strong>服務費用</strong><span>按稿件及範圍報價</span></a><a href="#consultation"><b>ASK</b><strong>學術諮詢</strong><span>題目、階段與期限</span></a></section>
<div class="phd-layout">
<section class="phd-intro"><div><p class="phd-kicker">研究與寫作</p><h2>服務內容</h2><p>可選單項稿件回饋，或約定階段性的研究與投稿支援。</p></div><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a></section>
${a.sections.map((s,i)=>`<section class="phd-row" id="section-${i+1}"><div class="phd-label"><span>${String(i+1).padStart(2,'0')}</span><h2>${s.heading}</h2></div><div class="phd-text">${(s.paragraphs||[]).map(p=>`<p>${p}</p>`).join('')}${s.steps?`<ol class="phd-steps">${s.steps.map(x=>`<li><strong>${x.title}</strong><span>${x.text}</span></li>`).join('')}</ol>`:''}${s.fees?`<div class="phd-table-wrap"><table><caption class="sr-only">學術督導服務及報價方式</caption><thead><tr><th scope="col">方案</th><th scope="col">服務內容</th><th scope="col">報價方式</th></tr></thead><tbody>${s.fees.map(x=>`<tr><th scope="row">${x.name}</th><td>${x.scope}</td><td>${x.basis}</td></tr>`).join('')}</tbody></table></div>`:''}${(s.after||[]).map(p=>`<p>${p}</p>`).join('')}</div></section>`).join('')}
<section class="phd-contact" id="consultation"><h2>學術諮詢</h2><p>請說明學科、研究題目、稿件階段、字數、目標期刊與期限。首次諮詢可先提供摘要或目錄，移除姓名、訪談對象及未獲准分享的資料；完整稿件於確認範圍及保密安排後提供。</p>${btn}<p class="phd-contact-meta">海外督導 OTC｜學術督導與編譯服務<br>WhatsApp +44 7947 991572 · <a href="${email}">office@overseasuk.com</a></p></section>
<section class="phd-references"><div><h2>官方資料與相關服務</h2><ul><li><a href="https://mjl.clarivate.com/">Clarivate：期刊收錄查詢</a></li><li><a href="https://authorservices.taylorandfrancis.com/editorial-policies/">Taylor &amp; Francis：作者與編輯政策</a></li><li><a href="https://authorservices.taylorandfrancis.com/publishing-your-research/making-your-submission/">Taylor &amp; Francis：投稿準備</a></li></ul><p><a href="/zh/services/phd-application-coaching/">博士申請陪跑</a> · <a href="/zh/subject-planning/">學科規劃</a> · <a href="/zh/services/">服務導覽台</a></p><p>WeChat：overseasus · 資料核對：2026 年 10 月 1 日<br>期刊收錄與投稿要求以當期官方資訊為準。</p></div><figure class="phd-cover"><img src="${cover}" width="1200" height="630" alt="SSCI 學術督導：選題、選刊、修改與返修" loading="lazy"><figcaption>海外督導 OTC · 學術督導</figcaption></figure></section>
</div>`});};
