#!/usr/bin/env node
// 把「heading + paragraphs」舊版頁面機械轉成卡片目錄格式（不經 AI 重寫，保留全部原文與連結）。
// 用法：node scripts/sections-to-cards.cjs content/<頁>.cjs [...]   加 --dry 只檢查不寫入
const fs = require('fs'), path = require('path');
const { renderCardDirectory } = require('../content/card-directory.cjs');
const dry = process.argv.includes('--dry');
const strip = h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const TABS = [
  ['cost', '費用服務', /費用|收費|價格|服務|聯絡|諮詢|委託|方案|合作/],
  ['apply', '申請材料', /申請|材料|文件|流程|時間|步驟|準備|面試|作品|計畫|簽證|手續/],
  ['ref', '資料提醒', /官方|資料|來源|參考|提醒|注意|風險|常見問題|FAQ/i],
];
const tabOf = h => (TABS.find(t => t[2].test(h)) || ['overview'])[0];

function linksOf(html) {
  return [...html.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => ({ href: m[1], label: strip(m[2]) })).filter(l => l.label);
}
function toCard(sec, i, region) {
  const paras = sec.paragraphs.map(p => p.trim());
  const block = p => /^<(div|ol|ul|table|p)\b/.test(p) ? p : `<p>${p}</p>`;
  let note = '', noteLabel = '';
  const last = paras[paras.length - 1];
  if (paras.length > 1 && !/^</.test(last) && strip(last).length <= 90 && !/<a\s/.test(last)) { note = last; noteLabel = '提醒'; paras.pop(); }
  const html = paras.map(block).join('');
  const chips = [...html.matchAll(/<strong>([^<]{2,12}?)[。：:]?<\/strong>/g)].map(m => m[1].replace(/[。：:]$/, '')).slice(0, 3);
  const links = linksOf(html);
  const ext = links.filter(l => /^https?:/.test(l.href) || l.href.startsWith('/'));
  const wide = /<table|<ol|<ul/.test(html) || strip(html).length > 420;
  return {
    id: sec.id || `section-${i + 1}`, tab: tabOf(sec.heading), region, badge: String(i + 1).padStart(2, '0'),
    title: sec.heading, chips, desc: html, noteLabel, note, wide,
    primary: ext[0] ? { label: ext[0].label.length > 16 ? '查看資料 ↗' : ext[0].label + (/^https?:/.test(ext[0].href) && !ext[0].href.includes('overseasuk.com') ? ' ↗' : ''), href: ext[0].href } : undefined,
  };
}
// 兼容 {heading|title, paragraphs|html, steps, fees, after, id}
function norm(s) {
  const out = { ...s, heading: s.heading || s.title || '', paragraphs: [...(s.paragraphs || [])] };
  if (s.html) out.paragraphs.push(s.html);
  const rows = (a, f) => Array.isArray(a) && a.length ? f(a) : '';
  out.paragraphs.push(...[rows(s.steps, a => '<ol>' + a.map(x => typeof x === 'string' ? `<li>${x}</li>` : `<li><strong>${x.title || ''}</strong> ${x.text || ''}</li>`).join('') + '</ol>'),
    rows(s.fees, a => '<table><tbody>' + a.map(x => typeof x === 'string' ? `<tr><td>${x}</td></tr>` : `<tr>${Object.values(x).map(v => `<td>${v}</td>`).join('')}</tr>`).join('') + '</tbody></table>')].filter(Boolean));
  if (s.after) out.paragraphs.push(...[].concat(s.after));
  return out;
}
function directoryFor(j) {
  const title = j.titleZh || j.title || '';
  const region = (j.eyebrowZh || title).slice(0, 14);
  const cards = j.sections.map((s, i) => toCard(s, i, region));
  const used = new Set(cards.map(c => c.tab));
  const tabs = [['overview', '概況'], ...TABS.map(t => [t[0], t[1]])].filter(t => used.has(t[0])).map(([id, label]) => ({ id, label }));
  return {
    title, subtitle: j.summaryZh || '', searchPlaceholder: '搜尋關鍵詞', tabs,
    tip: j.tipZh || '', groupTitle: '全部要點', cards, footer: j.footerZh || '',
  };
}
let ok = 0, skip = [];
for (const cjs of process.argv.slice(2).filter(a => !a.startsWith('--'))) {
  try {
    let src = fs.readFileSync(cjs, 'utf8');
    const m = src.match(/(\w+)\s*=\s*require\('\.\/([^']+\.json)'\)/);
    if (!m) throw 'no json require';
    const [, v, jf] = m, jp = path.join(path.dirname(cjs), jf);
    const j = JSON.parse(fs.readFileSync(jp, 'utf8'));
    if (!Array.isArray(j.sections) || !j.sections.length) throw 'no sections';
    j.sections = j.sections.map(norm);
    if (!j.sections.every(s => s.heading && s.paragraphs.length)) throw 'sections without heading/content';
    const hf = j.path.replace(/^\//, '') + 'index.html';
    let html = fs.readFileSync(hf, 'utf8');
    const n = j.sections.length;
    const idOf = k => j.sections[k].id || `section-${k + 1}`;
    const mi = html.search(new RegExp('<[a-z]+[^>]*id="' + idOf(0) + '"'));
    const li = html.search(new RegExp('<[a-z]+[^>]*id="' + idOf(n - 1) + '"'));
    if (mi < 0 || li < 0) throw 'html section ids not found';
    const me = html.indexOf('</section>', li) + 10;
    const expr = src => { const i = src.indexOf('${' + v + '.sections'); if (i < 0) return null; let d = 0; for (let k = i + 1; k < src.length; k++) { if (src[k] === '{') d++; else if (src[k] === '}' && --d === 0) return [i, k + 1]; } return null; };
    if (!expr(src)) throw 'cjs sections expression not found';
    j.directory = directoryFor(j); j.bodyFormat = 'card-directory';
    // 保留原頁所有錨點：原區塊裡有、卡片裡沒有的 id，補成 <span id> 放進對應那張卡
    const region = html.slice(mi, me), starts = j.sections.map((_, k) => region.search(new RegExp('id="' + idOf(k) + '"')));
    for (const mm of region.matchAll(/\bid="([^"]+)"/g)) {
      const pid = mm[1]; if (j.directory.cards.some(c => c.id === pid || (c.desc || '').includes(`id="${pid}"`))) continue;
      let k = 0; starts.forEach((st, q) => { if (st >= 0 && st <= mm.index) k = q; });
      j.directory.cards[k].desc = `<span id="${pid}"></span>` + j.directory.cards[k].desc;
    }
    const out = renderCardDirectory(j.directory);
    if (dry) { console.log('OK(dry)', cjs, j.directory.cards.length); ok++; continue; }
    if (!src.includes('card-directory.cjs')) src = src.replace(m[0], m[0] + `;\nconst {renderCardDirectory}=require('./card-directory.cjs')`);
    const [x, y] = expr(src);
    src = src.slice(0, x) + '${renderCardDirectory(' + v + '.directory)}' + src.slice(y);
    fs.writeFileSync(cjs, src);
    fs.writeFileSync(jp, JSON.stringify(j, null, 2) + '\n');
    fs.writeFileSync(hf, html.slice(0, mi) + out + html.slice(me));
    console.log('OK', cjs, j.directory.cards.length); ok++;
  } catch (e) { skip.push(`${cjs}: ${e}`); }
}
console.log(`converted ${ok}`); if (skip.length) console.log('SKIP\n' + skip.join('\n'));
