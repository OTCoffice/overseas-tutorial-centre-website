const fs = require("fs");
const path = require("path");
const { pageShell, productCards, productShelf } = require("./site");

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

function publishingLineCards() {
  return publishingLines.map((line) => `
    <a href="/publishing/"><b>${line.code}</b><strong>${line.title}</strong><span>${line.desc}</span></a>
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
  return `
    <div class="translate-entry">
      <button type="button" data-translate-page>Translate page</button>
      <span>Use browser or Google Translate for Chinese / other languages.</span>
    </div>
    <script>
      document.querySelector("[data-translate-page]")?.addEventListener("click", () => {
        const url = window.location.href;
        window.open("https://translate.google.com/translate?sl=auto&tl=zh-CN&u=" + encodeURIComponent(url), "_blank", "noopener");
      });
    </script>
  `;
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

function searchItems() {
  const pages = [
    ["Home", "/", "OTC Study Hub overview for consulting, courses, apps and publishing."],
    ["Education Consulting / Global Study Advisory", "/resources/", "Worldwide English-taught education consulting, transfer, guardianship, appeals and complex cases."],
    ["Consultation AI", "/consultation-chat/", "Instant first-response guidance for education consulting cases."],
    ["Courses", "/courses/", "OTHM qualifications, external programme support, academic tutoring and progression guidance."],
    ["OTHM Qualifications", "/othm-qualifications/", "Regulated OTHM qualification map, approved/TBC status and level-based enquiry routes."],
    ["External Programme Support", "/external-programme-support/", "OU, BTEC, Pearson, university modules, foundation / pathway and recognised external programme tutoring support."],
    ["Academic Tutoring", "/academic-tutoring/", "Academic writing, business tutoring, research skills, academic English and study-skills support."],
    ["Guidance & Progression", "/guidance-progression/", "Study-route planning, top-up review, learner profile organisation and progression guidance."],
    ["Apps & Tools", "/apps/", "UCBELT, CE exam app, CSCS/SIA planned tools, vocabulary and quiz systems."],
    ["Publishing", "/publishing/", "Overseas Publishing editorial lines, second-edition review updates and author services."],
    ["Study Guides", "/study-guides/", "OTC OTHM Level 5 Business Management study companion catalogue; OTHM-related titles temporarily withdrawn from Payhip pending second-edition and logo-sample review."],
    ["About OTC", "/about/", "Overseas Tutorial Centre, Overseas Publishing and overseas education services."]
  ].map(([title, url, desc]) => ({ type: "Page", title, url, desc }));

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
    desc: `${unit}. OTHM Level 5 Business Management public bookshop edition. ISBN ${isbn}. OTHM-related Payhip listing temporarily withdrawn pending second-edition review.`
  }));

  const externalSupport = externalProgrammeRoutes.map((item) => ({
    type: "External Support",
    title: item.title,
    url: `/external-programme-support/${item.id}/`,
    desc: `${item.zh}. ${item.desc} Subjects: ${item.subjects.map((row) => row[0]).join(", ")}. Levels: ${item.levels.join(", ")}.`
  }));

  return [...pages, ...externalSupport, ...qualifications, ...books];
}

function write(route, html) {
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const home = pageShell({
  title: "Overseas Tutorial Centre (OTC) Study Hub | Consulting, Courses, Apps & Publishing",
  current: "home",
  body: `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">Education Consulting · Tutorial Support · Publishing</div>
          <h1>OTC Study Hub</h1>
          <p>Overseas Tutorial Centre's structured entrance for education consulting, course support, exam preparation tools and bilingual publishing.</p>
          <div class="hero-directory">
            <a href="/resources/"><strong>Consulting</strong><span>Pathway planning, applications, student and parent guidance</span></a>
            <a href="/courses/"><strong>Courses</strong><span>OTC course support entrances, qualification pathways and learning plans</span></a>
            <a href="/apps/"><strong>Tutorial & Apps</strong><span>Speaking practice, mock tests, vocabulary review and tutor tools</span></a>
            <a href="/publishing/"><strong>Publishing</strong><span>Research publishing, study companions, digital products and author services</span></a>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/apps/ucbelt-speaking/#embedded-ucbelt-app">Open UCBELT App</a>
            <a class="btn btn-secondary" href="/courses/">Course Index</a>
            <a class="btn btn-secondary" href="/publishing/">Publishing Updates</a>
          </div>
        </div>
        <aside class="hero-panel">
          <div class="panel-label">Current Priority</div>
          <div class="hub-map">
            <div class="hub-item"><strong>UCBELT Speaking Preparation</strong><span>10 themed topic sets · 10 full mock sets · 640 bilingual vocabulary items.</span></div>
            <div class="hub-item"><strong>OTHM Level 5 Business Management</strong><span>Six-unit course support and bilingual study companion series.</span></div>
            <div class="hub-item"><strong>Overseas Publishing Catalogue</strong><span>Academic research, bilingual study guides, practical books, apps and self-publishing services.</span></div>
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
        <article><b>01</b><strong>Consulting</strong><span>Study planning, university pathway notes, application explainers and family guidance.</span></article>
        <article><b>02</b><strong>Courses</strong><span>Course support entrances for current and future OTC programmes.</span></article>
        <article><b>03</b><strong>Tutorial & Apps</strong><span>Exam preparation tools, speaking practice, self-review and tutor modes.</span></article>
        <article><b>04</b><strong>Publishing</strong><span>Bilingual study companions, public bookshop editions and second-edition review updates.</span></article>
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

    <section class="band publishing-overview">
      <div class="section-head compact-head">
        <div class="eyebrow">Overseas Publishing</div>
        <h2>A publishing house structure with room to grow.</h2>
        <p>Overseas Publishing is organised as a long-term publishing programme, not only a PDF shop: research, education, practical guides, literature, digital products and self-publishing services sit under one editorial system.</p>
      </div>
      <div class="publishing-layout">
        <div class="publishing-categories">${publishingLineCards()}</div>
        <aside class="series-shelf">
          <div class="shelf-head">
            <div>
              <div class="eyebrow">Second Edition Review</div>
              <h3>OTHM Level 5 Business Management</h3>
              <p>6 books · Payhip listings temporarily withdrawn · second-edition and logo samples pending OTHM review</p>
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
    <section class="band">
      <div class="section-head">
        <h2>Six editorial lines, one public catalogue.</h2>
        <p>This structure keeps the OTHM-related study guide record transparent while the second-edition review work is underway, and leaves space for research books, life guides, apps, translation projects and self-publishing services.</p>
      </div>
      <div class="publishing-categories publishing-categories-wide">${publishingLineCards()}</div>
      <div style="height:28px"></div>
      <div class="notice">Publishing status update: OTHM-related study guide listings have been temporarily withdrawn from Payhip. OTC is preparing second-edition samples, including logo-use samples, for OTHM review before any renewed public listing. Six first-edition public bookshop records remain documented with assigned ISBNs and qualification number 610/1527/1.</div>
      <div style="height:28px"></div>
      <div class="series-shelf">
        <div class="shelf-head">
          <div>
            <div class="eyebrow">Education & Study Companions</div>
            <h3>OTHM Level 5 Business Management</h3>
            <p>6 books · second-edition review preparation · not currently sold on Payhip</p>
          </div>
          <a href="/study-guides/">Full catalogue</a>
        </div>
        <div class="shelf-grid shelf-grid-wide">${productShelf()}</div>
      </div>
    </section>
  `
});

const guides = pageShell({
  title: "Study Guides | OTC Study Hub",
  current: "publishing",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Overseas Publishing</div><h1>Study Guides</h1><p>Independent bilingual study companion records. OTHM-related titles are currently in second-edition review preparation and are not being sold on Payhip.</p></div></section>
    <section class="band">
      <div class="notice">Series status: six OTHM Level 5 Diploma in Business Management study companions were completed with assigned ISBNs. OTHM-related Payhip listings have been temporarily withdrawn while OTC prepares second-edition samples and logo-use samples for OTHM review. Publishing compliance: OTC study companions are independent learning resources and do not represent OTHM endorsement unless written permission is obtained.</div>
      <div style="height:28px"></div>
      <div class="product-grid">${productCards()}</div>
    </section>
  `
});

