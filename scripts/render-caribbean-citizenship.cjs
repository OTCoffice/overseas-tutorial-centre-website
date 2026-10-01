const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const url = '/zh/services/caribbean-citizenship/';
const title = '第二護照｜加勒比投資入籍方案與申請協調｜海外督導 OTC';
const desc = '安提瓜和巴布達、多米尼克、格林納達的官方投資門檻、費用、出行規則與申請協調。';
const page = path.join(root, 'zh/services/caribbean-citizenship/index.html');

fs.mkdirSync(path.dirname(page), { recursive: true });
fs.writeFileSync(page, require('../content/caribbean-citizenship-service.cjs')().replace(/[ \t]+$/gm, ''));
fs.writeFileSync(path.join(root, 'zh/services/index.html'), require('../content/service-desk.cjs')().replace(/[ \t]+$/gm, ''));

for (const file of ['search/index.html', 'zh/search/index.html']) {
  const target = path.join(root, file);
  const html = fs.readFileSync(target, 'utf8');
  const re = /(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
  const match = html.match(re);
  if (!match) throw new Error('Search data missing: ' + file);
  const entries = JSON.parse(match[2]);
  const entry = { type: '服務', title, url, desc };
  const i = entries.findIndex((item) => item.url === url);
  if (i < 0) entries.unshift(entry);
  else entries[i] = entry;
  fs.writeFileSync(target, html.replace(re, (_, a, __, c) => a + JSON.stringify(entries).replaceAll('<', '\\u003c') + c));
}

const sitemap = path.join(root, 'sitemap.xml');
let xml = fs.readFileSync(sitemap, 'utf8');
const loc = 'https://overseasuk.com' + url;
if (!xml.includes('<loc>' + loc + '</loc>')) {
  xml = xml.replace('</urlset>', '  <url><loc>' + loc + '</loc></url>\n</urlset>');
  fs.writeFileSync(sitemap, xml);
}
console.log('Rendered Caribbean citizenship page, service index, search and sitemap.');
