const products = [
  {
    title: "Principles and Concepts of Strategy",
    unit: "F/650/1150",
    isbn: "978-1-0666440-3-2",
    desc: "Strategy levels, internal and external analysis, advantage and strategic choice.",
    url: "https://payhip.com/b/Lj2zl"
  },
  {
    title: "The Management of Human Resources",
    unit: "H/650/1151",
    isbn: "978-1-0666440-2-5",
    desc: "HR planning, recruitment, training, performance and employee relations in bilingual format.",
    url: "https://payhip.com/b/RKy7i"
  },
  {
    title: "Marketing for Managers",
    unit: "J/650/1152",
    isbn: "978-1-0666440-0-1",
    desc: "Bilingual companion for marketing concepts, consumer behaviour, marketing functions and evaluation.",
    url: "https://payhip.com/b/J1oEx"
  },
  {
    title: "Business Law for Managers",
    unit: "K/650/1153",
    isbn: "978-1-0666440-1-8",
    desc: "Contract, employment, governance and business risk explained for management learners.",
    url: "https://payhip.com/b/H9TaZ"
  },
  {
    title: "Management Accounting and Decision Making",
    unit: "L/650/1154",
    isbn: "978-1-0666440-4-9",
    desc: "Costing, budgeting, variance analysis and decision tools for business managers.",
    url: "https://payhip.com/b/WFhxv"
  },
  {
    title: "Business Start-up: Conception to Market",
    unit: "M/650/1155",
    isbn: "978-1-0666440-5-6",
    desc: "From startup requirements and support systems to business planning and market entry.",
    url: "https://payhip.com/b/AB0Jr"
  }
];

const SITE_URL = "https://overseasuk.com";
const BRAND_NAME = "Overseas Tutorial Centre Ltd";
const SHORT_BRAND_NAME = "Overseas Tutorial Centre (OTC)";
const CONTACT_HTML = `${BRAND_NAME}<br>3/F Overseas Education, 207 Regent Street, London W1B 3HH<br>Email: <a href="mailto:office@overseasuk.com">office@overseasuk.com</a><br>WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a><br>WeChat: overseasus<br>Website: <a href="${SITE_URL}">${SITE_URL}</a>`;
const CONTACT_TEXT = `${BRAND_NAME}\n3/F Overseas Education, 207 Regent Street, London W1B 3HH\nEmail: office@overseasuk.com\nWhatsApp: +44 7947 991572\nWeChat: overseasus\nWebsite: ${SITE_URL}`;

function nav(current = "", locale = "en") {
  const isZh = locale === "zh";
  return `
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/">
          <span class="brand-mark"><span></span></span>
          <span>${SHORT_BRAND_NAME}<small>OTC Study Hub · Overseas Publishing</small></span>
        </a>
        <div class="nav-links">
          ${isZh ? `
            <a href="/services/" ${["resources", "services", "applications"].includes(current) ? 'aria-current="page"' : ""}>服務與申請</a>
            <a href="/australia/" ${current === "australia" ? 'aria-current="page"' : ""}>澳洲路線</a>
            <a href="/courses/" ${current === "courses" ? 'aria-current="page"' : ""}>課程</a>
            <a href="/publishing/" ${["apps", "publishing"].includes(current) ? 'aria-current="page"' : ""}>出版</a>
            <a href="/zh/insights/" ${current === "insights" ? 'aria-current="page"' : ""}>導報</a>
            <a href="/about/" ${current === "about" ? 'aria-current="page"' : ""}>關於 OTC</a>
            <a href="/search/" ${current === "search" ? 'aria-current="page"' : ""}>搜索</a>
            <a href="/client-portal/" ${current === "portal" ? 'aria-current="page"' : ""}>客戶端口</a>
            <a href="/zh/" ${current === "zh" ? 'aria-current="page"' : ""}>中文</a>
            <a class="nav-cta" href="/publishing/">出版更新</a>
          ` : `
            <a href="/resources/" ${current === "resources" ? 'aria-current="page"' : ""}>Consulting</a>
            <a href="/services/" ${current === "services" ? 'aria-current="page"' : ""}>Services</a>
            <a href="/university-applications/" ${current === "applications" ? 'aria-current="page"' : ""}>Applications</a>
            <a href="/australia/" ${current === "australia" ? 'aria-current="page"' : ""}>Australia Pathways</a>
            <a href="/courses/" ${current === "courses" ? 'aria-current="page"' : ""}>Courses</a>
            <a href="/apps/" ${current === "apps" ? 'aria-current="page"' : ""}>Tools</a>
            <a href="/publishing/" ${current === "publishing" ? 'aria-current="page"' : ""}>Publishing</a>
            <a href="/insights/" ${current === "insights" ? 'aria-current="page"' : ""}>Review</a>
            <a href="/about/" ${current === "about" ? 'aria-current="page"' : ""}>About OTC</a>
            <a href="/search/" ${current === "search" ? 'aria-current="page"' : ""}>Search</a>
            <a href="/client-portal/" ${current === "portal" ? 'aria-current="page"' : ""}>Portal</a>
            <a href="/zh/" ${current === "zh" ? 'aria-current="page"' : ""}>中文</a>
            <a class="nav-cta" href="/publishing/">Publishing Updates</a>
          `}
        </div>
      </nav>
    </header>
  `;
}

