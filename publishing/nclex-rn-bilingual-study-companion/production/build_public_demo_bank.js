const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "app-content");
const reviewDir = path.join(root, "dist", "rn_review");
const outFile = path.join(contentDir, "question_bank_public_demo_50.json");
const files = [
  "question_bank_beta_20.json",
  "question_bank_expansion_30.json",
  "question_bank_expansion_50.json"
];

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === "\"" && inQuotes && next === "\"") {
      cell += "\"";
      i += 1;
    } else if (ch === "\"") {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      cells.push(cell);
      cell = "";
    } else {
      cell += ch;
    }
  }
  cells.push(cell);
  return cells;
}

function loadRiskRows() {
  const csvPath = path.join(reviewDir, "clinical_risk_review_queue.csv");
  const lines = fs.readFileSync(csvPath, "utf8").trim().split(/\r?\n/);
  const header = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const row = parseCsvLine(line);
    return Object.fromEntries(header.map((key, index) => [key, row[index] || ""]));
  });
}

function loadItems() {
  const byId = new Map();
  for (const file of files) {
    const json = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf8"));
    for (const item of json.items) byId.set(item.id, { ...item, source_file: file });
  }
  return byId;
}

const preferredCategories = [
  "english_wording",
  "test_strategy",
  "osce_transition",
  "delegation_scope",
  "therapeutic_communication"
];

function publicDemoScore(row, item) {
  let score = 0;
  if (row.risk_level === "low") score += 100;
  if (row.risk_level === "medium") score += 40;
  score += Math.max(0, 30 - Number(row.risk_score || 0));
  score += preferredCategories.includes(item.category) ? 20 - preferredCategories.indexOf(item.category) : 0;
  score += item.generated ? 0 : 12;
  return score;
}

const riskRows = loadRiskRows();
const itemById = loadItems();
const candidates = riskRows
  .map((row) => ({ row, item: itemById.get(row.item_id) }))
  .filter(({ row, item }) => item && row.risk_level !== "high")
  .filter(({ item }) => !["pharmacology", "maternal_child", "prioritization", "ngn", "safety_infection"].includes(item.category))
  .sort((a, b) => publicDemoScore(b.row, b.item) - publicDemoScore(a.row, a.item) || a.item.id.localeCompare(b.item.id));

const selected = [];
const categoryCounts = new Map();
for (const candidate of candidates) {
  const current = categoryCounts.get(candidate.item.category) || 0;
  if (current >= 14) continue;
  selected.push(candidate);
  categoryCounts.set(candidate.item.category, current + 1);
  if (selected.length === 50) break;
}

if (selected.length < 50) {
  throw new Error(`Could only select ${selected.length} public demo candidates`);
}

const items = selected.map(({ item, row }) => ({
  ...item,
  public_demo_candidate: true,
  public_demo_risk_level: row.risk_level,
  public_demo_risk_score: Number(row.risk_score || 0)
}));

const payload = {
  version: "0.1",
  status: "50-item public demo candidate pool for website/app preview; excludes high-risk clinical items and still requires editorial review before publication.",
  disclaimer: "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Demo items do not predict exam, registration, visa or employment outcomes.",
  selection_policy: {
    source_pool: "500-item internal beta pool",
    excluded_risk_level: "high",
    excluded_categories: ["pharmacology", "maternal_child", "prioritization", "ngn", "safety_infection"],
    intended_use: "public demo, lead magnet, website preview and low-risk app showcase"
  },
  items
};

fs.writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${outFile}`);
console.log(`Items: ${items.length}`);
console.log(Object.fromEntries([...categoryCounts.entries()].sort()));
