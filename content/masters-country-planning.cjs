const render = require('./professional-service-page.cjs');
const data = require('./masters-country-planning.json');

const guidance = `
<section><h2>國別比較</h2>
<h3>英國・香港・澳洲</h3>
<ul>
<li><strong>英國</strong>　可從全日制一年授課型碩士開始比較，核對課程模組、論文或專案、入學要求和全程費用。跨專業可搜尋 conversion course。<a href="/zh/services/university-application-advisory/">英國大學申請諮詢</a></li>
<li><strong>香港</strong>　可比較一年制授課型碩士，逐項確認授課語言、本科背景要求、申請輪次和住宿預算。<a href="/zh/countries/hong-kong/">香港留學</a></li>
<li><strong>澳洲</strong>　比較課程的全程學制、學分減免及實習安排。部分課程為跨專業申請者設有包含基礎科目的較長路徑。<a href="/australia/">澳洲升學</a></li>
</ul>
<h3>加拿大・紐西蘭・愛爾蘭</h3>
<p>加拿大先核對院校與課程是否符合畢業後工簽要求；紐西蘭比較學位類別、學制和就讀地點；愛爾蘭可從一年制授課碩士入手，將住宿納入總預算。<a href="${data.related}">三國碩士比較詳解</a></p>
</section>
<section><h2>跨專業申請</h2>
<p>英國可按目標學科搜尋 conversion course。香港部分傳理等授課型課程可從學士學位及語言要求入手，逐項核對本科背景條件。澳洲的例子是 Monash 資訊科技碩士，兩年制入學路徑可接受非 IT 本科，較短路徑有相關背景及修課要求。<a href="https://ar.hkbu.edu.hk/tpg-admissions/programmes/master-of-arts-ma-in-communication">香港浸會大學傳理學碩士</a> · <a href="https://www.monash.edu/study/courses/find-a-course/information-technology-c6001">Monash 資訊科技碩士</a></p>
<ul>
<li><strong>Any discipline</strong>　本科專業不限，仍須核對成績、語言及指定先修科目。</li>
<li><strong>Relevant background preferred</strong>　相關背景優先。可用修課、專案或工作經驗說明準備程度。</li>
<li><strong>Relevant degree required</strong>　相關學位是入學要求。若課程接受等同資格，先向院系確認可用哪些材料證明。</li>
</ul>
<p>醫學轉醫工可先按成績單核對數學、物理、程式和工程先修要求，再比較醫療科技、生醫工程或健康資料相關課程。可用醫學訓練和研究經驗說明跨領域動機，並逐項確認是否符合先修條件。</p>
</section>
<section><h2>讀研還是先工作</h2>
<ol>
<li><strong>職位要求</strong>　找幾則目標職缺，標記碩士是必須、優先，還是可用相關經驗替代。</li>
<li><strong>一年成本與經驗</strong>　列出一年碩士的學費、生活費及放棄的收入，再與先工作一年可獲得的收入、技能和經驗比較。若課程超過一年，另算全程預算。</li>
<li><strong>畢業後工作</strong>　如計劃留在當地，在選課前查核所選院校與課程是否符合官方資格，並按預計畢業時間再核對。<a href="https://www.gov.uk/graduate-visa">英國 Graduate visa</a> · <a href="https://www.immd.gov.hk/eng/services/visas/IANG.html">香港 IANG</a> · <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work">澳洲 485</a></li>
</ol>
</section>`;

module.exports = () => render({
  ...data,
  guidance,
  thirdPartyCosts: '院校申請費、學費、住宿、考試、簽證與第三方認證翻譯費另計，由相應機構收取。',
  outcomes: '材料由本人提供並確認。錄取、簽證與工作結果由院校、相關機構或僱主決定。',
});
