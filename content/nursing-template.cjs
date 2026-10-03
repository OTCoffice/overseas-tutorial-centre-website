const {pageShell}=require('../site');
const academic=require('./academic-subpage.cjs');
const root='/zh/nursing/';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const official=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener">${label} ↗</a>`;
const sources={
 ecu:'https://www.ecu.edu.au/degrees/courses/master-of-nursing-graduate-entry',
 sydney:'https://www.sydney.edu.au/courses/courses/pc/master-of-nursing.html',
 monash:'https://www.monash.edu/study/courses/find-a-course/nursing-practice-m6016?international=true',
 nmba:'https://www.nursingmidwiferyboard.gov.au/',
 graduate:'https://www.nursingmidwiferyboard.gov.au/Codes-Guidelines-Statements/FAQ/Graduate-Applications-FAQs-NMBA',
 iqnm:'https://www.nursingmidwiferyboard.gov.au/Accreditation/IQNM/Before-you-apply',
 iqrn:'https://www.nursingmidwiferyboard.gov.au/Registration-Standards/General-registration-for-IQRN.aspx',
 anmac:'https://www.anmac.org.au/skilled-migrants',
 fees:'https://www.anmac.org.au/skilled-migrants/fees',
 updates:'https://www.anmac.org.au/upcoming-changes-to-anmac-skilled-migration-services',
 visas:'https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list',
 rounds:'https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds'
};
const table=(heads,rows)=>`<div class="nursing-table" role="region" aria-label="${heads.join('、')}" tabindex="0"><table><thead><tr>${heads.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,i)=>i?`<td>${x}</td>`:`<th scope="row">${x}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function fees(){return `<h2>服務與費用</h2><p>海外督導 OTC｜海圖規劃・留學諮詢，協助選校、申請材料、院校聯絡與進度跟進。需要護士註冊、求職或移民相關支援時，先確認可協助的工作及負責人士。</p>${table(['項目','OTC 協助','收費安排'],[
 ['澳洲院校申請','核對課程、入學要求、申請材料及補件進度。','可辦理院校及課程提供免費申請代辦；委託前確認範圍。'],
 ['語言與學習支援','按需要安排英文、學術學習或考試準備。','另行報價；免費代辦不包含輔導課時。'],
 ['註冊文件與求職','文件清單、翻譯協調、英文履歷與面試準備。','按工作內容報價，開始前確認交付項目。'],
 ['移民與簽證','整理公開資料，協調合資格人士提供個別建議。','專業服務與政府費用另計，事前確認提供者及報價。']
 ])}<p class="nursing-note">院校申請費、學費、保險、語言考試、認證翻譯、護士註冊、技能評估及簽證等第三方費用，由相關機構收取。</p>`;}
