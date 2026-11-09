const fs = require('node:fs');
const path = require('node:path');
const regions = require('../content/international-transfer-destinations.json');

const esc = text => String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const slug = code => code === 'PT' ? 'portugal' : code.toLowerCase();
const regionLinks = regions.map(({id,label}) => `<a href="#${id}">${label}</a>`).join('');
const destinations = regions.flatMap(region => region.destinations);
const countries = regions.map(({id,label,destinations}) => `
<section class="transfer-region" aria-labelledby="${id}">
<h2 id="${id}">${label} <small>${destinations.length} 個查詢項目</small></h2>
<div class="transfer-list">
${destinations.map(({code,name,english,route,credit,links}) => `<details id="${slug(code)}" data-code="${code}" data-country="${esc(`${name} ${english} ${code}`)}">
<summary>${esc(name)} <span lang="en">${esc(english)}</span></summary>
<dl><dt>轉學途徑</dt><dd>${esc(route)}</dd>
<dt>學分認定</dt><dd>${esc(credit)}</dd>
<dt>官方查詢</dt><dd><ul>${links.map(([label,url])=>`<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('')}</ul></dd></dl>
</details>`).join('\n')}
</div></section>`).join('\n');

const page = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>國際大學轉學｜全球國別查詢｜海外督導 OTC</title>
<meta name="description" content="按七個地區查閱全球大學轉學。逐國查看轉學途徑、學分認定及官方院校與招生資料。">
<link rel="canonical" href="https://overseasuk.com/zh/services/international-transfer/">
<link rel="stylesheet" href="/styles.css">
<style>
.transfer-content{padding-block:24px 48px}.transfer-jump{display:flex;flex-wrap:wrap;gap:8px 20px;padding:12px 0}
.transfer-jump a,.transfer-content a{text-decoration:underline;text-underline-offset:3px}
.transfer-search{max-width:36rem}.transfer-search label{display:block;font-weight:700}.transfer-search input{width:100%;box-sizing:border-box;padding:10px;border:1px solid #777;border-radius:4px;font:inherit;background:white;color:#172f43}
.transfer-content h2,.transfer-list details{scroll-margin-top:110px}.transfer-region{margin-top:26px;border-top:3px solid #af8130}
.transfer-region h2{margin:12px 0}.transfer-region small{font-size:.55em;font-weight:500}
.transfer-list details{border-bottom:1px solid #ded7cc}.transfer-list summary{padding:10px 6px;cursor:pointer;font-weight:700;color:#17354b}
.transfer-list summary span{font-size:.85em;font-weight:400;color:#4e5b64;margin-inline-start:6px}
.transfer-list dl{display:grid;grid-template-columns:6em minmax(0,1fr);gap:8px 12px;padding:8px 12px 16px;margin:0}
.transfer-list dt{font-weight:700}.transfer-list dd,.transfer-list ul{margin:0}.transfer-list ul{padding-inline-start:1.2em}
.transfer-content [hidden]{display:none}.transfer-info{margin-top:32px;border-top:2px solid #17354b;padding-top:12px}
@media(max-width:600px){.transfer-list dl{grid-template-columns:1fr;gap:4px}.transfer-list dd{margin-bottom:8px}}
</style>
</head>
<body>
<header class="site-header"><nav class="nav"><a class="brand" href="/">海外督導 OTC</a><div class="nav-links"><a href="/zh/services/categories/study/#university-admissions">本科與轉學</a><a href="/zh/subject-planning/">學科規劃</a></div></nav></header>
<main>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout">
<div><div class="eyebrow">海外督導 OTC · 學生服務部</div><h1>國際大學轉學</h1><p class="hero-sub">查閱各地的轉學途徑、學分認定與官方資料，再向目標院校確認可入讀的年級。</p>
<div class="actions"><a class="btn btn-primary" href="#destinations">查詢國家及地區</a><a class="btn btn-secondary" href="#contact">免費初步評估</a></div></div>
<aside class="service-hero-panel"><a href="#destinations"><strong>全球國別查詢</strong><span>七個地區，${destinations.length} 個查詢項目</span></a><a href="#portugal"><strong>葡萄牙轉學</strong><span>高等教育總局轉學指引</span></a><a href="#documents"><strong>申請材料</strong><span>成績單、課程大綱與學分</span></a><a href="#fees"><strong>服務收費</strong><span>免費代辦範圍與第三方費用</span></a></aside>
</div></div></section>
<section class="band service-review-strip">
<a href="#destinations"><b>01</b><strong>國家及地區</strong><span>查轉學途徑</span></a>
<a href="#documents"><b>02</b><strong>申請材料</strong><span>準備學分審查</span></a>
<a href="#fees"><b>03</b><strong>服務收費</strong><span>查看免費代辦範圍</span></a>
<a href="#contact"><b>04</b><strong>聯絡方式</strong><span>與學生服務部聯絡</span></a>
</section>
<div class="band transfer-content">
<h2 id="destinations">國家及地區</h2>
<p>涵蓋聯合國 193 個會員國及兩個觀察員國，另列部分有獨立查詢需要的升學地區。分區供查閱使用。</p>
<p>有公開轉學指引的條目會附上指引。其他條目列出院校名錄、主管機關或指定院校的官方入口，供確認招生及抵免規定。IAU 世界高等教育資料庫（WHED）可用於查院校與教育體系。實際申請方式、名額及可認定學分由目標院校與課程確認。</p>
<div id="country-search" class="transfer-search" hidden><label for="country-query">搜尋國家或地區</label><input id="country-query" type="search" placeholder="例如：葡萄牙、Portugal、PT"><p id="country-status" role="status"></p></div>
<nav class="transfer-jump" aria-label="轉學地區">${regionLinks}</nav>
${countries}
<section class="transfer-info">
<h2 id="documents">申請材料與流程</h2>
<ol><li>確認目標校接受的申請類別、入學年級及期限。</li><li>準備正式成績單、在讀證明、已修學分、課程大綱及考核方式，按校方要求補交翻譯或認證。</li><li>確認錄取結果、可認定的必修及選修、剩餘修業時間和費用，再安排離開原校。</li></ol>
<h2 id="fees">免費評估與代辦</h2>
<p>初次評估免費。符合 OTC 合作院校、課程及代辦範圍的申請可免費代辦。校方申請費、翻譯及認證等第三方費用另付。其他個案先書面確認服務內容及費用。</p>
<p><a href="/zh/application-fees/">查看免費代辦與收費標準</a></p>
<h2 id="contact">聯絡學生服務部</h2>
<p>請提供目前的國家、院校、專業、年級、已修學分、希望轉入的地區及入學時間。</p>
<p><a href="https://wa.me/447947991572">WhatsApp +44 7947 991572</a> · 微信 overseasus</p>
</section></div>
</main>
<footer class="site-footer"><div class="band">Overseas Tutorial Centre Ltd · 海外督導 OTC</div></footer>
<script>
const search = document.querySelector('#country-search');
const input = document.querySelector('#country-query');
const status = document.querySelector('#country-status');
const regions = [...document.querySelectorAll('.transfer-region')];
const normalize = value => value.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').toLowerCase();

function filterCountries() {
  const query = normalize(input.value.trim());
  const exactCode = [...document.querySelectorAll('[data-code]')].some(country => country.dataset.code.toLowerCase() === query);
  let count = 0;
  for (const region of regions) {
    let visible = 0;
    for (const country of region.querySelectorAll('[data-country]')) {
      country.hidden = exactCode ? country.dataset.code.toLowerCase() !== query : !normalize(country.dataset.country).includes(query);
      if (!country.hidden) visible++;
    }
    region.hidden = visible === 0;
    count += visible;
  }
  status.textContent = query ? (count ? '找到 ' + count + ' 個查詢項目' : '找不到符合的國家或地區。') : '';
}

function revealCountry() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target?.matches('.transfer-region h2, details[data-country]')) return;
  if (target.closest('.transfer-region').hidden || target.hidden) {
    input.value = '';
    filterCountries();
  }
  if (target.matches('details')) target.open = true;
  target.scrollIntoView();
}

input.addEventListener('input', filterCountries);
window.addEventListener('hashchange', revealCountry);
for (const link of document.querySelectorAll('.transfer-jump a, a[href="#portugal"]')) {
  link.addEventListener('click', () => {
    if (link.hash === location.hash) revealCountry();
  });
}
search.hidden = false;
revealCountry();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname,'../zh/services/international-transfer/index.html'),page);
