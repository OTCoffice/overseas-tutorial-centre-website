const {pageShell}=require('../site');
const a=require('./singapore-internship-support.json');
const desk=require('./service-desk.cjs');
const summerHero=require('./summer-alliance-hero.cjs');
const intro='你好，我想諮詢新加坡實習。\n學校、專業與年級：\n課程實習要求與可出發日期：\n英語程度：\n是否已有雇主：\n預算與需要協助的事項：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('新加坡實習諮詢')+'&body='+encodeURIComponent(intro);
const groups=[
['eligibility','TEP 資格','課程實習、院校與薪資條件。',[
['實習性質','專業、管理、行政或專門職務的實務培訓；由接收雇主申請。'],
['學生條件','培訓須屬在讀課程的一部分，並就讀 MOM 接受的院校，或固定月薪至少 S$3,000。'],
['實習期限','最長三個月，不可續期。全年實習須先與學校確認分段安排或其他適用方案。'],
['大專學生','按學校、課程與薪資條件核對；大專在讀身分本身不代表符合資格。'],
['薪資條件','S$3,000 是其中一項申請條件，並非所有 TEP 學生的保證薪資。'],
['重複申請','曾持 TEP 者，不能就同類培訓再次取得 TEP；企業受訓人員另有適用要求。']]],
['placement','實習安排','接收雇主、工作內容與學校認可。',[
['職位與培訓','按專業、英語能力、課程要求及可到職日期，查找有具體培訓內容的接收單位。'],
['書面條件','確認培訓目標、指導人員、地點、期限、工時、薪資、住宿與扣款。'],
['學校認可','出發前確認是否計入實習學分，以及學校要求的證明與考核。'],
['職缺與許可','職缺及名額以雇主回覆為準。TEP、TWP 與打工度假各有條件，須分別核對。']]],
['services','OTC 服務','諮詢、申請準備與行前支援。',[
['資格與方向','核對課程實習、院校與官方資格，整理合適的申請方向。'],
['履歷與面試','協助英文履歷、求職信、雇主聯絡及面試準備。'],
['條件與溝通','整理接收方回覆，協調學校文件，核對培訓、薪資與住宿條件。'],
['文件與行前','整理材料、翻譯與進度，提供住宿交通資料；准證由雇主按官方程序申請。']]],
['documents','申請材料','首次諮詢與正式申請。',[
['首次諮詢','護照國家／地區、年齡、學校、專業、年級、實習要求、日期、英語程度與預算。'],
['護照資料','正式申請準備護照個人資料頁；首次諮詢毋須先傳證件影本。'],
['培訓計劃','列明培訓目標、類型、地點與期限；課程、在讀及薪資材料按個案要求準備。'],
['翻譯與補件','非英文文件附英文翻譯，與原件合併提交；其餘材料按雇主與 MOM 要求整理。']]],
['process','申請流程','從諮詢到出發。',[
['01 諮詢','確認學校要求、TEP 資格、實習月份與預算。'],
['02 委託','確認服務範圍、交付內容、費用與書面條款。'],
['03 雇主','準備履歷及面試，取得接收雇主的書面培訓與薪資條件。'],
['04 准證','由雇主提交申請，按通知補件並完成獲批後手續。'],
['05 行前','確認學校認可、住宿、保險、交通及返程安排。']]],
['fees','費用','服務收費與實習期間支出。',[
['初次諮詢','免費了解需求並說明服務範圍。'],
['OTC 陪跑','按協助內容與期間書面報價；委託前確認付款、取消及退款條款。'],
['雇主與項目費','若有招聘、培訓或住宿安排費，確認提供方、內容、付款對象與取消條款。'],
['官方與第三方費','准證、翻譯、文件及保險另計；付款安排依官方要求與雇主書面條件。'],
['生活與交通','機票、住宿、押金、餐食、當地交通、通訊與備用金；提供住宿不一定免費。'],
['預計結餘','期間實收薪資減去生活、住宿、交通、保險及各項申請費；未確認的加班、獎金與小費不計入固定收入。']]],
['faq','常見問題','資格、期限與申請方式。',[
['全年實習','TEP 無法涵蓋全年。須確認學校是否接受短期培訓，或改評估其他方案。'],
['先辦准證再求職','TEP 由接收雇主申請，須先有實際培訓安排。'],
['與美國 SWT 比較','兩者的目的、資格、時段與費用不同，按個人條件分別比較。'],
['錄用與結果','本頁提供申請支援，未公布已確認在招職位；不承諾錄用、薪資或准證結果。']]],
['public-cases','公開案例','為保護客戶私隱，本頁僅提供公開來源案例；以下均非 OTC 經辦個案。',[
['大專在校生','程可：2024年赴新加坡伊頓實習，六個月校企合作安排；准證類別未公開。','/zh/insights/singapore-paid-internship-mainland-chinese-guide/#public-cases'],
['經貿短期實習','Jia Sibin：2024年完成PECC約兩個月實習，參與貿易與勞動市場數據分析。','/zh/insights/singapore-paid-internship-mainland-chinese-guide/#public-cases'],
['TEP歷史案例','Humberto Malavé：2011年本人報告記載取得TEP；背景與現行條件須分別核對。','/zh/insights/singapore-paid-internship-mainland-chinese-guide/#public-cases']]],
['contact','聯絡我們','提供學校、專業與實習月份。',[
['WhatsApp','+44 7947 991572',wa],['電郵','office@overseasuk.com',email],['服務導覽','查看 OTC 其他服務。','/zh/services/'],['打工度假聯盟','比較各國青年及暑期工作交流。','/zh/work-travel-alliance/']]],
['sources','官方項目與外部連結','官方資格、項目資訊與申請入口；不代表OTC合作或代理關係。',[
['YES青年實習計劃','新中雙邊青年實習；名額、期限與確認書要求按計劃單獨核對。','https://yes.businesschina.org.sg/zh-hans/'],
['PECC實習計劃','HKCPEC遴選及提名香港高等院校學生；非通用招聘入口。','https://www.hkcpec.org/en/Internship-Programme/'],
['資格與期限','TEP 適用條件與最長期限。','https://www.mom.gov.sg/passes-and-permits/training-employment-pass/eligibility'],
['申請文件','護照、培訓計劃與英文翻譯要求。','https://www.mom.gov.sg/passes-and-permits/training-employment-pass/documents-required'],
['辦理流程','由接收雇主按官方程序提出申請。','https://www.mom.gov.sg/passes-and-permits/training-employment-pass/apply-for-a-pass'],
['院校資料','查閱 MOM 接受的院校資料。','https://www.mom.gov.sg/passes-and-permits/training-employment-pass/list-of-acceptable-institutions']]]
];
module.exports=()=>{
// Reuse the exact service-desk styles rather than applying a separate type scale.
const css=desk().match(/<style>[\s\S]*?<\/style>/)[0].replace(/\.service-desk-page \.service-hero-layout\{[^}]*\}\.service-desk-page \.service-hero-panel\{[^}]*\}\.service-desk-page \.service-hero-panel a\{[^}]*\}/,'');
let hero=summerHero().split('<section class="band service-review-strip"')[0];
hero=hero.replace('SUMMER SCHOOL HUB','SINGAPORE INTERNSHIP').replace('海外督導｜寒暑校聯盟','海外督導｜新加坡實習').replace('UK · Australia · New Zealand · Malaysia · Singapore · Thailand · USA · Canada','TEP 資格 · 課程實習 · 申請支援').replace('為中學生提供全球優質暑期學術項目，探索興趣，提升背景，為未來升學做好準備。','核對實習資格、接收雇主、課程要求與費用，安排申請及行前準備。');
hero=hero.replace(/<div class="actions">[\s\S]*?<\/div>/,`<div class="actions"><a class="btn btn-primary" href="${wa}">實習諮詢</a><a class="btn btn-secondary" href="${email}">發送需求</a></div>`);
hero=hero.replace(/<aside class="service-hero-panel"[\s\S]*?<\/aside>/,`<aside class="service-hero-panel" aria-label="新加坡實習"><a href="#eligibility"><strong>TEP 資格</strong><span>課程、院校與薪資條件</span></a><a href="#placement"><strong>實習安排</strong><span>最長三個月・雇主申請</span></a><a href="#services"><strong>申請服務</strong><span>履歷、面試與文件</span></a><a href="#fees"><strong>費用</strong><span>服務收費與生活支出</span></a></aside>`);
const strip=`<section class="band service-review-strip"><a href="#documents"><b>DOC</b><strong>申請材料</strong><span>課程要求與培訓計劃</span></a><a href="#process"><b>APPLY</b><strong>申請流程</strong><span>諮詢、雇主與准證</span></a><a href="#fees"><b>COST</b><strong>實習預算</strong><span>薪資、住宿與各項支出</span></a><a href="#contact"><b>ASK</b><strong>服務諮詢</strong><span>說明專業、日期與需求</span></a></section>`;
const sections=groups.map(([id,title,desc,rows],i)=>`<section class="desk-section" id="${id}"><header class="desk-section-head"><h2><b>${String(i+1).padStart(2,'0')}</b>${title}</h2><p>${desc}</p></header><div class="desk-rows">${rows.map(([name,detail,url])=>url?`<a class="desk-row" href="${url}"><strong>${name}</strong><span>${detail}</span><i aria-hidden="true">↗</i></a>`:`<div class="desk-row"><strong>${name}</strong><span>${detail}</span></div>`).join('')}</div></section>`).join('');
const body=css+hero+strip+`<main class="band desk-index"><nav class="desk-jump" aria-label="實習內容">${groups.map(([id,title],i)=>`<a href="#${id}">${String(i+1).padStart(2,'0')} ${title}</a>`).join('')}</nav>${sections}<div class="desk-note"><p>資料核查：2026 年 10 月 2 日。資格與程序以 MOM 最新要求為準。</p><p>OTC 提供教育協調、文件整理與申請支援；受監管的就業、移民或合約意見由當地合資格人士處理。</p></div><figure class="singapore-share-proof"><img src="${a.shareImageZh}?${a.socialImageVersion}" width="${a.socialImageWidth}" height="${a.socialImageHeight}" loading="lazy" alt="本頁題頭與服務導覽"></figure></main>`;
return pageShell({title:a.titleZh,path:a.path,description:a.summaryZh,current:'services',lang:'zh-Hant',locale:'zh',bodyClass:'service-desk-page singapore-service-page',image:a.shareImageZh+'?'+a.socialImageVersion,imageWidth:a.socialImageWidth,imageHeight:a.socialImageHeight,imageAlt:'新加坡實習題頭與服務導覽',body:body+'<style>.singapore-share-proof{max-width:480px;margin:28px 0 0}.singapore-share-proof img{display:block;width:100%;height:auto}</style>'});
};
