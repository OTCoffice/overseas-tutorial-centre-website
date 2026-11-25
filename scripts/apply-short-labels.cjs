// 用法：node scripts/apply-short-labels.cjs
// 按 content/short-labels.json 把入口頁標題／頁籤／按鈕縮到四字內，並把目標頁 h1 改成同名。可重複執行（已改過的會跳過）。
const fs = require('fs'), path = require('path'), root = path.resolve(__dirname, '..');
const M = require('../content/short-labels.json');
const rd = f => fs.readFileSync(path.join(root, f), 'utf8'), wr = (f, s) => fs.writeFileSync(path.join(root, f), s);
const exists = f => fs.existsSync(path.join(root, f));
const sortLong = o => Object.entries(o).sort((a, b) => b[0].length - a[0].length);
const log = [];

// 1) service-desk 資料：類別、子分類、服務名稱
let desk = rd('content/service-desk.cjs'); const cut = desk.indexOf('const esc=');
let data = desk.slice(0, cut);
for (const [a, b] of sortLong({ ...M.categories, ...M.subgroups, ...M.services })) data = data.split(`"${a}",`).join(`"${b}",`);
wr('content/service-desk.cjs', data + desk.slice(cut));

// 2) 目標頁 h1：服務卡片連到的中文頁 + 額外指定頁
const groups = eval('(' + data.slice(data.indexOf('const groups=') + 13).replace(/;\s*$/, '') + ')');
const titles = { ...M.pageTitles };
for (const [, , , rows] of groups) for (const [, , items] of rows) for (const [name, url] of items)
  if (/^\/zh\/[^#?]*\/$/.test(url)) { if (titles[url] && titles[url] !== name) log.push(`衝突 ${url}: ${titles[url]} / ${name}`); else titles[url] = name; }
for (const [url, t] of Object.entries(titles)) {
  const f = url.slice(1) + 'index.html'; if (!exists(f)) { log.push('缺頁 ' + url); continue; }
  const h = rd(f), m = h.match(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/); if (!m) { log.push('無h1 ' + url); continue; }
  if (m[2].replace(/<[^>]+>/g, '').trim() !== t) wr(f, h.replace(m[0], `<h1${m[1]}>${t}</h1>`));
}

// 3) 主頁（來源與兩個 HTML）：精確替換 >文字< 與 >文字 →<
for (const f of ['content/chinese-home.cjs', 'zh/index.html', 'index.html'].filter(exists)) {
  let s = rd(f); const T = (s.match(/<title>[\s\S]*?<\/title>/) || [''])[0]; s = s.replace(T, '\u0000T\u0000');
  for (const [a, b] of sortLong({ ...M.services, ...M.home })) s = s.split(`>${a}<`).join(`>${b}<`).split(`>${a} →<`).join(`>${b} →<`);
  // 主頁 hero 右側 OTC 色帶（美國留學色調：磚紅＋金）
  const BAND = '.otc-home .home-masthead{position:relative;overflow:hidden}.otc-home .home-masthead::after{content:"";position:absolute;top:0;bottom:0;right:4%;width:11%;background:linear-gradient(90deg,#74333a 0 74%,#ae9340 74% 100%);pointer-events:none}.otc-home .home-masthead>.home-wrap{position:relative;z-index:1}@media(max-width:680px){.otc-home .home-masthead::after{right:0;width:8px;background:linear-gradient(180deg,#74333a 0 72%,#ae9340 72% 100%)}}';
  if (!s.includes('home-masthead::after')) s = s.replace('</style><main class="otc-home">', BAND + '</style><main class="otc-home">');
  wr(f, s.replace('\u0000T\u0000', T));
}
// 4) 分類頁與總覽：hero 面板與 h1 也用短名
for (const f of fs.readdirSync(path.join(root, 'zh/services/categories')).map(c => `zh/services/categories/${c}/index.html`).concat('zh/services/index.html').filter(exists)) {
  let s = rd(f);
  for (const [a, b] of sortLong(M.categories)) s = s.split(`>${a}<`).join(`>${b}<`);
  wr(f, s);
}
// 5) 內容頁卡片區：預設頁籤、目錄標題 = 頁面 h1、分組標題
const TABS = { '概況與選擇': '概況', '申請與材料': '申請材料', '費用與服務': '費用服務', '資料與提醒': '資料提醒' };
const walk = d => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(d + '/' + e.name) : e.name === 'index.html' ? [d + '/' + e.name] : []);
for (const f of walk('zh')) {
  let s = rd(f); if (!s.includes('class="cd"')) continue; const o = s;
  for (const [a, b] of Object.entries(TABS)) s = s.split(`>${a}</button>`).join(`>${b}</button>`);
  const h1 = (s.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  if (h1 && [...h1].length <= 6) s = s.replace(/(<div class="cd-head"><h2>)[\s\S]*?(<\/h2>)/, `$1${h1}$2`);
  s = s.replace(/(<div class="cd-grouphead">)[^<]*(<span>)/, '$1全部要點$2');
  if (s !== o) wr(f, s);
}
// 6) 內容頁：卡片標題、hero 副標題與 hero 指示條；並同步 JSON 卡片資料
const CARDS = sortLong(M.cards || {}), SUB = sortLong(M.heroSub || {});
for (const f of walk('zh')) {
  let s = rd(f); if (!s.includes('class="cd-card')) continue; const o = s;
  s = s.replace(/(<article class="cd-card[^>]*>[\s\S]*?<h3>)([\s\S]*?)(<\/h3>)/g, (m, a, t, b) => a + ((M.cards || {})[t] || t) + b);
  s = s.replace(/(<div class="cd-desc">)([\s\S]*?)(<\/div>)/g, (m, a, body, b) => a + body.replace(/(<h3\b[^>]*>)([^<]*)(<\/h3>)/g, (x, p, t, q) => p + ((M.cards || {})[t] || t) + q) + b);
  s = s.replace(/<section class="page-hero[\s\S]*?<\/section>/, hero => {
    for (const [a, b] of SUB) hero = hero.split(`>${a}</h2>`).join(`>${b}</h2>`);
    for (const [a, b] of CARDS) hero = hero.split(`<strong>${a}</strong>`).join(`<strong>${b}</strong>`);
    return hero;
  });
  if (s !== o) wr(f, s);
}
for (const f of fs.readdirSync(path.join(root, 'content')).filter(x => x.endsWith('.json') && x !== 'short-labels.json')) {
  let s = rd('content/' + f); const o = s;
  for (const [a, b] of CARDS) s = s.split(`"title": ${JSON.stringify(a)}`).join(`"title": ${JSON.stringify(b)}`);
  if (s !== o) wr('content/' + f, s);
}
// 7) 內容頁其餘指示條：角標、目錄標題、按鈕、badge、頁籤
const N = t => (t.replace(/→|↗|›/g, '').match(/[A-Za-z0-9][A-Za-z0-9.-]*|[^\sA-Za-z0-9・、，,\/｜|（）()\-：:？?。]/g) || []).length;
const ALL = { ...M.services, ...M.home, ...(M.cards || {}), ...(M.tabs || {}) };
const short = t => ALL[t] || ALL[t.replace(/\s*[→↗]$/, '')];
for (const f of walk('zh')) {
  if (f.includes('/categories/') || f === 'zh/index.html' || f === 'zh/services/index.html') continue;
  let s = rd(f); if (!s.includes('class="cd-card')) continue; const o = s;
  const h1 = ((s.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '').trim();
  const fix = t => N(t) <= 4 ? t : (short(t) || null);
  s = s.replace(/(<span class="cd-region">)([^<]*)(<)/g, (m, a, t, b) => a + (N(t) <= 4 ? t : (fix(t) || h1)) + b);
  s = s.replace(/(<div class="cd-head"><h2>)([\s\S]*?)(<\/h2>)/, (m, a, t, b) => a + (N(t) <= 4 ? t : h1) + b);
  s = s.replace(/(<a class="cd-([ps])" href="([^"]*)"[^>]*>)([^<]*)(<\/a>)/g, (m, a, k, href, t, b) => {
    if (N(t) <= 4) return m; const sh = short(t.trim()); if (sh) return a + sh.replace(/\s*[→↗]$/, '') + (/^https?:/.test(href) && !href.includes('overseasuk.com') ? ' ↗' : ' →') + b;
    return a + (/^https?:/.test(href) && !href.includes('overseasuk.com') ? '官方頁 ↗' : '查看 →') + b; });
  s = s.replace(/<div class="cd-chips">([\s\S]*?)<\/div>/g, (m, inner) => { const keep = [...inner.matchAll(/<span>([^<]*)<\/span>/g)].map(x => x[1]).map(t => N(t) <= 4 ? t : fix(t)).filter(Boolean); return keep.length ? `<div class="cd-chips">${keep.map(t => `<span>${t}</span>`).join('')}</div>` : ''; });
  s = s.replace(/(<span class="cd-badge">)([^<]*)(<\/span>)/g, (m, a, t, b) => N(t) <= 4 ? m : (fix(t) ? a + fix(t) + b : ''));
  s = s.replace(/(<button type="button" class="cd-tab[^"]*" data-tab="[^"]*">)([^<]*)(<\/button>)/g, (m, a, t, b) => N(t) <= 4 ? m : a + (fix(t) || t) + b);
  if (s !== o) wr(f, s);
}
console.log('done', Object.keys(titles).length, 'page titles'); if (log.length) console.log(log.join('\n'));