function hub(){return `<h2>國家與地區</h2><p>由自己的學歷、註冊地及工作經驗開始，再比較目的地。讀護理、取得護士註冊和取得居留資格，各有不同要求。</p><a class="nursing-country" href="${root}australia/"><span>AUSTRALIA</span><strong>澳洲護士</strong><p>護理升學、海外護士註冊、技能評估、求職與移民資訊。</p><em>查看澳洲專頁 →</em></a><p class="nursing-muted">英國、紐西蘭、加拿大及美國資料將分國家整理；目前先提供澳洲完整專頁。</p>
<h2>申請背景</h2><div class="nursing-columns"><section><h3>準備讀護理</h3><p>尚未有護理學歷，或已有其他學位想轉行。先比較本科與入行型碩士，核對先修課、英語、實習、全程費用及課程認可。</p><a href="${root}australia/#courses">澳洲課程與選校 →</a></section><section><h3>已有護士資格</h3><p>先查看目標國家的海外護士註冊程序。現有學歷、執照、近期臨床經驗及英語程度，會影響準備內容；不先假設必須再讀一個碩士。</p><a href="${root}australia/#registration">澳洲註冊資料 →</a></section><section><h3>準備求職與移居</h3><p>整理護士註冊狀態、臨床專科、工作經驗、履歷與目標城市。工作資格、僱主條件和簽證分別核對。</p><a href="${root}australia/#migration">澳洲求職與移民 →</a></section></div>
<h2>準備流程</h2><ol class="nursing-steps"><li><strong>確認背景</strong><p>學歷、現有護士資格、工作經驗、語言與目的地。</p></li><li><strong>比較要求</strong><p>分開記錄入學、專業註冊、求職及簽證所需條件。</p></li><li><strong>安排預算</strong><p>課程、生活、考試及申請費用分項列出，另預留文件與評估時間。</p></li><li><strong>確認委託</strong><p>寫明服務內容、負責單位、費用與跟進方式，再開始正式申請。</p></li></ol>
${fees()}
<h2>常見問題</h2><details><summary>護理碩士都能用來轉行嗎？</summary><p>不能單看學位名稱。入行型課程與供在職護士進修的課程用途不同，須核對課程對象及專業註冊認可。</p></details><details><summary>可以只諮詢留學，不規劃移民嗎？</summary><p>可以。選校與申請可以獨立辦理；是否日後註冊、工作或移居，按個人目標另作安排。</p></details>`;}
function australia(){return `<h2>申請背景</h2><p>先選擇與你相符的情況。已有海外護士資格的人，應先查註冊要求；非護理背景想轉行的人，則從課程選擇開始。</p><div class="nursing-columns"><section><h3>未有護理學歷</h3><p>比較護理本科與 Graduate Entry／Pre-registration 碩士，核對入學及實習要求。</p><a href="#courses">查看課程 →</a></section><section><h3>已有海外護士資格</h3><p>按學歷、註冊與執業經歷核對 NMBA／Ahpra 的適用程序。</p><a href="#registration">查看註冊 →</a></section><section><h3>已取得澳洲註冊</h3><p>準備求職，再按擬申請簽證核對技能評估及其他條件。</p><a href="#migration">查看求職與移民 →</a></section></div>
<h2><span id="courses">護理課程</span></h2><p>想以留學進入護士行業，先確認課程是否屬註冊前教育。部分 Master of Nursing 是供已有護士資格者進修，不能單憑「碩士」兩字判斷用途。完成核准課程後，仍須申請註冊並符合當時的註冊標準。${official(sources.graduate,'NMBA 畢業生註冊說明')}</p>
${table(['院校與課程','課程用途','選校時核對'],[
 ['Edith Cowan University（ECU）<br>Master of Nursing (Graduate Entry)','非護理學位畢業者的入行型課程；國際生全日制 2 年。','需大學程度人體生物學科目；未符合者須按校方要求補修。核對學歷等值及英語要求。<br>'+official(sources.ecu,'ECU 官方課程')+'<br><a href="#contact">向 OTC 查詢申請 →</a>'],
 ['悉尼大學<br>Master of Nursing','Graduate-entry 課程，為註冊護士專業實務作準備。','核對當季申請資格、選拔安排、語言與實習要求。<br>'+official(sources.sydney,'悉尼大學官方課程')+'<br><a href="#contact">向 OTC 查詢申請 →</a>'],
 ['Monash University<br>Master of Nursing Practice','為已有非護理本科學位者提供的入行型課程。','核對先修課、開學批次、英語及臨床實習安排。<br>'+official(sources.monash,'Monash 官方課程')+'<br><a href="#contact">向 OTC 查詢申請 →</a>']
 ])}<p>以上是課程比較起點，並非排名或錄取承諾。是否適合你、當季是否接受申請，以及 OTC 可辦理的課程，均須逐項確認。選校亦應比較租屋、交通、實習地點與總預算。</p>
<h2><span id="registration">護士註冊</span></h2><p>NMBA 制定專業註冊標準，Ahpra 處理相關申請。海外護士應先閱讀國際申請人說明，按學歷、註冊地及執業經歷確認適用評估程序，再安排文件、語言或所需考試。</p><p>2025 年 4 月 23 日生效的 IQRN 標準為符合條件的海外註冊護士提供簡化程序，資格與認可地區的註冊及執業經歷有關；不等於所有海外護士均可免考。${official(sources.iqrn,'IQRN 官方標準')} · ${official(sources.iqnm,'海外護士申請前說明')}</p><p>若你的評估程序涉及考試，應以 Ahpra 的要求安排。NCLEX-RN、實務考核、英語測試及其他要求的適用情況，不能按社群經驗一概套用。${official('https://www.nursingmidwiferyboard.gov.au/Accreditation/IQNM/Examination/Multiple-choice-question-exam.aspx','NMBA 考試說明')}</p>
<div class="nursing-note"><strong>註冊與技能評估</strong><p>NMBA／Ahpra 的護士註冊處理執業資格；ANMAC 的技能評估用於相應移民程序。兩者用途不同，也不能替代簽證。${official(sources.anmac,'ANMAC 官方說明')}</p></div>
<h2><span id="migration">求職與移民</span></h2><p>求職時整理註冊狀態、臨床科別、近期經驗、推薦人及可到職時間，再比較醫院與其他僱主的職位要求。${official(sources.anmac,'澳洲執業及評估資料')} · <a href="/zh/australia-job-search-coaching/">OTC 澳洲求職服務 →</a></p>
${table(['方向','需要另外核對'],[
 ['技術移民：189／190／491','相關職業清單、技能評估、積分、邀請，以及州／領地提名要求（如適用）。'],
 ['僱主相關：482／186','適用類別、僱主提名、職位、經驗及個人申請條件。']
 ])}<p>上述為官方簽證類別的查詢方向，不代表護士自動符合資格。職業在清單上，也不等於已獲邀請或獲批。${official(sources.visas,'Home Affairs 職業清單與簽證')} · ${official(sources.rounds,'SkillSelect 邀請及州提名說明')}</p><p>個人簽證策略與移民申請，由澳洲註冊移民代理或其他依法可提供相關服務的合資格人士確認。</p>
<h2>時間與預算</h2><p>課程修業期、註冊評估期、求職期及簽證審理期應分開安排。已有護士資格者，不先加入一段未必需要的留學時間；須讀課程者，也不要把畢業日當成確定的註冊或入職日。</p>
${table(['費用項目','核查時可見資料／預算方式'],[
 ['ECU 入行型碩士','官網國際生首年指示性學費 AUD 47,200；課程 2 年。此數字不是全程總學費，後續年度及實際選課收費須另確認。'+official(sources.ecu,'學費來源')],
 ['ANMAC 技能評估','核查日價目：Modified AUD 395；Full AUD 595。類別取決於資格，不可只按價格選擇。'+official(sources.fees,'官方價目')],
 ['其他第三方費用','語言／所需考試、護士註冊、翻譯認證、體檢、簽證及保險，按實際申請項目列支。'],
 ['生活與實習','住宿、交通、實習期間的通勤或異地住宿另計；按城市與課程實習安排估算。']
 ])}<p class="nursing-note">資料核查：2026 年 10 月 3 日。ANMAC 已公告將調整申請系統、評估名稱及費用，實施時間與過渡安排以${official(sources.updates,'最新公告')}為準；本頁數字不作未來申請報價。</p>
<h2>申請流程</h2><ol class="nursing-steps"><li><strong>說明背景</strong><p>本科專業、護士資格與註冊地、工作經驗、英語、預計入學或出發年份。</p></li><li><strong>確認方向</strong><p>分清升學、海外資格註冊及已註冊後求職；列出需要向院校或主管機構確認的問題。</p></li><li><strong>材料與費用</strong><p>準備學歷、成績、課程資料及適用的工作證明；按服務範圍確認免費項目、報價與時間。</p></li><li><strong>申請與跟進</strong><p>按授權協助申請、補件和聯絡；各機構審核結果分別跟進。</p></li></ol>
${fees()}
<h2>常見問題</h2><details><summary>已有護士執照，還要讀澳洲碩士嗎？</summary><p>不一定。先確認現有資格適用的註冊程序，再決定是否需要進修；碩士不是所有海外護士的共同前置條件。</p></details><details><summary>護理畢業就能拿永久居留嗎？</summary><p>不能據此判斷。畢業、護士註冊、技能評估、僱主或州提名，以及簽證審批都有各自條件。</p></details><details><summary>免費代辦包含哪些服務？</summary><p>限已確認可辦理院校及課程的申請代辦。護士註冊、語言或考試輔導、求職與移民專業服務須另確認；第三方費用不包括在內。</p></details>`;}
module.exports=function(slug){
 const a=require('./'+slug+'.json'),au=slug==='nursing-australia';
 const text='你好，我想諮詢'+(au?'澳洲護士':'海外護士發展')+'。\n本科專業：\n現有護士資格／註冊地（如有）：\n工作經驗：\n英語程度：\n目標國家及年份：';
 const wa='https://wa.me/447947991572?text='+encodeURIComponent(text);
 const email='mailto:office@overseasuk.com?subject='+encodeURIComponent(a.name+'諮詢')+'&body='+encodeURIComponent(text);
 const image=a.shareImageZh+'?'+a.socialImageVersion;
 const contact=`<h2><span id="contact">聯絡海外督導</span></h2><p>先告訴我們專業、現有護士資格、目標國家與年份；如未確定方向，也可以先說明你希望了解哪一部分。</p><p><strong>海外督導 OTC｜海圖規劃・留學諮詢</strong></p><div class="actions"><a class="btn btn-primary" href="${esc(wa)}">WhatsApp 諮詢</a><a class="btn" href="${esc(email)}">電郵諮詢</a></div><p><a href="tel:+447947991572">+44 7947 991572</a> · <a href="mailto:office@overseasuk.com">office@overseasuk.com</a><br>微信：overseasus</p><p class="nursing-muted">初次諮詢毋須提供護照、證件號碼或財務證明；正式文件另按需要安排。</p><div class="nursing-foot"><figure><img src="${image}" alt="${esc(a.name+'：'+a.sub)}" width="1200" height="630" loading="lazy"><figcaption>${a.name} · OTC 專題</figcaption></figure><div><h3>資料說明</h3><p>資料核查：2026 年 10 月 3 日。公開資料供一般規劃參考；入學、註冊及簽證以主管機構當期要求為準。OTC 提供教育諮詢與協調，個別移民及專業資格意見由相應合資格人士處理；不保證錄取、註冊、工作或居留結果。</p><p><a href="/zh/services/#visa">移民與簽證</a> · <a href="/zh/immigration-info/">各國移民資訊</a>${au?' · <a href="/zh/nursing/">護士總覽</a>':''} · <a href="/">OTC 主頁</a></p></div></div>`;
 let body=academic(a.name,(au?australia():hub())+contact)
 .replace('<h2>教育服務與雙語學習</h2>',`<h2>${a.sub}</h2>`)
 .replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',a.summaryZh)
 .replace('href="https://wa.me/447947991572">立即諮詢','href="#contact">諮詢服務')
 .replace('href="/zh/site-directory/">全站目錄','href="'+(au?root:'/zh/services/#visa')+'">'+(au?'護士總覽':'移民與簽證'));
 const breadcrumb=`<nav class="band nursing-breadcrumb" aria-label="頁面位置"><a href="/">首頁</a><span>／</span><a href="/zh/services/#visa">移民與簽證</a><span>／</span>${au?'<a href="/zh/nursing/">海外護士發展</a><span>／</span><span aria-current="page">澳洲</span>':'<span aria-current="page">海外護士發展</span>'}</nav>`;
 body=body.replace('<main class="consolidated-page">','<main class="consolidated-page nursing-main">');
 return pageShell({title:a.titleZh,current:'services',path:a.path,locale:'zh',lang:'zh-Hant',description:a.summaryZh,image,imageWidth:1200,imageHeight:630,imageAlt:a.name+'：'+a.sub,body:css+breadcrumb+body,bodyClass:'nursing-page'}).replace(/<a class="page-parent-link"[^>]*>.*?<\/a>/,`<a class="page-parent-link" href="${au?root:'/zh/services/#visa'}">${au?'返回護士總覽':'返回移民與簽證'}</a>`).replace(/[ \t]+$/gm,'');
};
const css=`<style>
.nursing-breadcrumb{display:flex;flex-wrap:wrap;gap:9px;padding-top:14px;padding-bottom:14px;font-size:13px;color:#52616a}.nursing-page .services-hero h1{font-size:clamp(32px,5vw,56px)}.nursing-page .service-hero-layout{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:36px;align-items:center}.nursing-page .services-hero{background:linear-gradient(110deg,#081525,#0b3153)}.nursing-page .services-hero .band{padding-top:32px;padding-bottom:32px}.nursing-page .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr));align-self:center}.nursing-page .service-hero-panel a:nth-child(1)::before{content:"01"}.nursing-page .service-hero-panel a:nth-child(2)::before{content:"02"}.nursing-page .service-hero-panel a:nth-child(3)::before{content:"03"}.nursing-page .service-hero-panel a:nth-child(4)::before{content:"04"}.nursing-page .service-hero-layout>div>p:not(.hero-sub){font-size:14px;line-height:1.5;margin:18px 0 0}.nursing-page .services-hero .hero-sub{font-size:16px;line-height:1.8;max-width:620px}.nursing-page .services-hero h2{font-size:20px;line-height:1.5;margin:14px 0}.nursing-page .service-hero-panel strong{line-height:1.4}.nursing-page .service-hero-panel span{font-size:12px;line-height:1.5}.nursing-page .service-hero-panel a{min-height:76px}.nursing-main{max-width:1120px;margin:auto;padding:18px 24px 44px;line-height:1.85;color:#19394d}.nursing-main h2{border-top:3px solid #19394d;padding-top:20px;margin:36px 0 18px;font-size:26px;scroll-margin-top:110px}.nursing-main h2 span{scroll-margin-top:115px}.nursing-main h3{font-size:19px;margin:0 0 10px}.nursing-main a{text-decoration:underline;text-underline-offset:4px;color:#244e66}.nursing-main p{font-size:16px;margin:12px 0}.nursing-columns{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.nursing-columns section{border-top:2px solid #c6a86c;padding:17px 0;min-width:0}.nursing-country{display:block;background:#f4f0e8;border:1px solid #c6a86c;padding:24px;text-decoration:none!important}.nursing-country span{font-size:12px;letter-spacing:.15em}.nursing-country strong{display:block;font-size:26px}.nursing-country em{font-style:normal;font-size:14px}.nursing-muted{font-size:14px!important;color:#60707a}.nursing-table{overflow-x:auto;margin:18px 0;border:1px solid #d9d5cb}.nursing-table table{width:100%;border-collapse:collapse;font-size:14px;min-width:580px;margin:0}.nursing-table th,.nursing-table td{padding:15px 18px;vertical-align:top;text-align:left;border-bottom:1px solid #d9d5cb}.nursing-table thead th{background:#19394d;color:#fff}.nursing-table tbody th{font-weight:600;width:25%;background:#f6f3eb}.nursing-table tbody tr:last-child>*{border-bottom:0}.nursing-table a{display:inline-block;margin-top:6px}.nursing-note{padding:18px 22px;border-left:3px solid #b78b37;background:#f5f0e5;font-size:14px!important}.nursing-note p{font-size:14px}.nursing-steps{padding-left:24px;display:grid;grid-template-columns:1fr 1fr;column-gap:45px;row-gap:14px}.nursing-steps li{padding:5px 10px}.nursing-steps p{margin:4px 0}.nursing-main details{padding:15px 0;border-bottom:1px solid #d9d5cb}.nursing-main summary{font-weight:600;cursor:pointer}.nursing-main .btn{color:#173e59;text-decoration:none}.nursing-foot{display:grid;grid-template-columns:260px 1fr;gap:28px;margin-top:30px;padding-top:24px;border-top:1px solid #c6a86c}.nursing-foot figure{margin:0}.nursing-foot img{display:block;width:100%;height:auto}.nursing-foot figcaption{font-size:12px;color:#60707a}.nursing-foot p{font-size:13px}.nursing-page :focus-visible{outline:3px solid #b78b37;outline-offset:4px}
@media(max-width:700px){.nursing-page .service-hero-layout{grid-template-columns:1fr;gap:22px}.nursing-page .services-hero .band{padding-top:24px;padding-bottom:24px}.nursing-main{padding:10px 18px 32px}.nursing-columns,.nursing-steps,.nursing-foot{grid-template-columns:1fr}.nursing-columns{gap:4px}.nursing-main h2{font-size:23px}.nursing-page .service-hero-panel,.nursing-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.nursing-foot figure{max-width:320px}.nursing-table th,.nursing-table td{padding:12px}.nursing-page .hero-sub{font-size:16px}.nursing-main{overflow-wrap:anywhere}}
</style>`;
