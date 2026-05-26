const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

const dir = __dirname;
const version = process.env.BTEC_TOOLKIT_VERSION || "v0_4";
const htmlPath = path.join(dir, `OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Expanded_Review_${version}.html`);
const basePdfPath = path.join(dir, `OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Expanded_Review_${version}.base.pdf`);
const finalPdfPath = path.join(dir, `OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Expanded_Review_${version}.pdf`);

const footerNotes = [
  "Next study stop: read the assignment brief before opening a draft document.",
  "Academic route: command word -> task object -> evidence -> paragraph function.",
  "Output discipline: one paragraph, one point, one evidence purpose.",
  "Evidence rule: if the data is missing, name the gap instead of inventing it.",
  "BTEC writing habit: explain the business effect, not only the business concept.",
  "Merit direction: apply the idea to this organisation, not to business in general.",
  "Distinction direction: evaluate conditions, limits and trade-offs.",
  "Phrase route: evidence suggests -> this matters because -> however -> therefore.",
  "Avoidance note: 'important' is not analysis until the business impact is shown.",
  "Study pathway: concept understanding becomes useful only after evidence planning.",
  "Report craft: headings organise the reader; evidence controls the argument.",
  "Tutor checkpoint: can the learner explain this paragraph aloud in simple English?",
  "Integrity route: source log + support log + own wording + centre guidance.",
  "Writing repair: replace broad claims with case-specific evidence.",
  "Application test: would this sentence still work for any business? If yes, revise.",
  "Evaluation test: what could make the recommendation fail?",
  "Finance pathway: cost, cash flow, repayment, risk, decision.",
  "Marketing pathway: customer group, channel fit, message, cost, monitoring.",
  "HR pathway: problem diagnosis before training or recruitment recommendation.",
  "Operations pathway: process, capacity, quality, bottleneck, cost.",
  "Customer service pathway: experience, complaint, retention, reputation.",
  "Enterprise pathway: opportunity, risk, resource fit, response.",
  "Digital route: reach is not enough; track conversion and repeat behaviour.",
  "Small business route: keep recommendations affordable, manageable and measurable.",
  "Language note: use may, could and depends on when evidence is limited.",
  "Draft check: every recommendation needs a reason, condition and monitoring method.",
  "Academic phrasing: avoid 'I think'; use evidence-based judgement.",
  "Pathway note: Level 3 writing prepares learners for undergraduate evidence habits.",
  "Next course habit: build a glossary before writing a report.",
  "Study system: brief reading, evidence planning, paragraph frame, final audit."
];

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      line = test;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

async function renderBasePdf() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.pdf({
    path: basePdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });
  await browser.close();
}

async function addFooters() {
  const pdfDoc = await PDFDocument.load(fs.readFileSync(basePdfPath));
  const regular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const italic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const pages = pdfDoc.getPages();
  const navy = rgb(0.035, 0.13, 0.25);
  const grey = rgb(0.36, 0.42, 0.49);
  const gold = rgb(0.72, 0.55, 0.22);

  pages.forEach((page, index) => {
    const { width } = page.getSize();
    const left = 65;
    const right = width - 65;
    const y = 30;
    const note = footerNotes[index % footerNotes.length];
    const prefix = `Learning route ${String((index % footerNotes.length) + 1).padStart(2, "0")}: `;
    const lines = wrapText(prefix + note, regular, 7.2, right - left - 58);

    page.drawLine({
      start: { x: left, y: y + 16 },
      end: { x: right, y: y + 16 },
      thickness: 0.45,
      color: gold
    });
    lines.forEach((line, lineIndex) => {
      page.drawText(line, {
        x: left,
        y: y + 5 - lineIndex * 8,
        size: 7.2,
        font: lineIndex === 0 ? italic : regular,
        color: grey
      });
    });
    const pageLabel = `${index + 1}`;
    page.drawText(pageLabel, {
      x: right - regular.widthOfTextAtSize(pageLabel, 8),
      y: y + 5,
      size: 8,
      font: regular,
      color: navy
    });
  });

  fs.writeFileSync(finalPdfPath, await pdfDoc.save());
}

(async () => {
  await renderBasePdf();
  await addFooters();
  console.log(finalPdfPath);
})();
