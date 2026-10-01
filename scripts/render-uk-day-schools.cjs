const fs = require('fs'), path = require('path');
const transform = require('../content/uk-day-schools.cjs');
for (const slug of ['uk', 'united-kingdom']) {
  const file = path.join(__dirname, '..', 'zh/private-school-alliance', slug, 'index.html');
  const result = transform(fs.readFileSync(file, 'utf8'));
  fs.writeFileSync(file, result);
  console.log('Updated UK day schools:', slug);
}
