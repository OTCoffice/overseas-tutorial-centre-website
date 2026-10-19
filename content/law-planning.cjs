const {pageShell}=require('../site');
const academic=require('./academic-subpage.cjs');
const route='/zh/subject-planning/law/';
const title='法學升學與職涯規劃｜選課、資格、實習與求職';
const description='從高中申本科、法本升碩士、非法本轉法學到法學求職與海外資格規劃；比較 LLB、JD、LLM、研究型學位，準備實習作品與求職材料。';
const table=(heads,rows)=>`<div class="law-table" tabindex="0" role="region" aria-label="${heads[0]}比較"><table><thead><tr>${heads.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((v,i)=>i?`<td>${v}</td>`:`<th scope="row">${v}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function render(){let body=`
<nav class="law-breadcrumb" aria-label="所在位置"><a href="/zh/subject-planning/">學科規劃</a> / 法學</nav>
<section><h2>按目前階段選路線</h2><div class="law-routes">
<article><h3>高中申本科</h3><p>核對高中課程、成績、英文及指定入學測試；比較 LLB 的核心科目、選修、學費與實習機會。</p><a href="#degrees">查看學位比較 →</a></article>
<article><h3>法本升碩士</h3><p>用成績單、修課與寫作經歷選擇商法、國際法等 LLM；研究取向則核對論文、方法訓練及導師。</p><a href="#examples">查看 LLM 申請例子 →</a></article>
<article><h3>非法本轉法學</h3><p>按目的地比較 JD、可接受非法律背景的課程或轉讀路線。先確認課程是否提供核心法律訓練，再查執業要求。</p><a href="#qualifications">核對資格路線 →</a></article>
<article><h3>法學生求職</h3><p>從具體職缺出發，整理實習、課程與個人練習，準備履歷、求職信、筆試和面試。</p><a href="#consultation" data-intent="career">準備法學求職 →</a></article>
<article><h3>已有資格者海外發展</h3><p>整理資格證明、執業紀錄及年資，查當地認可、考試或豁免；同步確認目標職位與工作權利。</p><a href="#qualifications">查看海外資格核對 →</a></article></div></section>
<section id="degrees"><h2>學位怎樣選</h2><p>同名學位在不同地區的用途可以不同。逐校核對入學背景、核心與選修科目、教學語言，以及目標執業地的認可。</p>
${table(['學位','入學背景','課程目的','目標執業地核對'],[
['LLB 法學本科','一般以高中或同等資格申請；另有畢業生入學課程。','建立核心法律知識、案例閱讀與論證寫作。','確認當地承認的學術科目；畢業後可能仍需專業課程、考試或實務訓練。'],
['JD 法律博士','通常要求已有本科學位；指定測試、成績及背景要求依院校。','在提供此類路線的地區，作為畢業生的基礎專業法律教育；名稱含博士不等同研究博士。','查該課程與目標地區的認可及考試資格，不能套用另一國的 JD 規則。'],
['LLM 法學碩士','不少課程要求法律學位，部分接受相關背景；須逐課程確認。','深化商法、國際法等方向；選課、專題及論文安排各異。','專業深化學位並不自動補足執業資格；某些路線對科目、學分及授課形式另有規定。'],
['研究型學位','研究碩士或博士通常審核相關學歷、研究計劃、寫作及導師匹配。','訓練研究方法、形成論文，面向法律研究或學術發展。','研究學位不直接授予律師資格；兼顧執業者須另行規劃。']])}</section>
<section><h2>職涯方向</h2>${table(['方向','工作內容例子','準備重點'],[
['律所','案件檢索、交易文件、訴訟或盡職調查支援，依部門與職級分工。','案例分析、精準寫作、程序意識；核對職位要求的資格及當地法律知識。'],
['企業法務','閱讀及修訂商業合約，與銷售、採購和管理團隊溝通法律風險。','用合約條款說明風險、替代方案與商業影響，練習簡明業務溝通。'],
['合規','梳理適用規則、內部政策、審查流程與培訓紀錄。','把規則轉成可執行的檢查表，了解目標行業與升級匯報流程。'],
['隱私與資料保護','資料處理流程、隱私文件及影響評估支援。','資料流梳理、風險辨識與跨部門溝通；按地區熟悉適用制度。'],
['法律研究','檢索法規與判例、文獻整理、研究助理或政策分析。','來源可靠性、引註、研究問題與方法，準備可說明本人貢獻的寫作樣本。']])}<p>職稱不等於資格要求；企業法務、合規等職缺仍可能要求當地資格、相關年資或工作許可，按招聘公告逐項確認。</p></section>
<section id="examples"><h2>升學與求職例子</h2><div class="law-examples"><article><h3>申請商法 LLM</h3><p>例如：法本學生修過公司法，曾以股東保障為題撰寫課程論文。申請材料可連結成績、公司法訓練、論文問題與目標課程中的公司治理選修，說明想進一步研究什麼。</p><p><strong>準備成果：</strong>課程與入學要求比較表、研究興趣提綱、真實寫作樣本及個人陳述素材。</p></article><article><h3>應徵企業法務</h3><p>例如：職缺要求協助審閱供應商合約。可用自擬合約做個人練習，整理付款、責任上限及終止條款的疑點，附檢索來源，再用一頁短箋向採購同事說明風險與可商議選項。</p><p><strong>準備成果：</strong>針對職缺的履歷、合約閱讀樣本、筆試及情境面試練習。模擬成果須標示個人練習，不冒充實習或客戶案件。</p></article></div></section>
<section><h2>實習與作品</h2><p>申請實習時，先核對工作內容、申請期限、語言、在讀身分與工作權利，再準備能展示能力的材料。</p>${table(['作品','可展示內容','標示方式'],[
['法律檢索紀錄','問題、法域、關鍵字、資料庫或官方來源、檢索日期與結論限制。','註明「個人練習」、資料日期及引用來源。'],
['案例摘要','公開判決的事實、爭點、裁判理由與可討論之處。','引用公開案號與原文連結，區分法院觀點與本人分析。'],
['模擬合約審閱','以自擬或合法可用的公開範本，標出條款風險、修改建議及理由。','註明「模擬合約／個人練習」，不呈現為真實法律意見或客戶委託。']])}<p>不得上傳或展示客戶資料、未公開交易、公司內部文件或受保密約束的內容；既有工作成果須先確認使用權與授權，無法確認時改用自擬練習。</p></section>
<section><h2>求職準備</h2><ol><li><strong>分析職缺：</strong>整理職位、法域、行業、語言、資格、年資及申請期限。</li><li><strong>整理真實經歷：</strong>區分課程、個人練習、實習與正式工作，寫清楚本人做過的任務與成果。</li><li><strong>修改材料：</strong>按職缺調整履歷與求職信，用具體事例連結要求，保留可核對的經歷。</li><li><strong>筆試與面試：</strong>練習限時檢索、案例或合約閱讀、短篇業務建議及情境問答，逐次回饋。</li></ol><p>OTC 協助選校、材料整理與練習，不代造經歷，不保證錄取、實習、工作或取得資格。</p></section>
<section id="qualifications"><h2>資格與官方來源</h2><p class="law-note"><strong>取得學位不等於可以直接執業。</strong>以下為常見目的地的核對入口，並非全球資格清單。資料核對日期：<time datetime="2026-10-19">2026年10月19日</time>；申請前按個人學歷、已有資格及當期規則重新確認。</p>
${table(['地區／路線','核對內容','官方來源'],[
['英格蘭及威爾斯 · solicitor','一般 SQE 路線涉及學位或同等資格／經驗、SQE、兩年合資格工作經驗及品格要求；已有資格律師另查豁免及適用規則。蘇格蘭、北愛爾蘭另有制度。','<a href="https://www.sra.org.uk/become-solicitor/sqe/qa/">SRA · SQE 要求</a><br><a href="https://sqe.sra.org.uk/about/who-can-take-sqe">已有資格律師與過渡安排</a>'],
['香港 · solicitor','本地入職路線查 PCLL 入學科目與專業訓練要求；已有海外資格者另查 OLQE 適用條件及豁免。','<a href="https://www.hklawsoc.org.hk/en/Maintain-Standards/Admission-Standards">香港律師會 · 入職標準</a><br><a href="https://www.hklawsoc.org.hk/en/Maintain-Standards/OLQE">OLQE</a>'],
['美國紐約州 · 海外法學學歷','先向 BOLE 申請資格預先評估；特定 LLM 可能補足指定不足，但不是任何 LLM 都符合。考試資格與最終入職要求須分開確認，其他州另查。','<a href="https://www.nybarexam.org/Foreign/ForeignLegalEducation.htm">NY BOLE · Foreign Legal Education</a>'],
['澳洲新南威爾斯州 · 海外學歷／資格','海外學歷須按 LPAB 規則評估；已有海外資格者亦須核對實務訓練與經驗評估。其他州或領地向當地機構確認。','<a href="https://lpab.nsw.gov.au/admission-overseas-lawyers/assessment-skills-and-qualifications.html">NSW LPAB · 學歷與資格評估</a>']])}<p>資格認可、職位錄用與簽證／工作權利是不同要求；OTC 可協助整理核對清單，正式認定由當地主管機構作出。</p></section>
<section><h2>費用與諮詢</h2>${table(['項目','OTC 服務費','範圍確認'],[
['留學申請','人民幣 2,800 元','選校、入學要求及材料準備等具體範圍，開始前以委託約定確認。'],
['法學求職','按項目另行確認','履歷、求職信、筆試、面試與作品回饋，按需求及次數列明。'],
['資格考試輔導','按考試與科目另行確認','先核對報考條件，再確認科目、課時與輔導費。'],
['第三方費用','另列、另計','院校申請費、學費、資格評估與考試費、語言測試、翻譯認證及簽證等，依實際需要列出。']])}</section>
<section id="consultation"><h2>開始諮詢</h2><p>先填寫學歷、目標地區、職位或方向、語言程度及期限，再選擇升學或求職。資料只會在按下聯絡按鈕時帶入 WhatsApp 草稿，確認後由你傳送。</p>
<form id="law-form"><div class="law-fields"><label>學歷與專業<input name="education" required placeholder="例如：法學本科大四"></label><label>目標國家／地區<input name="region" required placeholder="例如：香港"></label><label>目標職位／升學方向<input name="target" required placeholder="例如：企業法務／商法 LLM"></label><label>語言程度<input name="language" required placeholder="例如：IELTS 6.5／英文閱讀程度"></label><label>申請或求職期限<input name="deadline" required placeholder="例如：2027年1月前"></label></div><div class="actions"><button class="btn btn-primary" type="submit" name="intent" value="study">規劃法學升學</button><button class="btn btn-secondary" type="submit" name="intent" value="career">準備法學求職</button></div><p id="law-status" role="status"></p><p>也可直接電郵 <a href="mailto:office@overseasuk.com?subject=法學升學與求職諮詢">office@overseasuk.com</a>，附上以上五項資料。微信：overseasus。</p></form></section>
<style>.consolidated-page.law-page{max-width:1440px;width:calc(100% - 64px);box-sizing:border-box;margin:auto;padding:24px}.law-page section{padding:25px 0;border-bottom:1px solid #cbd2d7;scroll-margin-top:100px}.law-page h2{font-size:26px;color:#173e59;border-top:3px solid #173e59;padding-top:16px;margin:0 0 18px}.law-page h3{font-size:19px;color:#173e59;margin:0 0 10px}.law-page p,.law-page li{font-size:16px;line-height:1.85}.law-breadcrumb{font-size:14px}.law-routes,.law-examples{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.law-routes article,.law-examples article{padding:18px;background:#f7f4ec;border-left:3px solid #b88a2d}.law-routes article:nth-child(4n+2){border-color:#a75043}.law-routes article:nth-child(4n+3){border-color:#438076}.law-routes article:nth-child(4n){border-color:#54708a}.law-table{overflow:auto;margin:18px 0}.law-table table{border-collapse:collapse;width:100%;min-width:640px;font-size:15px;line-height:1.75}.law-table th,.law-table td{text-align:left;vertical-align:top;border-bottom:1px solid #ced4d6;padding:13px}.law-table thead{background:#173e59;color:white}.law-table tbody th{width:19%;background:#f4f1e9;color:#173e59}.law-page a{color:#174b69;text-underline-offset:3px}.law-note{background:#f1f4f5;padding:16px;border-left:4px solid #b88a2d}.law-fields{display:grid;grid-template-columns:1fr 1fr;gap:16px}.law-fields label{font-size:15px;font-weight:700}.law-fields input{width:100%;box-sizing:border-box;margin-top:8px;padding:12px;border:1px solid #8d9da8;font:inherit;border-radius:0}.law-page button{cursor:pointer;font:inherit}.law-page .btn-primary,.law-page .btn-secondary{color:#173e59}.law-page :focus-visible{outline:3px solid #b88a2d;outline-offset:3px}@media(max-width:700px){.consolidated-page.law-page{width:100%;padding:16px}.law-routes,.law-examples,.law-fields{grid-template-columns:1fr}.law-page h2{font-size:23px}.law-page .actions{display:flex;flex-wrap:wrap}}</style>
<script>(()=>{let intent=new URLSearchParams(location.search).get('intent')==='career'?'career':'study';document.querySelectorAll('[data-intent]').forEach(a=>a.addEventListener('click',()=>{intent=a.dataset.intent;document.getElementById('law-status').textContent='已選擇：準備法學求職。請填寫以上資料。';}));if(intent==='career')document.getElementById('law-status').textContent='已選擇：準備法學求職。';document.getElementById('law-form').addEventListener('submit',e=>{e.preventDefault();intent=e.submitter?.value||intent;const data=new FormData(e.target);const message=['OTC 法學諮詢：'+(intent==='career'?'準備法學求職':'規劃法學升學'),...['education','region','target','language','deadline'].map((k,i)=>['學歷與專業','目標地區','目標職位／升學方向','語言程度','期限'][i]+'：'+data.get(k))].join('\\n');location.href='https://wa.me/447947991572?text='+encodeURIComponent(message);});})();</script>`;
let content=academic(title,body).replace('class="consolidated-page"','class="consolidated-page law-page"').replace('教育服務與雙語學習','升學・資格・實習・求職').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','從目前學歷與目標工作出發，選擇法學課程，安排實習及求職準備。').replace('href="https://wa.me/447947991572">立即諮詢','href="#consultation">開始法學諮詢');
return pageShell({title:title+'｜海外督導 OTC',current:'zh',lang:'zh-Hant',locale:'zh',path:route,description,body:content});}
module.exports={route,title,description,render};
