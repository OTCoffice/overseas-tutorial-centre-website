const { pageShell } = require('../site');
const service = require('./tuition-deposit-refund-service.json');

module.exports = () => {
  const image = service.shareImageZh + '?' + service.socialImageVersion;
  const enquiry = '你好，我想諮詢大學學費押金退款協助。\n院校：\n退款原因：\n是否已向校方申請：';
  const whatsapp = 'https://wa.me/447947991572?text=' + encodeURIComponent(enquiry);
  const email = 'mailto:office@overseasuk.com?subject=' + encodeURIComponent('大學學費押金退款諮詢');
  return pageShell({
    title: service.titleZh, current: 'services', lang: 'zh-Hant', locale: 'zh',
    path: service.path, description: service.summaryZh, image, imageWidth: 1200,
    imageHeight: 630, imageAlt: '大學學費押金退款協助',
    body: `<section class="page-hero services-hero"><div class="band">
      <div class="eyebrow">海外督導 OTC · 學生服務</div>
      <h1>大學學費押金退款協助</h1>
      <p class="hero-sub">已繳交大學學費押金，因入學計劃有變而需要申請退款？海外督導 OTC 協助你核對校方要求、準備文件和跟進進度。</p>
      <a class="zh-hero-service-button" href="${whatsapp}">WhatsApp 諮詢</a>
    </div></section>
    <section class="band compact-band service-review-body"><div class="service-herald-grid">
      <div class="service-herald-main" style="min-width:0">
        <figure class="zh-herald-share-cover" style="margin:0 0 24px"><img src="${image}" width="1200" height="630" alt="大學學費押金退款協助" style="display:block;width:100%;height:auto"></figure>
        <h2>服務範圍</h2><p>適合首次申請退款、收到退件或補件通知，以及已提交但需要跟進的學生。可按不同大學的政策和財務部要求處理。</p>
        <h2>辦理流程</h2>
        <ol><li>核對校方退款條款、申請期限和目前進度。</li><li>整理學校收據、付款憑證及校方要求的其他文件，協助填表或準備補件。</li><li>按授權與校方財務部聯絡，跟進書面回覆和下一步。</li></ol>
        <h2>服務費</h2><p>按校方實際退回金額的 <strong>5%</strong> 收取服務費。例如實際退回 £2,000，服務費為 £100。委託前確認服務範圍及付款安排。退款資格、金額及處理時間由院校決定。</p>
      </div>
      <aside class="service-guide-side service-herald-side"><div class="service-guide-card">
        <strong>退款諮詢</strong><p>請先告訴我們院校、退款原因及目前進度。如有校方回覆，可先遮去個人資料。</p>
        <a href="${whatsapp}">WhatsApp 聯絡 OTC</a><a href="${email}">電郵諮詢</a><p>微信：overseasus</p>
      </div></aside>
    </div><a href="/zh/services/">返回服務導覽台 →</a></section>`
  });
};
