const { pageShell } = require('../site');
const { renderCardDirectory } = require('./card-directory.cjs');
const a = require('./japan-winter-school.json');
const e = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
module.exports = () => {
  const kinds = [...new Set(a.schools.map(s => s.kind))];
  const directory = renderCardDirectory({
    title: '院校與課程', subtitle: '保留20所院校資料；按課程類型篩選，或搜尋城市、日語程度與住宿。',
    searchPlaceholder: '搜尋院校、城市、日語程度', groupTitle: '課程比較',
    tabs: kinds.map(k => ({ id: k, label: k })),
    tipLabel: '申請狀態', tip: '原課程資料核查於2026-09-29，部分申請日期已過。日期、費用與名額須向院校再次確認；收錄不代表目前開放報名。',
    cards: a.schools.map((s, i) => ({
      id: 'school-' + (i + 1), tab: s.kind, region: s.city, title: s.name,
      chips: [s.kind],
      desc: `<p>${e(s.experience)}</p><dl><dt>語言與程度</dt><dd>${e(s.level)}</dd><dt>日期與申請</dt><dd>${e(s.dates)}</dd><dt>費用與住宿</dt><dd>${e(s.fee)}</dd></dl>`,
      noteLabel: '申請要求', note: e(s.check),
      primary: { label: '官方課程', href: s.url },
      secondary: s.extra ? { label: '補充資料', href: s.extra } : undefined
    }))
  }).replace('<main class="cd" id="directory">', '<section class="cd" id="schools">').replace('</main>', '</section>');
  return pageShell({ title: a.titleZh, current: 'services', lang: 'zh-Hant', locale: 'zh', path: a.path,
    description: a.summaryZh, image: a.shareImageZh + '?' + a.socialImageVersion,
    imageWidth: a.socialImageWidth, imageHeight: a.socialImageHeight, imageAlt: a.titleZh,
    body: `<main class="japan-courses">
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">OTC 寒暑校聯盟 · JAPAN</div><h1>日本寒校與冬季短期體驗</h1><p class="hero-sub">大學冬校、短期日語與文化體驗。比較課程、費用、住宿及申請資格。</p></div></section>
<section class="jp-intro" id="start"><h2>課程選擇</h2><p>大學冬校適合符合在讀要求的學生；短期日語課可按程度與週數選擇；季節文化課結合日語學習和城市活動。英語支援不等於全英語授課，初級班亦不一定接受零基礎。</p><p><strong>高中生與學分：</strong>本頁整理短期課程，不是高中一年交換方案。高中生須先確認年齡、住宿及監護要求；如需抵免學分，應在申請前取得原校書面確認。大學在讀限定課程不適用高中生。</p></section>
${directory}
<div class="jp-info"><section id="budget"><h2>費用與住宿</h2><p>總預算＝課程／註冊／教材＋全程住宿＋餐食與市內交通＋機票＋保險＋另付活動／裝備。表內金額均為日圓；未查得可靠金額就標待核，沒有用0或估價填空。</p><p>例如關西冬校JPY300,000含住宿；立命館1月Express的JPY170,000不含住宿，需自己安排；JaLS按週報價，住宿另計。這些不能只按學費數字比較高低。元旦休校、冬季天氣及雪祭期間住宿供應，也會影響行程。</p><p>報名前取得書面確認：每天實際上課與活動時數、自由時段、年齡及在讀要求、零基礎開班日、住宿房型與通勤、餐食、最少開班人數、退出與退款條款、保險範圍。先確認課程與住宿，再訂不可退機票。</p></section>
<section id="help"><h2>申請服務</h2><p>告訴我們可出發日期、可停留週數、預算、英語／日語程度和喜歡的城市。OTC協助比較2–3個適合的選項，核對資格、課時、費用和文件，再確認可承接的申請方式。</p><p>初步需求梳理不收費；具體代辦是否適用免費渠道，須按院校確認。額外個別輔導或定制支援先書面報價；學費、住宿、機票、保險及其他第三方費用另計。本清單是獨立資料整理，收錄不代表官方合作、代理、佣金或保證名額。</p></section>
<p class="jp-source">課程資料核查：2026-09-29；版面修訂：2026-11-26。金額與班期未作新一輪全面核實。KAI Practical Conversation Course 原頁標示自2023-03-17起暫停，未列入本頁20所院校。<a href="https://www.kaij.jp/courses/conversation/">官方停辦提示</a>。</p>
<p><a href="/zh/summer-school-alliance/">寒暑校聯盟</a> · <a href="/zh/language-school-alliance/japan/">日本語言學校</a></p></div>
</main>
<style>
.japan-courses .services-hero{background:linear-gradient(90deg,#11263b 0%,#17374b 65%,#842d32 65%,#842d32 85%,#bc9839 85%,#bc9839 90%,#11263b 90%);border-bottom:4px solid #bc9839}
.japan-courses .services-hero h1{font-size:clamp(1.7rem,3vw,2.4rem);max-width:65%;line-height:1.35}.japan-courses .hero-sub{max-width:60%}
.japan-courses .jp-intro,.japan-courses .jp-info{max-width:1120px;margin:auto;padding:24px 20px;box-sizing:border-box;font-size:1rem;line-height:1.8;color:#1b263d}
.japan-courses .jp-intro h2,.japan-courses .jp-info h2{font-size:1.3rem;margin:0 0 12px}.japan-courses .jp-info section{border-top:1px solid #d9cfb4;padding:20px 0}.japan-courses .jp-source{font-size:.875rem;color:#626262}
.japan-courses .cd{box-sizing:border-box;font-size:1rem}.japan-courses .cd-card{min-width:0}.japan-courses .cd-card h3{font-size:1.125rem}.japan-courses .cd-desc{font-size:1rem}.japan-courses .cd-tab,.japan-courses .cd-search,.japan-courses .cd-tip,.japan-courses .cd-note,.japan-courses .cd-region,.japan-courses .cd-chips span,.japan-courses .cd-btns a,.japan-courses .cd-grouphead,.japan-courses .cd-head p{font-size:.875rem}
.japan-courses .cd-search{min-width:0;max-width:100%;box-sizing:border-box}.japan-courses dl{margin:0}.japan-courses dt{font-size:.875rem;color:#74333a;font-weight:700;margin-top:12px}.japan-courses dd{margin:3px 0;overflow-wrap:anywhere}.japan-courses .cd-btns{margin-top:auto}.japan-courses .cd-tab:focus-visible,.japan-courses .cd-search:focus-visible{outline:2px solid #74333a;outline-offset:3px}
@media(max-width:600px){.japan-courses .services-hero h1,.japan-courses .hero-sub{max-width:88%}.japan-courses .cd,.japan-courses .jp-intro,.japan-courses .jp-info{padding-left:16px;padding-right:16px}}
</style>` });
};
