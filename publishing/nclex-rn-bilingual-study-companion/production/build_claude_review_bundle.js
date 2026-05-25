const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "dist", "CLAUDE_REVIEW_BUNDLE.md");

const files = [
  "production/CLAUDE_REVIEW_PROMPT.md",
  "production/CLAUDE_REVIEW_FIX_LOG.md",
  "production/generate_500_question_banks.js",
  "production/build_rn_review_sample.js",
  "production/build_clinical_risk_review_queue.js",
  "production/build_public_demo_bank.js",
  "README_PROJECT.md",
  "production/release_plan.md",
  "manuscript/00_front_matter.md",
  "manuscript/01_route_map.md",
  "manuscript/02_2026_test_plan.md",
  "manuscript/03_clinical_judgment.md",
  "manuscript/04_prioritization_delegation.md",
  "manuscript/05_ngn_case_method.md",
  "manuscript/06_pharmacology_language.md",
  "manuscript/07_maternal_child.md",
  "manuscript/08_mental_health_communication.md",
  "manuscript/09_safety_infection_control.md",
  "manuscript/10_eight_week_planner.md",
  "manuscript/11_osce_transition.md",
  "manuscript/12_appendices_worksheets.md",
  "app-content/glossary.csv",
  "app-content/wrong_answer_taxonomy.json",
  "app-content/question_bank_beta_20.json",
  "app-content/question_bank_public_demo_50.json",
  "app-content/question_bank_expansion_30.json",
  "app-content/question_bank_expansion_50.json",
  "app-prototype/index.html"
];

const parts = [
  "# Claude Review Bundle",
  "",
  "Project: NCLEX-RN Clinical Judgment Bilingual Study Companion",
  "Generated for external review.",
  ""
];

for (const file of files) {
  const full = path.join(root, file);
  const content = fs.readFileSync(full, "utf8");
  const lang = file.endsWith(".json") ? "json" : file.endsWith(".html") ? "html" : file.endsWith(".csv") ? "csv" : "md";
  parts.push(`\n---\n\n## File: ${file}\n\n\`\`\`${lang}\n${content}\n\`\`\`\n`);
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, parts.join("\n"));
console.log(`Wrote ${out}`);
