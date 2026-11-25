// 入口頁（主頁、服務總覽、分類頁）的卡片目錄。只產生正文區塊，由 scripts/apply-hub-cards.cjs 嵌回現有 HTML，不重建導航。
const { renderCardDirectory } = require('./card-directory.cjs');
const strip = h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const anchor = ids => ids.filter(Boolean).map(i => `<span id="${i}"></span>`).join('');
const linksHtml = ls => ls.length ? `<p class="cd-links">${ls.map(l => `<a href="${l.href}">${l.label}</a>`).join(' · ')}</p>` : '';
const btn = l => l && { label: /→|↗/.test(l.label) ? l.label : l.label + ' →', href: l.href };

// 分類頁：子分類 = 頁籤；每個服務一張卡；子分類錨點放在該組第一張卡
function categoryDirectory(cat, link) {
  const [id, label, desc, rows] = cat;
  const cards = [];
  rows.forEach(([key, heading, items]) => items.forEach(([name, url, detail], k) => cards.push({
    tab: key, region: heading, badge: url.startsWith('/services/') ? '中文自動翻譯' : '', title: name,
    desc: (k ? '' : anchor([key])) + detail, primary: { label: '查看服務 →', href: link(url) },
  })));
  return renderCardDirectory({ title: label, subtitle: desc, searchPlaceholder: '搜尋服務（如 簽證／作品集／實習）',
    tabs: rows.map(([key, heading]) => ({ id: key, label: heading })), groupTitle: `${label}：全部服務`, cards }).replace('id="directory"', `id="directory" data-category="${id}"`);
}
// 服務總覽：每個類別一張卡（子分類連結放卡內），按「主要業務／求職與專業」分頁籤
function overviewDirectory(primary, more, path) {
  const card = (tab, [id, label, desc, rows], ids, href, extra) => ({ tab, region: '服務類別', title: label, desc: anchor(ids) + desc + linksHtml([...rows.map(([key, heading]) => ({ label: heading, href: `${href}#${key}` })), ...(extra || [])]), primary: { label: `查看${label}全部服務 →`, href } });
  const cards = [...primary.map(g => card('main', g, [g[0]], path(g[0]))), ...more.map(m => card('more', m.group, m.ids, m.href, m.extra))];
  return renderCardDirectory({ title: '服務總台', subtitle: '按需要選擇服務類別；每張卡可直達該類全部服務或子分類。', searchPlaceholder: '搜尋服務類別',
    tabs: [{ id: 'main', label: '主要業務' }, { id: 'more', label: '求職・專業・出版' }], groupTitle: '服務類別', cards });
}
// 主頁：三組 home-group → 三個頁籤；每個 home-group 一張卡
function homeDirectory(html) {
  const re = /<section[^>]*class="home-section[^"]*"[^>]*>[\s\S]*?<h2>([\s\S]*?)<\/h2>([\s\S]*?)<\/div><\/div><\/section>/g;
  const blocks = [...html.matchAll(re)].filter(m => /home-group/.test(m[2]));
  if (blocks.length < 2) return null;
  const tabs = [], cards = [];
  blocks.forEach((b, t) => {
    const sec = b[0].match(/^<section[^>]*>/)[0], secId = (sec.match(/\bid="([^"]+)"/) || [])[1];
    tabs.push({ id: 'g' + t, label: strip(b[1]) });
    [...b[2].matchAll(/<section class="home-group"([^>]*)>([\s\S]*?)<\/section>/g)].forEach((g, k) => {
      const gid = (g[1].match(/\bid="([^"]+)"/) || [])[1];
      const ls = [...g[2].matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => ({ href: m[1], label: strip(m[2]) }));
      cards.push({ tab: 'g' + t, region: strip(b[1]), title: strip((g[2].match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || ''),
        desc: anchor([k ? '' : secId, gid]) + ((g[2].match(/<p>([\s\S]*?)<\/p>/) || [])[1] || '') + linksHtml(ls.slice(2)),
        primary: btn(ls[0]), secondary: btn(ls[1]) });
    });
  });
  const dir = renderCardDirectory({ title: '海外督導 OTC 服務與資源', subtitle: '主要業務、其他服務與學習資源；按頁籤篩選或搜尋。', searchPlaceholder: '搜尋服務或資源', tabs, groupTitle: '全部項目', cards });
  return { start: blocks[0].index, end: blocks[blocks.length - 1].index + blocks[blocks.length - 1][0].length, dir };
}
module.exports = { categoryDirectory, overviewDirectory, homeDirectory };
