const {pageShell}=require('../site');
const a=require('./ireland-language-study.json');
const schools=require('./global-language-directory.json').find(c=>c.slug==='ireland').schools;
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const regions=[...new Set(schools.map(s=>s.region))];
const faq='https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/';
const eligible='https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/a-third-level-course-or-a-language-course/';
const ice='https://www.iceireland.com/english-courses-dublin/english-academic-year-dublin/';
const contact='https://wa.me/447947991572?text='+encodeURIComponent('你好，我想申請愛爾蘭語言遊學。年齡：\n護照及現居地：\n開課月份及週數：\n英語程度：\n預算及住宿需要：');
module.exports=()=>pageShell({title:a.titleZh,description:a.summaryZh,path:a.path,locale:'zh',lang:'zh-Hant',current:'summer',shareAtBottom:true,image:a.shareImageZh+'?v='+a.socialImageVersion,imageWidth:1200,imageHeight:440,imageAlt:'愛爾蘭語言遊學｜短期英語、25週課程、免費代辦',body:`
<style>
.ireland-study-hero .service-hero-panel a::before{content:none!important}
.ireland-study-body{max-width:1120px;padding-top:18px;padding-bottom:28px}
.ireland-study-body section{padding:16px 0;border-top:2px solid #17374b;margin:16px 0}
.ireland-study-body h2{font-size:22px}.ireland-study-body p,.ireland-study-body li,.ireland-study-body td,.ireland-study-body th{font-size:15px;line-height:1.75}
.ireland-study-body table{width:100%;border-collapse:collapse}.ireland-study-body th,.ireland-study-body td{padding:10px;text-align:left;border-bottom:1px solid #d8d0c2;vertical-align:top}.ireland-study-body th{background:#eee9de}
.ireland-study-table{overflow-x:auto}
.ireland-filter{padding:16px;background:#eee9de;border-top:3px solid #b99a41}.ireland-filter-grid{display:grid;grid-template-columns:2fr 1fr 1fr auto;gap:12px;align-items:end}.ireland-filter label{display:block;font-size:13px;font-weight:700}.ireland-filter input,.ireland-filter select,.ireland-filter button{width:100%;min-width:0;padding:10px;border:1px solid #b3b5b3;background:white;font:inherit;font-size:14px}.ireland-filter button{cursor:pointer;background:#17374b;color:white}.ireland-school-list{list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:0 24px}.ireland-school-list li{border-bottom:1px solid #d8d0c2;padding:12px 0;min-width:0}.ireland-school-list small{display:block;color:#53646c}.ireland-school-list [hidden]{display:none!important}.ireland-study-body details summary{cursor:pointer;padding:14px 0;font-weight:700}.ireland-study-body #school-result{margin-bottom:0}
@media(max-width:700px){.ireland-filter-grid{grid-template-columns:1fr 1fr}.ireland-filter-grid>div:first-child{grid-column:1/-1}.ireland-school-list{grid-template-columns:1fr}}.ireland-study-body a{overflow-wrap:anywhere}.ireland-study-body .actions{display:flex;gap:10px;flex-wrap:wrap}.ireland-study-note{padding:12px 16px;background:#eee9de;border-left:3px solid #b99a41}
@media(max-width:600px){.ireland-study-body th,.ireland-study-body td{padding:7px;font-size:14px}.ireland-study-body h2{font-size:20px}}
</style>
<section class="page-hero services-hero ireland-study-hero"><div class="band"><div class="service-hero-layout"><div>
<div class="eyebrow">OTC · 海外督導 · 寒暑校聯盟</div><h1>愛爾蘭語言遊學</h1><h2>Ireland · English Language Study</h2>
<p class="hero-sub">短期英語、青少年營隊與成人長期課程。按開課時間、程度、住宿及預算選校。</p>
<div class="actions"><a class="btn btn-primary" href="${contact}">免費代辦諮詢</a><a class="btn btn-secondary" href="/zh/summer-school-alliance/ireland/">愛爾蘭寒暑校</a></div></div>
<nav class="service-hero-panel" aria-label="愛爾蘭語言遊學"><a href="#directory"><strong>自助選校</strong><span>67筆機構／校區 · 條件篩選</span></a><a href="#work-study"><strong>長期英語</strong><span>25週課程 · 學生工作條件</span></a><a href="#fees"><strong>費用與住宿</strong><span>課程參考價 · 完整預算</span></a><a href="#application"><strong>免費代辦</strong><span>選校 · 報名 · 入學跟進</span></a></nav>
</div></div></section>
<main class="band ireland-study-body">
<p><a href="/zh/summer-school-alliance/">寒暑校聯盟</a> / <a href="/zh/summer-school-alliance/ireland/">愛爾蘭</a> / 語言遊學</p>
<section id="courses"><h2>課程選擇</h2><div class="ireland-study-table"><table><thead><tr><th>課程</th><th>適合對象</th><th>申請重點</th></tr></thead><tbody>
<tr><td>短期一般英語</td><td>利用假期提升口說、聽力及日常溝通</td><td>比較每週課時、起讀週數、分班及住宿；短期學習不能當作打工許可。</td></tr>
<tr><td>青少年寒暑校</td><td>需要課程、活動與照護安排的未成年學生</td><td>核對實際營期、年齡、家長同意、接送及夜間管理；冬季不一定開設與夏季相同的營隊。</td></tr>
<tr><td>成人學年英語</td><td>希望較長時間學習，並符合學生居留條件者</td><td>先核對具體課程資格、入學程度、出勤及結業考試，再安排簽證與居留。</td></tr>
</tbody></table></div></section>
<section id="directory"><h2>自助選校</h2><p>收錄既有官方課程表快照中的${schools.length}筆機構／校區，按地區及官方名單篩選。資料快照：2026年10月9日；不是${schools.length}個獨立品牌，也不代表全部短期營隊。最新課程資格須在報名前查閱兩份官方名單。</p>
<div class="ireland-filter"><div class="ireland-filter-grid"><div><label for="school-query">學校／城市／機構代碼</label><input id="school-query" type="search" placeholder="例如 Dublin、Cork、ICE" autocomplete="off"></div><div><label for="school-region">地區</label><select id="school-region"><option value="">全部地區</option>${regions.map(r=>`<option value="${esc(r)}">${esc(r)}</option>`).join('')}</select></div><div><label for="school-register">官方課程名單</label><select id="school-register"><option value="">全部名單</option><option>ILEP</option><option>TrustEd Ireland</option></select></div><button type="button" id="school-reset">清除條件</button></div><p id="school-result" role="status" aria-live="polite">${schools.length}筆結果</p></div>
<p><small>這是25週以上合資格英語課程的機構／校區名錄。年齡、學費、班期及短期營隊另向學校確認；名單類別不是學校排名。</small></p>
<ul class="ireland-school-list" id="school-list">${schools.map(s=>`<li data-keywords="${esc([s.name,s.officialName,s.city,s.region,s.providerCode].join(' ').toLowerCase())}" data-region="${esc(s.region)}" data-register="${esc(s.type)}"><strong><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)} ↗</a></strong><small>${esc(s.city)} · ${esc(s.region)} · ${esc(s.type)} · ${esc(s.providerCode)}</small><a href="https://wa.me/447947991572?text=${encodeURIComponent('我想查詢愛爾蘭語言遊學：'+s.name+'。開課月份／週數／年齡／預算：')}">查詢此校課程與免費代辦</a></li>`).join('')}</ul><p id="school-empty" hidden>沒有符合的學校，請減少條件或清除篩選；也可聯絡OTC查詢。</p>
<p><a href="${eligible}">最新ILEP官方課程表 ↗</a> · <a href="https://www.trustedireland.ie/check-eligible-courses-for-study-visas">最新TrustEd官方課程表 ↗</a></p></section>
<script>(()=>{const q=document.getElementById('school-query'),r=document.getElementById('school-region'),t=document.getElementById('school-register'),rows=[...document.querySelectorAll('#school-list>li')];function filter(){let n=0;const terms=q.value.trim().toLowerCase().split(/\\s+/).filter(Boolean);rows.forEach(row=>{const show=terms.every(x=>row.dataset.keywords.includes(x))&&(!r.value||row.dataset.region===r.value)&&(!t.value||row.dataset.register===t.value);row.hidden=!show;if(show)n++;});document.getElementById('school-result').textContent=n+' / '+rows.length+'筆符合條件';document.getElementById('school-empty').hidden=n!==0;}q.addEventListener('input',filter);r.addEventListener('change',filter);t.addEventListener('change',filter);document.getElementById('school-reset').addEventListener('click',()=>{q.value=r.value=t.value='';filter();q.focus();});})();</script>
<section id="schools"><h2>課程示例</h2><p>以下為課程示例；原語校目錄另見<a href="/zh/language-school-alliance/ireland/">愛爾蘭語校目錄</a>。名錄收錄不代表每所學校均與OTC簽約，報名前確認校方接受的申請渠道。</p>
<div class="ireland-study-table"><table><thead><tr><th>學校／課程</th><th>已公布資料</th><th>查看與申請</th></tr></thead><tbody>
<tr><td>Irish College of English<br>Academic Year Programme</td><td>Malahide，Dublin；18歲以上，A2–C1；25週上課，每週15小時。開課日及程度須由校方確認。</td><td><a href="${ice}" target="_blank" rel="noopener">校方課程頁 ↗</a><br><a href="${contact}">通過OTC查詢申請</a></td></tr>
<tr><td>Irish College of English<br>一般英語與青少年夏令營</td><td>校方提供成人課程及2027青少年夏令營入口；青少年班期、年齡、活動及寄宿安排需分別確認。</td><td><a href="https://www.iceireland.com/" target="_blank" rel="noopener">學校官方網站 ↗</a><br><a href="/zh/summer-school-alliance/ireland/programmes/">寒暑校課程資料</a></td></tr>
</tbody></table></div></section>
<section id="work-study"><h2>25週課程與工作條件</h2><p>俗稱「打工遊學」的長期英語學習，須符合學生居留規則；它與<a href="/zh/work-travel-alliance/ireland/">Working Holiday打工度假</a>是不同安排。以下主要適用需要學生居留的非EEA／非瑞士學生。</p>
<ul><li>超過90天的學習須查看ILEP及TrustEd Ireland合資格課程名單，不能只憑學校名稱判斷。英語課程至少25週、每週至少15小時，出勤率至少85%，並須完成指定結業考試。</li>
<li>符合條件的英語學生可獲最長8個月許可，實際期限以獲批為準。課程假期按校曆安排，不把「25＋8」當作人人固定獲批的週數。</li>
<li>持有效Stamp 2且符合工作條件者，一般每週最多工作20小時；6月至9月及12月15日至1月15日期間最多40小時。不是所有自行安排的假期都適用40小時。</li>
<li>短期訪客及Stamp 2A不享有上述學生工作權；不保證找到工作，生活預算不能依賴尚未取得的收入。</li></ul>
<p><a href="${faq}" target="_blank" rel="noopener">ISD學生常見問題 ↗</a> · <a href="${eligible}" target="_blank" rel="noopener">ILEP及TrustEd課程查詢 ↗</a></p></section>
<section id="fees"><h2>費用與住宿</h2><div class="ireland-study-table"><table><thead><tr><th>項目</th><th>參考及計費方式</th></tr></thead><tbody>
<tr><td>ICE學年課程</td><td>校方頁面現列€3,710，包含25週課程、註冊、首本教材、醫療保險及學習保障。頁面未清楚標明適用開課年度，須確認所選日期報價；IELTS考試費是否包含需另問。</td></tr>
<tr><td>短期班／青少年營</td><td>按週數、日期、課時及活動安排報價；不以成人學年課程價格推算營隊費用。</td></tr>
<tr><td>住宿與生活</td><td>寄宿家庭或學生宿舍另查房型、餐食、通勤、入住日期、押金及假日加價。短期住宿報價不能代替全程生活預算。</td></tr>
<tr><td>其他費用</td><td>機票、接送、教材與考試差額、簽證、居留登記、翻譯及個人開支等按適用項目另計。</td></tr>
</tbody></table></div><p>財力證明另按護照、停留時間及是否需要簽證核對官方要求。報名前取得完整報價及退款條款，再安排付款與行程。<a href="/zh/services/uk-ireland-homestay/">英愛寄宿家庭資料</a></p></section>
<section id="application"><h2>免費代辦</h2><p>OTC協助課程比較、報名材料、校方聯絡、錄取跟進及行前資料整理。適用免費代辦的課程，OTC申請代辦服務費為£0；學費、住宿及其他第三方費用另付。申請前書面確認服務範圍及校方渠道，額外服務不自動綁定。</p>
<ol><li>提供年齡、護照國家／地區、現居地、英文程度、出發月份、週數及預算。</li><li>比較學校、課程資格與住宿，確認名額、完整報價及取消條款。</li><li>整理報名表及校方所需文件，遞交申請並跟進錄取及付款期限。</li><li>按適用規則準備簽證、保險及財力文件，確認入境、報到與居留登記安排。</li></ol>
<p class="ireland-study-note">課程錄取、簽證與居留分別審核；OTC不承諾簽證、職位或收入。未成年學生另核對監護、家長同意及住宿照護。</p></section>
<section id="sources"><h2>官方資料</h2><figure style="max-width:520px;margin:12px 0"><img src="${a.shareImageZh}?v=${a.socialImageVersion}" width="1200" height="440" style="width:100%;height:auto" alt="愛爾蘭語言遊學：短期英語、25週課程與免費代辦"></figure><p>核對日期：2026年11月17日。課程名額與費用以對應入學日期的正式報價為準。</p><ul><li><a href="${faq}">愛爾蘭ISD：學生許可、出勤及工作規則</a></li><li><a href="${eligible}">愛爾蘭ISD：合資格課程名單與TrustEd入口</a></li><li><a href="${ice}">Irish College of English：學年課程及費用</a></li></ul></section>
<section id="contact"><h2>遊學諮詢</h2><p>先告訴我們出發月份、修讀週數及預算，即可開始比較課程。</p><div class="actions"><a class="btn btn-primary" href="${contact}">WhatsApp免費諮詢</a><a class="btn btn-secondary" href="mailto:office@overseasuk.com?subject=Ireland%20English%20Study">電郵諮詢</a></div><p>微信：overseasus · WhatsApp：+44 7947 991572</p></section>
</main>`});
