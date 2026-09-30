const {pageShell}=require('../site');
const a=require('./japan-employment-service.json');
module.exports=()=>{
 const msg='你好，我想諮詢日本就業準備陪跑。\n年齡及學歷／畢業時間：\n日語程度：\n工作意向：\n預計出發時間及預算：';
 const wa='https://wa.me/447947991572?text='+encodeURIComponent(msg);
 const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('日本就業準備陪跑諮詢')+'&body='+encodeURIComponent(msg);
 const cover=a.shareImageZh+'?'+a.socialImageVersion;
 const paragraphs=i=>a.sections[i].paragraphs.map(p=>`<p>${p}</p>`).join('');
 const steps=[
  ['方向與預算','個人準備方案、方向比較及預算表。'],
  ['學習與考試','日語與技能考試準備時間表、官方報名資訊。'],
  ['材料與面試','文件清單、履歷修改建議及面試練習反饋。'],
  ['進度與行前準備','進度紀錄、聘用條件整理及赴日前待辦清單。']
 ];
 return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:'日本就業準備陪跑：方向、考試、預算、材料及面試',body:`
<style>
.japan-employment .service-herald-grid{align-items:start}
.japan-employment .service-guide-side{align-self:start;display:block}
.japan-employment .service-guide-card{display:block;min-height:0;height:auto;margin-bottom:16px}
.japan-employment .service-guide-card>span,.japan-employment .service-guide-card>strong{display:block;margin-bottom:10px}
.japan-employment .service-guide-card a{display:block;margin-top:10px}
.japan-employment .service-herald-main{min-width:0}
.japan-employment p,.japan-employment li{line-height:1.85}
.japan-employment h1{max-width:17em}
.japan-employment section[id]{scroll-margin-top:32px}
.japan-employment .japan-lead{font-size:1.12rem}
.japan-steps{list-style:none;padding:0;counter-reset:japanstep}
.japan-steps>li{counter-increment:japanstep;border-top:1px solid #d6dfdf;padding:22px 0}
.japan-steps h3{margin:0 0 12px;font-size:1.3rem}
.japan-steps h3:before{content:counter(japanstep,decimal-leading-zero) '  ';color:#597c78}
.japan-steps p{margin:8px 0}
.japan-result{background:#edf3ef;padding:12px 16px;border-left:3px solid #597c78}
.japan-table-wrap{overflow-x:auto}
.japan-table{border-collapse:collapse;width:100%;font-size:15px}
.japan-table th,.japan-table td{text-align:left;padding:13px;border-bottom:1px solid #d6dfdf;vertical-align:top}
.japan-table thead th{background:#edf3ef}
.japan-table tbody th{width:24%}
.japan-caption{font-size:14px;color:#52666d}
.japan-contact{padding:22px;background:#edf3ef}
.japan-employment .service-guide-side a,.japan-contact a{overflow-wrap:anywhere}
.japan-start{padding-left:24px}.japan-start li{padding:7px 0}
@media(max-width:640px){.japan-employment h1{font-size:30px}.japan-table th,.japan-table td{padding:10px 7px}.japan-employment .japan-lead{font-size:1rem}}
</style>
<div class="japan-employment">
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">海外督導 OTC · 學生服務部</div><h1>日本就業準備陪跑</h1><h2>方向、考試、材料與面試</h2><p class="hero-sub">從日語與技能考試，到履歷、面試及赴日前準備，按你的基礎和預算安排。分階段跟進，每一步都有清楚的準備事項與交付內容。</p></div><nav class="service-hero-panel" aria-label="本頁導覽"><a href="#section-2"><strong>陪跑流程</strong><span>四個階段與交付成果</span></a><a href="#section-3"><strong>交付項目</strong><span>方案、時間表與修改反饋</span></a><a href="#section-5"><strong>收費</strong><span>免費初談，按範圍報價</span></a><a href="#contact"><strong>諮詢</strong><span>聯絡學生服務部</span></a></nav></div></div></section>
<section class="band service-review-strip"><a href="#section-2"><b>01—04</b><strong>階段準備</strong><span>方向評估到赴日前安排</span></a><a href="#section-3"><b>PLAN</b><strong>個人方案</strong><span>時間、預算與文件清單</span></a><a href="#section-5"><b>FEES</b><strong>收費說明</strong><span>服務費與另付項目</span></a><a href="${wa}"><b>CONTACT</b><strong>免費初步諮詢</strong><span>說明背景與工作意向</span></a></section>
<section class="band compact-band service-review-body"><div class="service-herald-grid"><main class="service-herald-main">
<section id="section-1"><h2 class="zh-herald-section-head" data-num="01">服務對象</h2><div class="japan-lead">${paragraphs(0)}</div></section>
<figure class="zh-herald-share-cover" style="margin:24px 0;max-width:580px"><img src="${cover}" width="1200" height="630" alt="日本就業準備陪跑：方向、考試、預算、材料及面試" style="display:block;width:100%;height:auto" fetchpriority="high"></figure>
<section id="section-2"><h2 class="zh-herald-section-head" data-num="02">陪跑流程</h2><p>按你的背景和目前進度安排以下準備。實際交付項目、回饋次數與跟進頻率，於委託前寫入服務方案。</p><ol class="japan-steps">${steps.map(([title,result],i)=>`<li><h3>${title}</h3><p>${a.sections[1].paragraphs[i].replace(/^<strong>.*?<\/strong>/,'')}</p><p class="japan-result"><strong>階段成果：</strong>${result}</p></li>`).join('')}</ol></section>
<section id="section-3"><h2 class="zh-herald-section-head" data-num="03">交付項目</h2>${paragraphs(2)}</section>
<section id="section-4"><h2 class="zh-herald-section-head" data-num="04">委託安排</h2><ol class="japan-start">${a.sections[3].paragraphs.map(p=>`<li>${p.replace(/^[①②③④]\s*/,'')}</li>`).join('')}</ol></section>
<section id="section-5"><h2 class="zh-herald-section-head" data-num="05">收費</h2><div class="japan-table-wrap"><table class="japan-table"><caption>諮詢、正式陪跑與第三方費用</caption><thead><tr><th scope="col">項目</th><th scope="col">費用與範圍</th></tr></thead><tbody>${a.sections[4].paragraphs.map(p=>{const [,title,body]=p.match(/^<strong>(.*?)：<\/strong>(.*)$/);return `<tr><th scope="row">${title}</th><td>${body}</td></tr>`;}).join('')}</tbody></table></div><p class="japan-caption">正式服務以書面方案確認範圍、期限與報價。</p></section>
<section id="section-6"><h2 class="zh-herald-section-head" data-num="06">服務說明</h2>${paragraphs(5)}</section>
<section id="contact" class="japan-contact"><h2>聯絡學生服務部</h2><p>告訴我們年齡、學歷或畢業時間、日語程度、工作意向、出發時間及預算。未確定的項目可留空，初次諮詢無須提供證件號碼。</p><p><a class="button" href="${wa}">WhatsApp 諮詢與報價 →</a></p><p>海外督導 OTC 學生服務部 · Student Services<br><a href="${wa}">+44 7947 991572</a><br><a href="${email}">office@overseasuk.com</a><br>微信：overseasus</p><p class="japan-caption">更新：2026-09-30 · <a href="/application-service-standards/">申請服務準則</a></p></section>
</main><aside class="service-guide-side service-herald-side"><div class="service-guide-card is-urgent"><span>就業準備陪跑</span><strong>從你目前的進度開始</strong><p>說明日語基礎、工作意向與預算，先了解適合自己的準備方向。</p><a href="${wa}">詢問服務與報價 →</a></div><div class="service-guide-card"><span>閱讀順序</span><a href="#section-2">四個階段與成果</a><a href="#section-3">交付項目</a><a href="#section-5">收費與另付項目</a><a href="#section-4">委託安排</a></div><div class="service-guide-card"><span>閱讀指南</span><strong>日本特定技能</strong><p>申請條件、介護與食品加工、費用準備及後續職業發展。</p><a href="/zh/insights/japan-specified-skilled-worker-guide/">閱讀導報文章 →</a></div><div class="service-side-links"><span>相關服務</span><a href="/zh/services/#overseas-careers">海外就業與生活</a><a href="/zh/services/">完整服務目錄</a><a href="/application-service-standards/">服務準則</a></div></aside></div></section></div>`});
};
