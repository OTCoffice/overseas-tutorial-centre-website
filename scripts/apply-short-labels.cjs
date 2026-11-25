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
console.log('done', Object.keys(titles).length, 'page titles'); if (log.length) console.log(log.join('\n'));
