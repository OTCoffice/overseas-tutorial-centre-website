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

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function loadItems() {
  return files.flatMap((file) => {
    const json = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf8"));
    return json.items.map((item) => ({ ...item, source_file: file }));
  });
}

function itemWeight(item) {
  if (!item.generated) return 0;
  if (item.category === "maternal_child") return 1;
  if (item.category === "pharmacology") return 2;
  if (item.category === "prioritization") return 3;
  if (item.category === "ngn") return 4;
  return 5;
}

function sampleByCategory(items, perCategory = 6) {
  const grouped = new Map();
  for (const item of items) {
    if (!grouped.has(item.category)) grouped.set(item.category, []);
    grouped.get(item.category).push(item);
  }
  const sample = [];
  for (const [category, group] of [...grouped.entries()].sort()) {
    const sorted = group
      .slice()
      .sort((a, b) => itemWeight(a) - itemWeight(b) || a.id.localeCompare(b.id));
    sample.push(...sorted.slice(0, Math.min(perCategory, sorted.length)).map((item) => ({ ...item, review_category: category })));
  }
  return sample;
}

function buildCsv(sample) {
  const header = [
    "review_status",
    "reviewer_name",
    "review_date",
    "item_id",
    "category",
    "source_file",
    "generated",
    "stem",
    "stem_zh",
    "answer",
    "rationale",
    "rationale_zh",
    "clinical_safety_notes",
    "language_notes",
    "approved_for_beta"
  ];
  const rows = sample.map((item) => [
    "pending",
    "",
    "",
    item.id,
    item.category,
    item.source_file,
    item.generated ? "yes" : "no",
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

function buildMarkdown(sample, allItems) {
  const counts = {};
  for (const item of allItems) counts[item.category] = (counts[item.category] || 0) + 1;
  const sampleCounts = {};
  for (const item of sample) sampleCounts[item.category] = (sampleCounts[item.category] || 0) + 1;
  const categoryLines = Object.keys(counts).sort().map((category) => {
    return `- ${category}: ${sampleCounts[category] || 0} sampled / ${counts[category]} total`;
  }).join("\n");
  const items = sample.map((item, index) => {
    const options = (item.options || []).map(([label, en, zh]) => `  - ${label}. ${en} / ${zh}`).join("\n");
    return [
      `### ${index + 1}. ${item.id} (${item.category})`,
      "",
      `Source: \`${item.source_file}\` · Generated: ${item.generated ? "yes" : "no"}`,
      "",
      `Stem: ${item.stem}`,
      "",
      `中文: ${item.stem_zh || item.stemZh || ""}`,
      "",
      "Options:",
      options,
      "",
      `Answer: ${(item.answer || []).join(", ")}`,
      "",
      `Rationale: ${item.rationale}`,
      "",
      `中文解析: ${item.rationale_zh || item.rationaleZh || ""}`,
      "",
      "Reviewer decision:",
      "",
      "- [ ] Approved for beta",
      "- [ ] Approved with edits",
      "- [ ] Hold / rewrite",
      "",
      "Clinical safety notes:",
      "",
      "Language / bilingual clarity notes:",
      ""
    ].join("\n");
  }).join("\n\n---\n\n");
  return [
    "# RN / Nursing Educator Review Sample",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    "Purpose: structured clinical safety and bilingual clarity review for the 500-item NCLEX-RN bilingual beta question pool.",
    "",
    "This is an internal review packet. It is not an official NCLEX, NCSBN, Pearson VUE, Ahpra, NMBA or ANMAC document.",
    "",
    "## Sampling Summary",
    "",
    categoryLines,
    "",
    "## Review Instructions",
    "",
    "- Check clinical safety first.",
    "- Check whether the stated answer is defensible for NCLEX-style reasoning.",
    "- Check whether bilingual wording could mislead Chinese-speaking nurses.",
    "- Mark any item that needs real-world protocol nuance, e.g. per facility policy, provider guidance or jurisdictional scope differences.",
    "- Do not approve any item that appears copied or too close to a commercial QBank style.",
    "",
    "## Sampled Items",
    "",
    items
  ].join("\n");
}

const allItems = loadItems();
const ids = new Set(allItems.map((item) => item.id));
if (ids.size !== allItems.length) throw new Error("Duplicate item IDs found");

const sample = sampleByCategory(allItems, 6);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "rn_review_sample.csv"), buildCsv(sample));
fs.writeFileSync(path.join(outDir, "rn_review_sample.md"), buildMarkdown(sample, allItems));

console.log(`Items total: ${allItems.length}`);
console.log(`Sample total: ${sample.length}`);
console.log(`Wrote ${path.join(outDir, "rn_review_sample.csv")}`);
console.log(`Wrote ${path.join(outDir, "rn_review_sample.md")}`);
