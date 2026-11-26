const { renderCardDirectory } = require('./card-directory.cjs');
const a = require('./english-cv-interview-support.json');
const W = '/zh/services/english-cv-interview-support/#topic-4';
module.exports = () => {
  let html = require('./professional-service-page.cjs')(a);
  const tabs = ['服務項目', '求職時程', '轉行方向', '選擇須知', '委託費用', '常見問題'].map(t => ({ id: t, label: t }));
  const C = (tab, title, region, desc, extra = {}) => ({ tab, title, region, desc, ...extra });
  const cards = a.cards.map(c => C(c[0], c[1], c[2], c[3], c[4] || {}));
  const dir = renderCardDirectory({
    title: '服務目錄', subtitle: '由定位、文書到測評與面試；按頁籤篩選，或搜尋關鍵詞。',
    searchPlaceholder: '搜尋 CV、AC、轉行、金融', groupTitle: '服務與資料',
    tabs, tipLabel: '先說清楚', tip: 'OTC 不保證面試邀請、錄取、內推或簽證擔保；內容由本人提供並確認，不編造資歷，不代替本人參加測評或面試。',
    cards
  }).replace('<main class="cd" id="directory">', '<section class="cd" id="directory">').replace('</main>', '</section>');
  const start = html.indexOf('<section><h2 id="topic-0">'), end = html.indexOf('<section><h2 id="topic-4">');
  if (start < 0 || end < 0) throw Error('topic markers changed');
  const intro = `<section class="cv-intro"><h2>先看定位</h2><p>${a.intro}</p></section>`;
  return html.slice(0, start) + intro + dir + html.slice(end);
};
