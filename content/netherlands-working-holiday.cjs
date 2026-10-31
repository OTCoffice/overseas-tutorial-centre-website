const {pageShell}=require('../site');
const frame=require('./academic-subpage.cjs');
const path='/zh/work-travel-alliance/netherlands/';
const title='荷蘭打工度假｜WHP／WHS 申請與諮詢｜海外督導 OTC';
const description='荷蘭打工度假：香港、台灣及其他協定護照的年齡、名額、MVV流程、工作限制與費用；OTC收費諮詢、文件及行前準備。';
const image='/assets/social/netherlands-working-holiday-compact-v3.jpg';
const ind='https://ind.nl/en/residence-permits/au-pair-and-exchange/residence-permit-working-holiday';
const abroad='https://www.netherlandsworldwide.nl/visa-the-netherlands/whp';
function render(){
const body=`<nav class="nl-nav"><a href="/zh/work-travel-alliance/">打工度假聯盟</a><a href="#eligibility">申請資格</a><a href="#process">申請流程</a><a href="#work">工作規定</a><a href="#fees">費用與服務</a></nav>
<p>核查日期：2026年10月31日。WHP／WHS以文化交流為主要目的，最長一年，不可延長。</p>
<section id="eligibility"><h2>申請資格</h2><p>申請時18–30歲。適用阿根廷、澳洲、加拿大、香港、日本、紐西蘭、台灣、烏拉圭及韓國的指定國籍／護照；中國大陸普通護照不適用，持其他國家的居留權本身不會取得資格。</p><div class="nl-table"><table><thead><tr><th>護照／地區</th><th>年度上限</th><th>申請渠道</th></tr></thead><tbody><tr><td>香港</td><td>100名</td><td>荷蘭駐香港總領事館；MVV及居留許可</td></tr><tr><td>台灣</td><td>100名</td><td>荷蘭在台辦事處登記，獲選後申請MVV及居留許可</td></tr><tr><td>日本、韓國</td><td>各200名</td><td>IND直接申請，免MVV</td></tr><tr><td>阿根廷、烏拉圭</td><td>各100名</td><td>按所屬地區領事渠道申請</td></tr><tr><td>澳洲、加拿大、紐西蘭</td><td>查閱適用官方規定</td><td>IND直接申請，免MVV</td></tr></tbody></table></div><p>須有足夠生活資金、回程機票或購票資金及醫療保險，並符合一般及雙邊協定條件。IND另列明：不得曾持一般居留許可在荷蘭居住；有荷蘭居留紀錄者須逐項核對。<a href="${ind}">IND完整資格</a></p></section>
<section id="process"><h2>申請流程</h2><p><strong>香港：</strong>官方安排自每年1月起每月釋出20個預約位，直至全年100名用完；須在香港總領事館申請。預約位與當日剩餘名額以官方系統為準。</p><p><strong>台灣：</strong>官方列出3月、10月及2月各三週的登記階段，具體日期及方法由荷蘭在台辦事處公告。獲選後按通知申請；本頁未確認當期仍開放或有剩餘名額。</p><ol><li>核對護照、年齡、居留紀錄及所屬地區規定，完成適用登記或預約。</li><li>按官方表格準備護照、資金、保險及其他證明；需要時辦理翻譯與驗證。</li><li>香港、台灣申請人在領事程序後，按IND規定於表格註記日期起三週內寄交材料並繳費。</li><li>獲批後領取MVV再赴荷蘭，依通知領居留卡、辦理市政登記及BSN。IND通常在收到申請後90日內作決定，行程須留餘裕。</li></ol><p>台灣申請人的市政登記另須留意經驗證的戶籍謄本或出生證明。<a href="${abroad}">各地申請及預約官方說明</a></p></section>
<section id="work"><h2>工作規定</h2><p>工作用於補貼交流期間開支，符合規定的附帶工作免雇主另辦TWV。可以全職，但不可全年為同一雇主工作，也不可自僱。可修短期課程；此項目不等同一般長期工作居留。</p><p>求職與住宿須自行安排，不以尚未取得的薪資代替出發前生活預算。<a href="${ind}">IND工作及停留條件</a></p></section>
<section id="fees"><h2>費用與服務</h2><div class="nl-table"><table><thead><tr><th>項目</th><th>費用／範圍</th></tr></thead><tbody><tr><td>政府申請費</td><td>IND現列€85，按實際遞交時收費為準。</td></tr><tr><td>OTC收費諮詢</td><td>官方要求整理、文件清單、時間規劃、預算比較與申請準備指導；按範圍書面報價，可獨立委託。</td></tr><tr><td>行前及求職準備</td><td>履歷、面試練習、住宿搜尋及生活英語；可按需要另行委託。</td></tr><tr><td>第三方費用</td><td>翻譯驗證、保險、機票、住宿押金及生活費另計。</td></tr></tbody></table></div><p>海外督導免費梳理基本資料，正式諮詢的範圍、費用與取消條款在委託前確認。個別法律意見或受規管的代理事項由適當合資格人士處理；不出售名額，不保證獲選、簽證、職位或收入。</p><p><a href="/zh/application-fees/">OTC收費說明</a></p></section>
<section><h2>諮詢資料</h2><p>請提供護照國家／地區、年齡、居住地、過往荷蘭居留紀錄、出發時間、英語程度及預算。</p><div class="actions"><a class="btn btn-primary" href="https://wa.me/447947991572?text=${encodeURIComponent('我想諮詢荷蘭打工度假WHP／WHS')}">WhatsApp 諮詢</a><a class="btn btn-secondary" href="mailto:office@overseasuk.com?subject=Netherlands%20Working%20Holiday">電郵海外督導</a></div></section>
`;
const layout=frame('荷蘭打工度假',body).replace('教育服務與雙語學習','WHP／WHS・文化交流・申請諮詢').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。',description).replace(/<section class="band service-review-strip">[\s\S]*?<\/section>/,'');
return pageShell({title,path,locale:'zh',lang:'zh-Hant',current:'services',description,image:image+'?v=20261031-v3',imageWidth:1000,imageHeight:500,bodyClass:'nl-wh',body:`<style>.nl-wh .consolidated-page{max-width:1080px;margin:auto;padding:20px}.nl-wh p,.nl-wh li,.nl-wh td{font-size:14px;line-height:1.8}.nl-wh h2{border-top:2px solid #19394d;padding-top:16px;margin-top:28px}.nl-nav{display:flex;flex-wrap:wrap;gap:16px}.nl-table{overflow:auto}.nl-wh table{width:100%;border-collapse:collapse}.nl-wh th,.nl-wh td{text-align:left;padding:12px;border-bottom:1px solid #d8d6cc;vertical-align:top}.nl-wh th{background:#19394d;color:#fff}.nl-wh tr:nth-child(even){background:#edf2ef}.nl-wh section{scroll-margin-top:100px}@media(max-width:680px){.nl-wh .consolidated-page{padding:16px}.nl-wh td{min-width:110px}}</style>`+require('./compact-academic-style.cjs')('nl-wh')+layout});
}
module.exports={title,description,render};
