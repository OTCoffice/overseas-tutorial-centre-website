const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
execFileSync(process.execPath, ['scripts/render-herald.cjs', '--service', 'content/change-of-major.json'], {cwd: root, stdio: 'inherit'});
const a = require('../content/change-of-major.json');
const searchPath = path.join(root, 'zh/search/index.html');
let html = fs.readFileSync(searchPath, 'utf8');
html = html.replace(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/, (_, before, json, after) => {
  const entries = JSON.parse(json).filter(item => item.url !== a.path);
  entries.unshift({type: 'Page', title: a.titleZh, url: a.path, desc: a.summaryZh});
  return before + JSON.stringify(entries).replace(/</g, '\\u003c') + after;
});
fs.writeFileSync(searchPath, html);
// Update only the requested navigation links, preserving manual additions elsewhere.
const feature = '<p class="desk-route-feature"><a href="/zh/services/change-of-major/"><strong>轉專業與轉學院 →</strong></a>　校內轉科、先修課、學分抵免；初步諮詢免費。</p>';
const deskFile = path.join(root, 'zh/services/index.html');
let deskHtml = fs.readFileSync(deskFile, 'utf8');
if (!deskHtml.includes('href="' + a.path + '"')) {
  deskHtml = deskHtml.replace(/(<header class="desk-section-head"><h2><a href="\/zh\/services\/categories\/study\/">[\s\S]*?<\/header>)/, '$1\n' + feature);
  fs.writeFileSync(deskFile, deskHtml);
}
const categoryFile = path.join(root, 'zh/services/categories/study/index.html');
let categoryHtml = fs.readFileSync(categoryFile, 'utf8');
if (!categoryHtml.includes('href="' + a.path + '"')) {
  categoryHtml = categoryHtml.replace(/(<a[^>]+href="\/zh\/services\/international-transfer\/"[\s\S]*?<\/a>)/, '$1\n<a class="desk-row" href="' + a.path + '"><strong>轉專業與轉學院</strong><span>校內轉科、先修課、學分抵免與修業安排；初步諮詢免費。</span><i>→</i></a>');
  fs.writeFileSync(categoryFile, categoryHtml);
}
require('./render-international-transfer.cjs');
