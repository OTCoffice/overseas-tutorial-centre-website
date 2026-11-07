const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const awardRoute = '/zh/government-scholarships/';
const studyRoute = '/zh/study-planning/';

for (const [route, source] of [
  [awardRoute, 'government-scholarships'],
  [studyRoute, 'study-planning'],
  ['/zh/services/', 'service-desk']
]) {
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), require('../content/' + source + '.cjs')().replace(/[ \t]+$/gm, ''));
}

const searchFile = path.join(root, 'search/index.html');
const search = fs.readFileSync(searchFile, 'utf8');
const block = /(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/;
if (!block.test(search)) throw Error('Search data block missing');
fs.writeFileSync(searchFile, search.replace(block, (_, open, data, close) => {
  const entries = JSON.parse(data);
  for (const entry of [
    { type: 'Page', title: '政府全額獎學金', url: awardRoute, desc: '按留學目的地比較政府全獎、學位、資助和三地申請渠道。' },
    { type: 'Page', title: '留學規劃與申請諮詢', url: studyRoute, desc: '選校、費用與獎學金、申請材料及錄取後安排。' }
  ]) {
    const index = entries.findIndex(item => item.url === entry.url);
    if (index < 0) entries.unshift(entry);
    else entries[index] = { ...entries[index], ...entry };
  }
  return open + JSON.stringify(entries).replace(/</g, '\\u003c') + close;
}));

const sitemapFile = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapFile, 'utf8');
for (const route of [awardRoute, studyRoute]) {
  const loc = '<loc>https://overseasuk.com' + route + '</loc>';
  if (!sitemap.includes(loc)) sitemap = sitemap.replace('</urlset>', '  <url>' + loc + '</url>\n</urlset>');
}
fs.writeFileSync(sitemapFile, sitemap);
