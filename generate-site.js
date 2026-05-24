const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { pageShell, productCards, productShelf, products, SITE_URL } = require("./site");

const root = __dirname;

const publishingLines = [
  {
    code: "R",
    title: "Academic & Research Publishing",
    desc: "Research monographs, digital humanities projects, working papers, bibliographies and data-led cultural studies."
  },
  {
    code: "E",
    title: "Education & Study Companions",
    desc: "Bilingual study guides, course companions, workbooks and learner support books connected to OTC teaching."
  },
  {
    code: "P",
    title: "Practical Life & Professional Guides",
    desc: "UK life, career licensing, practical overseas-living guides, business setup and professional transition resources."
  },
  {
    code: "L",
    title: "Literature, Translation & Cultural Heritage",
    desc: "Original writing, classical and modern translation, Sinology, women writers, travel writing and heritage collections."
  },
  {
    code: "D",
    title: "Digital Products & Learning Apps",
    desc: "Password-protected apps, vocabulary trainers, mock tests, downloadable templates, audio packs and interactive study tools."
  },
  {
    code: "S",
    title: "Author Services & Self-Publishing Studio",
    desc: "ISBN planning, editorial workflow, bilingual layout, cover systems, Payhip/KDP packages and author publication support."
  }
];

const publishingPillars = [
  {
    code: "01",
    title: "Publishing",
    zh: "出版",
    desc: "ISBN-backed study companions, practical guides, digital books and public bookshop editions released under Overseas Publishing House."
  },
  {
    code: "02",
    title: "Editorial Translation",
    zh: "編譯",
    desc: "Chinese-English translation, bilingual editing, cultural-context adaptation and publication-level language polishing."
  },
  {
    code: "03",
    title: "Overseas Study Review",
    zh: "留學導報",
    desc: "A public briefing series for study-abroad notes, pathway updates, application explainers and bilingual education commentary."
  }
];

const internationalCurriculumRoutes = [
  {
    code: "AL",
    title: "A-Level / International A-Level",
    zh: "A-Level / 國際 A-Level",
    focus: "Business, Economics, Accounting, Psychology, Sociology, EPQ",
    pain: "Students often know the concept in Chinese but struggle to write analyse, evaluate and discuss answers in precise academic English.",
    support: "Bilingual concept explanation, command-word coaching, essay paragraph frames and case-application practice."
  },
  {
    code: "BT",
    title: "BTEC / Pearson Vocational",
    zh: "BTEC / Pearson 職業課程",
    focus: "Business, IT, Creative Media, Hospitality, Health & Social Care",
    pain: "Learners need help reading assignment briefs, understanding criteria and planning evidence without crossing academic-integrity boundaries.",
    support: "Assignment-brief breakdown, evidence planning, Pass / Merit / Distinction awareness and academic-writing scaffolding."
  },
  {
    code: "IB",
    title: "IBDP",
    zh: "IBDP 國際文憑",
    focus: "Business Management, Economics, TOK, EE, Psychology, English B",
    pain: "TOK, EE and IA requirements feel abstract; students need a way to turn rubrics into research questions, structure and evaluation.",
    support: "Research-question planning, IA / EE structure coaching, case-analysis frames and bilingual rubric interpretation."
  },
  {
    code: "AP",
    title: "AP",
    zh: "AP 美國大學先修課程",
    focus: "Microeconomics, Macroeconomics, Psychology, Statistics, Seminar, Research",
    pain: "Concept-heavy subjects and FRQ / research writing can become an English-output problem rather than only a knowledge problem.",
    support: "Bilingual concept review, FRQ writing practice, evidence-based explanation and academic vocabulary coaching."
  },
  {
    code: "IG",
    title: "GCSE / IGCSE",
    zh: "GCSE / IGCSE",
    focus: "ESL, Business Studies, Economics, Accounting, Sciences",
    pain: "Younger learners are moving from Chinese subject learning into English-medium subjects and need terminology and question-language support.",
    support: "Starter glossaries, key-term explanation, command-word practice and bilingual subject foundations."
  },
  {
    code: "CA",
    title: "OSSD / BC / Australian / US High School",
    zh: "加拿大、澳洲、美高課程",
    focus: "English, Business, Economics, Social Science, EAL, Research Paper",
    pain: "Coursework, projects, presentations and rubric-based assessment require steady academic English output across the school year.",
    support: "Coursework planning, rubric interpretation, presentation English, research-paper structure and study routines."
  },
  {
    code: "FD",
    title: "Foundation / HND / OTHM / NCC / ATHE",
    zh: "預科、HND、OTHM、NCC、ATHE",
    focus: "Business Management, HR, Marketing, Law, Accounting, Study Skills",
    pain: "Older pathway learners face long English assignments and need structured concept support, not answer writing.",
    support: "Assignment planning, bilingual terminology, paragraph development, referencing awareness and progress coaching."
  },
  {
    code: "AR",
    title: "Art, Design, Media and Portfolio Routes",
    zh: "藝術、設計、媒體與作品集課程",
    focus: "Art & Design, Media, Music, Portfolio, Artist Statement",
    pain: "Creative learners need to explain research, process and reflection in convincing academic and portfolio English.",
    support: "Portfolio writing, artist-statement coaching, research-journal structure and creative-research vocabulary."
  }
];

function internationalCurriculumCards(limit = internationalCurriculumRoutes.length) {
  return internationalCurriculumRoutes.slice(0, limit).map((route) => `
    <article>
      <b>${route.code}</b>
      <strong>${route.title}</strong>
      <span>${route.zh}</span>
      <p>${route.focus}</p>
      <em>${route.support}</em>
    </article>
  `).join("");
}

function publishingLineCards() {
  return publishingLines.map((line) => `
    <a href="/publishing/"><b>${line.code}</b><strong>${line.title}</strong><span>${line.desc}</span></a>
  `).join("");
}

function publishingPillarCards() {
  return publishingPillars.map((pillar) => `
    <article><b>${pillar.code}</b><strong>${pillar.zh}</strong><span>${pillar.title}</span><p>${pillar.desc}</p></article>
  `).join("");
}

function zhInternationalCurriculumCards(limit = 4) {
  const translations = {
    AL: ["A-Level / International A-Level", "商科、經濟、會計、心理、社會學、EPQ", "雙語概念講解、command words 訓練、英文段落框架與案例應用。"],
    BT: ["BTEC / Pearson 職業課程", "Business、IT、Creative Media、Hospitality、Health & Social Care", "Assignment brief 拆解、證據規劃、Pass / Merit / Distinction 標準意識與學術寫作腳手架。"],
    IB: ["IBDP 國際文憑", "Business Management、Economics、TOK、EE、Psychology、English B", "研究問題規劃、IA / EE 結構輔導、案例分析框架與雙語 rubric 解讀。"],
    AP: ["AP 美國大學先修課程", "Microeconomics、Macroeconomics、Psychology、Statistics、Seminar、Research", "雙語概念複習、FRQ 寫作練習、證據型解釋與學術詞彙訓練。"]
  };
  return internationalCurriculumRoutes.slice(0, limit).map((route) => {
    const [title, focus, support] = translations[route.code] || [route.zh, route.focus, route.support];
    return `
      <article>
        <b>${route.code}</b>
        <strong>${title}</strong>
        <span>${route.title}</span>
        <p>${focus}</p>
        <em>${support}</em>
      </article>
    `;
  }).join("");
}

function zhPublishingLineCards() {
  const lines = [
    ["R", "學術與研究出版", "研究專著、數字人文項目、working papers、書目資料與數據導向的文化研究。"],
    ["E", "教育與學習伴侶書", "與 OTC 教學相連的雙語教輔、課程伴侶書、workbook 與學習支持書。"],
    ["P", "實用生活與職業指南", "英國生活、職業牌照、海外生活指南、商業設立與職業轉換資源。"],
    ["L", "文學、翻譯與文化遺產", "原創寫作、古典與現代翻譯、漢學、女性寫作、旅行寫作與文化收藏。"],
    ["D", "數字產品與學習 App", "密碼保護 app、詞彙訓練器、mock tests、下載模板、音頻包與互動學習工具。"],
    ["S", "作者服務與自助出版工作室", "ISBN 規劃、編輯流程、雙語排版、封面系統、Payhip / KDP 上架包與出版支持。"]
  ];
  return lines.map(([code, title, desc]) => `
    <a href="/publishing/"><b>${code}</b><strong>${title}</strong><span>${desc}</span></a>
  `).join("");
}

function zhPublishingPillarCards() {
  return publishingPillars.map((pillar) => `
    <article><b>${pillar.code}</b><strong>${pillar.zh}</strong><span>${pillar.title}</span><p>${pillar.desc}</p></article>
  `).join("");
}

function zhProductShelf(limit = products.length) {
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
        <small>ISBN ${p.isbn} · Payhip 已上架</small>
      </span>
    </a>
  `).join("");
}

const approvedQualifications = new Set([
  "OTHM Level 4 Diploma in Business Management",
  "OTHM Level 5 Diploma in Business Management",
  "OTHM Level 7 Diploma in Strategic Management and Leadership",
  "OTHM Level 7 Diploma in Environmental and Sustainability Management"
]);

const academicAreas = [
  {
    title: "Business Management and Leadership",
    source: "business-management-and-leadership",
    items: [
      "OTHM Level 3 Diploma in Business Management",
      "OTHM Level 3 Diploma in Business Studies",
      "OTHM Level 4 Diploma in Business Management",
      "OTHM Level 5 Diploma in Business Management",
      "OTHM Level 5 Extended Diploma in Business Management",
      "OTHM Level 6 Diploma in Business Management",
      "OTHM Level 7 Certificate in Research Methods",
      "OTHM Level 7 Diploma in Business and Organisational Psychology",
      "OTHM Level 7 Diploma in Strategic Coaching and Mentoring",
      "OTHM Level 7 Diploma in Strategic Management and Leadership",
      "OTHM Level 8 Diploma in Strategic Management and Leadership Practice"
    ]
  },
  {
    title: "Accounting, Finance, HRM and Law",
    source: "accounting-and-finance / human-resource-management / law",
    items: [
      "OTHM Level 3 Foundation Diploma in Accountancy",
      "OTHM Level 3 Foundation Diploma in Employability and Workplace Skills",
      "OTHM Level 3 Foundation Diploma in People and Organisations",
      "OTHM Level 3 Diploma in Law",
      "OTHM Level 4 Diploma in Accounting and Business",
      "OTHM Level 4 Diploma in Law",
      "OTHM Level 5 Diploma in Accounting and Business",
      "OTHM Level 5 Diploma in Law",
      "OTHM Level 5 Extended Diploma in Accounting and Business",
      "OTHM Level 5 Extended Diploma in Law",
      "OTHM Level 6 Diploma in Accounting and Business",
      "OTHM Level 7 Diploma in Accounting and Finance",
      "OTHM Level 7 Diploma in Human Resource Management",
      "OTHM Level 7 Diploma in International Business Law"
    ]
  },
  {
    title: "Education, Teaching and Child Development",
    source: "education-management-and-leadership / teaching-and-learning / child-development-and-well-being",
    items: [
      "OTHM Level 3 Award in Assessing Vocationally Related Achievement",
      "OTHM Level 3 Foundation Diploma for Higher Education Studies",
      "OTHM Level 4 Award in Internal Quality Assurance of Assessment Processes and Practice",
      "OTHM Level 4 Award in Principles and Practice of Lip-reading Teaching",
      "OTHM Level 4 Certificate in Coaching and Mentoring to Build Relationships",
      "OTHM Level 4 Certificate in Equality, Diversity and Inclusion",
      "OTHM Level 4 Certificate in Leading the Internal Quality Assurance of Assessment Processes and Practice",
      "OTHM Level 4 Certificate in Learning, Development and Pedagogy",
      "OTHM Level 4 Diploma in Early Childhood Education",
      "OTHM Level 4 Diploma in Education and Training Management",
      "OTHM Level 5 Certificate in Teaching Learners with Special Educational Needs and Disabilities",
      "OTHM Level 5 Diploma in Early Childhood Education",
      "OTHM Level 5 Diploma in Education and Training",
      "OTHM Level 5 Diploma in Education and Trainings Management",
      "OTHM Level 5 Extended Diploma in Early Childhood Education",
      "OTHM Level 5 Extended Diploma in Education and Training Management",
      "OTHM Level 6 Diploma in Teaching and Learning",
      "OTHM Level 7 Diploma in Education Management and Leadership"
    ]
  },
  {
    title: "IT, AI and Cyber Security",
    source: "information-technology / artificial-intelligence / cyber-security",
    items: [
      "OTHM Level 3 Certificate in Python",
      "OTHM Level 3 Foundation Diploma in Information Technology",
      "OTHM Level 4 Diploma in Cyber Security",
      "OTHM Level 4 Diploma in Information Technology",
      "OTHM Level 5 Diploma in Cyber Security",
      "OTHM Level 5 Diploma in Information Technology",
      "OTHM Level 5 Extended Diploma in Cyber Security",
      "OTHM Level 5 Extended Diploma in Information Technology",
      "OTHM Level 6 Certificate in Python",
      "OTHM Level 6 Diploma in Information Technology",
      "OTHM Level 7 Diploma in Artificial Intelligence",
      "OTHM Level 7 Diploma in Data Science",
      "OTHM Level 7 Diploma in Immersive Software Engineering",
      "OTHM Level 7 Diploma in Strategic Marketing"
    ]
  },
  {
    title: "Logistics, Project, Risk and Public Administration",
    source: "logistics / project-management / risk-management / public-administration",
    items: [
      "OTHM Level 4 Certificate in Inventory Management",
      "OTHM Level 4 Diploma in Airline, Airport and Aviation Management",
      "OTHM Level 4 Diploma in Logistics and Supply Chain Management",
      "OTHM Level 4 Diploma in Project Management",
      "OTHM Level 5 Diploma in Airline, Airport and Aviation Management",
      "OTHM Level 5 Diploma in Logistics and Supply Chain Management",
      "OTHM Level 5 Diploma in Project Management",
      "OTHM Level 5 Extended Diploma in Airline, Airport and Aviation Management",
      "OTHM Level 5 Extended Diploma in Logistics and Supply Chain Management",
      "OTHM Level 5 Extended Diploma in Project Management",
      "OTHM Level 6 Diploma in Logistics and Supply Chain Management",
      "OTHM Level 7 Diploma in Logistics and Supply Chain Management",
      "OTHM Level 7 Diploma in Project Management",
      "OTHM Level 7 Diploma in Public Administration",
      "OTHM Level 7 Diploma in Risk Management"
    ]
  },
  {
    title: "Health, Social Care, Tourism and Specialist Sectors",
    source: "health-and-social-care / tourism-and-hospitality-management / occupational-health-and-safety / psychology / environment-and-sustainability / engineering / fashion",
    items: [
      "OTHM Level 3 Diploma in Adult Health and Social Care",
      "OTHM Level 3 Diploma in Fashion and Textiles",
      "OTHM Level 3 Foundation Diploma in Engineering",
      "OTHM Level 3 Foundation Diploma in Health and Social Care",
      "OTHM Level 3 Technical Certificate in Occupational Health and Safety",
      "OTHM Level 4 Diploma in Health and Social Care Management",
      "OTHM Level 4 Diploma in Psychology",
      "OTHM Level 4 Diploma in Tourism and Hospitality Management",
      "OTHM Level 5 Certificate in Occupational Health and Safety",
      "OTHM Level 5 Diploma in Health and Social Care Management",
      "OTHM Level 5 Diploma in Psychology",
      "OTHM Level 5 Diploma in Tourism and Hospitality Management",
      "OTHM Level 5 Extended Diploma in Health and Social Care Management",
      "OTHM Level 5 Extended Diploma in Psychology",
      "OTHM Level 5 Extended Diploma in Tourism and Hospitality Management",
      "OTHM Level 6 Certificate in Occupational Health and Safety",
      "OTHM Level 6 Diploma in Health and Social Care Management",
      "OTHM Level 6 Diploma in Occupational Health and Safety",
      "OTHM Level 6 Diploma in Tourism and Hospitality Management",
      "OTHM Level 7 Diploma in Environmental and Sustainability Management",
      "OTHM Level 7 Diploma in Health and Social Care Management",
      "OTHM Level 7 Diploma in Occupational Health and Safety Management",
      "OTHM Level 7 Diploma in Tourism and Hospitality Management"
    ]
  }
];

function levelOf(title) {
  const match = title.match(/Level\s+(\d)/);
  return match ? `Level ${match[1]}` : "Other";
}

function qualificationSlug(title) {
  return title
    .toLowerCase()
    .replace(/^othm\s+/, "othm-")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function enquiryCode(title) {
  const level = (title.match(/Level\s+(\d)/) || [null, "X"])[1];
  const words = title
    .replace(/^OTHM Level \d+\s+/, "")
    .replace(/\b(in|and|of|the|to|for|with)\b/gi, "")
    .match(/[A-Za-z0-9]+/g) || [];
  return `OTC-OTHM-L${level}-${words.slice(0, 5).map((word) => word.toUpperCase()).join("-")}`;
}

function knownQan(title) {
  const map = {
    "OTHM Level 5 Diploma in Business Management": "610/1527/1"
  };
  return map[title] || "Confirm from current official OTHM specification";
}

function progressionIndication(title) {
  const specific = [
    {
      test: /Business Management/,
      text: "OTHM University Progressions lists business-management top-up routes for Level 4&5 / Level 5 Extended Diploma holders, including BA (Hons) Business Management top-up pathways. Level 5 Diploma learners should confirm final-year/top-up eligibility with the receiving university."
    },
    {
      test: /Strategic Management and Leadership$/,
      text: "OTHM University Progressions lists MBA / Master of Business Administration top-up routes for the Level 7 Diploma in Strategic Management and Leadership, subject to university admissions decisions."
    },
    {
      test: /Accounting and Finance/,
      text: "OTHM University Progressions lists MSc Accounting and Finance top-up routes for the Level 7 Diploma in Accounting and Finance, subject to receiving-university requirements."
    },
    {
      test: /Project Management/,
      text: "OTHM University Progressions lists project-management top-up/progression routes including BSc or MSc Project Management examples, depending on level and university."
    },
    {
      test: /Tourism and Hospitality Management/,
      text: "OTHM University Progressions lists tourism / business-management top-up routes for Level 4&5 / Level 5 Extended Diploma in Tourism and Hospitality Management holders."
    },
    {
      test: /Information Technology|Data Science|Immersive Software Engineering|Cyber Security|Artificial Intelligence/,
      text: "OTHM University Progressions lists computing-related top-up/progression examples for IT routes. Specific eligibility depends on level, credits and the receiving university."
    },
    {
      test: /Law/,
      text: "OTHM University Progressions includes law-related progression examples such as LLB / law-linked routes for some OTHM Law qualifications, subject to the receiving institution."
    },
    {
      test: /Psychology|Organisational Psychology/,
      text: "OTHM University Progressions lists psychology-related progression examples for some Level 4/5 Psychology routes. Eligibility depends on level, credits and university entry rules."
    },
    {
      test: /Health and Social Care/,
      text: "OTHM University Progressions lists health and social care top-up examples for Level 4&5 / Level 5 Extended Diploma routes, subject to university admissions requirements."
    },
    {
      test: /Early Childhood Education|Childhood/,
      text: "OTHM University Progressions lists childhood and education studies top-up examples for Level 4&5 / Level 5 Extended Diploma in Early Childhood Education."
    }
  ];
  const found = specific.find((item) => item.test.test(title));
  if (found) return found.text;

  const level = levelOf(title);
  const generic = {
    "Level 3": "General indication: Level 3 qualifications may support progression towards Level 4 study, foundation / undergraduate-entry routes or further subject-specific preparation, subject to the receiving institution.",
    "Level 4": "General indication: Level 4 qualifications may support progression towards Level 5 study or, where accepted, entry into later stages of undergraduate study, subject to credit recognition and receiving-institution rules.",
    "Level 5": "General indication: Level 5 qualifications may support progression towards Level 6 / final-year or top-up degree routes where accepted by a receiving university.",
    "Level 6": "General indication: Level 6 qualifications may support progression towards postgraduate study or professional advancement, subject to university and course-specific requirements.",
    "Level 7": "General indication: Level 7 diplomas may support progression towards Master's top-up, MBA top-up, dissertation-stage completion or related postgraduate routes where confirmed by the receiving institution.",
    "Level 8": "General indication: Level 8 qualifications sit at doctoral level on the RQF and may support professional doctorate / doctoral-level discussion, subject to institutional recognition and admissions decisions."
  };
  return generic[level] || "Progression must be checked against the current official OTHM information and receiving-institution requirements.";
}

function academicAreaCards() {
  return academicAreas.map((area) => {
    const groups = area.items.reduce((acc, title) => {
      const level = levelOf(title);
      acc[level] = acc[level] || [];
      acc[level].push(title);
      return acc;
    }, {});
    const levels = Object.keys(groups).sort((a, b) => Number(a.replace("Level ", "")) - Number(b.replace("Level ", "")));
    return `
      <article class="academic-area-card">
        <div class="area-card-head">
          <strong>${area.title}</strong>
          <span>Official OTHM subject pages: ${area.source}</span>
        </div>
        ${levels.map((level) => `
          <div class="level-block">
            <b>${level}</b>
            <ul>
              ${groups[level].map((title) => {
                const approved = approvedQualifications.has(title);
                const slug = qualificationSlug(title);
                const subject = encodeURIComponent(`${title} registration enquiry`);
                return `
                  <li>
                    <details class="qualification-detail">
                      <summary>
                        <span>${title}</span>
                        <em class="${approved ? "status-approved" : "status-tbc"}">${approved ? "Approved / evidence-mapped" : "TBC"}</em>
                      </summary>
                      <div class="qualification-panel">
                        <dl>
                          <div><dt>Level</dt><dd>${level}</dd></div>
                          <div><dt>OTC status</dt><dd>${approved ? "Mapped in OTC evidence / may be considered for delivery subject to current arrangements" : "TBC - not currently shown as open delivery"}</dd></div>
                          <div><dt>Qualification / QAN</dt><dd>${knownQan(title)}</dd></div>
                          <div><dt>OTC enquiry code</dt><dd>${enquiryCode(title)}</dd></div>
                          <div class="progression-row"><dt>Progression indication</dt><dd>${progressionIndication(title)}</dd></div>
                        </dl>
                        <p>Registration and delivery must be confirmed case by case according to current approval status, learner demand, teacher availability, resources, cohort opening and fee arrangements.</p>
                        <div class="qualification-actions">
                          <a href="https://othm.org.uk/qualification/${slug}" target="_blank" rel="noopener">Official OTHM page</a>
                          <a href="https://othm.org.uk/university-progression" target="_blank" rel="noopener">OTHM progression</a>
                          <a href="mailto:office@overseasuk.com?subject=${subject}">Registration enquiry</a>
                        </div>
                      </div>
                    </details>
                  </li>`;
              }).join("")}
            </ul>
          </div>
        `).join("")}
      </article>
    `;
  }).join("");
}

const externalProgrammeRoutes = [
  {
    id: "open-university",
    title: "Open University (OU) Support",
    zh: "Open University 課程輔導",
    desc: "Module reading, TMA planning, academic writing, study rhythm and progression preparation for OU learners.",
    levels: ["Access / Open Entry", "Level 4 / Stage 1", "Level 5 / Stage 2", "Level 6 / Stage 3", "Level 7 / Postgraduate"],
    subjects: [
      ["Business & Management", "Study readiness", "Introductory management modules", "Strategy, HR, marketing, finance", "Final-stage project / capstone support", "MBA / MSc module support"],
      ["Education & Social Science", "Reading transition", "Core concepts and essay planning", "Policy, practice and reflective work", "Independent project planning", "Research and literature review"],
      ["Computing & Digital Skills", "Digital confidence", "Foundational computing concepts", "Applied IT / data tasks", "Project planning and reporting", "Research project structure"],
      ["Academic English", "Vocabulary bridge", "Reading notes and TMA language", "Argument, evidence and paragraphing", "Dissertation style and clarity", "Postgraduate academic tone"]
    ]
  },
  {
    id: "btec-pearson",
    title: "BTEC / Pearson Support",
    zh: "BTEC / Pearson 課程輔導",
    desc: "Assignment criteria, evidence planning, unit structure, report writing and feedback literacy for BTEC / Pearson learners.",
    levels: ["Level 2", "Level 3", "Level 4 / HNC", "Level 5 / HND", "Level 6 / Top-up Prep"],
    subjects: [
      ["Business", "Core business tasks", "Business studies / enterprise", "HNC business units", "HND management, marketing, HR", "Top-up academic transition"],
      ["Health & Social Care", "Care-sector basics", "Care values and evidence", "Management / practice units", "Research and leadership units", "Degree-entry preparation"],
      ["IT & Computing", "Digital applications", "IT systems and project tasks", "Programming / systems units", "Data, security and project units", "Portfolio and progression planning"],
      ["Travel, Hospitality & Public Services", "Vocational foundations", "Sector assignment support", "Operational and management units", "Research / strategy tasks", "Progression statement preparation"]
    ]
  },
  {
    id: "university-modules",
    title: "University Module Support",
    zh: "大學單元輔導",
    desc: "Subject explanation, seminar preparation, essay / report planning, presentation practice and research-project support.",
    levels: ["Foundation / Year 0", "Level 4 / Year 1", "Level 5 / Year 2", "Level 6 / Final Year", "Level 7 / Master's"],
    subjects: [
      ["Business, Management & Marketing", "Foundation concepts", "Introductory module support", "Case-study and report work", "Strategy / dissertation preparation", "MBA / MSc module support"],
      ["Accounting, Finance & Law", "Numeracy and legal basics", "Core accounting / legal concepts", "Applied finance / business law", "Final-year analysis and writing", "Postgraduate report / research support"],
      ["Education, HR & Social Sciences", "Study transition", "Theory and reflective writing", "Practice-linked assignments", "Independent study and literature review", "Research design and dissertation support"],
      ["Engineering, IT & Applied Subjects", "Technical English bridge", "Concept explanation and lab/report planning", "Project documentation", "Final project / portfolio structure", "Research proposal and report support"]
    ]
  },
  {
    id: "foundation-pathway",
    title: "Foundation / Pathway Support",
    zh: "Foundation / Pathway 銜接課程輔導",
    desc: "Academic transition, study routines, subject confidence, English readiness and progression preparation.",
    levels: ["Pre-sessional", "Foundation", "International Year One", "Pre-Master's", "Progression Stage"],
    subjects: [
      ["Business Pathways", "Academic English bridge", "Business foundation subjects", "First-year business transition", "Pre-Master's management preparation", "Top-up / degree-entry readiness"],
      ["Computing & Engineering Pathways", "Technical vocabulary", "Maths / computing readiness", "Applied subject transition", "Project and report preparation", "University-entry documentation"],
      ["Health, Social Care & Education Pathways", "Reading and terminology", "Care / education foundation tasks", "Reflective and evidence-based writing", "Research-readiness support", "Progression and interview preparation"],
      ["General Academic Skills", "Speaking and confidence", "Essay / report foundations", "Seminar and presentation skills", "Literature and source use", "Personal study plan"]
    ]
  }
];

function externalRouteCards() {
  return externalProgrammeRoutes.map((item, index) => `
    <a class="external-route-card" href="/external-programme-support/${item.id}/">
      <b>${String(index + 1).padStart(2, "0")}</b>
      <strong>${item.title}</strong>
      <span>External course support path</span>
      <p>${item.desc}</p>
      <em>Open programme path</em>
    </a>
  `).join("");
}

function translateEntry() {
  return "";
}

function externalProgrammeMatrix(route) {
  return `
    <div class="programme-matrix-wrap">
      <table class="programme-matrix">
        <thead>
          <tr>
            <th>Subject area</th>
            ${route.levels.map((level) => `<th>${level}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${route.subjects.map((row) => `
            <tr>
              <th>${row[0]}</th>
              ${row.slice(1).map((cell) => `<td>${cell}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

const openUniversityCourses = [
  {
    subject: "Business & Management",
    title: "BA (Honours) Business Management",
    code: "Q91",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/business-management/degrees/ba-business-management-q91",
    summary: "Business operations, strategy, marketing, accounting, finance, leadership and management practice.",
    otc: "Module reading, TMA planning, business concepts, case-study analysis, report writing and presentation preparation."
  },
  {
    subject: "Business & Management",
    title: "Diploma of Higher Education in Business Management",
    code: "W51",
    level: "Diploma of Higher Education / 240 credits",
    official: "https://www.open.ac.uk/courses/business-management/diplomas/diploma-in-business-management-w51",
    summary: "Equivalent to the first two-thirds of BA (Honours) Business Management, with staged business and management study.",
    otc: "Stage 1-2 study planning, assignment structure, feedback interpretation and progression preparation."
  },
  {
    subject: "Business & Management",
    title: "Certificate of Higher Education in Business Management",
    code: "T27",
    level: "Certificate of Higher Education / 120 credits",
    official: "https://www.open.ac.uk/courses/business-management/certificates/certificate-of-higher-education-in-business-management-t27",
    summary: "A first higher-education award introducing business, management and related professional skills.",
    otc: "Academic transition, study habits, first assignment planning, business vocabulary and academic writing basics."
  },
  {
    subject: "Business & Management",
    title: "BSc (Honours) Accounting and Finance",
    code: "Q95",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/business-management/degrees/bsc-accounting-finance-q95",
    summary: "Accounting, finance and financial management in business and society.",
    otc: "Accounting concept explanation, calculation practice support, report structure and finance terminology."
  },
  {
    subject: "Computing & IT",
    title: "BSc (Honours) Computing and IT",
    code: "Q62",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/computing-it/degrees/bsc-computing-it-q62",
    summary: "Computing systems, software, databases, networks, problem solving and optional specialist routes.",
    otc: "Technical English, programming-study planning, project documentation, report writing and progression support."
  },
  {
    subject: "Computing & IT",
    title: "Certificate of Higher Education in Computing and IT",
    code: "T12",
    level: "Certificate of Higher Education / 120 credits",
    official: "https://www.open.ac.uk/courses/computing-it/certificates/certificate-in-computing-it-t12",
    summary: "First-stage computing and IT study covering foundations of digital technologies and computing practice.",
    otc: "Study confidence, weekly topic review, technical vocabulary, basic coding support and assignment planning."
  },
  {
    subject: "Computing & IT + Business",
    title: "BSc (Honours) Computing & IT and Business",
    code: "Q67-CITB",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/computing-it/degrees/bsc-computing-it-business-q67-citb",
    summary: "Combined computing and business study for technology, organisations, markets and project contexts.",
    otc: "Business-context IT projects, case analysis, technical report structure and bilingual concept explanation."
  },
  {
    subject: "Education & Childhood",
    title: "BA (Honours) Education Studies (Primary)",
    code: "Q94",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/education/degrees/ba-education-studies-primary-q94",
    summary: "Education studies with a primary-education focus, including learning, practice and educational contexts.",
    otc: "Reading support, reflective writing, theory-practice links, seminar preparation and essay planning."
  },
  {
    subject: "Health & Social Care",
    title: "BA (Honours) Health and Social Care",
    code: "R26",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/nursing-healthcare/degrees/ba-health-social-care-r26",
    summary: "Health and social care policy, theory, practice, ethics, leadership and evidence-based care.",
    otc: "Care-sector terminology, evidence-based writing, reflective discussion, public-health concepts and research planning."
  },
  {
    subject: "Psychology",
    title: "BSc (Honours) Psychology",
    code: "Q07",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/psychology/degrees/bsc-psychology-q07",
    summary: "Psychology degree exploring mind, behaviour, research evidence, development, relationships and mental health.",
    otc: "Research-methods reading, academic vocabulary, essay structure, evidence use and literature-review preparation."
  },
  {
    subject: "Health, Psychology & Counselling",
    title: "BSc (Honours) Psychology with Counselling",
    code: "Q84",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/psychology/degrees/bsc-psychology-counselling-q84",
    summary: "Psychology with counselling-related study for learners interested in behaviour, wellbeing and support contexts.",
    otc: "Concept clarification, reflective discussion, source use, ethics-aware writing and progression planning."
  },
  {
    subject: "Open / Flexible Study",
    title: "BA/BSc (Honours) Open degree",
    code: "QD",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/combined-studies/degrees/open-degree-qd",
    summary: "Flexible OU degree allowing learners to combine modules from different subject areas.",
    otc: "Route planning, subject-combination review, module workload planning and long-term progression mapping."
  },
  {
    subject: "Business & Management",
    title: "BA (Honours) Business Management (Accounting)",
    code: "OU official listing",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "Business management degree pathway with accounting emphasis, listed by OU among honours degree options.",
    otc: "Accounting vocabulary, management-accounting concepts, report planning and assignment feedback review."
  },
  {
    subject: "Business & Management",
    title: "BA (Honours) Business Management (Marketing)",
    code: "OU official listing",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "Business management degree pathway with marketing emphasis, listed by OU among honours degree options.",
    otc: "Marketing concepts, consumer behaviour, campaign analysis, case-study writing and presentation support."
  },
  {
    subject: "Business & Management",
    title: "BA (Honours) Marketing and Business Management",
    code: "OU official listing",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/business-management",
    summary: "Marketing and business-management qualification route within OU's business and management subject area.",
    otc: "Marketing report structure, source use, digital marketing vocabulary and strategy evaluation."
  },
  {
    subject: "Business & Management",
    title: "Business and Economics",
    code: "OU official listing",
    level: "Honours degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Business and Economics at honours degree and diploma level.",
    otc: "Economics concepts, business context explanation, essay planning and data interpretation support."
  },
  {
    subject: "Business & Law",
    title: "Business and Law",
    code: "OU official listing",
    level: "Honours degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Business and Law across higher-education award levels.",
    otc: "Business-law terminology, case reading, legal issue spotting, report and essay planning."
  },
  {
    subject: "Law & Criminology",
    title: "Bachelor of Laws (LLB)",
    code: "OU official listing",
    level: "Undergraduate law degree",
    official: "https://www.open.ac.uk/courses/law",
    summary: "OU law subject area includes law qualifications and related routes such as Law, Law with Languages and graduate-entry law.",
    otc: "Legal reading strategy, statute/case discussion, IRAC-style planning and academic legal writing support."
  },
  {
    subject: "Law & Criminology",
    title: "Criminology and Law",
    code: "OU official listing",
    level: "Honours degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Criminology and Law among honours degree and diploma options.",
    otc: "Criminology theory, legal concepts, policy discussion, source evaluation and essay planning."
  },
  {
    subject: "Law & Criminology",
    title: "Criminology and Psychology",
    code: "OU official listing",
    level: "Honours degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes combined criminology and psychology qualifications.",
    otc: "Theory comparison, research evidence use, critical discussion and literature-review preparation."
  },
  {
    subject: "Computing & IT",
    title: "BSc (Honours) Cyber Security",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Cyber Security at honours degree and diploma level.",
    otc: "Cybersecurity vocabulary, technical report planning, risk discussion and project documentation support."
  },
  {
    subject: "Computing & IT",
    title: "BSc (Honours) Data Science",
    code: "OU official listing",
    level: "Undergraduate degree",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Data Science among honours degree options.",
    otc: "Statistics vocabulary, data-analysis interpretation, report writing and project planning support."
  },
  {
    subject: "Computing & IT",
    title: "Computer Science with Artificial Intelligence",
    code: "OU official listing",
    level: "Honours degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Computer Science with Artificial Intelligence.",
    otc: "AI terminology, programming-study routines, technical reading and project-report support."
  },
  {
    subject: "Computing & IT",
    title: "Computing & IT and Mathematics",
    code: "OU official listing",
    level: "Honours degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Computing & IT combined with Mathematics.",
    otc: "Maths bridge support, computing concepts, problem-solving explanation and assignment planning."
  },
  {
    subject: "Computing & IT",
    title: "Computing & IT and Psychology",
    code: "Q67-CITP / OU listing",
    level: "Undergraduate degree / staged awards",
    official: "https://www.open.ac.uk/courses/psychology/degrees/bsc-computing-it-psychology-q67-citp/",
    summary: "Combined computing and psychology route, with computing modules and psychology study.",
    otc: "Human-computer interaction vocabulary, psychology reading, technical project framing and report support."
  },
  {
    subject: "Education & Childhood",
    title: "BA (Honours) Childhood and Youth Studies",
    code: "Q23",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official health/social-care and undergraduate lists include Childhood and Youth Studies.",
    otc: "Childhood studies terminology, reflective writing, policy discussion and evidence-based essay support."
  },
  {
    subject: "Education & Childhood",
    title: "BA (Honours) Early Childhood",
    code: "OU official listing",
    level: "Undergraduate degree / top-up route also listed",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Early Childhood and Top-up BA (Honours) Early Childhood.",
    otc: "Early-years concepts, reflective practice, placement-linked discussion and academic writing support."
  },
  {
    subject: "Education & Childhood",
    title: "Certificate of Higher Education in Children and Families",
    code: "OU official listing",
    level: "Certificate of Higher Education / 120 credits",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Children and Families at CertHE level.",
    otc: "Study transition, family-policy vocabulary, short essay planning and source use."
  },
  {
    subject: "Health & Social Care",
    title: "Diploma of Higher Education in Health and Social Care",
    code: "W69 / OU listing",
    level: "Diploma of Higher Education / 240 credits",
    official: "https://www.open.ac.uk/courses/nursing-healthcare/degrees/ba-health-social-care-r26",
    summary: "OU notes this DipHE has the same structure as the first two-thirds of BA (Honours) Health and Social Care.",
    otc: "Stage 1-2 care concepts, public-health reading, reflective writing and evidence mapping."
  },
  {
    subject: "Health & Social Care",
    title: "BSc (Honours) Health Sciences",
    code: "Q71",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/health-social-care/degrees",
    summary: "OU health and social care degree listing includes Health Sciences.",
    otc: "Health-science terminology, evidence-based writing, scientific reading and report structure support."
  },
  {
    subject: "Health & Social Care",
    title: "BSc (Honours) Public Health and Wellbeing",
    code: "R64",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/health-social-care/degrees",
    summary: "OU health and social care degree listing includes Public Health and Wellbeing.",
    otc: "Public-health concepts, policy discussion, research evidence use and presentation preparation."
  },
  {
    subject: "Health & Social Care",
    title: "BA (Honours) Social Work (England / Scotland / Wales)",
    code: "Q32 / Q41 / Q42",
    level: "Undergraduate degree / professional route",
    official: "https://www.open.ac.uk/courses/health-social-care/degrees",
    summary: "OU health and social care degree listing includes country-specific Social Work awards.",
    otc: "Professional terminology, reflective writing, policy reading and academic discussion support."
  },
  {
    subject: "Psychology",
    title: "BSc (Honours) Forensic Psychology",
    code: "Q82",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/psychology/degrees",
    summary: "OU psychology degree listing includes Forensic Psychology.",
    otc: "Forensic psychology vocabulary, research evidence discussion, essay structure and critical evaluation."
  },
  {
    subject: "Psychology",
    title: "BSc (Honours) Social Psychology",
    code: "Q83",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/psychology/degrees",
    summary: "OU psychology degree listing includes Social Psychology.",
    otc: "Theory comparison, empirical study reading, argument structure and seminar preparation."
  },
  {
    subject: "Psychology",
    title: "BA (Honours) Criminology and Psychology",
    code: "Q98",
    level: "Undergraduate degree / 360 credits",
    official: "https://www.open.ac.uk/courses/psychology/degrees",
    summary: "OU psychology degree listing includes Criminology and Psychology.",
    otc: "Criminology/psychology theory links, research-methods reading and essay planning."
  },
  {
    subject: "Social Sciences",
    title: "BA (Honours) Social Sciences",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Social Sciences and named pathways such as politics, economics, geography and sociology.",
    otc: "Theory explanation, policy analysis, source evaluation, essay plans and critical discussion."
  },
  {
    subject: "Social Sciences",
    title: "International Relations",
    code: "OU official listing",
    level: "Honours degree / DipHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes International Relations.",
    otc: "Political vocabulary, international-issue framing, reading notes and essay argument support."
  },
  {
    subject: "Social Sciences",
    title: "Politics, Philosophy and Economics",
    code: "OU official listing",
    level: "Undergraduate degree",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Politics, Philosophy and Economics.",
    otc: "Interdisciplinary reading, concept maps, argument planning and academic writing support."
  },
  {
    subject: "Arts, Humanities & Languages",
    title: "BA (Honours) Arts and Humanities",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Arts and Humanities plus named routes such as history, literature, philosophy and music.",
    otc: "Close reading, essay structure, source interpretation and humanities academic vocabulary."
  },
  {
    subject: "Arts, Humanities & Languages",
    title: "English Language and Literature",
    code: "OU official listing",
    level: "Undergraduate degree",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes English Language and Literature.",
    otc: "Text analysis, language-study terminology, essay argument and quotation integration."
  },
  {
    subject: "Arts, Humanities & Languages",
    title: "Creative Writing",
    code: "OU official listing",
    level: "Honours degree / module pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Creative Writing and creative-writing modules.",
    otc: "Draft review, structure discussion, reflective commentary support and writing routine planning."
  },
  {
    subject: "Arts, Humanities & Languages",
    title: "Language Studies",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Language Studies and combinations with French, German and Spanish.",
    otc: "Study planning, grammar/vocabulary routines, academic language support and oral presentation practice."
  },
  {
    subject: "STEM, Environment & Engineering",
    title: "BEng / MEng Engineering",
    code: "OU official listing",
    level: "Honours degree / integrated master's / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Engineering, integrated master's Engineering and top-up engineering routes.",
    otc: "Technical English, maths bridge, lab/report planning, project documentation and progression review."
  },
  {
    subject: "STEM, Environment & Engineering",
    title: "BSc (Honours) Environmental Science",
    code: "OU official listing",
    level: "Undergraduate degree / integrated master's pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Environmental Science and Environmental Management routes.",
    otc: "Scientific reading, sustainability vocabulary, report writing, data interpretation and project planning."
  },
  {
    subject: "STEM, Environment & Engineering",
    title: "BSc (Honours) Natural Sciences",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Natural Sciences and routes in biology, chemistry, earth sciences, environmental science and physics.",
    otc: "Science terminology, reading strategy, lab/report planning and evidence-based explanation."
  },
  {
    subject: "STEM, Environment & Engineering",
    title: "Mathematics and Statistics",
    code: "OU official listing",
    level: "Undergraduate degree / DipHE / CertHE pathway",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official list includes Mathematics, Mathematics and Statistics, Mathematical Sciences and related awards.",
    otc: "Maths-study routines, problem explanation, statistics interpretation and exam-preparation planning."
  },
  {
    subject: "Access Modules",
    title: "Business and law Access module",
    code: "Access",
    level: "Access module",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official module list includes Business and law Access module and fast-track option.",
    otc: "Return-to-study preparation, academic English, reading notes, short writing and confidence building."
  },
  {
    subject: "Access Modules",
    title: "Science, technology and maths Access module",
    code: "Access",
    level: "Access module",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official module list includes Science, technology and maths Access module and fast-track option.",
    otc: "STEM vocabulary, maths confidence, technical reading and weekly study routine setup."
  },
  {
    subject: "Access Modules",
    title: "Psychology, social science and wellbeing Access module",
    code: "Access",
    level: "Access module",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official module list includes Psychology, social science and wellbeing Access module and fast-track option.",
    otc: "Social-science reading, reflective writing, psychology vocabulary and transition planning."
  },
  {
    subject: "Common OU Modules",
    title: "An introduction to business and management",
    code: "B100",
    level: "OU level 1 module",
    official: "https://www.open.ac.uk/courses/business-management/all-courses",
    summary: "OU business and management modules list includes An introduction to business and management.",
    otc: "Weekly topic review, TMA planning, business terminology and example development."
  },
  {
    subject: "Common OU Modules",
    title: "Marketing essentials",
    code: "B128",
    level: "OU level 1 module",
    official: "https://www.open.ac.uk/courses/business-management/all-courses",
    summary: "OU business and management modules list includes Marketing essentials.",
    otc: "Marketing vocabulary, concept maps, mini-case discussion and assignment planning."
  },
  {
    subject: "Common OU Modules",
    title: "Business and employment law",
    code: "W240",
    level: "OU level 2 module",
    official: "https://www.open.ac.uk/courses/business-management/all-courses",
    summary: "OU business and management modules list includes Business and employment law.",
    otc: "Legal concepts, case reading, employment-law vocabulary and structured issue discussion."
  },
  {
    subject: "Common OU Modules",
    title: "Strategic management",
    code: "OU level 3 module",
    level: "OU level 3 module",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU all courses module list includes Strategic management.",
    otc: "Strategy frameworks, organisational analysis, evidence use and final-stage report planning."
  },
  {
    subject: "Short Courses",
    title: "Start your own business",
    code: "Short course",
    level: "Short course",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official short-course list includes Start your own business.",
    otc: "Business-plan vocabulary, market analysis, finance basics and practical action planning."
  },
  {
    subject: "Short Courses",
    title: "Introduction to digital marketing",
    code: "Short course",
    level: "Short course",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official short-course list includes Introduction to digital marketing.",
    otc: "Digital marketing terminology, campaign planning, content review and practical implementation support."
  },
  {
    subject: "Short Courses",
    title: "Understanding financial statements",
    code: "Short course",
    level: "Short course",
    official: "https://www.open.ac.uk/courses/all.aspx",
    summary: "OU official short-course list includes Understanding financial statements.",
    otc: "Financial-statement vocabulary, interpretation, ratio discussion and business-context explanation."
  }
];

const btecPearsonCourses = [
  ["Business, Enterprise & Marketing", "BTEC International Level 3 Business", "Pearson BTEC International Level 3", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/business.html", "International business qualification for learners developing business-sector knowledge and skills for higher education or employment.", "Unit reading, assignment-criteria interpretation, business report planning, finance/marketing/management concept support and feedback review."],
  ["Business, Enterprise & Marketing", "BTEC International Level 3 Business and Enterprise", "Pearson official listing", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/study-texts-business-and-enterprise.html", "Business and Enterprise route with units such as Exploring Business, Marketing Campaigns, Business Finance and Principles of Management.", "Enterprise vocabulary, marketing campaign planning, business finance explanation and evidence-based assignment support."],
  ["Business, Enterprise & Marketing", "BTEC International Level 3 Business and Hospitality", "Pearson BTEC International Level 3", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/business-and-hospitality.html", "Business and operational management route for hospitality-sector progression or further study.", "Hospitality operations vocabulary, customer-service evidence, business planning and report/presentation support."],
  ["Business, Enterprise & Marketing", "BTEC Nationals in Business", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/business-enterprise-and-marketing/btec-business.html", "UK BTEC business route for 16+ learners, with business knowledge and applied assessment.", "Assignment brief reading, merit/distinction criteria planning, finance and marketing unit support."],
  ["Business, Enterprise & Marketing", "BTEC Tech Award in Enterprise", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/business-enterprise-and-marketing.html", "Key-stage 4 enterprise qualification using applied business tasks and assessment components.", "Foundation business vocabulary, coursework planning, component revision and presentation confidence."],
  ["Business, Enterprise & Marketing", "BTEC Higher National Certificate in Business", "Pearson BTEC Higher Nationals", "Level 4", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/business-2021.html", "Higher National business route at Level 4 for applied business study and progression.", "HNC unit planning, academic report structure, business frameworks, referencing and feedback improvement."],
  ["Business, Enterprise & Marketing", "BTEC Higher National Diploma in Business", "Pearson BTEC Higher Nationals", "Level 5", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/business-2021.html", "Higher National business route at Level 5, often used for progression to degree/top-up study.", "HND research, strategy, HR, marketing, accounting and top-up progression preparation."],
  ["Information Technology & Computing", "BTEC International Level 3 Information Technology", "Pearson BTEC International Level 3", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/it.html", "International IT qualification covering systems, databases, programming, social media, web/mobile apps and cyber security topics.", "Technical vocabulary, assignment planning, database/programming concept support, website/app project documentation."],
  ["Information Technology & Computing", "BTEC Nationals in Information Technology", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/information-technology.html", "Applied IT route for 16+ learners developing digital, data and systems skills.", "IT systems explanation, project evidence planning, report structure and digital skills vocabulary."],
  ["Information Technology & Computing", "BTEC Tech Award in Digital Information Technology", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/information-technology.html", "Digital IT qualification for school-age learners using applied components and practical assessment.", "Component planning, user-interface vocabulary, data interpretation and revision coaching."],
  ["Information Technology & Computing", "BTEC Higher National Certificate in Computing", "Pearson BTEC Higher Nationals", "Level 4", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/computing-2022.html", "Level 4 Higher National computing route for applied software, systems and digital technology study.", "Programming study support, system-design reports, project documentation and academic English."],
  ["Information Technology & Computing", "BTEC Higher National Diploma in Computing", "Pearson BTEC Higher Nationals", "Level 5", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/computing-2022.html", "Level 5 Higher National computing route supporting degree progression and specialist digital practice.", "Research project support, security/data/software unit planning and top-up preparation."],
  ["Engineering & Construction", "BTEC International Level 3 Engineering", "Pearson BTEC International Level 3", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/engineering.html", "International engineering qualification covering mechanical, digital, manufacturing, aeronautical and mechatronics specialisms.", "Technical English, engineering report structure, maths/physics bridge support and project evidence planning."],
  ["Engineering & Construction", "BTEC Nationals in Engineering", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/engineering.html", "Applied engineering qualification for technical study, practical tasks and progression.", "Unit content review, technical drawing/report support, calculations explanation and assignment planning."],
  ["Engineering & Construction", "BTEC Higher National Certificate in Engineering", "Pearson BTEC Higher Nationals", "Level 4", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/engineering-2021.html", "Level 4 Higher National engineering route for applied technical and professional engineering study.", "Engineering maths support, technical report writing, project planning and academic terminology."],
  ["Engineering & Construction", "BTEC Higher National Diploma in Engineering", "Pearson BTEC Higher Nationals", "Level 5", "Higher National", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals/engineering-2021.html", "Level 5 Higher National engineering route with specialist units and progression potential.", "Specialist unit support, research/project documentation, calculations review and top-up planning."],
  ["Health & Social Care", "BTEC Nationals in Health and Social Care", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/health-and-social-care.html", "Health and social care route for learners preparing for care-sector progression or higher education.", "Care values, safeguarding vocabulary, reflective writing, evidence planning and criteria interpretation."],
  ["Health & Social Care", "BTEC Tech Award in Health and Social Care", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/health-and-social-care.html", "Applied health and social care qualification for school-age learners.", "Component revision, care-sector terminology, short-writing structure and scenario analysis."],
  ["Health & Social Care", "BTEC Higher National Healthcare Practice", "Pearson BTEC Higher Nationals", "Level 4/5", "Higher National", "https://qualifications.pearson.com/en/subjects/health-and-social-care.html", "Higher National route for healthcare practice and applied professional study.", "Reflective writing, professional evidence, care-policy discussion and research planning."],
  ["Applied Science", "BTEC Nationals in Applied Science", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/science.html", "Applied science qualification for learners progressing toward science, health, lab or technical routes.", "Scientific terminology, lab report structure, data interpretation and exam/assignment preparation."],
  ["Applied Science", "BTEC International Level 3 Applied Science", "Pearson official listing", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/btec-international-2019.html", "International Level 3 Applied Science appears in Pearson's International Level 3 qualification family.", "Scientific reading, practical-investigation planning, lab vocabulary and evidence-based reports."],
  ["Travel, Tourism & Hospitality", "BTEC Level 3 Nationals in Travel and Tourism", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/travel-and-tourism/btec-travel-and-tourism.html", "Travel and tourism route for 16+ learners in an applied vocational sector.", "Destination research, customer-service scenarios, report structure and evidence planning."],
  ["Travel, Tourism & Hospitality", "BTEC Tech Award in Travel and Tourism", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/travel-and-tourism/btec-travel-and-tourism.html", "Key-stage 4 travel and tourism qualification with applied sector tasks.", "Tourism vocabulary, component planning, destination analysis and revision support."],
  ["Travel, Tourism & Hospitality", "BTEC Higher National Hospitality Management", "Pearson official listing", "Level 4/5", "Higher National", "https://qualifications.pearson.com/en/subjects/hospitality.html", "Hospitality management route for applied higher education and career progression.", "Operations management, customer experience, hospitality report writing and presentation support."],
  ["Sport & Public Services", "BTEC Nationals in Sport", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/sport.html", "Applied sport qualification for coaching, sport science and related progression.", "Sport-science vocabulary, training-plan evidence, assignment structure and revision support."],
  ["Sport & Public Services", "BTEC Tech Award in Sport", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/sport.html", "Applied sport qualification for school-age learners.", "Component planning, fitness/training terminology and applied scenario writing."],
  ["Sport & Public Services", "BTEC Nationals in Uniformed Protective Services", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/public-services.html", "Uniformed protective services route for learners exploring public/protective services progression.", "Public-service vocabulary, scenario analysis, report writing and progression planning."],
  ["Creative, Media & Performing Arts", "BTEC Nationals in Creative Digital Media Production", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/media.html", "Creative digital media route using applied production tasks and portfolio evidence.", "Media terminology, project proposal writing, portfolio reflection and production-log support."],
  ["Creative, Media & Performing Arts", "BTEC Tech Award in Creative Media Production", "Pearson official listing", "Level 1/2", "Tech Award", "https://qualifications.pearson.com/en/subjects/media.html", "Applied media qualification for school-age learners using creative production components.", "Component planning, media analysis vocabulary, evaluation writing and presentation support."],
  ["Creative, Media & Performing Arts", "BTEC Nationals in Performing Arts", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/performing-arts.html", "Performing arts route with practical performance, reflective and portfolio-style work.", "Reflective writing, performance log structure, evaluation language and portfolio organisation."],
  ["Art, Design & Fashion", "BTEC Nationals in Art and Design", "Pearson official listing", "Level 3", "BTEC Nationals", "https://qualifications.pearson.com/en/subjects/art-design.html", "Art and design route for creative practice, portfolio evidence and progression.", "Artist research writing, portfolio commentary, evaluation structure and presentation language."],
  ["Art, Design & Fashion", "BTEC International Level 3 Art and Design", "Pearson official listing", "Level 3", "International Level 3", "https://qualifications.pearson.com/en/qualifications/btec-international-level-3/btec-international-2019.html", "International Level 3 Art and Design appears in Pearson's International Level 3 qualification family.", "Creative research vocabulary, design-process evidence, portfolio organisation and reflective writing."],
  ["Assessment, Criteria & Study Skills", "BTEC Assignment Criteria Support", "OTC support route", "All BTEC levels", "Support route", "https://qualifications.pearson.com/en/support/support-topics/assessment-and-verification/btec-assessment.html", "Support route for understanding assignment briefs, pass/merit/distinction criteria and feedback wording.", "Criteria mapping, evidence planning, feedback literacy, resubmission planning and academic-integrity guidance."],
  ["Assessment, Criteria & Study Skills", "BTEC Research Project and Portfolio Support", "OTC support route", "Level 3 to Level 5", "Support route", "https://qualifications.pearson.com/en/qualifications/btec-higher-nationals.html", "Support route for research projects, portfolios, reflective logs and extended evidence-based assignments.", "Research questions, source evaluation, portfolio structure, reflective commentary and progress planning."],
  ["Assessment, Criteria & Study Skills", "BTEC Academic English and Presentation Support", "OTC support route", "All BTEC levels", "Support route", "https://www.pearson.com/en-gb/further-education/products-and-services/btec.html/", "Support route for learners needing English, presentation, report-writing or confidence support alongside BTEC study.", "Academic vocabulary, report paragraphs, presentation structure, pronunciation practice and independent study routines."]
].map(([subject, title, code, level, type, official, summary, otc]) => ({ subject, title, code, level, type, official, summary, otc }));

const universityModuleSubjects = [
  ["Business, Management & Strategy", "Foundation to doctoral", "Business models, operations, strategy, leadership, entrepreneurship, organisational behaviour and international management modules.", "Lecture-note consolidation, case packs, seminar preparation, exam-question banks, report plans, strategic analysis frameworks and dissertation/project supervision support."],
  ["Accounting, Finance & Economics", "Undergraduate to master's", "Financial accounting, management accounting, corporate finance, economics, investment, banking, risk and business analytics modules.", "Formula walkthroughs, calculation drills, revision banks, spreadsheet practice, data interpretation, essay/report structure and project methodology support."],
  ["Marketing, Digital Business & Analytics", "Undergraduate to master's", "Marketing principles, consumer behaviour, digital marketing, branding, market research, e-commerce, CRM and analytics modules.", "Campaign critique packs, model flashcards, MCQ/short-answer banks, data-led report planning, presentation rehearsal and dissertation topic development."],
  ["Law, Criminology & Public Policy", "Undergraduate to master's", "Business law, contract, employment, company law, public policy, criminology, regulation and legal-method modules.", "Case-note reading support, statute and precedent mapping, problem-question structure, exam scenario drills, essay outlines and research-project planning."],
  ["Computing, AI & Data Science", "Foundation to master's", "Programming, databases, web systems, cyber security, data analytics, machine learning, AI ethics and software-project modules.", "Concept explanation, coding clinic, lab-report planning, project documentation, exam banks, dataset walkthroughs and final-project structure support."],
  ["Engineering, Construction & Built Environment", "Foundation to master's", "Engineering management, construction project management, quantity surveying, sustainability, design reports and technical project modules.", "Technical vocabulary, calculation practice, report templates, project logs, risk/safety analysis, drawing/report commentary and presentation coaching."],
  ["Health, Nursing & Social Care", "Foundation to master's", "Health policy, care management, public health, safeguarding, nursing-related academic modules and evidence-based practice.", "Evidence tables, reflective-writing structure, care-policy reading, scenario practice, research-methods support and dissertation planning."],
  ["Psychology, Education & Social Sciences", "Foundation to doctoral", "Psychology, counselling, education studies, sociology, social policy, pedagogy, inclusive practice and research modules.", "Theory maps, reading-note systems, literature-review grids, ethics/application support, essay planning, qualitative/quantitative methods and thesis support."],
  ["Tourism, Hospitality & Events", "Foundation to master's", "Tourism management, hospitality operations, events, service quality, destination management and customer-experience modules.", "Sector case packs, model vocabulary, report planning, presentation rehearsal, exam revision questions and applied research-project support."],
  ["Arts, Humanities, Media & Communication", "Foundation to doctoral", "Media studies, communication, culture, history, literature, creative industries, portfolio and critical-analysis modules.", "Reading seminars, critical vocabulary, portfolio commentary, essay argument design, presentation support and research-project planning."],
  ["Research Methods & Dissertation", "Final year to doctoral", "Research proposal, methodology, literature review, ethics, data collection, analysis, dissertation, thesis and capstone projects.", "Topic scoping, research-question refinement, supervisor-feedback response plans, literature matrix, methodology design, chapter structure and viva/presentation practice."],
  ["Doctoral / PhD Research Support", "Doctoral", "Doctoral reading, proposal development, chapter drafting routines, conference preparation, upgrade/confirmation review and thesis completion planning.", "Research timetable, literature architecture, methodology defence, chapter-level feedback discussion, academic English refinement and supervisor-meeting preparation."]
].map(([subject, level, summary, support]) => ({ subject, level, summary, support }));

const universityInstitutionGroups = [
  {
    group: "London and distance-learning routes",
    institutions: [
      ["University of London / distance-learning programmes", "International and distance-learning learners", "Module-by-module tutoring, exam preparation, academic writing, research-project planning and progression support."],
      ["University College London (UCL)", "Undergraduate, master's and doctoral modules", "Subject specialist tutoring, seminar preparation, literature review, data/project support and dissertation planning."],
      ["King's College London", "Undergraduate, master's and doctoral modules", "Reading support, essay/report planning, presentation rehearsal, assessment brief interpretation and project coaching."],
      ["London School of Economics and Political Science (LSE)", "Social science, business, law, policy and economics modules", "Theory explanation, quantitative/qualitative methods, exam-question banks, essay argument structure and dissertation support."],
      ["Queen Mary University of London", "Business, law, engineering, medicine-related and humanities modules", "Module reading, tutorial preparation, assignment planning, research methods and academic English support."]
    ]
  },
  {
    group: "Major UK university routes",
    institutions: [
      ["University of Manchester", "Undergraduate, master's and doctoral modules", "Courseware consolidation, revision-bank building, coursework planning, project support and dissertation coaching."],
      ["University of Birmingham", "Undergraduate, master's and doctoral modules", "Lecture-note support, assignment structure, seminar questions, exam practice and research-project planning."],
      ["University of Leeds", "Undergraduate, master's and doctoral modules", "Module brief review, reading-list planning, coursework support, presentation practice and dissertation support."],
      ["University of Sheffield", "Undergraduate, master's and doctoral modules", "Subject tutorials, report structure, lab/project documentation, exam preparation and research-methods coaching."],
      ["University of Warwick", "Business, social science, STEM and humanities modules", "Case-study discussion, quantitative practice, essay planning, exam banks and final-project support."],
      ["University of Bristol", "Undergraduate, master's and doctoral modules", "Critical reading, seminar preparation, report writing, project structure and dissertation/thesis planning."],
      ["University of Nottingham", "Undergraduate, master's and doctoral modules", "Courseware review, tutorial preparation, assignment planning, exam-bank practice and dissertation support."],
      ["University of Liverpool", "Undergraduate, master's and doctoral modules", "Reading notes, academic writing, revision planning, project support and progression guidance."],
      ["University of Glasgow", "Undergraduate, master's and doctoral modules", "Module analysis, essay/report planning, research methods, exam questions and dissertation support."],
      ["University of Edinburgh", "Undergraduate, master's and doctoral modules", "Critical reading, methodological planning, project coaching, seminar preparation and thesis-writing support."],
      ["Cardiff University", "Undergraduate, master's and doctoral modules", "Coursework planning, revision questions, presentation rehearsal, project support and academic English."],
      ["Queen's University Belfast", "Undergraduate, master's and doctoral modules", "Subject tutoring, assessment-brief review, exam preparation, research planning and dissertation support."]
    ]
  },
  {
    group: "International English-taught routes",
    institutions: [
      ["Australian university programmes", "Undergraduate, master's and doctoral modules", "Module tutoring, coursework planning, academic English, exam practice and project/dissertation support subject to provider rules."],
      ["Canadian university programmes", "Undergraduate, master's and doctoral modules", "Courseware support, seminar preparation, essay/report planning, question-bank revision and thesis/project coaching."],
      ["US college and university programmes", "Undergraduate, master's and doctoral modules", "Syllabus-based tutoring, quiz/exam preparation, writing support, capstone/project planning and presentation coaching."],
      ["European English-taught university programmes", "Bachelor's, master's and doctoral modules", "Reading support, academic writing, methodology support, oral presentation practice and thesis/project planning."],
      ["Transnational education / branch-campus programmes", "Foundation to postgraduate modules", "Provider-specific module support, brief interpretation, tutorial planning, exam practice and progression guidance."]
    ]
  }
].map((group) => ({
  ...group,
  institutions: group.institutions.map(([name, level, support]) => ({ name, level, support }))
}));

function ouCourseType(course) {
  const text = `${course.title} ${course.level} ${course.code}`.toLowerCase();
  if (text.includes("access")) return "Access module";
  if (text.includes("short course")) return "Short course";
  if (text.includes("certificate")) return "Certificate";
  if (text.includes("diploma")) return "Diploma";
  if (text.includes("master") || text.includes("postgraduate")) return "Postgraduate";
  if (text.includes("module")) return "Module";
  return "Degree";
}

function ouSubjectKey(subject) {
  return subject.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function openUniversityCourseList() {
  const grouped = openUniversityCourses.reduce((acc, course) => {
    const key = ouSubjectKey(course.subject);
    acc[key] = acc[key] || { label: course.subject, courses: [] };
    acc[key].courses.push(course);
    return acc;
  }, {});

  const subjectEntries = Object.entries(grouped);
  const typeEntries = [...new Set(openUniversityCourses.map(ouCourseType))];

  return `
    <div class="ou-catalogue-tools" data-ou-filters>
      <div>
        <strong>${openUniversityCourses.length}</strong>
        <span>selected OU course, qualification and module entries</span>
      </div>
      <div class="ou-filter-row" aria-label="Filter by subject">
        <button type="button" data-filter-kind="subject" data-filter-value="all" class="is-active">All subjects</button>
        ${subjectEntries.map(([key, group]) => `<button type="button" data-filter-kind="subject" data-filter-value="${key}">${group.label}</button>`).join("")}
      </div>
      <div class="ou-filter-row" aria-label="Filter by award type">
        <button type="button" data-filter-kind="type" data-filter-value="all" class="is-active">All types</button>
        ${typeEntries.map((type) => `<button type="button" data-filter-kind="type" data-filter-value="${ouSubjectKey(type)}">${type}</button>`).join("")}
      </div>
    </div>
    ${subjectEntries.map(([key, group]) => `
    <section class="ou-subject-group" data-ou-subject="${key}">
      <div class="ou-subject-head">
        <h3>${group.label}</h3>
        <span>${group.courses.length} entr${group.courses.length > 1 ? "ies" : "y"}</span>
      </div>
      <div class="ou-course-list">
        ${group.courses.map((course) => {
          const type = ouCourseType(course);
          return `
          <details class="ou-course-card" data-ou-card data-subject="${key}" data-type="${ouSubjectKey(type)}">
            <summary>
              <span>
                <b>${course.title}</b>
                <em><i>${type}</i> ${course.code} · ${course.level}</em>
              </span>
              <strong>Open details</strong>
            </summary>
            <div class="ou-course-panel">
              <dl>
                <div><dt>OU course code</dt><dd>${course.code}</dd></div>
                <div><dt>Level / size</dt><dd>${course.level}</dd></div>
                <div><dt>Award / type</dt><dd>${type}</dd></div>
                <div><dt>Subject area</dt><dd>${group.label}</dd></div>
              </dl>
              <p><b>Course focus:</b> ${course.summary}</p>
              <p><b>OTC tutoring support:</b> ${course.otc}</p>
              <div class="qualification-actions">
                <a href="${course.official}" target="_blank" rel="noopener">Official OU page</a>
                <a href="mailto:office@overseasuk.com?subject=${encodeURIComponent("OU Support Enquiry - " + course.title + " " + course.code)}">Tutoring enquiry</a>
                <a href="/consultation-chat/?source=ou&course=${encodeURIComponent(course.title)}&code=${encodeURIComponent(course.code)}&subject=${encodeURIComponent(group.label)}&level=${encodeURIComponent(course.level)}&support=${encodeURIComponent(course.otc)}">Ask AI</a>
              </div>
            </div>
          </details>
        `}).join("")}
      </div>
    </section>
  `).join("")}
  `;
}

function btecPearsonCourseList() {
  const grouped = btecPearsonCourses.reduce((acc, course) => {
    const key = ouSubjectKey(course.subject);
    acc[key] = acc[key] || { label: course.subject, courses: [] };
    acc[key].courses.push(course);
    return acc;
  }, {});

  const subjectEntries = Object.entries(grouped);
  const typeEntries = [...new Set(btecPearsonCourses.map((course) => course.type))];

  return `
    <div class="ou-catalogue-tools" data-btec-filters>
      <div>
        <strong>${btecPearsonCourses.length}</strong>
        <span>selected BTEC / Pearson qualification and support entries</span>
      </div>
      <div class="ou-filter-row" aria-label="Filter by subject">
        <button type="button" data-filter-kind="subject" data-filter-value="all" class="is-active">All subjects</button>
        ${subjectEntries.map(([key, group]) => `<button type="button" data-filter-kind="subject" data-filter-value="${key}">${group.label}</button>`).join("")}
      </div>
      <div class="ou-filter-row" aria-label="Filter by qualification type">
        <button type="button" data-filter-kind="type" data-filter-value="all" class="is-active">All types</button>
        ${typeEntries.map((type) => `<button type="button" data-filter-kind="type" data-filter-value="${ouSubjectKey(type)}">${type}</button>`).join("")}
      </div>
    </div>
    ${subjectEntries.map(([key, group]) => `
    <section class="ou-subject-group" data-btec-subject="${key}">
      <div class="ou-subject-head">
        <h3>${group.label}</h3>
        <span>${group.courses.length} entr${group.courses.length > 1 ? "ies" : "y"}</span>
      </div>
      <div class="ou-course-list">
        ${group.courses.map((course) => `
          <details class="ou-course-card" data-btec-card data-subject="${key}" data-type="${ouSubjectKey(course.type)}">
            <summary>
              <span>
                <b>${course.title}</b>
                <em><i>${course.type}</i> ${course.code} · ${course.level}</em>
              </span>
              <strong>Open details</strong>
            </summary>
            <div class="ou-course-panel">
              <dl>
                <div><dt>Pearson listing</dt><dd>${course.code}</dd></div>
                <div><dt>Level</dt><dd>${course.level}</dd></div>
                <div><dt>Qualification type</dt><dd>${course.type}</dd></div>
                <div><dt>Subject area</dt><dd>${group.label}</dd></div>
              </dl>
              <p><b>Qualification focus:</b> ${course.summary}</p>
              <p><b>OTC tutoring support:</b> ${course.otc}</p>
              <div class="qualification-actions">
                <a href="${course.official}" target="_blank" rel="noopener">Official Pearson page</a>
                <a href="mailto:office@overseasuk.com?subject=${encodeURIComponent("BTEC Pearson Support Enquiry - " + course.title)}">Tutoring enquiry</a>
                <a href="/consultation-chat/?source=btec&course=${encodeURIComponent(course.title)}&code=${encodeURIComponent(course.code)}&subject=${encodeURIComponent(group.label)}&level=${encodeURIComponent(course.level)}&support=${encodeURIComponent(course.otc)}">Ask AI</a>
              </div>
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `).join("")}
  `;
}

function universityModuleSupportList() {
  return `
    <div class="support-mini-grid">
      ${[
        ["Courseware support", "Lecture slides, module handbooks, seminar notes, reading lists and weekly topics can be turned into structured bilingual tutoring notes, concept maps and revision packs."],
        ["Exam question bank", "Where permitted by the provider, OTC can build practice banks from syllabus topics, past-paper style questions, MCQs, short answers, case scenarios and timed revision drills."],
        ["Dissertation / project support", "Support can cover topic scoping, research questions, literature review architecture, methodology, ethics preparation, data discussion, chapter planning and supervisor-feedback response."],
        ["Academic integrity boundary", "OTC explains, plans, reviews requirements and develops learner capability. It does not write assessed work, impersonate learners, submit work, sit tests or provide ready-made answers."]
      ].map(([title, text]) => `
        <aside class="support-note">
          <h3>${title}</h3>
          <p>${text}</p>
        </aside>
      `).join("")}
    </div>
    <div style="height:28px"></div>
    <div class="section-head" id="by-subject">
      <h2>Browse by Subject Area</h2>
      <p>Start here when the student knows the module subject but the university route is still being checked. Each route can support undergraduate, master's and, where appropriate, doctoral learners after the exact syllabus and assessment brief are reviewed.</p>
    </div>
    <div class="ou-course-list">
      ${universityModuleSubjects.map((item) => `
        <details class="ou-course-card" data-university-module-card>
          <summary>
            <span>
              <b>${item.subject}</b>
              <em><i>Subject route</i> ${item.level}</em>
            </span>
            <strong>Open details</strong>
          </summary>
          <div class="ou-course-panel">
            <dl>
              <div><dt>Entry mode</dt><dd>By subject area</dd></div>
              <div><dt>Likely level</dt><dd>${item.level}</dd></div>
              <div><dt>Support type</dt><dd>Tutoring, courseware, exam bank, coursework planning, project support</dd></div>
              <div><dt>Confirmation</dt><dd>Case by case after module documents are received</dd></div>
            </dl>
            <p><b>Typical module scope:</b> ${item.summary}</p>
            <p><b>OTC support outputs:</b> ${item.support}</p>
            <p><b>Documents to prepare:</b> university name, programme title, module code/title, module handbook, lecture slides or weekly topics, reading list, assessment brief, marking rubric, exam scope or permitted past-paper material, current feedback and deadline.</p>
            <div class="qualification-actions">
              <a href="/consultation-chat/?source=university-module&route=subject&course=${encodeURIComponent(item.subject)}&level=${encodeURIComponent(item.level)}&support=${encodeURIComponent(item.support)}">Ask AI</a>
              <a href="mailto:office@overseasuk.com?subject=${encodeURIComponent("University Module Support - " + item.subject)}">Tutoring enquiry</a>
            </div>
          </div>
        </details>
      `).join("")}
    </div>
    <div style="height:34px"></div>
    <div class="section-head" id="by-university">
      <h2>Browse by Current University</h2>
      <p>Start here when the student already has a university, programme, module code, assignment brief or exam schedule. Institution entries are tutoring routes for enrolled students, not official university services or partnership claims.</p>
    </div>
    ${universityInstitutionGroups.map((group) => `
      <section class="ou-subject-group">
        <div class="ou-subject-head">
          <h3>${group.group}</h3>
          <span>${group.institutions.length} route${group.institutions.length > 1 ? "s" : ""}</span>
        </div>
        <div class="ou-course-list">
          ${group.institutions.map((item) => `
            <details class="ou-course-card" data-university-route-card>
              <summary>
                <span>
                  <b>${item.name}</b>
                  <em><i>Institution route</i> ${item.level}</em>
                </span>
                <strong>Open details</strong>
              </summary>
              <div class="ou-course-panel">
                <dl>
                  <div><dt>Entry mode</dt><dd>By current university</dd></div>
                  <div><dt>Typical learner level</dt><dd>${item.level}</dd></div>
                  <div><dt>Support coverage</dt><dd>Courseware, assessment brief, revision bank, dissertation/project support</dd></div>
                  <div><dt>Status</dt><dd>Available subject to document review and tutor matching</dd></div>
                </dl>
                <p><b>OTC support route:</b> ${item.support}</p>
                <p><b>Scoping checklist:</b> send the official module page or handbook, lecture topics, assignment/project brief, marking rubric, reading list, exam format, current draft or feedback, expected outcome and deadline.</p>
                <div class="qualification-actions">
                  <a href="/consultation-chat/?source=university-module&route=university&course=${encodeURIComponent(item.name)}&level=${encodeURIComponent(item.level)}&support=${encodeURIComponent(item.support)}">Ask AI</a>
                  <a href="mailto:office@overseasuk.com?subject=${encodeURIComponent("University Module Support - " + item.name)}">Tutoring enquiry</a>
                </div>
              </div>
            </details>
          `).join("")}
        </div>
      </section>
    `).join("")}
  `;
}

const countryGatewayData = [
  { slug: "united-kingdom", zh: "英國", name: "United Kingdom", href: "/countries/united-kingdom/", labelClass: "label-country-uk", note: "OTC 英國總部所在市場，適合本科、碩士、博士、pathway、寄宿學校及國際課程銜接。", universities: ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL", "King's College London", "University of Manchester", "University of Edinburgh", "University of Warwick"], colleges: ["Study Group UK / Europe ISC", "INTO University Partnerships", "Kaplan International Pathways", "Navitas UK Colleges", "Oxford International Education Group", "Cambridge Education Group"], highSchools: ["UK independent boarding schools", "Sixth form colleges", "State boarding schools", "International Study Centres"], primarySchools: ["Preparatory schools", "Junior boarding schools", "Independent primary schools", "London day schools"] },
  { slug: "australia", zh: "澳洲", name: "Australia", href: "/australia-office-presence/", labelClass: "label-country-australia", note: "澳洲路線已建立較完整的辦公室、VET / TAFE、升學與市場支持頁面。", universities: ["UNSW Sydney", "University of Sydney", "University of Melbourne", "Monash University", "University of Queensland", "Australian National University", "University of Adelaide", "University of Western Australia"], colleges: ["TAFE NSW", "UTS College", "Monash College", "UWA College", "KIC Adelaide College", "Murdoch College"], highSchools: ["NSW government schools", "Victorian government schools", "Queensland schools", "Independent boarding schools"], primarySchools: ["NSW primary schools", "Victoria primary schools", "Queensland primary schools", "Independent junior schools"] },
  { slug: "united-states", zh: "美國", name: "United States", href: "/countries/united-states/", labelClass: "label-country-us", note: "適合美本、美研、社區學院轉學、pathway 與英美路線比較。", universities: ["Harvard University", "MIT", "Stanford University", "University of California system", "New York University", "Columbia University", "University of Southern California", "Northeastern University"], colleges: ["Community colleges", "Liberal arts colleges", "Study Group North America routes", "Shorelight partner routes", "INTO US routes", "University extension pathways"], highSchools: ["Private day schools", "Boarding schools", "Public high school exchange routes", "International high schools"], primarySchools: ["Private elementary schools", "Independent K-12 schools", "International elementary programmes", "Local district schools"] },
  { slug: "canada", zh: "加拿大", name: "Canada", href: "/countries/canada/", labelClass: "label-country-canada", note: "適合本科、研究生文憑、公立學院、OSSD / BC 課程與家庭移居教育規劃。", universities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "McMaster University", "University of Alberta", "Queen's University", "Simon Fraser University"], colleges: ["Seneca Polytechnic", "George Brown College", "Humber College", "Centennial College", "BCIT", "Fanshawe College"], highSchools: ["Ontario public school boards", "BC school districts", "Private boarding schools", "OSSD schools"], primarySchools: ["Public elementary schools", "Private elementary schools", "International junior schools", "Catholic school boards"] },
  { slug: "new-zealand", zh: "新西蘭", name: "New Zealand", href: "/countries/new-zealand/", labelClass: "label-country-new-zealand", note: "適合大學、理工學院、中小學及家庭型低齡留學路線。", universities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University", "Auckland University of Technology"], colleges: ["Te Pukenga / institutes of technology", "Unitec", "Ara Institute of Canterbury", "English language colleges"], highSchools: ["Auckland secondary schools", "Wellington secondary schools", "Christchurch high schools", "Boarding schools"], primarySchools: ["Auckland primary schools", "Wellington primary schools", "Local state primary schools", "Independent primary schools"] },
  { slug: "ireland", zh: "愛爾蘭", name: "Ireland", href: "/countries/ireland/", labelClass: "label-country-ireland", note: "適合英語授課本科、碩士、醫藥、商科、科技與歐洲工作路線比較。", universities: ["Trinity College Dublin", "University College Dublin", "University of Galway", "University College Cork", "Dublin City University", "University of Limerick"], colleges: ["Technological University Dublin", "Griffith College", "Dublin Business School", "National College of Ireland"], highSchools: ["Irish boarding schools", "Dublin secondary schools", "International high schools", "Senior cycle programmes"], primarySchools: ["Dublin primary schools", "Independent primary schools", "Local national schools", "International junior routes"] },
  { slug: "singapore", zh: "新加坡", name: "Singapore", href: "/countries/singapore/", labelClass: "label-country-singapore", note: "適合亞洲英文教育、英澳美銜接、國際學校和本科/研究生路線比較。", universities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University", "Singapore University of Technology and Design", "Singapore Institute of Technology"], colleges: ["Singapore polytechnics", "Kaplan Singapore", "SIM Global Education", "PSB Academy", "James Cook University Singapore"], highSchools: ["Junior colleges", "International schools", "IB schools", "Integrated Programme schools"], primarySchools: ["International primary schools", "Local primary schools", "IB PYP schools", "British curriculum primary schools"] },
  { slug: "japan", zh: "日本", name: "Japan", href: "/countries/japan/", labelClass: "label-country-japan", note: "適合英文授課本科/研究生、語言學校、國際高中與亞洲路線比較。", universities: ["University of Tokyo", "Kyoto University", "Waseda University", "Keio University", "Sophia University", "Tohoku University", "Osaka University"], colleges: ["Japanese language schools", "Professional training colleges", "Temple University Japan", "Pathway and EJU preparation providers"], highSchools: ["International high schools", "IB schools in Japan", "Japanese private high schools", "Boarding-style programmes"], primarySchools: ["International primary schools", "Japanese private elementary schools", "IB PYP schools", "Bilingual junior schools"] },
  { slug: "south-korea", zh: "韓國", name: "South Korea", href: "/countries/south-korea/", labelClass: "label-country-korea", note: "適合英文授課、韓語預備、亞洲本科/研究生與國際高中路線。", universities: ["Seoul National University", "KAIST", "Yonsei University", "Korea University", "Sungkyunkwan University", "Hanyang University"], colleges: ["Korean language institutes", "International colleges", "Professional colleges", "Pathway preparation providers"], highSchools: ["International schools", "Foreign language high schools", "Private high schools", "IB / AP schools"], primarySchools: ["International primary schools", "Bilingual elementary schools", "Private elementary schools", "Foreign schools"] },
  { slug: "hong-kong", zh: "香港", name: "Hong Kong", href: "/countries/hong-kong/", labelClass: "label-country-hong-kong", note: "適合英語授課大學、國際學校、DSE / IB / A-Level 銜接與大灣區家庭路線。", universities: ["University of Hong Kong", "Chinese University of Hong Kong", "Hong Kong University of Science and Technology", "City University of Hong Kong", "Hong Kong Polytechnic University", "Hong Kong Baptist University"], colleges: ["HKU SPACE", "Community colleges", "Vocational Training Council routes", "Private higher education colleges"], highSchools: ["International schools", "DSE schools", "IB schools", "British curriculum schools"], primarySchools: ["International primary schools", "Local primary schools", "ESF junior schools", "Private primary schools"] },
  { slug: "netherlands", zh: "荷蘭", name: "Netherlands", href: "/countries/netherlands/", labelClass: "label-country-netherlands", note: "適合歐洲英語授課本科、研究型大學、應用科技大學和商科/設計路線。", universities: ["University of Amsterdam", "Delft University of Technology", "Erasmus University Rotterdam", "Utrecht University", "Leiden University", "Eindhoven University of Technology"], colleges: ["Universities of applied sciences", "Hotelschool The Hague", "Amsterdam University of Applied Sciences", "Fontys University of Applied Sciences"], highSchools: ["International schools", "IB schools", "Bilingual secondary schools", "Private international high schools"], primarySchools: ["International primary schools", "IB PYP schools", "Dutch bilingual primary routes", "Private primary schools"] },
  { slug: "germany", zh: "德國", name: "Germany", href: "/countries/germany/", labelClass: "label-country-germany", note: "適合工程、商科、英語授課碩士、德語預備與歐洲公立大學路線。", universities: ["Technical University of Munich", "LMU Munich", "Heidelberg University", "RWTH Aachen University", "University of Freiburg", "Humboldt University of Berlin"], colleges: ["Universities of applied sciences", "German language institutes", "Studienkolleg routes", "Private business schools"], highSchools: ["International schools", "Gymnasium routes", "IB schools", "Boarding schools"], primarySchools: ["International primary schools", "Bilingual primary schools", "Private elementary schools", "Local Grundschule routes"] },
  { slug: "france", zh: "法國", name: "France", href: "/countries/france/", labelClass: "label-country-france", note: "適合商學院、藝術設計、工程師學校、英文授課本科/碩士與歐洲交換路線。", universities: ["Sorbonne University", "Universite Paris-Saclay", "Sciences Po", "HEC Paris", "ESSEC Business School", "INSEAD"], colleges: ["Grandes ecoles", "Business schools", "Art and design schools", "French language institutes"], highSchools: ["International schools", "Lycee international routes", "IB schools", "Private secondary schools"], primarySchools: ["International primary schools", "Bilingual primary schools", "Private primary schools", "Local ecole primaire routes"] },
  { slug: "switzerland", zh: "瑞士", name: "Switzerland", href: "/countries/switzerland/", labelClass: "label-country-switzerland", note: "適合酒店管理、商科、國際學校、寄宿中學與多語環境升學。", universities: ["ETH Zurich", "EPFL", "University of Zurich", "University of Geneva", "University of Lausanne", "University of St. Gallen"], colleges: ["Swiss hotel schools", "Business schools", "Applied sciences universities", "Language schools"], highSchools: ["Swiss boarding schools", "International schools", "IB schools", "A-Level schools"], primarySchools: ["International primary schools", "Junior boarding schools", "Bilingual primary schools", "Private elementary schools"] }
];

function countryGatewayLabels() {
  return countryGatewayData.map((country) => `
    <a class="zh-map-label country-map-label ${country.labelClass}" href="${country.href}">
      <strong>${country.zh}</strong><span>${country.name}</span>
    </a>
  `).join("");
}

function countryList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function countryGatewayPage(country) {
  return pageShell({
    title: `${country.zh}留學入口 | OTC Study Hub`,
    current: "zh",
    lang: "zh-Hant",
    locale: "zh",
    description: `OTC ${country.zh}留學國家頁：大學、學院、中學、小學初步列表與申請文件分流。`,
    body: `
      <section class="page-hero regional-office-hero country-gateway-hero">
        <div class="band">
          <div class="eyebrow">OTC Country Gateway</div>
          <h1>${country.zh}留學入口</h1>
          <h2>${country.name}</h2>
          <p>${country.note}</p>
          <div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(country.name + " study route enquiry")}">提交初步評估</a><a class="btn btn-secondary" href="/zh/">返回全球地圖</a></div>
        </div>
      </section>
      <section class="band country-gateway-panel">
        <div class="section-head compact-head">
          <div class="eyebrow">初步列表</div>
          <h2>${country.zh}：大學 / 學院 / 中學 / 小學</h2>
          <p>以下為公開展示的第一版路線索引，用於初步分流。具體可申請課程、年級、入學要求、名額、授權渠道和截止日期需要逐案確認。</p>
        </div>
        <div class="country-school-grid">
          <article><b>01</b><strong>大學</strong><ul>${countryList(country.universities)}</ul></article>
          <article><b>02</b><strong>學院 / Pathway</strong><ul>${countryList(country.colleges)}</ul></article>
          <article><b>03</b><strong>中學</strong><ul>${countryList(country.highSchools)}</ul></article>
          <article><b>04</b><strong>小學</strong><ul>${countryList(country.primarySchools)}</ul></article>
        </div>
        <div class="country-route-actions">
          ${country.slug === "australia" ? `<a class="btn btn-dark" href="/australia-office-presence/">打開澳洲成熟路線頁</a><a class="btn btn-light" href="/zh/australia-vet-tafe-pathways/">澳洲 VET / TAFE 職業培訓</a>` : `<a class="btn btn-dark" href="/university-applications/">大學申請評估</a><a class="btn btn-light" href="/international-curriculum-tutoring/">課程與文件準備</a>`}
        </div>
        <p class="source-note">列表為 OTC 網站上的初步目的地索引，不代表正式代理授權、保證錄取或完整院校清單。申請、簽證、監護、入讀和轉學均需按相關學校、大學、政府或專業人士的最新正式要求核對。</p>
      </section>
    `
  });
}

function applicationCountryCards() {
  return countryGatewayData.map((country, index) => `
        <a class="application-country-card ${country.slug}" href="/university-applications/?country=${encodeURIComponent(country.name)}#programme-directory" data-country-jump="${country.name}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${country.name}</strong>
          <em>${country.zh} · university screening</em>
          <p>${country.note}</p>
          <b data-country-count="${country.name}">Open list</b>
        </a>
  `).join("");
}

const transnationalEducationGroups = [
  {
    name: "Study Group",
    focus: "UK, Europe and North America pathway and direct-entry routes",
    note: "Foundation, International Year One, Pre-Master and selected direct-entry application screening for July-December 2026 intakes.",
    url: "/study-group-2026-applications/",
    band: "2026 intake window"
  },
  {
    name: "Kaplan International Pathways",
    focus: "UK, Australia and New Zealand pathway routes",
    note: "Kaplan Australia / New Zealand and wider pathway-provider channels where current rules and eligibility allow screening.",
    url: "/insights/australia-new-zealand-provider-pathway-updates-2026/",
    band: "Pathway provider"
  },
  {
    name: "Navitas",
    focus: "Australia, UK and global college pathway routes",
    note: "College-based foundation, diploma and university progression routes, including Australia-facing pathway research records.",
    url: "/insights/australia-new-zealand-provider-pathway-updates-2026/",
    band: "College pathway"
  },
  {
    name: "INTO University Partnerships",
    focus: "UK, US and international pathway routes",
    note: "International foundation, graduate preparation and direct-entry screening where a current provider route is relevant.",
    url: "/university-applications/?country=Education%20Group%20%2F%20Pathway%20Provider&institution=INTO%20University%20Partnerships#programme-directory",
    band: "Pathway provider"
  },
  {
    name: "Cambridge Education Group",
    focus: "UK and international pathway routes",
    note: "Foundation, ONCAMPUS-style preparation and university progression screening subject to current provider availability.",
    url: "/university-applications/?country=Education%20Group%20%2F%20Pathway%20Provider&institution=Cambridge%20Education%20Group#programme-directory",
    band: "Preparation route"
  },
  {
    name: "Oxford International Education Group",
    focus: "UK pathway and English preparation routes",
    note: "Pathway, English preparation and partner-university screening where course level and intake timing can be verified.",
    url: "/university-applications/?country=Education%20Group%20%2F%20Pathway%20Provider&institution=Oxford%20International%20Education%20Group#programme-directory",
    band: "Provider route"
  },
  {
    name: "UP Education / HANZ",
    focus: "New Zealand diploma and progression routes",
    note: "New Zealand provider updates and international-entry screening, including selected nursing and diploma routes.",
    url: "/insights/australia-new-zealand-provider-pathway-updates-2026/",
    band: "NZ provider"
  },
  {
    name: "UTS College",
    focus: "Australia university pathway route",
    note: "UTS / UTS College scholarship, pathway and package-route screening before narrowing to course-level eligibility.",
    url: "/university-applications/?country=Education%20Group%20%2F%20Pathway%20Provider&institution=UTS%20College#programme-directory",
    band: "Australia pathway"
  }
];

function transnationalEducationGroupCards() {
  return transnationalEducationGroups.map((group) => `
        <article class="education-group-card">
          <span>${group.band}</span>
          <strong>${group.name}</strong>
          <em>${group.focus}</em>
          <p>${group.note}</p>
          <div>
            <a href="/university-applications/?country=Education%20Group%20%2F%20Pathway%20Provider&institution=${encodeURIComponent(group.name)}#programme-directory">Open in review</a>
            <a href="${group.url}">Context page</a>
          </div>
        </article>
  `).join("");
}

function searchItems() {
  const pages = [
    ["Home", "/", "OTC Study Hub overview for consulting, courses, apps and publishing."],
    ["Education Consulting / Global Study Advisory", "/resources/", "Worldwide English-taught education consulting, transfer, guardianship, appeals and complex cases."],
    ["Services", "/services/", "OTC service lines for translation, publishing, academic guardianship, academic events, education fairs and accreditation support."],
    ["University Applications", "/university-applications/", "UK university applications, advanced entry, UCAS/direct application planning, document checks and application screening."],
    ["Study Group 2026 Applications", "/study-group-2026-applications/", "OTC application support for selected Study Group pathway, direct-entry and international routes for July-December 2026 intakes."],
    ["Study Group 2026 中文申請頁", "/zh/study-group-2026-applications/", "OTC 中文申請支持頁：Study Group 2026 年 7-12 月入學 pathway、直入與國際路線初步評估。"],
    ["Application Service Standards", "/application-service-standards/", "OTC student application standards for consent, data protection, document authenticity, academic integrity and admissions boundaries."],
    ["Advanced Entry & China Programme Support", "/advanced-entry-china-programmes/", "Support for CFAU/IBP and similar Chinese university international programme students seeking UK Year 2, top-up or advanced-entry review."],
    ["University Agent & Institutional Cooperation", "/university-partnerships/", "OTC institutional cooperation page for university admissions teams and international offices reviewing representative capability."],
    ["Consultation AI", "/consultation-chat/", "Instant first-response guidance for education consulting cases."],
    ["Overseas Study Review / 留學導報", "/insights/", "Overseas Publishing House series for study-abroad briefings, pathway notes, public education commentary and shareable bilingual guidance."],
    ["Australia Office Presence", "/australia-office-presence/", "OTC Australia-facing office route from NSW, covering coordination base, university applications, student support, institutional services, market intelligence and professional referral."],
    ...countryGatewayData.filter((country) => country.slug !== "australia").map((country) => [
      `${country.zh}留學入口 / ${country.name} Study Gateway`,
      `/countries/${country.slug}/`,
      `OTC ${country.zh}留學國家頁：大學、學院、中學、小學初步列表與申請文件分流。`
    ]),
    ["英聯邦入口 / Commonwealth Gateway", "/offices/commonwealth/", "OTC regional gateway for UK, Australia, Canada, New Zealand and wider Commonwealth education and family support enquiries."],
    ["美國入口 / United States Gateway", "/offices/united-states/", "OTC regional gateway for US study-route screening, North America options and document preparation."],
    ["東亞入口 / East Asia Gateway", "/offices/east-asia/", "OTC regional gateway for students and families from Mainland China, Hong Kong, Taiwan, Japan and Korea."],
    ["歐洲入口 / Europe Gateway", "/offices/europe/", "OTC regional gateway for UK and European English-taught programmes, transfer planning and document coordination."],
    ["AI Education Operations", "/ai-education-operations/", "AI-supported education operations framework for student files, qualification mapping, application workflows, tutorial publishing, evidence management and Australia market intelligence."],
    ["Australia VET / TAFE Pathways", "/australia-vet-tafe-pathways/", "OTC Australia VET and TAFE pathway coverage for vocational course screening, TAFE-to-university progression, document readiness and professional referral boundaries."],
    ["中文", "/zh/", "OTC Study Hub 中文頁：教育諮詢、國際課程雙語輔導、BTEC / A-Level / IB 支援、教輔出版與聯絡方式。"],
    ["Courses", "/courses/", "OTHM qualifications, international curriculum bilingual tutoring, external programme support, academic tutoring and progression guidance."],
    ["International Curriculum Bilingual Tutoring", "/international-curriculum-tutoring/", "Bilingual academic tutoring for A-Level, BTEC, IB, AP, IGCSE, OSSD, Australian, US high school, Foundation, HND, OTHM, NCC and ATHE learners."],
    ["BTEC Level 3 University Progression", "/international-curriculum-tutoring/btec-pearson/university-progression/", "Official-source based BTEC Level 3 and BTEC International Level 3 university recognition map, Pearson recognition examples, UCAS tariff guidance and course-entry checking."],
    ["OTHM Qualifications", "/othm-qualifications/", "Regulated OTHM qualification map, approved/TBC status and level-based enquiry routes."],
    ["External Programme Support", "/external-programme-support/", "OU, BTEC, Pearson, university modules, foundation / pathway and recognised external programme tutoring support."],
    ["Academic Tutoring", "/academic-tutoring/", "Academic writing, business tutoring, research skills, academic English and study-skills support."],
    ["Guidance & Progression", "/guidance-progression/", "Study-route planning, top-up review, learner profile organisation and progression guidance."],
    ["Apps & Tools", "/apps/", "UCBELT, Australian citizenship test, CE exam app, CSCS/SIA planned tools, vocabulary and quiz systems."],
    ["Australian Citizenship Test Practice App", "/apps/australian-citizenship-test/", "Independent OTC English-Chinese Australian citizenship test practice app with mock tests, topic practice, flashcards and study guide."],
    ["IH London Placement & Interview Practice App", "/apps/ih-placement-interview/", "Independent OTC practice app for IH London online placement test readiness, speaking interview preparation, bilingual vocabulary and tutor-led review."],
    ["Publishing", "/publishing/", "Overseas Publishing editorial lines, live Payhip releases and author services."],
    ["留學導報中文目錄", "/zh/insights/", "海外書局導報中文文章清單，按留學升學、移居安家、財富規劃、職業考牌、創業自雇與學術文化六類整理。"],
    ["Study Guides", "/study-guides/", "OTC OTHM Level 5 Business Management first-edition single-unit study companions are live on Payhip."],
    ["OTHM Health & Social Care Bilingual Study Series", "/publishing/othm-health-social-care-bilingual-series/", "Overseas Publishing House planned bilingual study-guide series for OTHM Health and Social Care levels 3 to 7, linked to OTC's Australia health pathway research and tutor approval preparation."],
    ["About OTC", "/about/", "Overseas Tutorial Centre, Overseas Publishing and overseas education services."]
  ].map(([title, url, desc]) => ({ type: "Page", title, url, desc }));

  const insights = insightsArticles.map((article) => ({
    type: "Insight",
    title: article.title,
    url: `/insights/${article.slug}/`,
    desc: `${article.category}. ${article.summary}`
  }));

  const services = serviceProducts.map((service) => ({
    type: "Service",
    title: service.title,
    url: `/services/${service.slug}/`,
    desc: `${service.titleZh}. ${service.cardDesc} ${service.price}. ${service.timeline}.`
  }));

  const qualifications = academicAreas.flatMap((area) => area.items.map((title) => ({
    type: "OTHM Course",
    title,
    url: "/courses/",
    desc: `${area.title}. ${levelOf(title)}. ${approvedQualifications.has(title) ? "Approved / evidence-mapped" : "TBC"} registration enquiry. ${progressionIndication(title)}`
  })));

  const books = [
    ["Principles and Concepts of Strategy", "F/650/1150", "978-1-0666440-3-2"],
    ["The Management of Human Resources", "H/650/1151", "978-1-0666440-2-5"],
    ["Marketing for Managers", "J/650/1152", "978-1-0666440-0-1"],
    ["Business Law for Managers", "K/650/1153", "978-1-0666440-1-8"],
    ["Management Accounting and Decision Making", "L/650/1154", "978-1-0666440-4-9"],
    ["Business Start-up: Conception to Market", "M/650/1155", "978-1-0666440-5-6"]
  ].map(([title, unit, isbn]) => ({
    type: "Book",
    title,
    url: "/study-guides/",
    desc: `${unit}. OTHM Level 5 Business Management public bookshop edition. ISBN ${isbn}. First-edition single-unit guide live on Payhip.`
  }));

  const externalSupport = externalProgrammeRoutes.map((item) => ({
    type: "External Support",
    title: item.title,
    url: `/external-programme-support/${item.id}/`,
    desc: `${item.zh}. ${item.desc} Subjects: ${item.subjects.map((row) => row[0]).join(", ")}. Levels: ${item.levels.join(", ")}.`
  }));

  const internationalCurriculumSupport = internationalCurriculumRoutes.map((item) => ({
    type: "International Curriculum Support",
    title: item.title,
    url: "/international-curriculum-tutoring/",
    desc: `${item.zh}. Focus areas: ${item.focus}. Student need: ${item.pain} OTC support: ${item.support}`
  }));

  return [...pages, ...services, ...insights, ...internationalCurriculumSupport, ...externalSupport, ...qualifications, ...books];
}

const generatedRoutes = [];

function routePath(route) {
  return route === "." ? "/" : `/${route.replace(/^\/+|\/+$/g, "")}/`;
}

function write(route, html) {
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  const publicPath = routePath(route);
  const canonicalUrl = new URL(publicPath, SITE_URL).toString();
  const htmlWithCanonical = html
    .replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonicalUrl}">`)
    .replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${canonicalUrl}">`)
    .replace(/[ \t]+$/gm, "");
  fs.writeFileSync(path.join(dir, "index.html"), htmlWithCanonical);
  generatedRoutes.push(publicPath);
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapOgTitle(title, maxChars = 24, maxLines = 3) {
  const text = String(title || "").replace(/\s+/g, " ").trim();
  const hasCjk = /[\u3400-\u9fff]/.test(text);
  const hasSpaces = text.includes(" ") && !hasCjk;
  const tokens = hasSpaces ? text.split(" ") : Array.from(text);
  const lines = [];
  let current = "";
  let stopped = false;
  tokens.forEach((token) => {
    if (stopped) return;
    const next = hasSpaces ? (current ? `${current} ${token}` : token) : `${current}${token}`;
    if (next.length > maxChars && current && lines.length < maxLines - 1) {
      lines.push(current);
      current = token;
    } else if (next.length > maxChars && current && lines.length === maxLines - 1) {
      current = `${next.slice(0, Math.max(0, maxChars - 1))}…`;
      stopped = true;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].slice(0, Math.max(0, maxChars - 1))}…`;
  }
  return lines;
}

function heraldSocialImagePath(article, locale = "en") {
  return `/assets/social/herald-${locale}-${article.slug}.png`;
}

function writeHeraldSocialImage(article, locale = "en") {
  const isZh = locale === "zh";
  const imagePath = heraldSocialImagePath(article, locale);
  const svgPath = imagePath.replace(/\.png$/, ".svg");
  const outPath = path.join(root, svgPath.replace(/^\//, ""));
  const pngOutPath = path.join(root, imagePath.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const title = isZh ? (article.titleZh || article.title) : article.title;
  const column = isZh ? "留學導報 · 深度指南" : (article.category || "Overseas Study Review");
  const issue = isZh ? `${article.date.replace(/-/g, ".")} · 留學導報` : `${article.date} · Overseas Study Review`;
  const titleLines = wrapOgTitle(title, isZh ? 12 : 24, 3);
  const titleFontSize = isZh ? (titleLines.length >= 3 ? 50 : 56) : (titleLines.length >= 3 ? 42 : 48);
  const titleLineHeight = isZh ? 63 : 57;
  const sections = (isZh ? article.bodyZh : article.body || []).slice(0, 5).map((section) => stripSectionNumber(section.heading));
  const summary = isZh ? (article.summaryZh || article.summary || "") : (article.summary || "");
  const summaryLines = wrapOgTitle(summary, isZh ? 34 : 56, 2);
  const topicTags = [
    isZh ? "留學升學" : "Admissions",
    isZh ? "政策解讀" : "Policy",
    isZh ? "文件把關" : "Evidence",
    isZh ? "風險提示" : "Risk"
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#efe5d6"/>
  <rect x="38" y="34" width="1124" height="562" fill="#fffaf2" stroke="#c8b89a" stroke-width="2"/>
  <rect x="38" y="34" width="1124" height="96" fill="#1a1410"/>
  <rect x="38" y="130" width="1124" height="10" fill="#b5272d"/>
  <text x="78" y="72" fill="#e8b84b" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="700" letter-spacing="3">OVERSEAS STUDY REVIEW</text>
  <text x="78" y="111" fill="#ffffff" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="36" font-weight="900">${isZh ? "留學導報" : "Overseas Education Herald"}</text>
  <text x="1122" y="78" text-anchor="end" fill="#bfae95" font-family="'Noto Sans TC', Arial, sans-serif" font-size="17" font-weight="700">${escapeXml(issue)}</text>
  <text x="1122" y="110" text-anchor="end" fill="#ffffff" font-family="'Noto Sans TC', Arial, sans-serif" font-size="19" font-weight="800">overseasuk.com</text>
  <rect x="78" y="176" width="${isZh ? 304 : 336}" height="48" fill="#b5272d"/>
  <text x="104" y="207" fill="#ffffff" font-family="'Noto Sans TC', Arial, sans-serif" font-size="22" font-weight="900" letter-spacing="${isZh ? 2 : 1}">${escapeXml(isZh ? column : column.toUpperCase())}</text>
  <text x="426" y="195" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14" font-weight="800">${isZh ? "ISSN-OTC · PUBLIC BRIEFING · FOR STUDENTS, FAMILIES &amp; PARTNERS" : "ISSN-OTC · PUBLIC BRIEFING · STUDENTS, FAMILIES &amp; PARTNERS"}</text>
  <text x="426" y="219" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="13" font-weight="900" letter-spacing="2">${escapeXml(topicTags.join("  /  "))}</text>
  <line x1="78" y1="246" x2="456" y2="246" stroke="#c8952a" stroke-width="4"/>
  ${titleLines.map((line, index) => `<text x="78" y="${315 + index * titleLineHeight}" fill="#1a1410" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="${titleFontSize}" font-weight="900">${escapeXml(line)}</text>`).join("")}
  <rect x="782" y="256" width="324" height="202" fill="#fff5e5" stroke="#d6c39f" stroke-width="1.5"/>
  <text x="806" y="286" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="15" font-weight="900" letter-spacing="2">${isZh ? "本期閱讀索引" : "READING INDEX"}</text>
  ${sections.map((section, index) => `<text x="806" y="${318 + index * 27}" fill="#4f4032" font-family="'Noto Sans TC', Arial, sans-serif" font-size="15" font-weight="800">${String(index + 1).padStart(2, "0")} · ${escapeXml(section.slice(0, isZh ? 15 : 31))}</text>`).join("")}
  <line x1="806" y1="430" x2="1082" y2="430" stroke="#d6c39f" stroke-width="1"/>
  <text x="806" y="451" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="700">${isZh ? "Evidence-led · Official-source aware · Updated briefing" : "Evidence-led · Official-source aware · Updated briefing"}</text>
  <rect x="78" y="470" width="640" height="58" fill="#fff7e8" stroke="#dec9a4" stroke-width="1"/>
  ${summaryLines.map((line, index) => `<text x="100" y="${493 + index * 25}" fill="#5d4d3c" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="16" font-weight="600">${escapeXml(line)}</text>`).join("")}
  ${topicTags.map((tag, index) => `<rect x="${78 + index * (isZh ? 100 : 104)}" y="540" width="${isZh ? 88 : 92}" height="30" fill="#1a1410"/><text x="${122 + index * (isZh ? 100 : 104)}" y="560" text-anchor="middle" fill="#e8b84b" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="900">${escapeXml(tag)}</text>`).join("")}
  <text x="506" y="560" fill="#5d4d3c" font-family="'Noto Sans TC', Arial, sans-serif" font-size="18" font-weight="900">${isZh ? "海外督導 OTC · 留學導報文章" : "Overseas Tutorial Centre · Study Review Article"}</text>
  <text x="78" y="589" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14">Overseas Tutorial Centre Ltd · OTC Study Hub · office@overseasuk.com · WhatsApp +44 7947 991572</text>
  <g opacity="0.9">
    <rect x="820" y="486" width="86" height="86" fill="#fffaf2" stroke="#d6c39f" stroke-width="1"/>
    <rect x="832" y="498" width="12" height="12" fill="#1a1410"/><rect x="856" y="498" width="12" height="12" fill="#b5272d"/><rect x="880" y="498" width="12" height="12" fill="#1a1410"/>
    <rect x="832" y="522" width="12" height="12" fill="#c8952a"/><rect x="856" y="522" width="12" height="12" fill="#1a1410"/><rect x="880" y="522" width="12" height="12" fill="#b5272d"/>
    <rect x="832" y="546" width="12" height="12" fill="#1a1410"/><rect x="856" y="546" width="12" height="12" fill="#c8952a"/><rect x="880" y="546" width="12" height="12" fill="#1a1410"/>
  </g>
  <rect x="944" y="490" width="176" height="86" fill="#fff7e8" stroke="#d6c39f" stroke-width="2"/>
  <text x="1032" y="517" text-anchor="middle" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14" font-weight="900" letter-spacing="2">${isZh ? "版面" : "SECTION"}</text>
  <text x="1032" y="544" text-anchor="middle" fill="#1a1410" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="${isZh ? 23 : 18}" font-weight="900">${isZh ? "留學導報" : "Study Review"}</text>
  <text x="1032" y="565" text-anchor="middle" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="800">${isZh ? "OTC Study Hub" : "OTC Study Hub"}</text>
</svg>`;
  fs.writeFileSync(outPath, svg);
  try {
    execFileSync(
      process.execPath,
      [
        "-e",
        "const sharp=require('sharp'); const [src,dst]=process.argv.slice(1); sharp(src).png().toFile(dst).catch((error)=>{ console.error(error); process.exit(1); });",
        outPath,
        pngOutPath
      ],
      { cwd: root, stdio: "pipe" }
    );
  } catch (error) {
    console.warn(`Could not render social PNG for ${article.slug}: ${error.message}`);
  }
  return imagePath;
}

const insightsArticles = [
  {
    slug: "taiwan-travelogue-multidimensional-literary-politics",
    title: "《臺灣漫遊錄》的多維文學政治意義：獲獎之後",
    date: "2026-05-24",
    category: "Academic Culture",
    column: "culture",
    kicker: "文學評論 · 台灣文學",
    author: "蕭珩",
    academic: true,
    publicationCode: "留學導報學術文化欄 · OSR-CULTURE-20260524-01",
    rightsNotice: "作者蕭珩版權所有。本文由《留學導報》全文刊登，未經作者及刊載方書面許可，不得轉載、摘編、改寫或作商業使用。",
    summary: "A long-form academic culture review of Shuangzi Yang's Taiwan Travelogue, reading the novel's pseudo-translation device, food writing, postcolonial politics, public-sphere effects and feminist literary significance.",
    titleZh: "《臺灣漫遊錄》的多維文學政治意義：獲獎之後",
    summaryZh: "本文從文學史、政治學、社會學、殖民與後殖民理論、公共領域理論及女性主義文學批評六個維度，分析楊双子《臺灣漫遊錄》的偽譯策略、國際獲獎現象與台灣文學的世界位置。",
    sidebarCards: [
      ["Pseudo-translation", "偽譯", "以不存在的日文原著與譯者注構成後設敘事裝置。", "form"],
      ["Contact zone", "接觸地帶", "旅行、美食與殖民凝視交錯的權力場域。", "postcolonial"],
      ["Counterpublic", "對抗性公共領域", "台灣文化主體性在世界文學場域中的發聲。", "public"],
      ["Yuri history", "百合歷史小說", "女性情感、殖民秩序與階級位置的交織書寫。", "gender"]
    ],
    relatedReadings: [
      "taiwan-travelogue-pseudo-translation-comparative-literature"
    ],
    body: [
      {
        heading: "Abstract",
        paragraphs: [
          "This Chinese long-form article examines Shuangzi Yang's Taiwan Travelogue through literary history, political theory, sociology, postcolonial theory, public-sphere theory and feminist criticism. The English page preserves the editorial abstract; the full Chinese article is published in the Chinese Overseas Study Review."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "摘要",
        paragraphs: [
          "楊双子（楊若慈與已故妹妹楊若暉之共同筆名）於2020年出版的歷史小說《臺灣漫遊錄》（Taiwan Travelogue），以其獨特的「偽譯作」敘事裝置、精密的後設結構及豐富的後殖民內涵，在台灣及國際文壇引發廣泛迴響。小說先後榮獲金鼎獎文學圖書獎（2021）、日本翻譯大賞（2024）、美國國家圖書獎翻譯文學獎（2024）及國際布克獎（2026），成為首部獲此殊榮的華文原著小說，具有里程碑意義。本文從文學史、政治學、社會學、殖民與後殖民理論、哈伯瑪斯式公共領域理論及女性主義文學批評六個維度，對該小說的獲獎現象與大眾接受進行系統性分析，以呈現其多層次的文學與社會意義。"
        ]
      },
      {
        heading: "偽譯、鐵道與問題意識",
        paragraphs: [
          "《臺灣漫遊錄》採取一種刻意的後設敘事裝置：假托1930年代日本女作家「青山千鶴子」留有原著、楊双子負責「翻譯並注釋」，藉此建構一段發生於1938年的台灣縱貫鐵道旅行故事。日本女作家青山千鶴子與台灣本島通譯王千鶴，在近三個月的旅途中品嚐台灣各地料理，逐漸發展出一段跨越殖民鴻溝、游移於友誼與情慾之間的幽微情誼。",
          "全書以十二道台灣菜餚為章節結構，融合旅行書寫、美食志、百合（yuri）情感及後設虛構技法，並設置多時間層（1938、1954、1970、1990、2020），使讀者在閱讀過程中同時參與歷史建構的反思。",
          "1938年這一時間點具有高度歷史壓力。1895年《馬關條約》後，台灣進入日本殖民統治；至1937年中日戰爭爆發後，台灣總督府推動更強烈的皇民化與戰時動員。小說表面上寫一趟美食鐵道旅行，實則把旅行的自由、飲食的歡愉與戰爭帝國的制度壓迫放在同一個歷史平面上閱讀。",
          "鐵道在小說中承擔的也遠超交通功能。日治時期台灣西部縱貫線於1908年前後完成，讓殖民地的移動、調查、行政控制、物資流通與觀光凝視彼此連結。青山千鶴子的旅行之所以可能，正是因為殖民現代性已經把台灣改造成可被路線化、分類化、記錄化的空間；王千鶴的通譯位置，則揭示這套現代性必須依賴被殖民者的語言勞動才能運作。",
          "這一形式選擇帶有深刻的認識論壓力，遠超文學遊戲。「偽譯」作為一種文體策略，同時指涉語言翻譯（日文↔中文）、歷史記憶的轉譯（殖民檔案↔當代重述）、以及身份認同的協商（殖民者凝視↔被殖民者主體性）。三重「翻譯」結構的交疊，賦予小說豐富的闡釋空間，也解釋了為何它能在不同語境、不同讀者群中引發持續且深入的回響。"
        ]
      },
      {
        heading: "台灣文學的裂縫與形式反擊",
        paragraphs: [
          "台灣文學長期處於多重殖民敘事的夾縫之中。荷蘭、明鄭、清帝國、日本帝國、中華民國國民政府的相繼統治，造成語言政策的反覆翻轉與文學傳承的制度性斷裂（陳芳明，《台灣新文學史》，2011，頁3–28）。在此歷史語境下，書寫台灣常面臨雙重困境：語言媒介的合法性危機，以及歷史敘事被更強大的「中心」收編的焦慮。",
          "楊双子以「偽譯」回應這個老困境，最有力之處，在於她避開正面宣告台灣主體的直線道路，先借來日治時期日本文人的台灣遊記外殼，如佐藤春夫的《殖民地之旅》與西川滿的台灣書寫，再讓台灣人的翻譯與注釋慢慢把外殼撬開。",
          "這使小說同時處於「致敬」與「顛覆」的張力之中，既繼承日治時期台灣文學的物質遺跡，又以當代意識重新評估其殖民性（Kleeman，Under an Imperial Sun，2003，頁12–19）。",
          "從敘事技術而言，小說廣泛運用熱奈特（Gérard Genette）的敘事學概念：敘事時距的刻意操控、聚焦位置（focalization）的游移，以及跨層敘事（metalepsis）。青山的第一人稱敘述隨時被「譯者注」打斷，聚焦不斷被外部視角干擾，使讀者同時閱讀「故事」與「閱讀行為本身」。這正呼應 Linda Hutcheon 所稱的「歷史後設小說」（historiographic metafiction）。",
          "這些技法共同建構出一個自我意識高度發達、邀請讀者同時閱讀「故事」與「閱讀行為本身」的複式文本，呼應 Linda Hutcheon 所稱的「歷史後設小說」（historiographic metafiction）——一類同時自我指涉其虛構性、又深度介入歷史再現問題的小說形式（Hutcheon，A Poetics of Postmodernism，1988，頁105–123）。",
          "此處尤其需要區分「偽譯」與一般歷史小說中的「擬真」。一般擬真借史料細節增加可信度；《臺灣漫遊錄》的偽譯則把可信度本身變成問題：誰保存文本？誰有資格翻譯？誰能替誰註釋？誰的聲音被檔案化？小說將一段殖民歷史推向更尖銳的閱讀現場，逼迫讀者檢查「歷史如何被製成可讀文本」。",
          "書中注釋早已越出附屬裝飾的位置，成為敘事權力的舞台。當譯者注打斷青山的日記，讀者被迫在日本女作家的敘述慾望、台灣譯者的當代批判，以及王千鶴的沉默之間移動。台灣文學長期承受的語言斷裂與史料斷裂，就這樣被轉成一種可被世界文學讀懂的形式。",
          "國際評審對此高度評價。國際布克獎評審讚譽該書「呈現後設小說結構的同時，對語言細微差異保有罕見的敏銳度」，認為其形式創新本身即是對殖民歷史的評論。這一評價確認了台灣文學在全球文學場域中的自主位置：它以特殊的歷史經驗與形式探索進入世界文學對話，不再被迫依附於「中文文學」或「亞洲文學」的大框。"
        ]
      },
      {
        heading: "身份政治與柔性抵抗",
        paragraphs: [
          "小說的時間背景（1938年）並非隨意選擇。彼時皇民化運動甫告展開，強制推廣日語、抑制台灣本土認同；中日戰爭全面爆發，台灣被迫捲入帝國的戰時動員體制（葉石濤，《台灣文學史綱》，1987，頁78–95）。王千鶴以通譯身份周旋於日語與台語之間，其身份的流動性本身即是殖民現代性造就的生存策略。",
          "青山與王千鶴的關係，是小說最冷的一道政治傷口。青山可以善意，可以溫柔，但她的帝國位置不會因此消失。她能夠自由出入殖民地空間，以「客觀」視角記錄台灣的現代化成就；而這種現代化，在帝國敘事裡本來就被寫成日本的文明贈禮。",
          "小說借王千鶴的沉默與退縮，展示被殖民者在「善意的凝視」面前維持主體性的限度。「內地人與本島人，終究不可能存在平等的友誼。」這句話的冷，來自一種政治現實主義：它準確指出殖民關係的傷口，也呼應愛德華·薩依德（Edward Said）對東方主義的批判——凝視本身即是一種知識／權力的運作（Said，Orientalism，1978，頁3–28）。",
          "1938年的政治性還在於它位於「殖民現代化」與「總力戰」之間。若說殖民政府以鐵道、學校、公共衛生、博覽會與觀光書寫來展示治理成果，那麼戰時皇民化則進一步要求被殖民者在語言、姓名、宗教、兵役與情感認同上向帝國中心靠攏。王千鶴的通譯身份因此帶著制度裂痕：她受制度壓迫，又被制度需要。",
          "小說的政治敏銳，正在於它拒絕把人寫扁。青山的溫柔是真的，帝國身份也是真的；王千鶴的沉默是真的，她的能動性也沒有消失。政治壓迫從暴力場面延伸到餐桌、車廂、旅館、翻譯、禮貌與猶豫裡，一點點滲出來。",
          "在當代地緣政治語境下，小說的接受無可避免地與台灣主權議題交纏。英文譯者林慕蓮（Lin King）在多個場合表示，她主動選擇只翻譯台灣作品，明確指出此選擇帶有政治立場：使台灣的文化生產在英語世界的公共討論中獲得可見性，本身即是對「台灣是否具有獨立文化主體性」這一問題的實踐性回答。西方文學獎的肯定，因此具有超越文學評價的政治意涵——它在符號層面承認台灣作為一個具有獨立文化生命的政治實體（Casanova，The World Republic of Letters，2004，頁127–167）。",
          "小說的政治敘事避開簡單的反殖民控訴，藉由「美食旅行」的輕盈形式，將政治議題嵌入日常感官體驗的敘述之中。這種「柔性抵抗」策略——以歡愉包裹批判，以情感帶動反思——使政治訊息能夠繞過讀者的防衛心理，造成更深層的觸動，也大幅擴展了潛在讀者群，不限於具有政治意識的閱讀者。"
        ]
      },
      {
        heading: "餐桌上的日常政治",
        paragraphs: [
          "米歇爾·德·塞托（Michel de Certeau）在《日常生活實踐》中指出，日常生活中的消費行為，包括飲食、行走、閱讀，是弱勢群體對強勢結構進行戰術性挪用的場域。《臺灣漫遊錄》的美食書寫正可在此框架下閱讀：殖民地的菜市場、小吃攤、餐廳，是台灣庶民日常生活最密集的集中地，也是殖民現代性的物質遺跡與本土民俗記憶最複雜地交疊之處。",
          "小說選取的十二道菜餚，各有其社會學意涵。麻薏湯以平民化的粗糲，抵抗著「帝國廚房」對台灣飲食的異國情調化；菜尾湯以「再生」的料理邏輯（將宴席剩菜熬煮為新菜），隱喻台灣社會對多元族群成分的整合能力；蜜豆冰的酸甜尾韻，則為全書的情感基調定調——無法完全言明、游移於失落與滿足之間的情感狀態，亦是殖民關係中人際情誼的最佳隱喻。",
          "食物在此承載文化身份，也把社會結構刻進身體經驗：誰能吃什麼、在哪裡吃、與誰共食，皆透露出殖民秩序下的階級、族群與性別位置（Appadurai，1988，頁3–24；Mintz，Sweetness and Power，1985，頁151–186）。",
          "王千鶴的家庭背景（妾室之女）引入了階級分析的維度。她同時承受殖民壓迫與父權壓迫，卻也因此養成對複雜人情世故的高度敏感與靈活的身份轉換能力。布迪厄的「慣習」（habitus）概念在此具有解釋力：王千鶴在多重位置之間的游移，是長期在結構性不平等中求存所形成的身體化傾向。",
          "她的通譯職業本身，即是在語言不平等中尋求能動性的一種策略。",
          "飲食書寫還具有檔案補償作用。殖民官方檔案往往記錄產量、稅收、交通、衛生與行政分類，卻難以保存庶民如何在日常生活中感受殖民現代性。楊双子以味覺、口感、菜名、店鋪與共食場景重建生活世界，使那些不易進入國家檔案的身體經驗獲得敘事位置。",
          "這種寫法也避免把「台灣」抽象化為政治口號。小說中的台灣由地方飲食、階級習慣、家庭制度、語言轉換、鐵路節點與城市鄉鎮差異共同構成，是一個具體的生活共同體。食物既能被殖民觀光消費，也能成為本土記憶抵抗被單向命名的方式。",
          "對國際讀者而言，這種多層次的社會複雜性提供了重要的認識論禮物：台灣脫離被動受害的「殖民地」扁平形象，呈現出自身的內部分層、幽默感、情感生命與主體能動性。"
        ]
      },
      {
        heading: "凝視、混雜與接觸地帶",
        paragraphs: [
          "霍米·巴巴（Homi K. Bhabha）在《文化的定位》中提出「混雜性」（hybridity）與「第三空間」（the Third Space）的概念，用以描述殖民話語在接觸地帶產生的意義滑移。《臺灣漫遊錄》的翻譯裝置，正是對這一理論最精緻的文學示範。",
          "巴巴的框架若與瑪麗·路易斯·普拉特（Mary Louise Pratt）的「接觸地帶」（contact zone）概念並置，旅行書寫的政治性會變得更清楚。普拉特在《帝國之眼》中指出，旅行書寫是殖民者確立「反征服」（anti-conquest）姿態的核心文類：殖民者藉由無害的「觀察」與「記錄」，在道德上為帝國擴張開脫。",
          "青山千鶴子的旅行日記，正是這一「反征服」姿態的文學體現。她以女性的溫柔凝視取代粗暴的政治宰制，卻在無意間複製了帝國知識／權力的結構。《臺灣漫遊錄》藉由「譯者注」的不斷介入，系統性地拆解這一敘事的意識形態操作。",
          "「偽譯」結構在形式上實踐了後殖民批評的核心洞見：原文（日文帝國凝視）與譯文（台灣本土重述）之間的落差，來自政治闡釋的必然分歧，並非語言等值的失敗。加亞特里·斯皮瓦克（Gayatri Chakravorty Spivak）在《翻譯的政治》中提醒我們，翻譯沒有中性的語言轉換位置，它帶著詮釋行為中的「倫理暴力」（ethical violence）（Spivak，1993，頁179–200）；楊双子的「偽譯」把這一「倫理暴力」曝光，並在文學形式內部加以逆轉。",
          "在普拉特的意義上，青山的旅行屬於帝國知識體制中的「可愛版本」：她不以軍人、官吏或學者身份出場，而以女性作家、食客與旅人身份進入台灣。正因為她看似柔和，讀者更容易看見殖民權力如何從命令與暴力延伸到命名、品評、採集、描述與出版之中。",
          "巴巴的「混雜性」也不應被誤讀為和諧融合。小說中的混雜源於不對等權力中的語言滑移、身份表演與情感誤認，距離台日文化的平等交會很遠。王千鶴既能使用殖民者語言，也能在翻譯中保留不透明之處；她的能動性正存在於無法完全被青山理解、也無法完全被譯者注捕捉的縫隙裡。",
          "食物在後殖民意義上完成了從「異國奇觀」（exotic spectacle）到「理解媒介」的轉化：青山最初將台灣食物視為可被消費的他者性符號，逐漸在共食行為中體會食物作為社群記憶與情感聯結載體的意義。這一轉化弧線，正是巴巴所說的「第三空間」的開啟——一個不屬於任何一方的、以協商與接觸為特徵的意義生成場域（Bhabha，1994，頁36–39）。"
        ]
      },
      {
        heading: "文學進入公共領域",
        paragraphs: [
          "哈伯瑪斯談公共領域，重視不同聲音如何在理性溝通中相遇；南希·弗雷澤則把這套理想往回拉，指出主流公共領域常以普遍性之名，把女性、少數族裔與殖民地人民擋在門外。",
          "《臺灣漫遊錄》進入國際獎項與多語閱讀場域後，被看見的遠超一部小說。它像一個台灣文化主體性的對抗性發言，從「中文文學」或「亞洲文學」的大框裡側身出來，要求讀者正面看見台灣自己的歷史位置。",
          "小說出版初期，其「偽譯」裝置曾引起部分讀者的困惑乃至爭議：是否存在「原著欺騙」的倫理問題？歷史虛構的邊界應如何劃定？這些爭議本身即促成一場關於歷史書寫倫理與台灣記憶主權的公共討論。",
          "在跨語言的公共領域層次，多個語言版本的流通（繁體中文、日文、英文及其後的韓文、法文等譯本），使小說成為多語脈絡下的對話節點。不同語言讀者群帶入各自的歷史意識——日本讀者面對自身帝國歷史的鏡像，英語世界讀者在後殖民思潮的語境下閱讀台灣的特殊性，韓國讀者在相似的帝國記憶中找到共鳴——形成跨文化公共對話的複調結構。",
          "2024年美國國家圖書獎翻譯文學獎與2026年國際布克獎，將這部原本高度依賴台灣歷史語境的小說推入更大的世界文學公共場域。這些獎項獎勵的焦點不止於「台灣題材」，也承認台灣殖民經驗、偽譯形式與翻譯倫理本身足以成為世界文學的問題。",
          "這一接受史也讓「翻譯」本身成為公共議題。英文譯本把台灣文本帶入英語世界時，並沒有扮演透明管道；它在獎項、出版社、評論媒體、讀者社群與政治新聞之間重新安排台灣的可見性。換言之，《臺灣漫遊錄》的國際成功，既是文本被翻譯的成功，也是台灣歷史敘事進入全球公共領域的一次制度性事件。",
          "楊双子的得獎感言中明確表示：「文學是在強權面前與他人對話的能力。」這一陳述，既是對小說功能的詮釋，也是對文學之政治性的哈伯瑪斯式信念。"
        ]
      },
      {
        heading: "百合歷史小說與女性主體",
        paragraphs: [
          "楊双子明確標舉「百合歷史小說」的創作路線，將女性之間的情感聯結置於敘事中心，是對台灣歷史小說傳統中以男性為主體、女性為配角的敘事慣例的結構性顛覆。",
          "這一選擇置於台灣女性文學的更長歷史脈絡中，方能見其意義。日治時期《臺灣民報》等媒體雖曾為女性議題提供有限公共空間，但女性書寫在制度上仍受到語言政策與性別規範的雙重限制；戰後國民政府時期，官方文學史更以男性英雄敘事主導歷史小說的典律建構。",
          "小說的女性主義意涵深入性別、殖民與階級的交織壓迫結構，並不停留在「女性中心」的敘事視角上。王千鶴的身份困境同時承受妾室污名的父權壓迫與本島人身份的殖民壓迫；她在婚前短暫的旅行自由，被設計為一段正常秩序暫時懸置的例外狀態。",
          "青山千鶴子與王千鶴之間的情感之所以幽微，既因同性情感在歷史語境中難以命名，也因殖民者與被殖民者之間的權力差異使任何親密都帶有政治陰影。小說拒絕把百合書寫處理成脫離歷史的純情幻想，讓情感本身承受語言、階級、帝國身份與父權婚姻制度的多重壓力。",
          "從這個角度看，王千鶴的「不可完全言說」接近女性主體在殖民父權雙重秩序下的歷史真實，而非敘事缺陷。她的沉默帶著被制度逼出的生存語法：有些話不能說，有些情感不能被命名，有些理解只能在共同吃下一道菜、共同坐過一段車程後短暫出現。",
          "這種結構性的設計，使小說的百合情感越出個人層次的純愛書寫，轉向對壓迫結構的批判性省察，呼應雷·周（Rey Chow）對現代性語境下中國／東亞女性主體性的分析（Chow，Woman and Chinese Modernity，1991，頁3–33）。",
          "從女性主義文學批評的視角，《臺灣漫遊錄》的貢獻在於其「通俗性」的策略選擇：以美食旅行的輕盈形式承載女性情感解放的可能性，使女性主義思想能夠觸及更廣泛的讀者群。這與艾蓮·蕭沃特（Elaine Showalter）所區分的「女性文學」（feminine literature）——以通俗形式潛藏激進內容——傳統相互呼應（Showalter，A Literature of Their Own，1977，頁13–36）。"
        ]
      },
      {
        heading: "獲獎之後的世界位置",
        paragraphs: [
          "回到開頭，為什麼是《臺灣漫遊錄》？答案恐怕不在單一題材，也不在某種容易宣傳的台灣性，而在它能讓形式、歷史、食物、情感、翻譯與政治同時發聲。",
          "在文學史層次，它以後設「偽譯」打破台灣歷史小說的書寫困境，確立台灣文學在全球文學場域中的自主地位；在政治學層次，它提供一套以輕盈包裹批判的「柔性抵抗」敘事；在社會學層次，它以食物與旅行為切入點，呈現殖民社會的複雜日常生活。",
          "在後殖民理論層次，它以「翻譯即政治」的形式實踐，同時回應巴巴的混雜性理論與普拉特的接觸地帶批判；在公共領域層次，它以弗雷澤意義上的「對抗性公共領域」發言，成為跨語言、跨文化對話的節點；在女性主義文學層次，它以通俗形式為女性情感主體性與多元性別想像開拓空間。",
          "《臺灣漫遊錄》成為里程碑，靠的並非替台灣說出一句響亮口號。它把美學創新、後殖民批判、女性情感與文化主體性壓進同一部小說裡。台灣在世界文學中的位置，從被說明、被介紹，轉為由一種複雜形式自己證明出來。"
        ]
      }
    ],
    readingListZh: [
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "陳芳明。《台灣新文學史》。聯經出版，2011。",
      "Kleeman, Faye Yuan. Under an Imperial Sun: Japanese Colonial Literature of Taiwan and the South. U of Hawai'i P, 2003.",
      "Liao, Ping-hui, and David Der-wei Wang, editors. Taiwan under Japanese Colonial Rule, 1895–1945: History, Culture, Memory. Columbia University Press, 2006.",
      "Hutcheon, Linda. A Poetics of Postmodernism: History, Theory, Fiction. Routledge, 1988.",
      "Pratt, Mary Louise. Imperial Eyes: Travel Writing and Transculturation. Routledge, 1992.",
      "Bhabha, Homi K. The Location of Culture. Routledge, 1994.",
      "Said, Edward W. Orientalism. Pantheon Books, 1978.",
      "Fraser, Nancy. “Rethinking the Public Sphere.” Habermas and the Public Sphere, edited by Craig Calhoun, MIT Press, 1992.",
      "Showalter, Elaine. A Literature of Their Own: British Women Novelists from Bronte to Lessing. Princeton UP, 1977.",
      "黃美娥。《重層現代性鏡像：日治時代台灣傳統文人的文化視域與文學想像》。麥田出版，2004。"
    ],
    referencesZh: [
      "Appadurai, Arjun. “How to Make a National Cuisine: Cookbooks in Contemporary India.” Comparative Studies in Society and History, vol. 30, no. 1, 1988, pp. 3–24.",
      "Bhabha, Homi K. The Location of Culture. Routledge, 1994.",
      "Bourdieu, Pierre. Distinction: A Social Critique of the Judgement of Taste. Translated by Richard Nice, Harvard UP, 1984.",
      "Butler, Judith. Gender Trouble: Feminism and the Subversion of Identity. Routledge, 1990.",
      "Casanova, Pascale. The World Republic of Letters. Translated by M. B. DeBevoise, Harvard UP, 2004.",
      "Chow, Rey. Woman and Chinese Modernity: The Politics of Reading between West and East. U of Minnesota P, 1991.",
      "Damrosch, David. What Is World Literature? Princeton UP, 2003.",
      "de Certeau, Michel. The Practice of Everyday Life. Translated by Steven Rendall, U of California P, 1984.",
      "Fraser, Nancy. “Rethinking the Public Sphere.” Habermas and the Public Sphere, edited by Craig Calhoun, MIT Press, 1992, pp. 109–142.",
      "Genette, Gérard. Narrative Discourse: An Essay in Method. Translated by Jane E. Lewin, Cornell UP, 1980.",
      "Habermas, Jürgen. The Structural Transformation of the Public Sphere. Translated by Thomas Burger, MIT Press, 1989.",
      "Hutcheon, Linda. A Poetics of Postmodernism: History, Theory, Fiction. Routledge, 1988.",
      "Kleeman, Faye Yuan. Under an Imperial Sun: Japanese Colonial Literature of Taiwan and the South. U of Hawai'i P, 2003.",
      "Mintz, Sidney W. Sweetness and Power: The Place of Sugar in Modern History. Viking, 1985.",
      "Pratt, Mary Louise. Imperial Eyes: Travel Writing and Transculturation. Routledge, 1992.",
      "Said, Edward W. Orientalism. Pantheon Books, 1978.",
      "Showalter, Elaine. A Literature of Their Own: British Women Novelists from Bronte to Lessing. Princeton UP, 1977.",
      "Spivak, Gayatri Chakravorty. “The Politics of Translation.” Outside in the Teaching Machine, Routledge, 1993, pp. 179–200.",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "Chou, Wan-yao [周婉窈]. The Kominka Movement: Taiwan under Wartime Japan, 1937–1945. Yale University, 1991.",
      "Liao, Ping-hui, and David Der-wei Wang, editors. Taiwan under Japanese Colonial Rule, 1895–1945: History, Culture, Memory. Columbia University Press, 2006.",
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "陳芳明。《台灣新文學史》。聯經出版，2011。",
      "葉石濤。《台灣文學史綱》。文學界雜誌社，1987。",
      "黃美娥。《重層現代性鏡像：日治時代台灣傳統文人的文化視域與文學想像》。麥田出版，2004。",
      "佐藤春夫。《植民地の旅》。改造社，1925。",
      "日本アジア歴史資料センター（JACAR）。〈17 Apr 1895 Peace treaty concluded between Japan and China (Treaty of Shimonoseki)〉。https://www.jacar.go.jp/english/jacarbl-fsjwar-e/main/18950417/index.html",
      "National Book Foundation. “Taiwan Travelogue.” https://www.nationalbook.org/books/taiwan-travelogue/",
      "The Booker Prizes. “Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King, wins the International Booker Prize 2026.” https://thebookerprizes.com/media-centre/press-releases/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-the",
      "中央公論新社。〈『台湾漫遊鉄道のふたり』が第十回日本翻訳大賞を受賞しました〉。https://www.chuko.co.jp/prize/125121.html",
      "文化部英文網站。〈‘Taiwan Travelogue’ receives U.S. National Book Awards for Translated Literature〉。https://www.moc.gov.tw/en/News_Content2.aspx?n=467&s=227389"
    ],
    factCheckNotes: [
      "1895史實核查：日本アジア歴史資料センター（JACAR）日清戰爭檔案頁確認《馬關條約》於1895年4月17日簽訂，台灣割讓由此進入日本殖民統治脈絡。來源：https://www.jacar.go.jp/english/jacarbl-fsjwar-e/main/18950417/index.html",
      "皇民化史實核查：周婉窈 The Kominka Movement: Taiwan under Wartime Japan, 1937–1945 及相關學術資料確認皇民化運動與1937–1945戰時動員脈絡相關。",
      "鐵道史實核查：日治台灣西部縱貫線於1908年前後完成，作為殖民治理、物資流通與現代交通的重要基礎；本文僅採保守表述「1908年前後完成」。",
      "獎項核查：The Booker Prizes 官方新聞稿確認 Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King 獲 International Booker Prize 2026。來源：https://thebookerprizes.com/media-centre/press-releases/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-the",
      "獎項核查：National Book Foundation 官方頁確認 Taiwan Travelogue 為 2024 National Book Award for Translated Literature 得主，譯者為 Lin King，出版社為 Graywolf Press。來源：https://www.nationalbook.org/books/taiwan-travelogue/",
      "獎項核查：中央公論新社公告確認楊双子著、三浦裕子譯《台湾漫遊鉄道のふたり》獲第十回日本翻訳大賞。來源：https://www.chuko.co.jp/prize/125121.html",
      "獎項核查：文化部英文網站確認 Taiwan Travelogue 獲2024 U.S. National Book Awards for Translated Literature。來源：https://www.moc.gov.tw/en/News_Content2.aspx?n=467&s=227389"
    ]
  },
  {
    slug: "taiwan-travelogue-pseudo-translation-comparative-literature",
    title: "Taiwan Travelogue in the Genealogy of Pseudo-Translation",
    date: "2026-05-24",
    category: "Academic Culture",
    column: "culture",
    kicker: "比較文學 · 偽譯譜系",
    author: "蕭珩",
    academic: true,
    publicationCode: "留學導報學術文化欄 · OSR-CULTURE-20260524-02",
    rightsNotice: "作者蕭珩版權所有。本文由《留學導報》全文刊登，未經作者及刊載方書面許可，不得轉載、摘編、改寫或作商業使用。",
    summary: "A comparative-literature essay placing Taiwan Travelogue in a long genealogy of pseudonymous authorship, fictitious translation and historiographic metafiction across Western, Chinese, Japanese and postcolonial literary traditions.",
    titleZh: "《臺灣漫遊錄》：偽譯譜系的台灣節點",
    summaryZh: "本文從奧西恩、博爾赫斯、《紅樓夢》與《源氏物語》一路讀到《臺灣漫遊錄》，追問偽托作者、虛構翻譯與後設歷史書寫如何替被壓低的歷史尋找聲音。",
    sidebarCards: [
      ["Ossian", "奧西恩詩篇", "民族文學建構與虛構翻譯的經典案例。", "west"],
      ["Borges", "博爾赫斯", "假書評、重寫與閱讀語境的後設命題。", "modern"],
      ["Liezi", "《列子》", "中國古典偽托與借古人權威自立的傳統。", "china"],
      ["Fortleben", "後續生命", "班雅明翻譯論中的延展與變形能力。", "translation"]
    ],
    relatedReadings: [
      "taiwan-travelogue-multidimensional-literary-politics"
    ],
    body: [
      {
        heading: "Abstract",
        paragraphs: [
          "This Chinese long-form article places Taiwan Travelogue in a comparative genealogy of pseudo-translation, pseudonymous authorship and historiographic metafiction. The full Chinese article is published in the Chinese Overseas Study Review."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "摘要",
        paragraphs: [
          "《臺灣漫遊錄》的「偽譯作」裝置，遠比一個漂亮的文學花招更尖銳，也很難被收進孤立的台灣創意名目裡。它踩在一條很長、也很危險的書寫傳統上：有人託名古人，有人假稱譯本，有人把不存在的檔案寫得像真的，有人乾脆讓註釋反客為主。本文沿著「偽托作者」（pseudonymous authorship）、「虛構翻譯」（fictitious translation）與「歷史後設小說」（historiographic metafiction）三條線，從奧西恩、梅里美、博爾赫斯、納博科夫，讀到《列子》、《紅樓夢》、《源氏物語》與愛爾蘭、東亞殖民地文學。本文追問的重心，離「誰騙了誰」很遠；真正棘手的是：為什麼有些歷史，非得繞道、假託、翻譯、扮演，才終於能說出口。"
        ]
      },
      {
        heading: "偽譯作為世界文學問題",
        paragraphs: [
          "偽托書寫大致有三種面孔：假借一個作者，假稱一部譯本，或把歷史寫成一座到處露出機關的舞台。Linda Hutcheon 說「歷史後設小說」的迷人處，正在於它明知自己是人工製品，卻因此更能逼近歷史書寫的人工性。",
          "讀《臺灣漫遊錄》，若只說它「形式新穎」，其實太輕了。這部小說把作者、原文、譯者、註釋、史料與讀者的信任全部拆開，重新排在桌面上。當這些零件一件件鬆動，所謂歷史真實便不再像一塊沉默的石頭，而像一份被翻譯、被保存、被刪節、被轉述過無數次的文稿。",
          "偽譯之所以能跨文化流動，靠的正是這種又借信任、又破壞信任的能力。讀者相信古籍，相信譯本，相信旅行記，相信編者序，相信腳註；偽譯便在這些相信之間開一條縫，讓人看見「原文」和「真本」其實也常常只是權威裝作自然的樣子。《臺灣漫遊錄》能被台灣、日本與英語讀者各自讀出不同震動，原因正在這裡：它寫台灣殖民史，也寫世界文學裡那個反覆發作的真實焦慮。",
          "它比 Hutcheon 所說的歷史後設小說又多走了一步。翻譯在這裡失去橋樑或服務的安穩身份；它成了現場，成了權力換手、記憶改寫、身份試探的地方。下面的比較無意替《臺灣漫遊錄》安排一份漂亮祖譜；我更想看清它到底從哪些舊形式裡借火，又在哪裡把火燒回台灣。"
        ]
      },
      {
        heading: "從奧西恩到後設迷宮",
        paragraphs: [
          "2.1 古典與中世紀的偽托傳統。偽托早在現代小說誕生前就已存在。它藏在古典、宗教與中世紀文獻秩序裡。荷馬到底是誰，這個問題吵了兩千多年；《聖經》與早期基督教文獻中的偽名書寫，也一直牽動權威、傳承與正典形成。",
          "西方文學的偽托傳統可追溯至古典時代。荷馬史詩的「作者問題」本身即是一場延續兩千餘年的偽托爭議；《聖經》中的部分文本亦被現代聖經學者視為偽托文書。這種早期偽托的動機，主要是借權威以自立：真實作者隱身於假托的前人名義之後，以迴避風險或強化說服力。",
          "古典與中世紀的偽托，很難直接套入今天對「欺騙」的道德判決。那時作者權尚未成為出版制度的中心，以聖賢、先知、古代詩人或遠方旅行者之名發言，常常是文本進入知識秩序的通行證。這套邏輯進入現代後沒有消失，只是變得更狡黠，也更文學化。",
          "2.2 十八世紀：偽托作為諷刺與啟蒙武器。到了啟蒙時代，假託開始帶刺。虛構旅行者、外來者書信、遠方見聞，讓讀者隔著一雙陌生的眼睛看自己，看見平日被習慣遮住的荒謬。",
          "啟蒙時代的偽托傳統賦予這一策略全新的政治銳度。斯威夫特以「萊繆爾·格列佛船長」之名出版《格列佛遊記》，製造具有高度說服力的虛構旅行者，以第一手報告揭露英國社會的荒謬。孟德斯鳩的《波斯人信札》則虛構兩位波斯旅人記錄巴黎觀察，以外來者視角使法國讀者重新審視本國社會習俗。",
          "旅行書寫從來不清白。它借航海、帝國、殖民與跨文化見聞取得可信度，又能回頭刺穿帝國中心的自信。斯威夫特、孟德斯鳩與《臺灣漫遊錄》隔著時代相望，靠的正是這種遠親關係：旅行記好讀，於是也最適合偷渡批判。",
          "詹姆斯·麥克弗森的「奧西恩詩篇」案例最直接觸及虛構翻譯的核心問題。麥克弗森宣稱發現並翻譯古代蓋爾語吟遊詩人奧西恩的史詩，引發全歐洲轟動；「原著」卻始終沒有現身。這一事件既是文學史上的偽造醜聞，也是一個關於民族文學建構、翻譯倫理與文化真實性的深刻寓言。",
          "奧西恩最有意思的地方，不止在於麥克弗森究竟造沒造假，更在於十八世紀歐洲為何那麼想相信他。蘇格蘭被英格蘭吸納之後，一位古老吟遊詩人的突然現身，等於替被壓縮的民族文化補上一段深遠的過去。偽譯在這裡帶著傷口，近乎一種文化補償。",
          "2.3 十九世紀：歷史小說、性別偽裝與偽文獻的成熟。瓦爾特·司各特確立現代歷史小說範式時，已大量使用序言、編者、史料、腳注與題詞等準文獻裝置，使小說像史書一樣可被查考，又使歷史本身顯出敘事性。",
          "十九世紀歷史小說進一步成熟化偽文獻裝置。瓦爾特·司各特在多部作品中以虛構編者、腳注與史料來源強化歷史真實感；梅里美則虛構西班牙女劇作家克拉拉·加蘇爾，以「翻譯者」身份出版自己的戲劇。此處的翻譯兼具文學策略、性別偽裝與話語挪用。",
          "梅里美與《臺灣漫遊錄》可以放在同一張桌上讀。他造出的遠超另一個筆名：那是一位有性別、有國籍、有肖像、有文風的西班牙女劇作家，自己則退到「翻譯者」的位置。青山千鶴子也是這種機制的後殖民版本：一個被造出來的他者之聲，反過來讓真正的作者靠近本來難以抵達的位置。",
          "同時代女性作家的筆名策略，如喬治·桑與勃朗特三姊妹以男性化筆名進入文學公共領域，也說明作者名從來超出署名功能，常常是進入制度、評論與市場的門票。被排除者借用可被承認的名字發言，與被殖民者借殖民語言、殖民文類或虛構殖民者之口發言，在結構上具有可比性。",
          "2.4 二十世紀的後設激進化：博爾赫斯、納博科夫、卡爾維諾。進入二十世紀後，偽托從增加可信度的技巧轉入哲學性與形式性的核心地帶：文本為何可信，讀者如何相信，注釋如何取得權力，翻譯如何改寫原文，皆成為小說本身的題目。",
          "二十世紀文學對偽托與虛構翻譯傳統的激進化，以博爾赫斯、納博科夫與卡爾維諾最具代表性。博爾赫斯的《皮埃爾·梅納爾，〈唐吉訶德〉的作者》揭示意義不在文字本身，而在歷史語境、讀者位置與閱讀行為之中；納博科夫《微暗的火》使注釋吞噬原文；卡爾維諾《如果在冬夜，一個旅人》則以不斷中斷的翻譯文本構成一部關於閱讀本身的小說。",
          "博爾赫斯把偽書、假文獻與虛構學術評論推到哲學邊上：同一段文字到了不同時代，便不再是同一段文字。納博科夫更狠，他讓註釋者幾乎吃掉原文，逼讀者承認詮釋帶著伸手奪權的慾望，遠非溫順服務。《臺灣漫遊錄》的譯者注也如此。它讓權力關係突然現形，絕非旁枝或裝飾。",
          "卡爾維諾把翻譯、閱讀與不完整性鎖進同一台敘事機器。讀者一次次進入開端，又一次次被中斷；閱讀變成追一部缺席文本。《臺灣漫遊錄》的多重時間層也在說同一件事：後來者只能在殘缺、重述與翻譯之間接近歷史，沒有誰能回到一個乾淨透明的原初現場。",
          "2.5 費爾南多·佩索阿的極端案例：異名書寫與主體的解構。佩索阿的異名遠超普通筆名，它是一組具有完整傳記、風格、思想與相互評論關係的虛構作者系統。這使「作者」從單一自我變成多聲部的集合，也使現代主體的分裂直接成為文學形式。",
          "佩索阿把偽托推到近乎眩暈的程度。他創造大量具有傳記、個性與文體的虛構作者，讓他們彼此評論、彼此牴牾。作者這個位置從穩定的「我」裂成一屋子互不讓步的聲音。這種分裂感，放到後殖民語境裡讀，並不陌生。"
        ]
      },
      {
        heading: "古籍、物語與殖民記憶",
        paragraphs: [
          "3.1 中國古典文學的偽托傳統。中國文學與思想史中的偽托，常常與經典權威、學派傳承和史學正統緊密相連。文本託名古人，目的不止於隱藏作者，也在於取得進入古典知識秩序的資格。",
          "中國文學史上的偽托傳統同樣源遠流長。《列子》問題是最具代表性的案例：該書長期被視為戰國列禦寇所著，卻在魏晉時代突然大量流傳。多數現代學者，如楊伯峻，認定現存《列子》為魏晉偽作，藉先秦聖賢之名為道家玄學思想賦予古典合法性。",
          "中國古典偽托傳統與西方偽托不同之處，在於它常與經學、子學、史學的權威結構相連。文本若能託名於古人，即可取得古典秩序中的發言資格；而後世學者對真偽的辨析，也往往同時是對思想譜系、學派權威與政治合法性的重新排序。",
          "《紅樓夢》的作者問題提供了更複雜的後設框架。小說開篇設置「空空道人」發現頑石故事、「東魯孔梅溪」題書名、「曹雪芹」批閱增刪等多重中介，使作者被分裂為多個層次的虛構節點。這種主動降格與虛實混淆，既是迴避政治審查的修辭盾牌，也是一種後設宣告。",
          "《紅樓夢》高明就高明在，它不急著讓讀者相信故事是真的；它讓讀者在「真假有無」之間反覆失足。小說開篇便拆自己的台，卻因此摸到正史摸不到的東西：情感、家族、慾望、制度，還有那些不能被正經寫進史書的疼痛。",
          "蒲松齡《聊齋志異》以「異史氏曰」的史家評論姿態，為鬼怪故事注入正史書寫的話語形式；魯迅《故事新編》則以現代白話重述先秦神話與歷史故事，在重述中插入現代意識的批判眼光。二者都以形式的古典性與意識的當代性之間的張力，製造批判的槓桿。",
          "3.2 日本文學的物語傳統與後設書寫。日本古典文學中的後設辯護，並非等到近代才出現。《源氏物語》已在文本內部提出虛構與正史的關係問題，並以物語能捕捉人情真實為虛構辯護。",
          "日本文學傳統中，《源氏物語》「螢」帖（第25帖）的物語論框架尤為重要。紫式部借光源氏之口為物語辯護：物語雖為虛構，卻比正史更能呈現人情的真實。這一「以虛構辯護虛構」的後設策略，在日本文學史上確立了物語作為知識形式的合法性。",
          "「螢」帖早早說出一個後來小說反覆證明的道理：虛構未必比正史更假；有些人情，正史根本裝不下。《臺灣漫遊錄》用旅行日記、譯者注和出版框架重構殖民地女性情感生命，正是沿著這條路往前走。",
          "江戶時代讀本文學進一步發展了偽文獻與史料化裝置。曲亭馬琴《南總里見八犬傳》大量運用歷史文獻、家譜、傳聞與考證姿態，讓虛構敘事取得近似史傳的厚度。這一文獻癖好與歐洲司各特式歷史小說雖未必存在直接影響，卻顯示東西方在歷史小說成熟時都會借助「像史料一樣的小說」來建立可信度。",
          "3.3 殖民語境中的偽托：愛爾蘭民族文藝復興的啟示。殖民地文學中的偽托與重述，往往與民族文學的自我建構相連。當殖民權力切斷或貶低本土記憶時，重述古老神話、民間故事或失落文獻，便成為重建文化連續性的方式。",
          "殖民語境中的偽托書寫，在愛爾蘭文學中有重要先例。葉慈與格雷戈里夫人在愛爾蘭民族文藝復興運動中大量重述凱爾特神話與民間故事，其真實性宣稱本身即是一種文化政治聲明。台灣在日治與戰後去日本化之間遭遇雙重記憶斷裂，《臺灣漫遊錄》以偽譯填補空白的姿態，與愛爾蘭案例在文化政治邏輯上高度呼應。",
          "殖民地或半殖民地文學常面臨一個共同困境：被殖民者的歷史記憶並非完全消失，它以破碎、失語、被翻譯、被檔案化或被敵對政權重寫的方式存在。偽托、重述與虛構翻譯之所以反覆出現，正因為它們能把斷裂的史料重新組織成可感的敘事，使被壓制的共同體獲得文化深度。",
          "所以，《臺灣漫遊錄》的偽譯不能被粗暴地打成「造假」。殖民地記憶最棘手之處，常常在於事實碎得無法自己長成一個主體。偽譯很危險，當然危險；可它也有力量。它承認歷史已經破了，仍然替被壓低的聲音搭一個能被聽見的台。",
          "3.4 韓江與東亞後殖民文學的當代匯流。若把《臺灣漫遊錄》放入21世紀東亞文學英譯與國際獎項的脈絡，韓江《少年來了》是一個重要參照。兩者題材不同，卻都以女性書寫、多聲部結構、歷史創傷與翻譯傳播進入英語世界公共討論。",
          "放到更近的東亞文學現場，韓江《少年來了》是一面冷鏡。它以多聲部敘事處理光州事件的歷史創傷，又經由英文譯本進入國際讀者視野。韓江與楊双子不必被硬湊成同一類作家；但兩人的國際接受，確實讓人看見一條新的文學路線：女性書寫、歷史創傷、非線性敘事與翻譯倫理，正在英語世界獎項場域中彼此靠近。"
        ]
      },
      {
        heading: "偽托的詩學",
        paragraphs: [
          "若把上述文本一一攤開，最先浮出的其實是文學對真實的反咬。偽托書寫明明戴著假面，卻最擅長反問那些自稱真實的文本：你們的真實從何而來？誰替你們蓋章？誰被你們排除在檔案之外？麥克弗森的奧西恩、博爾赫斯的假書評、梅里美的克拉拉·加蘇爾，都在被看穿的一瞬間，把真實本身拖到燈下。這裡無意替造假辯護；真正要指出的是，真實從來也有自己的修辭、制度和舞台。",
          "翻譯在這裡早已越出語言服務的範圍。它更像一個權力交換的房間：有人把原文交出來，有人替它改換聲帶，有人替它標註年代、來源與可信度。班雅明談 Fortleben，說翻譯讓原文獲得後續生命；《臺灣漫遊錄》卻把這句話推到幾乎反諷的位置。青山千鶴子的原文從未存在，卻在楊双子的「譯本」中活得異常具體。這個不存在的原文，比許多存在的檔案更能逼近台灣殖民經驗的神經末梢。",
          "由此看，所謂原初性少了幾分神聖。原文、真本、古本、第一手材料，當然重要；但文學史一次次告訴我們，原初性也可能是權威戴得最久的一張面具。偽譯的冒犯性，正在於它不肯跪在原文面前。它承認來源可疑、傳承斷裂、聲音混雜，卻也正因如此，能把被正統文獻排斥的經驗帶回閱讀現場。",
          "這些文本總是靠近沉默。蘇格蘭需要奧西恩，是因為民族過去被壓縮成一種可疑的缺席；愛爾蘭重述凱爾特神話，是因為殖民秩序奪走了文化連續性的敘述權；《臺灣漫遊錄》虛構青山千鶴子與王千鶴，是因為日治時期台灣女性的情感生活、翻譯勞動與日常傷痕，本來就不容易在官方檔案中留下完整聲音。偽托像沉默被迫學會的另一種發音。",
          "作者也因此失去安穩姓名的外觀。偽托文本常把作者拆成多人：實際作者、虛構作者、譯者、編者、註釋者、讀者，彼此推拉，彼此搶奪最後一句話。《臺灣漫遊錄》尤其如此。楊双子本就是共同筆名，青山千鶴子又作為虛構原作者登場，譯者注插入當代台灣視角，英文譯者林慕蓮再把整套裝置推入英語世界。這種作者位置的複數化，正是台灣多語歷史在形式上的顯影。",
          "所以形式在這裡絕非外衣。偽托文本真正動人的地方，往往在於它為什麼非得繞到假託、譯本、註釋、殘卷、編者序裡去說。形式本身已經在思想，在辯論，在抵抗。《臺灣漫遊錄》最值得被放入世界文學譜系之處，也正在這裡：它借台灣的歷史裂縫，重新改寫後設框架的重量與方向。"
        ]
      },
      {
        heading: "邊緣重寫世界文學",
        paragraphs: [
          "從比較文學回頭看，偽托與虛構翻譯從來都在文學史的要害處。它們一再出現在那些身份被壓迫、記憶被切斷、聲音被攔截的地方。",
          "從奧西恩到梅里美，從博爾赫斯到納博科夫，從蒲松齡到《紅樓夢》，從葉慈到韓江，這些文本在各自的文化語境中均代表著對「誰有權書寫歷史」、「誰的聲音得以被聽見」這一根本問題的形式性回答。",
          "《臺灣漫遊錄》厲害的地方，在於它沒有把這套古老策略照搬過來；它把偽譯放進台灣後殖民歷史的裂縫裡重新點燃。它當然是台灣文學的里程碑；但若只把它放回台灣文學內部，又會低估它對世界文學形式史的挑釁。",
          "世界文學可以越出中心語言收編邊緣文本的舊路。它也可以反過來：由一段邊緣歷史，重新解釋那些早被中心文學史說熟了的形式。當《臺灣漫遊錄》被放在奧西恩、博爾赫斯、納博科夫、《紅樓夢》與《源氏物語》之間，台灣已經越過被比較的位置；它成了比較文學重新出發的地方。",
          "國際布克獎評審讀到的那種「普遍性」，來自形式深處的共振，而非抽空歷史後的普遍：不同語言、不同殖民記憶、不同文學傳統，最後都碰到同一個難題——有時候，人必須繞一個彎，甚至必須說一個精心安排的謊，才說得出真相。"
        ]
      }
    ],
    readingListZh: [
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "Hutcheon, Linda. A Poetics of Postmodernism: History, Theory, Fiction. Routledge, 1988.",
      "Grafton, Anthony. Forgers and Critics: Creativity and Duplicity in Western Scholarship. Princeton UP, 1990.",
      "Ruthven, K. K. Faking Literature. Cambridge UP, 2001.",
      "Stewart, Susan. Crimes of Writing: Problems in the Containment of Representation. Oxford UP, 1991.",
      "Benjamin, Walter. “The Task of the Translator.” Illuminations, edited by Hannah Arendt, Schocken Books, 1968.",
      "Borges, Jorge Luis. “Pierre Menard, Author of the Quixote.” Ficciones, translated by Andrew Hurley, Penguin, 1998.",
      "Nabokov, Vladimir. Pale Fire. Putnam, 1962.",
      "Calvino, Italo. If on a Winter's Night a Traveler. Translated by William Weaver, Harcourt, 1981.",
      "Murasaki Shikibu [紫式部]. The Tale of Genji. Translated by Royall Tyler, Penguin, 2003.",
      "楊伯峻。《列子集釋》。中華書局，1979。"
    ],
    referencesZh: [
      "Anderson, Benedict. Imagined Communities: Reflections on the Origin and Spread of Nationalism. Verso, 1983.",
      "Benjamin, Walter. “The Task of the Translator.” Translated by Harry Zohn. Illuminations, edited by Hannah Arendt, Schocken Books, 1968, pp. 69–82.",
      "Borges, Jorge Luis. “Pierre Menard, Author of the Quixote.” Ficciones, translated by Andrew Hurley, Penguin, 1998, pp. 33–43.",
      "Calvino, Italo. If on a Winter's Night a Traveler. Translated by William Weaver, Harcourt, 1981.",
      "Britannica. “Ossian.” Encyclopaedia Britannica. https://www.britannica.com/topic/Ossian",
      "Britannica. “James Macpherson.” Encyclopaedia Britannica. https://www.britannica.com/biography/James-Macpherson",
      "de Certeau, Michel. The Practice of Everyday Life. Translated by Steven Rendall, U of California P, 1984.",
      "Gaskill, Howard. “Ossian in Europe.” Canadian Review of Comparative Literature, vol. 21, nos. 1–2, 1994, pp. 643–678.",
      "Grafton, Anthony. Forgers and Critics: Creativity and Duplicity in Western Scholarship. Princeton UP, 1990.",
      "Library of Congress. “The poems of Ossian.” https://www.loc.gov/item/33005647/",
      "Han Kang [韓江]. Human Acts. Translated by Deborah Smith, Portobello Books, 2016.",
      "Hutcheon, Linda. A Poetics of Postmodernism: History, Theory, Fiction. Routledge, 1988.",
      "Macpherson, James. The Poems of Ossian and Related Works. Edited by Howard Gaskill, Edinburgh UP, 1996.",
      "Mérimée, Prosper. Theatre de Clara Gazul, suivi de La Famille de Carvajal. Edited by Patrick Berthier, Gallimard, 1985.",
      "Montesquieu, Charles-Louis de Secondat. Persian Letters. Translated by Margaret Mauldon, Oxford UP, 2008.",
      "Moretti, Franco. “Conjectures on World Literature.” New Left Review, vol. 1, 2000, pp. 54–68.",
      "Murasaki Shikibu [紫式部]. The Tale of Genji. Translated by Royall Tyler, Penguin, 2003.",
      "Nabokov, Vladimir. Pale Fire. Putnam, 1962.",
      "National Book Foundation. “Taiwan Travelogue.” https://www.nationalbook.org/books/taiwan-travelogue/",
      "Ruthven, K. K. Faking Literature. Cambridge UP, 2001.",
      "Scott, Walter. Waverley; or, 'Tis Sixty Years Since. Edited by Claire Lamont, Oxford UP, 1986.",
      "Shklovsky, Viktor. “Art as Technique.” Russian Formalist Criticism: Four Essays, translated by Lee T. Lemon and Marion J. Reis, U of Nebraska P, 1965, pp. 3–24.",
      "Spivak, Gayatri Chakravorty. “Can the Subaltern Speak?” Marxism and the Interpretation of Culture, edited by Cary Nelson and Lawrence Grossberg, U of Illinois P, 1988, pp. 271–313.",
      "Stewart, Susan. Crimes of Writing: Problems in the Containment of Representation. Oxford UP, 1991.",
      "The Booker Prizes. “Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King, wins the International Booker Prize 2026.” https://thebookerprizes.com/media-centre/press-releases/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-the",
      "Tymoczko, Maria. Translation in a Postcolonial Context: Early Irish Literature in English Translation. St. Jerome Publishing, 1999.",
      "Venuti, Lawrence. The Translator's Invisibility: A History of Translation. Routledge, 1995.",
      "White, Hayden. Metahistory: The Historical Imagination in Nineteenth-Century Europe. Johns Hopkins UP, 1973.",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "楊伯峻。《列子集釋》。中華書局，1979。",
      "曹雪芹、高鶚。《紅樓夢》。人民文學出版社，2008。",
      "蒲松齡。《聊齋志異》。上海古籍出版社，1986。",
      "魯迅。《故事新編》。收入《魯迅全集》第二卷，人民文學出版社，2005，頁341–504。"
    ],
    factCheckNotes: [
      "奧西恩核查：Britannica 將 Ossian 詩篇與 James Macpherson 1760年代的「發現／翻譯」及後續真偽爭議相連；Library of Congress 亦將相關版本列入 literary forgeries and mystifications 主題。來源：https://www.britannica.com/topic/Ossian；https://www.loc.gov/item/33005647/",
      "《源氏物語》核查：物語辯護論位於「螢」帖（第25帖），而非「蓬生」帖；本文已按此處理。",
      "《列子》核查：現存《列子》真偽與魏晉成書問題依楊伯峻《列子集釋》處理，本文採「多數現代學者認為現存本為魏晉偽作」之保守表述。",
      "班雅明術語核查：《譯者的任務》中 Fortleben / afterlife 脈絡可譯為「後續生命」，本文避免將其簡化為單一 Nachleben。",
      "獎項核查：National Book Foundation 官方頁確認 Taiwan Travelogue 為 2024 National Book Award for Translated Literature 得主，譯者為 Lin King，出版社為 Graywolf Press。來源：https://www.nationalbook.org/books/taiwan-travelogue/",
      "獎項核查：The Booker Prizes 官方新聞稿確認 Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King 獲 International Booker Prize 2026，並確認其原作語言與翻譯者資訊。來源：https://thebookerprizes.com/media-centre/press-releases/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-the"
    ]
  },
  {
    slug: "taiwan-travelogue-critical-collection-methodology",
    title: "From Phenomenon to Major Critical Work: Editing a Taiwan Travelogue Collection",
    date: "2026-05-24",
    category: "Academic Culture",
    column: "culture",
    kicker: "出版策劃 · 批評文集",
    author: "蕭珩",
    academic: true,
    publicationCode: "留學導報學術文化欄 · OSR-CULTURE-20260524-03",
    rightsNotice: "作者蕭珩版權所有。本文由《留學導報》全文刊登，未經作者及刊載方書面許可，不得轉載、摘編、改寫或作商業使用。",
    titleZh: "從現象到巨著：《臺灣漫遊錄》批評文集的編撰策略與方法論框架",
    summary: "A full editorial roadmap for building a major critical collection on Taiwan Travelogue, covering scholarly timing, book architecture, chapter design, fieldwork, publishing strategy and appendices.",
    summaryZh: "一份給研究者與編輯的完整路線圖：如何把《臺灣漫遊錄》的獲獎現象、跨語接受、偽譯形式、台灣文學史位置與世界文學理論，編成一部真正有重力的批評文集。",
    relatedReadings: [
      "taiwan-travelogue-multidimensional-literary-politics",
      "taiwan-travelogue-pseudo-translation-comparative-literature"
    ],
    body: [
      {
        heading: "Editorial Abstract",
        paragraphs: [
          "This Chinese long-form editorial essay proposes a research and publishing roadmap for a major critical collection on Taiwan Travelogue. The full Chinese article is published in the Chinese Overseas Study Review."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一份給研究者與編輯的完整路線圖",
        paragraphs: [
          "文學現象的批評史往往有一個「黃金窗口」：作品問世後三至七年，初步的接受浪潮已沉澱，學術詮釋尚未完全固化，仍有充分的爭議空間。《臺灣漫遊錄》目前正處於這一窗口的最佳位置。",
          "布克獎的頒發（2026年5月），在接受史意義上是一個「元事件」（meta-event）：它使台灣本土接受、日本接受、英語世界接受、大陸的隱蔽接受、東歐的殖民記憶共振，以及 LGBTQ+ 群體的認同性閱讀同時顯影。此刻啟動批評文集的編撰，等於是在最豐富的地質層形成之後、固化之前，進行系統性的鑽探。",
          "這部小說的結構性特質，使它天然適合成為多聲部批評集合的核心：偽譯作進入翻譯研究，後設小說進入敘事學，歷史小說進入台灣史學，百合文學進入性別與酷兒研究，殖民地書寫進入後殖民理論，飲食文學進入物質文化研究，哀悼書寫進入精神分析。每一個學科都能從不同入口進入同一部文本，各學科的詮釋又不會彼此消耗。這種多義性，是一部批評巨著的最佳基底。"
        ]
      },
      {
        heading: "書的性格：一場批評事件",
        paragraphs: [
          "市面上大多數文學批評文集，是學術論文的鬆散彙編，缺乏整體論述的重力場。本書要避開這一命運，必須從一開始確立清晰的書的性格：它不應只是圍繞《臺灣漫遊錄》的論文合集，而應以《臺灣漫遊錄》為稜鏡，折射當代台灣與世界文學交界處最根本的若干問題。",
          "這些問題包括翻譯的倫理、殖民記憶的政治、世界文學場域的權力、哀悼書寫的詩學、女性情感與歷史想像的關係。書的定位差異，將決定選文標準、編排邏輯、導論寫法，以及最終在讀者心中產生的重量感。",
          "可參照的理想書型，是 Henry Louis Gates Jr. 編 Black Literature and Literary Theory 這類以一個文學傳統為核心打開多學科對話的批評集合，也包括 Spivak 的 In Other Worlds 所展現的有觀點的批評寫法，以及接受美學傳統中理論與案例研究的有機整合。目標不是把文章放在一起，而是讓全書本身成為一個批評事件。"
        ]
      },
      {
        heading: "總體架構：七個同心圓",
        paragraphs: [
          "全書可採取「同心圓擴展」的結構邏輯：從文本內部的細讀，逐漸擴展至接受的社會語境，再擴展至世界文學的理論命題。每一部分既可獨立成章，又與整體形成呼應。",
          "導論由主編撰寫，約三萬字，題為「一部小說，七個問題」。導論本身應是一篇論著，而非說明書。它需要處理：偽譯作為認識論裝置、楊双子的傳記如何成為文本的第七層、百合歷史小說如何在台灣文學史中定位、三浦裕子與林慕蓮的譯本如何參與意義生產、世界文學場域如何發現邊緣文學、大陸的沉默接受如何成為政治鏡面，以及哀悼、愛欲與殖民如何形成不可化約的三角張力。",
          "第一部可命名為「文本的內部宇宙」，承擔細讀與形式分析任務；第二部處理哀悼、愛欲與書寫；第三部處理翻譯的政治學；第四部處理接受的地理政治學；第五部將案例推向比較文學與世界文學理論；第六部把作品放回台灣文學史；第七部保留開放性問題與未來研究方向。"
        ]
      },
      {
        heading: "文本內部宇宙：細讀與形式分析",
        paragraphs: [
          "第一部是全書的基礎，確立對文本本身的精密理解，供後續各部分的論述建立在堅實的文本基礎之上。",
          "《偽譯的機器：〈臺灣漫遊錄〉的後設敘事結構分析》應運用熱奈特的敘事學工具，系統分析跨層敘事（metalepsis）、聚焦游移（focalization shifts）、多時間層的敘事時距（narrative duration）。重點在於：「譯者注」如何作為一種敘事干預裝置，不斷打斷並重構讀者對「原著」的詮釋。",
          "《菜單作為結構：十二道菜的敘事功能與象徵邏輯》應以符號學方法分析十二道料理的選擇邏輯：它們如何形成一條從輕盈到沉重、從個人到歷史、從消費到抵抗的象徵弧線。麻薏湯、菜尾湯、蜜豆冰三道關鍵料理，可作深度個案。",
          "《兩個千鶴的語法：人物塑造中的殖民主體性》應分析青山千鶴子與王千鶴的主體性不對稱，以及「沉默」如何既是殖民壓迫的後果，也是對殖民話語的抵抗策略。斯皮瓦克的屬下研究框架可以引入，但必須修正：王千鶴並非完全無法說話的屬下，她的沉默是一種選擇性的抵抗。",
          "《日文腔的文體政治：語言模仿作為批判工具》應處理一個尚未被充分討論的問題：楊双子在中文寫作中刻意模仿「翻譯自日文的中文語感」，這一文體選擇如何使讀者在形式層面體驗到翻譯的認識論位置。"
        ]
      },
      {
        heading: "哀悼、愛欲與書寫",
        paragraphs: [
          "第二部處理傳記維度與精神分析。這一維度容易被學術批評忽略，卻對理解整部作品至關重要。",
          "《共同的名字：雙胞胎書寫、哀悼政治與「楊双子」的主體性》可從弗洛伊德的哀悼／憂鬱理論出發，分析「楊双子」這一集體性筆名如何成為一種生產性憂鬱（productive melancholia）的書寫裝置，使已故妹妹的在場轉化為持續的創作動力。巴特勒的哀悼政治學也應進入討論：為誰哀悼、以何種方式哀悼，如何構成對公共話語的干預。",
          "《從未擁有的青春：百合書寫作為反事實歷史想像》可分析百合小說如何為雙胞胎姊妹「從來沒有的青春」補種一個可能性空間。歷史小說在此成為反事實歷史：它給被壓制的可能性一個活著的空間。",
          "《貧困、夜校、言情與文學：楊双子的階級位置與形式選擇》可借布迪厄的文學場域理論，分析楊双子從言情小說維生、在夜校受教育、以大眾文類進入嚴肅文學場域的軌跡。所謂「以輕包重」的敘事策略，既是審美選擇，也與階級處境的形式化有關。"
        ]
      },
      {
        heading: "翻譯的政治學：三個語言的三個《漫遊錄》",
        paragraphs: [
          "翻譯是這部小說最核心的主題，也是其接受史中最值得深入研究的環節。第三部應追蹤文本在不同語言中的命運，視每一個譯本為一次獨立的意義生產事件。",
          "《翻譯的後生命：班雅明理論與〈臺灣漫遊錄〉的多語宿命》可以班雅明「譯者的任務」為核心框架，分析一部已是偽譯作的小說，在被真實翻譯之後，其後設層次如何發生質變。Fortleben 在此不再只是原文的延續，而是偽原文與真譯本共同生成的新生命。",
          "《異化策略的實踐：金翎英譯本的政治詩學》應細讀林慕蓮（Lin King）英譯本如何處理台語、客語、日語混雜的語言現實。三套拼音系統的選擇，不只是工具決定，而是視覺層面上讓英語讀者感受到台灣語言複雜性的政治詩學。",
          "《日文版的帝國回響：三浦裕子譯本的歷史重量》應分析日文版《台湾漫遊鉄道のふたり》的譯介情況，以及日本評論界如何處理小說中對日本殖民主義的批判性呈現。日本翻譯大賞的評審理由、主要媒體書評與讀者評論，均應進入一手材料。",
          "《一部小說，多少個語言中的台灣？》可比較已售出語言版權的多國版本，重點聚焦韓文版的殖民歷史共鳴、法文版的後殖民批評框架、德文版與東歐語種可能引出的記憶政治。這一章需要多語研究者合作。"
        ]
      },
      {
        heading: "接受的地理政治學",
        paragraphs: [
          "第四部應處理六條接受河流：台灣、日本、英語世界、大陸、東歐、LGBTQ+ 讀者群。這不是附屬材料，而是理解小說世界化過程的核心史料。",
          "台灣內部接受史應重構 2020 年出版後的讀者誤解、炎上風波、三刷加注警語，以及金鼎獎的制度性確認。這一接受史本身是一部微型的台灣文化政治史：它揭示台灣讀者對「失落台灣史料」的強烈渴望，以及這種渴望如何塑造閱讀期待。",
          "日本接受研究應分析日本翻譯大賞評審理由、日本書評界面對殖民批判時是否出現美食化或風情化的迴避傾向，以及日本 LGBTQ+ 讀者群如何把小說放入百合文化傳統。",
          "英語世界接受研究應處理政治、文學、市場的三角共振：地緣政治語境如何與文學評價相互強化；《紐約時報》《衛報》與學術期刊的第一輪反應如何形成詮釋框架；布克獎評語如何同時承認文學價值與政治意涵。",
          "大陸接受研究應以審查研究為理論框架，分析豆瓣評論、自我審查語法與失語讀者現象。東歐接受研究則可從烏克蘭、波蘭等地的殖民記憶出發，討論台灣日治經驗、俄羅斯帝國記憶與多重佔領史之間是否存在可被文學喚起的情感語法。",
          "LGBTQ+ 讀者研究可引入 Sedgwick 與 José Muñoz 的理論，分析百合情感如何被讀作歷史中被壓制的同性情感的考古重建，以及同性情感壓制與殖民壓迫的共謀關係在小說中如何交疊。"
        ]
      },
      {
        heading: "世界文學的理論命題",
        paragraphs: [
          "第五部需要從具體文本躍升至抽象理論，使本書的學術貢獻不限於台灣文學研究，而能介入世界文學理論、翻譯研究與後殖民批評的核心辯論。",
          "《偽托譜系學的重新書寫》應把《臺灣漫遊錄》放入奧西恩、梅里美、博爾赫斯、納博科夫等偽托傳統中，同時提出後殖民偽譯與歐洲啟蒙時代諷刺性偽托之間的差異：前者的「說謊」服務於殖民地記憶的積極建構，後者的「說謊」更多服務於對中心話語的批判性模擬。",
          "《卡薩諾瓦的盲點》可借《世界文學共和國》建立框架，同時批判其以巴黎為子午線的模型。以《臺灣漫遊錄》為例，可分析邊緣文學進入世界文學場域需要同時滿足哪些條件：翻譯策略、獎項機制、政治時機、譯者能動性與出版社網絡。",
          "《食物、翻譯、歷史》應整合飲食研究、後殖民理論與物質文化研究，討論殖民地食物如何同時是帝國知識／權力的客體，也是被殖民者主體性的日常實踐場域。",
          "《哈伯瑪斯在台北》可分析多語翻譯如何構建一個文學性的跨語言公共領域。文學獎項，尤其國際布克獎，可被視為跨語言公共領域的機制性節點。",
          "《韓江與楊双子》則可為東亞女性歷史書寫提出新的比較框架：韓江處理一次性的歷史創傷，楊双子處理殖民結構性壓迫的日常生活重構；前者傾向悲劇凝視，後者將感官愉悅與批判並置。"
        ]
      },
      {
        heading: "台灣文學史的位置",
        paragraphs: [
          "第六部需要台灣本土文學研究者的核心參與，避免以西方理論框架直接覆蓋台灣經驗。這一部分應把《臺灣漫遊錄》放回台灣文學史內部定位。",
          "《百合歷史小說的譜系建構：從楊千鶴到楊双子》可梳理楊千鶴〈花開時節〉、楊双子《花開時節》《花開少女華麗島》到《臺灣漫遊錄》的脈絡。這不只是創作線索，也是主動介入台灣女性文學史的行動。",
          "《去殖民的書寫倫理》應將《臺灣漫遊錄》放入賴和、吳濁流、吳明益、甘耀明等人的歷史書寫與後殖民論述中，分析它如何同時繼承並突破既有台灣後殖民書寫範式。",
          "《春山出版的文化政治》可用出版研究視角分析出版社在作品成功中的機構性角色，包括編輯理念、選書邏輯與台灣獨立出版生態。",
          "《鐵道、縱貫線與台灣文學地理》則可把縱貫鐵道視為台灣文學地理的核心符號：它既是殖民現代性的基礎設施，又是南北文化流通的實體紐帶，也是當代台灣人島內移動的集體記憶載體。"
        ]
      },
      {
        heading: "未竟的對話與田野方法",
        paragraphs: [
          "第七部應保留開放性問題與未來研究方向。影視改編將構成新的後設挑戰：原書的偽譯、多時間層與譯者注如何在影像媒介中轉化？影視改編是否會稀釋小說的後殖民論述？這一問題可引入媒介轉化（intermediality）理論。",
          "大陸簡體版的可能與不可能，應作為兩岸文學交流的結構性困境處理。如果大陸出版需要刪改，這種刪改是否會改變文本的根本性質？文學文本的政治可承受性邊界，往往能揭示特定政治體制的意識形態邊界。",
          "研究期間（建議 2026–2028 年）需要建立一手資料系統：楊双子訪談資料庫、林慕蓮與三浦裕子譯者訪談、春山出版社編輯史料、跨語讀者深度訪談，以及台灣、日本、英語世界、大陸與東歐平台的評論監測。豆瓣評論尤其需要定期截存，因審查導致內容可能消失。",
          "影視改編也應從劇本開發階段開始追蹤，記錄從小說到影像的改編決策，特別關注後設結構如何被翻譯成影像語言，以及哪些元素在媒介轉換中被保留、哪些被犧牲。"
        ]
      },
      {
        heading: "出版策略、時間表與附錄",
        paragraphs: [
          "出版平台的選擇，將直接影響本書在學術場域的流通與接受。方向之一是英語世界頂尖學術出版社，如 Columbia University Press、Duke University Press 或 University of Minnesota Press；提案時應強調本書的理論貢獻不限於台灣文學，而能介入世界文學、翻譯研究與後殖民批評。",
          "另一方向是台灣本土學術出版，同步或稍後推出英語版。可與中央研究院文哲所、國立台灣文學館等機構合作，確保在台灣學術界的深度根植。最具後設感的方案，是繁體中文版與英文版平行出版，形成一部真正雙語對話的批評集合。",
          "時間規劃可分四年：2026 年 6–12 月為布局期，確定主編、諮詢委員會、邀稿函、訪談與評論監測系統；2027 年為寫作期，各章節作者完成初稿並季度研討；2028 年上半年為修訂期，進行交叉評審與主編導論寫作；2028 年下半年進入出版社審稿、索引、文獻與附錄整理；2029 年出版。",
          "附錄應讓本書成為未來研究的基礎設施：包括《臺灣漫遊錄》接受史年表（2020–2028）、各語言版本基本資訊對照表、楊双子主要作品年表、關鍵術語跨語對照表，以及布克獎評審評語英中對照。",
          "最具雄心的後設設計，是讓這部批評文集本身成為一種「偽譯」的實踐。它通過匯聚台灣本土研究者、日本台灣文學研究者、英語世界後殖民批評家、翻譯研究者、酷兒理論家與大陸失語讀者的聲音，實踐一種眾聲喧嘩的批評政治學。沒有任何一個聲音能宣稱對這部小說的正確詮釋，因為正確的詮釋，如同正確的翻譯，從來就不存在。",
          "楊双子曾說：「文學通常安靜，但並不妨礙信念遠播，翻譯會造成時差，但可以跨越時間和空間的限制。」這部批評文集，應是那個信念繼續遠播的下一站。"
        ]
      }
    ],
    readingListZh: [
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "Benjamin, Walter. “The Task of the Translator.” Illuminations, edited by Hannah Arendt, Schocken Books, 1968.",
      "Bourdieu, Pierre. The Rules of Art: Genesis and Structure of the Literary Field. Stanford UP, 1996.",
      "Butler, Judith. Precarious Life: The Powers of Mourning and Violence. Verso, 2004.",
      "Casanova, Pascale. The World Republic of Letters. Harvard UP, 2004.",
      "Freud, Sigmund. “Mourning and Melancholia.” The Standard Edition of the Complete Psychological Works of Sigmund Freud, vol. 14, Hogarth Press, 1957.",
      "Gates, Henry Louis Jr., editor. Black Literature and Literary Theory. Methuen, 1984.",
      "Hutcheon, Linda. A Poetics of Postmodernism: History, Theory, Fiction. Routledge, 1988.",
      "Roberts, Margaret E. Censored: Distraction and Diversion Inside China's Great Firewall. Princeton UP, 2018.",
      "Sedgwick, Eve Kosofsky. Epistemology of the Closet. U of California P, 1990.",
      "Spivak, Gayatri Chakravorty. In Other Worlds: Essays in Cultural Politics. Routledge, 1987."
    ],
    factCheckNotes: [
      "本文屬編撰策略與方法論路線圖，章節題名與研究分工為作者建議，並非已出版書目。",
      "出版與獎項背景可參照 National Book Foundation、The Booker Prizes、Graywolf Press、中央社與各出版社公開資料；正式成書時須逐條核對各語言版本與出版日期。",
      "涉及豆瓣、大陸接受、東歐讀者與影視改編的部分屬未來研究方向，需以後續田野、訪談與平台資料採樣補足。"
    ]
  },
  {
    slug: "taiwan-travelogue-reception-aesthetics-global-acceptance",
    title: "From Authorial Life to Global Reception: Reception Aesthetics of Taiwan Travelogue",
    date: "2026-05-24",
    category: "Academic Culture",
    column: "culture",
    kicker: "接受美學 · 全球接受",
    author: "蕭珩",
    academic: true,
    publicationCode: "留學導報學術文化欄 · OSR-CULTURE-20260524-04",
    rightsNotice: "作者蕭珩版權所有。本文由《留學導報》全文刊登，未經作者及刊載方書面許可，不得轉載、摘編、改寫或作商業使用。",
    summary: "A long-form reception-aesthetics essay on Yang Shuang-zi's Taiwan Travelogue, reading the novel through authorial biography, publishing ecology, awards, translation politics and global interpretive communities.",
    titleZh: "從作者經歷到全球接受：楊双子與《臺灣漫遊錄》的多重接受美學分析",
    summaryZh: "本文以堯斯、伊澤爾與費什的接受理論為框架，分析《臺灣漫遊錄》如何在作者生命史、出版協作、偽譯結構、獎項場域、譯者政治與全球思潮的疊加中，從台灣文學事件成為世界文學現象。",
    sidebarCards: [
      ["Reception", "接受美學", "期待視野、文本空白與詮釋共同體如何共同生成文學現象。", "theory"],
      ["Biography", "作者生命史", "貧困、雙胞胎筆名、哀悼與百合書寫的情感底層。", "life"],
      ["Translation", "譯者政治", "Lin King 的翻譯選擇如何成為台灣可見性的公共行動。", "translation"],
      ["World literature", "世界文學", "獎項、語言版本與地緣政治如何推動跨語接受。", "global"]
    ],
    relatedReadings: [
      "taiwan-travelogue-multidimensional-literary-politics",
      "taiwan-travelogue-pseudo-translation-comparative-literature",
      "taiwan-travelogue-critical-collection-methodology"
    ],
    body: [
      {
        heading: "Abstract",
        paragraphs: [
          "This Chinese long-form article reads the international reception of Taiwan Travelogue through reception aesthetics, literary sociology, translation studies and the politics of world literature. The English page preserves the editorial abstract; the full Chinese article is published in the Chinese Overseas Study Review."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "摘要",
        paragraphs: [
          "本文以漢斯·羅伯特·堯斯（Hans Robert Jauss）的接受美學理論為核心框架，結合作者生平傳記、文本的多義開放結構、出版生態與編輯協作、獎項的場域放大機制、譯者的政治性翻譯策略，以及全球文學思潮的時代語境，分析《臺灣漫遊錄》在本土及國際語境中的接受盛況。",
          "本文論證，這一盛況不是由單一因素驅動，而是由至少六個相互強化的接受層次共同疊加作用所形成的複合結構：作者傳記的感召力、文本的多義性與期待視野的生產性破裂、出版生態中的機構性協作、獎項連鎖的馬太效應、譯者作為政治行動者的能動性，以及全球文學場域在特定歷史時刻的思潮聚光。任何一個層次的單獨分析，都不足以解釋這一接受盛況的全貌；只有在六個層次的動態交疊中，方能理解一部台灣中文小說如何在六年之內抵達世界文學的核心位置。"
        ]
      },
      {
        heading: "接受盛況的結構性之謎",
        paragraphs: [
          "2026年5月19日倫敦泰特現代美術館的頒獎典禮上，楊双子以長篇小說《臺灣漫遊錄》奪下國際布克獎，創下台灣文學史與國際布克獎歷史的重要里程碑。在此之前，她已於2024年底榮獲第75屆美國國家圖書獎翻譯文學大獎，成為台灣首位獲此殊榮的創作者。再往前追溯，這部作品已獲2024年日本翻譯大賞與2021年台灣金鼎獎文學圖書獎；英文版之後帶動多語版權流通，成為台灣近年出版史上最受國際矚目的文學案例之一。",
          "這一成就的驚人之處，在於其出發點的微小。楊双子曾多次談及，台灣多數文學出版社在小說編輯階段，往往只校對錯字與格式，不太深度介入文本修改；而《臺灣漫遊錄》初版以「青山千鶴子著、楊双子譯」為框架，進行大膽的文學實驗，需要有已建立讀者信任的出版社願意承擔出版風險。換言之，這部後來席捲全球的小說，在誕生之初即面臨出版市場的結構性排斥。",
          "這種從市場冒險到全球盛況的巨大落差，構成接受美學分析最值得深究的張力場所。文學獎項每年頒發，多數得獎作品在下一輪媒體週期中即告沉寂；而《臺灣漫遊錄》的接受，顯然具有更深層的結構性基礎，需要超出「獎項運氣」或「時代機遇」的解釋框架。",
          "堯斯在〈文學史作為文學科學的挑戰〉中提出「期待視野」（Erwartungshorizont）：文學作品的意義，產生於文本與特定歷史時刻讀者群集體期待之間的動態協商。一部作品之所以能引發深廣共鳴，是因為它既滿足既有期待，又以某種「審美距離」挑戰並擴展這些期待，使讀者在閱讀之後擁有一個被永久擴大的視野。",
          "伊澤爾在《閱讀行動》中進一步發展「隱含讀者」與「文本空白」的概念：每部文本都在其結構中留有刻意的空白，邀請讀者以自身的歷史經驗與想像力加以填充。費什的「詮釋共同體」理論則提醒我們，意義由共享閱讀慣例與詮釋策略的讀者共同體在閱讀實踐中持續生產。《臺灣漫遊錄》的接受盛況，正是多個詮釋共同體在同一文本中同時找到自身入口的結果。"
        ]
      },
      {
        heading: "作者傳記作為接受的情感底蘊",
        paragraphs: [
          "接受美學的理論傳統，長期傾向於去作者化，強調文本意義在讀者閱讀行為中生成。然而在當代文學消費的媒體生態中，尤其在社交媒體主導的信息傳播環境下，作者的故事往往構成接受的第一個情感入口，是讀者在接觸文本之前已被激活的「前理解」。楊双子的傳記，在這一意義上，具有近乎原型性的多重感召力，且每一層感召力都指向不同的讀者群。",
          "楊双子本名楊若慈，出生於1984年的台中烏日眷村，是村中少有的本省家庭。父母在她與妹妹年幼時離異，姊妹由祖母扶養長大。15歲開始，兩人相互扶持，楊若慈做麵包學徒，楊若暉做工讀生；她曾賣過雞排、手搖飲，也做過麵包學徒，利用工作空檔寫可以換取稿費的言情小說，然後趕去夜校晚自習。",
          "這一早年生命史，對應著布迪厄所分析的文學場域中的位置取得：在嚴苛的物質條件下，以創作實踐作為階級突圍的策略。楊双子的故事超出一般苦難成功敘事，關鍵在於她不是從文學場域的中心出發，而是從言情小說這一長期被低估的大眾文類中練出形式感、節奏感與讀者感。日後《臺灣漫遊錄》能以美食旅行與百合情感吸引大眾讀者，同時又以歷史考據、偽譯裝置與後殖民意識贏得學術讀者，正與這段早期訓練密切相關。",
          "她後來進入中興大學台灣文學與跨國文化研究所，曾形容在興大讀書的八年，是自己成為台灣小說家的關鍵八年。從中文系到台文所，她在閱讀、研究、論述與創作中，逐步確立自身書寫方向，也在對「什麼是台灣文學」的追問中，形塑出鮮明而堅定的創作理念。夜校與研究所、言情小說與台灣文學史、謀生寫作與學術訓練，在她身上不是彼此抵消的矛盾，而是互相加壓的燃料。",
          "更重要的是，她從來不是一個人在寫作。「楊双子」原是姊妹共同筆名，「双子」取自日文雙胞胎之意。這個筆名原為共同創作台灣歷史百合小說而誕生，特意選用日文漢字「双」，也預示了作品對日本語境與跨語流通的早期想像。2015年，妹妹楊若暉因癌症離世。她留下的文獻考據資料，後來持續參與楊若慈的創作，成為《花開時節》《花開少女華麗島》以及《臺灣漫遊錄》背後不斷回返的材料與情感底層。",
          "弗洛伊德在《哀悼與憂鬱》中區分哀悼與憂鬱：哀悼是對失去對象的逐漸釋放，憂鬱則是把失去對象內化為自我的永久組成部分。楊双子的書寫，在此意義上是一種生產性的憂鬱行動。妹妹不以幽靈姿態縈繞，而以文獻資料、未竟承諾、共同筆名與小說世界中的少女情誼持續在場。",
          "百合小說所創造的，是雙胞胎姊妹從未擁有的青春。這一點，反向照亮《臺灣漫遊錄》的情感結構：小說中的兩位千鶴，既是殖民歷史中的人物，也是作者在時間與死亡夾縫中為自己與妹妹補種的可能性。讀者在閱讀兩位女性之間的親密、遲疑與不可抵達時，讀到的已不只是愛情或友誼，而是「替另一個人看見更遠地方」的書寫倫理。"
        ]
      },
      {
        heading: "歷史百合宇宙與公開身份",
        paragraphs: [
          "《臺灣漫遊錄》並非楊双子的孤立之作，而是一個逐步擴大的「歷史百合宇宙」的核心節點。《花開時節》《花開少女華麗島》與《臺灣漫遊錄》共享同一創作方向：把女性之間的情誼、台灣民俗與日治時期歷史放入彼此照亮的敘事空間。前作終幕落下的一九三八年，正是《臺灣漫遊錄》鐵道之旅展開的起點。",
          "這一宇宙也向台灣首位女記者楊千鶴致敬。楊千鶴的〈花開時節〉在1942年發表，是日治時期台灣女性書寫中的重要文本。楊双子以「千鶴」命名小說人物，又讓「楊双子」這一筆名帶著日文漢字的痕跡，製造出跨越現實與虛構、當代與歷史、作者與前輩女性書寫者的多層致敬結構。這種文學傳承的具身化，使她的創作不只是個人書寫，也是一場台灣女性文學系譜的積極建構。",
          "楊双子公開出櫃並已婚，其早期創作以羅曼史小說為主，近年將百合元素融入台灣歷史書寫，透過女性之間的理解與情誼開展新的敘事視角。這一身份的公開性，在接受過程中具有雙重意義：它使歷史百合書寫獲得一種由內而外的真實性認證，也使 LGBTQ+ 讀者群形成特殊的認同性閱讀。",
          "賽奇維克在《壁櫥的認識論》中指出，酷兒讀者長期在文學史中以曲折方式尋找自身影像。當一部作品以正面而複雜的方式呈現女性之間的情感，且把這種情感放回歷史現場，它就不只是一段關係描寫，也是一種歷史位置的修復。台灣作為亞洲同性婚姻合法化的重要案例，在英語世界的接受中，又使《臺灣漫遊錄》的百合元素與台灣民主形象相互強化。",
          "楊双子身處多重邊緣位置：本省眷村、單親貧窮家庭、夜校背景、女同志作家、百合大眾文學創作者。正是這些邊緣性的交疊，使她的創作在讀者面前獲得一種特殊的道德權威。她想寫只有台灣人能創作、也只有台灣人真正想讀的小說；而當這樣的小說被世界閱讀，台灣讀者感到的便不只是被代表，更是一種久候的文化回聲。"
        ]
      },
      {
        heading: "出版生態與文本精修",
        paragraphs: [
          "任何接受美學分析，若忽略文本從作者手稿到讀者手中所經歷的出版機構中介過程，都是不完整的。《臺灣漫遊錄》的接受盛況，與一個精密的出版機構協作過程密不可分。",
          "透過作家友人陳又津認識春山出版社後，楊双子第一次遇到願意鉅細靡遺討論小說、追問細節、指出問題的編輯夥伴。從2019年8月到2020年3月出版之間，《臺灣漫遊錄》前後修訂多次。編輯的吹毛求疵，對一部以偽譯、注釋、多時間層與歷史細節為核心的小說來說，不只是文字加工，而是風險管理與形式校準。",
          "布迪厄在《藝術的規則》中指出，出版社不是單純商業中介，更是文化資本的認證機構。一家具有聲譽、願意深度介入文本的出版社選擇出版某部作品，本身即是向特定讀者群發出信號：這部作品值得嚴肅對待。春山出版對《臺灣漫遊錄》的支持，提供了文本抵達讀者之前的品質保證，也使它在台灣文學讀者群中取得初始信任。",
          "書上市初期，「青山千鶴子著、楊双子譯」的設定引發爭議，部分讀者以為真有一位日治時代日本女作家留下遊記，發現是小說策略後感到受騙。楊双子事後分析，當代台灣有許多人對台灣文史重新出土抱有高度期待，這種期待可能使讀者忽略文本中已埋下的虛構線索，進而產生情感落差。",
          "這場風波在接受美學意義上格外重要。讀者對失落台灣史料的強烈渴望，既是偽譯裝置得以成立的情感土壤，也是它被誤讀為詐欺的原因。換言之，作品最想處理的問題，正是在初次接受中以衝突形式爆發出來：台灣讀者究竟多麼渴望一份未曾被保存的殖民地女性旅行檔案？",
          "出版風波也意外製造了公共討論。關於文學虛構倫理、歷史書寫責任、台灣失落史料渴望的辯論，使這部小說在出版初期即成為文化事件，而不只是一本待讀的文學作品。用堯斯的語言說，「炎上」製造了一次強烈的視野破裂，迫使讀者重新思考自己對歷史文本與虛構文本的分類方式。",
          "小說中1938、1954、1970、1990與2020等時間節點，則構成五個不同的隱含讀者位置。1938年是日治殖民語境下的原始敘事；1954年是國民政府去日本化後的記憶重框；1970年是戒嚴體制下本土意識的壓抑與積累；1990年是民主化解嚴後本土意識的釋放；2020年則是當代讀者閱讀所有層疊的現在。每一個時間節點，都可能成為不同世代台灣讀者的集體記憶錨點。"
        ]
      },
      {
        heading: "文本多義性與期待視野的破裂",
        paragraphs: [
          "《臺灣漫遊錄》在文本內部同時開啟多個入口。它像美食旅遊小說，以一道道菜餚組織章節；它像百合小說，讓兩位女性在殖民秩序邊緣彼此靠近又彼此退後；它像歷史小說，重建1938年的台灣鐵道、城市、料理與語言環境；它又像後設小說，不斷提醒讀者：你正在閱讀一部被翻譯、被注釋、被重構的文本。",
          "這種類型混搭製造了一個柔軟的入口。讀者以為走進一部輕盈的美食旅行小說，卻在閱讀過程中逐漸被帶入更深、更重的殖民歷史與身份政治討論。飲食與認同、階級、殖民觀光、地方記憶相連；女性情誼與父權制度、殖民秩序、語言不平等互相纏繞。",
          "「以輕包重」的敘事策略，使小說同時服務於至少三個不同讀者群：尋求感官愉悅與美食想像的大眾讀者；追求情感共鳴與歷史想像的百合類型讀者；尋求殖民歷史批判與後設文學探索的嚴肅讀者。三個群體都能從文本中取得滿足，卻不是同樣的滿足，也因此不容易形成對同一文本的排他性佔有。",
          "偽譯裝置在讀者被「騙到」的瞬間，製造了最深刻的後設閱讀效果。當讀者發現原著從未存在、翻譯是一種書寫策略，便不得不回頭重新閱讀整部小說：所謂歷史記錄究竟由誰建構？文獻真實性意味著什麼？翻譯者與注釋者的權力如何改變文本？這種二度閱讀的激活，是詮釋共同體形成的標誌。",
          "更精細地看，小說中的空白分布極不平均。青山千鶴子的日記看似完整，卻不斷暴露帝國視角的盲點；王千鶴的沉默看似缺席，卻成為讀者最想填補的空白；譯者注看似提供解答，實際上又製造新的不確定性。這些空白讓不同讀者以自身經驗進入文本：台灣讀者補入被壓抑的歷史記憶，日本讀者補入帝國反省，酷兒讀者補入被歷史刪去的同性情感，飲食讀者補入身體與味覺經驗。",
          "這正是伊澤爾所說的文本空白的生命力。優秀文本不會把所有意義一次性說完，而是保留足夠的縫隙，使讀者在閱讀中完成一部分作品。《臺灣漫遊錄》的世界化，並非因它變得簡單易懂，而是因它的空白足夠深，足以容納不同語言、不同歷史處境的讀者。"
        ]
      },
      {
        heading: "獎項場域與事件放大",
        paragraphs: [
          "《臺灣漫遊錄》的接受呈現明顯的連鎖放大：台灣金鼎獎、日本翻譯大賞、美國國家圖書獎翻譯文學獎、國際布克獎。每一次獎項都不只是評價結果，也是一個新的閱讀入口，將作品送入新的制度網絡與讀者社群。",
          "文學獎項在布迪厄意義上，是文學場域中的象徵資本轉換機制。地方獎項確認作品在本土文學史中的位置；翻譯獎項確認作品跨語轉換的可讀性與形式價值；英語世界的大型獎項則把作品推入全球書市與媒體視野。這些獎項之間構成馬太效應：既有肯定提高下一輪被看見的概率，而下一輪肯定又回過頭來重估前一輪的意義。",
          "2024年美國國家圖書獎翻譯文學大獎，使《臺灣漫遊錄》首次在英語世界獲得制度性高亮。到2026年國際布克獎，它已不只是「一部台灣小說被英譯」的案例，而是「一部中文原著台灣小說以翻譯文學身份進入世界文學核心獎項」的事件。",
          "這種事件性改變了讀者的閱讀姿勢。許多英語讀者初次接觸《臺灣漫遊錄》時，已知道它是獲獎作品，於是帶著「它為何重要」的期待閱讀；台灣讀者重新閱讀時，則把它視為台灣文學被世界承認的證據。獎項沒有創造文本的價值，卻改變了價值被感知、被談論、被流通的方式。",
          "阿蘭·巴迪烏的「事件」概念在此可作參照：事件不只是發生了什麼，而是迫使在場主體重新定位自身座標。國際布克獎頒給《臺灣漫遊錄》與 Lin King 的英譯，使台灣文學在集體意識中從焦慮的問題轉化為自信的回答：台灣並非等待被中心承認的邊緣，而是已經帶著自己的歷史、形式與語言問題進入世界文學現場。"
        ]
      },
      {
        heading: "譯者能動性與翻譯政治",
        paragraphs: [
          "在《臺灣漫遊錄》的接受鏈條中，英文版譯者 Lin King（金翎）的角色遠超傳統意義上的翻譯工作者。她不是把中文內容搬運到英文裡，而是在世界文學場域中重新設置台灣的可見性。",
          "金翎曾表示，2022年俄烏戰爭爆發後，她下定決心，在可預見的將來只翻譯來自台灣的創作。這一立場使翻譯行為本身成為政治表態，也使譯者成為獨立於文本之外的公共知識分子。韋努蒂在《譯者的隱形》中批判英語翻譯界以流暢為名讓譯者隱形，主張以異化策略讓讀者意識到自己正在讀翻譯作品。金翎的做法與此相通，政治性更強：她的翻譯選擇，直接回應台灣存在如何在英語世界被看見的問題。",
          "她在英文版中保留譯者注腳、序文與後記，並以多套拼音系統處理台語、客語、日語與華語混雜的語言現實。這種策略拒絕把台灣的多語現實壓平為一種順滑英文，也拒絕把翻譯中的顆粒感過濾掉。她曾以柳橙汁中的果粒比喻翻譯：那些看似礙口的顆粒，正是文本的生命。",
          "英文版因此形成更複雜的後設結構：虛構作者青山千鶴子的敘述、虛構譯者楊双子的注釋、真實譯者 Lin King 的注腳彼此疊加。每一層都是不同歷史位置上的詮釋聲音，使英文版在後設意義上不是被簡化的版本，而是被再次增厚的版本。",
          "譯者政治也成為獨立接受事件。作者與譯者的公開發言，使獎項從文學評價延伸為關於台灣主權、文化可見性與翻譯倫理的公共討論。對不少英語讀者來說，閱讀《Taiwan Travelogue》不只是接觸一部小說，也是在理解一個譯者為何要把台灣作品帶入英語世界。"
        ]
      },
      {
        heading: "全球思潮與多重詮釋社群",
        paragraphs: [
          "《臺灣漫遊錄》的世界接受，恰好發生在亞洲女性歷史書寫被重新看見的時刻。韓江獲諾貝爾文學獎，使英語讀者對亞洲女性、歷史傷痕、國家暴力與身體記憶形成新的期待視野。楊双子自己也指出，這不是把兩位作家畫上等號，而是世界文學視角像一盞探照燈，在時代風潮轉動時照向了原本較隱沒的女性聲音。",
          "這一探照燈效應，使《臺灣漫遊錄》不必從零開始教育讀者如何閱讀亞洲歷史創傷。讀者已經有某種問題意識：亞洲女性如何書寫國家暴力之下的人？《臺灣漫遊錄》提供的答案具有台灣特殊性：它處理的不是單一事件的創傷，而是殖民結構在日常生活、飲食、語言與情感關係中的持續滲透。",
          "俄烏戰爭後，西方世界對被強鄰威脅的民主社會高度關注，台灣的地緣政治能見度上升。《臺灣漫遊錄》在此語境中被閱讀，便帶有雙重性質：它是文學作品，也是台灣存在的文化證明。對某些讀者而言，閱讀這部書甚至具有政治聲援意味。",
          "東歐、波羅的海與烏克蘭讀者對小說的共鳴，則提示一種跨地域後殖民記憶的可能。台灣日治經驗、烏克蘭與東歐的帝國記憶、被強權夾縫中的語言與身份焦慮，雖然歷史脈絡不同，卻可能共享一套情感語法：如何在他者命名的世界中保留自己的名字？如何在帝國帶來的現代性與帝國造成的傷害之間保持判斷？",
          "LGBTQ+ 讀者讀到的是另一條線。百合歷史小說把女性之間的愛放回歷史，不再把同性情感視為當代城市裡突然出現的例外，而是視為被史料、父權與殖民秩序共同壓低聲音的長期存在。這種歷史化，給身份認同帶來深刻穩定感。",
          "飲食文化讀者則從味覺進入台灣。美食寫作是一種全球語言，食物能繞過抽象政治，先讓讀者用身體理解地方。當麻薏湯、菜尾湯、蜜豆冰與鐵路旅行被放在一起，台灣不再只是新聞中的地緣政治名詞，而是一個有味道、有季節、有階級、有記憶的生活世界。"
        ]
      },
      {
        heading: "六層接受的動態模型",
        paragraphs: [
          "將以上六個接受層次置於同一分析框架下，可以看到它們不是單線因果，更像一個相互強化的動態共振結構。",
          "作者傳記為文本多義性提供情感解碼框架：姊妹相依的生命史，使讀者在閱讀兩位千鶴的情感時帶入更深的生命感受；多重邊緣身份，為文本的多個接受入口預設了不同的情感共鳴基礎。",
          "出版生態為獎項機制提供形式完成度：若沒有春山版本的精細打磨，文本未必具備進入國際獎項場域的穩定性；出版初期的爭議，經過修訂與討論後轉化為作品接受史的一部分，也成為後來讀者理解偽譯裝置的重要背景。",
          "獎項連鎖為譯者能動性提供結構機會：本土獎項與日本接受建立初步聲譽，英文版出版與美國國家圖書獎擴大能見度，國際布克獎則讓作者與譯者的政治發言被全球媒體聽見。",
          "譯者能動性為全球思潮提供跨語介面：Lin King 的翻譯策略讓台灣語言複雜性在英語中保留顆粒感，使後殖民讀者、酷兒讀者、飲食讀者、世界文學讀者都能找到自己的閱讀入口。",
          "全球思潮又反向強化作者傳記與台灣身份的接受框架：亞洲女性歷史書寫的探照燈效應、俄烏戰爭後的地緣政治焦慮、LGBTQ+文化能見度，都使楊双子的生命史與文本形式獲得新的公共意義。",
          "這六層疊加構成一次罕見的全頻道共鳴。每一個可能的讀者群，都從這部小說中找到自己的入口；每一個入口又足夠深入，足以引發持續閱讀、討論、翻譯與再詮釋。這正是堯斯所描述的古典化機制的當代示範：一部作品能穿越時間與語境限制，不因它提供單一答案，而因它能同時回應不同讀者群最迫切的問題。"
        ]
      },
      {
        heading: "眾聲喧嘩的接受生態學",
        paragraphs: [
          "楊双子和 Lin King 期待能有更多台灣文學進入英語世界，讓更多作品反映出台灣不是齊聲合唱，而是眾聲喧嘩的民主社會。巴赫金以「眾聲喧嘩」（polyphony）描述小說中多種聲音共存、彼此不被化約的狀態；這個詞用在《臺灣漫遊錄》的接受現象上，同樣精準。",
          "這部小說的接受，本身即是一場眾聲喧嘩。台灣認同讀者聽到身份政治的回聲，LGBTQ+讀者聽到情感解放的回聲，日本讀者聽到帝國反省的回聲，東歐讀者聽到殖民記憶的回聲，學術讀者聽到後設文學的回聲，美食讀者聽到感官愉悅的回聲，飲食政治讀者聽到食物即政治的回聲。每一種接受都是真實的；沒有任何一種接受能獨自構成全部意義。",
          "在所有聲音的底部，始終有一個最輕柔、也最持久的迴響：一對雙胞胎姊妹曾在烏日眷村相依為命，其中一人先行離去，另一人帶著共同的名字、妹妹留下的資料與未竟的承諾，繼續向世界述說她們都想看見的遠方。",
          "楊双子在國際獎項舞台上談到台灣文學的百年探問，也談到自由與平等的百年追求。這句話是她一個人站在台上說的；在那個名字的最深處，卻有兩個人的呼吸。正因如此，《臺灣漫遊錄》的全球接受，不只是一本書的成功，也是一種文學如何替逝者、替地方、替被壓低的歷史聲音繼續遠行的證明。"
        ]
      }
    ],
    readingListZh: [
      "楊双子。《臺灣漫遊錄》。春山出版，2020。",
      "Yang, Shuangzi [楊双子]. Taiwan Travelogue. Translated by Lin King, Graywolf Press, 2024.",
      "Jauss, Hans Robert. Toward an Aesthetic of Reception. Translated by Timothy Bahti, U of Minnesota P, 1982.",
      "Iser, Wolfgang. The Act of Reading: A Theory of Aesthetic Response. Johns Hopkins UP, 1978.",
      "Fish, Stanley. Is There a Text in This Class? The Authority of Interpretive Communities. Harvard UP, 1980.",
      "Bourdieu, Pierre. The Rules of Art: Genesis and Structure of the Literary Field. Stanford UP, 1996.",
      "Venuti, Lawrence. The Translator's Invisibility: A History of Translation. Routledge, 1995.",
      "Bakhtin, Mikhail. Problems of Dostoevsky's Poetics. U of Minnesota P, 1984.",
      "Sedgwick, Eve Kosofsky. Epistemology of the Closet. U of California P, 1990.",
      "Casanova, Pascale. The World Republic of Letters. Harvard UP, 2004.",
      "Freud, Sigmund. “Mourning and Melancholia.” The Standard Edition of the Complete Psychological Works of Sigmund Freud, vol. 14, Hogarth Press, 1957.",
      "Gadamer, Hans-Georg. Truth and Method. Crossroad, 1989."
    ],
    factCheckNotes: [
      "稿件來源：Gmail 收件箱中 Overseas Office 於 2026年5月24日 09:24（London）發出的〈從作者經歷到全球接受：楊双子與《臺灣漫遊錄》的多重接受美學分析〉。",
      "獎項與出版事實已按 The Booker Prizes、National Book Foundation、Graywolf Press 與中央社公開資料核對；涉及訪談細節、作者生命史與媒體引述者，保留為作者正文中的接受材料，後續紙本刊載可再逐條比對原始訪談頁面。",
      "本文將郵件正文中的參考文獻改為「延伸閱讀／微型知識圖譜」版式，避免頁面末尾形成突兀的學術書目堆疊，同時保留讀者外部查讀入口。"
    ]
  },
  {
    slug: "australia-student-visa-2026-npl-md115-priority-processing",
    title: "Australia Student Visa 2026: NPL 295,000, MD115 and What Offshore Applicants Should Know",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "study",
    kicker: "Student visa · NPL 2026 · MD115",
    author: "留學導報編輯部",
    summary: "A practical briefing on Australia’s 2026 National Planning Level of 295,000 new international student commencements, Ministerial Direction 115, offshore student visa processing, and complete-file preparation.",
    titleZh: "澳洲 2026 學生簽證不是簡單「擴招」：NPL 295,000 與 MD115 優先處理怎麼看",
    summaryZh: "澳洲 2026 年國際學生 National Planning Level 為 295,000，比 2025 年增加 25,000。但這不是一句「名額放開」就能概括的消息。本文用公開官方資料說明 NPL、MD115、境外學生簽證處理優先級與材料完整性，幫助學生和家長把申請節奏看清楚。",
    body: [
      {
        heading: "1) The headline: 295,000 is a managed-growth setting, not a personal visa guarantee",
        paragraphs: [
          "Australia’s 2026 National Planning Level (NPL) for new international student commencements is 295,000, which is 25,000 higher than the 2025 level. This is good news for the sector, but it should not be read as an individual visa guarantee.",
          "The official framing is managed growth: the government is trying to keep international education open while controlling processing pressure, provider allocation and system integrity.",
          "For students and families, the practical question is not only “is Australia accepting more students?” but also “which provider, which intake, which course level, and how complete is the visa file?”"
        ]
      },
      {
        heading: "2) What MD115 changes in the real application journey",
        paragraphs: [
          "Study Australia states that Ministerial Direction 115 (MD115) replaced MD111 for 2026 offshore Student visa processing. The new system affects offshore Student visa applications, not every possible student-related situation.",
          "The priority system works through provider allocation progress. In plain terms, where and when a student applies can affect processing priority, even when the formal visa requirements remain the same.",
          "This is why applicants should treat course selection, provider choice and lodgement timing as one file strategy, rather than three unrelated decisions."
        ]
      },
      {
        heading: "3) What applicants can do now",
        paragraphs: [
          "First, build a clean application timeline: offer, acceptance, CoE, payment record, OSHC, financial evidence, Genuine Student explanation and supporting documents should tell one coherent story.",
          "Second, check the provider and course logic before paying. A cheaper or faster option may still create questions if the course level, study history and future plan do not connect clearly.",
          "Third, lodge a complete file where possible. Study Australia explicitly warns that missing or incorrect information can delay processing and may lead to refusal."
        ]
      },
      {
        heading: "4) Where OTC can help, and where the boundary is",
        paragraphs: [
          "OTC can help students and families read the education pathway: course fit, provider comparison, document checklist, study-plan logic, family communication and preparation for official requirements.",
          "OTC does not guarantee visa outcomes and this article is not migration legal advice. Where a case involves refusal history, complex visa status, high-risk financial evidence or legal questions, applicants should consult a registered Australian migration agent or qualified legal practitioner.",
          "The strongest plan is evidence-first: understand the official system, choose a defensible course, prepare documents early and avoid last-minute storytelling."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、先看清標題：295,000 是「管理式增長」，不是個人簽證保證",
        paragraphs: [
          "澳洲 2026 年國際學生 National Planning Level（NPL）為 295,000，比 2025 年增加 25,000。這對市場是利好，但不能簡單理解為「澳洲學生簽證全面放開」或「申請就會批」。",
          "官方說法的核心是 managed growth，也就是在繼續歡迎國際學生的同時，管理處理速度、院校分配、住宿壓力與整體系統完整性。",
          "對學生和家長來說，真正要問的不是單一句「澳洲是不是擴招」，而是：你選的是哪所學校、哪個 intake、哪個課程層級、你的簽證材料是否完整且邏輯一致。"
        ]
      },
      {
        heading: "二、MD115 對境外學生申請意味著什麼",
        paragraphs: [
          "Study Australia 公開說明，2026 年境外 Student visa 申請處理中，Ministerial Direction 115（MD115）取代了 2025 年使用的 MD111。這套系統主要影響境外遞交的學生簽證申請。",
          "MD115 的重點不是把簽證要求全部改掉，而是通過院校新海外學生名額使用情況來管理處理優先級。換句話說，同樣是學生簽證，申請時間、院校分配進度與材料完整性，都可能影響實際等待體感。",
          "因此，選校、接受 offer、交押金、拿 CoE、準備簽證材料，不能拆成互不相關的步驟。它們其實是一個完整的申請策略。"
        ]
      },
      {
        heading: "三、現在可以做的三件事",
        paragraphs: [
          "第一，建立清楚的時間線：offer、接受確認、CoE、付款記錄、OSHC、資金證明、Genuine Student 說明和支持文件，要能講出同一個合理故事。",
          "第二，先核對課程邏輯再付款。便宜、快、門檻低不一定等於穩。如果課程層級、過往學習、未來規劃與家庭資金不能自然對上，簽證文件很容易變成補救式寫作。",
          "第三，盡量完整遞交。Study Australia 提醒，資料缺失或信息錯誤會拖慢處理，甚至可能導致拒簽。這也是為什麼學生簽證不是只拿到 CoE 就結束。"
        ]
      },
      {
        heading: "四、OTC 可以做什麼，不能承諾什麼",
        paragraphs: [
          "OTC 可以協助學生和家庭做教育路徑閱讀：課程匹配、院校比較、文件清單、學習計劃邏輯、家長溝通與官方要求前的準備工作。",
          "但本文不是移民法律建議，OTC 也不承諾簽證結果。若個案涉及拒簽史、複雜簽證身份、高風險資金材料或法律問題，應尋求澳洲註冊移民代理或合資格法律顧問的個案意見。",
          "比較穩的做法是 evidence-first：先看官方規則，選一個能說清楚的課程，提前準備文件，不要等到最後才用一篇說明信試圖補上所有漏洞。"
        ]
      }
    ],
    resources: [
      ["Australian Department of Education — A managed system for international education", "https://www.education.gov.au/managed-system-international-education-2026"],
      ["Study Australia — Student visa processing update", "https://www.studyaustralia.gov.au/en/tools-and-resources/news/student-visa-processing-update"],
      ["Home Affairs — Student visa (subclass 500)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"],
      ["Home Affairs — Check twice, submit once", "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online/check-twice-submit-once"]
    ],
    notes: [
      "General public briefing only; not migration or legal advice.",
      "The 2026 NPL is a system setting and processing-priority framework, not a guarantee of visa grant.",
      "Applicants with complex circumstances should consult a registered Australian migration agent or qualified legal practitioner."
    ]
  },
  {
    slug: "australia-482-skills-in-demand-employer-sponsorship-checklist",
    title: "Australia 482 Skills in Demand Visa: Employer Sponsorship Is Not Just Finding a Company",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "settlement",
    kicker: "482 Skills in Demand · Employer sponsorship",
    author: "留學導報編輯部",
    summary: "A compliance-first briefing on Australia’s Skills in Demand visa (subclass 482), covering approved sponsors, CSOL occupation fit, salary thresholds, one-year relevant work experience, skills assessment and English requirements.",
    titleZh: "482 Skills in Demand 簽證：僱主擔保不是「找到公司就行」",
    summaryZh: "澳洲 482 Skills in Demand 簽證常被簡化成「找到公司願意擔保」。實際上，Core Skills stream 涉及 approved sponsor、CSOL 職業、AMSR/CSIT 薪資、至少一年相關工作經驗、技能評估與英文要求。本文用官方頁面做一份申請人與雇主都能讀懂的合規核對清單。",
    body: [
      {
        heading: "1) The first misunderstanding: sponsorship is a structured employer process",
        paragraphs: [
          "The Skills in Demand visa (subclass 482) lets an employer sponsor a suitably skilled worker for a position they cannot fill with a suitably skilled Australian worker. That wording matters: the visa is tied to a real role, an approved sponsor, the nominated occupation and the applicant’s evidence.",
          "A willing company is only the beginning. The proposed employer must be an approved sponsor, or at least have submitted an application to become a Standard Business Sponsor before nominating the worker.",
          "For the Core Skills stream, the nominated occupation must be on the Core Skills Occupation List (CSOL). If the occupation fit is weak, the whole file becomes weak."
        ]
      },
      {
        heading: "2) Salary: AMSR and CSIT are not optional details",
        paragraphs: [
          "Home Affairs salary rules require the employer to determine the Annual Market Salary Rate (AMSR) correctly and not pay the overseas worker less than an Australian worker would be paid for equivalent work.",
          "For Skills in Demand Core Skills stream nominations, the role must meet the Core Skills Income Threshold (CSIT). The Home Affairs salary page states AUD76,515 for nominations lodged from 1 July 2025 to 30 June 2026.",
          "Non-cash benefits such as accommodation or a car do not replace the threshold. Salary evidence is therefore not just a number in an offer letter; it is part of the employer’s compliance file."
        ]
      },
      {
        heading: "3) Applicant evidence: one year of relevant experience, skills and English",
        paragraphs: [
          "For the Core Skills stream, applicants must generally have at least one year of relevant work experience in the nominated occupation or a related field. Part-time or casual work may count only where it is equivalent to the required full-time period and at the right skill level.",
          "Some occupations require a mandatory skills assessment. Where required, the assessment must be commenced before submitting the visa application or the application may not be valid.",
          "Primary applicants must also meet the relevant English language requirements unless an exemption applies. From the applicant’s perspective, a 482 file is therefore a combined story: role fit, experience evidence, English evidence and sponsor evidence must point in the same direction."
        ]
      },
      {
        heading: "4) A low-risk preparation checklist",
        paragraphs: [
          "Applicants should prepare passport and visa history, CV, qualification records, employment contracts, reference letters, payslips, tax or social-security records where relevant, English test evidence, and skills-assessment evidence if required.",
          "Employers should prepare sponsor approval evidence, business registration, organisation chart, position description, recruitment or labour-market evidence where applicable, salary benchmarking, employment contract and compliance records.",
          "This article is general public information, not migration or legal advice. Cases involving refusal history, related-party sponsorship, newly formed businesses, unclear salary source or complex visa status should be reviewed by a registered Australian migration agent or qualified lawyer."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、第一個誤區：僱主擔保不是一句「公司願意」",
        paragraphs: [
          "澳洲 Skills in Demand visa（subclass 482）讓雇主在找不到合適澳洲本地員工時，擔保具備相應技能的海外工作者。這句話背後其實有四個核心：真實職位、合格 sponsor、對應職業、申請人證據。",
          "所以，找到一家公司願意幫忙，只是起點，不是終點。雇主需要是 approved sponsor，或至少已提交 Standard Business Sponsor 申請，之後才能為具體職位提名申請人。",
          "如果走 Core Skills stream，被提名職位還需要落在 Core Skills Occupation List（CSOL）框架內。職業匹配不清楚，後面的薪資、經驗、英文材料再完整，也很難讓整份文件站穩。"
        ]
      },
      {
        heading: "二、薪資不是隨便填：AMSR 與 CSIT 都要看",
        paragraphs: [
          "Home Affairs 對提名薪資有明確要求：雇主要正確判斷 Annual Market Salary Rate（AMSR），也就是澳洲本地同等職位應有的市場薪資，並且不能把海外員工支付得低於同等澳洲員工。",
          "Core Skills stream 還要看 Core Skills Income Threshold（CSIT）。Home Affairs 薪資頁面列明，2025 年 7 月 1 日至 2026 年 6 月 30 日之間遞交的相關 nomination，CSIT 為 AUD76,515。",
          "住宿、車輛等非現金福利不能替代薪資門檻。因此，薪資不是 offer letter 上的一個數字，而是雇主合規文件的一部分。"
        ]
      },
      {
        heading: "三、申請人端：一年相關經驗、技能與英文不能漏",
        paragraphs: [
          "Core Skills stream 通常要求申請人在被提名職業或相關領域有至少一年相關工作經驗。兼職或 casual work 並非完全不能算，但要能折算到足夠的全職等效期間，並且工作內容要達到相應技能層級。",
          "部分職業還需要 mandatory skills assessment。若屬於強制技能評估職業，通常需要在遞交簽證前已經開始評估，否則可能影響申請有效性。",
          "主申請人還要滿足英文要求，除非符合豁免。換句話說，482 文件不是只看職位，也不是只看個人履歷，而是職位、經驗、薪資、英文、雇主材料互相支撐。"
        ]
      },
      {
        heading: "四、比較低風險的準備清單",
        paragraphs: [
          "申請人端可以先準備：護照與簽證歷史、CV、學歷文件、工作合同、推薦信、工資單、稅務或社保記錄（如適用）、英文成績，以及需要時的技能評估材料。",
          "雇主端則應準備：sponsor 批准或申請證據、公司登記、組織架構、職位描述、招聘或勞動市場證據（如適用）、薪資市場對照、雇傭合同與合規記錄。",
          "本文為公開政策與教育資訊整理，不構成移民法律建議。若涉及拒簽史、親屬或關聯公司擔保、新成立公司、薪資來源不清或簽證身份複雜，應找澳洲註冊移民代理或合資格律師做個案審查。"
        ]
      }
    ],
    resources: [
      ["Home Affairs — Skills in Demand visa (subclass 482)", "https://immi.homeaffairs.gov.au/Visa-subsite/Pages/work/skills-in-demand-482-landing.aspx"],
      ["Home Affairs — Skills in Demand Visa (subclass 482) Core Skills stream", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream"],
      ["Home Affairs — Salary requirements to nominate a worker", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482/salary-requirements"],
      ["Home Affairs — English proficiency (subclass 482)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/sufficient-english"],
      ["Office of the Migration Agents Registration Authority", "https://www.mara.gov.au/"]
    ],
    notes: [
      "General public briefing only; not migration, legal, tax or employment advice.",
      "Salary thresholds, occupation lists and assessment requirements can change; always verify the current official page before acting.",
      "For professional advice, consult a registered Australian migration agent or qualified Australian legal practitioner."
    ]
  },
  {
    slug: "australia-migration-program-2026-27-onshore-prioritisation-what-it-means",
    title: "Australia Migration Program 2026–27: 185,000 Places and an Onshore Tilt — What It Means for Students and Skilled Applicants",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "settlement",
    kicker: "Budget 2026–27 · Onshore prioritisation",
    author: "留學導報編輯部",
    summary: "A clear, practical briefing on the 2026–27 permanent Migration Program planning level (185,000) and the policy direction to prioritise onshore applicants, plus what students, graduates and skilled applicants can do to reduce avoidable risk.",
    titleZh: "澳洲 2026–27 永居名額與「境內優先」方向：留學生與技術路線該怎麼讀懂？",
    summaryZh: "2026–27 澳洲永居規劃名額維持 185,000，並明確把更多名額優先配置給已在澳洲境內的申請人。本文用「可操作」的方式解讀：對留學生、485 畢業生、482 雇主擔保與技術移民路線，這些數字可能意味著什麼，以及你現在可以做哪些準備來降低不確定性。",
    body: [
      {
        heading: "1) What was announced (planning level + direction, not a guarantee)",
        paragraphs: [
          "Australia’s 2026–27 permanent Migration Program planning level is set at 185,000 places, with an approximate 70:30 split between Skilled and Family streams. Planning levels are program settings, not an approval guarantee for any individual application.",
          "A key direction is prioritising onshore applicants: 129,590 places are allocated to migrants already living in Australia, with 55,110 places available offshore (plus a small Special Eligibility allocation).",
          "This means the practical competition picture can differ depending on whether you are onshore or offshore, and which visa pathway you are pursuing."
        ]
      },
      {
        heading: "2) Why “onshore prioritisation” matters for real applicants",
        paragraphs: [
          "When the system signals onshore priority, applicants already in Australia may see relatively clearer transition pathways — but only if they meet visa criteria, have clean documentation, and can satisfy skills, work and English requirements.",
          "Offshore applicants should expect that invitations and processing capacity may concentrate on fewer cohorts (for example, highly skilled roles, employer-sponsored cases, or clearly shortage-linked occupations), but the exact impact varies by year and by instrument.",
          "The most important mindset shift is to treat your plan as a sequence: temporary status management → evidence readiness → eligibility checks → application timing. A single missing document can cost months."
        ]
      },
      {
        heading: "3) A practical checklist for students, graduates and skilled applicants (next 6–12 weeks)",
        paragraphs: [
          "Build a simple evidence pack: passport + visa history, qualification documents, translated transcripts, employment evidence (contracts, payslips, tax summaries where applicable), and updated English test results where required.",
          "Read official sources first, then map your pathway: Home Affairs program settings, your visa subclass page, and any state/territory nomination requirements (for points-tested routes). Save screenshots or PDFs of key rules you rely on.",
          "Do a “realism check” on timing and costs: skills assessment lead times, English test validity windows, and the risk of policy changes. If you need professional advice, use a registered Australian migration agent (MARA) or lawyer."
        ]
      },
      {
        heading: "4) Risk boundaries: what to avoid saying (and what to watch)",
        paragraphs: [
          "Avoid promises like “this policy guarantees PR” or “onshore means automatic success”. Outcomes depend on eligibility, evidence, quotas, processing priorities and the overall applicant pool.",
          "Watch updates around: detailed category allocations, points-test settings, state nomination rules, and employer-sponsored policy instruments. These details often come later than headline planning-level announcements.",
          "For high-stakes decisions (course choice, visa timing, relocation), rely on official pages and dated instruments, not social-media summaries."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、先搞清楚：規劃名額是「方向」，不是對個人的承諾",
        paragraphs: [
          "澳洲公布 2026–27 永居（Permanent Migration Program）規劃名額為 185,000，並維持大約 70:30 的技術類與家庭類比例。要特別注意：規劃名額是政府的年度配額設定，並不等於任何人「一定會批」。",
          "本次最值得關注的訊號是「境內優先」：公開信息指出，129,590 個名額將優先配置給已在澳洲境內居住的人士，境外名額為 55,110（另有少量 Special Eligibility）。",
          "因此，同樣是技術移民或雇主擔保，境內／境外的競爭環境與處理節奏可能不同；不同子類別也會呈現不同的實際體感。"
        ]
      },
      {
        heading: "二、為什麼「境內優先」會改變你的策略讀法",
        paragraphs: [
          "當系統更偏向境內申請人時，人在澳洲的申請者可能更容易形成「可持續的轉換路徑」——但前提是你確實符合條件、材料乾淨、英文與工作證據能對得上，以及能跟上政策與時間線。",
          "境外申請者則要更務實：邀請輪次與處理資源可能集中於更少的群體（例如高技能、雇主擔保或明確短缺的職位），但影響程度會因年度細分配額與實施文件而異。",
          "最重要的心態轉換是把移民路線視為「一段流程」：臨時身份管理 → 證據準備 → 資格核對 → 時點選擇。很多延誤不是分數不夠，而是證據不齊或版本不一致。"
        ]
      },
      {
        heading: "三、留學生、485、482 與技術路線：接下來 6–12 週可做的清單",
        paragraphs: [
          "做一套最小可用的 evidence pack：護照與簽證歷史、學歷文件、成績單與翻譯件、就業證據（合同、工資單、稅務文件如適用）、以及必要時更新的英文成績（注意有效期）。",
          "先看官方，再做路線對照：Home Affairs 的規劃與優先處理信息、你對應子類別簽證頁面、以及州／領地提名要求（如走 190/491 等分數制）。把你依賴的規則截圖或存成 PDF，保留日期。",
          "做一次「現實校準」：技能評估的等待時間、英文考試有效期、政策變動風險與整體成本。若涉及高風險決策，建議找澳洲註冊移民代理（MARA）或律師取得個案意見。"
        ]
      },
      {
        heading: "四、合規邊界：避免保證式說法，重點關注哪些後續更新",
        paragraphs: [
          "避免把政策訊號說成結果保證，例如「境內優先＝必拿 PR」。結果取決於資格條件、證據、年度配額、處理優先級與申請池競爭。",
          "接下來需要關注的通常包括：更細的類別配額拆分、分數制度與打分細則、州／領地提名政策、以及雇主擔保相關的實施文件與門檻更新。",
          "做重大決策（選課、簽證時點、搬遷）時，盡量依據官方頁面與有日期的政策文件，不要只依賴社交媒體或二手解讀。"
        ]
      }
    ],
    resources: [
      ["Home Affairs — Migration Program planning levels", "https://immi.homeaffairs.gov.au/what-we-do/migration-program-planning-levels"],
      ["Australian Government — Budget 2026–27", "https://budget.gov.au/index.htm"],
      ["Budget downloads (Budget papers)", "https://budget.gov.au/content/downloads.htm"]
    ],
    notes: [
      "General information only; not migration or legal advice.",
      "Eligibility and outcomes depend on current legislation, instruments, and departmental processing priorities.",
      "For professional advice, consult a registered Australian migration agent (MARA) or Australian legal practitioner."
    ]
  },
  {
    slug: "australia-employer-sponsorship-standard-business-sponsor-checklist",
    title: "Australia Employer Sponsorship: What a Business Must Check Before Sponsoring a Worker",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "settlement",
    kicker: "Employer sponsorship · SBS checklist",
    author: "留學導報編輯部",
    summary: "A compliance-first checklist for businesses and applicants reading Australian employer sponsorship, Standard Business Sponsor status, nomination evidence, salary thresholds and professional-advice boundaries.",
    titleZh: "什麼條件可以在澳洲給別人工作擔保？雇主擔保前的合規清單",
    summaryZh: "澳洲工作擔保不是個人一句話能完成的事，而是一套由企業擔保資格、職位真實性、提名、薪資、招聘證據與簽證申請共同構成的流程。本文把 Standard Business Sponsor、482/186/494 常見路線與高風險邊界整理成可核對清單。",
    body: [
      {
        heading: "Editorial note",
        paragraphs: [
          "This article is a general public briefing. It does not provide migration, legal, tax or employment-law advice. Businesses and applicants should check the current Home Affairs pages and consult a registered migration agent or Australian legal practitioner before acting."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、先分清：雇主擔保是企業流程，不是個人承諾",
        paragraphs: [
          "在澳洲給海外員工做工作擔保，通常涉及企業先成為 Standard Business Sponsor，再為特定職位提交 nomination，最後由員工申請相應簽證。常見路線包括 subclass 482 Skills in Demand、186 雇主提名永居及 494 區域雇主擔保。",
          "這裡的核心不是「某個人願不願意擔保」，而是企業是否合法營運、是否有真實職位需求、是否能支付市場薪資、是否能履行擔保義務。若只是為了簽證而製造職位，風險非常高。"
        ]
      },
      {
        heading: "二、企業端需要先核對的條件",
        paragraphs: [
          "第一，企業須是合法、持續經營並正在交易的澳洲企業，通常需要 ABN、公司或商業登記、財務與稅務記錄、業務合同、發票、租約或辦公地址等材料來支持其真實運作。",
          "第二，公司及相關負責人不應存在嚴重不良記錄，例如移民、勞工、稅務或合規違規。移民局會看企業是否有能力、也是否可信地履行 sponsorship obligations。",
          "第三，提名職位需要有真實商業需求，職位內容、組織架構、工作地點、全職安排、職責描述與薪資都要能互相對得上。小企業不是不能擔保，但更要證明財務能力和職位必要性。"
        ]
      },
      {
        heading: "三、職位與薪資：最容易出問題的地方",
        paragraphs: [
          "被提名職位通常需要落在相關 skilled occupation list 或 Core Skills Occupation List 的框架內。雇主還可能需要進行 Labour Market Testing，以證明已按要求嘗試在澳洲本地招聘。",
          "薪資不能只看雇主願意付多少，還要符合 Annual Market Salary Rate，並達到相應收入門檻，例如 482 Core Skills stream 的 Core Skills Income Threshold。具體金額會按日期與政策調整，發布前必須以 Home Affairs 當前頁面為準。",
          "雇主不能向被擔保人收取擔保費或回扣。這類行為不只是商業糾紛，而可能觸及移民與勞工合規問題。"
        ]
      },
      {
        heading: "四、給申請人和企業的低風險做法",
        paragraphs: [
          "企業端先建立一套 evidence pack：公司登記、ABN、財務報表、BAS 或稅務記錄、招聘廣告、組織架構、職位說明、薪資依據、僱傭合約及 SAF levy 預算。",
          "申請人端同步準備護照、簽證歷史、學歷證明、工作經驗、英文成績、技能評估或職業註冊資料。兩邊資料要能互相支持：職位需要什麼能力，申請人就要能證明自己具備什麼能力。",
          "若個案涉及公司新成立、親屬公司、董事或股東本人被提名、薪資來源不清或職位高度依賴申請人，應在行動前找 MARA 註冊移民代理或澳洲律師做正式評估。"
        ]
      }
    ],
    resources: [
      ["Home Affairs — Learn about sponsoring", "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring"],
      ["Home Affairs — Standard Business Sponsor", "https://immi.homeaffairs.gov.au/employer-subsite/Pages/becoming-standard-business-sponsor.aspx"],
      ["Home Affairs — Skills in Demand visa (subclass 482)", "https://immi.homeaffairs.gov.au/Visa-subsite/Pages/work/skills-in-demand-482-landing.aspx"],
      ["Home Affairs — Salary requirements", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482/salary-requirements"]
    ],
    notes: [
      "稿件來源：Gmail 2026-05-24〈什麼條件可以在澳洲給別人「工作擔保」〉，已改寫為合規公開稿。",
      "General information only; not migration, legal, tax or employment advice."
    ]
  },
  {
    slug: "australia-self-sponsorship-company-sponsor-risk-check",
    title: "Australia Self-Sponsorship Through Your Own Company: Why It Is High Risk",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "settlement",
    kicker: "Self-sponsorship · Risk check",
    author: "留學導報編輯部",
    summary: "A cautious briefing on Australian self-sponsorship through a Pty Ltd company, focusing on genuine position evidence, employer-employee relationship, business substance and professional review.",
    titleZh: "在澳洲自己開公司自擔保可行嗎？先看這份高風險核對清單",
    summaryZh: "澳洲自擔保常被簡化成「開一家公司擔保自己」，但實務上會面臨職位真實性、公司獨立營運、雇主—員工關係、薪資能力與商業實質等審查。本文只作風險教育，不建議讀者自行 DIY。",
    body: [
      {
        heading: "Editorial note",
        paragraphs: [
          "Self-sponsorship scenarios are fact-sensitive and high risk. This public article explains issues to check before seeking professional advice; it is not a route recommendation."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、自擔保不是魔法公式",
        paragraphs: [
          "所謂 self-sponsorship，通常指申請人通過自己控制或參與的澳洲公司，由公司作為雇主提名自己擔任某一職位。從法律結構上看，Pty Ltd 有限公司與個人是不同法律實體；但從移民審查角度看，這種安排會被高度審視。",
          "如果公司只是為了簽證而成立，沒有真實營運、沒有客戶、沒有收入、沒有獨立管理能力，或職位本身並非商業必需，拒簽風險很高。"
        ]
      },
      {
        heading: "二、Sole trader 通常不是合適結構",
        paragraphs: [
          "獨資或自僱模式很難形成清晰的雇主與員工關係。雇主擔保需要一個能提名、監督、支付薪資並履行擔保義務的雇主實體。",
          "因此，自擔保討論中常見的是 Pty Ltd 有限公司結構。但公司存在本身並不等於可行，審查重點仍是商業實質與職位真實性。"
        ]
      },
      {
        heading: "三、四個核心風險點",
        paragraphs: [
          "第一，職位是否真實。職位應是公司業務真正需要，而不是為某個人量身定做的簽證空缺。職責、職業清單、招聘證據、業務計劃和組織架構要互相支持。",
          "第二，公司是否有財務能力。公司需要能支付符合市場水平和收入門檻的薪資，並能承擔 SAF levy、會計、合規和營運成本。新公司或低營收公司會面臨更重的證據壓力。",
          "第三，雇主—員工關係是否成立。如果申請人同時是唯一董事、唯一股東、唯一員工，且沒有人能有效監督或解雇他，案件會非常敏感。",
          "第四，資金流是否清晰。若薪資實質上來自申請人自己循環支付，或公司收入與薪資承擔不匹配，會削弱案件可信度。"
        ]
      },
      {
        heading: "四、比較務實的準備方式",
        paragraphs: [
          "在尋求專業意見前，先整理公司材料：ABN/ACN、ASIC 記錄、BAS、稅表、銀行流水、客戶合同、發票、租約、業務計劃、員工或承包商記錄、招聘材料與職位說明。",
          "同時整理個人材料：學歷、工作經驗、英文、職業資格、技能評估或註冊要求。若公司需求和個人能力不能自然對接，不應勉強包裝。",
          "這類案件不適合自行操作。應先讓 MARA 註冊移民代理或澳洲律師審查公司結構、職位、薪資、證據與替代路線。"
        ]
      }
    ],
    resources: [
      ["Home Affairs — Become a sponsor", "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor"],
      ["Home Affairs — Standard Business Sponsor", "https://immi.homeaffairs.gov.au/employer-subsite/Pages/becoming-standard-business-sponsor.aspx"],
      ["Home Affairs — Skills in Demand visa (subclass 482)", "https://immi.homeaffairs.gov.au/Visa-subsite/Pages/work/skills-in-demand-482-landing.aspx"],
      ["Office of the Migration Agents Registration Authority", "https://www.mara.gov.au/"]
    ],
    notes: [
      "稿件來源：Gmail 2026-05-24〈澳洲移民：自己開公司自擔保（Self-Sponsorship）？〉，已改寫為風險教育稿。",
      "Not a recommendation to pursue self-sponsorship."
    ]
  },
  {
    slug: "australia-training-visa-407-sponsorship-nomination-sequence-update",
    title: "Australia Training Visa 407: Sponsorship and Nomination Must Be Planned Before Lodgement",
    date: "2026-05-24",
    category: "Australia Migration",
    column: "settlement",
    kicker: "Training visa 407 · Planning sequence",
    author: "留學導報編輯部",
    summary: "A short public briefing on why Training Visa (subclass 407) applicants and sponsors should plan sponsorship, nomination and visa lodgement sequence carefully and verify requirements on official Home Affairs pages.",
    titleZh: "澳洲 407 Training Visa：先核對 sponsor 與 nomination，再安排遞交節奏",
    summaryZh: "407 培訓簽證不應只看簽證表格本身。申請前需要先核對 Temporary Activities Sponsor、Training Visa Nomination、培訓安排、時間線與簽證空窗風險。本文根據公開線索改寫，避免轉載第三方通訊原文。",
    body: [
      {
        heading: "Editorial note",
        paragraphs: [
          "This article is rewritten from a newsletter lead and checked against official Home Affairs entry points. Readers must verify current requirements directly before acting."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、407 不是單獨一張簽證申請表",
        paragraphs: [
          "Training Visa (subclass 407) 面向在澳洲參加職業培訓、專業發展或特定訓練安排的人群。它通常涉及三層問題：誰是 sponsor，培訓或 nomination 是否被接受，以及申請人自己的簽證條件是否滿足。",
          "很多申請延誤不是因為申請人不知道 407，而是把 sponsor、nomination 和 visa lodgement 的先後順序想得太簡單。若前置審批未完成或材料不匹配，後續時間線會被拉長。"
        ]
      },
      {
        heading: "二、申請前要先問的三個問題",
        paragraphs: [
          "第一，sponsor 是否具備資格。對 407 相關活動，通常需要 Temporary Activities Sponsor 或其他符合規則的 sponsor 身份。是否已批准、是否仍有效、可否覆蓋該活動，都要核對。",
          "第二，nomination 或培訓安排是否清楚。培訓目的、職業關聯、時間、地點、監督安排、培訓計劃和申請人背景要一致。",
          "第三，簽證時間線是否安全。若申請人已在澳洲，必須特別注意現有簽證到期、bridging visa、遞交節點與是否可能出現身份空窗。"
        ]
      },
      {
        heading: "三、給學生與雇主的實務清單",
        paragraphs: [
          "雇主或培訓方先建立 sponsor/nomination 文件包，包括 sponsor approval、training plan、職責與培訓內容、監督人資料、保險、場地和時間安排。",
          "申請人同步準備護照、簽證歷史、學歷與工作經驗、英文或職業背景材料、健康與品格資料，以及與培訓目標相匹配的個人說明。",
          "不要只依賴社交媒體或招聘通訊的摘要。407 涉及簽證狀態和培訓合規，必須回到 Home Affairs 官方頁面，必要時找 MARA 註冊移民代理確認。"
        ]
      }
    ],
    resources: [
      ["Home Affairs — Training visa (subclass 407)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407"],
      ["Home Affairs — Temporary Activities Sponsor", "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/temporary-activities-sponsor"],
      ["Office of the Migration Agents Registration Authority", "https://www.mara.gov.au/"]
    ],
    notes: [
      "稿件來源：Gmail 2026-05-24 LinkedIn newsletter 線索，公開稿已重寫，未轉載第三方原文。",
      "Must be checked against current Home Affairs requirements before case use."
    ]
  },
  {
    slug: "bytedance-scholarship-2026-ai-students-application-briefing",
    title: "ByteDance Scholarship 2026: A Briefing for AI and Computer Science Students",
    date: "2026-05-24",
    category: "Scholarships",
    column: "study",
    kicker: "Scholarship watch · AI research",
    author: "留學導報編輯部",
    summary: "A concise student-facing note on the ByteDance Scholarship application window, eligibility signals and preparation checklist, based on the official scholarship website and internal editorial lead.",
    titleZh: "字節跳動獎學金 2026：AI 與計算機方向學生的申請提示",
    summaryZh: "字節跳動獎學金已開放新一輪申請，面向人工智能、計算機科學及相關方向學生。本文把申請截止、研究成果、導師推薦與材料準備整理成導報提示，提醒學生以官方頁面為準。",
    body: [
      {
        heading: "Editorial note",
        paragraphs: [
          "This scholarship briefing is for general information. Applicants should rely on the official ByteDance Scholarship website for eligibility, deadlines, award structure and form submission."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、這是一個值得 AI / CS 學生關注的企業獎學金",
        paragraphs: [
          "字節跳動獎學金面向人工智能、計算機科學及相關研究方向學生，重點關注科研潛力、階段性成果、研究問題意識與長期價值。對準備博士、科研實習、AI 安全、多模態生成、機器學習系統等方向的學生來說，這類項目可以作為研究履歷的一部分來準備。",
          "根據官方獎學金頁面與郵件線索，新一輪申請節點集中在 2026 年 6 月下旬前後；具體 eligibility、地域、畢業時間、申請表和材料要求必須以官方頁面為準。"
        ]
      },
      {
        heading: "二、申請材料不只是堆成果",
        paragraphs: [
          "申請人應優先整理三類材料：第一，科研成果證明，例如論文、預印本、開源項目、競賽、專利或可展示的研究 demo；第二，導師推薦或學術評價；第三，一份能說清研究問題、方法、貢獻和未來方向的個人陳述。",
          "若成果仍處於階段性狀態，也不必急於包裝成完成品。更重要的是講清楚：你在解決什麼問題，已有證據支持到哪一步，下一步要如何驗證。"
        ]
      },
      {
        heading: "三、適合海外學生的準備節奏",
        paragraphs: [
          "第一週：核對官方申請頁，保存截止日期、申請表、資格條件和推薦信要求。若不確定自己是否符合地域或畢業時間條件，先向官方渠道確認。",
          "第二週：把研究成果整理為一頁 research evidence pack，包括項目名稱、你的角色、方法、結果、連結和可核驗材料。",
          "第三週：請導師或研究 supervisor 提前準備推薦意見。不要等到截止前才發材料，因為高質量推薦需要對方理解你的研究脈絡。",
          "最後：提交前做一次事實核對，確保日期、學校、研究方向、附件命名、連結權限和英文/中文表述一致。"
        ]
      },
      {
        heading: "四、導報提醒",
        paragraphs: [
          "獎學金資訊變動快，尤其是申請範圍、截止時間、獎項數量和評審安排。本文只作申請提示，不替代官方公告，也不承諾申請結果。",
          "對海外申請人而言，最有價值的準備不是臨時寫一份漂亮文書，而是提前建立可核對的科研證據包。這份材料未必只用於一個獎學金，也可支持博士申請、暑研、研究助理申請和學術面試。"
        ]
      }
    ],
    resources: [
      ["ByteDance Scholarship — Official Website", "https://scholarship.bytedance.com/en"]
    ],
    notes: [
      "稿件來源：Gmail 2026-05-24〈導報文 字节跳动奖学金〉，已改寫為申請提示稿。",
      "Scholarship details must be checked on the official site before submission."
    ]
  },
  {
    slug: "business-marketing-media-course-fit-portfolio-evidence-pack",
    title: "Business, Marketing or Media? A Module-First Course-Fit Checklist + Mini Portfolio Plan",
    date: "2026-05-24",
    category: "University Pathways",
    column: "study",
    kicker: "Course fit · Evidence pack",
    author: "留學導報編輯部",
    summary: "A practical way to choose between Business, Marketing and Media programmes by reading modules (not just course names), then building a small evidence pack and portfolio that supports honest statements and interviews without over-claiming outcomes.",
    titleZh: "商科、行銷還是媒體？用「課程模組」判斷適配度：選科清單＋迷你作品集方案",
    summaryZh: "不要只看課程名稱與排名；先讀課程模組與評核方式，再做一套「證據包＋迷你作品集」：既能支援 Personal Statement / SOP 與面試，又能避免空泛或誇大，讓申請更可核對、也更合規。",
    body: [
      {
        heading: "1) Start with modules, assessments, and graduate skills",
        paragraphs: [
          "Course titles overlap. What really differs is the module mix (strategy, consumer behaviour, analytics, media theory, production, branding), the assessment style (essays, reports, group projects, presentations, portfolios) and the skill outcomes.",
          "Before deciding, pull the module list for each programme and mark: (a) 3 modules you are genuinely curious about, (b) 2 modules you feel underprepared for, and (c) the main assessment types.",
          "If a programme is heavily quantitative (statistics, econometrics, marketing analytics), plan how you will show readiness (maths background, spreadsheet work, simple data projects) rather than hoping motivation alone will carry it."
        ]
      },
      {
        heading: "2) Build a one-page course-fit evidence pack (easy to reuse)",
        paragraphs: [
          "Create a single-page evidence pack that you can reuse across applications: your target programme, 3 module links, 3 evidence bullets, and 2 learning goals for your first term.",
          "Evidence can be small but specific: a club role, a part-time job task, a short online course certificate, a reading log, or a mini research note with sources.",
          "Keep claims cautious and verifiable: describe what you did, what you learned, and what you would improve next time."
        ]
      },
      {
        heading: "3) A mini portfolio plan: 3 small projects that fit most routes",
        paragraphs: [
          "Project A (analysis): choose one brand or organisation, write a 700–1,000 word campaign analysis with 3–5 sources and a short reflection on metrics and limitations.",
          "Project B (audit): do a content audit for 10 posts (or 10 pages). Summarise themes, audience assumptions and improvements in a simple spreadsheet + 1-page insight note.",
          "Project C (data-lite): use publicly available data (e.g., website traffic estimates, simple survey results, platform analytics screenshots) to produce 3 charts and explain what the data can and cannot show."
        ]
      },
      {
        heading: "4) A safe application line: demonstrate readiness, not promises",
        paragraphs: [
          "In statements and interviews, focus on readiness signals: module awareness, realistic learning plan, evidence-based examples, and an understanding that admission decisions depend on the institution's criteria and the wider applicant pool.",
          "If you are still undecided, say so strategically: show how your evidence pack helps you test-fit between Business, Marketing and Media pathways, and what you will do in the next 6–8 weeks to reduce uncertainty."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、先看「課程模組」與評核方式，不要只看課程名稱",
        paragraphs: [
          "商科、行銷與媒體類課程名稱常常互相重疊；真正差異在於模組組合（策略、消費者行為、數據分析、媒體理論、內容製作、品牌等）、評核形式（essay、report、group project、presentation、portfolio）與要訓練的能力。",
          "建議把每個目標課程的 module list 拉出來，逐一標記：(a) 你真正想學的 3 個模組；(b) 你目前最不熟悉的 2 個模組；(c) 主要評核方式是什麼。",
          "如果課程偏量化（統計、計量、行銷分析），就要提早規劃「如何證明你準備好了」：例如數學背景、試算表能力、簡單數據小專題，而不是只用熱情敘述。"
        ]
      },
      {
        heading: "二、做一份可重複使用的「一頁證據包」",
        paragraphs: [
          "把申請材料做成一頁式 evidence pack：目標課程、3 個模組連結、3 條可核對的證據點、以及開學第一學期的 2 個學習目標。",
          "證據不必很大，但要具體：社團職務、兼職工作任務、短課程證書、閱讀筆記、帶來源的 mini research note 都可以。",
          "表述要保守且可驗證：說清楚你做了什麼、學到什麼、下次會怎麼改進，避免誇大或把結果講成保證。"
        ]
      },
      {
        heading: "三、迷你作品集：3 個小專題，幾乎適用所有路線",
        paragraphs: [
          "專題 A（分析）：選一個品牌或機構，寫 700–1,000 字的 campaign 分析，引用 3–5 個資料來源，並補一段對指標與限制的反思。",
          "專題 B（盤點）：做一份 10 篇貼文（或 10 個網頁）的 content audit，用簡單表格整理主題、受眾假設與改進建議，再配一頁 insight note。",
          "專題 C（輕數據）：用公開資料或可分享的數據截圖（例如平台分析、簡單問卷結果）做 3 張圖表，並解釋這些數據「能說明什麼」與「不能說明什麼」。"
        ]
      },
      {
        heading: "四、合規的申請敘事：展示準備度，而不是承諾結果",
        paragraphs: [
          "Personal Statement / SOP 與面試建議聚焦在「準備度訊號」：你了解模組、你有可執行的學習計劃、例子有證據、也明白錄取取決於校方標準與整體競爭情況。",
          "如果你仍在 Business／Marketing／Media 之間猶豫，可以用更成熟的方式呈現：說明你如何用 evidence pack 來做路線 test-fit，以及未來 6–8 週你會做哪些行動（補課、做專題、閱讀與反思）來降低不確定性。"
        ]
      }
    ]
  },
  {
    slug: "othm-health-social-care-bilingual-study-series-plan",
    title: "Overseas Publishing Plans an OTHM Health & Social Care Bilingual Study Series",
    date: "2026-05-24",
    category: "OTC News",
    column: "study",
    kicker: "海外書局 · OTHM 教材策劃",
    author: "留學導報編輯部",
    summary: "Overseas Publishing House is planning an independent bilingual study-companion series for OTHM Health and Social Care learners, linking assignment support, health terminology, UK care-sector learning and Australia pathway context.",
    titleZh: "海外書局策劃 OTHM 健康護理雙語教材：從 Level 3 到 Level 7 的學習支持路線",
    summaryZh: "海外書局正在策劃《OTHM 健康護理雙語精講》系列，面向華語學生、照護從業者與英澳健康護理路線規劃人群。這套書的重點不是替代官方課綱，而是把英文資格要求、作業寫作、健康護理術語與升學職業路線翻譯成可操作的學習支持。",
    body: [
      {
        heading: "1) Why OTC Is Planning This Series",
        paragraphs: [
          "Overseas Publishing House is preparing a bilingual OTHM Health and Social Care study-companion series for Chinese-speaking learners who need both academic structure and practical pathway context.",
          "Health and care is no longer a narrow vocational niche. In the UK, adult social care continues to face sustained workforce pressure; in Australia, ageing care, disability support, community health and nursing-related routes remain central to study and career planning.",
          "For many students, the hardest part is not only the English. It is understanding how a qualification title, a regulated framework, an assignment brief, a workplace skill and a future progression route fit together."
        ]
      },
      {
        heading: "2) Who the Series Serves",
        paragraphs: [
          "The planned readers include OTHM Health and Social Care learners, Chinese-speaking care-sector workers, students comparing UK and Australian health-care routes, and families planning longer-term health, social care or health-management progression.",
          "Each guide will use bilingual explanation, health-care terminology, assignment-oriented frameworks and official-source reading lists to make the learning path more legible.",
          "The series is designed as an independent learning-support product. It is not an official OTHM publication, not a model-answer bank and not a substitute for centre-issued assessment instructions."
        ]
      },
      {
        heading: "3) Five Books, Level 3 to Level 7",
        paragraphs: [
          "Book 1 covers Level 3 entry and career orientation: health systems, care roles, foundation concepts, terminology and assignment-writing basics.",
          "Book 2 covers Level 4 management foundations: care-setting organisation, communication, staff coordination, multicultural care and case-based writing.",
          "Book 3 covers Level 5 core practice and management: CQC standards, quality management, research methods, mental health, disability support, NDIS and the boundary between OTHM Level 5 and Australian Diploma of Nursing routes.",
          "Book 4 covers Level 6 academic progression: referencing, policy analysis, critical thinking and advanced-entry preparation.",
          "Book 5 covers Level 7 management and master's preparation: research design, health-system leadership, strategy, postgraduate progression and cross-disciplinary health-management planning."
        ]
      },
      {
        heading: "4) Market and Distribution",
        paragraphs: [
          "The first release strategy is PDF-first: Payhip for direct ebook sales, then Amazon KDP and print-on-demand options for wider discoverability once the manuscript and design system are stable.",
          "OTC can also use the guides as course-bundle resources for enrolled learners, as seminar handouts for health-pathway enquiries, and as bilingual lead magnets connected to Study Hub and Overseas Study Review articles.",
          "The editorial plan prioritises Level 3 and Level 5 first. Level 3 supports new learners, while Level 5 has the strongest pathway conversation because students often compare it with Australian VET, nursing and community-services routes."
        ]
      },
      {
        heading: "5) Academic Review and Compliance Boundary",
        paragraphs: [
          "OTC is preparing a health-subject evidence workflow around tutor suitability, academic review and learning-resource readiness. Medical and care-sector expertise will be used to review terminology, clinical context and ethical boundaries.",
          "The compliance line must stay clear: every book will cite public official sources, explain learning concepts and provide frameworks for study. It will not reproduce confidential assessment materials, quality-assurance forms, learner submissions or official marking tools.",
          "Students must always follow the current OTHM specification and instructions issued by their approved centre."
        ]
      },
      {
        heading: "6) What Happens Next",
        paragraphs: [
          "The public planning column is now live on the OTC website, giving readers a central place to track the series concept, book matrix, market logic, distribution channels and compliance notes.",
          "The next practical steps are academic review, manuscript sample preparation, cover and interior template development, and a small pilot release for Level 3 or Level 5 before the full series is expanded."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、為什麼海外書局要策劃這套書",
        paragraphs: [
          "海外書局正在策劃一套《OTHM 健康護理雙語精講》系列，目標讀者是需要同時理解英文資格要求、作業寫作、健康護理術語和英澳升學職業路線的華語學習者。",
          "健康護理不再只是狹義的職業技能方向。英國成人社會照護長期存在人手壓力；澳洲的老人護理、殘疾支援、社區健康與護理相關路線，也一直是學生規劃升學、就業和長期發展時無法繞開的領域。",
          "很多學生真正卡住的不是單純英文，而是不知道一個資格名稱、一套監管框架、一份 assignment brief、一項工作技能和未來的升學或職業路線到底如何連起來。這套書要解決的正是這個問題。"
        ]
      },
      {
        heading: "二、這套書服務誰",
        paragraphs: [
          "這套系列面向四類人：正在或準備修讀 OTHM Health and Social Care 的學生；已在 care home、community care、support work 等場景工作的華語從業者；比較英國 OTHM 與澳洲健康護理路線的學生；以及為子女規劃健康、社會照護或健康管理方向的家庭。",
          "每冊會用中英雙語說明、健康護理詞彙、assignment 寫作框架和官方來源閱讀清單，把原本散落在 specification、課堂材料、政策網站和職業路線圖裡的資訊整理成可讀、可學、可諮詢的教輔材料。",
          "這套書的定位是獨立學習支持，不是 OTHM 官方教材，不是標準答案庫，也不替代 approved centre 發出的評核指引。"
        ]
      },
      {
        heading: "三、五冊規劃：從 Level 3 到 Level 7",
        paragraphs: [
          "第一冊是 Level 3 入門與職業定向，涵蓋英國與澳洲醫療照護體系基礎、健康護理職業路線、核心概念、術語表與 assignment 寫作入門。",
          "第二冊是 Level 4 管理基礎，重點放在醫療及照護機構組織、人員協調、溝通、多元文化護理和案例式寫作。",
          "第三冊是 Level 5 執業核心與管理，會處理 CQC 標準、護理品質管理、研究方法、心理健康、殘疾支援倫理、澳洲 NDIS 與 CHC 體系，也會釐清 OTHM Level 5 與澳洲 Diploma of Nursing 之間不能直接互換的邊界。",
          "第四冊是 Level 6 學術升學橋樑，聚焦文獻引用、政策分析、批判性思維和澳洲大學 Advanced Entry 文件準備。",
          "第五冊是 Level 7 管理碩士預備，面向研究設計、醫療系統領導力、策略管理、研究生銜接和跨學科健康管理路線。"
        ]
      },
      {
        heading: "四、市場與發行渠道",
        paragraphs: [
          "初期發行建議採用 PDF ebook first：先在 Payhip 上架電子版，待版式、封面與內容模板穩定後，再擴展至 Amazon KDP、print-on-demand 或其他紙本分發渠道。",
          "OTC 也可以把這套書用作在校學生的課程配套、健康護理路線講座的資料包，以及 Study Hub 與海外留學導報文章的轉化入口。",
          "發行順序建議先做 Level 3 和 Level 5。Level 3 對新生最友好，Level 5 則最容易引發英國 OTHM、澳洲 VET、護理和社區服務路線之間的比較需求。"
        ]
      },
      {
        heading: "五、學術審閱與合規邊界",
        paragraphs: [
          "OTC 正在圍繞 Health and Social Care 方向準備導師資格、學術審閱和學習資源證據。醫學與照護領域的專業背景將用於審閱術語、臨床語境和倫理邊界。",
          "合規邊界必須清楚：每冊可以引用公開官方來源、解釋學習概念、提供寫作框架和延伸閱讀；但不能收錄保密評核材料、質量保證表格、學生作業、官方 marking tools 或可直接提交的標準答案。",
          "學生仍必須以最新官方 specification 及 approved centre 發出的指引為準。"
        ]
      },
      {
        heading: "六、下一步",
        paragraphs: [
          "OTC 官網的出版策劃專欄已經作為這套系列的公開入口，用於展示系列定位、五冊書目、讀者市場、發行渠道與合規聲明。",
          "下一步將進入學術審閱、樣章製作、封面與內頁模板設計，以及 Level 3 或 Level 5 小規模試發行。等首冊穩定後，再逐步擴展至完整 Level 3 至 Level 7 系列。"
        ]
      }
    ],
    resources: [
      ["OTC publishing series planning column", "https://overseasuk.com/publishing/othm-health-social-care-bilingual-series/"],
      ["OTHM Health and Social Care subject area", "https://othm.org.uk/subject/health-and-social-care"],
      ["Skills for Care workforce intelligence", "https://www.skillsforcare.org.uk/Adult-Social-Care-Workforce-Data/Workforce-intelligence/publications/Topics/State-of-the-adult-social-care-sector-and-workforce-in-England.aspx"],
      ["Care Quality Commission State of Care", "https://www.cqc.org.uk/publications/major-report/state-care/2024-2025"]
    ],
    relatedReadings: [
      "australia-health-vocation-pathway",
      "othm-health-social-care-australia-vet-comparison",
      "otc-othm-centre-renewal-2026"
    ]
  },
  {
    slug: "australia-health-vocation-pathway",
    title: "Health and Care Careers in Australia: OTHM Qualifications and Local VET Training Routes",
    date: "2026-05-24",
    category: "University Pathways",
    column: "study",
    kicker: "澳洲醫療 · 職業培訓路線",
    author: "留學導報編輯部",
    summary: "A practical route map for Chinese-speaking students comparing OTHM Health and Social Care qualifications, Australian VET training and regulated health-care pathways.",
    titleZh: "在澳洲做醫療護理：OTHM 資格與本地 VET 培訓的完整路線圖",
    summaryZh: "本文把澳洲醫療護理職業機會、OTHM 健康與社會護理資格、澳洲本地 VET 培訓及護理執業邊界放在同一張路線圖中，幫學生判斷應從英國 OTHM、澳洲 VET 還是大學銜接開始。",
    body: [
      {
        heading: "1) Why Health and Care Is One of Australia's Most Practical Career Routes",
        paragraphs: [
          "Australia's ageing population, disability support needs and community-care workforce demand make health and care one of the clearest long-term study and career directions for international students.",
          "For Chinese-speaking students in the UK or planning to move to Australia, this is not only a stable employment sector. It may also connect with skilled occupation planning, depending on the specific occupation, qualification, registration body and visa route.",
          "The practical question is not whether the sector matters, but where to start: UK OTHM, Australian VET, university advanced entry, or a regulated professional pathway."
        ]
      },
      {
        heading: "2) Two Qualification Systems Running in Parallel",
        paragraphs: [
          "Australia's VET system sits within the Australian Qualifications Framework and is delivered by TAFEs and registered training organisations. In health and care, common families include CHC community services and HLT health training package qualifications.",
          "OTHM is a UK Ofqual-regulated awarding organisation. Its Health and Social Care qualifications run from Level 3 to Level 7 under the UK RQF framework.",
          "These systems are not rivals. A useful way to read them is: OTHM can help open an academic progression conversation, while Australian VET is the local training route for Australian workplace competency and, where applicable, regulated pathways."
        ]
      },
      {
        heading: "3) OTHM Health Qualifications and Australian VET References",
        paragraphs: [
          "OTHM Level 3 Foundation Diploma in Health and Social Care may be compared, for planning purposes, with Australian entry-level care training such as CHC33021 Certificate III in Individual Support and HLT33115 Certificate III in Health Services Assistance.",
          "OTHM Level 4 Diploma in Health and Social Care Management may be compared with Certificate IV-level support routes. For disability, students should check the current CHC43121 Certificate IV in Disability Support; the older CHC43115 Certificate IV in Disability has been superseded.",
          "OTHM Level 5 Diploma or Extended Diploma in Health and Social Care Management may sit near AQF Diploma-level planning references such as HLT54121 Diploma of Nursing or CHC52025 Diploma of Community Services, but this is not direct equivalence.",
          "OTHM Level 6 Health and Social Care Management can be compared at planning level with advanced diploma or management routes, while OTHM Level 7 is better read against Australian graduate diploma or master's-level health management study."
        ]
      },
      {
        heading: "4) The Most Important Clarification",
        paragraphs: [
          "Students sometimes see OTHM Level 5 Health and Social Care and assume it means they can immediately work as a nurse in Australia. That assumption is not safe.",
          "Enrolled Nurse registration in Australia is regulated. Training.gov.au explains that a learner seeking registration as an enrolled nurse must complete a Diploma of Nursing program accredited by ANMAC and approved by the Nursing and Midwifery Board of Australia as an approved program of study. Students should check AHPRA's approved programs list before relying on any course.",
          "The practical use of OTHM Level 5 in this field is usually academic entry or advanced-entry discussion with universities, not direct nursing registration."
        ]
      },
      {
        heading: "5) Four Route Options",
        paragraphs: [
          "Route A is the direct Australian employment route: study a local VET qualification such as CHC33021, a relevant Certificate IV, CHC52025 or HLT54121 through an appropriately scoped provider.",
          "Route B is the UK-to-Australia academic route: study OTHM Level 4 or Level 5 Health and Social Care with OTC, then apply for Australian university advanced entry into a health science, nursing-related, public health or health management degree where accepted.",
          "Route C is the management route: use OTHM Level 6 or Level 7 Health and Social Care Management to support applications to Australian postgraduate health management or community-sector management programs.",
          "Route D is the migration-sensitive route: any skilled migration planning must be checked against Home Affairs, SkillSelect, state nomination rules and a registered MARA / OMARA migration agent."
        ]
      },
      {
        heading: "6) Providers to Consider",
        paragraphs: [
          "For VET routes, students should check public TAFE providers such as TAFE NSW, TAFE Queensland, TAFE SA, North Metropolitan TAFE, South Metropolitan TAFE, and Victorian providers such as Holmesglen Institute, Box Hill Institute and Chisholm TAFE.",
          "Private RTOs may also offer health, individual support, disability, ageing support, community services or nursing-related training. Before enrolling, students should check RTO scope, current course code, CRICOS status for international students, placement arrangements and regulatory recognition.",
          "For OTHM-to-university routes, universities assess credit and advanced entry case by case. Students should prepare transcripts, unit specifications, English evidence and a clear study plan."
        ]
      },
      {
        heading: "7) Disclaimer",
        paragraphs: [
          "This article is general education information and a route-planning guide. It is not migration advice, legal advice, employment advice or professional registration advice.",
          "Australian health-care professional registration must be confirmed with the relevant regulator, including AHPRA, NMBA and ANMAC where applicable. Course availability, fees, placement hours and provider approvals must be checked directly with official registers and institutions."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、為什麼醫療護理是澳洲最值得走的職業路線之一",
        paragraphs: [
          "澳洲人口老齡化正在加速，老人護理、殘疾支援、社區醫療與健康管理長期面臨人手缺口。對於正在英國或準備前往澳洲的華人學生，這意味著一條相對清晰、穩定、可長期累積的職業路線。",
          "醫療護理不只是一份工作，它還可能與澳洲技術移民的職業規劃相連。不同職業類別，例如 Enrolled Nurse、個人護理工作者、社區服務工作者或管理類職位，分別對應不同的資格、評估機構與簽證提名邏輯。",
          "真正需要判斷的不是「醫療護理是否值得走」，而是「從哪裡開始、走哪條路、在哪一步需要本地資格或監管機構確認」。"
        ]
      },
      {
        heading: "二、兩條並行的資格體系",
        paragraphs: [
          "在澳洲醫療護理領域，存在兩套互有關聯但性質不同的資格體系。",
          "第一套是澳洲 VET 體系。VET 即 Vocational Education and Training，按澳洲資歷框架（AQF）分級，由各州 TAFE 及已登記培訓機構（RTO）提供。醫療護理常見資格分為 CHC 系列（社區服務、老人護理、殘疾支援、個人支援）和 HLT 系列（衛生服務、護理及相關健康服務）。",
          "第二套是英國 OTHM 資格體系。OTHM 是英國 Ofqual 監管的頒證機構，其健康與社會護理資格從 Level 3 延伸至 Level 7，按英國 RQF 框架認可。OTHM 的優勢在於可在英國修讀，並作為澳洲大學銜接入學或 Advanced Entry 申請的材料之一。",
          "簡單理解：OTHM 負責開門，VET 負責落地。前者更偏學術銜接與路線準備，後者更偏澳洲本地工作能力、實習與執業環境。"
        ]
      },
      {
        heading: "三、OTHM 健康護理資格清單與澳洲對應",
        paragraphs: [
          "OTHM Level 3 Foundation Diploma in Health and Social Care，可作為層級參考，對照澳洲 CHC33021 Certificate III in Individual Support（Ageing / Disability）及 HLT33115 Certificate III in Health Services Assistance。",
          "OTHM Level 3 Foundation Diploma in Health and Social Care 由 6 個必修單元組成，共 60 學分，旨在為學習者在醫療及社會護理行業擔任支援工作者、高級支援工作者或護理助理職位做準備。",
          "澳洲 CHC33021 Certificate III in Individual Support 針對老人護理、殘疾支援及個人支援等入門工作場景。training.gov.au 顯示，該資格要求學習者完成至少 120 小時的工作實踐。",
          "OTHM Level 4 Diploma in Health and Social Care Management，可作為層級參考，對照澳洲 Certificate IV 類支援資格。老人護理方向可查看 CHC43015 Certificate IV in Ageing Support；殘疾支援方向應查看現行 CHC43121 Certificate IV in Disability Support。舊版 CHC43115 Certificate IV in Disability 已被 CHC43121 取代。",
          "OTHM Level 5 Diploma / Extended Diploma in Health and Social Care Management，可作為層級參考，對照 HLT54121 Diploma of Nursing 及 CHC52025 Diploma of Community Services。但這只是層級參考，不代表資格可以互相替代。",
          "OTHM Level 6 Diploma in Health and Social Care Management，可對照 Advanced Diploma 或社區服務管理方向；OTHM Level 7 Diploma in Health and Social Care Management 在澳洲 VET 體系沒有直接對應，更適合銜接 Graduate Diploma of Health Management 或 Master of Health Management 等大學課程。"
        ]
      },
      {
        heading: "四、最重要的一個釐清",
        paragraphs: [
          "許多學生看到 OTHM Level 5 Health and Social Care，會直接聯想到「我可以在澳洲做護士了」。這個理解必須糾正。",
          "澳洲 Enrolled Nurse 的執業資格受監管。training.gov.au 對 HLT54121 Diploma of Nursing 的說明指出，若要申請成為澳洲 Enrolled Nurse 並在澳洲執業，學習者須完成由 ANMAC 認證、並由 Nursing and Midwifery Board of Australia（NMBA）批准為 approved program of study 的 Diploma of Nursing 課程，並應通過 AHPRA 核查教育提供者及課程批准狀態。",
          "因此，OTHM Level 5 Health and Social Care 的實際用途不是執業許可，而是大學入學或 Advanced Entry 申請材料。它可以用於申請澳洲大學 Bachelor of Nursing、Bachelor of Health Science、Public Health 或 Health Management 等相關課程，但能否減免學分由澳洲大學逐案評估。",
          "如果學生的明確目標是 Enrolled Nurse 執業，核心路線仍是澳洲本地獲認可的 HLT54121 Diploma of Nursing 或受監管機構承認的等值路線。"
        ]
      },
      {
        heading: "五、路線選擇指引",
        paragraphs: [
          "路線 A：直接在澳洲就業。適合已在澳洲、希望盡快取得本地工作資格的學生。可優先查看 CHC33021、CHC43015、CHC43121、CHC52025 或 HLT54121 等本地 VET 課程。修讀時間通常為 6 個月至 18 個月不等，具體取決於課程、校區、學習模式及實習要求。",
          "路線 B：英國 OTHM 銜接澳洲大學。適合希望先在英國修讀 OTHM Level 4 或 Level 5 Health and Social Care，再申請澳洲大學相關學位 Advanced Entry 的學生。這條路線更長，但最終有機會取得澳洲大學學位，長期發展空間較大。",
          "路線 C：OTHM Level 7 銜接澳洲碩士。適合已有醫療、護理、社區服務或管理背景，希望進入健康管理、醫院管理或社區服務機構管理層的人士。",
          "路線 D：技術移民路線。部分澳洲技術移民職業類別要求澳洲本地資格、海外等值評估、工作經驗或專業註冊。此路線必須查閱 SkillSelect、Home Affairs 及各州領地提名官方頁面，並諮詢合資格 MARA / OMARA 移民代理。"
        ]
      },
      {
        heading: "六、主要院校與培訓機構參考",
        paragraphs: [
          "澳洲 VET 路線可先查看各州 TAFE 及 RTO。常見公立提供者包括 TAFE NSW、TAFE Queensland、TAFE SA、North Metropolitan TAFE、South Metropolitan TAFE，以及維州的 Holmesglen Institute、Box Hill Institute、Chisholm TAFE 等。",
          "私立 RTO 亦可能提供老人護理、殘疾支援、個人支援、社區服務或護理相關課程。報讀前必須核查 RTO scope、課程代碼、CRICOS 狀態（如涉及國際學生簽證）、實習安排、英語要求、學費及行業認可。",
          "如果學生走 OTHM 銜接澳洲大學路線，應提前準備成績單、資格證書、課程單元說明、英文成績、個人陳述及清晰的職業計劃。澳洲大學是否接受 Advanced Entry 或 credit transfer，由院校按個案決定。"
        ]
      },
      {
        heading: "七、OTC 可以如何協助",
        paragraphs: [
          "OTC 可協助學生整理 OTHM 資格、英國學習記錄、課程單元說明及澳洲申請文件，並根據學生目標判斷應優先看 VET、TAFE、大學 Advanced Entry 還是健康管理碩士路線。",
          "OTC 也可以協助學生向相關院校準備 inquiry、文件清單、學分評估材料及路線比較表。但涉及澳洲移民、法律、護理註冊、職業評估或受監管建議時，應由相應合資格專業人士處理。"
        ]
      },
      {
        heading: "八、重要提示",
        paragraphs: [
          "本文所列課程資訊及院校政策以各院校、training.gov.au、AHPRA、ANMAC、NMBA、Home Affairs 及各州領地官方最新公佈為準。",
          "澳洲醫療職業的執業資格須由相關監管機構評審確認。涉及技術移民及職業提名事項，請查閱 SkillSelect、Home Affairs 及各州領地提名官方頁面，並諮詢 MARA / OMARA 移民代理。本文不構成移民建議、法律意見、就業結果保證或執業資格認定。",
          "OTC 為 OTHM 官方認可教學及評核中心（Centre No. DC1802235），Overseas Tutorial Centre Ltd，Companies House No. 11060519。"
        ]
      }
    ],
    sidebarCards: [
      ["Route A", "Australian VET", "最快落地工作場景：TAFE / RTO、實習、職業能力與本地課程代碼。", "vet"],
      ["Route B", "OTHM to university", "用 OTHM Level 4/5 支持 Advanced Entry 或 credit discussion。", "academic"],
      ["Route C", "Health management", "OTHM Level 6/7 更適合健康管理、社區服務管理與碩士銜接。", "management"],
      ["Boundary", "AHPRA / ANMAC", "護理註冊須看本地批准課程與監管機構，不可用 OTHM 直接替代。", "compliance"]
    ],
    resources: [
      ["OTHM Health and Social Care", "https://othm.org.uk/subject/health-and-social-care"],
      ["CHC33021 Certificate III in Individual Support", "https://training.gov.au/training/details/CHC33021"],
      ["CHC43121 Certificate IV in Disability Support", "https://training.gov.au/Training/Details/CHC43121"],
      ["HLT54121 Diploma of Nursing", "https://training.gov.au/training/details/HLT54121"],
      ["CHC52025 Diploma of Community Services", "https://training.gov.au/training/details/CHC52025"],
      ["AHPRA approved programs of study", "https://www.ahpra.gov.au/Accreditation/Approved-Programs-of-Study.aspx"],
      ["SkillSelect", "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect"]
    ],
    relatedReadings: [
      "othm-health-social-care-australia-vet-comparison",
      "othm-credits-australia-advanced-entry",
      "australia-new-zealand-provider-pathway-updates-2026",
      "otc-othm-centre-renewal-2026"
    ]
  },
  {
    slug: "othm-health-social-care-australia-vet-comparison",
    title: "OTHM Health Qualifications vs Australia VET: A Complete Comparison Guide",
    date: "2026-05-24",
    category: "University Pathways",
    column: "study",
    kicker: "健康護理 · 資格對照",
    author: "留學導報編輯部",
    summary: "A practical comparison between OTHM Health and Social Care qualifications and Australian VET health, ageing, disability, community services and nursing pathways, with clear boundaries on employment licensing and university progression.",
    titleZh: "OTHM 健康護理資格對照澳洲職業培訓體系完整指南",
    summaryZh: "本文對照 OTHM 健康與社會護理資格、澳洲 VET 健康護理課程及 AQF 層級，說明升學、就業、執業資格與移民方向之間不能混為一談的關鍵差異。",
    body: [
      {
        heading: "1) Why This Comparison Matters",
        paragraphs: [
          "Students considering health, aged care, disability support, community services or nursing in Australia often see two parallel systems: UK-regulated OTHM qualifications and Australia's local VET system.",
          "The two systems may sit at comparable academic levels, but they do not perform the same function. OTHM may support academic progression or advanced-entry discussions with universities, while Australian VET qualifications are designed around occupational competency and local workplace outcomes.",
          "This guide maps the two systems for planning purposes, then separates three different goals: university progression, Australian employment training and regulated professional registration."
        ]
      },
      {
        heading: "2) OTHM Health and Social Care Qualifications",
        paragraphs: [
          "OTHM's Health and Social Care pathway runs from Level 3 to Level 7. Relevant qualifications include the OTHM Level 3 Foundation Diploma in Health and Social Care and OTHM Level 3 Diploma in Adult Health and Social Care.",
          "At management levels, the pathway includes the OTHM Level 4, Level 5, Level 5 Extended, Level 6 and Level 7 Diplomas in Health and Social Care Management.",
          "OTHM also offers a separate Occupational Health and Safety pathway, including Level 3, Level 6 and Level 7 qualifications. These should not be confused with nursing, aged care or community services qualifications."
        ]
      },
      {
        heading: "3) Australia VET Health and Care System",
        paragraphs: [
          "Australia's VET qualifications sit within the Australian Qualifications Framework (AQF). Certificate III aligns with AQF Level 3, Certificate IV with AQF Level 4, Diploma with AQF Level 5 and Advanced Diploma with AQF Level 6.",
          "In health and care, the main training package areas are CHC for community services, aged care, disability and individual support, and HLT for health services and nursing-related qualifications.",
          "VET qualifications are competency-based. They usually require evidence that the learner can perform workplace tasks under Australian standards, legislation and supervision arrangements."
        ]
      },
      {
        heading: "4) Level-by-Level Comparison",
        paragraphs: [
          "OTHM Level 3 Health and Social Care is closest in planning level to Australian Certificate III pathways such as CHC33021 Certificate III in Individual Support and HLT33115 Certificate III in Health Services Assistance.",
          "CHC33021 reflects work in community, home or residential care settings under supervision and delegation. Training.gov.au states that candidates must complete at least 120 hours of work as detailed in the assessment requirements.",
          "OTHM Level 4 Health and Social Care Management may be compared academically with Certificate IV-level care and support pathways. For disability, the current qualification is CHC43121 Certificate IV in Disability Support, which superseded CHC43115. CHC43015 Certificate IV in Ageing Support remains a common ageing-support pathway.",
          "OTHM Level 5 Health and Social Care Management may be compared by level with AQF Diploma routes such as HLT54121 Diploma of Nursing and CHC52025 Diploma of Community Services. However, these are not interchangeable qualifications.",
          "OTHM Level 6 Health and Social Care Management sits near AQF Advanced Diploma level for planning purposes, such as HLT64121 Advanced Diploma of Nursing or CHC62015 Advanced Diploma of Community Sector Management.",
          "OTHM Level 7 Health and Social Care Management is beyond the ordinary VET ladder and is better understood as a postgraduate-level management qualification. In Australia, comparable study is usually found in Graduate Diploma or Master's-level health management, public health, health leadership or community services management programs."
        ]
      },
      {
        heading: "5) The Most Important Boundary: Not Direct Substitution",
        paragraphs: [
          "OTHM Health and Social Care qualifications do not automatically replace Australian VET qualifications for employment, licensing or professional registration.",
          "For nursing, the boundary is especially important. Training.gov.au states that to apply for registration as an enrolled nurse and practise in Australia, a learner must complete a Diploma of Nursing program accredited by ANMAC and approved by the Nursing and Midwifery Board of Australia as an approved program of study. AHPRA should be checked for provider approval.",
          "Therefore, an OTHM Level 5 Health and Social Care qualification alone does not make a student eligible to register as an enrolled nurse in Australia.",
          "The practical use of OTHM in this field is usually academic progression: applying to universities for health science, nursing-related, public health or health management programs, subject to the receiving institution's credit and entry rules."
        ]
      },
      {
        heading: "6) Australian Training Providers to Check",
        paragraphs: [
          "Students seeking direct Australian employment pathways should start with registered training organisations listed on training.gov.au and state TAFE websites.",
          "Major public providers include TAFE NSW, TAFE Queensland, TAFE SA, North Metropolitan TAFE, South Metropolitan TAFE, Chisholm TAFE, Box Hill Institute and Holmesglen Institute. Availability varies by campus, intake, state funding rules and student visa settings.",
          "Private RTOs may also offer individual support, community services, disability, ageing support or nursing-related programs. Students should verify RTO scope, course code, CRICOS status where relevant, placement arrangements and industry recognition before enrolling."
        ]
      },
      {
        heading: "7) Route Selection",
        paragraphs: [
          "If the goal is direct work in aged care, disability support or community support in Australia, the most direct route is usually an Australian VET qualification such as CHC33021 or a relevant Certificate IV or Diploma delivered by an RTO with the correct scope.",
          "If the goal is enrolled nurse registration, the student should focus on HLT54121 Diploma of Nursing through an ANMAC-accredited and NMBA-approved program, then follow AHPRA registration requirements.",
          "If the goal is university entry or advanced standing, OTHM Level 4 or Level 5 Health and Social Care may be used as an academic progression credential, but credit decisions are made by each Australian university.",
          "If the goal is management-level study, OTHM Level 6 or Level 7 Health and Social Care Management may be more relevant to Australian postgraduate health management or community sector management pathways."
        ]
      },
      {
        heading: "8) Disclaimer",
        paragraphs: [
          "This guide is a level and pathway comparison, not an equivalence decision and not migration, employment or registration advice.",
          "Australian healthcare professional registration, especially nursing, must be confirmed with the relevant regulator, including AHPRA, NMBA and ANMAC where applicable. Course availability, placement hours, fees and provider approvals should be checked directly with the institution and official registers."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、為什麼需要這份對照",
        paragraphs: [
          "對於希望在澳洲醫療、老人護理、殘疾支援、社區服務或健康管理領域就業、升學或移民的華人學生，常見的困惑是：英國 OTHM 資格體系和澳洲本地 VET（職業教育與培訓）體系到底如何對應。",
          "兩者可以做層級上的參考對照，但不能簡單互換。OTHM 更常用於學術銜接、升學申請和 Advanced Entry 討論；澳洲 VET 則以職業能力、實習、工作場景和本地行業要求為核心。",
          "本文先梳理 OTHM 健康相關資格，再對照澳洲 VET 中常見的 CHC 和 HLT 資格，最後說明就業、執業註冊和升學之間最容易混淆的界線。"
        ]
      },
      {
        heading: "二、OTHM 健康與社會護理資格全覽",
        paragraphs: [
          "OTHM 的健康與社會護理資格體系從 Level 3 延伸至 Level 7，主要包括 OTHM Level 3 Foundation Diploma in Health and Social Care、OTHM Level 3 Diploma in Adult Health and Social Care。",
          "管理方向包括 OTHM Level 4 Diploma in Health and Social Care Management、Level 5 Diploma、Level 5 Extended Diploma、Level 6 Diploma 及 Level 7 Diploma in Health and Social Care Management。",
          "OTHM 亦設有職業健康與安全（Occupational Health and Safety）系列，包括 Level 3 Technical Certificate、Level 6 Certificate / Diploma，以及 Level 7 Diploma in Occupational Health and Safety Management。這一系列應與護理、老人照護、殘疾支援及社區服務資格分開理解。"
        ]
      },
      {
        heading: "三、澳洲 VET 健康與護理體系概覽",
        paragraphs: [
          "澳洲 VET 資格按澳洲資歷框架（AQF）分級。Certificate III 對應 AQF Level 3，Certificate IV 對應 Level 4，Diploma 對應 Level 5，Advanced Diploma 對應 Level 6。",
          "健康護理領域的 VET 資格主要分為兩大類：CHC 系列，涵蓋社區服務、老人護理、殘疾支援和個人支援；HLT 系列，涵蓋衛生服務、護理及相關健康服務資格。",
          "VET 資格以能力結果為導向，重點不是單純學術層級，而是學習者能否在澳洲法律、行業標準和工作場景下完成相應任務。"
        ]
      },
      {
        heading: "四、OTHM 與澳洲 VET 逐層對照",
        paragraphs: [
          "OTHM Level 3 Health and Social Care 可作為層級參考，對照澳洲 Certificate III 方向，例如 CHC33021 Certificate III in Individual Support 及 HLT33115 Certificate III in Health Services Assistance。",
          "CHC33021 適用於社區、家居或院舍照護場景，學習者在監督及授權下為長者、殘疾人士或其他需要支援的人士提供以人為本的照護。training.gov.au 顯示，該資格要求至少完成 120 小時工作實踐。",
          "OTHM Level 4 Health and Social Care Management 可作為層級參考，對照 Certificate IV 類支援資格。殘疾支援方向目前應重點查看 CHC43121 Certificate IV in Disability Support；舊的 CHC43115 已被 CHC43121 取代。老人護理方向可查看 CHC43015 Certificate IV in Ageing Support。",
          "OTHM Level 5 Health and Social Care Management 可作為層級參考，對照 AQF Diploma 類路線，例如 HLT54121 Diploma of Nursing 或 CHC52025 Diploma of Community Services。但這只是層級參考，不代表可以互相替代。",
          "OTHM Level 6 Health and Social Care Management 可作為層級參考，對照 AQF Advanced Diploma 類路線，例如 HLT64121 Advanced Diploma of Nursing 或 CHC62015 Advanced Diploma of Community Sector Management。",
          "OTHM Level 7 Health and Social Care Management 已經超出一般 VET 階梯，更接近澳洲大學 Graduate Diploma 或 Master 層級的健康管理、公共衛生、健康領導或社區服務管理課程。"
        ]
      },
      {
        heading: "五、關鍵差異：OTHM 與澳洲 VET 不能直接互換",
        paragraphs: [
          "這是整份對照中最重要的一點：OTHM 健康與社會護理資格不等同於澳洲 VET 的就業資格、執業許可或專業註冊資格。",
          "尤其是護理。training.gov.au 對 HLT54121 Diploma of Nursing 的說明指出，若要申請成為澳洲 Enrolled Nurse 並在澳洲執業，學習者須完成由 ANMAC 認證、並由 Nursing and Midwifery Board of Australia（NMBA）批准為 approved program of study 的 Diploma of Nursing 課程，並應透過 AHPRA 核查教育提供者批准狀態。",
          "因此，僅憑 OTHM Level 5 Health and Social Care 不能在澳洲登記為 Enrolled Nurse，也不能直接替代澳洲本地 HLT54121 Diploma of Nursing。",
          "OTHM 在澳洲健康護理領域的實際用途，主要是學術銜接：例如用於申請澳洲大學的健康科學、護理相關、公共衛生或健康管理課程，具體 Advanced Entry 或學分減免由接收院校個案決定。"
        ]
      },
      {
        heading: "六、澳洲主要培訓提供者應如何查",
        paragraphs: [
          "如果學生目標是在澳洲直接就業，應優先查看 training.gov.au 上列明的 RTO scope，以及各州 TAFE 或私立 RTO 的課程頁面。",
          "常見公立提供者包括 TAFE NSW、TAFE Queensland、TAFE SA、North Metropolitan TAFE、South Metropolitan TAFE、Chisholm TAFE、Box Hill Institute、Holmesglen Institute 等。具體課程、校區、開課時間和國際學生名額會隨州份及年度調整。",
          "私立 RTO 亦可能提供 individual support、community services、disability、ageing support 或 nursing-related 課程。報讀前應核查 RTO scope、課程代碼、是否有 CRICOS（如涉及國際學生簽證）、實習安排、英文要求、學費及行業認可情況。"
        ]
      },
      {
        heading: "七、路線選擇建議",
        paragraphs: [
          "如果目標是在澳洲直接做老人護理、殘疾支援、社區支援或相關照護工作，通常最直接的路線是報讀澳洲本地 VET 資格，例如 CHC33021，或相應 Certificate IV / Diploma 課程。",
          "如果目標是成為 Enrolled Nurse，重點不是 OTHM，而是 HLT54121 Diploma of Nursing，且該課程必須符合 ANMAC / NMBA / AHPRA 的批准要求。",
          "如果目標是在澳洲讀大學，例如 Bachelor of Nursing、Bachelor of Health Science、Public Health 或 Health Management，OTHM Level 4 或 Level 5 Health and Social Care 可作為學術銜接材料之一，但能否獲得 Advanced Entry 由澳洲大學自行評估。",
          "如果目標是健康管理、醫院管理、社區服務機構管理等管理層方向，OTHM Level 6 或 Level 7 Health and Social Care Management 更適合用於銜接澳洲大學的 Graduate Diploma 或碩士課程。"
        ]
      },
      {
        heading: "八、重要提示",
        paragraphs: [
          "本文是資格層級及路線對照，不構成學分等值認定、移民建議、就業建議或執業資格建議。",
          "澳洲醫療及護理職業的執業資格須由相關監管機構確認，包括 AHPRA、NMBA、ANMAC 及其他行業監管機構。課程供應、實習時數、費用、開課時間、RTO scope 和 CRICOS 狀態，應以官方註冊資料及院校最新公佈為準。"
        ]
      }
    ],
    sidebarCards: [
      ["OTHM", "Academic progression", "適合作為健康與社會護理升學、銜接及 Advanced Entry 討論材料。", "academic"],
      ["VET", "Workplace competency", "澳洲本地職業教育，重視實習、能力證據與工作場景。", "vet"],
      ["HLT54121", "Nursing boundary", "護理註冊須看 ANMAC / NMBA / AHPRA 批准，不可由 OTHM 直接替代。", "nursing"],
      ["CHC33021", "Individual support", "老人護理、殘疾支援與個人支援常見入門資格。", "support"]
    ],
    resources: [
      ["OTHM Health and Social Care", "https://othm.org.uk/subject/health-and-social-care"],
      ["CHC33021 Certificate III in Individual Support", "https://training.gov.au/training/details/CHC33021"],
      ["HLT54121 Diploma of Nursing", "https://training.gov.au/training/details/HLT54121"],
      ["CHC52025 Diploma of Community Services", "https://training.gov.au/training/details/CHC52025"],
      ["CHC43121 Certificate IV in Disability Support", "https://training.gov.au/Training/Details/CHC43121"],
      ["CHC62015 Advanced Diploma of Community Sector Management", "https://training.gov.au/training/details/CHC62015"],
      ["AHPRA approved programs of study", "https://www.ahpra.gov.au/Accreditation/Approved-Programs-of-Study.aspx"]
    ],
    relatedReadings: [
      "othm-credits-australia-advanced-entry",
      "otc-othm-centre-renewal-2026",
      "credit-alliance-global-pathways"
    ]
  },
  {
    slug: "otc-othm-centre-renewal-2026",
    title: "OTC Renews OTHM Approved Centre Status — May 2026",
    date: "2026-05-23",
    category: "OTC News",
    column: "study",
    kicker: "機構資訊 · OTHM 認可更新",
    author: "留學導報編輯部",
    summary: "Overseas Tutorial Centre has received OTHM renewal approval in May 2026, confirming continued operation under centre number DC1802235 and clarifying the currently approved OTHM provision for students.",
    titleZh: "海外補習中心 OTHM 認可中心資格正式更新 — 2026 年 5 月",
    summaryZh: "2026 年 5 月，海外補習中心（OTC）收到 OTHM 中心更新批准通知，確認中心編號 DC1802235 維持不變，中心名稱同步更新，學生登記及評核安排不受影響。",
    body: [
      {
        heading: "1) Renewal Confirmed",
        paragraphs: [
          "On 21 May 2026, Overseas Tutorial Centre (OTC) received a centre renewal approval notice from OTHM Qualifications. The notice was issued by Elise Labram from OTHM's centre approval team and confirms OTC's continued status as an OTHM-approved teaching and assessment centre.",
          "OTC's OTHM centre number remains DC1802235. The centre name has been updated to Overseas Tutorial Centre, replacing the previous name Overseas Tutorial College, while the centre number remains unchanged.",
          "This name update does not affect existing or new learner registrations, assessment arrangements or the continuity of OTC's OTHM centre record."
        ]
      },
      {
        heading: "2) Qualifications Covered by This Renewal",
        paragraphs: [
          "Based on the renewal correspondence between OTC and OTHM, OTC is currently approved to continue offering the following OTHM qualifications.",
          "Level 3: OTHM Level 3 Foundation Diploma for Higher Education Studies.",
          "Business and management provision from Level 4 to Level 6: OTHM Level 4 Diploma in Business Management, OTHM Level 5 Diploma in Business Management and OTHM Level 6 Diploma in Business Management.",
          "Postgraduate-level provision at Level 7: OTHM Level 7 Diploma in Project Management and OTHM Level 7 Diploma in Education Management and Leadership.",
          "The OTHM Level 7 Diploma in Accounting and Finance was not included in this renewal scope. OTC has informed OTHM that this qualification will be deferred until a suitably qualified tutor is in place. This does not affect the renewal of the other approved qualifications."
        ]
      },
      {
        heading: "3) What the Renewal Process Reviewed",
        paragraphs: [
          "Under OTHM's centre renewal process, approved centres must periodically submit updated evidence to confirm continuing compliance with OTHM requirements.",
          "Tutor suitability was one of the reviewed areas. OTHM requires tutors to hold a subject qualification at the same level or above the qualification they deliver, together with relevant teaching credentials or more than 12 months of teaching experience. OTC adjusted staffing allocation during the renewal process to match these requirements.",
          "OTC also submitted learning management system evidence, including screenshots and functional demonstrations showing how learners access materials, submit assignments, receive feedback and track progress. OTC provided OTHM with a dedicated LMS review interface at otc.overseasuk.com/lms-review/.",
          "Policy documents were also updated, including complaints and appeals, remote and blended learning, equality and diversity, academic malpractice, reasonable adjustments and recognition of prior learning policies."
        ]
      },
      {
        heading: "4) Impact on Current and Prospective Students",
        paragraphs: [
          "OTHM confirmed in the renewal approval correspondence that OTC remained active throughout the renewal review period and that learner registration activity was not interrupted.",
          "The centre number DC1802235 remains unchanged. Existing learner qualification registrations and assessment arrangements are therefore not affected by the centre name update.",
          "For prospective students, the renewal confirms that OTC continues to hold the appropriate OTHM centre approval to deliver and assess the approved OTHM qualifications listed in this briefing."
        ]
      },
      {
        heading: "5) What OTHM Is",
        paragraphs: [
          "OTHM Qualifications is a UK awarding organisation regulated by Ofqual. Its qualifications are positioned within the UK Regulated Qualifications Framework (RQF), with Levels 3 to 7 carrying clear academic level references.",
          "OTHM qualifications are used by learners for academic progression, including undergraduate and postgraduate top-up or pathway applications where accepted by the receiving institution.",
          "OTC delivers its OTHM provision from its London teaching base at 3/F, 207 Regent Street, London W1B 3HH, with remote learning options where appropriate and approved."
        ]
      },
      {
        heading: "6) Contact OTC",
        paragraphs: [
          "For OTHM course enquiries, registration arrangements or fee information, students may contact OTC by WhatsApp or telephone on +44 7947 991572.",
          "Email: office@overseasuk.com. WeChat: overseasus. Address: 3/F, 207 Regent Street, London W1B 3HH.",
          "Learners should verify current centre and qualification information through official OTHM channels where needed."
        ]
      },
      {
        heading: "7) Information Basis",
        paragraphs: [
          "This briefing is based on OTHM Qualifications' renewal approval notice and correspondence records between OTC and OTHM.",
          "Course availability, fees and entry requirements are subject to OTC's latest published information. Formal centre approval status should be checked through OTHM's official approved-centre verification channels using centre number DC1802235."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、更新確認",
        paragraphs: [
          "2026 年 5 月 21 日，海外補習中心（Overseas Tutorial Centre，OTC）正式收到 OTHM Qualifications 頒發的中心更新批准通知。該通知由 OTHM 認可中心資格認證部門管理人 Elise Labram 發出，確認 OTC 繼續作為 OTHM 認可的教學及評核中心運作。",
          "OTC 的 OTHM 中心編號為 DC1802235。中心名稱現正式更新為 Overseas Tutorial Centre（前稱 Overseas Tutorial College），但中心編號保持不變。",
          "這一名稱更新不影響任何現有或新報讀學生的登記、評核安排或中心記錄連續性。"
        ]
      },
      {
        heading: "二、此次更新涵蓋的 OTHM 課程",
        paragraphs: [
          "根據本次更新流程中 OTC 與 OTHM 之間的郵件往來記錄，現階段 OTC 獲批繼續提供以下 OTHM 資格課程。",
          "Level 3：OTHM Level 3 Foundation Diploma for Higher Education Studies。",
          "Level 4 至 Level 6（商業及管理方向）：OTHM Level 4 Diploma in Business Management、OTHM Level 5 Diploma in Business Management、OTHM Level 6 Diploma in Business Management。",
          "Level 7（研究生層級）：OTHM Level 7 Diploma in Project Management、OTHM Level 7 Diploma in Education Management and Leadership。",
          "備註：OTHM Level 7 Diploma in Accounting and Finance 在本輪更新中暫時未納入審批範圍。OTC 已主動向 OTHM 確認，將此資格推遲至具備合資格導師後再行申請；這不影響其他課程的更新。"
        ]
      },
      {
        heading: "三、更新流程說明",
        paragraphs: [
          "根據 OTHM 的中心更新政策，已認可的 OTHM 教學中心須定期向 OTHM 提交更新文件，以確認中心持續符合 OTHM 對教學、評核、政策和學習支援的要求。",
          "教學人員資格方面，OTHM 要求每位任課導師須持有與所教授課程同等或以上學科資格，並具有相關教學資歷或逾 12 個月的教學經驗。本次更新過程中，OTC 對教職員分配作出了相應調整。",
          "學習管理系統（LMS）方面，OTC 向 OTHM 提交了 LMS 操作截圖及功能演示，涵蓋學生如何獲取教學材料、提交作業、獲取回饋及追蹤學習進度。OTC 亦為 OTHM 提供了專屬的 LMS 審閱界面，網址為 otc.overseasuk.com/lms-review/。",
          "政策文件方面，OTC 更新了多項機構政策，包括申訴及投訴政策、遠端 / 混合學習政策、多元平等政策、學術不當行為政策、合理便利政策，以及先前學習認定政策，確保各政策符合 OTHM 的最新規範要求。"
        ]
      },
      {
        heading: "四、對在讀及擬報讀學生的影響",
        paragraphs: [
          "OTHM 在更新批准郵件中確認，OTC 在整個更新審批期間始終作為活躍中心運作，學生登記工作未中斷。",
          "更新後，中心號碼 DC1802235 維持不變，學生的 OTHM 資格登記及評核安排均不受中心名稱更新影響。",
          "對於正在考慮報讀 OTC OTHM 課程的學生，此次更新確認 OTC 繼續具備向學生提供已批准 OTHM 資格教學及評核的中心資格。"
        ]
      },
      {
        heading: "五、OTHM 是什麼",
        paragraphs: [
          "OTHM Qualifications 是英國 Ofqual 監管的頒證機構，其資格按英國 RQF（Regulated Qualifications Framework，受監管資格框架）編排，Level 3 至 Level 7 各層級均有明確的學術等值標準。",
          "OTHM 資格被英國及國際多所大學用作銜接升學參考，可用於本科及研究生 top-up 或 pathway 申請，具體接受情況以接收院校的最新入學與學分認可政策為準。",
          "OTC 的 OTHM 課程以倫敦 207 Regent Street 的實體課室為主要教學基地，並在合適及獲批情況下提供遠端學習選項。"
        ]
      },
      {
        heading: "六、聯絡 OTC",
        paragraphs: [
          "如需查詢 OTHM 課程詳情、報名安排或課程費用，歡迎通過以下渠道聯絡 OTC。",
          "電話 / WhatsApp：+44 7947 991572。電郵：office@overseasuk.com。WeChat：overseasus。",
          "地址：3/F, 207 Regent Street, London W1B 3HH。"
        ]
      },
      {
        heading: "七、重要提示",
        paragraphs: [
          "本文資訊以 OTHM Qualifications 官方通知及 OTC 與 OTHM 往來記錄為依據。課程供應、費用及入學要求以 OTC 最新公佈為準。",
          "OTHM 資格的正式認可狀態可通過 OTHM 官網的 Approved Centre / centre verification 相關功能查核，中心號碼：DC1802235。"
        ]
      }
    ],
    sidebarCards: [
      ["DC1802235", "Centre number", "OTC 的 OTHM 中心編號保持不變。", "centre"],
      ["21 May 2026", "Renewal notice", "OTHM 更新批准通知日期。", "renewal"],
      ["Overseas Tutorial Centre", "Centre name", "中心名稱由 Overseas Tutorial College 更新為 Overseas Tutorial Centre。", "name"],
      ["London W1B", "Teaching base", "OTC 倫敦 Regent Street 教學基地。", "location"]
    ],
    resources: [
      ["OTHM Qualifications", "https://othm.org.uk/"],
      ["Become an Approved Centre - OTHM", "https://othm.org.uk/become-centre"],
      ["OTHM Qualifications list", "https://othm.org.uk/qualification"],
      ["OTC LMS review interface", "https://otc.overseasuk.com/lms-review/"],
      ["OTC contact", "https://overseasuk.com/contact/"]
    ],
    relatedReadings: [
      "credit-alliance-global-pathways",
      "othm-credits-australia-advanced-entry",
      "australia-new-zealand-provider-pathway-updates-2026"
    ]
  },
  {
    slug: "uk-online-safety-cyberbullying-legal-guide",
    title: "Cyberbullying in the UK: Legal Protections and Reporting Guide for International Students",
    date: "2026-05-23",
    category: "Settlement & Life",
    column: "settlement",
    kicker: "網絡安全 · 英國法律",
    author: "留學導報編輯部",
    summary: "A practical UK guide for international students on online harassment, stalking, malicious communications, police reporting, Report Fraud, harmful content routes, university support and mental health resources.",
    titleZh: "在英國遭受網絡暴力：留學生的法律保護與報案實務指南",
    summaryZh: "英國沒有單一的「網絡暴力法」，但騷擾、跟蹤、威脅、惡意通訊、私密影像濫用和平台安全責任分別由多部法律與監管機制處理。本文整理留學生在英國遭遇網絡暴力時的保存證據、報案、平台舉報、大學支援與心理健康資源。",
    body: [
      {
        heading: "1) How Common Online Abuse Is in the UK",
        paragraphs: [
          "Online abuse in the UK is not an isolated problem. It may appear as harassment, cyberstalking, trolling, doxing, threats, impersonation, intimate image abuse or coordinated abuse across platforms.",
          "For overseas Chinese students, the facts can be cross-border: the victim may be in the UK, the perpetrator may be overseas, and the abuse may occur on Chinese-language platforms. That makes enforcement harder, but it does not mean UK reporting routes are irrelevant.",
          "If the harm affects you in the UK, keep evidence and consider UK police, university, platform and support channels. Be realistic about cross-border outcomes, but do not assume nothing can be done."
        ]
      },
      {
        heading: "2) The UK Legal Framework",
        paragraphs: [
          "The UK does not have one single cyberbullying statute. Online abuse may be handled through several overlapping laws, depending on the content, repetition, threat level and impact.",
          "The Protection from Harassment Act 1997 is often relevant where there is a course of conduct, including repeated unwanted communications or behaviour that causes alarm or distress. Cyberstalking may also be treated through harassment and stalking offences.",
          "The Malicious Communications Act 1988 and Communications Act 2003 may apply to grossly offensive, indecent, obscene, menacing or threatening communications, depending on the exact facts and prosecutorial threshold.",
          "The Public Order Act 1986 can be relevant where threatening, abusive or insulting words or behaviour are used in circumstances that may cause harassment, alarm or distress.",
          "The Online Safety Act 2023 is the newer platform-regulation framework. It places duties on in-scope online services to assess and manage risks, including illegal content, and Ofcom is the regulator. This does not replace police reporting for crimes against an individual, but it changes what platforms are expected to do."
        ]
      },
      {
        heading: "3) First Step: Preserve Evidence",
        paragraphs: [
          "The safest sequence is: preserve evidence first, then block, mute or restrict contact.",
          "Screenshots should show the account name, handle or ID, timestamp, platform name and surrounding context. For repeated harassment, organise evidence chronologically and number the files.",
          "For webpages, save URLs and screenshots, and where possible preserve the page or export a copy. For voice or video content, keep the original file or a lawful screen recording.",
          "Write a brief impact log: when the incident happened, how it affected your study, sleep, safety, movement, work, relationships or mental health, and whether you changed your routine because of it."
        ]
      },
      {
        heading: "4) Reporting to UK Police",
        paragraphs: [
          "If someone is in immediate danger or a crime is in progress, call 999. For non-emergency police reporting, call 101 or use your local police force's online reporting route.",
          "For fraud and cybercrime in England, Wales and Northern Ireland, the national online route is now Report Fraud at reportfraud.police.uk. In Scotland, Police Scotland remains the main reporting route for many crime reports.",
          "When reporting, prepare a timeline, the perpetrator's online identifiers, screenshots or files, platform links, any real-world identity information, and your impact statement. If the perpetrator appears to be overseas, tell the police clearly so jurisdiction and referral issues can be assessed."
        ]
      },
      {
        heading: "5) Reporting Harmful Content",
        paragraphs: [
          "Report Harmful Content, provided by the UK Safer Internet Centre and operated by SWGfL, gives practical guidance on reporting harmful content to major platforms and may support escalation in eligible cases.",
          "For Facebook, Instagram, TikTok, YouTube, X and other major platforms, report through the platform first and keep the report reference or confirmation email.",
          "For WeChat, Weibo, Xiaohongshu or other Chinese-language platforms, use the platform's complaint mechanisms and preserve every submission record. The UK Online Safety Act may apply to in-scope services with UK users, but practical enforcement and response times can vary."
        ]
      },
      {
        heading: "6) Civil Injunctions",
        paragraphs: [
          "In addition to criminal reporting, some victims may consider civil action such as an injunction to stop harassment. This is fact-specific and usually requires legal advice.",
          "Legal aid may be available in limited circumstances, especially where domestic abuse, stalking or safeguarding issues are involved. Citizens Advice, university legal clinics and community advice services may help you find the right starting point."
        ]
      },
      {
        heading: "7) University Support",
        paragraphs: [
          "UK universities generally have student wellbeing, safeguarding, conduct, complaints or student support teams that can help students affected by online abuse.",
          "If the abuse affects exams, coursework, attendance or safety, ask about mitigating circumstances, extensions, counselling, safety planning or temporary study adjustments.",
          "If the abuse is linked to classmates, accommodation, societies or campus activity, make a university report as well as considering police or platform reporting."
        ]
      },
      {
        heading: "8) Mental Health Support",
        paragraphs: [
          "Online abuse can be destabilising and isolating. If you feel unsafe, overwhelmed or at risk of self-harm, seek urgent support.",
          "Samaritans is available on 116 123 for free 24-hour emotional support. Mind provides mental health information and signposting. The Cyber Helpline offers free support for victims of cybercrime and online harm in the UK.",
          "University counselling services and NHS Talking Therapies may also be relevant, depending on your location and eligibility."
        ]
      },
      {
        heading: "9) If the Perpetrator Is Overseas",
        paragraphs: [
          "Where the perpetrator is outside the UK, direct prosecution may be more difficult, and extradition is not a realistic outcome for many online-abuse cases.",
          "Reporting can still matter: it creates an official record, may support university or immigration-related evidence needs, helps platforms assess removal requests, and may become relevant if the perpetrator later enters a UK jurisdiction or the conduct is part of a wider organised pattern.",
          "Avoid overstating what police or platforms can guarantee. The strongest practical step is to preserve evidence, report through multiple appropriate channels, and get support early."
        ]
      },
      {
        heading: "10) Legal Boundary",
        paragraphs: [
          "This article is general information only and does not constitute legal advice. UK law differs across England and Wales, Scotland and Northern Ireland, and the right route depends on the facts.",
          "For legal advice, consult a qualified solicitor or an appropriate advice service. For emergencies, call 999. For current reporting forms and thresholds, rely on official police, GOV.UK, Ofcom and support-service pages."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、英國的網絡暴力有多普遍",
        paragraphs: [
          "網絡暴力在英國不是個別事件，而是學生、移民和年輕專業人士都可能遇到的現實問題。它可能表現為網絡欺凌、針對性騷擾、cyberstalking、人肉搜索、威脅、冒用身份、私密影像濫用，或跨平台的集體攻擊。",
          "對於在英國的海外華人留學生而言，這個問題有其特殊性：施害者可能在中國境內，受害者在英國；騷擾可能發生在微信、微博、小紅書等中文平台，但受害行為對你在英國的生活、學習和安全造成影響。",
          "跨境性質會帶來法律適用和執法難度，但不代表報案沒有意義。如果你人在英國並受到實際影響，應保存證據，並考慮使用英國警方、學校、平台和心理支援渠道。"
        ]
      },
      {
        heading: "二、英國的法律框架：哪些法律可能保護你",
        paragraphs: [
          "英國沒有一部單一的「網絡暴力法」，但現有法律體系對網絡侵害行為有多個切入點。具體適用哪一部法律，要看內容、重複性、威脅程度、受害影響和證據情況。",
          "《騷擾保護法》1997（Protection from Harassment Act 1997）常用於處理反覆、不受歡迎且造成 alarm or distress 的行為，包括線上持續騷擾和部分 cyberstalking 情況。所謂「虛擬圍攻」或多人集中攻擊，也可能在具體事實下被作為騷擾模式的一部分評估。",
          "《惡意通訊法》1988（Malicious Communications Act 1988）及《通訊法》2003（Communications Act 2003）可能涵蓋嚴重冒犯性、猥褻性、威脅性或帶有惡意目的的通訊，包括社交媒體私信、群組信息及公開帖子。",
          "《公共秩序法》1986（Public Order Act 1986）在涉及威脅、辱罵或侮辱性文字或視覺內容，並可能造成 harassment, alarm or distress 的情況下，也可能相關。",
          "《線上安全法》2023（Online Safety Act 2023）是英國最新的重要平台監管框架。它對符合條件的線上服務提供商施加風險評估和安全義務，Ofcom 是監管機構。這部法律主要約束平台，不取代個人遭受犯罪時向警方報案的路線。"
        ]
      },
      {
        heading: "三、第一步：保存證據",
        paragraphs: [
          "與澳洲情況相同，正確的第一步是先保存，再屏蔽。許多受害者在情緒衝擊下會立刻刪除、退出群聊或拉黑對方，但這可能直接損害日後的法律追究能力。",
          "截圖時要確保畫面包含發布賬號的用戶名、ID 或 handle、發布時間戳、平台名稱和上下文，不要只截取文字內容。對於涉及多條信息的騷擾，按時間順序整理截圖並編號。",
          "對於網頁內容，保存 URL、日期和截圖；如條件允許，可保存完整頁面。對於視頻或語音內容，保留原始文件或在合法、安全的情況下使用錄屏工具保存完整片段。",
          "同時記錄你發現內容的時間，以及每次騷擾對你學業、睡眠、出行、安全感、社交生活和心理狀態的具體影響。這類影響記錄在後續報案、學校支援或法律程序中都可能有用。"
        ]
      },
      {
        heading: "四、向英國警方報案",
        paragraphs: [
          "如果涉及即時人身威脅、正在發生的犯罪或生命安全風險，請撥打 999。非緊急情況可撥打 101，或使用所在地警隊的網上報案渠道。",
          "涉及詐騙、身份盜用、賬號入侵或部分網絡犯罪時，英格蘭、威爾士和北愛爾蘭目前的國家在線入口是 Report Fraud：reportfraud.police.uk。蘇格蘭案件通常應優先查看 Police Scotland 的報案渠道。",
          "報案時應提供完整事件時間線、施害者所有網絡身份信息（賬號名、ID、頭像截圖、鏈接）、已保存的截圖及文件，以及每次騷擾對你的具體影響陳述。如果你懷疑施害者在中國境內，也應告知警方，讓警方評估管轄、轉介和跨境因素。"
        ]
      },
      {
        heading: "五、向 Report Harmful Content 舉報",
        paragraphs: [
          "Report Harmful Content（RHC）由 UK Safer Internet Centre 提供、SWGfL 運營，主要協助個人理解如何向各大平台舉報有害內容，並在符合條件時提供進一步指引。",
          "如果內容出現在 Facebook、Instagram、TikTok、YouTube、X 等平台，應先使用平台內部舉報機制，並保存舉報編號、確認郵件或截圖。",
          "如果侵害發生在微信、微博或小紅書等中文平台，也應使用平台官方投訴渠道提交申請並保存記錄。部分在英國提供服務的平台可能落入《線上安全法》監管範圍，但實際回應速度和可執行性會因平台而異，因此不要只依賴單一渠道。"
        ]
      },
      {
        heading: "六、申請民事禁制令",
        paragraphs: [
          "除刑事報案外，部分受害者也可考慮民事途徑，例如申請禁制令（injunction）要求施害者停止騷擾行為。這類申請高度依賴個案事實，通常需要律師協助。",
          "在英格蘭及威爾士，法律援助（Legal Aid）在特定條件下可能適用，尤其是涉及家庭暴力、跟蹤、保護令或其他安全風險的案件。Citizens Advice、大學法律診所或社區法律服務可協助你判斷從哪裡開始。"
        ]
      },
      {
        heading: "七、大學的支援角色",
        paragraphs: [
          "英國大學通常設有學生福利、學生安全、safeguarding、學生申訴或 counselling 相關部門，可協助學生記錄事件、制定安全計劃、聯繫警方，並在必要時調整學業安排。",
          "如果網絡暴力影響到考試、作業、出勤或日常學習，建議同時向大學學生支援部門備案，詢問 mitigating circumstances、延期、臨時學習安排或心理支援。",
          "如果事件與同學、住宿、學生社團或校園活動有關，校內記錄尤其重要。它可在後續學業安排、福利支援或其他程序中作為背景文件。"
        ]
      },
      {
        heading: "八、心理健康支援",
        paragraphs: [
          "遭受網絡暴力對心理健康的衝擊不應被低估。如果你感到恐懼、失眠、無法上課、持續焦慮，或出現自傷念頭，請儘快尋求支援。",
          "Samaritans：116 123，24 小時免費情緒支援。Mind：mind.org.uk，提供心理健康資訊及支援服務。The Cyber Helpline：thecyberhelpline.com，為英國網絡犯罪和線上侵害受害者提供免費實務支援。",
          "大學學生諮詢服務通常對在讀學生免費或低費用。NHS Talking Therapies 也可能適用，可通過 GP 轉介或在部分地區自行申請，等候時間因地區而異。"
        ]
      },
      {
        heading: "九、施害者在中國境內的特殊情況",
        paragraphs: [
          "對於在英國的海外華人，施害者可能身處中國，這會增加執法難度。現實地說，英國警方對身在海外的施害者直接採取刑事追訴或引渡，在很多網絡騷擾案件中並不容易。",
          "但報案仍有實際意義：建立正式受害記錄，作為學校支援、移民申請或其他程序中的書面背景；支撐平台內容移除或賬號處理申請；並在施害者日後進入英國司法管轄範圍時，讓既有記錄可以被調取。",
          "如果你認為騷擾行為具有有組織、跨平台或持續升級的特徵，報案時應明確說明，並提交按時間整理的證據包。"
        ]
      },
      {
        heading: "十、重要提示",
        paragraphs: [
          "本文所列法律資訊及舉報渠道以英國官方機構最新公佈為準。具體法律情況因個案而異，且英格蘭及威爾士、蘇格蘭、北愛爾蘭的法律制度和報案路徑可能不同。",
          "如需法律意見，請諮詢合資格 solicitor 或適當法律服務機構。本文不構成法律建議；如有即時危險，請撥打 999。"
        ]
      }
    ],
    sidebarCards: [
      ["999", "Emergency", "如有人身安全或生命危險，立即撥打 999。", "urgent"],
      ["101", "Police non-emergency", "非緊急報案或警務協助，可用所在地警隊網上渠道。", "police"],
      ["Report Fraud", "Cybercrime / fraud", "英格蘭、威爾士和北愛部分網絡犯罪與詐騙舉報入口。", "online"],
      ["RHC", "Harmful content", "協助理解各平台有害內容舉報流程。", "report"]
    ],
    resources: [
      ["Online Safety Act - GOV.UK", "https://www.gov.uk/government/collections/online-safety-act"],
      ["Online Safety Act explainer - GOV.UK", "https://www.gov.uk/government/publications/online-safety-act-explainer"],
      ["Contact the police - GOV.UK", "https://www.gov.uk/contact-police"],
      ["How to report - Police.uk", "https://www.police.uk/pu/contact-us/what-and-how-to-report/how-to-report/"],
      ["Report Fraud", "https://www.reportfraud.police.uk/"],
      ["Report Harmful Content", "https://reportharmfulcontent.com/"],
      ["Report Harmful Content - UK Safer Internet Centre", "https://saferinternet.org.uk/report-harmful-content"],
      ["The Cyber Helpline", "https://www.thecyberhelpline.com/united-kingdom"],
      ["Samaritans", "https://www.samaritans.org/how-we-can-help/contact-samaritan/"],
      ["Mind", "https://www.mind.org.uk/"],
      ["Citizens Advice", "https://www.citizensadvice.org.uk/"]
    ],
    relatedReadings: [
      "australia-online-safety-cyberbullying-legal-guide",
      "overseas-chinese-media-interview-guide"
    ]
  },
  {
    slug: "australia-online-safety-cyberbullying-legal-guide",
    title: "Online Abuse in Australia: A Practical Legal Protection and Reporting Guide for International Students",
    date: "2026-05-23",
    category: "Settlement & Life",
    column: "settlement",
    kicker: "網絡安全 · 法律保護",
    author: "留學導報編輯部",
    summary: "A practical guide for international students in Australia on documenting online abuse, reporting urgent and non-urgent incidents, using ReportCyber and eSafety channels, seeking university support and protecting mental health.",
    titleZh: "在澳洲遭受網絡暴力：留學生的法律保護與報警實務指南",
    summaryZh: "網絡暴力在澳洲可能涉及線上安全、刑事威脅、騷擾、身份冒用或私密影像濫用等問題。本文整理留學生遭遇網絡暴力時的證據保存、報警渠道、eSafety 投訴、大學支援與心理健康資源。",
    body: [
      {
        heading: "1) How Australia Understands Online Abuse",
        paragraphs: [
          "Online abuse in Australia is not only a moral or social-media issue. Depending on the facts, it may involve adult cyber abuse, image-based abuse, cyberstalking, threats, impersonation, harassment or other criminal conduct.",
          "The Online Safety Act 2021 gives the eSafety Commissioner a central role in handling certain online harms, while state and territory criminal laws may also apply to threats, stalking, intimidation, identity misuse and related behaviour.",
          "For international students, the practical point is simple: if you are in Australia and the harm affects you here, you should consider Australian reporting and support channels even if the perpetrator appears to be overseas. Cross-border enforcement can be complex, so keep expectations realistic and preserve evidence carefully."
        ]
      },
      {
        heading: "2) First Step: Preserve Evidence Before Blocking",
        paragraphs: [
          "Many victims instinctively delete, block or leave a group chat. That reaction is understandable, but it can damage later reporting. A safer sequence is: preserve evidence first, then block or restrict contact.",
          "Screenshots should include the account name, handle or ID, profile image where relevant, platform name and timestamp. For repeated harassment, organise screenshots in chronological order and number them.",
          "For video or voice content, preserve the original file or screen recording where lawful and safe to do so. For webpages, save the page where possible and keep URLs, dates, usernames and platform details.",
          "Also write a short impact note: when you found the content, how it affected your study, sleep, safety, work, social life or mental health, and whether you changed your daily routine because of it."
        ]
      },
      {
        heading: "3) Reporting to Police",
        paragraphs: [
          "If there is an immediate risk to life or safety, call Triple Zero (000). For non-urgent police assistance in Australia, the Police Assistance Line is 131 444, and you may also attend a local police station.",
          "Cybercrime reports can also be submitted through ReportCyber at cyber.gov.au/report, especially where the matter involves online accounts, multiple platforms, scams, account compromise or complex digital evidence.",
          "When reporting, prepare a concise timeline, the perpetrator's online identifiers, screenshots or files, any known real-world identity information, and your impact statement. The clearer your evidence pack, the easier it is for a police officer or referral body to understand the case."
        ]
      },
      {
        heading: "4) Reporting to the eSafety Commissioner",
        paragraphs: [
          "The eSafety Commissioner is Australia's online safety regulator and operates reporting schemes for matters such as adult cyber abuse, image-based abuse and cyberbullying involving children.",
          "The central reporting entry point is esafety.gov.au/report. eSafety may be able to help with content removal processes in eligible cases, but the exact outcome depends on the content, platform, evidence and legal threshold.",
          "For abuse occurring on overseas or Chinese-language platforms, it can still be worth preserving evidence and lodging the most suitable report. However, platform response and enforcement may vary, so do not rely on one channel only."
        ]
      },
      {
        heading: "5) University Support",
        paragraphs: [
          "Australian universities usually have student safety, wellbeing, counselling, complaints or conduct teams that can support students affected by online abuse.",
          "The university may help record the incident, discuss safety planning, refer you to counselling, help you contact police, or consider study adjustments such as assessment extensions or temporary remote arrangements where appropriate.",
          "If the abuse is linked to campus life, classmates, student groups, accommodation or university activities, making an internal report can create a useful record for later academic or welfare support."
        ]
      },
      {
        heading: "6) Mental Health Support",
        paragraphs: [
          "Online abuse can create real psychological harm. If you feel unsafe, overwhelmed or at risk of self-harm, seek urgent support.",
          "Lifeline is available on 13 11 14 for crisis support. Beyond Blue provides mental health support on 1300 22 4636. 1800RESPECT is available on 1800 737 732 for sexual, domestic and family violence support, including technology-facilitated abuse contexts.",
          "International students should also check their university counselling service and overseas student health cover support pathways."
        ]
      },
      {
        heading: "7) Legal Boundary",
        paragraphs: [
          "This article is general public information only and does not constitute legal advice. The right reporting path depends on the platform, content, location, identity of the perpetrator, level of threat and available evidence.",
          "For legal advice, consult an Australian legal practitioner or a community legal centre. For emergencies, use 000. For current reporting thresholds and forms, rely on official police, eSafety and ReportCyber pages."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、澳洲如何定義網絡暴力",
        paragraphs: [
          "網絡暴力在澳洲不是模糊的道德問題，而是可能進入法律規管範圍的行為。澳洲聯邦層面的《線上安全法》（Online Safety Act 2021）是目前最主要的線上安全監管框架，同時各州及領地亦可能有針對網絡騷擾、身份冒用、跟蹤、威脅及恐嚇的刑事條文。",
          "根據澳洲現行線上安全監管框架，常見需要留意的行為包括：針對特定個人的嚴重網絡濫用內容（adult cyber abuse / cyber abuse material）、未經同意發布私密影像（image-based abuse）、持續性網絡騷擾或 cyberstalking，以及在網上發布足以令當事人產生恐懼的威脅性內容。",
          "對留學生而言，一個重要認知是：即使施害者身處中國或其他國家，只要你人在澳洲、侵害對你的生活和安全造成影響，就應考慮使用澳洲的報警、eSafety、學校和心理支援渠道。跨境執法可能複雜，不能保證每個案件都能立即處理，但保留證據和正式報告仍然重要。"
        ]
      },
      {
        heading: "二、第一步：保存證據",
        paragraphs: [
          "遭受網絡暴力後，很多人的第一反應是刪除、退出群聊或屏蔽對方。這種反應完全可以理解，但若未先保存證據，可能會削弱日後報警、投訴或向學校求助的能力。比較安全的順序是：先保存，再屏蔽。",
          "截圖時要確保畫面包含發布賬號的用戶名、ID 或 handle、發布時間戳、平台名稱，以及必要時的頭像或個人頁面信息，不要只截取文字內容。對於涉及多條信息的騷擾，按時間順序整理截圖並編號。",
          "如果是視頻或語音內容，盡量保存原始文件或使用錄屏工具保存完整片段。對於網頁內容，可以保存 URL、日期和頁面截圖；如條件允許，也可用瀏覽器保存完整頁面，以便保留更多上下文。",
          "同時建議記錄你發現內容的時間、平台、當時情境，以及這件事對你睡眠、學習、出行、安全感、心理健康或社交生活造成的具體影響。這類影響陳述看似主觀，但在後續求助或報案時很有用。"
        ]
      },
      {
        heading: "三、向澳洲警方報案",
        paragraphs: [
          "如果涉及即時人身威脅、正在發生的危險或生命安全風險，請直接撥打 000。非緊急情況可撥打 131 444（澳洲非緊急警察協助熱線），或前往最近的警察局提交報案。",
          "網絡犯罪亦可通過澳洲官方 ReportCyber 平台在線提交：cyber.gov.au/report。這個渠道適合處理網絡賬號、跨平台騷擾、詐騙、入侵、身份冒用或複雜數字證據等案件，報告會按情況轉介至相關執法或支援機構。",
          "報案時應準備：事件時間線、施害者的網絡身份信息（賬號名、ID、頭像截圖、鏈接）、所有已保存的證據文件，以及事件對你日常生活、學業和心理健康的具體影響。證據包越清晰，越有助於警員理解案件性質。"
        ]
      },
      {
        heading: "四、向 eSafety Commissioner 投訴",
        paragraphs: [
          "澳洲 eSafety Commissioner 是《線上安全法》授權的獨立監管機構，處理多類線上安全投訴，包括針對成人的嚴重網絡濫用（Adult Cyber Abuse）、非自願私密影像（Image-based Abuse），以及涉及未成年人的網絡欺凌。",
          "投訴入口是 esafety.gov.au/report。投訴時通常需要提交截圖、鏈接、平台信息和事件說明。eSafety 在符合條件的案件中可協助推動內容移除或採取其他監管措施，具體結果取決於內容性質、平台、證據和法律門檻。",
          "如果騷擾發生在微信、微博、小紅書或其他中文平台，也仍然值得保存證據並評估是否向 eSafety 或平台投訴。不過，不同平台的回應速度和澳洲監管可及性可能不同，因此不應只依賴單一渠道。"
        ]
      },
      {
        heading: "五、校園資源：大學的支援角色",
        paragraphs: [
          "澳洲大學通常設有學生安全、學生福利、學生申訴、學生行為或 counselling 相關部門，可協助受到網絡暴力影響的學生記錄事件、制定安全計劃、聯繫警方或安排心理支援。",
          "如果事件影響到考試、作業、出勤或日常學習，你也可以向學校說明情況，詢問是否可以申請延期考試、作業延期、臨時遠程上課或其他合理支援安排。",
          "如果網絡暴力與校園環境、同學、學生社群、住宿或大學活動有關，除了向警方或 eSafety 求助，也應向學校相關部門備案。這份校內記錄在後續需要學校出具支援文件時可能會有用。"
        ]
      },
      {
        heading: "六、心理健康支援",
        paragraphs: [
          "遭受網絡暴力對心理健康的衝擊往往被低估。如果你感到恐懼、失眠、無法上課、持續焦慮，或出現自傷念頭，請儘快尋求支援。",
          "Lifeline：13 11 14，提供 24 小時危機支援。Beyond Blue：1300 22 4636，提供心理健康支援。1800RESPECT：1800 737 732，如網絡暴力涉及性暴力、家庭暴力、親密關係暴力或 technology-facilitated abuse 背景，可聯絡該服務。",
          "大學學生諮詢服務（Student Counselling）通常對在讀學生免費或低費用，部分學校可較快安排初次面談。留學生也可以查看自己的 OSHC 或學校國際學生支援服務。"
        ]
      },
      {
        heading: "七、重要提示",
        paragraphs: [
          "本文所列法律資訊及投訴渠道以澳洲官方機構最新公佈為準。具體法律情況因個案而異，會受到內容性質、平台、證據、地點、威脅程度和施害者身份等因素影響。",
          "如需法律意見，請諮詢持牌澳洲律師或社區法律中心。本文不構成法律建議；如有即時危險，請撥打 000。"
        ]
      }
    ],
    sidebarCards: [
      ["000", "Emergency", "如有人身安全或生命危險，立即撥打 000。", "urgent"],
      ["131 444", "Police Assistance Line", "非緊急警察協助，可用於非即時危險的報案或諮詢。", "police"],
      ["ReportCyber", "Cybercrime report", "適合網絡犯罪、賬號、詐騙、跨平台數字證據等案件。", "online"],
      ["eSafety", "Online safety regulator", "可處理成人 cyber abuse、image-based abuse 及部分網絡欺凌投訴。", "report"]
    ],
    resources: [
      ["eSafety report page", "https://www.esafety.gov.au/report"],
      ["Adult cyber abuse - eSafety", "https://www.esafety.gov.au/key-issues/adult-cyber-abuse"],
      ["Report image-based abuse - eSafety", "https://www.esafety.gov.au/key-topics/image-based-abuse/report-image-based-abuse"],
      ["ReportCyber", "https://www.cyber.gov.au/report"],
      ["Police Assistance Line 131 444", "https://www.health.gov.au/contacts/police-assistance-line"],
      ["Triple Zero 000", "https://www.triplezero.gov.au/"],
      ["Lifeline", "https://www.lifeline.org.au/"],
      ["Beyond Blue", "https://www.beyondblue.org.au/"],
      ["1800RESPECT", "https://www.1800respect.org.au/"]
    ],
    relatedReadings: [
      "overseas-chinese-media-interview-guide",
      "australia-new-zealand-provider-pathway-updates-2026"
    ]
  },
  {
    slug: "overseas-chinese-media-interview-guide",
    title: "When a Journalist Contacts You: What Overseas Chinese Should Know Before a Media Interview",
    date: "2026-05-23",
    category: "Settlement & Life",
    column: "settlement",
    kicker: "媒體採訪 · 個人保護",
    author: "留學導報編輯部",
    summary: "A practical decision guide for overseas Chinese students, migrants and professionals before accepting interviews with international media, covering editorial framing, identity protection, review rights, release forms and cross-border risk.",
    titleZh: "當記者找上你：海外華人接受境外媒體採訪前應該知道的事",
    summaryZh: "海外華人被國際媒體邀請採訪時，既可能獲得重要發聲機會，也可能面臨身份曝光、跨境傳播、合約條款和敘事框架風險。本文整理接受採訪前應問清楚的問題與書面保護要點。",
    body: [
      {
        heading: "1) Why This Matters for Overseas Chinese Communities",
        paragraphs: [
          "International students, new migrants and professionals overseas may be contacted by BBC, ABC, SBS, The Guardian or other media after sharing a personal experience online or speaking at a public event.",
          "The invitation may feel validating, but the interviewee may not understand Western media workflows, release forms, editorial framing or the cross-border consequences of publication.",
          "This article is not designed to tell you to accept or reject an interview. It is a checklist for asking the right questions before deciding."
        ]
      },
      {
        heading: "2) Seven Questions to Ask Before an Interview",
        paragraphs: [
          "What is the editorial angle? Ask what the report or documentary is trying to show, and how your story will support that argument.",
          "How will my words be used? Clarify whether your contribution will appear as a direct quote, video clip, voiceover, background information or anonymised testimony.",
          "Do I have a right of review? This usually means the right to check facts relating to you before publication, not the right to control the journalist's editorial conclusion.",
          "How will my identity appear? Confirm whether your full name, face, voice, location, university, employer or family details will be identifiable.",
          "Where will the content be published? A programme may be made for one market but later clipped, translated or circulated globally.",
          "Will I be asked to sign a release or consent form? Ask for it before the interview day and read it carefully.",
          "Can I withdraw before publication? Clarify whether there is a withdrawal deadline, and what happens if you change your mind."
        ]
      },
      {
        heading: "3) What the Agreement Should Cover",
        paragraphs: [
          "Oral promises are fragile. Key protections should be confirmed in writing, whether through a formal agreement or a clear email thread.",
          "Useful written terms include the interview purpose, permitted use, format of publication, anonymity or masking measures, fact-check process, publication platforms and regions, and withdrawal deadline.",
          "For large media organisations, ask for the draft release form in advance. You are entitled to take time to read it and, where appropriate, seek legal advice."
        ]
      },
      {
        heading: "4) Cross-Border Impact",
        paragraphs: [
          "For people based in Australia or another overseas country but still deeply connected with China through family, work, business or future plans, cross-border impact is a realistic factor, not paranoia.",
          "Consider whether family members could be affected, whether your career involves China-facing work, and whether online attention could affect your safety, wellbeing or future plans.",
          "There is no single correct answer. Some people can speak publicly; others need anonymity or may decide not to participate."
        ]
      },
      {
        heading: "5) The Positive Value of Speaking",
        paragraphs: [
          "Caution does not mean silence. Speaking publicly about online abuse, discrimination or institutional failure can create real social value when done under appropriate protections.",
          "It can show others that reporting is possible, help mainstream audiences understand overseas Chinese experiences, and sometimes support policy or platform change.",
          "The question is not simply whether to speak, but under what conditions, with what boundaries, and with what preparation."
        ]
      },
      {
        heading: "6) If You Decide to Participate",
        paragraphs: [
          "Prepare a few clear sentences that express the core points you want to make. These are the words you would be comfortable seeing quoted.",
          "List topics or identifying details you do not want disclosed, and tell the journalist before the interview. Consider having a trusted person accompany you or at least know where you are and who you are meeting.",
          "If the interview is recorded, ask whether you can receive or keep a copy. After the interview, confirm any important clarifications by email."
        ]
      },
      {
        heading: "7) If You Decide to Decline",
        paragraphs: [
          "You do not need to give a detailed explanation. A short, polite email saying that you are not comfortable participating at this time is enough.",
          "Your story belongs to you. You have the right to decide when, how and to whom it is told."
        ]
      },
      {
        heading: "8) Boundary",
        paragraphs: [
          "This article is general information only and does not constitute legal advice, media strategy advice or public relations advice.",
          "For specific contract terms, consent forms, defamation risk, immigration consequences or legal responsibility, consult an Australian legal practitioner or other qualified adviser."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、為什麼這個話題對海外華人格外重要",
        paragraphs: [
          "每年都有海外華人，包括留學生、新移民和專業人士，因為在社交媒體分享了某段個人經歷，或在校園活動中作了一次公開發言，而被 BBC、ABC、SBS、《衛報》或其他西方主流媒體的記者主動聯繫，邀請參與報道或紀錄片拍攝。",
          "這樣的邀請往往令人既受到重視，又感到不安。受訪者的故事確實有新聞價值，但受訪者本人未必熟悉西方媒體的運作邏輯、合約條款，以及一旦報道發布後可能帶來的跨境影響。",
          "這篇文章不是要說服你接受或拒絕任何採訪邀請，而是幫你在作決定之前，把應該問的問題問清楚，把應該要求的保護要求到位。"
        ]
      },
      {
        heading: "二、接受採訪前必須釐清的七個問題",
        paragraphs: [
          "第一，這份報道的主題框架是什麼？記者在聯繫你時通常會給出一個初步描述，但「主題框架」（editorial angle）往往比描述更窄、更有立場。你可以直接問：這個紀錄片或報道的核心論點是什麼？你希望通過我的故事說明什麼？如果答案讓你感到你的故事會被用來支持一個你並不完全認同的結論，這是一個重要警示信號。",
          "第二，我的發言會以什麼形式呈現？文字引述、視頻片段、配音旁白，還是只作背景資料？不同呈現形式對曝光程度和被斷章取義的風險有本質差異，應要求記者明確說明並以書面確認。",
          "第三，我是否有審閱權（Right of Review）？審閱權通常是指在報道發布前，你有機會核實涉及你的部分是否準確，並要求更正事實錯誤。注意，審閱權不等於編輯權，你通常無法要求修改記者的敘述角度，但可以要求糾正涉及自己的事實錯誤。",
          "第四，我的身份會以何種程度公開？全名、全臉、聲音、所在地、學校、工作單位、家人背景，還是可以匿名或部分匿名？紀錄片製作尤其涉及視覺識別，匿名保護的技術落實方式需要明確確認，而不是只靠口頭承諾。",
          "第五，這份內容會在哪些平台和地區發布？在互聯網環境下，「只在某地區播出」並不等於內容不會被截取、翻譯或轉傳。你需要評估：如果這份報道被截取並在國內社交媒體廣泛傳播，你是否準備好接受可能後果。",
          "第六，採訪前是否需要簽署任何文件？許多媒體機構要求受訪者簽署 Release Form 或 Consent Form。這類文件通常是有利於媒體機構的格式合約，你有權要求對方提前提供文件，必要時諮詢律師。不要在採訪當天才第一次看到文件。",
          "第七，如果我在發布前想退出，有沒有撤回機制？製作完成前是否可以撤回參與？撤回截止時間是何時？這個問題不代表你一定會退出，但在決定參與之前知道退出通道是否存在，是保護自己的基本常識。"
        ]
      },
      {
        heading: "三、協議應該包含的內容",
        paragraphs: [
          "口頭承諾在媒體採訪中很脆弱。以下條款應以書面形式確認，可以是正式合約，也可以是清楚的電郵往來：受訪目的與使用範圍、採訪內容是否只用於特定項目、呈現形式、匿名保護的具體技術措施、事實審閱流程與時間安排、發布平台與地區範圍，以及你的撤回權利和截止日期。",
          "如果對方是大型媒體機構，他們的法律團隊通常有標準協議格式。你可以要求對方先發協議草稿，再決定是否繼續。",
          "不要因為對方是知名媒體就放棄閱讀條款。越是傳播能力強的平台，越需要把身份保護、使用範圍和撤回機制說清楚。"
        ]
      },
      {
        heading: "四、跨境影響的現實評估",
        paragraphs: [
          "對於身在澳洲但與中國仍有深度連結，例如家人、事業、未來回國計劃或中國市場工作的受訪者，跨境影響是一個需要認真評估的現實維度，而不是過度焦慮。",
          "需要考慮的問題包括：你在國內的家人是否可能因為你的發言受到影響？你目前或未來的職業計劃是否涉及與中國的業務往來？你的簽證狀態、心理健康、安全感或未來移民計劃是否可能受到輿論環境影響？",
          "這些問題沒有統一答案。有些人的情況允許他們公開發聲，有些人的處境需要更謹慎的保護措施。重要的是在接受採訪之前，而不是之後，把這些問題想清楚。"
        ]
      },
      {
        heading: "五、參與的正面價值",
        paragraphs: [
          "上面列出很多需要謹慎的理由，但這不是說接受採訪必然是壞事。公開講述網絡暴力、歧視或制度性失誤的經歷，在適當保護條件下，可以產生真實的社會價值。",
          "它為其他有類似遭遇的人提供可見先例，說明維權是可能的；它向主流社會傳遞海外華人群體的真實處境；它也可能推動媒體平台、學校或立法機構重新重視某些問題。",
          "問題不在於要不要發聲，而在於在什麼條件下發聲，以及你對可能後果有多充分的準備。正義的聲張從來不是一帆風順，但有準備的聲張，比倉促的決定，往往走得更遠。"
        ]
      },
      {
        heading: "六、如果你決定參與",
        paragraphs: [
          "確認所有書面協議後，在正式採訪前做好準備。把你想表達的核心觀點整理成幾個清晰句子，這些是你希望被引用的內容。",
          "把你不希望被觸及或公開的細節列出來，採訪前明確告訴記者這些是邊界。找一個你信任的人陪同採訪，或者至少讓他知道你在哪裡、和誰見面。",
          "如果採訪是視頻或錄音形式，可以詢問是否能獲得一份採訪錄音副本留存。採訪結束後，如果有任何不確定的地方，用電郵向記者確認你的陳述被正確理解，留下文字記錄。"
        ]
      },
      {
        heading: "七、如果你決定拒絕",
        paragraphs: [
          "拒絕採訪邀請不需要詳細解釋理由。一封禮貌的電郵說明你目前不方便參與即可。",
          "你的故事是你的，你有完全的權利決定何時、以何種方式、向誰講述它。"
        ]
      },
      {
        heading: "八、重要提示",
        paragraphs: [
          "本文為一般性資訊，不構成法律建議、媒體公關建議或合約建議。涉及具體合約條款、法律責任、誹謗風險、身份保護或跨境後果，請諮詢持牌澳洲律師或其他合資格專業人士。",
          "本文不代表對任何媒體機構的立場或評價。每一次採訪是否適合參與，都應根據個人安全、身份風險、家庭情況和書面協議具體判斷。"
        ]
      }
    ],
    sidebarCards: [
      ["Editorial angle", "主題框架", "先問清楚報道想用你的故事說明什麼。", "frame"],
      ["Review right", "事實審閱", "爭取核對涉及你的事實錯誤，不等於控制編輯立場。", "facts"],
      ["Identity", "身份保護", "匿名、打碼、變聲、地點和學校信息都要書面確認。", "privacy"],
      ["Withdrawal", "撤回機制", "在拍攝和發布前先問清楚退出截止點。", "exit"]
    ],
    resources: [
      ["BBC Editorial Guidelines", "https://www.bbc.co.uk/editorialguidelines/"],
      ["ABC Editorial Policies", "https://www.abc.net.au/edpols/"],
      ["SBS Codes of Practice", "https://www.sbs.com.au/aboutus/codes-of-practice/"],
      ["Arts Law Centre of Australia", "https://www.artslaw.com.au/"],
      ["LawAccess NSW", "https://www.lawaccess.nsw.gov.au/"]
    ],
    relatedReadings: [
      "australia-online-safety-cyberbullying-legal-guide",
      "australia-new-zealand-provider-pathway-updates-2026"
    ]
  },
  {
    slug: "othm-credits-australia-advanced-entry",
    title: "OTHM Credits in Australian University Entry and Credit Transfer: A Practical Analysis",
    date: "2026-05-23",
    category: "Australia Pathways",
    column: "study",
    kicker: "OTHM 學分澳洲升學",
    author: "留學導報編輯部",
    summary: "A practical bilingual analysis of how OTHM qualifications (Level 3–7) are recognised in Australian university applications, credit transfer processes, advanced entry pathways and articulation routes, including required documents, typical timelines and case scenarios.",
    titleZh: "OTHM 學分在澳洲升學與轉學中的作用",
    summaryZh: "一份給正在考慮澳洲路線學生的實務分析：OTHM Level 3 至 Level 7 在澳洲大學的入學對應、Credit Transfer 流程、必要文件、院校接受度與三種典型轉學情境，涵蓋 pathway college 銜接、Advanced Entry 申請及跨學歷整合策略。",
    body: [
      {
        heading: "1) What OTHM Is and Why Australia Recognises It",
        paragraphs: [
          "OTHM is a UK awarding organisation regulated by Ofqual. Its qualifications are structured under the Regulated Qualifications Framework (RQF) at Levels 3 to 7, each with defined academic equivalency standards.",
          "When Australian universities assess overseas qualifications, the primary question is whether the qualification is officially regulated in its country of origin. OTHM's Ofqual-regulated status directly answers that question.",
          "OTHM currently operates across more than 70 countries through over 500 approved centres, with tens of thousands of learners annually progressing to higher study or employment. This scale means Australian university admissions offices — particularly those with large international student cohorts — already have handling precedent for OTHM applications.",
          "Each OTHM unit carries a credit value, with one credit representing approximately ten hours of learning. A full academic year typically equates to 120 UK credits or 60 European ECTS credits. All OTHM qualification specifications list both UK credits and ECTS values, providing internationally transparent comparability. This dual-credit standard is particularly important for Australian credit transfer applications, where Credit Assessment Committees require specific credit figures."
        ]
      },
      {
        heading: "2) OTHM Level Equivalencies in the Australian Context",
        paragraphs: [
          "Level 3 Foundation corresponds to Australian Year 12 / pre-university entry level. Students with OTHM Level 3 can apply for Australian undergraduate first-year direct entry, or enter via pathway college foundation programmes such as Murdoch College, KIC Adelaide, or La Trobe College Australia.",
          "Level 4 corresponds to the academic standard of completed first-year Australian undergraduate study, broadly equating to Certificate IV to Diploma under the Australian Qualifications Framework (AQF). Some Australian universities accept OTHM Level 4 as grounds for second-year direct entry (Advanced Entry / Year 2), but this is subject to individual assessment and requires close subject alignment.",
          "Level 5 is the most persuasive OTHM level for Australian university applications. Under RQF, Level 5 equates to the second year of UK higher education, corresponding to AQF Diploma to Advanced Diploma. Students with OTHM Level 5 and matching subject direction may apply for third-year direct entry (Year 3 Entry) or Honours-year direct entry at several Australian universities, significantly reducing time in Australia.",
          "Level 6 is equivalent to a complete UK Bachelor's degree. In Australia, Level 6 holders can apply directly for postgraduate (Master's) admission, bypassing Australian undergraduate study. Some institutions also accept Level 6 as entry to Graduate Certificate or Graduate Diploma programmes, with onward progression to full Master's courses.",
          "Level 7 equates to a UK Postgraduate Diploma. In Australia, Level 7 may support applications for MBA or other Master's programmes with exemptions from coursework units, allowing direct entry into thesis stages or advanced-year courses."
        ]
      },
      {
        heading: "3) The Australian Credit Transfer Process and Key Documents",
        paragraphs: [
          "Credit transfer applications in Australia are administratively more involved than in the UK, because Australian universities typically require Unit Outlines — not just transcripts. These documents must detail the learning objectives, assessment methods, contact hours and content scope of each completed unit, enabling the Credit Assessment Committee to compare it against its own curriculum.",
          "The OTHM Official Transcript is the baseline requirement and must be issued directly by OTHM; student-printed records are not accepted.",
          "The Unit Outline (Module Descriptor) is the most commonly overlooked document and the most frequent cause of application rejection or delay. OTC assists students in preparing standard outlines for each completed OTHM unit in a format that meets Australian institutional review requirements.",
          "The Certificate of Achievement / Qualification Certificate is the formal OTHM qualification award confirming the student has completed an entire level, not merely individual units.",
          "English proficiency results (IELTS/PTE) must be submitted separately. Australian universities typically require IELTS 6.0–6.5 overall, with higher requirements for nursing and some other programmes.",
          "Where Open University credits are held, OU official transcripts and CATS credit listings should be included as supplementary academic background. Assessment timelines for Credit Transfer Applications at Australian universities are typically 3–6 weeks, extending to 8 weeks during peak intake periods. OTC recommends submitting at least 4 months before the intended entry date."
        ]
      },
      {
        heading: "4) Australian Institutions with Stronger OTHM Acceptance Precedent",
        paragraphs: [
          "Institutions with pathway college articulation: Murdoch University / Murdoch College, University of Adelaide / KIC Adelaide, La Trobe University / La Trobe College Australia, and University of Technology Sydney / UTS College. The advantage of these combinations is that students complete articulation through the pathway college first, which already has its own OTHM assessment process, significantly reducing uncertainty compared with direct university applications.",
          "Institutions with relatively flexible Advanced Entry policies: RMIT University, University of Newcastle, Central Queensland University (CQU), Charles Sturt University (CSU), and Curtin University. These institutions have precedent for handling UK RQF qualifications. The specific number of credit exemptions granted depends on subject alignment and requires individual review.",
          "A note on Group of Eight (Go8) institutions such as UNSW Sydney, University of Queensland and University of Melbourne: these apply stricter credit transfer assessment standards, typically requiring strong subject alignment and tending to limit exemption volumes. For these institutions, OTC recommends obtaining an admission offer first, then pursuing Recognition of Prior Learning (RPL) after enrolment rather than requesting Advanced Entry at the application stage."
        ]
      },
      {
        heading: "5) Three Typical OTHM Transfer Scenarios",
        paragraphs: [
          "Scenario 1 — Completing OTHM in the UK and transferring to an Australian university: The most common scenario. A student completes OTHM Level 4 or Level 5 in the UK and wishes to continue at an Australian university in the same subject area. Key steps are confirming qualification equivalency via WES or ENIC, submitting a Credit Transfer Application with a Unit Outline document pack, and ensuring strong subject alignment. OTC case records show that applications where subject direction matches closely — such as OTHM Business Management Level 5 against Australian Bachelor of Business — have significantly higher credit exemption success rates than cross-disciplinary applications.",
          "Scenario 2 — Enrolled in Australia, using OTHM to strengthen a transfer to a higher-ranked institution: Some students enrolled at Australian institutions have not met internal transfer grade thresholds, or wish to transfer to a higher-ranked university. The strategy here is to complete supplementary OTHM units on top of existing Australian credits, creating a stronger academic record, then applying for transfer with a combined Credit Transfer application. The key value is that OTHM qualifications add academic depth and provide an independent UK official qualification record alongside the Australian transcript.",
          "Scenario 3 — Holding Chinese or other Asian qualifications and seeking Australian higher-year entry: Direct Advanced Entry applications from Chinese university first- or second-year students are inconsistent in outcome, primarily because Chinese institutional courses require unit-by-unit verification against Australian curricula. OTC's approach is to supplement WES-verified Chinese qualifications with targeted OTHM units, using the UK RQF framework to improve the recognisability of the application, then submit a consolidated Advanced Entry application. This approach converts the question from 'can I get in?' to a technical question of 'which year do I enter?'"
        ]
      },
      {
        heading: "6) Frequently Asked Questions",
        paragraphs: [
          "Is there an official Australian recognition list for OTHM? No. Australia does not maintain a national list of approved overseas qualifications. Each university's Credit Assessment Committee evaluates applications independently. OTHM's recognition basis in Australia is its official Ofqual-regulated status in the UK and the framework correspondence between AQF and RQF, not a specific bilateral agreement.",
          "How is the number of credit exemptions determined? By the Credit Assessment Committee of each institution, based on the degree of content alignment. Applications with strong subject alignment typically receive the maximum exemptions; cross-disciplinary applications tend to receive fewer. OTC recommends making an informal enquiry with the admissions office before submitting a formal application, to understand the institution's general approach to similar backgrounds.",
          "Can OTHM credits contribute to Australian skilled migration points? OTHM qualifications do not directly contribute to skilled migration scoring. However, an Australian university degree subsequently obtained may serve as the educational basis for a migration application. Some state and territory nomination programmes have specific quotas for students at Australian institutions in certain fields — this has an indirect relationship with OTHM articulation pathways. Specific migration matters must be confirmed with a MARA/OMARA-registered migration agent or qualified migration lawyer; this article does not constitute migration advice."
        ]
      },
      {
        heading: "7) Next Steps",
        paragraphs: [
          "If you are considering applying for Australian university Advanced Entry or Credit Transfer using OTHM credits, OTC recommends the following sequence: first, compile your existing OTHM transcripts and Unit Outlines for all completed units; second, identify your target institution and programme and review its Credit Transfer policy page; third, contact OTC for a free credit assessment to confirm which credits have the strongest transfer prospects; finally, prepare a complete application document pack and submit through the institution's required process.",
          "Contact OTC: WhatsApp +44 7947 991572 / office@overseasuk.com / WeChat: overseasus"
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、OTHM 是什麼，澳洲為什麼認可它",
        paragraphs: [
          "OTHM 是英國 Ofqual 官方監管的頒證機構，其資格體系按英國 RQF（Regulated Qualifications Framework）編排，Level 3 至 Level 7 各層級均有明確的學術等值標準。這個「官方監管」的身份是關鍵——澳洲大學在評估海外資格時，首要問題是「這個資格在原產國是否受官方監管」，OTHM 的 Ofqual 認證正好回答了這個問題。",
          "OTHM 目前在全球超過 70 個國家、逾 500 個認可中心運營，每年有數以萬計的學習者通過 OTHM 資格進入更高層次的學習或就業。這個規模意味著澳洲各大院校的招生辦公室對 OTHM 並不陌生——尤其是在有大量國際學生的院校，OTHM 申請個案已有相當的處理先例。",
          "OTHM 資格的每個單元均附有學分值，一個學分代表約 10 小時的學習投入。一個完整學年通常為 120 個英國學分，相當於 60 個歐洲 ECTS 學分。所有 OTHM 資格說明文件均同時列出英國學分及 ECTS 學分值，確保國際間的透明可比性。這個雙學分標準對澳洲升學尤為重要——澳洲大學的 Credit Transfer Committee 在評估學分豁免時，需要明確的學分數字作依據，OTHM 的標準化格式正好符合這一要求。"
        ]
      },
      {
        heading: "二、OTHM 各層級在澳洲的具體對應",
        paragraphs: [
          "Level 3 Foundation：對應澳洲大學一年級入學資格（AQF Level 5 以下的銜接層）。持 OTHM Level 3 的學生可申請澳洲大學本科一年級直入，或通過 pathway college（如 Murdoch College、KIC Adelaide、La Trobe College Australia）的 Foundation 銜接課程進入對應大學。",
          "Level 4：對應澳洲本科一年級完成的學術水平，在 AQF 框架下約等於 Certificate IV 至 Diploma 層級。實際操作中，部分澳洲大學接受 OTHM Level 4 作為本科二年級直入（Advanced Entry / Year 2）的申請依據，但需個案評審，且要求學科方向吻合。",
          "Level 5：這是澳洲升學申請中最具說服力的 OTHM 層級。Level 5 在 RQF 框架下相當於英國高等教育第二年，對應 AQF Diploma 至 Advanced Diploma 層級。持 OTHM Level 5 且學科方向匹配的學生，在多所澳洲大學可申請本科三年級直入（Year 3 Entry）或 Honours 年直入，大幅縮短在澳修讀年期。",
          "Level 6：相當於英國本科學位（Bachelor's Degree）的完整學術資歷。在澳洲，Level 6 持有人可直接申請碩士課程（Postgraduate）入學，免去在澳讀本科的環節。部分院校亦接受 Level 6 作為 Graduate Certificate 或 Graduate Diploma 的入學依據，再銜接至全碩士課程。",
          "Level 7：相當於英國研究生文憑（Postgraduate Diploma）。在澳洲，Level 7 可用於申請 MBA 或其他碩士課程的豁免申請，通常可豁免前期課程單元（Coursework Units），直接進入論文階段或高年級課程。"
        ]
      },
      {
        heading: "三、澳洲 Credit Transfer 的實際流程與關鍵文件",
        paragraphs: [
          "澳洲的學分轉入申請在行政上比英國複雜，原因是澳洲大學普遍要求申請人提交課程大綱（Unit Outline），而不只是成績單。這份文件需要詳細說明每個已修讀科目的學習目標、評核方式、課時及內容範疇，供院校的 Credit Assessment Committee 與其自身課程作對應比較。",
          "OTHM 官方成績單（Official Transcript）是最基本的要求，必須由 OTHM 直接出具，不接受學生自行打印的成績記錄。課程大綱（Unit Outline / Module Descriptor）是最容易被忽略、也最容易導致申請被拒或延誤的文件，OTC 協助學生準備每個已修 OTHM 單元的標準大綱，格式符合澳洲院校的評審要求。資格完成確認函（Certificate of Achievement / Qualification Certificate）是 OTHM 頒發的正式資格證書，用以確認學生已完成整個資格層級而非僅部分單元。",
          "英語成績（IELTS/PTE）需獨立提交，澳洲院校通常要求 IELTS 6.0–6.5 overall，護理及部分課程要求更高。如持有 Open University 學分，需附 OU 官方成績單及 CATS 學分列表作為補充學術背景。澳洲院校的 Credit Transfer Application 通常需要 3–6 週，部分院校在入學高峰期可長達 8 週。OTC 建議學生在擬入學日期前至少 4 個月提交申請，預留充足的評審及後續溝通時間。"
        ]
      },
      {
        heading: "四、哪些澳洲院校對 OTHM 接受度較高",
        paragraphs: [
          "有 pathway college 銜接的院校組合：Murdoch University / Murdoch College、University of Adelaide / KIC Adelaide College、La Trobe University / La Trobe College Australia、University of Technology Sydney / UTS College。這些組合的優勢在於：學生先通過 pathway college 完成銜接課程，再直入大學，pathway college 本身已對 OTHM 資格有評估機制，大大降低直接申請的不確定性。",
          "接受 Advanced Entry 申請的院校：RMIT University、University of Newcastle、Central Queensland University（CQU）、Charles Sturt University（CSU）、Curtin University。這幾所院校在 Advanced Entry 政策上相對靈活，有處理英國 RQF 資格的先例。具體學分豁免數量取決於學科方向吻合程度，需個案評審。",
          "需要特別注意的情況：Group of Eight（Go8）成員院校（如 UNSW Sydney、University of Queensland、University of Melbourne）對 Credit Transfer 的審批較嚴格，通常要求學科方向高度吻合，且傾向於減少豁免學分數。這類院校建議先取得入學 offer，再通過入學後的 RPL 申請處理學分豁免，而非在申請階段即要求 Advanced Entry。"
        ]
      },
      {
        heading: "五、OTHM 轉學個案的三種典型情境",
        paragraphs: [
          "情境一：在英國修讀 OTHM，希望轉至澳洲大學繼續就讀。這是最常見的情境。學生在英國完成 OTHM Level 4 或 Level 5 後，希望轉往澳洲就讀同等方向的本科課程。關鍵步驟是先通過 WES 或 ENIC 確認資格等值，再向目標院校提交 Credit Transfer Application，同時提供 Unit Outline 文件包。OTC 的個案記錄顯示，學科方向吻合（例如 OTHM Business Management Level 5 對應澳洲 Bachelor of Business）的申請，學分豁免成功率顯著高於跨學科申請。",
          "情境二：在澳洲就讀，希望通過 OTHM 補強後轉入更好的院校。部分學生在澳洲院校就讀期間成績未達轉學要求，或希望轉入排名較高的院校。這類個案的策略是在現有澳洲學分基礎上，補修 OTHM 相關單元，形成更完整的學術記錄，再向目標院校申請轉學及 Credit Transfer。這個策略的核心在於：OTHM 資格補強了申請材料的學術深度，同時提供了一份獨立的英國官方資格記錄。",
          "情境三：持中國或其他亞洲學歷，希望進入澳洲本科高年級。中國大學一年級或二年級的學歷，直接申請澳洲大學 Advanced Entry 的成功率不穩定，主要原因是中國院校課程與澳洲院校的學科對應需要逐科核實。OTC 的做法是在 WES 認證中國學歷的基礎上，補修對應的 OTHM 單元，以英國 RQF 框架補強申請材料的可識別性，再整合提交 Advanced Entry 申請。這個方法把原本「能不能進」的不確定性，轉化為「進哪一年」的技術問題。"
        ]
      },
      {
        heading: "六、常見問題與注意事項",
        paragraphs: [
          "OTHM 在澳洲是否有官方認可清單？澳洲沒有一份全國性的「認可海外資格清單」，每所大學的 Credit Assessment Committee 獨立評審申請。OTHM 作為 Ofqual 監管資格，在澳洲的認可依據是其在英國的官方地位，以及 AQF 與 RQF 之間的框架對應關係，而非針對 OTHM 的專項協議。",
          "學分豁免數量如何確定？由各院校的 Credit Assessment Committee 按課程內容對應程度決定。通常學科方向高度吻合的申請可獲最多豁免，跨學科申請豁免學分往往較少。OTC 建議在提交申請前，先向招生辦公室作非正式查詢（informal enquiry），了解該院校對類似背景的一般做法。",
          "OTHM 學分能否用於澳洲技術移民的加分？OTHM 資格本身不直接用於技術移民評分，但取得更高層級的澳洲大學學位後，該學位可作為移民申請的學歷依據。部分州/領地的提名項目對特定專業的澳洲院校學生有額外的提名配額，這與 OTHM 的轉學銜接路線有間接關聯。具體移民事項必須諮詢 MARA / OMARA 註冊移民代理或合資格移民律師，本文不構成移民建議。"
        ]
      },
      {
        heading: "七、下一步",
        paragraphs: [
          "如果你正在考慮以 OTHM 學分申請澳洲院校的 Advanced Entry 或 Credit Transfer，OTC 的建議步驟是：首先整理現有 OTHM 成績及所有已修單元的 Unit Outline；其次確定目標院校及課程，查閱該院校的 Credit Transfer 政策頁面；然後聯絡 OTC 進行免費學分評估，確認哪些學分有較高的轉入可能性；最後準備完整申請文件包，按院校要求的流程提交。",
          "聯絡 OTC：WhatsApp +44 7947 991572 / office@overseasuk.com / WeChat: overseasus"
        ]
      }
    ],
    sidebarCards: [
      ["Ofqual regulated", "UK official awarding body", "OTHM 受英國 Ofqual 官方監管，資格在英國具法定地位，是澳洲大學評估的首要依據。", "verified"],
      ["Level 5 → Year 3", "Most impactful entry point", "OTHM Level 5 是澳洲升學申請中最具說服力的層級，可申請本科三年級或 Honours 年直入。", "pathway"],
      ["Unit Outlines required", "Most critical document", "澳洲 Credit Transfer 必須提交課程大綱，OTC 協助學生準備符合院校評審格式的完整文件包。", "document"],
      ["4 months lead time", "Apply early", "澳洲院校學分評審需 3–8 週，OTC 建議入學日期前至少 4 個月提交申請。", "timeline"]
    ],
    resources: [
      ["OTHM Qualifications official site", "https://www.othm.org.uk/"],
      ["Australian Qualifications Framework (AQF)", "https://www.aqf.edu.au/"],
      ["Ofqual Register of Regulated Qualifications", "https://register.ofqual.gov.uk/"],
      ["WES (World Education Services) credential evaluation", "https://www.wes.org/"],
      ["ENIC UK (UK ENIC for overseas qualification comparisons)", "https://www.enic.org.uk/"]
    ],
    relatedReadings: [
      "australia-new-zealand-provider-pathway-updates-2026",
      "australia-agent-training-map-2026",
      "otc-free-study-abroad-application-agent-service",
      "east-asian-women-australia-migration-whv-citizenship"
    ]
  },
  {
    slug: "east-asian-women-australia-migration-whv-citizenship",
    title: "East Asian Women in Australia: A Ten-Year Migration Road from WHV to Citizenship",
    date: "2026-05-23",
    category: "Australia Migration",
    column: "settlement",
    kicker: "澳洲移民個案札記",
    author: "留學導報編輯部",
    summary: "A reflective Chinese-language feature on an East Asian woman's long migration journey in Australia, from a Working Holiday Visa to skilled migration, permanent residence and citizenship, with cautious 2026 pathway notes for readers.",
    titleZh: "東亞女性在澳洲的移民之路：從 WHV 到入籍的十年堅持",
    summaryZh: "從打工度假到永居，再到澳洲公民身份，一位東亞女性用近十年時間走完了漫長而不穩定的移民路。本文以個人故事為引，整理 2026 年澳洲技術移民常見方向與準備提醒。",
    body: [
      {
        heading: "1) A Ten-Year Journey from Working Holiday to Citizenship",
        paragraphs: [
          "This article is a reflective migration story based on a friend's experience of entering Australia on a Working Holiday Visa before the pandemic and later becoming an Australian citizen.",
          "Her pathway involved work experience, repeated skills assessments, English testing, state nomination attempts, permanent residence and finally citizenship. It should be read as an encouragement story, not as a template that guarantees the same result for others."
        ]
      },
      {
        heading: "2) Key Steps in the Migration File",
        paragraphs: [
          "The practical milestones included entering Australia on a Working Holiday Visa, building local experience, completing skills assessments as occupation lists and requirements changed, achieving strong PTE Academic results, gaining CCL points, and later pursuing state nomination and permanent residence.",
          "The most important lesson is not that one pathway is always correct, but that applicants must keep evidence, timing, occupation choice, English scores and professional advice under constant review."
        ]
      },
      {
        heading: "3) Australia Skilled Migration Notes for 2026",
        paragraphs: [
          "For 2026 readers, Australia's skilled migration system remains highly dependent on occupation lists, skills assessments, English level, state or territory nomination settings, invitation rounds and document quality.",
          "Health, aged care, nursing, early childhood education, community services, social work, engineering and some IT-related fields may appear in different state or skilled migration contexts, but demand and invitation patterns can change quickly.",
          "Readers should check SkillSelect, the Department of Home Affairs visa pages, the relevant state or territory nomination pages, and the assessing authority for their exact occupation before making study, work or visa decisions."
        ]
      },
      {
        heading: "4) Common Visa Routes to Understand",
        paragraphs: [
          "Subclass 189 is a points-tested skilled independent permanent visa for invited applicants with an eligible occupation, suitable skills assessment and sufficient points.",
          "Subclass 190 is a skilled nominated permanent visa. A state or territory nomination is required, and each state or territory may set its own nomination criteria.",
          "Subclass 491 is a provisional regional skilled visa. Some applicants later look toward subclass 191 permanent residence if they meet the relevant residence, work and income-document requirements. Employer-sponsored routes such as 482 to 186 may also be relevant in some cases.",
          "These routes are not interchangeable. A student's course choice, employment history, occupation assessment, English score and location can all affect which options are realistic."
        ]
      },
      {
        heading: "5) A Note for Women Migrating Alone",
        paragraphs: [
          "Many East Asian women arrive in Australia without family support, then face language pressure, workplace adjustment, cultural distance, financial risk and policy uncertainty at the same time.",
          "The strength in this story is not romanticised suffering. It is the quiet discipline of continuing to gather evidence, retake exams, change direction when necessary, ask better questions and keep going when the system changes."
        ]
      },
      {
        heading: "6) Compliance Boundary",
        paragraphs: [
          "This article is general public information and personal reflection. It is not immigration advice, legal advice or a promise of eligibility.",
          "Anyone making visa or citizenship decisions should check the latest Australian Government information and, where needed, consult a registered migration agent, Australian legal practitioner or other appropriately qualified professional."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、從 WHV 到入籍，近十年的路不是一句勵志可以概括",
        paragraphs: [
          "昨天，我去參加了一位朋友的澳洲入籍儀式。看著她從當年背著包來澳洲打工度假的女孩，一步步走到今天，心裡其實很難只用「恭喜」兩個字概括。",
          "她是疫情前持 Working Holiday Visa（WHV，打工度假簽證）來到澳洲的。從最初的 backpacker，到後來取得永居、完成入籍程序，前後花了將近十年。這一路裡，有疫情封鎖，有 189 獨立技術移民邀請節奏變化，有職業清單大洗牌，也有中介失誤、重新轉向和自己補材料的漫長消耗。",
          "這篇文章不是要把她的路包裝成人人可複製的模板，而是想記下：一個東亞女性在異國政策縫隙裡，把自己一次次重新組裝起來，最後真的走到了那一天。"
        ]
      },
      {
        heading: "二、她的移民歷程重點回顧",
        paragraphs: [
          "起點是 WHV 入境。她一邊工作，一邊累積澳洲本地經驗，慢慢理解這個國家的職場規則、生活節奏和簽證系統。",
          "技能評估做了不止一次。因為職業清單、評估標準和市場方向一直變，她前後準備過不同方向的 Skills Assessment，每一次都意味著重新整理學歷、工作證明、職責描述和材料邏輯。",
          "英語也不是輕鬆過關。她最後考到 PTE Academic 各項 8 分水準，並拿下 CCL（社區語言加分），才把分數結構推到更有競爭力的位置。",
          "最艱難的一段，是好不容易等到 190 州擔保邀請，卻因為當時中介處理疏忽導致申請被拒。後來她沒有停在抱怨裡，而是換職業方向，自己重新準備材料，再次等待機會。",
          "最終，她從臨時簽證一路走到 PR，再到 2025 年前後完成入籍相關程序。這個結果背後，不是運氣一句話，而是十年裡一次次沒有放棄。"
        ]
      },
      {
        heading: "三、為什麼特別想寫東亞女性",
        paragraphs: [
          "很多東亞女性來澳洲時，其實沒有太多後盾。家人不一定理解，朋友分散在不同城市，語言和文化要自己適應，租房、工作、考試、簽證、銀行、稅務、醫療，全部都要一點點學會。",
          "更難的是，她們常常被要求既要溫柔、懂事、穩定，又要足夠堅硬，能承受拒簽、失業、政策變動、孤獨感和職場歧視。這種韌性不是口號，而是每天早上醒來還要繼續處理文件、繼續上班、繼續備考的能力。",
          "所以我聽她講這段經歷時，既心疼也佩服。她不是一夜逆襲，她只是一直沒有把自己交給失望。"
        ]
      },
      {
        heading: "四、2026 年澳洲移民現況：先看方向，再看個案",
        paragraphs: [
          "截至 2026 年，澳洲技術移民仍然高度依賴職業清單、技能評估、英語成績、EOI 分數、州或領地提名政策、邀請輪次和材料質量。任何單一網帖都不能替代官方頁面和個案判斷。",
          "從近期市場觀察看，醫療、健康、護理、老年護理、幼教、社工、社區服務等方向仍然受到不少申請人關注；工程和 IT 也仍有機會，但競爭和職業細分要求更需要仔細核對。",
          "如果正在準備，建議固定查看 SkillSelect、澳洲內政部簽證頁、各州/領地 nomination 頁面，以及自己職業對應的 assessing authority。不要只聽「現在什麼最熱門」，而要看你自己的學歷、工作、英文、地區和時間線是否真的對得上。"
        ]
      },
      {
        heading: "五、幾條常見簽證路線，應該這樣理解",
        paragraphs: [
          "189 獨立技術移民是 points-tested permanent visa，核心在於受邀、合格職業、有效技能評估和分數競爭。它的吸引力很大，但不是每個職業、每個分數段都有穩定機會。",
          "190 州擔保技術移民是 permanent visa，需要州或領地 nomination。它常被很多申請人視為主流路線之一，但各州的職業清單、居住/工作要求、優先行業和邀請策略會變，需要逐州核對。",
          "491 偏遠地區技術簽證是 provisional regional visa。部分申請人之後會再看 191 永居路線，但前提包括持有合資格簽證、滿足相關居住與合規要求，以及提供所需稅務/收入文件等。",
          "雇主擔保路線，例如 482 轉 186，對某些職業和雇主條件合適的人也可能重要。但雇主資質、職位真實性、工資、市場測試和後續轉永居要求，都不能靠一句「公司願意擔保」就跳過。"
        ]
      },
      {
        heading: "六、正在準備的人，真正要把關的是這幾件事",
        paragraphs: [
          "第一，技能評估。不同職業由不同評估機構負責，對學歷、工作年限、職責、英文、註冊資格和文件格式要求差異很大。不要等到 EOI 前才發現職業評估不成立。",
          "第二，英語和加分。PTE、IELTS、CCL、澳洲學習、偏遠地區、配偶分、Professional Year 等，都要回到官方 points table 和個人條件核對。能加分不等於一定該加，時間成本也要算進去。",
          "第三，EOI 和州擔保材料。EOI 不是許願池，所有聲明都應能被文件支持。州擔保階段尤其要嚴謹，因為小錯可能直接影響邀請或申請結果。",
          "第四，中介或代理。重要步驟不要完全放手不看。若付費尋求移民協助，應核對對方是否為澳洲註冊移民代理（MARA / OMARA）或合資格澳洲法律從業者，並保留書面建議和提交記錄。"
        ]
      },
      {
        heading: "七、給還在路上的你",
        paragraphs: [
          "移民不是一條平坦的路。它有時像一場長期耐力測試：你以為快到了，政策又變；你以為材料齊了，又要補新證明；你以為這個職業安全，清單又開始調整。",
          "但我朋友的故事提醒我，很多事情不是靠一次決定完成，而是靠很多次小小的、不放棄的動作累積起來。考一次不夠就再考，職業方向不行就重看，材料出錯就重整，孤獨爆棚也先把今天過完。",
          "如果你正在澳洲、加拿大、紐西蘭或其他國家的移民路上，希望這篇文章能給你一點力氣。不是所有等待都有結果，但清醒、持續、願意調整的人，總比原地耗著的人更接近下一扇門。"
        ]
      },
      {
        heading: "八、最後想對她說",
        paragraphs: [
          "恭喜你。從那個背著包來打工度假的女孩，到今天站在入籍儀式裡，這十年真的很不容易。",
          "也謝謝你讓我再次看見：東亞女性在異國生活裡的韌性，不只是能吃苦，而是能在不確定裡保留判斷、體面和向前走的能力。這很珍貴。"
        ]
      }
    ],
    sidebarCards: [
      ["WHV", "Working Holiday Visa", "適合年輕人短期在澳洲旅行、工作與體驗生活，但後續路線需重新規劃。", "start"],
      ["Skills Assessment", "職業技能評估", "技術移民核心材料之一，須依職業與評估機構要求準備。", "evidence"],
      ["EOI / Nomination", "意向書與州擔保", "分數、職業、州政策、邀請輪次和材料一致性都會影響結果。", "selection"],
      ["Citizenship", "入籍與身份轉換", "永居後仍需滿足居住、品格與其他入籍要求，時間線要逐項核對。", "final"]
    ],
    resources: [
      ["SkillSelect", "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect"],
      ["Skilled Independent visa (subclass 189)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested"],
      ["Skilled Nominated visa (subclass 190)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190"],
      ["Skilled Work Regional visa (subclass 491)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491"],
      ["Permanent Residence Skilled Regional visa (subclass 191)", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-191/regional-provisional"],
      ["Using a migration agent", "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/using-a-migration-agent"],
      ["Australian citizenship residence calculator", "https://immi.homeaffairs.gov.au/help-support/tools/residence-calculator"]
    ],
    relatedReadings: [
      "australia-new-zealand-provider-pathway-updates-2026",
      "australia-agent-training-map-2026",
      "study-nt-agent-training-certificate-otc-australia-meaning",
      "australia-trust-guide"
    ]
  },
  {
    slug: "otc-free-study-abroad-application-agent-service",
    title: "OTC Free Study-Abroad Application Support: Canada, UK, Australia, New Zealand, US and Ireland",
    date: "2026-05-23",
    category: "Study Abroad Services",
    column: "study",
    kicker: "Free application support",
    author: "留學導報編輯部",
    summary: "A service guide explaining how Overseas Tutorial Centre supports study-abroad applications through partner and sub-agent routes across Canada, the UK, Australia, New Zealand, the US, Ireland and other popular destinations.",
    titleZh: "加拿大｜英國｜澳洲｜新西蘭｜美國｜愛爾蘭：海外督導熱門院校申請全程免費支持",
    summaryZh: "海外督導 OTC 通過一級及二級代理合作模式，為學生提供熱門留學國家院校申請支持。對可通過 OTC 合作渠道遞交的院校和項目，學生端申請服務通常不收取中介服務費；先做路線初審，再確認國家、課程、文件和遞交方案。",
    body: [
      {
        heading: "1) What OTC Means by Free Application Support",
        paragraphs: [
          "Overseas Tutorial Centre supports applications to popular study destinations including Canada, the United Kingdom, Australia, New Zealand, the United States and Ireland.",
          "For institutions and programmes that can be submitted through OTC's cooperation, partner or sub-agent channels, the student-facing application support is usually provided without a separate agency service fee.",
          "This does not mean every possible institution in every country is free or available through OTC. It means OTC first checks whether a student's target route can be handled through an eligible channel, then confirms the application plan and service boundary."
        ]
      },
      {
        heading: "2) Partner and Sub-Agent Routes",
        paragraphs: [
          "OTC works through first-level and second-level agent models where applicable. These may include universities, colleges, pathway providers, international recruitment platforms, school-sector contacts and education cooperation channels.",
          "This structure allows OTC to cover many popular destinations, including universities, colleges, foundation, international year one, graduate pathway, TAFE / VET, boarding school and secondary-school routes.",
          "The practical value for students is simple: they do not need to buy an expensive package before understanding whether their country, course, timing and documents make sense."
        ]
      },
      {
        heading: "3) Countries and Application Types",
        paragraphs: [
          "Canada: undergraduate applications, colleges, postgraduate diplomas, master's routes and selected pathway options.",
          "United Kingdom: undergraduate, postgraduate, foundation, international year one, top-up, progression, direct-entry and pathway applications.",
          "Australia and New Zealand: universities, TAFE / VET, pathway providers, regional study routes, school applications and family-facing education planning.",
          "United States and Ireland: selected undergraduate, transfer, postgraduate, language, pathway and cooperation-channel applications where available."
        ]
      },
      {
        heading: "4) How Students Should Choose an Agency",
        paragraphs: [
          "A good application adviser should not begin by pushing a package. The first step should be route diagnosis: academic background, English readiness, budget, intended intake, course direction and document gaps.",
          "Students should ask who will review the documents, who will monitor portal messages, who follows offer conditions and deadlines, and whether the adviser can explain why each institution is being recommended.",
          "If an adviser only repeats ranking lists, discounts, limited-time offers or guaranteed-admission language, the family should slow down and ask for a written plan."
        ]
      },
      {
        heading: "5) Service Boundary",
        paragraphs: [
          "Free application support normally applies to institutions and programmes that can be handled through an eligible OTC cooperation, partner or sub-agent route.",
          "Some special cases, non-partner institutions, complex document editing, portfolio work, certified translation, notarisation, courier, examination fees, visa support or third-party professional services may involve separate institution or third-party costs.",
          "OTC supports education-route planning, application administration and document organisation. Admission decisions, scholarships, visa decisions and regulated professional advice remain with the relevant institution, authority or qualified adviser."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、海外督導熱門院校申請，全程免費支持",
        paragraphs: [
          "加拿大｜英國｜澳洲｜新西蘭｜美國｜愛爾蘭等熱門留學目的地，海外督導 OTC 均可為學生提供院校申請支持。",
          "對可通過 OTC 合作渠道遞交的院校和項目，學生端申請服務通常不收取中介服務費。這是本文最重要的信息：先做路線初審，再確認國家、院校、課程、文件和遞交方案。",
          "這不等於所有院校、所有特殊申請都一律免費，而是 OTC 會先判斷學生目標是否可以通過合作、平台或 sub-agent channel 處理，再把可行路線說清楚。"
        ]
      },
      {
        heading: "二、一級及二級代理模式，覆蓋多數熱門院校和地區",
        paragraphs: [
          "海外督導通過一級及二級代理合作模式，連接多個國家與地區的院校、pathway provider、國際招生平台及教育合作渠道。",
          "申請服務範圍覆蓋大量熱門大學、學院、預科、國際大一、研究生 pathway、職業教育、TAFE / VET、中小學及 boarding school 項目。",
          "對學生和家長來說，這意味著不必一上來就被迫購買高價套餐；可以先了解自己是否適合加拿大、新西蘭、英國、澳洲、美國或愛爾蘭，再決定具體申請。"
        ]
      },
      {
        heading: "三、適合哪些申請方向？",
        paragraphs: [
          "加拿大：本科、college、公立學院、研究生文憑、碩士及 pathway 路線。",
          "英國：本科、碩士、預科、國際大一、top-up、專升本、院校直申及 progression route。",
          "澳洲：大學、TAFE、VET、pathway、中小學、區域型升學路線及家庭教育規劃。",
          "新西蘭：大學、理工學院、pathway、中小學及家庭型低齡留學路線。",
          "美國與愛爾蘭：本科、轉學、研究生、語言、pathway 及合作院校申請。"
        ]
      },
      {
        heading: "四、面對小紅書式中介推薦，先問這幾個問題",
        paragraphs: [
          "很多同學會問：小紅書一搜全是廣告，到底哪家留學中介可信？這個問題很真實。大機構的優點是流程穩、品牌可見；但同學們擔心的流水線服務，也確實值得警惕。",
          "選中介前，先問對方：會不會看完整材料再建議國家和學校？推薦這些院校的理由是什麼？文書和文件誰負責？誰跟進 portal、補件、offer condition 和 deadline？",
          "如果對方只是不斷催你現在簽約、活動價、名額快沒了，卻說不清課程匹配、文件缺口和時間線，那就應該先停一停。"
        ]
      },
      {
        heading: "五、海外督導先做路線初審，再啟動申請",
        paragraphs: [
          "OTC 更適合不想被模板化處理的學生：先診斷，再規劃，再整理文件，再推進申請。",
          "第一次初審通常會看學生的學術背景、英語準備、預算、目標 intake、國家偏好、專業方向、文件缺口，以及 dream / target / safe 的院校分層。",
          "27fall 或更早階段的學生，不必急著定死院校；更重要的是先建立申請檔案，把加拿大、新西蘭、英國、澳洲、美國、愛爾蘭幾條路線放在同一張圖上比較。"
        ]
      },
      {
        heading: "六、服務邊界說明",
        paragraphs: [
          "免費申請服務通常適用於可通過 OTC 合作渠道遞交的院校或項目。",
          "部分特殊申請、非合作院校、複雜文書、作品集、翻譯、公證、快遞、考試報名、簽證或第三方專業服務，可能產生院校或第三方費用，具體以個案確認為準。",
          "OTC 提供教育路線規劃、申請行政支持與文件整理；錄取、獎學金、簽證和受監管專業建議，仍以院校、官方機構或合資格專業人士的決定為準。"
        ]
      }
    ],
    sidebarCards: [
      ["Free application", "Student-facing support", "可通過 OTC 合作渠道遞交的院校申請，通常不另收中介服務費。", "free"],
      ["Coverage", "Major study destinations", "加拿大、英國、澳洲、新西蘭、美國、愛爾蘭等熱門地區。", "global"],
      ["Agent routes", "Partner and sub-agent", "一級及二級代理合作模式，覆蓋大學、學院、pathway、中小學等。", "channel"],
      ["Boundary", "Case-by-case confirmation", "特殊申請、第三方費用及受監管事項需另行確認。", "clear"]
    ],
    costs: [
      ["合作渠道院校申請", "通常免費", "適用於可通過 OTC 渠道遞交的項目"],
      ["路線初審", "可先諮詢", "確認國家、課程、文件與時間線"],
      ["第三方費用", "按實際產生", "考試、翻譯、公證、快遞、院校費用等"]
    ],
    resources: [
      ["OTC university application intake", "https://overseasuk.com/university-applications/"],
      ["OTC services", "https://overseasuk.com/services/"],
      ["OTC Canada route", "https://overseasuk.com/countries/canada/"],
      ["OTC New Zealand route", "https://overseasuk.com/countries/new-zealand/"]
    ]
  },
  {
    slug: "kcl-offer-holder-timeline-course-decisions",
    title: "KCL Offer Holder Stage: Why Course Fit, Conditions and Timing Cannot Wait",
    date: "2026-05-23",
    category: "UK Applications",
    column: "study",
    kicker: "KCL offer-holder timing",
    author: "留學導報編輯部",
    summary: "A privacy-safe Overseas Study Review article explaining why King's College London offer-holder communications, course fit, offer conditions, accommodation, visa/CAS and official portal timelines must be handled early and systematically.",
    titleZh: "KCL Offer Holder 階段為什麼不能等：課程、條件、時間線與入學準備",
    summaryZh: "近期 KCL offer-holder 信息提醒我們：名校 offer 不是終點，而是一段高密度時間管理。課程適配、條件核對、接受 offer、住宿、CAS、簽證與官方 portal 信息，都需要及早處理。本文不披露任何學生個資，只總結這類信息對英國申請家庭的普遍意義。",
    body: [
      {
        heading: "1) Offer Holder Communication Is a Workflow, Not a Celebration Email",
        paragraphs: [
          "A King's College London offer-holder email or community invitation should not be treated as a decorative congratulation. It is part of a wider workflow that includes offer conditions, acceptance deadlines, accommodation, visa preparation, subject-level information and official portal communication.",
          "The student detail behind this article is deliberately removed. The public point is general: when a highly selective UK university starts sending offer-holder information, the applicant's file has entered a time-sensitive phase.",
          "Families should therefore move from 'we have an offer' to 'we are managing a confirmed sequence of actions'."
        ]
      },
      {
        heading: "2) Why This Kind of Course Information Is Absolutely Necessary",
        paragraphs: [
          "At KCL level, the course is not just a title on an offer letter. It controls academic preparation, subject expectations, reading culture, employability positioning, possible professional direction and the student's first-year adjustment risk.",
          "Offer-holder subject hubs, events and official next-step pages help applicants understand what the department expects before enrolment. Ignoring these materials means the student may arrive with the offer but without a working understanding of the course.",
          "For families comparing several offers, the correct question is not only which university ranks higher. It is whether this course, this department, this London environment and this timetable are actually manageable for the student."
        ]
      },
      {
        heading: "3) Timing Controls the Outcome After the Offer",
        paragraphs: [
          "KCL's official offer-holder guidance points students back to deadlines, conditions, document submission, King's Apply messages, accommodation advice and visa / international student guidance. These are not optional side notes.",
          "A missed acceptance deadline, slow document response, late condition upload, delayed CAS preparation or late accommodation action can create practical risk even when the academic offer is strong.",
          "The offer-holder period should therefore be handled with a dated checklist: decision deadline, condition deadline, document evidence, official message history, accommodation route, deposit requirement if applicable, CAS timing and visa planning."
        ]
      },
      {
        heading: "4) How OTC Reads This Type of KCL Information",
        paragraphs: [
          "OTC treats this category of email as a case-management trigger. It means the student file should be reviewed for offer type, course fit, outstanding conditions, official portal messages and next-step responsibilities.",
          "WeChat groups or community invitations can be useful for peer connection and practical reminders, but they must never replace official KCL webpages, King's Apply, UCAS, formal email or written admissions instructions.",
          "The correct support is calm and administrative: decode the official message, build the checklist, confirm what is still missing, and make sure the student knows which deadline comes next."
        ]
      },
      {
        heading: "5) Public Boundary",
        paragraphs: [
          "This article is based on a privacy-safe review of a type of KCL offer-holder communication. It does not disclose any student's name, email address, course, application number, offer condition or private correspondence.",
          "It is general education information only. KCL's official webpages, King's Apply, UCAS and the student's own offer letter remain the controlling sources for deadlines, conditions, deposits, accommodation and visa-related steps.",
          "OTC can support education-route organisation and document preparation, but does not guarantee admission outcomes or replace official university instructions."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、Offer holder 信息不是祝賀郵件，而是工作流程開始",
        paragraphs: [
          "KCL 這類 offer-holder email 或社群邀請，不能只當作一封好消息。它實際上代表學生檔案進入下一階段：offer 條件、接受期限、住宿、簽證/CAS、課程信息、官方 portal 通訊，都開始變成有時間順序的工作。",
          "本文已完全隱去學生個資，不公開姓名、郵箱、申請號、具體 offer 條件或私人往來。這裡討論的是一個普遍問題：英國名校開始發 offer-holder 信息時，申請已經進入高度時間敏感階段。",
          "家庭此時要從「拿到 offer 了」切換為「開始管理一組有日期、有文件、有官方渠道的任務」。"
        ]
      },
      {
        heading: "二、為什麼這類課程信息有絕對必要性？",
        paragraphs: [
          "到了 KCL 這類院校，課程不是 offer letter 上的一行字。它直接影響學生的學術準備、學科預期、閱讀強度、就業定位、專業方向，以及第一年能否適應。",
          "Offer-holder subject hubs、學院活動、next-step 官方頁面，都是幫學生提前理解課程與學院期待的材料。如果忽略這些信息，學生可能只是「拿著 offer 入學」，但並沒有真正理解自己要讀什麼。",
          "對正在比較多個 offer 的家庭來說，問題也不只是「哪所排名更高」。更重要的是：這個課程、這個 department、這個 London 學習環境和這條時間線，是否真的適合這名學生。"
        ]
      },
      {
        heading: "三、Offer 之後，時間線會直接影響結果",
        paragraphs: [
          "KCL 官方 offer-holder guidance 會把學生帶回幾個核心事項：deadline、conditions、document submission、King's Apply message、accommodation advice、visa / international student guidance。這些不是附屬信息，而是 offer 之後真正要做的事情。",
          "如果 acceptance deadline 錯過、條件文件上傳慢、官方 message 沒有回、CAS 準備延後、住宿行動太晚，即使學生本身拿到的是好 offer，也可能產生實際風險。",
          "因此 offer-holder 階段應該立即建立日期清單：接受 offer 的期限、滿足條件的期限、文件證據、官方 message 紀錄、住宿路線、是否需要 deposit、CAS 時間、簽證時間。"
        ]
      },
      {
        heading: "四、OTC 如何處理這類 KCL 信息？",
        paragraphs: [
          "OTC 會把這類郵件視為 case-management trigger：學生檔案需要立即檢查 offer type、course fit、未完成條件、官方 portal message 和下一步責任。",
          "微信群、offer-holder community 或同學群可以提供同伴信息和提醒，但不能替代 KCL 官方網頁、King's Apply、UCAS、正式 email 或 offer letter 裡的書面要求。",
          "正確的支持不是製造焦慮，而是安靜地做行政管理：讀懂官方信息、建立 checklist、確認缺口、提醒下一個 deadline。"
        ]
      },
      {
        heading: "五、公開邊界",
        paragraphs: [
          "本文只基於 KCL offer-holder 類型信息做公開教育解讀，已去除所有學生個人信息，不披露姓名、郵箱、課程細節、申請號、offer 條件或私人通信。",
          "本文僅為一般教育資訊。具體 deadline、condition、deposit、accommodation、CAS、visa 及註冊要求，應以 KCL 官方頁面、King's Apply、UCAS 及學生個人 offer letter 為準。",
          "OTC 可協助教育路線整理、文件清單、官方信息解讀與申請行政支持，但不保證錄取結果，也不替代院校官方指示。"
        ]
      }
    ],
    sidebarCards: [
      ["Offer holder", "Not the finish line", "拿到 offer 後，真正的條件、文件與時間管理才開始。", "workflow"],
      ["Course fit", "Department readiness", "課程信息決定學生是否理解學術要求與第一年適應風險。", "academic"],
      ["Deadline", "Time-sensitive stage", "接受期限、條件文件、住宿、CAS 與簽證都需要提前排期。", "timing"],
      ["Privacy", "No student data", "文章只講類型和流程，不公開任何學生私人資料。", "safe"]
    ],
    resources: [
      ["KCL undergraduate offer holders", "https://www.kcl.ac.uk/study/undergraduate/offer-holders"],
      ["KCL postgraduate taught offer holders", "https://www.kcl.ac.uk/study/postgraduate-taught/offer-holders"],
      ["KCL undergraduate next steps", "https://www.kcl.ac.uk/study/undergraduate/offer-holders/next-steps"],
      ["KCL postgraduate research offer-holder guidance", "https://www.kcl.ac.uk/study/postgraduate-research/how-to-apply/important-information-for-postgraduate-research-offer-holders"]
    ]
  },
  {
    slug: "study-nt-agent-training-certificate-otc-australia-meaning",
    title: "What the Study NT Agent Training Certificate Means for OTC's Australia Route",
    date: "2026-05-23",
    category: "Australia Pathways",
    column: "study",
    kicker: "Study NT certificate analysis",
    author: "OTC Study Hub Editorial",
    summary: "OTC's completion of the Study NT Agent Training Course is a concrete training milestone in its Australia expansion map: it strengthens destination knowledge, state-level briefing discipline and public evidence of preparation, while remaining distinct from formal agency appointment or regulated advice.",
    titleZh: "Study NT Agent Training 證書意味著什麼：OTC 澳洲版圖的一個實質節點",
    summaryZh: "OTC 完成 Study NT Agent Training Course 並取得 completion certificate，代表其澳洲擴張不再停留於一般市場描述，而開始進入州/領地官方教育資訊、agent training 與目的地知識體系。這是公開培訓證明，不等同於正式代理授權或受監管專業建議資格。",
    body: [
      {
        heading: "1) A Training Certificate, Not a Decorative Badge",
        paragraphs: [
          "The Study NT Agent Training Course certificate shows that OTC has completed a structured Northern Territory education-agent training route and can evidence that completion publicly.",
          "For an education organisation building an Australia-facing service desk, this matters because destination knowledge must be learned from official or sector-recognised channels, not assembled only from marketing brochures.",
          "The certificate is therefore a practical training milestone: it helps OTC organise Northern Territory schools, VET/TAFE, ELICOS, pathway and higher-education information with a more disciplined state-level lens."
        ]
      },
      {
        heading: "2) Why Northern Territory Matters in a National Australia Map",
        paragraphs: [
          "Many families start with Sydney, Melbourne or Brisbane. Northern Territory adds another layer to the map: Darwin, regional education, smaller destination markets, skilled-economy context, English immersion and provider routes that may not be visible in major-city comparisons.",
          "Including Study NT in OTC's training map helps prevent the Australia service from becoming a two-city conversation. It gives families a more complete way to compare state and territory routes.",
          "For OTC's internal operation, the NT training record can sit beside Study NSW briefings, Queensland and Victoria outreach, StudyPerth, StudyAdelaide, Tasmania and ACT routes as part of a national education intelligence layer."
        ]
      },
      {
        heading: "3) What It Means for OTC's Australia Expansion",
        paragraphs: [
          "The certificate supports three types of evidence: staff training evidence, market-development evidence and public capability evidence.",
          "Staff training evidence means OTC can show that its Australia-facing office work includes structured learning and not only general enquiry handling.",
          "Market-development evidence means OTC is actively building state and territory education channels, not merely claiming an abstract interest in Australia.",
          "Public capability evidence means students, families and institutional contacts can see that OTC is building a documented route into official education briefings and destination training."
        ]
      },
      {
        heading: "4) The Boundary: What the Certificate Does Not Mean",
        paragraphs: [
          "The certificate does not by itself create a formal agency agreement with every Northern Territory provider, does not authorise OTC to use provider logos, and does not replace written representative terms.",
          "It is also not migration advice, legal advice, tax advice or a regulated professional qualification. Visa, migration, legal and tax matters must be handled by qualified professionals where required.",
          "OTC will therefore describe the certificate as an education-agent training completion record and destination-readiness milestone, while keeping formal cooperation claims limited to relationships that are separately evidenced."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、這不是裝飾性 badge，而是一個培訓完成記錄",
        paragraphs: [
          "Study NT Agent Training Course completion certificate 說明 OTC 已完成 Northern Territory 的教育中介培訓路線，並可以把這一完成狀態作為公開培訓記錄展示。",
          "對正在建立 Australia-facing service desk 的教育機構來說，這件事重要，是因為澳洲目的地知識不能只靠宣傳冊拼湊，而應該進入官方或行業認可的 briefing / training / update 軌道。",
          "因此，這張證書的意義不是好看，而是實務性的：它幫 OTC 用更有紀律的州/領地視角，整理 Northern Territory 的 schools、VET / TAFE、ELICOS、pathway 和高等教育資訊。"
        ]
      },
      {
        heading: "二、為什麼 Northern Territory 對全澳版圖有意義？",
        paragraphs: [
          "許多家庭談澳洲留學，第一反應是 Sydney、Melbourne 或 Brisbane。Northern Territory 讓澳洲地圖多出另一層：Darwin、regional education、小型目的地市場、英語沉浸、技能經濟背景，以及不一定出現在大城市比較表中的 provider route。",
          "把 Study NT 納入 OTC 的培訓版圖，可以避免澳洲服務變成只談兩三個大城市，而能讓家庭更完整地比較各州與領地的教育路線。",
          "對 OTC 內部運作而言，Study NT 培訓記錄可以與 Study NSW briefing、Queensland / Victoria 聯絡、StudyPerth、StudyAdelaide、Tasmania、ACT 等路線並列，形成 national education intelligence layer。"
        ]
      },
      {
        heading: "三、對 OTC 澳洲擴張意味著什麼？",
        paragraphs: [
          "這張證書至少支撐三類記錄：staff training evidence、market-development evidence、public capability evidence。",
          "Staff training evidence 表示 OTC 的澳洲辦公室工作不是單純接收詢問，而包含結構化培訓和州別教育知識建立。",
          "Market-development evidence 表示 OTC 正在主動建立澳洲各州與領地教育渠道，而不是抽象地說「準備進軍澳洲」。",
          "Public capability evidence 表示學生、家庭與院校窗口可以看到：OTC 正在把自己接入官方教育 briefing、destination training 和州別資料更新的路線。"
        ]
      },
      {
        heading: "四、邊界：這張證書不代表什麼？",
        paragraphs: [
          "這張證書本身不等於 OTC 已自動取得所有 Northern Territory provider 的正式代理協議，也不等於可以使用 provider logo，更不替代書面的 representative terms。",
          "它也不是移民建議資格、法律建議資格、稅務建議資格或其他受監管專業資格。涉及 visa、migration、legal、tax 的事項，仍應由合資格專業人士處理。",
          "因此，OTC 對外會把它表述為 education-agent training completion record 和 destination-readiness milestone；正式合作與代理狀態，仍只在另有書面證據時公開表述。"
        ]
      }
    ],
    sidebarCards: [
      ["Training record", "Study NT completion", "證明 OTC 已完成 Northern Territory 教育中介培訓。", "completed"],
      ["Australia route", "State-level readiness", "把澳洲服務從大城市比較推進到州/領地級資料架構。", "route"],
      ["Evidence value", "Staff + market + public capability", "可支持培訓、業務發展與公開能力展示三類記錄。", "evidence"],
      ["Boundary", "Not formal appointment", "不等於代理授權、移民建議或受監管專業資格。", "compliance"]
    ],
    resources: [
      ["OTC Study NT training certificate", "/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf"],
      ["Study NT", "studynt.nt.gov.au"],
      ["OTC Australia route", "/zh/australia-office-presence/"],
      ["Australia training map", "/zh/insights/australia-agent-training-map-2026/"]
    ]
  },
  {
    slug: "australia-agent-training-map-2026",
    title: "Australia Education Agent Training Map 2026: From NSW School Briefings to a National Route",
    date: "2026-05-23",
    category: "Australia Pathways",
    column: "study",
    kicker: "Australia agent training map",
    author: "OTC Study Hub Editorial",
    summary: "OTC is extending the Study NSW school-briefing model into a national Australia education agent training map covering Queensland, Victoria, Western Australia, South Australia, Northern Territory, Tasmania and ACT.",
    titleZh: "澳洲教育中介培訓版圖：從新州中小學線上培訓會到全澳路線",
    summaryZh: "OTC 以 Study NSW 新州中小學在線培訓會為起點，向澳洲其他州與領地的官方教育推廣機構發出參與培訓、加入 briefing / webinar / mailing list 的請求，逐步建立全澳 K-12、VET/TAFE、ELICOS、pathway 與高等教育更新版圖。",
    body: [
      {
        heading: "1) Why OTC Is Mapping Agent Training Routes",
        paragraphs: [
          "Study NSW school briefings provide a useful model: official or semi-official sessions introduce schools, admissions conditions, fee notes, enquiry contacts and counselling points for education agents.",
          "OTC is extending that model across Australia so that Chinese-speaking families can receive more accurate, state-specific education-route information before any school, VET/TAFE, ELICOS, pathway or university application is prepared.",
          "This page records public-facing route development only. It does not claim formal appointment by any state agency or provider unless a written agreement or official confirmation is in place."
        ]
      },
      {
        heading: "2) Seven State and Territory Routes Contacted",
        paragraphs: [
          "Queensland: OTC has contacted Study Queensland to request access to education agent workshops, destination briefings, school-sector webinars, VET/TAFE updates and provider opportunities.",
          "Victoria: OTC has contacted Study Melbourne regarding sector briefings, agent briefings and international education updates covering Victorian schools, VET/TAFE, ELICOS and higher education routes.",
          "Western Australia: OTC has contacted StudyPerth following the Agent Education Week model, seeking future agent education activities, provider briefings and destination updates.",
          "South Australia: OTC has contacted StudyAdelaide to request inclusion in agent events, school-focused webinars, provider updates and mailing lists.",
          "Northern Territory: OTC's Study NT Agent Training Course account has been activated, and OTC has completed the training with a certificate of completion. This strengthens OTC's public training record for Northern Territory schools, VET/TAFE, ELICOS and pathway-route awareness.",
          "Tasmania: OTC has contacted Government Education and Training International for Tasmanian Government Schools agent updates, briefing routes and registration guidance.",
          "ACT / Canberra: OTC has contacted the ACT International Education Unit and Study Canberra route for government school agent briefing and registration information."
        ]
      },
      {
        heading: "3) What This Means for Students and Families",
        paragraphs: [
          "The practical value is not a badge. The value is a maintained briefing discipline: knowing where official updates come from, which state or provider is responsible for the rules, and when OTC should verify details before advising a family.",
          "For Chinese-speaking families, this creates a clearer comparison framework across Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart and Canberra routes.",
          "For OTC, it creates a public information layer, an internal contact log and a future training calendar that can support K-12 school screening, vocational pathway planning and university application preparation."
        ]
      },
      {
        heading: "4) Public Boundary",
        paragraphs: [
          "Participation in a webinar, mailing list or public briefing does not automatically create an agency agreement or authorise OTC to represent a provider.",
          "Formal cooperation, agent appointment, referral terms, commission arrangements, application authority and use of logos must be confirmed through the relevant institution or official body.",
          "OTC will keep public pages as education-route information until a formal status can be evidenced."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "一、為什麼要建立澳洲教育中介培訓版圖？",
        paragraphs: [
          "Study NSW 的中小學在線培訓會提供了一個很好的樣板：由官方或準官方渠道向教育中介介紹學校、招生條件、費用提示、諮詢窗口與家庭溝通要點。",
          "OTC 現在把這個模式向全澳洲拓展。目的不是把所有州份一次性做成「合作名單」，而是先建立可查、可更新、可跟進的培訓與 briefing 路線，讓中文家庭在申請前看到更準確的州別資訊。",
          "本頁記錄的是公開發展路線：參加培訓、加入更新清單、建立州別資料入口。除非有書面協議或官方確認，OTC 不會把培訓參與表述為正式代理授權。"
        ]
      },
      {
        heading: "二、已發出聯絡的七條州與領地路線",
        paragraphs: [
          "Queensland：已向 Study Queensland 發出請求，希望加入教育中介 workshop、destination briefing、中小學 sector webinar、VET / TAFE 更新與 provider opportunity 通知。",
          "Victoria：已向 Study Melbourne 發出請求，關注 2026 sector briefings、agent briefing 及維州學校、VET / TAFE、ELICOS、高等教育與 pathway provider 更新。",
          "Western Australia：已向 StudyPerth 發出請求，參考 Agent Education Week 模式，申請加入後續 agent education activity、provider briefing 與 Perth destination update。",
          "South Australia：已向 StudyAdelaide 發出請求，希望接收 South Australia 的 agent event、school-focused webinar、provider update 及 mailing list 通知。",
          "Northern Territory：OTC 的 Study NT Agent Training Course 帳戶已 activated，並已完成 training，取得 completion certificate。此項記錄將作為 OTC 建立 Northern Territory 學校、VET / TAFE、ELICOS、高等教育與 pathway 路線理解能力的公開培訓證明之一。",
          "Tasmania：已向 Government Education and Training International 發出請求，了解 Tasmanian Government Schools 的 agent update、briefing route、registration guidance 及政府學校資料入口。",
          "ACT / Canberra：已向 ACT International Education Unit 及 Study Canberra 路線發出請求，了解 Canberra Government Schools 的中介 briefings、webinar、mailing list 及註冊路徑。"
        ]
      },
      {
        heading: "三、對學生和家庭有什麼用？",
        paragraphs: [
          "真正有價值的不是某個 badge，而是持續更新的 briefing discipline：知道官方資訊從哪裡來、哪個州或 provider 負責規則、什麼情況下需要向官方窗口再次確認。",
          "對中文家庭而言，這使澳洲路線不再只有「悉尼或墨爾本」兩個模糊選項，而可以把 Sydney、Melbourne、Brisbane、Perth、Adelaide、Darwin、Hobart、Canberra 放在同一張教育地圖上比較。",
          "對 OTC 而言，這形成三層用途：公開資訊頁面、內部聯絡紀錄、未來培訓日曆。這些都可服務於 K-12 學校初篩、VET / TAFE 路線規劃、pathway 銜接與大學申請準備。"
        ]
      },
      {
        heading: "四、公開表述邊界",
        paragraphs: [
          "參加 webinar、加入 mailing list 或收到 public briefing，不等於取得正式代理協議，也不等於可以代表某所院校或政府項目招生。",
          "正式合作、agent appointment、referral terms、commission arrangement、application authority 及 logo 使用，都必須由相關院校或官方機構以書面方式確認。",
          "在正式確認前，OTC 只將相關頁面作為教育路線資訊、家庭初步諮詢與文件準備參考，不把培訓參與誇大成授權合作。"
        ]
      }
    ],
    sidebarCards: [
      ["NSW", "Study NSW briefing model", "中小學在線培訓會與 school profile 審核頁已形成可複用模式。", "origin"],
      ["QLD / VIC / WA", "Major destination routes", "重點跟進 Queensland、Victoria、Western Australia 的 agent / sector briefing。", "priority"],
      ["NT activated", "Study NT certificate", "Study NT training account 已 activated；OTC 已完成課程並公開存檔 completion certificate。", "certificate"],
      ["Public boundary", "Compliance first", "培訓參與不等於代理授權，正式合作需書面確認。", "boundary"]
    ],
    resources: [
      ["Study Queensland", "studyqueensland.qld.gov.au"],
      ["Study Melbourne", "studymelbourne.vic.gov.au"],
      ["StudyPerth", "studyperth.com.au"],
      ["StudyAdelaide", "studyadelaide.com"],
      ["Study NT", "studynt.nt.gov.au"],
      ["OTC Study NT training certificate", "/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf"],
      ["Tasmanian Government Education International", "study.tas.gov.au"],
      ["ACT International Education Unit", "act.gov.au"]
    ]
  },
  {
    slug: "ucas-offers-conditions-firm-insurance-checklist",
    title: "UCAS Offers Explained: Conditional vs Unconditional, Firm vs Insurance (A Practical Checklist)",
    date: "2026-05-23",
    category: "UK Applications",
    column: "study",
    kicker: "UCAS offer types & conditions",
    author: "OTC Study Hub Editorial",
    summary: "A compliance-safe, student-friendly guide to reading UCAS offer wording, understanding typical conditions, choosing Firm/Insurance, and keeping evidence organised—without assuming outcomes.",
    titleZh: "UCAS Offer 怎麼看：Conditional／Unconditional 與 Firm／Insurance（實用核對清單）",
    summaryZh: "本文用清單方式解釋 UCAS offer 的常見類型與條件：如何讀懂 conditional/unconditional、常見條件有哪些、Firm/Insurance 怎麼選，以及如何整理證明文件與溝通紀錄（不作任何結果保證）。",
    body: [
      {
        heading: "1) Start With the Wording: What Exactly Is the Offer?",
        paragraphs: [
          "On UCAS and university communications, focus on the exact offer type and the stated conditions (if any). Avoid assumptions based on what friends received—conditions can differ even within the same course title.",
          "A conditional offer normally means you must meet specific requirements (for example, final grades, English language scores, portfolio review, or document checks) by a deadline set by the institution.",
          "An unconditional offer usually indicates no academic conditions remain, but it can still have administrative requirements (for example, identity checks, original documents, or a deposit/payment deadline). Always read the full message."
        ]
      },
      {
        heading: "2) Typical Conditions (and What to Do if You’re Unsure)",
        paragraphs: [
          "Academic conditions: final results, specific subject grades, or overall points. Keep screenshots/PDFs of official result releases and ask your school for a formal transcript if needed.",
          "English language conditions: IELTS/TOEFL/PTE or an approved alternative. Check the institution’s accepted tests and minimum sub-scores on the official course page; requirements can vary by intake and applicant profile.",
          "Portfolio/interview conditions: submit exactly what is requested and label files clearly. If a condition is ambiguous (for example, “portfolio acceptable” without detail), ask for clarification in writing and keep the reply."
        ]
      },
      {
        heading: "3) Firm vs Insurance: A Decision Framework (No Guarantees)",
        paragraphs: [
          "Your Firm choice is the one you intend to attend if you meet its conditions. Your Insurance choice is a backup if your Firm conditions are not met.",
          "A practical approach is to choose an Insurance option with conditions you are more confident you can meet, without treating it as “easier” in a casual sense—check the actual numbers and deadlines.",
          "Consider logistics: start dates, location, accommodation timing, deposit policies, and whether course structure matches your strengths. If something changes, contact the university/UCAS early rather than waiting."
        ]
      },
      {
        heading: "4) Evidence Pack: Keep One Folder Ready",
        paragraphs: [
          "Create a single folder (cloud + local backup) that includes your offer letters/screenshots, condition list, deadlines, test booking confirmations, results PDFs, passport/ID copies (as appropriate), and email logs.",
          "If you need to request a change (deferral, module query, updated English score), keep your message factual and attach only the necessary evidence. Avoid over-promising—use wording like “I plan to” or “I am scheduled to”.",
          "This article is general educational information and not admissions, legal, financial, or immigration advice. Always follow the official UCAS/university instructions for your specific course."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）先看「字面」：這份 Offer 到底是什麼？",
        paragraphs: [
          "在 UCAS 與院校電郵/系統訊息中，最重要的是 offer 類型與列出的條件（如有）。不要因為同學拿到的條件不同就自行推論——即使課程名稱相同，條件也可能不同。",
          "Conditional offer 通常表示你需要在指定期限前達到特定要求，例如最終成績、英語成績、作品集審核、或文件核對等。",
          "Unconditional offer 一般代表學術條件已解除，但仍可能存在行政性要求，例如身分/文件核實、繳付訂金/學費、或提交正本文件等。務必把訊息全文看完。"
        ]
      },
      {
        heading: "2）常見條件有哪些？不確定時怎麼做？",
        paragraphs: [
          "學術條件：最終成績、指定科目分數、或總分/點數。建議保留官方成績發布截圖/下載 PDF，必要時向學校申請正式 transcript。",
          "英語條件：IELTS/TOEFL/PTE 或院校認可的替代方案。請以院校官方課程頁為準，核對接受的考試類型、總分與單項要求；不同入學季與不同申請人背景可能不同。",
          "作品集/面試條件：嚴格按要求提交、檔名清晰、版本一致。若條件描述含糊（例如只寫「portfolio acceptable」），建議用書面方式向院校確認細節，並保存回覆。"
        ]
      },
      {
        heading: "3）Firm 與 Insurance 怎麼選：一個務實的框架（不作保證）",
        paragraphs: [
          "Firm 是你在達到條件後想就讀的第一志願；Insurance 是當 Firm 條件未達成時的備用選擇。",
          "務實做法：Insurance 的條件應在你「較有把握」可達到的範圍內，但不要用「隨便比較容易」的心態判斷——請回到實際數字、科目要求與截止日期。",
          "同時考慮現實因素：開學時間、地點、住宿安排節奏、訂金政策，以及課程結構是否符合你的強項。若情況有變，盡量提早與院校/UCAS 溝通，不要拖到最後一刻。"
        ]
      },
      {
        heading: "4）證據整理包：一個資料夾就夠用",
        paragraphs: [
          "建立單一資料夾（雲端＋本機備份）：包含 offer 訊息截圖/信件、條件清單與期限、考試報名證明、成績 PDF、護照/身分文件（依需要與合規範圍）、以及往來電郵紀錄。",
          "若需提出申請（例如 defer、模組查詢、更新英語成績），內容保持事實、附件只放必要證據。避免過度承諾，可用「我計劃／我已安排」等保守表述。",
          "本文為一般教育資訊，不構成入學、法律、財務或移民建議。請以 UCAS 與院校官方要求為準，並按你的課程與個人情況操作。"
        ]
      }
    ]
  },
  {
    slug: "australia-trust-guide",
    title: "How to Find a Lawyer and Set Up a Family Trust in Australia",
    date: "2026-05-22",
    category: "Wealth Planning",
    column: "wealth",
    kicker: "澳洲信託完全指南",
    author: "留學導報法律財務組",
    summary: "A practical guide for Australia-based families comparing trust types, lawyer selection, setup costs and key compliance risks before speaking with a solicitor and accountant.",
    titleZh: "在澳洲如何找律師設立家庭信託",
    summaryZh: "信託是澳洲華人家庭常見的資產保護與稅務規劃工具。本文整理四大信託類型、如何物色律師、費用估算與設立流程，協助讀者在首次諮詢前做到心中有數。",
    body: [
      {
        heading: "1) What a Trust Is and Why It Is Common in Australia",
        paragraphs: [
          "A trust is a legal arrangement where a trustee holds and manages assets for the benefit of beneficiaries. In Australia, family trusts are widely used for asset protection, succession planning and flexible income distribution.",
          "A trust is not a tax avoidance tool. It is a legal structure that must be set up and administered properly with professional advice from a solicitor and accountant."
        ]
      },
      {
        heading: "2) What Type of Lawyer You Need",
        paragraphs: [
          "Trust setup usually sits within commercial law, trusts, estate planning and business structuring. When checking a law firm's website, look for services such as Estate Planning, Asset Protection, Business Structures or Trusts and Succession.",
          "A solicitor normally prepares the trust deed. An accountant usually assists with tax registration, ABN/TFN matters and ongoing annual compliance."
        ]
      },
      {
        heading: "3) What to Prepare Before the First Consultation",
        paragraphs: [
          "Before meeting a solicitor, prepare the asset types the trust may hold, the intended beneficiaries, the main purpose of the trust, residency status and any overseas assets that may affect the structure.",
          "If the information is complete, a straightforward trust setup may often move from consultation to signed deed, tax registration and bank-account opening within a few weeks."
        ]
      },
      {
        heading: "4) Key Compliance Risks",
        paragraphs: [
          "Trustees should pay careful attention to annual income distribution resolutions before the end of the financial year, state-based property surcharges and the choice between individual and corporate trustees.",
          "This article is general information only and does not constitute legal, tax, migration or financial advice."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "什麼是信託？為什麼在澳洲如此普遍？",
        paragraphs: [
          "在澳洲，信託（Trust）是一種法律安排：受託人（Trustee）為受益人（Beneficiary）的利益持有並管理資產。與公司架構相比，信託結合了靈活的收入分配、較強的資產保護，以及可觀的稅務效率，是澳洲中產及高淨值華人家庭常用的財富工具之一。",
          "信託不是逃稅工具，而是合法的財富保護與傳承結構。它需要由律師、會計師和稅務顧問根據家庭資產、居住身份與長期目標共同規劃。"
        ]
      },
      {
        heading: "你需要哪一類律師？",
        paragraphs: [
          "設立信託屬於商業法 / 信託與遺產規劃（Commercial Law / Trusts & Estate Planning）範疇，並非普通民事或移民律師的專業。在搜尋律師時，官網上應明確列出 Estate Planning、Asset Protection、Business Structures 或 Trusts & Succession 等服務項目。",
          "在澳洲，律師負責起草信託契約（Trust Deed），會計師負責後續稅務登記與年度申報。實際操作中，兩者需要緊密配合；如你已有澳洲會計師，可請他推薦合作的信託律師。"
        ]
      },
      {
        heading: "首次諮詢：你應準備什麼？",
        paragraphs: [
          "初次與律師會面前，應清楚說明信託預計持有哪些資產，例如物業、股票、商業權益等；也要列出受益人範圍，例如配偶、子女、相關公司或其他家庭成員。",
          "同時要說明設立信託的主要目的、你的居住身份，以及是否有海外資產。若資料齊備，從首次諮詢至信託正式生效，通常可在數週內完成，包括起草信託契約、簽署、ATO 登記與開設信託銀行帳戶。"
        ]
      },
      {
        heading: "三大注意事項",
        paragraphs: [
          "第一，每年 6 月 30 日前通常需要作出收入分配決議（Resolution）。如未妥善處理，信託收入可能面臨不利稅務結果，這是常見合規風險。",
          "第二，若信託持有物業，要留意各州對外籍人士、海外信託或特定土地持有結構的附加印花稅與土地稅規則。",
          "第三，公司受託人（Corporate Trustee）通常比個人受託人更適合長期資產保護與責任隔離，但設立與維護成本較高，需與律師和會計師確認。"
        ]
      }
    ],
    sidebarCards: [
      ["家庭信託", "Family / Discretionary Trust", "受託人靈活分配收入予家庭成員，適合資產保護與家族稅務規劃。", "常見"],
      ["單位信託", "Unit Trust", "各受益人持有固定單位，適合多人共同持有投資物業或商業資產。", "聯合投資"],
      ["遺囑信託", "Testamentary Trust", "透過遺囑設立，去世後生效，常用於遺產與未成年子女保護。", "遺產規劃"],
      ["自管退休金", "SMSF", "信託形式的退休金結構，監管要求嚴格，需要專門顧問協助。", "專業門檻"]
    ],
    costBars: [
      ["家庭信託律師費", "A$1,500-3,500", 55],
      ["公司受託人設立", "+A$1,000-1,500", 35],
      ["單位信託律師費", "A$2,500-5,000", 75],
      ["ATO 登記 TFN/ABN", "免費", 4]
    ],
    resources: [
      ["NSW Law Society", "lawsociety.com.au"],
      ["Law Institute of Victoria", "liv.asn.au"],
      ["Queensland Law Society", "qls.com.au"],
      ["Australian Taxation Office", "ato.gov.au/trusts"]
    ]
  },
  {
    slug: "reference-letter-briefing-pack-uk-aus",
    title: "Reference Letters for UK & Australia Applications: A Simple Referee-Briefing Pack",
    date: "2026-05-22",
    category: "University Applications",
    author: "Overseas Tutorial Centre",
    summary: "Reference letters (recommendations) are strongest when they are specific, consistent with your application, and written by someone who genuinely knows your academic work. This short guide shows what students can prepare to help referees write an accurate, professional reference—without exaggeration or outcome promises.",
    titleZh: "英國與澳洲申請推薦信：學生可準備的 Referee Briefing Pack（簡單可用）",
    summaryZh: "推薦信最有力的地方在於「具體、可核對、與申請資料一致」，而不是華麗形容詞。本文提供一份學生可先準備好的 Referee Briefing Pack，協助推薦人寫出準確、專業、不誇大的推薦內容（不包含任何結果保證）。",
    body: [
      {
        heading: "1) What a Reference Letter Is (and Why Specificity Matters)",
        paragraphs: [
          "A reference letter is not a second personal statement. It is an external perspective on your academic readiness, learning habits, and suitability for a course, written by a teacher, tutor, supervisor, or other appropriate referee depending on the programme requirements.",
          "Admissions teams tend to value concrete examples: what you did, how you performed, and what the referee observed over time. Overly generic praise (“hard-working, passionate”) is less helpful unless it is backed by evidence and context."
        ]
      },
      {
        heading: "2) The Referee-Briefing Pack (What You Can Prepare)",
        paragraphs: [
          "A one-page summary: your intended course(s), target start date/intake, and a 3–5 bullet list of the strengths you hope the referee can comment on (for example, research writing, maths problem-solving, lab discipline, group leadership—only if true).",
          "Evidence attachments: 2–4 pieces the referee can refer to, such as a marked essay, project report, lab write-up, portfolio link, competition submission, or a graded presentation outline. Choose items that match your intended subject area.",
          "A factual timeline: key dates (when they taught you, duration, class level), and verifiable outcomes (final grades, predicted grades, rank if officially provided). If the referee does not have official access to a metric, do not ask them to speculate."
        ]
      },
      {
        heading: "3) What Strong References Usually Include (Safe, Verifiable Language)",
        paragraphs: [
          "Academic context: level of study and comparators (for example, “top 10% of the cohort” only if the school can substantiate it). Otherwise, use descriptive but bounded statements such as “consistently among the strongest in my class”.",
          "Observed behaviours: “asks precise questions”, “revises with feedback”, “documents methods clearly”, “can explain trade-offs in a business case”. These are more credible than claims about future outcomes.",
          "Course fit: a short, honest link between your evidence and the course demands. Avoid guarantees like “will definitely succeed” or “will secure admission”. A compliant alternative is “is well-prepared for” or “is likely to cope well with”."
        ]
      },
      {
        heading: "4) Timing, Etiquette, and Common Pitfalls",
        paragraphs: [
          "Ask early. A practical lead time is 2–4 weeks before a deadline, longer during exam season. Include the submission method (portal/email), the deadline, and any required format from the institution.",
          "Do not over-direct the content. It is appropriate to share your briefing pack, but the referee should write in their own voice. Avoid giving a “script” or asking for inflated claims.",
          "After submission, thank the referee and keep a record of where the reference was used. If you apply to multiple courses, confirm whether the same reference can be reused or whether updates are needed."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）推薦信是什麼（為何「具體」很重要）",
        paragraphs: [
          "推薦信不是第二份 personal statement。它是由老師、導師、主管或其他合適的推薦人（視課程要求而定）從第三方角度，對你的學術準備度、學習習慣與課程匹配度做出觀察性描述。",
          "招生審閱通常更看重具體例子：你做了什麼、表現如何、推薦人長期觀察到哪些學習特徵。只有形容詞的讚美（例如「很努力、很熱愛」）若缺乏證據與背景，說服力會較弱。"
        ]
      },
      {
        heading: "2）Referee Briefing Pack（學生可先準備什麼）",
        paragraphs: [
          "一頁摘要：你想申請的課程/方向、預計入學時間，以及 3–5 個你希望推薦人能評論的優勢要點（例如研究寫作、數學解題、實驗室紀律、團隊協作/領導——前提是確實存在且可被觀察到）。",
          "證據附件：提供 2–4 份推薦人可引用的作品或成果，例如已批改的 essay、project report、實驗報告、portfolio 連結、比賽作品、或有評分的 presentation 大綱。優先選與申請學科直接相關的材料。",
          "事實時間線：重要日期（何時開始教你、教了多久、課程/年級），以及可核對的成績信息（final grade、predicted grade、如學校正式提供的排名）。若推薦人沒有官方渠道取得某項指標，不要要求他們猜測或代填。"
        ]
      },
      {
        heading: "3）強而合規的推薦信通常包含什麼（可核對的安全表述）",
        paragraphs: [
          "學術背景：你的學習階段與比較基準（例如「全級前 10%」只有在學校能證明時才使用；否則可用較保守但清晰的說法，如「在我任教的班級中表現一直很突出」）。",
          "可觀察的行為：例如「提問精準」「能根據回饋修訂」「方法記錄清楚」「能在商業案例中說明取捨」。這些比「未來一定成功」之類的預測更可信。",
          "課程匹配度：用證據連到課程需求，語氣保持誠實與保守。避免任何保證性措辭（例如「一定能錄取」「必定拿到某結果」）。較合規的替代語可用「準備充分」「有望適應」或「較可能勝任」。"
        ]
      },
      {
        heading: "4）時間安排、禮儀與常見踩雷點",
        paragraphs: [
          "提早邀請。一般建議至少提前 2–4 週（考試季更要提早）。同時提供提交方式（系統/電郵）、截止日期，以及院校對格式/內容的任何硬性要求。",
          "不要過度指導內容。你可以提供 briefing pack，但推薦信應由推薦人用自己的語氣撰寫；避免給「逐句腳本」，更不要要求不實或誇大的描述。",
          "提交後要致謝並做好記錄：此封推薦信用於哪些申請、是否可重複使用、若申請多個課程是否需要更新。這能減少反覆打擾推薦人的壓力，也能降低資訊不一致的風險。"
        ]
      }
    ]
  },
  {
    slug: "uk-personal-statement-evidence-first-checklist",
    title: "UK Personal Statement: An Evidence-First Checklist (Clear, Honest, and Specific)",
    date: "2026-05-21",
    category: "UK Applications",
    author: "Overseas Tutorial Centre",
    summary: "A practical way to plan and draft a UK personal statement without over-claiming. Use this evidence-first checklist to select experiences, describe impact, and keep your writing compliant, authentic, and easy for admissions readers to follow.",
    titleZh: "英國 Personal Statement：以證據為先的寫作清單（清晰、誠實、具體）",
    summaryZh: "用「證據優先」的方法規劃與撰寫英國 Personal Statement，避免過度承諾或誇大。本文提供可直接套用的清單：如何選材、如何寫出影響力，以及如何保持合規、真實、易讀。",
    body: [
      {
        heading: "1) What the Personal Statement Is (and Is Not)",
        paragraphs: [
          "A personal statement is your structured explanation of academic fit: why this subject, what you have done to prepare, and how you think and learn. It works best when it reads like evidence-backed reasoning, not marketing slogans.",
          "It is not a guarantee tool. Avoid writing as if admission is certain, and avoid any claims you cannot support (for example, “I will definitely achieve…”, “I am the best candidate…”, or inflated job titles and responsibilities)."
        ]
      },
      {
        heading: "2) Build an “Evidence Bank” Before You Write",
        paragraphs: [
          "List 6–10 evidence items you can describe clearly: academic topics you enjoyed, a project or extended essay, an internship task, a research note, a reading list with reflections, a competition entry, a portfolio piece, or a group project role.",
          "For each item, write one sentence for: (a) what you did, (b) what you learned, (c) how it connects to your intended subject. Admissions readers typically respond better to specific learning moments than to big adjectives."
        ]
      },
      {
        heading: "3) A Simple Structure That Stays Specific",
        paragraphs: [
          "Opening: one paragraph on your subject motivation grounded in a real experience (a module, a problem you solved, a book/paper you engaged with).",
          "Middle: 2–3 evidence paragraphs using the pattern “context → action → result → reflection”. Use numbers only when true and verifiable (for example, “analysed 30 survey responses” rather than “huge dataset”).",
          "Closing: one paragraph on how you will approach the course academically (skills, habits, and next steps), not a list of generic traits."
        ]
      },
      {
        heading: "4) Common Red Flags (and How to Avoid Them)",
        paragraphs: [
          "Plagiarism risk: do not reuse templates line-for-line, and never copy text from sample statements. Your statement should be recognisably yours.",
          "Over-claiming: avoid unsupported leadership/impact claims. If you say you “led” something, briefly describe what decisions you made and what changed as a result.",
          "AI/tool use: if you use tools for brainstorming or language support, keep authorship and facts under your control. Always proofread for accuracy, tone consistency, and unintended exaggeration."
        ]
      },
      {
        heading: "5) Final Checks Before Submission",
        paragraphs: [
          "Check factual accuracy: modules, dates, roles, achievements, and titles. Consistency matters across your CV, reference, and any interview answers.",
          "Check readability: short sentences, clear paragraph breaks, and no unexplained acronyms. Ask a teacher or mentor to review for clarity, not to rewrite your voice."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）Personal Statement 是什麼（也不是什麼）",
        paragraphs: [
          "Personal Statement 的核心是「學術匹配度」：你為什麼選這個學科、你做過哪些準備、你如何思考與學習。最有效的寫法像「有證據的推理」，而不是口號式自我包裝。",
          "它不是保證錄取的工具。避免寫成必然結果，也避免任何無法佐證的說法（例如「我一定會…」「我是最適合的…」或誇大的職稱與工作內容）。"
        ]
      },
      {
        heading: "2）先建一個「證據庫」，再開始寫",
        paragraphs: [
          "先列出 6–10 個你能清楚描述的證據項：喜歡的學術主題、課題/論文/extended essay、實習中完成的具體任務、研究筆記、閱讀清單與反思、比賽作品、portfolio 成品、或小組項目中的角色與貢獻。",
          "每一項用一句話寫清： (a) 你做了什麼、(b) 你學到了什麼、(c) 這件事如何連到你要申請的學科。比起「很努力、很熱愛」這類形容詞，招生閱讀者通常更重視具體的學習過程與反思。"
        ]
      },
      {
        heading: "3）一個簡單但不空泛的結構",
        paragraphs: [
          "開頭：用一段話交代你對學科的動機，但要落在真實經驗上（例如某個課題、你解決過的一個問題、你讀過的一本書/一篇文章與你的理解）。",
          "中段：用 2–3 段證據段落，套用「背景 → 行動 → 結果 → 反思」的順序。只有在真實且可核對時才用數字（例如「分析了 30 份問卷」比「處理了大量數據」更清楚）。",
          "結尾：說明你將如何以學術方式投入課程（能力、習慣、下一步），而不是堆砌泛泛的優點清單。"
        ]
      },
      {
        heading: "4）常見風險點（以及如何避開）",
        paragraphs: [
          "抄襲風險：不要逐句套用模板，更不要複製 sample statement 的內容。你的文字應該一看就知道是你本人寫的。",
          "過度承諾/誇大：避免沒有證據的影響力與領導力說法。如果你寫「我帶領了…」，就要補一句你做了哪些決策、最終帶來了什麼改變。",
          "AI/工具使用：即使你用工具做 brainstorming 或語言潤色，作者身份與事實仍要由你掌控。提交前務必逐句校對，避免事實錯誤、語氣不一致或不小心誇大。"
        ]
      },
      {
        heading: "5）提交前最後核對",
        paragraphs: [
          "核對事實：課程/模塊名稱、日期、職責、成果與頭銜等是否準確；並確保與 CV、推薦信、以及日後面試回答一致。",
          "核對可讀性：句子不要太長、段落分明、縮寫要解釋。可以請老師或導師幫你看「是否清晰」，但不建議讓他人改寫成不屬於你聲音的版本。"
        ]
      }
    ]
  },
  {
    slug: "australia-new-zealand-provider-pathway-updates-2026",
    title: "Australia and New Zealand Pathway Updates: Applying Through OTC",
    date: "2026-05-20",
    category: "Australia Pathways",
    author: "Overseas Tutorial Centre",
    summary: "OTC supports selected Australia and New Zealand university and pathway applications through formal cooperation, sub-agent channels and provider-information routes where applicable. This article explains how the process works and how students should read scholarship, pathway and COE information safely.",
    titleZh: "澳洲與新西蘭 Pathway 更新：通過 OTC 做申請應如何理解",
    summaryZh: "OTC 可在適用情況下通過正式合作、sub-agent pathway 或 provider information channel 協助學生處理澳新院校與銜接課程申請。本文說明申請流程、獎學金與 pathway 信息如何安全理解。",
    body: [
      {
        heading: "1) What “Apply Through OTC” Means",
        paragraphs: [
          "Applying through OTC means that OTC can help a student screen suitable routes, organise documents, communicate with relevant admission or partner channels, and prepare an application record. The exact submission route depends on the institution, course, partner arrangement and current provider rules.",
          "Some routes may be handled through formal cooperation records, some through sub-agent or pathway-provider channels, and some through information / workshop channels where OTC supports the student with research and document preparation. Admission decisions, scholarship decisions and COE issuance remain with the relevant institution or provider."
        ]
      },
      {
        heading: "2) Current Australia / New Zealand Pathway Information in Scope",
        paragraphs: [
          "OTC is monitoring Australia and New Zealand pathway updates including Kaplan Australia / New Zealand, Murdoch College and Murdoch University, KIC Adelaide College and the University of Adelaide, University of Newcastle progression options, and UTS / UTS College scholarship information.",
          "OTC also maintains Australia-facing provider and pathway records such as University of Sydney / Taylors College Sydney / Navitas workshop materials, LCI Australia / Asia provider updates, and selected Australia student case records involving universities such as UNSW Sydney and the University of Queensland."
        ]
      },
      {
        heading: "3) Latest Provider Briefing Notes",
        paragraphs: [
          "Central Queensland University (CQU): the Master of Construction Management (CL82) has been reported as professionally accredited by the Australian Institute of Building (AIB), giving applicants a clearer industry-recognition point when assessing construction-management study routes.",
          "Charles Sturt University (CSU): Bachelor of Nursing for Semester 1, 2026 has been reported as full. Limited places were noted in diagnostic radiography, occupational therapy, oral health, paramedicine, pharmacy and physiotherapy, with Engineering (Civil) (Honours), Master of Professional Information Technology and Master of Agricultural Science reported as open at the time of the briefing.",
          "Curtin Singapore: 2026 scholarship information was reported, including Academic Scholarship and Merit Scholarship routes for eligible diploma, undergraduate, graduate-certificate, postgraduate and packaged English-course applicants.",
          "La Trobe College Australia: the Diploma of Nursing pathway English requirement for the packaged bachelor route was reported as updated to IELTS 6.5 overall with no band below 6.0, with up to 10 weeks of ELICOS potentially relevant for students still below the threshold.",
          "Charles Darwin University (CDU): Northern Territory skilled nomination information was reported as open for the 2025-26 programme year. This is included only as study-destination context; visa nomination and migration eligibility must be checked with official government sources or qualified migration professionals.",
          "RMIT University: applicants and agents were reminded not to use the StudyLink External Offer ID field for agent notes, and Bachelor of Accounting Professional Practice was reported as open to international students.",
          "Additional Asia-Pacific updates recorded by OTC include Curtin Singapore scholarships, THEi Hong Kong application-date changes for MSc Business Administration (Digital Transformation), and UP Education / HANZ New Zealand Diploma in Enrolled Nursing international-entry updates."
        ]
      },
      {
        heading: "4) How Students Can Use These Updates",
        paragraphs: [
          "For undergraduate and advanced-entry applicants, OTC can compare direct entry, Year 2 / advanced-entry review, foundation, diploma-style pathway and English-package options. The aim is to identify a realistic route, not to promise a guaranteed outcome.",
          "For pathway applicants, OTC checks academic background, English readiness, scholarship timing, deposit / acceptance steps, document quality and whether a package route may be appropriate. Students should always read the current official entry requirements and offer conditions before accepting any place."
        ]
      },
      {
        heading: "5) Compliance and Professional Boundaries",
        paragraphs: [
          "OTC does not present this information as a guarantee of admission, scholarship, visa outcome or provider endorsement. References to universities, colleges and pathway providers are used to describe available application and information routes.",
          "Visa, migration, tax, legal and regulated education-provider matters should be checked with appropriately qualified professionals. OTC's role is education consulting, application administration, document organisation and responsible communication support."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）「通過 OTC 申請」是什麼意思",
        paragraphs: [
          "通過 OTC 申請，是指 OTC 可以協助學生篩選合適路線、整理申請文件、與相關招生或合作渠道溝通，並建立可追蹤的申請記錄。具體提交方式取決於院校、課程、合作安排及當前 provider 規則。",
          "部分路線可能基於正式合作記錄，部分可能通過 sub-agent 或 pathway-provider channel 處理，也有部分屬於 provider information / workshop channel，即 OTC 協助學生做研究與文件準備。錄取決定、獎學金決定與 COE 出具仍由相關院校或 provider 作出。"
        ]
      },
      {
        heading: "2）目前納入 OTC 監測的澳新 pathway 信息",
        paragraphs: [
          "OTC 正在跟進澳洲與新西蘭 pathway 更新，包括 Kaplan Australia / New Zealand、Murdoch College 與 Murdoch University、KIC Adelaide College 與 University of Adelaide、University of Newcastle 銜接方向，以及 UTS / UTS College 獎學金信息。",
          "OTC 同時保存澳洲方向的 provider / pathway 記錄，例如 University of Sydney / Taylors College Sydney / Navitas workshop 材料、LCI Australia / Asia provider updates，以及涉及 UNSW Sydney、University of Queensland 等院校的澳洲學生案例文件。"
        ]
      },
      {
        heading: "3）最新 provider briefing notes",
        paragraphs: [
          "中央昆士蘭大學 CQU：Master of Construction Management（CL82）已被記錄為獲 Australian Institute of Building（AIB）職業認證。這對建築管理方向申請人有參考價值，因為它提供了更清晰的行業認可信息。",
          "查爾斯特大學 CSU：Bachelor of Nursing 2026 年 S1 已被通知滿位。當期 briefing 同時提示部分限額課程仍有少量名額，包括 Diagnostic Radiography、Occupational Therapy、Oral Health、Paramedicine、Pharmacy、Physiotherapy；Engineering (Civil) (Honours)、Master of Professional Information Technology、Master of Agricultural Science 被記錄為仍開放。",
          "Curtin Singapore：2026 年獎學金信息已記錄，包括 Academic Scholarship 與 Merit Scholarship，適用於符合條件的 Diploma、本科、GC/碩士打包、語言課打包等路線。",
          "La Trobe College Australia：護理文憑銜接學士打包課程英語要求更新為 IELTS 6.5 overall、各項不低於 6.0；仍未達標者可按要求評估是否可銜接最多 10 週 ELICOS。",
          "Charles Darwin University（CDU）：北領地政府 2025-26 財年技術簽證提名項目開放信息已記錄。此處只作為留學目的地與畢業後規劃背景信息，不構成移民建議；具體簽證與提名資格必須以政府官方要求及合資格 migration professional 意見為準。",
          "RMIT University：StudyLink 系統填寫提醒已記錄，即 External Offer ID 欄位不應作為代理備註欄使用；Bachelor of Accounting Professional Practice 已被記錄為對國際學生開放申請。",
          "OTC 同時記錄了其他亞太 provider updates，包括 Curtin Singapore 獎學金、香港高科院 THEi 工商管理（數碼轉型）碩士申請日期調整，以及 UP Education / HANZ 新西蘭 Enrolled Nursing Diploma 對國際學生開放入學的更新。"
        ]
      },
      {
        heading: "4）學生如何使用這些信息",
        paragraphs: [
          "對本科與 advanced-entry 申請人，OTC 可協助比較 direct entry、Year 2 / advanced-entry review、Foundation、Diploma-style pathway 及 English package 等選項。目標是找到現實可行的路線，而不是承諾必然錄取。",
          "對 pathway 申請人，OTC 會核對學術背景、英語準備、獎學金時間、押金/接受 offer 步驟、文件質量，以及是否適合打包路線。學生在接受任何 offer 前，仍應閱讀當前官方入學要求與 offer 條件。"
        ]
      },
      {
        heading: "5）合規邊界與專業責任",
        paragraphs: [
          "OTC 不把以上信息表述為錄取、獎學金、簽證或院校背書的保證。對大學、學院與 pathway provider 的引用，是為了說明可研究、可申請或可溝通的信息路線。",
          "涉及簽證、移民、稅務、法律或受監管教育 provider 事項，應由相應合資格專業人士核對。OTC 的角色是教育諮詢、申請行政、文件整理與負責任的溝通支持。"
        ]
      }
    ]
  },
  {
    slug: "foundation-vs-international-year-one-vs-direct-entry-uk-aus",
    title: "UK & Australia Pathways: Foundation vs International Year One vs Direct Entry (How to Choose)",
    date: "2026-05-20",
    category: "Pathway Planning",
    author: "Overseas Tutorial Centre",
    summary: "A practical route-comparison for students choosing between Foundation, International Year One/Diploma-style pathways, and direct entry for UK and Australian universities. Use it to check academic fit, English readiness, progression conditions and timeline risk—without assuming any guaranteed outcome.",
    titleZh: "英國與澳洲升學 Pathway：Foundation、International Year One 與直入怎麼選？",
    summaryZh: "給學生與家長的實用路線比較：Foundation、International Year One（或類 Diploma 形式）與大學直入各自適合誰。重點放在學術匹配、英語準備、progression 條件與時間線風險控制，不作任何保證性承諾。",
    body: [
      {
        heading: "1) What These Routes Usually Mean",
        paragraphs: [
          "Foundation programmes are typically a pre-undergraduate bridge year: they build academic skills and subject foundations, then progress to Year 1 at a partner university if progression conditions are met.",
          "International Year One (IYO) or diploma-style pathways are usually designed to lead into Year 2 (or sometimes Year 1) of a degree. They can be time-efficient, but progression requirements and course availability vary.",
          "Direct entry means applying straight to the university degree (undergraduate or postgraduate) based on your existing qualifications. It often has clearer degree ownership, but may be less flexible if prerequisites are missing."
        ]
      },
      {
        heading: "2) Four Checks That Decide Fit (More Than Ranking)",
        paragraphs: [
          "Check level and subject match: your current qualification level, required subjects, and whether you need maths/science/economics prerequisites for the target major.",
          "Check progression rules: some pathways require minimum GPA, attendance, specific modules, or English exit scores. Treat these as conditions—not as automatic advancement.",
          "Check the degree mapping: confirm which degree(s) and intakes the pathway actually progresses to, and whether there are limits on popular majors.",
          "Check location and provider structure: in the UK and Australia, pathways can be run by the university itself or a partner provider. The experience and support model may differ, so read the provider and university pages carefully."
        ]
      },
      {
        heading: "3) Timeline and Document Readiness",
        paragraphs: [
          "Start with a clean document pack: transcript(s), grading scale notes (if available), ID page, CV, and any portfolio evidence for creative or media routes. Keep file naming consistent to avoid version confusion.",
          "Plan English readiness realistically: accepted tests, score bands, test validity, and the time you need for booking and retakes. For some pathways, the English route can be via test scores or internal assessment—verify which applies.",
          "Build a timeline that includes deposits, CAS/CoE issuance windows, accommodation lead time and travel planning. Always confirm dates with the institution’s official admissions communications."
        ]
      },
      {
        heading: "4) Choosing Safely When You Have Gaps",
        paragraphs: [
          "If your profile has gaps (missing prerequisite modules, borderline grades, limited academic writing experience), a pathway may reduce academic transition risk—but it still requires consistent performance and attendance.",
          "If your profile is strong and prerequisites are met, direct entry can be efficient. But do not assume the same decision will apply across all universities—entry standards can differ by course and intake.",
          "When in doubt, compare two routes side-by-side: one direct-entry option and one pathway option, then decide based on evidence, deadlines and how comfortable you are with progression conditions."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）三種路線通常是什麼意思",
        paragraphs: [
          "Foundation（預科）通常是一年制的本科銜接：補齊學術能力與專業基礎，達到 progression 條件後再升讀合作院校的 Year 1。",
          "International Year One（IYO）或類 Diploma 的 pathway，通常設計為升讀大學 Year 2（或部分情況升讀 Year 1）。它可能更省時間，但 progression 要求、可銜接的課程範圍會因院校而異。",
          "直入（Direct entry）則是以你現有學歷直接申請本科/碩士主課程。路線通常更直接、學位歸屬清晰，但若先修課/背景不足，彈性可能較小。"
        ]
      },
      {
        heading: "2）決定適配度的四個核對（不只看排名）",
        paragraphs: [
          "核對學術層級與專業匹配：你目前學歷層級、必修科目，以及目標專業是否需要數學/理科/經濟等先修背景。",
          "核對 progression 規則：有些 pathway 會要求最低 GPA、出勤率、指定模塊成績或英語 exit score。這些是條件，而不是「自動升讀」。",
          "核對銜接的學位與入學批次：確認該 pathway 具體能銜接到哪些學位、哪些 intake，以及熱門專業是否有人數或名額限制。",
          "核對辦學結構：英國與澳洲的 pathway 可能由大學本部或合作機構運營。課程支持模式可能不同，建議同時閱讀大學與 provider 的官方頁面與條款。"
        ]
      },
      {
        heading: "3）時間線與文件準備：先把「可提交性」做乾淨",
        paragraphs: [
          "先整理一套乾淨的文件包：成績單、評分標準（如有）、護照信息頁、CV，以及設計/媒體/藝術等方向的作品或證據。文件命名統一，可避免版本混亂與重複補交。",
          "英語準備要現實：可接受的考試類型、分數區間、有效期，以及你需要的備考/刷分時間。有些 pathway 可能接受校內測評或內測替代，但必須逐一核對是否適用。",
          "把押金、CAS/CoE 出具窗口、住宿安排周期與出行計畫一起納入時間線。任何關鍵日期以院校官方通知為準，避免只依賴非正式信息。"
        ]
      },
      {
        heading: "4）有短板時，如何做更安全的選擇",
        paragraphs: [
          "如果背景存在短板（缺先修課、成績臨界、學術寫作不足），pathway 可能有助於降低過渡風險，但仍需要穩定的表現與出勤，不能把它視為保證。",
          "如果背景較強且先修滿足，直入可能更高效。但不同大學/不同課程/不同 intake 的標準不完全一致，切勿用一個學校的標準推斷全部。",
          "不確定時可用「雙路線」對照：同時準備一個直入方案與一個 pathway 方案，最後以證據、截止日期與你對 progression 條件的承受度作決策。"
        ]
      }
    ]
  },
  {
    slug: "uk-aus-application-documents-checklist",
    title: "UK & Australia University Applications: A Practical Document Checklist",
    date: "2026-05-19",
    category: "University Applications",
    author: "Overseas Tutorial Centre",
    summary: "A compliance-safe checklist for building a clean application document pack for UK and Australian universities: what to prepare, how to label files, and what to double-check before submission.",
    titleZh: "英國與澳洲大學申請：實用文件準備清單（提交前核對）",
    summaryZh: "一份合規、安全、可直接使用的英澳大學申請文件清單：需要準備什麼、如何命名與整理，以及提交前應該核對哪些常見細節。",
    body: [
      {
        heading: "1) Start With a Master Document Pack",
        paragraphs: [
          "Before looking at specific universities, build one “master pack” that is complete, clearly named and easy to reuse. A tidy pack reduces avoidable delays and prevents mismatched versions being uploaded.",
          "Use consistent file naming (e.g., SURNAME_GivenName_DocumentType_Date). Keep original PDFs plus a working folder for edited versions. Save key files as PDF unless the university specifically requests another format."
        ]
      },
      {
        heading: "2) Academic Records: Transcript, Grading Scale and Translations",
        paragraphs: [
          "Most applications need an official transcript (or academic record). If your institution can provide a grading scale or GPA/average mark explanation, include it—this helps evaluators interpret your results.",
          "If any documents are not in English, check each university’s policy on certified translations. Requirements vary by institution and country, so confirm whether certified translation, notarisation, or original-language attachments are needed."
        ]
      },
      {
        heading: "3) References and Evidence for Your Statement",
        paragraphs: [
          "For references, confirm who will provide them, what format is accepted, and the expected lead time. Some universities use online referee portals; others accept letters or forms. Do not assume one process fits all.",
          "For your personal statement (or motivation statement), prepare supporting evidence you can point to: module choices, research projects, internships, competitions, publications, media work, or portfolios. Keep evidence factual and avoid inflated claims."
        ]
      },
      {
        heading: "4) English Readiness and Timing Checks",
        paragraphs: [
          "English requirements differ by course and intake. If you plan to use IELTS/TOEFL/PTE or other accepted tests, check the required scores, acceptable test types, and any validity period rules.",
          "Finally, do a timing audit: application deadline, transcript release date, reference lead time, and test booking windows. A realistic timeline is often the difference between a clean submission and a rushed one."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "1）先建立「主文件包」（Master Pack）",
        paragraphs: [
          "在選定具體院校前，先把一套「主文件包」整理完整：內容齊、命名清楚、可重複使用。文件包越乾淨，越能降低不必要的延誤與上傳版本混亂。",
          "建議統一命名規則（例如：姓_名_文件類型_日期）。保留官方原始 PDF，同時另建一個工作資料夾存放編修版本。若院校沒有特別要求，重要文件優先以 PDF 形式提交。"
        ]
      },
      {
        heading: "2）學術文件：成績單、評分標準與翻譯",
        paragraphs: [
          "大多數申請都需要官方成績單（Transcript / Academic Record）。如果學校可以提供評分標準、GPA 或平均分解釋文件，建議一併備齊，方便招生方理解你的成績含義。",
          "如文件非英文，需查清每所大學對「認證翻譯」的規定。不同院校與不同國家要求可能不同，請逐一確認是否需要 certified translation、公證（notarisation），或是否要同時附上原文與譯文。"
        ]
      },
      {
        heading: "3）推薦信與文書證據：用事實支撐敘事",
        paragraphs: [
          "推薦信方面，先確認推薦人、可接受的形式與準備周期。有些大學使用線上推薦人系統（referee portal），有些接受推薦信或表格；不要假設所有學校流程一致。",
          "個人陳述（Personal Statement / Motivation Statement）建議準備可核對的證據：選修模塊、研究/課題、實習、競賽、發表、媒體作品或作品集等。內容以事實為主，避免誇大或暗示「必然」結果。"
        ]
      },
      {
        heading: "4）英語準備與時間線核對",
        paragraphs: [
          "英語要求會隨課程與入學批次不同而變化。如計畫使用 IELTS/TOEFL/PTE 等考試，請逐一核對要求分數、接受的考試類型，以及成績有效期或截止提交規則。",
          "最後做一次時間線審核：申請截止日期、成績單開具時間、推薦信準備周期、考試預約窗口。現實可行的時間線，往往決定了提交是否乾淨順暢，而不是臨時趕工。"
        ]
      }
    ]
  },
  {
    slug: "uk-australia-marketing-media-master-application-portfolio",
    title: "Building a UK and Australia Marketing / Media Master's Application Portfolio",
    date: "2026-05-18",
    category: "University Applications",
    author: "Overseas Tutorial Centre",
    summary: "How OTC turns one student's academic profile, GPA evidence, internships and English plan into a multi-country application portfolio across UK and Australian universities.",
    titleZh: "如何建立英澳 Marketing / Media 碩士申請組合",
    summaryZh: "OTC 如何把學生的學術成績、GPA 證明、實習經歷和英語規劃，整理成英國與澳洲多國別碩士申請組合。",
    body: [
      {
        heading: "Start With Evidence, Not a University List",
        paragraphs: [
          "A strong Master's application portfolio begins with the student's evidence base: transcript, GPA certificate, ranking certificate, CV, internship records, English score and a realistic intake timeline.",
          "For marketing, media and communication routes, admissions teams usually need to see more than a course preference. The applicant should be able to explain how academic study, internships, public communication work and future career direction connect."
        ]
      },
      {
        heading: "Use A Tiered Portfolio",
        paragraphs: [
          "OTC normally separates courses into dream, target and match groups. For a high-GPA public relations student, a portfolio may include LSE, UCL, King's, Warwick, Manchester and Edinburgh in the UK, alongside Melbourne, Sydney and ANU in Australia.",
          "The purpose of a portfolio is not to apply everywhere blindly. It gives the student a controlled range of ambition, evidence requirements and offer timing."
        ]
      },
      {
        heading: "Australia Needs Institution-Level Screening",
        paragraphs: [
          "Australia has a wide university system, and many universities have multiple communication, media, marketing or business-related postgraduate options. A first review may therefore begin at institution level before narrowing to course level.",
          "This is especially useful when the applicant's profile can support several directions, such as marketing communications, media practice, digital marketing, public communication or management."
        ]
      },
      {
        heading: "What OTC Checks First",
        paragraphs: [
          "The first screening checks academic level, GPA or average mark, English readiness, subject fit, internship evidence, application timing and document gaps.",
          "The outcome is an application route plan: which courses to prioritise, what documents to collect, what personal statement narrative to build and what English target must be met."
        ]
      }
    ],
    bodyZh: [
      {
        heading: "先看證據，而不是先列大學名單",
        paragraphs: [
          "一套有力量的碩士申請組合，應該從學生的證據基礎開始：成績單、GPA 證明、排名證明、CV、實習記錄、英語成績，以及現實可行的入學時間線。",
          "對 Marketing、Media 和 Communication 類課程來說，招生方通常不只看學生想申請哪個課程。申請人需要能說清楚：自己的學術背景、實習經驗、公共傳播工作和未來職業方向之間有什麼連接。"
        ]
      },
      {
        heading: "用分層方式建立申請組合",
        paragraphs: [
          "OTC 通常會把課程分成 dream、target 和 match 幾個層級。對於一名高 GPA 的 Public Relations 學生，英國可以考慮 LSE、UCL、King's、Warwick、Manchester 和 Edinburgh；澳洲則可以同時考慮 Melbourne、Sydney 和 ANU 等方向。",
          "Portfolio 的目的不是盲目海投，而是讓學生在理想高度、證據要求和 offer 時間安排之間保持可控。"
        ]
      },
      {
        heading: "澳洲申請需要先做院校級篩查",
        paragraphs: [
          "澳洲大學體系很寬，許多大學同時有 communication、media、marketing、business 或 public communication 相關的研究生課程。因此初步審核可以先從院校層面開始，再逐步收窄到具體課程。",
          "當學生背景可以支持多個方向時，這種方法尤其有用，例如 Marketing Communications、Media Practice、Digital Marketing、Public Communication 或 Management。"
        ]
      },
      {
        heading: "OTC 會先審核什麼",
        paragraphs: [
          "第一步通常審核學術階段、GPA 或均分、英語準備情況、專業匹配度、實習證據、申請時間，以及文件缺口。",
          "最後形成的是一份申請路線計劃：哪些課程優先、哪些文件要補、personal statement 應該建立什麼敘事，以及英語成績需要達到什麼目標。"
        ]
      }
    ]
  }
];

function shareLinks(article, localePath = "") {
  const articleUrl = new URL(`${localePath}/insights/${article.slug}/`, SITE_URL).toString();
  const text = `${localePath === "/zh" && article.titleZh ? article.titleZh : article.title} | OTC Study Hub`;
  return `
    <div class="share-strip" data-share-strip>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">Share to X</a>
      <a href="https://www.threads.net/intent/post?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">Share to Threads</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">Facebook</a>
      <a href="https://wa.me/?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Telegram</a>
      <a href="mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(articleUrl)}">Email</a>
      <button type="button" data-copy-link="${articleUrl}">Copy link</button>
      <button type="button" data-copy-link="${articleUrl}">WeChat copy</button>
    </div>
    <script>
      document.querySelectorAll("[data-copy-link]").forEach((button) => {
        button.addEventListener("click", async () => {
          const originalLabel = button.dataset.originalLabel || button.textContent;
          button.dataset.originalLabel = originalLabel;
          const url = button.dataset.copyLink;
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
    </script>
  `;
}

function shareLinksHerald(article, locale = "en", placement = "bottom") {
  const isZh = locale === "zh";
  const articleUrl = new URL(`${isZh ? "/zh" : ""}/insights/${article.slug}/`, SITE_URL).toString();
  const text = `${isZh && article.titleZh ? article.titleZh : article.title} | OTC Study Hub`;
  const rowClass = placement === "top" ? " oeh-share-row-top" : "";
  return `
    <div class="oeh-share-row${rowClass}" data-share-strip>
      <span>${isZh ? "分享本文" : "Share this article"}</span>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">X</a>
      <a href="https://www.threads.net/intent/post?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">Threads</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://wa.me/?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Telegram</a>
      <a href="mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(articleUrl)}">Email</a>
      <button type="button" data-copy-link="${articleUrl}">${isZh ? "複製連結" : "Copy link"}</button>
      <button type="button" data-copy-link="${articleUrl}">Instagram</button>
      <button type="button" data-copy-link="${articleUrl}">${isZh ? "微信複製" : "WeChat copy"}</button>
    </div>
  `;
}

function heraldSubscribeCta(locale = "en") {
  const isZh = locale === "zh";
  const subject = isZh ? "訂閱留學導報及 OTC 網站更新" : "Subscribe to Overseas Study Review and OTC website updates";
  const body = isZh
    ? "您好，請將我加入《留學導報》及 OTC 網站更新名單。"
    : "Hello, please add me to the Overseas Study Review and OTC website update list.";
  return `
    <div class="herald-subscribe-row ${isZh ? "zh-herald-subscribe-row" : "oeh-subscribe-row"}">
      <a href="mailto:office@overseasuk.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}">
        <span>${isZh ? "留學導報 · OTC 更新" : "Overseas Study Review · OTC updates"}</span>
        <strong>${isZh ? "訂閱本報及本網更新" : "Subscribe to Review and Website Updates"}</strong>
      </a>
    </div>
  `;
}

function heraldShareScript() {
  return `
    <script>
      document.querySelectorAll("[data-copy-link]").forEach((button) => {
        button.addEventListener("click", async () => {
          const originalLabel = button.dataset.originalLabel || button.textContent;
          button.dataset.originalLabel = originalLabel;
          const url = button.dataset.copyLink;
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
    </script>
  `;
}

function articleBody(article) {
  const english = article.body.map((section) => `
    <section>
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `).join("");
  const chinese = (article.bodyZh || []).map((section) => `
    <section>
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `).join("");
  return `
    <div class="bilingual-article-grid">
      <article>
        <div class="article-language-label">English</div>
        ${english}
      </article>
      <article lang="zh-Hant">
        <div class="article-language-label">中文</div>
        ${chinese}
      </article>
    </div>
  `;
}

function stripSectionNumber(heading = "") {
  return heading
    .replace(/^\s*\d+\s*[\)）.、]\s*/, "")
    .replace(/^\s*[一二三四五六七八九十]+\s*[、.]\s*/, "")
    .trim();
}

function articleReadingMinutes(article) {
  const textLength = [
    article.title,
    article.titleZh,
    article.summary,
    article.summaryZh,
    ...(article.body || []).flatMap((section) => [section.heading, ...section.paragraphs]),
    ...(article.bodyZh || []).flatMap((section) => [section.heading, ...section.paragraphs])
  ].filter(Boolean).join("").length;
  return Math.max(5, Math.ceil(textLength / 900));
}

function articleHeroTitleHtml(title = "") {
  if (title.includes(":")) {
    const [lead, ...rest] = title.split(":");
    return `${lead}:<br><em>${rest.join(":").trim()}</em>`;
  }
  const words = title.split(" ");
  if (words.length > 5) {
    return `${words.slice(0, -3).join(" ")} <em>${words.slice(-3).join(" ")}</em>`;
  }
  return title;
}

function boldInstitutionLead(paragraph = "") {
  const colonIndex = paragraph.indexOf(":");
  if (colonIndex > 0 && colonIndex < 80) {
    return `<strong>${paragraph.slice(0, colonIndex + 1)}</strong>${paragraph.slice(colonIndex + 1)}`;
  }
  return paragraph;
}

function isPathwayUpdateArticle(article) {
  return article.slug === "australia-new-zealand-provider-pathway-updates-2026";
}

function genericHeraldSidebar(article) {
  const sections = (article.body || []).slice(0, 6).map((section) => stripSectionNumber(section.heading));
  return `
    <div class="oeh-widget">
      <div class="oeh-widget-title">本文速查</div>
      ${sections.map((heading, index) => `
        <div class="oeh-route-card ${["red", "teal", "gold", "grey"][index % 4]}">
          <strong>${heading}</strong>
          <small>${index === 0 ? article.category : "導報正文重點"}</small>
          <em>${String(index + 1).padStart(2, "0")}</em>
        </div>
      `).join("")}
    </div>
    <div class="oeh-widget">
      <div class="oeh-widget-title">重要提示</div>
      <ul class="oeh-reminder-list">
        <li>本文為公開教育資訊整理，不構成結果保證。</li>
        <li>申請、截止日期與入學條件以官方最新通知為準。</li>
        <li>法律、簽證、稅務或移民事項須由合資格專業人士處理。</li>
      </ul>
    </div>
    ${contactHeraldWidget()}
  `;
}

function contactHeraldWidget() {
  return `
    <div class="oeh-widget">
      <div class="oeh-widget-title">聯絡 OTC</div>
      <div class="oeh-contact-card">
        <p><strong>WhatsApp</strong><a href="https://wa.me/447947991572">+44 7947 991572</a></p>
        <p><strong>Email</strong><a href="mailto:office@overseasuk.com">office@overseasuk.com</a></p>
        <p><strong>WeChat</strong><span>overseasus</span></p>
      </div>
    </div>
  `;
}

function pathwayHeraldSidebar() {
  return `
    <div class="oeh-widget">
      <div class="oeh-widget-title">申請路線速查</div>
      <div class="oeh-route-card red"><strong>正式合作路線</strong><small>OTC直接提交，有合作記錄</small><em>direct</em></div>
      <div class="oeh-route-card teal"><strong>Sub-agent 路線</strong><small>透過pathway provider channel</small><em>provider</em></div>
      <div class="oeh-route-card gold"><strong>信息支援路線</strong><small>OTC協助研究與文件整理</small><em>support</em></div>
      <div class="oeh-route-card grey"><strong>學生自行申請</strong><small>OTC提供諮詢，不介入提交</small><em>self</em></div>
    </div>
    <div class="oeh-widget">
      <div class="oeh-widget-title">本期監測院校</div>
      <div class="oeh-check-list">
        ${[
          "Kaplan Australia / NZ",
          "Murdoch College / University",
          "KIC Adelaide / Uni of Adelaide",
          "University of Newcastle",
          "UTS / UTS College",
          "UNSW Sydney",
          "University of Queensland",
          "Curtin Singapore",
          "La Trobe College Australia",
          "Charles Darwin University",
          "RMIT University"
        ].map((item) => `<div>${item}</div>`).join("")}
      </div>
    </div>
    <div class="oeh-widget">
      <div class="oeh-widget-title">重要提示</div>
      <ul class="oeh-reminder-list">
        <li>錄取決定由院校作出，OTC不作保證</li>
        <li>獎學金與COE出具以院校通知為準</li>
        <li>簽證與移民事項須由合資格專業人士處理</li>
      </ul>
    </div>
    ${contactHeraldWidget()}
  `;
}

function heraldArticleBody(article) {
  const readingMinutes = articleReadingMinutes(article);
  const sections = article.body || [];
  const pathway = isPathwayUpdateArticle(article);
  const complianceSection = pathway ? sections[4] : sections.find((section) => /compliance|professional|boundary|risk|disclaimer/i.test(section.heading));
  const mainSections = sections.filter((section) => section !== complianceSection);
  const pullQuote = pathway
    ? `OTC 的角色是<em>教育諮詢、申請行政與負責任的溝通支持</em>`
    : article.summary;

  return `
    <article class="oeh-page">
      <div class="oeh-masthead">
        <div>
          <div class="oeh-name-en">Overseas Education Herald</div>
          <div class="oeh-name-zh">海外留學導報</div>
          <div class="oeh-tagline">旅英旅澳華人 · 留學升學 · 生活規劃</div>
        </div>
        <div class="oeh-meta">
          <div><strong>${article.category}</strong></div>
          <div>${article.date}</div>
          <div>overseasuk.com/insights</div>
        </div>
      </div>
      <div class="oeh-section-bar">
        <div>${article.category}</div>
        <i></i>
        <time>${article.date}</time>
      </div>
      <a class="herald-home-link oeh-home-link" href="/insights/" aria-label="Back to Overseas Study Review home">
        <span>Overseas Study Review</span>
        <strong>Review Home</strong>
      </a>
      <header class="oeh-hero">
        <div class="oeh-kicker">${article.kicker || article.category}</div>
        <h1>${articleHeroTitleHtml(article.title)}</h1>
        ${article.titleZh ? `<h2>${article.titleZh}</h2>` : ""}
        <p>${article.summary}</p>
        <div class="oeh-byline">
          <span>${article.author}</span>
          <i></i>
          <span>${article.date}</span>
          <i></i>
          <span>${readingMinutes} min read</span>
          <i></i>
          <span>${article.category}</span>
        </div>
      </header>
      ${heraldSubscribeCta("en")}
      ${shareLinksHerald(article, "en", "top")}
      <div class="oeh-body-grid">
        <main class="oeh-main-col">
          <div class="oeh-pullquote"><p>${pullQuote}</p></div>
          ${mainSections.map((section, index) => {
            const cleanHeading = stripSectionNumber(section.heading);
            if (pathway && index === 0) {
              return `<section><h2 class="oeh-section-head" data-num="${index + 1}">${cleanHeading}</h2><div class="oeh-teal-box"><div class="oeh-box-title">Process Note</div>${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div></section>`;
            }
            if (pathway && index === 2) {
              return `<section><h2 class="oeh-section-head" data-num="${index + 1}">${cleanHeading}</h2>${section.paragraphs.map((paragraph) => `<div class="oeh-highlight-box compact"><p>${boldInstitutionLead(paragraph)}</p></div>`).join("")}</section>`;
            }
            if (pathway && index === 3) {
              return `<section><h2 class="oeh-section-head" data-num="${index + 1}">${cleanHeading}</h2><div class="oeh-highlight-box"><div class="oeh-box-title">Student Use</div>${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div></section>`;
            }
            return `<section><h2 class="oeh-section-head" data-num="${index + 1}">${cleanHeading}</h2>${section.paragraphs.map((paragraph) => `<p>${pathway && index === 1 ? boldInstitutionLead(paragraph) : paragraph}</p>`).join("")}</section>`;
          }).join("")}
          ${complianceSection ? `
            <div class="oeh-warning-box">
              <div class="oeh-box-title">Compliance Note</div>
              ${complianceSection.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <div class="oeh-disclaimer">${complianceSection.paragraphs.join(" ")}</div>
          ` : `
            <div class="oeh-disclaimer">This article is general educational information only. Current admissions requirements, deadlines and official decisions should always be checked with the relevant institution or qualified professional adviser.</div>
          `}
        </main>
        <aside class="oeh-side-col">
          ${pathway ? pathwayHeraldSidebar() : genericHeraldSidebar(article)}
        </aside>
      </div>
      ${shareLinksHerald(article, "en")}
      <footer class="oeh-footer">
        <strong>海外留學導報 · Overseas Tutorial Centre</strong>
        <span>© 2026 Overseas Tutorial Centre Ltd · 207 Regent Street London W1B 3HH · overseasuk.com</span>
      </footer>
    </article>
    ${heraldShareScript()}
  `;
}

function articleBodyZhFirst(article) {
  const chinese = (article.bodyZh || []).map((section) => `
    <section>
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `).join("");
  const english = article.body.map((section) => `
    <section>
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `).join("");
  return `
    <div class="bilingual-article-grid">
      <article lang="zh-Hant">
        <div class="article-language-label">中文正文</div>
        ${chinese}
      </article>
      <article>
        <div class="article-language-label">English reference</div>
        ${english}
      </article>
    </div>
  `;
}

const zhSectionNums = ["一", "二", "三", "四", "五", "六", "七", "八"];

function cleanZhHeading(heading = "") {
  return heading
    .replace(/^\s*\d+\s*[\)）.、]\s*/, "")
    .replace(/^\s*[一二三四五六七八九十]+\s*[、.]\s*/, "")
    .trim();
}

function zhIssueDate(date = "") {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return date;
  return `${match[1]}年${Number(match[2])}月${Number(match[3])}日`;
}

const zhReviewColumns = [
  {
    key: "study",
    name: "留學升學",
    scope: "英澳升學路線、UCAS 申請、Foundation vs 直入",
    tagline: "旅澳華人 · 留學移民 · 升學規劃",
    audience: "適合讀者：學生、家長、升學顧問"
  },
  {
    key: "settlement",
    name: "移居安家",
    scope: "簽證、生活、租房、選區",
    tagline: "旅澳華人 · 留學移民 · 生活安置",
    audience: "適合讀者：新移居家庭、陪讀家長、留學生"
  },
  {
    key: "wealth",
    name: "財富規劃",
    scope: "信託、物業投資、稅務、退休金",
    tagline: "旅澳華人 · 留學移民 · 財富規劃",
    audience: "適合讀者：在澳華人家庭、投資者"
  },
  {
    key: "licensing",
    name: "職業考牌",
    scope: "駕照、CSCS、行業資格",
    tagline: "旅澳華人 · 留學移民 · 職業資格",
    audience: "適合讀者：求職者、轉行人士、技能路線學生"
  },
  {
    key: "business",
    name: "創業自雇",
    scope: "公司設立、PAYE、商業結構",
    tagline: "旅澳華人 · 留學移民 · 創業自雇",
    audience: "適合讀者：創業者、自雇人士、小企業家庭"
  },
  {
    key: "culture",
    name: "學術文化",
    scope: "文學、歷史、評論",
    tagline: "旅澳華人 · 留學移民 · 學術文化",
    audience: "適合讀者：學生、家長、文化與教育讀者"
  }
];

const zhReviewColumnByKey = Object.fromEntries(zhReviewColumns.map((column) => [column.key, column]));

const zhReviewCategoryToColumn = {
  "University Applications": "study",
  "UK Applications": "study",
  "Australia Pathways": "study",
  "Australia Migration": "settlement",
  "Pathway Planning": "study",
  "Wealth Planning": "wealth"
};

function zhReviewColumnForArticle(article) {
  return zhReviewColumnByKey[article.column] || zhReviewColumnByKey[zhReviewCategoryToColumn[article.category]] || zhReviewColumns[0];
}

function zhReviewCategoryLabel(category) {
  return zhReviewColumnForArticle({ category }).name;
}

function zhReviewDepartmentCards() {
  return zhReviewColumns.map((column, index) => {
    const count = insightsArticles.filter((article) => zhReviewColumnForArticle(article).key === column.key).length;
    return `
      <article>
        <b>${String(index + 1).padStart(2, "0")}</b>
        <strong>${column.name}</strong>
        <span>${column.scope}</span>
        <em>${count} 篇</em>
      </article>
    `;
  }).join("");
}

function zhReviewTitleHtml(title) {
  const keywords = [
    "Referee Briefing Pack",
    "Personal Statement",
    "International Year One",
    "Marketing / Media",
    "Foundation",
    "Pathway",
    "WHV",
    "入籍",
    "技術移民",
    "家庭信託",
    "文件準備清單",
    "推薦信",
    "信託",
    "澳洲",
    "英國",
    "臺灣漫遊錄",
    "偽譯",
    "比較文學",
    "學術文化"
  ];
  const pattern = new RegExp(keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
  return title.replace(pattern, (match) => `<mark class="zh-review-keyword">${match}</mark>`);
}

function zhReviewListContent() {
  return `
    <div class="zh-editorial-desk">
      <div>
        <span>Editor's Note</span>
        <strong>主編歡迎詞</strong>
        <p>歡迎來到留學導報。這裡不做碎片資訊堆放，而把升學、移居、財務與職業路線整理成可以反覆查閱的中文出版頁面。讀者可以先掃欄目，再選文章深入閱讀。</p>
      </div>
      <div class="zh-editorial-actions">
        <a class="notice" href="mailto:office@overseasuk.com?subject=%E7%95%99%E5%AD%B8%E5%B0%8E%E5%A0%B1%20%E7%B7%A8%E8%BC%AF%E9%83%A8%E9%80%9A%E8%A8%8A">編輯部通訊</a>
        <a class="submit" href="mailto:office@overseasuk.com?subject=%E7%95%99%E5%AD%B8%E5%B0%8E%E5%A0%B1%20%E6%AD%A1%E8%BF%8E%E6%8A%95%E7%A8%BF">歡迎投稿</a>
        <a class="update" href="mailto:office@overseasuk.com?subject=%E8%A8%82%E9%96%B1%E7%95%99%E5%AD%B8%E5%B0%8E%E5%A0%B1%E6%9B%B4%E6%96%B0">訂閱更新</a>
        <a class="letter" href="#zh-review-current-directory">本期索引</a>
      </div>
    </div>
    <div class="zh-review-departments">${zhReviewDepartmentCards()}</div>
    <div class="zh-review-format-strip">
      <span>固定版面：報頭 · 欄目標籤欄 · 頁腳</span>
      <span>正文：分節 · 引言 · 提示框 · 免責聲明</span>
      <span>速查：側欄卡片 · 清單 · 官方資源</span>
      <span>視覺：流程圖 · 對比表 · 數據橫條</span>
    </div>
    <div class="zh-review-list-head" id="zh-review-current-directory">
      <span>Current Directory</span>
      <strong>本期文章索引</strong>
      <em>${insightsArticles.length} 篇導報文章 · 按最新更新排序</em>
    </div>
    <div class="zh-review-list">
      ${insightsArticles.map((article, index) => `
        <article class="zh-review-row">
          <div class="zh-review-row-meta">
            <b>${String(index + 1).padStart(2, "0")}</b>
            <time>${article.date.replace(/-/g, ".")}</time>
            <span>${zhReviewColumnForArticle(article).name}</span>
          </div>
          <div class="zh-review-row-body">
            <h3>${zhReviewTitleHtml(article.titleZh || article.title)}</h3>
            <p>${article.summaryZh || article.summary}</p>
          </div>
          <a href="/zh/insights/${article.slug}/">閱讀正文</a>
        </article>
      `).join("")}
    </div>
  `;
}

function zhArticleRelatedReadings(article) {
  if (!article.relatedReadings || !article.relatedReadings.length) return "";
  const relatedArticles = article.relatedReadings
    .map((slug) => insightsArticles.find((candidate) => candidate.slug === slug))
    .filter(Boolean);
  if (!relatedArticles.length) return "";
  return `
      <section class="zh-herald-infographic zh-herald-related-section">
        <h2>相關閱讀</h2>
        <p>Related Reading · 延伸閱讀與實用參考</p>
        <div class="zh-herald-related-grid">
          ${relatedArticles.map((related, index) => {
            const column = zhReviewColumnForArticle(related);
            return `
              <a class="zh-herald-related-card" href="/zh/insights/${related.slug}/">
                <span>${String(index + 1).padStart(2, "0")} · ${column.name}</span>
                <strong>${related.titleZh || related.title}</strong>
                <em>${related.summaryZh || related.summary}</em>
              </a>
            `;
          }).join("")}
        </div>
      </section>
  `;
}

function zhArticleRoadmap(article, checklist) {
  const relatedArticles = (() => {
    const resolved = (article.relatedReadings || [])
      .map((slug) => insightsArticles.find((candidate) => candidate.slug === slug))
      .filter(Boolean);
    if (resolved.length) return resolved.slice(0, 6);
    const sameCategory = insightsArticles.filter((candidate) => candidate.slug !== article.slug && candidate.category === article.category);
    if (sameCategory.length) return sameCategory.slice(0, 6);
    const sameColumn = insightsArticles.filter((candidate) => candidate.slug !== article.slug && candidate.column === article.column);
    return sameColumn.slice(0, 6);
  })();

  const resources = (article.resources || []).slice(0, 6);

  const relatedHtml = relatedArticles.length ? `
        <div class="zh-herald-reading-list">
          ${relatedArticles.map((related) => {
            const column = zhReviewColumnForArticle(related);
            return `
            <a class="zh-herald-reading-item" href="/zh/insights/${related.slug}/">
              <strong>${related.titleZh || related.title}</strong>
              <span>${column.name} · ${related.date.replace(/-/g, ".")}</span>
            </a>
          `;
          }).join("")}
        </div>
  ` : `<div class="zh-herald-reading-empty">本期暫無可自動匹配的延伸閱讀。你可以回到 <a href="/zh/insights/">留學導報索引</a> 以欄目或日期瀏覽。</div>`;

  const resourcesHtml = resources.length ? `
        <div class="zh-herald-reading-list">
          ${resources.map((resource) => `
            <a class="zh-herald-reading-item zh-herald-reading-link" href="${resource[1]}" target="_blank" rel="noopener">
              <strong>${resource[0]}</strong>
              <span>${resource[1]}</span>
            </a>
          `).join("")}
        </div>
  ` : `<div class="zh-herald-reading-empty">本文未列出官方連結。建議以 Home Affairs / 州領地官方網站的最新頁面為準。</div>`;

  return `
      <section class="zh-herald-infographic zh-herald-reading-hub">
        <h2>相關閱讀與官方資源</h2>
        <p>Related Reading · Official Links · 延伸閱讀與政策查詢入口</p>
        <div class="zh-herald-reading-grid">
          <div>
            <h3>本報相關閱讀</h3>
            ${relatedHtml}
          </div>
          <div>
            <h3>官方政策 / 查詢</h3>
            ${resourcesHtml}
          </div>
        </div>
      </section>
  `;
}

function zhAcademicMarginFigure(article, index) {
  const shared = {
    train: {
      label: "鐵道旅行",
      caption: "殖民地移動、觀看與記錄",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M18 82 H142" /><path d="M28 92 H58 M74 92 H104 M120 92 H142" /><path d="M35 68 C54 54 92 50 124 66" /><path d="M36 69 L122 69 L132 82 L26 82 Z" /><rect x="48" y="61" width="18" height="10" /><rect x="74" y="58" width="18" height="13" /><rect x="100" y="61" width="18" height="10" /><circle cx="48" cy="82" r="6" /><circle cx="112" cy="82" r="6" /><path d="M18 39 C36 29 50 31 65 39 C82 49 99 49 118 36 C128 30 138 29 146 32" /></svg>`
    },
    table: {
      label: "餐桌檔案",
      caption: "食物、階級與日常生活政治",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><ellipse cx="80" cy="70" rx="48" ry="18" /><ellipse cx="80" cy="66" rx="30" ry="10" /><path d="M52 75 L44 104 M108 75 L116 104" /><path d="M35 45 C54 33 72 36 82 47 C94 60 119 55 130 42" /><path d="M53 49 C56 43 64 41 70 45 M91 48 C96 42 105 42 111 48" /><path d="M40 59 C49 65 49 75 40 82 M120 59 C111 65 111 75 120 82" /></svg>`
    },
    contact: {
      label: "接觸地帶",
      caption: "翻譯、凝視與權力交會",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M36 26 H91 V83 H36 Z" /><path d="M69 37 H123 V96 H69 Z" /><path d="M47 42 H79 M47 54 H82 M47 66 H73" /><path d="M82 53 H111 M82 65 H112 M82 77 H101" /><path d="M60 92 C72 80 85 80 99 92" /><path d="M31 91 C45 106 60 108 75 99" /><path d="M129 29 C112 17 96 19 83 29" /></svg>`
    },
    archive: {
      label: "女性書寫",
      caption: "被壓低的聲音與情感檔案",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M36 26 C57 20 72 28 80 44 C88 28 105 20 124 27 V88 C106 80 91 84 80 98 C69 84 52 80 36 88 Z" /><path d="M80 44 V98" /><path d="M49 42 H67 M49 55 H70 M49 68 H64" /><path d="M93 42 H113 M91 55 H112 M96 68 H109" /><path d="M51 98 C65 105 94 105 110 98" /></svg>`
    },
    manuscript: {
      label: "偽譯手稿",
      caption: "原文、譯文與作者位置",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M42 20 H116 C122 20 126 26 123 32 C119 42 119 79 126 93 C129 99 124 104 116 104 H42 C50 91 51 36 42 20 Z" /><path d="M52 38 H101 M52 50 H112 M52 62 H94 M52 74 H106" /><path d="M105 22 C98 31 100 42 112 47" /><path d="M35 92 C51 88 65 91 78 100" /></svg>`
    },
    ossian: {
      label: "奧西恩",
      caption: "虛構古詩與民族文學想像",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M20 83 C40 61 52 66 66 80 C83 54 102 48 140 82" /><path d="M31 84 H145" /><path d="M57 70 C58 50 72 39 91 37 C102 36 112 31 120 23" /><path d="M82 39 C79 28 83 20 94 16" /><path d="M54 58 C42 54 36 46 36 35" /><path d="M102 52 C114 52 124 58 131 70" /><circle cx="94" cy="16" r="3" /></svg>`
    },
    labyrinth: {
      label: "書頁迷宮",
      caption: "後設文本與注釋權力",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><rect x="33" y="22" width="94" height="76" rx="2" /><path d="M50 39 H110 V51 H67 V62 H118 V75 H82 V86 H49" /><path d="M47 39 V86 H58" /><path d="M72 39 V28 M95 98 V86" /><path d="M33 98 C52 106 106 106 127 98" /></svg>`
    },
    scroll: {
      label: "物語卷軸",
      caption: "虛構比正史更接近人情",
      svg: `<svg viewBox="0 0 160 120" aria-hidden="true"><path d="M35 37 C43 25 59 25 67 37 H123 C132 37 137 45 133 53 C128 64 128 76 134 88 H66 C57 100 42 99 35 88 C43 76 43 49 35 37 Z" /><path d="M67 37 C73 50 73 75 66 88" /><path d="M82 52 H118 M82 64 H113 M82 76 H121" /><circle cx="50" cy="37" r="8" /><circle cx="50" cy="88" r="8" /></svg>`
    }
  };
  const articleFigures = {
    "taiwan-travelogue-multidimensional-literary-politics": {
      1: shared.train,
      3: shared.table,
      5: shared.contact,
      7: shared.archive
    },
    "taiwan-travelogue-pseudo-translation-comparative-literature": {
      1: shared.manuscript,
      2: shared.ossian,
      3: shared.scroll,
      4: shared.labyrinth
    }
  };
  const figure = articleFigures[article.slug] && articleFigures[article.slug][index];
  if (!figure) return "";
  return `
                <aside class="zh-academic-margin-figure ${index % 2 ? "is-right" : "is-left"}">
                  <div class="zh-academic-sketch">${figure.svg}</div>
                  <strong>${figure.label}</strong>
                  <span>${figure.caption}</span>
                </aside>
  `;
}

function zhAcademicParagraph(paragraph) {
  const subsectionMatch = paragraph.match(/^(\d+\.\d)\s+([^。]+。)(.*)$/);
  if (subsectionMatch) {
    return `<p><span class="zh-academic-subtitle">${subsectionMatch[2]}</span>${subsectionMatch[3]}</p>`;
  }
  return `<p>${paragraph}</p>`;
}

function zhAcademicReadingTag(reference) {
  const lower = reference.toLowerCase();
  if (/楊双子|yang, shuangzi|taiwan travelogue|臺灣漫遊錄/.test(lower)) return "核心文本";
  if (/hutcheon|genette|white|moretti|borges|nabokov|calvino|pessoa|zenith|grafton|ruthven|stewart/.test(lower)) return "形式理論";
  if (/bhabha|pratt|said|spivak|casanova|damrosch|tymosczko|tymo|venuti|anderson/.test(lower)) return "殖民與翻譯";
  if (/murasaki|源氏|列子|紅樓夢|聊齋|魯迅|楊伯峻|紫式部|蒲松齡|曹雪芹/.test(lower)) return "東亞古典";
  if (/showalter|chow|butler|fraser|habermas|bourdieu|certeau|appadurai|mintz/.test(lower)) return "社會與性別";
  if (/陳芳明|葉石濤|黃美娥|kleeman|liao|chou|佐藤春夫/.test(lower)) return "台灣文學史";
  return "延伸線索";
}

function zhAcademicReadingParts(reference) {
  const quoted = reference.match(/《([^》]+)》/);
  if (quoted) {
    const before = reference.slice(0, quoted.index).replace(/[。.\s]+$/g, "");
    const after = reference.slice(quoted.index + quoted[0].length).replace(/^[。.\s]+/g, "");
    return {
      title: `《${quoted[1]}》`,
      byline: before || zhAcademicReadingTag(reference),
      detail: after || reference
    };
  }
  const englishTitle = reference.match(/\. ([^.]+?)\. (?:Translated|Edited|Routledge|Princeton|Harvard|Cambridge|Oxford|U of|University|Verso|Penguin|Putnam|Harcourt|Schocken|Graywolf|Pantheon|Viking|MIT|Johns Hopkins|St\.|Edinburgh)/);
  if (englishTitle) {
    const title = englishTitle[1].trim();
    const byline = reference.slice(0, englishTitle.index + 1).replace(/\.$/, "");
    const detail = reference.slice(englishTitle.index + englishTitle[0].indexOf(title) + title.length).replace(/^[. ]+/, "");
    return { title, byline, detail: detail || reference };
  }
  const articleTitle = reference.match(/[“"](.*?)[”"]/);
  if (articleTitle) {
    const byline = reference.slice(0, articleTitle.index).replace(/[.。\s]+$/g, "");
    const detail = reference.slice(articleTitle.index + articleTitle[0].length).replace(/^[.。\s]+/g, "");
    return {
      title: `“${articleTitle[1]}”`,
      byline: byline || zhAcademicReadingTag(reference),
      detail: detail || reference
    };
  }
  return {
    title: reference.split(". ")[1] || reference,
    byline: reference.split(". ")[0] || zhAcademicReadingTag(reference),
    detail: reference
  };
}

function zhAcademicReadingCard(reference, index) {
  const parts = zhAcademicReadingParts(reference);
  const tiltClass = `tilt-${(index % 5) + 1}`;
  return `
              <article class="zh-academic-reading-chip ${tiltClass}">
                <span>${zhAcademicReadingTag(reference)}</span>
                <strong>${parts.title}</strong>
                <em>${parts.byline}</em>
                <small>${parts.detail}</small>
              </article>
  `;
}

function zhAcademicReadingUrl(parts) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(`${parts.title} ${parts.byline}`)}`;
}

function zhAcademicPublicationUrl(parts) {
  return `https://search.worldcat.org/search?q=${encodeURIComponent(`${parts.title} ${parts.byline}`)}`;
}

function zhAcademicReviewUrl(parts) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(`${parts.title} ${parts.byline} review OR 書評`)}`;
}

function zhAcademicReadingRelation(reference) {
  const tag = zhAcademicReadingTag(reference);
  const relations = {
    "核心文本": "文本原點",
    "形式理論": "偽托、後設與敘事框架",
    "殖民與翻譯": "帝國、翻譯與世界文學場域",
    "東亞古典": "古典物語與偽托傳統",
    "社會與性別": "公共領域、階級與女性主體",
    "台灣文學史": "台灣歷史語境",
    "延伸線索": "旁支線索"
  };
  return relations[tag] || "旁支線索";
}

function zhAcademicReadingListItem(reference) {
  const parts = zhAcademicReadingParts(reference);
  return `
              <li>
                <span class="zh-reading-node">${zhAcademicReadingTag(reference)}</span>
                <strong><a href="${zhAcademicReadingUrl(parts)}" target="_blank" rel="noopener">${parts.title}</a></strong>
                <em>${parts.byline}</em>
                <small>${zhAcademicReadingRelation(reference)}</small>
                <nav aria-label="${parts.title} 延伸連結">
                  <a href="${zhAcademicPublicationUrl(parts)}" target="_blank" rel="noopener">出版/館藏</a>
                  <a href="${zhAcademicReviewUrl(parts)}" target="_blank" rel="noopener">書評/研究</a>
                </nav>
              </li>
  `;
}

const taiwanTravelogueCoverGallery = [
  {
    label: "台灣版",
    title: "《臺灣漫遊錄》",
    publisher: "春山出版",
    note: "原作出版；偽譯裝置引發封面署名討論",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/412x580_wmkn_337454246964_0.jpg",
    source: "https://www.cna.com.tw/news/acul/202605235003.aspx"
  },
  {
    label: "美國版",
    title: "Taiwan Travelogue",
    publisher: "Graywolf Press",
    note: "Lin King 英譯；2024 National Book Award 翻譯文學獎",
    image: "https://www.graywolfpress.org/sites/default/files/covers/9781644453155.jpg",
    source: "https://www.graywolfpress.org/books/taiwan-travelogue"
  },
  {
    label: "英國版",
    title: "Taiwan Travelogue",
    publisher: "And Other Stories",
    note: "2026 International Booker Prize 評選與出版語境",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/1407x2160_wmkn_030525085522_0.jpg",
    source: "https://www.cna.com.tw/news/acul/202605235003.aspx"
  },
  {
    label: "澳洲版",
    title: "Taiwan Travelogue",
    publisher: "Scribe Publications",
    note: "以鄧南光1930年代攝影建立殖民地視覺記憶",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/468x728_wmkn_778559652936_0.jpg",
    source: "https://www.cna.com.tw/news/acul/202605235003.aspx"
  },
  {
    label: "日本版",
    title: "台湾漫遊鉄道のふたり",
    publisher: "中央公論新社",
    note: "三浦裕子譯；2024年第10屆日本翻譯大賞",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/850x1240_wmkn_906541536026_0.jpg",
    source: "https://www.chuko.co.jp/tanko/2023/04/005652.html"
  },
  {
    label: "韓國版",
    title: "1938 타이완여행기",
    publisher: "마티스블루",
    note: "標題標出1938，將殖民歷史背景前置",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/500x816_wmkn_843544868873_0.jpg",
    source: "https://www.cna.com.tw/news/acul/202605235003.aspx"
  },
  {
    label: "芬蘭版",
    title: "Matkapäiväkirja Taiwanista",
    publisher: "Aula & Co",
    note: "Rauno Sainio 芬譯；飲食與殖民史進入北歐讀者語境",
    image: "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260523/705x1024_wmkn_99933309260_0.jpg",
    source: "https://aulakustannus.fi/kirjat/matkapaivakirja-taiwanista"
  }
];

function zhAcademicCoverGallery(article) {
  if (!article.academic || !article.slug || !article.slug.startsWith("taiwan-travelogue")) return "";
  return `
            <section class="zh-academic-cover-atlas" aria-labelledby="taiwan-travelogue-cover-atlas-title">
              <div class="zh-academic-cover-atlas-head">
                <span>visual bibliography</span>
                <h2 id="taiwan-travelogue-cover-atlas-title">《臺灣漫遊錄》版本封面圖譜</h2>
                <p>封面縮圖作為評論與版本辨識使用：它們顯示同一部小說在不同語言市場中如何被重新命名、視覺化與定位。</p>
              </div>
              <div class="zh-academic-cover-grid">
                ${taiwanTravelogueCoverGallery.map((cover, index) => `
                  <figure class="zh-academic-cover-card">
                    <a href="${cover.source}" target="_blank" rel="noopener">
                      <img src="${cover.image}" alt="${cover.label}：${cover.title}封面" loading="${index < 3 ? "eager" : "lazy"}">
                    </a>
                    <figcaption>
                      <span>${cover.label}</span>
                      <strong>${cover.title}</strong>
                      <em>${cover.publisher}</em>
                      <small>${cover.note}</small>
                    </figcaption>
                  </figure>
                `).join("")}
              </div>
              <p class="zh-academic-cover-source">封面來源：各出版社公開書頁及中央社2026年5月23日版本封面報導；本頁僅作書評、研究與版本辨識用途。</p>
            </section>
  `;
}

function zhArticleMagazineBody(article) {
  const zhSections = article.bodyZh && article.bodyZh.length ? article.bodyZh : article.body;
  const englishSections = article.body || [];
  const cleanedSections = zhSections.map((section) => ({
    heading: cleanZhHeading(section.heading),
    paragraphs: section.paragraphs
  }));
  const readingMinutes = Math.max(5, Math.ceil(cleanedSections.reduce((sum, section) => {
    return sum + section.heading.length + section.paragraphs.join("").length;
  }, 0) / 520));
  const reviewColumn = zhReviewColumnForArticle(article);
  const sectionLabel = reviewColumn.name === "留學升學"
    ? "留學｜升學｜轉學｜遊學｜訪學｜自學"
    : reviewColumn.name;
  const firstSection = cleanedSections[0];
  const checklist = cleanedSections.slice(0, 7);
  const issueMonth = article.date ? `${article.date.slice(0, 4)}年${Number(article.date.slice(5, 7))}月號` : "最新一期";

  const pageClass = article.academic ? " zh-academic-page" : "";
  const mainClass = article.academic ? " zh-academic-main" : "";
  const readingReferences = article.readingListZh && article.readingListZh.length
    ? article.readingListZh
    : article.referencesZh;
  const academicReferences = readingReferences && readingReferences.length ? `
          <section class="zh-academic-bibliography">
            <h2 class="zh-herald-section-head" data-num="讀">延伸閱讀</h2>
            <p class="zh-academic-source-note">這一欄兼作參考書目、微型知識圖譜與外部查讀入口；書名連至研究檢索，「出版/館藏」查版本與館藏，「書評/研究」查評論與論文回應。</p>
            <ul class="zh-academic-reading-list">
              ${readingReferences.map((reference) => zhAcademicReadingListItem(reference)).join("")}
            </ul>
          </section>
  ` : "";
  const factCheckNotes = article.factCheckNotes && article.factCheckNotes.length ? `
          <details class="zh-academic-factcheck">
            <summary>編校核查</summary>
            <p>以下為《留學導報》刊載編校核查，不屬於作者正文；僅用於說明本頁發布時已核對的關鍵事實與參考依據。</p>
            <ul>
              ${article.factCheckNotes.map((note) => `<li>${note}</li>`).join("")}
            </ul>
          </details>
  ` : "";
  return `
    <div class="zh-herald-page${pageClass}">
      <div class="zh-herald-masthead">
        <div>
          <div class="zh-herald-name-en">Overseas Study Review</div>
          <div class="zh-herald-name-zh">留學導報</div>
          <div class="zh-herald-tagline">${reviewColumn.tagline}</div>
        </div>
        <div class="zh-herald-meta">
          <div><strong>${reviewColumn.name}</strong></div>
          <div>${issueMonth}</div>
          <div>${article.author}</div>
          <div>overseasuk.com/insights</div>
        </div>
      </div>
      <div class="zh-herald-section-bar">
        <div class="zh-herald-section-tag">${sectionLabel}</div>
        <div class="zh-herald-section-line"></div>
        <time>${zhIssueDate(article.date)}</time>
      </div>
      <a class="herald-home-link zh-herald-home-link" href="/zh/insights/" aria-label="返回留學導報主頁">
        <span>Overseas Study Review</span>
        <strong>返回留學導報主頁</strong>
      </a>
      <header class="zh-herald-hero">
        <div class="zh-herald-kicker">${article.kicker || `${reviewColumn.name}專題`}</div>
        <h1>${article.titleZh || article.title}</h1>
        <p class="zh-herald-standfirst">${article.summaryZh || article.summary}</p>
        <div class="zh-herald-byline">
          <span>作者：${article.author}</span>
          <i></i>
          <span>閱讀時間約 ${readingMinutes} 分鐘</span>
          <i></i>
          <span>${article.academic ? "全文刊登 · 作者版權所有" : reviewColumn.audience}</span>
        </div>
      </header>
      ${article.academic ? `
      <div class="zh-academic-publication-strip">
        <span>《留學導報》刊載資訊</span>
        <strong>${article.publicationCode || "留學導報學術文化欄"}</strong>
        <em>${article.rightsNotice || "作者版權所有。未經許可，不得轉載、摘編或改寫。"}</em>
      </div>
      ` : ""}
      ${heraldSubscribeCta("zh")}
      ${shareLinksHerald(article, "zh", "top")}
      <div class="zh-herald-body-grid">
        <main class="zh-herald-main${mainClass}">
          ${firstSection ? `
            <div class="zh-herald-pullquote">
              <p>${firstSection.paragraphs[0].replace(/。.*$/, "。")}</p>
            </div>
          ` : ""}
          ${zhAcademicCoverGallery(article)}
          ${cleanedSections.map((section, index) => {
            const marginFigure = article.academic ? zhAcademicMarginFigure(article, index) : "";
            return `
            <section class="${marginFigure ? "zh-academic-illustrated-section" : ""}">
              <h2 class="zh-herald-section-head" data-num="${zhSectionNums[index] || index + 1}">${section.heading}</h2>
              ${marginFigure}
              ${section.paragraphs.map((paragraph, pIndex) => {
                if (article.academic) {
                  return zhAcademicParagraph(paragraph);
                }
                if (index === 1 && pIndex === 0) {
                  return `<div class="zh-herald-teal-box"><div class="zh-herald-box-title">導報提示</div><p>${paragraph}</p></div>`;
                }
                if (index === 2 && pIndex === 0) {
                  return `<div class="zh-herald-highlight-box"><div class="zh-herald-box-title">實務重點</div><p>${paragraph}</p></div>`;
                }
                return `<p>${paragraph}</p>`;
              }).join("")}
            </section>
          `;
          }).join("")}${academicReferences}${factCheckNotes}
          <div class="zh-herald-warning-box">
            <div class="zh-herald-box-title">${article.academic ? "版權聲明" : "重要提示"}</div>
            <p>${article.academic ? (article.rightsNotice || "作者版權所有。本文由《留學導報》全文刊登，未經許可，不得轉載、摘編、改寫或作商業使用。") : "本文為一般教育與申請資訊整理，不構成錄取保證、法律意見、移民意見或官方院校文件。具體申請要求、截止日期、入學條件與政策解讀，應以相關院校、政府部門或正式合作方的最新書面資訊為準。"}</p>
          </div>
          <div class="zh-herald-disclaimer">${article.academic ? `作者：${article.author || "蕭珩"}。${article.publicationCode || "《留學導報》學術文化欄"}。本文為作者授權《留學導報》全文刊登版本，文章著作權歸作者所有；《留學導報》保留本版式、編排、網頁發布與刊載記錄之相關權利。` : "本文由留學導報編輯部編製。留學導報屬於 Overseas Publishing / 海外書局系列板塊之一，與出版、編譯並列，面向學生、家長、教育機構與合作方提供可公開閱讀、可引用、可持續更新的雙語教育資訊。"}</div>
        </main>
        ${article.academic ? "" : `<aside class="zh-herald-side">
          <div class="zh-herald-widget">
            <div class="zh-herald-widget-title">本文速讀</div>
            <div class="zh-herald-trust-card family">
              <div class="zh-herald-card-name">${reviewColumn.name}</div>
              <div class="zh-herald-card-en">${article.category}</div>
              <div class="zh-herald-card-desc">${article.summaryZh || article.summary}</div>
              <span class="zh-herald-badge">導報主題</span>
            </div>
          </div>
          ${article.sidebarCards ? `
            <div class="zh-herald-widget">
              <div class="zh-herald-widget-title">類型速查</div>
              ${article.sidebarCards.map((card, index) => `
                <div class="zh-herald-trust-card ${["family", "unit", "will", "smsf"][index % 4]}">
                  <div class="zh-herald-card-name">${card[0]}</div>
                  <div class="zh-herald-card-en">${card[1]}</div>
                  <div class="zh-herald-card-desc">${card[2]}</div>
                  <span class="zh-herald-badge">${card[3]}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
          ${article.costBars ? `
            <div class="zh-herald-widget">
              <div class="zh-herald-widget-title">費用參考</div>
              ${article.costBars.map((bar) => `
                <div class="zh-herald-cost-row">
                  <div><strong>${bar[0]}</strong><span>${bar[1]}</span></div>
                  <i><em style="width:${bar[2]}%"></em></i>
                </div>
              `).join("")}
            </div>
          ` : ""}
          <div class="zh-herald-widget">
            <div class="zh-herald-widget-title">欄目定位</div>
            <div class="zh-herald-check-item">正文負責深度：完整解釋背景、流程與風險。</div>
            <div class="zh-herald-check-item">側欄負責速查：讀者可快速掃描重點。</div>
            <div class="zh-herald-check-item">信息圖負責記憶：流程、比較與數據集中呈現。</div>
          </div>
          <div class="zh-herald-widget">
            <div class="zh-herald-widget-title">閱讀清單</div>
            ${checklist.map((section) => `<div class="zh-herald-check-item">${section.heading}</div>`).join("")}
          </div>
          <div class="zh-herald-widget">
            <div class="zh-herald-widget-title">英文對照</div>
            ${englishSections.slice(0, 4).map((section) => `
              <div class="zh-herald-resource-item">
                <div class="zh-herald-resource-icon">EN</div>
                <div><div class="zh-herald-resource-name">${section.heading.replace(/^\d+\)\s*/, "")}</div><div class="zh-herald-resource-url">Reference section</div></div>
              </div>
            `).join("")}
          </div>
          ${article.resources ? `
            <div class="zh-herald-widget">
              <div class="zh-herald-widget-title">官方查詢資源</div>
              ${article.resources.map((resource) => `
                <div class="zh-herald-resource-item">
                  <div class="zh-herald-resource-icon">↗</div>
                  <div><div class="zh-herald-resource-name">${resource[0]}</div><div class="zh-herald-resource-url">${resource[1]}</div></div>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </aside>`}
      </div>
      ${zhArticleRoadmap(article, checklist)}
      ${article.slug.includes("australia") ? `
        <section class="zh-herald-infographic australia-article-cta">
          <h2>下一步：把文章變成路線評估</h2>
          <p>讀完導報後，可回到 OTC 澳洲路線頁，把你的學歷、課程單元、成績單與目標職業整理成初步評估。</p>
          <div class="credit-actions">
            <a class="btn btn-dark" href="/australia/">了解 OTC 澳洲路線</a>
            <a class="btn btn-light" href="https://wa.me/447947991572?text=I%20would%20like%20an%20Australia%20pathway%20assessment">免費路線初篩</a>
          </div>
        </section>
      ` : ""}
      ${shareLinksHerald(article, "zh")}
      <footer class="zh-herald-footer">
        <strong>留學導報</strong>
        <span>© 2026 Overseas Tutorial Centre Ltd. · Overseas Publishing House · overseasuk.com</span>
      </footer>
    </div>
    ${heraldShareScript()}
  `;
}

const insights = pageShell({
  title: "Overseas Study Review | 留學導報 | OTC Study Hub",
  current: "insights",
  description: "Overseas Study Review / 留學導報 is an Overseas Publishing House series for study-abroad briefings, university application notes, pathway explainers and bilingual education commentary.",
  path: "/insights/",
  body: `
    <section class="page-hero insights-hero">
      <div class="band insights-hero-layout">
        <div>
          <div class="eyebrow">Overseas Publishing House · 出版 · 編譯 · 導報</div>
          <h1>Overseas Study Review</h1>
          <h2>留學導報</h2>
          <p>A bilingual public briefing series under Overseas Publishing House, connecting education publishing, editorial translation and study-abroad commentary for students, families and institutions.</p>
        </div>
        <aside class="insights-issue-panel">
          <span>Current Issue</span>
          <strong>Study-Abroad Application Briefings</strong>
          <p>UK · Australia · New Zealand<br>Applications · Pathways · Documents</p>
        </aside>
      </div>
    </section>
    <section class="band insights-band">
      <div class="insights-intro">
        <div>
          <div class="eyebrow">Latest Briefings</div>
          <h2>Publishing-grade study-abroad notes, edited for public reading.</h2>
        </div>
        <p>留學導報屬於 Overseas Publishing / 海外書局 的系列板塊之一，與出版、編譯並列：面向學生、家長、教育機構與合作方，整理可分享、可引用、可持續更新的留學資訊。</p>
      </div>
      <div class="insights-ledger">
        ${insightsArticles.map((article, index) => `
          <article class="insight-card ${index === 0 ? "insight-card-feature" : ""}">
            <div class="insight-card-meta"><span>${article.category}</span><time>${article.date}</time></div>
            <h3>${article.title}</h3>
            ${article.titleZh && article.titleZh !== article.title ? `<h4>${article.titleZh}</h4>` : ""}
            <p>${article.summary}</p>
            <a class="insight-link" href="/insights/${article.slug}/">Read briefing</a>
          </article>
        `).join("")}
      </div>
    </section>
  `
});

const zhInsights = pageShell({
  title: "留學導報 | 海外書局 | OTC Study Hub",
  current: "insights",
  lang: "zh-Hant",
  locale: "zh",
  description: "留學導報是海外書局的中文導報板塊，按留學升學、移居安家、財富規劃、職業考牌、創業自雇與學術文化六類整理文章。",
  path: "/zh/insights/",
  body: `
    <section class="zh-insights-front">
      <div class="zh-herald-page zh-insights-front-page">
        <div class="zh-herald-masthead">
          <div>
            <div class="zh-herald-name-en">Overseas Study Review</div>
            <div class="zh-herald-name-zh">留學導報</div>
            <div class="zh-herald-tagline">旅澳華人 · 留學移民 · 財富規劃</div>
          </div>
          <div class="zh-herald-meta">
            <div><strong>海外書局系列板塊</strong></div>
            <div>中文文章目錄</div>
            <div>出版 · 編譯 · 導報</div>
            <div>overseasuk.com/zh/insights</div>
          </div>
        </div>
        <div class="zh-herald-section-bar">
          <div class="zh-herald-section-tag">中文刊面</div>
          <div class="zh-herald-section-line"></div>
          <time>每週整理 · 擇要更新</time>
        </div>
        <header class="zh-herald-hero zh-insights-front-hero">
          <div class="zh-herald-kicker">給中文讀者的一封短箋</div>
          <h1>把海外生活與升學路線<br>整理成<em>可閱讀的刊面</em></h1>
          <p class="zh-herald-standfirst">留學導報面向學生、家長與旅外華人家庭，選取真正需要判斷的題目：申請文件、升學路線、移居安家、財富結構與職業資格。每一篇文章都以可核查、可更新、可分享為基本標準。</p>
          <div class="zh-herald-byline">
            <span>主編：海外書局編輯部</span>
            <i></i>
            <span>讀者來信：office@overseasuk.com</span>
            <i></i>
            <span>歡迎投稿與選題建議</span>
          </div>
        </header>
      </div>
    </section>
    <section class="band compact-band zh-review-list-section">
      <div class="section-head compact-head zh-editorial-section-head">
        <div class="eyebrow">Editorial Desk</div>
        <h2>本期導讀</h2>
        <p>主編短箋、欄目索引、投稿與訂閱入口集中於此；文章列表保持清晰、可掃讀。</p>
      </div>
      ${zhReviewListContent()}
    </section>
  `
});

function insightArticlePage(article) {
  const image = writeHeraldSocialImage(article, "en");
  const socialImageVersion = "v=20260524-social-png";
  return pageShell({
    title: `${article.title} | Overseas Study Review`,
    current: "insights",
    description: article.summary,
    path: `/insights/${article.slug}/`,
    image: `${image}?${socialImageVersion}`,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: `${article.title} | Overseas Study Review`,
    body: `
      <main class="oeh-shell">
        ${heraldArticleBody(article)}
      </main>
    `
  });
}

function insightArticlePageZh(article) {
  const image = writeHeraldSocialImage(article, "zh");
  const socialImageVersion = "v=20260524-social-png";
  return pageShell({
    title: `${article.titleZh || article.title} | 留學導報`,
    current: "insights",
    lang: "zh-Hant",
    locale: "zh",
    description: article.summaryZh || article.summary,
    path: `/zh/insights/${article.slug}/`,
    image: `${image}?${socialImageVersion}`,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: `${article.titleZh || article.title} | 留學導報`,
    body: `
      ${zhArticleMagazineBody(article)}
    `
  });
}

const serviceLines = [
  {
    code: "01",
    title: "Language & Context Studio",
    titleZh: "海外書局｜編譯部",
    audience: "Government, publishing houses, universities, education institutions, law firms, corporate clients and academic teams.",
    audienceZh: "面向政府、出版社、大學、教育機構、律師事務所、企業與學術團隊。",
    desc: "Professional Chinese-English translation, bilingual editing, context calibration and public-facing wording for important documents.",
    descZh: "中英翻譯、雙語編修、語境校準與重要文件對外表達整理。",
    items: ["Government and institutional profiles", "Publishing manuscripts and academic articles", "Legal-context and business documents", "University application and academic materials"]
  },
  {
    code: "02",
    title: "Publishing & Editorial Production",
    titleZh: "出版與編輯製作",
    audience: "Authors, research groups, schools, training providers and cultural or education projects.",
    audienceZh: "面向作者、研究團隊、學校、培訓機構與文化/教育項目。",
    desc: "Editorial structure, bilingual layout, ISBN/KDP/Payhip preparation, public bookshop editions and digital publication packages.",
    descZh: "編輯結構、雙語排版、ISBN/KDP/Payhip 準備、公開書店版本與數字出版包。",
    items: ["Book and study-guide production", "Bilingual layout and proofing", "KDP / Payhip listing assets", "Research and education publishing workflow"]
  },
  {
    code: "03",
    title: "Academic Guardianship & Family Office",
    titleZh: "學術監護與家庭學業辦公室",
    audience: "International families, minor students, boarding-school families and complex cross-border study cases.",
    audienceZh: "面向國際家庭、未成年學生、寄宿學校家庭與複雜跨境學習個案。",
    desc: "Structured academic monitoring, school communication support, parent reporting, safeguarding-aware coordination and study-route planning.",
    descZh: "學業監測、學校溝通、家長報告、符合 safeguarding 意識的協調與升學路線規劃。",
    items: ["Academic progress reporting", "School-family communication", "Document and deadline tracking", "Progression and wellbeing coordination"]
  },
  {
    code: "04",
    title: "Academic Conferences & Roundtables",
    titleZh: "學術會議與圓桌活動",
    audience: "Universities, research networks, education organisations, publishers and professional communities.",
    audienceZh: "面向大學、研究網絡、教育組織、出版社與專業社群。",
    desc: "Topic design, bilingual materials, speaker coordination, event pages, proceedings preparation and post-event publication support.",
    descZh: "主題設計、雙語材料、講者協調、活動頁、會議成果整理與會後出版支持。",
    items: ["Seminars and roundtables", "Bilingual event packs", "Speaker and abstract management", "Proceedings and report production"]
  },
  {
    code: "05",
    title: "Education Fairs & Institutional Delegations",
    titleZh: "教育展承辦與機構訪問",
    audience: "Schools, colleges, universities, agencies, local partners and overseas education organisations.",
    audienceZh: "面向學校、學院、大學、代理、地方合作方與海外教育機構。",
    desc: "Event planning, exhibitor coordination, student-facing materials, bilingual promotion and post-event enquiry management.",
    descZh: "活動規劃、參展方協調、學生材料、雙語宣傳與會後 enquiry 管理。",
    items: ["Education fair planning", "Institution roadshows", "Bilingual promotional packs", "Lead capture and follow-up workflow"]
  },
  {
    code: "06",
    title: "Education Institution Accreditation Support",
    titleZh: "教育機構 Accreditation 支持",
    audience: "Training providers, tutorial centres, colleges and education companies preparing institutional applications or audits.",
    audienceZh: "面向準備機構申請、審核或資質整理的培訓機構、補習中心、學院與教育公司。",
    desc: "Readiness review, policy/document mapping, evidence pack preparation, staff/resource records and quality-assurance narrative support.",
    descZh: "readiness review、政策與文件映射、證據包、師資/資源記錄與質量保障敘事支持。",
    items: ["Awarding-body readiness packs", "Policy and evidence mapping", "Staff and resource documentation", "Quality assurance and audit narrative"]
  }
];

function serviceCards() {
  return `
    <div class="service-product-grid">
      ${serviceProducts.map((service) => `
        <a class="service-product-card service-tone-${service.tone || "navy"}${service.featured ? " service-product-featured" : ""}" href="/services/${service.slug}/">
          <span class="service-book-spine"></span>
          <span class="service-product-code">${service.code}</span>
          <strong>${service.title}</strong>
          <p>${service.shortDesc}</p>
          <span class="service-product-foot">
            <span class="service-product-price">${service.price}</span>
            <span class="service-product-open">Open</span>
          </span>
        </a>
      `).join("")}
    </div>
  `;
}

const serviceProducts = [
  {
    ...serviceLines[0],
    slug: "language-context-studio",
    type: "Flagship translation service",
    shortDesc: "Professional bilingual language work for important institutional documents.",
    cardDesc: "Professional Chinese-English translation, bilingual editing and tone calibration for government, publishing, academic and legal-context documents.",
    price: "From £180 / document review",
    timeline: "1-10 working days",
    tone: "gold",
    featured: true,
    overview: "A professional language and context service for documents where tone, authority, precision and institutional risk matter as much as literal meaning.",
    process: ["Document intake and purpose check", "Audience, jurisdiction and terminology calibration", "Translation / bilingual editing / rewriting", "Editorial review with query notes", "Final clean copy and tracked-change copy"],
    deliverables: ["Bilingual final document", "Tracked-change editorial file", "Terminology and style notes", "Optional publication-ready layout"],
    showcase: ["Government or institution profile", "Academic article / abstract / conference text", "Legal-context supporting document", "Publishing manuscript sample"],
    pricing: ["Document review: from £180", "Premium translation/editing: quoted by word count and risk level", "Institutional retainer: by monthly scope"]
  },
  {
    ...serviceLines[1],
    slug: "publishing-editorial-production",
    type: "Publishing production",
    shortDesc: "Editorial production for books, reports and bilingual publications.",
    cardDesc: "Editorial planning, bilingual layout, ISBN/KDP/Payhip preparation and public-facing publication packages.",
    price: "From £480 / publication pack",
    timeline: "1-6 weeks",
    tone: "navy",
    overview: "A production service for authors, schools, research groups and education projects that need a manuscript turned into a credible public or internal publication.",
    process: ["Manuscript audit", "Editorial structure and production schedule", "Copyediting / bilingual proofing", "Layout and cover asset preparation", "Upload pack and publication handover"],
    deliverables: ["Edited manuscript", "PDF publication file", "Cover or listing assets", "KDP / Payhip / internal release checklist"],
    showcase: ["Study guide edition", "Institutional report", "Conference proceedings", "Bilingual digital booklet"],
    pricing: ["Publication readiness review: £480", "Short booklet production: from £1,200", "Full book production: quoted after manuscript review"]
  },
  {
    ...serviceLines[2],
    slug: "academic-guardianship-family-office",
    type: "Private client education management",
    shortDesc: "Academic oversight and reporting for international families.",
    cardDesc: "Academic monitoring, school communication, parent reporting and progression planning for international families.",
    price: "From £350 / month",
    timeline: "Monthly or termly",
    tone: "green",
    overview: "A discreet education management service for families who need structured oversight across school, tutoring, examinations and university progression.",
    process: ["Student profile and risk review", "School / family communication map", "Monthly progress monitoring", "Exam and application timeline management", "Parent report and action plan"],
    deliverables: ["Student education file", "Monthly or termly progress report", "Deadline tracker", "Progression route plan"],
    showcase: ["Parent reporting dashboard", "Termly academic review", "University progression timeline", "School communication log"],
    pricing: ["Monthly monitoring: from £350", "Termly academic review: from £650", "Family office package: quoted by scope"]
  },
  {
    ...serviceLines[3],
    slug: "academic-conferences-roundtables",
    type: "Academic events",
    shortDesc: "Conference, roundtable and bilingual event production.",
    cardDesc: "Conference concept, bilingual materials, speaker coordination, event pages and proceedings support.",
    price: "From £1,200 / event design",
    timeline: "2-12 weeks",
    tone: "rose",
    overview: "A structured event service for academic, publishing and education-sector organisations needing credible bilingual programming and post-event outputs.",
    process: ["Theme and audience definition", "Programme and speaker plan", "Bilingual event material production", "Event coordination and facilitation", "Proceedings / report production"],
    deliverables: ["Event concept note", "Programme and speaker pack", "Bilingual attendee materials", "Post-event report or proceedings"],
    showcase: ["Academic roundtable", "Policy dialogue", "Publisher seminar", "Education forum"],
    pricing: ["Event design: from £1,200", "Bilingual materials pack: from £850", "Full delivery: quoted by scale"]
  },
  {
    ...serviceLines[4],
    slug: "education-fairs-institutional-delegations",
    type: "Education market events",
    shortDesc: "Education fairs, roadshows and institutional delegation support.",
    cardDesc: "Education fairs, institution roadshows, delegation visits, bilingual promotion and enquiry follow-up.",
    price: "From £2,500 / project",
    timeline: "4-16 weeks",
    tone: "teal",
    overview: "A market-facing service for institutions and partners organising recruitment events, delegation visits or education exchange activity.",
    process: ["Market and participant scoping", "Partner / exhibitor coordination", "Bilingual promotion and materials", "On-site or online delivery support", "Lead capture and post-event follow-up"],
    deliverables: ["Event plan", "Institution presentation pack", "Bilingual promotional materials", "Enquiry and follow-up report"],
    showcase: ["Education fair booth pack", "Institution delegation itinerary", "Roadshow promotion set", "Partner meeting brief"],
    pricing: ["Small project: from £2,500", "Delegation visit: from £3,800", "Education fair delivery: quoted by venue and scale"]
  },
  {
    ...serviceLines[5],
    slug: "education-institution-accreditation-support",
    type: "Institutional readiness support",
    shortDesc: "Evidence packs and readiness support for education providers.",
    cardDesc: "Evidence mapping, policy review, staff/resource records and quality-assurance narrative for institutional applications.",
    price: "From £1,500 / readiness review",
    timeline: "2-10 weeks",
    tone: "slate",
    overview: "A documentation and readiness service for education providers preparing approval, accreditation or quality-assurance evidence packs.",
    process: ["Readiness diagnostic", "Policy and evidence map", "Document gap list", "Evidence pack preparation", "Quality narrative and submission support"],
    deliverables: ["Readiness report", "Policy / evidence matrix", "Staff and resource record pack", "Audit or application narrative"],
    showcase: ["Awarding-body evidence pack", "Centre policy index", "Staff-resource matrix", "Quality assurance narrative"],
    pricing: ["Readiness review: from £1,500", "Evidence pack build: from £3,500", "Ongoing QA support: monthly retainer"]
  },
  {
    code: "07",
    title: "University Application Advisory",
    titleZh: "大學申請顧問服務",
    slug: "university-application-advisory",
    type: "Admissions advisory",
    audience: "Students, families, schools and agencies preparing UK, Australian and international university applications.",
    audienceZh: "面向準備英國、澳洲及國際大學申請的學生、家庭、學校與代理機構。",
    desc: "UK university application advisory, advanced-entry screening, document planning and admissions communication support.",
    descZh: "英國大學申請顧問、advanced entry 審核、文件規劃與 admissions 溝通支持。",
    shortDesc: "UK applications, advanced entry, eligibility review and document planning.",
    cardDesc: "UK university application advisory for undergraduate, postgraduate, UCAS/direct and advanced-entry cases, with document checks, course mapping and admissions communication support.",
    price: "From £300 / case review",
    timeline: "3 days-8 weeks",
    tone: "navy",
    overview: "A structured advisory service for students who need a realistic UK or international application portfolio, a document checklist, a decision timeline and careful admissions-facing communication before applying.",
    process: ["Student profile intake and consent check", "Country, institution and programme screening", "Transcript, grading-scale and document gap review", "Application plan, priority list and deadline map", "Submission support, admissions enquiry or professional referral where needed"],
    deliverables: ["Application route plan", "Course shortlist", "Document checklist", "Module / course mapping notes", "Personal statement planning notes"],
    showcase: ["UK undergraduate advanced-entry file", "CFAU / international programme document pack", "UK master's portfolio", "UCAS / direct application checklist"],
    pricing: ["Initial case review: from £300", "Full application planning: from £850", "Multi-country portfolio: quoted by scope"]
  },
  {
    code: "08",
    title: "Executive Education & Training",
    titleZh: "高管教育與機構培訓",
    slug: "executive-education-training",
    type: "Training programme",
    audience: "Companies, schools, public bodies and education institutions commissioning short courses or staff development.",
    audienceZh: "面向委託短課程或員工發展項目的企業、學校、公共機構與教育機構。",
    desc: "Bespoke workshops, bilingual training packs, executive briefings and learning materials.",
    descZh: "定制工作坊、雙語培訓包、高管簡報與學習材料。",
    shortDesc: "Bespoke workshops and bilingual professional training materials.",
    cardDesc: "Executive education and institutional training design for education, management, communication and market-entry topics.",
    price: "From £950 / workshop",
    timeline: "2-8 weeks",
    tone: "green",
    overview: "A bespoke training service for organisations needing short, focused and bilingual professional learning sessions.",
    process: ["Training needs analysis", "Learning outcomes and audience design", "Slide and workbook production", "Workshop delivery", "Feedback and follow-up resources"],
    deliverables: ["Training outline", "Slide deck", "Workbook or handout", "Attendance and feedback summary"],
    showcase: ["Education market briefing", "Admissions staff workshop", "Academic English CPD", "Cross-border communication training"],
    pricing: ["Half-day workshop: from £950", "Full-day workshop: from £1,650", "Programme series: quoted by schedule"]
  },
  {
    code: "09",
    title: "Research & Policy Briefing",
    titleZh: "研究與政策簡報",
    slug: "research-policy-briefing",
    type: "Research briefing",
    audience: "Institutions, investors, education groups and professional teams requiring concise education-sector intelligence.",
    audienceZh: "面向需要教育行業情報的機構、投資方、教育集團與專業團隊。",
    desc: "Desk research, policy context, market notes and bilingual briefing documents.",
    descZh: "案頭研究、政策語境、市場筆記與雙語簡報文件。",
    shortDesc: "Concise education-sector research and bilingual briefing papers.",
    cardDesc: "Research and policy briefing support for education-sector decisions, market context and institutional planning.",
    price: "From £650 / briefing",
    timeline: "1-3 weeks",
    tone: "rose",
    overview: "A research service for clients who need a compact, evidence-aware briefing rather than a long consultancy report.",
    process: ["Research question definition", "Source and policy scan", "Market and stakeholder notes", "Brief drafting", "Editorial review and presentation"],
    deliverables: ["Briefing note", "Source list", "Executive summary", "Optional slide version"],
    showcase: ["UK education market note", "Australia entry briefing", "Policy context memo", "Competitor scan"],
    pricing: ["Short briefing: from £650", "Research memo: from £1,200", "Briefing deck: quoted by scope"]
  },
  {
    code: "10",
    title: "Digital Learning & Assessment Tools",
    titleZh: "數字學習與測評工具",
    slug: "digital-learning-assessment-tools",
    type: "Digital learning product",
    audience: "Schools, centres, tutors and education companies building learning apps, quizzes or placement tools.",
    audienceZh: "面向建設學習應用、測驗或分級工具的學校、中心、教師與教育公司。",
    desc: "Learning app prototypes, question banks, placement tools and bilingual practice systems.",
    descZh: "學習應用原型、題庫、分級工具與雙語練習系統。",
    shortDesc: "Learning app prototypes, question banks and placement tools.",
    cardDesc: "Digital learning and assessment tool design for tutoring, language practice, placement review and course support.",
    price: "From £1,800 / prototype",
    timeline: "3-10 weeks",
    tone: "teal",
    overview: "A product-development service for education teams that need a focused learning tool, quiz bank or review workflow.",
    process: ["Learning objective map", "Question or content model", "Prototype structure", "Interface and content build", "Pilot feedback and iteration"],
    deliverables: ["Prototype page or app", "Question bank sample", "Tutor guidance notes", "Testing and improvement log"],
    showcase: ["Placement interview practice", "Vocabulary review tool", "Course quiz system", "Tutor dashboard concept"],
    pricing: ["Prototype: from £1,800", "Question bank build: from £900", "Custom app: quoted by feature set"]
  },
  {
    code: "11",
    title: "Institutional Market Entry",
    titleZh: "機構市場進入支持",
    slug: "institutional-market-entry",
    type: "Market entry support",
    audience: "Education companies, colleges, training providers and international partners entering UK or Australian markets.",
    audienceZh: "面向進入英國或澳洲市場的教育公司、學院、培訓機構與國際合作方。",
    desc: "Positioning, partner mapping, local evidence and service-package preparation.",
    descZh: "定位、合作方映射、本地證據與服務包準備。",
    shortDesc: "Market-entry positioning and partner development support.",
    cardDesc: "Institutional market-entry support for education organisations expanding into the UK, Australia or cross-border provision.",
    price: "From £2,800 / entry plan",
    timeline: "4-12 weeks",
    tone: "slate",
    overview: "A strategic support service for education providers that need local-market positioning, partner logic and credible documentation.",
    process: ["Market and objective review", "Service and competitor positioning", "Partner and stakeholder map", "Document pack preparation", "Action plan and next-step coordination"],
    deliverables: ["Market-entry note", "Partner target list", "Institutional profile pack", "Action roadmap"],
    showcase: ["Australia sponsorship preparation", "UK education partner deck", "Institutional capability profile", "Cross-border service map"],
    pricing: ["Entry plan: from £2,800", "Partner pack: from £1,500", "Ongoing development support: retainer"]
  },
  {
    code: "12",
    title: "Compliance File & Audit Copy",
    titleZh: "合規文件與審核副本",
    slug: "compliance-file-audit-copy",
    type: "Evidence file production",
    audience: "Education providers, companies and private clients preparing structured evidence for accountants, auditors or professional advisers.",
    audienceZh: "面向為會計師、審核方或專業顧問準備結構化證據的教育機構、公司與私人客戶。",
    desc: "Document indexing, audit-copy preparation, transaction narratives and evidence-bundle formatting.",
    descZh: "文件索引、審核副本、交易敘事與證據包排版。",
    shortDesc: "Structured evidence packs for audit, finance and adviser review.",
    cardDesc: "Compliance file and audit-copy preparation for education, publishing, finance and institutional evidence bundles.",
    price: "From £750 / evidence pack",
    timeline: "3 days-4 weeks",
    tone: "gold",
    overview: "A document-production service for clients who need evidence organised into a clear file with narrative, index and audit-copy formatting.",
    process: ["Evidence intake", "Document indexing", "Transaction or case narrative", "Audit-copy formatting", "Final bundle and gap list"],
    deliverables: ["Evidence index", "Audit-copy PDF bundle", "Narrative memo", "Gap and follow-up list"],
    showcase: ["Tuition income evidence pack", "Director-loan evidence file", "Student case archive", "Professional adviser bundle"],
    pricing: ["Evidence pack: from £750", "Complex multi-account bundle: quoted by volume", "Monthly filing support: retainer"]
  }
];

function serviceDetailPage(service) {
  const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
  const universityApplicationExtras = service.slug === "university-application-advisory" ? `
            <section>
              <div class="eyebrow">UK Admissions Scope</div>
              <h2>UK application routes covered</h2>
              <div class="service-detail-grid">
                <div>Undergraduate UCAS planning</div>
                <div>Direct applications and enquiries</div>
                <div>Year 2 / advanced-entry review</div>
                <div>Postgraduate taught applications</div>
                <div>Top-up and progression screening</div>
                <div>Offer-condition follow-up</div>
              </div>
            </section>
            <section>
              <div class="eyebrow">Document Control</div>
              <h2>Admissions-facing file preparation</h2>
              <p>OTC organises student evidence into a clear application file: transcript, grading scale, English evidence, CV, personal statement notes, references, course descriptions, module mapping, document index and admissions questions. Where documents are not in English, OTC checks whether certified translation, original-language copies or institutional confirmation may be required.</p>
              <p class="source-note">OTC does not falsify documents, inflate academic claims, write assessed work, guarantee offers or provide immigration advice. Final admission, credit, advanced standing and visa decisions remain with the university or relevant authority.</p>
            </section>
            <section>
              <div class="eyebrow">Institutional Links</div>
              <h2>For university teams and partners</h2>
              <div class="service-showcase">
                <article><span>Partner page</span><strong><a href="/university-partnerships/">University Agent & Institutional Cooperation</a></strong></article>
                <article><span>Standards</span><strong><a href="/application-service-standards/">Application Service Standards</a></strong></article>
                <article><span>Special route</span><strong><a href="/advanced-entry-china-programmes/">Advanced Entry & China Programme Support</a></strong></article>
              </div>
            </section>
  ` : "";
  return pageShell({
    title: `${service.title} | OTC Services`,
    current: "services",
    description: service.cardDesc,
    path: `/services/${service.slug}/`,
    body: `
      <section class="page-hero services-hero"><div class="band"><div class="eyebrow">OTC Service / ${service.code}</div><h1>${service.title}</h1><h2>${service.titleZh}</h2><p class="hero-sub">${service.cardDesc}</p><p class="hero-sub-zh" lang="zh-Hant">${service.descZh}</p></div></section>
      <main class="band service-detail">
        <a class="back-link" href="/services/">Back to all services</a>
        <div class="service-detail-layout">
          <aside class="service-detail-panel">
            <span>${service.type}</span>
            <strong>${service.price}</strong>
            <em>${service.timeline}</em>
            <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Service enquiry - " + service.title)}">Buy / enquire</a>
            <a class="btn btn-light" href="/consultation-chat/?source=services&service=${encodeURIComponent(service.title)}">Ask OTC first</a>
          </aside>
          <article class="service-detail-body">
            <section>
              <div class="eyebrow">Service Overview</div>
              <h2>What this service does</h2>
              <p>${service.overview}</p>
              <p lang="zh-Hant">${service.audienceZh}</p>
            </section>
            <section>
              <div class="eyebrow">Workflow</div>
              <h2>Process</h2>
              <ol class="service-steps">${list(service.process)}</ol>
            </section>
            <section>
              <div class="eyebrow">Outputs</div>
              <h2>Deliverables</h2>
              <div class="service-detail-grid">${service.deliverables.map((item) => `<div>${item}</div>`).join("")}</div>
            </section>
            ${universityApplicationExtras}
            <section>
              <div class="eyebrow">Portfolio</div>
              <h2>Example finished work</h2>
              <div class="service-showcase">${service.showcase.map((item) => `<article><span>Sample</span><strong>${item}</strong></article>`).join("")}</div>
            </section>
            <section>
              <div class="eyebrow">Fees</div>
              <h2>Indicative pricing</h2>
              <ul class="service-price-list">${list(service.pricing)}</ul>
              <p class="source-note">Final fees depend on document volume, urgency, risk level, meeting time, third-party costs and whether certified/legal/regulatory professionals are required.</p>
            </section>
          </article>
        </div>
      </main>
    `
  });
}

const services = pageShell({
  title: "Services | OTC Study Hub",
  current: "services",
  description: "OTC institutional services including UK university application advisory, premium translation, publishing, academic guardianship, education fairs and accreditation support.",
  path: "/services/",
  body: `
    <section class="page-hero services-hero"><div class="band"><div class="eyebrow">OTC Services</div><h1>Institutional Services</h1><p class="hero-sub">Specialist education, university application, publishing and bilingual advisory services for institutions, academic teams, families and private clients.</p></div></section>
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Service Portfolio</div>
        <h2>Select a service to view scope, workflow, deliverables and fees.</h2>
      </div>
      ${serviceCards()}
    </section>
  `
});

const applicationServiceStandards = pageShell({
  title: "Application Service Standards | OTC Study Hub",
  current: "applications",
  description: "OTC student application service standards for UK university admissions support, document authenticity, consent, data protection, academic integrity and service boundaries.",
  path: "/application-service-standards/",
  body: `
    <section class="page-hero application-hero"><div class="band"><div class="eyebrow">Application Standards</div><h1>Student Application Service Standards</h1><p>How OTC manages university application files, student consent, document checks and admissions-facing communication.</p></div></section>
    <main class="band application-standards">
      <div class="notice">These standards describe OTC's education coordination and admissions-support process. They do not replace university admissions rules, UCAS rules, UKVI rules, legal advice, immigration advice or the final judgement of any external institution.</div>
      <div class="standards-grid">
        <article><b>01</b><h2>Student Consent</h2><p>OTC works from the student's instructions and keeps a clear record of who may receive updates: student, parent, school, agent partner or university contact. Where a university requires the student to submit directly or confirm authorisation, OTC follows that route.</p></article>
        <article><b>02</b><h2>Document Authenticity</h2><p>Students are asked to provide original or official-source academic documents where available. OTC does not create, alter or endorse false transcripts, certificates, references, English scores, rankings, attendance records or employment evidence.</p></article>
        <article><b>03</b><h2>Data Protection</h2><p>Application files may contain passports, transcripts, references, scores and family information. OTC limits access to staff or advisers involved in the case, shares documents only for the agreed purpose, and asks clients to avoid sending unnecessary sensitive data.</p></article>
        <article><b>04</b><h2>Academic Integrity</h2><p>OTC may help students understand requirements, plan personal statements, organise evidence and improve English expression. OTC does not write assessed work, impersonate students, sit tests, complete assignments or misrepresent authorship.</p></article>
        <article><b>05</b><h2>Admissions Boundaries</h2><p>OTC can provide eligibility screening and application coordination, but cannot guarantee admission, scholarship, credit transfer, advanced standing, visa outcomes, accommodation, professional registration or appeal success.</p></article>
        <article><b>06</b><h2>Communication Records</h2><p>For complex cases, OTC keeps an internal communication trail covering document requests, admissions questions, deadlines, offer conditions and follow-up actions. This protects the student and gives university teams a cleaner enquiry history.</p></article>
      </div>
      <section class="standards-process">
        <div class="section-head compact-head">
          <div class="eyebrow">Workflow</div>
          <h2>Standard application file workflow</h2>
        </div>
        <ol class="service-steps">
          <li>Initial student profile and target-route discussion.</li>
          <li>Consent, contact route and service-scope confirmation.</li>
          <li>Document intake: transcript, grading scale, English score, CV, personal statement notes, references and course evidence.</li>
          <li>Eligibility screening against current university pages and admissions instructions.</li>
          <li>Document gap list, file naming and application timeline.</li>
          <li>Application support, direct admissions enquiry, UCAS/direct submission preparation or referral where needed.</li>
          <li>Offer-condition tracking and next-step planning.</li>
        </ol>
      </section>
      <div class="application-link-strip">
        <a class="btn btn-dark" href="/university-applications/#otc-apply-form">Start application screening</a>
        <a class="btn btn-light" href="/advanced-entry-china-programmes/">Advanced entry support</a>
        <a class="btn btn-light" href="/university-partnerships/">University partnerships</a>
      </div>
    </main>
  `
});

const advancedEntryChinaProgrammes = pageShell({
  title: "Advanced Entry & China Programme Support | OTC Study Hub",
  current: "applications",
  description: "OTC support for students from Chinese university international programmes seeking UK Year 2, top-up or advanced-entry review, including transcript, module and course-mapping evidence.",
  path: "/advanced-entry-china-programmes/",
  body: `
    <section class="page-hero application-hero"><div class="band"><div class="eyebrow">Advanced Entry</div><h1>Advanced Entry & China Programme Support</h1><p>Support for students from Chinese university international programmes who need UK Year 2, top-up or advanced-entry review.</p></div></section>
    <main class="band">
      <div class="section-head">
        <h2>Turning a Chinese academic record into a UK admissions-ready file.</h2>
        <p>Some students have completed one or more years in China, an international undergraduate programme, a pathway route, an HND, OTHM or another external qualification. OTC prepares the evidence layer that helps receiving universities decide whether they can consider direct entry, advanced standing or a suitable alternative route.</p>
      </div>
      <div class="advanced-entry-map">
        <article><span>Student route</span><strong>CFAU / IBP and similar programmes</strong><p>Current university, programme title, year completed, teaching language, modules, credits, marks and intended UK subject are organised before any university enquiry.</p></article>
        <article><span>Academic evidence</span><strong>Transcript and grading context</strong><p>OTC checks whether the file includes transcript, grading scale, ranking/GPA explanation, course descriptions, teaching schedule and high-school records where useful.</p></article>
        <article><span>Mapping work</span><strong>Module and subject comparison</strong><p>Modules are grouped by subject area, level, learning focus and relevance to the target UK course. Gaps are flagged rather than hidden.</p></article>
        <article><span>Admissions use</span><strong>Clean enquiry pack</strong><p>The final pack can support an admissions pre-check, direct-entry enquiry, Year 2 application question or alternative route discussion.</p></article>
      </div>
      <section class="standards-process">
        <div class="section-head compact-head">
          <div class="eyebrow">Evidence Pack</div>
          <h2>Typical advanced-entry document pack</h2>
        </div>
        <div class="service-detail-grid">
          <div>Student profile and target course list</div>
          <div>Official or source transcript</div>
          <div>English translation or certified-translation route check</div>
          <div>Course descriptions and module summaries</div>
          <div>Credit / contact-hour / assessment notes where available</div>
          <div>High-school academic record if requested</div>
          <div>English-language evidence</div>
          <div>Academic reference and CV</div>
        </div>
      </section>
      <div class="notice">Advanced entry is always discretionary. OTC can prepare a strong evidence file and admissions question, but the receiving university decides whether Year 2, top-up, credit recognition, alternative entry or standard Year 1 entry is possible.</div>
      <div class="application-link-strip">
        <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Advanced%20Entry%20Review%20Enquiry">Request advanced-entry review</a>
        <a class="btn btn-light" href="/application-service-standards/">Read standards</a>
      </div>
    </main>
  `
});

const universityPartnerships = pageShell({
  title: "University Agent & Institutional Cooperation | OTC Study Hub",
  current: "applications",
  description: "OTC institutional cooperation page for universities, admissions teams and international offices reviewing OTC as a representative or application-support partner.",
  path: "/university-partnerships/",
  body: `
    <section class="page-hero application-hero"><div class="band"><div class="eyebrow">Institutional Cooperation</div><h1>University Agent & Institutional Cooperation</h1><p>For university admissions teams, international offices and partner managers reviewing OTC's application-support capability.</p></div></section>
    <main class="band">
      <div class="institutional-brief">
        <div>
          <div class="eyebrow">OTC Position</div>
          <h2>UK-based education coordination for Chinese and international students.</h2>
          <p>Overseas Tutorial Centre Ltd supports students and families with education-route planning, university application preparation, bilingual document organisation, transcript review, course mapping, English-readiness planning and admissions communication. OTC is interested in formal university representative arrangements where the institution's policies, training, data rules and admissions processes can be followed properly.</p>
          <p>Unless a written institutional agreement says otherwise, references to universities on this website are contextual application information and do not imply endorsement, official partnership or guaranteed admission.</p>
        </div>
        <aside>
          <strong>Overseas Tutorial Centre Ltd</strong>
          <span>London, United Kingdom</span>
          <span>Company No. 11060519</span>
          <span>3/F Overseas Education, 207 Regent Street, London W1B 3HH</span>
          <a href="mailto:office@overseasuk.com?subject=University%20Representative%20Cooperation">office@overseasuk.com</a>
        </aside>
      </div>
      <div class="standards-grid">
        <article><b>01</b><h2>Recruitment Support</h2><p>Student enquiry handling, course screening, document checklist preparation, admissions question drafting and offer-condition follow-up.</p></article>
        <article><b>02</b><h2>China Programme Cases</h2><p>Repeated demand from students in Chinese university international programmes who need UK Year 2, top-up, direct-entry or alternative-route advice.</p></article>
        <article><b>03</b><h2>Document Discipline</h2><p>Structured student files, version control, transcript translation checks, module mapping and clear distinction between source evidence and adviser notes.</p></article>
        <article><b>04</b><h2>Compliance Boundary</h2><p>No false documents, no guarantee claims, no immigration advice unless referred to a qualified adviser, and no implication of official university relationship without written permission.</p></article>
        <article><b>05</b><h2>Operational Follow-up</h2><p>OTC can maintain enquiry logs, deadline reminders, missing-document lists, student/parent communication records and admissions-team follow-up notes.</p></article>
        <article><b>06</b><h2>Partner Readiness</h2><p>Where approved by a university, OTC can follow agent training, portal requirements, branding rules, data-protection obligations and reporting expectations.</p></article>
      </div>
      <section class="standards-process">
        <div class="section-head compact-head">
          <div class="eyebrow">Cooperation Request</div>
          <h2>What OTC would like to discuss with universities</h2>
        </div>
        <p>OTC would like to understand the university's official representative process, agent onboarding requirements, territory or student-category rules, training expectations, application portal process, data-protection requirements and whether advanced-entry pre-checks can be handled through a defined channel.</p>
        <div class="application-link-strip">
          <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=University%20Representative%20Cooperation">Contact OTC</a>
          <a class="btn btn-light" href="/assets/OTC_University_Representative_Capability_Statement_2026.pdf" target="_blank" rel="noopener">Download capability PDF</a>
          <a class="btn btn-light" href="/assets/OTC_University_Representative_Capability_Statement_2026.docx" target="_blank" rel="noopener">Download DOCX</a>
          <a class="btn btn-light" href="/application-service-standards/">Service standards</a>
          <a class="btn btn-light" href="/advanced-entry-china-programmes/">Advanced-entry capability</a>
        </div>
      </section>
    </main>
  `
});

const home = pageShell({
  title: "Overseas Tutorial Centre Ltd (OTC) | 海外督導 | UK Education Consulting",
  description: "Official website of Overseas Tutorial Centre Ltd (OTC) / 海外督導: UK education consulting, international curriculum tutoring, bilingual study guides, study apps and Overseas Publishing resources.",
  current: "home",
  body: `
    <section class="hero home-hero">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">Official Website · UK Education Consulting · Tutoring Apps · Publishing</div>
          <div class="hero-title-block">
            <h1>Overseas Tutorial Centre</h1>
            <h2 class="hero-subhead">海外督導</h2>
          </div>
          <p>Official OTC website for UK education consulting, international curriculum tutoring, study apps, bilingual study guides and Overseas Publishing resources.</p>
          <div class="hero-directory">
            <a href="/resources/"><strong>Consulting</strong><span>Pathway planning, applications, student and parent guidance</span></a>
            <a href="/university-applications/"><strong>Applications</strong><span>UK university applications, advanced entry, UCAS/direct and document planning</span></a>
            <a href="/study-group-2026-applications/"><strong>Study Group 2026</strong><span>July-December pathway and direct-entry application window</span></a>
            <a href="/services/"><strong>Services</strong><span>Translation, publishing, guardianship, academic events and institutional support</span></a>
            <a href="/courses/"><strong>Courses</strong><span>International curriculum tutoring, qualification pathways and learning plans</span></a>
            <a href="/apps/"><strong>Tools</strong><span>Speaking practice, mock tests, vocabulary review and tutor tools</span></a>
            <a href="/publishing/"><strong>Publishing</strong><span>Research publishing, study companions, digital products and author services</span></a>
            <a href="/insights/"><strong>Overseas Study Review</strong><span>留學導報：publishing-grade study-abroad briefings and bilingual pathway notes</span></a>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/university-applications/">UK Applications</a>
            <a class="btn btn-secondary" href="/study-group-2026-applications/">Study Group 2026</a>
            <a class="btn btn-secondary" href="/university-partnerships/">University Cooperation</a>
            <a class="btn btn-secondary" href="/application-service-standards/">Service Standards</a>
          </div>
        </div>
        <aside class="hero-panel">
          <div class="panel-label">Current Priority</div>
          <div class="hub-map">
            <div class="hub-item"><strong>UCBELT Speaking Preparation</strong><span>10 themed topic sets · 10 full mock sets · 640 bilingual vocabulary items.</span></div>
            <div class="hub-item"><strong>UK University Applications</strong><span>Undergraduate, postgraduate, advanced-entry and China programme document-pack support.</span></div>
            <div class="hub-item"><strong>Study Group 2026 Intake Window</strong><span>Selected UK, Europe and North America pathway and direct-entry routes for July-December 2026.</span></div>
            <div class="hub-item"><strong>A-Level / BTEC / IB / AP Bilingual Tutoring</strong><span>International-school support for Chinese EAL learners: concepts, writing, coursework and evaluation.</span></div>
            <div class="hub-item"><strong>OTHM Level 5 Business Management</strong><span>Six-unit course support and bilingual study companion series.</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Institutional Map</div>
        <h2>One public entrance for OTC's learning ecosystem.</h2>
        <p>Notion remains the operating desk. This site organises the public-facing layers for learners, parents, tutors and customers.</p>
      </div>
      <div class="index-grid">
        <article><b>01</b><strong>UK Applications</strong><span>Admissions advisory, document planning, advanced-entry screening and offer-condition follow-up.</span></article>
        <article><b>02</b><strong>University Cooperation</strong><span>Institutional representative discussions, partner readiness and admissions-team communication.</span></article>
        <article><b>03</b><strong>Consulting</strong><span>Study planning, university pathway notes, application explainers and family guidance.</span></article>
        <article><b>04</b><strong>Services</strong><span>Translation, publishing, guardianship, events, fairs and institutional support.</span></article>
        <article><b>05</b><strong>Courses</strong><span>International curriculum bilingual tutoring, qualification pathways and learning plans.</span></article>
        <article><b>06</b><strong>Publishing</strong><span>Bilingual study companions, public bookshop editions and live Payhip releases.</span></article>
      </div>
    </section>

    <section class="band curriculum-overview">
      <div class="section-head">
        <div class="eyebrow">International Curriculum Tutoring</div>
        <h2>Bilingual support for international-school courses.</h2>
        <p>OTC can support Chinese EAL learners taking A-Level, BTEC, IB, AP and related international curricula by connecting subject understanding with English academic output.</p>
      </div>
      <div class="curriculum-layout">
        <div class="curriculum-map">${internationalCurriculumCards(4)}</div>
        <aside class="curriculum-panel">
          <h3>From understanding to output</h3>
          <p>The focus is not ready-made answers. It is concept explanation, command-word reading, assignment planning, paragraph structure, evidence use and academic phrasing.</p>
          <div class="curriculum-tags">
            <span>雙語概念輔導</span>
            <span>Academic Writing</span>
            <span>Coursework Planning</span>
            <span>Essay Evaluation</span>
          </div>
          <a class="btn btn-dark" href="/international-curriculum-tutoring/">Open Curriculum Support</a>
        </aside>
      </div>
    </section>

    <section class="spotlight">
      <div class="band app-spotlight compact-band">
        <div class="app-screen">
          <div class="screen-title">
            <div class="eyebrow">Featured App</div>
            <h3>UCBELT Speaking Test Practice</h3>
            <p>Password-protected speaking practice with bilingual vocabulary training and teacher mode.</p>
          </div>
          <div class="screen-stat">
            <div><b>10</b><span>Speaking practice sets</span></div>
            <div><b>640</b><span>Bilingual vocabulary items</span></div>
            <div><b>5</b><span>Self-score bands</span></div>
            <div><b>7</b><span>Day practice plan</span></div>
          </div>
        </div>
        <div>
          <div class="section-head">
            <h2>From static notes to usable learning tools.</h2>
            <p>The UCBELT app combines practice questions, mock test flow, flashcards, quizzes, weak-word review and bilingual explanation.</p>
          </div>
          <div class="actions">
            <a class="btn btn-dark" href="/apps/ucbelt-speaking/#embedded-ucbelt-app">Launch Embedded App</a>
            <a class="btn btn-light" href="/apps/ucbelt-speaking/">View Product Page</a>
          </div>
          <p class="notice" style="margin-top:22px">Independent OTC practice resource. Not an official UCB publication, official test paper or guaranteed-score product.</p>
        </div>
      </div>
    </section>

    <section class="band compact-band premium-translation-section">
      <div class="section-head compact-head">
        <div class="eyebrow">Premium Translation</div>
        <h2>High-level Chinese-English translation and editorial support.</h2>
        <p>Premium bilingual translation, editing and context calibration for university applications, business records, legal-context documents, publishing manuscripts and high-stakes communications.</p>
      </div>
      <div class="translation-service-grid">
        <article>
          <b>01</b>
          <strong>Application and academic translation</strong>
          <span>Personal statements, CVs, reference materials, academic certificates, research plans and supporting statements.</span>
        </article>
        <article>
          <b>02</b>
          <strong>Business and compliance documents</strong>
          <span>Company profiles, source-of-funds narratives, director/shareholder background, cross-border business notes and review materials.</span>
        </article>
        <article>
          <b>03</b>
          <strong>Legal-context translation</strong>
          <span>Contracts, solicitor correspondence, transaction background, evidence notes and case timelines. Not legal advice.</span>
        </article>
        <article>
          <b>04</b>
          <strong>Publishing-grade bilingual editing</strong>
          <span>Research articles, education content, manuscripts, website copy, brand profiles and public-facing content.</span>
        </article>
      </div>
      <div class="translation-premium-note">
        <div>
          <strong>Delivery modes</strong>
          <p>Literal translation, contextual translation, UK academic tone, business tone, publishing tone or final pre-submission polish.</p>
        </div>
        <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Premium%20Chinese-English%20Translation%20Service%20Enquiry">Enquire</a>
      </div>
      <p class="source-note">Service boundary: OTC provides translation, editing, context organisation and English expression support. Certified translation, notarisation, legal advice or official certification must be checked separately and handled by the appropriate professional where required.</p>
    </section>

    <section class="band publishing-overview">
      <div class="section-head compact-head">
        <div class="eyebrow">Overseas Publishing</div>
        <h2>A publishing house structure with room to grow.</h2>
        <p>Overseas Publishing is organised as a long-term publishing programme, not only a PDF shop: publishing, editorial translation and the Overseas Study Review / 留學導報 sit under one public-facing editorial system.</p>
      </div>
      <div class="index-grid">
        <article><b>01</b><strong>出版</strong><span>Public bookshop editions, study guides, ISBN records, digital publication packages and Payhip/KDP release workflows.</span></article>
        <article><b>02</b><strong>編譯</strong><span>Chinese-English editorial translation, bilingual rewriting, source checking and context calibration for public-facing materials.</span></article>
        <article><b>03</b><strong>導報</strong><span>留學導報：study-abroad briefings, pathway updates, application notes and education-market commentary.</span></article>
      </div>
      <div style="height:28px"></div>
      <div class="publishing-layout">
        <div class="publishing-categories">${publishingLineCards()}</div>
        <aside class="series-shelf">
          <div class="shelf-head">
            <div>
              <div class="eyebrow">Payhip Live Series</div>
              <h3>OTHM Level 5 Business Management</h3>
              <p>Six first-edition single-unit bilingual study companions now available on Payhip</p>
            </div>
            <a href="/study-guides/">View all</a>
          </div>
          <div class="shelf-grid">${productShelf()}</div>
        </aside>
      </div>
    </section>
  `
});

const publishing = pageShell({
  title: "Overseas Publishing | OTC Study Hub",
  current: "publishing",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Overseas Publishing House</div><h1>Publishing</h1><p>A long-term publishing programme for academic research, bilingual education, practical guides, cultural translation, digital products and author services.</p></div></section>
    <section class="band compact-band media-channel-strip">
      <div class="section-head compact-head">
        <div class="eyebrow">Overseas Publishing Media</div>
        <h2>YouTube and podcast briefings for research-led publishing.</h2>
        <p>Notion is now kept as the raw editorial desk. Public-facing audio, video and shareable cultural commentary will sit on the Overseas Publishing media hub.</p>
      </div>
      <div class="media-channel-actions">
        <a class="btn btn-dark" href="/publishing/media/">Open Media Hub</a>
        <a class="btn btn-light" href="/publishing/media/#youtube-channel">YouTube Channel</a>
        <a class="btn btn-light" href="/publishing/media/#podcast-feed">Podcast Feed</a>
      </div>
    </section>
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Publishing · Editorial Translation · Review</div>
        <h2>Overseas Publishing House is organised around three public-facing series.</h2>
        <p>海外書局對外分為出版、編譯、導報三個核心板塊：出版承載正式書目與上架產品，編譯承載雙語轉寫與跨文化表達，留學導報承載可公開閱讀、可引用、可持續更新的留學與教育評論。</p>
      </div>
      <div class="index-grid">${publishingPillarCards()}</div>
    </section>
    <section class="band">
      <div class="section-head">
        <h2>Six editorial lines, one public catalogue.</h2>
        <p>This structure keeps the OTHM-related study guide catalogue transparent while live Payhip releases, research books, life guides, apps, translation projects and self-publishing services sit under one editorial system.</p>
      </div>
      <div class="publishing-categories publishing-categories-wide">${publishingLineCards()}</div>
      <div style="height:28px"></div>
      <div class="notice">Publishing status update: the six OTC OTHM Level 5 Business Management first-edition single-unit study companions are now live on Payhip, alongside the Foundation / Pathway study support titles. The OTC IH Placement & Interview Practice App is now available as a standalone Payhip downloadable app, and the OTC Australian Citizenship Test Practice Guide + Practice App package has been prepared for Payhip upload. OTC study companions and apps are independent educational resources and are not official awarding-body, institution or government publications.</div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Digital Products & Learning Apps</div>
            <h3>OTC IH Placement & Interview Practice App</h3>
            <p>Standalone downloadable HTML app package prepared for Payhip listing</p>
          </div>
          <a href="https://payhip.com/b/qABUa" target="_blank" rel="noopener">Buy on Payhip</a>
        </div>
        <div class="shelf-grid">
          <a class="shelf-book" href="/apps/ih-placement-interview/#embedded-ih-app">
            <span class="shelf-cover">
              <span>OTC</span>
              <strong>IH Placement & Interview Practice App</strong>
              <em>Payhip Live</em>
            </span>
            <span class="shelf-text">
              <b>Learning App</b>
              <strong>OTC IH Placement & Interview Practice App</strong>
              <small>A1-B2 placement quiz · vocabulary recognition · speaking interview practice · teacher mode</small>
            </span>
          </a>
          <a class="shelf-book" href="/ih-placement/">
            <span class="shelf-cover">
              <span>OTC</span>
              <strong>Public IH Placement Practice</strong>
              <em>Study Hub Live</em>
            </span>
            <span class="shelf-text">
              <b>Public App</b>
              <strong>IH Placement & Interview Practice</strong>
              <small>Browser-based public practice version available on OTC Study Hub</small>
            </span>
          </a>
        </div>
        <div style="height:18px"></div>
        <div class="notice">The Payhip downloadable app is now live at https://payhip.com/b/qABUa. It is an independent OTC practice product, not an official International House London publication, official placement test, official interview script or guaranteed-placement product.</div>
      </div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Australia Guide + App Package</div>
            <h3>OTC Australian Citizenship Test Practice Guide + Practice App</h3>
            <p>ISBN 978-1-0666440-7-0 · First Edition 2026 · Launch £5.99: printable bilingual PDF guide plus downloadable browser practice app prepared for Payhip release</p>
          </div>
          <a href="https://payhip.com/overseaspublishing" target="_blank" rel="noopener">Payhip store</a>
        </div>
        <div class="shelf-grid">
          <a class="shelf-book" href="/apps/australian-citizenship-test/#embedded-citizenship-app">
            <span class="shelf-cover">
              <span>OTC</span>
              <strong>Australian Citizenship Test Practice</strong>
              <em>Guide + App</em>
            </span>
            <span class="shelf-text">
              <b>Australia Digital Learning</b>
              <strong>OTC Australian Citizenship Test Practice Guide + Practice App</strong>
              <small>ISBN 978-1-0666440-7-0 · PDF guide · 300+ structured questions · unlimited mock practice</small>
            </span>
          </a>
          <a class="shelf-book" href="/citizenship-australia/">
            <span class="shelf-cover">
              <span>OTC</span>
              <strong>Australian Citizenship Practice App</strong>
              <em>Study Hub Live</em>
            </span>
            <span class="shelf-text">
              <b>Public App</b>
              <strong>Australian Citizenship Test Practice</strong>
              <small>Browser-based public practice version available on OTC Study Hub</small>
            </span>
          </a>
        </div>
        <div style="height:18px"></div>
        <div class="notice">Competitive positioning: ISBN-assigned First Edition 2026 with copyright page and compiler's preface by Xiao Heng. Unlike web-only quiz products or app-store-only subscriptions, this package combines a printable bilingual PDF guide with a local browser app for Chinese-speaking learners who need concept support before English test practice. It has been expanded beyond the common 250+ competitor benchmark to 300+ structured practice questions with unlimited random mock tests. No Australian Government endorsement is implied.</div>
      </div>
      <div style="height:28px"></div>
      <div class="series-shelf ebook-service-card">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Author Services</div>
            <h3>Ebook Publishing Support</h3>
            <p>Editorial production, bilingual typesetting, digital publication packaging and platform-ready metadata for institutional, academic and professional publishing projects.</p>
          </div>
          <a href="/publishing/ebook-publishing-support/">Service process</a>
        </div>
        <div class="ebook-service-steps">
          <span>01 Manuscript review</span>
          <span>02 Layout sample</span>
          <span>03 Ebook package</span>
          <span>04 Listing support</span>
        </div>
      </div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">New Payhip Releases</div>
            <h3>Foundation / Pathway Study Support</h3>
            <p>Independent bilingual learning resources for Level 3, foundation and pathway learners.</p>
          </div>
          <a href="https://payhip.com/overseaspublishing" target="_blank" rel="noopener">Payhip store</a>
        </div>
        <div class="shelf-grid">
          <a class="shelf-book" href="https://payhip.com/b/1Xw0z" target="_blank" rel="noopener">
            <span class="shelf-cover">
              <span>OPH</span>
              <strong>Level 3 Foundation HES: Independent Bilingual Study Guide</strong>
              <em>Payhip Live</em>
            </span>
            <span class="shelf-text">
              <b>Study Guide</b>
              <strong>Level 3 Foundation HES: Independent Bilingual Study Guide</strong>
              <small>Independent bilingual study companion · Payhip live</small>
            </span>
          </a>
          <a class="shelf-book" href="https://payhip.com/b/bvwOz" target="_blank" rel="noopener">
            <span class="shelf-cover">
              <span>OPH</span>
              <strong>Foundation / Pathway Weekly Supplementary Practice Workbook</strong>
              <em>Payhip Live</em>
            </span>
            <span class="shelf-text">
              <b>Workbook</b>
              <strong>Foundation / Pathway Weekly Supplementary Practice Workbook</strong>
              <small>Weekly practice, vocabulary and foundation study support · Payhip live</small>
            </span>
          </a>
        </div>
        <div style="height:18px"></div>
        <div class="notice">These are independent Overseas Publishing House / OTC educational support materials. They are not official awarding-body publications, official assessment documents, model answers or guaranteed-progression products.</div>
      </div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Planned Health & Care Series</div>
            <h3>OTHM Health & Social Care Bilingual Study Series</h3>
            <p>《OTHM 健康護理雙語精講》規劃覆蓋 Level 3 至 Level 7，連接英國 OTHM 學習、澳洲健康護理路線與職業轉型讀者。</p>
          </div>
          <a href="/publishing/othm-health-social-care-bilingual-series/">Series plan</a>
        </div>
        <div class="shelf-grid">
          <a class="shelf-book" href="/publishing/othm-health-social-care-bilingual-series/">
            <span class="shelf-cover">
              <span>OPH</span>
              <strong>OTHM Health & Social Care Bilingual Study Series</strong>
              <em>Planned 2026</em>
            </span>
            <span class="shelf-text">
              <b>Health & Care Publishing</b>
              <strong>Level 3-7 bilingual study companions</strong>
              <small>中英對照 · assignment framework · health terminology · Australia VET / university pathway notes</small>
            </span>
          </a>
          <a class="shelf-book" href="/australia/">
            <span class="shelf-cover">
              <span>OTC</span>
              <strong>Australia Health Pathways</strong>
              <em>Route Map</em>
            </span>
            <span class="shelf-text">
              <b>Pathway Context</b>
              <strong>Australia health, VET and university route map</strong>
              <small>OTHM 補強、澳洲 VET、AHPRA / ANMAC / NMBA 邊界與院校初篩入口</small>
            </span>
          </a>
        </div>
        <div style="height:18px"></div>
        <div class="notice">Series status: planning and tutor-resource preparation. These study companions will be independent Overseas Publishing House learning resources and will not be official OTHM specifications, assessment briefs, model answers or awarding-body publications.</div>
      </div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Education & Study Companions</div>
            <h3>OTHM Level 5 Business Management</h3>
            <p>Six first-edition single-unit bilingual study companions · Payhip live</p>
          </div>
          <a href="/study-guides/">Full catalogue</a>
        </div>
        <div class="shelf-grid shelf-grid-wide">${productShelf()}</div>
      </div>
    </section>
  `
});

const publishingMedia = pageShell({
  title: "Overseas Publishing Media | YouTube & Podcast",
  current: "publishing",
  description: "Overseas Publishing media hub for YouTube briefings, podcast audio, NotebookLM Audio Overview source packs and cultural translation commentary.",
  body: `
    <section class="page-hero media-hero">
      <div class="band">
        <div class="eyebrow">Overseas Publishing Media</div>
        <h1>YouTube & Podcast</h1>
        <p>Public-facing audio and video briefings for Overseas Publishing House: literary commentary, translation notes, study-guide explainers and research-led cultural conversations.</p>
        <div class="hero-actions media-hero-actions">
          <a class="btn btn-primary" href="#youtube-channel">YouTube Channel</a>
          <a class="btn btn-secondary" href="#podcast-feed">Podcast Feed</a>
          <a class="btn btn-secondary" href="#notebooklm-audio">NotebookLM Audio Pack</a>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="media-launch-grid">
        <article id="youtube-channel" class="media-launch-card">
          <span class="media-icon">YT</span>
          <div>
            <div class="eyebrow">Channel Button</div>
            <h2>YouTube: Overseas Office</h2>
            <p>Channel identity: Overseas Office, office@overseasuk.com. Use this button as the public YouTube entry once the channel URL or handle is confirmed in YouTube Studio. The first upload is planned as a NotebookLM-assisted audio briefing with a static cover image.</p>
            <div class="media-button-row">
              <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Overseas%20Office%20YouTube%20channel%20link">Bind channel link</a>
              <a class="btn btn-light" href="#episode-001">Episode 001</a>
            </div>
          </div>
        </article>

        <article id="podcast-feed" class="media-launch-card">
          <span class="media-icon">RSS</span>
          <div>
            <div class="eyebrow">Podcast Button</div>
            <h2>Podcast: Overseas Publishing Audio</h2>
            <p>The podcast feed will carry concise bilingual audio briefings. NotebookLM audio overviews can be used as draft audio, then edited, titled and uploaded with a clean cover asset.</p>
            <div class="media-button-row">
              <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Overseas%20Publishing%20Podcast%20feed">Request podcast feed</a>
              <a class="btn btn-light" href="#production-workflow">Production workflow</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="episode-001" class="band media-episode-band">
      <div class="media-episode-layout">
        <div>
          <div class="eyebrow">Episode 001 · NotebookLM Audio Brief</div>
          <h2>《臺灣漫遊錄》如何成為世界文學事件？</h2>
          <p>A short audio briefing on Taiwan Travelogue, pseudo-translation, colonial memory and why a Taiwanese novel can travel across languages without becoming only a prize story.</p>
          <div class="media-meta-list">
            <span>Status: source pack ready</span>
            <span>Format: NotebookLM audio overview + edited upload</span>
            <span>Use: YouTube static-cover video / podcast episode</span>
          </div>
          <div class="media-button-row">
            <a class="btn btn-dark" href="/assets/social/overseas-publishing-podcast-taiwan-travelogue.png">Open cover art</a>
            <a class="btn btn-light" href="#notebooklm-audio">View source pack</a>
          </div>
        </div>
        <img src="/assets/social/overseas-publishing-podcast-taiwan-travelogue.png" alt="Overseas Publishing podcast cover for Taiwan Travelogue audio briefing">
      </div>
    </section>

    <section id="notebooklm-audio" class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">NotebookLM Production Pack</div>
        <h2>Use NotebookLM to generate the draft audio, then publish as an edited media item.</h2>
        <p>The working sources are kept outside the public page. Upload the source brief into NotebookLM, generate an Audio Overview, review the output, then publish only the approved audio and cover asset.</p>
      </div>
      <div class="workflow-grid">
        <article><b>01</b><strong>Prepare sources</strong><span>Use the local source brief and any approved article drafts. Keep internal notes out of the public notebook.</span></article>
        <article><b>02</b><strong>Generate audio</strong><span>Create an Audio Overview in NotebookLM. Use the account language settings and review the generated discussion before publishing.</span></article>
        <article><b>03</b><strong>Edit metadata</strong><span>Title, short description, disclaimers, cover art and episode notes are prepared before upload.</span></article>
        <article><b>04</b><strong>Upload</strong><span>Publish to YouTube as a podcast-style static-cover video, then mirror to the podcast feed when available.</span></article>
      </div>
    </section>

    <section id="production-workflow" class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Release Standard</div>
        <h2>Public media, private sources.</h2>
        <p>Notion preserves raw working drafts. Public media should only use cleared source text, confirmed facts, non-sensitive descriptions and platform-ready metadata.</p>
      </div>
      <div class="notice">NotebookLM audio should be treated as draft production material, not as an automatically publishable final recording. Check names, awards, dates, attributions, privacy issues and copyright before uploading.</div>
    </section>
  `
});

const ebookPublishingSupport = pageShell({
  title: "Ebook Publishing Support | Overseas Publishing House | OTC",
  description: "Overseas Publishing House helps authors prepare ebook and PDF publication packages, including manuscript review, bilingual layout, cover preparation, Payhip or KDP listing assets and publication workflow guidance.",
  current: "publishing",
  path: "/publishing/ebook-publishing-support/",
  body: `
    <main class="ebook-support-page">
    <section class="page-hero ebook-service-hero"><div class="band"><div class="eyebrow">Overseas Publishing House</div><h1>Ebook Publishing Support</h1><p>面向教育機構、研究團隊、專業作者與公共文化項目的數字出版製作服務，涵蓋編輯結構整理、雙語版式設計、PDF / ebook 出版包、封面系統與平台上架元資料準備。</p></div></section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Service Positioning</div>
        <h2>From editorial manuscript to publication-grade digital edition.</h2>
        <p>OTC Overseas Publishing House supports disciplined editorial production for academic, educational and professional materials: structuring the manuscript, establishing a clear typographic system, preparing digital publication files and documenting the release workflow.</p>
      </div>
      <div class="index-grid ebook-service-grid">
        <article><b>01</b><strong>Manuscript review</strong><span>Check manuscript type, language, length, image/table needs, target reader and intended platform.</span></article>
        <article><b>02</b><strong>Structure & editing plan</strong><span>整理章節、前言、目錄、作者簡介、版權頁、免責聲明與必要的中英文出版信息。</span></article>
        <article><b>03</b><strong>Layout sample</strong><span>Prepare a short sample layout so the author can confirm typography, spacing, heading hierarchy and bilingual style.</span></article>
        <article><b>04</b><strong>Ebook production</strong><span>Prepare the full PDF / ebook package with consistent typography, page structure, cover placement and export settings.</span></article>
        <article><b>05</b><strong>Listing assets</strong><span>Draft product title, subtitle, description, category notes, author bio, preview image and Payhip / KDP upload checklist.</span></article>
        <article><b>06</b><strong>Publication handover</strong><span>Provide final files, change notes and a simple launch checklist for pricing, preview, test purchase and announcement.</span></article>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">What Authors Can Send First</div>
        <h2>A small document pack is enough to start.</h2>
      </div>
      <div class="resource-list">
        <article class="resource-row"><div><h3>Current manuscript</h3><p>Word, Google Doc, Markdown or PDF draft. Half-written manuscripts are acceptable for first-stage planning.</p></div><span class="pill">Required</span></article>
        <article class="resource-row"><div><h3>Book intention</h3><p>Tell us whether the book is educational, practical, memoir, research, bilingual, workbook, guidebook or another format.</p></div><span class="pill">Required</span></article>
        <article class="resource-row"><div><h3>Reference style</h3><p>Any sample books, typography preferences, cover ideas or platform examples that show the intended reader experience.</p></div><span class="pill">Useful</span></article>
        <article class="resource-row"><div><h3>Timeline and platform</h3><p>Expected launch date and whether the author wants Payhip, Amazon KDP, PDF private sale or another ebook route.</p></div><span class="pill">Useful</span></article>
      </div>
    </section>

    <section class="band compact-band">
      <div class="two-col">
        <div class="about-panel surface">
          <div class="eyebrow">Scope</div>
          <h3>What OTC can help with</h3>
          <ul>
            <li>Book structure, chapter hierarchy and reader flow</li>
            <li>Chinese / English / bilingual PDF layout</li>
            <li>Cover direction, title page, copyright page and imprint notes</li>
            <li>Payhip product description and sales-page copy</li>
            <li>KDP-ready checklist and guide file preparation support</li>
            <li>Basic publication workflow and post-launch update planning</li>
          </ul>
        </div>
        <div class="about-panel surface">
          <div class="eyebrow">Boundaries</div>
          <h3>What this service is not</h3>
          <ul>
            <li>It is not a guaranteed bestseller or guaranteed sales service.</li>
            <li>It is not legal advice, tax advice or copyright dispute representation.</li>
            <li>It does not replace professional proofreading where a book needs formal copyediting.</li>
            <li>It does not promise platform approval where Payhip, KDP or another platform applies its own rules.</li>
          </ul>
        </div>
      </div>
      <div class="notice">Overseas Publishing House provides editorial production and digital-publication preparation services. Final content responsibility, rights clearance, institutional approvals and platform decisions remain with the author, commissioning body or rights holder.</div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Contact</div>
        <h2>Send a short brief before sharing the full manuscript.</h2>
        <p>Please include book type, current word count or page count, language, target platform and intended launch timing.</p>
      </div>
      <div class="actions">
        <a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=Ebook%20Publishing%20Support%20Enquiry">Email OTC</a>
        <a class="btn btn-secondary" href="/publishing/">Back to Publishing</a>
      </div>
    </section>
    </main>
  `
});

const guides = pageShell({
  title: "Study Guides | OTC Study Hub",
  current: "publishing",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Overseas Publishing</div><h1>Study Guides</h1><p>Independent bilingual study companions for business-management learners. The six OTC OTHM Level 5 Business Management first-edition single-unit guides are now live on Payhip.</p></div></section>
    <section class="band">
      <div class="notice">Series status: six OTHM Level 5 Diploma in Business Management single-unit study companions are live on Payhip with assigned ISBN records. Publishing compliance: OTC study companions are independent learning resources and do not represent official OTHM publication status, official assessment documents, model answers or guaranteed-outcome products.</div>
      <div style="height:28px"></div>
      <article class="resource-row">
        <div>
          <div class="meta">Publishing Planning Column · Health & Social Care</div>
          <h3>《OTHM 健康護理雙語精講》</h3>
          <p>Level 3-7 bilingual study-guide series planning column, including market research, five-book roadmap, health terminology, assignment frameworks, Australia pathway notes, distribution channels and compliance boundaries.</p>
        </div>
        <a class="btn btn-dark" href="/publishing/othm-health-social-care-bilingual-series/">Open Planning Column</a>
      </article>
      <div style="height:28px"></div>
      <div class="product-grid">${productCards()}</div>
    </section>
  `
});

const othmHealthSocialCareBilingualSeries = pageShell({
  title: "OTHM Health & Social Care Bilingual Study Series | Overseas Publishing House | OTC",
  description: "Overseas Publishing House publishing-planning column for the OTHM Health and Social Care bilingual study companion series, covering market research, five-book roadmap, distribution channels and compliance boundaries.",
  current: "publishing",
  path: "/publishing/othm-health-social-care-bilingual-series/",
  body: `
    <main class="health-series-page">
    <section class="page-hero health-series-hero"><div class="band"><div class="eyebrow">Overseas Publishing House · 2026 Editorial Proposal</div><h1>OTHM 健康護理雙語書系</h1><p>《OTHM 健康護理雙語精講》是一套面向 Level 3 至 Level 7 學習者的 academic study companion series，重點處理資格框架、專業術語、評核語言、英澳升學銜接及職業資格邊界之間的知識轉譯。</p><div class="actions"><a class="btn btn-primary" href="#health-series-books">查看書目譜系</a><a class="btn btn-secondary" href="/zh/insights/othm-health-social-care-bilingual-study-series-plan/">閱讀導報介紹</a><a class="btn btn-secondary" href="/australia/">澳洲健康路線</a></div></div></section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Editorial Rationale</div>
        <h2>補足資格學習的語境斷層。</h2>
        <p>本策劃將 OTHM Health and Social Care 系列視為一組跨語言、跨資歷框架、跨職業語境的學習對象，而非單純的考試教材。頁面集中呈現 editorial rationale、audience segmentation、content architecture、bibliographic apparatus、rights and permissions、dissemination model、academic review protocol 與 compliance boundary，作為後續作者協作、導師審閱、出版排程及課程資源配置的工作基礎。</p>
      </div>
      <div class="index-grid">
        <article><b>01</b><strong>OTHM learners</strong><span>圍繞 learning outcomes、assessment criteria、核心概念、學術寫作語言與證據組織方式建立雙語支持。</span></article>
        <article><b>02</b><strong>Care-sector practitioners</strong><span>協助 care home、community care、support work 從業者理解資格升級、反思性寫作與管理職能轉換。</span></article>
        <article><b>03</b><strong>Australia pathway readers</strong><span>梳理 OTHM、Australian VET、Bachelor / Master progression、AHPRA / ANMAC 邊界與職業評估風險。</span></article>
        <article><b>04</b><strong>Advisers and families</strong><span>提供可核查、可比較、可延伸至諮詢流程的健康護理教育路線資料。</span></article>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Scholarly Apparatus and Editorial Governance</div>
        <h2>以出版級編輯流程管理術語、來源、審閱與版本控制。</h2>
        <p>本系列採用 academic study companion 的編輯定位：每冊不是線性講義，而是帶有概念索引、術語庫、official-source bibliography、cross-framework equivalence notes、case commentary 和 reflective writing scaffold 的學術教輔。編輯流程需保留 source audit trail、version history、review memorandum、permissions log 與 errata protocol，確保出版品可被課程顧問、導師與讀者追溯。</p>
      </div>
      <div class="index-grid">
        <article><b>A</b><strong>Terminology control</strong><span>建立 bilingual controlled vocabulary，統一 health, social care, safeguarding, quality assurance, leadership 等核心詞彙。</span></article>
        <article><b>B</b><strong>Source hierarchy</strong><span>優先引用 OTHM specification、regulator guidance、official qualification registers、CQC / Skills for Care / AHPRA / ANMAC 等可核查來源。</span></article>
        <article><b>C</b><strong>Editorial peer review</strong><span>導師審閱、醫學顧問審閱、語言編輯與合規審讀分開記錄，避免單一審閱替代完整 quality assurance。</span></article>
        <article><b>D</b><strong>Publication metadata</strong><span>每冊建立 ISBN / edition statement / imprint notice / disclaimer / bibliography / revision note，便於 Payhip、KDP 與機構授權發行。</span></article>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Market and Pedagogical Need</div>
        <h2>需求基礎：照護人才缺口、華語學習者語境障礙與跨框架銜接。</h2>
        <p>健康與社會照護方向的學習材料通常分散於 awarding body specification、監管機構指引、照護政策、職業註冊資料與院校銜接規則之中。華語學習者面臨的主要障礙，不只是英文詞彙，而是如何理解不同制度下的 qualification purpose、evidence standard、professional context、learning outcome mapping 與 progression limitation。本系列的出版價值在於建立一套具備術語一致性、學術寫作導向、source literacy 與 route-risk interpretation 功能的雙語知識框架。</p>
      </div>
      <div class="resource-list compact-resource-list">
        <article class="resource-row"><div><div class="meta">Workforce Context</div><h3>社會照護與健康管理具備長期結構性需求</h3><p>成人社會照護、老人護理、殘疾支援、社區服務與健康管理均屬長周期人才需求領域。教材需要把課程學習、職業場景、監管邊界與升學可能性放入同一套分析框架。</p></div><span class="pill">Demand</span></article>
        <article class="resource-row"><div><div class="meta">Learning Gap</div><h3>單純翻譯課綱不足以支持學術表達</h3><p>讀者需要的不只是詞彙表，還包括 case study 語言、care ethics 表述、policy vocabulary、反思性寫作結構、引用邏輯與 assessment criteria 的證據化回應方式。</p></div><span class="pill">Pedagogy</span></article>
        <article class="resource-row"><div><div class="meta">Publishing Model</div><h3>以低風險數位首發驗證內容與讀者需求</h3><p>系列可先以 PDF ebook、sample chapter 和 course-pack supplement 測試，再根據 reader analytics、tutor review、revision notes 與 sales data 擴展至 Amazon KDP、print-on-demand 和 institutional licensing。</p></div><span class="pill">Validation</span></article>
      </div>
    </section>

    <section class="band" id="health-series-books">
      <div class="section-head compact-head">
        <div class="eyebrow">Five-Volume Bibliographic Sequence</div>
        <h2>五冊書目譜系</h2>
        <p>每冊以一個資格層級為基本單位，建立 title statement、scope note、reader profile、keywords 與 editorial function。此處不是銷售清單，而是書系內部的 bibliographic architecture。</p>
      </div>
      <div class="volume-catalogue" aria-label="Five-volume bibliographic sequence">
        <article class="volume-folio is-priority">
          <div class="volume-spine"><span>Vol. I</span><strong>L3</strong></div>
          <div class="volume-entry">
            <div class="volume-meta"><span>First launch</span><span>Foundation · Orientation · Vocabulary</span></div>
            <h3>Foundation and Career Orientation</h3>
            <p class="volume-zh">入門與職業定向</p>
            <p class="volume-abstract">建立 health and social care 的基礎語境：NHS / Medicare、職業結構、Level 3 核心概念、assessment task literacy、evidence collation 與 formative writing baseline。</p>
            <div class="volume-keywords"><b>Keywords</b><span>qualification context</span><span>care roles</span><span>controlled vocabulary</span><span>academic register</span></div>
          </div>
        </article>
        <article class="volume-folio">
          <div class="volume-spine"><span>Vol. II</span><strong>L4</strong></div>
          <div class="volume-entry">
            <div class="volume-meta"><span>Planned</span><span>Management · Communication · Case Analysis</span></div>
            <h3>Management Foundations</h3>
            <p class="volume-zh">管理基礎</p>
            <p class="volume-abstract">把 care setting 的實務經驗轉化為 management concepts、professional communication、assessment criteria response、reflective commentary 與 case-based academic writing。</p>
            <div class="volume-keywords"><b>Keywords</b><span>care setting</span><span>management concepts</span><span>reflection</span><span>case commentary</span></div>
          </div>
        </article>
        <article class="volume-folio is-priority">
          <div class="volume-spine"><span>Vol. III</span><strong>L5</strong></div>
          <div class="volume-entry">
            <div class="volume-meta"><span>Priority</span><span>Practice · Quality Governance · Systems</span></div>
            <h3>Practice, Quality and Systems</h3>
            <p class="volume-zh">執業核心與系統理解</p>
            <p class="volume-abstract">以 CQC、quality governance、research methods、mental health、disability support ethics、NDIS、CHC / HLT 與 Diploma of Nursing 邊界為核心，區分 academic progression、vocational competency、professional registration 與 migration assessment。</p>
            <div class="volume-keywords"><b>Keywords</b><span>quality assurance</span><span>NDIS</span><span>nursing boundary</span><span>route-risk interpretation</span></div>
          </div>
        </article>
        <article class="volume-folio">
          <div class="volume-spine"><span>Vol. IV</span><strong>L6</strong></div>
          <div class="volume-entry">
            <div class="volume-meta"><span>Planned</span><span>Articulation · Credit · Evidence Portfolio</span></div>
            <h3>Academic Progression Bridge</h3>
            <p class="volume-zh">學術升學橋樑</p>
            <p class="volume-abstract">服務於 academic articulation 與 credit discussion，整理 policy analysis、critical appraisal、unit outline、learning outcome mapping、advanced-entry narrative 與 evidence portfolio。</p>
            <div class="volume-keywords"><b>Keywords</b><span>credit discussion</span><span>learning outcomes</span><span>advanced entry</span><span>evidence portfolio</span></div>
          </div>
        </article>
        <article class="volume-folio">
          <div class="volume-spine"><span>Vol. V</span><strong>L7</strong></div>
          <div class="volume-entry">
            <div class="volume-meta"><span>Planned</span><span>Leadership · Research Design · Master's Preparation</span></div>
            <h3>Health Management and Master's Preparation</h3>
            <p class="volume-zh">管理碩士預備</p>
            <p class="volume-abstract">面向 postgraduate health management，處理 research design、health-system leadership、strategic management、capstone preparation 與 professional experience reflection。</p>
            <div class="volume-keywords"><b>Keywords</b><span>leadership discourse</span><span>strategy analysis</span><span>capstone</span><span>postgraduate writing</span></div>
          </div>
        </article>
      </div>
    </section>

    <section class="band compact-band">
      <div class="two-col">
        <div class="about-panel surface">
          <div class="eyebrow">Editorial Methodology</div>
          <h3>每冊採用一致的學術教輔結構</h3>
          <ul>
            <li>Qualification context：說明資格層級、學習目的與使用邊界</li>
            <li>Specification reading：以雙語方式整理 learning outcomes 與 assessment criteria</li>
            <li>Conceptual chapters：按單元建立核心概念、理論與實務案例</li>
            <li>Terminology bank：每冊 200-300 條中英術語及使用語境</li>
            <li>Academic writing support：評核要求、證據組織、引用與段落框架</li>
            <li>Pathway appendix：官方來源、延伸閱讀與澳洲 VET / higher education 參照</li>
          </ul>
        </div>
        <div class="about-panel surface">
          <div class="eyebrow">Publication and Dissemination</div>
          <h3>數位首發、教學試用、再擴展發行</h3>
          <ul>
            <li>Phase 1：PDF ebook 與 OTC 內部教學試用</li>
            <li>Phase 2：Payhip 單冊發售與系列套裝測試</li>
            <li>Phase 3：根據修訂版進入 Amazon KDP / print-on-demand</li>
            <li>Phase 4：面向合作中心、顧問與學習小組提供機構授權版本</li>
            <li>Content funnel：每冊配套導報文章、Study Hub 專題頁與社群摘要</li>
            <li>Pricing hypothesis：單冊 £9.99-£14.99，套裝價格待首冊數據回收後確定</li>
          </ul>
        </div>
      </div>
      <div class="notice">Compliance boundary: this is an independent Overseas Publishing House / OTC learning-support series. It is not an official OTHM textbook, official specification, assignment brief, mark scheme, learner submission, model-answer bank or guaranteed-assessment product. Learners must follow the current official specification and instructions issued by their approved centre.</div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Quality Assurance and Approval Readiness</div>
        <h2>出版項目與資格申請分軌治理，並在證據層面互相支撐。</h2>
        <p>出版策劃可先作為內容研究、樣章開發與學術審閱流程啟動；正式開課、學生註冊與 qualification delivery 則必須以 OTHM approval、tutor allocation、IQA / resource evidence、cohort arrangements 及 awarding-body requirements 為準。兩條線應共享術語表、參考文獻、教學資源清單與審閱記錄，但不得混同為同一合規程序。</p>
      </div>
      <div class="resource-list">
        <article class="resource-row"><div><div class="meta">Academic adviser / review request</div><h3>Prof. Yang Huabin / Prof. Steve Yang</h3><p>Proposed medical-science contributor and health-subject tutor candidate. The review package should verify terminology, clinical accuracy, professional ethics, level appropriateness and the distinction between academic study support and regulated professional advice.</p></div><span class="pill">Review stage</span></article>
        <article class="resource-row"><div><div class="meta">Qualification scope</div><h3>OTHM Health and Social Care Level 3-7 plus Level 8 leadership route</h3><p>The new-qualification evidence workstream may cover Level 3 Foundation Diploma in Health and Social Care, Level 4-7 Health and Social Care Management, and relevant Level 8 Strategic Management and Leadership Practice evidence where tutor suitability, management experience and learning resources support the application.</p></div><a class="btn btn-light" href="https://othm.org.uk/subject/health-and-social-care" target="_blank" rel="noopener">Official OTHM page</a></article>
        <article class="resource-row"><div><div class="meta">Overseas Study Review</div><h3>導報文章已同步發布</h3><p>導報文章面向學生、家長與一般讀者，承擔公共說明功能；本頁則作為 OTC 官網的出版策劃與項目治理入口，保留更完整的產品、學術與合規資料。</p></div><a class="btn btn-dark" href="/zh/insights/othm-health-social-care-bilingual-study-series-plan/">閱讀文章</a></article>
      </div>
    </section>
    </main>
  `
});

const othm = pageShell({
  title: "OTHM Level 5 Business Management Series | OTC Study Hub",
  current: "othm",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Payhip Live Study Companion Series</div><h1>OTHM Level 5 Business Management</h1><p>Six independent OTC first-edition single-unit study companions supporting adult learners with business concepts, bilingual terminology, study activities and self-checklists. Qualification No. 610/1527/1.</p></div></section>
    <section class="band two-col">
      <div>
        <div class="section-head">
          <h2>A structured six-unit learning series.</h2>
          <p>The series translates teaching experience into learning support while keeping assessment records, learner submissions and official quality forms out of published materials. Each single-unit guide is now listed as an independent Payhip product.</p>
        </div>
        <div class="product-grid two-up">${productCards()}</div>
      </div>
      <aside class="about-panel">
        <h3>Compliance Boundary</h3>
        <p>This series is produced by OTC as an independent study companion. Learners must always refer to official specifications and assignment briefs provided by their approved centre.</p>
        <ul>
          <li>No OTHM logo unless written permission is obtained.</li>
          <li>No official marking sheets, IQA reports or learner submissions.</li>
          <li>No model answers designed for direct submission.</li>
        </ul>
      </aside>
    </section>
  `
});

function othmQualificationMapContent() {
  return `
    <section class="spotlight" id="othm-qualification-map">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Academic Areas</div>
          <h2>Subject areas aligned with the OTHM public qualification taxonomy.</h2>
          <p>OTC's public course map uses OTHM-style subject-area language where relevant, while still separating approved qualification delivery from tutoring, English support, apps and progression guidance.</p>
        </div>
        <div class="doctoral-highlight">
          <div>
            <div class="eyebrow">Doctoral Level Programmes</div>
            <h3>Level 8 is included as a distinct enquiry route.</h3>
            <p>OTHM describes Level 8 diplomas as taught programmes on the RQF which sit at EQF Level 8 and are academically comparable to doctoral-level study. Current official Level 8 listing: OTHM Level 8 Diploma in Strategic Management and Leadership Practice.</p>
          </div>
          <div class="doctoral-actions">
            <a href="https://othm.org.uk/qualification/othm-level-8-diploma-in-strategic-management-and-leadership-practice" target="_blank" rel="noopener">Official Level 8 page</a>
            <a href="mailto:office@overseasuk.com?subject=OTHM%20Level%208%20Diploma%20in%20Strategic%20Management%20and%20Leadership%20Practice%20registration%20enquiry">Level 8 enquiry</a>
          </div>
        </div>
        <div style="height:16px"></div>
        <div class="academic-area-grid">${academicAreaCards()}</div>
        <p class="source-note">Subject-area wording and qualification titles follow OTHM public subject pages where applicable. Titles marked TBC are not currently presented as open OTC delivery; availability must be confirmed case by case according to learner demand, teacher availability, resources, cohort arrangements and current approval status.</p>
      </div>
    </section>
  `;
}

const othmQualifications = pageShell({
  title: "OTHM Qualifications | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">OTHM Qualifications</div><h1>OTHM Qualification Map</h1><p>Subject-area and level-based qualification entrance for learners enquiring about OTHM routes through OTC Study Hub.</p></div></section>
    ${othmQualificationMapContent()}
    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Current Public Entrances</div>
        <h2>Priority OTHM routes for the first Study Hub version.</h2>
      </div>
      <div class="resource-list">
        <article class="resource-row">
          <div>
            <div class="meta">Regulated Qualification Route</div>
            <h3>OTHM Level 5 Diploma in Business Management</h3>
            <p>Course support entrance for the six-unit OTHM Level 5 Business Management structure, with bilingual study companions, learner resources and assessment-readiness guidance. Qualification No. 610/1527/1.</p>
          </div>
          <a class="btn btn-dark" href="/othm-level-5-business-management/">Open Course</a>
        </article>
        <article class="resource-row">
          <div>
            <div class="meta">Approved / Evidence-Mapped OTHM Areas</div>
            <h3>OTHM Level 3, Level 4, Level 5 and Level 7 Business Routes</h3>
            <p>Notion records map OTHM Level 3 Foundation Diploma in Business, Level 4 Diploma in Business Management, Level 5 Diploma in Business Management, and Level 7 management-related routes to official specification evidence. Public enrolment status must be confirmed case by case.</p>
          </div>
          <a class="btn btn-light" href="mailto:office@overseasuk.com?subject=OTHM%20Course%20Enquiry">Enquire</a>
        </article>
        <article class="resource-row">
          <div>
            <div class="meta">Doctoral Level Enquiry</div>
            <h3>OTHM Level 8 Diploma in Strategic Management and Leadership Practice</h3>
            <p>Official OTHM doctoral-level listing. Delivery or support must be confirmed case by case according to approval, specialist tutor availability, learner profile, resources and current cohort arrangements.</p>
          </div>
          <a class="btn btn-light" href="mailto:office@overseasuk.com?subject=OTHM%20Level%208%20Strategic%20Management%20and%20Leadership%20Practice%20Enquiry">Enquire</a>
        </article>
        <article class="resource-row">
          <div>
            <div class="meta">New Qualification Approval Preparation</div>
            <h3>OTHM Health and Social Care Series</h3>
            <p>OTC is preparing Health and Social Care tutor-allocation evidence and resource readiness for possible Level 3-7 delivery. Public enrolment remains subject to current approval, tutor suitability confirmation, cohort arrangements and awarding-body requirements.</p>
          </div>
          <a class="btn btn-dark" href="/publishing/othm-health-social-care-bilingual-series/">Open Series Plan</a>
        </article>
      </div>
      <div style="height:28px"></div>
      <div class="notice">Course information is for general guidance only. Availability depends on approval status, current staff expertise, learner demand, resources, cohort opening and applicable awarding-body requirements.</div>
    </section>
  `
});

const courses = pageShell({
  title: "Courses | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Course Entrance</div><h1>Courses</h1><p>OTC course information is organised by both academic subject and approval / delivery system, so learners can distinguish regulated qualifications from tutoring, study support and progression guidance.</p></div></section>
    <section class="band">
      <div class="section-head">
        <h2>Choose the right kind of course before choosing the subject.</h2>
        <p>OTC has several kinds of learning provision. Some routes relate to approved qualification delivery; others are tutoring, academic support, English preparation or learner-guidance programmes. The public course page therefore uses a two-layer structure.</p>
      </div>
      <div class="course-system-grid">
        <a class="course-system-entry" href="/international-curriculum-tutoring/">
          <b>01</b>
          <h3>International Curriculum Bilingual Tutoring</h3>
          <p>A-Level, BTEC, IB, AP, IGCSE, OSSD, Australian, US high school, Foundation and pathway learners who need bilingual subject and academic-writing support.</p>
          <span>雙語輔導 only. OTC supports understanding, planning and writing skills, not official delivery or assessed-work completion.</span>
        </a>
        <a class="course-system-entry" href="/othm-qualifications/">
          <b>02</b>
          <h3>OTHM Qualifications</h3>
          <p>Regulated qualification delivery, organised by RQF level and official specification. Delivery only where OTC has current approval, staffing, resources and cohort arrangements.</p>
          <span>Approved / current / TBC status must be checked before enrolment.</span>
        </a>
        <a class="course-system-entry" href="/external-programme-support/">
          <b>03</b>
          <h3>External Programme Support</h3>
          <p>OU, BTEC, Pearson, university module, foundation / pathway and other recognised external-programme support.</p>
          <span>Academic tutoring only. Learners remain registered with their own awarding body, university, college or course provider.</span>
        </a>
        <a class="course-system-entry" href="/academic-tutoring/">
          <b>04</b>
          <h3>Academic Tutoring</h3>
          <p>Structured support in writing, business, management, research skills, academic English, study skills and progression preparation.</p>
          <span>Focused on independent learning, not assignment completion or model answers.</span>
        </a>
        <a class="course-system-entry" href="/guidance-progression/">
          <b>05</b>
          <h3>Guidance & Progression</h3>
          <p>Study-route planning, top-up route review, academic profile organisation and ongoing learner guidance packages.</p>
          <span>Planning support only; not guaranteed admission, visa, credit-transfer or placement service.</span>
        </a>
        <a class="course-system-entry" href="/university-applications/">
          <b>06</b>
          <h3>University Applications</h3>
          <p>Country, institution, school and programme-based application screening for UK and international university courses.</p>
          <span>透過 OTC 申請. Students can submit a basic profile for eligibility review and next-step advice.</span>
        </a>
      </div>
    </section>

    <section class="band compact-band">
      <div class="notice">This page is a course-system gateway. Select one of the entrances above to open the relevant subpage. Availability depends on approval status, current staff expertise, learner demand, resources, cohort opening and applicable awarding-body requirements.</div>
    </section>
  `
});

const universityApplications = pageShell({
  title: "UK University Applications | OTC Study Hub",
  current: "applications",
  description: "OTC UK university application advisory for undergraduate, postgraduate, UCAS/direct and advanced-entry cases, including document checks, course mapping and admissions communication support.",
  path: "/university-applications/",
  body: `
    <section class="page-hero application-hero"><div class="band"><div class="eyebrow">UK University Applications</div><h1>Apply through OTC</h1><p>Admissions advisory for students seeking UK undergraduate, postgraduate, UCAS/direct, advanced-entry and top-up application support.</p><div class="hero-actions"><a class="btn btn-primary" href="#otc-apply-form">Start screening</a><a class="btn btn-secondary" href="/application-service-standards/">Service standards</a><a class="btn btn-secondary" href="/university-partnerships/">University cooperation</a></div></div></section>

    <section class="band compact-band">
      <div class="application-audit-strip">
        <article><strong>Undergraduate</strong><span>UCAS, direct-entry and course-fit planning.</span></article>
        <article><strong>Advanced Entry</strong><span>Year 2, top-up and module-mapping evidence.</span></article>
        <article><strong>Postgraduate</strong><span>Course shortlist, document checklist and PS/CV planning.</span></article>
        <article><strong>Institutional</strong><span>Admissions enquiry records and partner-ready workflow.</span></article>
      </div>
    </section>

    <section class="band compact-band education-group-section">
      <div class="section-head compact-head">
        <div class="eyebrow">Transnational Education Groups</div>
        <h2>Pathway providers and cross-border education groups.</h2>
        <p>These routes sit across countries. Select a group to open it inside the same application review system, then narrow by provider, destination, intake and course level.</p>
      </div>
      <div class="education-group-grid">
${transnationalEducationGroupCards()}
      </div>
    </section>

    <section class="band application-country-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Country & Region Map</div>
        <h2>Choose a destination first, then open the university list.</h2>
        <p>OTC starts with country and region logic before narrowing to institution, school and programme level. The map below now includes all public country and region gateways on the site.</p>
      </div>
      <div class="application-country-map" id="applicationCountryMap" aria-label="Country and region application routes">
${applicationCountryCards()}
      </div>
    </section>

    <section class="band" id="programme-directory">
      <div class="section-head compact-head">
        <div class="eyebrow">University List</div>
        <h2 id="programmeDirectoryTitle">University list by selected country.</h2>
        <p id="programmeDirectorySummary">Choose a country card above or use the filters. Individual eligibility is always checked against each university's current admissions rules.</p>
      </div>
      <div class="application-layout">
        <aside class="programme-filter-panel" aria-label="Programme filters">
          <label for="countryFilter">Country</label>
          <select id="countryFilter">
            <option value="All">All countries</option>
          </select>
          <label for="institutionFilter">University</label>
          <select id="institutionFilter">
            <option value="All">All universities</option>
          </select>
          <label for="schoolFilter">School / Faculty</label>
          <select id="schoolFilter">
            <option value="All">All schools</option>
          </select>
          <label for="programmeFilter">Programme</label>
          <select id="programmeFilter">
            <option value="cardiff-business-economics-advanced-entry">Cardiff advanced-entry review</option>
          </select>
        </aside>

        <article class="programme-detail-panel" id="programmeDetail">
        </article>
      </div>
      <div class="programme-card-grid" id="programmeCardGrid"></div>
      <p class="source-note">Australia institution coverage follows the Study Australia public list of Australian universities. Institution-level entries are screening routes; course-level eligibility must still be checked against each university's official admissions page.</p>
    </section>

    <section class="band compact-band" id="otc-apply-form">
      <div class="section-head compact-head">
        <div class="eyebrow">Eligibility Screening</div>
        <h2>Send a basic profile for OTC review.</h2>
        <p>The form gives an instant internal guidance band and prepares an email summary for OTC. It is an initial review only, not an admission decision.</p>
      </div>
      <form class="application-screening-form" id="applicationScreeningForm">
        <div class="application-route-summary" id="applicationRouteSummary" hidden></div>
        <input type="hidden" name="targetCountry" id="targetCountry">
        <input type="hidden" name="targetState" id="targetState">
        <input type="hidden" name="targetInstitution" id="targetInstitution">
        <div class="form-grid">
          <label>Student name
            <input name="studentName" autocomplete="name" placeholder="e.g. Liu Xiaotong" required>
          </label>
          <label>Email
            <input name="email" type="email" autocomplete="email" placeholder="student@example.com" required>
          </label>
          <label>Current institution
            <input name="institution" placeholder="e.g. China Foreign Affairs University" required>
          </label>
          <label>Current major
            <input name="major" placeholder="e.g. Public Relations" required>
          </label>
          <label>Qualification stage
            <select name="stage" required>
              <option value="">Select</option>
              <option>Year 1 undergraduate</option>
              <option>Year 2 undergraduate / advanced-entry case</option>
              <option>Year 3 undergraduate</option>
              <option>Final-year undergraduate</option>
              <option>Graduated bachelor</option>
              <option>Foundation / HND / OTHM / pathway</option>
              <option>Other pathway / transfer case</option>
            </select>
          </label>
          <label>GPA or average
            <input name="gpa" placeholder="e.g. 3.94/4.0 or 89.4%" required>
          </label>
          <label>English score
            <input name="english" placeholder="e.g. IELTS 6.0, target 6.5">
          </label>
          <label>Target intake
            <select name="intake">
              <option>2026 entry</option>
              <option>2027 entry</option>
              <option>Not sure yet</option>
            </select>
          </label>
        </div>
        <label>Application notes
          <textarea name="notes" rows="5" placeholder="Target university/course, advanced-entry request, modules completed, document status, internships, previous refusals, scholarship needs or special circumstances."></textarea>
        </label>
        <div class="application-result" id="applicationResult" aria-live="polite">
          Complete the profile to receive an initial OTC review band.
        </div>
        <div class="programme-actions">
          <button class="btn btn-dark" type="button" id="reviewButton">Check eligibility</button>
          <a class="btn btn-light" id="mailtoButton" href="mailto:office@overseasuk.com?subject=OTC%20University%20Application%20Screening%20-%20University%20of%20Edinburgh%20MSc%20Marketing">Send to OTC</a>
        </div>
      </form>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Service Layers</div>
        <h2>How OTC structures application support.</h2>
      </div>
      <div class="course-system-grid application-system-grid application-system-compact">
        <article><b>01</b><h3>Country</h3><p>UK, Australia, Canada, US, Europe and Asia-Pacific admission routes.</p><span>Different document and timing logic by jurisdiction.</span></article>
        <article><b>02</b><h3>Institution</h3><p>University-level profile, ranking band, admission portal and agent/partner status.</p><span>Official entry requirements stay linked to source pages.</span></article>
        <article><b>03</b><h3>School</h3><p>Business School, Media, Engineering, Education, Computing and other academic units.</p><span>Each school may have different PS, portfolio or reference rules.</span></article>
        <article><b>04</b><h3>Programme</h3><p>Course-level record with requirements, application status, intake, fee and document checklist.</p><span>OTC review can generate a personalised next-step plan.</span></article>
      </div>
      <div class="application-link-strip">
        <a class="btn btn-light" href="/advanced-entry-china-programmes/">Advanced Entry & China Programme Support</a>
        <a class="btn btn-light" href="/application-service-standards/">Application Service Standards</a>
        <a class="btn btn-light" href="/services/university-application-advisory/">Advisory service page</a>
      </div>
    </section>

    <script>
      (function () {
        const form = document.getElementById("applicationScreeningForm");
        const result = document.getElementById("applicationResult");
        const reviewButton = document.getElementById("reviewButton");
        const mailtoButton = document.getElementById("mailtoButton");
        const countryFilter = document.getElementById("countryFilter");
        const institutionFilter = document.getElementById("institutionFilter");
        const schoolFilter = document.getElementById("schoolFilter");
        const programmeFilter = document.getElementById("programmeFilter");
        const programmeDetail = document.getElementById("programmeDetail");
        const programmeCardGrid = document.getElementById("programmeCardGrid");
        const routeSummary = document.getElementById("applicationRouteSummary");
        const targetCountry = document.getElementById("targetCountry");
        const targetState = document.getElementById("targetState");
        const targetInstitution = document.getElementById("targetInstitution");
        const applicationCountryMap = document.getElementById("applicationCountryMap");
        const programmeDirectoryTitle = document.getElementById("programmeDirectoryTitle");
        const programmeDirectorySummary = document.getElementById("programmeDirectorySummary");

        const coreProgrammes = [
          {
            id: "cardiff-business-economics-advanced-entry",
            country: "United Kingdom",
            institution: "Cardiff University",
            school: "Cardiff Business School",
            programme: "Business Economics BSc / Business Management BSc advanced-entry review",
            level: "Undergraduate advanced-entry enquiry",
            band: "Eligibility to verify",
            fit: "Useful for students from China-based international undergraduate programmes who need Year 2 or alternative-entry consideration supported by transcript, module and course-mapping evidence.",
            action: "Prepare English transcripts, course descriptions, module mapping, academic summary and admissions enquiry questions",
            url: "https://www.cardiff.ac.uk/study/undergraduate"
          },
          {
            id: "uk-undergraduate-advanced-entry-review",
            country: "United Kingdom",
            institution: "UK university to be confirmed",
            school: "Admissions / academic school review",
            programme: "Undergraduate Year 2 / advanced-entry screening",
            level: "Undergraduate advanced-entry enquiry",
            band: "Case review",
            fit: "General route for applicants who have completed university-level study in China or another jurisdiction and need the receiving university to assess level, subject fit and evidence quality.",
            action: "Check transcript, credits, grading scale, course descriptions, English evidence, references and official advanced-entry instructions",
            url: "https://www.ucas.com/undergraduate"
          },
          {
            id: "study-group-uk-eu-isc-2026",
            country: "United Kingdom",
            institution: "Study Group UK/EU International Study Centres",
            school: "Pathway admissions",
            programme: "IFY / IY1 / IY2 / Pre-Master application screening",
            level: "Foundation and pathway route",
            band: "Priority 2026 intake window",
            fit: "Suitable for students targeting July-December 2026 pathway entry who need course matching, document checks and fast confirmation planning.",
            action: "Screen academic profile, English level, target subject, intake availability and document readiness before submission",
            url: "https://www.studygroup.com/"
          },
          {
            id: "study-group-huddersfield-london-da-2026",
            country: "United Kingdom",
            institution: "University of Huddersfield London",
            school: "Direct admissions route",
            programme: "UG / PG Direct Entry application screening",
            level: "Direct entry route",
            band: "Priority 2026 intake window",
            fit: "Useful for students who may be ready for a direct-entry option and need a focused transcript, English and course-fit review.",
            action: "Check programme level, previous study, English evidence, CV and intake deadline before direct-entry application",
            url: "https://www.hud.ac.uk/london/"
          },
          {
            id: "study-group-royal-holloway-da-2026",
            country: "United Kingdom",
            institution: "Royal Holloway, University of London",
            school: "Direct admissions route",
            programme: "UG / PG / PhD Direct Entry application screening",
            level: "Direct entry route",
            band: "Priority 2026 intake window",
            fit: "For students considering Royal Holloway direct entry and needing an organised eligibility review before application.",
            action: "Prepare course shortlist, transcript evidence, English evidence, CV/research notes where relevant and admissions questions",
            url: "https://www.royalholloway.ac.uk/"
          },
          {
            id: "study-group-north-america-2026",
            country: "United States",
            institution: "Study Group North America",
            school: "US pathway and direct-entry admissions",
            programme: "US ISC and UG / PG Direct application screening",
            level: "Pathway and direct-entry route",
            band: "Priority 2026 intake window",
            fit: "Alternative route for students comparing UK and North America options for 2026 entry.",
            action: "Compare destination fit, academic level, English score, progression route and document timing",
            url: "https://www.studygroup.com/"
          },
          {
            id: "lse-msc-media-communications",
            country: "United Kingdom",
            institution: "London School of Economics and Political Science",
            school: "Department of Media and Communications",
            programme: "MSc Media and Communications",
            level: "Postgraduate taught",
            band: "Dream",
            fit: "Best for a high-GPA PR/media applicant with a strong public communication and research narrative.",
            action: "Dream-school positioning, research-led personal statement and referee planning",
            url: "https://www.lse.ac.uk/study-at-lse/Graduate/degree-programmes-2026/MSc-Media-and-Communications"
          },
          {
            id: "ucl-msc-science-communication",
            country: "United Kingdom",
            institution: "University College London",
            school: "Department of Science and Technology Studies",
            programme: "Science Communication MSc",
            level: "Postgraduate taught",
            band: "Dream / target to verify",
            fit: "A practical UCL communication route to verify against the student's PR, public education and media evidence.",
            action: "Course-fit check, module review and alternative UCL media route search",
            url: "https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/science-communication-msc"
          },
          {
            id: "kcl-ma-culture-media-creative-industries",
            country: "United Kingdom",
            institution: "King's College London",
            school: "Faculty of Arts and Humanities",
            programme: "MA Culture, Media & Creative Industries",
            level: "Postgraduate taught",
            band: "Target",
            fit: "Strong fit for PR, media, culture, brand communication and internship-based application narrative.",
            action: "Narrative alignment, work-experience evidence and PS structure",
            url: "https://www.kcl.ac.uk/study/postgraduate-taught/courses/culture-media-and-creative-industries-ma"
          },
          {
            id: "warwick-msc-marketing-strategy",
            country: "United Kingdom",
            institution: "University of Warwick",
            school: "Warwick Business School",
            programme: "MSc Marketing & Strategy",
            level: "Postgraduate taught",
            band: "Target",
            fit: "Suitable for a high academic average with internships in advertising, HR and brand-related business work.",
            action: "Business-school CV framing and marketing-strategy motivation review",
            url: "https://www.wbs.ac.uk/courses/postgraduate/marketing-strategy/"
          },
          {
            id: "manchester-msc-marketing",
            country: "United Kingdom",
            institution: "University of Manchester",
            school: "Alliance Manchester Business School",
            programme: "MSc Marketing",
            level: "Postgraduate taught",
            band: "Match",
            fit: "Good match for marketing conversion and commercial communication direction.",
            action: "Document audit, English condition planning and application timing",
            url: "https://www.manchester.ac.uk/study/masters/courses/list/08597/msc-marketing/"
          },
          {
            id: "edinburgh-msc-marketing",
            country: "United Kingdom",
            institution: "University of Edinburgh",
            school: "Business School",
            programme: "MSc Marketing",
            level: "Postgraduate taught",
            band: "Match",
            fit: "Clear business-school marketing route for the student's PR and marketing-communications profile.",
            action: "Pre-application eligibility review and document strategy",
            url: "https://www.business-school.ed.ac.uk/msc/marketing"
          },
          {
            id: "melbourne-master-marketing-communications",
            country: "Australia",
            institution: "University of Melbourne",
            school: "Faculty of Arts",
            programme: "Master of Marketing Communications",
            level: "Postgraduate coursework",
            band: "Target",
            fit: "Strong Australia option for PR, brand communication and marketing communications.",
            action: "Australia document check, English condition and offer timing plan",
            url: "https://study.unimelb.edu.au/find/courses/graduate/master-of-marketing-communications/"
          },
          {
            id: "sydney-master-media-practice",
            country: "Australia",
            institution: "University of Sydney",
            school: "Faculty of Arts and Social Sciences",
            programme: "Master of Media Practice",
            level: "Postgraduate coursework",
            band: "Match",
            fit: "Media-practice route suited to communication, PR, writing and professional media development.",
            action: "Australia portfolio of evidence and programme-fit review",
            url: "https://www.sydney.edu.au/courses/courses/pc/master-of-media-practice.html"
          },
          {
            id: "anu-master-science-communication",
            country: "Australia",
            institution: "Australian National University",
            school: "Centre for the Public Awareness of Science",
            programme: "Master of Science Communication",
            level: "Postgraduate coursework",
            band: "Match / alternative",
            fit: "Public communication alternative to verify against the student's Merck x Weibo health education internship evidence.",
            action: "Alternative-route review and official requirement check",
            url: "https://programsandcourses.anu.edu.au/program/MSCOM"
          }
        ];

        const australianUniversities = [
          "Adelaide University",
          "Australian Catholic University",
          "Australian University of Theology",
          "Australian National University",
          "Avondale University",
          "Bond University",
          "Charles Darwin University",
          "Charles Sturt University",
          "CQ University",
          "Curtin University",
          "Deakin University",
          "Edith Cowan University",
          "Federation University of Australia",
          "Flinders University",
          "Griffith University",
          "James Cook University",
          "La Trobe University",
          "Macquarie University",
          "Monash University",
          "Murdoch University",
          "Queensland University of Technology",
          "RMIT University",
          "Southern Cross University",
          "Swinburne University of Technology",
          "Torrens University Australia",
          "University of Canberra",
          "University of Divinity",
          "University of Melbourne",
          "University of New England",
          "University of New South Wales",
          "University of Newcastle",
          "University of Notre Dame Australia",
          "University of Queensland",
          "University of Southern Queensland",
          "University of Sydney",
          "University of Tasmania",
          "University of Technology Sydney",
          "University of the Sunshine Coast",
          "University of Western Australia",
          "University of Wollongong",
          "Victoria University",
          "Western Sydney University"
        ];

        const australianOfficialCourseLinks = {
          "Australian National University": "https://programsandcourses.anu.edu.au/",
          "University of Melbourne": "https://study.unimelb.edu.au/find/",
          "University of Sydney": "https://www.sydney.edu.au/courses/",
          "University of New South Wales": "https://www.unsw.edu.au/study",
          "University of Queensland": "https://study.uq.edu.au/study-options",
          "Monash University": "https://www.monash.edu/study/courses",
          "University of Western Australia": "https://www.uwa.edu.au/study/courses",
          "University of Adelaide": "https://www.adelaide.edu.au/degree-finder/",
          "Adelaide University": "https://www.adelaideuni.edu.au/study/"
        };

        const existingAustralianInstitutions = new Set(coreProgrammes.filter((item) => item.country === "Australia").map((item) => item.institution));
        const australianInstitutionProgrammes = australianUniversities
          .filter((institution) => !existingAustralianInstitutions.has(institution))
          .map((institution) => ({
            id: "australia-" + institution.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
            country: "Australia",
            institution,
            school: "University-wide postgraduate admissions",
            programme: "Australia postgraduate application review",
            level: "Postgraduate coursework / research to verify",
            band: "Institution review",
            fit: "Institution-level Australian university option to be checked against the student's academic profile, English score, subject direction and intake timing.",
            action: "Identify suitable media, communication, marketing or related postgraduate courses and confirm official entry requirements",
            url: australianOfficialCourseLinks[institution] || "https://www.studyaustralia.gov.au/en/plan-your-studies/list-of-australian-universities"
          }));

        const countryGatewayUniversityProgrammes = ${JSON.stringify(countryGatewayData.filter((country) => country.slug !== "australia").flatMap((country) => country.universities.map((institution) => ({
          id: `${country.slug}-${institution.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
          country: country.name,
          institution,
          school: "University-wide admissions",
          programme: `${country.name} university application review`,
          level: "Undergraduate / postgraduate to verify",
          band: "Country route",
          fit: `Initial ${country.name} university option to be checked against the student's academic profile, English score, subject direction and intake timing.`,
          action: `Screen suitable ${country.name} university routes, confirm official entry requirements and prepare document checklist`,
          url: country.href
        }))), null, 10)};

        const educationGroupProgrammes = ${JSON.stringify(transnationalEducationGroups.map((group) => ({
          id: `education-group-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
          country: "Education Group / Pathway Provider",
          institution: group.name,
          school: "Cross-border pathway admissions",
          programme: `${group.name} application route screening`,
          level: "Foundation / pathway / direct entry to verify",
          band: group.band,
          fit: group.note,
          action: `Confirm current ${group.name} provider route, destination country, intake, academic level, English requirement and document checklist`,
          url: group.url
        })), null, 10)};

        const existingProgrammeKeys = new Set(coreProgrammes.concat(australianInstitutionProgrammes).map((item) => item.country + "::" + item.institution));
        const gatewayInstitutionProgrammes = countryGatewayUniversityProgrammes.filter((item) => !existingProgrammeKeys.has(item.country + "::" + item.institution));
        const programmes = coreProgrammes.concat(australianInstitutionProgrammes, gatewayInstitutionProgrammes, educationGroupProgrammes);

        let currentProgramme = programmes.find((item) => item.id === "cardiff-business-economics-advanced-entry") || programmes[0];
        let hasIncomingCountry = false;

        function buildApplyHref(programme) {
          const params = new URLSearchParams({
            country: programme.country,
            institution: programme.institution,
            programme: programme.programme
          });
          return "/university-applications/?" + params.toString() + "#otc-apply-form";
        }

        function uniqueValues(key, source) {
          return [...new Set(source.map((item) => item[key]))].sort();
        }

        function setOptions(select, values, allLabel) {
          const previous = select.value || "All";
          select.innerHTML = '<option value="All">' + allLabel + '</option>' + values.map((value) => '<option value="' + value + '">' + value + '</option>').join("");
          select.value = values.includes(previous) ? previous : "All";
        }

        function filteredProgrammes() {
          return programmes.filter((item) => {
            return (countryFilter.value === "All" || item.country === countryFilter.value)
              && (institutionFilter.value === "All" || item.institution === institutionFilter.value)
              && (schoolFilter.value === "All" || item.school === schoolFilter.value);
          });
        }

        function renderProgramme(programme) {
          currentProgramme = programme;
          programmeFilter.value = programme.id;
          programmeDetail.innerHTML = [
            '<div class="programme-meta-row"><span>' + programme.country + '</span><span>' + programme.level + '</span><span>' + programme.band + '</span></div>',
            '<h2>' + programme.institution + ' - ' + programme.programme + '</h2>',
            '<p>' + programme.fit + '</p>',
            '<dl class="programme-facts">',
            '<div><dt>Country</dt><dd>' + programme.country + '</dd></div>',
            '<div><dt>Institution</dt><dd>' + programme.institution + '</dd></div>',
            '<div><dt>School</dt><dd>' + programme.school + '</dd></div>',
            '<div><dt>Course</dt><dd>' + programme.programme + '</dd></div>',
            '<div><dt>OTC action</dt><dd>' + programme.action + '</dd></div>',
            '</dl>',
            '<div class="programme-actions">',
            '<a class="btn btn-dark" href="' + buildApplyHref(programme) + '">Apply through OTC</a>',
            '<a class="btn btn-light" href="' + programme.url + '" target="_blank" rel="noopener">Official course page</a>',
            '</div>'
          ].join("");
          updateReview();
        }

        function renderCards(list) {
          programmeCardGrid.innerHTML = list.map((item) => [
            '<button type="button" class="programme-mini-card' + (item.id === currentProgramme.id ? ' is-active' : '') + '" data-programme-id="' + item.id + '">',
            '<span>' + item.country + ' · ' + item.band + '</span>',
            '<strong>' + item.institution + '</strong>',
            '<em>' + item.programme + '</em>',
            '</button>'
          ].join("")).join("");
        }

        function countryDisplayName(country) {
          return country === "All" ? "all destinations" : country;
        }

        function updateCountryMap() {
          const activeCountry = countryFilter.value || "All";
          document.querySelectorAll("[data-country-jump]").forEach((card) => {
            card.classList.toggle("is-active", card.dataset.countryJump === activeCountry);
          });
          document.querySelectorAll("[data-country-count]").forEach((badge) => {
            const country = badge.dataset.countryCount;
            const count = programmes.filter((item) => item.country === country).length;
            badge.textContent = count + " route" + (count === 1 ? "" : "s");
          });
          const activeList = filteredProgrammes();
          programmeDirectoryTitle.textContent = "University list: " + countryDisplayName(activeCountry);
          programmeDirectorySummary.textContent = activeList.length + " current screening route" + (activeList.length === 1 ? "" : "s") + " are shown. Use the filters to narrow by university, school or programme.";
        }

        function refreshFilters() {
          setOptions(countryFilter, uniqueValues("country", programmes), "All countries");
          setOptions(institutionFilter, uniqueValues("institution", countryFilter.value === "All" ? programmes : programmes.filter((item) => item.country === countryFilter.value)), "All universities");
          const institutionScope = programmes.filter((item) => (countryFilter.value === "All" || item.country === countryFilter.value) && (institutionFilter.value === "All" || item.institution === institutionFilter.value));
          setOptions(schoolFilter, uniqueValues("school", institutionScope), "All schools");
        }

        function refreshProgrammes() {
          refreshFilters();
          const list = filteredProgrammes();
          programmeFilter.innerHTML = list.map((item) => '<option value="' + item.id + '">' + item.programme + ' - ' + item.institution + '</option>').join("");
          const selected = list.find((item) => item.id === currentProgramme.id) || list[0] || programmes[0];
          renderCards(list);
          renderProgramme(selected);
          updateCountryMap();
        }

        function setSelectValue(select, value) {
          if (!value) return false;
          const option = Array.from(select.options).find((item) => item.value.toLowerCase() === value.toLowerCase());
          if (!option) return false;
          select.value = option.value;
          return true;
        }

        function escapeHtml(value) {
          return String(value || "").replace(/[&<>"']/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
          });
        }

        function canonicalInstitutionName(value) {
          const institutionAliases = {
            "unsw sydney": "University of New South Wales",
            "uts / uts college": "University of Technology Sydney",
            "university of newcastle / newcastle college": "University of Newcastle",
            "monash university / monash college": "Monash University",
            "central queensland university": "CQ University",
            "university of western australia / uwa college": "University of Western Australia",
            "murdoch university / murdoch college": "Murdoch University",
            "notre dame australia": "University of Notre Dame Australia",
            "university of adelaide": "Adelaide University",
            "kic adelaide college": "Adelaide University",
            "international college of hotel management": "Adelaide University"
          };
          const key = (value || "").trim().toLowerCase();
          return institutionAliases[key] || value;
        }

        function applyIncomingRoute() {
          const params = new URLSearchParams(window.location.search);
          const requestedCountry = params.get("country") || "";
          const requestedState = params.get("state") || "";
          const requestedInstitution = params.get("institution") || "";
          const requestedProgramme = params.get("programme") || "";
          const canonicalInstitution = canonicalInstitutionName(requestedInstitution);
          hasIncomingCountry = Boolean(requestedCountry);

          if (requestedCountry) {
            setSelectValue(countryFilter, requestedCountry);
            refreshFilters();
          }
          if (canonicalInstitution) {
            setSelectValue(institutionFilter, canonicalInstitution);
            refreshFilters();
          }

          const match = programmes.find((item) => {
            return (!requestedCountry || item.country.toLowerCase() === requestedCountry.toLowerCase())
              && (!canonicalInstitution || item.institution.toLowerCase() === canonicalInstitution.toLowerCase())
              && (!requestedProgramme || item.programme.toLowerCase() === requestedProgramme.toLowerCase());
          }) || programmes.find((item) => canonicalInstitution && item.institution.toLowerCase() === canonicalInstitution.toLowerCase());

          if (match) {
            currentProgramme = match;
          }

          if (requestedCountry || requestedState || requestedInstitution) {
            targetCountry.value = requestedCountry;
            targetState.value = requestedState;
            targetInstitution.value = requestedInstitution || canonicalInstitution;
            routeSummary.hidden = false;
            routeSummary.innerHTML = [
              '<span>Target route</span>',
              '<strong>' + escapeHtml([requestedCountry, requestedState, requestedInstitution || canonicalInstitution].filter(Boolean).join(" / ")) + '</strong>',
              '<p>OTC will use this selected route as the starting point for eligibility screening, course matching and document planning.</p>'
            ].join("");
          }
        }

        function scoreProfile(data) {
          const text = [data.gpa, data.english, data.stage, data.notes].join(" ").toLowerCase();
          let score = 0;
          if (/3\\.7|3\\.8|3\\.9|4\\.0|85|86|87|88|89|90|91|92|93|94|95/.test(text)) score += 2;
          if (/final|year 3|year 2|advanced|graduated|pathway|hnd|othm/.test(text)) score += 1;
          if (/ielts\\s*6\\.5|ielts\\s*7|toefl|pte|duolingo/.test(text)) score += 2;
          if (/intern|work|research|project|portfolio|competition|pr|marketing|media/.test(text)) score += 1;
          if (/refusal|gap|fail|low|missing|not sure/.test(text)) score -= 1;
          return score;
        }

        function buildAdvice(score) {
          if (score >= 5) {
            return "Strong initial fit. OTC should prioritise document audit, personal statement positioning and submission timing.";
          }
          if (score >= 3) {
            return "Potentially suitable. OTC should check transcript details, English condition and programme fit before application.";
          }
          return "Needs careful review. OTC should first assess academic level, English readiness and alternative programme options.";
        }

        function updateReview() {
          const data = Object.fromEntries(new FormData(form).entries());
          const score = scoreProfile(data);
          const advice = buildAdvice(score);
          result.innerHTML = "<strong>Initial OTC review band:</strong> " + advice + "<br><span>This is guidance only. Final eligibility depends on official university admissions checks.</span>";
          const body = [
            "OTC University Application Screening",
            "",
            "Programme: " + currentProgramme.institution + " - " + currentProgramme.programme,
            "Country: " + currentProgramme.country,
            "School: " + currentProgramme.school,
            "Programme band: " + currentProgramme.band,
            "Target route country: " + (data.targetCountry || ""),
            "Target route state: " + (data.targetState || ""),
            "Target route institution: " + (data.targetInstitution || ""),
            "Student name: " + (data.studentName || ""),
            "Email: " + (data.email || ""),
            "Current institution: " + (data.institution || ""),
            "Current major: " + (data.major || ""),
            "Qualification stage: " + (data.stage || ""),
            "GPA / average: " + (data.gpa || ""),
            "English score: " + (data.english || ""),
            "Target intake: " + (data.intake || ""),
            "Notes: " + (data.notes || ""),
            "",
            "Initial OTC review band: " + advice
          ].join("\\n");
          mailtoButton.href = "mailto:office@overseasuk.com?subject=" + encodeURIComponent("OTC University Application Screening - " + currentProgramme.institution + " " + currentProgramme.programme) + "&body=" + encodeURIComponent(body);
        }

        reviewButton.addEventListener("click", updateReview);
        form.addEventListener("input", updateReview);
        countryFilter.addEventListener("change", refreshProgrammes);
        institutionFilter.addEventListener("change", refreshProgrammes);
        schoolFilter.addEventListener("change", refreshProgrammes);
        programmeFilter.addEventListener("change", function () {
          const selected = programmes.find((item) => item.id === programmeFilter.value);
          if (selected) renderProgramme(selected);
          renderCards(filteredProgrammes());
        });
        programmeCardGrid.addEventListener("click", function (event) {
          const card = event.target.closest("[data-programme-id]");
          if (!card) return;
          const selected = programmes.find((item) => item.id === card.dataset.programmeId);
          if (selected) renderProgramme(selected);
          renderCards(filteredProgrammes());
        });
        applicationCountryMap.addEventListener("click", function (event) {
          const card = event.target.closest("[data-country-jump]");
          if (!card) return;
          event.preventDefault();
          countryFilter.value = card.dataset.countryJump;
          institutionFilter.value = "All";
          schoolFilter.value = "All";
          history.replaceState(null, "", "/university-applications/?country=" + encodeURIComponent(card.dataset.countryJump) + "#programme-directory");
          refreshProgrammes();
          document.getElementById("programme-directory").scrollIntoView({ behavior: "smooth", block: "start" });
        });
        refreshFilters();
        applyIncomingRoute();
        if (!hasIncomingCountry && countryFilter.value === "All") {
          countryFilter.value = "United Kingdom";
        }
        refreshProgrammes();
      })();
    </script>
  `
});

const studyGroupNorthAmericaInstitutions = [
  {
    name: "California State University San Marcos",
    location: "California",
    url: "https://students.studygroup.com/study-options/direct-admit/california-state-university-san-marcos"
  },
  {
    name: "DePaul University",
    location: "Illinois",
    url: "https://students.studygroup.com/study-options/direct-admit/depaul-university"
  },
  {
    name: "Florida Atlantic University",
    location: "Florida",
    url: "https://students.studygroup.com/study-options/direct-admit/florida-atlantic-university"
  },
  {
    name: "James Madison University",
    location: "Virginia",
    url: "https://students.studygroup.com/study-options/direct-admit/james-madison-university"
  },
  {
    name: "Long Island University",
    location: "New York",
    url: "https://students.studygroup.com/study-options/direct-admit/long-island-university"
  },
  {
    name: "Mercer University",
    location: "Georgia",
    url: "https://students.studygroup.com/study-options/direct-admit/mercer-university"
  },
  {
    name: "New Jersey Institute of Technology",
    location: "New Jersey",
    url: "https://students.studygroup.com/study-options/direct-admit/new-jersey-institute-of-technology"
  },
  {
    name: "Texas A&M University-Corpus Christi",
    location: "Texas",
    url: "https://students.studygroup.com/study-options/direct-admit/texas-am-corpus-christi"
  },
  {
    name: "Towson University",
    location: "Maryland",
    url: "https://students.studygroup.com/study-options/direct-admit/towson-university"
  },
  {
    name: "University of Hartford",
    location: "Connecticut",
    url: "https://students.studygroup.com/study-options/direct-admit/university-of-hartford"
  },
  {
    name: "University of Wisconsin-Stout",
    location: "Wisconsin",
    url: "https://students.studygroup.com/study-options/direct-admit/wisconsin-stout"
  },
  {
    name: "Western Washington University",
    location: "Washington",
    url: "https://students.studygroup.com/study-options/direct-admit/western-washington-university"
  }
];

function studyGroupNorthAmericaCards(locale = "en") {
  const officialLabel = locale === "zh" ? "官方資訊" : "Official info";
  const screeningLabel = locale === "zh" ? "OTC 評估" : "OTC screening";
  const routeLabel = locale === "zh" ? "Study Group 北美直錄 / 銜接資訊" : "Study Group North America direct-admit information";
  return studyGroupNorthAmericaInstitutions.map((institution) => {
    const screeningHref = `/university-applications/?country=United%20States&institution=${encodeURIComponent(institution.name)}#otc-apply-form`;
    return `
      <article class="na-institution-card">
        <span>${institution.location}</span>
        <strong>${institution.name}</strong>
        <p>${routeLabel}</p>
        <div class="na-card-actions">
          <a href="${institution.url}" target="_blank" rel="noopener">${officialLabel}</a>
          <a href="${screeningHref}">${screeningLabel}</a>
        </div>
      </article>
    `;
  }).join("");
}

const studyGroup2026Applications = pageShell({
  title: "Study Group 2026 Applications | OTC Study Hub",
  current: "applications",
  description: "OTC application support for selected Study Group UK, Europe and North America pathway and direct-entry routes for July-December 2026 intakes.",
  image: "/assets/study-group-2026-social-thumb-v2.png",
  imageWidth: 1200,
  imageHeight: 1200,
  imageAlt: "OTC Study Group 2026 pathway and direct-entry application preview",
  path: "/study-group-2026-applications/",
  body: `
    <section class="page-hero application-hero studygroup-hero"><div class="band"><div class="eyebrow">2026 July-December Intakes</div><h1>Study Group Pathway & Direct-Entry Applications</h1><p>OTC supports students comparing selected Study Group pathway, direct-entry and international routes for 2026 entry.</p><div class="hero-actions"><a class="btn btn-primary" href="#studygroup-route-review">Request route review</a><a class="btn btn-secondary" href="/university-applications/?country=United%20Kingdom&institution=Study%20Group%20UK%2FEU%20International%20Study%20Centres#otc-apply-form">Open application form</a><a class="btn btn-secondary" href="/application-service-standards/">Service standards</a></div></div></section>

    <main>
      <section class="band compact-band">
        <div class="studygroup-window-panel">
          <div>
            <span>Recommended timing</span>
            <strong>Prepare the file before late June or mid July where possible.</strong>
            <p>Some 2026 routes have short confirmation windows. OTC therefore prioritises transcript checks, English evidence, course matching and admissions follow-up before students lose useful intake options.</p>
          </div>
          <div class="studygroup-date-row">
            <article><b>30 Jun 2026</b><em>Use as an internal check date for direct-entry routes that may close earlier.</em></article>
            <article><b>15 Jul 2026</b><em>Use as an internal check date for selected pathway and wider route reviews.</em></article>
          </div>
        </div>
      </section>

      <section class="band studygroup-routes-section">
        <div class="section-head compact-head">
          <div class="eyebrow">Route Coverage</div>
          <h2>Selected routes OTC can screen for 2026 applicants.</h2>
          <p>Final availability, entry requirements, fees, scholarships, progression rules and application outcomes must always be confirmed against current provider and university instructions.</p>
        </div>
        <div class="studygroup-route-grid">
          <article>
            <div class="institution-logo logo-studygroup"><b>Study Group</b><em>UK / Europe ISC</em></div>
            <span>UK / Europe ISC</span>
            <strong>IFY, International Year One / Two and Pre-Master routes</strong>
            <p>For students who need a structured pathway before progressing to a university degree.</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=Study%20Group%20UK%2FEU%20International%20Study%20Centres&programme=IFY%20%2F%20IY1%20%2F%20IY2%20%2F%20Pre-Master%20application%20screening#otc-apply-form">Start screening</a>
          </article>
          <article>
            <div class="institution-logo logo-huddersfield"><b>Huddersfield</b><em>London</em></div>
            <span>Huddersfield London</span>
            <strong>UG / PG Direct Entry</strong>
            <p>For students whose previous study and English profile may support a direct-entry application.</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=University%20of%20Huddersfield%20London#otc-apply-form">Start screening</a>
          </article>
          <article>
            <div class="institution-logo logo-rhul"><b>Royal Holloway</b><em>University of London</em></div>
            <span>Royal Holloway</span>
            <strong>UG, PG and PhD Direct Entry</strong>
            <p>For students considering Royal Holloway and needing a clean eligibility and document review.</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=Royal%20Holloway%2C%20University%20of%20London#otc-apply-form">Start screening</a>
          </article>
          <article>
            <div class="institution-logo logo-northamerica"><b>Study Group</b><em>North America</em></div>
            <span>North America</span>
            <strong>US ISC and UG / PG Direct Options</strong>
            <p>For students comparing UK and North America routes for 2026 entry.</p>
            <div class="route-card-actions">
              <a href="#north-america-institutions">View institution list</a>
              <a href="/university-applications/?country=United%20States&institution=Study%20Group%20North%20America#otc-apply-form">Start screening</a>
            </div>
          </article>
          <article>
            <div class="institution-logo logo-bellerbys"><b>Bellerbys</b><em>Global</em></div>
            <span>Bellerbys Global</span>
            <strong>International school and pathway options</strong>
            <p>For younger learners or families considering an international preparation route.</p>
            <a href="mailto:office@overseasuk.com?subject=Study%20Group%202026%20Bellerbys%20Global%20Route%20Review">Request review</a>
          </article>
        </div>
      </section>

      <section class="band compact-band north-america-institutions" id="north-america-institutions">
        <div class="section-head compact-head">
          <div class="eyebrow">North America</div>
          <h2>Study Group North America institution list.</h2>
          <p>Click a university to open its public Study Group information page, or start an OTC screening request for that institution.</p>
        </div>
        <div class="north-america-list">
          ${studyGroupNorthAmericaCards("en")}
        </div>
        <div class="notice">Institution availability, eligible degree levels, intakes, entry requirements and fees must be checked against the current Study Group and university instructions before an application is submitted.</div>
      </section>

      <section class="band compact-band" id="studygroup-route-review">
        <div class="studygroup-action-layout">
          <div>
            <div class="eyebrow">OTC Application Workflow</div>
            <h2>What OTC checks before recommending a route.</h2>
            <ol class="service-steps">
              <li>Student profile: current school or university, qualification stage, target subject and preferred intake.</li>
              <li>Academic evidence: transcript, grading scale, course descriptions, diploma or enrolment confirmation where relevant.</li>
              <li>English readiness: IELTS, TOEFL, PTE, Duolingo or internal English plan where accepted.</li>
              <li>Route match: foundation, International Year One, pre-master, direct entry or alternative destination.</li>
              <li>Deadline control: missing-document list, application timeline and confirmation follow-up.</li>
            </ol>
          </div>
          <aside>
            <strong>Send OTC a route review request</strong>
            <p>Include current qualification, latest transcript, English score, target subject, preferred destination and whether the student can make a quick confirmation decision.</p>
            <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Study%20Group%202026%20Route%20Review&body=Student%20name%3A%0ACurrent%20school%20%2F%20university%3A%0ACurrent%20qualification%3A%0ATarget%20subject%3A%0APreferred%20destination%3A%0ATarget%20intake%3A%0AEnglish%20score%3A%0ATranscript%20status%3A%0ANotes%3A">Email OTC</a>
            <a class="btn btn-light" href="/university-applications/#otc-apply-form">Use application form</a>
          </aside>
        </div>
      </section>

      <section class="band">
        <div class="notice">This public page is an OTC application-support page. OTC does not guarantee admission, scholarship, visa, accommodation, credit transfer or progression. References to Study Group, universities or centres are route-context information only unless a written agreement or official instruction states otherwise.</div>
      </section>
    </main>
  `
});

const studyGroup2026ApplicationsZh = pageShell({
  title: "Study Group 2026 申請 | OTC Study Hub",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC 中文申請支持頁：Study Group 2026 年 7-12 月入學 pathway、直入與國際路線初步評估。",
  image: "/assets/study-group-2026-social-thumb-v2.png",
  imageWidth: 1200,
  imageHeight: 1200,
  imageAlt: "OTC Study Group 2026 pathway 與直入申請預覽圖",
  path: "/zh/study-group-2026-applications/",
  body: `
    <section class="page-hero application-hero studygroup-hero"><div class="band"><div class="eyebrow">2026 年 7-12 月入學</div><h1>Study Group Pathway 與直入申請</h1><p>OTC 協助學生比較 Study Group 相關 pathway、直入和國際升學路線，並為 2026 年入學準備申請文件。</p><div class="hero-actions"><a class="btn btn-primary" href="#studygroup-route-review">申請路線評估</a><a class="btn btn-secondary" href="/university-applications/?country=United%20Kingdom&institution=Study%20Group%20UK%2FEU%20International%20Study%20Centres#otc-apply-form">打開申請表</a><a class="btn btn-secondary" href="/application-service-standards/">服務標準</a></div></div></section>

    <main>
      <section class="band compact-band">
        <div class="studygroup-window-panel">
          <div>
            <span>建議時間</span>
            <strong>盡量在 6 月底或 7 月中以前完成文件準備。</strong>
            <p>部分 2026 路線的確認窗口較短。OTC 會優先處理成績單、英文證明、課程匹配和 admissions follow-up，避免學生錯過合適的入學選項。</p>
          </div>
          <div class="studygroup-date-row">
            <article><b>30 Jun 2026</b><em>可作為部分直入路線的內部檢查日期。</em></article>
            <article><b>15 Jul 2026</b><em>可作為部分 pathway 和 wider route review 的內部檢查日期。</em></article>
          </div>
        </div>
      </section>

      <section class="band studygroup-routes-section">
        <div class="section-head compact-head">
          <div class="eyebrow">路線範圍</div>
          <h2>OTC 可為 2026 申請人初步篩選的路線。</h2>
          <p>最終名額、入學要求、學費、獎學金、銜接規則和申請結果，均需以 provider 或大學最新官方指引為準。</p>
        </div>
        <div class="studygroup-route-grid">
          <article>
            <div class="institution-logo logo-studygroup"><b>Study Group</b><em>UK / Europe ISC</em></div>
            <span>UK / Europe ISC</span>
            <strong>IFY、International Year One / Two 和 Pre-Master 路線</strong>
            <p>適合需要先讀 pathway，再銜接大學學位的學生。</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=Study%20Group%20UK%2FEU%20International%20Study%20Centres&programme=IFY%20%2F%20IY1%20%2F%20IY2%20%2F%20Pre-Master%20application%20screening#otc-apply-form">開始評估</a>
          </article>
          <article>
            <div class="institution-logo logo-huddersfield"><b>Huddersfield</b><em>London</em></div>
            <span>Huddersfield London</span>
            <strong>本科 / 研究生直入申請</strong>
            <p>適合已有一定學歷和英文基礎，可能符合 direct-entry 要求的學生。</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=University%20of%20Huddersfield%20London#otc-apply-form">開始評估</a>
          </article>
          <article>
            <div class="institution-logo logo-rhul"><b>Royal Holloway</b><em>University of London</em></div>
            <span>Royal Holloway</span>
            <strong>本科、研究生和博士直入申請</strong>
            <p>適合考慮 Royal Holloway 並需要整理申請資格和文件的學生。</p>
            <a href="/university-applications/?country=United%20Kingdom&institution=Royal%20Holloway%2C%20University%20of%20London#otc-apply-form">開始評估</a>
          </article>
          <article>
            <div class="institution-logo logo-northamerica"><b>Study Group</b><em>North America</em></div>
            <span>North America</span>
            <strong>美國 ISC 與本科 / 研究生直入選項</strong>
            <p>適合正在比較英國和北美 2026 入學路線的學生。</p>
            <div class="route-card-actions">
              <a href="#north-america-institutions">查看院校清單</a>
              <a href="/university-applications/?country=United%20States&institution=Study%20Group%20North%20America#otc-apply-form">開始評估</a>
            </div>
          </article>
          <article>
            <div class="institution-logo logo-bellerbys"><b>Bellerbys</b><em>Global</em></div>
            <span>Bellerbys Global</span>
            <strong>國際學校與 pathway 選項</strong>
            <p>適合年齡較小、家庭正在考慮國際預備教育路線的學生。</p>
            <a href="mailto:office@overseasuk.com?subject=Study%20Group%202026%20Bellerbys%20Global%20Route%20Review">申請評估</a>
          </article>
        </div>
      </section>

      <section class="band compact-band north-america-institutions" id="north-america-institutions">
        <div class="section-head compact-head">
          <div class="eyebrow">North America</div>
          <h2>Study Group 北美合作院校清單。</h2>
          <p>點擊院校可打開 Study Group 公開資訊頁；如學生條件匹配，也可直接進入 OTC 申請評估表。</p>
        </div>
        <div class="north-america-list">
          ${studyGroupNorthAmericaCards("zh")}
        </div>
        <div class="notice">院校名單、可申請學位層級、入學時間、入學要求和費用，均需在遞交申請前按 Study Group 與大學最新官方指引確認。</div>
      </section>

      <section class="band compact-band" id="studygroup-route-review">
        <div class="studygroup-action-layout">
          <div>
            <div class="eyebrow">OTC 申請流程</div>
            <h2>OTC 推薦路線前會先檢查什麼。</h2>
            <ol class="service-steps">
              <li>學生背景：目前學校或大學、學歷階段、目標專業和偏好入學時間。</li>
              <li>學術文件：成績單、grading scale、課程描述、畢業證明或在讀證明。</li>
              <li>英文準備：IELTS、TOEFL、PTE、Duolingo 或可接受的內部英文方案。</li>
              <li>路線匹配：foundation、International Year One、pre-master、直入或其他目的地。</li>
              <li>時間控制：缺失文件清單、申請時間表和 confirmation follow-up。</li>
            </ol>
          </div>
          <aside>
            <strong>向 OTC 發送路線評估請求</strong>
            <p>請提供目前學歷、最新成績單、英文成績、目標專業、偏好目的地，以及學生是否可以較快作出確認決定。</p>
            <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Study%20Group%202026%20Route%20Review&body=Student%20name%3A%0ACurrent%20school%20%2F%20university%3A%0ACurrent%20qualification%3A%0ATarget%20subject%3A%0APreferred%20destination%3A%0ATarget%20intake%3A%0AEnglish%20score%3A%0ATranscript%20status%3A%0ANotes%3A">Email OTC</a>
            <a class="btn btn-light" href="/university-applications/#otc-apply-form">使用申請表</a>
          </aside>
        </div>
      </section>

      <section class="band">
        <div class="notice">本頁為 OTC 申請支持頁。OTC 不保證錄取、獎學金、簽證、住宿、credit transfer 或 progression 結果。除非有書面協議或官方指引，頁面中對 Study Group、大學或 centre 的引用僅作路線說明。</div>
      </section>
    </main>
  `
});

const internationalCurriculumTutoring = pageShell({
  title: "International Curriculum Bilingual Tutoring | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">International Curriculum Tutoring</div><h1>A-Level, BTEC, IB and AP bilingual tutoring</h1><p>雙語輔導 for Chinese EAL learners in international schools, international departments and pathway programmes who need to move from subject understanding to confident English academic output.</p></div></section>
    <section class="band">
      ${translateEntry()}
      <div style="height:18px"></div>
      <div class="section-head">
        <h2>Course support is grouped by curriculum type and learning pain point.</h2>
        <p>This service line sits between Courses, Academic Tutoring and Overseas Publishing. Tutoring helps students understand concepts, plan coursework, read rubrics, build academic vocabulary and practise responsible written output. It is not official school delivery, official examination training, model-answer sale or assignment completion.</p>
      </div>
      <div class="curriculum-map curriculum-map-wide">${internationalCurriculumCards()}</div>
      <div style="height:28px"></div>
      <div class="curriculum-support-grid">
        <article>
          <strong>Subject concept tutoring</strong>
          <span>學科概念雙語講解</span>
          <p>Business, economics, accounting, psychology, social science and foundation subjects explained in bilingual language students can actually use.</p>
        </article>
        <article>
          <strong>Essay and exam-response coaching</strong>
          <span>英文答題與論文段落輔導</span>
          <p>Command words, paragraph logic, analysis, evaluation, comparison, evidence use and concise academic phrasing.</p>
        </article>
        <article>
          <strong>Assignment and coursework planning</strong>
          <span>作業與 coursework 規劃</span>
          <p>Brief breakdown, rubric interpretation, evidence planning, research-question design and weekly progress structure.</p>
        </article>
        <article>
          <strong>Glossary and writing toolkit support</strong>
          <span>雙語詞彙與寫作工具箱</span>
          <p>Course-linked academic vocabulary, phrase banks, evaluation verbs and bilingual study companion resources from Overseas Publishing.</p>
        </article>
      </div>
      <div style="height:24px"></div>
      <div class="support-mini-grid">
        <aside class="support-note">
          <h3>Best-fit learners</h3>
          <ol>
            <li>Chinese international-school students moving from bilingual learning into English-medium assessment.</li>
            <li>BTEC, IB and coursework-heavy learners who need planning and writing structure.</li>
            <li>A-Level, IGCSE and AP students who understand concepts but underperform in English output.</li>
          </ol>
        </aside>
        <aside class="support-note boundary">
          <h3>Academic boundary</h3>
          <p>OTC can explain, coach, review requirements and discuss structure. OTC cannot write assessed work, provide ready-made submission answers, guarantee grades or present itself as an official awarding-body service.</p>
        </aside>
        <aside class="support-note contact">
          <h3>Enquiry</h3>
          <p>Send the curriculum, subject, school year, current topic, assignment brief or exam paper type, deadline and support goal.</p>
          <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=International%20Curriculum%20Bilingual%20Tutoring%20Enquiry">Request Support</a>
        </aside>
      </div>
    </section>
  `
});

const creditAlliance = pageShell({
  title: "學分聯盟 | 海外留學導報",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "海外督導學分聯盟：以 OTHM、Open University、英澳美加紐學分與先前學習記錄為基礎，整理跨國升學、credit transfer、RPL 與申請文件路線。",
  path: "/insights/credit-alliance/",
  body: `
    <link rel="stylesheet" href="/styles.css?v=academic-reading-stickers-20260524">
    <main class="credit-alliance-page">
      <header class="credit-herald-masthead">
        <div>
          <div class="credit-brand-en">Overseas Study Review</div>
          <div class="credit-brand-zh">海外留學導報</div>
        </div>
        <div class="credit-issue">
          <span>Special Issue</span>
          <strong>學分聯盟專輯</strong>
          <em>overseasuk.com/insights/credit-alliance</em>
        </div>
      </header>

      <section class="credit-hero">
        <div>
          <div class="eyebrow">Credit Alliance</div>
          <h1>你的學分，全球通用</h1>
          <p>把學生已完成的課程、資格、成績單、學習成果與申請目標整理成可閱讀、可比較、可提交的跨國學分路線文件。</p>
          <div class="credit-actions">
            <a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=Credit%20Alliance%20Review">提交學分評估</a>
            <a class="btn btn-secondary" href="/othm-qualifications/">OTHM 資格路線</a>
            <a class="btn btn-secondary" href="/zh/insights/">返回留學導報</a>
          </div>
        </div>
        <div class="credit-stat-strip">
          <div><strong>5</strong><span>英澳美加紐地區路線</span></div>
          <div><strong>7</strong><span>Level 3-7 學習層級</span></div>
          <div><strong>6</strong><span>Credit profile 構成項</span></div>
          <div><strong>3</strong><span>資格 / 課程 / 文件三層體系</span></div>
          <div><strong>1</strong><span>學生個人記錄組合</span></div>
        </div>
      </section>

      <div class="credit-layout">
        <article class="credit-main">
          <section class="credit-section">
            <div class="credit-section-label">01</div>
            <h2>三層體系</h2>
            <p>學分聯盟不是單一課程入口，而是一個把資格、課程與文件連起來的工作系統：先確認學生已完成什麼，再判斷可否對接下一階段，最後把材料整理成院校能審閱的格式。</p>
            <div class="credit-three-layer">
              <div><b>Qualification</b><strong>資格層</strong><span>OTHM、OU、BTEC、foundation、college 或其他可核查學習記錄。</span></div>
              <div><b>Progression</b><strong>銜接層</strong><span>advanced entry、top-up、credit transfer、RPL 或 postgraduate route。</span></div>
              <div><b>Evidence</b><strong>文件層</strong><span>證書、成績單、module spec、learning outcomes、CV、PS 與推薦材料。</span></div>
            </div>
          </section>

          <section class="credit-section">
            <div class="credit-section-label">02</div>
            <h2>Level 3-7 資格速覽</h2>
            <div class="credit-table">
              <div class="credit-row head"><span>Level</span><span>常見用途</span><span>文件重點</span></div>
              <div class="credit-row"><span>Level 3</span><span>Foundation / first-year entry screening</span><span>subject readiness, English, transcripts</span></div>
              <div class="credit-row"><span>Level 4</span><span>Year 1 / HNC style prior learning</span><span>unit outcomes, assessment evidence</span></div>
              <div class="credit-row"><span>Level 5</span><span>Top-up / advanced standing</span><span>credits, module mapping, business pathway</span></div>
              <div class="credit-row"><span>Level 6</span><span>Bachelor completion / graduate route</span><span>final-year learning outcomes</span></div>
              <div class="credit-row"><span>Level 7</span><span>Master / postgraduate progression</span><span>specialism, dissertation readiness</span></div>
            </div>
          </section>

          <section class="credit-section">
            <div class="credit-section-label">03</div>
            <h2>個人記錄組合</h2>
            <p>每個學生都應建立一份可更新的 credit profile。它不是保證錄取的承諾，而是讓院校、合作方和顧問快速讀懂學生已有學習量與下一步需求的工作文件。</p>
            <div class="credit-profile-grid">
              <div><strong>身份與目標</strong><span>國別、院校、專業、intake</span></div>
              <div><strong>資格證書</strong><span>awarding body、level、dates</span></div>
              <div><strong>成績單</strong><span>grades、credits、units</span></div>
              <div><strong>課綱與成果</strong><span>learning outcomes、TQT / GLH</span></div>
              <div><strong>英文與作品</strong><span>IELTS、PS、portfolio</span></div>
              <div><strong>申請紀錄</strong><span>submission、feedback、next step</span></div>
            </div>
          </section>

          <section class="credit-section credit-success-note">
            <div class="credit-section-label">04</div>
            <h2>成功率如何理解</h2>
            <p>學分聯盟的公開表述不承諾 100% 錄取、credit transfer 或 RPL 結果。OTC 的可控目標是提高文件完整度、路線匹配度與院校溝通效率，把不清楚的學習經歷整理成可審核材料。</p>
          </section>

          <section class="credit-section">
            <div class="credit-section-label">05</div>
            <h2>典型路線</h2>
            <div class="credit-route-cards">
              <article><b>OTHM L5</b><strong>Business top-up route</strong><p>用 Level 5 Business Management 文件支持英國 top-up 或澳洲 credit / RPL readiness 初步審閱。</p></article>
              <article><b>OU</b><strong>Open University progression</strong><p>把 OU module、credits 和 transcript 轉化為海外申請可讀的 academic record。</p></article>
              <article><b>VET / TAFE</b><strong>Australia vocational bridge</strong><p>針對澳洲 college、TAFE、VET 及職業導向課程建立證據包和問題清單。</p></article>
            </div>
          </section>

          <section class="credit-section">
            <div class="credit-section-label">06</div>
            <h2>費用結構</h2>
            <div class="credit-fee-bars">
              <div><span>Level 3-4 file screen</span><b>from £180</b></div>
              <div><span>Level 5-6 credit profile</span><b>from £380</b></div>
              <div><span>Level 7 postgraduate route</span><b>from £520</b></div>
              <div><span>Multi-country pathway pack</span><b>from £880</b></div>
            </div>
          </section>
        </article>

        <aside class="credit-side">
          <div class="credit-widget dark">
            <span>Quick check</span>
            <strong>適合誰？</strong>
            <p>已完成 OTHM、OU、BTEC、HND、foundation、college、VET 或部分大學課程，希望評估下一步英澳美加紐升學銜接的學生。</p>
          </div>
          <div class="credit-widget mini">
            <span>01</span>
            <strong>初步可評估材料</strong>
            <p>證書、成績單、在讀證明、課程名稱、學分數、授課語言與目標專業。</p>
          </div>
          <div class="credit-widget mini">
            <span>02</span>
            <strong>核心判斷</strong>
            <p>是否同層級、是否同學科、是否有足夠 learning outcomes 支持對接。</p>
          </div>
          <div class="credit-widget">
            <strong>OU 優勢</strong>
            <ul>
              <li>學分與 module 記錄清楚</li>
              <li>適合成人學習與遠程學習背景說明</li>
              <li>可與海外申請文件形成連續記錄</li>
            </ul>
          </div>
          <div class="credit-widget mini">
            <span>03</span>
            <strong>OTHM 對接用途</strong>
            <p>適合整理 Level 3-7 資格、unit spec、assessment record 及 progression note。</p>
          </div>
          <div class="credit-widget mini">
            <span>04</span>
            <strong>澳洲方向</strong>
            <p>重點看 credit、RPL、TAFE/VET bridge、professional pathway 與 course outline。</p>
          </div>
          <div class="credit-widget mini">
            <span>05</span>
            <strong>英國方向</strong>
            <p>重點看 top-up、advanced entry、foundation-to-degree 與 UCAS / direct application。</p>
          </div>
          <div class="credit-widget mini">
            <span>06</span>
            <strong>美加紐方向</strong>
            <p>重點看 transcript evaluation、course-by-course mapping 與 transfer credit policy。</p>
          </div>
          <div class="credit-widget">
            <strong>五步申請流程</strong>
            <ol>
              <li>收集證書與成績單</li>
              <li>確認目標國別與課程</li>
              <li>整理 module / outcomes</li>
              <li>生成 credit profile</li>
              <li>提交院校或進行專業轉介</li>
            </ol>
          </div>
          <div class="credit-widget mini">
            <span>Output</span>
            <strong>OTC 可交付文件</strong>
            <p>Credit profile、文件清單、院校問題清單、路線比較表與下一步申請摘要。</p>
          </div>
          <div class="credit-widget mini">
            <span>Timing</span>
            <strong>建議提前時間</strong>
            <p>普通申請提前 8-12 週；涉及 RPL / advanced standing 建議提前 12-20 週。</p>
          </div>
          <div class="credit-widget mini">
            <span>Boundary</span>
            <strong>結果邊界</strong>
            <p>Credit、RPL、錄取與簽證結果由院校或相關機構決定；OTC 負責材料與溝通準備。</p>
          </div>
          <div class="credit-widget mini">
            <span>Next</span>
            <strong>下一步</strong>
            <p>先提交現有學習記錄與目標國別；OTC 再判斷是否需要補課綱、推薦信或英文材料。</p>
          </div>
          <div class="credit-widget contact">
            <strong>聯絡 OTC</strong>
            <p>office@overseasuk.com<br>WhatsApp +44 7947 991572<br>WeChat: overseasus</p>
          </div>
        </aside>
      </div>

      <section class="credit-tabs">
        <div class="section-head compact-head">
          <div class="eyebrow">Pathway Map</div>
          <h2>五地區流程圖</h2>
          <p>不同地區的 credit、RPL、advanced standing 和 progression 規則不同。以下流程用於前期方向判斷，不代替院校正式決定。</p>
        </div>
        <div class="credit-world-map" aria-label="Credit route world map">
          ${[
            ["uk", "英國", "UK route"],
            ["au", "澳洲", "Australia route"],
            ["us", "美國", "US route"],
            ["ca", "加拿大", "Canada route"],
            ["nz", "紐西蘭", "New Zealand route"]
          ].map(([key, label, title], index) => `
            <details class="credit-map-node node-${key}" ${index === 0 ? "open" : ""}>
              <summary>${label}</summary>
              <div class="credit-map-card">
                <strong>${title}</strong>
                <div class="credit-flow">
                  ${["目標課程", "資格核查", "成績單", "課綱匹配", "英文/作品", "提交審閱", "結果跟進"].map((step, i) => `<div><b>${String(i + 1).padStart(2, "0")}</b><span>${step}</span></div>`).join("")}
                </div>
              </div>
            </details>
          `).join("")}
          <div class="credit-map-note">點擊地區名稱展開對應 credit / RPL / progression 前期工作流。</div>
        </div>
        <script>
          (() => {
            const map = document.currentScript.previousElementSibling;
            if (!map) return;
            const nodes = Array.from(map.querySelectorAll(".credit-map-node"));
            nodes.forEach((node) => {
              node.addEventListener("toggle", () => {
                if (!node.open) return;
                nodes.forEach((other) => {
                  if (other !== node) other.removeAttribute("open");
                });
              });
            });
            map.addEventListener("click", (event) => {
              if (event.target.closest(".credit-map-node")) return;
              nodes.forEach((node) => node.removeAttribute("open"));
            });
          })();
        </script>
      </section>

      <section class="credit-compare">
        <div class="section-head compact-head">
          <div class="eyebrow">Comparison</div>
          <h2>五地區比較</h2>
        </div>
        <div class="credit-table wide">
          <div class="credit-row head"><span>地區</span><span>認證 / 審核機制</span><span>週期</span><span>OTHM 接受度</span></div>
          <div class="credit-row"><span>英國</span><span>university progression / advanced entry</span><span>2-8 weeks</span><span>路線較清晰，按院校判斷</span></div>
          <div class="credit-row"><span>澳洲</span><span>credit / RPL / AQF-context review</span><span>4-10 weeks</span><span>需文件化解釋 UK RQF</span></div>
          <div class="credit-row"><span>美國</span><span>transfer credit / evaluation</span><span>4-12 weeks</span><span>通常需要 course-by-course reading</span></div>
          <div class="credit-row"><span>加拿大</span><span>transfer / PLAR</span><span>4-12 weeks</span><span>高度依賴院校政策</span></div>
          <div class="credit-row"><span>紐西蘭</span><span>credit recognition / pathway</span><span>4-10 weeks</span><span>需對接 NZQF 語境</span></div>
        </div>
      </section>

      <section class="credit-share">
        <strong>分享學分聯盟</strong>
        <a href="https://twitter.com/intent/tweet?text=OTC%20Credit%20Alliance&url=https://overseasuk.com/insights/credit-alliance/" target="_blank" rel="noopener">X</a>
        <a href="https://www.threads.net/intent/post?text=OTC%20Credit%20Alliance%20https://overseasuk.com/insights/credit-alliance/" target="_blank" rel="noopener">Threads</a>
        <a href="mailto:?subject=OTC%20Credit%20Alliance&body=https://overseasuk.com/insights/credit-alliance/">Email</a>
      </section>
    </main>
  `
});

const chineseEntrance = pageShell({
  title: "中文 | OTC Study Hub",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC Study Hub 中文頁：海外督導｜雙語世界，整合國際課程、學術英語、升學路線、練習工具、留學導報與 Overseas Publishing 雙語出版資源。",
  body: `
    <section class="hero zh-page zh-home-hero">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">海外督導 · 雙語世界 · 留學申請 · 海外書局</div>
          <div class="hero-title-block zh-play-title">
            <h1>海外督導｜雙語世界</h1>
            <h2 class="hero-subhead">Overseas Tutorial Centre · 海外督導</h2>
          </div>
          <p>公開、雙語、可反覆使用的學習入口：學課程、練英文、懂升學。</p>
          <div class="hero-directory">
            <a href="/insights/credit-alliance/"><strong>學分聯盟</strong><span>課程地圖、雙語解釋、練習工具與學術英語支持</span></a>
            <a href="#open-learning-platform"><strong>家長規劃</strong><span>升學路線、文件清單、國別選擇與申請時間線</span></a>
            <a href="/services/"><strong>機構運作</strong><span>出版、翻譯、教學資源、活動與機構服務支持</span></a>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#open-learning-platform">開始學習</a>
            <a class="btn btn-secondary" href="/international-curriculum-tutoring/">課程輔導</a>
            <a class="btn btn-secondary" href="#overseas-publishing">海外書局</a>
            <a class="btn btn-secondary" href="/university-applications/">申請評估</a>
          </div>
        </div>
        <aside class="hero-panel zh-priority-panel">
          <div class="panel-label">學習路徑</div>
          <div class="zh-learning-ladder" aria-label="OTC learning path">
            <div><b>01</b><strong>Learn</strong><span>雙語概念、課程地圖、知識文章</span></div>
            <div><b>02</b><strong>Practice</strong><span>口語、詞彙、mock tests、題庫</span></div>
            <div><b>03</b><strong>Plan</strong><span>升學路線、文件清單、時間線</span></div>
            <div><b>04</b><strong>Apply</strong><span>申請評估、文件整理、專業轉介</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section class="band compact-band zh-open-learning-section" id="open-learning-platform">
      <div class="section-head compact-head">
        <div class="eyebrow">Open Learning Platform</div>
        <h2>海外督導｜雙語世界</h2>
        <p>內容來自 OTC 教學、申請與出版積累，整理為免費課程、練習工具與留學知識；個別輔導和正式申請另行承接。</p>
      </div>
      <div class="zh-audience-strip" aria-label="Learning audience entrances">
        <a href="/insights/credit-alliance/"><b>For learners</b><strong>學分聯盟</strong><span>從課程、詞彙、練習與文章開始。</span></a>
        <a href="#global-study-map"><b>For families</b><strong>家長規劃</strong><span>理解國別、路線、文件與申請節奏。</span></a>
        <a href="/services/"><b>For educators</b><strong>機構運作</strong><span>出版、翻譯、教學與項目支持。</span></a>
      </div>
      <div class="zh-open-learning-grid">
        <article>
          <b>01</b>
          <strong>公開課程與學習路線</strong>
          <p>A-Level、BTEC、IB、AP、學術英語、升學準備與海外學習方法，逐步整理為中文學生可直接使用的學習地圖。</p>
          <a href="/international-curriculum-tutoring/">查看課程支持</a>
        </article>
        <article>
          <b>02</b>
          <strong>練習工具與題庫</strong>
          <p>口語練習、placement interview、citizenship test、詞彙卡、mock test 和 book-linked digital products 統一進入 Apps & Tools 體系。</p>
          <a href="/apps/">打開 Apps & Tools</a>
        </article>
        <article>
          <b>03</b>
          <strong>留學導報與知識文章</strong>
          <p>以中文文章解釋英澳申請文件、推薦信、personal statement、pathway、信託、海外生活與職業資格等實用主題；申請文件準備文章暫放在導報內。</p>
          <a href="/zh/insights/">閱讀留學導報</a>
        </article>
        <article>
          <b>04</b>
          <strong>雙語出版與學習產品</strong>
          <p>Overseas Publishing 將 study companions、PDF guides、practice apps、worksheet packs 和雙語出版項目沉澱為長期學習資產。</p>
          <a href="#overseas-publishing">進入海外書局</a>
        </article>
      </div>
      <div class="qualification-report-panel vet-tafe-panel" style="margin-top:16px">
        <div>
          <span>職業培訓路線</span>
          <h2>澳洲 VET / TAFE：多板塊職業培訓總覽</h2>
          <p>新增中文子頁面佈局：健康護理、技工建築、商科 IT 創意媒體、RTO/TAFE 篩查清單、TAFE-to-university 銜接與 evidence pack。</p>
        </div>
        <a class="btn btn-dark" href="/zh/australia-vet-tafe-pathways/">打開職業培訓總覽</a>
      </div>
      <p class="source-note">OTC 免費學習資源用於知識普及、學習準備與路線理解；不構成錄取、簽證、考試通過、官方資格或專業意見保證。</p>
    </section>

    <section class="band compact-band zh-othm-centre-section" id="othm-centre">
      <div class="section-head compact-head">
        <div class="eyebrow">OTHM Approved Centre</div>
        <h2>OTHM 中心</h2>
        <p>海外督導的核心資質板塊：以 OTHM approved centre 身份承接資格路線、學習支持、文件整理、進階銜接與澳洲方向資格解讀。</p>
      </div>
      <div class="zh-othm-centre-panel">
        <div class="zh-othm-status">
          <span>Centre status</span>
          <strong>Approved centre DC1802235</strong>
          <p>中心續期已完成，有效期至 2031 年 6 月 30 日。OTHM 相關學習、申請及銜接服務應作為 OTC 中文站的固定核心入口。</p>
          <a class="btn btn-dark" href="/othm-qualifications/">查看 OTHM 資格路線</a>
        </div>
        <div class="zh-othm-links">
          <a href="/othm-level-5-business-management/"><b>01</b><strong>Level 5 Business Management</strong><span>商科管理方向的核心展示課程與學習支持入口。</span></a>
          <a href="/apps/othm-l5bm-companion/"><b>02</b><strong>Study Companion</strong><span>把 OTHM 學習材料延伸為雙語練習、詞彙與自測工具。</span></a>
          <a href="/zh/reports/othm-australia-expansion/"><b>03</b><strong>澳洲銜接解讀</strong><span>以 UK RQF 到 Australia AQF 的文件化解釋支持澳洲教育路線。</span></a>
          <a href="#centre-updates"><b>04</b><strong>中心公告</strong><span>中心續期、澳洲執行董事與重要機構更新集中查閱。</span></a>
        </div>
      </div>
    </section>

    <section class="band compact-band curriculum-overview">
      <div class="section-head compact-head">
        <div class="eyebrow">國際課程輔導</div>
        <h2>課程輔導</h2>
        <p>OTC 支持正在修讀 A-Level、BTEC、IB、AP 及相關國際課程的中國 EAL 學生，把學科理解轉化為英文學術輸出。</p>
      </div>
      <div class="curriculum-map zh-compact-curriculum">${zhInternationalCurriculumCards(4)}</div>
      <div class="zh-compact-action">
        <p>重點是概念講解、command words 解讀、assignment planning、段落結構、證據使用與學術表述。</p>
        <a class="btn btn-dark" href="/international-curriculum-tutoring/">打開國際課程支持</a>
      </div>
    </section>

    <section class="band compact-band zh-publishing-gateway-section" id="overseas-publishing">
      <div class="section-head compact-head">
        <div class="eyebrow">Overseas Publishing</div>
        <h2>海外書局</h2>
        <p>海外書局作為 OTC 的出版與編輯板塊，統一收攏三個對外入口：出版物、編譯部、留學導報。每個入口分別進入對應內容，不再散落在首頁不同位置。</p>
      </div>
      <div class="zh-publishing-gateway">
        <a href="/publishing/">
          <b>01</b>
          <strong>出版物</strong>
          <span>Study companions、公眾書店版本、Payhip 上架產品與作者出版支持。</span>
          <em>進入出版物</em>
        </a>
        <a href="/services/language-context-studio/">
          <b>02</b>
          <strong>編譯部</strong>
          <span>中英翻譯、出版級編修、跨文化語境整理與對外表達校準。</span>
          <em>進入編譯部</em>
        </a>
        <a href="/zh/insights/">
          <b>03</b>
          <strong>留學導報</strong>
          <span>升學路線、申請文件、英澳澳新 pathway 與教育評論文章。</span>
          <em>進入留學導報</em>
        </a>
      </div>
      <div class="zh-publishing-tools">
        <div>
          <span>Digital Learning Tools</span>
          <h3>Apps &amp; Tools</h3>
          <p>Browser-based practice tools, exam drills, vocabulary systems and book-linked digital products from OTC Study Hub and Overseas Publishing.</p>
        </div>
        <div class="zh-publishing-tool-list">
          <a href="/apps/australian-citizenship-test/#embedded-citizenship-app"><strong>Australian Citizenship Test Practice Guide + App</strong><span>Printable PDF guide, question bank, mock tests and browser-based practice package.</span></a>
          <a href="/apps/ucbelt-speaking/#embedded-ucbelt-app"><strong>UCBELT Speaking Test Practice</strong><span>Themed topic practice, full mock sets, bilingual vocabulary and teacher mode.</span></a>
          <a href="/apps/ih-placement-interview/#embedded-ih-app"><strong>IH Placement &amp; Interview Practice</strong><span>Placement-test readiness, speaking interview preparation, vocabulary review and tutor notes.</span></a>
          <a href="/apps/"><strong>Full Apps &amp; Tools Catalogue</strong><span>Learning apps, practice tools, book companion packs and publishing utilities.</span></a>
        </div>
      </div>
    </section>

    <section class="band compact-band zh-global-map-band" id="global-study-map">
      <div class="section-head compact-head">
        <div class="eyebrow">Global Study Map</div>
        <h2>主要留學國家入口</h2>
        <p>點擊地圖上的國家文字，進入對應留學國家頁面。澳洲直接進入已成熟的澳洲辦公室路線。</p>
      </div>
      <div class="zh-global-gateway zh-global-map-wide">
        <img src="/assets/global-office-map-soft.svg?v=20260520-dense" alt="淡色全球辦公室地圖" loading="eager">
        <div class="zh-global-map-labels" aria-label="全球主要留學國家入口">${countryGatewayLabels()}</div>
        <div class="zh-landing-notice">OTC 為獨立教育服務與出版機構；申請結果、錄取、簽證、升讀與認證均以相關機構正式要求為準。</div>
      </div>
    </section>

    <section class="band compact-band zh-institutional-update-section" id="centre-updates">
      <div class="institutional-update-board zh-institutional-update">
        <div class="institutional-update-head">
          <span>機構公告 · 2026 年 5 月</span>
          <h2>中心狀態與澳洲辦公室更新</h2>
          <p>本欄收錄 OTC 對外公開的中心狀態、辦公室建設與重要機構安排。具體證書、郵件與內部審核材料由 OTC 文件系統另行保存。</p>
        </div>
        <div class="institutional-update-cards">
          <article>
            <b>中心狀態</b>
            <strong>OTHM approved centre status 已完成續期</strong>
            <p>Overseas Tutorial Centre 已完成 OTHM approved centre renewal。中心號碼為 <em>DC1802235</em>，本次批准有效期至 <em>2031 年 6 月 30 日</em>。</p>
            <a href="/othm-qualifications/">查看 OTHM 資格路線</a>
          </article>
          <article>
            <b>澳洲辦公室</b>
            <strong>Georgie Barnes 正式受任 OTC Australia 執行董事</strong>
            <p>Georgie Barnes 已正式受任為 Executive Director, OTC Australia，支持澳洲本地協調、院校溝通、學生路線發展及專業轉介邊界。</p>
            <a href="/zh/australia-office-presence/#australia-director">查看澳洲辦公室路線</a>
          </article>
        </div>
      </div>
    </section>

  `
});

const regionalOfficePages = [
  {
    id: "commonwealth",
    title: "英聯邦入口",
    subtitle: "Commonwealth Gateway",
    desc: "面向英國、澳洲、加拿大、新西蘭及其他英聯邦教育路線的申請、轉學、文件與家庭支持入口。",
    regions: ["UK head office coordination", "Australia office route", "Canada / New Zealand route screening", "Commonwealth school and university applications"],
    links: [["澳洲辦公室路線", "/zh/australia-office-presence/"], ["英澳申請文件清單", "/zh/insights/uk-aus-application-documents-checklist/"], ["大學申請評估", "/university-applications/"]]
  },
  {
    id: "united-states",
    title: "美國入口",
    subtitle: "United States Gateway",
    desc: "面向美國本科、研究生、pathway、Study Group North America 及英美路線比較的初步篩選入口。",
    regions: ["US undergraduate route screening", "Graduate application document review", "Study Group North America options", "UK / US route comparison"],
    links: [["Study Group 2026 中文申請", "/zh/study-group-2026-applications/"], ["大學申請評估", "/university-applications/"], ["國際課程輔導", "/international-curriculum-tutoring/"]]
  },
  {
    id: "east-asia",
    title: "東亞入口",
    subtitle: "East Asia Gateway",
    desc: "面向中國大陸、香港、澳門、台灣、日本與韓國學生及家庭的雙語升學、轉學、文件整理與課程支持入口。",
    regions: ["Mainland China student files", "Hong Kong / Taiwan bilingual document support", "Japan / Korea English-taught route screening", "Family communication and tutoring coordination"],
    links: [["CFAU / IBP 大二申請支持", "/advanced-entry-china-programmes/"], ["中文 Study Group 申請頁", "/zh/study-group-2026-applications/"], ["國際課程輔導", "/international-curriculum-tutoring/"]]
  },
  {
    id: "europe",
    title: "歐洲入口",
    subtitle: "Europe Gateway",
    desc: "面向英國與歐洲英語授課本科、碩士、博士、轉學、pathway 與文件準備的區域入口。",
    regions: ["UK and Europe English-taught programmes", "Bachelor / master / PhD route screening", "Transfer and advanced-entry checks", "European pathway and direct-entry options"],
    links: [["Study Group UK / Europe 路線", "/zh/study-group-2026-applications/"], ["大學申請評估", "/university-applications/"], ["機構合作", "/university-partnerships/"]]
  }
].map((office) => ({
  id: office.id,
  html: pageShell({
    title: `${office.title} | OTC Study Hub`,
    current: "zh",
    lang: "zh-Hant",
    locale: "zh",
    description: office.desc,
    body: `
    <section class="page-hero regional-office-hero">
      <div class="band">
        <div class="eyebrow">OTC Regional Office Gateway</div>
        <h1>${office.title}</h1>
        <h2>${office.subtitle}</h2>
        <p>${office.desc}</p>
        <div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(office.subtitle + " enquiry")}">聯絡 OTC</a><a class="btn btn-secondary" href="/zh/">返回中文首頁</a></div>
      </div>
    </section>
    <section class="band regional-office-panel">
      <div class="regional-office-map-card">
        <img src="/assets/global-office-map-soft.svg?v=20260520-dense" alt="${office.title}淡色全球地圖">
        <div>
          <div class="eyebrow">服務範圍</div>
          <h2>${office.subtitle}</h2>
          <p>${office.desc}</p>
        </div>
      </div>
      <div class="regional-office-grid">
        ${office.regions.map((item, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${item}</strong><span>初步篩選、文件整理、時間線說明與後續服務銜接。</span></article>`).join("")}
      </div>
      <div class="regional-office-links">
        ${office.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
      <p class="source-note">區域入口用於服務分流與文件協調。任何簽證、移民、法律、認證或錄取結果均以相應官方機構或合資格專業人士的正式要求為準。</p>
    </section>
  `
  })
}));

const externalProgrammeSupport = pageShell({
  title: "External Programme Support | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">External Programme Support</div><h1>External Programme Support</h1><p>Four external-course entrances for learners registered with other awarding bodies, universities, colleges or pathway providers.</p></div></section>
    <section class="band">
      ${translateEntry()}
      <div style="height:18px"></div>
      <div class="section-head">
        <h2>Choose the external programme first, then review subjects by level.</h2>
        <p>This page is the gateway only. Each of the four cards below opens a subpage where support is arranged as a subject × level matrix. OTC provides tutoring and academic support only; the learner remains registered with their own awarding body, university, college or provider.</p>
      </div>
      <div class="pathway-strip">
        <a href="/courses/">Courses overview</a>
        <a href="/external-programme-support/">External support</a>
        <a href="/resources/">Consulting</a>
        <a href="/search/">Search</a>
      </div>
      <div style="height:18px"></div>
      <div class="external-route-grid">${externalRouteCards()}</div>
      <div style="height:24px"></div>
      <div class="notice">Academic integrity boundary: OTC can explain concepts, review requirements, support planning, discuss structure and improve study skills. OTC cannot act as the awarding body, change grades, guarantee progression, write assessed work, complete portfolios, sit tests or provide ready-made answers for submission.</div>
    </section>
  `
});

function externalProgrammeDetailPage(route) {
  if (route.id === "open-university") {
    return pageShell({
      title: `${route.title} | OTC Study Hub`,
      current: "courses",
      body: `
        <section class="page-hero"><div class="band"><div class="eyebrow">External Programme Support</div><h1>${route.title}</h1><p>A structured OTC-style directory of selected OU courses with tutoring-support routes.</p></div></section>
        <section class="band">
          ${translateEntry()}
          <div style="height:18px"></div>
          <div class="section-head">
            <h2>Open University course list with OTC tutoring-support notes.</h2>
            <p>This page lists selected major OU courses and qualifications that commonly need academic tutoring, reading support, TMA planning, academic English, report writing or progression guidance. It is not an OU official catalogue; always confirm course availability, module structure, fees, entry rules and dates on the official OU page.</p>
          </div>
          <div class="notice">Catalogue standard: each entry is classified by subject and award type. Where a precise course code has not yet been individually verified, the entry is marked as "OU official listing" and links to the relevant official OU subject page or all-courses page for final confirmation.</div>
          <div style="height:18px"></div>
          <div class="pathway-strip">
            <a href="/external-programme-support/">External support overview</a>
            ${externalProgrammeRoutes.map((item) => `<a href="/external-programme-support/${item.id}/">${item.title}</a>`).join("")}
          </div>
          <div style="height:24px"></div>
          <div class="ou-course-directory">${openUniversityCourseList()}</div>
          <div style="height:24px"></div>
          <div class="notice">OTC provides tutoring and academic support only. Learners remain registered with The Open University. OTC does not act for OU, change grades, submit work, complete TMAs or provide ready-made answers for submission.</div>
        </section>
        <script>
          const ouState = { subject: "all", type: "all" };
          const filterRoot = document.querySelector("[data-ou-filters]");
          const cards = Array.from(document.querySelectorAll("[data-ou-card]"));
          const groups = Array.from(document.querySelectorAll("[data-ou-subject]"));

          function applyOuFilters() {
            cards.forEach((card) => {
              const subjectMatch = ouState.subject === "all" || card.dataset.subject === ouState.subject;
              const typeMatch = ouState.type === "all" || card.dataset.type === ouState.type;
              card.hidden = !(subjectMatch && typeMatch);
            });
            groups.forEach((group) => {
              const visible = Array.from(group.querySelectorAll("[data-ou-card]")).some((card) => !card.hidden);
              group.hidden = !visible;
            });
          }

          filterRoot?.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-filter-kind]");
            if (!button) return;
            const kind = button.dataset.filterKind;
            ouState[kind] = button.dataset.filterValue;
            filterRoot.querySelectorAll(\`button[data-filter-kind="\${kind}"]\`).forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
            applyOuFilters();
          });
        </script>
      `
    });
  }

  if (route.id === "btec-pearson") {
    return pageShell({
      title: `${route.title} | OTC Study Hub`,
      current: "courses",
      body: `
        <section class="page-hero"><div class="band"><div class="eyebrow">External Programme Support</div><h1>${route.title}</h1><p>A structured OTC-style catalogue of selected Pearson BTEC qualification routes with tutoring-support notes.</p></div></section>
        <section class="band">
          ${translateEntry()}
          <div style="height:18px"></div>
          <div class="section-head">
            <h2>BTEC / Pearson qualification list with OTC tutoring-support notes.</h2>
            <p>This page lists selected Pearson BTEC qualifications and support routes that commonly need assignment-criteria interpretation, evidence planning, unit reading, academic English, portfolio support or progression guidance. It is not a Pearson official catalogue; always confirm final titles, specification, registration rules and assessment requirements on Pearson's official pages.</p>
          </div>
          <div class="notice">Catalogue standard: entries are classified by subject and qualification type. Where an exact specification page has not yet been individually linked, the entry is marked as "Pearson official listing" and links to the relevant official Pearson subject or qualification-family page.</div>
          <div style="height:18px"></div>
          <div class="pathway-strip">
            <a href="/external-programme-support/">External support overview</a>
            ${externalProgrammeRoutes.map((item) => `<a href="/external-programme-support/${item.id}/">${item.title}</a>`).join("")}
          </div>
          <div style="height:24px"></div>
          <div class="ou-course-directory">${btecPearsonCourseList()}</div>
          <div style="height:24px"></div>
          <div class="notice">OTC provides tutoring and academic support only. Learners remain registered with their own Pearson-approved centre or provider. OTC does not act for Pearson, submit learner work, complete assignments, create portfolios for submission or provide ready-made answers.</div>
        </section>
        <script>
          const btecState = { subject: "all", type: "all" };
          const btecRoot = document.querySelector("[data-btec-filters]");
          const btecCards = Array.from(document.querySelectorAll("[data-btec-card]"));
          const btecGroups = Array.from(document.querySelectorAll("[data-btec-subject]"));

          function applyBtecFilters() {
            btecCards.forEach((card) => {
              const subjectMatch = btecState.subject === "all" || card.dataset.subject === btecState.subject;
              const typeMatch = btecState.type === "all" || card.dataset.type === btecState.type;
              card.hidden = !(subjectMatch && typeMatch);
            });
            btecGroups.forEach((group) => {
              const visible = Array.from(group.querySelectorAll("[data-btec-card]")).some((card) => !card.hidden);
              group.hidden = !visible;
            });
          }

          btecRoot?.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-filter-kind]");
            if (!button) return;
            const kind = button.dataset.filterKind;
            btecState[kind] = button.dataset.filterValue;
            btecRoot.querySelectorAll(\`button[data-filter-kind="\${kind}"]\`).forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
            applyBtecFilters();
          });
        </script>
      `
    });
  }

  if (route.id === "university-modules") {
    return pageShell({
      title: `${route.title} | OTC Study Hub`,
      current: "courses",
      body: `
        <section class="page-hero"><div class="band"><div class="eyebrow">External Programme Support</div><h1>${route.title}</h1><p>University-level tutoring for overseas learners by subject area or by current university route.</p></div></section>
        <section class="band">
          ${translateEntry()}
          <div style="height:18px"></div>
          <div class="section-head">
            <h2>Two entry routes for undergraduate, master's and doctoral learners.</h2>
            <p>This page is designed for international students already studying university modules and needing structured academic support. Students may start by subject area or by their current university. OTC can scope courseware support, exam-question banks, coursework planning, dissertation / thesis / project tutoring and academic English support after reviewing the exact module documents.</p>
          </div>
          <div class="notice">Service boundary: OTC provides independent tutoring and academic support. It is not an official service of the listed universities, does not act as an awarding body, does not complete assessed work and does not provide ready-made answers for submission.</div>
          <div style="height:18px"></div>
          <div class="pathway-strip">
            <a href="/external-programme-support/">External support overview</a>
            ${externalProgrammeRoutes.map((item) => `<a href="/external-programme-support/${item.id}/">${item.title}</a>`).join("")}
          </div>
          <div style="height:24px"></div>
          <div class="external-route-grid">
            <a class="external-route-card" href="#by-subject">
              <b>01</b>
              <strong>Browse by subject</strong>
              <span>Discipline-first route</span>
              <p>Use this path for business, law, computing, engineering, health, social science, humanities, research methods and dissertation support.</p>
              <em>Open subject routes</em>
            </a>
            <a class="external-route-card" href="#by-university">
              <b>02</b>
              <strong>Browse by current university</strong>
              <span>Institution-first route</span>
              <p>Use this path when the student has a university, programme, module code, assignment brief or exam schedule ready for review.</p>
              <em>Open university routes</em>
            </a>
          </div>
          <div style="height:28px"></div>
          <div class="ou-course-directory">${universityModuleSupportList()}</div>
          <div style="height:24px"></div>
          <div class="notice">For first review, send: university name, programme title, module code/title, level/year, module handbook, lecture slides or weekly topics, reading list, assessment brief, marking rubric, permitted exam materials or past-paper scope, current draft/feedback and deadline.</div>
        </section>
      `
    });
  }

  return pageShell({
    title: `${route.title} | OTC Study Hub`,
    current: "courses",
    body: `
      <section class="page-hero"><div class="band"><div class="eyebrow">External Programme Support</div><h1>${route.title}</h1><p>${route.zh}. ${route.desc}</p></div></section>
      <section class="band">
        <div class="section-head">
          <h2>Courses arranged by subject area and level.</h2>
          <p>Use this matrix to identify the likely tutoring route before sending the exact provider, programme, module/unit title, level, brief and deadline for suitability checking.</p>
        </div>
        <div class="pathway-strip">
          <a href="/external-programme-support/">External support overview</a>
          ${externalProgrammeRoutes.map((item) => `<a href="/external-programme-support/${item.id}/">${item.title}</a>`).join("")}
        </div>
        <div style="height:22px"></div>
        ${externalProgrammeMatrix(route)}
        <div style="height:24px"></div>
        <div class="support-mini-grid">
          <aside class="support-note">
            <h3>Documents to send first</h3>
            <ol>
              <li>Provider and programme name.</li>
              <li>Module/unit title, level and current topic.</li>
              <li>Assignment brief, criteria or feedback if available.</li>
              <li>Deadline, support need and preferred tutorial schedule.</li>
            </ol>
          </aside>
          <aside class="support-note boundary">
            <h3>Boundary</h3>
            <p>OTC provides tutoring and academic support only. Learners remain registered with their own provider. OTC does not complete assessed work or provide ready-made submission answers.</p>
          </aside>
          <aside class="support-note contact">
            <h3>Enquiry</h3>
            <p>Email: office@overseasuk.com<br>WeChat: overseasus<br>WhatsApp: +44 7947 991572</p>
            <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(route.title + " Enquiry")}">Request Support</a>
          </aside>
        </div>
      </section>
    `
  });
}

const academicTutoring = pageShell({
  title: "Academic Tutoring | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Academic Tutoring</div><h1>Academic Tutoring & Study Support</h1><p>Structured academic support for writing, business and management subjects, research skills, academic English, study skills and progression preparation.</p></div></section>
    <section class="band">
      <div class="section-head">
        <h2>Independent learning support, not assignment completion.</h2>
        <p>These tutoring routes help learners understand concepts, plan work, improve academic communication and build sustainable study habits. They do not provide model answers or complete assessed work.</p>
      </div>
      <div class="support-table support-table-detail">
        <article>
          <strong>International Curriculum Bilingual Tutoring</strong>
          <span>A-Level / BTEC / IB / AP 雙語輔導</span>
          <p>Subject concepts, command words, coursework planning and academic English support for international-school learners.</p>
          <div class="support-card-actions"><a href="/international-curriculum-tutoring/">Open route</a><a href="mailto:office@overseasuk.com?subject=International%20Curriculum%20Bilingual%20Tutoring%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Academic Writing Coaching</strong>
          <span>學術寫作輔導</span>
          <p>Essay, report, reflective writing, academic argument, clarity, structure and referencing awareness.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Academic%20Writing%20Coaching%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Business & Management Tutoring</strong>
          <span>商科與管理課程輔導</span>
          <p>Business, management, leadership, marketing, HR, finance-related modules and case-study discussion.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Business%20and%20Management%20Tutoring%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Research Skills & Literature Review</strong>
          <span>研究方法與文獻支持</span>
          <p>Research questions, source search, source evaluation, evidence mapping and literature-review planning.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Research%20Skills%20Support%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Academic English Support</strong>
          <span>學術英語支持</span>
          <p>Academic vocabulary, reading strategies, seminar confidence, presentation preparation and written clarity.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Academic%20English%20Support%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Study Skills & Progress Coaching</strong>
          <span>學習技能與進度輔導</span>
          <p>Time management, weekly goals, workload planning, deadline routines and independent-learning systems.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Study%20Skills%20and%20Progress%20Coaching%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Progression & Top-up Preparation</strong>
          <span>升學與 Top-up 準備</span>
          <p>Route research, academic history organisation, document preparation and entry-expectation review.</p>
          <div class="support-card-actions"><a href="/guidance-progression/">Open guidance</a><a href="mailto:office@overseasuk.com?subject=Progression%20and%20Top-up%20Guidance%20Enquiry">Enquire</a></div>
        </article>
      </div>
      <div style="height:24px"></div>
      <div class="notice">Academic tutoring supports learning and skill development. OTC does not write assignments, complete exams, provide ready-made answers for submission, or support plagiarism, contract cheating or dishonest academic practice.</div>
    </section>
  `
});

const guidanceProgression = pageShell({
  title: "Guidance & Progression | OTC Study Hub",
  current: "courses",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Guidance & Progression</div><h1>Study Route, Top-up & Progression Guidance</h1><p>Planning support for learners comparing study routes, top-up options, transfer possibilities, academic profiles and future progression.</p></div></section>
    <section class="band">
      <div class="section-head">
        <h2>Planning support for complex education decisions.</h2>
        <p>This pathway connects the Courses area with OTC's wider education consulting service. It is suitable when a learner needs route comparison, document organisation, institutional communication planning or ongoing study-management support.</p>
      </div>
      <div class="support-table support-table-detail">
        <article>
          <strong>Study-route planning</strong>
          <span>學習路徑規劃</span>
          <p>Compare qualification levels, pathway routes, external programmes and possible study sequences.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Study%20Route%20Planning%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Top-up route review</strong>
          <span>Top-up 路徑評估</span>
          <p>Review possible top-up or progression options against level, credits, subject fit and receiving-institution rules.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Top-up%20Route%20Review%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Academic profile organisation</strong>
          <span>學術背景整理</span>
          <p>Organise transcripts, course history, evidence, study gaps, learning goals and application questions.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Academic%20Profile%20Organisation%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Transfer and progression preparation</strong>
          <span>轉學與升學準備</span>
          <p>Prepare questions for institutions, compare progression claims and identify confirmation points.</p>
          <div class="support-card-actions"><a href="/resources/">Open consulting</a><a href="mailto:office@overseasuk.com?subject=Transfer%20Progression%20Preparation%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Ongoing learner guidance</strong>
          <span>持續學習指導</span>
          <p>Study monitoring, parent updates, progress check-ins, escalation planning and study-support coordination.</p>
          <div class="support-card-actions"><a href="mailto:office@overseasuk.com?subject=Ongoing%20Learner%20Guidance%20Enquiry">Enquire</a></div>
        </article>
        <article>
          <strong>Consultation AI first response</strong>
          <span>即時諮詢初步答疑</span>
          <p>Use the first-response chat to organise a case before sending documents for human review.</p>
          <div class="support-card-actions"><a href="/consultation-chat/">Open chat</a></div>
        </article>
      </div>
      <div style="height:24px"></div>
      <div class="notice">Guidance is planning support only. It does not guarantee admission, visa outcomes, credit transfer, placement, scholarship, appeal success or final decisions by external institutions.</div>
    </section>
  `
});

const apps = pageShell({
  title: "Apps & Tools | OTC Study Hub",
  current: "apps",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Digital Learning Tools</div><h1>Apps & Tools</h1><p>Browser-based practice tools, exam drills, vocabulary systems and book-linked digital products from OTC Study Hub and Overseas Publishing.</p></div></section>
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Tool Directory</div>
        <h2>A catalogue of learning apps, practice tools and publishing utilities.</h2>
        <p>Apps are grouped by learning use case so UCBELT, licence practice, OTHM study tools and publishing utilities can grow under a coherent public catalogue.</p>
      </div>
      <div class="app-directory-grid">
        <article>
          <b>A</b>
          <strong>Licence & Professional Exam Practice</strong>
          <p>Australian citizenship, CE driving, CSCS construction card, SIA security licence and future professional-practice drills.</p>
          <ul>
            <li><span>Live</span> <a href="/apps/australian-citizenship-test/#embedded-citizenship-app">Australian Citizenship Test Practice Guide + App</a></li>
            <li><span>Live</span> CE考牌練習App · £0.99</li>
            <li><span>Planned</span> CSCS Practice App</li>
            <li><span>Planned</span> SIA Security Licence Practice App</li>
          </ul>
        </article>
        <article>
          <b>B</b>
          <strong>English Speaking & Vocabulary</strong>
          <p>Speaking test preparation, vocabulary review, weak-word practice, mock tests and tutor-led English tools.</p>
          <ul>
            <li><span>Live</span> <a href="/apps/ucbelt-speaking/#embedded-ucbelt-app">UCBELT Speaking Test Practice</a></li>
            <li><span>Live</span> <a href="/apps/ih-placement-interview/#embedded-ih-app">IH Placement & Interview Practice</a></li>
            <li><span>Planned</span> Academic English speaking timer suite</li>
          </ul>
        </article>
        <article>
          <b>C</b>
          <strong>Business & Qualification Study Tools</strong>
          <p>OTHM study companions, terminology cards, self-check quizzes, unit checklists and assessment-readiness tools.</p>
          <ul>
            <li><span>Planned</span> OTHM L5BM Unit Quiz Bank</li>
            <li><span>Planned</span> Business glossary flashcards</li>
            <li><span>Planned</span> Marking-criteria self-check tools</li>
          </ul>
        </article>
        <article>
          <b>D</b>
          <strong>Book Companion Packs</strong>
          <p>Digital add-ons for Overseas Publishing books: checklists, templates, quiz banks, worksheets and downloadable resources.</p>
          <ul>
            <li><span>Planned</span> Payhip book companion download packs</li>
            <li><span>Planned</span> Study-guide worksheet packs</li>
            <li><span>Planned</span> Reader activity banks</li>
          </ul>
        </article>
        <article>
          <b>E</b>
          <strong>Teacher & Tutor Utilities</strong>
          <p>Classroom timers, feedback starters, progress trackers, vocabulary lists and review dashboards for tutorial delivery.</p>
          <ul>
            <li><span>Planned</span> Tutor feedback phrase bank</li>
            <li><span>Planned</span> Learner progress tracker</li>
            <li><span>Planned</span> Lesson activity timer</li>
          </ul>
        </article>
        <article>
          <b>F</b>
          <strong>Publishing & Self-Publishing Tools</strong>
          <p>Future calculators, ISBN checklists, Payhip/KDP upload checklists and author-service workflow templates.</p>
          <ul>
            <li><span>Planned</span> ISBN and edition checklist</li>
            <li><span>Planned</span> KDP / Payhip upload checklist</li>
            <li><span>Planned</span> Author service intake form</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Live / Listed Products</div>
        <h2>Current Payhip evidence and digital-product opportunities.</h2>
        <p>The figures below are working dashboard notes supplied for product planning. Live tools and listed guides can later receive companion apps, quizzes or practice systems.</p>
      </div>
      <div class="metrics-grid">
        <article><strong>CE考牌練習App</strong><span>54 views · 0 orders · £0.99</span><p>Existing app-style product. Natural benchmark for future CSCS and SIA practice tools.</p></article>
        <article><strong>Australian Citizenship Test Practice Guide + App</strong><span>ISBN 978-1-0666440-7-0 · launch £5.99</span><p>First Edition 2026: printable PDF guide with copyright page, compiler's preface, 96 basic questions, 224 advanced questions, unlimited random mock flows and local browser app access.</p></article>
        <article><strong>UCBELT Speaking Practice</strong><span>Live app · £0.99</span><p>Themed topic practice plus full mock sets, 640 bilingual vocabulary items and teacher mode.</p></article>
        <article><strong>IH Placement & Interview Practice</strong><span>Live public app</span><p>IH London-style online placement and speaking interview preparation with bilingual vocabulary, quiz and teacher notes.</p></article>
        <article><strong>英國SIA保安牌照 完全指南</strong><span>60 views · 0 orders · £2.99</span><p>Strongest listed view count in the supplied snapshot; candidate for SIA quiz/practice add-on.</p></article>
        <article><strong>2026英国CE驾照完全指南</strong><span>46 views · 0 orders · £2.99</span><p>Guide plus app pairing suggests a repeatable licence-preparation product model.</p></article>
        <article><strong>A-02 英國CSCS建築業資格卡完全指南</strong><span>26 views · 0 orders · £2.99</span><p>Notion planning already identifies CSCS App framework reuse as a next-step opportunity.</p></article>
        <article><strong>OTHM Business Study Guides</strong><span>19-33 views · £2.99-£5.00</span><p>Business Start-up and Marketing guides can later receive glossary drills, MCQs and unit checklists.</p></article>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Planned App Pipeline</div>
        <h2>A practical roadmap linked to Overseas Publishing.</h2>
      </div>
      <div class="pipeline-list">
        <article><span>01</span><strong>Australian Citizenship Test Practice Guide + App</strong><p>Live Australia-facing bilingual product: printable PDF guide, 300+ structured practice questions, unlimited random mock tests, 154 flashcards, exam-room simulation, values-first study structure and offline-friendly browser package.</p></article>
        <article><span>02</span><strong>CSCS Practice App</strong><p>Use the CE app structure for construction-card quiz practice, terminology review and mock-test flow.</p></article>
        <article><span>03</span><strong>SIA Security Licence Practice App</strong><p>Convert the SIA guide into repeatable scenario questions, knowledge checks and licence vocabulary drills.</p></article>
        <article><span>04</span><strong>OTHM L5BM Unit Quiz Bank</strong><p>MCQs, bilingual glossary flashcards and self-checklists for each of the six public bookshop editions.</p></article>
        <article><span>05</span><strong>IH Placement & Interview Practice</strong><p>Reusable young-learner placement-test readiness, speaking interview practice, vocabulary review and tutor feedback utilities.</p></article>
        <article><span>06</span><strong>Payhip Book Companion Download Packs</strong><p>Attach templates, worksheets and checklists to books so PDF products become richer learning packages.</p></article>
      </div>
      <div style="height:22px"></div>
      <div class="notice">All practice apps and tools are independent OTC / Overseas Publishing resources. They are not official test papers, official question banks, awarding-body materials or guaranteed-outcome products.</div>
    </section>
  `
});

const ucbelt = pageShell({
  title: "UCBELT Speaking Test Practice App | OTC Study Hub",
  current: "apps",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Speaking Test Prep</div><h1>UCBELT Speaking Test Practice App</h1><p>Independent OTC practice tool for speaking confidence, academic discussion, vocabulary repetition and mock test preparation.</p><div class="actions"><a class="btn btn-primary" href="#embedded-ucbelt-app">Use App Here</a><a class="btn btn-secondary" href="https://payhip.com/b/DSucH">Payhip Page</a></div></div></section>
    <section class="band app-summary-band">
      <div class="app-summary-strip">
        <article><b>Practice</b><strong>10 + 10 sets</strong><span>Themed practice plus full mocks</span></article>
        <article><b>Vocabulary</b><strong>640 items</strong><span>Flashcards, quiz and weak-word review</span></article>
        <article><b>Test day</b><strong>Ready check</strong><span>Passport, headset, room scan, privacy consent</span></article>
        <article><b>Access</b><strong>Unlocked embed</strong><span>Use directly below inside OTC Study Hub</span></article>
      </div>
      <p class="notice app-summary-note">Independent OTC practice resource. The embedded version below is unlocked for immediate teaching and learner practice; standalone access can still remain password-controlled for Payhip distribution.</p>
    </section>
    <section class="band compact-band" id="embedded-ucbelt-app">
      <div class="section-head compact-head">
        <div class="eyebrow">Embedded Practice App</div>
        <h2>Use the UCBELT speaking practice app inside OTC Study Hub.</h2>
        <p>This embedded version opens in unlocked mode for tutors and students using the OTC website. It includes the latest test-day readiness notice, privacy-statement practice, Part 1 personal questions, Part 2 5-minute preparation and 3-minute speaking timer, vocabulary review and teacher mode.</p>
      </div>
      <div class="embedded-app-frame">
        <iframe title="UCBELT Speaking Test Practice App" src="/belt/?embed=1" loading="lazy"></iframe>
      </div>
      <div style="height:18px"></div>
      <p class="notice">Independent OTC practice resource. Not an official UCB publication, official UCB test paper, official question bank or guaranteed-score product.</p>
    </section>
  `
});

const australianCitizenshipTest = pageShell({
  title: "Australian Citizenship Test Practice Guide + App | OTC Study Hub",
  current: "apps",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">ISBN 978-1-0666440-7-0 · First Edition 2026 · Launch £5.99</div><h1>Australian Citizenship Test Practice Guide + App</h1><p>Independent English-Chinese PDF guide and local browser practice package for Australian citizenship preparation: compiler's preface, 96 basic questions, 224 advanced questions, unlimited random mock tests, values-first revision and no login after download.</p><div class="actions"><a class="btn btn-primary" href="#embedded-citizenship-app">Use App Here</a><a class="btn btn-secondary" href="https://payhip.com/overseaspublishing" target="_blank" rel="noopener">Payhip Store</a></div></div></section>
    <section class="band app-summary-band">
      <div class="app-summary-strip">
        <article><b>Guide</b><strong>PDF</strong><span>Printable bilingual study guide, questions and flashcard glossary</span></article>
        <article><b>Question Bank</b><strong>300+ items</strong><span>Expanded bilingual question, options and explanation structure</span></article>
        <article><b>Exam Room</b><strong>45 minutes</strong><span>Timer, reminders and realistic test flow</span></article>
        <article><b>Practice</b><strong>Unlimited</strong><span>Random 20-question mock tests from the expanded bank</span></article>
      </div>
      <p class="notice app-summary-note">Independent OTC bilingual practice resource. It is not an official Australian Government test paper, official question bank, immigration advice product or guarantee of citizenship-test success. Learners should read the current official Australian Citizenship: Our Common Bond resource before taking the real test.</p>
    </section>
    <section class="band compact-band" id="embedded-citizenship-app">
      <div class="section-head compact-head">
        <div class="eyebrow">Embedded Practice App</div>
        <h2>Use the Australian citizenship practice app inside OTC Study Hub.</h2>
        <p>The current version is a working OTC Australia digital learning product positioned against web-only quizzes and app-store subscriptions: a printable PDF guide package, 300+ structured bilingual practice questions, unlimited random mock tests, real exam-room mode, topic drills, flashcard system, visual atlas, weak-review area, values-first study guide and local browser access after download.</p>
      </div>
      <div class="embedded-app-frame">
        <iframe title="Australian Citizenship Test Practice App" src="/citizenship-australia/?embed=1" loading="lazy"></iframe>
      </div>
      <div style="height:18px"></div>
      <p class="notice">Source basis: public Australian citizenship preparation topics from the Department of Home Affairs, including Australian Citizenship: Our Common Bond. The real test is conducted in English and official rules may change. This page is also evidence of OTC's Australia-facing digital learning and publishing product development; no Australian Government endorsement is implied.</p>
    </section>
  `
});

const resources = pageShell({
  title: "Education Consulting Resources | OTC Study Hub",
  current: "resources",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Education Consulting</div><h1>Global Study Advisory</h1><p>Education consulting for English-taught schools, colleges, universities and professional pathways worldwide, supported by Overseas' institutional agency network and case-based advisory experience.</p></div></section>
    <section class="band">
      <div class="consulting-hero">
        <div>
          <div class="section-head compact-head">
            <h2>Not only applications. Full-route education decision support.</h2>
            <p>OTC supports families and learners who need to compare English-medium study options, resolve complex academic histories, transfer between systems, plan progression and communicate with institutions responsibly.</p>
          </div>
          <div class="actions"><a class="btn btn-dark" href="/consultation-chat/">Ask Consultation AI</a><a class="btn btn-light" href="/courses/">Course Support</a></div>
        </div>
        <aside class="consulting-stat-panel">
          <div><b>3000+</b><span>school, college and university relationships through first-tier and second-tier agency arrangements</span></div>
          <div><b>Global</b><span>English-taught pathways across secondary, further, higher and professional education sectors</span></div>
          <div><b>Case-based</b><span>consulting fees may apply for complex cases and selected high-profile institution applications</span></div>
        </aside>
      </div>
    </section>
    <section class="spotlight">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Advisory Scope</div>
          <h2>Structured services for ordinary planning and difficult cases.</h2>
        </div>
        <div class="consulting-grid">
          <article><b>01</b><strong>Global School & University Matching</strong><span>English-taught secondary schools, colleges, universities, pathway providers and technical institutions.</span></article>
          <article><b>02</b><strong>Transfer & Progression Planning</strong><span>Credit history review, level matching, top-up routes, foundation/pathway options and institution comparison.</span></article>
          <article><b>03</b><strong>Complex Case Advisory</strong><span>Interrupted study, weak transcripts, previous refusals, changing countries, changing majors and non-standard academic backgrounds.</span></article>
          <article><b>04</b><strong>Academic Guardianship & Ongoing Support</strong><span>Study monitoring, parent communication, learner welfare signposting, progress review and school-facing coordination.</span></article>
          <article><b>05</b><strong>Appeals, Complaints & Academic Problems</strong><span>Academic appeals, complaints preparation, progression disputes, evidence organisation and communication planning.</span></article>
          <article><b>06</b><strong>English & Academic Readiness</strong><span>English preparation, interview practice, statement planning, academic writing support and study-skills preparation.</span></article>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">How We Classify Consulting Work</div>
        <h2>Four service levels keep expectations clear.</h2>
      </div>
      <div class="consulting-levels australia-evidence-cards">
        <article><strong>Information Guidance</strong><p>General pathway explanation, public-facing resources and first-stage comparison. Suitable for early exploration.</p><span>Usually light-touch.</span></article>
        <article><strong>Application Support</strong><p>Institution research, document checklist, communication sequence, application timing and offer-condition review.</p><span>May be free or paid depending on institution and agency arrangement.</span></article>
        <article><strong>Complex Advisory Case</strong><p>Non-standard academic history, transfers, refusals, appeals, progression risk, guardianship or high-stakes institution communication.</p><span>Consulting fee may apply.</span></article>
        <article><strong>Ongoing Learner Management</strong><p>Academic monitoring, parent updates, study support coordination, school communication and escalation planning.</p><span>Paid service package.</span></article>
      </div>
      <div style="height:28px"></div>
      <div class="notice">Consulting and guidance do not guarantee admission, visa outcomes, credit transfer, scholarship decisions, appeal outcomes, academic progression, employment or final institutional decisions. Where visa, legal or regulated financial advice is needed, learners should consult an appropriately regulated professional.</div>
      <div style="height:14px"></div>
      <div class="notice advice-signpost">
        <strong>Immigration-related matters</strong>
        <p>OTC does not provide immigration advice. For UK immigration-related matters, learners and families are signposted to Citizens Advice for free and confidential advice, or to another appropriately authorised adviser where a case requires specialist regulated support.</p>
        <p>For Australia or NSW-related visa, migration or legal matters, OTC signposts learners to Legal Aid NSW / LawAccess NSW, Community Legal Centres NSW, or another appropriately registered migration or legal professional.</p>
        <div class="actions">
          <a class="btn btn-light" href="https://www.citizensadvice.org.uk/immigration/get-help/get-immigration-advice/">UK Citizens Advice</a>
          <a class="btn btn-light" href="https://www.legalaid.nsw.gov.au/my-problem-is-about/visas-and-immigration/immigration-service">Legal Aid NSW</a>
          <a class="btn btn-light" href="https://www.clcnsw.org.au/legal-help-nsw">Community Legal Centres NSW</a>
          <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Immigration%20Signposting%20Enquiry">Enquiries</a>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Public Resources</div>
        <h2>Resource areas linked to the wider OTC ecosystem.</h2>
      </div>
      <div class="resource-list">
        <article class="resource-row"><div><h3>Study Route Explainors</h3><p>Public-facing notes comparing qualification levels, English-taught pathways, transfer routes, foundation/top-up logic and application timing.</p></div><a class="btn btn-light" href="/courses/">Course Map</a></article>
        <article class="resource-row"><div><h3>English & Academic Preparation</h3><p>Speaking practice, vocabulary review, academic writing support, interview preparation and learner-readiness tools.</p></div><a class="btn btn-light" href="/apps/">Open Apps</a></article>
        <article class="resource-row"><div><h3>Australia Business Landing Support</h3><p>Market-entry coordination, representative-office preparation, local administrative support and professional referral for overseas organisations preparing an Australian presence.</p></div><a class="btn btn-light" href="/australia-business-landing/">Australia Support</a></article>
        <article class="resource-row"><div><h3>Publishing & Practical Guides</h3><p>Bilingual books, practical guides and public bookshop editions that turn advisory experience into reusable learning resources.</p></div><a class="btn btn-light" href="/publishing/">Publishing</a></article>
      </div>
    </section>
  `
});

const australiaBusinessLanding = pageShell({
  title: "Australia Business Landing & Education Market Support | OTC Study Hub",
  current: "resources",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Australia Market Entry</div><h1>Australia Business Landing & Education Market Support</h1><p>Administrative, bilingual and market-entry coordination for overseas education and business organisations preparing to establish a practical presence in Australia.</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=Australia%20Business%20Landing%20Support%20Enquiry">Contact OTC</a><a class="btn btn-secondary" href="/resources/">Consulting Services</a></div></div></section>

    <section class="band">
      <div class="consulting-hero">
        <div>
          <div class="section-head compact-head">
            <h2>Practical landing support, with regulated advice kept in the right hands.</h2>
            <p>OTC supports overseas organisations with the administrative and commercial work around Australian market entry: document organisation, local coordination, supplier communication, education-market research and professional referral. Where Australian immigration, legal, tax, financial or regulated education advice is required, OTC signposts clients to appropriately qualified professionals.</p>
          </div>
          <div class="actions">
            <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Australia%20Landing%20Plan">Discuss a landing plan</a>
            <a class="btn btn-light" href="/about/">About OTC</a>
          </div>
        </div>
        <aside class="consulting-stat-panel">
          <div><b>Sydney</b><span>Local office coordination through OTC Australia Representative Office planning.</span></div>
          <div><b>Bilingual</b><span>English and Chinese communication support for UK, Australia and Asia-facing stakeholders.</span></div>
          <div><b>Referral-led</b><span>Regulated matters are referred to migration agents, lawyers, accountants or other qualified advisers.</span></div>
        </aside>
      </div>
    </section>
    <section class="spotlight">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Service Scope</div>
          <h2>What OTC can coordinate.</h2>
          <p>These services are administrative and commercial support services. They help clients prepare, organise and communicate, without replacing regulated professional advice.</p>
        </div>
        <div class="consulting-grid">
          <article><b>01</b><strong>Market-entry Planning</strong><span>Australia landing timetable, stakeholder map, practical document checklist and first-stage route comparison.</span></article>
          <article><b>02</b><strong>Representative-office Setup Support</strong><span>Address, mailbox, meeting-room, local contact and supplier coordination for an Australian presence.</span></article>
          <article><b>03</b><strong>Local Administrative Support</strong><span>Document follow-up, appointment coordination, meeting notes, local communication and operational tracking.</span></article>
          <article><b>04</b><strong>Education Market Research</strong><span>Partner research, bilingual learner-market mapping, centre outreach planning and education product positioning.</span></article>
          <article><b>05</b><strong>Evidence Pack Organisation</strong><span>Business records, recruitment evidence, local activity records and project chronology prepared for professional review.</span></article>
          <article><b>06</b><strong>Professional Referral</strong><span>Coordination with registered migration agents, Australian lawyers, tax/BAS agents, accountants and corporate service providers.</span></article>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Compliance Boundary</div>
        <h2>Clear limits protect clients and OTC.</h2>
      </div>
      <div class="consulting-levels">
        <article><strong>Business Coordination</strong><p>Administrative planning, commercial communication, records organisation and local service coordination.</p><span>Within OTC scope.</span></article>
        <article><strong>Company and Address Support</strong><p>Practical liaison with ASIC registered agents, corporate service providers, office suppliers and accountants.</p><span>Coordination only.</span></article>
        <article><strong>Migration and Visa Matters</strong><p>Visa strategy, sponsor advice, nomination eligibility and application preparation require an Australian registered migration agent or legal practitioner.</p><span>Referral required.</span></article>
        <article><strong>Tax, Legal and Regulated Education Advice</strong><p>GST, BAS, payroll, contracts, director duties, CRICOS, RTO or Australian education-provider compliance require qualified advisers.</p><span>Referral required.</span></article>
      </div>
      <div style="height:28px"></div>
      <div class="notice advice-signpost">
        <strong>Important professional boundary</strong>
        <p>OTC provides administrative, market-entry and business coordination support only. OTC does not provide Australian migration, legal, tax, financial or regulated education compliance advice.</p>
        <p>Where regulated advice is required, clients should consult registered migration agents, Australian legal practitioners, registered tax/BAS agents, accountants, education compliance specialists or other appropriately qualified professionals.</p>
      </div>
      <div style="height:14px"></div>
      <div class="notice">
        <strong>中文說明</strong>
        <p>OTC為海外教育及商業機構提供澳洲落地行政支援、市場調研、文件整理、本地聯絡及專業人士轉介服務。OTC不提供澳洲移民、法律、稅務、金融或受監管教育合規建議；如涉及相關專業服務，將協助轉介持牌或合資格專業人士。</p>
      </div>
    </section>
  `
});

const australiaPathwayCards = [
  ["Route A", "升學路線", "OTHM Level 3-6 → 澳洲大學 Advanced Entry", "適合希望在澳洲取得大學學位的學生", "先做資格文件、課程單元、英文與學分減免可能性審閱。"],
  ["Route B", "職業培訓路線", "VET Certificate III / IV / Diploma", "適合希望在澳洲直接就業的學生", "重點查看 RTO scope、CRICOS、實習安排、課程代碼與本地工作場景。"],
  ["Route C", "管理升學路線", "OTHM Level 7 → 澳洲大學碩士銜接", "適合有工作經驗、希望進入管理層的人士", "更適合健康管理、社區服務管理、項目管理與教育管理方向。"]
];

const australiaChinaQualificationRows = [
  ["普通高中 / 高考", "Foundation、Diploma、部分本科直入", "看高考省份、總分比例、目標專業與英文門檻。", "高中成績單、高考成績、畢業證、英文成績"],
  ["國際高中 A-Level / IB / AP", "本科直入、學分或先修優勢", "看科目匹配、預估分 / 最終分、理科先修與作品集要求。", "官方成績、學校預估、課程大綱、英文成績"],
  ["中國大專 / 高職", "本科 Advanced Entry、VET / TAFE、Diploma 銜接", "重點是課程描述、實習、學分與澳洲目標課程是否同方向。", "大專成績單、畢業證、課程大綱、實習證明"],
  ["中國本科在讀", "轉學、Advanced Standing、重新申請本科", "逐科比對已修單元；成績弱時可用 OTHM 或 Pathway 補強材料。", "在讀證明、成績單、單元描述、英文成績"],
  ["中國本科畢業", "澳洲碩士、Graduate Certificate / Diploma、轉專業橋樑", "看本科背景、均分、院校層次、工作經驗與轉專業跨度。", "學位證、畢業證、成績單、CV、PS"],
  ["成人本科 / 自考 / 專升本", "個案評估、碩士預科、Graduate Certificate 或本科後段", "需先確認學歷可驗證性、學習形式、學分結構與院校接受度。", "學信網/認證材料、成績單、畢業證、學位證"],
  ["中職 / 技校 / 職高", "VET Certificate / Diploma、TAFE、職業方向 Pathway", "更適合先看職業課程、英文、年齡、實習能力與簽證學習計劃。", "畢業證、成績單、技能證書、工作或實習證明"]
];

const australiaComparisonRows = [
  ["普通高中 / 高考", "Foundation、Diploma、部分本科直入", "OTHM Level 3 Foundation / Higher Education Studies 可作英國資格補強", "CHC33021 / HLT33115 或 Pathway Diploma", "AQF 3 / Foundation", "看高考比例、英文、目標專業及是否先走 pathway。"],
  ["國際高中 A-Level / IB / AP", "本科直入、學分或先修優勢", "通常不需 OTHM 補強；如科目不足可用 Level 3 / 4 補學術背景", "本科直入或 Diploma pathway", "Undergraduate entry", "看科目匹配、預估分、理科先修、作品集及英文門檻。"],
  ["中國大專 / 高職", "本科 Advanced Entry、VET / TAFE、Diploma 銜接", "OTHM Level 4 / 5 可補強課程結構與英國 RQF 可讀性", "CHC52025 / HLT54121 / 相關 Diploma", "AQF 5", "重點比對課程描述、實習、學分與澳洲目標課程方向。"],
  ["中國本科在讀", "轉學、Advanced Standing、重新申請本科", "成績弱或單元不清晰時，可用 OTHM Level 4 / 5 補充可審閱材料", "本科 credit transfer / VET bridge", "AQF 5-7 語境", "逐科比對已修單元、成績、課綱與英文要求。"],
  ["中國本科畢業", "澳洲碩士、Graduate Certificate / Diploma、轉專業橋樑", "OTHM Level 6 / 7 可支持管理、健康管理、項目管理等轉向", "Graduate Certificate / Graduate Diploma / Master", "Postgraduate", "看本科背景、均分、院校層次、工作經驗與轉專業跨度。"],
  ["成人本科 / 自考 / 專升本", "個案評估、碩士預科、Graduate Certificate 或本科後段", "可用 OTHM Level 5 / 6 建立更清晰的英國資格層級文件", "Pathway / Graduate Certificate / credit review", "個案評估", "需確認學歷可驗證性、學習形式、學分結構與院校接受度。"],
  ["中職 / 技校 / 職高", "VET Certificate / Diploma、TAFE、職業方向 Pathway", "可先用 OTHM Level 3 建立高等教育預備或健康社護基礎", "Certificate III / IV / TAFE Diploma", "AQF 3-4", "更適合先看職業課程、英文、年齡、實習能力與學習計劃。"]
];

const australiaProviders = [
  {
    title: "大學：護理 / 醫學 / 公共健康",
    items: [
      ["NSW", "University of Sydney", "Medicine and Health", "https://www.sydney.edu.au/medicine-health/"],
      ["NSW", "UNSW Sydney", "Medicine and Health", "https://www.unsw.edu.au/medicine-health"],
      ["NSW", "University of Technology Sydney", "Health", "https://www.uts.edu.au/study/health"],
      ["NSW", "University of Newcastle", "Health, Medicine and Wellbeing", "https://www.newcastle.edu.au/school/medicine-and-public-health"],
      ["NSW", "Western Sydney University", "Nursing, Midwifery and Health", "https://www.westernsydney.edu.au/future/study/courses/nursing-midwifery-and-health"],
      ["NSW", "Charles Sturt University", "Nursing, Paramedicine, Oral Health, Social Work", "https://study.csu.edu.au/courses/health-medicine"],
      ["NSW", "University of Wollongong", "Nursing, Medicine and Health", "https://www.uow.edu.au/science-medicine-health/"],
      ["ACT", "University of Canberra", "Health", "https://www.canberra.edu.au/future-students/study-at-uc/study-areas/health"],
      ["ACT", "Australian National University", "Medicine and Health", "https://health.anu.edu.au/"],
      ["National", "Australian Catholic University", "Nursing, Midwifery, Allied Health", "https://www.acu.edu.au/study-at-acu/find-a-course/health-sciences"]
    ]
  },
  {
    title: "大學：VIC / TAS / QLD / NT",
    items: [
      ["VIC", "University of Melbourne", "Medicine, Dentistry and Health Sciences", "https://mdhs.unimelb.edu.au/"],
      ["VIC", "Monash University", "Medicine, Nursing and Health Sciences", "https://www.monash.edu/medicine"],
      ["VIC", "Deakin University", "Nursing, Midwifery, Health Sciences", "https://www.deakin.edu.au/study/find-a-course/health"],
      ["VIC", "La Trobe University", "Nursing and Health", "https://www.latrobe.edu.au/courses/nursing"],
      ["VIC", "RMIT University", "Health and Biomedical Sciences", "https://www.rmit.edu.au/study-with-us/health-and-biomedical-sciences"],
      ["VIC", "Victoria University", "Health and Biomedicine", "https://www.vu.edu.au/study-at-vu/courses/health-biomedicine"],
      ["TAS", "University of Tasmania", "Health and Medicine", "https://www.utas.edu.au/study/health-and-medicine"],
      ["QLD", "University of Queensland", "Medicine, Nursing, Public Health", "https://medicine.uq.edu.au/"],
      ["QLD", "Queensland University of Technology", "Health", "https://www.qut.edu.au/study/health"],
      ["QLD", "Griffith University", "Medicine, Dentistry and Health", "https://www.griffith.edu.au/study/health"],
      ["QLD", "Central Queensland University", "Nursing, Health and Social Work", "https://www.cqu.edu.au/courses/study-areas/health"],
      ["QLD", "James Cook University", "Medicine, Nursing and Health Sciences", "https://www.jcu.edu.au/college-of-medicine-and-dentistry"],
      ["NT", "Charles Darwin University", "Health, Nursing and CDU TAFE", "https://www.cdu.edu.au/study/health"]
    ]
  },
  {
    title: "大學：SA / WA",
    items: [
      ["SA", "University of Adelaide", "Health and Medical Sciences", "https://health.adelaide.edu.au/"],
      ["SA", "University of South Australia", "Clinical and Health Sciences", "https://www.unisa.edu.au/about-unisa/academic-units/clinical-and-health-sciences/"],
      ["SA", "Flinders University", "Medicine and Public Health", "https://www.flinders.edu.au/college-medicine-public-health"],
      ["WA", "Curtin University", "Health Sciences", "https://www.curtin.edu.au/about/learning-teaching/health-sciences/"],
      ["WA", "Edith Cowan University", "Medical and Health Sciences", "https://www.ecu.edu.au/schools/medical-and-health-sciences"],
      ["WA", "Murdoch University", "Health, Nursing and Counselling", "https://www.murdoch.edu.au/study/courses/health"],
      ["WA", "University of Western Australia", "Medical School and Population Health", "https://www.uwa.edu.au/schools/medical-school"],
      ["WA", "University of Notre Dame Australia", "Nursing, Medicine, Health Sciences", "https://www.notredame.edu.au/study/health-sciences"]
    ]
  },
  {
    title: "TAFE / VET / 職業培訓 College",
    items: [
      ["NSW", "TAFE NSW", "Diploma of Nursing, Health Services, Community Services", "https://www.tafensw.edu.au/course-areas/healthcare"],
      ["QLD", "TAFE Queensland", "Diploma of Nursing, Allied Health, Community Services", "https://tafeqld.edu.au/courses/study-areas/health-and-science"],
      ["SA", "TAFE SA", "Diploma of Nursing, Health and Lifestyle", "https://www.tafesa.edu.au/courses/health-lifestyle"],
      ["WA", "North Metropolitan TAFE", "Diploma of Nursing, Dental, Allied Health", "https://www.northmetrotafe.wa.edu.au/courses/diploma-nursing-0"],
      ["WA", "South Metropolitan TAFE", "Nursing, Health and Community Services", "https://www.southmetrotafe.wa.edu.au/courses/health-and-community-services"],
      ["TAS", "TasTAFE", "Health and Community Services", "https://www.tastafe.tas.edu.au/courses/health-community-services"],
      ["ACT", "Canberra Institute of Technology", "Health, Community and Science", "https://cit.edu.au/courses/health_community"],
      ["NT", "CDU TAFE", "Health, Community Services and Nursing Pathways", "https://www.cdu.edu.au/study/tafe"],
      ["VIC", "Holmesglen Institute", "Nursing, Allied Health, Community Services", "https://www.holmesglen.edu.au/Explore-Courses/Health-and-community/"],
      ["VIC", "Box Hill Institute", "Diploma of Nursing, Health and Community", "https://www.boxhill.edu.au/courses/diploma-of-nursing-hc544-d/"],
      ["VIC", "Chisholm Institute", "Diploma of Nursing, Health and Community Services", "https://www.chisholm.edu.au/courses/diploma/nursing"],
      ["VIC", "Melbourne Polytechnic", "Health and Community Services", "https://www.melbournepolytechnic.edu.au/study/health-and-community/"],
      ["VIC", "Bendigo Kangan Institute", "Health and Community Services", "https://www.kangan.edu.au/courses/department/health-and-community-services"],
      ["QLD", "Mater Education", "Diploma of Nursing and Healthcare Training", "https://www.matereducation.qld.edu.au/"],
      ["National", "Healthcare Australia Training", "Aged Care, Disability, Individual Support", "https://training.healthcareaustralia.com.au/"]
    ]
  }
];

function australiaStudyInsights() {
  const prioritySlugs = [
    "australia-health-vocation-pathway",
    "othm-health-social-care-australia-vet-comparison",
    "othm-credits-australia-advanced-entry",
    "australia-new-zealand-provider-pathway-updates-2026",
    "study-nt-agent-training-certificate-otc-australia-meaning"
  ];
  const priorityArticles = prioritySlugs
    .map((slug) => insightsArticles.find((article) => article.slug === slug))
    .filter(Boolean);
  const fallbackArticles = insightsArticles
    .filter((article) => article.column === "study" && !prioritySlugs.includes(article.slug))
    .filter((article) => article.slug.includes("australia") || (article.bodyZh || []).some((section) => section.paragraphs.join("").includes("澳洲")));
  return priorityArticles
    .concat(fallbackArticles)
    .slice(0, 5)
    .map((article) => `
      <a class="australia-insight-card compact" href="/zh/insights/${article.slug}/">
        <span>${article.date} · ${article.kicker || article.category}</span>
        <strong>${article.titleZh || article.title}</strong>
      </a>
    `).join("");
}

const australiaPathwaysLanding = pageShell({
  title: "澳洲升學與職業路線 | OTC Study Hub",
  current: "australia",
  locale: "zh",
  lang: "zh-Hant",
  description: "OTC 澳洲升學與職業路線頁：OTHM 銜接澳洲大學、VET / TAFE 職業培訓、健康護理路線、院校與 Pathway Provider 初步篩查。",
  path: "/australia/",
  body: `
    <section class="page-hero australia-pathways-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia Pathways</div>
        <h1>你的學歷，<br>在澳洲值多少？</h1>
        <p>先判斷你要走升學、職業培訓，還是管理銜接。</p>
        <p class="australia-hero-note">三條路線可互相銜接，但每一步的資格用途不同：學術入學、職業能力、執業註冊與移民評估不能混為一談。</p>
        <div class="actions">
          <a class="btn btn-primary" href="https://wa.me/447947991572?text=I%20would%20like%20an%20Australia%20pathway%20credit%20assessment">免費學分評估</a>
          <a class="btn btn-secondary" href="#providers">查看澳洲院校清單</a>
          <a class="btn btn-secondary" href="#australia-insights">閱讀澳洲路線導報</a>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Three Routes</div>
        <h2>三條路線速覽。</h2>
        <p>先看目標，再看資格用途。</p>
      </div>
      <div class="australia-pathway-card-grid">
        ${australiaPathwayCards.map((card) => `
          <details class="australia-pathway-card" open>
            <summary><b>${card[0]}</b><strong>${card[1]}</strong><span>${card[2]}</span></summary>
            <p>${card[3]}</p>
            <em>${card[4]}</em>
          </details>
        `).join("")}
      </div>
    </section>

    <section class="band compact-band australia-comparison-band" id="qualification-comparison">
      <div class="section-head compact-head invert-head">
        <div class="eyebrow">China Qualifications × OTHM × Australia VET</div>
        <h2>中國學歷、OTHM 補強與澳洲 VET / AQF 對照。</h2>
        <p>這張表用於初步路線判斷；正式學分、就業、執業或移民評估必須回到院校、RTO、AHPRA / ANMAC / NMBA 或移民專業人士。</p>
      </div>
      <div class="australia-comparison-table wide" role="table" aria-label="Chinese qualifications, OTHM and Australia VET comparison">
        <div class="compare-row compare-head" role="row"><span>中國常見背景</span><span>澳洲常見入口</span><span>OTHM 補強 / 銜接用途</span><span>澳洲 VET / Pathway 對應</span><span>AQF / 階段</span><span>OTC 初篩重點</span></div>
        ${australiaComparisonRows.map((row) => `<div class="compare-row" role="row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
      </div>
    </section>

    <section class="band compact-band">
      <div class="health-pathway-layout">
        <div>
          <div class="eyebrow">Health Pathway</div>
          <h2>在澳洲做醫療護理，你需要什麼資格？</h2>
          <p>醫療護理路線最容易混淆，因為「學術層級相近」不代表「可以直接執業」。OTC 先幫學生把文件與目標拆開，再決定走 VET、TAFE、大學還是監管註冊路線。</p>
        </div>
        <div class="health-route-columns">
          <article>
            <b>澳洲 VET 路線</b>
            <ol><li>Certificate III</li><li>Certificate IV</li><li>Diploma of Nursing</li><li>Enrolled Nurse 執業申請</li></ol>
          </article>
          <article>
            <b>OTHM 銜接路線</b>
            <ol><li>Level 3</li><li>Level 5</li><li>Bachelor Advanced Entry</li><li>澳洲本地認可學位 / 後續註冊</li></ol>
          </article>
        </div>
      </div>
      <div class="australia-regulator-note">執業護士資格須由 ANMAC / NMBA / AHPRA 評審。申請前建議先讓 OTC 顧問整理學歷文件，再由相應監管或持牌專業人士確認。</div>
    </section>

    <section class="band compact-band" id="providers">
      <div class="section-head compact-head">
        <div class="eyebrow">Health Provider Directory</div>
        <h2>澳洲護理、社會健康、醫學與職業培訓院校清單。</h2>
        <p>OTC 已可透過現有二級代理及合作渠道協助多數院校進行申請初篩與路線判斷，並正逐步將部分院校升級為一級代理關係；具體可遞交項目、代表權限與合作狀態以各機構當期書面確認為準。</p>
      </div>
      <div class="australia-provider-directory">
        ${australiaProviders.map((group) => `
          <article>
            <h3>${group.title}</h3>
            <ul>
              ${group.items.map(([state, name, focus, href]) => `
                <li>
                  <a href="${href}" target="_blank" rel="noopener">
                    <span>${state}</span>
                    <strong>${name}</strong>
                    <em>${focus}</em>
                  </a>
                </li>
              `).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="band compact-band" id="australia-insights">
      <div class="section-head compact-head">
        <div class="eyebrow">海外留學導報</div>
        <h2>澳洲路線專欄。</h2>
        <p>深度文章負責解釋政策、資格、風險與路線；本頁負責把讀者帶回具體諮詢流程。</p>
      </div>
      <div class="australia-insight-grid">
        ${australiaStudyInsights()}
      </div>
      <div class="credit-actions">
        <a class="btn btn-dark" href="/zh/insights/australia-health-vocation-pathway/">閱讀醫療護理路線圖</a>
        <a class="btn btn-light" href="/zh/insights/">查看全部導報文章</a>
      </div>
    </section>

    <section class="band">
      <div class="australia-contact-block">
        <div>
          <span>Contact OTC</span>
          <strong>把你的現有學歷、成績單和目標職業發來，先做一次澳洲路線初篩。</strong>
          <p>OTC 澳洲代表辦公室設於悉尼 Balmain，可提供澳洲時區諮詢協調服務。受監管移民、法律、稅務、護理註冊及職業評估事項，OTC 將協助轉介合資格專業人士。</p>
        </div>
        <a href="https://wa.me/447947991572">WhatsApp</a>
        <a href="mailto:office@overseasuk.com?subject=Australia%20Pathway%20Assessment">Email</a>
        <a href="/zh/insights/australia-health-vocation-pathway/">導報文章</a>
      </div>
    </section>
  `
});

const australiaOfficePresence = pageShell({
  title: "Australia Office Presence | OTC Study Hub",
  current: "about",
  description: "OTC's Australia-facing office route from NSW: coordination base, university applications, student support, institutional services, market intelligence and professional referral.",
  path: "/australia-office-presence/",
  body: `
    <section class="page-hero australia-office-hero"><div class="band"><div class="eyebrow">Australia Office Presence</div><h1>OTC Australia Office Route</h1><p>A staged NSW-based operating route for education consulting, student support, institutional services and Australia-facing market development.</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=OTC%20Australia%20Office%20Presence">Contact OTC</a><a class="btn btn-secondary" href="/about/">Back to About</a><a class="btn btn-secondary" href="/zh/australia-office-presence/">中文頁面</a></div></div></section>

    <section class="band">
      <div class="australia-office-intro">
        <div>
          <div class="eyebrow">Operating Position</div>
          <h2>Establishing presence first, then expanding service depth.</h2>
          <p>OTC's Australia route begins with a practical NSW coordination base and expands into university application support, family communication, bilingual institutional services, market intelligence and carefully managed professional referral. The route is designed for evidence-based development: each activity should leave a clean record that can support business planning, institutional conversations and professional review.</p>
          <figure class="coordination-illustration" aria-label="Australia education coordination illustration">
            <svg viewBox="0 0 820 260" role="img" aria-labelledby="coordinationIllustrationTitle">
              <title id="coordinationIllustrationTitle">Australia education coordination network</title>
              <defs>
                <linearGradient id="coordinationLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#b88a3b" stop-opacity="0.18"/>
                  <stop offset="52%" stop-color="#1f5e52" stop-opacity="0.38"/>
                  <stop offset="100%" stop-color="#b88a3b" stop-opacity="0.22"/>
                </linearGradient>
              </defs>
              <path class="coordination-shelf" d="M42 212 H768"/>
              <path class="coordination-route" d="M82 164 C176 96, 242 188, 332 122 S506 64, 638 130 S728 174, 780 92"/>
              <path class="coordination-route faint" d="M126 210 C218 166, 286 232, 384 188 S548 132, 718 198"/>
              <g class="coordination-microgrid">
                <path d="M58 68 C140 42, 206 88, 272 62 S410 34, 494 72 S632 110, 746 58"/>
                <path d="M54 104 C154 82, 232 134, 318 100 S454 76, 568 118 S684 148, 774 114"/>
                <path d="M76 136 C184 116, 260 158, 368 142 S520 98, 618 156 S724 202, 784 158"/>
                <path d="M112 184 C206 140, 288 210, 416 168 S610 154, 748 220"/>
                <path d="M132 58 C156 112, 138 152, 192 204"/>
                <path d="M240 48 C278 104, 248 156, 316 218"/>
                <path d="M376 54 C344 116, 398 152, 372 218"/>
                <path d="M514 54 C550 108, 506 160, 590 214"/>
                <path d="M666 58 C626 116, 688 158, 658 218"/>
                <path d="M730 76 C696 120, 754 162, 710 208"/>
              </g>
              <g class="coordination-index-lines">
                <path d="M210 82 H292 V122"/>
                <path d="M454 84 H526 V130"/>
                <path d="M292 174 H364 V122"/>
                <path d="M520 188 H612 V132"/>
                <path d="M142 184 H218 V136"/>
                <path d="M662 102 H734 V166"/>
              </g>
              <g class="coordination-clusters">
                <path d="M86 86 H168 M98 118 H188 M82 150 H152 M122 176 H212"/>
                <path d="M328 84 H418 M354 112 H466 M312 148 H420 M372 178 H488"/>
                <path d="M582 82 H694 M610 112 H742 M556 148 H666 M650 178 H776"/>
                <circle cx="86" cy="86" r="4"/><circle cx="168" cy="86" r="3"/><circle cx="98" cy="118" r="3"/><circle cx="188" cy="118" r="4"/>
                <circle cx="82" cy="150" r="4"/><circle cx="152" cy="150" r="3"/><circle cx="122" cy="176" r="3"/><circle cx="212" cy="176" r="4"/>
                <circle cx="328" cy="84" r="4"/><circle cx="418" cy="84" r="3"/><circle cx="354" cy="112" r="3"/><circle cx="466" cy="112" r="4"/>
                <circle cx="312" cy="148" r="4"/><circle cx="420" cy="148" r="3"/><circle cx="372" cy="178" r="3"/><circle cx="488" cy="178" r="4"/>
                <circle cx="582" cy="82" r="4"/><circle cx="694" cy="82" r="3"/><circle cx="610" cy="112" r="3"/><circle cx="742" cy="112" r="4"/>
                <circle cx="556" cy="148" r="4"/><circle cx="666" cy="148" r="3"/><circle cx="650" cy="178" r="3"/><circle cx="776" cy="178" r="4"/>
              </g>
              <g class="coordination-nodes">
                <circle cx="82" cy="164" r="6"/><circle cx="332" cy="122" r="6"/><circle cx="638" cy="130" r="6"/><circle cx="780" cy="92" r="6"/>
                <circle cx="384" cy="188" r="4"/><circle cx="718" cy="198" r="4"/>
                <circle cx="132" cy="58" r="3"/><circle cx="240" cy="48" r="3"/><circle cx="376" cy="54" r="3"/><circle cx="514" cy="54" r="3"/><circle cx="666" cy="58" r="3"/>
                <circle cx="272" cy="62" r="3"/><circle cx="318" cy="100" r="3"/><circle cx="494" cy="72" r="3"/><circle cx="568" cy="118" r="3"/><circle cx="618" cy="156" r="3"/>
                <circle cx="192" cy="204" r="3"/><circle cx="316" cy="218" r="3"/><circle cx="372" cy="218" r="3"/><circle cx="590" cy="214" r="3"/><circle cx="710" cy="208" r="3"/>
              </g>
              <g class="coordination-dots">
                <circle cx="64" cy="86" r="1.6"/><circle cx="156" cy="72" r="1.6"/><circle cx="226" cy="112" r="1.6"/><circle cx="438" cy="104" r="1.6"/>
                <circle cx="488" cy="152" r="1.6"/><circle cx="548" cy="88" r="1.6"/><circle cx="608" cy="188" r="1.6"/><circle cx="686" cy="142" r="1.6"/>
                <circle cx="748" cy="190" r="1.6"/><circle cx="262" cy="190" r="1.6"/><circle cx="424" cy="214" r="1.6"/><circle cx="522" cy="218" r="1.6"/>
              </g>
              <g class="coordination-labels">
                <text x="72" y="238">FILES</text>
                <text x="310" y="238">ROUTES</text>
                <text x="574" y="238">LIAISON</text>
                <text x="204" y="80">AQF</text>
                <text x="452" y="82">RPL</text>
                <text x="674" y="92">NSW</text>
                <text x="94" y="74">STUDENT FILE</text>
                <text x="96" y="110">TRANSCRIPT</text>
                <text x="90" y="142">INTAKE</text>
                <text x="132" y="168">ENGLISH</text>
                <text x="338" y="76">UNIVERSITY</text>
                <text x="364" y="104">CREDIT</text>
                <text x="322" y="140">PATHWAY</text>
                <text x="382" y="170">OFFER</text>
                <text x="592" y="74">ADVISER</text>
                <text x="620" y="104">REFERRAL</text>
                <text x="566" y="140">NOTES</text>
                <text x="660" y="170">FOLLOW-UP</text>
              </g>
            </svg>
            <figcaption>Student files, university routes and adviser liaison kept in one coordinated workflow.</figcaption>
          </figure>
        </div>
        <aside class="office-notice-details">
          <p><strong>Overseas Tutorial Centre Ltd</strong><br>45 Evans St, Balmain, NSW 2041, Australia</p>
          <p class="office-contact-lines">Australian contact: <a href="mailto:x.yan@overseasuk.com">x.yan@overseasuk.com</a><br>UK main telephone / WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
          <div class="office-contact-card">
            <span>Australia coordination contact</span>
            <strong>Yan Xinyue</strong>
            <p>Supports OTC's Australia-facing coordination work, including student file organisation, appointment scheduling, education-route communication, bilingual document follow-up and liaison with professional advisers where specialist input is required.</p>
          </div>
          <div class="office-status">
            <span>Current status</span>
            <strong>Establishing presence</strong>
            <p>Education coordination and market-entry support are being developed first. Regulated Australian advice remains outside OTC's direct scope.</p>
          </div>
          <a class="office-ai-link-card" href="/ai-education-operations/">
            <span>AI-enabled operations</span>
            <strong>AI Education Operations Framework</strong>
            <p>Structured student files, qualification mapping, application workflows, tutorial publishing and Australia route intelligence.</p>
          </a>
          <a class="office-ai-link-card" href="/australia-vet-tafe-pathways/">
            <span>VET / TAFE route coverage</span>
            <strong>Australia Vocational Pathway Map</strong>
            <p>State-by-state VET, TAFE, pathway and vocational-course screening for Australia-facing student advisory work.</p>
          </a>
        </aside>
      </div>
    </section>

    <section class="band compact-band" id="centre-updates">
      <div class="institutional-update-board">
        <div class="institutional-update-head">
          <span>Centre Updates · May 2026</span>
          <h2>Centre status and Australia office updates</h2>
          <p>This notice records public-facing centre status, office development and governance updates. Certificates, email records and internal review files are retained separately in OTC's document system.</p>
        </div>
        <div class="institutional-update-cards">
          <article>
            <b>Centre Status</b>
            <strong>OTHM approved centre status renewed</strong>
            <p>Overseas Tutorial Centre has been renewed as an approved OTHM Centre. The centre record continues under centre number <em>DC1802235</em>, with approval valid until <em>30 June 2031</em>.</p>
            <a href="/othm-qualifications/">View OTHM route</a>
          </article>
          <article>
            <b>Australia Office</b>
            <strong>Executive Director appointed for OTC Australia</strong>
            <p>Georgie Barnes has been formally appointed as Executive Director, OTC Australia, supporting local coordination, institutional communication, student-route development and professional referral boundaries.</p>
            <a href="#australia-director">View welcome note</a>
          </article>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="australia-director-welcome">
        <figure class="director-portrait">
          <img src="/assets/australia-academic-map-soft.svg?v=20260519-dense" alt="Dense pale map of Australian universities, schools, vocational providers, academic institutions and government education networks">
          <figcaption>Australia academic network</figcaption>
        </figure>
        <div class="director-message" id="australia-director">
          <div class="director-kicker">Welcome from Australia</div>
          <h2>Welcome to OTC Australia.</h2>
          <blockquote>
            <p>OTC's Australia presence is being built to give students, families and education partners a clear local point of coordination. From NSW, our priority is to connect careful student advisory work with practical communication, reliable documentation and responsible professional referral where specialist advice is required.</p>
            <p>As the Australia office develops, our work will focus on dependable communication, well-organised student files, institution-level pathway screening and a clear professional boundary. We want every family, partner and adviser who works with OTC Australia to understand what we coordinate directly, what evidence we keep, and when a regulated professional should be involved.</p>
          </blockquote>
          <div class="director-signature">
            <img class="director-signature-mark" src="/assets/georgie-barnes-signature.svg?v=20260519-quiet" alt="Georgie Barnes signature">
            <strong>Georgie Barnes</strong>
            <span>Executive Director, Australia</span>
          </div>
          <div class="director-commitments">
            <article><b>Student care</b><span>Clear intake, practical next steps and family communication.</span></article>
            <article><b>Institutional connection</b><span>University application coordination, partner liaison and market intelligence.</span></article>
            <article><b>Professional boundary</b><span>Regulated migration, legal, tax and compliance matters referred to qualified advisers.</span></article>
          </div>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Cooperation Index</div>
        <h2>Australia education cooperation map.</h2>
        <p>This public index shows OTC's Australia-facing coverage by region, institution type and service route. Internal source channels, contract references, commercial terms and platform credentials are maintained privately in OTC's evidence records and are not published on the website.</p>
      </div>
      <div class="australia-intelligence-panel">
        <article class="intel-feature">
          <span>Public view</span>
          <strong>Institution and pathway coverage</strong>
          <p>OTC maintains a structured Australia route across universities, pathway colleges, public and independent schools, VET / TAFE, English-language preparation, professional programmes and national education-promotion materials.</p>
          <ul>
            <li>University and pathway application coordination</li>
            <li>Public school, independent school and guardianship-adjacent routes</li>
            <li>VET, TAFE, English-language and pathway preparation options</li>
            <li>Private internal records for contracts, training, compliance and evidence</li>
          </ul>
        </article>
        <div class="cooperation-map-board">
          <div class="cooperation-map-visual" aria-label="Interactive Australia education cooperation map">
            <img src="/assets/australia-academic-map-soft.svg?v=20260519-public-index" alt="Australia education cooperation map">
            <details class="map-pin pin-nsw">
              <summary>NSW</summary>
              <div class="map-popover">
                <strong>New South Wales</strong>
                <details><summary>UNSW Sydney</summary><p>Foundation, diploma, pre-master and direct-entry application monitoring.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=NSW&institution=UNSW%20Sydney#otc-apply-form">Apply via OTC</a></details>
                <details><summary>UTS / UTS College</summary><p>Pathway, scholarship, application-timing and international-course progression routes.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=NSW&institution=UTS%20%2F%20UTS%20College#otc-apply-form">Apply via OTC</a></details>
                <details><summary>University of Wollongong</summary><p>StudyLink application route, nursing and professional-course timing intelligence.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=NSW&institution=University%20of%20Wollongong#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Macquarie University</summary><p>Teaching, law, English and academic-entry route screening.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=NSW&institution=Macquarie%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>University of Newcastle / Newcastle College</summary><p>Pathway, IT, cyber security, data science and regional-campus progression routes.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=NSW&institution=University%20of%20Newcastle%20%2F%20Newcastle%20College#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-vic">
              <summary>VIC</summary>
              <div class="map-popover">
                <strong>Victoria</strong>
                <details><summary>University of Melbourne</summary><p>High-selectivity university route for postgraduate and research-facing screening.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=VIC&institution=University%20of%20Melbourne#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Monash University / Monash College</summary><p>IT, English, pathway and scholarship-route monitoring.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=VIC&institution=Monash%20University%20%2F%20Monash%20College#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Swinburne University of Technology</summary><p>Business, IT, employability and pathway-course route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=VIC&institution=Swinburne%20University%20of%20Technology#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Deakin University</summary><p>Health, nursing, speech pathology, business and public-health route tracking.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=VIC&institution=Deakin%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Victorian Government Schools</summary><p>Public-school capacity, high-school pathway and family-advisory route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=VIC&institution=Victorian%20Government%20Schools#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-act">
              <summary>ACT</summary>
              <div class="map-popover">
                <strong>ACT and Canberra</strong>
                <details><summary>Australian National University</summary><p>Scholarship, undergraduate and postgraduate route screening.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=ACT&institution=Australian%20National%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>University of Canberra</summary><p>Foundation, early-offer, health, teaching and professional-course timing routes.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=ACT&institution=University%20of%20Canberra#otc-apply-form">Apply via OTC</a></details>
                <details><summary>ACT Public Schools</summary><p>Secondary-school, GS-process and family pathway planning coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=ACT&institution=ACT%20Public%20Schools#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-qld">
              <summary>QLD</summary>
              <div class="map-popover">
                <strong>Queensland</strong>
                <details><summary>University of Queensland</summary><p>Portal, pathway and undergraduate / postgraduate route screening.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=QLD&institution=University%20of%20Queensland#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Griffith University</summary><p>Undergraduate and postgraduate application-route monitoring.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=QLD&institution=Griffith%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Central Queensland University</summary><p>Business, construction-management and regional-route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=QLD&institution=Central%20Queensland%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>The Rockhampton Grammar School</summary><p>Central Queensland boarding-school route with Years 7-12 accommodation and regional school-life positioning.</p><a class="map-apply-link" href="/australia-schools/rockhampton-grammar-school/">View review profile</a></details><details><summary>Moreton Bay Colleges</summary><p>Brisbane girls / boys college route with PSP, HSP, PYP and school-managed homestay options.</p><a class="map-apply-link" href="/australia-schools/moreton-bay-colleges/">View review profile</a></details><details><summary>Groves Christian College</summary><p>School-sector and Year 7-12 pathway coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=QLD&institution=Groves%20Christian%20College#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-nt">
              <summary>NT</summary>
              <div class="map-popover">
                <strong>Northern Territory</strong>
                <details><summary>Charles Darwin University</summary><p>Darwin-centred dual-sector university route covering undergraduate, postgraduate, research, TAFE packages, CDU International College and regional Australia planning.</p><a class="map-apply-link" href="/australia-universities/charles-darwin-university/">View CDU profile</a><a class="map-apply-link" href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Study NT agent training</summary><p>OTC has completed Study NT agent training and is using the record as Northern Territory route-readiness evidence, not as a formal CDU agency appointment.</p><a class="map-apply-link" href="/insights/study-nt-agent-training-certificate-otc-australia-meaning/">Read certificate note</a></details>
              </div>
            </details>
            <details class="map-pin pin-wa">
              <summary>WA</summary>
              <div class="map-popover">
                <strong>Western Australia</strong>
                <details><summary>University of Western Australia / UWA College</summary><p>Foundation, college, conditional-CoE and progression-route tracking.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=WA&institution=University%20of%20Western%20Australia%20%2F%20UWA%20College#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Curtin University</summary><p>Offer, OSHC, payment and application-route monitoring.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=WA&institution=Curtin%20University#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Murdoch University / Murdoch College</summary><p>Pathway, scholarship and nursing-route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=WA&institution=Murdoch%20University%20%2F%20Murdoch%20College#otc-apply-form">Apply via OTC</a></details>
                <details><summary>Notre Dame Australia</summary><p>Undergraduate, postgraduate, English and short-course route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=WA&institution=Notre%20Dame%20Australia#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-sa">
              <summary>SA</summary>
              <div class="map-popover">
                <strong>South Australia</strong>
                <details><summary>University of Adelaide</summary><p>Scholarship, quota-course, EMI and professional-route monitoring.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=SA&institution=University%20of%20Adelaide#otc-apply-form">Apply via OTC</a></details>
                <details><summary>KIC Adelaide College</summary><p>Foundation, diploma, pre-master and scholarship progression route.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=SA&institution=KIC%20Adelaide%20College#otc-apply-form">Apply via OTC</a></details>
                <details><summary>International College of Hotel Management</summary><p>Hospitality, bachelor, graduate certificate / diploma and master route coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=SA&institution=International%20College%20of%20Hotel%20Management#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
            <details class="map-pin pin-tas">
              <summary>TAS</summary>
              <div class="map-popover">
                <strong>Tasmania</strong>
                <details><summary>University of Tasmania</summary><p>Scholarship, accommodation, regional-campus and professional-degree route tracking.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=TAS&institution=University%20of%20Tasmania#otc-apply-form">Apply via OTC</a></details>
              </div>
            </details>
          </div>
          <aside class="cooperation-map-note">
            <span>Click a state</span>
            <strong>Expand by region, then by institution.</strong>
            <p>Institution names are shown as public route references. Internal channel source, contract, portal and commercial evidence remains in OTC's private audit file.</p>
          </aside>
        </div>
        <script>
          (() => {
            const map = document.querySelector(".cooperation-map-visual");
            if (!map) return;
            const statePins = Array.from(map.querySelectorAll(":scope > .map-pin"));
            statePins.forEach((pin) => {
              const popover = pin.querySelector(".map-popover");
              if (popover && !popover.querySelector(".map-close")) {
                const close = document.createElement("button");
                close.type = "button";
                close.className = "map-close";
                close.textContent = "Close";
                close.addEventListener("click", () => {
                  pin.open = false;
                  pin.querySelectorAll(".map-popover details[open]").forEach((child) => {
                    child.open = false;
                  });
                });
                popover.prepend(close);
              }
              pin.addEventListener("toggle", () => {
                if (!pin.open) return;
                statePins.forEach((other) => {
                  if (other !== pin) other.open = false;
                });
              });
            });
            document.addEventListener("click", (event) => {
              if (map.contains(event.target)) return;
              statePins.forEach((pin) => {
                pin.open = false;
              });
            });
            document.addEventListener("keydown", (event) => {
              if (event.key !== "Escape") return;
              statePins.forEach((pin) => {
                pin.open = false;
              });
            });
          })();
        </script>
      </div>
      <div class="australia-intelligence-panel private-intelligence-panel">
        <article class="intel-feature">
          <span>Private evidence kept off-site</span>
          <strong>Application and partner operations</strong>
          <p>OTC keeps internal records for portal access, training notices, application workflows, data handling, representative relationships and commercial terms. These records support due diligence but are not disclosed in the public cooperation map.</p>
          <ul>
            <li>Application submission and offer-condition workflow records</li>
            <li>Training, agent-quality and data-protection records</li>
            <li>Private commercial terms and channel source records</li>
            <li>Evidence pack retained for audit, legal and professional review where required</li>
          </ul>
        </article>
        <div class="intel-list platform-list">
          <article><b>Direct routes</b><strong>Contracted pathway and application infrastructure</strong><p>OTC maintains private direct-agreement and portal evidence for international education routes. Public materials describe capability, not commercial structure.</p></article>
          <article><b>Channel routes</b><strong>Institution updates and application intelligence</strong><p>OTC tracks intake openings, document requirements, application portals, scholarships, school capacity and programme availability through private channels.</p></article>
          <article><b>Provider routes</b><strong>Pathway, college and English preparation</strong><p>Coverage includes foundation, diploma, pre-master, English, academic-readiness and pathway progression options across Australia.</p></article>
          <article><b>Professional routes</b><strong>Health, teaching, IT, business and specialist courses</strong><p>OTC monitors selected professional-course routes where timing, quota, English and placement rules require careful file management.</p></article>
          <article><b>School routes</b><strong>Public, independent and boarding pathways</strong><p>School-sector intelligence supports family advisory work, academic guardianship-adjacent planning and pre-university progression.</p></article>
          <article><b>Compliance routes</b><strong>Private evidence, public boundary</strong><p>Commercial records, partner sources and regulated-advice boundaries are kept internally. Public claims remain limited to education coordination and application support.</p></article>
        </div>
      </div>
    </section>

    <section class="spotlight">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Site Rollout</div>
          <h2>Six necessary stations for the Australia route.</h2>
          <p>The page separates what OTC can operate directly from what must be referred to qualified Australian professionals.</p>
        </div>
        <div class="australia-office-stations">
          <svg class="station-map-weave" viewBox="0 0 1200 640" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="stationRouteGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#d9bf86" stop-opacity="0.2"/>
                <stop offset="55%" stop-color="#b88a3b" stop-opacity="0.42"/>
                <stop offset="100%" stop-color="#1f5e52" stop-opacity="0.22"/>
              </linearGradient>
            </defs>
            <path stroke="url(#stationRouteGold)" d="M110 126 C250 62, 326 208, 486 130 S770 56, 1018 146" />
            <path stroke="url(#stationRouteGold)" d="M154 338 C310 266, 410 414, 566 328 S830 256, 1048 360" />
            <path stroke="url(#stationRouteGold)" d="M198 528 C360 458, 492 586, 662 494 S878 444, 1076 520" />
            <path stroke="url(#stationRouteGold)" d="M310 92 C346 196, 328 318, 402 418 S552 552, 612 590" />
            <path stroke="url(#stationRouteGold)" d="M816 80 C760 184, 824 318, 752 420 S650 532, 690 606" />
            <path stroke="url(#stationRouteGold)" d="M96 248 C218 214, 306 286, 408 246 S610 176, 714 244 S896 326, 1092 278" />
            <path stroke="url(#stationRouteGold)" d="M86 426 C254 374, 360 478, 512 424 S756 358, 906 430 S1010 470, 1130 438" />
            <g>
              <circle cx="110" cy="126" r="5"/><circle cx="486" cy="130" r="5"/><circle cx="1018" cy="146" r="5"/>
              <circle cx="154" cy="338" r="5"/><circle cx="566" cy="328" r="5"/><circle cx="1048" cy="360" r="5"/>
              <circle cx="198" cy="528" r="5"/><circle cx="662" cy="494" r="5"/><circle cx="1076" cy="520" r="5"/>
              <circle cx="402" cy="418" r="4"/><circle cx="752" cy="420" r="4"/>
              <circle cx="408" cy="246" r="4"/><circle cx="714" cy="244" r="4"/><circle cx="512" cy="424" r="4"/><circle cx="906" cy="430" r="4"/>
            </g>
          </svg>
          <article id="nsw-base"><b>01</b><strong>NSW Coordination Base</strong><p>Sydney-area address, local communication, appointment coordination, meeting-room planning, mailbox workflow and supplier liaison.</p><ul><li>Maintain local contact and correspondence records.</li><li>Coordinate meetings with students, families, institutions and professional partners.</li><li>Keep an Australia activity log for business development and audit-copy use.</li></ul></article>
          <article id="applications"><b>02</b><strong>University Application Route</strong><p>Australia institution screening, course matching, intake timing, English-readiness checks and application document planning.</p><ul><li>Start at country and institution level before narrowing to programme level.</li><li>Prepare document checklists, file naming and offer-condition tracking.</li><li>Link live cases to the university application portfolio system.</li></ul></article>
          <article id="student-support"><b>03</b><strong>Student Support Desk</strong><p>Practical support for students and families before arrival, during application preparation and through early settlement coordination.</p><ul><li>Record student enquiries, family instructions and next-step notes.</li><li>Coordinate academic readiness, pre-arrival planning and local service signposting.</li><li>Separate education support from immigration or legal advice.</li></ul></article>
          <article id="institutional-services"><b>04</b><strong>Institutional Services</strong><p>Bilingual documentation, translation coordination, publishing liaison, training administration and academic-event support.</p><ul><li>Prepare bilingual materials for institutions, publishers and education partners.</li><li>Support training packs, service brochures, meeting notes and presentation files.</li><li>Route certified, legal or notarised work to appropriate professionals where required.</li></ul></article>
          <article id="market-intelligence"><b>05</b><strong>Market Intelligence</strong><p>Australia education updates, agent-channel notes, institution briefings, public insights and business-development records.</p><ul><li>Summarise agent training, portal updates and institution communications.</li><li>Publish compliant education insights for students and families.</li><li>Build a reusable evidence base for Australian market demand.</li></ul></article>
          <article id="referral"><b>06</b><strong>Professional Referral</strong><p>Migration, legal, tax, accounting, company setup and regulated education matters are routed to qualified Australian professionals.</p><ul><li>Keep referral records, scope boundaries and client instructions clear.</li><li>Coordinate with registered migration agents, lawyers, accountants and compliance specialists.</li><li>Do not present OTC coordination as regulated professional advice.</li></ul></article>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="nsw-schools-zone" id="nsw-schools">
        <div class="section-head compact-head">
          <div class="eyebrow">NSW Schools Briefing Desk</div>
          <h2>Australia K-12 school application channel.</h2>
          <p>OTC is building a student-facing NSW schools desk based on Study NSW school briefing materials, international admission updates and school-specific enquiry records. Families may request a free initial screening before any formal school application is prepared.</p>
        </div>
        <div class="nsw-schools-briefing">
          <article>
            <span>Study NSW briefing series</span>
            <strong>2026 NSW quality schools online briefings</strong>
            <p>Emails from NSW Government / Study NSW invite education agents to join a 2026 series introducing selected NSW primary and secondary schools, admissions conditions, fee notes and enquiry contacts for family counselling.</p>
          </article>
          <article>
            <span>OTC development route</span>
            <strong>School file, family advice and application preparation</strong>
            <p>OTC will maintain public school profiles, internal briefing notes, school contact records, document checklists and family-facing application guidance. Formal partnership status is recorded privately and only stated publicly when confirmed.</p>
          </article>
        </div>
        <div class="nsw-school-card-grid nsw-school-series-grid">
          <article>
            <b>National</b>
            <strong>Australia Agent Training Map 2026</strong>
            <p>OTC has requested access to official state and territory agent briefings, school-sector webinars and education updates across Queensland, Victoria, Western Australia, South Australia, Northern Territory, Tasmania and ACT. Study NT has activated OTC's training account, and the course has been completed with the certificate filed publicly.</p>
            <a href="/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf">Open Study NT certificate</a>
            <a href="/insights/study-nt-agent-training-certificate-otc-australia-meaning/">Certificate analysis</a>
            <a href="/insights/australia-agent-training-map-2026/">Read training map</a>
          </article>
          <article>
            <b>Readiness</b>
            <strong>Agency / representative request status</strong>
            <p>OTC now has a public Australia office route, school-profile review pages, a Study NT completion certificate, provider-contact records and published compliance boundaries. This is sufficient for initial representative or agency enquiries, while formal appointment still requires each institution's written process, compliance review and agreement terms.</p>
            <a href="mailto:office@overseasuk.com?subject=Australia%20Agency%20Request%20Readiness">Request institutional pack</a>
          </article>
          <article>
            <b>Northern Territory</b>
            <strong>Charles Darwin University</strong>
            <p>CDU is now listed in OTC's Northern Territory route as a Darwin-centred university, TAFE and pathway reference point. OTC has lodged CDU Global enquiry reference 260523-000334 and is awaiting the formal agent / representative process.</p>
            <a href="/australia-universities/charles-darwin-university/">View CDU profile</a>
            <a href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">Start CDU screening</a>
          </article>
          <article>
            <b>Series 02</b>
            <strong>PLC Pathways</strong>
            <p>Study NSW Greater China training record for PLC Pathways, a school-pathway route connected with NSW independent-school options and transition planning for international students.</p>
            <a href="/australia-schools/plc-pathways/">View review draft</a>
          </article>
          <article>
            <b>Series 03</b>
            <strong>Macarthur Anglican School</strong>
            <p>Sydney south-west independent co-educational school. Study NSW emails highlight its 84-acre campus, large-campus learning environment and international admissions briefing.</p>
            <a href="/australia-schools/macarthur-anglican-school/">View review draft</a>
          </article>
          <article>
            <b>Series 04</b>
            <strong>Lindisfarne Anglican Grammar School</strong>
            <p>NSW school briefing record with presentation and fee schedule materials received through Study NSW communications. Suitable for family screening, boarding / location discussion and application document planning.</p>
            <a href="/australia-schools/lindisfarne-anglican-grammar-school/">View review profile</a>
          </article>
          <article>
            <b>Series 05</b>
            <strong>The Illawarra Grammar School</strong>
            <p>Wollongong independent co-educational school briefing scheduled for 10 June 2026. OTC has opened a pre-briefing review page for school-side completion.</p>
            <a href="/australia-schools/the-illawarra-grammar-school/">View review draft</a>
          </article>
          <article>
            <b>Queensland</b>
            <strong>Rockhampton Grammar School</strong>
            <p>Central Queensland boarding route for families comparing boarding culture, English immersion, regional education and local Australian community life.</p>
            <a href="/australia-schools/rockhampton-grammar-school/">View profile</a>
          </article>
          <article>
            <b>Queensland</b>
            <strong>Moreton Bay Colleges</strong>
            <p>Brisbane east-side boys' and girls' college route covering PSP/HSP, PYP, QCE/ATAR/VET and homestay support.</p>
            <a href="/australia-schools/moreton-bay-colleges/">View profile</a>
          </article>
        </div>
        <div class="nsw-school-apply-panel">
          <div>
            <span>Free application channel</span>
            <strong>Send one email to start a no-charge first review.</strong>
            <p>Please include student age, current year level, latest transcript or school report, English level, preferred intake, boarding/day preference, budget range and whether the family is considering Sydney, Wollongong, regional NSW or another Australian state.</p>
          </div>
          <a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Free%20Australia%20K-12%20School%20Application%20Screening">Start free review</a>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head">
        <div class="eyebrow">Evidence Roadmap</div>
        <h2>What should be collected as the route develops.</h2>
      </div>
      <div class="consulting-levels australia-evidence-cards">
        <article><strong>Office and Operations</strong><p>Address proof, local supplier correspondence, meeting records, mailbox logs and Australia activity chronology.</p><span>Operational evidence.</span></article>
        <article><strong>Education Agency Links</strong><p>Study NSW training emails, institution updates, application portal records, agent-channel communications and student/application reports.</p><span>Market evidence.</span></article>
        <article><strong>Qualification Pathway Publications</strong><p>Published OTC pages explaining OTHM-to-Australia qualification interpretation, credit/RPL readiness, pathway screening and career-qualification planning.</p><span>Public capability evidence.</span></article>
        <article><strong>Student Case Records</strong><p>Student enquiries, institution screening notes, course shortlists, document checklists, offer-condition tracking and family communication logs.</p><span>Service evidence.</span></article>
        <article><strong>Professional Referral Trail</strong><p>Referral emails, adviser details, scope notes and clear separation between OTC coordination and regulated advice.</p><span>Compliance evidence.</span></article>
      </div>
      <div style="height:24px"></div>
      <div class="notice advice-signpost">
        <strong>Compliance boundary</strong>
        <p>OTC provides education coordination, bilingual documentation, market-entry support and administrative organisation. OTC does not provide Australian migration, legal, tax, financial or regulated education compliance advice. Regulated matters should be handled by appropriately qualified professionals.</p>
      </div>
    </section>

    <section class="band compact-band">
      <div class="qualification-report-panel">
        <div>
          <span>Evidence Report</span>
          <h2>OTHM qualifications and Australia pathway strategy.</h2>
          <p>The report is part of OTC Australia's readiness evidence chain. It records how OTC's UK-regulated OTHM qualification base can support Australia-facing university application, credit/RPL readiness, pathway screening and career-qualification planning without claiming automatic Australian recognition.</p>
        </div>
        <div class="qualification-report-actions">
          <a class="btn btn-dark" href="/reports/othm-australia-expansion/">Open report</a>
          <a class="btn btn-light" href="/zh/reports/othm-australia-expansion/">中文專題</a>
        </div>
      </div>
      <div style="height:14px"></div>
      <div class="qualification-report-panel vet-tafe-panel">
        <div>
          <span>Route Development</span>
          <h2>Australia VET / TAFE pathway coverage.</h2>
          <p>A public pathway map for vocational course screening, TAFE-to-university progression, document-readiness checks and referral boundaries across Australian state training systems.</p>
        </div>
        <a class="btn btn-dark" href="/australia-vet-tafe-pathways/">Open map</a>
      </div>
    </section>
  `
});

const australiaOfficePresenceZh = pageShell({
  title: "澳洲辦公室路線 | OTC Study Hub",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC 澳洲辦公室中文鏡像頁：NSW 協調基地、大學申請、中小學通道、VET/TAFE、資格路線、學生支持、機構服務、市場情報及專業轉介邊界。",
  path: "/zh/australia-office-presence/",
  body: `
    <section class="page-hero australia-office-hero zh-report-hero"><div class="band"><div class="eyebrow">澳洲辦公室路線</div><h1>OTC Australia Office Route</h1><p>以新南威爾士州為起點，建立教育諮詢、學生支持、院校申請、機構服務與澳洲市場發展的分階段運作路線。</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=OTC%20Australia%20Office%20Presence%20Chinese%20Enquiry">聯絡 OTC</a><a class="btn btn-secondary" href="/australia-office-presence/">English page</a><a class="btn btn-secondary" href="/zh/">返回中文首頁</a></div></div></section>

    <section class="band">
      <div class="australia-office-intro">
        <div>
          <div class="eyebrow">Operating Position</div>
          <h2>先建立本地存在，再逐步加深服務能力。</h2>
          <p>OTC 的澳洲路線從 NSW 協調基地開始，向大學申請支持、家庭溝通、雙語機構服務、市場情報及專業轉介延展。這一路線強調可留痕、可審閱、可持續發展：每一項活動都應形成清楚記錄，支持業務規劃、院校溝通及專業審查。</p>
          <figure class="coordination-illustration" aria-label="澳洲教育協調網絡示意圖">
            <svg viewBox="0 0 820 260" role="img" aria-labelledby="coordinationIllustrationTitleZh">
              <title id="coordinationIllustrationTitleZh">澳洲教育協調網絡</title>
              <defs><linearGradient id="coordinationLineZh" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#b88a3b" stop-opacity="0.18"/><stop offset="52%" stop-color="#1f5e52" stop-opacity="0.38"/><stop offset="100%" stop-color="#b88a3b" stop-opacity="0.22"/></linearGradient></defs>
              <path class="coordination-shelf" d="M42 212 H768"/>
              <path class="coordination-route" d="M82 164 C176 96, 242 188, 332 122 S506 64, 638 130 S728 174, 780 92"/>
              <path class="coordination-route faint" d="M126 210 C218 166, 286 232, 384 188 S548 132, 718 198"/>
              <g class="coordination-microgrid">
                <path d="M58 68 C140 42, 206 88, 272 62 S410 34, 494 72 S632 110, 746 58"/>
                <path d="M54 104 C154 82, 232 134, 318 100 S454 76, 568 118 S684 148, 774 114"/>
                <path d="M76 136 C184 116, 260 158, 368 142 S520 98, 618 156 S724 202, 784 158"/>
                <path d="M112 184 C206 140, 288 210, 416 168 S610 154, 748 220"/>
              </g>
              <g class="coordination-index-lines"><path d="M210 82 H292 V122"/><path d="M454 84 H526 V130"/><path d="M292 174 H364 V122"/><path d="M520 188 H612 V132"/><path d="M142 184 H218 V136"/><path d="M662 102 H734 V166"/></g>
              <g class="coordination-clusters">
                <path d="M86 86 H168 M98 118 H188 M82 150 H152 M122 176 H212"/>
                <path d="M328 84 H418 M354 112 H466 M312 148 H420 M372 178 H488"/>
                <path d="M582 82 H694 M610 112 H742 M556 148 H666 M650 178 H776"/>
                <circle cx="86" cy="86" r="4"/><circle cx="188" cy="118" r="4"/><circle cx="82" cy="150" r="4"/><circle cx="212" cy="176" r="4"/>
                <circle cx="328" cy="84" r="4"/><circle cx="466" cy="112" r="4"/><circle cx="312" cy="148" r="4"/><circle cx="488" cy="178" r="4"/>
                <circle cx="582" cy="82" r="4"/><circle cx="742" cy="112" r="4"/><circle cx="556" cy="148" r="4"/><circle cx="776" cy="178" r="4"/>
              </g>
              <g class="coordination-nodes"><circle cx="82" cy="164" r="6"/><circle cx="332" cy="122" r="6"/><circle cx="638" cy="130" r="6"/><circle cx="780" cy="92" r="6"/><circle cx="384" cy="188" r="4"/><circle cx="718" cy="198" r="4"/></g>
              <g class="coordination-labels">
                <text x="72" y="238">FILES</text><text x="310" y="238">ROUTES</text><text x="574" y="238">LIAISON</text>
                <text x="204" y="80">AQF</text><text x="452" y="82">RPL</text><text x="674" y="92">NSW</text>
                <text x="94" y="74">STUDENT FILE</text><text x="96" y="110">TRANSCRIPT</text><text x="90" y="142">INTAKE</text><text x="132" y="168">ENGLISH</text>
                <text x="338" y="76">UNIVERSITY</text><text x="364" y="104">CREDIT</text><text x="322" y="140">PATHWAY</text><text x="382" y="170">OFFER</text>
              </g>
            </svg>
            <figcaption>學生文件、院校路線與專業轉介在同一協調流程內管理。</figcaption>
          </figure>
        </div>
        <aside class="office-notice-details">
          <p><strong>Overseas Tutorial Centre Ltd</strong><br>45 Evans St, Balmain, NSW 2041, Australia</p>
          <p class="office-contact-lines">澳洲聯絡：<a href="mailto:x.yan@overseasuk.com">x.yan@overseasuk.com</a><br>英國電話 / WhatsApp：<a href="https://wa.me/447947991572">+44 7947 991572</a></p>
          <div class="office-contact-card"><span>澳洲協調聯絡</span><strong>Yan Xinyue</strong><p>支持 OTC 面向澳洲的學生文件整理、預約協調、教育路線溝通、雙語文件跟進及必要時與專業顧問聯絡。</p></div>
          <div class="office-status"><span>Current status</span><strong>正在建立本地存在</strong><p>先發展教育協調及市場進入支持；澳洲受監管專業建議不屬於 OTC 直接服務範圍。</p></div>
          <a class="office-ai-link-card" href="/ai-education-operations/"><span>AI-enabled operations</span><strong>AI 教育運作框架</strong><p>學生文件、資格映射、申請流程、輔導出版與澳洲路線情報的結構化管理。</p></a>
          <a class="office-ai-link-card" href="/australia-vet-tafe-pathways/"><span>VET / TAFE route coverage</span><strong>澳洲職業教育路線圖</strong><p>按州整理 VET、TAFE、pathway 及職業導向課程的初步篩查。</p></a>
        </aside>
      </div>
    </section>

    <section class="band compact-band" id="centre-updates">
      <div class="institutional-update-board">
        <div class="institutional-update-head"><span>Centre Updates · 2026 年 5 月</span><h2>中心狀態與澳洲辦公室更新</h2><p>本區記錄可公開展示的中心狀態、澳洲辦公室發展和治理更新。證書、郵件記錄及內部審核文件另行保存在 OTC 文件系統。</p></div>
        <div class="institutional-update-cards">
          <article><b>中心狀態</b><strong>OTHM approved centre status renewed</strong><p>Overseas Tutorial Centre 已續期為 OTHM approved centre。中心號 <em>DC1802235</em> 保持不變，批准有效期至 <em>2031 年 6 月 30 日</em>。</p><a href="/othm-qualifications/">查看 OTHM 路線</a></article>
          <article><b>澳洲辦公室</b><strong>OTC Australia 執行董事任命</strong><p>Georgie Barnes 已正式受任為 Executive Director, OTC Australia，支持本地協調、院校溝通、學生路線發展及專業轉介邊界。</p><a href="#australia-director">查看歡迎詞</a></article>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="australia-director-welcome">
        <figure class="director-portrait"><img src="/assets/australia-academic-map-soft.svg?v=20260519-dense" alt="澳洲大學、中小學、職業教育、學術機構與政府教育網絡分布圖"><figcaption>Australia academic network</figcaption></figure>
        <div class="director-message" id="australia-director">
          <div class="director-kicker">Welcome from Australia</div>
          <h2>歡迎來到 OTC Australia。</h2>
          <blockquote><p>OTC 的澳洲存在旨在為學生、家庭與教育合作方提供清晰的本地協調點。從 NSW 出發，我們的重點是把審慎的學生諮詢、實際溝通、可靠文件整理，以及必要時的專業轉介銜接起來。</p><p>隨著澳洲辦公室發展，工作重心將放在可靠溝通、清晰學生文件、院校級 pathway screening 及明確專業邊界。我們希望每一位與 OTC Australia 合作的家庭、伙伴與顧問，都能理解 OTC 直接協調什麼、保留哪些證據，以及何時需要合資格專業人士介入。</p></blockquote>
          <div class="director-signature"><img class="director-signature-mark" src="/assets/georgie-barnes-signature.svg?v=20260519-quiet" alt="Georgie Barnes signature"><strong>Georgie Barnes</strong><span>Executive Director, Australia</span></div>
          <div class="director-commitments"><article><b>學生照護</b><span>清晰 intake、實際下一步與家庭溝通。</span></article><article><b>院校連接</b><span>大學申請協調、伙伴聯絡與市場情報。</span></article><article><b>專業邊界</b><span>移民、法律、稅務及合規事項轉介合資格顧問。</span></article></div>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head"><div class="eyebrow">Cooperation Index</div><h2>澳洲教育合作版圖。</h2><p>本公開索引展示 OTC 面向澳洲的區域、院校類型與服務路線覆蓋。內部渠道來源、合同、商業條款及平台憑證保存在 OTC 私有記錄中，不在網站公開。</p></div>
      <div class="australia-intelligence-panel">
        <article class="intel-feature"><span>Public view</span><strong>院校與 pathway 覆蓋</strong><p>OTC 維護一條覆蓋澳洲大學、pathway colleges、公立與私立學校、VET / TAFE、英語準備、專業課程及國家教育推廣材料的結構化路線。公開頁面只呈現院校與地區索引，不披露二級代理上線、合同來源或商業條款。</p><ul><li>大學與 pathway 申請協調</li><li>公立學校、私立學校與監護相鄰路線</li><li>VET、TAFE、英語與 pathway 準備</li><li>合同、培訓、合規及平台記錄私下保存</li></ul></article>
        <div class="cooperation-map-board">
          <div class="cooperation-map-visual" aria-label="互動澳洲教育合作地圖">
            <img src="/assets/australia-academic-map-soft.svg?v=20260519-public-index" alt="澳洲教育合作地圖">
            <details class="map-pin pin-nsw"><summary><span>NSW</span></summary><div class="map-popover"><button type="button" aria-label="關閉 NSW">關閉</button><h3>New South Wales</h3><p>悉尼與新州是 OTC Australia 的初始協調核心，覆蓋大學、pathway college、公立與私立中小學及家庭諮詢路線。</p><ul><li><strong>UNSW Sydney</strong><span>大學申請、商科、工程、計算機與研究型課程篩查。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>UTS / UTS College</strong><span>悉尼城市型大學及 pathway progression 路線。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>University of Wollongong</strong><span>Wollongong 及南海岸方向的大學與學校連接。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Macquarie University</strong><span>商科、傳媒、語言、教育與 pathway screening。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>University of Newcastle / Newcastle College</strong><span>regional NSW 升學、pathway 和職業導向課程選項。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>NSW K-12 schools</strong><span>Study NSW briefing schools、公立及私立學校初步篩查。</span><a href="#nsw-schools">免費學校初篩</a></li></ul></div></details>
            <details class="map-pin pin-vic"><summary><span>VIC</span></summary><div class="map-popover"><button type="button" aria-label="關閉 VIC">關閉</button><h3>Victoria</h3><p>維州路線用於墨爾本及周邊院校、政府學校、pathway college 與職業導向課程的申請規劃。</p><ul><li><strong>University of Melbourne</strong><span>高選擇性本科、graduate route 和研究型申請評估。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Monash University / Monash College</strong><span>大學與 pathway package route 初步篩查。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Swinburne University of Technology</strong><span>設計、商科、IT、工程與職業連接型課程。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Deakin University</strong><span>教育、商科、健康、傳媒及線上/校園混合選項。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Victorian Government Schools</strong><span>維州公立中小學入學、年級與監護相鄰需求初篩。</span><a href="mailto:office@overseasuk.com?subject=Victoria%20School%20Screening">免費學校初篩</a></li></ul></div></details>
            <details class="map-pin pin-act"><summary><span>ACT</span></summary><div class="map-popover"><button type="button" aria-label="關閉 ACT">關閉</button><h3>Australian Capital Territory</h3><p>首都區路線適合政策、公共管理、研究型課程及 Canberra 學校系統初步篩查。</p><ul><li><strong>Australian National University</strong><span>高選擇性本科、研究生與研究型方向申請評估。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>University of Canberra</strong><span>教育、健康、公共管理、傳媒與職業導向課程。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>ACT Public Schools</strong><span>公立中小學、year level placement 與家庭安置路線初篩。</span><a href="mailto:office@overseasuk.com?subject=ACT%20School%20Screening">免費學校初篩</a></li></ul></div></details>
            <details class="map-pin pin-qld"><summary><span>QLD</span></summary><div class="map-popover"><button type="button" aria-label="關閉 QLD">關閉</button><h3>Queensland</h3><p>昆州路線覆蓋 Brisbane、Gold Coast 及 regional Queensland 的大學、pathway、VET/TAFE 和中小學選項。</p><ul><li><strong>University of Queensland</strong><span>研究型大學課程、商科、工程、生命科學與 pathway screening。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Griffith University</strong><span>Gold Coast / Brisbane 校區、商科、酒店、健康與創意課程。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>CQUniversity Australia</strong><span>多校區、職業導向、regional option 與 pathway planning。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>The Rockhampton Grammar School</strong><span>Central Queensland 寄宿學校路線，重點在 Years 7-12 accommodation 及區域型澳洲學習環境。</span><a href="/australia-schools/rockhampton-grammar-school/">查看資料頁</a></li><li><strong>Moreton Bay Colleges</strong><span>Brisbane 男校/女校組合，涵蓋 PSP、HSP、PYP 和 school-managed homestay options。</span><a href="/australia-schools/moreton-bay-colleges/">查看資料頁</a></li><li><strong>Groves Christian College</strong><span>私立中小學路線與家庭教育規劃初步篩查。</span><a href="mailto:office@overseasuk.com?subject=Queensland%20School%20Screening">免費學校初篩</a></li></ul></div></details>
            <details class="map-pin pin-nt"><summary><span>NT</span></summary><div class="map-popover"><button type="button" aria-label="關閉 NT">關閉</button><h3>Northern Territory</h3><p>北領地路線以 Darwin、Study NT 培訓、CDU 大學/TAFE 雙重體系及區域型澳洲學習目的地為核心。</p><ul><li><strong>Charles Darwin University</strong><span>Darwin 為核心的 dual-sector university，覆蓋本科、碩士、研究型、TAFE packages、CDU International College 與 regional Australia planning。</span><a href="/zh/australia-universities/charles-darwin-university/">查看 CDU 資料頁</a><a href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">透過 OTC 申請</a></li><li><strong>Study NT agent training</strong><span>OTC 已完成 Study NT agent training，作為北領地路線準備度記錄；這不等於正式 CDU 代理授權。</span><a href="/zh/insights/study-nt-agent-training-certificate-otc-australia-meaning/">閱讀證書解讀</a></li></ul></div></details>
            <details class="map-pin pin-wa"><summary><span>WA</span></summary><div class="map-popover"><button type="button" aria-label="關閉 WA">關閉</button><h3>Western Australia</h3><p>西澳路線支持 Perth 方向的大學、pathway college、regional mobility 與職業導向選項。</p><ul><li><strong>University of Western Australia / UWA College</strong><span>大學及 pathway progression route 初步評估。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Curtin University</strong><span>商科、工程、IT、健康及職業連接型課程。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>Murdoch University / Murdoch College</strong><span>pathway、商科、傳媒、教育及環境方向。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>University of Notre Dame Australia</strong><span>健康、教育、法律與人文社科方向初步篩查。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li></ul></div></details>
            <details class="map-pin pin-sa"><summary><span>SA</span></summary><div class="map-popover"><button type="button" aria-label="關閉 SA">關閉</button><h3>South Australia</h3><p>南澳路線覆蓋 Adelaide 方向大學、pathway college、酒店管理、職業教育及 regional option。</p><ul><li><strong>University of Adelaide</strong><span>研究型大學課程、商科、工程、健康及 STEM 方向。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>KIC Adelaide College</strong><span>pathway preparation 和 foundation / diploma route 初篩。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li><li><strong>International College of Hotel Management</strong><span>酒店、旅遊、商業實務與職業導向課程。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li></ul></div></details>
            <details class="map-pin pin-tas"><summary><span>TAS</span></summary><div class="map-popover"><button type="button" aria-label="關閉 TAS">關閉</button><h3>Tasmania</h3><p>塔州路線適合 University of Tasmania、regional study、環境、海洋、教育及職業導向課程的初步篩查。</p><ul><li><strong>University of Tasmania</strong><span>Hobart / Launceston options、regional study 和學術/職業路線規劃。</span><a href="/university-applications/#otc-apply-form">透過 OTC 申請</a></li></ul></div></details>
          </div>
          <div class="map-index-strip"><span>University</span><span>Pathway</span><span>K-12</span><span>VET / TAFE</span><span>Professional courses</span><span>Public briefings</span></div>
          <p class="map-note">點擊州份標記可展開院校清單；再次點擊、使用關閉按鈕或點擊其他州份即可收回。公開頁面只作索引展示，具體合作來源與商務條件保存在內部檔案。</p>
        </div>
      </div>
      <div class="australia-intelligence-panel private-intelligence-panel">
        <article class="intel-feature"><span>Private operations panel</span><strong>申請與合作運作</strong><p>OTC 的私有檔案保存更完整的申請、合作、培訓、平台與合規記錄。這些材料支撐業務盡調與內部決策，但不在公開網站披露。</p><ul><li>portal access、training notes 和 application workflow 記錄</li><li>代表關係、商業條款與合同版本管理</li><li>學生 consent、data handling 和 professional referral notes</li><li>以 case log 方式連接公開院校索引與內部申請檔案</li></ul></article>
        <div class="intel-list platform-list">
          <article><b>Direct routes</b><strong>直接院校溝通</strong><p>保留院校招生、國際辦公室、pathway provider 及 Study NSW 類培訓通知。</p></article>
          <article><b>Channel routes</b><strong>渠道與平台記錄</strong><p>記錄平台入口、培訓材料、代表權限、case submission 和 update history。</p></article>
          <article><b>Provider routes</b><strong>VET / TAFE 與職業課程</strong><p>整理職業教育、TAFE-to-university progression、英文準備及短課路線。</p></article>
          <article><b>Professional routes</b><strong>專業轉介網絡</strong><p>移民、法律、稅務、會計、房產及公司設立問題均記錄轉介邊界。</p></article>
          <article><b>School routes</b><strong>K-12 學校申請</strong><p>按州整理公校、私校、boarding/day school、guardian-adjacent needs 和家庭指示。</p></article>
          <article><b>Compliance routes</b><strong>合規與文件治理</strong><p>保存 email trail、student instruction、file naming、fee note 及 document checklist。</p></article>
        </div>
      </div>
      <script>
        (function(){
          const board = document.querySelector('.cooperation-map-visual');
          if (!board) return;
          const pins = Array.from(board.querySelectorAll('details'));
          pins.forEach((pin) => {
            pin.addEventListener('toggle', () => {
              if (!pin.open) return;
              pins.forEach((other) => { if (other !== pin) other.open = false; });
            });
            const close = pin.querySelector('button');
            if (close) close.addEventListener('click', (event) => { event.preventDefault(); pin.open = false; });
          });
        })();
      </script>
    </section>

    <section class="spotlight"><div class="band compact-band">
      <div class="section-head compact-head"><div class="eyebrow">Site Rollout</div><h2>澳洲路線的六個必要站點。</h2><p>本頁區分 OTC 可以直接運作的教育協調工作，以及必須轉介合資格澳洲專業人士處理的事項。</p></div>
      <div class="australia-office-stations">
        <article id="nsw-base"><b>01</b><strong>NSW 協調基地</strong><p>悉尼地區地址、本地溝通、預約協調、會議室安排、郵件流程及供應商聯絡。</p><ul><li>保留本地聯絡與往來記錄。</li><li>協調學生、家庭、院校及專業伙伴會議。</li><li>維護澳洲活動日誌。</li></ul></article>
        <article id="applications"><b>02</b><strong>大學申請路線</strong><p>澳洲院校篩查、課程匹配、intake 時間、英語準備及申請文件規劃。</p><ul><li>先從國別與院校層面篩查，再細化到課程。</li><li>準備文件清單、命名規則及 offer 條件追蹤。</li><li>連接大學申請 portfolio 系統。</li></ul></article>
        <article id="student-support"><b>03</b><strong>學生支持台</strong><p>支持學生與家庭在申請前、申請中及早期安置階段的實際溝通。</p><ul><li>記錄學生諮詢、家庭指示與下一步。</li><li>協調學術準備、抵達前規劃與本地服務指引。</li><li>將教育支持與移民/法律建議分開。</li></ul></article>
        <article id="institutional-services"><b>04</b><strong>機構服務</strong><p>雙語文件、翻譯協調、出版聯絡、培訓行政及學術活動支持。</p><ul><li>準備面向機構、出版方及教育伙伴的雙語材料。</li><li>支持培訓包、服務簡介、會議記錄與展示文件。</li><li>需要 certified/legal/notarised 的工作轉介專業人士。</li></ul></article>
        <article id="market-intelligence"><b>05</b><strong>市場情報</strong><p>澳洲教育更新、agent-channel notes、院校 briefings、公開 insights 及業務發展記錄。</p><ul><li>總結 agent training、portal updates 及院校通信。</li><li>發布合規教育資訊。</li><li>建立澳洲市場需求證據庫。</li></ul></article>
        <article id="referral"><b>06</b><strong>專業轉介</strong><p>移民、法律、稅務、會計、公司設立及受監管教育事項轉介合資格澳洲專業人士。</p><ul><li>保留轉介記錄、範圍邊界與客戶指示。</li><li>協調註冊移民代理、律師、會計師及合規專家。</li><li>不將 OTC 教育協調表述為受監管專業建議。</li></ul></article>
      </div>
    </div></section>

    <section class="band">
      <div class="nsw-schools-zone" id="nsw-schools">
        <div class="section-head compact-head"><div class="eyebrow">NSW Schools Briefing Desk</div><h2>澳洲 K-12 中小學申請通道。</h2><p>OTC 正在根據 Study NSW 學校 briefing materials、國際招生更新與 school-specific enquiry records，建立面向學生家庭的新州中小學申請支持台。家庭可在正式申請前先提交免費初步篩查。</p></div>
        <div class="nsw-schools-briefing"><article><span>Study NSW briefing series</span><strong>2026 新州優質中小學在線培訓會</strong><p>NSW Government / Study NSW 郵件邀請教育中介參加系列培訓，介紹新州中小學、招生條件、費用提示及諮詢聯絡方式。</p></article><article><span>OTC development route</span><strong>學校檔案、家庭諮詢與申請準備</strong><p>OTC 將維護公開學校 profiles、內部 briefing notes、學校聯絡記錄、文件清單及家庭申請指南。正式合作狀態僅在確認後公開表述。</p></article></div>
        <div class="nsw-school-card-grid nsw-school-series-grid"><article><b>National</b><strong>澳洲教育中介培訓版圖 2026</strong><p>OTC 已向 Queensland、Victoria、Western Australia、South Australia、Northern Territory、Tasmania、ACT 等官方窗口發出培訓與 briefing 加入請求；Study NT training account 已 activated，agent training 已完成，completion certificate 已公開存檔。</p><a href="/zh/insights/australia-agent-training-map-2026/">閱讀培訓版圖</a><a href="/zh/insights/study-nt-agent-training-certificate-otc-australia-meaning/">證書意義解讀</a><a href="/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf">查看 Study NT 證書</a></article><article><b>Readiness</b><strong>代理 / 代表申請準備度</strong><p>OTC 目前已具備公開澳洲辦公室路線、學校資料審核頁、Study NT 完成證書、院校聯絡記錄與合規邊界說明。這已足以發出初步 representative / agency enquiry；正式代理仍需按各院校書面流程、合規審核與協議條款完成。</p><a href="mailto:office@overseasuk.com?subject=Australia%20Agency%20Request%20Readiness">索取機構資料包</a></article><article><b>Northern Territory</b><strong>Charles Darwin University</strong><p>CDU 已納入 OTC 北領地路線：Darwin 為核心、兼具大學與 TAFE 性質，適合本科、碩士、研究型、職業教育 package 與 regional Australia 規劃。OTC 已取得 CDU Global enquiry reference 260523-000334，正在等待正式代理/代表流程回覆。</p><a href="/zh/australia-universities/charles-darwin-university/">查看 CDU 資料頁</a><a href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">開始 CDU 初篩</a></article><article><b>Series 02</b><strong>PLC Pathways</strong><p>Study NSW Greater China training 記錄中的中小學銜接項目，連接 NSW 私立學校選項、pathway planning 及國際學生過渡規劃。</p><a href="/australia-schools/plc-pathways/">查看審核稿</a></article><article><b>Series 03</b><strong>Macarthur Anglican School</strong><p>悉尼西南部私立男女混合學校，郵件材料記錄其 84-acre campus、大悉尼區域位置和國際學生招生介紹。</p><a href="/australia-schools/macarthur-anglican-school/">查看審核稿</a></article><article><b>Series 04</b><strong>Lindisfarne Anglican Grammar School</strong><p>通過 Study NSW 通訊收到 presentation 及 fee schedule 相關材料，可用於家庭初篩、寄宿/地點討論及申請文件規劃。</p><a href="/australia-schools/lindisfarne-anglican-grammar-school/">查看資料頁</a></article><article><b>Series 05</b><strong>The Illawarra Grammar School</strong><p>位於 Wollongong 的 independent co-educational school，2026 年 6 月 10 日 Study NSW briefing 已建立預備審核頁。</p><a href="/australia-schools/the-illawarra-grammar-school/">查看審核稿</a></article><article><b>Queensland</b><strong>Rockhampton Grammar School</strong><p>Central Queensland boarding route，適合比較寄宿制、英語沉浸、地域型教育與澳洲本地社群。</p><a href="/australia-schools/rockhampton-grammar-school/">查看資料頁</a></article><article><b>Queensland</b><strong>Moreton Bay Colleges</strong><p>Brisbane 東區男校/女校路線，涵蓋 PSP/HSP、PYP、QCE/ATAR/VET 與 homestay 支持。</p><a href="/australia-schools/moreton-bay-colleges/">查看資料頁</a></article></div>
        <div class="nsw-school-apply-panel"><div><span>Free application channel</span><strong>發送一封郵件，開始免費初步審核。</strong><p>請提供學生年齡、目前年級、最新成績單或 school report、英語水平、目標入學時間、寄宿/走讀偏好、預算範圍，以及家庭是否考慮 Sydney、Wollongong、regional NSW 或其他澳洲州份。</p></div><a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=Free%20Australia%20K-12%20School%20Application%20Screening">開始免費審核</a></div>
      </div>
    </section>

    <section class="band">
      <div class="section-head compact-head"><div class="eyebrow">Development Record</div><h2>澳洲路線發展檔案與運作支撐。</h2></div>
      <div class="consulting-levels australia-evidence-cards"><article><strong>辦公室與運作</strong><p>地址證明、本地供應商通信、會議記錄、郵箱日誌與澳洲活動 chronology。</p><span>Operational evidence.</span></article><article><strong>教育代理與院校連接</strong><p>Study NSW 培訓郵件、院校更新、申請 portal 記錄、agent-channel 通訊及學生/申請報告。</p><span>Market evidence.</span></article><article><strong>資格路線出版物</strong><p>公開頁面說明 OTHM-to-Australia qualification interpretation、credit/RPL readiness、pathway screening 及職業資格規劃。</p><span>Public capability evidence.</span></article><article><strong>學生案例記錄</strong><p>學生諮詢、院校篩查、課程 shortlists、文件清單、offer-condition tracking 及家庭溝通記錄。</p><span>Service evidence.</span></article><article><strong>專業轉介記錄</strong><p>轉介郵件、顧問資料、服務範圍 notes 及 OTC 協調與 regulated advice 的邊界。</p><span>Compliance evidence.</span></article></div>
      <div style="height:24px"></div><div class="notice advice-signpost"><strong>合規邊界</strong><p>OTC 提供教育協調、雙語文件、市場進入支持及行政整理；不提供澳洲移民、法律、稅務、金融或受監管教育合規建議。相關事項應由合資格專業人士處理。</p></div>
    </section>

    <section class="band compact-band">
      <div class="qualification-report-panel"><div><span>Evidence Report</span><h2>OTHM qualifications and Australia pathway strategy.</h2><p>本報告屬於 OTC Australia readiness evidence chain 的一部分，記錄 OTC 的英國 OTHM 資格基礎如何支持澳洲大學申請、credit/RPL readiness、pathway screening 及職業資格路線規劃，但不聲稱澳洲自動承認。</p></div><div class="qualification-report-actions"><a class="btn btn-dark" href="/zh/reports/othm-australia-expansion/">中文專題</a><a class="btn btn-light" href="/reports/othm-australia-expansion/">English report</a></div></div>
      <div style="height:14px"></div>
      <div class="qualification-report-panel vet-tafe-panel"><div><span>Route Development</span><h2>Australia VET / TAFE pathway coverage.</h2><p>澳洲職業教育路線圖，用於 VET / TAFE 課程篩查、TAFE-to-university progression、文件準備及專業轉介邊界。</p></div><a class="btn btn-dark" href="/australia-vet-tafe-pathways/">打開路線圖</a></div>
    </section>
  `
});

const charlesDarwinUniversityProfile = pageShell({
  title: "Charles Darwin University | OTC Australia Route",
  current: "about",
  description: "OTC bilingual route profile for Charles Darwin University: Northern Territory, Darwin, dual-sector study, CDU TAFE, international pathways and agent enquiry status.",
  path: "/australia-universities/charles-darwin-university/",
  body: `
    <section class="page-hero school-profile-hero herald-school-hero"><div class="band"><div class="eyebrow">University Profile · Northern Territory</div><h1>Charles Darwin University</h1><p>Darwin-centred university, CDU TAFE and regional Australia pathway reference for OTC Australia.</p><div class="actions"><a class="btn btn-primary" href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">Start OTC screening</a><a class="btn btn-secondary" href="/australia-office-presence/#nsw-schools">Back to Australia map</a><a class="btn btn-secondary" href="/zh/australia-universities/charles-darwin-university/">中文頁面</a></div></div></section>

    <section class="band compact-band"><div class="school-review-banner"><strong>Public route note</strong><p>This page is an OTC information and application-screening profile. OTC has lodged a CDU Global enquiry under reference <em>260523-000334</em> and has forwarded it to the relevant regional contacts for guidance on the formal agent / representative process. This page does not state that OTC is already an appointed CDU agent.</p></div></section>

    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Profile</div><h2>A Northern Territory university route with higher education and TAFE in one frame.</h2><p>Charles Darwin University is a multi-campus, dual-sector Australian university with its home and heart in the Northern Territory. For OTC's Australia route, CDU matters because it brings Darwin, Northern Australia, regional study, TAFE packages, international pathways and university progression into one planning conversation.</p></div><div class="school-facts"><article><b>Location</b><strong>Darwin / Northern Territory</strong><span>Core locations include Casuarina and Darwin city, with other NT and Australian campuses and centres.</span></article><article><b>Study type</b><strong>Dual-sector</strong><span>Higher education, research, CDU TAFE, pathways and international packages can be considered together.</span></article><article><b>International routes</b><strong>Undergraduate to PhD</strong><span>International information includes undergraduate, postgraduate, research / PhD, International TAFE packages and CDU International College routes.</span></article><article><b>Provider record</b><strong>CRICOS 00300K</strong><span>CDU also publishes RTO Provider No. 0373 and TEQSA Provider ID PRV12069.</span></article></div></div><aside class="school-profile-side"><span>OTC note</span><strong>Why this belongs in the Australia map</strong><p>CDU gives OTC a credible Northern Territory anchor: a regional Australian study destination, a TAFE / university interface and a direct institutional contact route through CDU Global.</p><a href="https://www.cdu.edu.au/international">Official CDU international page</a><a href="https://www.cdu.edu.au/international/cdu-global/information-agents">CDU agent information</a></aside></div></section>

    <section class="band compact-band"><div class="school-herald-strip"><article><b>Darwin</b><span>Regional Australia context, Northern Territory industries and Asia-Pacific proximity.</span></article><article><b>TAFE + University</b><span>Useful for students comparing vocational, pathway and degree-level progression.</span></article><article><b>CDU Global</b><span>Formal agent appointment requires CDU's own written assessment and agreement process.</span></article></div></section>

    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Student Route</div><h2>Where OTC can help before a formal application.</h2><p>OTC can help families compare whether CDU is a suitable option before a formal application is lodged: academic background, English readiness, intended level, budget, course direction, Darwin / regional preference, TAFE-to-degree interest and document completeness.</p></div><div class="school-service-cards"><article><b>01</b><strong>Course screening</strong><p>Undergraduate, postgraduate, research, TAFE package and pathway-direction screening.</p></article><article><b>02</b><strong>Document preparation</strong><p>Transcript, diploma, English evidence, CV, personal statement and passport checklist.</p></article><article><b>03</b><strong>Regional fit</strong><p>Darwin, Northern Territory and regional Australia comparison for families considering alternatives to Sydney / Melbourne / Brisbane.</p></article><article><b>04</b><strong>Application route</strong><p>Prepare the file so that students can use CDU's official application route or authorised-agent route as appropriate.</p></article></div></div><aside class="university-status-panel"><span>Current OTC status</span><strong>CDU Global enquiry lodged</strong><dl><div><dt>Reference</dt><dd>260523-000334</dd></div><div><dt>Status</dt><dd>Awaiting CDU Global guidance on the formal agent / representative application route.</dd></div><div><dt>Position</dt><dd>Training and route-readiness evidence only; not a formal agency appointment.</dd></div></dl><div class="university-status-actions"><a href="/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf">Study NT certificate</a><a href="/insights/study-nt-agent-training-certificate-otc-australia-meaning/">Certificate note</a></div></aside></div></section>

    <section class="band"><div class="school-decision-table"><div><b>Good fit signals</b><p>Student is open to Darwin / regional Australia, wants a practical course-to-career discussion, may consider TAFE packages or pathway options, and needs careful document organisation.</p></div><div><b>Needs checking</b><p>Course-specific entry requirements, English level, fees, intake availability, visa implications and whether a formal authorised agent route is required.</p></div><div><b>Boundary</b><p>OTC provides education coordination and file preparation only. Visa, migration and regulated advice must be handled by qualified professionals.</p></div></div></section>
  `
});

const charlesDarwinUniversityProfileZh = pageShell({
  title: "Charles Darwin University | OTC 澳洲路線",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "Charles Darwin University 中文資料頁：北領地、Darwin、CDU TAFE、國際學生路線、CDU Global enquiry 與 OTC 初步篩查。",
  path: "/zh/australia-universities/charles-darwin-university/",
  body: `
    <section class="page-hero school-profile-hero herald-school-hero zh-report-hero"><div class="band"><div class="eyebrow">University Profile · Northern Territory</div><h1>Charles Darwin University</h1><p>查爾斯達爾文大學 · OTC 澳洲北領地大學/TAFE/區域學習路線節點</p><div class="actions"><a class="btn btn-primary" href="/university-applications/?country=Australia&state=NT&institution=Charles%20Darwin%20University#otc-apply-form">開始 OTC 初篩</a><a class="btn btn-secondary" href="/zh/australia-office-presence/#nsw-schools">返回澳洲版圖</a><a class="btn btn-secondary" href="/australia-universities/charles-darwin-university/">English page</a></div></div></section>

    <section class="band compact-band"><div class="school-review-banner"><strong>公開路線說明</strong><p>本頁是 OTC 對 Charles Darwin University 的公開資訊整理與申請前初步篩查頁。OTC 已向 CDU Global 提交 enquiry，reference 為 <em>260523-000334</em>，並已轉給相關區域聯絡人，請其指引正式 agent / representative application process。本頁不表示 OTC 已經成為 CDU 正式授權代理。</p></div></section>

    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Profile</div><h2>一條同時連接大學、TAFE 與北領地區域學習的澳洲路線。</h2><p>Charles Darwin University 是以 Northern Territory 為核心的澳洲大學，具備 multi-campus、dual-sector 特點。對 OTC 澳洲路線而言，CDU 的意義在於把 Darwin、北澳、區域型學習、CDU TAFE、國際 pathway 與大學升學放進同一個規劃框架。</p></div><div class="school-facts"><article><b>Location</b><strong>Darwin / Northern Territory</strong><span>核心校區包括 Casuarina 與 Darwin city，另有 NT 及澳洲其他地點的 campus / centre。</span></article><article><b>Study type</b><strong>Dual-sector</strong><span>高等教育、研究型課程、CDU TAFE、pathways 和 international packages 可以一起比較。</span></article><article><b>International routes</b><strong>本科至博士</strong><span>國際頁面涵蓋 undergraduate、postgraduate、research / PhD、International TAFE packages 及 CDU International College。</span></article><article><b>Provider record</b><strong>CRICOS 00300K</strong><span>CDU 同時公開 RTO Provider No. 0373 及 TEQSA Provider ID PRV12069。</span></article></div></div><aside class="school-profile-side"><span>OTC note</span><strong>為什麼要放入澳洲版圖？</strong><p>CDU 讓 OTC 的澳洲版圖不只停留在悉尼、墨爾本和布里斯班，而是增加 Northern Territory、Darwin、TAFE-to-university 和 regional Australia 的路線支點。</p><a href="https://www.cdu.edu.au/international">CDU 國際學生頁</a><a href="https://www.cdu.edu.au/international/cdu-global/information-agents">CDU agent information</a></aside></div></section>

    <section class="band compact-band"><div class="school-herald-strip"><article><b>Darwin</b><span>北領地、區域澳洲、產業連接與 Asia-Pacific proximity。</span></article><article><b>TAFE + University</b><span>適合比較職業教育、pathway 與 degree-level progression 的學生。</span></article><article><b>CDU Global</b><span>正式代理任命必須經 CDU 自身書面審核與協議程序。</span></article></div></section>

    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Student Route</div><h2>OTC 可以在正式申請前幫學生先做什麼。</h2><p>OTC 可先協助家庭判斷 CDU 是否適合：學術背景、英語準備、申請層級、預算、課程方向、是否接受 Darwin / regional Australia、是否考慮 TAFE-to-degree，以及文件是否完整。</p></div><div class="school-service-cards"><article><b>01</b><strong>課程初篩</strong><p>本科、碩士、研究型、TAFE package 及 pathway 方向初步匹配。</p></article><article><b>02</b><strong>文件整理</strong><p>成績單、畢業證、英語證明、CV、個人陳述及護照文件清單。</p></article><article><b>03</b><strong>區域適配</strong><p>Darwin、Northern Territory 與 regional Australia 對比，適合不只看大城市的家庭。</p></article><article><b>04</b><strong>申請路線</strong><p>整理學生檔案，之後按 CDU 官方申請或 authorised-agent route 進行。</p></article></div></div><aside class="university-status-panel"><span>Current OTC status</span><strong>CDU Global enquiry 已提交</strong><dl><div><dt>Reference</dt><dd>260523-000334</dd></div><div><dt>Status</dt><dd>等待 CDU Global 指引正式 agent / representative 申請流程。</dd></div><div><dt>Position</dt><dd>目前屬於培訓與路線準備度記錄，不是正式代理授權。</dd></div></dl><div class="university-status-actions"><a href="/assets/certificates/otc-study-nt-agent-training-certificate-2026.pdf">Study NT 證書</a><a href="/zh/insights/study-nt-agent-training-certificate-otc-australia-meaning/">證書解讀</a></div></aside></div></section>

    <section class="band"><div class="school-decision-table"><div><b>適合信號</b><p>學生接受 Darwin / regional Australia，重視 practical course-to-career discussion，可能考慮 TAFE package 或 pathway option，並需要文件整理。</p></div><div><b>需要核查</b><p>具體課程 entry requirements、英語要求、費用、intake、簽證影響及是否必須走正式授權代理路線。</p></div><div><b>邊界</b><p>OTC 只提供教育協調與文件準備；簽證、移民與受監管專業建議須由合資格專業人士處理。</p></div></div></section>
  `
});

const lindisfarneSchoolReview = pageShell({
  title: "Lindisfarne Anglican Grammar School Review Draft | OTC Study Hub",
  current: "about",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC bilingual review draft for Lindisfarne Anglican Grammar School: school profile, entry process, homestay, fee schedule summary and Chinese family application notes.",
  path: "/australia-schools/lindisfarne-anglican-grammar-school/",
  body: `
    <section class="page-hero school-profile-hero"><div class="band"><div class="eyebrow">School Profile · Review Draft</div><h1>Lindisfarne Anglican Grammar School</h1><p>林迪斯法恩聖公會文法學校 · 面向中國家庭的雙語資料頁審核稿</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=Lindisfarne%20Application%20Screening">Start OTC screening</a><a class="btn btn-secondary" href="/zh/australia-office-presence/#nsw-schools">返回 NSW 學校區</a></div></div></section>

    <section class="band compact-band"><div class="school-review-banner"><strong>Draft for school review</strong><p>This static page is prepared by Overseas Tutorial Centre for Lindisfarne's review before public release and agency-agreement discussion. It summarises information from the 2026 international prospectus and fee schedules supplied to OTC.</p><p>本頁為 OTC 根據學校資料整理的中文家庭閱讀版審核稿。正式發布前，請學校確認名稱、課程、費用、入學流程、住宿及聯絡表述是否準確。</p></div></section>

    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Profile</div><h2>一所位於 Tweed Coast / Northern NSW 的 K-12 聖公會學校。</h2><p>Lindisfarne Anglican Grammar School is a co-educational Preschool to Year 12 Anglican school serving the southern Gold Coast, Tweed Coast and northern New South Wales region. The school operates two campuses and supports international students through structured enrolment, wellbeing and homestay arrangements.</p></div><div class="school-facts"><article><b>Location</b><strong>Tweed Coast, NSW</strong><span>約 15 分鐘至 Gold Coast International Airport，約 90 分鐘至 Brisbane International Airport。</span></article><article><b>Campuses</b><strong>Two campuses</strong><span>Junior School: Sunshine Avenue Campus. Middle and Senior School: Mahers Lane Campus, Terranora.</span></article><article><b>Age range</b><strong>Preschool to Year 12</strong><span>One school, two campuses, three subschools: Junior, Middle and Senior School.</span></article><article><b>CRICOS</b><strong>03803G</strong><span>International student enrolment is handled under the school's international programme process.</span></article></div></div><aside class="school-profile-side"><span>OTC note</span><strong>適合哪些家庭先看？</strong><p>適合正在比較 NSW / Gold Coast 邊界地區中小學、希望有 homestay/welfare 支持、重視 K-12 連續性與大學升學指導的家庭。</p><a href="mailto:office@overseasuk.com?subject=Free%20Lindisfarne%20Family%20Screening">免費家庭初篩</a></aside></div></section>

    ${schoolLocationMap({ title: "Lindisfarne sits on the Tweed Coast / Northern NSW education route.", note: "The map marks the school's Northern NSW / Gold Coast corridor position so Chinese families can understand its airport, coastal and cross-border Queensland connection before detailed application screening.", ctaHref: "mailto:office@overseasuk.com?subject=Lindisfarne%20location%20and%20application%20screening", ctaLabel: "Ask OTC to review this location route", pins: [{ label: "Tweed Coast", note: "Lindisfarne", x: 82, y: 62 }] })}

    <section class="band compact-band"><div class="school-herald-strip"><article><b>2,126</b><span>prospectus-stated students</span></article><article><b>2 campuses</b><span>Junior / Middle-Senior split</span></article><article><b>90%</b><span>graduates' post-school destination was university</span></article><article><b>73%</b><span>students received early university offers</span></article><article><b>36</b><span>activities and co-curricular programmes</span></article></div></section>

    <section class="band"><div class="school-china-panel"><div><span>China Family Lens</span><strong>對中國家庭的真正吸引力：靠近 Gold Coast，但不是純旅遊城市學校。</strong><p>Lindisfarne 的位置對中國家庭很容易理解：15 分鐘到 Gold Coast International Airport，90 分鐘到 Brisbane International Airport，Tweed Coast 兼有海岸生活、澳洲本地家庭社群和相對安靜的學習環境。對低齡學生來說，這種「有機場、有城市、有海岸、但校園生活仍集中」的組合，比單純大城市學校更容易形成穩定作息。</p></div><div class="school-highlight-grid"><article><b>英語沉浸</b><p>學生不是只在語言班學英文，而是在 classroom、homestay、sports、music、service activities 裡持續使用英文。</p></article><article><b>升學準備</b><p>高年級有 careers class、work experience、university sessions、campus tours、scholarship workshops 和個別 pathways counselling。</p></article><article><b>照護結構</b><p>Wellbeing team、health facilities、campus safety、homestay monitoring 對第一次離家的學生尤其重要。</p></article><article><b>短期試讀</b><p>Short-term schedule 適合先體驗澳洲校園、homestay 和英文課堂，再決定是否轉長期入讀。</p></article></div></div></section>

    <section class="spotlight"><div class="band compact-band"><div class="section-head compact-head"><div class="eyebrow">Academic And Student Support</div><h2>學術、升學與國際學生支持。</h2><p>Prospectus materials describe a K-12 learning journey, university guidance in senior years, wellbeing support and international student accommodation arrangements.</p></div><div class="school-service-cards"><article><b>01</b><strong>K-12 連續路線</strong><p>Junior School 覆蓋 Preschool / Kindergarten 至 Year 4；Middle School 為 Years 5-8；Senior School 為 Years 9-12，銜接 NSW curriculum 與高年級升學準備。</p></article><article><b>02</b><strong>University guidance</strong><p>高年級學生可接觸 careers classes、work experience、university sessions、campus tours、scholarship and entry workshops 等升學與職業探索活動。</p></article><article><b>03</b><strong>Wellbeing team</strong><p>學校材料列明 nurses、psychologists、counsellors、chaplains 及 Learning Enrichment Department 支持學生適應、身心健康與學業發展。</p></article><article><b>04</b><strong>Homestay and welfare</strong><p>Year 7-12 國際學生如未與家庭同住，可通過學校 homestay programme 安排住宿和照護；homestay families 由相關 provider 協助篩選與監察。</p></article></div></div></section>

    <section class="band compact-band"><div class="school-fee-panel"><div><div class="eyebrow">2026 Fee Schedule Summary</div><h2>2026 International Student Fee Summary<br><span>2026 年國際學生費用摘要</span></h2><p><span>Fees below are indicative summaries from the school fee schedules supplied for review. Families must rely on Lindisfarne's formal Letter of Offer, Written Agreement and latest official fee schedule before payment.</span><span>以下為根據學校提供的 2026 費用表整理的摘要。正式付款前，家庭應以 Lindisfarne 正式錄取信、書面協議及最新官方費用表為準。</span></p></div><div class="school-fee-table"><table><thead><tr><th>Programme<br><span>項目</span></th><th>Indicative tuition / school fee<br><span>參考學費 / 學校費用</span></th><th>Notes<br><span>說明</span></th></tr></thead><tbody><tr><td><b>Long-term application fees</b><span>長期入讀申請相關費用</span></td><td><b>A$290 application fee; A$1,390 enrolment acceptance fee; A$1,390 refundable student bond</b><span>申請費 A$290；入學接受費 A$1,390；可退還學生押金 A$1,390</span></td><td><b>Non-refundable / refundable status follows the school's policy and offer documents.</b><span>不可退還或可退還性質，以學校政策及錄取文件為準。</span></td></tr><tr><td><b>Long-term annual total, K-Year 2</b><span>長期入讀年度合計，幼兒園至 Year 2</span></td><td><b>Approx. A$29,428</b><span>約 A$29,428</span></td><td><b>Tuition and levies summary from 2026 schedule.</b><span>根據 2026 費用表整理，包含學費及相關 levy 摘要。</span></td></tr><tr><td><b>Long-term annual total, Years 7-8</b><span>長期入讀年度合計，Years 7-8</span></td><td><b>Approx. A$33,650</b><span>約 A$33,650</span></td><td><b>Stage 4 semester total listed as approx. A$16,825.</b><span>Stage 4 每學期合計約 A$16,825。</span></td></tr><tr><td><b>Long-term annual total, Years 11-12</b><span>長期入讀年度合計，Years 11-12</span></td><td><b>Approx. A$36,754</b><span>約 A$36,754</span></td><td><b>NESA HSC Year 12 fee and subject/activity costs may apply.</b><span>可能另有 NESA HSC Year 12 費用及科目 / 活動相關費用。</span></td></tr><tr><td><b>Short-term study</b><span>短期插班 / 短期學習</span></td><td><b>Approx. A$820 per week tuition, Kindergarten-Year 11</b><span>Kindergarten 至 Year 11 學費約 A$820 / 週</span></td><td><b>Tourist visa / one full term schedule. Uniform levy and activity costs may apply.</b><span>適用於旅遊簽證 / 一個完整學期安排；可能另有校服 levy 及活動費。</span></td></tr><tr><td><b>Homestay / full board</b><span>寄宿家庭 / 全食宿</span></td><td><b>A$440 per week for one full term; A$510 per week for less than one term</b><span>完整一學期 A$440 / 週；不足一學期 A$510 / 週</span></td><td><b>Years 7-12 only, subject to school and welfare arrangements.</b><span>僅適用 Years 7-12，並以學校及 welfare 安排為準。</span></td></tr></tbody></table></div><p class="school-fee-note"><span>Other possible costs include OSHC, uniforms, bank transfer fees, excursions, camps, bus routes, airport transfer and late-night collection. All amounts are in Australian dollars and subject to school confirmation.</span><span>其他可能費用包括海外學生健康保險、校服、銀行轉帳費、校外活動、營地、校車、機場接送及深夜接機等。所有金額均為澳元，並以學校最終確認為準。</span></p></div></section>

        <section class="band compact-band"><div class="school-decision-table"><div class="section-head compact-head"><div class="eyebrow">Decision Notes</div><h2>中國家庭選 Lindisfarne 時，OTC 會先看這幾件事。</h2></div><div class="school-route-mini"><article><b>年級窗口</b><p>長期路線可看 K-Year 12；Year 7-12 若涉及 homestay/welfare，要同步評估成熟度和英文適應。</p></article><article><b>英文要求</b><p>Year 7-9 可參考 IELTS 5.0 / AEAS 46-56；Year 10-11 要看更高英文門檻及面試可能性。</p></article><article><b>家庭預算</b><p>除 tuition/levies 外，還要把 OSHC、uniform、homestay、airport transfer、excursions、bus route 等放入總預算。</p></article><article><b>短期或長期</b><p>如果家庭未確定是否長期澳洲路線，可先用 short-term / one-term experience 測試學生適應度。</p></article></div></div></section>

    <section class="band"><div class="school-process"><div class="section-head compact-head"><div class="eyebrow">Application Route</div><h2>申請流程與 OTC 初篩。</h2><p>The prospectus lists an international enrolment pathway from application form to assessment, interview, offer, written agreement, CoE/CAAW, visa process, homestay application, English checkpoint and orientation.</p></div><ol class="school-steps"><li><strong>Family intake</strong><span>OTC 收集學生年齡、當前年級、成績單、英文水平、目標入學時間及住宿偏好。</span></li><li><strong>Document screening</strong><span>對照學校年級、英文要求、住宿與費用安排，形成中文家庭說明。</span></li><li><strong>School confirmation</strong><span>向學校確認 application form、agent process、offer pathway 及正式文件清單。</span></li><li><strong>Formal application</strong><span>以學校正式要求為準提交文件，等待 assessment / interview / outcome。</span></li></ol><div class="notice advice-signpost"><strong>Professional boundary</strong><p>OTC can support education-route explanation, family communication and document organisation. Visa, legal, migration, financial and regulated advice should be handled by qualified professionals where required.</p></div></div></section>

    <section class="band compact-band"><div class="school-review-contact"><div><span>For Lindisfarne review</span><strong>Please confirm the page wording and agency form pathway.</strong><p>OTC would be grateful for confirmation of the public wording, current fee references, application form pathway and any agent agreement / representative appointment documents that should be completed before formal promotion.</p></div><a class="btn btn-dark" href="mailto:kamsandy@yahoo.com?cc=office@overseasuk.com&subject=Lindisfarne%20OTC%20Chinese%20Profile%20Review%20and%20Agency%20Form">Email Sandy for review</a></div></section>
  `
});

const rockhamptonGrammarReview = pageShell({
  title: "The Rockhampton Grammar School Review Draft | OTC Study Hub",
  current: "about",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC Chinese review draft for The Rockhampton Grammar School: Central Queensland boarding, academic pathway, campus life and application route.",
  path: "/australia-schools/rockhampton-grammar-school/",
  body: `
    <section class="page-hero school-profile-hero herald-school-hero"><div class="band"><div class="eyebrow">Queensland Boarding School · Review Draft</div><h1>The Rockhampton Grammar School</h1><p>Central Queensland 寄宿強校 · Grow in Character and Scholarship</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=RGS%20Family%20Screening">Start OTC screening</a><a class="btn btn-secondary" href="/zh/australia-office-presence/#nsw-schools">返回澳洲學校區</a></div></div></section>
    <section class="band compact-band"><div class="school-review-banner"><strong>Draft for school review</strong><p>本頁根據 The Rockhampton Grammar School international prospectus 整理，作為中文家庭閱讀版審核稿。正式公開推廣前，需由學校/代表確認最新課程、CRICOS、住宿、費用及申請要求。</p></div></section>
    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Why It Matters</div><h2>不是大城市路線，而是 Central Queensland 的完整寄宿學校生活。</h2><p>RGS 建校於 1881 年，是 Queensland 歷史悠久的私立男女混合學校之一。Prospectus 強調其「character and scholarship」教育理念、Central Queensland 地區生活、boarding culture、農業/戶外教育、體育藝術活動與大學升學準備。</p></div><div class="school-facts"><article><b>Founded</b><strong>1881</strong><span>One of Australia's long-established grammar schools.</span></article><article><b>Scale</b><strong>1,400+ students</strong><span>Prospectus records Prep-Year 12 and a large secondary cohort.</span></article><article><b>Boarding</b><strong>Queensland boarding route</strong><span>Years 7-12 full accommodation with separate boys/girls houses.</span></article><article><b>CRICOS</b><strong>00507F</strong><span>Secondary Years 7-10 and Years 11-12 courses listed in prospectus.</span></article></div></div><aside class="school-profile-side"><span>OTC reading</span><strong>適合誰？</strong><p>適合希望避開大城市、重視寄宿管理、英語沉浸、戶外教育、體育/農業/藝術資源，以及 Queensland 升學路線的家庭。</p><a href="mailto:office@overseasuk.com?subject=Free%20RGS%20Family%20Screening">免費家庭初篩</a></aside></div></section>
    ${schoolLocationMap({ title: "RGS anchors the Central Queensland boarding-school route.", note: "The map places Rockhampton in relation to Brisbane and the Queensland coast, helping families see why this is a regional boarding route rather than a metropolitan day-school option.", ctaHref: "mailto:office@overseasuk.com?subject=RGS%20boarding%20route%20screening", ctaLabel: "Ask OTC to review this boarding route", pins: [{ label: "Rockhampton", note: "RGS", x: 78, y: 45 }] })}

    <section class="band compact-band"><div class="school-herald-strip"><article><b>1881</b><span>established grammar school</span></article><article><b>1,400+</b><span>students across school</span></article><article><b>350</b><span>approx. boarders</span></article><article><b>36</b><span>sports and activities</span></article><article><b>7.5ha</b><span>main campus and gardens</span></article></div></section>

    <section class="band"><div class="school-china-panel"><div><span>China Family Lens</span><strong>RGS 的核心不是「城市便利」，而是寄宿制、英語環境和澳洲本地社群。</strong><p>對中國學生來說，Rockhampton 的價值在於遠離大城市高密度華人社交圈，學生更容易進入澳洲本地同齡人生活。Prospectus 反覆強調 RGS boarders、local community、low foreign student concentration、Australian culture 和 English language ability，這正是很多中學生真正需要的語言與性格成長環境。</p></div><div class="school-highlight-grid"><article><b>寄宿管理</b><p>Years 7-12 可住宿，live-in supervisors 24 小時在場，男生和女生分樓居住，Year 12 可安排更適合備考的個人空間。</p></article><article><b>大學路線</b><p>Prospectus 提及畢業生曾進入 ANU、UQ、Sydney、Melbourne、UNSW 等澳洲核心大學。</p></article><article><b>戶外澳洲</b><p>Ritamada outdoor education、rowing、agriculture、Capricorn Coast、Great Barrier Reef access 讓學生真正體驗澳洲地域教育。</p></article><article><b>性格教育</b><p>學校 motto「Grow in Character and Scholarship」與中國家庭重視的責任、尊重、勤勉、服務和品格教育有天然銜接。</p></article></div></div></section>

    <section class="spotlight"><div class="band compact-band"><div class="section-head compact-head"><div class="eyebrow">Boarding Life</div><h2>寄宿、校園與週末生活，是 RGS 的核心看點。</h2></div><div class="school-service-cards"><article><b>01</b><strong>Large boarding community</strong><p>Prospectus describes RGS as Queensland's largest boarding school, with around 350 boarders and boarding forming part of school life since 1881.</p></article><article><b>02</b><strong>24-hour support</strong><p>Boarding students live in air-conditioned accommodation with live-in supervisors; boys and girls live in separate buildings.</p></article><article><b>03</b><strong>Outdoor education</strong><p>Ritamada outdoor education campus, rowing, agriculture, beach/coast access and challenge-by-choice activities create a distinctive Australian experience.</p></article><article><b>04</b><strong>Academic pathway</strong><p>Prospectus notes strong Central Queensland results and pathways to competitive Australian universities, including Group of Eight destinations.</p></article></div></div></section>
        <section class="band compact-band"><div class="school-decision-table"><div class="section-head compact-head"><div class="eyebrow">Decision Notes</div><h2>中國家庭選 RGS 時，重點不是排名表，而是孩子是否適合寄宿和地域型教育。</h2></div><div class="school-route-mini"><article><b>寄宿成熟度</b><p>RGS 是完整 boarding culture。OTC 會先判斷學生是否能接受規律作息、集體生活和英文溝通。</p></article><article><b>英文沉浸</b><p>Prospectus 強調 local students 和較低海外學生比例，這對想快速建立英文能力的學生是優勢，也需要心理準備。</p></article><article><b>興趣匹配</b><p>農業、rowing、sport、drama、dance、outdoor education、community service 都是頁面重點，適合願意參與校園生活的學生。</p></article><article><b>入學時點</b><p>海外學生不能直接進 Year 12，通常需要不晚於 Year 11 進入；具體以學校和簽證規則確認。</p></article></div></div></section>

    <section class="band"><div class="school-process"><div class="section-head compact-head"><div class="eyebrow">Application Route</div><h2>RGS 申請路線摘要。</h2><p>Prospectus lists a six-step route: read international information, submit enrolment form, school checks application and academic evidence, possible online interview, acceptance and fee payment, visa documents, arrival/familiarisation.</p></div><ol class="school-steps"><li><strong>Family profile</strong><span>學生年級、英文程度、寄宿意願、體育/藝術/農業/學術興趣。</span></li><li><strong>Document review</strong><span>近兩年成績單、護照、英文能力與入學時間初步審核。</span></li><li><strong>Boarding fit</strong><span>核對 Years 7-12 boarding readiness、家庭期望與學校安排。</span></li><li><strong>School confirmation</strong><span>由學校確認最新申請表、費用、course code、offer 及簽證文件流程。</span></li></ol></div></section>
  `
});

const moretonBayCollegesReview = pageShell({
  title: "Moreton Bay Colleges Review Draft | OTC Study Hub",
  current: "about",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC Chinese review draft for Moreton Bay College and Moreton Bay Boys' College: Brisbane school route, PSP/HSP, PYP, homestay and application pathway.",
  path: "/australia-schools/moreton-bay-colleges/",
  body: `
    <section class="page-hero school-profile-hero herald-school-hero"><div class="band"><div class="eyebrow">Brisbane Schools · Review Draft</div><h1>The Moreton Bay Colleges</h1><p>Moreton Bay College · Moreton Bay Boys' College · Brisbane 東區男校/女校路線</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=Moreton%20Bay%20Colleges%20Screening">Start OTC screening</a><a class="btn btn-secondary" href="/zh/australia-office-presence/#nsw-schools">返回澳洲學校區</a></div></div></section>
    <section class="band compact-band"><div class="school-review-banner"><strong>Draft for school review</strong><p>本頁根據 Moreton Bay Colleges international prospectus 整理，作為中文家庭閱讀版審核稿。正式公開推廣前，需由學校/代表確認課程代碼、住宿安排、入學要求、費用與申請流程。</p></div></section>
    <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">Brisbane Route</div><h2>一組 Brisbane 東區的男校/女校學校組合。</h2><p>The Moreton Bay Colleges comprise Moreton Bay College and Moreton Bay Boys' College. Prospectus materials describe two campuses with premium facilities, a natural environment, international preparation courses, Primary Years Programme, junior/senior secondary studies and school-managed accommodation.</p></div><div class="school-facts"><article><b>Location</b><strong>Brisbane</strong><span>Less than 15km from Brisbane CBD, close to Moreton Bay and the eastern suburbs.</span></article><article><b>Schools</b><strong>MBC / MBBC</strong><span>Moreton Bay College and Moreton Bay Boys' College as a coordinated college route.</span></article><article><b>CRICOS</b><strong>03771K / 03772J</strong><span>Prospectus lists separate CRICOS records for MBC and MBBC.</span></article><article><b>Accommodation</b><strong>School-managed</strong><span>Homestay support, 24-hour support team, meals and transport noted in materials.</span></article></div></div><aside class="school-profile-side"><span>OTC reading</span><strong>適合誰？</strong><p>適合希望選擇 Brisbane 城市生活、男校/女校環境、PYP 小學路線、HSP/PSP 過渡課程和 homestay 管理支持的家庭。</p><a href="mailto:office@overseasuk.com?subject=Free%20Moreton%20Bay%20Colleges%20Screening">免費家庭初篩</a></aside></div></section>
    ${schoolLocationMap({ title: "Moreton Bay Colleges sit in Brisbane's eastern school corridor.", note: "The map shows the Brisbane / Moreton Bay location so families can connect the boys' and girls' college route with city access, homestay support and Queensland senior pathways.", ctaHref: "mailto:office@overseasuk.com?subject=Moreton%20Bay%20Colleges%20location%20screening", ctaLabel: "Ask OTC to review this Brisbane route", pins: [{ label: "Brisbane", note: "MBC / MBBC", x: 81, y: 58 }] })}

    <section class="band compact-band"><div class="school-herald-strip"><article><b>1901</b><span>MBC founded</span></article><article><b>15km</b><span>from Brisbane CBD</span></article><article><b>PSP/HSP</b><span>20-week preparation courses</span></article><article><b>PYP</b><span>IB Primary Years Programme</span></article><article><b>2 schools</b><span>girls' and boys' college route</span></article></div></section>

    <section class="band"><div class="school-china-panel"><div><span>China Family Lens</span><strong>Moreton Bay 的優勢，是「Brisbane 城市資源 + 男校/女校分流 + 過渡課程」。</strong><p>對中國家庭來說，Moreton Bay Colleges 比較容易放入 Brisbane 升學版圖：城市安全感、距 CBD 較近、可選女校或男校、PSP/HSP 幫學生先適應澳洲學校，再進入 mainstream learning。對英文仍在過渡期、但家庭希望保留 Brisbane 大學與城市資源的學生，這條路線非常清晰。</p></div><div class="school-highlight-grid"><article><b>準備課程</b><p>20-week PSP/HSP 用於銜接 primary 或 high school，強調英文、study skills、critical thinking 和部分 mainstream integration。</p></article><article><b>小學 PYP</b><p>Primary School Prep-Year 6 採 IB PYP 理念，重視 inquiry、whole-child development 和 international-mindedness。</p></article><article><b>高年級出口</b><p>Years 11-12 可銜接 QCE、ATAR 或 VET qualification，對未來大學與職業方向都保留彈性。</p></article><article><b>住宿支持</b><p>Prospectus 描述 school-managed homestay、24-hour support、meals、transport and security checking。</p></article></div></div></section>

    <section class="spotlight"><div class="band compact-band"><div class="section-head compact-head"><div class="eyebrow">Programme Map</div><h2>從準備課程到 QCE / ATAR / VET 的 Brisbane 路線。</h2></div><div class="school-service-cards"><article><b>01</b><strong>PSP / HSP</strong><p>Prospectus lists 20-week Primary School Preparation and High School Preparation courses for international students transitioning into Australian school.</p></article><article><b>02</b><strong>Primary PYP</strong><p>Primary School Prep-Year 6 follows International Baccalaureate Primary Years Programme principles, focusing on whole-child development.</p></article><article><b>03</b><strong>Secondary</strong><p>Years 7-10 follow Australian Curriculum; Years 11-12 can lead to QCE, ATAR and/or VET qualification pathways.</p></article><article><b>04</b><strong>Short-term routes</strong><p>Prospectus includes study abroad, study tours, buddy programme and group short-term experiences, with January/April/July/October entry windows for individual study abroad.</p></article></div></div></section>
        <section class="band compact-band"><div class="school-decision-table"><div class="section-head compact-head"><div class="eyebrow">Decision Notes</div><h2>Moreton Bay 適合希望「先過渡、再主流」的學生。</h2></div><div class="school-route-mini"><article><b>男校/女校選擇</b><p>家庭需要先判斷學生更適合 girls' college、boys' college 或 siblings 分校就讀安排。</p></article><article><b>PSP/HSP 判斷</b><p>英文、學術習慣和面試表現會影響 direct entry 或 preparation course route。</p></article><article><b>Brisbane 城市資源</b><p>距 CBD 近、鄰近 Moreton Bay，並可連接 UQ、QUT、Griffith、ACU、CQU 等城市高教資源。</p></article><article><b>短期體驗</b><p>Study abroad、study tours、buddy programme 適合先看校園和英文適應，再決定長期入讀。</p></article></div></div></section>

    <section class="band"><div class="school-process"><div class="section-head compact-head"><div class="eyebrow">Application Route</div><h2>Moreton Bay Colleges 申請路線摘要。</h2><p>Prospectus lists a five-step route: apply with passport, academic records and English evidence; eligibility/interview; offer and written agreement; visa with CoE/CAAW; pre-arrival including homestay, airport transfer and uniform fitting.</p></div><ol class="school-steps"><li><strong>Student intake</strong><span>確認男校/女校、年級、英文程度、PSP/HSP 是否需要。</span></li><li><strong>Documents</strong><span>護照、近兩年成績單、英文能力證明、subject selection 如適用。</span></li><li><strong>Interview route</strong><span>由學校安排 Principal interview，確認 academic/co-curricular interests。</span></li><li><strong>Offer and CoE</strong><span>以學校 Provisional Letter of Offer、Written Agreement、CoE/CAAW 為準。</span></li></ol></div></section>
  `
});

function schoolLocationMap(map) {
  const pins = map.pins.map((pin) => `
    <span class="school-map-pin" style="--x:${pin.x}%;--y:${pin.y}%;">
      <i></i><b>${pin.label}</b><small>${pin.note}</small>
    </span>
  `).join("");

  return `
    <section class="band compact-band">
      <div class="school-location-map">
        <div class="school-location-copy">
          <span>Australia Location Map</span>
          <strong>${map.title}</strong>
          <p>${map.note}</p>
          <a href="${map.ctaHref}">${map.ctaLabel}</a>
        </div>
        <div class="school-map-board" aria-label="${map.title}">
          <img src="/assets/australia-academic-map-soft.svg?v=school-location-20260523" alt="Australia education location map">
          ${pins}
        </div>
      </div>
    </section>
  `;
}

function studyNswSchoolReviewPage(school) {
  return pageShell({
    title: `${school.name} Review Draft | OTC Study Hub`,
    current: "about",
    lang: "zh-Hant",
    locale: "zh",
    description: school.description,
    path: `/australia-schools/${school.slug}/`,
    body: `
      <section class="page-hero school-profile-hero herald-school-hero nsw-review-hero"><div class="band"><div class="eyebrow">Study NSW Briefing · Review Draft</div><h1>${school.name}</h1><p>${school.subtitle}</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(`Free school screening - ${school.name}`)}">Start OTC screening</a><a class="btn btn-secondary" href="/zh/australia-office-presence/#nsw-schools">返回澳洲學校區</a></div></div></section>

      <section class="band compact-band"><div class="school-review-banner"><strong>Draft for briefing review</strong><p>This page is prepared by Overseas Tutorial Centre from Study NSW / Greater China training email materials and public-facing school briefing notes. It is a school-profile review draft for Chinese families, not a statement of formal appointment or confirmed agency status.</p><p>本頁根據 Study NSW / Greater China 培訓郵件與公開學校介紹線索整理，供學校、項目方或代表審核；正式推廣前需確認課程、費用、申請、住宿及聯絡表述。</p></div></section>

      <section class="band"><div class="school-profile-grid"><div class="school-profile-main"><div class="section-head compact-head"><div class="eyebrow">${school.eyebrow}</div><h2>${school.headline}</h2><p>${school.intro}</p></div><div class="school-facts">${school.facts.map((fact) => `<article><b>${fact[0]}</b><strong>${fact[1]}</strong><span>${fact[2]}</span></article>`).join("")}</div></div><aside class="school-profile-side"><span>OTC reading</span><strong>${school.fitTitle}</strong><p>${school.fit}</p><a href="mailto:office@overseasuk.com?subject=${encodeURIComponent(`Free ${school.name} screening`)}">免費家庭初篩</a></aside></div></section>

      ${schoolLocationMap(school.locationMap)}

      <section class="band compact-band"><div class="school-herald-strip">${school.stats.map((stat) => `<article><b>${stat[0]}</b><span>${stat[1]}</span></article>`).join("")}</div></section>

      <section class="band"><div class="school-china-panel"><div><span>China Family Lens</span><strong>${school.chinaTitle}</strong><p>${school.chinaBody}</p></div><div class="school-highlight-grid">${school.highlights.map((item) => `<article><b>${item[0]}</b><p>${item[1]}</p></article>`).join("")}</div></div></section>

      <section class="spotlight"><div class="band compact-band"><div class="section-head compact-head"><div class="eyebrow">${school.programmeEyebrow}</div><h2>${school.programmeTitle}</h2><p>${school.programmeIntro}</p></div><div class="school-service-cards">${school.programmes.map((item, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join("")}</div></div></section>

      <section class="band compact-band"><div class="school-decision-table"><div class="section-head compact-head"><div class="eyebrow">Decision Notes</div><h2>${school.decisionTitle}</h2></div><div class="school-route-mini">${school.decisions.map((item) => `<article><b>${item[0]}</b><p>${item[1]}</p></article>`).join("")}</div></div></section>

      <section class="band"><div class="school-process"><div class="section-head compact-head"><div class="eyebrow">Application Route</div><h2>${school.routeTitle}</h2><p>${school.routeIntro}</p></div><ol class="school-steps">${school.steps.map((step) => `<li><strong>${step[0]}</strong><span>${step[1]}</span></li>`).join("")}</ol><div class="notice advice-signpost"><strong>Review boundary</strong><p>OTC can support education-route explanation, family communication and document organisation. Final admission, offer, fees, CRICOS details, welfare arrangements and agency status must be confirmed by the school or relevant programme owner.</p></div></div></section>

      <section class="band compact-band"><div class="school-review-contact"><div><span>For school / programme review</span><strong>Please confirm public wording and application pathway.</strong><p>OTC would be grateful for confirmation of the public wording, current entry requirements, fee references, application documents, accommodation/welfare notes and the appropriate representative or agency onboarding route.</p></div><a class="btn btn-dark" href="mailto:${school.reviewEmail}?cc=office@overseasuk.com&subject=${encodeURIComponent(`${school.name} OTC Chinese Profile Review`)}">Email for review</a></div></section>
    `
  });
}

const plcPathwaysReview = studyNswSchoolReviewPage({
  slug: "plc-pathways",
  name: "PLC Pathways",
  subtitle: "博思威中小學留學銜接項目 · NSW private-school pathway route",
  description: "OTC Chinese review draft for PLC Pathways: Study NSW briefing route, NSW private school pathway planning and Chinese family screening notes.",
  eyebrow: "Pathway Route",
  headline: "一條面向 NSW 私立中小學的銜接型路線。",
  intro: "Study NSW training emails describe PLC Pathways as a school-pathway briefing for education agents, with programme sharing by the project team and follow-up presentation materials for consultation work. OTC treats it as a pathway-mapping item: useful for families who need a structured bridge into NSW private schools before selecting a final school.",
  facts: [
    ["Briefing source", "Study NSW training", "2025 Study NSW Greater China Education Agent Online Training series."],
    ["Route type", "K-12 pathway", "Positioned as a school-pathway route rather than a single school profile."],
    ["Contact route", "Programme team review required", "Latest school list and application pathway should be confirmed with the programme owner."],
    ["OTC use", "Family pre-screening", "Student age, grade, English level and school-type preference can be organised before referral."]
  ],
  locationMap: {
    title: "PLC Pathways is mapped as a NSW school-pathway network rather than one campus.",
    note: "The location marker sits across the Sydney / NSW route because the item is a pathway and partner-school review layer. Confirmed school lists and application channels stay with the programme owner before public promotion.",
    ctaHref: "mailto:office@overseasuk.com?subject=PLC%20Pathways%20NSW%20route%20screening",
    ctaLabel: "Ask OTC to review this NSW route",
    pins: [{ label: "NSW route", note: "PLC Pathways", x: 77, y: 72 }]
  },
  fitTitle: "適合哪些家庭先看？",
  fit: "適合還未鎖定單一學校、希望先比較 NSW 私校入口、銜接安排、地點與住宿/照護可能性的家庭。",
  stats: [["2025", "Study NSW training record"], ["K-12", "school pathway route"], ["NSW", "private-school selection layer"], ["Agent", "consultation support materials"], ["Review", "school list to confirm"]],
  chinaTitle: "PLC Pathways 對中國家庭的價值，是先把「選哪所學校」變成可管理的路線判斷。",
  chinaBody: "很多中國家庭一開始只知道想去澳洲中小學，但還沒有能力判斷城市、年級、英文門檻、住宿、校風與升學出口。Pathway route 的作用，是把家庭背景先翻譯成可討論的 school shortlist，而不是一開始就被某一所學校鎖死。",
  highlights: [
    ["先做路線", "先按年級、英文、預算、寄宿/走讀、城市偏好建立 NSW school route，再進入具體學校。"],
    ["降低信息差", "把 agent training、school list、application notes 轉成中文家庭能讀懂的比較資料。"],
    ["銜接思維", "適合需要過渡、英文準備、適應澳洲校園文化或分階段進入私校的學生。"],
    ["審核邊界", "公開頁僅描述項目線索與諮詢用途，具體院校名單、條款與申請流程需由項目方確認。"]
  ],
  programmeEyebrow: "Pathway Screening",
  programmeTitle: "OTC 先把家庭需求整理成一份可審核的 NSW 學校路線圖。",
  programmeIntro: "這類路線最適合做成 intake checklist、school-fit memo、document pack 和 family briefing note。",
  programmes: [
    ["Family intake", "收集學生年齡、年級、成績、英文、城市偏好、住宿偏好和家庭預算。"],
    ["School-type mapping", "比較 day school、boarding-adjacent support、Anglican/independent school、regional/city options。"],
    ["Document preparation", "整理 passport、school reports、English evidence、family questions 和 application timeline。"],
    ["Programme confirmation", "向項目方確認最新學校名單、申請入口、代表安排與公開用語。"]
  ],
  decisionTitle: "PLC Pathways 適合尚未完成選校決策的家庭。",
  decisions: [
    ["是否已鎖校", "如果家庭已明確指定某一學校，可直接做 school-specific application；如果未鎖定，pathway route 更有用。"],
    ["英文過渡", "英文仍不穩定的學生，需要先判斷是否要銜接或準備階段。"],
    ["城市與照護", "NSW 不只 Sydney，一些 regional 或 school-community route 可能更適合低齡學生。"],
    ["資料審核", "公開頁要避免列出未確認的合作學校清單，先保持項目層面的審核稿。"]
  ],
  routeTitle: "PLC Pathways 初步申請 / 諮詢路線。",
  routeIntro: "OTC 可先完成家庭資料整理，再向項目方確認最新 school list、entry route、application form and representative process。",
  steps: [
    ["Initial family profile", "建立學生年級、英文、成績、目標入學時間與家庭偏好。"],
    ["Pathway suitability note", "判斷是否適合先走 pathway screening，還是直接進入具體學校申請。"],
    ["Programme confirmation", "向項目方確認最新學校名單、申請流程、材料要求與公開表述。"],
    ["School shortlist", "形成 3-5 所學校或路線方向，供家庭與項目方進一步確認。"]
  ],
  reviewEmail: "rayd@pathways.education"
});

const macarthurAnglicanReview = studyNswSchoolReviewPage({
  slug: "macarthur-anglican-school",
  name: "Macarthur Anglican School",
  subtitle: "麥卡瑟聖公會學校 · South-west Sydney independent co-educational school",
  description: "OTC Chinese review draft for Macarthur Anglican School based on Study NSW training email notes: south-west Sydney, large campus and China family application screening.",
  eyebrow: "South-west Sydney",
  headline: "悉尼西南部的大校園男女混合私校路線。",
  intro: "Study NSW training emails introduce Macarthur Anglican School as a leading independent co-educational school in south-west Sydney, with a large 84-acre campus and a learning environment built around long-term student development. OTC is preparing this review draft to support Chinese family screening before school-side confirmation.",
  facts: [
    ["Location", "South-west Sydney", "Positioned in Study NSW materials as a key independent school option in the area."],
    ["Campus", "84 acres", "Large-campus environment repeatedly highlighted in the briefing emails."],
    ["School type", "Independent co-educational", "Suitable for families seeking a mixed school environment."],
    ["Briefing contact", "Nadine James noted", "Study NSW email references the international student admissions representative in the session."]
  ],
  locationMap: {
    title: "Macarthur is marked on the south-west Sydney school route.",
    note: "This location map helps families understand that the school keeps a Greater Sydney connection while offering a larger campus environment away from the CBD.",
    ctaHref: "mailto:office@overseasuk.com?subject=Macarthur%20Anglican%20location%20screening",
    ctaLabel: "Ask OTC to review this Sydney route",
    pins: [{ label: "South-west Sydney", note: "Macarthur", x: 78, y: 76 }]
  },
  fitTitle: "適合哪些家庭先看？",
  fit: "適合希望留在 Greater Sydney 生活圈、又不想只看市中心高密度學校的家庭；尤其適合重視大校園、學校社群和長期學習節奏的學生。",
  stats: [["84 acres", "large campus"], ["Sydney", "south-west location"], ["Co-ed", "boys and girls"], ["K-12", "school-route screening"], ["Review", "school confirmation needed"]],
  chinaTitle: "Macarthur 的中國家庭吸引力，是悉尼生活圈與大校園教育之間的平衡。",
  chinaBody: "對中國家庭來說，悉尼代表大學、交通、親友與城市資源；但孩子真正每天生活的是校園。Macarthur 這類西南悉尼大校園學校，提供的是更完整的 school community，而不是只把學生放進城市中心的補習與通勤節奏。",
  highlights: [
    ["悉尼連接", "保留 Greater Sydney 城市資源、家庭探訪便利與未來大學路線想像。"],
    ["大校園", "84-acre campus 對低齡和中學生很重要，意味著活動、運動、空間與校園歸屬感。"],
    ["男女混合", "co-educational setting 適合希望孩子在自然社交環境中學習的家庭。"],
    ["長期路線", "適合從中學階段逐步建立英文、學術習慣、活動記錄與澳洲升學準備。"]
  ],
  programmeEyebrow: "School Fit",
  programmeTitle: "OTC 將 Macarthur 放在 Greater Sydney K-12 路線中比較。",
  programmeIntro: "不是只看學費和排名，而是看孩子是否適合西南悉尼、大校園、男女混合和長期澳洲學習生活。",
  programmes: [
    ["Location fit", "家庭是否需要 Sydney 親友、交通、城市資源及後續大學連接。"],
    ["Campus fit", "學生是否適合更大校園、戶外活動、運動和 school-community life。"],
    ["Academic readiness", "用近兩年成績單、英文能力和面試準備判斷入學風險。"],
    ["School confirmation", "正式申請前向學校確認最新年級空位、費用、住宿/照護與申請材料。"]
  ],
  decisionTitle: "Macarthur 適合希望孩子在悉尼生活圈內建立長期學校歸屬感的家庭。",
  decisions: [
    ["城市邏輯", "如果家庭希望一定在 Sydney 附近，Macarthur 可列入西南區比較名單。"],
    ["校園性格", "大校園不等於一定適合所有孩子，需看學生是否願意參與活動和校園社群。"],
    ["住宿安排", "如涉及低齡、監護、homestay 或親屬照護，需要先核實學校可接受方式。"],
    ["審核狀態", "目前為 Study NSW briefing-based draft，需學校確認後才作更正式的公開資料。"]
  ],
  routeTitle: "Macarthur 初步申請 / 審核路線。",
  routeIntro: "OTC 先整理家庭與學生資料，再向學校確認 current availability、application pack、fee schedule、welfare/accommodation notes and representative process。",
  steps: [
    ["Family intake", "確認學生年齡、目前年級、成績單、英文水平與目標入學時間。"],
    ["Sydney fit note", "判斷是否適合 south-west Sydney school route，而不是 CBD 或 regional NSW route。"],
    ["Document checklist", "準備 school report、passport、English evidence、personal notes and family questions。"],
    ["School-side review", "向學校確認最新申請要求與公開頁措辭。"]
  ],
  reviewEmail: "international@macarthur.nsw.edu.au"
});

const illawarraGrammarReview = studyNswSchoolReviewPage({
  slug: "the-illawarra-grammar-school",
  name: "The Illawarra Grammar School",
  subtitle: "伊拉瓦拉文法學校 · Wollongong independent co-educational route",
  description: "OTC Chinese review draft for The Illawarra Grammar School based on Study NSW 2026 briefing invitation: Wollongong school route and China family screening.",
  eyebrow: "Wollongong Route",
  headline: "一所位於 Wollongong 的新州沿海城市學校路線。",
  intro: "Study NSW's 2026 briefing invitation introduces The Illawarra Grammar School as the fifth session in the NSW quality schools online training series. The email positions the session for agents to understand school strengths, admission conditions, student support and family-facing consultation points.",
  facts: [
    ["Briefing date", "10 June 2026", "Study NSW invitation lists the dedicated online training session."],
    ["Location", "Wollongong", "A coastal NSW city south of Sydney, useful for families comparing Sydney and regional options."],
    ["School type", "Independent co-educational", "Presented as a school profile item in the Study NSW series."],
    ["Status", "Review draft", "Detailed school data should be completed after the training materials or school confirmation are received."]
  ],
  locationMap: {
    title: "Illawarra is marked on the Wollongong coastal NSW school route.",
    note: "The map shows the route south of Sydney, useful for families comparing Sydney, coastal NSW and regional schooling before the full school briefing materials are reviewed.",
    ctaHref: "mailto:office@overseasuk.com?subject=Illawarra%20Grammar%20location%20screening",
    ctaLabel: "Ask OTC to review this Wollongong route",
    pins: [{ label: "Wollongong", note: "TIGS", x: 79, y: 79 }]
  },
  fitTitle: "適合哪些家庭先看？",
  fit: "適合想看 Sydney 以外新州沿海城市、希望生活節奏更穩定、又希望保持 NSW 大學和城市連接想像的家庭。",
  stats: [["2026", "Study NSW series"], ["10 Jun", "scheduled briefing"], ["Wollongong", "coastal NSW route"], ["Co-ed", "school profile"], ["Draft", "awaiting full materials"]],
  chinaTitle: "Illawarra 的初步價值，是把家庭視野從 Sydney 擴展到 Wollongong。",
  chinaBody: "很多中國家庭第一反應是 Sydney，但不是所有孩子都適合大城市強刺激環境。Wollongong 類型的沿海城市路線，可能更適合需要安靜學習節奏、英語環境、自然生活與 NSW 升學連接的學生。",
  highlights: [
    ["沿海城市", "Wollongong 提供比大城市更清晰的生活節奏，同時仍保持 NSW 區域連接。"],
    ["低壓比較", "適合與 Sydney private schools、regional boarding routes 一起比較，而不是單獨看排名。"],
    ["待補材料", "正式頁面應在 6 月 10 日 session 後補入課程、入學要求、費用和支持體系。"],
    ["家庭諮詢", "現階段可先收集中國家庭問題，帶著問題參加或跟進 school briefing。"]
  ],
  programmeEyebrow: "Briefing Preparation",
  programmeTitle: "這一頁先作為 6 月座談會前後的資料承接頁。",
  programmeIntro: "先建立審核版框架，等正式 materials 到位後補齊 school profile、fees、application steps 和 contact route。",
  programmes: [
    ["Pre-briefing questions", "整理中國家庭最需要問的年級、英文、住宿、費用、升學和照護問題。"],
    ["School profile update", "座談會後補入正式 school strengths、admissions、student support and contact details。"],
    ["Route comparison", "與 Sydney、Tweed Coast、Central Queensland 等路線做橫向比較。"],
    ["Review email", "把頁面發給學校或 Study NSW contact 確認措辭與申請流程。"]
  ],
  decisionTitle: "Illawarra 目前最適合先進入候選名單，而不是立即下定論。",
  decisions: [
    ["等待材料", "6 月 10 日 briefing 後應補齊最新資料，再正式對外推廣。"],
    ["城市比較", "適合與 Sydney 近郊、Wollongong、regional NSW 作生活方式比較。"],
    ["學生性格", "如果學生需要更安靜、更自然的生活節奏，Wollongong route 值得看。"],
    ["審核措辭", "頁面必須保持 briefing draft，不聲稱已代表學校招生。"]
  ],
  routeTitle: "Illawarra 初步資料收集路線。",
  routeIntro: "OTC 先建立 family question bank 和 school profile scaffold，待 Study NSW session 後補入正式資料並發給學校/代表審核。",
  steps: [
    ["Family questions", "收集家庭對 Wollongong、年級、費用、英文和照護的問題。"],
    ["Briefing attendance", "跟進 2026 年 6 月 10 日 Study NSW online training。"],
    ["Profile completion", "補入 school strengths、entry requirements、support and fee references。"],
    ["School confirmation", "將頁面發給學校或 Study NSW contact 進行公開表述確認。"]
  ],
  reviewEmail: "enrolments@tigs.nsw.edu.au"
});

const australiaVetTafePathways = pageShell({
  title: "Australia VET / TAFE Pathways | OTC Study Hub",
  current: "about",
  description: "OTC's Australia VET and TAFE pathway coverage for vocational course screening, TAFE-to-university progression, document readiness and professional referral boundaries.",
  path: "/australia-vet-tafe-pathways/",
  image: "/assets/otc-australia-vet-tafe-social-card.png",
  body: `
    <section class="page-hero ai-operations-hero vet-tafe-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia · VET / TAFE Route Coverage</div>
        <h1>Australia VET / TAFE Pathway Map</h1>
        <p>OTC is building a structured vocational pathway screening layer for Australian TAFE, VET, English preparation, diploma, advanced diploma and TAFE-to-university progression routes.</p>
        <div class="actions">
          <a class="btn btn-primary" href="/australia-office-presence/">Australia route</a>
          <a class="btn btn-secondary" href="/ai-education-operations/">AI operations</a>
          <a class="btn btn-secondary" href="/zh/australia-vet-tafe-pathways/">中文職業培訓佈局</a>
        </div>
      </div>
    </section>

    <section class="band ai-operations-position vet-tafe-position">
      <div class="ai-operations-lead">
        <div class="eyebrow">Operating Purpose</div>
        <h2>Vocational education gives OTC a practical Australia-facing service route.</h2>
        <p>VET and TAFE routes sit between school, English preparation, university progression and career qualification planning. OTC's first step is to maintain a state-by-state screening map so that students can be guided by course level, occupation direction, English readiness, document requirements and institution process before any formal application or professional referral is made.</p>
      </div>
      <aside class="ai-operations-note">
        <span>Current status</span>
        <p>Route coverage and screening readiness. OTC should not describe any provider as an official partner unless a written representative or agent agreement is in place.</p>
      </aside>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Boards</div>
        <h2>Vocational training boards (student-facing subpages).</h2>
        <p>Sector boards are maintained under the Chinese site to support course screening, provider checks and document readiness. They are education planning tools, not immigration or employment advice.</p>
      </div>
      <div class="vet-tafe-screening-grid">
        ${[
          ["Health & Community", "Health, aged care, disability and community services routes (with clear registration boundaries).", "/zh/australia-vet-tafe-pathways/health-community/"],
          ["Trades & Construction", "Apprenticeship-adjacent study, trades licences context, safety training and evidence boundaries.", "/zh/australia-vet-tafe-pathways/trades-construction/"],
          ["Business / IT / Creative", "Business, hospitality, IT and creative media VET planning (assessment-fit + portfolio).", "/zh/australia-vet-tafe-pathways/business-it-creative/"],
          ["Provider checklist", "Short due-diligence checklist: RTO scope, CRICOS, placements, costs and key documents.", "/zh/australia-vet-tafe-pathways/provider-checklist/"],
          ["TAFE → University", "Progression and credit conversations: what can be compared, and what cannot be assumed.", "/zh/australia-vet-tafe-pathways/tafe-to-university/"],
          ["Student evidence pack", "A one-page evidence pack template: transcripts, course codes, timeline and questions.", "/zh/australia-vet-tafe-pathways/evidence-pack/"]
        ].map(([title, desc, href]) => `
          <article>
            <span>Board</span>
            <strong>${title}</strong>
            <p>${desc}</p>
            <a href="${href}">Open</a>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">State Coverage</div>
        <h2>Initial VET / TAFE map by Australian state and territory.</h2>
        <p>This is a working public index. Provider-specific application rules, commission terms, contract records and internal contacts remain in OTC's private evidence files.</p>
      </div>
      <div class="vet-tafe-map-grid">
        <article>
          <b>NSW</b>
          <strong>TAFE NSW and Sydney-area vocational routes</strong>
          <p>Priority for OTC's NSW coordination base: diploma, advanced diploma, English preparation, pathway packaging and TAFE-to-university progression screening.</p>
          <a href="https://www.tafensw.edu.au/international" target="_blank" rel="noopener">Official provider site</a>
        </article>
        <article>
          <b>QLD</b>
          <strong>TAFE Queensland and regional pathway routes</strong>
          <p>Coverage for business, IT, hospitality, community services, health-adjacent fields and progression planning where provider processes permit agent or referral handling.</p>
          <a href="https://tafeqld.edu.au/international" target="_blank" rel="noopener">Official provider site</a>
        </article>
        <article>
          <b>WA</b>
          <strong>TAFE International Western Australia</strong>
          <p>Perth and WA route coverage for vocational diplomas, English preparation, institution progression and state-specific application documentation.</p>
          <a href="https://www.tafeinternational.wa.edu.au/" target="_blank" rel="noopener">Official provider site</a>
        </article>
        <article>
          <b>VIC</b>
          <strong>Victoria TAFE and dual-sector options</strong>
          <p>Route tracking for vocational colleges, public TAFE institutes and dual-sector university pathways where vocational study connects to higher education.</p>
          <span>Provider list under review</span>
        </article>
        <article>
          <b>SA</b>
          <strong>South Australia vocational and pathway coverage</strong>
          <p>TAFE, pathway and occupation-focused course screening for Adelaide and regional study routes, with document-readiness checks before application.</p>
          <span>Provider list under review</span>
        </article>
        <article>
          <b>TAS / ACT / NT</b>
          <strong>Smaller-market vocational route monitoring</strong>
          <p>Coverage for selected public providers, regional options, English preparation and family-specific planning where location or course availability matters.</p>
          <span>Provider list under review</span>
        </article>
      </div>
    </section>

    <section class="spotlight ai-operations-flow-section">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Screening Matrix</div>
          <h2>What OTC should check before recommending a VET / TAFE route.</h2>
        </div>
        <div class="vet-tafe-screening-grid">
          <article><span>Course level</span><strong>Certificate, Diploma, Advanced Diploma</strong><p>Confirm level, duration, delivery mode, placement requirements and progression options.</p></article>
          <article><span>English readiness</span><strong>Entry score and preparation route</strong><p>Check English requirements, accepted tests, ELICOS options and realistic timing.</p></article>
          <article><span>Occupation link</span><strong>Career direction without overclaiming</strong><p>Record the student's target field while keeping skills assessment and migration advice separate.</p></article>
          <article><span>University pathway</span><strong>Credit and progression possibility</strong><p>Identify TAFE-to-university routes, advanced standing possibilities and institution-specific limits.</p></article>
          <article><span>Documents</span><strong>Readiness and file discipline</strong><p>Prepare academic records, passport, English evidence, CV, employment evidence and translations where needed.</p></article>
          <article><span>Professional boundary</span><strong>Referral when advice is regulated</strong><p>Route migration, legal, tax, skills assessment and professional registration questions to qualified advisers.</p></article>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="ai-operations-boundary">
        <div>
          <div class="eyebrow">Next Build Step</div>
          <h2>Convert this map into provider approach records.</h2>
        </div>
        <p>For each priority provider, OTC should create a private record with provider website, international contact, agent / representative application route, required company documents, training requirements, approved course areas, published policies and the date of last review. The public website should remain an index, while contracts and commercial channels stay private.</p>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">One-Click Share</div>
        <h2>Share this article with its title image.</h2>
        <p>This page is configured with a social title image. Sharing the page URL should generate a card preview on platforms that support link previews.</p>
      </div>
      <div class="social-signature-layout">
        <a class="social-signature-card" href="/australia-vet-tafe-pathways/" aria-label="Open Australia VET and TAFE pathway map">
          <img src="/assets/otc-australia-vet-tafe-social-card.png?v=20260519" alt="OTC Australia VET and TAFE pathway map social poster">
        </a>
        <article class="social-post-copy">
          <span>Ready-to-post copy</span>
          <p>OTC is developing a structured Australia VET / TAFE pathway map to support vocational course screening, TAFE-to-university progression planning, English-readiness checks and document preparation for international students.</p>
          <p>This is part of our Australia-facing education operations framework: practical, evidence-led and professionally bounded.</p>
          <div class="one-click-share" data-share-title="Australia VET / TAFE Pathway Map | OTC Study Hub" data-share-url="${new URL("/australia-vet-tafe-pathways/", SITE_URL).toString()}">
            <button type="button" data-native-share>Share article</button>
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent("OTC is developing a structured Australia VET / TAFE pathway map for vocational course screening, TAFE-to-university progression planning and document readiness.")}&url=${encodeURIComponent(new URL("/australia-vet-tafe-pathways/", SITE_URL).toString())}" target="_blank" rel="noopener">Share to X</a>
            <a href="https://www.threads.net/intent/post?text=${encodeURIComponent("OTC is developing a structured Australia VET / TAFE pathway map for international students. " + new URL("/australia-vet-tafe-pathways/", SITE_URL).toString())}" target="_blank" rel="noopener">Share to Threads</a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(new URL("/australia-vet-tafe-pathways/", SITE_URL).toString())}" target="_blank" rel="noopener">LinkedIn</a>
            <button type="button" data-copy-share>Copy link</button>
          </div>
          <a href="/assets/otc-australia-vet-tafe-social-card.png" target="_blank" rel="noopener">Open title image</a>
        </article>
      </div>
      <script>
        document.querySelectorAll("[data-native-share]").forEach((button) => {
          button.addEventListener("click", async () => {
            const root = button.closest("[data-share-url]");
            const shareData = {
              title: root.dataset.shareTitle,
              text: "OTC Australia VET / TAFE pathway map for vocational course screening, progression planning and document readiness.",
              url: root.dataset.shareUrl
            };
            if (navigator.share) {
              try { await navigator.share(shareData); return; } catch (error) {}
            }
            await navigator.clipboard.writeText(shareData.url);
            button.textContent = "Link copied";
          });
        });
        document.querySelectorAll("[data-copy-share]").forEach((button) => {
          button.addEventListener("click", async () => {
            const root = button.closest("[data-share-url]");
            await navigator.clipboard.writeText(root.dataset.shareUrl);
            button.textContent = "Copied";
          });
        });
      </script>
    </section>
  `
});

function zhVetBoardCard(title, desc, href, tag = "VET Board") {
  return `
    <a class="hub-item" href="${href}">
      <strong>${title}</strong>
      <span>${tag}</span>
      <p>${desc}</p>
    </a>
  `;
}

function zhVetBoardToolShelf({ heading = "配套出版物與學習工具", intro = "把路線規劃落到可執行：用出版物、清單與工具把證據整理好，再進入諮詢或正式申請流程。", tag = "Tools", context = "" } = {}) {
  const query = context ? `&context=${encodeURIComponent(context)}` : "";
  return `
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">${tag}</div>
        <h2>${heading}</h2>
        <p>${intro}</p>
      </div>
      <div class="hub-map">
        ${zhVetBoardCard("出版物與更新", "Overseas Publishing：出版物、媒體更新與可公開引用的材料入口。", "/publishing/", "Publishing")}
        ${zhVetBoardCard("Study Guides", "公眾版學習指南與模組化學習材料（可逐步擴展到職業培訓配套）。", "/study-guides/", "Guides")}
        ${zhVetBoardCard("Apps & Tools", "工具與練習入口：詞彙、mock tests、互動學習與資料整理工具。", "/apps/", "Apps")}
        ${zhVetBoardCard("Consultation AI", "快速整理問題清單與文件缺口（不構成移民/法律建議）。", `/consultation-chat/?source=vet-tafe-board${query}`, "AI")}
      </div>
    </section>
  `;
}

function zhVetBoardPage({ title, description, path, heroEyebrow, heroTitle, heroIntro, sections, resources, related, toolContext }) {
  const resourceList = (resources || [])
    .map((resource) => `<li><strong><a href="${resource[1]}" target="_blank" rel="noopener">${resource[0]}</a></strong><span>${resource[1]}</span></li>`)
    .join("");
  const relatedCards = (related || []).map((card) => zhVetBoardCard(card[0], card[1], card[2], card[3] || "相關板塊")).join("");

  return pageShell({
    title,
    current: "zh",
    lang: "zh-Hant",
    locale: "zh",
    description,
    path,
    body: `
      <section class="page-hero ai-operations-hero vet-tafe-hero">
        <div class="band">
          <div class="eyebrow">${heroEyebrow || "OTC Australia · 職業培訓路線"}</div>
          <h1>${heroTitle}</h1>
          <p>${heroIntro}</p>
          <div class="actions">
            <a class="btn btn-primary" href="/zh/australia-vet-tafe-pathways/">返回職業培訓總覽</a>
            <a class="btn btn-secondary" href="/australia-office-presence/">Australia route</a>
          </div>
        </div>
      </section>

      <section class="band ai-operations-position vet-tafe-position">
        <div class="ai-operations-lead">
          <div class="eyebrow">使用方式</div>
          <h2>先把問題拆成：課程代碼 / 英文與學歷 / 實習與評核 / 合規邊界。</h2>
          <p>本頁為教育規劃與資料整理工具，用於幫學生做課程篩查與文件準備。涉及移民評估、就業保證、執業註冊或法律建議，請以官方與合格專業人士為準。</p>
        </div>
        <aside class="ai-operations-note">
          <span>合規提示</span>
          <p>OTC 不做「保證就業/保證移民」式表述；本頁重點是可核對的文件、課程代碼與官方入口。</p>
        </aside>
      </section>

      <section class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">板塊內容</div>
          <h2>${heroTitle}：多板塊整理</h2>
          <p>每個板塊都對應「要準備什麼文件、問什麼問題、在哪裡核對、哪些內容需要轉介」。</p>
        </div>
        <div class="vet-tafe-screening-grid">
          ${(sections || []).map((block) => `
            <article>
              <span>${block[0]}</span>
              <strong>${block[1]}</strong>
              <p>${block[2]}</p>
              <div style="height:10px"></div>
              ${(block[3] || []).slice(0, 4).map((item) => `<p style="margin:8px 0 0; font-size:13px; color:#4d5968;">• ${item}</p>`).join("")}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">官方入口</div>
          <h2>優先使用官方查詢頁面核對。</h2>
          <p>把 course code、CRICOS、RTO scope、實習/placement、費用與入學要求逐項核對，避免只看宣傳頁或社交媒體摘要。</p>
        </div>
        <div class="zh-academic-reading-board">
          <article class="zh-academic-reading-panel">
            <strong>官方連結</strong>
            <ul class="zh-academic-reading-list">${resourceList}</ul>
          </article>
          <article class="zh-academic-reading-panel">
            <strong>下一步</strong>
            <ul class="zh-academic-reading-list">
              <li><strong>建立 evidence pack</strong><span>學歷/成績單/翻譯、英文成績、課程代碼、簡歷與實習證據。</span></li>
              <li><strong>做 10 個問題清單</strong><span>入學要求、實習安排、評核方式、出勤、成本與時間線。</span></li>
              <li><strong>識別需轉介事項</strong><span>移民/法律/執業註冊/雇傭合約等交由合格人士。</span></li>
            </ul>
          </article>
        </div>
      </section>

      ${zhVetBoardToolShelf({ context: toolContext || heroTitle })}

      ${(related || []).length ? `
      <section class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Related</div>
          <h2>更多職業培訓板塊</h2>
          <p>用板塊方式把職業培訓路線拆開：更容易更新，也更容易讓學生把材料準備齊。</p>
        </div>
        <div class="hub-map">${relatedCards}</div>
      </section>
      ` : ""}
    `
  });
}

const zhAustraliaVetTafeHub = pageShell({
  title: "澳洲 VET / TAFE 職業培訓路線總覽 | OTC Study Hub",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC 澳洲職業培訓路線總覽：VET/TAFE 板塊化整理，包含課程篩查、文件準備、官方查詢入口與合規邊界。",
  path: "/zh/australia-vet-tafe-pathways/",
  body: `
    <section class="page-hero ai-operations-hero vet-tafe-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia · 職業培訓路線</div>
        <h1>澳洲 VET / TAFE 職業培訓：板塊總覽</h1>
        <p>把職業培訓路線做成可更新的多板塊：課程代碼、RTO/TAFE 核對、實習安排、評核方式、升學銜接與轉介邊界。這些頁面是教育規劃工具，不構成移民或就業建議。</p>
        <div class="actions">
          <a class="btn btn-primary" href="/australia-office-presence/">Australia route</a>
          <a class="btn btn-secondary" href="/australia-vet-tafe-pathways/">English map</a>
        </div>
      </div>
    </section>

    <section class="band ai-operations-position vet-tafe-position">
      <div class="ai-operations-lead">
        <div class="eyebrow">核心原則</div>
        <h2>先用官方入口核對，再談個案策略。</h2>
        <p>職業培訓的第一步不是選「熱門課」，而是核對：課程代碼、AQF 等級、RTO scope、CRICOS（如涉及國際學生）、實習/placement、評核方式與費用。把資料做乾淨，後續才可能快速做出可靠判斷。</p>
      </div>
      <aside class="ai-operations-note">
        <span>Scope boundary</span>
        <p>涉及移民評估、簽證選擇、職業註冊、法律/稅務、雇傭合約等，OTC 以轉介方式處理。</p>
      </aside>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Boards</div>
        <h2>多板塊佈局（子頁面）</h2>
        <p>每個板塊是一個可獨立更新的子頁面，便於新增院校、政策入口、常見問題清單與文件模板。</p>
      </div>
      <div class="vet-tafe-screening-grid">
        ${[
          ["Health & Community", "健康護理 / 社區服務", "含護理註冊邊界、實習安排與課程核對要點。", "/zh/australia-vet-tafe-pathways/health-community/"],
          ["Trades & Construction", "技工 / 建築 / 安全培訓", "含 licence 語境提醒、RTO scope 核對與風險提示。", "/zh/australia-vet-tafe-pathways/trades-construction/"],
          ["Business / IT / Creative", "商科 / IT / 創意媒體", "含評核型式、作品集/專題、文書敘事證據。", "/zh/australia-vet-tafe-pathways/business-it-creative/"],
          ["Provider checklist", "RTO/TAFE 課程篩查清單", "CRICOS、課程代碼、實習、成本、退費、出勤與 evidence。", "/zh/australia-vet-tafe-pathways/provider-checklist/"],
          ["TAFE → University", "TAFE-to-university 銜接", "credit/advanced standing 的材料、流程與不能保證的邊界。", "/zh/australia-vet-tafe-pathways/tafe-to-university/"],
          ["Evidence pack", "學生 evidence pack", "把材料整理成一頁版，方便提問與快速比對。", "/zh/australia-vet-tafe-pathways/evidence-pack/"]
        ].map(([tag, title, desc, href]) => `
          <article>
            <span>${tag}</span>
            <strong>${title}</strong>
            <p>${desc}</p>
            <a href="${href}">打開子頁面</a>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Official</div>
        <h2>常用官方查詢入口（總覽）</h2>
        <p>先用官方頁面核對 course code、RTO、CRICOS 與條款，再做課程比較與路線規劃。</p>
      </div>
      <div class="zh-academic-reading-board">
        <article class="zh-academic-reading-panel">
          <strong>查課程 / 查機構</strong>
          <ul class="zh-academic-reading-list">
            <li><strong><a href="https://training.gov.au/" target="_blank" rel="noopener">training.gov.au</a></strong><span>澳洲官方訓練資訊：課程代碼、training package、RTO 清單。</span></li>
            <li><strong><a href="https://cricos.education.gov.au/" target="_blank" rel="noopener">CRICOS</a></strong><span>國際學生課程登錄查詢（如適用）。</span></li>
            <li><strong><a href="https://www.asqa.gov.au/" target="_blank" rel="noopener">ASQA</a></strong><span>職業教育監管與合規信息入口。</span></li>
          </ul>
        </article>
        <article class="zh-academic-reading-panel">
          <strong>下一步（OTC 使用）</strong>
          <ul class="zh-academic-reading-list">
            <li><strong>問 10 個問題</strong><span>入學要求、實習/placement、評核方式、出勤、費用與時間線。</span></li>
            <li><strong>做一頁 evidence pack</strong><span>學歷/成績單/翻譯、英文、工作/實習、目標方向。</span></li>
            <li><strong>標記需轉介事項</strong><span>移民、執業註冊、法律/合約、稅務與監管事項。</span></li>
          </ul>
        </article>
      </div>
    </section>
  `
});

const zhAustraliaVetHealthCommunity = zhVetBoardPage({
  title: "澳洲健康護理與社區服務（VET / TAFE）| OTC 職業培訓板塊",
  description: "澳洲健康護理與社區服務職業培訓板塊：課程核對、實習安排、註冊邊界與官方入口。",
  path: "/zh/australia-vet-tafe-pathways/health-community/",
  heroTitle: "健康護理 / 社區服務：VET / TAFE 板塊",
  heroIntro: "把 CHC/HLT 類方向拆成可核對的課程代碼、實習安排與合規邊界。尤其是護理註冊：課程層級相近不代表可直接執業，需以監管機構與批准課程為準。",
  toolContext: "health-community",
  sections: [
    ["Board 01", "課程代碼優先", "先用 training.gov.au 查 qualification code、RTO 與入學前置條件。", ["qualification code / training package", "RTO scope 與校區", "實習時數與安排", "評核方式與 evidence"]],
    ["Board 02", "護理註冊邊界", "涉及 AHPRA / NMBA / ANMAC 的註冊問題需以官方批准課程與條款為準。", ["不要把非批准課程當作註冊路線", "確認課程是否為 approved program", "核對 placement 與 supervision", "必要時專業轉介"]],
    ["Board 03", "文件準備", "把學歷、英文與實習證據整理成可審閱格式，方便快速比對。", ["成績單與翻譯", "英文成績有效期", "工作/實習證明", "個人陳述的證據點"]],
    ["Board 04", "實務風險提示", "就業與移民結果不可保證；重點是可核對、可更新。", ["避免保證式說法", "以官方條款為準", "不混淆學術/職業/註冊", "必要時轉介"]]
  ],
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["AHPRA approved programs of study", "https://www.ahpra.gov.au/Accreditation/Approved-Programs-of-Study.aspx"],
    ["NMBA (Nursing and Midwifery Board of Australia)", "https://www.nursingmidwiferyboard.gov.au/"],
    ["ANMAC", "https://www.anmac.org.au/"]
  ],
  related: [
    ["RTO/TAFE 篩查清單", "先核對 course code、CRICOS、實習、出勤與費用條款。", "/zh/australia-vet-tafe-pathways/provider-checklist/", "Checklist"],
    ["TAFE-to-university", "銜接與 credit conversation：哪些可比較、哪些不能假設。", "/zh/australia-vet-tafe-pathways/tafe-to-university/", "Progression"],
    ["Evidence pack", "把材料整理成一頁版，便於提問與快速比對。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ]
});

const zhAustraliaVetTradesConstruction = zhVetBoardPage({
  title: "澳洲技工 / 建築 / 安全培訓（VET / TAFE）| OTC 職業培訓板塊",
  description: "澳洲技工與建築職業培訓板塊：課程核對、證據準備、合規邊界與官方入口。",
  path: "/zh/australia-vet-tafe-pathways/trades-construction/",
  heroTitle: "技工 / 建築 / 安全培訓：VET / TAFE 板塊",
  heroIntro: "技工與建築路線往往涉及州法規、工地安全與 licence 語境。這個板塊聚焦：課程代碼、RTO scope、實操評核與合規/轉介邊界。",
  toolContext: "trades-construction",
  sections: [
    ["Board 01", "課程與 licence 分開看", "課程本身是教育訓練；執業/牌照可能有額外要求。", ["qualification vs licence 分離", "核對州/行業要求", "查看實操評核", "記錄 training evidence"]],
    ["Board 02", "RTO scope 與校區", "同名課程在不同 RTO/校區的交付方式可能不同。", ["scope/交付方式", "校區與時間線", "設備與實訓安排", "出勤要求"]],
    ["Board 03", "學習與工作證據", "把安全培訓、實操、工地經驗做成可核對的證據。", ["證書與成績單", "工作/實習證明", "照片/日志（合規）", "推薦人與聯絡信息"]]
  ],
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["ASQA", "https://www.asqa.gov.au/"]
  ],
  related: [
    ["Provider checklist", "用清單快速排除不清晰課程與風險條款。", "/zh/australia-vet-tafe-pathways/provider-checklist/", "Checklist"],
    ["Evidence pack", "整理一頁版材料，方便比較與提問。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ]
});

const zhAustraliaVetBusinessItCreative = zhVetBoardPage({
  title: "澳洲商科 / IT / 創意媒體（VET / TAFE）| OTC 職業培訓板塊",
  description: "澳洲商科/IT/創意媒體職業培訓板塊：課程模組、評核方式、作品集/專題與官方入口。",
  path: "/zh/australia-vet-tafe-pathways/business-it-creative/",
  heroTitle: "商科 / IT / 創意媒體：VET / TAFE 板塊",
  heroIntro: "把看似『泛』的方向做成可核對清單：課程模組、評核方式、工具要求、作品集/專題與實習安排。重點是 evidence-led，而不是口號式興趣敘述。",
  toolContext: "business-it-creative",
  sections: [
    ["Board 01", "模組與評核方式", "先讀課程模組與 assessment type，避免只看課程名稱。", ["module list", "assessment type", "工具/軟件", "出勤與 group work"]],
    ["Board 02", "作品集 / 專題", "把專題做小做實：可核對、可展示、可改進。", ["1 個分析 + 1 個 audit", "3 張圖表 + 反思", "引用來源", "避免誇大結果"]],
    ["Board 03", "文件與英文", "VET 仍然需要可審閱的英文與文件一致性。", ["英文成績與有效期", "簡歷與工作內容", "學歷翻譯件", "同名材料版本管理"]]
  ],
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["CRICOS", "https://cricos.education.gov.au/"]
  ],
  related: [
    ["TAFE-to-university", "如涉及銜接，先理解 credit 的邊界。", "/zh/australia-vet-tafe-pathways/tafe-to-university/", "Progression"],
    ["Evidence pack", "把材料整理成一頁版，降低溝通成本。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ]
});

const zhAustraliaVetProviderChecklist = zhVetBoardPage({
  title: "RTO/TAFE 課程篩查清單 | OTC 職業培訓板塊",
  description: "用一份短清單做職業培訓課程篩查：course code、RTO scope、CRICOS、實習、出勤、費用與條款。",
  path: "/zh/australia-vet-tafe-pathways/provider-checklist/",
  heroTitle: "RTO / TAFE 課程篩查清單（快速版）",
  heroIntro: "用一份可重複使用的清單，把『這個課程到底靠不靠譜』拆成可核對項：course code、RTO scope、CRICOS、實習、評核、出勤、費用與退費條款。",
  toolContext: "provider-checklist",
  sections: [
    ["Checklist 01", "課程代碼與等級", "先核對 qualification code、AQF level 與授課模式。", ["course code/名稱", "AQF level", "delivery mode", "入學前置條件"]],
    ["Checklist 02", "RTO/TAFE 資格", "核對 RTO scope、校區與交付能力。", ["RTO scope", "校區/時間表", "師資與實訓", "評核 evidence"]],
    ["Checklist 03", "國際學生（如適用）", "核對 CRICOS、CoE、出勤與 OSHC 語境。", ["CRICOS 代碼", "出勤/進度要求", "費用與退費", "學生支持"]],
    ["Checklist 04", "實習/placement", "把 placement 問清楚：時數、場景、誰安排、如何評核。", ["placement 時數", "安排方與地點", "保險/安全", "督導與評核"]]
  ],
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["CRICOS", "https://cricos.education.gov.au/"],
    ["ASQA", "https://www.asqa.gov.au/"]
  ],
  related: [
    ["Evidence pack", "把材料整理成一頁版，方便逐項核對。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ]
});

const zhAustraliaVetTafeToUniversity = zhVetBoardPage({
  title: "TAFE-to-University 銜接與 Credit 討論 | OTC 職業培訓板塊",
  description: "TAFE/VET 到大學的銜接與 credit 討論：哪些可以比較、哪些不能假設。",
  path: "/zh/australia-vet-tafe-pathways/tafe-to-university/",
  heroTitle: "TAFE → 大學：銜接與 credit 的可行性讀法",
  heroIntro: "很多學生把『學術層級接近』誤讀成『一定可減免學分』。這個板塊用可核對方式整理：credit/advanced standing 的材料、流程與不能保證的邊界。",
  toolContext: "tafe-to-university",
  sections: [
    ["Board 01", "先看官方 credit policy", "每所大學的 credit policy 不同，不能用傳聞推定。", ["credit policy", "學分上限", "單元對照", "是否需 syllabus"]],
    ["Board 02", "材料清單", "把可審閱材料準備齊：課綱、評核、成績與時長。", ["sylabus/單元描述", "assessment brief", "transcript", "課程時長與時數"]],
    ["Board 03", "風險提示", "銜接與移民、就業是不同問題；避免把它們綁成保證。", ["不做結果保證", "政策可能更新", "以書面為準", "必要時轉介"]]
  ],
  resources: [
    ["CRICOS", "https://cricos.education.gov.au/"],
    ["TEQSA", "https://www.teqsa.gov.au/"],
    ["training.gov.au", "https://training.gov.au/"]
  ],
  related: [
    ["Provider checklist", "先把課程核對乾淨，銜接才有討論基礎。", "/zh/australia-vet-tafe-pathways/provider-checklist/", "Checklist"],
    ["Evidence pack", "把材料整理成一頁版，降低溝通成本。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ]
});

const zhAustraliaVetEvidencePack = zhVetBoardPage({
  title: "職業培訓 evidence pack（一頁版）| OTC 職業培訓板塊",
  description: "把職業培訓路線材料整理成一頁版 evidence pack：方便提問、比對與留痕。",
  path: "/zh/australia-vet-tafe-pathways/evidence-pack/",
  heroTitle: "職業培訓 evidence pack：一頁版模板",
  heroIntro: "把你要走的 VET/TAFE 路線做成一頁版：目標方向、課程代碼、文件狀態、英文、時間線與 10 個問題。材料乾淨，回覆就快。",
  toolContext: "evidence-pack",
  sections: [
    ["Template 01", "基本信息", "你是誰、要去哪、何時入學、目前狀態。", ["目標州/城市", "目標開課期", "預算區間", "聯絡與備註"]],
    ["Template 02", "學歷與英文", "學歷/成績單/翻譯與英文成績一目了然。", ["最高學歷", "成績單/翻譯", "英文成績與有效期", "gap 解釋（如有）"]],
    ["Template 03", "課程與問題", "列出 course code，並寫下你要問的 10 個問題。", ["course code", "RTO/校區", "placement 安排", "費用/退費/出勤"]]
  ],
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["CRICOS", "https://cricos.education.gov.au/"]
  ],
  related: [
    ["Provider checklist", "用清單逐項核對你的 evidence pack。", "/zh/australia-vet-tafe-pathways/provider-checklist/", "Checklist"],
    ["返回總覽", "查看全部職業培訓板塊。", "/zh/australia-vet-tafe-pathways/", "Hub"]
  ]
});

const aiEducationOperations = pageShell({
  title: "AI-Enabled Education Operations | OTC Study Hub",
  current: "about",
  description: "OTC's AI-supported education operations framework for structured student files, qualification mapping, application workflows, tutorial publishing, evidence management and Australia route intelligence.",
  path: "/ai-education-operations/",
  body: `
    <section class="page-hero ai-operations-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia · Education Infrastructure</div>
        <h1>AI-Enabled Education Operations</h1>
        <p>OTC is building a practical AI-supported operating layer for student-file organisation, qualification mapping, application coordination, tutorial publishing and Australia route intelligence.</p>
        <div class="actions">
          <a class="btn btn-primary" href="/australia-office-presence/">Australia route</a>
          <a class="btn btn-secondary" href="/university-applications/#otc-apply-form">Application screening</a>
          <a class="btn btn-secondary" href="/australia-vet-tafe-pathways/">VET / TAFE map</a>
        </div>
      </div>
    </section>

    <section class="band ai-operations-position">
      <div class="ai-operations-lead">
        <div class="eyebrow">Operating Position</div>
        <h2>AI supports structured education operations. Human review remains central.</h2>
        <p>OTC uses AI as an operational layer, not as a substitute for professional judgement. The framework helps organise student background, document status, programme requirements, pathway options and follow-up actions so that advisers, tutors and families can work from the same structured record.</p>
      </div>
      <aside class="ai-operations-note">
        <span>Public scope</span>
        <p>Student file organisation, education-route screening, document workflow, academic support planning, bilingual drafting and internal review records.</p>
      </aside>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Capability Areas</div>
        <h2>Six operational layers for Australia-facing education work.</h2>
        <p>The framework is designed as education infrastructure: quieter than marketing, more useful than a brochure, and precise enough to support live case handling.</p>
      </div>
      <div class="ai-operations-grid">
        <article>
          <b>01</b>
          <strong>Student File Intelligence</strong>
          <p>Student background, education history, English profile, target country, timing, document gaps and communication notes organised into a single review record.</p>
        </article>
        <article>
          <b>02</b>
          <strong>Course &amp; Progression Mapping</strong>
          <p>Structured comparison between OTHM / UK RQF levels, university pathways, AQF-facing considerations, VET options and institution-specific entry rules.</p>
        </article>
        <article>
          <b>03</b>
          <strong>Application Workflow Support</strong>
          <p>Checklists, document requests, draft communication, status tracking and application-readiness notes for university and pathway cases.</p>
        </article>
        <article>
          <b>04</b>
          <strong>Academic Support &amp; Tutorial Publishing</strong>
          <p>Study guides, bilingual learning notes, assessment-preparation resources and tutorial planning connected to OTC teaching and publishing activity.</p>
        </article>
        <article>
          <b>05</b>
          <strong>Compliance &amp; Evidence Management</strong>
          <p>Version-controlled student records, advice notes, communication logs and file indexes prepared for internal review and professional collaboration.</p>
        </article>
        <article>
          <b>06</b>
          <strong>Australia Route Market Intelligence</strong>
          <p>Monitoring of Australian universities, colleges, pathway providers, VET / TAFE routes, school options, English preparation and policy-sensitive service boundaries.</p>
        </article>
      </div>
    </section>

    <section class="spotlight ai-operations-flow-section">
      <div class="band compact-band">
        <div class="section-head compact-head">
          <div class="eyebrow">Workflow</div>
          <h2>From enquiry to review archive.</h2>
        </div>
        <div class="ai-operations-flow">
          <article><span>Intake</span><strong>Build the student record</strong><p>Capture background, goals, timing, documents and initial risk points.</p></article>
          <article><span>Mapping</span><strong>Compare route options</strong><p>Match courses, qualification levels, English needs and institutional requirements.</p></article>
          <article><span>Coordination</span><strong>Run the application workflow</strong><p>Prepare checklists, drafts, status notes and family communication records.</p></article>
          <article><span>Review</span><strong>Keep a clean archive</strong><p>Maintain decision notes, version history, adviser liaison and service boundaries.</p></article>
        </div>
      </div>
    </section>

    <section class="band compact-band">
      <div class="ai-operations-boundary">
        <div>
          <div class="eyebrow">Professional Boundary</div>
          <h2>AI can structure education work. It does not replace qualified advice.</h2>
        </div>
        <p>Final academic, admissions, legal, immigration, financial or regulated compliance advice remains subject to human review and, where required, appropriately qualified professionals. OTC's public role is education coordination, bilingual documentation, academic support and structured case management.</p>
      </div>
    </section>

    <section class="band compact-band">
      <div class="qualification-report-panel vet-tafe-panel">
        <div>
          <span>Route Coverage</span>
          <h2>Australia VET / TAFE pathway map.</h2>
          <p>The vocational route map extends OTC's AI-supported operations into course-level screening for TAFE, VET, English preparation, diploma progression and document-readiness review.</p>
        </div>
        <a class="btn btn-dark" href="/australia-vet-tafe-pathways/">Open map</a>
      </div>
    </section>
  `
});

const othmAustraliaExpansionReport = pageShell({
  title: "OTHM and Australia Pathway Strategy Report | OTC Study Hub",
  current: "about",
  description: "Evidence report on how OTC's OTHM qualification base supports Australia-facing university pathways, credit/RPL readiness and career-qualification planning.",
  path: "/reports/othm-australia-expansion/",
  body: `
    <section class="page-hero australia-office-hero report-hero"><div class="band"><div class="eyebrow">Evidence Report</div><h1>OTHM Qualifications and Australia Pathway Strategy</h1><p>How OTC's UK-regulated qualification base supports Australia-facing university application, credit/RPL readiness and career-qualification planning.</p><div class="actions"><a class="btn btn-primary" href="/australia-office-presence/">Back to Australia route</a><a class="btn btn-secondary" href="/zh/reports/othm-australia-expansion/">中文報告</a></div></div></section>
    <section class="band">
      <article class="evidence-report-page">
        <div class="report-meta-grid">
          <div><span>Prepared for</span><strong>Overseas Tutorial Centre Ltd</strong></div>
          <div><span>Purpose</span><strong>Australia expansion strategy evidence</strong></div>
          <div><span>Date</span><strong>19 May 2026</strong></div>
          <div><span>Status</span><strong>Internal strategy report</strong></div>
        </div>
        <div class="notice advice-signpost">
          <strong>Boundary statement</strong>
          <p>This report is not a legal, migration, skills-assessment or university-admissions decision. It explains a service strategy: UK RQF evidence can be prepared for Australian education review, but final recognition, credit, admission, professional registration and migration outcomes remain with the relevant Australian institution or qualified authority.</p>
        </div>

        <h2>Executive Summary</h2>
        <p>OTHM qualifications provide OTC with a credible UK-regulated qualification platform from which to develop Australia-facing education advisory, university application, pathway-screening and career-qualification planning services.</p>
        <p>The strategic link is not automatic recognition. The correct position is that OTHM operates within the UK Regulated Qualifications Framework (RQF), while Australia uses the Australian Qualifications Framework (AQF). Australian institutions assess overseas and prior learning through their own credit, recognition of prior learning (RPL), advanced standing and credit-transfer rules.</p>
        <p>This creates a practical service bridge for OTC Australia: qualification explanation, document interpretation, course matching, credit/RPL readiness, academic progression planning and career-qualification signposting.</p>

        <h2>Source Evidence</h2>
        <div class="report-evidence-grid">
          <article><b>01</b><strong>OTHM regulatory base</strong><p>OTHM states that it is approved and regulated by Ofqual and lists Ofqual Recognition Number RN5284. Its Level 5 Business Management qualification is identified as Qualification Number 610/1527/1.</p></article>
          <article><b>02</b><strong>UK RQF learning structure</strong><p>OTHM Level 5 Business Management is structured as 120 credits, 1200 Total Qualification Time and 600 Guided Learning Hours, with module-level specifications useful for evidence preparation.</p></article>
          <article><b>03</b><strong>Australian AQF framework</strong><p>The AQF is Australia's national policy framework for regulated qualifications across schools, VET and higher education, with levels including Diploma, Bachelor, Graduate Certificate and Graduate Diploma routes.</p></article>
          <article><b>04</b><strong>Credit and RPL mechanisms</strong><p>Australian providers such as UTS, Curtin and UQ publish credit, RPL or advanced-standing processes, creating a legitimate need for organised prior-learning evidence packs.</p></article>
        </div>

        <h2>Official OTHM Progression Point for Australia</h2>
        <p>OTHM's official University Progressions page gives this report a stronger Australia-specific evidence point. OTHM states that the listed progression arrangements have been confirmed by each university, while also warning that each applicant remains subject to individual assessment and other entry requirements.</p>
        <div class="report-evidence-grid">
          <article><b>Australia 01</b><strong>Edith Cowan University, Australia</strong><p>OTHM lists Edith Cowan University, Australia for OTHM Level 6 / 7 Diploma in Occupational Health and Safety Management, with entry onto a graduate pathway: Graduate Certificate in Occupational Health and Safety and Graduate Diploma of Occupational Health and Safety, leading to the Master of Occupational Health and Safety.</p></article>
          <article><b>Australia 02</b><strong>Curtin University</strong><p>OTHM lists Curtin University for several Level 3 routes, including Business Studies, Foundation Diploma in Accountancy, Foundation Diploma in Engineering, Foundation Diploma in Information Technology and Foundation Diploma for Higher Education Studies, with entry onto first year of undergraduate programmes.</p></article>
        </div>
        <p>This means OTC Australia can point to an official OTHM progression record involving Australian universities. The commercial implication is not a promise of automatic admission. The implication is that OTHM learners create real Australia-facing advisory work: progression screening, evidence checking, qualification explanation, course matching and university communication.</p>

        <h2>Strategic Interpretation for OTC Australia</h2>
        <p>OTHM is relevant to Australia because it gives OTC a structured UK qualification language that can be mapped, explained and documented for Australia-facing decisions. Students may ask whether an OTHM Level 5, Level 6, Level 7 or Level 8 profile can support university entry, prior-learning review, postgraduate planning, professional-course preparation or career-oriented reskilling.</p>
        <p>OTC Australia can therefore position a compliant service line as <strong>UK RQF to Australia AQF advisory support</strong>. The service should not claim equivalence or licensing recognition. It should provide evidence-pack preparation, qualification-level explanation, module/learning-outcome matching, transcript/specification organisation, university pathway matching and referral to regulated advisers where required.</p>

        <h2>Evidence Matrix</h2>
        <div class="report-table-wrap">
          <table>
            <thead><tr><th>OTC / OTHM asset</th><th>Australia-facing need</th><th>OTC service implication</th></tr></thead>
            <tbody>
              <tr><td>OTHM Ofqual/RQF status</td><td>Students need credible explanation of UK qualification level and structure.</td><td>Prepare qualification briefing notes, certificates, transcripts, specifications and level summaries.</td></tr>
              <tr><td>OTHM Level 5 Business Management</td><td>Australian institutions consider prior formal learning case by case.</td><td>Build university-entry and credit/RPL readiness packs.</td></tr>
              <tr><td>120-credit and unit-specification structure</td><td>Credit/RPL reviews often require course descriptions and learning outcomes.</td><td>Maintain module-level mapping records and evidence files.</td></tr>
              <tr><td>Business and professional subject areas</td><td>Australia has broad university, pathway, VET and professional-course markets.</td><td>Create subject-route portfolios for business, management, IT, health, education, tourism and strategic management.</td></tr>
              <tr><td>Australia office route</td><td>Students and partners need a local coordination point.</td><td>Use NSW contact route, local communication and institution liaison to support expansion.</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Recommended Service Lines</h2>
        <div class="report-service-list">
          <article><strong>OTHM-to-Australia Qualification Interpretation</strong><p>RQF level explanation, course-credit summary, learning-outcome extract, academic progression options and Australia-facing evidence packs.</p></article>
          <article><strong>University Application and Credit/RPL Readiness</strong><p>Institution-specific checklists covering transcripts, certified copies, course outlines, English requirements, RPL forms and timing issues.</p></article>
          <article><strong>Career-Qualification Route Planning</strong><p>Connect academic progression, employability narrative, postgraduate conversion, professional-course preparation and regulated referral boundaries.</p></article>
          <article><strong>Institutional Partnership Evidence</strong><p>Use OTHM as a foundation for institutional conversations, bilingual explanation materials and student-file organisation.</p></article>
        </div>

        <h2>Recommended Wording</h2>
        <blockquote>
          <p>OTHM qualifications provide a UK-regulated RQF qualification profile. Australian institutions and professional bodies assess overseas and prior learning under their own rules. OTC supports document preparation, qualification explanation, pathway screening and application coordination. Final recognition, credit, admission, professional registration, skills assessment and migration outcomes remain with the relevant Australian institution or qualified authority.</p>
        </blockquote>

        <h2>Source Links</h2>
        <ul class="report-source-list">
          <li><a href="https://othm.org.uk/quality-standards" target="_blank" rel="noopener">OTHM Quality, Standards & Recognitions</a></li>
          <li><a href="https://othm.org.uk/university-progression" target="_blank" rel="noopener">OTHM University Progressions</a></li>
          <li><a href="https://othm.org.uk/qualification/othm-level-5-diploma-in-business-management" target="_blank" rel="noopener">OTHM Level 5 Diploma in Business Management</a></li>
          <li><a href="https://www.aqf.edu.au/about/what-aqf" target="_blank" rel="noopener">AQF: What is the AQF</a></li>
          <li><a href="https://www.aqf.edu.au/framework/aqf-qualifications" target="_blank" rel="noopener">AQF Qualifications</a></li>
          <li><a href="https://www.teqsa.gov.au/how-we-regulate/acts-and-standards/australian-qualifications-framework" target="_blank" rel="noopener">TEQSA AQF overview</a></li>
          <li><a href="https://www.uts.edu.au/for-students/admissions-entry/recognition-of-prior-learning" target="_blank" rel="noopener">UTS Recognition of Prior Learning</a></li>
          <li><a href="https://www.curtin.edu.au/study/applying/credit-recognised-learning/apply/" target="_blank" rel="noopener">Curtin Credit for Recognised Learning</a></li>
          <li><a href="https://policies.uq.edu.au/document/view-current.php?id=217&version=3" target="_blank" rel="noopener">UQ Credit and Recognition of Prior Learning Procedure</a></li>
        </ul>

        <div class="programme-actions">
          <a class="btn btn-dark" href="/australia-office-presence/">Back to Australia route</a>
          <a class="btn btn-light" href="/reports/OTC_Australia_Expansion_OTHM_Qualification_Linkage_Report_2026-05-19.md">Open markdown copy</a>
        </div>
      </article>
    </section>
  `
});

const othmAustraliaExpansionReportZh = pageShell({
  title: "OTHM 與澳洲升學及職業資格路線報告 | OTC Study Hub",
  current: "zh",
  description: "OTC 澳洲教育路線專題：OTHM 英國 RQF 資格如何支持澳洲大學銜接、credit/RPL 準備、pathway screening 與職業資格規劃。",
  path: "/zh/reports/othm-australia-expansion/",
  body: `
    <section class="page-hero australia-office-hero report-hero zh-report-hero"><div class="band"><div class="eyebrow">澳洲教育路線專題</div><h1>OTHM 與澳洲路線</h1><p>英國 RQF 資格如何支持澳洲升學、credit / RPL 準備與職業路線規劃。</p><div class="actions"><a class="btn btn-primary" href="/australia-office-presence/">返回澳洲路線</a><a class="btn btn-secondary" href="/reports/othm-australia-expansion/">English report</a></div></div></section>
    <section class="band">
      <article class="evidence-report-page zh-evidence-report" lang="zh-Hant">
        <div class="zh-report-edition-bar">
          <span>Overseas Study Review</span>
          <strong>澳洲教育路線專題</strong>
          <em>RQF / AQF / Credit / RPL</em>
        </div>
        <div class="report-meta-grid">
          <div><span>報告對象</span><strong>Overseas Tutorial Centre Ltd</strong></div>
          <div><span>專題範圍</span><strong>澳洲升學與職業資格路線</strong></div>
          <div><span>日期</span><strong>2026 年 5 月 19 日</strong></div>
          <div><span>適用對象</span><strong>學生、家庭及教育合作方</strong></div>
        </div>
        <div class="zh-report-route-strip">
          <div><b>UK RQF</b><span>英國資格層級</span></div>
          <div><b>OTHM</b><span>可文件化學習記錄</span></div>
          <div><b>Australia AQF</b><span>澳洲資格語境</span></div>
          <div><b>Credit / RPL</b><span>個案審閱材料</span></div>
          <div><b>Pathway</b><span>升學與職業路線</span></div>
        </div>
        <div class="notice advice-signpost">
          <strong>閱讀說明</strong>
          <p>本頁介紹 OTC 圍繞英國 RQF 資格與澳洲教育路線提供的資料整理、資格解讀與申請協調服務。澳洲院校、專業機構及相關部門會依其自身規則處理 recognition、credit、admission、professional registration、skills assessment 及 migration outcomes。</p>
        </div>

        <div class="zh-report-feature-layout">
          <div class="zh-report-main-copy">
        <h2>一、執行摘要</h2>
        <p>OTHM 資格為 OTC 提供了一個可信的英國受監管資格平台，使 OTC 可以在澳洲方向發展教育諮詢、大學申請、pathway screening、credit / RPL 準備及職業資格路線規劃服務。</p>
        <p>這裡的核心不是「自動互認」。更合適的理解方式是：OTHM 位於英國 Regulated Qualifications Framework（RQF）語境中；澳洲使用 Australian Qualifications Framework（AQF）。澳洲院校與教育機構會按照自身規則，對 overseas prior learning、credit、recognition of prior learning（RPL）、advanced standing 或 credit transfer 作個案評估。</p>
        <p>因此，OTHM 與澳洲教育體系之間形成的是一個可操作的服務橋樑：資格層級解釋、文件資料整理、課程匹配、credit / RPL readiness、學術 progression planning 以及職業資格路線 signposting。</p>

        <h2>二、資料基礎</h2>
        <div class="report-evidence-grid">
          <article><b>01</b><strong>OTHM 的監管基礎</strong><p>OTHM 官方資料顯示其受 Ofqual 監管，並列出 Ofqual Recognition Number RN5284。OTHM Level 5 Diploma in Business Management 的 Qualification Number 為 610/1527/1。</p></article>
          <article><b>02</b><strong>英國 RQF 學習結構</strong><p>OTHM Level 5 Business Management 為 120 credits、1200 Total Qualification Time 及 600 Guided Learning Hours。這種模塊化、可文件化的結構，非常適合整理為澳洲院校閱讀所需的申請資料包。</p></article>
          <article><b>03</b><strong>澳洲 AQF 框架</strong><p>AQF 是澳洲受監管資格的國家政策框架，涵蓋 schools、VET 及 higher education。其層級包括 Diploma、Bachelor、Graduate Certificate、Graduate Diploma 等資格類型。</p></article>
          <article><b>04</b><strong>Credit / RPL 機制</strong><p>UTS、Curtin、UQ 等澳洲院校均公開 credit、RPL 或 advanced standing 程序。這些制度不保證接受某一資格，但明確創造了 prior-learning documentation preparation 的服務需求。</p></article>
        </div>

        <h2>三、OTHM 官方澳洲銜接點</h2>
        <p>OTHM 官方 University Progressions 頁面為本報告提供了更直接的澳洲參考點。OTHM 表示其列出的 progression arrangements 已由相關大學確認，同時也明確說明：每位申請人仍須接受 individual assessment，並滿足其他 entry requirements。</p>
        <div class="report-evidence-grid">
          <article><b>Australia 01</b><strong>Edith Cowan University, Australia</strong><p>OTHM 官方列出 Edith Cowan University, Australia：OTHM Level 6 / 7 Diploma in Occupational Health and Safety Management 可進入 graduate pathway，包括 Graduate Certificate in Occupational Health and Safety、Graduate Diploma of Occupational Health and Safety，並通向 Master of Occupational Health and Safety。</p></article>
          <article><b>Australia 02</b><strong>Curtin University</strong><p>OTHM 官方列出 Curtin University：Level 3 Diploma in Business Studies、Foundation Diploma in Accountancy、Engineering、Information Technology 及 Higher Education Studies 等路線，可對應 first year undergraduate programmes 的 entry route。</p></article>
        </div>
        <p>這一點對 OTC 澳洲教育服務具有直接意義：OTHM 並非只具備英國本土升學意義，也可以進入澳洲大學、college、pathway provider 的文件閱讀與申請溝通場景。OTC 的價值在於整理材料、解釋資格、匹配課程、準備申請，而不是承諾錄取或自動等同。</p>

        <h2>四、OTC Australia 的服務場景</h2>
        <p>OTHM 給 OTC 一套清晰的英國資格語言。學生、家庭和合作方常見問題包括：OTHM Level 5、6、7、8 是否可以支持澳洲大學 entry；是否可能用於 credit / RPL / advanced standing；是否能支持 postgraduate、top-up、conversion 或職業導向 reskilling；以及澳洲院校閱讀這些資料時需要什麼文件。</p>
        <p>因此，OTC Australia 可以建立一條合規的服務線：<strong>UK RQF to Australia AQF advisory support</strong>。服務內容應包括 evidence pack preparation、qualification-level explanation、module / learning outcome matching、transcript and specification organisation、university pathway matching，以及在移民、法律、技能評估、專業註冊等監管領域進行專業轉介。</p>

        <h2>五、參考矩陣</h2>
        <div class="report-table-wrap">
          <table>
            <thead><tr><th>OTC / OTHM 資產</th><th>澳洲方向需求</th><th>OTC 服務含義</th></tr></thead>
            <tbody>
              <tr><td>OTHM Ofqual / RQF 身份</td><td>學生需要可信地解釋英國資格層級與學習結構。</td><td>準備資格說明、證書、成績單、規格文件與 level summary。</td></tr>
              <tr><td>OTHM Level 5 Business Management</td><td>澳洲院校會按個案評估 prior formal learning。</td><td>建立 university entry 與 credit / RPL readiness 文件包。</td></tr>
              <tr><td>120-credit 及 unit specification 結構</td><td>Credit / RPL 通常需要課程描述與 learning outcomes。</td><td>維護 module-level mapping records 及 application files。</td></tr>
              <tr><td>Business / management / professional subject areas</td><td>澳洲有廣泛的大學、pathway、VET 與職業課程市場。</td><td>建立 business、management、IT、health、education、tourism、strategic management 等 subject-route portfolios。</td></tr>
              <tr><td>澳洲辦事處路線</td><td>學生與合作方需要本地協調窗口。</td><td>以 NSW contact route、local communication 及 institution liaison 支持澳洲教育服務。</td></tr>
            </tbody>
          </table>
        </div>

        <h2>六、服務範圍</h2>
        <div class="report-service-list">
          <article><strong>OTHM-to-Australia Qualification Interpretation</strong><p>解釋 RQF level、credits、TQT / GLH、learning outcomes、academic progression options，並生成 Australia-facing document pack。</p></article>
          <article><strong>University Application and Credit / RPL Readiness</strong><p>為澳洲大學與 pathway providers 建立 transcript、certified copy、course outline、English requirement、RPL form 及 timing checklist。</p></article>
          <article><strong>Career-Qualification Route Planning</strong><p>把 academic progression、employability narrative、postgraduate conversion、professional-course preparation 與 regulated referral boundary 連接起來。</p></article>
          <article><strong>Institutional Partnership Materials</strong><p>以 OTHM 為基礎，支撐院校溝通、雙語說明材料、學生文件包整理及澳洲教育合作材料。</p></article>
        </div>

        <h2>七、機構服務定位</h2>
        <blockquote>
          <p>OTC 以英國 RQF 資格體系與 OTHM 學習路線為基礎，為有意銜接澳洲大學、college、pathway provider 或職業導向課程的學生提供資格解讀、文件整理、課程匹配與申請協調服務。澳洲院校及專業機構會依其自身規則處理 overseas prior learning、credit、admission 或 professional pathway；OTC 的角色是協助學生把既有學習經歷轉化為清晰、可閱讀、可溝通的申請資料。</p>
        </blockquote>

        <h2>八、結論</h2>
        <p>OTHM 對 OTC 澳洲教育服務的價值，在於它提供了一套可被文件化、可被解釋、可被映射到澳洲申請語境的英國資格基礎。公開服務的重點不是聲稱自動等同，而是做好中間層工作：把 UK RQF qualification records 整理成 Australia-ready education files，協助學生理解 pathway choices，準備 credit / RPL 文件，並在保持專業邊界的前提下協調申請。</p>
          </div>

          <aside class="zh-report-side-rail" aria-label="專題索引">
            <div class="zh-report-side-card dark">
              <span>核心定位</span>
              <strong>不是自動互認，而是文件化銜接能力。</strong>
              <p>OTC 的角色是把英國資格、學習成果與澳洲申請場景之間的材料語言整理清楚。</p>
            </div>
            <div class="zh-report-side-card teal">
              <span>學生最常問</span>
              <strong>我的 Level 5 / 6 / 7 能不能接澳洲？</strong>
              <p>答案通常取決於院校、專業、學分、課綱、成績與申請階段，需要個案審閱。</p>
            </div>
            <div class="zh-report-side-card gold">
              <span>文件包重點</span>
              <ul>
                <li>Certificate / transcript</li>
                <li>Unit specification</li>
                <li>Learning outcomes</li>
                <li>Credit / TQT / GLH</li>
                <li>Target course brief</li>
              </ul>
            </div>
            <div class="zh-report-side-card red">
              <span>澳洲服務線</span>
              <strong>Credit / RPL readiness</strong>
              <p>以申請前材料準備、資格解讀、路線比較和院校溝通問題清單為主。</p>
            </div>
            <div class="zh-report-side-card">
              <span>專業邊界</span>
              <p>錄取、credit、RPL、skills assessment、professional registration 或 migration outcomes 由相應機構決定。</p>
            </div>
          </aside>
        </div>

        <h2>來源鏈接</h2>
        <ul class="report-source-list">
          <li><a href="https://othm.org.uk/quality-standards" target="_blank" rel="noopener">OTHM Quality, Standards & Recognitions</a></li>
          <li><a href="https://othm.org.uk/university-progression" target="_blank" rel="noopener">OTHM University Progressions</a></li>
          <li><a href="https://othm.org.uk/qualification/othm-level-5-diploma-in-business-management" target="_blank" rel="noopener">OTHM Level 5 Diploma in Business Management</a></li>
          <li><a href="https://www.aqf.edu.au/about/what-aqf" target="_blank" rel="noopener">AQF: What is the AQF</a></li>
          <li><a href="https://www.aqf.edu.au/framework/aqf-qualifications" target="_blank" rel="noopener">AQF Qualifications</a></li>
          <li><a href="https://www.teqsa.gov.au/how-we-regulate/acts-and-standards/australian-qualifications-framework" target="_blank" rel="noopener">TEQSA AQF overview</a></li>
          <li><a href="https://www.uts.edu.au/for-students/admissions-entry/recognition-of-prior-learning" target="_blank" rel="noopener">UTS Recognition of Prior Learning</a></li>
          <li><a href="https://www.curtin.edu.au/study/applying/credit-recognised-learning/apply/" target="_blank" rel="noopener">Curtin Credit for Recognised Learning</a></li>
          <li><a href="https://policies.uq.edu.au/document/view-current.php?id=217&version=3" target="_blank" rel="noopener">UQ Credit and Recognition of Prior Learning Procedure</a></li>
        </ul>

        <div class="programme-actions">
          <a class="btn btn-dark" href="/reports/othm-australia-expansion/">English report</a>
          <a class="btn btn-light" href="/australia-office-presence/">返回澳洲路線</a>
        </div>
      </article>
    </section>
  `
});

const consultationChat = pageShell({
  title: "Consultation AI | OTC Study Hub",
  current: "resources",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Education Consulting</div><h1>Consultation AI</h1><p>Instant first-response guidance for English-taught study routes, transfers, progression, academic guardianship and complex education cases.</p></div></section>
    <section class="band two-col">
      <div>
        <div class="chat-app" data-chat-app>
          <div class="chat-window" data-chat-window>
            <div class="chat-message bot">
              <strong>OTC Consultation AI</strong>
              <p>Hello. Tell me your target country, current education level, intended subject, deadline and any difficulty such as transfer, refusal, appeal, weak transcript or guardianship need.</p>
              <p class="zh">你好。請說明目標國家、目前學歷、目標專業、時間要求，以及是否涉及轉學、拒錄、申訴、成績較弱或學術監護等情況。</p>
            </div>
          </div>
          <div class="quick-prompts">
            <button type="button" data-prompt="I want to transfer university and need advice on credits and progression.">Transfer</button>
            <button type="button" data-prompt="I need help choosing an English-taught university pathway.">Pathway</button>
            <button type="button" data-prompt="I have an appeal or complaint issue with my school or university.">Appeal</button>
            <button type="button" data-prompt="I need academic guardianship or ongoing study monitoring.">Guardianship</button>
          </div>
          <form class="chat-form" data-chat-form>
            <textarea name="message" rows="3" placeholder="Type your question / 輸入你的問題"></textarea>
            <button class="btn btn-dark" type="submit">Send</button>
          </form>
        </div>
      </div>
      <aside class="about-panel">
        <h3>What this AI can do</h3>
        <ul>
          <li>Identify whether a case is ordinary planning or complex advisory.</li>
          <li>Suggest documents needed for first review.</li>
          <li>Explain when paid consulting may apply.</li>
          <li>Direct learners to courses, apps or human consultation.</li>
        </ul>
        <p class="notice">This is an instant guidance tool, not legal, visa, immigration, financial or guaranteed-admission advice. Immigration-related matters are signposted to Citizens Advice or another appropriately authorised adviser.</p>
      </aside>
    </section>
    <script>
      const chatWindow = document.querySelector("[data-chat-window]");
      const chatForm = document.querySelector("[data-chat-form]");
      const prompts = document.querySelectorAll("[data-prompt]");

      function escapeHtml(text) {
        return text.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
      }

      function addMessage(role, html) {
        const node = document.createElement("div");
        node.className = "chat-message " + role;
        node.innerHTML = html;
        chatWindow.appendChild(node);
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }

      function buildReply(raw) {
        const text = raw.toLowerCase();
        const isOuTutoring = /open university|\\bou\\b|tma|ou support|ou tutoring|the open university/.test(text);
        const isBtecTutoring = /btec|pearson|assignment criteria|merit|distinction|hnc|hnd|higher national/.test(text);
        const isUniversityModuleTutoring = /university module|module support|current university|coursework|dissertation|thesis|project support|exam question bank|courseware|lecture slides|module handbook|undergraduate|master|doctoral|phd|ph\\.d/.test(text);
        const flags = {
          transfer: /transfer|credit|top.?up|轉學|轉學分|銜接|升學|插班/.test(text),
          appeal: /appeal|complaint|misconduct|failed|resit|申訴|投訴|掛科|補考|學術不端/.test(text),
          guardian: /guardian|guardianship|parent|monitor|未成年|監護|家長|跟進/.test(text),
          english: /english|ielts|ucbelt|speaking|language|英文|雅思|口語/.test(text),
          visa: /visa|immigration|brp|ukvi|簽證|移民/.test(text),
          school: /school|college|university|中學|大學|學院/.test(text)
        };

        const docs = [
          "passport name and contact details",
          "current school / college / university",
          "transcripts and certificates",
          "target country, institution and subject",
          "deadline and preferred intake"
        ];

        let title = "Suggested first step: route assessment";
        let advice = "This looks like a general education-planning enquiry. OTC can compare suitable English-taught routes, explain likely entry expectations and prepare a document checklist.";
        let zh = "這看起來屬於一般教育路徑規劃。OTC 可以協助比較英文授課路徑、說明入學要求方向，並整理材料清單。";

        if (flags.transfer) {
          title = "Suggested first step: transfer / progression review";
          advice = "We should review your completed credits, transcripts, module titles and target entry level before suggesting top-up, transfer or pathway options.";
          zh = "建議先做轉學 / 升學銜接評估：需要查看已修學分、成績單、單元名稱與目標入讀級別，再判斷 top-up、轉學或 pathway 選項。";
          docs.push("module descriptions or syllabus", "previous offer letters if any");
        }
        if (flags.appeal) {
          title = "Suggested first step: complex case advisory";
          advice = "Appeals, complaints, academic failure and misconduct issues require careful evidence review. This may be a paid consulting case because wording, deadlines and institutional procedures matter.";
          zh = "申訴、投訴、掛科或學術不端問題需要仔細審核證據、期限與院校程序，通常可能屬於收費複雜案例。";
          docs.push("decision letter", "appeal deadline", "school policy or procedure", "evidence timeline");
        }
        if (flags.guardian) {
          title = "Suggested first step: guardianship / ongoing monitoring plan";
          advice = "For guardianship or ongoing support, OTC should confirm learner age, institution, parent expectations, communication frequency and escalation needs.";
          zh = "如涉及學術監護或持續跟進，需要確認學生年齡、就讀機構、家長期望、溝通頻率與問題升級機制。";
          docs.push("student age", "parent contact", "school contact", "monitoring expectations");
        }
        if (isOuTutoring) {
          title = "Suggested first step: OU tutoring suitability check";
          advice = "For an Open University tutoring enquiry, OTC should first confirm your exact OU qualification or module, current study stage, TMA or EMA deadline, tutor feedback and the kind of support needed. Support can cover concept explanation, reading notes, TMA planning, academic English and independent study routines.";
          zh = "如屬 Open University 輔導諮詢，建議先確認具體 OU 資格或 module、目前學習階段、TMA/EMA 截止日期、已有 tutor feedback 以及需要的支持類型。OTC 可支持概念講解、閱讀筆記、TMA 規劃、學術英語與獨立學習節奏。";
          docs.push("OU qualification or module page", "TMA / EMA brief", "OU tutor feedback if available", "current week or block", "support sessions requested");
        }
        if (isBtecTutoring) {
          title = "Suggested first step: BTEC / Pearson tutoring suitability check";
          advice = "For a BTEC or Pearson tutoring enquiry, OTC should first confirm the exact qualification, unit title, level, assignment brief, pass/merit/distinction criteria, deadline and feedback status. Support can cover unit reading, evidence planning, report structure, portfolio organisation, academic English and feedback literacy.";
          zh = "如屬 BTEC / Pearson 輔導諮詢，建議先確認具體 qualification、unit title、level、assignment brief、pass/merit/distinction criteria、截止日期與 feedback 狀態。OTC 可支持單元閱讀、evidence 規劃、報告結構、portfolio 整理、學術英語與 feedback 理解。";
          docs.push("Pearson qualification or unit page", "assignment brief", "pass/merit/distinction criteria", "teacher feedback if available", "deadline and resubmission rules");
        }
        if (isUniversityModuleTutoring) {
          title = "Suggested first step: university module support scoping";
          advice = "For university module support, OTC should first confirm the student's university, programme, module code/title, level, syllabus, assessment brief, reading list, lecture topics, exam format and whether the need is tutoring, revision-bank building, coursework planning or dissertation/project support.";
          zh = "如屬大學單元輔導，建議先確認學生所在大學、programme、module code/title、level、syllabus、assessment brief、reading list、lecture topics、考試形式，以及需求屬於概念輔導、題庫複習、coursework 規劃還是 dissertation/project 支持。";
          docs.push("university name and programme title", "module code and title", "module handbook or syllabus", "lecture slides or weekly topics", "reading list", "assessment brief and marking rubric", "exam scope or permitted past-paper material", "dissertation / project brief or supervisor feedback");
        }
        if (flags.english) {
          docs.push("current English level", "target test or university language requirement");
        }

        const visaNote = flags.visa ? "<p><strong>Important:</strong> OTC does not provide immigration advice. For immigration-related matters, use Citizens Advice for free and confidential advice, or an appropriately authorised adviser for specialist regulated support.</p><p><a href='https://www.citizensadvice.org.uk/immigration/get-help/get-immigration-advice/'>Open Citizens Advice</a> · <a href='mailto:office@overseasuk.com?subject=Citizens%20Advice%20Signposting%20Enquiry'>Enquiries</a></p>" : "";

        return \`
          <strong>\${title}</strong>
          <p>\${advice}</p>
          <p class="zh">\${zh}</p>
          \${visaNote}
          <p><strong>Prepare for human review:</strong> \${docs.slice(0, 8).join("; ")}.</p>
          <p><strong>Next:</strong> email <a href="mailto:office@overseasuk.com">office@overseasuk.com</a>, WeChat <strong>overseasus</strong>, or WhatsApp <a href="https://wa.me/447947991572">+44 7947 991572</a>.</p>
        \`;
      }

      function submitMessage(text) {
        if (!text.trim()) return;
        addMessage("user", "<p>" + escapeHtml(text) + "</p>");
        setTimeout(() => addMessage("bot", buildReply(text)), 160);
      }

      chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const textarea = chatForm.elements.message;
        submitMessage(textarea.value);
        textarea.value = "";
      });

      prompts.forEach((button) => button.addEventListener("click", () => submitMessage(button.dataset.prompt)));

      const params = new URLSearchParams(window.location.search);
      if (params.get("source") === "ou" || params.get("source") === "btec" || params.get("source") === "university-module") {
        const isBtecSource = params.get("source") === "btec";
        const isUniversityModuleSource = params.get("source") === "university-module";
        const course = params.get("course") || (isUniversityModuleSource ? "University module route" : isBtecSource ? "BTEC / Pearson course" : "Open University course");
        const code = params.get("code") || "";
        const subject = params.get("subject") || "";
        const level = params.get("level") || "";
        const support = params.get("support") || "";
        const prompt = [
          isUniversityModuleSource ? "University module tutoring enquiry" : isBtecSource ? "BTEC / Pearson tutoring enquiry" : "Open University tutoring enquiry",
          (isUniversityModuleSource ? "Route: " : "Course: ") + course,
          code ? "Code/listing: " + code : "",
          subject ? "Subject area: " + subject : "",
          level ? "Level/size: " + level : "",
          support ? "Support requested: " + support : "",
          "Please tell me what documents to prepare, what OTC can support, and whether this is tutoring or consulting."
        ].filter(Boolean).join("\\n");
        submitMessage(prompt);
      }
    </script>
  `
});

const search = pageShell({
  title: "Search | OTC Study Hub",
  current: "search",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Site Search</div><h1>Search OTC Study Hub</h1><p>Search courses, OTHM qualification titles, publishing products, apps, consulting services and study-guide records.</p></div></section>
    <section class="band">
      <div class="search-app" data-search-app>
        <label class="search-box">
          <span>Search keyword</span>
          <input type="search" data-search-input placeholder="Try: Level 8, Business Management, appeal, UCBELT, CSCS, Marketing..." autofocus>
        </label>
        <div class="search-meta" data-search-meta></div>
        <div class="search-results" data-search-results></div>
      </div>
    </section>
    <script type="application/json" id="search-data">${JSON.stringify(searchItems()).replace(/</g, "\\u003c")}</script>
    <script>
      const input = document.querySelector("[data-search-input]");
      const results = document.querySelector("[data-search-results]");
      const meta = document.querySelector("[data-search-meta]");
      const data = JSON.parse(document.getElementById("search-data").textContent);

      function render(items, query = "") {
        meta.textContent = query ? items.length + " result(s) for \"" + query + "\"" : data.length + " searchable records";
        results.innerHTML = items.slice(0, 80).map((item) => \`
          <a class="search-result" href="\${item.url}">
            <span>\${item.type}</span>
            <strong>\${item.title}</strong>
            <p>\${item.desc}</p>
          </a>
        \`).join("");
      }

      function doSearch() {
        const query = input.value.trim().toLowerCase();
        if (!query) {
          render(data.slice(0, 18), "");
          return;
        }
        const terms = query.split(/\\s+/).filter(Boolean);
        const filtered = data.filter((item) => {
          const haystack = (item.type + " " + item.title + " " + item.desc).toLowerCase();
          return terms.every((term) => haystack.includes(term));
        });
        render(filtered, input.value.trim());
      }

      input.addEventListener("input", doSearch);
      doSearch();
    </script>
  `
});

const about = pageShell({
  title: "About | OTC Study Hub",
  current: "about",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">About the Organisation</div><h1>Overseas Tutorial Centre</h1><p>A multi-function education, tutorial and publishing ecosystem serving learners, families and overseas Chinese communities.</p></div></section>
    <section class="band">
      <div class="business-portfolio-copy">
        <div class="eyebrow">Business Portfolio</div>
        <h2>OTC operates as an education, services, publishing and digital-learning portfolio.</h2>
        <p>Overseas Tutorial Centre connects advisory work, institutional services, course support, publishing products and learning technology under one operating structure. Each business area has its own public entrance, so students, families, institutions and professional partners can move directly to the service line that matches their need.</p>
      </div>
      <div style="height:18px"></div>
      <div class="feature-grid about-business-grid">
        <a class="feature" href="/resources/"><div class="num">Consulting</div><h3>Education Consulting</h3><p>Pathway planning, complex case review, transfer guidance and practical student support.</p><span>Open consulting</span></a>
        <a class="feature" href="/services/"><div class="num">Services</div><h3>Institutional Services</h3><p>Translation, publishing, guardianship, events, accreditation and professional service packages.</p><span>Open services</span></a>
        <a class="feature" href="/courses/"><div class="num">Courses</div><h3>Course & Tutorial Support</h3><p>International curriculum tutoring, OTHM routes, external programme support and academic tutoring.</p><span>Open courses</span></a>
        <a class="feature" href="/apps/"><div class="num">Tools</div><h3>Learning Apps & Tools</h3><p>Speaking practice, placement preparation, mock tests, quiz systems and digital learning utilities.</p><span>Open tools</span></a>
        <a class="feature" href="/publishing/"><div class="num">Publishing</div><h3>Overseas Publishing House</h3><p>Bilingual digital books, study guides, practical resources and public bookshop editions.</p><span>Open publishing</span></a>
        <a class="feature" href="/insights/"><div class="num">導報</div><h3>Overseas Study Review</h3><p>留學導報：publishing-grade study-abroad briefings, pathway notes and bilingual public education commentary.</p><span>Open review</span></a>
        <a class="feature" href="/university-applications/"><div class="num">Applications</div><h3>University Applications</h3><p>Country, institution, school and programme-based application screening.</p><span>Open applications</span></a>
        <a class="feature" href="/australia-business-landing/"><div class="num">Australia</div><h3>Australia Market Support</h3><p>Education market entry, local coordination and institutional development support.</p><span>Open Australia support</span></a>
      </div>
      <div style="height:24px"></div>
      <div class="office-notice">
        <div>
          <div class="eyebrow">Sydney Office Notice</div>
          <h2>OTC is establishing an Australian office presence.</h2>
          <p>Overseas Tutorial Centre Ltd is building a practical Australia-facing operating route from NSW: student advisory intake, university application coordination, education-market liaison, publishing and training support, and professional referral where regulated advice is required.</p>
          <a class="office-window-link" href="/australia-office-presence/">Open Australia office route</a>
        </div>
        <div class="office-notice-details">
          <p><strong>Overseas Tutorial Centre Ltd</strong><br>45 Evans St, Balmain, NSW 2041, Australia</p>
          <p>Australian contact: <a href="mailto:x.yan@overseasuk.com">x.yan@overseasuk.com</a><br>UK main telephone / WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
          <div class="office-status">
            <span>Current status</span>
            <strong>Establishing presence</strong>
            <p>Education coordination and market-entry support are being developed first. Regulated Australian legal, migration, tax, financial and accreditation advice remains outside OTC's direct scope.</p>
          </div>
          <div class="office-status office-status-milestones">
            <span>Centre updates</span>
            <strong>May 2026 centre status and Australia office notices</strong>
            <p>OTC's OTHM approved centre record has been renewed to 30 June 2031, and Georgie Barnes has been appointed Executive Director, OTC Australia.</p>
            <a href="/australia-office-presence/#centre-updates">Open centre updates</a>
          </div>
        </div>
      </div>
      <div style="height:24px"></div>
      <div class="about-panel">
        <h3>Contact</h3>
        <p><strong>Overseas Tutorial Centre (OTC)</strong></p>
        <p>3/F Overseas Education, 207 Regent Street, London W1B 3HH</p>
        <p>Email: <a href="mailto:office@overseasuk.com">office@overseasuk.com</a><br>WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a><br>WeChat: <strong>overseasus</strong><br>Website: <a href="https://overseasuk.com">https://overseasuk.com</a></p>
      </div>
    </section>
  `
});

const lmsReview = pageShell({
  title: "OTC LMS Review View | OTHM Centre Renewal Evidence",
  current: "",
  body: `
    <section class="lms-shell">
      <aside class="lms-sidebar">
        <a class="lms-brand" href="/">
          <span class="brand-mark"><span></span></span>
          <strong>OTC LMS</strong>
          <small>Reviewer evidence view</small>
        </a>
        <nav class="lms-menu" aria-label="LMS evidence sections">
          <a href="#dashboard" aria-current="page">Dashboard</a>
          <a href="#materials">Teaching Materials</a>
          <a href="#briefs">Assignment Briefs</a>
          <a href="#upload">Submission Upload</a>
          <a href="#feedback">Tutor Feedback</a>
          <a href="#progress">Progress Tracking</a>
          <a href="#support">Support & Policies</a>
          <a href="/lms-review/wang-zhuoying-summer-2026/">Wang Zhuoying summer guide</a>
        </nav>
        <div class="lms-reviewer-card">
          <span>Review account</span>
          <strong>OTHM Centre Renewal 2026</strong>
          <p>Demonstration view prepared to evidence learner-facing LMS structure and support arrangements.</p>
        </div>
      </aside>

      <main class="lms-main">
        <section id="dashboard" class="lms-topbar">
          <div>
            <div class="eyebrow">Learning Management System</div>
            <h1>OTHM Level 5 Diploma in Business Management</h1>
            <p>Sample learner dashboard showing how OTC organises online learning, assessment access, feedback and learner progress tracking.</p>
          </div>
          <div class="lms-profile">
            <span>Student view</span>
            <strong>Reviewer Learner</strong>
            <small>Centre No. DC11060519</small>
          </div>
        </section>

        <section class="lms-status-grid" aria-label="Course status summary">
          <article><span>Course access</span><strong>Active</strong><small>6 units visible</small></article>
          <article><span>Overall progress</span><strong>62%</strong><small>Learning activities completed</small></article>
          <article><span>Submissions</span><strong>3 / 6</strong><small>Uploaded to assessment area</small></article>
          <article><span>Tutor response</span><strong>2 working days</strong><small>Standard support timeframe</small></article>
        </section>

        <section id="materials" class="lms-panel">
          <div class="lms-panel-head">
            <div>
              <span class="lms-tag">Requested evidence 1</span>
              <h2>Where learners access teaching material</h2>
            </div>
            <button type="button">Open unit resources</button>
          </div>
          <div class="lms-unit-grid">
            <article>
              <b>F/650/1150</b>
              <strong>Principles and Concepts of Strategy</strong>
              <span>Slides · reading pack · recorded tutorial · unit checklist</span>
            </article>
            <article>
              <b>H/650/1151</b>
              <strong>The Management of Human Resources</strong>
              <span>Lesson notes · case study · glossary · webinar link</span>
            </article>
            <article>
              <b>J/650/1152</b>
              <strong>Marketing for Managers</strong>
              <span>Topic workbook · activity sheet · formative quiz</span>
            </article>
          </div>
        </section>

        <section id="briefs" class="lms-panel">
          <div class="lms-panel-head">
            <div>
              <span class="lms-tag">Requested evidence 2</span>
              <h2>How learners access assignment briefs</h2>
            </div>
            <button type="button">Download brief</button>
          </div>
          <div class="lms-table" role="table" aria-label="Assignment briefs">
            <div role="row" class="lms-table-head"><span>Unit</span><span>Brief</span><span>Status</span><span>Due date</span></div>
            <div role="row"><span>Strategy</span><span>Assignment Brief and Learning Outcomes</span><span>Available</span><span>12 Jun 2026</span></div>
            <div role="row"><span>HRM</span><span>Assessment Guidance and Evidence Checklist</span><span>Available</span><span>19 Jun 2026</span></div>
            <div role="row"><span>Marketing</span><span>Assignment Brief, Referencing and Submission Rules</span><span>Available</span><span>26 Jun 2026</span></div>
          </div>
        </section>

        <section id="upload" class="lms-panel lms-split-panel">
          <div>
            <span class="lms-tag">Requested evidence 3</span>
            <h2>Where learners upload completed assignments</h2>
            <p>Learners upload completed work in the assessment area for the relevant unit. The LMS records submission date, file name and current assessment status.</p>
            <div class="lms-upload-box">
              <strong>Upload assignment file</strong>
              <span>Accepted formats: DOCX, PDF · Maximum 50 MB</span>
              <button type="button">Choose file</button>
            </div>
          </div>
          <aside class="lms-note">
            <strong>Submission controls</strong>
            <p>Academic integrity declaration, assignment cover sheet and file naming guidance are shown before upload.</p>
          </aside>
        </section>

        <section id="feedback" class="lms-panel">
          <div class="lms-panel-head">
            <div>
              <span class="lms-tag">Requested evidence 4</span>
              <h2>How learners receive feedback from tutors</h2>
            </div>
            <button type="button">View feedback</button>
          </div>
          <div class="lms-feedback-card">
            <div>
              <span>Assessor feedback</span>
              <strong>Marketing for Managers - Draft Review</strong>
              <p>Your structure is clear. Before final submission, strengthen the link between segmentation evidence and the proposed marketing mix. Add Harvard references to two source claims.</p>
            </div>
            <div class="lms-feedback-meta">
              <span>Returned</span>
              <strong>15 May 2026</strong>
              <small>Tutor: Li Baiyang</small>
            </div>
          </div>
        </section>

        <section id="progress" class="lms-panel">
          <div class="lms-panel-head">
            <div>
              <span class="lms-tag">Requested evidence 5</span>
              <h2>How learners keep track of progress</h2>
            </div>
            <button type="button">Progress report</button>
          </div>
          <div class="lms-progress-list">
            <div><span>Strategy learning materials</span><b style="width: 88%"></b><em>88%</em></div>
            <div><span>HRM assessment preparation</span><b style="width: 72%"></b><em>72%</em></div>
            <div><span>Marketing assignment submission</span><b style="width: 55%"></b><em>55%</em></div>
            <div><span>Business Law reading and quiz</span><b style="width: 40%"></b><em>40%</em></div>
          </div>
        </section>

        <section id="support" class="lms-panel">
          <div class="lms-panel-head">
            <div>
              <span class="lms-tag">Additional key information</span>
              <h2>Technical support, learner support and policies</h2>
            </div>
            <button type="button">Contact tutor</button>
          </div>
          <div class="lms-support-grid">
            <article><strong>Technical support</strong><span>Email office@overseasuk.com for login, browser or submission issues. Urgent assessment access issues are prioritised.</span></article>
            <article><strong>Academic support</strong><span>Named tutors respond to learner queries normally within two working days.</span></article>
            <article><strong>Policies</strong><span>Complaints, appeals, malpractice, reasonable adjustment, RPL and data protection policies are available from the learner support area.</span></article>
          </div>
        </section>

        <section class="lms-disclaimer">
          <strong>Reviewer note</strong>
          <p>This page is an evidence walkthrough view for OTHM Centre Renewal review. It demonstrates the learner-facing information architecture OTC uses for LMS access, online learning support, assessment submission, tutor feedback and progress monitoring. Live learner records are not displayed in this public evidence view.</p>
        </section>
      </main>
    </section>
  `
});

const wangZhuoyingSummerGuide = pageShell({
  title: "Wang Zhuoying Summer 2026 Guide | OTC LMS",
  current: "",
  body: `
    <section class="family-guide-hero">
      <div class="family-guide-inner">
        <div>
          <div class="eyebrow">OTC LMS · Family Route Marker</div>
          <h1>Wang Zhuoying 2026 Summer</h1>
          <p>最重要的是顺序：先 IH 英语课，再 InvestIN 艺术设计。下面这张路线图就是给家人看的第一眼指路标。</p>
          <div class="family-guide-actions">
            <a class="btn btn-primary" href="#summary">核心信息表</a>
            <a class="btn btn-secondary" href="#details">课程详情</a>
          </div>
        </div>
      </div>
    </section>

    <main class="family-guide">
      <section id="summary" class="guide-section guide-summary-section">
        <div class="guide-summary-head">
          <div>
            <div class="eyebrow">一眼看懂</div>
            <h2>最重要顺序</h2>
          </div>
          <strong>学生：Wang Zhuoying</strong>
        </div>
        <div class="route-chart" aria-label="Programme order chart">
          <article class="route-stop">
            <span class="route-number">1</span>
            <h3>IH 英语课</h3>
            <p>General English · Ref ST-403311</p>
            <dl class="route-stop-facts">
              <div><dt>时间</dt><dd>13-24 July 2026</dd></div>
              <div><dt>机构</dt><dd>IH London</dd></div>
              <div><dt>地址</dt><dd>16 Stukeley Street, London WC2B 5LQ</dd></div>
              <div><dt>联系人</dt><dd>Marcin Gwiazda<br>info@ihlondon.com</dd></div>
            </dl>
          </article>
          <div class="route-arrow" aria-hidden="true">
            <span></span>
          </div>
          <article class="route-stop route-stop-accent">
            <span class="route-number">2</span>
            <h3>InvestIN 艺术设计</h3>
            <p>The Young Art & Design Summer Experience</p>
            <dl class="route-stop-facts">
              <div><dt>时间</dt><dd>27 July - 7 August 2026</dd></div>
              <div><dt>机构</dt><dd>InvestIN Education</dd></div>
              <div><dt>地址</dt><dd>Dukes House, 58 Buckingham Gate</dd></div>
              <div><dt>联系人</dt><dd>Student Admissions Team<br>info@investin.org</dd></div>
            </dl>
          </article>
        </div>
        <div class="document-links" aria-label="Drive document links">
          <a class="document-link-card" href="https://docs.google.com/document/d/1cgy_y1EkjKRZj2dLLsugEofNN-Gov9dXJSW8oJt-Xsc/edit?usp=drivesdk" target="_blank" rel="noopener">
            <span class="doc-tag">IH 文件</span>
            <strong>GE Confirmation Letter</strong>
            <em>ST-403311 · 13-24 July 2026</em>
          </a>
          <a class="document-link-card" href="https://docs.google.com/document/d/11KoJsRH4oRKBcU1ffQQaXVEgtnVQCq-pH159RBjXcUk/edit?usp=drivesdk" target="_blank" rel="noopener">
            <span class="doc-tag">InvestIN 文件</span>
            <strong>Course Acceptance / VISA Support Letter</strong>
            <em>27 July - 7 August 2026</em>
          </a>
        </div>
      </section>

      <section id="details" class="guide-section compact-details">
        <div class="section-head compact-head">
          <div class="eyebrow">展开详情</div>
          <h2>两段课程分别做什么</h2>
        </div>
        <article class="compact-programme">
          <div class="programme-date">13 Jul - 24 Jul</div>
          <div>
            <h3>IH London · General English</h3>
            <p>英语学习课程。邮件附件名显示 Visa Letter (Visitor) Payment Received 13 Jul 26 to 24 Jul 26 和 GE Confirmation Letter 13 Jul 26 to 24 Jul 26。</p>
            <div class="mini-facts">
              <span>目的：适应伦敦 + 提升英语</span>
              <span>地点：Covent Garden 附近</span>
              <span>Reference: ST-403311</span>
            </div>
          </div>
        </article>
        <article class="compact-programme">
          <div class="programme-date">27 Jul - 7 Aug</div>
          <div>
            <h3>InvestIN · Young Art & Design Summer Experience</h3>
            <p>艺术与设计职业体验项目。InvestIN VISA Support Letter 写明课程日期为 27 July 2026 - 7 August 2026，地址为 Dukes House, 58 Buckingham Gate, London SW1E 6AJ。住宿/接待期按 Notion 住宿确认信到 10 August 2026。</p>
            <div class="mini-facts">
              <span>内容：职业模拟 / 作品集 / 参访</span>
              <span>地点：Dukes House, 58 Buckingham Gate</span>
              <span>联系：info@investin.org</span>
            </div>
          </div>
        </article>
      </section>

      <section class="guide-section compare-section">
        <div class="section-head compact-head">
          <div class="eyebrow">Contacts</div>
          <h2>人物 / 联络人对照表</h2>
          <p>先找对应角色，再看应该联系谁。住宿/监护信息统一放在页面末尾。</p>
        </div>
        <div class="contact-compare-table" role="table" aria-label="People and contact comparison">
          <div class="compare-row compare-head" role="row">
            <span>角色</span><span>姓名 / 机构</span><span>电邮 / 电话</span><span>地址 / 备注</span>
          </div>
          <div class="compare-row" role="row">
            <span>学生</span><span><strong>Wang Zhuoying</strong><em>英文文件也写作 Zhuoying Wang</em></span><span>学生邮箱：见转发邮件收件人</span><span>两段课程学生本人</span>
          </div>
          <div class="compare-row" role="row">
            <span>OTC 协调</span><span><strong>Maria Xiao / Overseas Office</strong></span><span>office@overseasuk.com<br>+44 20 7935 3623<br>WhatsApp +44 7947 991572</span><span>转发确认信、签证信，协调日期；OTC 地址 207 Regent Street, London W1B 3HH</span>
          </div>
          <div class="compare-row" role="row">
            <span>IH London</span><span><strong>Marcin Gwiazda</strong><em>Customer Experience Executive</em></span><span>info@ihlondon.com<br>+44 (0) 20 7611 2400</span><span>16 Stukeley Street, Covent Garden, London WC2B 5LQ</span>
          </div>
          <div class="compare-row" role="row">
            <span>IH Asia 跟进</span><span><strong>Jo Chang</strong></span><span>jo.chang@ihlondon.com</span><span>OTC 催确认日期邮件中提到：如需 Asia team 处理，可转给 Jo Chang</span>
          </div>
          <div class="compare-row" role="row">
            <span>InvestIN</span><span><strong>InvestIN Student Admissions Team</strong></span><span>info@investin.org<br>+44 (0) 203 488 5089</span><span>InvestIN Education, 58 Buckingham Gate, London SW1E 6AJ</span>
          </div>
        </div>
      </section>

      <section class="guide-section compare-section">
        <div class="section-head compact-head">
          <div class="eyebrow">Activities</div>
          <h2>活动安排对比表</h2>
        </div>
        <div class="activity-compare-table" role="table" aria-label="IH and InvestIN activity comparison">
          <div class="compare-row compare-head" role="row">
            <span>项目</span><span>IH London 英语课</span><span>InvestIN 艺术设计夏令营</span>
          </div>
          <div class="compare-row" role="row">
            <span>时间</span><span>13 July - 24 July 2026</span><span>课程 27 July - 7 August 2026；住宿/接待到 10 August 2026</span>
          </div>
          <div class="compare-row" role="row">
            <span>每天做什么</span><span>General English，通常周一至周五上课；具体课时强度以 GE Confirmation Letter 为准。</span><span>艺术设计职业模拟、专业人士指导、作品集练习、画廊或行业地点参访、结业展示。</span>
          </div>
          <div class="compare-row" role="row">
            <span>重点</span><span>适应伦敦、提高英语、熟悉独立上课节奏。</span><span>了解艺术设计职业路径，准备作品集思路，体验行业项目。</span>
          </div>
          <div class="compare-row" role="row">
            <span>家人怎么理解</span><span>第一段：英语课。</span><span>第二段：艺术设计职业体验夏令营。</span>
          </div>
        </div>
      </section>

      <section class="guide-section check-panel">
        <div>
          <div class="eyebrow">Before Travel</div>
          <h2>最后核对清单</h2>
          <p>两份邮件附件已整理成 Drive 文件入口。PDF 原件仍在 Gmail 附件中，Drive 文件用于家人快速阅读。</p>
        </div>
        <ol>
          <li>IH GE Confirmation Letter：English 25，13 July - 24 July 2026，Reference ST-403311。</li>
          <li>InvestIN VISA Support Letter：课程 27 July - 7 August 2026；住宿/接待另按 Notion 信到 10 August 2026。</li>
          <li>住宿/监护信息已按 Notion 住宿确认信写入：魏湘宜，Vauxhall 地址，电话和电邮。</li>
          <li>给签证代办时仍应转发原始邮件和 PDF 原附件；给家人看网页和 Drive 文件即可。</li>
        </ol>
      </section>

      <section class="guide-section accommodation-panel">
        <div>
          <div class="eyebrow">Accommodation</div>
          <h2>住宿 / 监护</h2>
        </div>
        <div class="accommodation-card">
          <strong>魏湘宜 Wei Xiangyi</strong>
          <span>表姐 / 住宿及生活照顾</span>
          <span>13 July - 10 August 2026</span>
          <span>Flat 802D, 5 Miles Street, Vauxhall</span>
          <span>+44 7352 186806</span>
          <span>lisawei2023@gmail.com</span>
        </div>
      </section>

      <section class="guide-section source-panel">
        <h2>信息来源</h2>
        <p>Gmail: InvestIN registration email, InvestIN VISA Support Letter emails, IH London enrolment email REF ST-403311, OTC follow-up email about revised IH dates.</p>
        <p>Official web cross-check: InvestIN Young Art & Design Summer Experience page and IH London General English / contact pages checked on 16 May 2026.</p>
      </section>
    </main>
  `
});

write(".", home);
write("publishing", publishing);
write("publishing/media", publishingMedia);
write("publishing/ebook-publishing-support", ebookPublishingSupport);
write("publishing/othm-health-social-care-bilingual-series", othmHealthSocialCareBilingualSeries);
write("study-guides", guides);
write("courses", courses);
write("services", services);
serviceProducts.forEach((service) => {
  write(`services/${service.slug}`, serviceDetailPage(service));
});
write("university-applications", universityApplications);
write("insights/credit-alliance", creditAlliance);
write("study-group-2026-applications", studyGroup2026Applications);
write("application-service-standards", applicationServiceStandards);
write("advanced-entry-china-programmes", advancedEntryChinaProgrammes);
write("university-partnerships", universityPartnerships);
regionalOfficePages.forEach((office) => {
  write(`offices/${office.id}`, office.html);
});
countryGatewayData.filter((country) => country.slug !== "australia").forEach((country) => {
  write(`countries/${country.slug}`, countryGatewayPage(country));
});
write("zh", chineseEntrance);
write("zh/study-group-2026-applications", studyGroup2026ApplicationsZh);
write("international-curriculum-tutoring", internationalCurriculumTutoring);
write("othm-qualifications", othmQualifications);
write("external-programme-support", externalProgrammeSupport);
externalProgrammeRoutes.forEach((route) => {
  write(`external-programme-support/${route.id}`, externalProgrammeDetailPage(route));
});
write("academic-tutoring", academicTutoring);
write("guidance-progression", guidanceProgression);
write("othm-level-5-business-management", othm);
write("apps", apps);
write("apps/ucbelt-speaking", ucbelt);
write("apps/australian-citizenship-test", australianCitizenshipTest);
write("resources", resources);
write("australia-business-landing", australiaBusinessLanding);
write("australia", australiaPathwaysLanding);
write("australia-office-presence", australiaOfficePresence);
write("zh/australia-office-presence", australiaOfficePresenceZh);
write("australia-universities/charles-darwin-university", charlesDarwinUniversityProfile);
write("zh/australia-universities/charles-darwin-university", charlesDarwinUniversityProfileZh);
write("australia-schools/lindisfarne-anglican-grammar-school", lindisfarneSchoolReview);
write("australia-schools/plc-pathways", plcPathwaysReview);
write("australia-schools/macarthur-anglican-school", macarthurAnglicanReview);
write("australia-schools/the-illawarra-grammar-school", illawarraGrammarReview);
write("australia-schools/rockhampton-grammar-school", rockhamptonGrammarReview);
write("australia-schools/moreton-bay-colleges", moretonBayCollegesReview);
write("australia-vet-tafe-pathways", australiaVetTafePathways);
write("zh/australia-vet-tafe-pathways", zhAustraliaVetTafeHub);
write("zh/australia-vet-tafe-pathways/health-community", zhAustraliaVetHealthCommunity);
write("zh/australia-vet-tafe-pathways/trades-construction", zhAustraliaVetTradesConstruction);
write("zh/australia-vet-tafe-pathways/business-it-creative", zhAustraliaVetBusinessItCreative);
write("zh/australia-vet-tafe-pathways/provider-checklist", zhAustraliaVetProviderChecklist);
write("zh/australia-vet-tafe-pathways/tafe-to-university", zhAustraliaVetTafeToUniversity);
write("zh/australia-vet-tafe-pathways/evidence-pack", zhAustraliaVetEvidencePack);
write("ai-education-operations", aiEducationOperations);
write("reports/othm-australia-expansion", othmAustraliaExpansionReport);
write("zh/reports/othm-australia-expansion", othmAustraliaExpansionReportZh);
write("consultation-chat", consultationChat);
write("insights", insights);
write("zh/insights", zhInsights);
insightsArticles.forEach((article) => {
  write(`insights/${article.slug}`, insightArticlePage(article));
  write(`zh/insights/${article.slug}`, insightArticlePageZh(article));
});
write("search", search);
write("about", about);
write("lms-review", lmsReview);
write("lms-review/wang-zhuoying-summer-2026", wangZhuoyingSummerGuide);

fs.writeFileSync(path.join(root, "vercel.json"), JSON.stringify({
  cleanUrls: true,
  trailingSlash: true,
  redirects: [
    {
      source: "/(.*)",
      has: [
        {
          type: "host",
          value: "otc.overseasuk.com"
        }
      ],
      destination: "https://overseasuk.com/$1",
      permanent: true
    },
    {
      source: "/(.*)",
      has: [
        {
          type: "host",
          value: "www.otc.overseasuk.com"
        }
      ],
      destination: "https://overseasuk.com/$1",
      permanent: true
    },
    {
      source: "/(.*)",
      has: [
        {
          type: "host",
          value: "www.overseasuk.com"
        }
      ],
      destination: "https://overseasuk.com/$1",
      permanent: true
    }
  ],
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" }
      ]
    }
  ]
}, null, 2) + "\n");

const sitemap = [...new Set(generatedRoutes)].sort().map((publicPath) => {
  const loc = new URL(publicPath, SITE_URL).toString();
  return `  <url><loc>${loc}</loc></url>`;
}).join("\n");

fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap}
</urlset>
`);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", SITE_URL).toString()}
`);

fs.writeFileSync(path.join(root, "README.md"), `# OTC Study Hub

Static Vercel prototype for OTC / Overseas Digital Hub.

## Routes

- /
- /study-guides/
- /publishing/
- /publishing/media/
- /courses/
- /services/
- /university-applications/
- /study-group-2026-applications/
- /zh/study-group-2026-applications/
- /application-service-standards/
- /advanced-entry-china-programmes/
- /university-partnerships/
- /othm-level-5-business-management/
- /apps/
- /apps/ucbelt-speaking/
- /belt/
- /resources/
- /australia-business-landing/
- /consultation-chat/
- /insights/
- /zh/insights/example-article/
- /search/
- /about/
- /lms-review/
- /lms-review/wang-zhuoying-summer-2026/

## Build

No build step is required. To regenerate static pages:

\`\`\`bash
node generate-site.js
\`\`\`
`);

console.log("Generated OTC Study Hub static prototype.");
