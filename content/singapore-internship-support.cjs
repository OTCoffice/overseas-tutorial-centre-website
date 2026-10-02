const {pageShell}=require('../site');
const academic=require('./academic-subpage.cjs');
const a=require('./singapore-internship-support.json');
const intro='你好，我想諮詢新加坡實習。\n護照國家／地區與年齡：\n學校、專業與在讀年級：\n學校實習要求及可出發日期：\n英語程度與相關經驗：\n是否已有接收雇主／職位：\n預算及希望協助的事項：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('新加坡實習諮詢')+'&body='+encodeURIComponent(intro);
const row=(id,n,title,body)=>`<section class="exchange-row" id="${id}"><div class="exchange-label"><span>${n}</span><h2>${title}</h2></div><div>${body}</div></section>`;
const table=(caption,headers,rows)=>`<div class="exchange-table" tabindex="0" role="region" aria-label="${caption}"><table><caption>${caption}</caption><thead><tr>${headers.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r.slice(1).map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
module.exports=()=>{
const body=`<nav class="exchange-nav" aria-label="新加坡實習內容"><a href="/zh/work-travel-alliance/">打工度假聯盟</a><a href="#eligibility">資格</a><a href="#placement">實習</a><a href="#services">服務</a><a href="#fees">費用</a><a href="#contact">諮詢</a></nav>
${row('eligibility','01','TEP 資格',`<p>Training Employment Pass（TEP）用於符合條件的外國學生或企業受訓人員，在新加坡接受專業、管理、行政或專門職務的實務培訓。由接收雇主提出申請。</p><p><strong>期限最長 3 個月，不可續期。</strong>需要半年或全年實習的學生，應先與學校確認能否分段完成，或另找符合完整期限的安排。</p><p>外國學生的培訓須屬於在讀課程的一部分，並符合以下其中一項：就讀 MOM 接受的院校，或固定月薪至少 <strong>S$3,000</strong>。企業受訓人員另有海外辦公室或子公司關係及薪資要求。大專在讀身分本身不代表符合資格。</p><p>S$3,000 是其中一項申請條件，並非每位 TEP 學生的保證薪資。曾持 TEP 者，不能就同類培訓再次取得 TEP。</p><p><a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/eligibility">MOM 資格與期限</a> · <a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/list-of-acceptable-institutions">MOM 院校資料</a></p>`)}
${row('placement','02','實習安排',`<p>按所學專業、課程要求、英語能力及可到職日期，查找有具體培訓內容的接收單位。申請前確認職務、培訓目標、指導人員、地點、期限、工時、薪資與住宿條件。</p><p>本頁提供申請支援，沒有公布已確認的合作雇主或在招職位。職缺及名額須以雇主當期書面回覆為準；OTC 不承諾錄用、薪資或工作准證結果。</p><p>若學校安排大三全年實習，可先評估能否將新加坡短期培訓計入學分。不同許可有各自條件，不能直接把 TEP 改稱為六個月 TWP 或打工度假方案。</p><p><a href="https://www.mom.gov.sg/passes-and-permits/training-work-permit/eligibility">TWP 資格</a> · <a href="https://www.mom.gov.sg/passes-and-permits/work-holiday-programme/eligibility">新加坡打工度假資格</a> · <a href="/zh/usa-summer-work-travel/">美國 SWT</a></p>`)}
${row('services','03','OTC 服務',`<p><strong>申請諮詢：</strong>核對學校、課程實習要求、期限與官方資格，整理適合本人條件的申請方向。</p><p><strong>申請準備：</strong>協助英文履歷、求職信、雇主聯絡及面試練習；按需要整理公開招聘渠道與接收方回覆。</p><p><strong>條件比較：</strong>整理培訓內容、薪資、工時、住宿扣款與合約待確認事項，與學校協調實習證明及學分要求。</p><p><strong>文件與行前：</strong>協助材料清單、翻譯、申請進度及住宿交通資料。准證由雇主按 MOM 程序申請；涉及受監管的就業、移民或合約意見時，轉介當地合資格人士。</p>`)}
${row('documents','04','申請材料',`<p>首次諮詢提供護照國家／地區、年齡、學校、專業、在讀年級、實習要求、可出發月份、英語程度、經驗與預算即可，毋須先傳護照影本。</p><p>正式申請按雇主與 MOM 要求準備護照個人資料頁，以及列明目標、類型、地點和期限的詳細培訓計劃；學校課程／實習證明、在讀材料、薪資條件及其他文件按個案整理。非英文文件須附英文翻譯，與原件合併提交。</p><p><a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/documents-required">MOM 文件清單</a></p>`)}
${row('process','05','流程',`<ol><li><strong>諮詢：</strong>確認課程實習、學校資格、期限與預算。</li><li><strong>委託：</strong>列明服務範圍、交付內容及書面報價。</li><li><strong>申請：</strong>準備履歷及面試，取得接收雇主的培訓與薪資條件。</li><li><strong>准證：</strong>由雇主提交 TEP 申請，按通知補件及處理獲批後手續。</li><li><strong>行前：</strong>確認學校認可、住宿、保險、交通與返程安排。</li></ol><p><a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/apply-for-a-pass">MOM 申請程序</a></p>`)}
${row('fees','06','費用',table('服務與實習預算',['項目','安排'],[
['初次諮詢','免費了解需求、說明官方資格與服務範圍。'],
['OTC 申請陪跑','履歷面試、材料整理、學校與雇主溝通及行前支援，按內容與期間書面報價；委託前確認付款、取消及退款條款。'],
['雇主與項目費','若有招聘、培訓或住宿安排費，先核對提供方、實際內容、付款對象及取消條款。'],
['官方及第三方費','准證、翻譯、文件、保險等另計；由誰支付，以官方要求及雇主書面安排為準。'],
['生活與交通','往返機票、住宿與押金、餐食、當地交通、通訊及備用資金；雇主提供住宿不一定免費。']
])+`<p><strong>預計結餘＝期間實收薪資－住宿與生活支出－交通、保險及各項申請費。</strong>加班、獎金及小費未獲書面確認前不列入固定收入。不要只比較月薪，還要比較總工時、住宿扣款及整段實習成本。</p>`)}
${row('faq','07','常見問題',`<details><summary>大專學生可以申請嗎？</summary><p>需按具體學校與課程、培訓是否屬課程一部分，以及院校或薪資條件核對。可先提供學校與專業，不以學歷名稱直接判定。</p></details><details><summary>TEP 可以做一整年實習嗎？</summary><p>不能。TEP 最長三個月且不可續期；若學校要求全年實習，需事先確認其他合適安排。</p></details><details><summary>和美國 SWT 一樣嗎？</summary><p>TEP 是以具體培訓為目的的工作准證；美國 SWT 是另一套暑期工作交流計劃。申請資格、工作內容、時段及費用均需分別比較。</p></details><details><summary>可以只申請准證，再自己找工作嗎？</summary><p>TEP 由接收雇主申請。應先有實際培訓安排與雇主條件，再按官方流程辦理。</p></details>`)}
<section class="exchange-contact" id="contact"><h2>新加坡實習諮詢</h2><p>告訴我們學校、專業、實習要求與可出發日期；已有職位或雇主回覆，也可以一併提供。我們按實際情況確認可協助的內容。</p><div class="actions"><a class="btn btn-primary" href="${wa}">WhatsApp 諮詢</a><a href="${email}">電郵諮詢</a></div><p class="exchange-meta">WhatsApp +44 7947 991572 · office@overseasuk.com</p></section>
<section class="exchange-sources"><div><h2>官方資料</h2><p><a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass">Training Employment Pass</a> · <a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/key-facts">准證基本資料</a> · <a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/eligibility">資格與期限</a> · <a href="https://www.mom.gov.sg/passes-and-permits/training-employment-pass/documents-required">申請文件</a></p><p>資料核查：2026 年 10 月 2 日。資格與辦理程序以新加坡人力部最新要求為準。</p><p><a href="/zh/work-travel-alliance/">打工度假聯盟</a> · <a href="/zh/services/">服務導覽台</a></p></div></section>`;
const cover=`${a.shareImageZh}?${a.socialImageVersion}`;
const hero=`<section class="singapore-hero"><div class="singapore-hero-inner"><div class="singapore-masthead"><h1 class="singapore-sr-only">新加坡帶薪實習</h1><figure class="singapore-cover"><img src="${cover}" width="1200" height="630" fetchpriority="high" alt="新加坡帶薪實習｜TEP 資格・申請支援・行前準備"></figure></div><aside class="singapore-intro"><p>按課程要求與出發時間，核對實習資格、接收雇主及生活預算。</p><div class="singapore-facts"><a href="#eligibility"><strong>TEP 資格</strong><span>課程、院校與薪資條件</span></a><a href="#placement"><strong>實習期限</strong><span>最長三個月・不可續期</span></a><a href="#services"><strong>申請支援</strong><span>履歷、面試與材料</span></a><a href="#fees"><strong>費用預算</strong><span>薪資、住宿與第三方費用</span></a></div><div class="actions"><a class="btn btn-primary" href="${wa}">實習諮詢</a><a class="btn btn-secondary" href="/zh/work-travel-alliance/">打工度假聯盟</a></div></aside></div></section>`;
const shortcuts=`<nav class="singapore-shortcuts" aria-label="實習服務導覽"><a href="#documents">申請材料</a><a href="#process">申請流程</a><a href="#fees">服務費用</a><a href="#contact">聯絡我們</a></nav>`;
const layout=hero+shortcuts+`<main class="exchange-page">${body}</main>`;
const css=`<style>
.singapore-internship-page{--sg-navy:#163347;--sg-gold:#b98c38;font-family:"Noto Sans TC","Microsoft JhengHei",sans-serif;font-size:16px;line-height:1.75;color:var(--sg-navy)}
.singapore-internship-page *{box-sizing:border-box}
.singapore-hero{background:#f6f3ec;border-bottom:3px solid var(--sg-navy);padding:32px 24px}
.singapore-hero-inner{max-width:1120px;margin:auto;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:32px;align-items:center}
.singapore-sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip-path:inset(50%);white-space:nowrap}
.singapore-cover{margin:0}.singapore-cover img{display:block;width:100%;height:auto;border:1px solid #d5d0c5}
.singapore-intro>p{font-size:16px!important;line-height:1.75!important;margin:0 0 20px}
.singapore-facts{display:grid;grid-template-columns:1fr 1fr;gap:18px 22px;margin-bottom:24px}
.singapore-facts a{display:block;text-decoration:none;border-top:3px solid var(--sg-gold);padding:10px 0 0}
.singapore-facts a:nth-child(2){border-color:#ae5946}.singapore-facts a:nth-child(3){border-color:#54708d}.singapore-facts a:nth-child(4){border-color:#54857c}
.singapore-facts strong{display:block;font-size:18px!important;line-height:1.5!important;font-weight:600!important}
.singapore-facts span{display:block;font-size:14px!important;line-height:1.6!important;color:#54636c;margin-top:4px}
.singapore-internship-page .btn{font-size:16px!important;line-height:1.5!important;min-height:44px;padding:12px 18px!important}
.singapore-shortcuts{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0;padding:0 24px;border-bottom:1px solid #c9c2b4}
.singapore-shortcuts a{font-size:16px!important;font-weight:600;padding:16px 12px;text-align:center;text-decoration:none;border-top:3px solid var(--sg-gold)}
.singapore-shortcuts a:nth-child(2){border-color:#54708d}.singapore-shortcuts a:nth-child(3){border-color:#54857c}.singapore-shortcuts a:nth-child(4){border-color:#ae5946}
.exchange-page{max-width:1120px;margin:auto;padding:24px 24px 48px}
.exchange-page p,.exchange-page li,.exchange-page th,.exchange-page td,.exchange-page summary{font-size:16px!important;line-height:1.8!important}
.exchange-page p{margin:0 0 14px}.exchange-page h2{font-size:24px!important;line-height:1.4!important;font-weight:600!important;margin:0 0 16px!important;letter-spacing:0!important}
.exchange-page a{color:#234b66;text-underline-offset:4px}.exchange-nav{display:flex;flex-wrap:wrap;gap:12px 24px;padding:0 0 20px;font-size:14px}
.exchange-row{display:grid;grid-template-columns:180px minmax(0,1fr);gap:32px;border-top:2px solid var(--sg-navy);padding:28px 0;scroll-margin-top:120px}
.exchange-label{display:flex;align-items:baseline;gap:12px}.exchange-label>span{font-size:14px!important;color:#876a36}
.exchange-table{overflow:auto;max-width:100%;margin-bottom:18px}.exchange-page table{border-collapse:collapse;width:100%;min-width:520px}
.exchange-page caption{font-size:14px;line-height:1.6;text-align:left;padding-bottom:10px;color:#54636c}
.exchange-page th,.exchange-page td{text-align:left;vertical-align:top;padding:14px;border-bottom:1px solid #d6d1c7}
.exchange-page thead{background:#ede9df}.exchange-page tbody th{width:160px;font-weight:600}
.exchange-page ol{padding-left:24px;margin:0 0 16px}.exchange-page li{margin-bottom:12px}
.exchange-page details{border-bottom:1px solid #d6d1c7;padding:14px 0}.exchange-page summary{font-weight:600;cursor:pointer}.exchange-page details p{margin:12px 0 0}
.exchange-contact{padding:28px;background:#edf2ee;border-left:3px solid #54857c;scroll-margin-top:120px}
.exchange-page .exchange-meta{font-size:14px!important;line-height:1.6!important;margin:18px 0 0;overflow-wrap:anywhere}
.exchange-sources{margin-top:32px;border-top:1px solid #d6d1c7;padding-top:24px}.exchange-sources p{font-size:14px!important;line-height:1.75!important}
.singapore-internship-page a:focus-visible,.exchange-page summary:focus-visible,.exchange-table:focus-visible{outline:3px solid var(--sg-gold);outline-offset:4px}
@media(max-width:760px){.singapore-hero{padding:20px 18px}.singapore-hero-inner{grid-template-columns:1fr;gap:22px}.singapore-intro>p{margin-bottom:16px}.singapore-facts{gap:16px 20px}.singapore-shortcuts{grid-template-columns:repeat(2,1fr);padding:0 18px}.singapore-shortcuts a{padding:14px 8px}.exchange-page{padding:24px 18px 36px}.exchange-row{grid-template-columns:1fr;gap:4px;padding:24px 0}.exchange-page h2{font-size:22px!important}.exchange-page table{min-width:440px}.exchange-contact{padding:22px}.singapore-internship-page .actions{gap:12px;flex-wrap:wrap}}
</style>`;
return pageShell({title:a.titleZh,path:a.path,description:a.summaryZh,current:'services',lang:'zh-Hant',locale:'zh',bodyClass:'singapore-internship-page',image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:1200,imageHeight:630,imageAlt:'新加坡帶薪實習：TEP 資格、申請支援與費用',body:css+layout});
};
