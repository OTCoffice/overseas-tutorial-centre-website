const {pageShell}=require('../site');

const steps=[
  ['choose','選國、選校與選科','先按目標學歷、專業、語言及入學時間縮小範圍。',[
    ['國家與院校','/zh/countries/'],['學科規劃','/zh/subject-planning/'],['公立中小學','/zh/public-school-alliance/'],['私立中小學','/zh/private-school-alliance/']]],
  ['funding','費用與獎學金','先估算學費、生活費與申請開支，再比較獎學金與自費方案。',[
    ['政府全額獎學金','/zh/government-scholarships/'],['低學費與其他資助','/zh/services/affordable-study-abroad/'],['OTC 服務收費','/zh/application-fees/']]],
  ['apply','申請與材料','按學位層級準備成績、語言證明、文書及其他指定文件。',[
    ['大學申請','/zh/services/university-application-advisory/'],['碩士申請','/zh/services/masters-country-planning/'],['博士申請','/zh/services/phd-application-coaching/'],['個人陳述與文書','/zh/services/personal-statement-support/'],['轉學與學分抵免','/insights/credit-alliance/']]],
  ['enrol','錄取後安排','收到錄取後核對回覆期限、簽證、住宿及監護安排。',[
    ['簽證服務','/zh/services/#visa'],['海外生活與家庭服務','/zh/services/#living']]],
];

module.exports=()=>pageShell({
  title:'留學規劃與申請諮詢｜海外督導 OTC',description:'按選校、費用與政府獎學金、申請材料及錄取後安排，查找合適的留學諮詢。',
  path:'/zh/study-planning/',current:'services',lang:'zh-Hant',locale:'zh',
  body:`<style>
  .study-steps{max-width:1080px;margin:auto;padding:20px 24px 44px;line-height:1.65}.study-steps section{margin:16px 0;padding:12px 0 16px;border-top:2px solid #263e4f;scroll-margin-top:110px}
  .study-steps h2{margin:0;font-size:20px}.study-steps p{margin:6px 0 8px}.study-links{display:flex;flex-wrap:wrap;gap:8px 20px}.study-links a{font-weight:650}
  </style>
  <section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div>
  <div class="eyebrow">海外督導雙語世界 · 招生部</div><h1>留學規劃與申請諮詢</h1><p class="hero-sub">從選校、估算預算到提交申請，按目前進度查看下一步。</p>
  <div class="actions"><a class="btn btn-primary" href="https://wa.me/447947991572">聯絡招生部</a><a class="btn btn-secondary" href="/zh/government-scholarships/">政府全額獎學金</a></div></div>
  <aside class="service-hero-panel">${steps.map(([id,title],i)=>`<a href="#${id}"><strong>${i+1}. ${title}</strong></a>`).join('')}</aside></div></div></section>
  <main class="study-steps">${steps.map(([id,title,desc,links],i)=>`<section id="${id}"><h2>${i+1}. ${title}</h2><p>${desc}</p><div class="study-links">${links.map(([label,url])=>`<a href="${url}">${label}</a>`).join('')}</div></section>`).join('')}
  <section id="short-study"><h2>短期留學</h2><div class="study-links"><a href="/zh/language-school-alliance/">語言學校</a><a href="/zh/summer-school-alliance/">寒暑校</a><a href="/zh/services/europe-exchange-support/">交換申請</a><a href="/zh/services/#study">全部留學服務</a></div></section></main>`
});
