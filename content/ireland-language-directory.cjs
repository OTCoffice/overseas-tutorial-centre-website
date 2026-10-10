const schools=require('./global-language-directory.json').find(c=>c.slug==='ireland').schools;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ilep='https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/a-third-level-course-or-a-language-course/';
const trusted='https://www.trustedireland.ie/check-eligible-courses-for-study-visas';
module.exports=({filterScript,contact})=>{
 const regions=[...new Set(schools.map(s=>s.region))];
 const directory=regions.map((r,i)=>`<details class="region-group" data-region="${esc(r)}" ${i===0?'open':''}><summary>${esc(r)} <span>· ${schools.filter(s=>s.region===r).length} 筆</span></summary><ul class="schools">${schools.filter(s=>s.region===r).map(s=>`<li data-school="${esc([s.name,s.officialName,s.city,s.region,s.providerCode].join(' '))}" data-type="${esc(s.type)}"><div class="school-line"><a href="${esc(s.url)}" target="_blank" rel="noopener"><strong>${esc(s.name)}</strong></a><span>${esc(s.city)} · ${esc(s.type)} · ${esc(s.providerCode)}</span></div>${s.name!==s.officialName?`<small>官方登記：${esc(s.officialName)}</small>`:''}${s.note?`<small>${esc(s.note)}</small>`:''}</li>`).join('')}</ul></details>`).join('');
 return `<style>
.ireland-hero .service-hero-layout{grid-template-columns:320px minmax(0,1fr);gap:12px}
.ireland-hero .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.ireland-hero .service-hero-panel a:before{content:none!important}
.ireland-hero .service-hero-panel a{min-height:0!important;min-width:0!important;padding:9px 12px!important}
.ireland-hero .service-hero-panel strong{font-size:14px;line-height:1.15}
.ireland-hero .service-hero-panel span{font-size:10px;line-height:1.25}
.ireland-service{max-width:1040px;padding-top:18px}
.ireland-service h2{font-size:21px;margin:22px 0 11px}
.ireland-service p{line-height:1.65;margin:8px 0}
.ireland-service .quicknav{gap:7px;padding:0 0 18px}
.ireland-service .quicknav a{padding:8px 12px;font-size:13px}
.ireland-service .filters{padding:12px 14px;margin-bottom:12px}
.ireland-service .filter-grid{grid-template-columns:2fr 1fr 1fr;gap:8px}
.ireland-service label{margin-bottom:4px;font-size:12px}
.ireland-service input,.ireland-service select{padding:8px 9px;font-size:13px}
.ireland-service .result-count{margin-top:8px}
.ireland-service details{margin:0;border-top:1px solid var(--line)}
.ireland-service summary{padding:11px 2px;font-size:16px}
.ireland-service .schools{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 18px;line-height:1.4}
.ireland-service .schools li{min-width:0;padding:9px 2px;border-top:1px solid #e1e6e1}
.ireland-service .school-line{display:block}
.ireland-service .school-line span{display:block;margin-top:2px;color:#62736b;font-size:11px;line-height:1.35}
.ireland-service .schools strong{font-size:14px;line-height:1.35}
.ireland-service .schools small{margin:3px 0 0;font-size:11px;line-height:1.4}
.ireland-service .schools a{color:#173551}
.ireland-service .official-links{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:13px}
.ireland-service .fee-note{padding:12px 14px;background:#f3f2ec;border-left:3px solid #d7ad55}
.ireland-service .steps{margin-top:18px}
.ireland-service #process ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 24px;margin:8px 0;padding-left:22px;line-height:1.55}
.ireland-service #contact p{margin:5px 0}
.ireland-service .notes{margin-top:20px;padding-top:8px}
@media(max-width:900px){.ireland-hero .service-hero-layout{grid-template-columns:1fr!important}.ireland-hero .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))!important}.ireland-service{max-width:760px}}
@media(max-width:680px){.ireland-service .schools{grid-template-columns:1fr}.ireland-service #process ol{grid-template-columns:1fr}.ireland-service .filter-grid{grid-template-columns:1fr 1fr}.ireland-service .filter-grid>div:first-child{grid-column:1/-1}}
@media(max-width:580px){.ireland-service{padding-top:14px}.ireland-service .quicknav a{flex:1 1 auto;padding:7px 9px;text-align:center}.ireland-service h2{font-size:19px}.ireland-service .filter-grid{grid-template-columns:1fr}.ireland-service .filter-grid>div:first-child{grid-column:auto}.ireland-hero .service-hero-panel a{padding:8px 10px!important}}
</style>
 <section class="page-hero services-hero ireland-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導 · 語校聯盟</div><h1>愛爾蘭語校</h1><h2>學校名單・免費代辦</h2><p class="hero-sub">按官方合資格英語課程表找學校，點擊校名直接查看官網。</p><div class="actions"><a class="btn btn-primary" href="${contact}">免費選校諮詢</a><a class="btn btn-secondary" href="#directory">學校名單</a></div></div><aside class="service-hero-panel"><a href="#directory"><strong>67 筆機構／校區</strong><span>按所在地查閱學校官網</span></a><a href="#official"><strong>官方課程資格</strong><span>ILEP 與 TrustEd Ireland</span></a><a href="#process"><strong>申請流程</strong><span>選校、報名、簽證及行前</span></a><a href="#scope"><strong>代辦費 £0</strong><span>服務範圍及另付費用</span></a></aside></div></div></section>
 <main class="lang-directory ireland-service" id="top"><nav class="quicknav" aria-label="愛爾蘭語校"><a href="#directory">學校名單</a><a href="#official">官方名單</a><a href="#process">免費代辦流程</a><a href="/zh/language-school-alliance/">各國語校</a></nav>
 <section id="official"><h2>課程資格</h2><p>完整收錄本次下載的兩份官方課程表中「English Language」類別：ILEP 64 筆、TrustEd Ireland 3 筆，共 67 筆機構／校區記錄。名稱不同於目前品牌時，保留官方登記名稱。核對日期：2026 年 10 月 9 日。</p><p>需要在愛爾蘭學習超過 90 天並申請學生簽證／居留者，須選擇官方名單上的具體合資格課程。英語課程至少 25 週；短期班、夏令營或學校其他課程不能直接套用。簽證及居留由移民機關審批，名單收錄不保證獲批。</p><div class="official-links"><a href="${ilep}" target="_blank" rel="noopener">ISD｜ILEP 課程查詢</a><a href="${trusted}" target="_blank" rel="noopener">TrustEd Ireland｜合資格課程</a></div></section>
 <section id="directory"><h2>學校名單</h2><div class="filters"><div class="filter-grid"><div><label for="school-search">學校／城市</label><input id="school-search" type="search" placeholder="輸入名稱、城市或機構代碼" autocomplete="off"></div><div><label for="region-select">地區</label><select id="region-select"><option value="">全部地區</option>${regions.map(r=>`<option>${esc(r)}</option>`).join('')}</select></div><div><label for="type-select">官方課程表</label><select id="type-select"><option value="">全部</option><option>ILEP</option><option>TrustEd Ireland</option></select></div></div><p class="result-count" id="result-count" aria-live="polite">67 筆結果；點開地區查看學校。</p><button type="button" id="clear-filters" hidden>清除篩選</button></div><p id="no-results" hidden>沒有符合的結果。請更換關鍵字或清除篩選。</p>${directory}</section>
 <section class="steps" id="scope"><h2>免費代辦</h2><p>海外督導 OTC 協助選校與課程比較、申請表及英文文書、校方聯絡與錄取跟進、簽證材料整理、住宿資訊、行前準備及入學後溝通。</p><div class="fee-note"><strong>OTC 代辦服務費 £0。</strong><p>適用合作項目由合作學校支付代理佣金，學生毋須支付中介服務費。學費、報名與教材、考試、住宿、保險、簽證及居留官方收費、翻譯、公證、機票等第三方費用另計。</p></div><p>名單收錄不表示每校已與 OTC 簽約；申請前會確認校方接受的報名程序、適用免費代辦安排及完整報價。</p></section>
 <section class="steps" id="process"><h2>申請流程</h2><ol><li><strong>選校：</strong>提供年齡、護照國家／地區、現居地、英語程度、開課月份、週數及預算。</li><li><strong>確認課程：</strong>比較學校與住宿，核對官方課程資格、名額、完整費用及退款條款。</li><li><strong>申請入學：</strong>整理表格與英文文件，聯絡校方、遞交申請並跟進錄取。依正式帳單確認付款及收據。</li><li><strong>簽證與行前：</strong>按身分及官方要求整理財力、保險、入學與住宿材料，確認出發及抵達後登記安排。</li><li><strong>到校支援：</strong>協助與校方溝通課程、住宿及入學後問題。</li></ol></section>
 <section class="steps" id="contact"><h2>聯絡 OTC</h2><p>海外督導 OTC｜海圖規劃・留學諮詢</p><p><a class="apply" href="${contact}" target="_blank" rel="noopener">WhatsApp 免費諮詢</a>　<a href="mailto:office@overseasuk.com">office@overseasuk.com</a><br>WhatsApp：+44 7947 991572｜微信：overseasus</p></section>
 <section class="notes"><h2>資料來源</h2><p><a href="https://www.irishimmigration.ie/wp-content/uploads/2026/09/Interim-List-of-Eligible-Programmes-updated-22-September-2026.xlsx">ISD 官方 ILEP 完整課程表（下載）</a><br><a href="https://www.trustedireland.ie/sites/default/files/2026-02/trusted-ireland-he-list-of-eligible-programmes.xlsx">TrustEd Ireland 官方合資格課程表（下載）</a><br><a href="https://www.qqi.ie/news/qqi-announces-the-first-english-language-education-providers-authorised-to-use-trusted-ireland">QQI｜TrustEd Ireland 英語機構授權公告</a></p><p>ILEP 正過渡至 TrustEd Ireland，兩份課程表均須查閱。此頁按官方表列機構／校區整理，不是 67 個獨立品牌；現有招生、課程名稱及校區以校方與官方最新名單確認。詳細課程介紹見學校官網。</p></section></main>${filterScript}`;
};
