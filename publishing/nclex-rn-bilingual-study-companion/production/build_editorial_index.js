const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manuscriptDir = path.join(root, "manuscript");
const distDir = path.join(root, "dist");
const compendium = path.join(manuscriptDir, "31_500_page_working_compendium.md");

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const source = fs.readFileSync(compendium, "utf8");
const blocks = source.split(/(?=:::page )/).filter((block) => block.startsWith(":::page "));
const rows = blocks.map((block) => {
  const kicker = block.match(/^:::page\s+(.+)$/m)?.[1] || "";
  const pageUnit = kicker.match(/Page Unit\s+(\d+)/)?.[1] || "";
  const domain = kicker.split("·")[1]?.trim() || "";
  const title = block.match(/^##\s+(.+)$/m)?.[1] || "";
  const learningFocus = block.match(/### Learning Focus\s+([\s\S]*?)\n### Scenario/)?.[1]?.trim().replace(/\n+/g, " ") || "";
  const tagsSection = block.match(/### Wrong-Answer Tags\s+([\s\S]*?)\n### Bilingual Terms/)?.[1] || "";
  const tags = [...tagsSection.matchAll(/^- ([a-zA-Z0-9_]+)/gm)].map((match) => match[1]);
  const termsSection = block.match(/### Bilingual Terms\s+([\s\S]*?)\n### Supervisor Prompt/)?.[1] || "";
  const terms = [...termsSection.matchAll(/^- (.+)$/gm)].map((match) => match[1].trim());
  const risk = /Pharmacology|Maternal|Mental|Safety|NGN/.test(domain) ? "high-review" : "medium-review";
  return { pageUnit, domain, title, learningFocus, tags: [...new Set(tags)].join("; "), terms: terms.join("; "), risk };
});

fs.mkdirSync(distDir, { recursive: true });
const csv = [
  ["page_unit", "domain", "risk", "title", "tags", "terms", "learning_focus"].map(csvEscape).join(","),
  ...rows.map((row) => [row.pageUnit, row.domain, row.risk, row.title, row.tags, row.terms, row.learningFocus].map(csvEscape).join(","))
].join("\n");

const md = `# NCLEX-RN 500-Page Working Edition Editorial Index

Generated: ${new Date().toISOString().slice(0, 10)}

Total page units: ${rows.length}

## Domain Counts

${Object.entries(rows.reduce((acc, row) => {
  acc[row.domain] = (acc[row.domain] || 0) + 1;
  return acc;
}, {})).map(([domain, count]) => `- ${domain}: ${count}`).join("\n")}

## Review Priority

- high-review: pages involving pharmacology, maternal-child, mental health, safety/infection or NGN case reasoning.
- medium-review: pages involving priority/delegation, question language, OSCE transition and general strategy.

## First 40 Page Units

| Page | Domain | Risk | Tags | Terms |
| --- | --- | --- | --- | --- |
${rows.slice(0, 40).map((row) => `| ${row.pageUnit} | ${row.domain} | ${row.risk} | ${row.tags} | ${row.terms} |`).join("\n")}
`;

fs.writeFileSync(path.join(distDir, "NCLEX_RN_500_Page_Editorial_Index.csv"), csv);
fs.writeFileSync(path.join(distDir, "NCLEX_RN_500_Page_Editorial_Index.md"), md);
console.log(`Indexed ${rows.length} page units`);
