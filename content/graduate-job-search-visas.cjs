const {pageShell}=require('../site');
const frame=require('./academic-subpage.cjs');
const a=require('./graduate-job-search-visas.json');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
module.exports=()=>{
const intro='你好，我想了解高學歷求職簽證。\n畢業院校及所在地：\n學位與專業：\n畢業年月／預計畢業年月：\n國籍及目前居留身分：\n目標國家與出發時間：\n語言程度及求職方向：';
const wa='https://wa.me/447947991572?text='+encodeURIComponent(intro);
const mail='mailto:office@overseasuk.com?subject='+encodeURIComponent('高學歷求職簽證諮詢')+'&body='+encodeURIComponent(intro);
const body=`<nav aria-label="麵包屑"><a href="/zh/services/">服務總覽</a> / <a href="/zh/services/#visa">移民與簽證</a> / 高學歷求職簽證</nav>
<section><h2>路線比較</h2><p>英國 HPI、荷蘭 Zoekjaar 與日本 J-Find，讓符合條件的畢業生先到當地求職或準備創業，無須在申請前取得工作 offer。各國的院校、學位、畢業年限及工作權利不同。</p><div class="graduate-table"><table><caption>停留期限與學歷要求</caption><thead><tr><th scope="col">路線</th><th scope="col">期限</th><th scope="col">資格</th></tr></thead><tbody>${a.routes.map(r=>`<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div><p>英國 HPI 設年度申請上限，申請年度為11月1日至次年10月31日；受理狀況以官方申請系統為準。荷蘭官方名稱為 Zoekjaar／Orientation Year，並非兩年求職簽證。</p></section>
<section><h2>工作與居留</h2>${a.routes.map(r=>`<h3>${esc(r[0])}</h3><div class="graduate-columns"><p><strong>求職與工作</strong><br>${esc(r[3])}</p><p><strong>後續居留</strong><br>${esc(r[4])}</p></div>`).join('')}<p>求職居留提供尋找機會的時間，錄用、工資和後續工作居留仍取決於個人背景、雇主及當地規定。</p></section>
<section><h2>申請材料</h2><div class="graduate-columns"><div><h3>首次諮詢</h3><p>提供院校及所在地、學位、專業、畢業年月、國籍、目前居留身分、語言程度和目標職業。如尚未畢業，先說明預計學位頒發時間。</p><p>不需在首次諮詢時提供護照完整影本、銀行帳單或帳戶密碼。</p></div><div><h3>正式申請</h3><p>按目的地整理身分及學位文件、必要的學歷評估、語言證明、資金文件，以及活動計劃或履歷。文件翻譯、認證和遞交方式按官方要求確認。</p><p>英國核對學位頒發年月所屬名單；荷蘭核對畢業時排名及學位類別；日本核對官方指定院校。</p></div></div></section>
<section><h2>服務與費用</h2><p>海外督導提供免費初步資料梳理：核對公開院校名單、學位類別與畢業年限，整理可研究的路線。正式文件支援、翻譯及求職輔導按委託範圍另行報價，開始前列明交付內容與費用。</p><div class="graduate-table"><table><caption>服務費與第三方費用</caption><thead><tr><th scope="col">項目</th><th scope="col">安排</th></tr></thead><tbody><tr><th scope="row">首次資料梳理</th><td>免費；以提供的院校、學位、畢業時間及目的地資料核對公開要求。</td></tr><tr><th scope="row">文件與求職支援</th><td>依文件數量、翻譯、履歷修改或面試輔導範圍書面報價。</td></tr><tr><th scope="row">官方及第三方費用</th><td>簽證、居留、學歷評估、語言考試、醫療附加費或保險、翻譯認證等另計，按官方或供應商最新費用。</td></tr><tr><th scope="row">生活預算</th><td>另備交通、住宿押金、日常生活及求職期間預算；簽證最低資金門檻不等於足夠生活一年。</td></tr></tbody></table></div><p>具體移民法律建議及受規管申請由相應合資格人士處理；OTC 提供官方資料核對、教育與文件協調及求職準備。</p></section>
<section><h2>流程</h2><ol><li><strong>資格核對：</strong>按院校、學位及畢業年月確認適用路線。</li><li><strong>時間與預算：</strong>安排學位取得、評估、語言、出發及求職準備。</li><li><strong>材料準備：</strong>整理清單、翻譯及必要評估，按正式程序遞交。</li><li><strong>求職與後續居留：</strong>準備履歷、求職信與面試，及早確認到期前的工作或創業居留安排。</li></ol><p>在讀學生可提前規劃，但未取得學位時不能僅憑預計畢業認定已符合資格。已有本科學位者可另查本科是否適用；荷蘭海外學歷路線不能直接套用海外本科。</p></section>
<section id="consultation" class="graduate-contact"><h2>諮詢</h2><p>提供「院校＋學位＋畢業年月＋目標國家」，海外督導先協助整理方向。已在讀研者可一併說明預計畢業時間。</p><div class="actions"><a class="btn btn-primary" href="${wa}">WhatsApp 諮詢</a><a class="btn" href="${mail}">電郵諮詢</a></div><p>office@overseasuk.com · WhatsApp +44 7947 991572</p><p><a href="/zh/services/english-cv-interview-support/">英文履歷與面試</a> · <a href="/zh/services/visa-application-support/">簽證申請支援</a> · <a href="/zh/services/masters-country-planning/">碩士選國與申請</a></p></section>
<section><h2>官方資料</h2><p>資料核對：2026年10月5日。申請時再次核對最新名單與規定；不承諾簽證、錄用或長期居留結果。</p><ul>${a.sources.map(([t,u])=>`<li><a href="${esc(u)}">${esc(t)}</a></li>`).join('')}</ul></section>`;
let content=frame('高學歷求職簽證',body).replace('<h2>教育服務與雙語學習</h2>','<h2>英國 HPI · 荷蘭 Zoekjaar · 日本 J-Find</h2>').replace('按主題查閱服務、課程與出版資料，了解內容與聯絡方式。','查閱學歷資格、停留期限、工作權利與申請準備。').replaceAll('https://wa.me/447947991572',wa).replace('<a href="/#learning-tools"><b>LEARN</b><strong>學習工具</strong><span>課程、練習與學習資源</span></a>','<a href="/zh/services/english-cv-interview-support/"><b>CV</b><strong>求職準備</strong><span>英文履歷與面試輔導</span></a>');
content=content.replace('<p>海外督導 OTC｜海圖規劃・留學諮詢</p>','');
const css=`<style>
.graduate-page{--graduate-ink:#183747;--graduate-rule:#d9d6cb}
.graduate-page .band{max-width:1120px;width:calc(100% - 48px);margin-left:auto;margin-right:auto}
.graduate-page .services-hero .band{padding-top:22px;padding-bottom:22px}
.graduate-page .service-hero-layout{grid-template-columns:minmax(0,.9fr) minmax(0,1.35fr);gap:28px;align-items:center}
.graduate-page .services-hero h1{font-size:28px;line-height:1.3;margin:8px 0 6px}
.graduate-page .services-hero h2{font-size:16px;line-height:1.5;margin:0 0 8px}
.graduate-page .services-hero .eyebrow{font-size:12px;letter-spacing:.08em}
.graduate-page .services-hero .hero-sub{font-size:14px;line-height:1.6;max-width:360px;margin:0 0 16px}
.graduate-page .services-hero .actions{margin:0;gap:10px}
.graduate-page .btn{font-size:14px;padding:9px 15px;min-height:38px}
.graduate-page .service-hero-panel{align-self:center;grid-template-columns:repeat(4,minmax(0,1fr))}
.graduate-page .service-hero-panel a{min-height:128px;padding:12px 10px;grid-template-columns:1fr;gap:8px;align-content:center;border-left-width:3px}
.graduate-page .service-hero-panel a::before{display:none}
.graduate-page .service-hero-panel strong,.graduate-page .service-hero-panel span{grid-column:1;line-height:1.5}
.graduate-page .service-hero-panel strong{font-size:14px}
.graduate-page .service-hero-panel span{font-size:12px}
.graduate-page .service-review-strip{padding-top:12px;padding-bottom:12px;gap:10px}
.graduate-page .service-review-strip a{min-height:70px;padding:10px 12px}
.graduate-page .service-review-strip strong{font-size:16px;line-height:1.4}
.graduate-page .service-review-strip span{font-size:12px;line-height:1.5}
.graduate-page .consolidated-page{box-sizing:border-box;width:calc(100% - 48px);max-width:1120px;margin:0 auto;padding:8px 0 36px;font-size:16px;line-height:1.75;color:#344b59}
.graduate-page .consolidated-page>nav{font-size:14px;padding:8px 0 18px}
.graduate-page .consolidated-page section{padding:18px 0;border-bottom:1px solid var(--graduate-rule)}
.graduate-page .consolidated-page h2{font-size:21px;line-height:1.4;color:var(--graduate-ink);border-top:2px solid var(--graduate-ink);padding-top:12px;margin:0 0 14px;scroll-margin-top:110px}
.graduate-page .consolidated-page h3{font-size:17px;line-height:1.5;color:var(--graduate-ink);margin:16px 0 8px}
.graduate-page .consolidated-page p{margin:0 0 12px;font-size:16px;line-height:1.75}
.graduate-page .consolidated-page li{font-size:16px;line-height:1.75;margin-bottom:6px}
.graduate-page .consolidated-page ul,.graduate-page .consolidated-page ol{margin:0 0 14px;padding-left:24px}
.graduate-columns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
.graduate-table{overflow-x:auto;margin:8px 0 16px;border:1px solid var(--graduate-rule)}
.graduate-table table{width:100%;border-collapse:collapse;min-width:640px;table-layout:fixed;font-size:16px;line-height:1.7}
.graduate-table caption{text-align:left;font-size:14px;color:#566970;padding:10px 14px;background:#f7f4ed}
.graduate-table th,.graduate-table td{text-align:left;padding:12px 14px;border-bottom:1px solid var(--graduate-rule);vertical-align:top}
.graduate-table th:first-child{width:145px}.graduate-table thead th:nth-child(2):not(:last-child){width:130px}
.graduate-table thead{background:#edf1f3;color:var(--graduate-ink)}
.graduate-table tbody th{font-weight:600;color:var(--graduate-ink)}
.graduate-table tbody tr:nth-child(even){background:#f7f4ed}.graduate-table tbody tr:last-child>*{border-bottom:0}
.graduate-contact{padding:20px!important;background:#eef3f1;border-left:3px solid #b7892c;margin:18px 0}
.graduate-page a:focus-visible{outline:3px solid #b7892c;outline-offset:3px}
@media(max-width:900px){.graduate-page .service-hero-layout{grid-template-columns:1fr 1.2fr;gap:18px}.graduate-page .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))}.graduate-page .service-hero-panel a{min-height:76px}.graduate-page .service-review-strip span{display:none}}
@media(max-width:700px){.graduate-page .band,.graduate-page .consolidated-page{width:calc(100% - 32px)}.graduate-page .service-hero-layout{grid-template-columns:1fr;gap:18px}.graduate-page .services-hero h1{font-size:25px}.graduate-page .services-hero h2{font-size:15px}.graduate-page .service-hero-panel a{min-height:68px;padding:10px 12px}.graduate-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.graduate-page .service-review-strip a{min-height:62px}.graduate-page .service-review-strip strong{font-size:14px}.graduate-columns{grid-template-columns:1fr;gap:0}.graduate-page .consolidated-page h2{font-size:20px}.graduate-page .consolidated-page section{padding:16px 0}.graduate-contact{padding:16px!important}.graduate-table th:first-child{width:110px}.graduate-table thead th:nth-child(2):not(:last-child){width:110px}}
</style>`;
return pageShell({title:a.titleZh,path:a.path,locale:'zh',lang:'zh-Hant',current:'services',bodyClass:'graduate-page',description:a.summaryZh,body:css+content});
};