function footer(locale = "en") {
  if (locale === "zh") {
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-col footer-about">
            <strong>OTC Study Hub</strong>
            <p>Overseas Tutorial Centre、Overseas Publishing House 與海外教育服務的數字學習及出版平台。</p>
            <p>教育諮詢 · 課程輔導 · 雙語出版 · 研究項目 · 數字學習工具。</p>
          </div>
          <div class="footer-col">
            <strong>合規提示</strong>
            <p>除非另有明確說明，OTC 出版物與工具均為獨立教育資源。</p>
            <p>對資格、考試或機構的引用僅作語境說明；未經書面許可不代表任何官方背書。</p>
          </div>
          <div class="footer-col">
            <strong>學術誠信</strong>
            <p>資源用於支持理解、詞彙、研究規劃與負責任的學術準備。</p>
            <p>它們僅作公開資訊與學習路線參考，不構成範文、官方 assessment 文件或學習成果證明。</p>
          </div>
          <div class="footer-col footer-contact">
            <strong>聯絡與出版信息</strong>
            <p>${CONTACT_HTML}</p>
          </div>
        </div>
        <div class="footer-legal">
          <span>© 2026 ${BRAND_NAME}. All rights reserved.</span>
          <span>London, United Kingdom · Public Bookshop Editions · Bilingual Digital Learning Resources · Research and Editorial Projects</span>
        </div>
      </footer>
    `;
  }
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col footer-about">
          <strong>OTC Study Hub</strong>
          <p>Digital learning and publishing platform of Overseas Tutorial Centre, Overseas Publishing House and Overseas education services.</p>
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
          <p>Submission-ready answers, official assessment documents and evidence of learner achievement remain outside the resource scope.</p>
        </div>
        <div class="footer-col footer-contact">
          <strong>Contact & Imprint</strong>
          <p>${CONTACT_HTML}</p>
        </div>
      </div>
      <div class="footer-legal">
        <span>© 2026 ${BRAND_NAME}. All rights reserved.</span>
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
        <div class="isbn-line">First-edition single-unit guide · Payhip live</div>
        <div class="product-actions">
          <a href="${p.url}" target="_blank" rel="noopener">Buy on Payhip</a>
        </div>
      </div>
    </article>
  `).join("");
}

function productShelf(limit = products.length) {
  return products.slice(0, limit).map((p) => `
    <a class="shelf-book" href="${p.url}" target="_blank" rel="noopener">
      <span class="shelf-cover">
        <span>OTC</span>
        <strong>${p.title}</strong>
        <em>${p.unit}</em>
      </span>
      <span class="shelf-text">
        <b>${p.unit}</b>
        <strong>${p.title}</strong>
        <small>ISBN ${p.isbn} · Payhip live</small>
      </span>
    </a>
  `).join("");
}

function parentPathFor(canonicalPath) {
  const clean = canonicalPath.replace(/^\/+|\/+$/g, "");
  if (!clean) return "";
  const parts = clean.split("/");
  if (parts.length === 1) return "/";
  return `/${parts.slice(0, -1).join("/")}/`;
}

function pageUtilityBar({ canonicalPath, canonicalUrl, title, locale = "en" }) {
  const parentPath = parentPathFor(canonicalPath);
  const isZh = locale === "zh";
  const shareText = `${title} | OTC Study Hub`;
  const parentLabel = isZh ? (parentPath === "/zh/" ? "返回中文首頁" : "返回上級頁面") : "Back to parent page";
  return `
    <div class="page-utility-bar" data-page-share>
      <div class="page-utility-inner">
        ${parentPath ? `<a class="page-parent-link" href="${parentPath}">${parentLabel}</a>` : `<a class="page-parent-link" href="/">${isZh ? "返回首頁" : "Back to home"}</a>`}
        <div class="page-share-actions" aria-label="${isZh ? "分享本頁" : "Share this page"}">
          <span>${isZh ? "分享" : "Share"}</span>
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(canonicalUrl)}" target="_blank" rel="noopener">X</a>
          <a href="https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + " " + canonicalUrl)}" target="_blank" rel="noopener">Threads</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}" target="_blank" rel="noopener">Facebook</a>
          <a href="https://wa.me/?text=${encodeURIComponent(shareText + " " + canonicalUrl)}" target="_blank" rel="noopener">WhatsApp</a>
          <a href="https://t.me/share/url?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener">Telegram</a>
          <button type="button" data-email-share data-email-subject="${encodeURIComponent(shareText)}" data-email-body="${encodeURIComponent(canonicalUrl)}" data-email-done="${isZh ? "已複製郵件" : "Email copied"}">Email</button>
          <button type="button" data-page-copy-link="${canonicalUrl}">${isZh ? "複製連結" : "Copy link"}</button>
        </div>
      </div>
    </div>
  `;
}

