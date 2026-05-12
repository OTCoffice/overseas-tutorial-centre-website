const products = [
  {
    title: "Principles and Concepts of Strategy",
    unit: "F/650/1150",
    isbn: "978-1-0666440-3-2",
    desc: "Strategy levels, internal and external analysis, advantage and strategic choice."
  },
  {
    title: "The Management of Human Resources",
    unit: "H/650/1151",
    isbn: "978-1-0666440-2-5",
    desc: "HR planning, recruitment, training, performance and employee relations in bilingual format."
  },
  {
    title: "Marketing for Managers",
    unit: "J/650/1152",
    isbn: "978-1-0666440-0-1",
    desc: "Bilingual companion for marketing concepts, consumer behaviour, marketing functions and evaluation."
  },
  {
    title: "Business Law for Managers",
    unit: "K/650/1153",
    isbn: "978-1-0666440-1-8",
    desc: "Contract, employment, governance and business risk explained for management learners."
  },
  {
    title: "Management Accounting and Decision Making",
    unit: "L/650/1154",
    isbn: "978-1-0666440-4-9",
    desc: "Costing, budgeting, variance analysis and decision tools for business managers."
  },
  {
    title: "Business Start-up: Conception to Market",
    unit: "M/650/1155",
    isbn: "978-1-0666440-5-6",
    desc: "From startup requirements and support systems to business planning and market entry."
  }
];

function nav(current = "") {
  return `
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/">
          <span class="brand-mark"><span></span></span>
          <span>Overseas Tutorial Centre<small>OTC Study Hub · Overseas Publishing</small></span>
        </a>
        <div class="nav-links">
          <a href="/resources/" ${current === "resources" ? 'aria-current="page"' : ""}>Consulting</a>
          <a href="/courses/" ${current === "courses" ? 'aria-current="page"' : ""}>Courses</a>
          <a href="/apps/" ${current === "apps" ? 'aria-current="page"' : ""}>Tutorial & Apps</a>
          <a href="/publishing/" ${current === "publishing" ? 'aria-current="page"' : ""}>Publishing</a>
          <a href="/about/" ${current === "about" ? 'aria-current="page"' : ""}>About OTC</a>
          <a href="/search/" ${current === "search" ? 'aria-current="page"' : ""}>Search</a>
          <button class="nav-translate" type="button" data-translate-page>Translate</button>
          <a class="nav-cta" href="https://payhip.com/OverseasPublishing">Payhip Store</a>
        </div>
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col footer-about">
          <strong>OTC Study Hub</strong>
          <p>Digital learning and publishing platform of Overseas Tutorial Centre, Overseas Publishing House and Overseas Education & Immigration Ltd.</p>
          <p>Education consulting · tutorial support · bilingual publishing · research projects · digital learning tools.</p>
        </div>
        <div class="footer-col">
          <strong>Compliance Note</strong>
          <p>OTC publications and tools are independent educational resources unless expressly stated otherwise.</p>
          <p>References to qualifications, tests or institutions are contextual only; no endorsement is implied without written permission.</p>
        </div>
        <div class="footer-col">
          <strong>Academic Integrity</strong>
          <p>Resources support understanding, vocabulary, research planning and responsible academic preparation.</p>
          <p>They are not model answers, official assessment documents or evidence of learner achievement.</p>
        </div>
        <div class="footer-col footer-contact">
          <strong>Contact & Imprint</strong>
          <p>Overseas Tutorial Centre / Overseas Publishing House<br>3rd Floor, 207 Regent Street, London W1B 3HH, United Kingdom</p>
          <p>Email: <a href="mailto:office@overseasuk.com">office@overseasuk.com</a><br>Website: <a href="https://www.overseasuk.com">www.overseasuk.com</a><br>WeChat: overseasus<br>WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
        </div>
      </div>
      <div class="footer-legal">
        <span>© 2026 Overseas Publishing House / Overseas Tutorial Centre. All rights reserved.</span>
        <span>London, United Kingdom · Public Bookshop Editions · Bilingual Digital Learning Resources · Research and Editorial Projects</span>
      </div>
    </footer>
  `;
}

function productCards(limit = products.length) {
  return products.slice(0, limit).map((p, i) => `
    <article class="product">
      <div class="cover">
        <div>
          <small>OTC Study Guide Series</small>
          <span class="cover-unit">${p.unit} · Public Bookshop Edition</span>
        </div>
        <strong>${p.title}</strong>
        <div class="cover-bottom">
          <span>OTHM Level 5 Diploma in Business Management</span>
          <span>Qualification No. 610/1527/1</span>
          <span>ISBN ${p.isbn}</span>
        </div>
      </div>
      <div class="product-body">
        <div class="meta">${p.unit} · Public Bookshop Edition</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="isbn-line">ISBN ${p.isbn}</div>
      </div>
    </article>
  `).join("");
}

function productShelf(limit = products.length) {
  return products.slice(0, limit).map((p) => `
    <a class="shelf-book" href="/study-guides/">
      <span class="shelf-cover">
        <span>OTC</span>
        <strong>${p.title}</strong>
        <em>${p.unit}</em>
      </span>
      <span class="shelf-text">
        <b>${p.unit}</b>
        <strong>${p.title}</strong>
        <small>ISBN ${p.isbn}</small>
      </span>
    </a>
  `).join("");
}

function pageShell({ title, current = "", body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="Overseas Tutorial Centre (OTC) Study Hub: education consulting, courses, tutorial support, bilingual study guides, exam preparation apps and Overseas Publishing resources.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  ${nav(current)}
  ${body}
  ${footer()}
  <script>
    document.querySelectorAll("[data-translate-page]").forEach((button) => {
      button.addEventListener("click", () => {
        const url = window.location.href;
        window.open("https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url), "_blank", "noopener");
      });
    });
  </script>
</body>
</html>`;
}

module.exports = { pageShell, productCards, productShelf, products };
