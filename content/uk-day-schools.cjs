const fs = require('fs');
const section = fs.readFileSync(require('path').join(__dirname, 'uk-day-schools.html'), 'utf8');
module.exports = function addUkDaySchools(html) {
  html = html.replace(/<!-- uk-day-schools:start -->[\s\S]*?<!-- uk-day-schools:end -->\s*/g, '');
  const anchor = '<main class="service-herald-main">';
  if (!html.includes(anchor)) throw new Error('UK service main missing');
  html = html.replace(anchor, anchor + '\n' + section + '\n');
  const image = 'https://overseasuk.com/assets/social/otc-uk-day-schools-20261001.png';
  html = html.replace(/(<meta (?:property|name)="(?:og:image|og:image:secure_url|twitter:image|twitter:image:src)" content=")[^"]*(">)/g, '$1' + image + '$2')
    .replace(/(<meta property="og:image:width" content=")\d+(">)/, '$11122$2')
    .replace(/(<meta property="og:image:height" content=")\d+(">)/, '$11402$2');
  return html;
};
