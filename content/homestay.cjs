const {pageShell}=require('../site');
const data=require('./homestay.json');
const regions=[
 ['europe','歐洲',[
  ['uk','英國','倫敦及英國其他服務城市','已備參考價','可查閱2027年城市及餐食參考價，再按入住日期、年齡和通勤要求詢問。','/zh/services/uk-ireland-homestay/'],
  ['ireland','愛爾蘭','都柏林','已備參考價','都柏林餐食方案及歐元參考週費已列於英愛專頁；實際房源與條件逐案確認。','/zh/services/uk-ireland-homestay/'],
  ['france','法國','巴黎及其他城市','合作洽詢中','已向跨國住宿平台詢問成人及隨行家長方案，城市範圍與預訂渠道待回覆。'],
  ['spain','西班牙','馬德里、巴塞隆納及其他城市','合作洽詢中','可提交語言學習或短期住宿需求；供應商合作、餐食及最低入住天數待確認。']
 ]],
 ['oceania','澳洲與紐西蘭',[
  ['australia','澳洲','悉尼、墨爾本、布里斯本、珀斯','合作洽詢中','正在拓展寄宿家庭供應商；按學校、課程日期及接受年齡確認安排。'],
  ['new-zealand','紐西蘭','奧克蘭及其他城市','合作洽詢中','已詢問代理合作及服務地區；學校要求、餐食及接送安排另行核實。']
 ]],
 ['north-america','北美',[
  ['canada','加拿大','多倫多、溫哥華、維多利亞、渥太華、卡加利、蒙特婁','合作洽詢中','已向加拿大寄宿家庭供應商詢問；接案院校、城市與未成年安排待確認。'],
  ['usa','美國','按就讀城市詢問','合作洽詢中','先收集成人學生與隨行家長住宿需求，供應商覆蓋範圍及代理預訂方式待確認。']
 ]],
 ['asia','亞洲',[
  ['japan','日本','東京、大阪／京都、福岡','合作洽詢中','已向日本寄宿家庭機構詢問語言學習與文化交流住宿，接受年齡及城市範圍待回覆。'],
  ['korea','韓國','首爾及其他城市','合作洽詢中','已向跨國住宿平台詢問；房型、餐食、交通與長住條件按需求核實。']
 ]]
];
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const enquiry=name=>'mailto:office@overseasuk.com?subject='+encodeURIComponent('寄宿家庭詢問｜'+name);
module.exports=function(){
 const body=`<style>
.homestay-directory .directory-body{padding-block:20px 32px}.homestay-directory .directory-intro{max-width:75ch}.homestay-directory .region{scroll-margin-top:110px;margin:24px 0;border-top:3px solid #19394d}.homestay-directory .region h2{font-size:21px;margin:12px 0;color:#19394d}.homestay-directory .country-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 28px}.homestay-directory .country{padding:14px 0;border-top:1px solid #d8d0c2;scroll-margin-top:110px;min-width:0}.homestay-directory .country h3{font-size:17px;margin:0 0 6px}.homestay-directory .country p{font-size:14px;line-height:1.75;margin:6px 0}.homestay-directory .status{display:inline-block;font-size:12px;padding:2px 8px;background:#eee9de;color:#5e4b2c;margin-left:8px;font-weight:400}.homestay-directory .ready{background:#e7f2ee;color:#28574d}.homestay-directory .city{color:#53616b}.homestay-directory .country a{font-weight:600;font-size:13px}.homestay-directory .service-hero-panel a{min-height:64px}.homestay-directory .info{border-top:1px solid #c8b89a;padding:16px 0}.homestay-directory .info h2{font-size:20px}.homestay-directory .info p,.homestay-directory .info li{font-size:14px;line-height:1.8}.homestay-directory .actions{display:flex;gap:10px;flex-wrap:wrap}.homestay-directory .service-review-strip{grid-template-columns:repeat(4,minmax(0,1fr))}.homestay-directory a{overflow-wrap:anywhere}
@media(max-width:700px){.homestay-directory .country-list{grid-template-columns:1fr}.homestay-directory .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.homestay-directory .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))}.homestay-directory .status{margin-left:6px}}
</style>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外生活與家庭</div><h1>海外寄宿家庭</h1><p class="hero-sub">按國家與地區查閱住宿服務，提出城市、日期及預算，由 OTC 聯絡供應商確認方案。</p><div class="actions"><a class="btn btn-primary" href="${enquiry('國家、城市及入住日期')}">住宿詢問</a><a class="btn btn-secondary" href="/zh/services/categories/living/">海外生活與家庭</a></div></div><nav class="service-hero-panel" aria-label="寄宿家庭地區">${regions.map(([id,name,rows])=>`<a href="#${id}"><strong>${name}</strong><span>${rows.map(r=>r[1]).join(' · ')}</span></a>`).join('')}</nav></div></div></section>
<nav class="band service-review-strip" aria-label="住宿資料"><a href="/zh/services/uk-ireland-homestay/"><b>2027</b><strong>英愛參考價</strong><span>城市與餐食</span></a><a href="#suppliers"><b>HOSTS</b><strong>住宿供應商</strong><span>服務與合作範圍</span></a><a href="#under-18"><b>CARE</b><strong>未成年住宿</strong><span>照顧與監護責任</span></a><a href="#contact"><b>ASK</b><strong>詢問流程</strong><span>需求與費用</span></a></nav>
<main class="band directory-body"><div class="directory-intro"><p>英國及愛爾蘭已有供應商參考價可供查閱。其他國家正在洽詢合作，可先告知需求；下列城市為詢問方向，未經供應商確認前，不代表當地已有可安排房源。</p><p>資料更新：2026年11月14日</p></div>
${regions.map(([id,name,rows])=>`<section class="region" id="${id}"><h2>${name}</h2><div class="country-list">${rows.map(([key,label,cities,status,desc,url])=>`<article class="country" id="${key}"><h3>${label}<span class="status ${url?'ready':''}">${status}</span></h3><p class="city">${esc(cities)}</p><p>${desc}</p><a href="${url||enquiry(label)}">${url?'查看服務與參考價':'詢問'+label+'住宿'} →</a></article>`).join('')}</div></section>`).join('')}
<section class="info" id="suppliers"><h2>房管與住宿供應商</h2><p><strong>Hosts International｜英國及愛爾蘭：</strong>OTC 已取得2027年參考價目資料，協助整理需求及聯絡詢價。房源、入住條件及正式費用由供應商確認；代理商務條款仍在確認中。</p><p>澳紐、加拿大、日本及其他地區的供應商合作正在拓展。待服務範圍及合作安排確認後，再更新公開資訊。</p><p>住宿機構、房管公司及房東可透過 <a href="mailto:office@overseasuk.com?subject=OTC%20Accommodation%20Supplier%20Enquiry">供應商合作電郵</a> 提供服務地區、住宿類型及聯絡資料。</p><h3>房源資料庫</h3><p>OTC 團隊在後台持續整理及更新房源資料庫，記錄供應商、地區、房型、餐食、參考費用及入住條件。官網展示核實後的服務摘要；當期空房、價格及可入住日期，會在收到需求後向供應商再次確認。</p></section>
<section class="info" id="under-18"><h2>未成年住宿</h2><p>寄宿家庭的住宿、餐食及日常照顧，不等於教育監護或法定監護。未成年學生須先確認學校要求、可接受年齡、家長同意、照顧責任及緊急聯絡安排；需要另行委任監護人的，應另訂服務及責任範圍。</p><p>成人住宿平台的房源不會直接視作適合未成年學生。香港需求可另閱 <a href="/zh/services/hong-kong-minor-guardianship-homestay/">香港低齡住宿與監護</a>。</p></section>
<section class="info" id="contact"><h2>詢問與費用</h2><ol><li>告知國家、城市或學校、入住日期、住宿週數、入住人數與年齡。</li><li>補充預算、房型、餐食、通勤及其他必要安排。</li><li>OTC 查詢資料並向供應商確認，再提供可行方案與費用說明。</li><li>確認正式條款及付款安排後，由供應商依其流程安排住宿。</li></ol><p>住宿費、預訂費、附加費、接送及另行委任的監護費依正式報價支付；如需 OTC 收費諮詢或額外協調服務，會在開始前說明範圍與費用。</p><div class="actions"><a class="btn btn-primary" href="https://wa.me/447947991572?text=${encodeURIComponent('我想詢問寄宿家庭：國家／城市、日期、年齡、預算：')}">WhatsApp 詢問</a><a class="btn btn-secondary" href="${enquiry('國家、城市及入住日期')}">電郵詢問</a></div></section></main>`;
 return pageShell({title:data.titleZh,description:data.summaryZh,path:data.path,lang:'zh-Hant',locale:'zh',current:'services',bodyClass:'homestay-directory',image:data.shareImageZh+'?v='+data.socialImageVersion,imageWidth:1200,imageHeight:600,imageAlt:'海外寄宿家庭：歐洲、澳紐、北美與亞洲住宿詢問',body});
};
