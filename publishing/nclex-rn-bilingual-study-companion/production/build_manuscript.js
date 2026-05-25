const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manuscriptDir = path.join(root, "manuscript");
const outDir = path.join(root, "dist");
const outFile = path.join(outDir, "NCLEX_RN_Bilingual_Study_Companion_Working_Manuscript.html");

const files = fs.readdirSync(manuscriptDir).filter((file) => file.endsWith(".md")).sort();

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(md) {
  const lines = md.split(/\r?\n/);
  const html = [];
  let list = [];
  let ordered = [];
  let table = [];

  function flushList() {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      list = [];
    }
    if (ordered.length) {
      html.push(`<ol>${ordered.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
      ordered = [];
    }
  }

  function flushTable() {
    if (!table.length) return;
    const rows = table.filter((row) => !/^\s*\|?\s*-+/.test(row));
    const rendered = rows.map((row, index) => {
      const cells = row.split("|").map((cell) => cell.trim()).filter(Boolean);
      const tag = index === 0 ? "th" : "td";
      return `<tr>${cells.map((cell) => `<${tag}>${inline(cell)}</${tag}>`).join("")}</tr>`;
    }).join("");
    html.push(`<table>${rendered}</table>`);
    table = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      flushTable();
      continue;
    }
    if (trimmed === "<!-- PAGE_BREAK -->") {
      flushList();
      flushTable();
      html.push('<div class="page-break"></div>');
      continue;
    }
    if (trimmed.startsWith("<!--") && trimmed.endsWith("-->")) {
      flushList();
      flushTable();
      continue;
    }
    if (trimmed.startsWith(":::page ")) {
      flushList();
      flushTable();
      html.push(`<section class="page-unit"><div class="page-kicker">${inline(trimmed.slice(8))}</div>`);
      continue;
    }
    if (trimmed === ":::") {
      flushList();
      flushTable();
      html.push("</section>");
      continue;
    }
    if (trimmed.startsWith("|")) {
      flushList();
      table.push(trimmed);
      continue;
    }
    flushTable();
    if (trimmed.startsWith("### ")) {
      flushList();
      html.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      flushList();
      html.push(`<h2>${inline(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("# ")) {
      flushList();
      html.push(`<h1>${inline(trimmed.slice(2))}</h1>`);
    } else if (trimmed.startsWith("- ")) {
      list.push(trimmed.slice(2));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      ordered.push(trimmed.replace(/^\d+\.\s+/, ""));
    } else if (trimmed === "---") {
      flushList();
      html.push("<hr>");
    } else if (trimmed.startsWith("> ")) {
      flushList();
      html.push(`<blockquote>${inline(trimmed.slice(2))}</blockquote>`);
    } else {
      flushList();
      html.push(`<p>${inline(trimmed)}</p>`);
    }
  }
  flushList();
  flushTable();
  return html.join("\n");
}

function titleFromMarkdown(md, fallback) {
  const firstH2 = md.match(/^##\s+(.+)$/m);
  if (firstH2) return firstH2[1].trim();
  const firstH1 = md.match(/^#\s+(.+)$/m);
  if (firstH1) return firstH1[1].trim();
  return fallback;
}

function textStats(md) {
  return {
    zh: (md.match(/[\u4e00-\u9fff]/g) || []).length,
    words: (md.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || []).length,
    pageUnits: (md.match(/:::page /g) || []).length
  };
}

const chapterData = files.map((file) => {
  const md = fs.readFileSync(path.join(manuscriptDir, file), "utf8");
  const stats = textStats(md);
  return {
    file,
    id: file.replace(/[^a-zA-Z0-9_-]+/g, "-"),
    title: titleFromMarkdown(md, file),
    md,
    ...stats
  };
});

const sections = files.map((file) => {
  const item = chapterData.find((entry) => entry.file === file);
  return `<section class="chapter" id="${item.id}" data-file="${file}">\n${renderMarkdown(item.md)}\n</section>`;
});

const totalStats = chapterData.reduce((acc, item) => {
  acc.zh += item.zh;
  acc.words += item.words;
  acc.pageUnits += item.pageUnits;
  return acc;
}, { zh: 0, words: 0, pageUnits: 0 });

const toc = `<section class="toc">
  <div class="eyebrow">Editorial Navigation</div>
  <h1>Table of Contents / 目錄與審稿導航</h1>
  <p>This is a working manuscript navigation page for editors, tutors and clinical reviewers. 這一頁供編輯、督導與 RN reviewer 快速定位使用。</p>
  <div class="stats-grid">
    <div><strong>${chapterData.length}</strong><span>manuscript files</span></div>
    <div><strong>${totalStats.pageUnits}</strong><span>page units</span></div>
    <div><strong>${totalStats.zh.toLocaleString()}</strong><span>Chinese characters</span></div>
    <div><strong>${totalStats.words.toLocaleString()}</strong><span>English words</span></div>
  </div>
  <ol class="toc-list">
    ${chapterData.map((item) => `<li><a href="#${item.id}">${inline(item.title)}</a><small>${item.file} · zh ${item.zh.toLocaleString()} · en ${item.words.toLocaleString()}${item.pageUnits ? ` · page units ${item.pageUnits}` : ""}</small></li>`).join("")}
  </ol>
</section>`;

const html = `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NCLEX-RN Bilingual Study Companion Working Manuscript</title>
  <style>
    body { margin: 0; font-family: Georgia, "Times New Roman", "Noto Serif TC", serif; color: #172033; background: #f6f3ef; line-height: 1.62; }
    .cover { min-height: 95vh; display: flex; align-items: center; padding: 56px; background: #12343b; color: #fff; }
    .cover-inner { max-width: 760px; }
    .eyebrow { text-transform: uppercase; letter-spacing: .12em; font: 700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #9dd6cc; }
    .cover h1 { font-size: 56px; line-height: 1.05; margin: 18px 0; }
    .cover p { font-size: 20px; color: #d9ebe8; }
    .meta { margin-top: 30px; font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #b9d8d3; }
    main { max-width: 820px; margin: 0 auto; background: #fffdf9; }
    .toc { padding: 58px 64px; background: #fffdf9; border-bottom: 1px solid #ded8ce; break-after: page; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 22px 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .stats-grid div { border: 1px solid #d8ddd9; border-radius: 8px; padding: 12px; background: #f7faf8; }
    .stats-grid strong { display: block; font-size: 23px; color: #0f766e; }
    .stats-grid span { display: block; font-size: 12px; color: #58636f; }
    .toc-list { padding-left: 24px; }
    .toc-list li { margin: 10px 0; }
    .toc-list a { color: #12343b; font-weight: 700; text-decoration: none; }
    .toc-list small { display: block; color: #66717e; font: 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .chapter { padding: 58px 64px; border-bottom: 1px solid #ded8ce; break-after: page; }
    .page-unit { padding: 46px 54px; min-height: 920px; border-bottom: 1px solid #e7e1d8; break-after: page; }
    .page-kicker { text-transform: uppercase; letter-spacing: .12em; color: #0f766e; font: 700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin-bottom: 12px; }
    .page-break { break-after: page; height: 1px; }
    h1 { font-size: 34px; line-height: 1.14; margin: 0 0 18px; }
    h2 { font-size: 26px; margin: 30px 0 12px; }
    h3 { font-size: 19px; margin: 24px 0 8px; }
    p, li { font-size: 16px; }
    blockquote { border-left: 4px solid #0f766e; margin: 22px 0; padding: 8px 18px; background: #eef8f6; }
    table { width: 100%; border-collapse: collapse; margin: 18px 0; font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    th, td { border: 1px solid #d8ddd9; padding: 8px 10px; vertical-align: top; }
    th { background: #eef5f3; text-align: left; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background: #eef1f5; padding: 1px 4px; border-radius: 4px; }
    @media print { body { background: #fff; } .cover { min-height: 100vh; } main { max-width: none; } .chapter, .toc { padding: 40px 50px; } }
  </style>
</head>
<body>
  <section class="cover">
    <div class="cover-inner">
      <div class="eyebrow">Working Manuscript · Overseas Supervision</div>
      <h1>NCLEX-RN 臨床判斷雙語備考指南</h1>
      <p>AHPRA Stream B 路線版（獨立學習指南） · Clinical Judgment Bilingual Study Companion</p>
      <div class="meta">Generated from ${files.length} manuscript files · ${totalStats.pageUnits} page units · est. ${totalStats.pageUnits + files.length + 2} print pages · ${new Date().toISOString().slice(0, 10)} · Independent educational draft</div>
    </div>
  </section>
  <main>${toc}${sections.join("\n")}</main>
</body>
</html>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, html);
console.log(`Wrote ${outFile}`);
console.log(`Chapters: ${files.length}`);
