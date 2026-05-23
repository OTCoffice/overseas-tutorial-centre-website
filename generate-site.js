const fs = require("fs");
const path = require("path");
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
          ${country.slug === "australia" ? `<a class="btn btn-dark" href="/australia-office-presence/">打開澳洲成熟路線頁</a><a class="btn btn-light" href="/australia-vet-tafe-pathways/">澳洲 VET / TAFE 路線</a>` : `<a class="btn btn-dark" href="/university-applications/">大學申請評估</a><a class="btn btn-light" href="/international-curriculum-tutoring/">課程與文件準備</a>`}
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

const insightsArticles = [
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
          try {
            await navigator.clipboard.writeText(button.dataset.copyLink);
            button.textContent = "Copied";
          } catch (error) {
            button.textContent = button.dataset.copyLink;
          }
        });
      });
    </script>
  `;
}

function shareLinksHerald(article) {
  const articleUrl = new URL(`/insights/${article.slug}/`, SITE_URL).toString();
  const text = `${article.title} | OTC Study Hub`;
  return `
    <div class="oeh-share-row" data-share-strip>
      <span>分享本文</span>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">X</a>
      <a href="https://www.threads.net/intent/post?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">Threads</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}" target="_blank" rel="noopener">Facebook</a>
      <a href="https://wa.me/?text=${encodeURIComponent(text + " " + articleUrl)}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Telegram</a>
      <a href="mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(articleUrl)}">Email</a>
      <button type="button" data-copy-link="${articleUrl}">Copy link</button>
      <button type="button" data-copy-link="${articleUrl}">WeChat copy</button>
    </div>
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
      ${shareLinksHerald(article)}
      <footer class="oeh-footer">
        <strong>海外留學導報 · Overseas Tutorial Centre</strong>
        <span>© 2026 Overseas Tutorial Centre Ltd · 207 Regent Street London W1B 3HH · overseasuk.com</span>
      </footer>
    </article>
    <script>
      document.querySelectorAll("[data-copy-link]").forEach((button) => {
        button.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(button.dataset.copyLink);
            button.textContent = "Copied";
          } catch (error) {
            button.textContent = button.dataset.copyLink;
          }
        });
      });
    </script>
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
    "家庭信託",
    "文件準備清單",
    "推薦信",
    "信託",
    "澳洲",
    "英國"
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
  const firstSection = cleanedSections[0];
  const checklist = cleanedSections.slice(0, 7);
  const issueMonth = article.date ? `${article.date.slice(0, 4)}年${Number(article.date.slice(5, 7))}月號` : "最新一期";

  return `
    <div class="zh-herald-page">
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
        <div class="zh-herald-section-tag">${reviewColumn.name}</div>
        <div class="zh-herald-section-line"></div>
        <time>${zhIssueDate(article.date)}</time>
      </div>
      <header class="zh-herald-hero">
        <div class="zh-herald-kicker">${article.kicker || `${reviewColumn.name}專題`}</div>
        <h1>${article.titleZh || article.title}</h1>
        <p class="zh-herald-standfirst">${article.summaryZh || article.summary}</p>
        <div class="zh-herald-byline">
          <span>${article.author}</span>
          <i></i>
          <span>閱讀時間約 ${readingMinutes} 分鐘</span>
          <i></i>
          <span>${reviewColumn.audience}</span>
        </div>
      </header>
      <div class="zh-herald-body-grid">
        <main class="zh-herald-main">
          ${firstSection ? `
            <div class="zh-herald-pullquote">
              <p>${firstSection.paragraphs[0].replace(/。.*$/, "。")}</p>
            </div>
          ` : ""}
          ${cleanedSections.map((section, index) => `
            <section>
              <h2 class="zh-herald-section-head" data-num="${zhSectionNums[index] || index + 1}">${section.heading}</h2>
              ${section.paragraphs.map((paragraph, pIndex) => {
                if (index === 1 && pIndex === 0) {
                  return `<div class="zh-herald-teal-box"><div class="zh-herald-box-title">導報提示</div><p>${paragraph}</p></div>`;
                }
                if (index === 2 && pIndex === 0) {
                  return `<div class="zh-herald-highlight-box"><div class="zh-herald-box-title">實務重點</div><p>${paragraph}</p></div>`;
                }
                return `<p>${paragraph}</p>`;
              }).join("")}
            </section>
          `).join("")}
          <div class="zh-herald-warning-box">
            <div class="zh-herald-box-title">重要提示</div>
            <p>本文為一般教育與申請資訊整理，不構成錄取保證、法律意見、移民意見或官方院校文件。具體申請要求、截止日期、入學條件與政策解讀，應以相關院校、政府部門或正式合作方的最新書面資訊為準。</p>
          </div>
          <div class="zh-herald-disclaimer">本文由留學導報編輯部編製。留學導報屬於 Overseas Publishing / 海外書局系列板塊之一，與出版、編譯並列，面向學生、家長、教育機構與合作方提供可公開閱讀、可引用、可持續更新的雙語教育資訊。</div>
        </main>
        <aside class="zh-herald-side">
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
        </aside>
      </div>
      <section class="zh-herald-infographic">
        <h2>導報閱讀路線圖</h2>
        <p>From Briefing to Action · 從資訊整理到申請行動</p>
        <div class="zh-herald-roadmap">
          ${checklist.slice(0, 6).map((section, index) => `
            <div class="zh-herald-roadmap-step">
              <div>${index + 1}</div>
              <strong>${section.heading}</strong>
              <span>${index === 0 ? "理解背景" : index === checklist.length - 1 ? "完成核對" : "整理材料"}</span>
            </div>
          `).join("")}
        </div>
        <div class="zh-herald-reference-grid">
          <article>
            <strong>中文正文</strong>
            <span>面向學生與家長，先讀重點、流程與風險提示。</span>
          </article>
          <article>
            <strong>English Reference</strong>
            <span>保留英文原文對照，方便對外溝通與文件準備。</span>
          </article>
        </div>
      </section>
      <footer class="zh-herald-footer">
        <strong>留學導報</strong>
        <span>© 2026 Overseas Tutorial Centre Ltd. · Overseas Publishing House · overseasuk.com</span>
      </footer>
    </div>
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
            <h4>${article.titleZh || ""}</h4>
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
  return pageShell({
    title: `${article.title} | Overseas Study Review`,
    current: "insights",
    description: article.summary,
    path: `/insights/${article.slug}/`,
    body: `
      <main class="oeh-shell">
        ${heraldArticleBody(article)}
      </main>
    `
  });
}

function insightArticlePageZh(article) {
  return pageShell({
    title: `${article.titleZh || article.title} | 留學導報`,
    current: "insights",
    lang: "zh-Hant",
    locale: "zh",
    description: article.summaryZh || article.summary,
    path: `/zh/insights/${article.slug}/`,
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
      <div class="product-grid">${productCards()}</div>
    </section>
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
    <link rel="stylesheet" href="/styles.css?v=credit-alliance-newspaper-20260523">
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
            <a href="/australia-office-presence/#australia-director">查看澳洲辦公室路線</a>
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
    links: [["澳洲辦公室路線", "/australia-office-presence/"], ["英澳申請文件清單", "/zh/insights/uk-aus-application-documents-checklist/"], ["大學申請評估", "/university-applications/"]]
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

const australiaOfficePresence = pageShell({
  title: "Australia Office Presence | OTC Study Hub",
  current: "about",
  description: "OTC's Australia-facing office route from NSW: coordination base, university applications, student support, institutional services, market intelligence and professional referral.",
  path: "/australia-office-presence/",
  body: `
    <section class="page-hero australia-office-hero"><div class="band"><div class="eyebrow">Australia Office Presence</div><h1>OTC Australia Office Route</h1><p>A staged NSW-based operating route for education consulting, student support, institutional services and Australia-facing market development.</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=OTC%20Australia%20Office%20Presence">Contact OTC</a><a class="btn btn-secondary" href="/about/">Back to About</a></div></div></section>

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
                <details><summary>Groves Christian College</summary><p>School-sector and Year 7-12 pathway coverage.</p><a class="map-apply-link" href="/university-applications/?country=Australia&state=QLD&institution=Groves%20Christian%20College#otc-apply-form">Apply via OTC</a></details>
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
        <div class="nsw-school-card-grid">
          <article>
            <b>Series 04</b>
            <strong>Lindisfarne Anglican Grammar School</strong>
            <p>NSW school briefing record with presentation and fee schedule materials received through Study NSW communications. Suitable for family screening, boarding / location discussion and application document planning.</p>
            <a href="mailto:office@overseasuk.com?subject=Free%20NSW%20School%20Screening%20-%20Lindisfarne%20Anglican%20Grammar%20School">Free screening</a>
          </article>
          <article>
            <b>Series 05</b>
            <strong>The Illawarra Grammar School</strong>
            <p>Wollongong independent co-educational school briefing scheduled for 10 June 2026, covering school profile, admissions, student support, curriculum, extracurricular life and international-student questions.</p>
            <a href="mailto:office@overseasuk.com?subject=Free%20NSW%20School%20Screening%20-%20The%20Illawarra%20Grammar%20School">Free screening</a>
          </article>
          <article>
            <b>Ongoing</b>
            <strong>NSW primary and secondary school list</strong>
            <p>OTC will continue adding Study NSW briefing schools, government-school options, independent schools, junior schools, high schools, short-term study and long-term enrolment routes as public-facing profiles become ready.</p>
            <a href="mailto:office@overseasuk.com?subject=Free%20NSW%20School%20Application%20Screening">Open school enquiry</a>
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
write("publishing/ebook-publishing-support", ebookPublishingSupport);
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
write("australia-office-presence", australiaOfficePresence);
write("australia-vet-tafe-pathways", australiaVetTafePathways);
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
