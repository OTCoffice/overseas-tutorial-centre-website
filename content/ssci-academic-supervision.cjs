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
/* Wider reading area with a compact service information column. */
.ssci-page .phd-layout{max-width:1400px;padding:0 36px 56px}
.ssci-body-grid{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:36px;align-items:start}
.ssci-main-column{min-width:0}.ssci-page .phd-row{grid-template-columns:165px minmax(0,1fr);gap:24px}
.ssci-sidebar{padding-top:28px;display:grid;gap:18px}
.ssci-side-card{padding:21px 22px;border:1px solid #d8d0be;border-top:3px solid #a88130;background:#f7f0e1}
.ssci-side-card:nth-child(4n+2){background:#edf1f6;border-color:#cbd4df;border-top-color:#496889}
.ssci-side-card:nth-child(4n+3){background:#edf3ef;border-color:#cad9d1;border-top-color:#508579}
.ssci-side-card:nth-child(4n){background:#f7ece6;border-color:#decfc5;border-top-color:#a55b48}
.ssci-side-card .side-kicker{font:10px/1.5 Arial,sans-serif;letter-spacing:.16em;color:#8b6c31;margin:0 0 7px}
.ssci-side-card h2{font-size:20px;color:#243f52;margin:0 0 14px}.ssci-side-card h3{font-size:14px;color:#29485a;margin:15px 0 5px}
.ssci-side-card p,.ssci-side-card li,.ssci-side-card dd,.ssci-side-card dt{font-size:13px;line-height:1.85;color:#495b65}
.ssci-side-card p{margin:0 0 10px}.ssci-side-card p:last-child{margin-bottom:0}.ssci-side-card dl{margin:0}.ssci-side-card dt{font-weight:600;margin-top:12px;color:#29485a}.ssci-side-card dd{margin:3px 0 0;padding-bottom:12px;border-bottom:1px solid #d9d7cd}.ssci-side-card dd:last-child{border-bottom:0;padding-bottom:0}
.ssci-side-card a{color:#315c72;text-underline-offset:4px}.ssci-side-card .side-cta{display:block;text-align:center;margin-top:16px;padding:10px 12px;background:#254657;color:white;text-decoration:none}
.ssci-side-card ol{padding-left:18px;margin:0}.ssci-side-card li+li{margin-top:7px}
@media(max-width:1100px){.ssci-body-grid{grid-template-columns:minmax(0,1fr) 260px;gap:24px}.ssci-page .phd-row{grid-template-columns:1fr;gap:12px}.ssci-page .phd-label{padding:10px 14px}}
@media(max-width:850px){.ssci-body-grid{grid-template-columns:1fr}.ssci-sidebar{grid-template-columns:repeat(2,minmax(0,1fr));padding-top:0}.ssci-page .phd-layout{padding:0 24px 40px}}
@media(max-width:560px){.ssci-sidebar{grid-template-columns:1fr}.ssci-page .phd-layout{padding:0 18px 32px}.ssci-side-card{padding:18px 20px}}
/* Richer academic palette: saturated rules and headings, readable paper backgrounds. */
.ssci-page .phd-intro{background:#f4e4bc;border-top:4px solid #b58520;border-bottom-color:#d0b56e}
.ssci-page .phd-row{--section-ink:#a97812;--section-wash:#f4e3b3}
.ssci-page .phd-row:nth-of-type(4n+1){--section-ink:#a97812;--section-wash:#f4e3b3}
.ssci-page .phd-row:nth-of-type(4n+2){--section-ink:#355d91;--section-wash:#dce6f3}
.ssci-page .phd-row:nth-of-type(4n+3){--section-ink:#267a6e;--section-wash:#d7ece3}
.ssci-page .phd-row:nth-of-type(4n){--section-ink:#b44832;--section-wash:#f3dcd1}
.ssci-page .phd-label{border-top-width:4px;border-left:1px solid var(--section-ink)}
.ssci-page .phd-label h2{color:#16384b}.ssci-page .phd-label span{font-weight:bold}
.ssci-page .ssci-side-card{background:#f6e6ba;border-color:#d4b875;border-top:4px solid #a97812}
.ssci-page .ssci-side-card:nth-child(4n+2){background:#dfe9f5;border-color:#afc1d8;border-top-color:#355d91}
.ssci-page .ssci-side-card:nth-child(4n+3){background:#d9eee4;border-color:#9fc8b8;border-top-color:#267a6e}
.ssci-page .ssci-side-card:nth-child(4n){background:#f4ded3;border-color:#d8aa98;border-top-color:#b44832}
.ssci-page .ssci-side-card h2{color:#183d54;border-bottom:1px solid #9daea4;padding-bottom:12px}
.ssci-page .ssci-side-card .side-kicker{color:#544c3b;font-weight:700}
.ssci-page .ssci-side-card dd{border-bottom-color:#b4b8ad}.ssci-page .ssci-side-card strong{color:#8d3f2b}
.ssci-page .phd-steps li{background:#d9ece2;border-color:#267a6e}.ssci-page .phd-steps li:nth-child(2){background:#dfe8f5;border-color:#355d91}.ssci-page .phd-steps li:nth-child(3){background:#f4e5bd;border-color:#ad811c}.ssci-page .phd-steps li:nth-child(4){background:#f2ddd2;border-color:#b44832}
.ssci-page .phd-layout tbody tr:nth-child(odd){background:#e0ede6}.ssci-page .phd-layout tbody tr:nth-child(even){background:#f5ead0}
.ssci-page .phd-contact{background:#d8eae4;border-left:5px solid #267a6e}
.ssci-page .ssci-side-card{--card-accent:#916817}.ssci-page .ssci-side-card:nth-child(4n+2){--card-accent:#355d91}.ssci-page .ssci-side-card:nth-child(4n+3){--card-accent:#267366}.ssci-page .ssci-side-card:nth-child(4n){--card-accent:#a84732}
.ssci-page .ssci-side-card h2{background:var(--card-accent);color:#fff;padding:11px 14px;border:0;margin:0 0 16px}
.ssci-page .phd-label{background:var(--section-ink)}.ssci-page .phd-label h2,.ssci-page .phd-label span{color:#fff}
</style>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · ACADEMIC SUPERVISION</div><h1>SSCI 學術督導</h1><h2>選題・選刊・論文修改・投稿返修</h2><p class="hero-sub">選題、選刊、修改稿件與回覆審稿意見，按你的研究進度安排。</p>${heroBtn}<p>海外督導 OTC｜學術督導與編譯服務</p></div><aside class="service-hero-panel"><a href="#section-2"><strong>選題研究</strong><span>問題、文獻與方法</span></a><a href="#section-3"><strong>期刊選擇</strong><span>範圍、收錄與要求</span></a><a href="#section-4"><strong>論文修改</strong><span>論證、結構與表達</span></a><a href="#section-5"><strong>投稿返修</strong><span>材料與審稿回覆</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="#section-1"><b>WHO</b><strong>服務對象</strong><span>學生與獨立研究者</span></a><a href="/zh/services/ssci-academic-supervision/subjects/"><b>SUBJECT</b><strong>學科分類</strong><span>按研究領域查閱</span></a><a href="#section-8"><b>FEES</b><strong>服務費用</strong><span>按稿件及範圍報價</span></a><a href="#consultation"><b>ASK</b><strong>學術諮詢</strong><span>題目、階段與期限</span></a></section>
<div class="phd-layout">
<section class="phd-intro"><div><p class="phd-kicker">研究與寫作</p><h2>服務內容</h2><p>可選單項服務，也可安排分階段督導。</p></div><a class="phd-button" href="${wa}">立即諮詢 <span aria-hidden="true">↗</span></a></section>
<div class="ssci-body-grid"><main class="ssci-main-column">
${a.sections.map((s,i)=>`<section class="phd-row" id="section-${i+1}"><div class="phd-label"><span>${String(i+1).padStart(2,'0')}</span><h2>${s.heading}</h2></div><div class="phd-text">${(s.paragraphs||[]).map(p=>`<p>${p}</p>`).join('')}${s.steps?`<ol class="phd-steps">${s.steps.map(x=>`<li><strong>${x.title}</strong><span>${x.text}</span></li>`).join('')}</ol>`:''}${s.fees?`<div class="phd-table-wrap"><table><caption class="sr-only">學術督導服務及報價方式</caption><thead><tr><th scope="col">方案</th><th scope="col">服務內容</th><th scope="col">報價方式</th></tr></thead><tbody>${s.fees.map(x=>`<tr><th scope="row">${x.name}</th><td>${x.scope}</td><td>${x.basis}</td></tr>`).join('')}</tbody></table></div>`:''}${(s.after||[]).map(p=>`<p>${p}</p>`).join('')}</div></section>`).join('')}
</main><aside class="ssci-sidebar" aria-label="服務價格與時間安排">
<section class="ssci-side-card"><p class="side-kicker">FEES</p><h2>服務報價</h2><dl><dt>單項服務｜按項詢價</dt><dd>選題討論、期刊比較、投稿材料檢查，可按需要單獨安排。</dd><dt>稿件編修｜按字數詢價</dt><dd>依學科、字數、修改程度及交稿日期報價。</dd><dt>階段陪跑｜按範圍報價</dt><dd>約定討論次數、修改輪次與各次交稿日期。</dd></dl><a class="side-cta" href="${wa}">取得報價與排期 →</a></section>
<section class="ssci-side-card"><p class="side-kicker">PUBLIC PRICING</p><h2>華語市場參考</h2><p>以下為其他機構公開價，供預算參考。OTC 費用另行報價。</p><h3>意得輯台灣｜金額為新台幣</h3><dl><dt>期刊挑選 NT$9,000</dt><dd>公開作業時間：4 個工作天。</dd><dt>投稿前審閱 NT$11,000</dt><dd>公開作業時間：1 週。</dd><dt>銀套裝 NT$12,700</dt><dd>4,000 字以下英文稿，包含編修及投稿支援；公開作業時間 3 週。超字數另計，作者回覆時間不含在內。</dd></dl><p style="margin-top:12px"><a href="https://www.editage.com.tw/publication-support/" target="_blank" rel="noopener">台灣公開價目與條件 ↗</a></p><h3>意得輯中國｜金額為人民幣</h3><p>快速投稿套餐 <strong>¥5,999 起</strong>；全程投稿套餐 <strong>¥8,999 起</strong>。方案包含項目與適用限制不同，交期須另行確認。</p><p><a href="https://www.editage.cn/services/publishing-services-packs/compare-plans" target="_blank" rel="noopener">中國公開套餐比較 ↗</a></p><p>查閱：2026 年 10 月 1 日。稅費、優惠及最終金額依供應商確認；上述天數均非期刊錄用期限。</p></section>
<section class="ssci-side-card"><p class="side-kicker">TIMELINE</p><h2>時間安排</h2><h3>首次交稿</h3><p>收到稿件後確認工作量，書面約定交稿日期。</p><h3>返修期限</h3><p>請提供期刊決定信、審稿意見及截止日期，預留修改和校對時間。</p><h3>加急需求</h3><p>能否加急及加收多少費用，需先看稿件與顧問檔期。</p><p>上述為服務排期。期刊審稿與錄用時間由編輯部決定。</p></section>
<section class="ssci-side-card"><p class="side-kicker">SERVICE TERMS</p><h2>輪次與有效期</h2><dl><dt>修改輪次</dt><dd>報價列明批註、複閱及討論次數。</dd><dt>服務期限</dt><dd>委託時約定起止日期、回稿時間及延期辦法。</dd><dt>追加工作</dt><dd>新增資料、改題、超字數或更換期刊，可能需要補報價。</dd></dl></section>
<section class="ssci-side-card"><p class="side-kicker">ENQUIRY</p><h2>諮詢材料</h2><ol><li>學科、研究題目與摘要</li><li>稿件階段、語言與字數</li><li>目標期刊或投稿目的</li><li>希望交稿日期與預算</li></ol><p style="margin-top:14px">首次可先提供摘要或目錄；完整稿件待確認保密安排後提供。</p><a href="${email}">電郵提交需求 →</a></section>
<section class="ssci-side-card"><p class="side-kicker">ADDITIONAL COSTS</p><h2>另計費用</h2><p>期刊 APC、投稿費、資料取得、翻譯或專門分析，依實際需要另行確認。</p><p>OTC 服務費與期刊收費分開列明。</p><a href="#section-8">查看費用範圍 →</a></section>
</aside></div>
<section class="phd-contact" id="consultation"><h2>學術諮詢</h2><p>請提供學科、摘要、字數及希望交稿的日期，並說明需要選刊、編修或返修協助。</p>${btn}<p class="phd-contact-meta">海外督導 OTC｜學術督導與編譯服務<br>WhatsApp +44 7947 991572 · <a href="${email}">office@overseasuk.com</a></p></section>
<section class="phd-references"><div><h2>官方資料與相關服務</h2><ul><li><a href="https://mjl.clarivate.com/">Clarivate：期刊收錄查詢</a></li><li><a href="https://authorservices.taylorandfrancis.com/editorial-policies/">Taylor &amp; Francis：作者與編輯政策</a></li><li><a href="https://authorservices.taylorandfrancis.com/publishing-your-research/making-your-submission/">Taylor &amp; Francis：投稿準備</a></li></ul><p><a href="/zh/services/phd-application-coaching/">博士申請陪跑</a> · <a href="/zh/subject-planning/">學科規劃</a> · <a href="/zh/services/">服務導覽台</a></p><p>WeChat：overseasus · 資料核對：2026 年 10 月 1 日<br>期刊收錄與投稿要求以當期官方資訊為準。</p></div><figure class="phd-cover"><img src="${cover}" width="1200" height="630" alt="SSCI 學術督導：選題、選刊、修改與返修" loading="lazy"><figcaption>海外督導 OTC · 學術督導</figcaption></figure></section>
</div>`});};
