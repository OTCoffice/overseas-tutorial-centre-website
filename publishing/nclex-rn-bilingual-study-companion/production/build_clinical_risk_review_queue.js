const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "app-content");
const outDir = path.join(root, "dist", "rn_review");
const files = [
  "question_bank_beta_20.json",
  "question_bank_expansion_30.json",
  "question_bank_expansion_50.json"
];

const highCategory = new Set(["pharmacology", "maternal_child", "prioritization", "ngn", "safety_infection"]);
const mediumCategory = new Set(["delegation_scope", "osce_transition", "therapeutic_communication", "mixed_review"]);

const highKeywords = [
  "airway", "breathing", "oxygen", "saturation", "respiratory", "shortness of breath", "tracheostomy",
  "bleeding", "blood transfusion", "anticoagulation", "heparin", "warfarin", "black stools",
  "sepsis", "shock", "hypotension", "perfusion", "stroke", "head injury", "intracranial", "pulmonary embolism",
  "potassium", "hyperkalemia", "hypokalemia", "hypoglycemia", "blood glucose", "lithium", "digoxin", "gentamicin",
  "metformin", "nitroglycerin", "vancomycin", "opioid", "prednisone", "insulin",
  "postpartum", "boggy", "fundal", "uterine", "late decelerations", "preeclampsia", "newborn", "hypoglycemia",
  "suicidal", "harm yourself", "seizure", "C. difficile", "airborne", "aspiration"
];

const mediumKeywords = [
  "delegate", "delegation", "UAP", "LPN", "LVN", "scope", "assignment",
  "teach", "teaching", "evaluate", "assessment", "OSCE", "SBAR", "escalation",
  "therapeutic", "panic", "delusion", "mania", "consent", "identity"
];

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function loadItems() {
  return files.flatMap((file) => {
    const json = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf8"));
    return json.items.map((item) => ({ ...item, source_file: file }));
  });
}

function itemText(item) {
  return [
    item.id,
    item.category,
    item.stem,
    item.stem_zh || item.stemZh || "",
    item.rationale,
    item.rationale_zh || item.rationaleZh || "",
    ...(item.options || []).flat()
  ].join(" ").toLowerCase();
}

function matchedKeywords(text, keywords) {
  return keywords.filter((keyword) => text.includes(keyword.toLowerCase()));
}

function scoreItem(item) {
  const text = itemText(item);
  const highMatches = matchedKeywords(text, highKeywords);
  const mediumMatches = matchedKeywords(text, mediumKeywords);
  let score = 0;
  const reasons = [];

  if (highCategory.has(item.category)) {
    score += 40;
    reasons.push(`high-risk category: ${item.category}`);
  } else if (mediumCategory.has(item.category)) {
    score += 20;
    reasons.push(`medium-risk category: ${item.category}`);
  }
  if (highMatches.length) {
    score += highMatches.length * 8;
    reasons.push(`high-risk keywords: ${highMatches.slice(0, 8).join(", ")}`);
  }
  if (mediumMatches.length) {
    score += mediumMatches.length * 4;
    reasons.push(`scope/communication keywords: ${mediumMatches.slice(0, 8).join(", ")}`);
  }
  if (item.generated) {
    score += 10;
    reasons.push("generated expansion item");
  } else {
    score += 4;
    reasons.push("manual core item");
  }

  const risk_level = score >= 58 ? "high" : score >= 28 ? "medium" : "low";
  const review_priority = risk_level === "high" ? "review before beta" : risk_level === "medium" ? "review before public release" : "spot-check";
  return { ...item, risk_score: score, risk_level, review_priority, risk_reasons: reasons.join("; ") };
}

function buildCsv(items) {
  const header = [
    "risk_level",
    "risk_score",
    "review_priority",
    "review_status",
    "reviewer_name",
    "review_date",
    "item_id",
    "category",
    "source_file",
    "generated",
    "risk_reasons",
    "stem",
    "stem_zh",
    "answer",
    "rationale",
    "rationale_zh",
    "clinical_safety_notes",
    "required_revision",
    "approved_for_beta"
  ];
  const rows = items.map((item) => [
    item.risk_level,
    item.risk_score,
    item.review_priority,
    "pending",
    "",
    "",
    item.id,
    item.category,
    item.source_file,
    item.generated ? "yes" : "no",
    item.risk_reasons,
    item.stem,
    item.stem_zh || item.stemZh || "",
    (item.answer || []).join("|"),
    item.rationale,
    item.rationale_zh || item.rationaleZh || "",
    "",
    "",
    ""
  ]);
  return [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function buildMarkdown(items) {
  const counts = items.reduce((acc, item) => {
    acc[item.risk_level] = (acc[item.risk_level] || 0) + 1;
    return acc;
  }, {});
  const byCategory = items.reduce((acc, item) => {
    const key = `${item.risk_level}:${item.category}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const categoryLines = Object.entries(byCategory)
    .sort()
    .map(([key, count]) => `- ${key}: ${count}`)
    .join("\n");
  const topHigh = items
    .filter((item) => item.risk_level === "high")
    .slice(0, 40)
    .map((item, index) => `${index + 1}. ${item.id} (${item.category}) score ${item.risk_score}: ${item.risk_reasons}`)
    .join("\n");
  return [
    "# Clinical Risk Review Queue",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    "Purpose: prioritize RN / nursing educator review for the 500-item NCLEX-RN bilingual beta pool.",
    "",
    "This queue is an internal clinical safety tool. It is not an official NCLEX, NCSBN, Pearson VUE, Ahpra, NMBA or ANMAC document.",
    "",
    "## Risk Counts",
    "",
    `- high: ${counts.high || 0}`,
    `- medium: ${counts.medium || 0}`,
    `- low: ${counts.low || 0}`,
    "",
    "## Risk By Category",
    "",
    categoryLines,
    "",
    "## Review Order",
    "",
    "1. Review all high-risk items before beta use.",
    "2. Review all medium-risk items before public release.",
    "3. Spot-check low-risk English/test-strategy items for bilingual clarity and originality.",
    "",
    "## First 40 High-Risk Items",
    "",
    topHigh || "No high-risk items found."
  ].join("\n");
}

const scored = loadItems().map(scoreItem).sort((a, b) => {
  const rank = { high: 0, medium: 1, low: 2 };
  return rank[a.risk_level] - rank[b.risk_level] || b.risk_score - a.risk_score || a.id.localeCompare(b.id);
});

const ids = new Set(scored.map((item) => item.id));
if (ids.size !== scored.length) throw new Error("Duplicate item IDs found");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "clinical_risk_review_queue.csv"), buildCsv(scored));
fs.writeFileSync(path.join(outDir, "clinical_risk_review_queue.md"), buildMarkdown(scored));

const counts = scored.reduce((acc, item) => {
  acc[item.risk_level] = (acc[item.risk_level] || 0) + 1;
  return acc;
}, {});
console.log(`Items total: ${scored.length}`);
console.log(`Risk counts: ${JSON.stringify(counts)}`);
console.log(`Wrote ${path.join(outDir, "clinical_risk_review_queue.csv")}`);
console.log(`Wrote ${path.join(outDir, "clinical_risk_review_queue.md")}`);
