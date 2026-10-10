const {pageShell}=require('../site');

module.exports=(a,locale)=>{
  const zh=locale==='zh';
  const otherPath=zh?'/france-study-work-settlement-support/':'/zh/france-study-work-settlement-support/';
  const intake=zh
    ? '你好，我想做法國留學諮詢。\n目前年級／學歷：\n專業與目標方向：\n法語／英語程度：\n入學年份：\n預算：\n最希望先解決的問題：'
    : 'Hello, I would like an initial France study, work and settlement route assessment.\nCurrent year or qualification:\nField and target direction:\nFrench level:\nExpected move or graduation year:\nMost urgent question:';
  const wa='https://wa.me/447947991572?text='+encodeURIComponent(intake);
  const email='mailto:office@overseasuk.com?subject='+encodeURIComponent(zh?'法國留學諮詢':'France route assessment')+'&body='+encodeURIComponent(intake);
  const cover=a.shareImageZh+'?'+a.socialImageVersion;
  const stages=zh?[
    ['01','選校與課程','按學歷、成績、語言、專業方向與預算比較課程，整理入學要求和截止日期。'],
    ['02','申請與實習','協助準備動機信、履歷和申請文件，了解課程實習安排及申請進度。'],
    ['03','求職準備','整理法國市場可讀的履歷、LinkedIn、求職信、職位清單、面試表達與投遞節奏。'],
    ['04','抵法生活','整理住宿、入學註冊與居留手續的準備清單；法律、移民及稅務問題轉介合資格人士。']
  ]:[
    ['01','Undergraduate foundation','Review direction, grades, French and English, projects and exchange choices, then set a multi-year route.'],
    ['02','Postgraduate and internships','Work backwards from the target sector to courses, institutions, experience, application evidence and deadlines.'],
    ['03','Employment preparation','Build a France-ready CV, LinkedIn profile, letters, target list, interview communication and application cadence.'],
    ['04','Landing and residence checkpoints','Map documents, dates and responsibilities to confirm with institutions, employers and official French sources; regulated matters are referred.']
  ];
  const process=zh?[
    ['選校','確認課程、授課語言、入學資格、學費與目標入學年份。'],
    ['申請渠道','按國籍、居住地、學位階段及課程，確認 Études en France、Mon Master 或院校直接申請；部分課程還需另交院校申請。'],
    ['材料與遞交','按各渠道的截止日期準備文件，事先確認語言成績能否後補，遞交後跟進補件及面試。'],
    ['錄取與入學','閱讀錄取條件、補件日期、訂金與退費條款，依通知完成接受錄取及註冊。'],
    ['抵法準備','按適用流程辦理後續手續，安排住宿、保險及入學；需要專業意見時另行轉介。']
  ]:[
    ['Assess','Clarify your background, target year and present bottleneck.'],['Diagnose','Identify language, academic, experience, evidence and timing gaps.'],['Map','Agree the main route, alternatives, quarterly actions and deliverables.'],['Coach','Review progress, documents and changes on the agreed cadence.'],['Refer','Route regulated immigration, legal and tax matters to qualified professionals.']
  ];
  const scope=zh?[
    '<strong>初步諮詢：</strong>了解學歷、語言、目標與預算，說明可協助的申請工作。',
    '<strong>合作院校申請：</strong>適用免費代辦的課程，由合作院校支付招生佣金，學生不另付中介費。適用院校、課程及佣金安排於委託前確認，並非所有法國公立大學均適用。',
    '<strong>付費服務：</strong>非合作院校申請、文件編修、長期學業或求職陪跑，按服務範圍另行報價；開始前書面確認內容、期限與費用。'
  ]:[
    '<strong>Free initial triage:</strong> we clarify the immediate issue and identify points to confirm with an official source, institution or employer.',
    '<strong>Ongoing coaching:</strong> duration, meeting cadence, document volume, deliverables, response arrangements and fees are agreed in writing before work starts.',
    '<strong>Third-party costs:</strong> institutions, language tests, certified translation, visa or residence applications, insurance, housing, travel and professional advisers are paid separately.',
    '<strong>Boundaries:</strong> no admission, internship, employment, visa or residence outcome is guaranteed. OTC does not replace French authorities or regulated legal, immigration or tax professionals.'
  ];
  const title=zh?'法國留學・就業與生活':'France Study, Employment & Settlement Support';
  return pageShell({title:a.titleZh,current:'services',lang:zh?'zh-Hant':'en',locale:zh?'zh':'en',path:a.path,alternatePath:otherPath,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:title,body:`
${zh?`<style>
.france-compact-hero .band{padding-top:10px;padding-bottom:10px}
.france-compact-hero .service-hero-layout{grid-template-columns:minmax(320px,1.15fr) minmax(0,2fr);gap:14px;align-items:stretch}
.france-compact-hero h1{font-size:26px;line-height:1.15;margin:0}
.france-compact-hero h2{font-size:13px;line-height:1.3;margin:4px 0 0}
.france-compact-hero .hero-sub{font-size:12px;line-height:1.5;max-width:440px;margin:6px 0 0}
.france-compact-hero .actions{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 0;padding:0}
.france-compact-hero .actions .btn{min-height:38px;padding:8px 14px;font-size:13px;line-height:1.3}
.france-compact-hero .service-hero-panel a{min-height:0;padding:10px 8px;grid-template-columns:minmax(0,1fr);gap:5px;align-content:center}
.france-compact-hero .service-hero-panel a::before{display:none}
.france-compact-hero .service-hero-panel strong,.france-compact-hero .service-hero-panel span{grid-column:1;line-height:1.35}
.france-compact-strip{padding-top:10px;padding-bottom:10px;gap:8px}
.france-compact-strip a{min-height:66px;padding:8px 10px;gap:3px 8px;align-content:center}
@media(max-width:800px){
.france-compact-hero .service-hero-layout{grid-template-columns:minmax(0,1fr);gap:10px}
.france-compact-hero .service-hero-panel,.france-compact-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
.france-compact-hero .service-hero-panel a{min-height:58px;padding:8px 10px}
.france-compact-hero h1{font-size:24px}
.france-compact-hero .hero-sub{max-width:none}
.france-compact-strip a{min-height:66px}
}
</style>`:''}
<section class="page-hero services-hero ${zh?'france-compact-hero':''}"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC FRANCE · ${zh?'留學諮詢與申請':'MULTI-YEAR PLANNING DESK'}</div><h1>${title}</h1><h2>${zh?'選校・申請・抵法準備':'Education · Career · Compliant Landing'}</h2><p class="hero-sub">${zh?'課程申請、學徒制與求職準備，按學歷、語言及預算規劃。':'One staged route linking undergraduate study, French, postgraduate planning, internships, employment preparation and official residence checkpoints.'}</p>${zh?`<div class="actions"><a class="btn btn-primary" href="${wa}">留學諮詢</a><a class="btn btn-secondary" href="#apprenticeship">學徒制</a></div>`:''}</div><aside class="service-hero-panel"><a href="#route"><strong>${zh?'服務內容':'Four-stage route'}</strong><span>${zh?'選校、申請、就業與生活':'From foundations to landing'}</span></a><a href="#process"><strong>${zh?'申請流程':'Working process'}</strong><span>${zh?'材料、遞交、錄取與入學':'Assess, map, execute and review'}</span></a><a href="#scope"><strong>${zh?'費用':'Scope and fees'}</strong><span>${zh?'開始前書面確認':'Confirmed in writing first'}</span></a><a href="#start"><strong>${zh?'留學諮詢':'Start assessment'}</strong><span>${zh?'學歷、語言、時間與預算':'Five background points'}</span></a></aside></div></div></section>
<section class="band service-review-strip ${zh?'france-compact-strip':''}"><a href="#route"><b>ROUTE</b><strong>${zh?'升學規劃':'Multi-year plan'}</strong><span>${zh?'本科、碩士與語言課程':'Beyond one application'}</span></a><a href="#process"><b>COACH</b><strong>${zh?'申請跟進':'Scheduled reviews'}</strong><span>${zh?'補件、面試與錄取條件':'Adjust by milestone'}</span></a><a href="#scope"><b>SCOPE</b><strong>${zh?'服務收費':'Scope first'}</strong><span>${zh?'按院校及服務範圍確認':'Free triage; coaching quoted'}</span></a><a href="${wa}"><b>ASK</b><strong>${zh?'提交背景':'Share background'}</strong><span>${zh?'WhatsApp 留學諮詢':'WhatsApp route assessment'}</span></a></section>
<section class="band compact-band service-review-body"><div class="section-head compact-head service-review-head"><span>OTC FRANCE</span><strong>${zh?'法國留學申請':'A France route designed to evolve'}</strong><p>${zh?'選擇適合的課程，確認申請渠道與材料。':'Start from where you are, then define the next verifiable milestone.'}</p></div><div class="service-herald-grid"><main class="service-herald-main" style="min-width:0"><figure class="zh-herald-share-cover" style="margin:0 0 24px"><img src="${cover}" width="1200" height="630" alt="${title}" style="display:block;width:100%;height:auto" fetchpriority="high"></figure>
${zh?(a.sections||[]).map((s,i)=>`<section id="${s.id}"><h2 class="zh-herald-section-head" data-num="0${i+1}">${s.title}</h2>${s.html}</section>`).join(''):''}
<section id="route"><h2 class="zh-herald-section-head" data-num="${zh?String(a.sections.length+1).padStart(2,'0'):'01'}">${zh?'服務內容':'Four-stage service route'}</h2><div class="service-situation-grid">${stages.map(([n,t,d])=>`<a href="#start"><b>${zh?'階段':'Stage'} ${n}</b><strong>${t}</strong><span>${d}</span></a>`).join('')}</div></section>
<section id="process"><h2 class="zh-herald-section-head" data-num="${zh?String(a.sections.length+2).padStart(2,'0'):'02'}">${zh?'流程':'How the work progresses'}</h2><div class="service-route-list">${process.map(([t,d],i)=>`<a href="#start"><span>${zh?'第'+(i+1)+'步':'Step '+(i+1)}</span><strong>${t}</strong><em>${d}</em></a>`).join('')}</div></section>
<section id="scope"><h2 class="zh-herald-section-head" data-num="${zh?String(a.sections.length+3).padStart(2,'0'):'03'}">${zh?'費用':'Free triage, paid coaching and external costs'}</h2>${zh?`<div style="overflow-x:auto"><table><thead><tr><th>項目</th><th>費用安排</th></tr></thead><tbody>${a.costRows.map(([t,d])=>`<tr><th scope="row">${t}</th><td>${d}</td></tr>`).join('')}</tbody></table></div><h3>OTC 服務費</h3>`:''}${scope.map(p=>`<p>${p}</p>`).join('')}</section>
<section><h2 class="zh-herald-section-head" data-num="${zh?String(a.sections.length+4).padStart(2,'0'):'04'}">${zh?'諮詢資料':'Five points for the first assessment'}</h2><p>${zh?'目前學歷與成績概況、目標專業、法語／英語程度、入學年份及預算。不確定的部分可留空，初次不用提供護照或銀行資料。':'Current year or highest qualification; field and target direction; French level; expected move or graduation year; and the most urgent question. Unknown items may be left blank. Do not send passport or account details at this stage.'}</p></section>
${zh?`<section><h2 class="zh-herald-section-head" data-num="${String(a.sections.length+5).padStart(2,'0')}">官方資料</h2><ul>${a.sources.map(([t,u])=>`<li><a href="${u}">${t}</a></li>`).join('')}</ul></section>`:''}<p>${zh?'資料核對：2026-10-10。入學、收費及居留要求以當年度官方資料和書面通知為準。OTC 不保證錄取、實習、工作或簽證結果。':'Updated 16 September 2026. Institutional, employment and residence requirements change; current official information and case-specific written decisions prevail.'}</p></main>
<aside class="service-guide-side service-herald-side" id="start"><div class="service-guide-card is-urgent"><span>${zh?'聯絡我們':'START'}</span><strong>${zh?'法國留學諮詢':'Share five background points'}</strong><p>${zh?'告訴我們目前學歷、語言程度、入學年份及預算。':'Leave unknown items blank; we will begin with route triage.'}</p><a href="${wa}">${zh?'WhatsApp 留學諮詢':'WhatsApp initial triage'}</a></div><div class="service-guide-card"><span>${zh?'電郵':'EMAIL'}</span><strong>office@overseasuk.com</strong><p>${zh?'需要附文件時，先說明用途及傳送方式。':'We will explain the purpose and transfer method before requesting documents.'}</p><a href="${email}">${zh?'電郵提交背景':'Send background by email'}</a></div><div class="service-guide-card"><span>${zh?'服務安排':'DELIVERABLES'}</span><strong>${zh?'選校與申請清單':'Route map and tracker'}</strong><p>${zh?'按委託範圍整理院校比較、文件要求、截止日期與申請進度。':'Quarterly milestones, evidence list, responsibilities, risk checkpoints and next actions.'}</p><a href="#process">${zh?'查看流程':'View process'}</a></div><div class="service-guide-note"><b>${zh?'專業邊界':'Professional boundary'}</b><p>${zh?'受規管的移民、法律和稅務事項會轉介合資格人士。':'Regulated immigration, legal and tax work is referred to qualified professionals.'}</p></div><div class="service-side-links"><span>${zh?'相關入口':'RELATED'}</span><a href="${zh?'https://translate.google.com/translate?sl=auto&tl=en&u='+encodeURIComponent('https://overseasuk.com'+a.path):otherPath}">${zh?'Translate the page · English':'繁體中文服務頁'}</a><a href="/application-service-standards/">${zh?'申請服務準則':'Application service standards'}</a><a href="${wa}">WhatsApp +44 7947 991572</a><a href="${email}">office@overseasuk.com</a></div></aside></div><a class="zh-hero-service-button" href="${zh?'/zh/services/':'/services/'}">${zh?'返回服務導覽台':'Back to services'} →</a></section>`});
};
