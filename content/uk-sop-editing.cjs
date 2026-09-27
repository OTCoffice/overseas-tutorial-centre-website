const {pageShell}=require('../site');
const a=require('./uk-sop-editing.json');
const card='<section class="band compact-band"><h2>英碩 SOP 邏輯與架構修改</h2><p>整理申請動機、經歷證據與課程契合度。結構診斷 £45–65；單篇深度修改 £120–180；兩個課程版本 £190–280。</p><a class="button" href="/zh/services/uk-sop-editing/">查看服務與預估價格 →</a></section>';
function render(){
const intro='你好，我想詢問英碩 SOP 修改。\n目標校系及課程連結：\n稿件語言與英文總字數：\n目前最想解決的問題：\n截止日期及時區：\n希望修改的課程版本數：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const email='mailto:office@overseasuk.com?subject='+encodeURIComponent('英碩 SOP 修改｜詢價')+'&body='+encodeURIComponent(intro);
const image=a.shareImageZh+'?'+a.socialImageVersion;
return pageShell({title:a.titleZh,current:'services',lang:'zh-Hant',locale:'zh',path:a.path,description:a.summaryZh,image,imageWidth:1200,imageHeight:630,imageAlt:'英碩 SOP 邏輯與架構修改：三檔服務與预估價格',body:`
<style>.sop-page{max-width:1080px;margin:auto}.sop-intro{max-width:750px}.sop-prices{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin:28px 0}.sop-plan{background:#f1f5f8;padding:26px;border:1px solid #dce5ea;border-radius:8px}.sop-plan h3{margin-top:0}.sop-price{font-size:27px;font-weight:600}.sop-plan p{font-size:15px}.sop-page section{scroll-margin-top:95px}.sop-note{border-left:3px solid #637f8d;padding:12px 20px;background:#f7f9fa}.sop-actions{display:flex;flex-wrap:wrap;gap:14px;margin:22px 0}.sop-page h2{margin-top:48px}@media(max-width:760px){.sop-prices{grid-template-columns:1fr}.sop-plan{padding:22px}.sop-page h1{font-size:32px;line-height:1.4}.sop-page{overflow-wrap:anywhere}}</style>
<section class="band sop-page">
<div class="eyebrow">OTC ADMISSIONS · 申請文書服務</div>
<h1>英碩 SOP 邏輯與架構修改</h1>
<p class="hero-sub sop-intro">經歷不少，卻不知道怎樣串成申請理由？我們從動機、證據與課程要求入手，幫你整理主線、調整段落，再修英文表達。</p>
<div class="sop-actions"><a class="button" href="#prices">查看預估價格</a><a class="button" href="${wa}">WhatsApp 詢價</a></div>
<figure style="margin:28px 0"><img src="${image}" alt="英碩 SOP 邏輯與架構修改服務及預估價格" width="1200" height="630" style="width:100%;height:auto;display:block" fetchpriority="high"></figure>
<section><h2>具體會改甚麼？</h2><p>核對目標課程題目、字數與文書要求；整理核心申請動機，判斷哪些經歷值得保留、哪些需要補證據；調整段落順序與銜接，讓每段都能說明你的準備與目標。</p>
<p class="sop-note"><strong>修改示例（教學假設）</strong><br>原稿：「我參與行銷實習，所以想讀行銷碩士。」<br>回饋：補清你負責的任務、採用的方法、觀察到的問題，以及目標課程哪些內容能幫你進一步學習。沒有的數據或經歷不補寫。</p></section>
<section id="prices"><h2>預估價格</h2><p>以下為 OTC 自訂服務費預估，以英鎊計，按已有英文初稿估算。先看稿與課程要求，再書面確認客戶應付總額、適用稅項及交付日期；不直接扣款。</p>
<div class="sop-prices">
<article class="sop-plan"><h3>結構診斷</h3><div class="sop-price">£45–65</div><p>1 篇、1 個課程，英文不超過 1,000 字。</p><p>交付：批註稿、建議段落大綱、優先修改清單；包含一次書面問題澄清。</p><p>適合：想先知道主線和證據問題，再自行改稿。此檔不含逐句英文修改或改稿覆核。</p><p>預估 2–3 個工作日。</p></article>
<article class="sop-plan"><h3>單篇深度修改</h3><div class="sop-price">£120–180</div><p>1 篇、1 個課程，英文不超過 1,000 字。</p><p>交付：結構與內容批註、英文修訂痕跡版、清稿及補充問題清單。</p><p>含 2 輪：初稿整體修改＋學生補充後的一次覆核。適合需要調整整篇邏輯的申請者。</p><p>首輪預估 3–5 個工作日；覆核約 2–3 個工作日。</p></article>
<article class="sop-plan"><h3>兩個課程版本</h3><div class="sop-price">£190–280</div><p>同一申請者、相關專業的 2 個課程；每篇不超過 1,000 英文字。</p><p>交付：共同主線整理、兩校課程契合度調整，以及各版本修訂痕跡版與清稿。</p><p>每版含初改＋一次覆核。不同專業或全新題組先另估工作量。</p><p>首輪兩版預估 5–7 個工作日；覆核約 2–3 個工作日。</p></article>
</div>
<p><strong>如何計算一輪：</strong>學生集中提交一次稿件與問題，我們回傳一次完整回饋。增加校系、更換申請方向或新增整篇內容，先確認差額再開始。</p>
<p><strong>額外工作預估：</strong>每篇超出 1,000 字的部分，每 500 字 £25–40（不足 500 字按一單位）；同一版本增加一輪覆核 £35–55。中文素材整理、翻譯或尚無初稿的構思輔導另行報價。</p>
<p><strong>加急：</strong>若需 48 小時內交付首輪，預估加收原方案 30%；先確認檔期，未確認不承諾接單。普通時效從材料齊全及確認開工起計，學生補充時間另計。</p>
<p><strong>費用邊界：</strong>免費的是首次需求與服務範圍確認，完整看稿、修改與陪跑屬付費服務。本頁不含 CV、推薦信、研究計畫、翻譯認證、網申代填、院校申請費或學費。委託前列明付款、取消、退款及已完成工作如何結算。</p></section>
<section><h2>怎樣開始？</h2><p>① 提供目標課程連結、稿件語言／字數及截止日 → ② 確認服務檔、修改輪次與總價 → ③ 按約定傳送初稿與真實素材 → ④ 收到批註、補充並覆核 → ⑤ 你確認最終稿後自行提交。</p><p>首次詢價毋須證件；稿件可遮去姓名、學號及聯絡資料。以院校對外部協助和 AI 使用的規則為準，保留本人聲音及真實經歷；不代造經歷、不承諾錄取。高度專業的內容，先確認合適審閱者。</p></section>
<section id="contact"><h2>聯絡海外督導</h2><p><strong>海外督導 OTC｜招生部 Admissions</strong><br>微信：overseasus<br>WhatsApp：+44 7947 991572<br>電郵：office@overseasuk.com</p><div class="sop-actions"><a class="button" href="${wa}">WhatsApp 提供需求</a><a class="button" href="${email}">電郵詢價</a></div><p><a href="/zh/insights/uk-personal-statement-evidence-first-checklist/">延伸閱讀：英國申請文書的證據整理清單 →</a></p><p><a href="/zh/services/">返回服務導覽</a> · <a href="/application-service-standards/">申請服務準則</a></p><p><small>價格更新：2026-09-27。預估並非最終報價；以開工前雙方確認的範圍與總額為準。</small></p></section>
</section>`});}
module.exports=render;module.exports.card=card;
