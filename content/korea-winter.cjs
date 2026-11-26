const { pageShell } = require('../site');
const { renderCardDirectory } = require('./card-directory.cjs');
const a = require('./korea-winter.json');
const e = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
module.exports = () => {
  const kinds = [...new Set(a.schools.map(s => s.kind))];
  const directory = renderCardDirectory({
    title: '院校課程', subtitle: '21個冬季項目；按類型篩選，或搜尋院校、城市與截止日期。',
    searchPlaceholder: '搜尋院校、城市、截止', groupTitle: '課程比較',
    tabs: kinds.map(k => ({ id: k, label: k })),
    tipLabel: '申請狀態', tip: '資料核查於2026-11-26，部分項目已截止。日期、費用與名額以院校最新公告為準；收錄不代表目前開放報名。',
    cards: a.schools.map((s, i) => ({
      id: 'school-' + (i + 1), tab: s.kind, region: s.city, title: s.name,
      chips: [s.kind],
      desc: `<p>${e(s.experience)}</p><dl><dt>語言與資格</dt><dd>${e(s.level)}</dd><dt>日期與申請</dt><dd>${e(s.dates)}</dd><dt>費用與住宿</dt><dd>${e(s.fee)}</dd></dl>`,
      noteLabel: '申請要求', note: e(s.check),
      primary: { label: '官方課程', href: s.url },
      secondary: undefined
    }))
  }).replace('<main class="cd" id="directory">', '<section class="cd" id="schools">').replace('</main>', '</section>');
  return pageShell({ title: a.titleZh, current: 'services', lang: 'zh-Hant', locale: 'zh', path: a.path,
    description: a.summaryZh, image: a.shareImageZh + '?' + a.socialImageVersion,
    imageWidth: a.socialImageWidth, imageHeight: a.socialImageHeight, imageAlt: a.titleZh,
    body: `<main class="japan-courses korea-courses">
<section class="page-hero services-hero"><div class="band"><div class="eyebrow">OTC 寒暑校聯盟 · KOREA</div><h1>韓國冬校</h1><p class="hero-sub">大學冬校、三週韓語與文化營。比較日期、截止、學分、費用及簽證。</p></div></section>
<section class="jp-intro" id="start"><h2>課程選擇</h2><p>大學冬校多為英語授課、可修學分，一般要求大學在讀；韓語短期課按程度分班，多數零基礎可報；文化營以體驗為主，部分接受高中生。12月底開課的冬校多在10–11月截止，2月班仍可趕上。</p></section>
${directory}
<div class="jp-info"><section id="visa"><h2>簽證學分</h2><p>短期冬校一般毋須學生簽證。持免簽護照者（例如香港特區護照）可免簽入境；不在免簽名單者，須向韓國使領館申請 C-3-1 短期訪問或 D-2-8 短期留學簽證。K-ETA 臨時豁免適用至 2026 年 12 月 31 日，入境前須填 e-Arrival Card；2027 年入境者出發前請再核對最新規定。</p><p>學分能否轉換與簽證類別無關，取決於母校：出發前向學系或交流處取得課程預先認可，結業後請主辦大學寄發正式成績單。</p></section>
<section id="help"><h2>申請服務</h2><p>告訴我們可出發日期、停留週數、預算、英語／韓語程度及是否需要學分。OTC協助比較2–3個合適項目，核對資格、截止、費用和文件。海外督導提供漢陽冬校免費代辦；其他院校是否適用免費渠道須逐校確認，學費、住宿、機票、保險等第三方費用另計。本清單為獨立資料整理，收錄不代表官方合作或保證名額。</p></section>
<p class="jp-source">資料核查：2026-11-26，綜合院校官網、合作大學公告及同業整理；標「待核」者未查得可靠金額，不作估價。</p>
<p><a href="/zh/summer-school-alliance/">寒暑校聯盟</a> · <a href="/zh/language-school-alliance/south-korea/">韓國語言學校</a> · <a href="/zh/services/korea-exchange-support/">韓國交換</a></p></div>
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
