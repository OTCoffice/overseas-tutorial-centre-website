// 用法：node scripts/apply-hub-cards.cjs  把主頁、服務總覽、6 個分類頁正文換成卡片目錄（只換正文，不動 head／導航）
const fs = require('fs'), path = require('path'), root = path.resolve(__dirname, '..');
const desk = require('../content/service-desk.cjs'), { homeDirectory } = require('../content/hub-cards.cjs');
const MAIN = /<main class="band desk-index">[\s\S]*?<\/main>/;
const swap = (file, html) => { const f = path.join(root, file), old = fs.readFileSync(f, 'utf8'); if (!MAIN.test(old)) throw file + ': no desk main'; fs.writeFileSync(f, old.replace(MAIN, () => html.match(MAIN)[0])); console.log('OK', file, (html.match(MAIN)[0].match(/class="cd-card/g) || []).length); };
swap('zh/services/index.html', desk());
for (const c of desk.categories) swap(`zh/services/categories/${c}/index.html`, desk(c));
for (const file of ['zh/index.html', 'index.html']) {
  const f = path.join(root, file); if (!fs.existsSync(f)) continue;
  const h = fs.readFileSync(f, 'utf8'); if (/class="cd-card/.test(h)) { console.log('SKIP', file); continue; }
  const r = homeDirectory(h); if (!r) throw file + ': home groups not found';
  fs.writeFileSync(f, h.slice(0, r.start) + r.dir + h.slice(r.end)); console.log('OK', file, (r.dir.match(/class="cd-card/g) || []).length);
}
