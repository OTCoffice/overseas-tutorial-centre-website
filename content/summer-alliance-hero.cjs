// Approved service-desk layout; keep the summer hub's content and contact actions.
module.exports = function summerAllianceHero() {
  const whatsapp = 'https://wa.me/447947991572?text=' + encodeURIComponent('你好，我想了解 OTC 暑校聯盟入口中的暑期遊學項目。');
  return `<section class="page-hero services-hero summer-alliance-academic-hero">
  <div class="band"><div class="service-hero-layout">
    <div>
      <div class="eyebrow">SUMMER SCHOOL HUB</div>
      <h1>海外督導｜寒暑校聯盟</h1>
      <h2>UK · Australia · New Zealand · Malaysia · Singapore · Thailand · USA · Canada</h2>
      <p class="hero-sub">為中學生提供全球優質暑期學術項目，探索興趣，提升背景，為未來升學做好準備。</p>
      <div class="actions">
        <a class="btn btn-primary" href="/consultation-chat/?source=summer-school-alliance">立即咨詢</a>
        <a class="btn btn-secondary" href="${whatsapp}">WhatsApp</a>
        <a class="btn btn-secondary" href="mailto:office@overseasuk.com?subject=Summer%20School%20Alliance%20Enquiry">發送需求</a>
      </div>
    </div>
    <aside class="service-hero-panel" aria-label="寒暑校地區">
      <a href="#summer-continent-europe"><strong>歐洲暑校</strong><span>英國、愛爾蘭與歐洲學術文化項目</span></a>
      <a href="#summer-continent-asia"><strong>亞洲暑校</strong><span>新加坡、馬來西亞與泰國項目</span></a>
      <a href="#summer-continent-oceania"><strong>澳紐暑校</strong><span>澳洲與新西蘭校園及語言體驗</span></a>
      <a href="#summer-continent-north-america"><strong>北美暑校</strong><span>美國與加拿大學術探索</span></a>
    </aside>
  </div></div>
</section>
<section class="band service-review-strip" aria-label="寒暑校服務">
  <a href="#summer-continent-europe"><b>GLOBAL</b><strong>全球優質項目</strong><span>精選全球知名院校暑校項目</span></a>
  <a href="/consultation-chat/?source=summer-school-alliance"><b>ACADEMIC</b><strong>學術背景提升</strong><span>提升學術能力與軟實力，助力升學申請</span></a>
  <a href="${whatsapp}"><b>SUPPORT</b><strong>專業顧問服務</strong><span>個性化規劃與全程跟進，讓每一步更有方向</span></a>
  <a href="#summer-continent-asia"><b>SUMMER</b><strong>寒暑校聯盟</strong><span>10+ 國家與地區 · 200+ 優質項目 · 3000+ 學生參與</span></a>
</section>`;
};
