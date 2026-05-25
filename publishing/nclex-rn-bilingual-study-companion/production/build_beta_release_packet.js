const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const rnDir = path.join(distDir, "rn_review");
const outFile = path.join(distDir, "NCLEX_RN_Beta_Review_Release_Packet.md");

function readIfExists(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

const manuscript = path.join(distDir, "NCLEX_RN_Bilingual_Study_Companion_Working_Manuscript.html");
const indexCsv = path.join(distDir, "NCLEX_RN_500_Page_Editorial_Index.csv");
const indexMd = path.join(distDir, "NCLEX_RN_500_Page_Editorial_Index.md");
const riskMd = path.join(rnDir, "clinical_risk_review_queue.md");
const sampleMd = path.join(rnDir, "rn_review_sample.md");

const manuscriptHtml = readIfExists(manuscript);
const indexText = readIfExists(indexMd);
const riskText = readIfExists(riskMd);
const sampleText = readIfExists(sampleMd);

const pageUnits = (manuscriptHtml.match(/class="page-unit"/g) || []).length;
const chapters = (manuscriptHtml.match(/class="chapter"/g) || []).length;
const hasRawMarker = /OTC_CHINESE_EXPANSION|&lt;!--/.test(manuscriptHtml);

const riskCounts = {
  high: riskText.match(/- high: (\d+)/)?.[1] || "pending",
  medium: riskText.match(/- medium: (\d+)/)?.[1] || "pending",
  low: riskText.match(/- low: (\d+)/)?.[1] || "pending"
};

const packet = `# NCLEX-RN Bilingual Study Companion Beta Review Release Packet

Generated: ${new Date().toISOString().slice(0, 10)}

## Decision

**Status: controlled beta review. Not final sale edition.**

The current manuscript and app assets are ready for internal editorial review, RN / nursing educator review and selected beta-reader feedback. They should not yet be sold or described as a final published edition.

中文口徑：目前可作為「500 頁工作稿 / Beta 審稿版 / 受控試讀版」流通；不應稱為正式銷售版或官方備考材料。

## Current Assets

| Asset | Path | Use |
| --- | --- | --- |
| Working manuscript HTML | \`${path.relative(root, manuscript)}\` | Full internal 500-page working edition |
| Editorial index CSV | \`${path.relative(root, indexCsv)}\` | Spreadsheet review of page units |
| Editorial index Markdown | \`${path.relative(root, indexMd)}\` | Human-readable page-unit overview |
| Clinical risk queue | \`${path.relative(root, path.join(rnDir, "clinical_risk_review_queue.csv"))}\` | RN / nursing educator review queue |
| Clinical risk queue note | \`${path.relative(root, riskMd)}\` | Risk counts and high-priority items |
| RN review sample | \`${path.relative(root, sampleMd)}\` | Stratified review sample |
| Public trainer | \`/apps/nclex-rn-bilingual-trainer/\` | Public low-risk demo tool |
| Public demo landing | \`/apps/nclex-rn-bilingual-demo/\` | Reader-facing entrance |

## Build Checks

- Manuscript files rendered as chapters: ${chapters}
- Page units rendered: ${pageUnits}
- Raw generation markers present: ${hasRawMarker ? "yes - fix before sharing" : "no"}
- Editorial index generated: ${indexText ? "yes" : "missing"}
- Clinical risk review queue generated: ${riskText ? "yes" : "missing"}
- RN review sample generated: ${sampleText ? "yes" : "missing"}

## Question Bank Review Counts

- High risk items: ${riskCounts.high}
- Medium risk items: ${riskCounts.medium}
- Low risk items: ${riskCounts.low}

Review order:

1. High-risk items before any beta use beyond internal testing.
2. Medium-risk items before public release beyond demo.
3. Low-risk items by spot-check for bilingual clarity and originality.

## Public Positioning

Recommended English:

> Overseas Supervision has completed a 500-page working manuscript of an independent NCLEX-RN bilingual clinical judgment study companion. The project is now in controlled beta review, with a public demo app available for readers who want to try the bilingual learning design.

Recommended Chinese:

> 海外督導已完成《NCLEX-RN 臨床判斷雙語備考指南》500 頁工作稿，現進入受控 Beta 審稿階段；公開 Demo App 已開放讀者試用，用於展示雙語臨床判斷、錯題分類與術語學習設計。

## Required Disclaimer

This book, app and question bank are independent educational resources. They are not official NCLEX, NCSBN, Pearson VUE, Ahpra, NMBA, ANMAC, Australian Government or migration-authority products. They do not guarantee NCLEX-RN pass, OSCE pass, registration, ANMAC skills assessment, visa grant, admission, employment or any other outcome.

本書、App 與題庫均為獨立教育輔助材料，不是 NCLEX、NCSBN、Pearson VUE、AHPRA、NMBA、ANMAC、澳洲政府或任何移民/監管機構的官方產品，也不承諾考試、註冊、職業評估、簽證、錄取、就業或任何其他結果。

## Reviewer Instructions

Clinical reviewers should focus on:

- unsafe action language;
- outdated clinical sequencing;
- pharmacology monitoring and toxicity statements;
- maternal-child emergency wording;
- therapeutic communication and mental-health safety;
- infection-control categories;
- scope of practice and delegation boundaries;
- whether any answer depends too strongly on local protocol without saying so.

Bilingual reviewers should focus on:

- whether Chinese explanations are clear enough for Taiwan-trained nurses;
- whether English nursing terms remain visible;
- whether wording sounds like a guarantee or official instruction;
- whether repeated page units need more varied cases before final sale.

## Next Production Steps

1. Create a short public preview article announcing the beta review edition.
2. Export a PDF sample for reviewers and selected subscribers.
3. Diversify repeated page-unit cases before final sale edition.
4. Complete RN / nursing educator sign-off before expanding beyond the public demo pool.
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(outFile, packet);
console.log(`Wrote ${outFile}`);
