const { pageShell } = require('../site');

const path = '/zh/services/caribbean-citizenship/';
const contact = 'https://wa.me/447947991572?text=' + encodeURIComponent('你好，我想了解加勒比投資入籍的官方方案與申請協調。申請人數：；目前國籍與居住地：；預算：；主要出行目的：。');

module.exports = function renderCaribbeanCitizenshipService() {
  const body = `
<style>
.cbi-page .cbi-table-wrap{overflow-x:auto;margin:20px 0 8px}
.cbi-page .cbi-table{width:100%;border-collapse:collapse;min-width:640px;font-size:1rem}
.cbi-page .cbi-table th,.cbi-page .cbi-table td{padding:13px 16px;text-align:left;vertical-align:top;border-bottom:1px solid #d8d0c1}
.cbi-page .cbi-table th{background:#edf2f5;color:#16314c}
.cbi-page .cbi-table td:first-child{font-weight:700;color:#16314c}
.cbi-page .cbi-note{background:#f5f0e7;border-left:4px solid #b7892c;padding:16px 20px;margin:22px 0}
.cbi-page .service-herald-main p,.cbi-page .service-herald-main li{font-size:1rem;line-height:1.75}
.cbi-page .service-herald-main ul,.cbi-page .service-herald-main ol{padding-left:1.5em}
.cbi-page .service-herald-main a{overflow-wrap:anywhere}
@media(max-width:700px){.cbi-page .cbi-table th,.cbi-page .cbi-table td{padding:11px 12px}}
</style>
<section class="page-hero services-hero"><div class="band"><div class="service-hero-layout"><div>
<div class="eyebrow">OTC · 加勒比投資入籍</div><h1>第二護照</h1><h2>安提瓜和巴布達 · 多米尼克 · 格林納達</h2>
<p class="hero-sub">比較三國官方投資入籍方案、總費用與出行規則。先了解資格和預算，再由當地授權代理辦理正式申請。</p>
<a class="button" href="${contact}">WhatsApp 諮詢</a>
</div><aside class="service-hero-panel"><a href="#fees"><strong>官方門檻</strong><span>三國最低合資格投入</span></a><a href="#travel"><strong>出行規則</strong><span>中國、申根、澳洲與北美</span></a><a href="#process"><strong>申請流程</strong><span>審查與授權代理</span></a><a href="#scope"><strong>OTC 服務</strong><span>資料、費用與聯絡</span></a></aside></div></div></section>
<section class="band service-review-strip"><a href="#fees"><b>USD</b><strong>費用比較</strong><span>20 萬美元起，另有費用</span></a><a href="#travel"><b>VISA</b><strong>出行條件</strong><span>按目的地逐項確認</span></a><a href="#process"><b>AGENT</b><strong>正式申請</strong><span>透過當地授權代理</span></a><a href="#contact"><b>ASK</b><strong>了解服務</strong><span>先說明人數與用途</span></a></section>
<section class="band service-review-body cbi-page"><div class="service-herald-grid"><main class="service-herald-main" style="min-width:0">
<section id="fees"><h2 class="zh-herald-section-head" data-num="01">費用</h2>
<p>以下為截至 <strong>2026 年 10 月 1 日</strong>可從三國官方機構核對的最低合資格投入，均以<strong>美元</strong>計，並非完成入籍的總價。申請人數、年齡、盡職調查、政府處理費、授權代理費及其他文件支出會改變總費用。</p>
<div class="cbi-table-wrap"><table class="cbi-table"><thead><tr><th>國家</th><th>官方起點</th><th>常見方案與說明</th></tr></thead><tbody>
<tr><td>多米尼克</td><td>US$200,000 起</td><td>經濟多元化基金不可退還捐款；單人申請起點，另計相關費用。<a href="https://www.cbiu.gov.dm/investment-options/economic-diversification-fund/">官方方案</a></td></tr>
<tr><td>安提瓜和巴布達</td><td>US$230,000 起</td><td>國家發展基金最低捐款額，另計政府處理、盡職調查等費用。<a href="https://cip.gov.ag/investment-options/ndf/">官方方案</a> · <a href="https://cip.gov.ag/schedule-of-fees/">費用表</a></td></tr>
<tr><td>格林納達</td><td>US$235,000 起</td><td>國家轉型基金最低捐款額；家屬情況及附加費另計。<a href="https://imagrenada.gd/becoming-a-citizen/">官方方案與費用</a></td></tr>
</tbody></table></div>
<p class="cbi-note">「20–25 萬美元」只可作三國部分方案的<strong>最低投入區間</strong>，不能承諾包辦總價或保證獲批。房地產方案的金額、持有期和政府費用另行計算。</p></section>
<section id="travel"><h2 class="zh-herald-section-head" data-num="02">出行</h2>
<p><strong>中國：</strong>中國與三國對適用的普通護照有互免簽證協定；短期停留仍須符合各協定和邊檢要求。<a href="https://www.fmprc.gov.cn/wjbzwfwpt/kzx/tzgg/202504/t20250414_11594222.html">中國外交部協定清單</a>。</p>
<p><strong>申根：</strong>歐盟法規將三國列於短期免簽名單，一般以每 180 天內最多 90 天為限；就業、長期居留另有要求。<a href="https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A32018R1806">歐盟法規附件 II</a>。</p>
<p><strong>澳洲、日本與韓國：</strong>不能合稱為「免簽」。澳洲的 ETA 合資格護照名單沒有這三國；日本外務省現行短期免簽名單也沒有這三國。韓國需按當時護照、停留目的和 K-ETA 規則個別查詢。<a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601">澳洲 ETA</a> · <a href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">日本外務省</a> · <a href="https://www.k-eta.go.kr/">韓國 K-ETA</a>。</p>
<p><strong>加拿大：</strong>三國均不能概括為免簽。安提瓜和巴布達護照持有人在符合曾持加拿大訪客簽證或有效美國非移民簽證等條件、且乘飛機入境時，可能申請 eTA；多米尼克、格林納達通常須申請訪客簽證。<a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility/eta-x.html">加拿大官方 eTA 條件</a> · <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html">按國籍查證件</a>。</p>
<p><strong>美國：</strong>三國護照不自動取得免簽資格。美國國務院列三國為 B1/B2 簽證保證金試點適用國，合資格簽證申請人可能被要求繳付 US$5,000、10,000 或 15,000 保證金。格林納達與美國有 E-2 條約，但另有投資、資格與適用法律條件，不能等同取得護照即可入境或工作。<a href="https://travel.state.gov/content/travel/en/News/visas-news/countries-subject-to-visa-bonds.html">美國簽證保證金清單</a> · <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html">E-2 條約國</a>。</p>
</section>
<section id="process"><h2 class="zh-herald-section-head" data-num="03">流程</h2><ol><li>提供申請人數、國籍、現居地、預算及主要出行目的。</li><li>核對三國現行官方方案、家屬規則、費用表和所需文件。</li><li>如適合申請，由相應國家的授權代理說明正式程序、盡職調查與付款安排。</li><li>按官方要求提交真實材料；批准與否由主管機關決定，獲批後再按規定完成投資與領取文件。</li></ol><p>申請資格、資金來源和家庭成員材料均需個案審查。任何人不能保證入籍、護照簽發時間或第三國簽證結果。</p></section>
<section id="scope"><h2 class="zh-herald-section-head" data-num="04">OTC 服務</h2><p>OTC 可整理三國官方資料、初步比較費用與出行需求、建立文件清單及協調與授權代理的溝通。正式投資入籍申請、法律和稅務意見由具有相應資格的專業人士處理；OTC 不聲稱自己是三國政府授權代理。</p><p>資料整理與協調服務的範圍及價格會在開始前書面確認；政府捐款、審查、翻譯、公證、代理及其他第三方費用另計。初次聯絡毋須傳送護照影本或銀行資料。</p><p>資料核對：2026 年 10 月 1 日。政策和費用可變，正式申請及出行前請再查官方網站。</p></section>
</main><aside class="service-guide-side service-herald-side" id="contact"><div class="service-guide-card is-urgent"><span>諮詢資料</span><strong>先說明人數與用途</strong><p>申請人數、目前國籍及居住地、預算、出行目的。先不用傳證件。</p><a href="${contact}">WhatsApp 諮詢</a><a href="mailto:office@overseasuk.com?subject=${encodeURIComponent('加勒比投資入籍資料諮詢')}">Email 諮詢</a></div><div class="service-guide-card"><span>官方機構</span><strong>三國方案</strong><p>先核對官方最低門檻和授權代理名單，再討論個案。</p><a href="https://cip.gov.ag/">安提瓜和巴布達 CIU</a><a href="https://www.cbiu.gov.dm/">多米尼克 CBIU</a><a href="https://imagrenada.gd/">格林納達 IMA</a></div><div class="service-side-links"><a href="/zh/services/">所有服務</a><a href="/zh/services/visa-application-support/">簽證文件支援</a></div></aside></div></section>`;
  return pageShell({
    title: '第二護照｜加勒比投資入籍方案與申請協調｜海外督導 OTC',
    description: '比較安提瓜和巴布達、多米尼克、格林納達投資入籍官方門檻、總費用及出行規則，了解 OTC 資料整理和申請協調服務。',
    path, lang: 'zh-Hant', locale: 'zh', current: 'services', bodyClass: 'cbi-page', body
  });
};