const othm = pageShell({
  title: "OTHM Level 5 Business Management Series | OTC Study Hub",
  current: "othm",
  body: `
    <section class="page-hero"><div class="band"><div class="eyebrow">Second Edition Review Preparation</div><h1>OTHM Level 5 Business Management</h1><p>Six independent OTC study companion records supporting adult learners with business concepts, bilingual terminology, study activities and self-checklists. Qualification No. 610/1527/1. OTHM-related listings are temporarily withdrawn from Payhip pending second-edition and logo-sample review.</p></div></section>
    <section class="band two-col">
      <div>
        <div class="section-head">
          <h2>A structured six-unit learning series.</h2>
          <p>The series translates teaching experience into learning support while keeping assessment records, learner submissions and official quality forms out of published materials. Current work is focused on second-edition review preparation before any renewed public listing.</p>
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
        <a class="course-system-entry" href="/othm-qualifications/">
          <b>01</b>
          <h3>OTHM Qualifications</h3>
          <p>Regulated qualification delivery, organised by RQF level and official specification. Delivery only where OTC has current approval, staffing, resources and cohort arrangements.</p>
          <span>Approved / current / TBC status must be checked before enrolment.</span>
        </a>
        <a class="course-system-entry" href="/external-programme-support/">
          <b>02</b>
          <h3>External Programme Support</h3>
          <p>OU, BTEC, Pearson, university module, foundation / pathway and other recognised external-programme support.</p>
          <span>Academic tutoring only. Learners remain registered with their own awarding body, university, college or course provider.</span>
        </a>
        <a class="course-system-entry" href="/academic-tutoring/">
          <b>03</b>
          <h3>Academic Tutoring</h3>
          <p>Structured support in writing, business, management, research skills, academic English, study skills and progression preparation.</p>
          <span>Focused on independent learning, not assignment completion or model answers.</span>
        </a>
        <a class="course-system-entry" href="/guidance-progression/">
          <b>04</b>
          <h3>Guidance & Progression</h3>
          <p>Study-route planning, top-up route review, academic profile organisation and ongoing learner guidance packages.</p>
          <span>Planning support only; not guaranteed admission, visa, credit-transfer or placement service.</span>
        </a>
      </div>
    </section>

    <section class="band compact-band">
      <div class="notice">This page is a course-system gateway. Select one of the four entrances above to open the relevant subpage. Availability depends on approval status, current staff expertise, learner demand, resources, cohort opening and applicable awarding-body requirements.</div>
    </section>
  `
});

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
          <p>CE driving, CSCS construction card, SIA security licence and future professional-practice drills.</p>
          <ul>
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
            <li><span>Planned</span> Academic English speaking timer suite</li>
            <li><span>Planned</span> Vocabulary trainer templates</li>
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
        <article><strong>UCBELT Speaking Practice</strong><span>Live app · £0.99</span><p>Themed topic practice plus full mock sets, 640 bilingual vocabulary items and teacher mode.</p></article>
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
        <article><span>01</span><strong>CSCS Practice App</strong><p>Use the CE app structure for construction-card quiz practice, terminology review and mock-test flow.</p></article>
        <article><span>02</span><strong>SIA Security Licence Practice App</strong><p>Convert the SIA guide into repeatable scenario questions, knowledge checks and licence vocabulary drills.</p></article>
        <article><span>03</span><strong>OTHM L5BM Unit Quiz Bank</strong><p>MCQs, bilingual glossary flashcards and self-checklists for each of the six public bookshop editions.</p></article>
        <article><span>04</span><strong>Academic English / Speaking Tool Suite</strong><p>Expand UCBELT into reusable speaking timers, answer builders, vocabulary banks and tutor feedback utilities.</p></article>
        <article><span>05</span><strong>Payhip Book Companion Download Packs</strong><p>Attach templates, worksheets and checklists to books so PDF products become richer learning packages.</p></article>
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
      <div class="consulting-levels">
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
        <article class="resource-row"><div><h3>Publishing & Practical Guides</h3><p>Bilingual books, practical guides and public bookshop editions that turn advisory experience into reusable learning resources.</p></div><a class="btn btn-light" href="/publishing/">Publishing</a></article>
      </div>
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
      <div class="feature-grid">
        <article class="feature"><div class="num">Consulting</div><h3>Overseas Education Consulting</h3><p>Education planning, pathway guidance and practical student support.</p></article>
        <article class="feature"><div class="num">Tutorial</div><h3>Overseas Tutorial Centre</h3><p>Teaching support, English preparation, learner resources and tutor-led practice.</p></article>
        <article class="feature"><div class="num">Publishing</div><h3>Overseas Publishing House</h3><p>Bilingual digital books, study guides, practical resources and public bookshop editions.</p></article>
      </div>
      <div style="height:24px"></div>
      <div class="office-notice">
        <div>
          <div class="eyebrow">Sydney Office Notice</div>
          <h2>OTC is establishing an Australian office presence.</h2>
          <p>Overseas Tutorial Centre Ltd has secured an office address in Sydney to support education consulting, student support coordination, publishing liaison and local professional communication in Australia.</p>
        </div>
        <div class="office-notice-details">
          <p><strong>Overseas Tutorial Centre Ltd</strong><br>45 Evans St, Balmain, NSW 2041, Australia</p>
          <p>Australian contact: <a href="mailto:x.yan@overseasuk.com">x.yan@overseasuk.com</a><br>UK main telephone / WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
        </div>
      </div>
      <div style="height:24px"></div>
      <div class="about-panel">
        <h3>Contact</h3>
        <p>3rd Floor, 207 Regent Street, London W1B 3HH, United Kingdom</p>
        <p>Email: <a href="mailto:office@overseasuk.com">office@overseasuk.com</a> · Website: <a href="https://www.overseasuk.com">www.overseasuk.com</a></p>
        <p>WeChat: <strong>overseasus</strong> · WhatsApp: <a href="https://wa.me/447947991572">+44 7947 991572</a></p>
      </div>
    </section>
  `
});

write(".", home);
write("publishing", publishing);
write("study-guides", guides);
write("courses", courses);
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
write("resources", resources);
write("consultation-chat", consultationChat);
write("search", search);
write("about", about);

fs.writeFileSync(path.join(root, "vercel.json"), JSON.stringify({
  cleanUrls: true,
  trailingSlash: true,
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" }
      ]
    }
  ]
}, null, 2));

fs.writeFileSync(path.join(root, "README.md"), `# OTC Study Hub

Static Vercel prototype for OTC / Overseas Digital Hub.

## Routes

- /
- /study-guides/
- /publishing/
- /courses/
- /othm-level-5-business-management/
- /apps/
- /apps/ucbelt-speaking/
- /belt/
- /resources/
- /consultation-chat/
- /search/
- /about/

## Build

No build step is required. To regenerate static pages:

\`\`\`bash
node generate-site.js
\`\`\`
`);

console.log("Generated OTC Study Hub static prototype.");
