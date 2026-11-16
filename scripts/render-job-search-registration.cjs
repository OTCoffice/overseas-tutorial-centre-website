const { readFileSync, mkdirSync, writeFileSync } = require('node:fs');
const path = require('node:path');
const { pageShell } = require('../site');

const route = '/zh/services/job-search-registration/';
const directory = path.join(__dirname, '..', route);
mkdirSync(directory, { recursive: true });
writeFileSync(path.join(directory, 'index.html'), pageShell({
  title: '求職登記表｜海外督導 OTC',
  description: '填寫 OTC 求職登記資料，下載或開啟電郵草稿，連同最新履歷交回 Maria。',
  path: route,
  lang: 'zh-Hant',
  locale: 'zh',
  current: 'services',
  body: readFileSync(path.join(__dirname, '../content/job-search-registration.html'), 'utf8'),
}).replace(/[ \t]+$/gm, ''));
