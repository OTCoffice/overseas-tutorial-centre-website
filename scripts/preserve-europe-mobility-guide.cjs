// Keep the Europe mobility guide discoverable after static site regeneration.
const fs = require('node:fs');
// This guide is maintained as standalone HTML; keep the seasonal-work source
// synchronised without regenerating unrelated country pages.
const guidePath = 'zh/services/europe-mobility-pathways/index.html';
const seasonalSource = 'content/austria-seasonal-2027.html';
if (fs.existsSync(guidePath) && fs.existsSync(seasonalSource)) {
  let guide = fs.readFileSync(guidePath, 'utf8');
  const section = fs.readFileSync(seasonalSource, 'utf8');
  const start = '<!-- austria-seasonal:start -->';
  const end = '<!-- austria-seasonal:end -->';
  const block = `${start}\n${section}${end}\n`;
  if (guide.includes(start) && guide.includes(end)) {
    guide = guide.slice(0, guide.indexOf(start)) + block + guide.slice(guide.indexOf(end) + end.length).replace(/^\n/, '');
  } else {
    guide = guide.replace('<section class="verified-highlights" aria-labelledby="verified-highlights-title">', block + '<section class="verified-highlights" aria-labelledby="verified-highlights-title">');
  }
  guide = guide.replace('<a href="#verified">官方政策摘要</a><span>', '<a href="#verified">官方政策摘要</a><a href="#austria-seasonal-2027">奧地利季節工</a><span>');
  fs.writeFileSync(guidePath, guide);
}
const path = 'zh/services/index.html';
if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  const target = '<nav class="desk-jump" aria-label="簽證、居留與短期交流子分類">';
  const link = '<p class="desk-route-feature"><a href="/zh/services/europe-mobility-pathways/"><strong>歐洲移居與留學轉工作路線 →</strong></a>　歐洲36國移居與留學轉工作總目錄，附官方核對入口。</p>\n';
  if (!html.includes('/zh/services/europe-mobility-pathways/') && html.includes(target)) {
    fs.writeFileSync(path, html.replace(target, link + target));
  }
}