function pageUtilityScript() {
  return `
    <script>
      document.querySelectorAll("[data-page-copy-link]").forEach((button) => {
        button.addEventListener("click", async () => {
          const originalLabel = button.dataset.originalLabel || button.textContent;
          button.dataset.originalLabel = originalLabel;
          const url = button.dataset.pageCopyLink;
          try {
            await navigator.clipboard.writeText(url);
            button.textContent = "Copied";
          } catch (error) {
            const helper = document.createElement("textarea");
            helper.value = url;
            helper.setAttribute("readonly", "");
            helper.style.position = "fixed";
            helper.style.opacity = "0";
            document.body.appendChild(helper);
            helper.select();
            try {
              document.execCommand("copy");
              button.textContent = "Copied";
            } catch (fallbackError) {
              button.textContent = "Copy failed";
            }
            helper.remove();
          }
          window.setTimeout(() => {
            button.textContent = originalLabel;
          }, 1400);
        });
      });
      document.querySelectorAll("[data-email-share]").forEach((button) => {
        if (button.dataset.emailShareBound === "true") return;
        button.dataset.emailShareBound = "true";
        button.addEventListener("click", async () => {
          const originalLabel = button.dataset.originalLabel || button.textContent;
          button.dataset.originalLabel = originalLabel;
          const subject = decodeURIComponent(button.dataset.emailSubject || "");
          const body = decodeURIComponent(button.dataset.emailBody || "");
          const mailto = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
          const draft = "Subject: " + subject + "\\n\\n" + body;
          try {
            await navigator.clipboard.writeText(draft);
            button.textContent = button.dataset.emailDone || "Email copied";
          } catch (error) {
            button.textContent = button.dataset.emailDone || "Email ready";
          }
          window.setTimeout(() => {
            window.location.href = mailto;
          }, 80);
          window.setTimeout(() => {
            button.textContent = originalLabel;
          }, 1800);
        });
      });
    </script>
  `;
}

function pageShell({ title, current = "", body, lang = "en", locale = "en", description = "Overseas Tutorial Centre Ltd (OTC) / 海外督導 Study Hub: UK education consulting, international curriculum tutoring, bilingual study guides, exam preparation apps and Overseas Publishing resources.", path: pagePath = "/", image = "", imageWidth = 1200, imageHeight = 675, imageAlt = "", noindex = false }) {
  const canonicalPath = pagePath === "." ? "/" : pagePath.startsWith("/") ? pagePath : `/${pagePath.replace(/^\/+|\/+$/g, "")}/`;
  const canonicalUrl = new URL(canonicalPath, SITE_URL).toString();
  const socialImageUrl = image ? new URL(image, SITE_URL).toString() : "";
  const socialImageType = image.endsWith(".svg") ? "image/svg+xml" : image.endsWith(".jpg") || image.endsWith(".jpeg") ? "image/jpeg" : "image/png";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: BRAND_NAME,
    legalName: "Overseas Tutorial Centre Ltd",
    alternateName: ["Overseas Tutorial Centre (OTC)", "海外督導", "OTC Study Hub", "Overseas Publishing"],
    description: "Overseas Tutorial Centre Ltd (OTC) / 海外督導 is a UK education consulting, international curriculum tutoring, study app and bilingual publishing provider.",
    url: SITE_URL,
    email: "office@overseasuk.com",
    telephone: "+447947991572",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3/F Overseas Education, 207 Regent Street",
      addressLocality: "London",
      postalCode: "W1B 3HH",
      addressCountry: "GB"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer support",
      email: "office@overseasuk.com",
      telephone: "+447947991572"
    }
  };
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  ${noindex ? '<meta name="robots" content="noindex, nofollow">' : ""}
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${BRAND_NAME}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  ${socialImageUrl ? `<meta property="og:image" content="${socialImageUrl}">
  <meta property="og:image:secure_url" content="${socialImageUrl}">
  <meta property="og:image:type" content="${socialImageType}">
  <meta property="og:image:width" content="${imageWidth}">
  <meta property="og:image:height" content="${imageHeight}">
  <meta property="og:image:alt" content="${imageAlt || title}">` : ""}
  <meta name="twitter:card" content="${socialImageUrl ? "summary_large_image" : "summary"}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  ${socialImageUrl ? `<meta name="twitter:image" content="${socialImageUrl}">
  <meta name="twitter:image:src" content="${socialImageUrl}">
  <meta name="twitter:image:alt" content="${imageAlt || title}">` : ""}
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  <link rel="stylesheet" href="/styles.css?v=vet-tafe-visual-route-20260526">
</head>
<body>
  ${nav(current, locale)}
  ${pageUtilityBar({ canonicalPath, canonicalUrl, title, locale })}
  ${body}
  ${footer(locale)}
  ${pageUtilityScript()}
</body>
</html>`;
}

module.exports = { pageShell, productCards, productShelf, products, SITE_URL, BRAND_NAME, CONTACT_HTML, CONTACT_TEXT };
