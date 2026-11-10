// Keep the Europe mobility guide discoverable after static site regeneration.
const fs = require('node:fs');
const path = 'zh/services/index.html';
if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  const target = '<nav class="desk-jump" aria-label="簽證、居留與短期交流子分類">';
  const link = '<p class="desk-route-feature"><a href="/zh/services/europe-mobility-pathways/"><strong>歐洲移居與留學轉工作路線 →</strong></a>　歐洲36國移居與留學轉工作總目錄，附官方核對入口。</p>\n';
  if (!html.includes('/zh/services/europe-mobility-pathways/') && html.includes(target)) {
    fs.writeFileSync(path, html.replace(target, link + target));
  }
}
