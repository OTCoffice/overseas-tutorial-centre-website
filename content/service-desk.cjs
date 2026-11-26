const {pageShell}=require('../site');
const {categoryDirectory,overviewDirectory}=require('./hub-cards.cjs');
const groups=[
  ["study","留學申請","從選校、入學申請到轉學與學分認定。",[
    ["study-planning","選校預算",[
      ["留學規劃","/zh/study-planning/","按學歷、預算和入學時間安排選校及申請。"],
      ["留學國家","/zh/countries/","按國家查閱院校、學費及生活費。"],
      ["學科選擇","/zh/subject-planning/","商科、文理工科、醫學、法律、藝術與設計等專業。"],
      ["平價留學","/zh/services/affordable-study-abroad/","低學費課程、政府獎學金、研究資助與帶薪培訓。"],
      ["大馬留學","/zh/services/malaysia-study/","TAR UMT、UM、UTM、USM 課程比較、申請路徑與完整預算。"],
      ["公費留學","/zh/government-scholarships/","按目的地、學位與中國大陸、香港、台灣申請渠道查找。"],
      ["收費標準","/zh/application-fees/","同等服務參考價六折；免費代辦項目與第三方費用說明。"],
    ]],
    ["school-admissions","中小學",[
      ["私校聯盟","/zh/private-school-alliance/","學校、入學年齡、課程及住宿。"],
      ["公校聯盟","/zh/public-school-alliance/","八國公立教育；國際招生、選科、費用、收費諮詢與申請。"],
    ]],
    ["university-admissions","本科轉學",[
      ["韓國本科","/zh/services/korea-undergraduate-application/","TOPIK、免語言學部與預錄取，選校與申請材料。"],
      ["大學申請","/zh/services/university-application-advisory/","選校、材料規劃、申請進度與院校溝通。"],
      ["入學面試","/zh/services/university-interview-coaching/","Kira 限時錄影、書面補充申請、經歷整理及模擬回饋。"],
      ["申請流程","/zh/study-planning/#apply","查看申請材料、提交方式及錄取後安排。"],
      ["國際轉學","/zh/services/international-transfer/","按國家及地區查閱轉學途徑、學分認定與官方入口。"],
      ["澳洲轉校","/zh/services/australia-transfer-release-support/","學籍時間線、轉專業理由，原校釋放與新校入學跟進。"],
      ["轉專業","/zh/services/change-of-major/","校內轉科、先修課、學分抵免與修業安排；初步諮詢免費。"],
      ["學分抵免","/insights/credit-alliance/","學分抵免、轉學插班、課程對照、RPL 與修業預算。"],
      ["Asso升學","/zh/asso-hd-university-progression/","轉科、選校、入學年級與英文要求。"],
      ["日本SGU","/zh/services/japan-sgu-planning/","本科與碩博選校、申請材料、語言準備及畢業去向。"]
    ]],
    ["graduate-admissions","碩博申請",[
      ["博士申請","/zh/services/phd-application-coaching/","研究方向、導師與資助、研究計劃及面試。"],
      ["日本讀研","/zh/services/japan-graduate-application/","修士與研究生路線、研究科與導師、研究計畫及出願準備。"],
      ["韓國碩士","/zh/services/korea-masters-application/","選校、入學要求、學費與獎學金；合作院校免費代辦。"],
      ["香港研博","/zh/services/hong-kong-research-degree-application/","MPhil、PhD、研究計劃、導師與 PGS 資助。"]
    ]],
    ["subject-admissions","專業升學",[
      ["波蘭獸醫","/zh/subject-planning/poland-veterinary-sggw/","華沙生命科學大學5.5年課程、學費、申請與英歐註冊要求。"],
      ["護理升學","/zh/nursing/","護理升學、護士註冊、求職與移民；澳洲專頁及服務費用。"],
      ["護理院校","/zh/nursing/courses/","按 AQF 學歷級別及州份查閱澳洲護理課程。"],
      ["社工升學","/zh/subject-planning/social-work/","按國家查閱社工升學、院校課程、專業資格、薪資及居留。"],
      ["法國高商","/zh/services/france-business-schools/","IÉSEG、NEOMA、emlyon、EDHEC、SKEMA；選校、GMAT 與申請規劃。"],
      ["設計申請","/zh/services/design-application-coaching/","選校、作品集、語言與文件的申請計畫。"],
      ["動畫作品","/zh/services/animation-portfolio-support/","動畫升學初評、作品規劃、導師匹配與面談準備。"],
      ["德國雙元","/zh/services/germany-ausbildung/","職業培訓、德語、申請材料及中介合約查核。"]
    ]],
    ["application-documents","申請文書",[
      ["個人陳述","/zh/services/personal-statement-support/","素材整理、初稿回饋、結構與英文表達。"],
      ["SOP修改","/zh/services/uk-sop-editing/","申請動機、經歷證據、課程契合度與文章架構。"],
      ["學歷認證","/zh/services/credential-evaluation-document-coordination/","WES 等學歷評估文件、原校重送與收件跟進。"]
    ]]
  ]],
  ["visa","簽證交流","簽證文件、工作與居留，以及交換、遊學與短期計劃。",[
    ["visa-applications","簽證居留",[
      ["簽證申請","/zh/services/visa-application-support/","文件清單、準備時間表、進度與行前資料。"],
      ["移民聯盟","/zh/immigration-alliance/","各國工作與居留政策、歐洲36國專頁及外部資料索引。"],
      ["美國簽證","/zh/services/us-visa-support/","DS-160 資料核對、文件整理、預約流程與面試準備。"],
      ["越南簽證","/zh/services/vietnam-visa/","需求確認、文件檢查、申請協調與進度跟進。"],
      ["澳洲旅簽","/zh/services/australia-visitor-visa/","600 訪客簽證：在職收入、資金、行程與回國約束材料整理。"],
      ["澳洲491","/zh/services/australia-491-planning/","地區技術簽證、州提名、191永居條件與行政支援。"],
      ["焊工赴澳","/zh/insights/japan-welder-australia-pathway/","特定技能、JIS 證書與澳洲焊工職業評估；190、491 州擔保。"],
      ["波蘭居留","/zh/services/poland-work-residence-support/","工作許可、臨時居留、審理時間與文件及進度支援。"],
      ["德國自僱","/zh/services/germany-freelance-residence/","申請資格、合作意向書、材料、費用及獨立收費諮詢。"],
      ["日本高才","/zh/services/japan-highly-skilled-professional/","三類活動、申請條件、永住與自動積分試算。"],
      ["求職簽證","/zh/services/graduate-job-search-visas/","英國 HPI、荷蘭求職年與日本 J-Find：學歷資格、期限及申請準備。"],
      ["獅城工簽","/zh/services/singapore-work-pass-support/","EP、S Pass、雇主條件、薪資門檻及申請流程。"],
      ["全球人才","/zh/services/uk-global-talent-support/","學術 CV、研究成果、推薦信及背書材料準備。"],
      ["EB-1A申請","/zh/services/us-eb1a-niw-research-support/","學歷、學術 CV、研究成果、引用與審稿證據整理。"],
      ["EB-3移民","/zh/services/us-eb3-other-workers/","僱主擔保、PERM流程、中國大陸出生排期與費用責任。"],
      ["第二護照","/zh/services/caribbean-citizenship/","安提瓜和巴布達、多米尼克、格林納達官方方案與申請協調。"]
    ]],
    ["study-exchange","遊學交流",[
      ["語言學校","/zh/language-school-alliance/","17 國語校、課程與費用、政府簽證入口及免費代辦。"],
      ["寒暑校","/zh/summer-school-alliance/","按國家比較暑校、遊學及假期短期項目。"],
      ["研學評估","/zh/services/study-tour-programme-review/","名校參訪、寒暑校及第三方研學的課程、主辦、費用與退款資料比較。"],
      ["藝術駐村","/zh/services/art-study-residency/","14國藝術短課、自費及徵選駐村；按國家查看資格、費用與申請安排。"],
      ["歐洲交換","/zh/services/europe-exchange-support/","交換選校、選課、學分、均分與升碩銜接。"],
      ["韓國交換","/zh/services/korea-exchange-support/","韓國交換選校、課程語言、學分與行前準備。"],
      ["美高交換","/zh/us-high-school-exchange-support/","交換項目、申請條件及文件準備。"],
      ["訪問學者","/zh/services/visiting-scholar-support/","項目與導師、研究計劃、訪問邀請及醫學觀摩申請支援。"]
    ]],
    ["work-exchange","短期工作",[
      ["打工度假","/zh/work-travel-alliance/","按地區查閱各國打工度假、青年流動、暑期工作交流及行前服務。"],
      ["季節工","/zh/work-travel-alliance/uk/#seasonal-workers","六家獲批營運商、招募地區、官方申請及聯絡方式。"],
      ["美國SWT","/zh/us-swt-work-travel-support/","資格、主辦機構、職位、成本、簽證面談與行前準備。"],
      ["互惠生","/zh/services/au-pair-support/","選國、申請材料、家庭面試與行前準備；按國家核對機構與費用。"],
      ["打工換宿","/zh/services/work-exchange-support/","換宿與雪季短工、履歷聯絡信、食宿條件及行前準備。"]
    ]]
  ]],
  ["learning","課程求職","課程輔導、職業資格、實習及海外求職。",[
    ["tuition","學術輔導",[
      ["課程教學","/zh/teaching/","按課程體系與學習需要查閱教學服務。"],
      ["AL評估","/zh/services/a-level-predicted-grade-assessment/","預估成績材料、學習證據與自修考生支援。"],
      ["商業英語","/zh/services/business-english-study-support/","每週學習計劃、商業寫作與簡報練習。"],
      ["SSCI督導","/zh/services/ssci-academic-supervision/","研究選題、期刊選擇、論文修改與投稿返修。"]
    ]],
    ["qualifications","職業資格",[
      ["OTHM課程","/zh/othm-qualifications/","資格課程、中心資料與升學資訊。"],
      ["ECFVG","/zh/vocational-training/ecfvg/","BCSE、CPE 備考規劃與北美獸醫實習申請。"],
      ["PAVE","/zh/vocational-training/pave/","QSE 備考、ECE 臨床輪轉及申請準備。"]
    ]],
    ["internships","實習培訓",[
      ["實習申請","/zh/services/internship-coaching/","實習方向、申請面試、在崗復盤與成果整理。"],
      ["新傳實習","/zh/services/media-remote-internship/","新聞與傳播類遠程實踐；項目費 £150，任務及時數報名前確認。"],
      ["農業實習","/zh/services/europe-agriculture-internship/","丹麥、德國接收渠道、農場案例、薪酬食宿與申請支援。"],
      ["獅城實習","/zh/services/singapore-internship-support/","TEP 資格、履歷面試、雇主條件與行前預算。"],
      ["美國ITP","/zh/services/usa-itp-support/","J-1 Intern、Trainee 資格、培訓安排、申請準備與費用。"]
    ]],
    ["careers","海外求職",[
      ["國際項目","/zh/services/international-application-support/","CV、PS、資格認證資料、填表及申請跟進；人民幣 ¥2,800 起。"],
      ["履歷面試","/zh/services/english-cv-interview-support/","CV、求職信與 LinkedIn 修改、英文面試；文書修改先報價付款，再詳細審閱。"],
      ["澳洲求職","/zh/australia-job-search-coaching/","求職方向、履歷、面試與入職準備。"],
      ["日本就業","/zh/services/japan-employment-preparation/","特定技能方向、日語、考試、預算與面試。"],
      ["美國OPT","/zh/services/us-opt-job-search-support/","OPT、STEM OPT、申請表與雇主英文溝通。"],
      ["法國就業","/zh/france-study-work-settlement-support/","法國留學、學徒制、申請資格、薪資與求職準備。"]
    ]]
  ]],
  ["living","海外生活","住宿、家校聯絡、旅行及房產管理。",[
    ["family-support","住宿監護",[
      ["寄宿家庭","/zh/services/homestay/","歐洲、澳紐、北美與亞洲；地區服務、合作進度及住宿詢問。"],
      ["英愛寄宿","/zh/services/uk-ireland-homestay/","2027城市與餐食參考價、未成年住宿及供應商詢價。"],
      ["緊急協調","/services/station-dispatch-emergency-coordination/","住宿、接送、文件與跨時區聯絡，向家長更新進度。"],
      ["英國租房","/zh/services/uk-rental-support/","留學生房源比較、租約資料、退租溝通與押金證據整理。"],
      ["香港監護","/zh/services/hong-kong-minor-guardianship-homestay/","校方要求、住宿比較、照顧責任與家校聯絡。"],
      ["學術監護","/services/academic-guardianship-family-office/","學業進度、學校溝通、家長報告與升學規劃。"],
      ["房產管理","/zh/cross-border-property-management/","收樓、租務、維修、當地供應商與業主報告。"]
    ]],
    ["travel","旅行親子",[
      ["旅遊規劃","/zh/services/travel-planning/","親子、K-Pop、藝文、美食、自然等十二類旅行；每日行程與交通住宿規劃。"],
      ["旅行服務","/zh/services/travel-services/","英國自由行、藝文慢旅行、交通住宿比較與預訂協助。"],
      ["首爾親子","/zh/services/seoul-family-kpop-experience/","舞蹈、妝髮與拍攝比較；兒童年齡、家長陪同及預訂協助。"]
    ]]
  ]],
  ["publishing","翻譯出版","文件驗證、出版製作及跨境商務支援。",[
    ["language-documents","翻譯文件",[
      ["中英翻譯","/zh/services/language-context-studio/","中英翻譯、雙語編修與重要文件表達。"],
      ["文件驗證","mailto:office@overseasuk.com?subject=海外文件驗證與代辦諮詢","出生、單身、婚姻及學歷證明；公證、海牙認證（Apostille）、領事驗證與翻譯安排，協調當地授權送件及寄送。按文件簽發地、使用地與期限確認流程及報價；政府、翻譯、當地代辦及快遞費另列。"],
      ["商務保密","/zh/services/language-context-studio/#business-confidentiality","電郵草擬、詢價與對外聯絡；確認後發送，只披露必要資訊。"],
      ["合規文件","/services/compliance-file-audit-copy/","文件索引、證據包與審核副本整理。"]
    ]],
    ["editorial","出版研究",[
      ["出版編輯","/services/publishing-editorial-production/","編輯、雙語排版、ISBN 與數字出版準備。"],
      ["政策簡報","/services/research-policy-briefing/","案頭研究、政策資料、市場筆記與雙語簡報。"],
      ["作品網站","/zh/services/portfolio-website-support/","作品分類、中英專案介紹、網站製作與更新交接；OTC 免費代辦。"]
    ]],
    ["business","跨境商務",[
      ["國際採購","/zh/services/international-sourcing/","供應商搜尋、報價比較、採購跟進與海外客戶開發；按項目報價。"],
      ["生意轉讓","/zh/services/business-transfer/","店舖、企業與資產轉讓；資料整理、買家搜尋、看店及交接協調。"],
      ["AI自動化","/zh/services/ai-workflow-automation/","文件辨識與知識庫、數據報表、影像識別及 AI Agent；需求整理、技術對接與交付協調。"],
      ["AI小舖","/zh/services/ai-tool-shop/","ChatGPT、Claude 方案選擇、訂閱操作協助、實用教學與個別輔導。"]
    ]]
  ]],
  ["partners","機構合作","院校合作、教育活動及機構支援。",[
    ["education-partnerships","教育活動",[
      ["機構合作","/zh/education-partners/","院校合作、項目對接與服務範圍洽談。"],
      ["教育展","/services/education-fairs-institutional-delegations/","活動規劃、參展協調、宣傳與會後跟進。"],
      ["學術會議","/services/academic-conferences-roundtables/","主題、講者、會議材料、成果與會後出版。"]
    ]],
    ["institutional-support","機構培訓",[
      ["市場進入","/services/institutional-market-entry/","市場定位、合作方梳理與服務資料準備。"],
      ["機構認證","/services/education-institution-accreditation-support/","認證準備、政策文件、師資資源與質量保障資料。"],
      ["高管培訓","/services/executive-education-training/","定制工作坊、雙語培訓與學習材料。"],
      ["測評工具","/services/digital-learning-assessment-tools/","學習應用、題庫、分級工具與雙語練習系統。"]
    ]]
  ]]
];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
function link(url){return url.startsWith('/services/')?'https://translate.google.com/translate?sl=auto&tl=zh-TW&u='+encodeURIComponent('https://overseasuk.com'+url):url;}
const renderRows=rows=>`<div class="desk-rows">${rows.map(([name,url,detail])=>`<a class="desk-row" href="${esc(link(url))}"><strong>${name}${url.startsWith('/services/')?'<small>中文自動翻譯</small>':''}</strong><span>${detail}</span><i aria-hidden="true">↗</i></a>`).join('')}</div>`;
module.exports=function(category){
const selected = groups.find(([id]) => id === category);
const categoryPath = id => `/zh/services/categories/${id}/`;
const css=`<style>
.desk-overview .services-hero{border-bottom-color:#d7ad55;background:linear-gradient(90deg,#081525 0%,#0b3153 42%,#d7ad55 42%,#d7ad55 58%,#c8952a 58%,#c8952a 61%,#081525 61%,#081525 100%)}
.desk-overview .desk-section{border-top:0}.desk-overview .desk-jump{border-bottom:0}.desk-overview .service-hero-layout{display:block}.desk-overview .services-hero .desk-hero-buttons{padding:0;margin:10px 0 0;gap:7px}.desk-overview .services-hero .desk-hero-buttons a{font-size:12px!important;line-height:1.3!important;padding:4px 9px!important;min-height:24px!important;border:3px solid transparent;border-radius:3px;background:#ffdc4a;color:#17374b;font-weight:700}.desk-overview .services-hero .desk-hero-buttons a:nth-child(even){background:#fff}.desk-overview .services-hero .desk-hero-buttons a:hover{filter:brightness(.95)}.desk-overview .desk-hero-buttons{display:flex;flex-wrap:wrap;gap:5px;padding-top:8px;padding-bottom:0}.desk-overview .desk-hero-buttons a{display:inline-flex;align-items:center;min-height:24px;box-sizing:border-box;padding:3px 8px;border:1px solid #c9b985;border-radius:3px;background:#fffaf0;color:#17374b;font-size:12px;line-height:1.35;text-decoration:none}.desk-overview .desk-hero-buttons a:hover{background:#f1e5c5}.desk-overview .desk-hero-buttons a:focus-visible{outline:2px solid #b7892c;outline-offset:2px}

.service-desk-page .service-hero-layout{align-items:start}.service-desk-page .service-hero-panel{align-self:start}.service-desk-page .service-hero-panel a{min-height:84px}
.desk-index{padding-top:12px;padding-bottom:28px}.desk-jump{display:flex;flex-wrap:wrap;gap:8px 22px;padding:12px 0 18px;border-bottom:1px solid #c8b89a}.desk-jump a{font-size:14px;font-weight:700;color:#19394d}
.desk-section{--accent:#b7892c;--soft:#fff7e6;margin:22px 0 0;scroll-margin-top:130px;border-top:3px solid var(--accent)}.desk-section:nth-of-type(4n+2){--accent:#3e5f90;--soft:#eef2fa}.desk-section:nth-of-type(4n+3){--accent:#3f7f78;--soft:#edf7f3}.desk-section:nth-of-type(4n+4){--accent:#b24c34;--soft:#fff3ed}
.desk-section-head{display:flex;align-items:baseline;gap:16px;padding:13px 16px;background:var(--soft)}.desk-section-head h2{font-size:21px;margin:0;color:#132f43}.desk-section-head b{color:var(--accent);font-size:12px;margin-right:12px}.desk-section-head p{font-size:13px;margin:0;color:#5d625f}.desk-rows{display:grid;grid-template-columns:1fr}.desk-row{display:grid;grid-template-columns:minmax(9em,28%) minmax(0,1fr) 14px;gap:10px;align-content:start;padding:10px 4px;border-bottom:1px solid #ded7cc;color:#19394d}.desk-row strong{font-size:15px;line-height:1.5}.desk-row span{font-size:13px;line-height:1.6;color:#56616a}.desk-row small{display:block;color:#8a6c32;font-size:10px;font-weight:400}.desk-row i{font-style:normal;color:var(--accent)}.desk-row:hover{background:var(--soft)}
.desk-note{border-top:1px solid #c8b89a;margin-top:24px;padding-top:16px;font-size:13px;color:#56616a}.desk-note p{margin:6px 0}.service-desk-page .service-review-strip{padding-bottom:6px}
@media(max-width:700px){.service-desk-page .service-hero-panel,.service-desk-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.service-desk-page .service-hero-panel a{min-height:70px}.desk-section-head{display:block}.desk-section-head p{margin-top:6px}.desk-jump{gap:10px 18px}}
.desk-study-group{padding:10px 0 4px}.desk-study-group h3{margin:4px 0;font-size:16px;color:#19394d}
.service-desk-page .service-hero-panel a{min-height:52px}
.desk-jump{padding:10px 16px;gap:8px 18px}.desk-jump a{scroll-margin-top:130px;text-decoration:underline;text-underline-offset:3px}
.desk-study-group{padding:14px 16px 4px;scroll-margin-top:130px}.desk-study-group h3{padding-bottom:6px;border-bottom:1px solid #ded7cc}

@media(max-width:600px){.desk-section-head,.desk-jump,.desk-study-group{padding-inline:10px}.desk-row{grid-template-columns:minmax(0,1fr) 14px;gap:3px 8px}.desk-row span{grid-column:1;grid-row:2}.desk-row i{grid-column:2;grid-row:1}}

.desk-overview .services-hero h1{font-size:30px!important;line-height:1.25!important;margin:7px 0!important}.desk-overview .services-hero{background:linear-gradient(90deg,#11263b 0%,#17374b 65%,#842d32 65%,#842d32 85%,#bc9839 85%,#bc9839 90%,#11263b 90%,#11263b 100%)}
.desk-overview .desk-primary-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}.desk-overview .desk-overview-card{padding:12px 14px;background:#eef2f5;scroll-margin-top:100px}.desk-overview .desk-overview-card:nth-child(2){background:#f4eee3}.desk-overview .desk-overview-card:nth-child(3){background:#eaf2ee}.desk-overview .desk-overview-card:nth-child(4){background:#f1edf4}.desk-overview .desk-index h2{font-size:17px!important;margin:0 0 5px!important;border:0!important;padding:0!important;color:#17374b}.desk-overview .desk-index h3{font-size:15px!important;margin:0 0 5px;color:#17374b}.desk-overview .desk-index p{font-size:12px!important;line-height:1.6;margin:4px 0 8px}.desk-overview .desk-index nav{display:flex;flex-wrap:wrap;gap:5px 16px}.desk-overview .desk-index nav a{font-size:12px;line-height:1.6;text-decoration:underline;text-underline-offset:3px}.desk-overview .desk-career,.desk-overview .desk-extra{margin-top:18px;padding:0;border:0;scroll-margin-top:100px}.desk-overview .desk-career{padding:12px 14px;background:#f3f0e7}.desk-overview .desk-extra-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:10px}.desk-overview .desk-extra-grid section{border:0;padding:0;margin:0}@media(max-width:650px){.desk-overview .desk-primary-grid,.desk-overview .desk-extra-grid{grid-template-columns:1fr}.desk-overview .services-hero h1{font-size:27px!important}}
</style>`;
const byId=id=>groups.find(g=>g[0]===id);
const overviewGroups=[
 ['study','留學・規劃','選國、選校、申請與轉學。',byId('study')[3]],
 ['visa','簽證・居留','簽證、移民與居留申請。',byId('visa')[3]],
 ['learning','課程・教學','語言、學科、考試與資格課程。',byId('learning')[3].filter(r=>['tuition','qualifications'].includes(r[0]))],
 ['living','生活・監護','住宿、監護與生活支援。',byId('living')[3]]
];
const overviewLinks=(id,rows)=>rows.map(([key,heading])=>`<a href="${categoryPath(id)}#${key}">${heading}</a>`).join('');
const overviewCard=([id,label,desc,rows])=>`<section class="desk-overview-card" id="${id}"><h2><a href="${categoryPath(id)}">${label}</a></h2><p>${desc}</p><nav aria-label="${label}">${overviewLinks(id,rows)}</nav></section>`;
const careerRows=byId('learning')[3].filter(r=>['internships','careers'].includes(r[0]));
const extras=[['publishing','翻譯・出版','翻譯、文件與出版製作。',byId('publishing')[3].filter(r=>r[0]!=='business')],['publishing','商務・支援','採購、商務對接與AI應用。',byId('publishing')[3].filter(r=>r[0]==='business')],['partners','機構・合作','院校合作、活動與機構支援。',byId('partners')[3]]];
const overview=`<div class="desk-primary-grid">${overviewGroups.map(overviewCard).join('')}</div><section class="desk-career" id="careers"><h2>求職・實習</h2><p>履歷、面試與實習申請。</p><nav aria-label="求職・實習">${overviewLinks('learning',careerRows)}<a href="/zh/services/international-application-support/">海外工作與國際項目專業陪跑</a></nav></section><section class="desk-extra" id="professional"><h2>專業・合作</h2><div class="desk-extra-grid">${extras.map(([id,label,desc,rows])=>`<section><h3>${label}</h3><p>${desc}</p><nav aria-label="${label}">${overviewLinks(id,rows)}</nav></section>`).join('')}</div></section>`;
const moreGroups=[{group:['careers','求職・實習','履歷、面試與實習申請。',careerRows],ids:['careers'],href:categoryPath('learning'),extra:[{label:'國際項目',href:'/zh/services/international-application-support/'}]},...extras.map((g,i)=>({group:g,ids:[i?'':'professional'],href:categoryPath(g[0])}))];
const overviewButtons=[...overviewGroups.map(([id,label])=>[id,label]),['careers','求職・實習'],['professional','專業・合作']];
const title=selected?.[1] ?? '服務總台';
const body=css+`<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout">
<div><div class="eyebrow">${selected?'OTC 服務':'海外督導｜雙語世界'}</div><h1${!selected?' style="font-size:30px!important;line-height:1.25!important"':''}>${title}</h1><p class="hero-sub">${selected?.[2] ?? '按需要選擇服務類別。'}</p>${selected?'<a class="btn btn-secondary" href="/zh/services/">返回服務總覽</a>':''}</div>
${selected?`<nav class="service-hero-panel" aria-label="服務分類">${groups.map(([id,label])=>`<a href="${selected?categoryPath(id):'#'+id}"><strong>${label}</strong></a>`).join('')}</nav>`:''}
${!selected?`<nav class="desk-hero-buttons" aria-label="服務分類">${overviewButtons.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')}</nav>`:''}
</div></div></section>
<main class="band desk-index">${selected?categoryDirectory(selected,link):overviewDirectory(overviewGroups,moreGroups,categoryPath)}</main>`;
return pageShell({title:title+'｜海外督導 OTC',path:selected?categoryPath(category):'/zh/services/',lang:'zh-Hant',locale:'zh',current:'services',bodyClass:selected?'service-desk-page':'service-desk-page desk-overview',description:selected?.[2] ?? '留學規劃、簽證居留、課程教學、生活監護；求職實習與專業合作。',image:selected?'':'/assets/social/service-desk-us-style-20261122.png?v=20261122-gold-red',imageWidth:1200,imageHeight:440,imageAlt:'服務總台｜海外督導・雙語世界',body}).replace(/[ \t]+$/gm,'').replace('>Translate the page · English</a>',selected?'>Translate the page · English</a>':'>English</a>');
};
module.exports.categories=groups.map(([id])=>id);

