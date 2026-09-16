const {pageShell}=require('../site');

module.exports=(a,locale)=>{
  const zh=locale==='zh';
  const otherPath=zh?'/france-study-work-settlement-support/':'/zh/france-study-work-settlement-support/';
  const intake=zh
    ? '你好，我想做法國升學、就業與定居路線初評。\n目前年級／學歷：\n專業與目標方向：\n法語程度：\n預計赴法／畢業年份：\n最希望先解決的問題：'
    : 'Hello, I would like an initial France study, work and settlement route assessment.\nCurrent year or qualification:\nField and target direction:\nFrench level:\nExpected move or graduation year:\nMost urgent question:';
  const wa='https://wa.me/447947991572?text='+encodeURIComponent(intake);
  const email='mailto:office@overseasuk.com?subject='+encodeURIComponent(zh?'法國升學就業定居路線初評':'France route assessment')+'&body='+encodeURIComponent(intake);
  const cover=a.shareImageZh+'?'+a.socialImageVersion;
  const stages=zh?[
    ['01','本科與能力基礎','核對專業方向、成績、法語與英語、項目經歷及交換選擇，建立跨年度目標。'],
    ['02','碩士與實習規劃','按目標行業倒推課程、院校、實習、作品或研究經歷，以及申請文件與截止日。'],
    ['03','求職準備','整理法國市場可讀的履歷、LinkedIn、求職信、職位清單、面試表達與投遞節奏。'],
    ['04','落地與居留節點','建立需要向學校、雇主及法國官方確認的文件、日期與責任清單；受規管事項轉介合資格人士。']
  ]:[
    ['01','Undergraduate foundation','Review direction, grades, French and English, projects and exchange choices, then set a multi-year route.'],
    ['02','Postgraduate and internships','Work backwards from the target sector to courses, institutions, experience, application evidence and deadlines.'],
    ['03','Employment preparation','Build a France-ready CV, LinkedIn profile, letters, target list, interview communication and application cadence.'],
    ['04','Landing and residence checkpoints','Map documents, dates and responsibilities to confirm with institutions, employers and official French sources; regulated matters are referred.']
  ];
  const process=zh?[
    ['初評','整理背景、目標年份與目前卡點。'],['診斷','找出語言、學歷、經歷、文件與時間線缺口。'],['路線圖','確認主路線、備選方案、季度任務與交付物。'],['陪跑','按約定週期檢視進度、文件與新變化。'],['轉介','移民、法律、稅務等受規管事項交由合資格專業人士。']
  ]:[
    ['Assess','Clarify your background, target year and present bottleneck.'],['Diagnose','Identify language, academic, experience, evidence and timing gaps.'],['Map','Agree the main route, alternatives, quarterly actions and deliverables.'],['Coach','Review progress, documents and changes on the agreed cadence.'],['Refer','Route regulated immigration, legal and tax matters to qualified professionals.']
  ];
  const scope=zh?[
    '<strong>免費初步分流：</strong>了解背景與最急問題，指出要先向官方、學校或雇主確認的事項。',
    '<strong>後續陪跑：</strong>開始前書面確認服務期限、會議頻率、文件數量、交付物、回覆安排與費用。',
    '<strong>第三方費用：</strong>院校、語言考試、翻譯認證、簽證／居留、保險、住宿、交通及專業人士費用由客戶另付。',
    '<strong>服務邊界：</strong>不保證錄取、實習、工作、簽證或居留結果；不代替法國律師、受規管移民專業人士、稅務顧問或政府機關。'
  ]:[
    '<strong>Free initial triage:</strong> we clarify the immediate issue and identify points to confirm with an official source, institution or employer.',
    '<strong>Ongoing coaching:</strong> duration, meeting cadence, document volume, deliverables, response arrangements and fees are agreed in writing before work starts.',
    '<strong>Third-party costs:</strong> institutions, language tests, certified translation, visa or residence applications, insurance, housing, travel and professional advisers are paid separately.',
    '<strong>Boundaries:</strong> no admission, internship, employment, visa or residence outcome is guaranteed. OTC does not replace French authorities or regulated legal, immigration or tax professionals.'
  ];
  const title=zh?'法國升學・就業・定居陪跑':'France Study, Employment & Settlement Support';
  return pageShell({title:a.titleZh,current:'services',lang:zh?'zh-Hant':'en',locale:zh?'zh':'en',path:a.path,alternatePath:otherPath,description:a.summaryZh,image:cover,imageWidth:1200,imageHeight:630,imageAlt:title,body:`
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC FRANCE · ${zh?'跨年度規劃服務台':'MULTI-YEAR PLANNING DESK'}</div><h1>${title}</h1><h2>${zh?'教育 · 職涯 · 合規落地':'Education · Career · Compliant Landing'}</h2><p class="hero-sub">${zh?'把本科、法語、升學、實習、求職與居留節點放進同一張路線圖，按階段推進、定期檢視。':'One staged route linking undergraduate study, French, postgraduate planning, internships, employment preparation and official residence checkpoints.'}</p></div><aside class="service-hero-panel"><a href="#route"><strong>${zh?'四段路線':'Four-stage route'}</strong><span>${zh?'由能力基礎推進至落地':'From foundations to landing'}</span></a><a href="#process"><strong>${zh?'陪跑流程':'Working process'}</strong><span>${zh?'初評、診斷、執行與檢視':'Assess, map, execute and review'}</span></a><a href="#scope"><strong>${zh?'費用與邊界':'Scope and fees'}</strong><span>${zh?'開始前書面確認':'Confirmed in writing first'}</span></a><a href="#start"><strong>${zh?'開始初評':'Start assessment'}</strong><span>${zh?'五項背景即可':'Five background points'}</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="#route"><b>ROUTE</b><strong>${zh?'跨年度規劃':'Multi-year plan'}</strong><span>${zh?'不只處理單一申請':'Beyond one application'}</span></a><a href="#process"><b>COACH</b><strong>${zh?'定期檢視':'Scheduled reviews'}</strong><span>${zh?'按里程碑調整':'Adjust by milestone'}</span></a><a href="#scope"><b>SCOPE</b><strong>${zh?'先確認範圍':'Scope first'}</strong><span>${zh?'免費分流，陪跑另報價':'Free triage; coaching quoted'}</span></a><a href="${wa}"><b>ASK</b><strong>${zh?'提交背景':'Share background'}</strong><span>${zh?'WhatsApp 路線初評':'WhatsApp route assessment'}</span></a></section>
<section class="band compact-band service-review-body"><div class="section-head compact-head service-review-head"><span>OTC FRANCE</span><strong>${zh?'一條能持續更新的法國路線':'A France route designed to evolve'}</strong><p>${zh?'先看目前位置，再安排下一個可驗證的里程碑。':'Start from where you are, then define the next verifiable milestone.'}</p></div><div class="service-herald-grid"><main class="service-herald-main" style="min-width:0"><figure class="zh-herald-share-cover" style="margin:0 0 24px"><img src="${cover}" width="1200" height="630" alt="${title}" style="display:block;width:100%;height:auto" fetchpriority="high"></figure>
<section id="route"><h2 class="zh-herald-section-head" data-num="01">${zh?'四段服務路線':'Four-stage service route'}</h2><div class="service-situation-grid">${stages.map(([n,t,d])=>`<a href="#start"><b>${zh?'階段':'Stage'} ${n}</b><strong>${t}</strong><span>${d}</span></a>`).join('')}</div></section>
<section id="process"><h2 class="zh-herald-section-head" data-num="02">${zh?'怎樣推進':'How the work progresses'}</h2><div class="service-route-list">${process.map(([t,d],i)=>`<a href="#start"><span>${zh?'第'+(i+1)+'步':'Step '+(i+1)}</span><strong>${t}</strong><em>${d}</em></a>`).join('')}</div></section>
<section id="scope"><h2 class="zh-herald-section-head" data-num="03">${zh?'免費、付費與第三方成本':'Free triage, paid coaching and external costs'}</h2>${scope.map(p=>`<p>${p}</p>`).join('')}</section>
<section><h2 class="zh-herald-section-head" data-num="04">${zh?'先準備五項資料':'Five points for the first assessment'}</h2><p>${zh?'目前年級或最高學歷；專業與目標方向；法語程度；預計赴法或畢業年份；最希望先解決的問題。不確定的內容可留空，初次不用傳護照或帳戶資料。':'Current year or highest qualification; field and target direction; French level; expected move or graduation year; and the most urgent question. Unknown items may be left blank. Do not send passport or account details at this stage.'}</p></section>
<p>${zh?'更新：2026-09-16。院校、就業及居留要求會變動，以當期官方資料和個案書面結果為準。':'Updated 16 September 2026. Institutional, employment and residence requirements change; current official information and case-specific written decisions prevail.'}</p></main>
<aside class="service-guide-side service-herald-side" id="start"><div class="service-guide-card is-urgent"><span>${zh?'開始評估':'START'}</span><strong>${zh?'先提交五項背景':'Share five background points'}</strong><p>${zh?'未確定的部分可留空，我們會先做路線分流。':'Leave unknown items blank; we will begin with route triage.'}</p><a href="${wa}">${zh?'WhatsApp 免費初步分流':'WhatsApp initial triage'}</a></div><div class="service-guide-card"><span>${zh?'電郵':'EMAIL'}</span><strong>office@overseasuk.com</strong><p>${zh?'需要附文件時，先說明用途及傳送方式。':'We will explain the purpose and transfer method before requesting documents.'}</p><a href="${email}">${zh?'電郵提交背景':'Send background by email'}</a></div><div class="service-guide-card"><span>${zh?'交付物':'DELIVERABLES'}</span><strong>${zh?'路線圖與追蹤清單':'Route map and tracker'}</strong><p>${zh?'季度里程碑、文件清單、責任分工、風險節點及下一步。':'Quarterly milestones, evidence list, responsibilities, risk checkpoints and next actions.'}</p><a href="#process">${zh?'查看流程':'View process'}</a></div><div class="service-guide-note"><b>${zh?'專業邊界':'Professional boundary'}</b><p>${zh?'受規管的移民、法律和稅務事項會轉介合資格人士。':'Regulated immigration, legal and tax work is referred to qualified professionals.'}</p></div><div class="service-side-links"><span>${zh?'相關入口':'RELATED'}</span><a href="${otherPath}">${zh?'English service page':'繁體中文服務頁'}</a><a href="/application-service-standards/">${zh?'申請服務準則':'Application service standards'}</a><a href="${wa}">WhatsApp +44 7947 991572</a><a href="${email}">office@overseasuk.com</a></div></aside></div><a class="zh-hero-service-button" href="${zh?'/zh/services/':'/services/'}">${zh?'返回服務導覽台':'Back to services'} →</a></section>`});
};
