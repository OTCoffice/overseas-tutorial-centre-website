// One-off: generate the herald social share image (SVG + PNG) for the hand-authored
// WesternIC article, matching the house style used by writeHeraldSocialImage in generate-site.js.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");

function escapeXml(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function wrapOgTitle(title, maxChars = 24, maxLines = 3) {
  const text = String(title || "").replace(/\s+/g, " ").trim();
  const hasCjk = /[㐀-鿿]/.test(text);
  const hasSpaces = text.includes(" ") && !hasCjk;
  const tokens = hasSpaces ? text.split(" ") : Array.from(text);
  const lines = [];
  let current = "";
  let stopped = false;
  tokens.forEach((token) => {
    if (stopped) return;
    const next = hasSpaces ? (current ? `${current} ${token}` : token) : `${current}${token}`;
    if (next.length > maxChars && current && lines.length < maxLines - 1) {
      lines.push(current);
      current = token;
    } else if (next.length > maxChars && current && lines.length === maxLines - 1) {
      current = `${next.slice(0, Math.max(0, maxChars - 1))}…`;
      stopped = true;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

const article = {
  slug: "western-university-westernIC-canada-pathway-2026",
  title: "韦仕敦大学 WesternIC 本硕直通项目 2026",
  date: "2026-06-10",
  category: "Canada Pathways",
  summary: "全球前1%名校韦仕敦大学 WesternIC 国际大一及工程硕士直通项目详解：入读条件、专业选择、Coop实习与配偶工签规划。",
  sections: ["为什么选择韦仕敦大学", "国际大一：本科直通路径", "工程类硕士：三种就读模式", "Coop带薪实习：就业核心", "配偶工签：家庭规划考量"]
};

const isZh = true; // Chinese content → CJK wrapping + Chinese labels
const title = article.title;
const column = "留學導報 · 深度指南";
const issue = `${article.date.replace(/-/g, ".")} · 留學導報`;
const titleLines = ["韦仕敦大学 WesternIC", "本硕直通项目 2026"]; // hand-tuned to avoid mid-word breaks
const titleFontSize = titleLines.length >= 3 ? 50 : 56;
const titleLineHeight = 63;
const sections = article.sections.slice(0, 5);
const summaryLines = wrapOgTitle(article.summary, 34, 2);
const topicTags = ["留學升學", "政策解讀", "文件把關", "風險提示"];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#efe5d6"/>
  <rect x="38" y="34" width="1124" height="562" fill="#fffaf2" stroke="#c8b89a" stroke-width="2"/>
  <rect x="38" y="34" width="1124" height="96" fill="#1a1410"/>
  <rect x="38" y="130" width="1124" height="10" fill="#b5272d"/>
  <text x="78" y="72" fill="#e8b84b" font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="700" letter-spacing="3">OVERSEAS STUDY REVIEW</text>
  <text x="78" y="111" fill="#ffffff" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="36" font-weight="900">留學導報</text>
  <text x="1122" y="78" text-anchor="end" fill="#bfae95" font-family="'Noto Sans TC', Arial, sans-serif" font-size="17" font-weight="700">${escapeXml(issue)}</text>
  <text x="1122" y="110" text-anchor="end" fill="#ffffff" font-family="'Noto Sans TC', Arial, sans-serif" font-size="19" font-weight="800">overseasuk.com</text>
  <rect x="78" y="176" width="304" height="48" fill="#b5272d"/>
  <text x="104" y="207" fill="#ffffff" font-family="'Noto Sans TC', Arial, sans-serif" font-size="22" font-weight="900" letter-spacing="2">${escapeXml(column)}</text>
  <text x="426" y="195" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14" font-weight="800">ISSN-OTC · PUBLIC BRIEFING · FOR STUDENTS, FAMILIES &amp; PARTNERS</text>
  <text x="426" y="219" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="13" font-weight="900" letter-spacing="2">${escapeXml(topicTags.join("  /  "))}</text>
  <line x1="78" y1="246" x2="456" y2="246" stroke="#c8952a" stroke-width="4"/>
  ${titleLines.map((line, index) => `<text x="78" y="${315 + index * titleLineHeight}" fill="#1a1410" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="${titleFontSize}" font-weight="900">${escapeXml(line)}</text>`).join("")}
  <rect x="782" y="256" width="324" height="202" fill="#fff5e5" stroke="#d6c39f" stroke-width="1.5"/>
  <text x="806" y="286" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="15" font-weight="900" letter-spacing="2">本期閱讀索引</text>
  ${sections.map((section, index) => `<text x="806" y="${318 + index * 27}" fill="#4f4032" font-family="'Noto Sans TC', Arial, sans-serif" font-size="15" font-weight="800">${String(index + 1).padStart(2, "0")} · ${escapeXml(section.slice(0, 15))}</text>`).join("")}
  <line x1="806" y1="430" x2="1082" y2="430" stroke="#d6c39f" stroke-width="1"/>
  <text x="806" y="451" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="700">Evidence-led · Official-source aware · Updated briefing</text>
  <rect x="78" y="470" width="640" height="58" fill="#fff7e8" stroke="#dec9a4" stroke-width="1"/>
  ${summaryLines.map((line, index) => `<text x="100" y="${493 + index * 25}" fill="#5d4d3c" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="16" font-weight="600">${escapeXml(line)}</text>`).join("")}
  ${topicTags.map((tag, index) => `<rect x="${78 + index * 100}" y="540" width="88" height="30" fill="#1a1410"/><text x="${122 + index * 100}" y="560" text-anchor="middle" fill="#e8b84b" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="900">${escapeXml(tag)}</text>`).join("")}
  <text x="506" y="560" fill="#5d4d3c" font-family="'Noto Sans TC', Arial, sans-serif" font-size="18" font-weight="900">海外督導 OTC · 留學導報文章</text>
  <text x="78" y="589" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14">Overseas Tutorial Centre Ltd · OTC Study Hub · office@overseasuk.com · WhatsApp +44 7947 991572</text>
  <rect x="944" y="490" width="176" height="86" fill="#fff7e8" stroke="#d6c39f" stroke-width="2"/>
  <text x="1032" y="517" text-anchor="middle" fill="#b5272d" font-family="'Noto Sans TC', Arial, sans-serif" font-size="14" font-weight="900" letter-spacing="2">版面</text>
  <text x="1032" y="544" text-anchor="middle" fill="#1a1410" font-family="'Noto Serif TC', 'Songti TC', Georgia, serif" font-size="23" font-weight="900">留學導報</text>
  <text x="1032" y="565" text-anchor="middle" fill="#8b7560" font-family="'Noto Sans TC', Arial, sans-serif" font-size="12" font-weight="800">OTC Study Hub</text>
</svg>`;

const svgPath = path.join(root, "assets/social", `herald-en-${article.slug}.svg`);
const pngPath = path.join(root, "assets/social", `herald-en-${article.slug}.png`);
fs.writeFileSync(svgPath, svg);
sharp(svgPath).png().toFile(pngPath).then(() => {
  console.log("Wrote", path.relative(root, svgPath), "and", path.relative(root, pngPath));
}).catch((e) => { console.error(e); process.exit(1); });
