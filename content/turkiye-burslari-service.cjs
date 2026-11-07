const { pageShell } = require('../site');
const service = require('./turkiye-burslari-service.json');

module.exports = () => {
  const image = service.shareImageZh + '?' + service.socialImageVersion;
  return pageShell({
    title: service.titleZh, description: service.summaryZh, path: service.path,
    lang: 'zh-Hant', locale: 'zh', current: 'services',
    image, imageWidth: service.socialImageWidth, imageHeight: service.socialImageHeight,
    imageAlt: '土耳其政府獎學金 Türkiye Bursları',
    body: `  <style>.consolidated-page{max-width:1080px;margin:auto;padding:28px 24px 50px;line-height:1.9;overflow-wrap:anywhere}.consolidated-page h2{font-size:25px;border-top:3px solid #263e4f;padding-top:22px;margin-top:34px}.scholarship-note{padding:16px;background:#eef2f2;border-left:3px solid #b7892c}.scholarship-table{overflow-x:auto;margin:18px 0}.scholarship-table table{width:100%;border-collapse:collapse;min-width:560px;font-size:15px}.scholarship-table th,.scholarship-table td{padding:14px;text-align:left;vertical-align:top;border-bottom:1px solid #d8d9d2}.scholarship-table thead{background:#eaece7}.scholarship-table caption{text-align:left;font-weight:bold;padding:8px 0}.consolidated-page li{margin-bottom:10px}@media(max-width:680px){.consolidated-page{padding:22px 16px}.scholarship-table th,.scholarship-table td{padding:10px}}.burslari-cover{display:block;width:min(100%,220px);height:auto;margin:0 0 18px;border-radius:6px}</style><section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div><div class="eyebrow">OTC · 海外督導</div><h1>土耳其政府獎學金</h1><h2>Türkiye Bursları 申請支援</h2><p class="hero-sub">按目標學位核對資格、授課語言與資助，準備官方申請材料。</p><div class="actions"><a class="btn btn-primary" href="https://wa.me/447947991572">立即諮詢</a><a class="btn btn-secondary" href="/zh/site-directory/">全站目錄</a></div><p>海外督導 OTC｜海圖規劃・留學諮詢</p></div><aside class="service-hero-panel"><a href="#eligibility"><strong>基本資格</strong><span>查看相關內容</span></a><a href="#funding"><strong>資助與語言</strong><span>查看相關內容</span></a><a href="#apply"><strong>材料與流程</strong><span>查看相關內容</span></a><a href="#support"><strong>OTC 申請支援</strong><span>查看相關內容</span></a></aside></div></div></section><main class="consolidated-page">
  <img class="burslari-cover" src="${image}" width="800" height="800" alt="土耳其政府獎學金 Türkiye Bursları">
  <p>打算到土耳其攻讀學位？先核對申請資格、授課語言和資助範圍，再按目標課程準備材料。Türkiye Bursları 是土耳其政府資助、由官方競爭遴選的獎學金。</p>
  <p class="scholarship-note"><strong>申請時間｜2026 年 11 月 7 日核對</strong><br>2026 年一般學位申請已於 2 月 20 日截止。官方常規日曆列出 1 月 10 日至 2 月 20 日的申請窗口。準備 2027 年申請時，請以該年度正式公告及申請系統為準。研究、在讀及聯合獎學金另查各自公告。</p>
  <nav aria-label="本頁內容"><a href="#eligibility">基本資格</a> · <a href="#funding">資助與語言</a> · <a href="#apply">材料與流程</a> · <a href="#support">OTC 申請支援</a> · <a href="#sources">官方資料</a></nav>
  <h2 id="eligibility">基本資格</h2>
  <div class="scholarship-table"><table>
    <caption>官方公布的一般學位申請門檻</caption>
    <thead><tr><th scope="col">申請層級</th><th scope="col">最低學業成績</th><th scope="col">年齡條件</th></tr></thead>
    <tbody>
      <tr><th scope="row">副學士及學士</th><td>70%</td><td>未滿 21 歲</td></tr>
      <tr><th scope="row">碩士</th><td>75%</td><td>未滿 30 歲</td></tr>
      <tr><th scope="row">博士</th><td>75%</td><td>未滿 35 歲</td></tr>
    </tbody>
  </table></div>
  <p>醫學、牙醫及藥學的官方成績門檻為 90%。實際可選科系以當期系統為準。資格審查通過後，官方還會評估學業背景、志願的一致性和申請動機。</p>
  <p>一般接受已畢業或將在該學年 8 月前畢業的國際申請人。土耳其公民、曾喪失土耳其國籍者，以及已在土耳其大學就讀同一學位層級者，不符合一般申請資格。年齡計算和成績認定請查當期公告與系統要求。</p>
  <h2 id="funding">資助範圍與授課語言</h2>
  <p>全日制學位獎學金涵蓋大學及課程安置、學費、住宿安排、醫療保險、每月津貼、土耳其語課程及機票支援。資助金額與期限以適用方案和獲獎通知為準。</p>
  <p>例如，申請英授碩士時，先在系統確認課程的授課語言及接受的語言證明。即使獲分配至英授課程，未持土耳其語 C1 證書的得獎者仍須修讀一年土耳其語並取得 C1。</p>
  <h2 id="apply">申請材料與流程</h2>
  <ol>
    <li><strong>核對資格與志願。</strong>按學位、專業和授課語言篩選當期可選課程，再查看各課程的語言與考試要求。</li>
    <li><strong>整理基本材料。</strong>準備有效身分證明或護照、近一年照片、學歷或臨時畢業證明、成績單，以及適用的國家考試成績。按課程要求補交語言或入學考試成績。博士申請另備研究提案和既有研究寫作樣本。</li>
    <li><strong>透過 TBBS 提交。</strong>申請人可在官方系統免費自行提交。提交後留意官方通知及適用的面試或測試安排。</li>
  </ol>
  <h2 id="support">海外督導雙語世界 · 招生部</h2>
  <p>初次諮詢可先提供目標學位、專業及預計畢業年月。招生部可先與你釐清要核對的資格、志願和材料，再按個案書面確認可承接的範圍及費用。翻譯、公證、語言考試及簽證等第三方費用另計。獎學金及院校安置由官方審核決定。</p>
  <p><a href="https://wa.me/447947991572">WhatsApp 諮詢招生部</a> · <a href="mailto:office@overseasuk.com?subject=T%C3%BCrkiye%20Burslar%C4%B1">電郵諮詢</a> · 微信 overseasus</p>
  <h2 id="sources">官方資料</h2>
  <ul>
    <li><a href="https://www.turkiyeburslari.gov.tr/announcements/turkiye-scholarships-2026-applications-121">2026 年申請公告</a> · <a href="https://turkiyeburslari.gov.tr/calendar">常規申請日曆</a></li>
    <li><a href="https://turkiyeburslari.gov.tr/scholarshipsprograms">資格與獎學金類別</a> · <a href="https://turkiyeburslari.gov.tr/fulltimeprograms">全日制方案及資助</a></li>
    <li><a href="https://turkiyeburslari.gov.tr/applysteps">官方材料及申請步驟</a> · <a href="https://www.turkiyeburslari.gov.tr/evaluationandselectionprocess">遴選流程</a> · <a href="https://tbbs.turkiyeburslari.gov.tr/">TBBS 申請系統</a></li>
  </ul>
</main>`
  }).replace('name="twitter:card" content="summary_large_image"', 'name="twitter:card" content="summary"');
};
