const { pageShell } = require('../site');
const service = require('./tuition-deposit-refund-service.json');

const firstContact = [
  ['大學、課程及入學月份', '如已知道退款截止日，請一併注明。'],
  ['已付金額、幣別及付款日期', '請寫明付款方式，以及由你本人、家人或其他人付款。'],
  ['退款原因', '簡單說明發生了甚麼，例如更改入學計劃或未能入學。'],
  ['目前進度', '尚未申請、已提交、被退件或收到補件通知。如有校方回覆，可先遮去個人資料再傳。'],
];

const documents = [
  ['院校及申請資料', '錄取通知書或申請確認信，上面應有課程、入學日期和學號或申請編號。'],
  ['校方收據', '大學發出的學費押金收據或入帳確認，應能辨認金額和幣別。'],
  ['原付款憑證', '銀行轉帳回單、付款平台收據或交易明細。請保留付款日期、金額、交易編號及可見的付款人姓名。'],
  ['校方往來紀錄', '如已申請，請提供提交確認、財務部回覆、退件或補件通知。'],
];

module.exports = () => {
  const image = service.shareImageZh + '?' + service.socialImageVersion;
  const enquiry = ['你好，我想諮詢大學學費押金退款。', ...firstContact.map(([name], index) => (index + 1) + '. ' + name + '：')].join('\n');
  const whatsapp = 'https://wa.me/447947991572?text=' + encodeURIComponent(enquiry);
  const email = 'mailto:office@overseasuk.com?subject=' + encodeURIComponent('大學學費押金退款諮詢') + '&body=' + encodeURIComponent(enquiry);
  const rows = items => items.map(([name, detail]) => `<li><strong>${name}</strong><span>${detail}</span></li>`).join('');

  const page = pageShell({
    title: service.titleZh, current: 'services', lang: 'zh-Hant', locale: 'zh',
    path: service.path, description: service.summaryZh, image, imageWidth: 800,
    imageHeight: 800, imageAlt: '大學學費押金退款協助',
    body: `<style>
      .otc-refund{--refund-ink:#17343c;--refund-muted:#475e63;--refund-line:#d6e1df;--refund-accent:#176050;color:var(--refund-ink);max-width:1080px;margin:0 auto;padding:clamp(16px,4vw,40px) clamp(16px,4vw,36px) 52px;line-height:1.65}
      .otc-refund *{box-sizing:border-box}
      .otc-refund h1,.otc-refund h2{color:var(--refund-ink);margin:0 0 .45em;line-height:1.24}
      .otc-refund h1{font-size:clamp(1.95rem,4.5vw,3.05rem)}
      .otc-refund h2{font-size:clamp(1.25rem,3vw,1.65rem)}
      .otc-refund p{margin:.4em 0 .85em}
      .refund-intro{background:#193740;border:1px solid #193740;border-left:10px solid #a55546;box-shadow:inset 5px 0 #c2a367;border-radius:10px;padding:clamp(20px,4vw,38px)}
      .otc-refund .refund-intro h1,.refund-intro p,.refund-intro a{color:#fffaf0}.refund-intro p{max-width:44em}
      .refund-kicker{font-size:.83rem;font-weight:700;color:#ead5a2;margin-bottom:10px}
      .refund-hero-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(120px,184px);align-items:center;gap:20px}
      .refund-hero-art{margin:0;max-width:184px}.refund-hero-art img{display:block;width:100%;height:auto;border-radius:6px}
      .refund-actions{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 10px}
      .refund-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 15px;border:1px solid #b3a079;border-radius:7px;color:#fffaf0;font-weight:700;text-decoration:none}
      .refund-actions a:first-child{background:var(--refund-accent);color:white}
      .refund-details{font-size:.95rem;overflow-wrap:anywhere}
      .refund-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:20px 0}
      .refund-panel{min-width:0;border:1px solid var(--refund-line);border-radius:12px;padding:clamp(16px,3vw,25px);background:#fff}
      .refund-panel ol,.refund-panel ul{margin:0;padding-inline-start:1.4em}
      .refund-panel li{padding:7px 0 9px;border-bottom:1px solid var(--refund-line)}
      .refund-panel li:last-child{border-bottom:0}
      .refund-panel li strong,.refund-panel li span{display:block}
      .refund-panel li span{color:var(--refund-muted);font-size:.95rem}
      .refund-note{padding:12px 14px;background:#edf5f2;border-radius:8px}
      @media(max-width:720px){.refund-hero-layout{grid-template-columns:minmax(0,1fr)}.refund-hero-art{max-width:150px}.refund-grid{grid-template-columns:minmax(0,1fr);gap:14px}.refund-actions a{flex:1 1 135px}}
    </style>
    <section class="otc-refund">
      <header class="services-hero refund-intro"><div class="refund-hero-layout"><div>
        <div class="refund-kicker">海外督導 OTC · 學生服務</div>
        <h1>大學學費押金退款協助</h1>
        <p>協助準備退款申請、處理退件或補件，並跟進大學財務部。<strong>服務費為實際退款金額的 5%。</strong></p>
        <div class="refund-actions"><a href="${whatsapp}">WhatsApp 諮詢</a><a href="${email}">電郵諮詢</a><a href="#refund-documents">查看資料清單</a></div>
        <p class="refund-details">WhatsApp +44 7947 991572 · 電郵 <a href="${email}">office@overseasuk.com</a> · 微信搜尋 <strong>overseasus</strong></p>
      </div><!-- refund-hero-art --></div></header>
      <div class="refund-grid" id="refund-documents">
        <section class="refund-panel">
          <h2>首次聯絡：先提供 4 項資料</h2>
          <p>用 WhatsApp 或電郵按範本填寫。手頭只有部分資料，也可先聯絡。</p>
          <ol>${rows(firstContact)}</ol>
        </section>
        <section class="refund-panel">
          <h2>正式辦理：準備 3 類基本文件</h2>
          <p>每類先準備一份清楚可讀的文件。如已向校方申請，再加上第 4 類往來紀錄。</p>
          <ol>${rows(documents)}</ol>
        </section>
      </div>
      <section class="refund-panel">
        <h2>校方要求時再補交</h2>
        <ul>
          <li><strong>退款帳戶證明</strong><span>若原付款渠道無法收款，先按校方書面要求確認可接受的帳戶。校方可能要求列明戶名及完整帳號的銀行結單，並核對是否與原付款人同名。</span></li>
          <li><strong>退款原因證明及授權</strong><span>按個案提供校方取消課程或撤回錄取通知、拒簽信或其他證明。如院校要求學生本人提交、從指定郵箱回覆或簽署授權，我們會逐項說明。</span></li>
        </ul>
        <p class="refund-note">首次諮詢不用傳護照、完整銀行帳號或結單。需要補交時，我們會確認用途及提交方式。</p>
      </section>
      <div class="refund-grid">
        <section class="refund-panel"><h2>辦理流程</h2><p>收到資料後，我們先核對校方條款、期限和缺件。確認委託範圍後，協助準備及提交申請或補件，並按授權跟進財務部回覆。</p></section>
        <section class="refund-panel"><h2>服務費</h2><p>按校方實際退回金額的 <strong>5%</strong> 收取。例如實際退回 £2,000，服務費為 £100。退款資格、金額及處理時間由院校決定。</p></section>
      </div>
      <a href="/zh/services/">返回服務導覽台 →</a>
    </section>`
  });
  return page.replace('<!-- refund-hero-art -->', `<figure class="refund-hero-art"><img src="${image}" width="800" height="800" alt="大學學費押金退款協助，服務費為實際退款金額的 5%"></figure>`);
};
