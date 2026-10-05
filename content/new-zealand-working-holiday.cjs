const title='紐西蘭 WHV 陪跑｜申請資料、行前與求職準備｜海外督導 OTC';
const description='紐西蘭（新西蘭）打工度假 WHV：中國大陸、香港與台灣申請要求、官方連結、文件及生活預算；OTC 行前規劃、英文履歷與面試陪跑。';
const sources={
  overview:'https://www.immigration.govt.nz/work/working-holiday-visas/',
  china:'https://www.immigration.govt.nz/visas/china-working-holiday-visa/',
  hongkong:'https://www.immigration.govt.nz/visas/hong-kong-sar-working-holiday-visa/',
  taiwan:'https://www.immigration.govt.nz/visas/taiwan-working-holiday-visa/',
  english:'https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/english-language-requirements/english-language-requirements-for-some-working-holiday-visas/',
  advice:'https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/getting-immigration-advice/',
  tax:'https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/new-arrival-to-new-zealand---ird-number-application',
  rights:'https://www.employment.govt.nz/starting-employment/rights-and-responsibilities/employee-rights-and-responsibilities',
  help:'https://www.employment.govt.nz/resolving-problems/migrant-exploitation'
};
const link=(key,label)=>`<a href="${sources[key]}">${label}</a>`;
const table=(caption,heads,rows)=>`<div class="wt-table"><table><caption>${caption}</caption><thead><tr>${heads.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r.slice(1).map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const consultUrl='https://wa.me/447947991572?text='+encodeURIComponent('你好，我想了解紐西蘭 WHV 陪跑。\n護照國家／地區：\n年齡及目前居住地：\n預計出發時間：\n目前準備／獲簽進度：\n英語程度、預算及需要協助的事項：');
function render({shell,row,hub}){
const panel=[['eligibility','申請要求','按護照查閱官方計畫'],['support','陪跑服務','行前規劃與求職準備'],['fees','費用','服務報價與生活預算'],['sources','政府連結','簽證、稅務與勞工權益']].map(([id,t,d])=>`<a href="#${id}"><strong>${t}</strong><span>${d}</span></a>`).join('');
const strip=[['timing','WHV','開放安排','查看各計畫即時狀態'],['documents','LIST','申請材料','護照、資金與適用證明'],['living','PLAN','行前準備','住宿、保險與生活英語'],['contact','ASK','服務諮詢','確認範圍、時程與報價']].map(([id,tag,t,d])=>`<a href="#${id}"><b>${tag}</b><strong>${t}</strong><span>${d}</span></a>`).join('');
const body=`
<nav class="wt-nav" aria-label="紐西蘭 WHV 內容"><a href="${hub}">打工度假聯盟</a><a href="#support">服務</a><a href="#eligibility">要求</a><a href="#timing">時間</a><a href="#documents">材料</a><a href="#fees">費用</a><a href="#sources">政府連結</a></nav>
<p class="wt-date">資料核查：<time datetime="2026-10-05">2026 年 10 月 5 日</time>。開放狀態及收費可能變更，申請前請重新查看所屬計畫的官方頁面。</p>
${row('support','01','陪跑服務',`<p>海外督導 OTC 為準備赴紐西蘭（新西蘭）打工度假的青年提供行前規劃與求職準備。可按目前進度選擇服務，已獲簽者也可單獨安排履歷、面試及生活英語練習。</p><dl class="nz-support"><div><dt>資料整理</dt><dd>提供政府公開資料與官方連結，協助整理文件清單及本人確認的準備事項、日期和通知紀錄。</dd></div><div><dt>行前規劃</dt><dd>按出發時間與城市整理生活預算、住宿搜尋、保險比較及抵境待辦清單。</dd></div><div><dt>求職英語</dt><dd>修改英文履歷、練習面試及工作溝通。例如把餐飲經驗寫成具體職責，練習回答排班、顧客服務與可到職時間。</dd></div><div><dt>生活準備</dt><dd>練習住宿詢問及日常溝通，提供稅號、勞工權益與求助管道的官方資料。</dd></div></dl><p>個別簽證資格判斷、申請策略及代理申請屬另一服務範圍，須由新西蘭持牌或依法豁免人士提供。OTC 本頁的資料與行前陪跑不包含此類個別移民建議。${link('advice','查看移民局對顧問資格的說明')}</p>`)}
${row('eligibility','02','申請要求',`<p>WHV 以度假為主要目的，可在簽證允許的範圍內從事臨時工作。以下是三個常見計畫的重點，不能套用至所有護照；完整資格仍須查看各官方頁。</p>${table('常見計畫比較',['計畫','資格與年度名額','停留與工作'],[
['中國大陸',`18–30 歲，中國公民；通常居住於中國，申請時亦須在中國。須符合高中學歷、學歷驗證及英語要求。每年 1,000 名。${link('china','China 官方頁')}`,'最長 12 個月；同一雇主最多 6 個月。'],
['香港',`18–30 歲，香港特區居民，持有效香港特區或 BNO 護照。每年 400 名。${link('hongkong','Hong Kong SAR 官方頁')}`,'最長 12 個月；同一雇主最多 3 個月。'],
['台灣',`18–30 歲，持台灣護照及戶籍證明。每年 600 名。${link('taiwan','Taiwan 官方頁')}`,'最長 12 個月；同一雇主最多 3 個月。']])}<p>以上三個計畫均要求至少 NZD 4,200 生活資金、全程醫療保險及離境安排，並須符合健康、品格等條件；曾獲發紐西蘭 WHV 者，即使未使用，亦不能按這三個計畫再次申請。可學習或培訓合計最多 6 個月，不可接受永久職位；申請不要求先取得工作 offer。</p><p>${link('overview','其他護照與 WHV 計畫總覽 →')}</p>`)}
${row('timing','03','開放安排',`<p>截至 2026 年 10 月 5 日，官方頁顯示：${link('china','中國計畫')}為 Closed；${link('taiwan','台灣計畫')}顯示 2026 年已關閉；${link('hongkong','香港計畫')}顯示 Open。這是查核當日的狀態，不代表讀者瀏覽時仍有名額。</p><p>下一年度日期須以移民局正式公告為準，不沿用去年的開放時間。申請入口應從所屬計畫官方頁的 Apply online 進入；網站可瀏覽不等於計畫正在受理。OTC 不出售名額，也不承諾搶位或優先審批。</p>`)}
${row('documents','04','申請材料',table('準備清單',['類別','準備內容'],[
['身分與紀錄','護照、適用的戶籍或居住證明、過往紐西蘭 WHV 紀錄。以上三個計畫的護照須至少在簽證到期後仍有效 3 個月。'],
['資金與離境','銀行等可接受的資金證明、離境機票或另行購票資金。購票資金須在生活資金之外。'],
['保險與健康','涵蓋全程的醫療保險；胸部 X 光、體檢及警方證明按個人情況和移民局要求提供，不是所有人都需同一套文件。'],
['中國計畫補充',`高中學歷及 CSSD 驗證、相應英文翻譯、有效英語測試成績及官方要求的補充表。英語成績通常不得超過 2 年；可接受考試及分數請查${link('english','官方英語要求')}，不把此要求套用至所有計畫。`],
['提交與補件','本人如實填寫資料，按官方帳號清單、通知及期限提交。需要翻譯的文件應符合移民局規定。']]))}
${row('process','05','服務流程',`<ol><li><strong>說明需求：</strong>告知護照國家／地區、年齡、目前居住地、預計出發時間、準備進度及希望協助的事項；初次諮詢毋須提供完整護照號碼。</li><li><strong>確認委託：</strong>列明交付內容、修改輪次、服務期間、費用及取消條款，確認後開始。</li><li><strong>完成準備：</strong>整理公開資訊、行前清單及預算，安排英文履歷和面試練習。本人保管帳號、密碼及官方通知。</li><li><strong>安排出發：</strong>獲簽後按核准信確認入境期限及簽證條件，再落實住宿、交通、保險與抵境待辦事項。</li></ol>`)}
${row('fees','06','費用',table('服務費與個人預算',['項目','安排'],[
['公開資料','本頁與政府連結可免費查閱；申請人可自行使用官方網站。'],
['OTC 陪跑','按履歷、面試、行前規劃及跟進範圍提供書面報價，列明交付內容與服務期限。'],
['簽證費','上述三個官方計畫頁目前均列 NZD 770 起；實際費用以適用申請及付款頁顯示為準。'],
['資金門檻','至少 NZD 4,200 為上述三個計畫的生活資金要求，並非付給 OTC 的費用，也不代表足夠支付全年開支。'],
['其他支出','英語考試、學歷驗證、翻譯、體檢、保險、機票、住宿押金、交通及生活費另計；依實際需要向相關機構支付。']])+`<p>生活預算應包含抵境後尚未找到工作時的住宿與日常開支，以及緊急備用金；不以未確定的工作收入支付必需開支。</p>`)}
${row('living','07','生活與工作',`<p>按城市比較租金、押金、通勤及短期住宿，簽約前查閱條款和收款方。求職前準備英文履歷，確認可工作期限，並查看書面僱傭條件、工資、工時及扣款。</p><p>稅務資料可從 ${link('tax','IRD 新入境人士稅號申請')}查閱；工作權益及遭遇剝削的求助方式，可查 ${link('rights','Employment New Zealand 僱員權利')}及${link('help','移工剝削求助')}。陪跑不提供職位、工資或收入保證。</p>`)}
${row('faq','08','常見問題',`<details><summary>一定要委託代辦嗎？</summary><p>不需要。可自行查閱官方資料並提出申請。OTC 的付費服務重點是行前、文件行政整理與求職英語；個別移民建議須另由合資格人士提供。</p></details><details><summary>WHV 可以直接轉永久居留嗎？</summary><p>WHV 是臨時簽證，並非永久居留承諾。其他簽證或居留途徑有獨立條件，應查閱當期官方規則或向持牌／依法豁免人士諮詢。</p></details><details><summary>沒有工作經驗，可以先準備嗎？</summary><p>可以先整理學習、實習或志工經驗，練習英文自我介紹及工作溝通。是否獲聘由雇主決定；求職準備與簽證資格是不同事項。</p></details>`)}
${row('sources','09','政府連結',`<p>按用途直接前往官方網站，避免只看轉載文章：</p><ul><li>${link('overview','Immigration New Zealand｜WHV 計畫總覽')}</li><li>${link('china','中國計畫｜資格、費用、狀態及申請入口')}</li><li>${link('hongkong','香港計畫｜資格、費用、狀態及申請入口')}</li><li>${link('taiwan','台灣計畫｜資格、費用、狀態及申請入口')}</li><li>${link('english','部分 WHV 計畫的英語要求')}</li><li>${link('advice','移民顧問資格與自行申請')}</li><li>${link('tax','Inland Revenue｜IRD 稅號')}</li><li>${link('rights','Employment New Zealand｜僱員權利')}</li><li>${link('help','Employment New Zealand｜移工剝削求助')}</li></ul>`)}
<section class="wt-contact" id="contact"><h2>紐西蘭 WHV 諮詢</h2><p>海外督導 OTC｜學生服務部 Student Services</p><p>告訴我們目前進度與最需要協助的事項，我們會說明服務內容、時程及報價。</p><div class="wt-links"><a class="btn btn-primary" href="${consultUrl}">WhatsApp：+44 7947 991572</a><a href="mailto:office@overseasuk.com?subject=${encodeURIComponent('紐西蘭 WHV 陪跑諮詢')}">office@overseasuk.com</a></div><p class="service-note">OTC 是獨立服務機構，並非新西蘭政府或官方簽證受理單位。申請與入境結果由主管機關決定；政府要求及實際簽證條件以官方為準。</p></section>`;
return shell('紐西蘭 WHV 陪跑',hub+'new-zealand/',description,body,{metaTitle:title,subtitle:'打工度假 · 行前規劃 · 求職英語',panel,strip,consultUrl,bodyClass:'nz-working-holiday',css:`<style>.nz-support>div{display:grid;grid-template-columns:90px minmax(0,1fr);gap:16px;padding:14px 0;border-bottom:1px solid #d8d4ca}.nz-support dt{font-weight:600}.nz-support dd{margin:0;line-height:1.85}.nz-working-holiday caption{text-align:left;padding:0 0 10px;color:#61717b}.nz-working-holiday th:first-child{min-width:80px}.nz-working-holiday .wt-contact a{overflow-wrap:anywhere}.nz-working-holiday summary{line-height:1.8}@media(max-width:900px){.nz-working-holiday .service-hero-layout{grid-template-columns:1fr}.nz-working-holiday .service-hero-panel,.nz-working-holiday .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}}</style>`});
}
module.exports={title,description,render,sources};
