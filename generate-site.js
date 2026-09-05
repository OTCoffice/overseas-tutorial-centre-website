Warning: truncated output (original token count: 777200)
... 2060223 bytes omitted ...

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
  { slug: "australia", zh: "澳洲", name: "Australia", href: "/australia-office-presence/", labelClass: "label-country-australia", note: "澳洲路線已升級為澳洲本地協調 + 中國五城宣傳並行：北京、上海、廣州、深圳、西安同步開展說明會、渠道拜訪、家長諮詢與 VET / TAFE 路線初篩。", universities: ["UNSW Sydney", "University of Sydney", "University of Melbourne", "Monash University", "University of Queensland", "Australian National University", "University of Adelaide", "University of Western Australia"], colleges: ["TAFE NSW", "UTS College", "Monash College", "UWA College", "KIC Adelaide College", "Murdoch College"], highSchools: ["NSW government schools", "Victorian government schools", "Queensland schools", "Independent boarding schools"], primarySchools: ["NSW primary schools", "Victoria primary schools", "Queensland primary schools", "Independent junior schools"] },
  { slug: "united-states", zh: "美國", name: "United States", href: "/countries/united-states/", labelClass: "label-country-us", note: "適合美本、美研、社區學院轉學、pathway 與英美路線比較。", universities: ["Harvard University", "MIT", "Stanford University", "University of California system", "New York University", "Columbia University", "University of Southern California", "Northeastern University"], colleges: ["Community colleges", "Liberal arts colleges", "Study Group North America routes", "Shorelight partner routes", "INTO US routes", "University extension pathways"], highSchools: ["CATS Academy Boston (CATS Boston) — Braintree, MA boarding, Grades 8-12 / PG", "Private day schools", "Boarding schools", "Public high school exchange routes", "International high schools"], primarySchools: ["Private elementary schools", "Independent K-12 schools", "International elementary programmes", "Local district schools"] },
  { slug: "canada", zh: "加拿大", name: "Canada", href: "/countries/canada/", labelClass: "label-country-canada", note: "適合本科、研究生文憑、公立學院、OSSD / BC 課程與家庭移居教育規劃。", official: {
    sourceName: "IRCC — Prepare to study as an international student in Canada",
    sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare.html",
    checkedDate: "2026-07-20",
    items: [
      { title: "DLI 指定院校制度", text: "各省／地區自管教育體系，並負責「指定」可招收國際學生的院校（Designated Learning Institution）。申請學簽必須持 DLI 發出的錄取信，否則 IRCC 將拒絕申請；全部中小學均屬 DLI，專上院校須查官方 DLI 名單。" },
      { title: "提前申請時間", text: "IRCC 提示：中小學至少提前六個月、專上課程至少提前一年向學校遞交入學申請；各校申請規則與文件清單不同，以校方要求為準。" },
      { title: "錄取信與學簽", text: "學校錄取後發出 letter of acceptance——這封信是申請學簽（study permit）的必備文件。申請費、學費、住宿成本與語言測試要求由校方提供。" },
      { title: "醫療保險", text: "加拿大政府不承擔國際學生的醫療費用；醫保安排各省不同，須向就讀學校確認國際學生保險方案。" }
    ]
  }, readings: [
    { tag: "升學通道", title: "阿爾伯塔大學 Year One 平行大一 2026：QS94 加拿大升學通道（總覽）", href: "/zh/insights/university-of-alberta-year-one-foundation-program-overview-2026/" },
    { tag: "工程方向", title: "阿爾伯塔大學 Year One 工程方向：Qualifying Year 先修與 Co-op GPA（2026）", href: "/zh/insights/university-of-alberta-year-one-engineering-pathway-2026/" },
    { tag: "實習就業", title: "阿爾伯塔大學 Co-op 與實習機會 2026（含工簽新規）", href: "/zh/insights/university-of-alberta-coop-internship-guide-2026/" },
    { tag: "移民銜接", title: "阿爾伯塔大學：PGWP 與阿爾伯塔省提名（AAIP）移民路線 2026", href: "/zh/insights/university-of-alberta-pgwp-aaip-immigration-route-2026/" }
  ], universities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "McMaster University", "University of Alberta", "Queen's University", "Simon Fraser University"], colleges: ["Seneca Polytechnic", "George Brown College", "Humber College", "Centennial College", "BCIT", "Fanshawe College"], highSchools: ["Ontario public school boards", "BC school districts", "Private boarding schools", "OSSD schools"], primarySchools: ["Public elementary schools", "Private elementary schools", "International junior schools", "Catholic school boards"] },
  { slug: "new-zealand", zh: "新西蘭", name: "New Zealand", href: "/countries/new-zealand/", labelClass: "label-country-new-zealand", note: "適合大學、理工學院、中小學及家庭型低齡留學路線。", universities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University", "Auckland University of Technology"], colleges: ["Te Pukenga / institutes of technology", "Unitec", "Ara Institute of Canterbury", "English language colleges"], highSchools: ["Auckland secondary schools", "Wellington secondary schools", "Christchurch high schools", "Boarding schools"], primarySchools: ["Auckland primary schools", "Wellington primary schools", "Local state primary schools", "Independent primary schools"] },
  { slug: "ireland", zh: "愛爾蘭", name: "Ireland", href: "/countries/ireland/", labelClass: "label-country-ireland", note: "適合英語授課本科、碩士、醫藥、商科、科技與歐洲工作路線比較。", universities: ["Trinity College Dublin", "University College Dublin", "University of Galway", "University College Cork", "Dublin City University", "University of Limerick"], colleges: ["Technological University Dublin", "Griffith College", "Dublin Business School", "National College of Ireland"], highSchools: ["Irish boarding schools", "Dublin secondary schools", "International high schools", "Senior cycle programmes"], primarySchools: ["Dublin primary schools", "Independent primary schools", "Local national schools", "International junior routes"] },
  { slug: "singapore", zh: "新加坡", name: "Singapore", href: "/countries/singapore/", labelClass: "label-country-singapore", note: "適合亞洲英文教育、英澳美銜接、國際學校和本科/研究生路線比較。", universities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University", "Singapore University of Technology and Design", "Singapore Institute of Technology"], colleges: ["Singapore polytechnics", "Kaplan Singapore", "SIM Global Education", "PSB Academy", "James Cook University Singapore"], highSchools: ["Junior colleges", "International schools", "IB schools", "Integrated Programme schools"], primarySchools: ["International primary schools", "Local primary schools", "IB PYP schools", "British curriculum primary schools"] },
  { slug: "thailand", zh: "泰國", name: "Thailand", href: "/countries/thailand/", labelClass: "label-country-singapore", note: "適合親子短住、國際學校日營、英語假期課、雙語幼兒園和低齡家庭友好路線比較。", universities: ["Chulalongkorn University", "Mahidol University International College", "Thammasat University", "Asian Institute of Technology"], colleges: ["International schools", "Bilingual preschools", "English language centres", "Holiday camp providers"], highSchools: ["Bangkok international schools", "British curriculum schools", "IB schools", "Boarding-style camps"], primarySchools: ["International primary schools", "Bilingual kindergartens", "Early-years centres", "Parent-child playgroups"] },
  { slug: "japan", zh: "日本", name: "Japan", href: "/countries/japan/", labelClass: "label-country-japan", note: "適合英文授課本科/研究生、語言學校、國際高中與亞洲路線比較。", universities: ["University of Tokyo", "Kyoto University", "Waseda University", "Keio University", "Sophia University", "Tohoku University", "Osaka University"], colleges: ["Japanese language schools", "Professional training colleges", "Temple University Japan", "Pathway and EJU preparation providers"], highSchools: ["International high schools", "IB schools in Japan", "Japanese private high schools", "Boarding-style programmes"], primarySchools: ["International primary schools", "Japanese private elementary schools", "IB PYP schools", "Bilingual junior schools"] },
  { slug: "south-korea", zh: "韓國", name: "South Korea", href: "/countries/south-korea/", labelClass: "label-country-korea", note: "適合英文授課、韓語預備、亞洲本科／研究生與國際高中路線；院校索引按地區、類型與研究方向分流。", universities: [], colleges: ["Korean language institutes", "International colleges", "Professional colleges", "Pathway preparation providers"], highSchools: ["International schools", "Foreign language high schools", "Private high schools", "IB / AP schools"], primarySchools: ["International primary schools", "Bilingual elementary schools", "Private elementary schools", "Foreign schools"] },
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
  return items.map((item) => typeof item === "object" ? `<li><a href="${item.href}">${item.name}</a></li>` : `<li>${item}</li>`).join("");
}

const southKoreaUniversityData = [
  ["Seoul", "Seoul National University", "首爾大學", "研究型綜合大學；人文、社科、商科、工程、自然科學與研究生路線。"],
  ["Daejeon", "KAIST", "韓國科學技術院", "理工、AI、數據、商業與研究型碩博路線；重視數理與研究能力。"],
  ["Seoul", "Yonsei University", "延世大學", "綜合型私立大學；國際學院、商科、社科、醫療及研究生項目。"],
  ["Seoul", "Korea University", "高麗大學", "綜合型私立大學；商科、公共政策、法律、社科與研究生申請。"],
  ["Seoul", "Sungkyunkwan University", "成均館大學", "綜合型大學；商科、數據、工程、生命科學與企業合作方向。"],
  ["Seoul", "Hanyang University", "漢陽大學", "工程、設計、商科、媒體與產業合作方向；首爾校區及 ERICA 校區。"],
  ["Seoul", "Ewha Womans University", "梨花女子大學", "女性高等教育與研究型大學；人文、社科、商科、設計與健康方向。"],
  ["Seoul", "Kyung Hee University", "慶熙大學", "人文、酒店旅遊、商科、國際研究、韓語及健康相關方向。"],
  ["Seoul", "Sogang University", "西江大學", "商科、經濟、社科、媒體、國際研究與韓語教育方向。"],
  ["Seoul", "University of Seoul", "首爾市立大學", "公立大學；城市治理、公共行政、商科、工程與環境研究方向。"],
  ["Seoul", "Hongik University", "弘益大學", "藝術、設計、建築、商科與創意產業方向；作品集要求需逐項核對。"],
  ["Seoul", "Konkuk University", "建國大學", "生命科學、商科、媒體、藝術設計與綜合研究生方向。"],
  ["Seoul", "Chung-Ang University", "中央大學", "商科、媒體、藝術、影視、藥學與社科方向。"],
  ["Seoul", "Dongguk University", "東國大學", "媒體、影視、商科、人文、佛學與文化產業方向。"],
  ["Pohang", "POSTECH", "浦項科技大學", "研究型理工大學；工程、材料、生命科學、AI 與研究生路線。"],
  ["Busan", "Pusan National University", "釜山國立大學", "國立綜合大學；工程、商科、海洋、自然科學與研究生方向。"],
  ["Daegu", "Kyungpook National University", "慶北國立大學", "國立綜合大學；工程、IT、醫學、商科與自然科學方向。"],
  ["Gwangju", "Gwangju Institute of Science and Technology", "光州科學技術院", "理工研究型大學；AI、材料、能源、生命科學與研究生項目。"],
  ["Ulsan", "Ulsan National Institute of Science and Technology", "蔚山科學技術院", "理工、能源、材料、AI 與產業研究方向。"],
  ["Gwangju", "Chonnam National University", "全南國立大學", "國立綜合大學；農業、工程、商科、人文與研究生路線。"],
  ["Daejeon", "Chungnam National University", "忠南國立大學", "國立綜合大學；工程、自然科學、商科、農業與研究生方向。"],
  ["Jeonju", "Jeonbuk National University", "全北國立大學", "國立綜合大學；工程、農業、生命科學、商科與人文方向。"],
  ["Jeju", "Jeju National University", "濟州國立大學", "國立綜合大學；旅遊、海洋、自然科學、商科與區域研究方向。"],
  ["Seoul", "KDI School of Public Policy and Management", "KDI 國際政策學院", "公共政策、發展研究、公共管理與國際事務方向；研究生項目與英文授課要求需逐項核對。"]
].map(([city, name, zh, fit]) => ({ city, name, zh, fit, href: `/countries/south-korea/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/` }));

countryGatewayData.find((country) => country.slug === "south-korea").universities = southKoreaUniversityData;

function southKoreaUniversityPage(university) {
  return pageShell({
    title: `${university.zh}｜${university.name}｜韓國留學 | OTC Study Hub`,
    current: "zh", lang: "zh-Hant", locale: "zh",
    path: university.href,
    description: `OTC 韓國院校索引：${university.zh} ${university.name}，${university.city}。`,
    body: `<section class="page-hero regional-office-hero country-gateway-hero country-subpage-hero"><div class="band"><a class="country-subpage-crumb" href="/countries/south-korea/">← 韓國留學入口</a><div class="eyebrow">SOUTH KOREA UNIVERSITY INDEX · ${university.city}</div><h1>${university.zh}</h1><h2>${university.name}</h2><p>${university.fit}</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(university.name + " initial review")}">提交初步評估</a><a class="btn btn-secondary" href="https://www.studyinkorea.go.kr/en/search_v1.do" target="_blank" rel="noopener">官方院校檢索</a></div></div></section><section class="band country-gateway-panel"><div class="country-subpage-section"><div class="section-head compact-head"><div class="eyebrow">個案核對框架</div><h2>申請前先核對四件事</h2></div><div class="country-school-grid"><article><b>01</b><strong>課程與學位</strong><p>確認本科／碩士／博士層級、授課語言、學院及研究方向，不能只按校名判斷適配度。</p></article><article><b>02</b><strong>入學要求</strong><p>按當年度招生簡章核對學歷、成績、TOPIK／IELTS／TOEFL、作品集、研究計劃及推薦信要求。</p></article><article><b>03</b><strong>費用與時間</strong><p>逐項確認申請費、學費、獎學金、宿舍、保險、入學季與材料截止日期。</p></article><article><b>04</b><strong>就業與簽證</strong><p>畢業後工作與簽證須以韓國政府及學校最新規則核對；OTC 不保證錄取、獎學金或工作結果。</p></article></div></div><div class="country-subpage-sources"><strong>官方來源</strong><a href="https://www.studyinkorea.go.kr/en/search_v1.do" target="_blank" rel="noopener">Study in Korea｜韓國政府院校／課程檢索 →</a><a href="https://www.studyinkorea.go.kr/en/plan/certifiedUniversity.do" target="_blank" rel="noopener">Study in Korea｜認證院校資訊 →</a></div><p class="source-note">本頁為 OTC 公開院校索引與初步分流，不代表正式代理授權、招生名額或當年度課程開放。請以院校官方招生簡章及韓國政府最新資訊為準。</p></section>`
  });
}

function southKoreaChineseMirror(html, path) {
  return html
    .replace(/href="\/countries\/south-korea\//g, 'href="/zh/countries/south-korea/')
    .replace(/href="\/countries\/south-korea"/g, 'href="/zh/countries/south-korea/"')
    .replace(/href="\/zh\/"/g, 'href="/zh/"')
    .replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${path}">`)
    .replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${path}">`);
}

const countrySubPages = {
  canada: [
    {
      slug: "study-permit",
      navTitle: "學簽與 2026 新政",
      navDesc: "配額、PAL、DLI 與 PGWP 門檻",
      title: "加拿大學簽與 2026 新政",
      subtitle: "Study Permit & Policy Framework",
      intro: "配額制、省級證明信與 PGWP 新門檻改寫了申請邏輯：接受 offer 之前，就要把畢業後的工簽資格查清楚。",
      sections: [
        { heading: "配額、PAL 與 DLI：三道前置關卡", paragraphs: [
          "自 2024 年起，加拿大對學簽實行總量配額管理：大多數專上申請人須隨學簽申請提交省級證明信（PAL；魁北克為 TAL），配額按省分配。錄取信必須來自指定教育機構（DLI）——非 DLI 錄取信會被直接拒簽，這一條已在 IRCC 官方頁面核實；全部中小學均屬 DLI，專上院校須查官方 DLI 名單。",
          "申請時間上，IRCC 提示中小學至少提前六個月、專上課程至少提前一年向學校遞交入學申請；學校錄取後發出的 letter of acceptance 是學簽申請的必備文件。"
        ] },
        { heading: "PGWP 語言與專業門檻", paragraphs: [
          "畢業後工作許可（PGWP）在 2024 年底後對多數申請人加設語言與專業門檻：大學學位畢業生一般要求 CLB 7、學院課程畢業生 CLB 5；非學位課程另須對應官方認可的緊缺專業領域（醫療、STEM、技工、農業食品等）。「先入學再說」的舊策略已失效。",
          "擇校階段的三項核查：院校是否 DLI、課程是否符合 PGWP 現行專業要求、語言水平距離 CLB 門檻多遠。三項有一項不確定，就先查清再交申請費。"
        ] }
      ],
      sources: [
        ["IRCC — Prepare to study in Canada", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare.html"],
        ["IRCC — Post-graduation work permit", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html"]
      ]
    },
    {
      slug: "programmes",
      navTitle: "選專業與研究生申請",
      navDesc: "高就業領域＋學術型 vs 授課型",
      title: "加拿大選專業與研究生申請",
      subtitle: "Programmes & Graduate Study",
      intro: "政策意義上的「好專業」是三張清單的交集：勞動力缺口清單、PGWP 合資格清單、目標省份的省提名職業清單。",
      sections: [
        { heading: "高就業領域盤點", paragraphs: [
          "技術與工程類：人工智能、軟件開發與網絡安全崗位需求持續旺盛，且多屬 PGWP 傾斜的 STEM 範疇。醫療與社會服務類：護理、理療、早教與社區服務人員長期短缺，多個省提名通道對此類職業單獨開閘。技工與應用技術類：學院（College）的電工、焊接、汽修等課程配 Co-op，就業銜接最直接。",
          "選擇邏輯不是「哪個熱門選哪個」，而是把勞動力缺口、PGWP 合資格專業、省提名職業三張清單疊在一起看交集。"
        ] },
        { heading: "研究生：學術型與授課型如何選", paragraphs: [
          "研究型碩士（Thesis-based）：核心是導師匹配——套磁信、研究計劃與 GPA 三件套，獎學金多與導師經費綁定，適合以博士或研究職業為目標的申請人。",
          "授課型碩士（Course-based）：課程就業導向、學制短、名額多，是多數以就業移民為目標者的合理選擇；BC 省與安省均有面向碩博畢業生的省提名通道，授課型學位同樣適用。"
        ] }
      ],
      sources: [
        ["EduCanada — 官方留學資訊", "https://www.educanada.ca/"],
        ["IRCC — PGWP 專業領域要求", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html"]
      ]
    },
    {
      slug: "immigration",
      navTitle: "移民路線",
      navDesc: "EE 快速通道 vs 省提名全景",
      title: "加拿大移民路線：從留學到永居",
      subtitle: "Immigration Pathways",
      intro: "留學生轉永居的兩條主路：快速通道的加拿大經驗類（CEC）賭速度與自由度，省提名（PNP）換確定性。擇校時就該想清楚畢業後在哪個省的哪條通道排隊。",
      sections: [
        { heading: "EE 與 PNP 對照", paragraphs: [
          `<div class="article-service-table"><table><thead><tr><th>項目類型</th><th>核心要求</th><th>適合人群</th><th>優勢與挑戰</th></tr></thead><tbody><tr><td>EE — CEC</td><td>一年加拿大境內 NOC TEER 0–3 工作經驗＋語言成績</td><td>已有本地工作經驗的本科及碩士畢業生</td><td>審批速度快；但邀請分數線隨抽籤波動</td></tr><tr><td>省提名（PNP）</td><td>符合具體省份的緊缺職業、碩博通道或僱主擔保</td><td>在特定省份就讀並就業的畢業生</td><td>獲提名後 EE 加 600 分，幾乎鎖定邀請；但需接受地域綁定</td></tr></tbody></table></div>`,
          "在阿爾伯塔、薩省與海洋四省就讀的畢業生，達到提名門檻的速度通常快於安省與 BC 省；大西洋移民計劃（AIP）對海洋四省的政策傾斜明顯。"
        ] },
        { heading: "以出口定入口", paragraphs: [
          "評估框架按「畢業出口」倒推：先定目標省的移民通道，再選該省的院校與專業，最後才是城市生活偏好——順序反了，就會出現「在最貴的城市讀了最難移民的專業」的組合。",
          "PGWP 是兩條路的共同前提：課程資格與語言門檻見「學簽與 2026 新政」分頁；具體簽證與移民個案建議須由合資格持牌顧問提供。"
        ] }
      ],
      sources: [
        ["IRCC — Express Entry", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"],
        ["IRCC — Provincial Nominee Program", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"],
        ["IRCC — Atlantic Immigration Program", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html"]
      ]
    },
    {
      slug: "work",
      navTitle: "打工與 Co-op",
      navDesc: "24 小時上限、SIN 與帶薪實習",
      title: "加拿大打工與 Co-op 實習",
      subtitle: "Work & Co-op",
      intro: "校外打工每週 24 小時上限與 SIN 前置要求，已於 2026-07-20 在 IRCC 官方頁面逐條核實；Co-op 另需單獨工作許可，兩套規則不可混用。",
      sections: [
        { heading: "合法打工的邊界", paragraphs: [
          "全日制在讀、課程滿六個月且學簽印有打工條件的學生，學期內校外打工上限為每週 24 小時（可多份工作合計），假期可全職；開工前必須先取得社會保險號（SIN），且只能在課程正式開始後工作。若舊學簽仍印 20 小時而符合現行條件，按現行 24 小時執行。",
          "任何超時都屬 unauthorized work，會直接影響後續簽證與永居申請——學生與僱主都應在開工前核對資格。報稅是另一件「沒收入也要做」的事：按時報稅可觸發退稅與福利，報稅記錄同時是日後永居申請中工作經驗的證據鏈。"
        ] },
        { heading: "Co-op：畢業前的本地經驗引擎", paragraphs: [
          "Co-op 學期與帶薪工作交替，畢業時已有本地僱主推薦信與數段工作經歷。三件事決定成敗：按北美慣例改寫的一頁式履歷、行為面試的 STAR 應答準備、從第一學期開始的 LinkedIn 與校園招聘會人脈積累。",
          "Co-op 工作需要隨學簽一併申請的 co-op work permit，與校外打工時數限制分屬兩套規則。"
        ] }
      ],
      sources: [
        ["IRCC — Work off campus（已核查）", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html"],
        ["IRCC — Co-op work permit", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/intern.html"]
      ]
    },
    {
      slug: "finance",
      navTitle: "財務與理財",
      navDesc: "預算、資金證明、開戶與信用",
      title: "加拿大留學財務與理財",
      subtitle: "Finance & Banking",
      intro: "支出分三層：學費、生活費、隱形支出；落地後的理財順序永遠是應急儲備 → 信用建立 → 再談投資。",
      sections: [
        { heading: "預算與資金證明", paragraphs: [
          "大學本科國際生學費普遍高於學院課程；多倫多、溫哥華的房租可達草原省份城市的兩倍，城市選擇本身就是財務決策。隱形支出包括醫療保險（聯邦不承擔國際學生醫療費，各省安排不同）、教材、通訊與冬裝。",
          "IRCC 對生活費證明設有官方金額標準並不時上調——預算須按申請當時的官方數字（另加首年學費與旅費）準備；經 GIC 渠道的申請人須確保資金鏈在整個審理期內不斷裂。資金來源解釋不清是常見拒簽原因。"
        ] },
        { heading: "落地第一個月的財務動作", paragraphs: [
          "在五大行（RBC、TD、BMO、Scotiabank、CIBC）中選一家開學生賬戶（多數有免月費套餐）；儘早申請第一張信用卡並保持按時全額還款、低額度使用率——信用分決定日後租房、車貸與房貸的成本。",
          "TFSA、FHSA 等註冊賬戶對稅務居民身份與 SIN 有前置要求，使用前先確認自己的稅務居民狀態與供款額度規則，避免超額供款罰稅。"
        ] }
      ],
      sources: [
        ["IRCC — Prepare to study in Canada（費用與保險）", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare.html"]
      ]
    },
    {
      slug: "living",
      navTitle: "城市與租房",
      navDesc: "省份評估＋租客權益",
      title: "加拿大城市選擇與租房攻略",
      subtitle: "Cities & Housing",
      intro: "安省 BC 機會最多也最貴，草原省份性價比高、省提名友好，海洋四省政策傾斜最明顯；租房受各省法律管轄，標準租約與押金規則是兩道護身符。",
      sections: [
        { heading: "省份與城市評估", paragraphs: [
          "安省與 BC 省：頂級研究型大學雲集、行業機會最多，但生活成本與永居競爭同步最高。阿爾伯塔與薩省：稅負低、房租溫和，能源與科技板塊擴張快，省提名通道相對友好。海洋四省：生活成本最低，大西洋移民計劃（AIP）政策傾斜明顯，適合把「小城市＋快永居」作為優先級的申請人。",
          "本站的阿爾伯塔大學系列深度文章（入口頁「延伸閱讀」）是草原路線的具體展開。"
        ] },
        { heading: "租房三要點", paragraphs: [
          "合同：有官方標準租約的省份（如安省 Standard Lease）務必使用標準文本，口頭約定一律落地為條款。押金：各省對押金種類與上限有明確規定，警惕一次索要多月預付租金——多數省份此類要求並不合法。保險：租客保險覆蓋個人財產與第三方責任，保費低而覆蓋關鍵風險。",
          "遇到非法驅逐或扣押押金，各省均有租務仲裁機構（如安省 LTB）受理申訴——保留書面溝通記錄是維權前提。"
        ] }
      ],
      sources: [
        ["安省標準租約（Standard Lease）", "https://www.ontario.ca/page/guide-ontarios-standard-lease"]
      ]
    }
  ]
};

function countrySubPage(country, sub) {
  const siblings = (countrySubPages[country.slug] || []).filter((s) => s.slug !== sub.slug);
  return pageShell({
    title: `${sub.title}｜${country.zh}留學入口 | OTC Study Hub`,
    current: "zh",
    lang: "zh-Hant",
    locale: "zh",
    path: `/countries/${country.slug}/${sub.slug}/`,
    description: `OTC ${sub.title}：${sub.navDesc}。`,
    body: `
      <section class="page-hero regional-office-hero country-gateway-hero country-subpage-hero">
        <div class="band">
          <a class="country-subpage-crumb" href="/countries/${country.slug}/">← ${country.zh}留學入口</a>
          <div class="eyebrow">${sub.subtitle}</div>
          <h1>${sub.title}</h1>
          <p>${sub.intro}</p>
        </div>
      </section>
      <section class="band country-gateway-panel">
        ${sub.sections.map((section) => `
        <div class="country-subpage-section">
          <div class="section-head compact-head">
            <h2>${section.heading}</h2>
          </div>
          ${section.paragraphs.map((paragraph) => paragraph.startsWith("<") ? paragraph : `<p class="country-subpage-text">${paragraph}</p>`).join("")}
        </div>
        `).join("")}
        <div class="country-subpage-sources">
          <strong>官方來源</strong>
          ${sub.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} →</a>`).join("")}
        </div>
        <div class="country-subnav">
          <div class="section-head compact-head">
            <div class="eyebrow">${country.zh}路線其他分區</div>
          </div>
          <div class="country-subnav-grid">
            ${siblings.map((s) => `<a href="/countries/${country.slug}/${s.slug}/"><strong>${s.navTitle}</strong><span>${s.navDesc}</span></a>`).join("")}
          </div>
        </div>
        <div class="country-route-actions">
          <a class="btn btn-dark" href="/zh/insights/canada-routes-panorama-study-immigration-work-finance-guide/">閱讀完整十講特輯</a>
          <a class="btn btn-light" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(country.name + " " + sub.slug + " route enquiry")}">提交初步評估</a>
        </div>
        <p class="source-note">本頁為教育資訊整理，關鍵規則核查於 2026-07-20；政策數字隨時調整，申請前請以官方連結現行版本為準。具體簽證與移民個案建議須由合資格持牌專業人士提供。</p>
      </section>
    `
  });
}

function countryGatewayPage(country) {
  const categories = [
    ["01", "大學", "Universities", country.universities],
    ["02", "學院 / Pathway", "Colleges & Pathways", country.colleges],
    ["03", "中學", "Secondary Schools", country.highSchools],
    ["04", "小學", "Primary & Junior", country.primarySchools]
  ];
  const officialBlock = country.official ? `
        <div class="country-official">
          <div class="section-head compact-head">
            <div class="eyebrow">官方申請要點</div>
            <h2>${country.zh}學簽準備：IRCC 官方要求速覽</h2>
            <p>以下要點整理自加拿大移民、難民及公民部（IRCC）官方頁面，核查於 ${country.official.checkedDate}；正式申請前請以官方最新版本為準。</p>
          </div>
          <div class="country-official-grid">
            ${country.official.items.map((item, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${item.title}</strong><p>${item.text}</p></article>`).join("")}
          </div>
          <a class="country-official-source" href="${country.official.sourceUrl}" target="_blank" rel="noopener">官方原文：${country.official.sourceName} →</a>
        </div>
  ` : "";
  const readingsBlock = country.readings && country.readings.length ? `
        <div class="country-readings">
          <div class="section-head compact-head">
            <div class="eyebrow">延伸閱讀 · 留學導報</div>
            <h2>${country.zh}路線深度文章</h2>
          </div>
          <div class="country-readings-grid">
            ${country.readings.map((reading) => `<a href="${reading.href}"><em>${reading.tag}</em><strong>${reading.title}</strong><span>閱讀全文 →</span></a>`).join("")}
          </div>
        </div>
  ` : "";
  const southKoreaOfficialIndex = country.slug === "south-korea" ? `
        <div class="service-herald-grid country-korea-index">
          <div class="service-herald-main">
            <div class="eyebrow">NATIONAL UNIVERSITY INDEX · 2026</div>
            <h2>韓國大專院校清單｜子頁面索引</h2>
            <p>以下建立 OTC 目前優先分流的院校子頁面；完整、動態的全國院校與課程名錄，請以韓國政府 Study in Korea 官方檢索為準。官方平台亦提醒，資料由院校提供，未必涵蓋韓國全部院校。</p>
          </div>
          <aside class="service-guide-side service-herald-side">
            <div class="eyebrow">OFFICIAL DIRECTORY</div>
            <strong>全國院校／課程檢索</strong>
            <p>按學位、地區、授課語言與課程條件查詢最新資料。</p>
            <a class="service-side-link" href="https://www.studyinkorea.go.kr/en/search_v1.do" target="_blank" rel="noopener">Study in Korea 官方檢索 →</a>
            <a class="service-side-link" href="https://www.studyinkorea.go.kr/en/plan/certifiedUniversity.do" target="_blank" rel="noopener">認證院校資訊 →</a>
          </aside>
        </div>
  ` : "";
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
          <div class="country-hero-chips">
            ${categories.map(([, zhName, , items]) => `<span><strong>${items.length}</strong>${zhName}</span>`).join("")}
          </div>
          <div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(country.name + " study route enquiry")}">提交初步評估</a><a class="btn btn-secondary" href="/zh/">返回全球地圖</a></div>
        </div>
      </section>
      <section class="band country-gateway-panel">
        ${southKoreaOfficialIndex}
        ${(countrySubPages[country.slug] || []).length ? `
        <div class="country-subnav country-subnav-lead">
          <div class="section-head compact-head">
            <div class="eyebrow">路線分區</div>
            <h2>深入${country.zh}路線六個分區</h2>
          </div>
          <div class="country-subnav-grid">
            ${countrySubPages[country.slug].map((s) => `<a href="/countries/${country.slug}/${s.slug}/"><strong>${s.navTitle}</strong><span>${s.navDesc}</span></a>`).join("")}
          </div>
        </div>
        ` : ""}
        <div class="section-head compact-head">
          <div class="eyebrow">初步列表</div>
          <h2>${country.slug === "south-korea" ? "韓國：大學子頁面／語言與銜接路線" : `${country.zh}：大學 / 學院 / 中學 / 小學`}</h2>
          <p>${country.slug === "south-korea" ? "點選院校名稱進入子頁面，查看城市、學術方向、申請前核對框架與官方來源。具體課程、截止日期、費用及招生資格必須按當年度校方簡章確認。" : "以下為公開展示的第一版路線索引，用於初步分流。具體可申請課程、年級、入學要求、名額、授權渠道和截止日期需要逐案確認。"}</p>
        </div>
        <div class="country-school-grid">
          ${categories.map(([num, zhName, enName, items]) => `<article><b>${num}</b><strong>${zhName}</strong><em>${enName}</em><ul>${countryList(items)}</ul></article>`).join("")}
        </div>
        <div class="country-route-steps">
          <div class="section-head compact-head">
            <div class="eyebrow">申請流程</div>
            <h2>三步啟動${country.zh}路線</h2>
          </div>
          <div class="country-route-steps-grid">
            <article><b>STEP 1</b><strong>初步評估</strong><p>整理學術背景、預算、目標年級與城市偏好，由顧問判斷可行路線與入學季。</p></article>
            <article><b>STEP 2</b><strong>課程與文件準備</strong><p>成績單、語言成績、推薦信與文書；需要銜接課程時同步規劃 Pathway 或預備方案。</p></article>
            <article><b>STEP 3</b><strong>遞交與後續</strong><p>院校申請遞交、offer 條件核對、簽證文件清單與行前安排逐項跟進。</p></article>
          </div>
        </div>
        ${officialBlock}
        ${readingsBlock}
        <div class="country-route-actions">
          ${country.slug === "australia" ? `<a class="btn btn-dark" href="/australia-office-presence/">打開澳洲成熟路線頁</a><a class="btn btn-light" href="/zh/australia-vet-tafe-pathways/">澳洲 VET / TAFE 職業培訓</a>` : `<a class="btn btn-dark" href="/university-applications/">大學申請評估</a><a class="btn btn-light" href="/international-curriculum-tutoring/">課程與文件準備</a>`}
        </div>
        <p class="source-note">列表為 OTC 網站上的初步目的地索引，不代表正式代理授權、保證錄取或完整院校清單。申請、簽證、監護、入讀和轉學均需按相關學校、大學、政府或專業人士的最新正式要求核對。</p>
      </section>
    `
  });
}

const canadaBilingualHub = {
  zh: {
    language: "zh-Hant",
    current: "zh",
    prefix: "/zh/countries/canada",
    home: "/zh/",
    heroEyebrow: "OTC 加拿大留學 · 2026 官方規則版",
    title: "加拿大留學完整指南",
    subtitle: "選校、申請、學簽、工作與 PGWP，一次整理清楚",
    intro: "先核對 DLI、課程資格、預算與畢業出口，再決定城市和校名。這套雙語專題按加拿大政府 2026 年現行規則整理，適用於 K–12、本科、學院、碩士及博士申請的初步規劃。",
    updated: "資料核查：2026 年 8 月 29 日",
    apply: "申請免費初步評估",
    switchLabel: "English version",
    switchHref: "/countries/canada/",
    back: "返回中文首頁",
    sectionLabel: "決策路線",
    sectionTitle: "六個分區，把加拿大申請拆成可執行步驟",
    sectionIntro: "每一頁均保留加拿大政府官方來源；政策敏感資料不以網路傳言或中介口徑代替。",
    facts: [
      ["DLI ≠ 自動取得 PGWP", "院校必須是 DLI，但同一院校不是每個課程都符合 PGWP；接受 offer 前要核對具體課程。"],
      ["公立碩博免 PAL/TAL", "自 2026 年 1 月 1 日起，公立 DLI 的學位型碩士及博士課程可豁免 PAL/TAL；魁北克仍須核對 CAQ。"],
      ["校外工作 24 小時", "符合條件的學生在正常學期可每週校外工作最多 24 小時，指定假期可不限時數。"],
      ["資金標準即將更新", "單人生活費證明在 2026 年 8 月 31 日前為 CAD 22,895；9 月 1 日起為 CAD 23,448，另計學費與交通。"]
    ],
    schoolTitle: "院校與課程怎麼選",
    schoolIntro: "OTC 可協助加拿大各類院校申請，但公開名單只作方向示例。實際開放課程、截止日期、入學要求及合作服務範圍均須逐案確認。",
    categories: [
      ["大學", "研究型與綜合型大學", ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "McMaster University", "University of Alberta", "Queen's University", "Simon Fraser University"]],
      ["學院", "公立 College / Polytechnic", ["Seneca Polytechnic", "George Brown College", "Humber Polytechnic", "Centennial College", "BCIT", "Fanshawe College"]],
      ["中小學", "公立教育局與私立學校", ["Ontario public school boards", "British Columbia school districts", "Catholic school boards", "Private day and boarding schools"]]
    ],
    stepsTitle: "OTC 申請流程",
    steps: [
      ["01", "背景與目標初評", "整理學歷、成績、英文、預算、入學季、目標省份及畢業後計劃。"],
      ["02", "院校與課程核對", "比較入學要求、DLI、PGWP、CIP、Co-op、學費、城市成本及替代方案。"],
      ["03", "材料與院校申請", "建立個人化清單，核對成績單、推薦信、文書、作品集及學校表格後遞交。"],
      ["04", "Offer 與入學準備", "跟進補件和 offer 條件；學簽文件由官方要求及合資格專業人士意見為準。"]
    ],
    serviceTitle: "加拿大院校申請支援",
    serviceText: "符合基本條件及服務範圍的學生，可獲免費初步評估、選校建議、材料清單、院校申請遞交及一般進度跟進。若院校實際支付招生佣金，任何學生回饋安排以個案書面確認為準。院校申請費、翻譯認證、考試、學費、簽證及第三方費用不包含在免費服務內。OTC 不保證錄取、簽證、PGWP、工作或移民結果。",
    officialTitle: "官方核對入口",
    disclaimer: "本頁為教育資訊與申請協調說明，不構成移民或法律意見。規則會變動，正式申請以 IRCC、EduCanada、院校及相關省份的當日要求為準。"
  },
  en: {
    language: "en",
    current: "applications",
    prefix: "/countries/canada",
    home: "/",
    heroEyebrow: "OTC Canada Study · 2026 official-rules edition",
    title: "Study in Canada: Complete Guide",
    subtitle: "Schools, admissions, study permits, work and PGWP in one clear route",
    intro: "Check the DLI, programme eligibility, budget and graduate outcome before choosing a city or brand name. This bilingual hub is aligned with current Government of Canada rules for K–12, college, undergraduate, master's and doctoral planning.",
    updated: "Sources checked: 29 August 2026",
    apply: "Request a free initial review",
    switchLabel: "中文版",
    switchHref: "/zh/countries/canada/",
    back: "Back to home",
    sectionLabel: "Decision route",
    sectionTitle: "Six sections turn a Canada application into an executable plan",
    sectionIntro: "Every section links to primary Canadian government sources. Policy-sensitive claims are not based on marketing copy or social-media hearsay.",
    facts: [
      ["A DLI does not guarantee a PGWP", "The school must be a DLI, but not every programme at a DLI is PGWP-eligible. Check the exact programme before accepting an offer."],
      ["Public master's and PhD PAL/TAL exemption", "From 1 January 2026, degree-granting master's and doctoral programmes at public DLIs are PAL/TAL-exempt; Quebec requirements still need separate checking."],
      ["24 hours of off-campus work", "Eligible students may work up to 24 hours per week off campus during regular terms and unlimited hours during scheduled breaks."],
      ["Financial threshold changes soon", "For one applicant, living-expense evidence is CAD 22,895 through 31 August 2026 and CAD 23,448 from 1 September, excluding tuition and travel."]
    ],
    schoolTitle: "How to choose a school and programme",
    schoolIntro: "OTC can support applications across Canadian institutions, but the public list below is illustrative. Programme availability, deadlines, entry requirements and service scope are checked case by case.",
    categories: [
      ["Universities", "Research-intensive and comprehensive", ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "McMaster University", "University of Alberta", "Queen's University", "Simon Fraser University"]],
      ["Colleges", "Public colleges and polytechnics", ["Seneca Polytechnic", "George Brown College", "Humber Polytechnic", "Centennial College", "BCIT", "Fanshawe College"]],
      ["K–12", "Public boards and private schools", ["Ontario public school boards", "British Columbia school districts", "Catholic school boards", "Private day and boarding schools"]]
    ],
    stepsTitle: "OTC application workflow",
    steps: [
      ["01", "Profile and goal review", "Organise qualifications, grades, English, budget, intake, target province and post-study goals."],
      ["02", "School and programme checks", "Compare admission, DLI and PGWP status, CIP code, co-op, fees, city costs and fallback choices."],
      ["03", "Documents and applications", "Build a personal checklist and review transcripts, references, statements, portfolios and forms before submission."],
      ["04", "Offer and enrolment preparation", "Track conditions and follow-up. Study-permit documents remain subject to official rules and qualified professional advice where required."]
    ],
    serviceTitle: "Canada application support",
    serviceText: "Eligible applicants within scope may receive a free initial assessment, school-selection guidance, a document checklist, institutional application submission and routine progress follow-up. Where an institution actually pays an enrolment commission, any student rebate is confirmed in writing case by case. School application fees, translation or certification, tests, tuition, immigration fees and third-party costs are excluded. OTC does not guarantee admission, a visa, PGWP eligibility, employment or immigration outcomes.",
    officialTitle: "Official verification links",
    disclaimer: "This is education information and application-coordination guidance, not immigration or legal advice. Rules change; use the current IRCC, EduCanada, institution and provincial requirements at the time of application."
  }
};

const canadaRouteContent = [
  {
    slug: "study-permit",
    zh: { nav: "學簽與 PAL/TAL", desc: "LOA、DLI、資金證明與 2026 豁免", title: "加拿大學簽與 2026 文件規則", intro: "學簽不是只看錄取信：DLI、PAL/TAL 或豁免證明、資金來源與學習計劃需要形成完整證據鏈。", sections: [
      ["申請前的四項核對", ["先取得 DLI 發出的正式錄取信（LOA）。多數專上申請仍須隨申請提交 PAL/TAL；自 2026 年 1 月 1 日起，公立 DLI 的學位型碩士與博士課程可豁免，但須提交符合豁免的證明。魁北克通常仍須按省規取得 CAQ。", "院校會被要求驗證 LOA。文件應放在正確的上傳欄位，其他身份、資金或說明材料不要混入 LOA 欄位。"]],
      ["資金證明不是一個存款數字", ["IRCC 要求證明首年學費、本人及同行家屬生活費、往返交通；課程超過一年，還要說明餘下學年的資金來源。常見證據包括學費收據、貸款、獎學金、資助人文件、近六個月銀行流水及收入來源。", "魁北克以外，單人生活費標準在 2026 年 8 月 31 日前為 CAD 22,895，2026 年 9 月 1 日起為 CAD 23,448；兩個金額均不包括學費和交通。"]],
      ["已淘汰的舊說法", ["SDS 已不應作為現行加速申請路徑介紹；CAD 10,000 的單人生活費標準也已失效。處理時間須使用 IRCC 當日 processing-times 工具，不宜承諾固定週數。"]]
    ]},
    en: { nav: "Study permit & PAL/TAL", desc: "LOA, DLI, finances and 2026 exemptions", title: "Canada Study Permit and 2026 Document Rules", intro: "A study permit requires more than an offer: DLI status, a PAL/TAL or exemption evidence, credible finances and a coherent study plan must form one evidence chain.", sections: [
      ["Four checks before applying", ["Obtain a valid letter of acceptance (LOA) from a DLI. Most post-secondary applicants still submit a PAL/TAL, while degree-granting master's and doctoral programmes at public DLIs are exempt from 1 January 2026 if evidence of the exemption is included. Quebec usually still requires a CAQ under provincial rules.", "Institutions are asked to validate LOAs. Upload the LOA in its dedicated field and place other identity, finance and explanation documents in the correct sections."]],
      ["Financial evidence is not one bank balance", ["IRCC expects first-year tuition, living expenses for the applicant and accompanying family, and travel. For programmes longer than one year, explain how later years will be funded. Evidence may include receipts, loans, scholarships, sponsor records, six months of statements and proof of income sources.", "Outside Quebec, the one-person living-expense threshold is CAD 22,895 through 31 August 2026 and CAD 23,448 from 1 September 2026, excluding tuition and transportation."]],
      ["Retire outdated advice", ["SDS should not be presented as a current accelerated route, and the old CAD 10,000 living-expense figure is obsolete. Use IRCC's live processing-times tool instead of promising a fixed number of weeks."]]
    ]},
    sources: [["IRCC — Study permit documents", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html"], ["IRCC — PAL/TAL rules", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html"], ["IRCC — Financial support", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html"]]
  },
  {
    slug: "programmes",
    zh: { nav: "選校與課程", desc: "University、College、K–12 與 Co-op", title: "加拿大選校、課程與申請材料", intro: "「門檻較低」不等於「風險較低」。正確比較要同時看學術適配、成本、實習、DLI、PGWP 與畢業後職位。", sections: [
      ["四類常見入口", ["University 適合本科、研究型或授課型碩博；College / Polytechnic 偏應用、證書和文憑；K–12 通常由公立教育局或私校處理；Pathway 可補足語言或學術差距，但必須看清最終升讀條件。", "各校自行設定學術、語言、作品集、先修課與文件要求。不要把常見 IELTS 6.5 當成全國統一標準，也不要把「可發學簽」誤解成「畢業可拿 PGWP」。"]],
      ["用六欄比較課程", ["建議每個選項固定記錄：課程名稱與 credential、校區與城市、學費和強制費用、實習安排、DLI/PGWP/CIP 核對結果、畢業職位與省份。排名只能作其中一欄，不能代替其餘五欄。"]],
      ["申請材料", ["常見材料包括成績單、畢業或在讀證明、語言成績、個人陳述、推薦信、CV；藝術設計另有作品集，研究型課程可能要求研究計劃和導師匹配。最終清單以每個課程官網為準。"]]
    ]},
    en: { nav: "Schools & programmes", desc: "University, college, K–12 and co-op", title: "Choosing Canadian Schools, Programmes and Documents", intro: "A lower entry threshold is not automatically lower risk. Compare academic fit, cost, placements, DLI and PGWP status, and realistic graduate roles together.", sections: [
      ["Four common entry routes", ["Universities cover undergraduate and taught or research graduate degrees; colleges and polytechnics are more applied; K–12 applications often run through public boards or private schools; pathways can address language or academic gaps but progression conditions must be explicit.", "Each institution sets its own academic, language, portfolio, prerequisite and document rules. IELTS 6.5 is not a national rule, and permission to host international students does not guarantee PGWP eligibility."]],
      ["Compare every programme in six columns", ["Record the credential, campus and city, tuition and mandatory fees, placement structure, DLI/PGWP/CIP result, and target jobs and province. Ranking is one column, not a substitute for the other five."]],
      ["Application documents", ["Common evidence includes transcripts, graduation or enrolment records, language scores, statements, references and a CV. Creative programmes may require a portfolio; research degrees may require a proposal and supervisor fit. The programme page remains authoritative."]]
    ]},
    sources: [["EduCanada — Start your journey", "https://www.educanada.ca/start-commencez/index.aspx?lang=eng"], ["EduCanada — Apply to school", "https://www.educanada.ca/study-plan-etudes/before-avant/apply-school_canada_demande-ecole.aspx?lang=eng"], ["IRCC — DLI list", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"]]
  },
  {
    slug: "pgwp",
    zh: { nav: "PGWP 核對", desc: "語言、CIP、課程長度與資格", title: "PGWP 不是校名福利：逐項核對資格", intro: "畢業後工作許可取決於院校、具體課程、申請時間、學習情況、語言、可能適用的專業領域及護照有效期。", sections: [
      ["學位與非學位的差別", ["Bachelor、Master、Doctoral 畢業生須達到英語 CLB 7 或法語 NCLC 7，沒有專業領域限制。其他 university programme 一般也是 CLB/NCLC 7；college、polytechnic 及其他非 university programme 一般為 CLB/NCLC 5。", "若學簽申請於 2024 年 11 月 1 日或之後提交，非學位等適用課程通常還要符合當時的 eligible field of study；以六位 CIP code 核對。2026 年 eligible field list 已凍結，不增不減。"]],
      ["工簽長度", ["Master's degree 課程只要至少八個月並符合其他條件，即使短於兩年，也可申請三年 PGWP。其他八個月至不足兩年的課程，PGWP 最長通常不超過課程長度；兩年或以上課程可獲最長三年，並受護照有效期等限制。"]],
      ["三層核對", ["第一層：DLI 是否在官方名單；第二層：該 DLI 的具體課程是否 PGWP eligible；第三層：申請人是否符合語言、CIP、全日制學習、在加學習比例和申請期限等個人條件。"]]
    ]},
    en: { nav: "PGWP checks", desc: "Language, CIP, length and eligibility", title: "A PGWP Is Not a School-Name Benefit", intro: "Eligibility depends on the institution, exact programme, application dates, study record, language, any field requirement and passport validity.", sections: [
      ["Degrees and non-degrees", ["Bachelor's, master's and doctoral graduates need English CLB 7 or French NCLC 7 and have no field-of-study requirement. Other university programmes generally require CLB/NCLC 7; college, polytechnic and other non-university programmes generally require CLB/NCLC 5.", "Where the study-permit application was submitted on or after 1 November 2024, applicable non-degree programmes normally need an eligible field of study, checked by six-digit CIP code. The eligible-field list is frozen for 2026."]],
      ["Permit length", ["A qualifying master's degree of at least eight months can support a three-year PGWP even when the programme is under two years. Other programmes of eight months to under two years may receive up to the programme length; programmes of two years or more may receive up to three years, subject to passport validity and other rules."]],
      ["Three-layer check", ["Check the DLI on the official list, then the exact programme's PGWP status, then the applicant's language, CIP, full-time study, Canadian-study share, timing and other personal conditions."]]
    ]},
    sources: [["IRCC — PGWP eligibility", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"], ["IRCC — Field of study", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility/field-of-study.html"], ["IRCC — PGWP duration", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html"]]
  },
  {
    slug: "work",
    zh: { nav: "在讀工作與 Co-op", desc: "24 小時、指定假期與 2026 實習新規", title: "加拿大在讀工作與 Co-op：2026 新規", intro: "工作資格以學簽條件、課程狀態和 IRCC 現行規則為準；把兼職收入當作資金證明或主要學費來源並不成立。", sections: [
      ["校外工作", ["符合條件、已開始課程的學生在正常學期可校外工作最多每週 24 小時，多份工作合計計算；學校安排的指定假期可不限時數。只有語言課、興趣課或進入正課前的先修課者通常不符合。", "學生要自行保存工時記錄；超時可能導致失去學生身份並影響日後許可。海外僱主的遠程工作在持續符合學簽條件時，一般不計入 24 小時校外上限。"]],
      ["Co-op / Internship 2026 變更", ["自 2026 年 4 月 1 日起，符合條件的加拿大專上國際學生參加課程規定的實習或 Co-op，不再需要另辦 co-op work permit。舊有 permit 可在有效期內繼續使用；具體資格仍要用 IRCC student work placement 頁核對。"]],
      ["把實習當成課程指標", ["比較課程時應問：實習是否必修、學校是否安排僱主、是否帶薪、國際生能否參與、歷年僱主和職位是什麼、未獲 placement 時如何完成學分。"]]
    ]},
    en: { nav: "Work & co-op", desc: "24 hours, breaks and the 2026 placement rule", title: "Working and Co-op Study in Canada: 2026 Rules", intro: "Work eligibility depends on permit conditions, active study and current IRCC rules. Part-time earnings cannot replace the funds required for study-permit purposes.", sections: [
      ["Off-campus work", ["Eligible students who have started their programme may work up to 24 hours per week off campus during regular terms, across all jobs, and unlimited hours during scheduled breaks. Language-only, general-interest and prerequisite-only study normally does not qualify.", "Students must track their hours. Excess work can affect status and future permits. Remote work for an employer outside Canada generally does not count toward the 24-hour limit while study-permit conditions continue to be met."]],
      ["2026 co-op and internship change", ["From 1 April 2026, eligible post-secondary international students no longer need a separate co-op work permit for required student placements. Existing permits remain valid; eligibility still needs checking on IRCC's student-work-placement page."]],
      ["Treat placements as a programme metric", ["Ask whether the placement is compulsory, employer-arranged, paid, open to international students, supported by named past employers, and how credits are completed if no placement is secured."]]
    ]},
    sources: [["IRCC — Work off campus", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html"], ["IRCC — Work as an international student", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html"]]
  },
  {
    slug: "costs",
    zh: { nav: "費用與城市", desc: "學費、生活費、醫保與住宿", title: "加拿大留學費用與城市預算", intro: "預算應以官方生活費底線為起點，再加學費、交通、醫保、教材、押金和城市差異；校外工作收入只宜作補充。", sections: [
      ["2026 學費參考", ["EduCanada 的最新全國參考：公立 K–12 約 CAD 10,000–17,000/年；私立走讀約 15,000–30,000；寄宿私校約 63,000–83,000。College diploma 國際生約 CAD 16,000–25,000/年。", "University 平均學費約為國際本科 CAD 41,746/年、國際研究生 CAD 24,028/年。這些是全國參考，不是任何院校的報價；專業、校區和強制費用會造成很大差異。"]],
      ["城市與住宿", ["多倫多和溫哥華機會集中但住房成本高；蒙特利爾涉及法語和魁省制度；卡爾加里、埃德蒙頓、溫尼伯及大西洋城市常有較低住房成本，但課程與就業匹配仍要逐項查。", "住宿可比較校內宿舍、寄宿家庭、合租和整租。簽約前核對押金、租期、家具、水電網、通勤、租客保險及省級租務規則。"]],
      ["預算公式", ["第一年現金流＝學費及強制費＋IRCC 生活費證明＋交通＋醫保＋教材設備＋住宿押金／首月支出＋應急金。不要用兼職收入填補申請時的資金缺口。"]]
    ]},
    en: { nav: "Costs & cities", desc: "Tuition, living costs, health and housing", title: "Canada Study Costs and City Budgeting", intro: "Start with the official living-funds floor, then add tuition, travel, health cover, books, deposits and city variation. Student work should only supplement the budget.", sections: [
      ["2026 tuition references", ["EduCanada's latest national ranges are CAD 10,000–17,000 a year for public K–12, CAD 15,000–30,000 for private day schools and CAD 63,000–83,000 for private boarding schools. International college diploma tuition is roughly CAD 16,000–25,000 a year.", "Average university tuition is approximately CAD 41,746 a year for international undergraduates and CAD 24,028 for international graduate students. These are national references, not quotations; discipline, campus and mandatory fees can change the total substantially."]],
      ["Cities and housing", ["Toronto and Vancouver concentrate opportunities but carry high housing costs; Montreal adds French-language and Quebec-system considerations; Calgary, Edmonton, Winnipeg and Atlantic cities may cost less, but programme and employment fit still require individual checks.", "Compare residence, homestay, shared and private rentals. Before signing, check deposits, term, furniture, utilities, commute, tenant insurance and provincial tenancy rules."]],
      ["Budget formula", ["First-year cash flow equals tuition and mandatory fees, IRCC living-funds evidence, travel, health insurance, books and equipment, housing deposit and initial costs, plus an emergency reserve. Do not use expected part-time earnings to cover an application-stage funding gap."]]
    ]},
    sources: [["EduCanada — Study costs", "https://www.educanada.ca/programs-programmes/education_cost-cout_education.aspx?lang=eng"], ["IRCC — Financial support", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html"]]
  },
  {
    slug: "application",
    zh: { nav: "申請時間線", desc: "從初評到 offer 與入學", title: "加拿大院校申請時間線與 OTC 支援", intro: "不使用「所有學校同一截止日期」的錯誤模板；每個課程建立獨立時間線，主申、穩妥與替代方案同步推進。", sections: [
      ["建議節奏", ["入學前 12–18 個月：定學段、專業、預算和省份，準備語言與先修課。前 9–12 個月：完成選校、材料和首輪申請。收到 offer 後：核對條件、訂金、退款、PAL/TAL 或豁免、住宿及學簽材料。", "熱門、帶實習、研究型或獎學金課程往往更早截止。公開截止日期不代表名額一定留到最後一天。"]],
      ["提交給 OTC 的初評資料", ["最高學歷與專業、完整成績、英語或法語成績、目標學段和專業、預算、希望入學時間、目標省市、是否重視 PGWP/Co-op、既往拒簽或學習空檔。沒有發生的互動或不存在的文件不會被補寫。"]],
      ["服務邊界", ["OTC 可做教育路線初評、院校與課程核對、材料清單、院校申請遞交和一般進度跟進。院校決定錄取；IRCC 決定簽證與許可；移民法律意見及個案代表由具相應資格人士處理。"]]
    ]},
    en: { nav: "Application timeline", desc: "From initial review to offer and enrolment", title: "Canada Application Timeline and OTC Support", intro: "There is no single national deadline. Build a separate timeline for each programme and advance reach, realistic and fallback choices together.", sections: [
      ["Suggested rhythm", ["12–18 months before entry: set the level, subject, budget and province; prepare language and prerequisites. 9–12 months before: finalise choices, documents and first applications. After an offer: verify conditions, deposit and refund terms, PAL/TAL or exemption, housing and study-permit evidence.", "Competitive, placement-based, research and scholarship programmes often close earlier. A published deadline does not mean places remain available until that date."]],
      ["What OTC needs for an initial review", ["Highest qualification and subject, full grades, English or French results, target level and field, budget, intake, province or city preference, PGWP/co-op priorities, and any study gaps or prior refusals. Missing interactions or documents are not invented."]],
      ["Service boundary", ["OTC can provide education-route screening, institution and programme checks, document lists, institutional application submission and routine follow-up. Institutions decide admission; IRCC decides permits; regulated immigration representation and legal advice remain with appropriately qualified professionals."]]
    ]},
    sources: [["EduCanada — How to apply", "https://www.educanada.ca/study-plan-etudes/before-avant/apply-school_canada_demande-ecole.aspx?lang=eng"], ["IRCC — How to apply for a study permit", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html"]]
  }
];

const canadaOfficialLinks = [
  ["EduCanada", "https://www.educanada.ca/index.aspx?lang=eng"],
  ["IRCC DLI list", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"],
  ["Study permit documents", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html"],
  ["PGWP eligibility", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"],
  ["Work off campus", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html"]
];

function canadaHubPage(locale = "en") {
  const copy = canadaBilingualHub[locale];
  return pageShell({
    title: locale === "zh" ? "加拿大留學完整指南 2026 | OTC Study Hub" : "Study in Canada: Complete 2026 Guide | OTC Study Hub",
    current: copy.current,
    lang: copy.language,
    locale,
    path: `${copy.prefix}/`,
    description: copy.intro,
    body: `
      <section class="page-hero regional-office-hero country-gateway-hero country-canada-2026">
        <div class="band">
          <div class="eyebrow">${copy.heroEyebrow}</div>
          <h1>${copy.title}</h1>
          <h2>${copy.subtitle}</h2>
          <p>${copy.intro}</p>
          <div class="country-hero-chips"><span><strong>2026</strong>${copy.updated}</span><span><strong>6</strong>${locale === "zh" ? "個決策分區" : "decision sections"}</span><span><strong>IRCC</strong>${locale === "zh" ? "官方來源核對" : "primary-source checks"}</span></div>
          <div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Canada study initial review")}">${copy.apply}</a><a class="btn btn-secondary" href="${copy.switchHref}">${copy.switchLabel}</a><a class="btn btn-secondary" href="${copy.home}">${copy.back}</a></div>
        </div>
      </section>
      <section class="band country-gateway-panel">
        <div class="section-head compact-head"><div class="eyebrow">${copy.sectionLabel}</div><h2>${copy.sectionTitle}</h2><p>${copy.sectionIntro}</p></div>
        <div class="country-subnav-grid country-canada-route-grid">${canadaRouteContent.map((route) => `<a href="${copy.prefix}/${route.slug}/"><strong>${route[locale].nav}</strong><span>${route[locale].desc}</span></a>`).join("")}</div>
        <div class="country-official-grid country-canada-facts">${copy.facts.map((fact, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${fact[0]}</strong><p>${fact[1]}</p></article>`).join("")}</div>
        <div class="section-head compact-head"><div class="eyebrow">${locale === "zh" ? "院校版圖" : "Institution map"}</div><h2>${copy.schoolTitle}</h2><p>${copy.schoolIntro}</p></div>
        <div class="country-school-grid country-canada-school-grid">${copy.categories.map((category, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${category[0]}</strong><em>${category[1]}</em><ul>${countryList(category[2])}</ul></article>`).join("")}</div>
        <div class="country-route-steps"><div class="section-head compact-head"><div class="eyebrow">Workflow</div><h2>${copy.stepsTitle}</h2></div><div class="country-route-steps-grid">${copy.steps.map((step) => `<article><b>STEP ${step[0]}</b><strong>${step[1]}</strong><p>${step[2]}</p></article>`).join("")}</div></div>
        <div class="country-official"><div class="section-head compact-head"><div class="eyebrow">OTC Canada</div><h2>${copy.serviceTitle}</h2><p>${copy.serviceText}</p></div><div class="country-route-actions"><a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Canada application support")}">${copy.apply}</a><a class="btn btn-light" href="https://wa.me/447947991572">WhatsApp +44 7947 991572</a></div></div>
        <div class="country-subpage-sources"><strong>${copy.officialTitle}</strong>${canadaOfficialLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} →</a>`).join("")}</div>
        <p class="source-note">${copy.disclaimer}</p>
      </section>`
  });
}

function canadaRoutePage(route, locale = "en") {
  const copy = canadaBilingualHub[locale];
  const section = route[locale];
  const siblings = canadaRouteContent.filter((item) => item.slug !== route.slug);
  return pageShell({
    title: `${section.title} | OTC Study Hub`,
    current: copy.current,
    lang: copy.language,
    locale,
    path: `${copy.prefix}/${route.slug}/`,
    description: section.intro,
    body: `
      <section class="page-hero regional-office-hero country-gateway-hero country-subpage-hero"><div class="band"><a class="country-subpage-crumb" href="${copy.prefix}/">← ${locale === "zh" ? "加拿大留學完整指南" : "Canada study guide"}</a><div class="eyebrow">${copy.updated}</div><h1>${section.title}</h1><p>${section.intro}</p><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Canada " + route.slug + " review")}">${copy.apply}</a><a class="btn btn-secondary" href="${locale === "zh" ? `/countries/canada/${route.slug}/` : `/zh/countries/canada/${route.slug}/`}">${copy.switchLabel}</a></div></div></section>
      <section class="band country-gateway-panel">${section.sections.map(([heading, paragraphs]) => `<div class="country-subpage-section"><div class="section-head compact-head"><h2>${heading}</h2></div>${paragraphs.map((paragraph) => `<p class="country-subpage-text">${paragraph}</p>`).join("")}</div>`).join("")}
        <div class="country-subpage-sources"><strong>${copy.officialTitle}</strong>${route.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} →</a>`).join("")}</div>
        <div class="country-subnav"><div class="section-head compact-head"><div class="eyebrow">${locale === "zh" ? "其他加拿大分區" : "Other Canada sections"}</div></div><div class="country-subnav-grid">${siblings.map((item) => `<a href="${copy.prefix}/${item.slug}/"><strong>${item[locale].nav}</strong><span>${item[locale].desc}</span></a>`).join("")}</div></div>
        <div class="country-route-actions"><a class="btn btn-dark" href="${copy.prefix}/">${locale === "zh" ? "返回加拿大總覽" : "Back to Canada overview"}</a><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Canada application support")}">${copy.apply}</a></div>
        <p class="source-note">${copy.disclaimer}</p>
      </section>`
  });
}

const hongKongBilingualHub = {
  zh: {
    language: "zh-Hant", current: "zh", prefix: "/zh/countries/hong-kong", home: "/zh/",
    switchHref: "/countries/hong-kong/", switchLabel: "English version",
    eyebrow: "海外督導 OTC · 香港留學申請",
    title: "香港留學免費代辦與申請規劃",
    subtitle: "從選校、語言材料到 Offer 與學生簽證，一套透明、可核對的申請流程",
    intro: "以香港八所教資會資助大學及合資格院校課程為核心，按申請人的學術背景、專業方向、語言證明與入學時間逐項核對。符合服務範圍的院校與課程可由海外督導提供免費申請協調；錄取決定始終由院校作出。",
    apply: "申請免費初步評估", back: "返回中文首頁",
    sectionLabel: "先判斷，再遞交", sectionTitle: "香港申請最容易出錯的四個位置",
    sectionIntro: "不要只看學校排名或最後截止日期。真正影響結果的是課程匹配、材料口徑、語言證明和遞交順序。",
    facts: [
      ["課程匹配", "同一所大學不同學院的學術背景、先修科目、工作經驗及補件規則可能完全不同，必須以具體 programme 為單位核對。"],
      ["英語證明", "IELTS／TOEFL 並非所有課程唯一途徑；部分大學會接受合資格的英語授課學位證明，但出具部門、措辭和個別課程要求必須另行確認。"],
      ["滾動錄取", "部分授課型碩士採 rolling admissions。最終截止日不是安全遞交日，材料齊備後應按課程輪次與名額情況安排。"],
      ["錄取與簽證", "Offer 條件、學費訂金、學生簽證／進入許可及入境文件是不同階段；任何一步都不應以非官方承諾代替正式文件。"]
    ],
    universityTitle: "八所教資會資助大學",
    universityIntro: "香港的大學各自獨立設定課程、學術標準與錄取要求。OTC 會按具體課程核對，而不是用一套門檻概括所有院校。",
    serviceTitle: "海外督導香港留學代辦服務範圍",
    serviceIntro: "我們把申請拆成可以追蹤、可以留痕、可以向院校核對的五個階段。",
    serviceSteps: [
      ["01", "背景初評", "核對院校背景、GPA、專業、工作經驗、語言成績、入學年份與預算。"],
      ["02", "選校選專業", "建立衝刺、匹配與穩妥方案，逐項標示硬性門檻、補件風險與截止日期。"],
      ["03", "文件準備", "整理成績單、學位證明、CV、推薦信、個人陳述、MOI／IELTS 及課程指定材料。"],
      ["04", "遞交與跟進", "協調申請表、文件上傳、院校電郵、補件、面試與 Offer 條件核對。"],
      ["05", "接受 Offer", "協助理解接受期限、訂金、簽證文件與行前節點；受監管事項轉介合資格人士。"]
    ],
    documentTitle: "開始評估前，先準備這四組資料",
    documentGroups: [
      ["學術背景", "成績單、在讀／畢業證明、學位證、院校與專業名稱、成績制度"],
      ["語言材料", "IELTS／TOEFL 成績或考試計畫、英文授課證明、出具部門與樣本"],
      ["申請方向", "具體課程、入學年份、職業目標、是否接受跨專業或備選路線"],
      ["個人材料", "CV、工作／實習、推薦人、身份證明；敏感文件只在正式個案流程中提交"]
    ],
    caseLabel: "近期真實問答", caseTitle: "港中文泛商科：可否先交 MOI、之後補 IELTS？",
    caseText: "OTC 按香港中文大學 Graduate School 與 Business School 官方頁面核對：合資格的英語授課學位證明可用於大學層面的最低英語要求，但個別課程仍可能另有要求。因商學院採 rolling admissions，是否等待 IELTS 應由具體課程、材料完整度與輪次共同決定。",
    caseLink: "查看 @overseas_uk 公開回覆",
    feeTitle: "免費代辦不等於隱藏收費或保證錄取",
    feeText: "對符合 OTC 服務範圍的院校與課程，學生不需支付申請代辦服務費。院校申請費、考試費、翻譯／認證、學費訂金、學費、簽證費及其他第三方費用仍由學生承擔。院校保留最終錄取權，OTC 不出售錄取、不代寫材料，也不承諾結果。",
    officialTitle: "官方核對入口",
    disclaimer: "本頁資料核查於 2026 年 8 月 29 日，僅作教育申請資訊與流程說明。院校要求、截止日期、簽證及畢業後安排會變動；正式申請前須以院校、香港入境事務處及其他主管機關的現行規則為準。"
  },
  en: {
    language: "en", current: "applications", prefix: "/countries/hong-kong", home: "/",
    switchHref: "/zh/countries/hong-kong/", switchLabel: "中文版",
    eyebrow: "OTC · HONG KONG STUDY APPLICATIONS",
    title: "Study in Hong Kong: Application Support",
    subtitle: "A transparent route from programme selection and English evidence to offers and student entry permits",
    intro: "OTC supports evidence-led application planning across Hong Kong's eight UGC-funded universities and other eligible programmes. Every case is checked against the named programme, academic profile, English evidence and intake. Application coordination is free for eligible routes within our service scope; admissions decisions remain entirely with the institution.",
    apply: "Request a free initial review", back: "Back to home",
    sectionLabel: "CHECK BEFORE YOU APPLY", sectionTitle: "Four points that decide whether an application is ready",
    sectionIntro: "Rankings and final deadlines are not enough. Programme fit, evidence wording, English-language proof and submission order need to be checked together.",
    facts: [
      ["Programme fit", "Requirements for prior study, prerequisite modules, experience and supplementary documents can vary across programmes at the same university."],
      ["English evidence", "IELTS or TOEFL is not always the only route. Some universities accept an eligible English-medium degree, but the issuing office, wording and programme-level rules still need checking."],
      ["Rolling admissions", "Some taught postgraduate programmes review applications on a rolling basis. A final deadline should not be treated as the safest submission date."],
      ["Offer and immigration", "Offer conditions, deposits, student visas or entry permits and arrival documents are separate stages. Each should be verified from formal documents."]
    ],
    universityTitle: "Hong Kong's eight UGC-funded universities",
    universityIntro: "Each university is autonomous and controls its own curricula, academic standards and student selection. OTC checks named programmes rather than applying one generic threshold.",
    serviceTitle: "What OTC Hong Kong application support covers",
    serviceIntro: "The application is organised into five traceable stages, with decisions and outstanding evidence recorded at each point.",
    serviceSteps: [
      ["01", "Profile review", "Review institution, GPA, subject background, experience, English evidence, intake and budget."],
      ["02", "Programme mapping", "Build aspirational, matched and safer options with entry rules, evidence gaps and deadlines clearly marked."],
      ["03", "Document readiness", "Organise transcripts, degree evidence, CV, references, statement, MOI or IELTS and programme-specific documents."],
      ["04", "Submission follow-up", "Coordinate forms, uploads, university emails, supplementary evidence, interviews and offer-condition checks."],
      ["05", "Offer acceptance", "Explain acceptance dates, deposits, immigration-document stages and pre-arrival milestones; regulated matters are referred appropriately."]
    ],
    documentTitle: "Prepare these four information groups for the initial review",
    documentGroups: [
      ["Academic record", "Transcript, enrolment or graduation evidence, degree certificate, institution, subject and grading scale"],
      ["English evidence", "IELTS or TOEFL result or test plan, medium-of-instruction letter, issuing office and sample wording"],
      ["Study direction", "Named programmes, intake, career objective and openness to adjacent or alternative routes"],
      ["Applicant context", "CV, work or internship history, referees and identity context; sensitive files are collected only in the formal case workflow"]
    ],
    caseLabel: "RECENT PUBLIC Q&A", caseTitle: "CUHK business programmes: submit an MOI letter first and IELTS later?",
    caseText: "OTC checked the CUHK Graduate School and Business School guidance. An eligible English-medium degree can meet the university-level minimum English requirement, but a programme may still set additional rules. Because Business School admissions are rolling, the decision to wait for IELTS depends on the named programme, evidence completeness and admissions round.",
    caseLink: "Read the public @overseas_uk reply",
    feeTitle: "Free application coordination is not a guarantee of admission",
    feeText: "For eligible institutions and programmes within OTC's service scope, students are not charged an application-agency service fee. University application fees, tests, translation or certification, deposits, tuition, visa charges and other third-party costs remain separate. Institutions retain final admissions authority. OTC does not sell admission, write applicant materials, or guarantee outcomes.",
    officialTitle: "Official sources used for checking",
    disclaimer: "Information checked on 29 August 2026 and provided for education-application guidance only. University requirements, deadlines, immigration rules and graduate arrangements can change. Re-check the current institution and Hong Kong Immigration Department pages before acting."
  }
};

const hongKongUniversities = [
  ["HKU", "The University of Hong Kong", "香港大學"], ["CUHK", "The Chinese University of Hong Kong", "香港中文大學"],
  ["HKUST", "The Hong Kong University of Science and Technology", "香港科技大學"], ["PolyU", "The Hong Kong Polytechnic University", "香港理工大學"],
  ["CityU", "City University of Hong Kong", "香港城市大學"], ["HKBU", "Hong Kong Baptist University", "香港浸會大學"],
  ["Lingnan", "Lingnan University", "嶺南大學"], ["EdUHK", "The Education University of Hong Kong", "香港教育大學"]
];

const hongKongOfficialLinks = [
  ["UGC-funded universities", "https://www.ugc.edu.hk/eng/ugc/site/fund_inst.html"],
  ["Hong Kong Immigration Department — Students", "https://www.immd.gov.hk/eng/services/visas/study.html"],
  ["Hong Kong Immigration Department — IANG", "https://www.immd.gov.hk/eng/services/visas/IANG.html"],
  ["CUHK Graduate School — Requirements", "https://www.gs.cuhk.edu.hk/admissions/requirements"],
  ["CUHK Graduate School — Documents Required", "https://www.gs.cuhk.edu.hk/admissions/documents-required"],
  ["CUHK Business School — Application Procedures", "https://masters.bschool.cuhk.edu.hk/apply/"]
];

function hongKongHubPage(locale = "en") {
  const copy = hongKongBilingualHub[locale];
  const isZh = locale === "zh";
  return pageShell({
    title: isZh ? "香港留學免費代辦與申請規劃 | 海外督導 OTC" : "Study in Hong Kong: Application Support | OTC",
    current: copy.current, lang: copy.language, locale, path: `${copy.prefix}/`, description: copy.intro,
    body: `
      <section class="page-hero regional-office-hero country-gateway-hero country-hong-kong-2026"><div class="band"><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.title}</h1><h2>${copy.subtitle}</h2><p>${copy.intro}</p><div class="country-hero-chips"><span><strong>8</strong>${isZh ? "所教資會資助大學" : "UGC-funded universities"}</span><span><strong>2</strong>${isZh ? "語言證明路線核對" : "English-evidence routes"}</span><span><strong>5</strong>${isZh ? "階段申請跟進" : "application stages"}</span></div><div class="actions"><a class="btn btn-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Hong Kong application initial review")}">${copy.apply}</a><a class="btn btn-secondary" href="${copy.switchHref}">${copy.switchLabel}</a><a class="btn btn-secondary" href="${copy.home}">${copy.back}</a></div></div></section>
      <section class="band country-gateway-panel">
        <div class="section-head compact-head"><div class="eyebrow">${copy.sectionLabel}</div><h2>${copy.sectionTitle}</h2><p>${copy.sectionIntro}</p></div>
        <div class="country-official-grid">${copy.facts.map((fact, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${fact[0]}</strong><p>${fact[1]}</p></article>`).join("")}</div>
        <div class="section-head compact-head"><div class="eyebrow">UGC UNIVERSITY MAP</div><h2>${copy.universityTitle}</h2><p>${copy.universityIntro}</p></div>
        <div class="country-school-grid country-hong-kong-university-grid">${hongKongUniversities.map((university) => `<article><b>${university[0]}</b><strong>${isZh ? university[2] : university[1]}</strong><em>${isZh ? university[1] : university[2]}</em></article>`).join("")}</div>
        <div class="country-route-steps"><div class="section-head compact-head"><div class="eyebrow">OTC HONG KONG</div><h2>${copy.serviceTitle}</h2><p>${copy.serviceIntro}</p></div><div class="country-official-grid">${copy.serviceSteps.map((step) => `<article><b>${step[0]}</b><strong>${step[1]}</strong><p>${step[2]}</p></article>`).join("")}</div></div>
        <div class="country-official"><div class="section-head compact-head"><div class="eyebrow">${copy.caseLabel}</div><h2>${copy.caseTitle}</h2><p>${copy.caseText}</p></div><div class="country-route-actions"><a class="btn btn-dark" href="https://www.threads.com/@overseas_uk/post/Dcnk9TUjGzI" target="_blank" rel="noopener">${copy.caseLink}</a><a class="btn btn-light" href="https://www.threads.com/@trini17ty/post/DcnjRV6FPrS" target="_blank" rel="noopener">${isZh ? "查看原始提問" : "View the original question"}</a></div></div>
        <div class="section-head compact-head"><div class="eyebrow">DOCUMENT READINESS</div><h2>${copy.documentTitle}</h2></div>
        <div class="country-school-grid">${copy.documentGroups.map((group, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><strong>${group[0]}</strong><p>${group[1]}</p></article>`).join("")}</div>
        <div class="country-official"><div class="section-head compact-head"><div class="eyebrow">SERVICE TERMS</div><h2>${copy.feeTitle}</h2><p>${copy.feeText}</p></div><div class="country-route-actions"><a class="btn btn-dark" href="mailto:office@overseasuk.com?subject=${encodeURIComponent("Hong Kong study application support")}">${copy.apply}</a><a class="btn btn-light" href="https://wa.me/447947991572">WhatsApp +44 7947 991572</a></div></div>
        <div class="country-subpage-sources"><strong>${copy.officialTitle}</strong>${hongKongOfficialLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} →</a>`).join("")}</div>
        <p class="source-note">${copy.disclaimer}</p>
      </section>`
  });
}

const icelandBilingualHub = {
  zh: {
    language: "zh-Hant", current: "zh", prefix: "/zh/countries/iceland", home: "/zh/",
    switchHref: "/countries/iceland/", switchLabel: "English version",
    eyebrow: "海外督導 OTC · 冰島留學 · 2026 官方資料版",
    title: "冰島留學完整指南",
    subtitle: "先核對授課語言、課程、預算與居留，再決定是否出發",
    intro: "冰島的英文授課優勢主要集中在碩士與博士；英文本科選擇相對有限。OTC 以具體課程而不是國家想像做初評，逐項核對授課語言、學歷銜接、費用、居留與畢業出口。",
    updated: "官方資料核查：2026 年 8 月 30 日",
    apply: "提交冰島留學初評",
    back: "返回中文首頁",
    factsTitle: "先知道這四件事",
    factsIntro: "冰島沒有統一的大學申請系統，各校自行設定課程、截止日期、語言要求與費用。",
    facts: [
      ["7 所大學", "冰島共有七所大學，涵蓋綜合研究、科技、商科、藝術、農業、海洋與區域研究。"],
      ["英文本科較少", "大部分本科以冰島語授課；英語選擇在研究生階段更完整，申請前必須核對課程當年度語言。"],
      ["3–4 年本科", "冰島本科一般為 180–240 ECTS、3–4 年；全日制學生居留通常按每學期 30 ECTS 核對。"],
      ["直接向學校申請", "沒有中央申請平台；國際生截止日期多在春季，但實際日期、文件和申請費以每校每課程為準。"]
    ],
    routesTitle: "六條可行路線，不把『實用』等同於容易",
    routesIntro: "先選可學到的技能與可接受的語言，再看城市和校名。受監管職業還要另外核對冰島語及專業註冊。",
    routes: [
      ["英文本科", "現行選擇有限；以 Study in Iceland 的英語課程目錄及院校頁逐項確認，不預設所有本科都有英文班。"],
      ["英文碩士", "較適合已有相關本科背景者，常見方向包括電腦、工程、能源、商科、心理、極地與海岸管理。"],
      ["科技與產業技能", "可研究電腦、工程、能源與資料方向；部分院校英文教學集中於研究生層級，本科常需冰島語。"],
      ["農業、海洋與環境", "農業大學、Hólar、Akureyri 及西峽灣相關機構有特色，但地點、實習、季節與授課語言須逐課核對。"],
      ["藝術、設計與創意", "冰島藝術大學涵蓋藝術、設計、建築、音樂、舞蹈與藝術教育；作品集、面試與語言條件可能並行。"],
      ["交換與短期學習", "如所屬大學有 Erasmus+ 或校際協議，交換往往比直接申請完整學位更適合先體驗冰島學習與生活。"]
    ],
    universityTitle: "七所大學與初步定位",
    universityIntro: "以下是定位索引，不代表每個方向都有英文學位、當年招生或 OTC 正式代理權；正式選校以具體課程頁為準。",
    admissionTitle: "從想法到入學的五步核對",
    admissionSteps: [
      ["01", "背景初評", "整理最高學歷、完整成績、專業先修、工作經歷、英文／冰島語、預算和目標入學季。"],
      ["02", "課程與語言", "只列當年度仍招生且授課語言適合的課程，標記先修、作品集、研究計畫或面試要求。"],
      ["03", "申請文件", "按校方清單準備護照、成績單、畢業證明、語言成績、CV、動機信、推薦信及課程特定材料。"],
      ["04", "直接申請院校", "冰島無中央申請系統；逐校遞交、支付適用費用、回覆補件並核對 offer 是否無條件。"],
      ["05", "居留與抵達", "非 EEA/EFTA 學生在錄取後準備資金、保險、無犯罪記錄與學生居留；住宿應與申請同步尋找。"]
    ],
    documentsTitle: "初評與正式申請要準備什麼",
    documents: [
      ["學歷與成績", "完整成績單、畢業／在讀證明、學位證明、評分制度及必要的官方翻譯。"],
      ["語言證明", "IELTS／TOEFL 或院校接受的替代證明；冰島語授課本科須另按課程要求證明冰島語。"],
      ["申請敘事", "CV、動機信、推薦人資料；研究型課程可能要求研究構想，藝術課程可能要求作品集或試演。"],
      ["居留文件", "無條件全日制錄取、有效護照、照片、無犯罪記錄、醫療保險及可核驗的生活資金證明。"]
    ],
    costTitle: "費用與生活預算：不要只看『公立免學費』",
    costItems: [
      ["公立與私立不同", "Study in Iceland 說明公立大學一般收註冊／行政費，私立院校可收學費；每校、每課程及身份分類不同。"],
      ["University of Iceland 2026/27", "全年註冊費為 ISK 100,000；非 EEA/EFTA 新申請人另有 ISK 20,000 處理費。2026 秋季入學者暫不收學費。"],
      ["2027 起可能改變", "冰島政府已授權公立大學自 2027 秋季起向非 EEA/EFTA／瑞士學生收學費；University of Iceland 的金額仍待確定。"],
      ["居留資金不是全部預算", "2026 年學生居留最低生活資金為每月 ISK 259,951。這是官方門檻，不是房租、押金、交通、保險與個人生活的完整報價。"],
      ["獎學金須逐校查", "獎學金主要由院校自行提供；冰島政府面向外國學生的代表性項目集中於冰島語、文學與歷史學習，不應預設一般學位都有全額資助。"]
    ],
    residenceTitle: "學生居留、工作與畢業後：三件事分開看",
    residenceItems: [
      ["學生居留", "非 EEA/EFTA 申請人通常須持無條件全日制錄取，每學期 30 ECTS，並提交護照、無犯罪記錄、保險與資金證明。"],
      ["在學工作", "自 2026 年 6 月新規起，有效學生居留持有人在學期間可工作至全職的 60%，假期可全職；毋須另辦工作許可，但不得自僱。"],
      ["何時可以開始工作", "首次申請者在學生居留尚未簽發前不可開始工作；續簽時須申報工作情況，超時可能影響工作權。"],
      ["畢業後求職", "在冰島完成學士、碩士或博士者，可按條件申請畢業後求職居留，作為轉往專業工作居留的橋樑；並非自動取得工作或永居。"]
    ],
    livingTitle: "住宿、醫療、語言與落地生活",
    livingItems: [
      ["住宿", "多數大學附近有學生住房，但名額不保證。應在收到錄取後立即向學校國際處與學生住房機構查詢，同時準備私人租房備選。"],
      ["醫療保險", "EU/EEA 學生通常攜帶 EHIC；非 EU 學生抵達前須備妥合規醫療保險，登記法定住所三個月後才會自動納入冰島國家醫保。"],
      ["冰島語", "英語在日常生活中廣泛使用，但冰島語是官方語言。若目標是本地服務、教育、醫療或長期工作，學習冰島語會直接影響就業選項。"],
      ["氣候與城市", "Reykjavík 機會與服務較集中；Akureyri、Bifröst、Hólar 等地生活尺度不同。需把冬季日照、天氣、交通與實習地點納入選校。"]
    ],
    serviceTitle: "OTC 冰島留學申請支援",
    serviceText: "OTC 可協助做課程與授課語言初篩、背景與先修核對、文件清單、院校申請協調、offer 條件整理，以及學生居留與行前文件的官方入口核對。服務範圍、院校合作狀態及收費在個案啟動前書面確認；OTC 不宣稱未經確認的代理權，不保證錄取、簽證、工作或移民結果。受監管的移民、法律與專業註冊事項會以官方來源或合資格人士意見為準。",
    officialTitle: "官方核對入口",
    disclaimer: "本頁最後核查於 2026 年 8 月 30 日，為教育申請資訊，不構成法律或移民意見。課程、語言、費用、資金門檻、居留與工作規則會變動，行動前請重新核對官方現行版本。"
  },
  en: {
    language: "en", current: "applications", prefix: "/countries/iceland", home: "/",
    switchHref: "/zh/countries/iceland/", switchLabel: "中文版",
    eyebrow: "OTC Study in Iceland · 2026 primary-source edition",
    title: "Study in Iceland: Complete Guide",
    subtitle: "Check language, programme, budget and residence rules before deciding",
    intro: "Iceland's broader English-taught provision is concentrated at master's and doctoral level; English-taught bachelor's choices are comparatively limited. OTC screens the named programme rather than the destination image, checking teaching language, academic fit, costs, residence and graduate outcomes.",
    updated: "Official sources checked: 30 August 2026",
    apply: "Request an Iceland study review",
    back: "Back to home",
    factsTitle: "Four facts to know first",
    factsIntro: "Iceland has no central university application system. Each institution sets its own programmes, deadlines, language rules and fees.",
    facts: [
      ["Seven universities", "Iceland has seven universities across comprehensive research, technology, business, arts, agriculture, marine and regional studies."],
      ["Fewer English bachelor's options", "Most undergraduate degrees are taught in Icelandic. English provision is broader at graduate level and must be checked for the relevant academic year."],
      ["Three- to four-year bachelor's degrees", "Bachelor's degrees are generally 180–240 ECTS over three to four years. Full-time student residence normally means 30 ECTS per semester."],
      ["Apply to each institution", "There is no central system. International deadlines often fall in spring, but exact dates, evidence and application fees are programme-specific."]
    ],
    routesTitle: "Six routes—practical does not mean automatic",
    routesIntro: "Choose a teachable skill and an acceptable language before choosing a city or brand. Regulated careers also require separate Icelandic-language and professional-registration checks.",
    routes: [
      ["English-taught bachelor's", "Current choice is limited. Verify every programme against Study in Iceland and the institution's current page rather than assuming an English cohort exists."],
      ["English-taught master's", "Often suitable for applicants with a related bachelor's degree; possible areas include computing, engineering, energy, business, psychology, polar and coastal studies."],
      ["Technology and industry skills", "Explore computing, engineering, energy and data. Some institutions teach these in English mainly at graduate level, while bachelor's teaching remains Icelandic."],
      ["Agriculture, marine and environment", "The Agricultural University, Hólar, Akureyri and Westfjords-linked providers have distinctive routes; language, location, placement and seasonality need programme-level checking."],
      ["Arts, design and creative study", "The Iceland University of the Arts covers fine art, design, architecture, music, dance and arts education; portfolios, auditions, interviews and language may all apply."],
      ["Exchange and short study", "Where your home institution has an Erasmus+ or bilateral agreement, exchange may be a better first test of Icelandic study and life than a full direct-entry degree."]
    ],
    universityTitle: "The seven universities at a glance",
    universityIntro: "This is a positioning index, not a claim that every field is available in English, open in the current year, or within an OTC agency agreement. Check the named programme.",
    admissionTitle: "Five checks from idea to enrolment",
    admissionSteps: [
      ["01", "Profile review", "Organise qualifications, full grades, subject prerequisites, employment, English or Icelandic, budget and intended intake."],
      ["02", "Programme and language", "Shortlist only programmes open in the relevant year and mark prerequisites, portfolios, research proposals or interview requirements."],
      ["03", "Application evidence", "Prepare passport, transcripts, completion evidence, language results, CV, motivation, references and programme-specific materials."],
      ["04", "Apply directly", "There is no central admissions system. Submit to each institution, pay applicable fees, respond to evidence requests and check whether an offer is unconditional."],
      ["05", "Residence and arrival", "After admission, non-EEA/EFTA students prepare funds, insurance, criminal-record evidence and student residence; start housing searches in parallel."]
    ],
    documentsTitle: "Documents for screening and formal application",
    documents: [
      ["Academic evidence", "Full transcript, enrolment or completion evidence, degree certificate, grading scale and any required official translation."],
      ["Language evidence", "IELTS, TOEFL or an accepted alternative; Icelandic-taught bachelor's degrees require the programme's Icelandic evidence."],
      ["Application narrative", "CV, motivation and referee details; research programmes may need a proposal, while arts programmes may require a portfolio or audition."],
      ["Residence evidence", "Unconditional full-time admission, valid passport, photograph, criminal record, health insurance and verifiable proof of maintenance funds."]
    ],
    costTitle: "Costs and budget: look beyond 'public tuition-free'",
    costItems: [
      ["Public and private differ", "Study in Iceland states that public universities generally charge registration or administration fees, while private institutions may charge tuition. Status and programme matter."],
      ["University of Iceland 2026/27", "The annual registration fee is ISK 100,000 and new non-EEA/EFTA applicants pay an ISK 20,000 processing fee. Autumn 2026 starters are not charged tuition."],
      ["Change may begin in 2027", "The government has authorised public universities to introduce tuition for non-EEA/EFTA and Swiss students from autumn 2027. University of Iceland rates remain to be det…162153 tokens truncated…是 Queensland 歷史悠久的私立男女混合學校之一。Prospectus 強調其「character and scholarship」教育理念、Central Queensland 地區生活、boarding culture、農業/戶外教育、體育藝術活動與大學升學準備。</p></div><div class="school-facts"><article><b>Founded</b><strong>1881</strong><span>One of Australia's long-established grammar schools.</span></article><article><b>Scale</b><strong>1,400+ students</strong><span>Prospectus records Prep-Year 12 and a large secondary cohort.</span></article><article><b>Boarding</b><strong>Queensland boarding route</strong><span>Years 7-12 full accommodation with separate boys/girls houses.</span></article><article><b>CRICOS</b><strong>00507F</strong><span>Secondary Years 7-10 and Years 11-12 courses listed in prospectus.</span></article></div></div><aside class="school-profile-side"><span>OTC reading</span><strong>適合誰？</strong><p>適合希望避開大城市、重視寄宿管理、英語沉浸、戶外教育、體育/農業/藝術資源，以及 Queensland 升學路線的家庭。</p><a href="mailto:office@overseasuk.com?subject=Free%20RGS%20Family%20Screening">免費家庭初篩</a></aside></div></section>
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

function australiaJobSearchCoachingPage(locale = "en") {
  const isZh = locale === "zh";
  const path = isZh ? "/zh/australia-job-search-coaching/" : "/australia-job-search-coaching/";
  const otherPath = isZh ? "/australia-job-search-coaching/" : "/zh/australia-job-search-coaching/";
  const waText = encodeURIComponent(isZh
    ? "你好，我想做澳洲求職路線初評。我目前的身份／工作權、專業、工作經驗與目標城市是："
    : "Hello, I would like an Australia job-search route assessment. My current work rights, field, experience and target city are:");
  const contactHref = `https://wa.me/447947991572?text=${waText}`;
  const fitCards = isZh ? [
    ["A", "準備赴澳", "仍在海外或尚未落地，需要先釐清工作權、城市、職位與入境後首 30 天行動。"],
    ["B", "留學生／畢業生", "需要把課程、實習、project 與 transferable skills 轉成澳洲僱主看得懂的證據。"],
    ["C", "專業轉換", "原有經驗不能直接搬用，需要補技能、作品、local context 或職業資格。"],
    ["D", "已在澳洲求職", "投遞沒有回音、面試轉化低，或需要重新校準職位、履歷與渠道組合。"]
  ] : [
    ["A", "Planning the move", "You are offshore or not yet settled and need clarity on work rights, cities, role targets and the first 30 days."],
    ["B", "Student or graduate", "You need to translate study, placements, projects and transferable skills into evidence Australian employers understand."],
    ["C", "Career changer", "Your existing experience needs a bridge: new skills, a portfolio, local context or a professional-registration check."],
    ["D", "Already job hunting", "Applications are not converting, interviews are stalling, or the role and channel mix needs recalibration."]
  ];
  const modules = isZh ? [
    ["01", "工作權與風險初篩", "按簽證條件、VEVO 結果、可工作時數及時限建立可用邊界；涉及移民策略時轉介註冊專業人士。"],
    ["02", "職業定位與城市策略", "拆解目標職位、州／城市、行業、薪資帶、local experience 缺口與可替代入口。"],
    ["03", "澳洲履歷與求職檔案", "建立 targeted résumé、cover letter、LinkedIn、selection criteria 回應與證據庫。"],
    ["04", "渠道與投遞節奏", "設計職位搜尋詞、公司清單、招聘平台、校友／行業活動與每週追蹤表。"],
    ["05", "面試與溝通訓練", "練習 recruiter screen、STAR 行為題、technical case、薪資與可入職時間表達。"],
    ["06", "資格與技能補強", "核對註冊、licence、skills assessment 或短課程的官方要求，不把課程等同工作或身份結果。"],
    ["07", "落地與入職支援", "處理 TFN、super、工資單、Fair Work 基本權益、入職文件與試用期工作節奏。"]
  ] : [
    ["01", "Work-rights screening", "Map visa conditions, VEVO evidence, permitted hours and expiry points; refer migration strategy to a registered professional."],
    ["02", "Role and city positioning", "Define target roles, location, sector, salary band, local-experience gaps and realistic bridge roles."],
    ["03", "Australian application file", "Build a targeted résumé, cover letter, LinkedIn profile, selection-criteria responses and evidence bank."],
    ["04", "Channels and cadence", "Create search terms, employer lists, platform routes, networking actions and a weekly application tracker."],
    ["05", "Interview communication", "Practise recruiter screens, STAR behavioural answers, technical cases, salary and availability conversations."],
    ["06", "Credentials and upskilling", "Check official registration, licensing, skills-assessment or short-course requirements without equating study with an outcome."],
    ["07", "Landing and onboarding", "Cover TFN, super, payslips, Fair Work basics, onboarding documents and the first weeks at work."]
  ];
  const steps = isZh ? [
    ["01", "初評", "提交身份／工作權、履歷、目標城市與職位。"],
    ["02", "診斷", "找出資格、經驗、英文與市場證據缺口。"],
    ["03", "定位", "確定主目標、備選入口與不投清單。"],
    ["04", "建檔", "完成履歷、LinkedIn、求職信與證據庫。"],
    ["05", "執行", "按週投遞、聯絡、活動與回覆數據調整。"],
    ["06", "轉化", "面試演練、offer 核對、入職與試用期支援。"]
  ] : [
    ["01", "Assess", "Share work-rights evidence, résumé, target city and roles."],
    ["02", "Diagnose", "Identify gaps in credentials, experience, English and market evidence."],
    ["03", "Position", "Set the primary target, bridge route and a clear do-not-apply list."],
    ["04", "Build", "Complete the résumé, LinkedIn, letters and reusable evidence bank."],
    ["05", "Execute", "Run a weekly cycle of applications, outreach, events and data-led adjustments."],
    ["06", "Convert", "Practise interviews, review the offer, onboard and navigate probation."]
  ];
  const packages = isZh ? [
    ["起點", "免費初步分流", "15 分鐘需求整理；確認適合自助、文件包、陪跑或專業轉介。", "先做初評"],
    ["文件", "澳洲求職檔案包", "履歷、LinkedIn、求職信框架、職位關鍵詞與 evidence bank。", "建立求職檔案"],
    ["陪跑", "求職執行陪跑", "職位策略、每週檢視、面試訓練、追蹤表與轉化調整。", "開始陪跑"],
    ["轉型", "專業轉換路線", "資格核對、技能缺口、作品／project、bridge role 與轉介協調。", "規劃轉型"]
  ] : [
    ["Start", "Free route triage", "A 15-minute intake to decide between self-service, a document pack, coaching or professional referral.", "Request triage"],
    ["File", "Australian application pack", "Résumé, LinkedIn, cover-letter framework, role keywords and a reusable evidence bank.", "Build my file"],
    ["Coach", "Job-search coaching", "Role strategy, weekly reviews, interview practice, tracking and conversion adjustments.", "Start coaching"],
    ["Change", "Professional transition", "Credential checks, skills gaps, portfolio or project evidence, bridge roles and referral coordination.", "Plan a transition"]
  ];
  const intake = isZh ? ["目前所在地與目標城市", "簽證類別及 VEVO 工作條件", "最高學歷與專業", "工作／實習年限", "三個目標職位", "英文與面試信心", "專業牌照／註冊狀態", "現有履歷與 LinkedIn", "最早可入職日期", "是否接受 bridge role", "過去投遞與面試數據", "希望 OTC 協助的部分"] : ["Current location and target city", "Visa type and VEVO work conditions", "Highest qualification and field", "Years of work or placement experience", "Three target roles", "English and interview confidence", "Professional registration status", "Current résumé and LinkedIn", "Earliest start date", "Openness to a bridge role", "Application and interview data", "What you want OTC to support"];
  return pageShell({
    title: isZh ? "澳洲找工作輔導與落地就業陪跑 | 海外督導 OTC" : "Australia Job Search Coaching & Career Landing | OTC",
    current: "australia",
    locale: isZh ? "zh" : "en",
    lang: isZh ? "zh-Hant" : "en",
    path,
    alternatePath: otherPath,
    bodyClass: "career-coaching-page",
    description: isZh
      ? "海外督導 OTC 澳洲找工作輔導：工作權初篩、職業定位、澳洲履歷與 LinkedIn、求職渠道、面試訓練、資格核對及落地入職陪跑。"
      : "OTC Australia job-search coaching: work-rights screening, career positioning, Australian résumés and LinkedIn, search channels, interview practice, credential checks and onboarding support.",
    body: `
      <section class="career-hero">
        <div class="band career-hero-grid">
          <div class="career-hero-copy">
            <div class="career-kicker">OTC Australia · Career Landing Desk</div>
            <h1>${isZh ? "把「去澳洲」<br>變成一條可執行的求職路線。" : "Turn ‘moving to Australia’<br>into an executable job-search route."}</h1>
            <p>${isZh ? "從工作權、職業定位與澳洲式求職文件開始，連到渠道、面試、資格核對與落地入職。每一步都有交付物、時間線和明確邊界。" : "Start with work rights, career positioning and an Australian-ready application file, then connect channels, interviews, credential checks and onboarding. Every step has a deliverable, timeline and clear boundary."}</p>
            <div class="career-hero-actions">
              <a class="career-primary" href="${contactHref}" target="_blank" rel="noopener">${isZh ? "免費做路線初評" : "Request a free route assessment"}</a>
              <a class="career-secondary" href="#service-map">${isZh ? "查看服務地圖" : "View the service map"}</a>
            </div>
            <div class="career-proofline">
              <span>${isZh ? "人在海外／澳洲皆可" : "Offshore or in Australia"}</span>
              <span>${isZh ? "中英文雙語" : "English–Chinese support"}</span>
              <span>${isZh ? "不承諾錄用或身份" : "No job or visa guarantees"}</span>
            </div>
          </div>
          <aside class="career-radar" aria-label="${isZh ? "澳洲求職路線雷達" : "Australia career route radar"}">
            <div class="career-radar-orbit orbit-one"></div><div class="career-radar-orbit orbit-two"></div><div class="career-radar-orbit orbit-three"></div>
            <span class="career-radar-core">OTC<small>${isZh ? "求職陪跑" : "Career desk"}</small></span>
            <span class="career-radar-node node-rights"><b>01</b>${isZh ? "工作權" : "Rights"}</span>
            <span class="career-radar-node node-file"><b>03</b>${isZh ? "求職檔案" : "File"}</span>
            <span class="career-radar-node node-market"><b>04</b>${isZh ? "市場" : "Market"}</span>
            <span class="career-radar-node node-interview"><b>05</b>${isZh ? "面試" : "Interview"}</span>
            <span class="career-radar-node node-landing"><b>07</b>${isZh ? "落地" : "Landing"}</span>
          </aside>
        </div>
      </section>

      <section class="band career-signal-strip">
        <div><b>01</b><strong>${isZh ? "先確認可工作邊界" : "Confirm the work boundary"}</strong><span>${isZh ? "身份 ≠ 工作權；以 VEVO 與官方條件為準。" : "Status is not the same as work rights; use VEVO and official conditions."}</span></div>
        <div><b>02</b><strong>${isZh ? "再選職位與城市" : "Then choose role and city"}</strong><span>${isZh ? "用技能、需求與可證明經驗排優先級。" : "Prioritise by skills, demand and provable experience."}</span></div>
        <div><b>03</b><strong>${isZh ? "用數據調整投遞" : "Adjust with real data"}</strong><span>${isZh ? "追蹤回覆、screen、面試與 offer 轉化。" : "Track replies, screens, interviews and offers."}</span></div>
        <div><b>04</b><strong>${isZh ? "把入職也納入規劃" : "Plan beyond the offer"}</strong><span>${isZh ? "合約、工資、super、權益與試用期。" : "Contract, pay, super, rights and probation."}</span></div>
      </section>

      <section class="band compact-band career-fit-section">
        <div class="career-section-head"><span>${isZh ? "適合誰" : "Who it is for"}</span><h2>${isZh ? "你現在卡在哪一段？" : "Where is your search getting stuck?"}</h2><p>${isZh ? "先按處境分流，不用一開始就購買完整方案。" : "Start from your situation; you do not need a full package on day one."}</p></div>
        <div class="career-fit-grid">${fitCards.map(([code, title, text]) => `<article><b>${code}</b><div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}</div>
      </section>

      <section class="career-navy-section" id="service-map">
        <div class="band compact-band career-service-layout">
          <div class="career-section-head is-light"><span>${isZh ? "服務地圖" : "Service map"}</span><h2>${isZh ? "七個模組，按缺口組合。" : "Seven modules, combined around your gaps."}</h2><p>${isZh ? "不是把同一份履歷投遍全澳洲，而是建立一套能反覆測試與修正的求職系統。" : "This is not one résumé sent across Australia. It is a job-search system that can be tested and improved."}</p></div>
          <div class="career-module-list">${modules.map(([num, title, text]) => `<article><b>${num}</b><strong>${title}</strong><p>${text}</p></article>`).join("")}</div>
        </div>
      </section>

      <section class="band compact-band career-journey-section">
        <div class="career-section-head"><span>${isZh ? "工作流程" : "Working journey"}</span><h2>${isZh ? "從初評到入職，六步推進。" : "From assessment to onboarding in six stages."}</h2></div>
        <div class="career-timeline">${steps.map(([num, title, text]) => `<article><b>${num}</b><strong>${title}</strong><p>${text}</p></article>`).join("")}</div>
      </section>

      <section class="career-paper-section">
        <div class="band compact-band">
          <div class="career-section-head"><span>${isZh ? "可選方案" : "Ways to work with us"}</span><h2>${isZh ? "從免費分流到專業轉型。" : "From free triage to professional transition."}</h2><p>${isZh ? "正式費用會按履歷數量、會議次數、專業複雜度與時限書面確認。" : "Final scope and fees are confirmed in writing based on document volume, meetings, complexity and timeline."}</p></div>
          <div class="career-package-grid">${packages.map(([tag, title, text, cta], index) => `<article class="${index === 2 ? "is-featured" : ""}"><span>${tag}</span><strong>${title}</strong><p>${text}</p><a href="${contactHref}" target="_blank" rel="noopener">${cta} →</a></article>`).join("")}</div>
        </div>
      </section>

      <section class="band compact-band career-intake-section">
        <div class="career-intake-copy">
          <span>${isZh ? "初評清單" : "Intake checklist"}</span>
          <h2>${isZh ? "先給我們這 12 項，初評會更準確。" : "Share these 12 items for a sharper first assessment."}</h2>
          <p>${isZh ? "不清楚的項目可以留空；不要傳送網銀密碼、驗證碼或與初評無關的敏感資料。" : "Leave unknown items blank. Do not send banking passwords, verification codes or unrelated sensitive information."}</p>
          <a class="career-primary" href="mailto:office@overseasuk.com?subject=${encodeURIComponent(isZh ? "澳洲求職路線初評" : "Australia job-search route assessment")}">${isZh ? "電郵提交資料" : "Send the intake by email"}</a>
        </div>
        <ol class="career-intake-list">${intake.map((item, index) => `<li><b>${String(index + 1).padStart(2, "0")}</b><span>${item}</span></li>`).join("")}</ol>
      </section>

      <section class="band compact-band career-resources-section">
        <div class="career-section-head"><span>${isZh ? "官方入口" : "Official sources"}</span><h2>${isZh ? "會變動的資料，回到官方核對。" : "Check changing information at its official source."}</h2></div>
        <div class="career-resource-grid">
          <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/work-rights-and-exploitation/work-restrictions" target="_blank" rel="noopener"><b>Home Affairs</b><strong>${isZh ? "工作限制與權利" : "Work restrictions and rights"}</strong><span>immi.homeaffairs.gov.au ↗</span></a>
          <a href="https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" target="_blank" rel="noopener"><b>VEVO</b><strong>${isZh ? "查詢簽證條件" : "Check visa conditions"}</strong><span>immi.homeaffairs.gov.au ↗</span></a>
          <a href="https://www.workforceaustralia.gov.au/" target="_blank" rel="noopener"><b>Workforce Australia</b><strong>${isZh ? "官方就業服務入口" : "Official employment services"}</strong><span>workforceaustralia.gov.au ↗</span></a>
          <a href="https://www.fairwork.gov.au/" target="_blank" rel="noopener"><b>Fair Work</b><strong>${isZh ? "工資與工作權益" : "Pay and workplace rights"}</strong><span>fairwork.gov.au ↗</span></a>
        </div>
        <div class="career-boundary"><strong>${isZh ? "服務邊界" : "Service boundary"}</strong><p>${isZh ? "OTC 提供教育與求職準備、文件整理、能力訓練及流程協調；不保證錄用、僱主擔保、簽證、職業註冊或永久居留。移民、法律、稅務、勞動爭議、醫療及受監管職業判斷，應由官方機構或合資格專業人士處理。" : "OTC provides education and job-search preparation, file organisation, skills coaching and process coordination. We do not guarantee employment, sponsorship, a visa, professional registration or permanent residence. Migration, legal, tax, employment-dispute, medical and regulated-profession matters should be handled by the relevant authority or qualified professional."}</p></div>
      </section>

      <section class="career-final-cta">
        <div class="band"><div><span>Overseas Tutorial Centre · Australia Career Landing</span><h2>${isZh ? "先把背景說清楚，我們再告訴你下一步。" : "Tell us the real starting point; we will map the next move."}</h2><p>${isZh ? "Email: office@overseasuk.com · WhatsApp: +44 7947 991572 · WeChat: overseasus" : "Email: office@overseasuk.com · WhatsApp: +44 7947 991572 · WeChat: overseasus"}</p></div><div><a class="career-gold" href="${contactHref}" target="_blank" rel="noopener">${isZh ? "開始免費初評" : "Start a free assessment"}</a><a class="career-language" href="${otherPath}">${isZh ? "English version" : "中文版"}</a></div></div>
      </section>
    `
  });
}

const australiaJobSearchCoaching = australiaJobSearchCoachingPage("en");
const australiaJobSearchCoachingZh = australiaJobSearchCoachingPage("zh");

const australiaVetTafePathways = pageShell({
  title: "Australia VET / TAFE Pathways | OTC Study Hub",
  current: "about",
  description: "OTC's Australia VET and TAFE pathway coverage for vocational course screening, TAFE-to-university progression, document readiness, professional referral boundaries and China five-city outreach.",
  path: "/australia-vet-tafe-pathways/",
  image: "/assets/otc-australia-vet-tafe-social-card.png",
  body: `
    <section class="page-hero ai-operations-hero vet-tafe-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia · VET / TAFE Route Coverage</div>
        <h1>Australia VET / TAFE Pathway Map</h1>
        <p>OTC is building a structured vocational pathway screening layer for Australian TAFE, VET, English preparation, diploma, advanced diploma and TAFE-to-university progression routes, with China-side outreach now developing through Beijing, Shanghai, Guangzhou, Shenzhen and Xi'an.</p>
        <div class="actions">
          <a class="btn btn-primary" href="/australia-office-presence/">Australia route</a>
          <a class="btn btn-secondary" href="/ai-education-operations/">AI operations</a>
          <a class="btn btn-secondary" href="/zh/australia-vet-tafe-pathways/">中文職業培訓佈局</a>
        </div>
      </div>
    </section>

    ${australiaChinaPromotionPanel("en")}

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
  const isHealthCommunity = context === "health-community";
  const cards = isHealthCommunity ? [
    ["健康與社會照護雙語出版系列", "Overseas Publishing 規劃中的 OTHM Health & Social Care 雙語學習系列，可承接 CHC/HLT、placement、監管邊界與術語表內容。", "/publishing/othm-health-social-care-bilingual-series/", "Publishing Plan"],
    ["Study Guides", "公眾版學習指南入口；後續可加入健康護理術語、placement checklist、CHC/HLT 文件核對模板。", "/study-guides/", "Guides"],
    ["Apps & Tools", "學習工具入口：可延伸到 health/community vocabulary、placement interview readiness、文件缺口自查與 quiz。", "/apps/", "Apps"],
    ["Consultation AI", "快速整理健康護理/社區服務課程問題清單與文件缺口；不構成移民、註冊或法律建議。", `/consultation-chat/?source=vet-tafe-board${query}`, "AI"]
  ] : [
    ["出版物與更新", "Overseas Publishing：出版物、媒體更新與可公開引用的材料入口。", "/publishing/", "Publishing"],
    ["Study Guides", "公眾版學習指南與模組化學習材料（可逐步擴展到職業培訓配套）。", "/study-guides/", "Guides"],
    ["Apps & Tools", "工具與練習入口：詞彙、mock tests、互動學習與資料整理工具。", "/apps/", "Apps"],
    ["Consultation AI", "快速整理問題清單與文件缺口（不構成移民/法律建議）。", `/consultation-chat/?source=vet-tafe-board${query}`, "AI"]
  ];
  return `
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">${tag}</div>
        <h2>${heading}</h2>
        <p>${intro}</p>
      </div>
      <div class="hub-map">
        ${cards.map((card) => zhVetBoardCard(card[0], card[1], card[2], card[3])).join("")}
      </div>
    </section>
  `;
}

function zhVetBoardPage({ title, description, path, image = "/assets/otc-australia-vet-tafe-social-card.png", imageWidth = 1200, imageHeight = 675, imageAlt = "", heroEyebrow, heroTitle, heroIntro, sections, resources, related, toolContext, extraContent = "", layoutClass = "" }) {
  const resourceList = (resources || [])
    .map((resource) => `<li><strong><a href="${resource[1]}" target="_blank" rel="noopener">${resource[0]}</a></strong><span>${resource[1]}</span></li>`)
    .join("");
  const resourceSideLinks = (resources || [])
    .map((resource) => `<a href="${resource[1]}" target="_blank" rel="noopener">${resource[0]}</a>`)
    .join("");
  const relatedCards = (related || []).map((card) => zhVetBoardCard(card[0], card[1], card[2], card[3] || "相關板塊")).join("");
  const stripItems = (sections || []).slice(0, 4);
  const panelItems = (related || []).slice(0, 4);

  return pageShell({
    title,
    current: "zh",
    lang: "zh-Hant",
    locale: "zh",
    description,
    path,
    image,
    imageWidth,
    imageHeight,
    imageAlt: imageAlt || `${heroTitle || title} | OTC 澳洲 VET / TAFE`,
    body: `
      <section class="page-hero services-hero vet-tafe-hero">
        <div class="band">
          <div class="service-hero-layout">
            <div>
              <div class="eyebrow">${heroEyebrow || "OTC Australia · 職業培訓路線"}</div>
              <h1>${heroTitle}</h1>
              <h2>文件初篩 · 官方核對 · 風險邊界</h2>
              <p class="hero-sub">${heroIntro}</p>
            </div>
            <aside class="service-hero-panel">
              <a href="/zh/australia-vet-tafe-pathways/"><strong>職培總覽</strong><span>返回澳洲 VET / TAFE</span></a>
              <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/"><strong>TAFE SA</strong><span>境外中國申請站點</span></a>
              <a href="/zh/australia-vet-tafe-pathways/provider-checklist/"><strong>篩查清單</strong><span>RTO / TAFE 文件核對</span></a>
              <a href="/zh/australia-vet-tafe-pathways/evidence-pack/"><strong>Evidence</strong><span>學生文件包模板</span></a>
            </aside>
          </div>
        </div>
      </section>

      <section class="band service-review-strip">
        ${stripItems.map((item, index) => `
          <a href="#vet-section-${index + 1}"><b>${String(index + 1).padStart(2, "0")}</b><strong>${item[1]}</strong><span>${item[2]}</span></a>
        `).join("")}
      </section>

      <section class="band compact-band service-review-body${layoutClass ? ` ${layoutClass}` : ""}">
        <div class="section-head compact-head service-review-head">
          <span>職培服務台</span>
          <strong>先分流，再核對</strong>
          <p>子頁採用服務導覽台格局：左側是主線板塊，右側是官方入口、下一步和相關子頁。</p>
        </div>
        <div class="service-herald-grid">
          <main class="service-herald-main">
            <section>
              <h2 class="zh-herald-section-head" data-num="01">板塊內容</h2>
              <p>每個板塊都對應「要準備什麼文件、問什麼問題、在哪裡核對、哪些內容需要轉介」。</p>
              <div class="service-situation-grid">
                ${(sections || []).map((block, index) => `
                  <a id="vet-section-${index + 1}" href="#vet-section-${index + 1}">
                    <b>${block[0]}</b>
                    <strong>${block[1]}</strong>
                    <span>${block[2]}</span>
                    <small>${(block[3] || []).slice(0, 3).join(" · ")}</small>
                  </a>
                `).join("")}
              </div>
            </section>
            ${extraContent}
            <section>
              <h2 class="zh-herald-section-head" data-num="02">配套工具</h2>
              <div class="service-route-list">
                <a href="/publishing/"><span>Publishing</span><strong>出版物與更新</strong><em>公開材料、指南、報告與可引用內容。</em></a>
                <a href="/study-guides/"><span>Guides</span><strong>Study Guides</strong><em>學習指南與模組化文件準備材料。</em></a>
                <a href="/apps/"><span>Apps</span><strong>Apps & Tools</strong><em>詞彙、測試、文件缺口與互動工具。</em></a>
                <a href="/consultation-chat/?source=vet-tafe-board&context=${encodeURIComponent(toolContext || heroTitle)}"><span>AI</span><strong>初步分流</strong><em>整理問題清單與文件缺口，不構成移民/法律建議。</em></a>
              </div>
            </section>
            ${(related || []).length ? `
            <section>
              <h2 class="zh-herald-section-head" data-num="03">相關板塊</h2>
              <div class="service-situation-grid tafe-related-grid">${relatedCards}</div>
            </section>
            ` : ""}
          </main>
          <aside class="service-guide-side service-herald-side">
            <div class="service-guide-card is-urgent">
              <span>合規邊界</span>
              <strong>不做保證式<br>表述</strong>
              <p>OTC 做教育協調、文件整理與官方入口核對；移民、法律、執業註冊與就業結果由相應機構或合資格人士處理。</p>
              <a href="/application-service-standards/">查看服務標準</a>
            </div>
            <div class="service-guide-card">
              <span>官方入口</span>
              <strong>先核對再推薦</strong>
              <p>course code、CRICOS、RTO scope、placement、費用與入學要求必須逐項查官方來源。</p>
              <a href="https://training.gov.au/" target="_blank" rel="noopener">training.gov.au</a>
            </div>
            <div class="service-guide-note">
              <b>下一步</b>
              <p>建立 evidence pack：學歷、英文、課程代碼、CV、工作/實習證明、資金與學習計劃問題。</p>
            </div>
            <div class="service-side-links">
              <span>官方連結</span>
              ${resourceSideLinks}
            </div>
            ${(panelItems.length ? `
            <div class="service-mini-index">
              <span>相關子頁</span>
              ${panelItems.map((card) => `<a href="${card[2]}">${card[0]}</a>`).join("")}
            </div>
            ` : "")}
          </aside>
        </div>
      </section>
    `
  });
}

const zhAustraliaVetTafeHub = pageShell({
  title: "澳洲 VET / TAFE 職業培訓路線總覽 | OTC Study Hub",
  current: "zh",
  lang: "zh-Hant",
  locale: "zh",
  description: "OTC 澳洲職業培訓路線總覽：VET/TAFE 板塊化整理，包含中國五城宣傳材料、課程篩查、文件準備、官方查詢入口與合規邊界。",
  path: "/zh/australia-vet-tafe-pathways/",
  image: "/assets/otc-australia-vet-tafe-social-card.png",
  imageWidth: 1200,
  imageHeight: 675,
  imageAlt: "OTC 澳洲 VET / TAFE 職業培訓路線分享報頭",
  body: `
    <section class="page-hero services-hero vet-tafe-hero">
      <div class="band">
        <div class="service-hero-layout">
          <div>
            <div class="eyebrow">OTC Australia · 職業培訓服務台</div>
            <h1>澳洲 VET / TAFE 職業培訓</h1>
            <h2>課程篩查 · 文件包 · 官方核對 · 風險邊界</h2>
            <p class="hero-sub">把職業培訓路線做成可更新的服務台：課程代碼、RTO/TAFE 核對、實習安排、評核方式、升學銜接與轉介邊界。入口乾淨，詳細內容放進子頁。</p>
          </div>
          <aside class="service-hero-panel">
            <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/"><strong>TAFE SA</strong><span>境外中國申請站點</span></a>
            <a href="/zh/australia-vet-tafe-pathways/health-community/"><strong>健康護理</strong><span>CHC / HLT / placement</span></a>
            <a href="/zh/australia-vet-tafe-pathways/tafe-to-university/"><strong>銜接大學</strong><span>credit / progression</span></a>
            <a href="/zh/australia-vet-tafe-pathways/evidence-pack/"><strong>Evidence</strong><span>學生文件包模板</span></a>
          </aside>
        </div>
      </div>
    </section>

    <section class="band service-review-strip">
      <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/"><b>SA</b><strong>TAFE SA</strong><span>境外中國申請與簽證風險初篩</span></a>
      <a href="/zh/australia-vet-tafe-pathways/provider-checklist/"><b>CHK</b><strong>篩查清單</strong><span>course code、CRICOS、RTO、費用</span></a>
      <a href="/zh/australia-vet-tafe-pathways/tafe-to-university/"><b>UNI</b><strong>銜接大學</strong><span>credit / advanced standing 邊界</span></a>
      <a href="/zh/australia-vet-tafe-pathways/evidence-pack/"><b>DOC</b><strong>文件包</strong><span>一頁 evidence pack 與問題清單</span></a>
    </section>

    <section class="band compact-band service-review-body">
      <div class="section-head compact-head service-review-head">
        <span>職培索引</span>
        <strong>按情境進子頁</strong>
        <p>總覽只做分流；課程表、官方入口、文件清單和風險提示放在子頁。</p>
      </div>
      <div class="service-herald-grid">
        <main class="service-herald-main">
          <section>
            <h2 class="zh-herald-section-head" data-num="01">多板塊佈局（子頁面）</h2>
            <p>每個板塊是一個可獨立更新的服務台子頁，便於新增院校、政策入口、常見問題清單與文件模板。</p>
            <div class="service-situation-grid">
              <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/"><b>TAFE SA</b><strong>TAFE SA 境外中國申請</strong><span>院校官網、可辦課程、簽證風險初篩與 OTC 辦理入口。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/health-community/"><b>Health</b><strong>健康護理 / 社區服務</strong><span>護理註冊邊界、placement、CHC/HLT 課程核對。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/trades-construction/"><b>Trades</b><strong>技工 / 建築 / 安全培訓</strong><span>licence 語境、RTO scope、實操評核與安全培訓。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/business-it-creative/"><b>BIT</b><strong>商科 / IT / 創意媒體</strong><span>評核型式、作品集/專題、文書敘事證據。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/provider-checklist/"><b>Check</b><strong>RTO/TAFE 課程篩查清單</strong><span>CRICOS、課程代碼、實習、成本、退費與 evidence。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/tafe-to-university/"><b>Credit</b><strong>TAFE-to-university 銜接</strong><span>credit / advanced standing 的材料、流程與邊界。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/evidence-pack/"><b>Doc</b><strong>學生 evidence pack</strong><span>把材料整理成一頁版，方便提問與快速比對。</span></a>
            </div>
          </section>
          <section>
            <h2 class="zh-herald-section-head" data-num="02">先用官方入口核對</h2>
            <div class="service-route-list">
              <a href="https://training.gov.au/" target="_blank" rel="noopener"><span>Course</span><strong>training.gov.au</strong><em>課程代碼、training package、RTO scope。</em></a>
              <a href="https://cricos.education.gov.au/" target="_blank" rel="noopener"><span>Student visa</span><strong>CRICOS</strong><em>國際學生課程登錄查詢。</em></a>
              <a href="https://www.asqa.gov.au/" target="_blank" rel="noopener"><span>Regulator</span><strong>ASQA</strong><em>職業教育監管與合規入口。</em></a>
              <a href="/zh/insights/tafe-sa-offshore-china-application-guide-2026/"><span>Herald</span><strong>TAFE SA 導報解讀</strong><em>高中畢業、英文打包、CoE package、護理例外。</em></a>
            </div>
          </section>
          <section>
            <h2 class="zh-herald-section-head" data-num="03">OTC 使用方式</h2>
            <div class="service-situation-grid">
              <a href="/zh/australia-vet-tafe-pathways/evidence-pack/"><b>01</b><strong>做一頁 evidence pack</strong><span>學歷/成績單/翻譯、英文、工作/實習、目標方向。</span></a>
              <a href="/zh/australia-vet-tafe-pathways/provider-checklist/"><b>02</b><strong>問 10 個問題</strong><span>入學要求、placement、評核、出勤、費用、時間線。</span></a>
              <a href="/application-service-standards/"><b>03</b><strong>標記需轉介事項</strong><span>移民、註冊、法律/合約、稅務與監管事項。</span></a>
              <a href="/consultation-chat/?source=vet-tafe-hub"><b>AI</b><strong>初步分流</strong><span>先把需求說清楚，再進入對應子頁。</span></a>
            </div>
          </section>
        </main>
        <aside class="service-guide-side service-herald-side">
          <div class="service-guide-card is-urgent">
            <span>首推入口</span>
            <strong>TAFE SA 境外中國申請</strong>
            <p>申請本身不難，重點是簽證風險、英文、年齡、課程邏輯與護理例外。</p>
            <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/">打開站點</a>
          </div>
          <div class="service-guide-card">
            <span>核心原則</span>
            <strong>先核對，再推薦</strong>
            <p>course code、AQF、RTO scope、CRICOS、placement、評核方式與費用，都要有官方來源。</p>
            <a href="/zh/australia-vet-tafe-pathways/provider-checklist/">查看清單</a>
          </div>
          <div class="service-guide-note">
            <b>邊界</b>
            <p>本頁是教育規劃工具，不構成移民、就業、職業註冊、法律或稅務建議。</p>
          </div>
          <div class="service-side-links">
            <span>快速入口</span>
            <a href="/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/">TAFE SA</a>
            <a href="/zh/australia-vet-tafe-pathways/health-community/">健康護理</a>
            <a href="/zh/australia-vet-tafe-pathways/tafe-to-university/">銜接大學</a>
            <a href="/zh/australia-vet-tafe-pathways/evidence-pack/">文件包</a>
          </div>
          <div class="service-mini-index">
            <span>官方網站</span>
            <a href="https://training.gov.au/" target="_blank" rel="noopener">training.gov.au</a>
            <a href="https://cricos.education.gov.au/" target="_blank" rel="noopener">CRICOS</a>
            <a href="https://www.asqa.gov.au/" target="_blank" rel="noopener">ASQA</a>
            <a href="/australia-vet-tafe-pathways/">English map</a>
          </div>
        </aside>
      </div>
    </section>
  `
});

const tafeSaOffshoreChinaExtra = `
  <section class="band compact-band">
    <div class="section-head compact-head">
      <div class="eyebrow">Official Institutions</div>
      <h2>院校、官方網站與 OTC 辦理入口</h2>
      <p>公開頁面只展示院校官方網站和 OTC 文件初篩入口；後台遞交與個案協調由 OTC 收到申請後手動處理。</p>
    </div>
    <div class="article-service-table">
      <table>
        <thead><tr><th>院校 / 路線</th><th>課程方向</th><th>官方網站</th><th>辦理入口</th></tr></thead>
        <tbody>
          <tr><td>TAFE SA International</td><td>工程 Associate Degree</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA International</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Engineering%20route%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA International</td><td>旅遊、酒店與會展管理</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA International</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Tourism%20Hospitality%20route%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Adelaide University</td><td>IT 打包：Certificate IV / Diploma / Bachelor of IT</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.adelaideuni.edu.au/study/" target="_blank" rel="noopener">Adelaide University</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Adelaide%20University%20IT%20package%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Adelaide University</td><td>幼教與 teaching 打包</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.adelaideuni.edu.au/study/" target="_blank" rel="noopener">Adelaide University</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Early%20Childhood%20package%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Adelaide University</td><td>護理打包</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.adelaideuni.edu.au/study/" target="_blank" rel="noopener">Adelaide University</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Nursing%20package%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Adelaide University</td><td>Marketing / Business 打包</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.adelaideuni.edu.au/study/" target="_blank" rel="noopener">Adelaide University</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Marketing%20Business%20package%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Adelaide University</td><td>Screen and Media / Visual Effects 打包</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.adelaideuni.edu.au/study/" target="_blank" rel="noopener">Adelaide University</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Screen%20Media%20Visual%20Effects%20package%20via%20OTC">OTC 辦理</a></td></tr>
          <tr><td>TAFE SA + Flinders University</td><td>部分工程打包路線，按入學季確認</td><td><a href="https://www.tafesa.edu.au/international" target="_blank" rel="noopener">TAFE SA</a> · <a href="https://www.flinders.edu.au/international" target="_blank" rel="noopener">Flinders University International</a></td><td><a class="btn btn-light" href="mailto:office@overseasuk.com?subject=TAFE%20SA%20Flinders%20package%20route%20via%20OTC">OTC 辦理</a></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="band compact-band">
    <div class="section-head compact-head">
      <div class="eyebrow">Visa Risk</div>
      <h2>先篩簽證風險，再決定是否遞交</h2>
      <p>TAFE SA 申請文件通常不難，真正需要 OTC 把關的是學生簽證敘事是否成立。</p>
    </div>
    <div class="vet-tafe-screening-grid">
      <article><span>01</span><strong>年齡與學習連續性</strong><p>21 歲以上或有學習/工作空窗者，要準備更清楚的工作經驗、學習理由與回溯材料。</p></article>
      <article><span>02</span><strong>英文與 ELICOS 打包</strong><p>一般路線可看 IELTS / PTE 與語言課打包；但若需要超過合理長度，應先補英文。</p></article>
      <article><span>03</span><strong>課程級別與方向</strong><p>為什麼讀 TAFE、為什麼選該專業、是否和過往學習/工作背景連得起來。</p></article>
      <article><span>04</span><strong>護理例外</strong><p>護理需先看 AHPRA 式英文、數學測試、體能與註冊邊界，不按普通 TAFE pathway 處理。</p></article>
    </div>
  </section>
`;

const zhAustraliaVetTafeSaOffshoreChina = zhVetBoardPage({
  title: "TAFE SA 境外中國申請路線 | OTC 澳洲 VET / TAFE",
  description: "OTC TAFE SA 境外中國申請路線站點：院校官網、TAFE SA + Adelaide University / Flinders University 打包課程、簽證風險初篩、文件清單與 OTC 辦理入口。",
  path: "/zh/australia-vet-tafe-pathways/tafe-sa-offshore-china/",
  image: "/assets/social/herald-zh-tafe-sa-offshore-china-application-guide-2026.png",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "2026 境外中國學生 TAFE SA 路線解讀分享報頭",
  heroEyebrow: "OTC Australia · TAFE SA route",
  heroTitle: "TAFE SA 境外中國申請：OTC 路線站點",
  heroIntro: "這一頁是 OTC 面向中國家庭的 TAFE SA 申請站點：先公開列出院校官方網站、可辦理課程方向與 OTC 初篩入口，再由 OTC 在收到申請後按個案手動跟進。申請本身不難，重點是簽證風險、英文、年齡、課程邏輯與護理例外。",
  toolContext: "tafe-sa-offshore-china",
  layoutClass: "tafe-sa-board-layout",
  sections: [
    ["Route 01", "境外中國學生初篩", "以高中畢業或同等學歷為主，先看年齡、學歷、英文與學習連續性。", ["Year 12 / 同等學歷", "21 歲以上需特別審", "空窗與工作經驗證據"]],
    ["Route 02", "TAFE SA 直讀與語言打包", "一般路線可按 IELTS / PTE 與 ELICOS 打包設計，但需核對官方當期要求。", ["IELTS / PTE", "ELICOS 週數", "CoE package"]],
    ["Route 03", "TAFE + 大學打包", "TAFE SA 與 Adelaide University / Flinders University 相關銜接需按入學季確認。", ["IT / 幼教 / 護理 / 商科", "工程銜接", "大學學費另核"]],
    ["Route 04", "護理高風險例外", "護理不能按普通 TAFE 申請處理，需先看英文、數學測試與職業註冊邊界。", ["IELTS 7 / PTE 65 口徑", "Maths for Nursing", "AHPRA / NMBA / ANMAC"]],
    ["Route 05", "OTC 文件包", "把材料整理成一頁 evidence pack，再決定是否進入正式遞交。", ["護照/成績單/畢業證", "英文成績", "工作或實習證明", "資金與學習計劃問題"]]
  ],
  resources: [
    ["TAFE SA International", "https://www.tafesa.edu.au/international"],
    ["Adelaide University Study", "https://www.adelaideuni.edu.au/study/"],
    ["Flinders University International", "https://www.flinders.edu.au/international"],
    ["Home Affairs Student visa subclass 500", "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"],
    ["AHPRA English language skills registration standard", "https://www.ahpra.gov.au/Registration/Registration-Standards/English-language-skills/English-language-skills-registration-standard.aspx"]
  ],
  related: [
    ["導報解讀", "閱讀面向家長的 TAFE SA 境外中國申請指南解讀。", "/zh/insights/tafe-sa-offshore-china-application-guide-2026/", "導報"],
    ["RTO/TAFE 篩查清單", "先核對 course code、CRICOS、實習、出勤與費用條款。", "/zh/australia-vet-tafe-pathways/provider-checklist/", "Checklist"],
    ["TAFE-to-university", "銜接與 credit conversation：哪些可比較、哪些不能假設。", "/zh/australia-vet-tafe-pathways/tafe-to-university/", "Progression"],
    ["Evidence pack", "把材料整理成一頁版，便於提問與快速比對。", "/zh/australia-vet-tafe-pathways/evidence-pack/", "Template"]
  ],
  extraContent: tafeSaOffshoreChinaExtra
});

const zhAustraliaVetHealthCommunity = zhVetBoardPage({
  title: "澳洲健康護理與社區服務（VET / TAFE）| OTC 職業培訓板塊",
  description: "澳洲健康護理與社區服務職業培訓板塊：CHC/HLT 課程核對、work placement、CRICOS/RTO 篩查、護理註冊邊界與官方入口。",
  path: "/zh/australia-vet-tafe-pathways/health-community/",
  heroTitle: "健康護理 / 社區服務：VET / TAFE 板塊",
  heroIntro: "把 CHC 社區服務與 HLT 健康護理方向拆成可核對的課程代碼、實習安排、CRICOS/RTO 條件與合規邊界。尤其是護理註冊：課程層級相近不代表可直接執業，需以 AHPRA / NMBA / ANMAC 批准課程為準。",
  toolContext: "health-community",
  sections: [
    ["Board 01", "CHC 社區服務", "Individual Support、Disability、Community Services、Mental Health、Early Childhood 等方向先按 CHC 代碼核對。", ["CHC qualification code", "work placement 時數", "Police / WWC / NDIS screening", "非護理執業資格"]],
    ["Board 02", "HLT 健康護理", "Allied Health Assistance、Health Services Assistance、Pathology、Diploma of Nursing 等方向按 HLT 代碼與監管要求核對。", ["HLT qualification code", "clinical / vocational placement", "supervision 與 logbook", "是否涉及 NMBA 註冊"]],
    ["Board 03", "Placement 實習安排", "海外學生最容易卡在 placement：誰安排、在哪裡做、需要哪些 screening 和保險，必須提前問清楚。", ["placement 時數與場景", "RTO/TAFE 安排責任", "immunisation / checks", "make-up 機制與記錄"]],
    ["Board 04", "護理註冊邊界", "涉及 AHPRA / NMBA / ANMAC 的註冊問題需以官方批准課程與條款為準。", ["相似 Diploma 不等於可註冊", "確認 approved program", "英文與 fit-and-proper 要求", "必要時專業轉介"]]
  ],
  extraContent: `
    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">CHC / HLT map</div>
        <h2>先按課程代碼與實習要求做可核對表。</h2>
        <p>這張表不是完整課程清單，而是海外學生與家庭做第一輪篩查時最常見、最需要釐清的方向。正式入學、簽證、註冊或就業結果，仍以 RTO/TAFE、CRICOS、AHPRA / NMBA / ANMAC 及合格專業人士意見為準。</p>
      </div>
      <div class="report-table-wrap">
        <table>
          <thead>
            <tr>
              <th>類別</th>
              <th>資格代碼 / 課程</th>
              <th>AQF 層級</th>
              <th>Placement / 實習重點</th>
              <th>合規邊界</th>
              <th>核對入口</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CHC · Aged Care / Disability</td>
              <td>CHC33021 Certificate III in Individual Support</td>
              <td>Level 3</td>
              <td>training.gov.au 顯示需至少 120 小時 work placement。</td>
              <td>適合 aged care / disability / home and community 入門；通常需 Police Check、Working with Children Check 或 NDIS worker screening。不是護理註冊資格。</td>
              <td><a href="https://training.gov.au/training/details/CHC33021" target="_blank" rel="noopener">CHC33021</a></td>
            </tr>
            <tr>
              <td>CHC · Community Services</td>
              <td>CHC52021 / CHC52025 Diploma of Community Services</td>
              <td>Level 5</td>
              <td>通常涉及 case management / community placement；各 RTO 版本、release 與實習安排需逐項核對。</td>
              <td>可作 community services / coordinator 方向討論，不等同社工、護理或移民職業評估結果。</td>
              <td><a href="https://training.gov.au/Search?searchTitleOrCode=CHC520" target="_blank" rel="noopener">CHC520 search</a></td>
            </tr>
            <tr>
              <td>HLT · Allied Health</td>
              <td>HLT33021 Certificate III in Allied Health Assistance</td>
              <td>Level 3</td>
              <td>需核對 work placement 時數、supervision、服務場景與 RTO 安排。</td>
              <td>通常為 allied health assistant 輔助角色，不是獨立執業或職業註冊承諾。</td>
              <td><a href="https://training.gov.au/training/details/HLT33021" target="_blank" rel="noopener">HLT33021</a></td>
            </tr>
            <tr>
              <td>HLT · Nursing</td>
              <td>HLT54121 Diploma of Nursing</td>
              <td>Level 5</td>
              <td>training package companion information列出 400 clinical hours；實際安排需核對 provider 與 approved program。</td>
              <td>完成 Diploma of Nursing 只可按 Enrolled Nurse 路徑討論；必須是 ANMAC accredited 並獲 NMBA approved program，不能把普通 HLT Diploma 當作護理註冊路線。</td>
              <td><a href="https://training.gov.au/Training/Details/HLT54121" target="_blank" rel="noopener">HLT54121</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Registration warning</div>
        <h2>護理註冊專區：Diploma of Nursing 不等於 Registered Nurse。</h2>
        <p>海外學生最容易混淆的是「VET Diploma of Nursing」、「Enrolled Nurse」和大學 Bachelor of Nursing / Registered Nurse。頁面必須把這個邊界放在醒目位置。</p>
      </div>
      <div class="vet-tafe-screening-grid">
        <article>
          <span>Step 01</span>
          <strong>查 approved program</strong>
          <p>先在 AHPRA approved programs of study 中核對 provider、campus、qualification 與批准狀態。</p>
        </article>
        <article>
          <span>Step 02</span>
          <strong>核對 clinical placement</strong>
          <p>問清楚 placement 小時、場景、supervision、logbook、make-up 安排與保險。</p>
        </article>
        <article>
          <span>Step 03</span>
          <strong>確認註冊與英文要求</strong>
          <p>NMBA 註冊通常涉及英文、criminal history、recency、fitness to practise 等要求。OTC 可做文件整理，不替代監管判斷。</p>
        </article>
      </div>
      <aside class="ai-operations-note" style="margin-top:18px;">
        <span>公開頁面警示語</span>
        <p>課程層級相近不代表可直接執業；未經批准課程不能承諾護理註冊、職業評估或移民結果。涉及註冊、技能評估與簽證路線時，應轉介 AHPRA / NMBA / ANMAC 或合資格專業人士。</p>
      </aside>
    </section>

    <section class="band compact-band">
      <div class="section-head compact-head">
        <div class="eyebrow">Placement readiness</div>
        <h2>海外學生 placement 前要先問清楚的 10 件事。</h2>
        <p>這個清單用於督導學習中心初步問診，幫學生把「能不能上課」和「能不能完成實習」分開看。</p>
      </div>
      <div class="vet-tafe-screening-grid">
        ${[
          ["01", "課程是否 CRICOS 註冊", "國際學生不能只看 RTO 是否有課，還要核對 CRICOS 與校區。"],
          ["02", "誰安排 placement", "由 TAFE/RTO 安排、學生自找，還是混合模式？要寫清楚。"],
          ["03", "需要哪些 checks", "Police Check、WWC、NDIS screening、immunisation、first aid 等逐項列出。"],
          ["04", "實習場景與班次", "aged care、community、hospital、allied health、早晚夜班是否涉及。"],
          ["05", "缺勤與 make-up", "若因病、簽證、家庭原因缺 placement，如何補時數。"],
          ["06", "OTC 支援邊界", "OTC 協助整理問題、文件與溝通，不承諾 placement、註冊或就業結果。"]
        ].map(([num, title, desc]) => `
          <article>
            <span>${num}</span>
            <strong>${title}</strong>
            <p>${desc}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `,
  resources: [
    ["training.gov.au", "https://training.gov.au/"],
    ["CRICOS", "https://cricos.education.gov.au/"],
    ["AHPRA approved programs of study", "https://www.ahpra.gov.au/Accreditation/Approved-Programs-of-Study.aspx"],
    ["NMBA (Nursing and Midwifery Board of Australia)", "https://www.nursingmidwiferyboard.gov.au/"],
    ["ANMAC", "https://www.anmac.org.au/"],
    ["HLT54121 Diploma of Nursing", "https://training.gov.au/Training/Details/HLT54121"],
    ["CHC33021 Certificate III in Individual Support", "https://training.gov.au/training/details/CHC33021"]
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
  description: "OTC's AI-supported education operations framework for structured student files, qualification mapping, application workflows, tutorial publishing, evidence management, China five-city outreach and Australia route intelligence.",
  path: "/ai-education-operations/",
  body: `
    <section class="page-hero ai-operations-hero">
      <div class="band">
        <div class="eyebrow">OTC Australia · Education Infrastructure</div>
        <h1>AI-Enabled Education Operations</h1>
        <p>OTC is building a practical AI-supported operating layer for student-file organisation, qualification mapping, application coordination, tutorial publishing, China five-city outreach tracking and Australia route intelligence.</p>
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
      const params = new URLSearchParams(window.location.search);

      function escapeHtml(value) {
        return String(value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#39;");
      }

      function tokenize(value) {
        return String(value)
          .toLowerCase()
          .replaceAll("/", " ")
          .replaceAll(",", " ")
          .replaceAll(":", " ")
          .replaceAll(";", " ")
          .replaceAll("(", " ")
          .replaceAll(")", " ")
          .replaceAll("-", " ")
          .replaceAll("–", " ")
          .replaceAll("—", " ")
          .replaceAll("|", " ")
          .split(" ")
          .map((part) => part.trim())
          .filter(Boolean);
      }

      function scoreItem(item, terms) {
        const title = String(item.title || "").toLowerCase();
        const type = String(item.type || "").toLowerCase();
        const desc = String(item.desc || "").toLowerCase();
        const url = String(item.url || "").toLowerCase();
        const haystack = [type, title, desc, url].join(" ");
        const titleTokens = tokenize(title);
        const descTokens = tokenize(desc);
        let score = 0;

        for (const term of terms) {
          if (!haystack.includes(term)) return -1;
          if (title === term) score += 120;
          if (title.startsWith(term)) score += 80;
          if (title.includes(term)) score += 45;
          if (titleTokens.includes(term)) score += 35;
          if (type.includes(term)) score += 18;
          if (descTokens.includes(term)) score += 12;
          if (url.includes(term)) score += 8;
        }

        if (terms.length > 1 && title.includes(terms.join(" "))) score += 40;
        if (String(item.url || "").startsWith("/zh/")) score += 2;
        return score;
      }

      function render(items, query = "") {
        if (query) {
          meta.textContent = items.length + ' result(s) for "' + query + '"';
        } else {
          meta.textContent = data.length + " searchable records";
        }

        if (!items.length) {
          results.innerHTML = \`
            <div class="search-empty-state">
              <strong>No matching results</strong>
              <p>Try a course title, qualification level, institution, country, app name, visa topic or keyword such as OTHM, nursing, Australia, top-up or UCBELT.</p>
            </div>
          \`;
          return;
        }

        results.innerHTML = items.slice(0, 80).map((item) => \`
          <a class="search-result" href="\${item.url}">
            <span>\${escapeHtml(item.type)}</span>
            <strong>\${escapeHtml(item.title)}</strong>
            <p>\${escapeHtml(item.desc)}</p>
          </a>
        \`).join("");
      }

      function doSearch() {
        const rawQuery = input.value.trim();
        const query = rawQuery.toLowerCase();
        if (!query) {
          params.delete("q");
          const cleanUrl = window.location.pathname + (params.toString() ? "?" + params.toString() : "");
          window.history.replaceState({}, "", cleanUrl);
          render(data.slice(0, 18), "");
          return;
        }
        params.set("q", rawQuery);
        window.history.replaceState({}, "", window.location.pathname + "?" + params.toString());

        const terms = tokenize(query);
        const ranked = data
          .map((item) => ({ item, score: scoreItem(item, terms) }))
          .filter((entry) => entry.score >= 0)
          .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
          .map((entry) => entry.item);

        render(ranked, rawQuery);
      }

      input.addEventListener("input", doSearch);
      const preset = params.get("q");
      if (preset) input.value = preset;
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
        <a class="feature" href="/australia-business-landing/"><div class="num">Australia</div><h3>Australia Market Support</h3><p>Education market entry, NSW coordination, China five-city outreach and institutional development support.</p><span>Open Australia support</span></a>
      </div>
      <div style="height:24px"></div>
      <div class="office-notice">
        <div>
          <div class="eyebrow">Sydney Office Notice</div>
          <h2>OTC is establishing an Australian office presence.</h2>
          <p>Overseas Tutorial Centre Ltd is building a practical Australia-facing operating route from NSW: student advisory intake, university application coordination, education-market liaison, publishing and training support, China five-city outreach in Beijing, Shanghai, Guangzhou, Shenzhen and Xi'an, and professional referral where regulated advice is required.</p>
          <a class="office-window-link" href="/australia-office-presence/">Open Australia office route</a>
        </div>
        <div class="office-notice-details">
          <p><strong>Overseas Tutorial Centre Ltd</strong><br>45 Evans St, Balmain, NSW 2041, Australia</p>
          <p>Australian contact: <a href="mailto:x.yan@overseasuk.com">x.yan@overseasuk.com</a><br>UK main telephone / WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
          <div class="office-status">
            <span>Current status</span>
            <strong>Establishing presence + China outreach</strong>
            <p>Education coordination, market-entry support and China-side promotion nodes are being developed first. Regulated Australian legal, migration, tax, financial and accreditation advice remains outside OTC's direct scope.</p>
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
            <span>OTC 协调</span><span><strong>Maria Shaw / Overseas Office</strong></span><span>office@overseasuk.com<br>+44 20 7935 3623<br>WhatsApp +44 7947 991572</span><span>转发确认信、签证信，协调日期；OTC 地址 207 Regent Street, London W1B 3HH</span>
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

if (process.env.OTC_ICELAND_ONLY === "1") {
  write("countries/iceland", icelandHubPage("en"));
  write("zh/countries/iceland", icelandHubPage("zh"));
  process.exit(0);
}

write(".", home);
write("publishing", publishing);
write("publishing/media", publishingMedia);
write("publishing/bilingual-study-support-market-report", bilingualStudySupportMarketReport);
write("zh/publishing/bilingual-study-support-market-report", bilingualStudySupportMarketReportZh);
write("publishing/btec-level-3-business-assignment-writing-toolkit", btecLevel3BusinessAssignmentToolkit);
write("zh/publishing/btec-level-3-business-assignment-writing-toolkit", btecLevel3BusinessAssignmentToolkitZh);
write("publishing/btec-level-3-business-assignment-writing-toolkit/sample", btecLevel3BusinessAssignmentToolkitSample);
write("publishing/ebook-publishing-support", ebookPublishingSupport);
write("publishing/othm-health-social-care-bilingual-series", othmHealthSocialCareBilingualSeries);
write("study-guides", guides);
write("courses", courses);
write("learning-platform", learningPlatform);
write("services", services);
write("zh/services", servicesZh);
serviceProducts.forEach((service) => {
  write(`services/${service.slug}`, serviceDetailPage(service));
});
write("university-applications", universityApplications);
write("insights/credit-alliance", creditAlliance);
write("study-group-2026-applications", studyGroup2026Applications);
write("application-service-standards", applicationServiceStandards);
write("advanced-entry-china-programmes", advancedEntryChinaProgrammes);
write("university-partnerships", universityPartnerships);
write("education-partners", otcPartnerRecruitmentPage("en"));
write("zh/education-partners", otcPartnerRecruitmentPage("zh"));
write("client-portal", clientPortal);
write("parent-portal", parentPortal);
write("student-portal", studentPortal);
write("agent-portal", agentPortal);
regionalOfficePages.forEach((office) => {
  write(`offices/${office.id}`, office.html);
});
countryGatewayData.filter((country) => country.slug !== "australia").forEach((country) => {
  if (country.slug === "canada") {
    write("countries/canada", canadaHubPage("en"));
    write("zh/countries/canada", canadaHubPage("zh"));
    canadaRouteContent.forEach((route) => {
      write(`countries/canada/${route.slug}`, canadaRoutePage(route, "en"));
      write(`zh/countries/canada/${route.slug}`, canadaRoutePage(route, "zh"));
    });
    return;
  }
  if (country.slug === "hong-kong") {
    write("countries/hong-kong", hongKongHubPage("en"));
    write("zh/countries/hong-kong", hongKongHubPage("zh"));
    return;
  }
  write(`countries/${country.slug}`, countryGatewayPage(country));
  (countrySubPages[country.slug] || []).forEach((sub) => {
    write(`countries/${country.slug}/${sub.slug}`, countrySubPage(country, sub));
  });
  if (country.slug === "south-korea") {
    const koreaMain = countryGatewayPage(country);
    write("zh/countries/south-korea", southKoreaChineseMirror(koreaMain, "/zh/countries/south-korea/"));
    southKoreaUniversityData.forEach((university) => {
      write(`countries/south-korea/${university.href.split("/").filter(Boolean).pop()}`, southKoreaUniversityPage(university));
      write(`zh/countries/south-korea/${university.href.split("/").filter(Boolean).pop()}`, southKoreaChineseMirror(southKoreaUniversityPage(university), `/zh/countries/south-korea/${university.href.split("/").filter(Boolean).pop()}/`));
    });
  }
});
write("countries/iceland", icelandHubPage("en"));
write("zh/countries/iceland", icelandHubPage("zh"));
write("zh", chineseEntrance);
write("zh/study-planning", zhStudyPlanning);
write("zh/immigration-info", zhImmigrationInfo);
write("zh/immigration-alliance", zhImmigrationAlliance);
immigrationAllianceCountries.forEach((country) => {
  write(`zh/immigration-alliance/${country[0]}`, zhImmigrationAllianceCountryPage(country));
});
write("zh/study-group-2026-applications", studyGroup2026ApplicationsZh);
write("zh/private-school-alliance", privateSchoolAlliance);
write("zh/private-school-alliance/vietnam", vietnamPrivateSchoolAlliance);
write("private-school-alliance/united-states", privateSchoolUsEnglishPage());
privateSchoolCountryData.forEach((country) => {
  if (country.slug !== "vietnam") {
    write(`zh/private-school-alliance/${country.slug}`, country.slug === "uk" ? privateSchoolUkPage(country) : privateSchoolCountryPage(country));
  }
  country.schools.forEach((school) => {
    if (school.preserveCustomPage) return;
    write(`zh/private-school-alliance/${country.slug}/${school.slug}`, privateSchoolProviderPage(country, school));
  });
});
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
write("summer-school-alliance", summerSchoolAlliance);
write("zh/summer-school-alliance", summerSchoolAlliance);
summerSchoolCountryRoutes.forEach((route) => {
  const page = summerSchoolCountryPage(route);
  write(`summer-school-alliance/${route.slug}`, page);
  write(`zh/summer-school-alliance/${route.slug}`, page);
});
write("summer-school-alliance/united-states/programmes", unitedStatesProgrammesPage());
write("zh/summer-school-alliance/united-states/programmes", unitedStatesProgrammesPage());
write("summer-school-alliance/malaysia/programmes", malaysiaProgrammesPage());
write("zh/summer-school-alliance/malaysia/programmes", malaysiaProgrammesPage());
write("summer-school-alliance/canada/programmes", canadaProgrammesPage());
write("zh/summer-school-alliance/canada/programmes", canadaProgrammesPage());
write("summer-school-alliance/ireland/programmes", irelandProgrammesPage());
write("zh/summer-school-alliance/ireland/programmes", irelandProgrammesPage());
write("summer-school-alliance/singapore/programmes", singaporeProgrammesPage());
write("zh/summer-school-alliance/singapore/programmes", singaporeProgrammesPage());
write("summer-school-alliance/thailand/programmes", thailandProgrammesPage());
write("zh/summer-school-alliance/thailand/programmes", thailandProgrammesPage());
write("summer-school-alliance/new-zealand/programmes", newZealandProgrammesPage());
write("zh/summer-school-alliance/new-zealand/programmes", newZealandProgrammesPage());
write("summer-school-alliance/australia/programmes", australiaProgrammesPage());
write("zh/summer-school-alliance/australia/programmes", australiaProgrammesPage());
write("summer-school-alliance/uk/programmes", ukProgrammesPage());
write("zh/summer-school-alliance/uk/programmes", ukProgrammesPage());
write("australia-business-landing", australiaBusinessLanding);
write("australia", australiaPathwaysLanding);
write("australia-job-search-coaching", australiaJobSearchCoaching);
write("zh/australia-job-search-coaching", australiaJobSearchCoachingZh);
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
write("zh/australia-vet-tafe-pathways/tafe-sa-offshore-china", zhAustraliaVetTafeSaOffshoreChina);
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
zhReviewColumns.forEach((column, index) => {
  write(`zh/insights/${column.key}`, zhReviewColumnPage(column, index));
});
insightsArticles.forEach((article) => {
  if (!article.chineseOnly) write(`insights/${article.slug}`, insightArticlePage(article));
  write(`zh/insights/${article.slug}`, insightArticlePageZh(article));
});
write("search", search);
write("about", about);
write("lms-review", lmsReview);
write("lms-review/wang-zhuoying-summer-2026", wangZhuoyingSummerGuide);

[
  "/ai-business-studio/",
  "/apps/nclex-rn-bilingual-demo/",
  "/apps/nclex-rn-bilingual-trainer/",
  "/apps/advanced-vocabulary/"
].forEach((publicPath) => generatedRoutes.push(publicPath));

fs.writeFileSync(path.join(root, "vercel.json"), JSON.stringify({
  cleanUrls: true,
  trailingSlash: true,
  redirects: [
    {
      source: "/countries/canada/finance/",
      destination: "/countries/canada/costs/",
      permanent: true
    },
    {
      source: "/countries/canada/living/",
      destination: "/countries/canada/costs/",
      permanent: true
    },
    {
      source: "/countries/canada/immigration/",
      destination: "/countries/canada/pgwp/",
      permanent: true
    },
    {
      source: "/zh/course-selection-guide/",
      destination: "/zh/course-selection-alliance/",
      permanent: true
    },
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

const sitemapExcludedRoutes = new Set([
  "/client-portal/",
  "/parent-portal/",
  "/student-portal/",
  "/agent-portal/"
]);

const sitemap = [...new Set(generatedRoutes)]
  .filter((publicPath) => !sitemapExcludedRoutes.has(publicPath))
  .sort()
  .map((publicPath) => {
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
- /publishing/bilingual-study-support-market-report/
- /zh/publishing/bilingual-study-support-market-report/
- /publishing/btec-level-3-business-assignment-writing-toolkit/
- /zh/publishing/btec-level-3-business-assignment-writing-toolkit/
- /publishing/btec-level-3-business-assignment-writing-toolkit/sample/
- /courses/
- /services/
- /zh/services/
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
- /ai-business-studio/
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

## 留學導報文章編輯 Prompt

2026-07-25 起的新文章預設採用「置中單欄正文＋底部資訊卡」版型：正文保持適合長文閱讀的行寬，原側欄的速讀、類型卡與官方資源移到正文下方，桌面橫排、手機直排，不再建立會隨正文等高拉伸的右側空欄。此規則由文章日期自動套用；特殊稿件可用 \`heraldLayout: "stacked"\` 主動套用，或以 \`heraldLayout: "legacy-sidebar"\` 明確保留舊雙欄版型。

底部資訊卡版型會自動採用精簡側欄內容，只保留速讀、3-4 張重點卡和官方資源。發布或改稿前仍應檢查正文密度，必要時加入可掃描表格、流程清單、提交前核對、常見錯誤修正或小案例。

導報文章不要把自己放進 \`relatedReadings\`。樣本發布後用本地頁面檢查桌面版與手機版：正文應保持適合長文閱讀的行寬；底部資訊卡在桌面不得超出三欄，手機必須依次直排，頁面不得出現橫向溢出。

## 新建網頁 Prompt：服務導覽台格局

新建 OTC 公開路線頁、服務頁、暑校頁、VET/TAFE 頁或 provider pathway 頁時，優先使用「服務導覽台 / Service Review Desk」格局：壓縮報頭、右側 4 個高價值入口、四項頂部 action strip、左側主流程、右側側欄導引。優先復用 \`service-herald-grid\`、\`service-herald-main\`、\`service-guide-side\`、\`service-situation-grid\`、\`service-route-list\`、\`service-guide-card\`、\`service-side-links\` 和 \`service-mini-index\`。

\`/zh/australia-vet-tafe-pathways/\` 及其所有子頁固定採用服務導覽台格局：總覽只做乾淨分流，詳細課程表、官方入口、文件清單和風險提示放在子頁。不要用散亂等寬卡片作為主要架構。若列出院校或 provider，必須顯示院校官方網站與「通過 OTC 辦理」或相應 OTC action button。

公開頁只說 OTC 進行文件初篩、官方來源核對、教育協調與個案跟進；不得披露上級代理鏈、私有平台、商業條款、內部轉介或後台交接記錄。移民、法律、稅務、就業合約、醫療註冊與專業執照等受監管事項，一律寫成官方核對或合資格人士轉介。
`);

console.log("Generated OTC Study Hub static prototype.");
