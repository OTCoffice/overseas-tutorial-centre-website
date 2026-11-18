const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const route = '/zh/course-selection-alliance/';
const entry = {
  type: 'Page', title: 'OTC 選課聯盟｜新生與交換生選課', url: route,
  desc: '涵蓋波蘭等 16 個國家：新生註冊、交換生選課、課程目錄、Learning Agreement、學分認定準備、課程搭配與改課期限。'
};
fs.writeFileSync(path.join(root, 'zh/course-selection-alliance/index.html'), fs.readFileSync(path.join(root, 'content/course-selection-alliance.html')));
for (const file of ['search/index.html', 'zh/search/index.html']) {
  const target = path.join(root, file);
  const html = fs.readFileSync(target, 'utf8');
  const updated = html.replace(/(<script type="application\/json" id="search-data">)([\s\S]*?)(<\/script>)/, (_, before, json, after) => {
    const items = JSON.parse(json).filter(item => item.url !== route);
    items.push(entry);
    return before + JSON.stringify(items).replace(/</g, '\\u003c') + after;
  });
  if (updated === html && !html.includes(route)) throw new Error('Missing search index: ' + file);
  fs.writeFileSync(target, updated);
}
const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const url = 'https://overseasuk.com' + route;
if (!sitemap.includes('<loc>' + url + '</loc>')) {
  sitemap = sitemap.replace('</urlset>', '  <url><loc>' + url + '</loc></url>\n</urlset>');
  fs.writeFileSync(sitemapPath, sitemap);
}
