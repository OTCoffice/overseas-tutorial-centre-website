const {pageShell}=require('../site');
const route='/zh/subject-planning/social-work/';
const title='社工升學與職業規劃';
const description='社工本科、轉專業碩士與海外就業準備；澳洲 AASW 認可、悉尼大學入學、英語要求、薪資及技術移民途徑。';
const table=(heads,rows)=>`<div class="sw-table"><table><thead><tr>${heads.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((x,i)=>i?`<td>${x}</td>`:`<th scope="row">${x}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function render(){return pageShell({title:title+'｜海外督導 OTC',description,current:'zh',lang:'zh-Hant',locale:'zh',path:route,image:'/assets/social/social-work-share-20261105.jpg',socialImageVersion:'v=20261105',imageWidth:1200,imageHeight:600,twitterCard:'summary_large_image',body:`
<section class="page-hero services-hero sw-hero"><div class="band"><div class="eyebrow">SOCIAL WORK</div><h1>社工升學與職業規劃</h1><p class="hero-sub">課程認可・實習與就業・薪資與移民</p></div></section>
<main class="band sw-main"><nav aria-label="所在位置"><a href="/zh/subject-planning/">學科規劃</a> ／ 社工</nav>
<p>社工服務涉及兒童與家庭、精神健康、醫療、身心障礙及社區支援。選校時同時看專業認可、實習安排及目標就業地的資格要求。本頁先整理澳洲路線，其他國家須另按當地制度評估。</p>
<section><h2>升學路線</h2>${table(['目前階段','選課方向','申請準備'],[
['高中畢業','社會工作本科（Bachelor of Social Work）','高中成績、英文、課程認可及實習要求。澳洲認可本科通常為四年。'],
['已有其他本科','Master of Social Work (Qualifying)','核對人類發展、社會科學等先修內容；部分課程要求相關工作經驗。通常為兩年，並非任何本科都能直接申請。'],
['已有社工學歷','海外資格評估或專業進修','整理學位、成績、課綱、受督導實習及工作證明，再查目標地的認可方式。']])}<p>Social Policy、Community Services、Counselling 及非 Qualifying 社工碩士，不能直接當作取得社工專業資格的課程。澳洲選校先查 <a href="https://www.aasw.asn.au/education-employment/higher-education-providers/accredited-courses/">AASW 認可課程名單</a>。</p></section>
<section><h2>澳洲・悉尼大學</h2>${table(['課程','重點'],[
['Bachelor of Social Work','AASW 認可本科；最後兩年安排兩段不同場域的實習，合計超過140天。<a href="https://www.sydney.edu.au/arts/study/undergraduate-courses/our-degrees-explained/bachelor-of-social-work-explained.html">本科課程說明</a>'],
['Master of Social Work (Qualifying)','2027年課程規章要求本科或同等學歷、具備人類發展與社會方面的先修知識，以及人類與社區服務行業工作經歷證明，並須滿足英文要求。<a href="https://www.sydney.edu.au/handbooks/2027/arts/postgraduate/coursework/social-work-qualifying/course-resolutions.html">2027入學規章</a>'],
['入讀前核對','向學校確認工作經驗是否足夠、實習地點與時間、背景審查、交通安排，以及國際生當期學費。<a href="https://www.sydney.edu.au/courses/courses/pc/master-of-social-work-qualifying.html">碩士課程與費用查詢</a>']])}<p>實習需要面談、評估、個案紀錄及專業英文寫作。預算應包括全程學費、生活費、保險、實習交通和相關審查費；不要預設實習有薪，或實習期間仍能維持原有兼職時數。</p></section>
<section><h2>澳洲職業評估與英文</h2><p>Social Worker 的移民職業評估機構是 AASW。國際學生完成澳洲認可課程後，仍須按移民用途申請適用的評估；入學英文、AASW 評估及簽證英文是不同要求。</p>${table(['項目','要求'],[
['IELTS Academic','一般要求總分及四項均至少7.0；符合政策時可使用六個月內最多兩次考試的成績，每項須達7.0，且任何單項不得低於6.5。考試形式、有效期與合併方式按提交時政策核對。'],
['英文豁免','須符合 AASW 指定國家的英文中學及高等教育條件；僅在澳洲取得一個學位，不會自動獲豁免。'],
['就業資格','另按所在州、僱主及職位核對註冊、會員資格、背景審查與工作權利；不把 AASW 評估等同工作簽證。']])}<p><a href="https://www.aasw.asn.au/education-employment/migration-eligibility-assessment/">AASW 評估與英文政策</a></p></section>
<section><h2>澳洲薪資</h2>${table(['統計口徑','金額（澳元）'],[
['全職社工稅前週薪中位數','AUD 2,172'],
['按52週換算','約 AUD 112,944／年（11.3萬）']])}<p>來源為 Jobs and Skills Australia 公布的 ABS 2025年5月薪資調查，屬全職成年非管理職員工的統計，並非應屆畢業生起薪或到手收入。該 ANZSCO 系列已停止更新；實際職缺須另比較年資、地區、工時及退休金是否另計。<a href="https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations-anzsco/2725-social-workers">薪資資料與口徑</a></p></section>
<section><h2>澳洲移民途徑</h2><p>Social Worker（ANZSCO 272511）列於相關技術職業清單；畢業、通過評估或取得工作，不會自動取得永久居留。</p>${table(['途徑','主要門檻'],[
['189 技術獨立','獲邀時未滿45歲、合適職業評估、英文及積分等要求；65分是基本積分門檻，並非保證獲邀的分數。'],
['190 州擔保','需州／領地提名及符合簽證要求；各州另訂職業、就業或居住條件，名額與標準可能調整。'],
['491 偏遠地區','屬臨時居留路線，涉及州提名或符合條件的親屬擔保及地區要求；日後轉永居另須滿足條件。'],
['僱主擔保','可核對482、186等適用途徑；僱主、職位、工作經驗、薪資及簽證要求須逐項確認。']])}<p><a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list?srckeyword=2725">職業清單</a> · <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189">189官方要求</a> · <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds/">邀請輪次</a></p></section>
<section><h2>申請與求職準備</h2><ol><li>提供最高學歷、完整成績單、英文成績、預算及目標國家。</li><li>轉專業申請另提供課程描述、工作履歷及服務經歷證明，核對先修課與課程認可。</li><li>比較課程、學費及實習安排，再準備個人陳述、推薦資料與正式申請。</li><li>求職階段按目標職缺整理履歷及面試例子；不提供可識別服務對象的個案資料。</li></ol></section>
<section><h2>OTC服務與費用</h2><p>可先免費梳理基本資料，確認適合本科、轉專業碩士或已有資格者的路線。OTC可協助選校、入學材料及英文履歷準備；正式代辦與獨立諮詢按院校及服務範圍先確認收費。學費、簽證、職業評估、考試、保險及第三方費用另計。</p><p><a href="/zh/services/university-application-advisory/">選校與申請服務</a> · <a href="/zh/services/english-cv-interview-support/">履歷與面試</a> · <a href="mailto:office@overseasuk.com">office@overseasuk.com</a></p><p class="sw-date">資料核對：2026年11月5日。課程、職業評估及移民規則以申請時官方要求為準。</p></section></main>
<style>.sw-hero{min-height:0!important}.sw-hero .band{padding-top:18px!important;padding-bottom:18px!important}.sw-main{max-width:1100px;margin:auto;padding-top:18px!important}.sw-main section{padding:12px 0;border:0!important}.sw-main h2{font-size:20px!important;border:0!important;margin:10px 0!important;padding:0!important}.sw-main p,.sw-main li{font-size:14px;line-height:1.8}.sw-table{overflow-x:auto}.sw-table table{width:100%!important;min-width:0!important;table-layout:fixed!important;border-collapse:collapse}.sw-table th,.sw-table td{font-size:14px!important;padding:10px!important;overflow-wrap:anywhere;text-align:left;vertical-align:top}.sw-table th:first-child{width:26%!important}.sw-table thead{background:#162e43;color:white}.sw-date{color:#66717b}@media(max-width:600px){.sw-main{padding-left:16px!important;padding-right:16px!important}.sw-table th,.sw-table td{font-size:12px!important;padding:8px!important}.sw-table th:first-child{width:28%!important}}</style>`});}
module.exports={route,title,description,render};
