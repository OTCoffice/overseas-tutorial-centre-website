// 把已渲染頁面中「連續的 <section>…<h2>…</h2>…</section>」區塊轉成卡片目錄（只動這一段，不碰 head／導航）。
// 用於手寫 HTML 的頁面與共用模板。英文頁（<html lang="en">）不處理。
const { renderCardDirectory } = require('./card-directory.cjs');
const dec = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const strip = h => dec(h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
const TABS = [
  ['cost', '費用服務', /費用|收費|價格|服務|聯絡|諮詢|委託|方案|合作/],
  ['apply', '申請材料', /申請|材料|文件|流程|時間|步驟|準備|面試|作品|計畫|計劃|簽證|手續/],
  ['ref', '資料提醒', /官方|資料|來源|參考|提醒|注意|風險|常見問題|FAQ/i],
];
const tabOf = h => (TABS.find(t => t[2].test(h)) || ['overview'])[0];

function allSections(html) {
  const re = /<\/?section\b[^>]*>/g; const out = [], stack = []; let m;
  while ((m = re.exec(html))) {
    if (m[0][1] !== '/') stack.push({ s: m.index, open: m[0] });
    else { const x = stack.pop(); if (x) out.push({ ...x, e: m.index + m[0].length }); }
  }
  return out.sort((p, q) => p.s - q.s);
}
function htmlSectionsToCards(page, opts = {}) {
  if (typeof page !== 'string' || /<html[^>]*lang="en/i.test(page) || /class="cd-card/.test(page)) return page;
  const withH2 = allSections(page).filter(x => /<h2\b/.test(page.slice(x.s, x.e)) && !/hero/.test(x.open));
  // 只取最內層：自身含 h2、但內部沒有其他含 h2 的 section
  const secs = withH2.filter(x => !withH2.some(y => y !== x && y.s > x.s && y.e <= x.e));
  // 取最長的連續段（兩段之間只能是空白或註解）
  let best = [], cur = [];
  for (const x of secs) {
    if (cur.length && page.slice(cur[cur.length - 1].e, x.s).replace(/<!--[\s\S]*?-->/g, '').trim()) { if (cur.length > best.length) best = cur; cur = []; }
    cur.push(x);
  }
  if (cur.length > best.length) best = cur;
  if (best.length < 2) return page;
  const region = (opts.region || strip((page.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').split(/[｜|]/)[0]).slice(0, 14);
  // 先按原頁編排邏輯分類每段（見 skill「判斷原頁編排」）
  const KEEP = opts.keep || /聯絡|開始諮詢|方便的方式/;          // 頁尾聯絡／CTA：留在卡片區外
  const FAQ = /常見問題|FAQ/i;
  const cards = [], kept = [], extraTabs = [];
  const linkBtn = h => { const l = [...h.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => ({ href: m[1], label: strip(m[2]) })).filter(x => x.label)[0]; return l ? { label: l.label.length > 16 ? '查看 ↗' : l.label, href: l.href } : undefined; };
  best.forEach((x, i) => {
    const raw = page.slice(x.s, x.e);
    const inner = raw.slice(x.open.length, raw.length - '</section>'.length);
    const h2m = inner.match(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/);
    const title = strip(h2m[2]).replace(/^\d{1,2}\s*/, '');
    const id = (x.open.match(/\bid="([^"]+)"/) || h2m[1].match(/\bid="([^"]+)"/) || [])[1] || `section-${i + 1}`;
    const ids = [...new Set([...(x.open + h2m[1]).matchAll(/\bid="([^"]+)"/g)].map(m => m[1]))];
    const extra = ids.filter(v => v !== id).map(v => `<span id="${v}"></span>`).join('');
    const desc = extra + inner.replace(h2m[0], '').replace(/<(p|div|span)[^>]*class="[^"]*(eyebrow|kicker|section-label)[^"]*"[^>]*>[\s\S]*?<\/\1>/g, '').trim();
    const links = (desc.match(/<a\s/g) || []).length, rows = (desc.match(/<tr/g) || []).length;
    // 1) 聯絡區、或大型資料表（連結>30 或 行數>20）：保留原樣
    if (KEEP.test(title) || links > 30 || rows > 20) { kept.push(raw); return; }
    const base = { region, badge: String(cards.length + 1).padStart(2, '0') };
    // 2) 原頁已是小卡片組（≥2 個 article）：每個 article 一張卡，自成一個頁籤
    const arts = [...desc.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)];
    if (arts.length >= 2) {
      const tab = 't' + i; extraTabs.push({ id: tab, label: title });
      const intro = strip(desc.replace(/<article\b[\s\S]*?<\/article>/g, ''));
      arts.forEach((m, k) => {
        const h3 = (m[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/) || [])[1] || `${title} ${k + 1}`;
        const body = m[1].replace(/<h3[^>]*>[\s\S]*?<\/h3>/, '').replace(/<a\s[^>]*>[\s\S]*?<\/a>/g, '').trim();
        cards.push({ ...base, badge: title.slice(0, 8), id: k ? undefined : id, tab, title: strip(h3), chips: [], desc: (k ? '' : extra) + body, note: k ? '' : intro, noteLabel: '說明', primary: linkBtn(m[1]) });
      });
      if (!arts.length || !intro) cards.forEach(c => { if (c.tab === tab) c.note = ''; });
      return;
    }
    // 3) 常見問題：<p><strong>問</strong>答</p> 每題一張卡
    const qa = [...desc.matchAll(/<p>\s*<strong>([^<]+)<\/strong>([\s\S]*?)<\/p>/g)];
    if (FAQ.test(title) && qa.length >= 2) {
      if (!extraTabs.some(t => t.id === 'faq')) extraTabs.push({ id: 'faq', label: '常見問題' });
      qa.forEach((m, k) => cards.push({ ...base, badge: 'Q' + (k + 1), id: k ? undefined : id, tab: 'faq', title: strip(m[1]), chips: [], desc: (k ? '' : extra) + m[2].trim() }));
      return;
    }
    // 4) 一般段落；含表格／流程清單或長文的卡佔滿一行
    const chips = [...desc.matchAll(/<(?:h3|strong)\b[^>]*>([^<]{2,12})<\/(?:h3|strong)>/g)].map(m => m[1].replace(/[。：:]$/, '')).slice(0, 3);
    const wide = /<table|<ol|<ul|<h3/.test(desc) || strip(desc).length > 420;
    cards.push({ ...base, id, tab: tabOf(title), title, chips, desc, wide });
  });
  const used = new Set(cards.map(c => c.tab));
  const tabs = [...extraTabs, ...[['overview', '概況'], ...TABS.map(t => [t[0], t[1]])].filter(t => used.has(t[0])).map(([id, label]) => ({ id, label }))];
  const title = opts.title || strip((page.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '').replace(/｜海外督導 OTC$/, '');
  const subtitle = opts.subtitle || dec((page.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const dir = renderCardDirectory({ title, subtitle, searchPlaceholder: '搜尋關鍵詞', tabs, groupTitle: '全部要點', cards })
    .replace('<main class="cd" id="directory">', '<div class="cd" id="directory">').replace(/<\/main>(<script>)/, '</div>$1');
  return page.slice(0, best[0].s) + dir + kept.join('\n') + page.slice(best[best.length - 1].e);
}
module.exports = { htmlSectionsToCards };
