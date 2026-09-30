const {pageShell}=require('../site');
const a=require('./phd-application-coaching.json');
module.exports=()=>{
const intro='你好，我想諮詢申博陪跑。\n專業、學位及畢業年月：\n研究方向：\n研究／論文／項目經歷：\n目標國家及入學時間：\n語言程度及資助需要：\n目前最想解決的問題：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('申博陪跑｜立即諮詢')+'&body='+encodeURIComponent(intro);
const cover=a.shareImageZh+'?'+a.socialImageVersion;
const btn=`<div class="phd-actions"><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a><a class="phd-email" href="${email}">電郵諮詢 →</a></div>`;
const heroBtn=`<div class="actions"><a class="btn btn-primary" href="${wa}">立即諮詢｜開始規劃申博</a><a class="btn btn-secondary" href="${email}">電郵諮詢</a></div>`;
return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:'申博陪跑：研究方向、導師與資助、研究計劃及面試',body:`
<style>
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
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · PHD APPLICATION COACHING</div><h1>申博陪跑</h1><h2>博士申請與研究規劃</h2><p class="hero-sub">提供選校與導師、研究計劃、申請文書及面試輔導。可選單項服務或全程申請。</p>${heroBtn}<p>海外督導 OTC｜海圖規劃・留學諮詢</p></div><aside class="service-hero-panel"><a href="#section-1"><strong>選校與導師</strong><span>學術背景與研究方向</span></a><a href="#section-1"><strong>導師與資助</strong><span>核對項目和研究契合度</span></a><a href="#section-3"><strong>材料與面試</strong><span>研究計劃、履歷與表達</span></a><a href="#section-5"><strong>服務費用</strong><span>單項輔導與全程申請</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="${wa}"><b>ASK</b><strong>立即諮詢</strong><span>WhatsApp 聯絡海外督導</span></a><a href="#section-2"><b>PLAN</b><strong>申請文書</strong><span>研究計劃與學術履歷</span></a><a href="#section-6"><b>CAREER</b><strong>求職輔導</strong><span>履歷、面試與投遞跟進</span></a><a href="#consultation"><b>START</b><strong>申請諮詢</strong><span>學歷、研究方向與入學時間</span></a></section>
<div class="phd-layout">
<section class="phd-intro"><div><p class="phd-kicker">博士申請輔導</p><h2>服務內容</h2><p>選校、文書、面試及錄取跟進，按申請進度安排輔導。</p></div><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a></section>
${a.sections.map((s,i)=>`<section class="phd-row" id="section-${i+1}"><div class="phd-label"><span>${String(i+1).padStart(2,'0')}</span><h2>${s.heading}</h2></div><div class="phd-text">${(s.paragraphs||[]).map(p=>`<p>${p}</p>`).join('')}${s.steps?`<ol class="phd-steps">${s.steps.map(x=>`<li><strong>${x.title}</strong><span>${x.text}</span></li>`).join('')}</ol>`:''}${s.fees?`<div class="phd-table-wrap"><table><caption class="sr-only">博士申請服務及報價方式</caption><thead><tr><th scope="col">方案</th><th scope="col">服務內容</th><th scope="col">報價方式</th></tr></thead><tbody>${s.fees.map(x=>`<tr><th scope="row">${x.name}</th><td>${x.scope}</td><td>${x.basis}</td></tr>`).join('')}</tbody></table></div>`:''}${(s.after||[]).map(p=>`<p>${p}</p>`).join('')}</div></section>`).join('')}
<section class="phd-contact" id="consultation"><h2>申博諮詢</h2><p>請提供學歷與專業、研究方向、目標國家、入學時間及資助需要。未確定的項目可留空。</p>${btn}<p class="phd-contact-meta">海外督導 OTC｜海圖規劃・留學諮詢<br>WhatsApp +44 7947 991572 · <a href="${email}">office@overseasuk.com</a></p></section>
<section class="phd-references" id="sources"><div><h2>官方資料</h2><p>申請要求以院校公布為準。OTC 不保證錄取或獎學金。</p><ul><li><a href="https://www.ox.ac.uk/admissions/graduate/application-guide/starting-your-application/research-project-and-supervisor">Oxford｜研究項目與導師</a></li><li><a href="https://www.ox.ac.uk/admissions/graduate/application-guide/supporting-documents/research-proposal">Oxford｜研究計劃要求</a></li><li><a href="https://euraxess.ec.europa.eu/jobs">EURAXESS｜研究職位與資助</a></li></ul><p><a href="/application-service-standards/">申請服務準則</a> · <a href="/zh/services/">所有服務</a></p></div><figure class="phd-cover"><img src="${cover}" width="1200" height="630" alt="申博陪跑：研究方向、導師與資助、研究計劃及面試" loading="lazy"><figcaption>海外督導 OTC · 申博陪跑</figcaption></figure></section>
</div>`});};
