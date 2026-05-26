const fs = require("fs");
const path = require("path");

const dir = __dirname;
const source = path.join(dir, "OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Manuscript_Draft_v0_2.md");
const out = path.join(dir, "OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Expanded_Review_v0_4_1.md");

let md = fs.readFileSync(source, "utf8");

md = md
  .replace("Draft v0.2 · 25 May 2026", "Expanded review draft v0.4.1 · 26 May 2026")
  .replace(
    "## Publication Boundary\n\nThis manuscript is an independent OTC bilingual output-system resource for assignment-based learners. Official Pearson / BTEC publications, awarding-body documents, assignment briefs, mark schemes, assessment decisions and centre guidance remain the controlling sources. The manuscript trains brief reading, evidence planning, academic phrasing and self-checking within academic-integrity boundaries.\n\n本書稿是 OTC / 海外書局面向 assignment-based learners 的獨立雙語輸出系統資源。Pearson / BTEC 官方出版物、awarding-body 文件、assignment brief、mark scheme、assessment decision 與 centre guidance 仍是最終依據。本書稿訓練 brief reading、evidence planning、academic phrasing 與 self-checking，並把 academic integrity 邊界放進寫作流程。",
    "<div class=\"publication-boundary\"><strong>Publication boundary</strong><p>This manuscript is an independent OTC bilingual output-system resource for assignment-based learners. Official Pearson / BTEC publications, awarding-body documents, assignment briefs, mark schemes, assessment decisions and centre guidance remain the controlling sources. The manuscript trains brief reading, evidence planning, academic phrasing and self-checking within academic-integrity boundaries.</p><p>本書稿是 OTC / 海外書局面向 assignment-based learners 的獨立雙語輸出系統資源。Pearson / BTEC 官方出版物、awarding-body 文件、assignment brief、mark scheme、assessment decision 與 centre guidance 仍是最終依據。本書稿訓練 brief reading、evidence planning、academic phrasing 與 self-checking，並把 academic integrity 邊界放進寫作流程。</p></div>"
  )
  .replace(/^### 中文導讀\n+/gm, "")
  .replace(/^### 中文使用說明\n+/gm, "")
  .replace(/^### 中文目錄說明\n+/gm, "")
  .replace(/^### 中文提示\n+/gm, "")
  .replace(/^### 中文提醒\n+/gm, "")
  .replace(/^### 中文審題\n+/gm, "### 審題支架\n\n")
  .replace(/^### 中文寫作支架\n+/gm, "### 寫作支架\n\n")
  .replace(/^## 中文提醒\n+/gm, "## 學習支架\n\n")
  .replace(/^## 中文使用方法\n+/gm, "## 使用方法\n\n")
  .replace(/^## 中文提示\n+/gm, "## 學習支架\n\n")
  .replace(/\| 中文提醒 \|/g, "| 學生端理解 |")
  .replace(/\| 中文審題問題 \|/g, "| 審題問題 |")
  .replace(/中文提示：/g, "")
  .replace(/中文提醒：/g, "")
  .replace(/中文寫法：/g, "")
  .replace(/中文導讀：/g, "")
  .replace("本書不是讓學生從頭到尾讀完就算完成，而是要在 assignment 的不同階段反覆使用：", "本書適合在 assignment 的不同階段反覆使用：")
  .replace("學生不是要背很多模板，而是要掌握一套流程：", "學生需要掌握一套可重複使用的流程：")
  .replace("本書不是按「知識點」排列，而是按 assignment workflow 排列：先讀題，再理解深度，再規劃證據，再寫段落，再處理 AI / integrity，最後提交檢查。", "本書按 assignment workflow 排列：先讀題，再理解深度，再規劃證據，再寫段落，再處理 AI / integrity，最後提交檢查。")
  .replace("Assignment-based learning 的核心不是「背完知識點就能寫」，而是要把知識點放入一個具體 business context。", "Assignment-based learning 的核心在於把知識點放入一個具體 business context。")
  .replace("第二個句子更好，不是因為它更長，而是因為它同時完成了三件事：", "第二個句子更好，原因是它同時完成了三件事：")
  .replace("中國 EAL 學生的問題往往不是「英文差」這麼簡單，而是英文 assignment 的思維方式沒有建立起來。", "中國 EAL 學生常見的困難，不只來自語言能力，也來自英文 assignment 思維方式尚未建立。")
  .replace("這個 ladder 不是官方評分表，而是寫作自查工具。", "這個 ladder 是寫作自查工具，並非官方評分表。")
  .replace("這裡不是官方評分標準，也不是保分指南。這裡的作用是讓學生明白：", "這裡提供等級意識訓練；官方評分標準與 centre guidance 仍是最終依據。學生需要明白：")
  .replace("「等級意識」不是保分，也不是讓學生猜老師怎麼給分。它的作用是幫學生判斷自己的答案現在處於哪種思維層次：", "「等級意識」的作用，是幫學生判斷自己的答案目前處於哪種思維層次：")
  .replace("Distinction-level 的核心不是「寫更多」，而是「判斷更成熟」。", "Distinction-level 的核心在於更成熟的判斷。")
  .replace("三個版本不是靠「高級詞」區分，而是靠思維深度區分：", "三個版本的差異主要來自思維深度：")
  .replace("真正的升級不是加長句、加 however、加數據，而是讓證據改變你的判斷。", "真正的升級，需要讓證據改變你的判斷，而不只是加長句、加 however 或加數據。")
  .replace("Evidence 不是自動變成 judgement。", "Evidence 需要被轉化為 judgement。")
  .replace("中國學生常見問題不是“完全沒有想法”，而是想法沒有被證據固定住。", "中國學生常見問題是想法沒有被證據固定住。")
  .replace("BTEC 寫作不是“套模板”，而是根據 unit 選 evidence。", "BTEC 寫作需要根據 unit 選 evidence。")
  .replace("Evidence log 是學生寫 assignment 前最值得建立的工具。它不是給老師看的漂亮表格，而是給自己防止混亂的工作表。", "Evidence log 是學生寫 assignment 前最值得建立的工具。它是防止自己寫作混亂的工作表。")
  .replace("所以升級答案不是加華麗詞彙，而是更精準地使用 evidence。", "所以升級答案需要更精準地使用 evidence。")
  .replace("寫作框架不是讓學生照抄，而是幫學生按邏輯組織內容。", "寫作框架的作用，是幫學生按邏輯組織內容。")
  .replace("它不是答案，而是段落秩序。", "它提供的是段落秩序。")
  .replace("中英轉換的核心不是翻譯字，而是翻譯“學術功能”。", "中英轉換的核心，是把中文意思轉成英文 academic function。")
  .replace("升級段落不是把句子變長，而是讓每一句有功能。", "升級段落的關鍵，是讓每一句都有功能。")
  .replace("AI 最大風險不是「用了就錯」，而是學生失去 authorship。", "AI 最大風險在於學生失去 authorship。")
  .replace("這些問題不是形式，而是保護學生自己的 academic integrity。", "這些問題用來保護學生自己的 academic integrity。")
  .replace("老師 feedback 不是讓學生機械補字數。", "老師 feedback 應轉化為具體修訂行動。")
  .replace("這些 phrase 不是讓學生機械套句，而是幫學生擺脫口語化和中文直譯。", "這些 phrase 用來幫學生擺脫口語化和中文直譯。")
  .replace("例如 weekend sales low 這條證據，不是直接證明任何 promotion 都好，而是說明 promotion 必須針對 weekend customers。", "例如 weekend sales low 這條證據，不能直接證明任何 promotion 都好；它更適合支持 promotion 必須針對 weekend customers 這一判斷。")
  .replace("做 evidence planning matrix 的目的不是把文章寫複雜，而是防止文章變成空話。", "evidence planning matrix 的目的，是防止文章變成空話。")
  .replace("evidence 不是越多越好，而是越貼合 assessment point 越好。", "evidence 的價值取決於它是否貼合 assessment point。")
  .replace("這在英國商科寫作中很重要，因為真實 business decision 經常不是“百分百確定”，而是在有限證據下做合理判斷。", "這在英國商科寫作中很重要，因為真實 business decision 經常是在有限證據下做合理判斷。")
  .replace("Level 3 Business assignment 中，成熟的句子通常不是“絕對正確”，而是“有條件地合理”。", "Level 3 Business assignment 中，成熟的句子通常呈現“有條件地合理”的判斷。")
  .replace("PEEAL 不是讓學生每段都寫五句固定句型，而是提醒學生：不要只有觀點，沒有證據；不要只有理論，沒有企業；不要只有建議，沒有限制。", "PEEAL 提醒學生：不要只有觀點，沒有證據；不要只有理論，沒有企業；不要只有建議，沒有限制。")
  .replace("BTEC assignment 最危險的是 replacement。學生可能以為「我只是讓 AI 潤色」，但如果 AI 已經重寫了觀點、證據、判斷和段落結構，那就不只是潤色，而是替代寫作。", "BTEC assignment 最危險的是 replacement。學生可能以為「我只是讓 AI 潤色」，但如果 AI 已經重寫了觀點、證據、判斷和段落結構，這已經進入替代寫作風險。")
  .replace("這不是增加負擔，而是保護自己。", "這可以保護學生自己。")
  .replace("不是讓你多加幾句空話，而是要你解釋：", "它要求你解釋：")
  .replace("很多學生最後不是輸在內容，而是輸在文件管理：", "很多學生最後的風險來自文件管理：")
  .replace("這本書的核心不是更多資料，而是穩定輸出：讀題、證據、語言、判斷、合規。", "這本書的核心是穩定輸出：讀題、證據、語言、判斷、合規。")
  .replace("比較不是左右列優缺點，而是判斷取捨。", "比較的重點是判斷取捨。");

const frontMatter = `<section class="book-cover">
<div class="cover-kicker">OTC Publishing House</div>
<h1>BTEC Level 3 Business Assignment Writing Toolkit</h1>
<p class="cover-subtitle">Independent Bilingual Study Support Companion</p>
<p class="cover-cn">BTEC Level 3 Business assignment writing bilingual output system</p>
<p class="cover-version">Expanded review draft v0.4.1 · 26 May 2026</p>
</section>

<section class="copyright-page">
<h1>Publication Record</h1>
<table>
<tbody>
<tr><td>Title</td><td>BTEC Level 3 Business Assignment Writing Toolkit</td></tr>
<tr><td>Series</td><td>Independent Bilingual Study Support Companion</td></tr>
<tr><td>Publisher imprint</td><td>Overseas Publishing House / OTC Study Hub</td></tr>
<tr><td>Internal ID</td><td>OTC-BTEC-L3-BUS-AWT-001</td></tr>
<tr><td>ISBN status</td><td>TBC before release</td></tr>
<tr><td>Publication status</td><td>expanded manuscript draft under editorial review</td></tr>
</tbody>
</table>
<p class="page-note">This draft is prepared for editorial review, proofing and publication-pack development. It is not an official Pearson / BTEC publication.</p>
</section>

<section class="boundary-page">
<div class="publication-boundary"><strong>Publication boundary</strong><p>This manuscript is an independent OTC bilingual output-system resource for assignment-based learners. Official Pearson / BTEC publications, awarding-body documents, assignment briefs, mark schemes, assessment decisions and centre guidance remain the controlling sources. The manuscript trains brief reading, evidence planning, academic phrasing and self-checking within academic-integrity boundaries.</p><p>本書稿是 OTC / 海外書局面向 assignment-based learners 的獨立雙語輸出系統資源。Pearson / BTEC 官方出版物、awarding-body 文件、assignment brief、mark scheme、assessment decision 與 centre guidance 仍是最終依據。本書稿訓練 brief reading、evidence planning、academic phrasing 與 self-checking，並把 academic integrity 邊界放進寫作流程。</p></div>
</section>`;

md = md.replace(
  /^# BTEC Level 3 Business Assignment Writing Toolkit[\s\S]*?\n## Preface/,
  `${frontMatter}\n\n## Preface`
);

const appendixStart = md.indexOf("\n# Appendix A.");
let appendices = "";
if (appendixStart !== -1) {
  appendices = md.slice(appendixStart).trim();
  md = md.slice(0, appendixStart).trimEnd();
}

const tocPages = {
  frontMatter: 1,
  partI: 7,
  chapter1: 8,
  chapter2: 14,
  chapter3: 19,
  chapter4: 27,
  chapter5: 33,
  chapter6: 41,
  chapter7: 47,
  partII: 52,
  partIII: 58,
  partIV: 62,
  partV: 70,
  partVI: 110,
  appendices: 117
};

const contents = `## Contents

| Section | Purpose | Proof page |
| --- | --- | --- |
| Front matter | Title, publication boundary, positioning and reader guidance. | ${tocPages.frontMatter} |
| Part I. Core Assignment Writing Toolkit | Chapters 1-7: brief reading, grade-awareness, evidence, paragraph writing, integrity and final checks. | ${tocPages.partI} |
| Chapter 1 | Explains what assignment-based Business learning is really asking for. | ${tocPages.chapter1} |
| Chapter 2 | Trains learners to read assignment briefs before writing. | ${tocPages.chapter2} |
| Chapter 3 | Builds Pass / Merit / Distinction awareness without making grade promises. | ${tocPages.chapter3} |
| Chapter 4 | Helps learners plan honest and relevant evidence. | ${tocPages.chapter4} |
| Chapter 5 | Provides paragraph frames and bilingual academic-writing scaffolds. | ${tocPages.chapter5} |
| Chapter 6 | Sets academic-integrity, AI-use and authorship boundaries. | ${tocPages.chapter6} |
| Chapter 7 | Provides final submission checks and readiness protocols. | ${tocPages.chapter7} |
| Part II. Subject Stickers | Compact subject maps for common BTEC Business topic areas. | ${tocPages.partII} |
| Part III. Academic Writing Phrasebook | Master phrasebank plus topic-specific application riders. | ${tocPages.partIII} |
| Part IV. Avoidance Booklet | Category-specific weak lines and stronger academic alternatives. | ${tocPages.partIV} |
| Part V. Mini Templates | Practice scaffolds for brief reading, evidence, evaluation and feedback use. | ${tocPages.partV} |
| Part VI. Tiny Review Booklets | Twenty compact review cards for final paragraph audit. | ${tocPages.partVI} |
| Appendices A-E | Phrase bank, breakdown sheet, evidence log, submission checklist and bilingual glossary. | ${tocPages.appendices} |

本書按 assignment workflow 排列：先讀題，再理解深度，再規劃證據，再寫段落，再處理 AI / integrity，最後提交檢查。後半部是可抽取使用的 workbook-style reference section；Appendices 放在全書最後，方便查閱。
`;

md = md.replace(/## Contents[\s\S]*?\n---\n\n# Chapter 1\./, `${contents}\n\n---\n\n# Part I. Core Assignment Writing Toolkit\n\nThis part contains the core learning sequence. It should be read before the workbook-style reference tools in Parts II-VI.\n\n核心學習順序先建立 assignment writing 的工作方法，再使用後半部的 phrasebook、avoidance cards 和 templates。\n\n---\n\n# Chapter 1.`);

const subjects = [
  ["Marketing", "customer group, message, channel, cost and evidence of response", "把 target customer、channel fit、成本和衡量方式放在同一段，不要只寫多宣傳。"],
  ["Finance", "cash-flow pressure, break-even logic, cost control and repayment risk", "看到 finance 題，先問現金流、成本、償還能力和風險，不要只寫 profit。"],
  ["Human Resources", "staffing issue, recruitment method, training need and motivation", "先診斷問題類型，再選 recruitment、training、motivation 或 performance management。"],
  ["Enterprise", "business opportunity, uncertainty, risk response and resource fit", "entrepreneurship 題要把 opportunity 和 risk 一起寫，不能只寫創業很有前景。"],
  ["Customer Service", "customer journey, complaint pattern, retention and reputation", "customer service 要連到 repeat purchase、complaints、brand reputation 和服務流程。"],
  ["Operations", "capacity, quality, process efficiency, bottleneck and cost", "operations 題要寫流程、品質、容量和瓶頸，不要流水帳描述工作步驟。"],
  ["Business Environment", "PESTLE pressure, stakeholder effect and organisational response", "PESTLE 要選最相關的因素，說清它如何改變企業決策。"],
  ["International Business", "market entry, cultural difference, logistics, currency and legal risk", "international 題要謹慎，避免一口氣說全球化一定好。"],
  ["Retail Business", "footfall, product range, location, display and customer behaviour", "retail 題常要把 location、customer behaviour 和 sales evidence 串起來。"],
  ["Digital Business", "online channel, conversion, data tracking and customer trust", "digital 題要說 metric，例如 reach、clicks、conversion、repeat purchase。"],
  ["Hospitality Business", "service consistency, occupancy, seasonal demand and reviews", "hospitality 題要注意 seasonality、review score 和服務標準。"],
  ["Small Business", "limited budget, owner time, local market and simple evidence", "小企業題不能套大型企業答案，重點是 low-cost、manageable、measurable。"]
];

const phraseFunctions = [
  ["Introduce a point", "This section argues that ...", "用於段落開頭，讓讀者知道本段功能。"],
  ["Apply to a business", "In this business context, this matters because ...", "把概念放回案例，不讓段落像背書。"],
  ["Use evidence cautiously", "The available evidence suggests that ...", "證據有限時使用，避免過度宣稱。"],
  ["Show limitation", "This recommendation may be limited by ...", "用於 Merit/Distinction 層次的限制分析。"],
  ["Compare options", "Compared with ..., this option may be more suitable because ...", "比較兩個方案時避免只列優缺點。"],
  ["Make judgement", "Overall, the most suitable option appears to be ..., provided that ...", "結論句要有條件，不要絕對化。"],
  ["Avoid overclaiming", "This may improve ..., but the result depends on ...", "處理不確定性和條件。"],
  ["Connect evidence", "This evidence is relevant because ...", "讓引用或數據真正服務於論點。"],
  ["Repair weak evidence", "If this data is unavailable, the learner should use ...", "面對缺數據時保持誠實。"],
  ["Close a paragraph", "Therefore, this point supports the recommendation because ...", "把段落拉回 task。"]
];

const avoidItems = [
  ["I think this is good.", "Evidence suggests that this may be suitable because ...", "避免一上來用 I think。"],
  ["This will definitely increase sales.", "This could increase sales if the target customers respond to ...", "避免 definitely / surely。"],
  ["Many people like it.", "The target customer group may respond positively if evidence shows ...", "many people 太空泛。"],
  ["The business should advertise more.", "The business should use a more targeted promotional method to reach ...", "advertise more 沒有策略含量。"],
  ["There are advantages and disadvantages.", "The main trade-off is between ... and ...", "優缺點清單不是 evaluation。"],
  ["The company needs better staff.", "The staffing issue appears to relate to ..., so a suitable response may be ...", "避免責怪員工，先診斷。"],
  ["The business needs more money.", "The finance issue should be assessed through cash flow, cost and repayment risk.", "finance 段落要有判斷框架。"],
  ["Social media is cheap and effective.", "Social media may be low-cost, but its effectiveness depends on content quality and audience response.", "低成本不等於有效。"],
  ["Customers are important.", "Customer retention matters because repeat purchases can affect ...", "常識句要轉成 business implication。"],
  ["The business should expand internationally.", "International expansion may be suitable only if the business can manage ...", "international 題要寫風險。"]
];

const phraseCycleThemes = [
  ["Evidence discipline", "source reliability, evidence limits and cautious claims", "證據要有來源、用途和邊界。"],
  ["Marketing application", "target customers, channel choice and response measurement", "行銷段落要回到顧客、渠道和衡量。"],
  ["Finance reasoning", "cash flow, cost, break-even and risk", "財務段落要有數字邏輯和風險意識。"],
  ["Human resources reasoning", "staff problem, training fit and motivation", "人力資源段落先診斷，再提出干預。"],
  ["Operations reasoning", "capacity, quality, bottleneck and process control", "營運段落要寫流程與限制。"],
  ["Customer service reasoning", "complaint pattern, service recovery and retention", "客服段落要連到留存與聲譽。"],
  ["Enterprise judgement", "opportunity, uncertainty and resource fit", "創業段落要同時看機會和承受能力。"],
  ["External environment", "PESTLE pressure and stakeholder response", "外部環境不能列清單，要說影響。"],
  ["Digital business", "online behaviour, conversion and trust", "數字商業要寫指標和信任。"],
  ["International business", "market entry, culture, logistics and legal risk", "國際化要避免絕對樂觀。"],
  ["Comparison writing", "trade-off, suitability and conditions", "比較的重點是判斷取捨。"],
  ["Evaluation writing", "limits, assumptions and final judgement", "評估要把限制變成判斷。"],
  ["Draft repair", "weak paragraph diagnosis and rewrite action", "修稿時先看段落功能是否存在。"],
  ["Submission readiness", "task match, evidence trail and learner authorship", "提交前確認任務、證據和本人作者性。"]
];

const avoidCycleThemes = [
  ["overclaiming", "absolute success claims", "把絕對語氣改成 conditional judgement。"],
  ["vague customers", "unclear target groups", "把 customers 拆成具體人群。"],
  ["empty recommendations", "advice without evidence", "建議後面必須跟證據和條件。"],
  ["weak finance writing", "profit talk without cash-flow logic", "財務不能只寫賺錢。"],
  ["weak marketing writing", "promotion talk without channel fit", "宣傳要有渠道和受眾。"],
  ["weak HR writing", "blaming staff instead of diagnosing the issue", "不要責怪員工，要分析制度或能力問題。"],
  ["weak operations writing", "process description without bottleneck analysis", "流程描述要升級為瓶頸判斷。"],
  ["weak customer service writing", "service praise without retention logic", "服務要連到投訴、復購和聲譽。"],
  ["AI and authorship risk", "language that no longer sounds learner-owned", "AI 只能支持，不能替代學生輸出。"],
  ["source misuse", "evidence dropped into the paragraph without explanation", "引用後必須解釋它證明什麼。"],
  ["false evaluation", "advantages/disadvantages lists without judgement", "優缺點清單不是評估。"],
  ["final submission risk", "unchecked file, missing brief alignment and unsupported claims", "提交前檢查任務、文件和證據鏈。"]
];

const topicRiders = [
  ["Marketing", "The proposed channel is suitable only if the target group actually uses it and the business can monitor response.", "channel fit, target segment, campaign cost, response evidence"],
  ["Finance", "The finance decision should be judged through cash flow, affordability and repayment risk rather than profit alone.", "cash flow, break-even, fixed cost, repayment risk"],
  ["Human Resources", "The staffing response should match the diagnosed issue: skill gap, motivation problem, workload pressure or recruitment need.", "skills audit, staff feedback, turnover pattern, training cost"],
  ["Operations", "The operational recommendation should show how the process, bottleneck or quality issue affects business performance.", "capacity, delay, waste, quality defect, cost impact"],
  ["Customer Service", "The service issue matters when it affects complaints, repeat purchase, reputation or customer trust.", "complaint log, review evidence, retention, service recovery"],
  ["Enterprise", "The opportunity should be judged against risk, resources and the learner's evidence of customer demand.", "market need, resource fit, uncertainty, risk response"],
  ["Business Environment", "The external factor should be selected for relevance rather than listed as a full PESTLE table.", "legal change, economic pressure, social trend, stakeholder effect"],
  ["International Business", "International expansion should be treated as conditional on logistics, culture, currency and legal requirements.", "market entry, exchange rate, cultural fit, compliance risk"],
  ["Retail", "The retail judgement should connect location, product range and customer behaviour to sales evidence.", "footfall, product mix, display, local competition"],
  ["Digital Business", "Digital activity should be judged by conversion, trust and repeat behaviour, not by reach alone.", "reach, clicks, conversion, review trust, data privacy"],
  ["Hospitality", "Hospitality evidence should connect service consistency, occupancy, seasonality and guest feedback.", "occupancy, review score, peak demand, staffing rota"],
  ["Small Business", "Small-business recommendations should stay affordable, manageable and measurable for the owner.", "owner time, local demand, low-cost action, simple metric"],
  ["Comparison", "A comparison should judge both options against the same criterion.", "cost, speed, suitability, risk, evidence quality"],
  ["Evaluation", "Evaluation should explain which condition could change the recommendation.", "limitation, assumption, trade-off, final judgement"]
];

const avoidanceSets = [
  {
    title: "overclaiming",
    risk: "absolute success claims",
    items: [
      ["This will definitely increase sales.", "This could increase sales if the target group responds to the offer."],
      ["The campaign will be successful.", "The campaign may be suitable if the channel reaches the selected customers."],
      ["This is the best method.", "This appears to be the most suitable method given the available evidence."],
      ["The business will make more profit.", "Profit may improve if additional revenue is higher than campaign cost."],
      ["Customers will like it.", "Customers may respond positively if the offer matches their needs."]
    ]
  },
  {
    title: "vague customers",
    risk: "unclear target groups",
    items: [
      ["Many people like cheap products.", "Price-sensitive students may respond to lower-cost offers."],
      ["Customers are important.", "Repeat customers matter because they can reduce the need for constant new-customer acquisition."],
      ["Everyone uses social media.", "The selected audience is likely to use short-form video if evidence shows mobile-first behaviour."],
      ["People want good service.", "Customers who complain about waiting time may value faster response and clearer communication."],
      ["The business should attract more people.", "The business should target a defined group whose needs match the offer."]
    ]
  },
  {
    title: "empty recommendations",
    risk: "advice without evidence",
    items: [
      ["The business should improve marketing.", "The business should test a specific channel because the target group is likely to see it."],
      ["The company should train staff.", "Training is suitable if the evidence shows a skills gap rather than a motivation issue."],
      ["The business needs better service.", "Service recovery should focus on the complaint stage where most dissatisfaction occurs."],
      ["The business should expand.", "Expansion should be considered only if demand evidence and cash-flow capacity support it."],
      ["The business should use technology.", "Technology is useful only if it solves the identified process or customer problem."]
    ]
  },
  {
    title: "weak finance writing",
    risk: "profit talk without cash-flow logic",
    items: [
      ["More sales means more profit.", "Higher sales may still reduce profit if variable costs and promotion costs are too high."],
      ["The business needs more money.", "The finance issue should be assessed through cash flow, cost and repayment risk."],
      ["The loan is good because it gives cash.", "A loan improves short-term cash but creates repayment pressure."],
      ["Discounts will help revenue.", "Discounts may increase volume but lower contribution per sale."],
      ["Expansion is affordable.", "Affordability depends on cash inflows, fixed costs and the timing of payments."]
    ]
  },
  {
    title: "weak marketing writing",
    risk: "promotion talk without channel fit",
    items: [
      ["Social media is cheap and effective.", "Social media may be low-cost, but effectiveness depends on content quality and audience response."],
      ["The business should advertise more.", "The business should choose a channel that reaches the target segment at an affordable cost."],
      ["A discount will attract customers.", "A discount may attract price-sensitive customers but can weaken margin and brand perception."],
      ["Posters are useful.", "Posters are useful only if placed where the target customer is likely to notice them."],
      ["Influencers will increase awareness.", "Influencer activity may increase awareness if the audience matches the product market."]
    ]
  },
  {
    title: "weak HR writing",
    risk: "blaming staff instead of diagnosing the issue",
    items: [
      ["The company needs better staff.", "The staffing issue appears to relate to skills, workload or motivation."],
      ["Training will fix the problem.", "Training is suitable only if employees lack knowledge or procedure confidence."],
      ["Staff are lazy.", "Low performance may reflect unclear targets, workload pressure or weak supervision."],
      ["The business should hire more workers.", "Recruitment is suitable if workload evidence shows capacity shortage."],
      ["Motivation is low.", "Motivation should be evidenced through turnover, absence, feedback or performance patterns."]
    ]
  },
  {
    title: "weak operations writing",
    risk: "process description without bottleneck analysis",
    items: [
      ["The process is slow.", "The delay appears to occur at the order-processing stage."],
      ["Quality is important.", "Quality matters because defects can increase returns, cost and reputational risk."],
      ["The business should be more efficient.", "Efficiency can improve if the identified bottleneck is reduced."],
      ["More machines will help.", "Additional equipment is suitable only if capacity is the real constraint."],
      ["The business wastes time.", "The paragraph should identify which task creates wasted time and how it affects output."]
    ]
  },
  {
    title: "weak customer service writing",
    risk: "service praise without retention logic",
    items: [
      ["Good service is important.", "Service quality matters when it affects repeat purchase and complaints."],
      ["Customers want fast replies.", "Response time should be linked to complaint resolution and customer trust."],
      ["The business should be friendly.", "Staff communication may improve satisfaction if complaints show confusion or frustration."],
      ["Bad reviews are bad.", "Negative reviews can reduce trust and make new-customer acquisition harder."],
      ["The customer is always right.", "Service recovery should balance customer satisfaction with cost and policy limits."]
    ]
  },
  {
    title: "AI and authorship risk",
    risk: "language that no longer sounds learner-owned",
    items: [
      ["AI wrote this paragraph for clarity.", "AI may be used to check structure, but the learner must rewrite and own the argument."],
      ["The wording sounds professional.", "The learner must still be able to explain each claim, source and recommendation."],
      ["I used AI for the final answer.", "AI use should follow the centre's policy and be recorded in the support log."],
      ["The source looks real.", "Every source must be traceable and checked before use."],
      ["The paragraph is better now.", "Improvement is safe only if the learner's own reasoning remains visible."]
    ]
  },
  {
    title: "source misuse",
    risk: "evidence dropped in without explanation",
    items: [
      ["According to a website, marketing is useful.", "Use the source to support a specific claim about the selected business."],
      ["This statistic proves the method works.", "Explain what the statistic can and cannot prove."],
      ["The source says customers like it.", "Identify which customers, which context and why it matters."],
      ["I found a quote.", "A quote needs interpretation, not decoration."],
      ["The evidence is enough.", "Evidence is enough only if it matches the task object and paragraph claim."]
    ]
  },
  {
    title: "false evaluation",
    risk: "advantages/disadvantages lists without judgement",
    items: [
      ["There are advantages and disadvantages.", "The main trade-off is between cost and speed."],
      ["However, there are problems.", "The limitation matters because it may reduce suitability for this business."],
      ["Both options are good.", "Option A is more suitable if the business prioritises cost control."],
      ["It depends.", "It depends on budget, staff capacity and target-customer response."],
      ["This is a balanced answer.", "A balanced answer still needs a final justified judgement."]
    ]
  },
  {
    title: "final submission risk",
    risk: "unchecked file, missing brief alignment and unsupported claims",
    items: [
      ["The assignment is finished.", "The final draft should be checked against the brief, evidence and file requirements."],
      ["The file is uploaded.", "Check file name, version, unit, task number and submission format."],
      ["The writing sounds good.", "Check whether each paragraph answers the command word."],
      ["References are included.", "Check whether each reference is used honestly and explained."],
      ["The tutor checked it.", "Tutor feedback supports revision but does not replace learner ownership."]
    ]
  }
];

const templateScenarios = [
  "a small cafe choosing a low-cost promotional method",
  "a local retailer reviewing weekend sales",
  "a start-up deciding whether to recruit or train staff",
  "a hospitality business responding to poor reviews",
  "an online shop trying to improve conversion",
  "a business with cash-flow pressure before expansion",
  "a service business receiving repeated complaints",
  "a student enterprise testing a new product idea",
  "a family business considering social media advertising",
  "a medium-sized firm comparing supplier options",
  "a sports club shop reviewing customer retention",
  "a college event team managing budget limits",
  "a restaurant deciding whether to extend opening hours",
  "a technology reseller managing stock and demand",
  "a travel business responding to seasonal demand",
  "a bakery comparing loyalty cards and discounts",
  "a salon improving appointment management",
  "a charity shop balancing volunteers and service quality",
  "a fitness studio testing referral marketing",
  "a small manufacturer managing quality problems"
];

const bookletFocuses = [
  ["Task alignment", "Does the paragraph answer the exact command word?", "Circle the command word and underline the sentence that answers it."],
  ["Evidence trail", "Can the evidence be traced and explained?", "Add source, date and the sentence explaining relevance."],
  ["Business application", "Is the point connected to the selected business?", "Name the business, customer group, cost or process affected."],
  ["Cautious language", "Is the claim too absolute?", "Replace will definitely with may, could, is likely to, or depends on."],
  ["Customer group", "Is the target customer specific enough?", "Replace customers with a defined segment and reason."],
  ["Finance logic", "Does the paragraph mention cost, cash flow or risk?", "Add one finance implication before the judgement."],
  ["Marketing logic", "Does the channel fit the audience?", "Explain why this channel reaches this group."],
  ["HR diagnosis", "Is the staff issue diagnosed before the solution?", "Name whether the problem is skill, motivation, workload or recruitment."],
  ["Operations bottleneck", "Does the paragraph identify a process problem?", "Add capacity, quality, delay or waste evidence."],
  ["Customer service", "Does the service point connect to retention or reputation?", "Add a business consequence, not just service praise."],
  ["Evaluation", "Is there a real trade-off?", "Add one condition that could change the recommendation."],
  ["Comparison", "Are two options judged against the same criterion?", "Use cost, suitability, speed or risk as the comparison basis."],
  ["AI support log", "Can the learner explain what support was used?", "Record what was checked and what was rewritten by the learner."],
  ["Source hierarchy", "Is the strongest available evidence being used?", "Replace a weak web claim with brief data, case evidence or a credible source."],
  ["Final file control", "Is the final version clearly named?", "Check file name, unit, task number and final upload version."],
  ["Teacher feedback", "Has feedback been converted into an action?", "Write the exact revision action, not just 'improve analysis'."],
  ["Paragraph order", "Does evidence appear before judgement?", "Move judgement after evidence and application."],
  ["Academic phrasing", "Does the sentence sound too conversational?", "Replace good/bad/very important with a precise academic function."],
  ["Integrity boundary", "Could any sentence look invented or copied?", "Remove unsupported numbers and generic model-answer language."],
  ["Progression value", "Does this paragraph build skills useful for university study?", "Link the habit to evidence, independence and academic judgement."]
];

const append = [];

append.push(`

---

# Part II. Subject Stickers

These subject stickers are quick-reference cards. They connect common BTEC Business topic areas to the same output discipline: task, evidence, application, judgement and integrity.

<div class="micro-sticker"><strong>Positioning sticker</strong><p>This toolkit is a bilingual output system. The learner reads the brief, maps the evidence, selects the academic function and writes with visible responsibility.</p><p>這本書的核心是穩定輸出：讀題、證據、語言、判斷、合規。</p></div>
`);

for (let i = 0; i < subjects.length; i++) {
  const [subject, focus, cn] = subjects[i];
  const avoid = avoidItems[i % avoidItems.length];
  append.push(`

## Subject Sticker ${i + 1}. ${subject}

<div class="caselet"><strong>Subject focus</strong><p>${subject} assignments usually test whether the learner can connect concepts to a specific business situation. The useful writing focus is ${focus}.</p><p>${cn}</p></div>

<div class="two-mini">
<div class="mini-template"><strong>Mini evidence map</strong><ul><li>What is the business problem?</li><li>What evidence is available?</li><li>Which customer, cost, staff or operational group is affected?</li><li>What decision must the business make?</li></ul></div>
<div class="avoid-card"><strong>避諱</strong><p>Weak line: ${avoid[0]}</p><p>Stronger route: ${avoid[1]}</p><p>${avoid[2]}</p></div>
</div>

<div class="phrase-card"><strong>Academic phrase set</strong><p>The main issue appears to be ... because ... . This matters for ${subject.toLowerCase()} because ... . The available evidence suggests that ... . However, this recommendation may be limited by ... . Therefore, the business should prioritise ... provided that ... .</p></div>

`);
}

append.push(`

---

# Part III. Academic Writing Phrasebook

The phrasebook is organised as one master set plus topic riders. Learners should choose the academic function first, then adapt the phrase to the actual assignment brief and evidence.

<div class="micro-sticker"><strong>Phrasebook boundary</strong><p>Phrases are practice scaffolds. They should be rewritten in the learner's own voice before submission and must be connected to real brief evidence.</p><p>套語只用於練習 academic function。提交前必須改成學生自己的語氣，並接上真實 evidence。</p></div>
`);

append.push(`\n\n## Master phrasebook by academic function\n`);
for (const [fn, phrase, note] of phraseFunctions) {
  append.push(`
<div class="phrase-card"><strong>${fn}</strong><p>${phrase}</p><p>${note}</p><p>Adaptation rule: replace every blank with the learner's own brief, business context and evidence.</p></div>
`);
}

for (let block = 0; block < topicRiders.length; block++) {
  const [theme, phrase, evidence] = topicRiders[block];
  append.push(`

## Topic rider ${block + 1}. ${theme}

<div class="phrase-card"><strong>Topic-specific application</strong><p>${phrase}</p><p>Evidence route: ${evidence}.</p><p>Practice line: In this ${theme.toLowerCase()} task, the most relevant evidence is __________________ because __________________.</p></div>
`);
}

append.push(`

---

# Part IV. Avoidance Booklet

This small booklet records expressions that usually weaken assignment writing. It is designed for checking a draft before submission.
`);

for (let cycle = 0; cycle < 12; cycle++) {
  const set = avoidanceSets[cycle];
  const themeCn = avoidCycleThemes[cycle][2];
  append.push(`\n\n<div class="keep-with-next"><h2>Avoidance Set ${cycle + 1}. ${set.title}</h2><p>Risk focus: ${set.risk}. ${themeCn}</p></div>\n`);
  for (const [weak, stronger] of set.items) {
    append.push(`
<div class="avoid-card"><strong>避諱：${weak}</strong><p>Use instead: ${stronger}</p><p>Rewrite practice for ${set.title}: ________________________________</p></div>
`);
  }
}

append.push(`

---

# Part V. Mini Templates

The following templates are small, repeatable writing tools. These templates are practice scaffolds, not submission-ready answers. Replace every field with the learner's own brief, evidence and business case.
`);

const templates = [
  ["Brief-to-paragraph template", ["Command word:", "Task object:", "Business context:", "Evidence:", "Paragraph function:", "Integrity check:"]],
  ["Evidence discipline template", ["Claim:", "Evidence source:", "Evidence type:", "What it proves:", "What it does not prove:", "How to phrase it cautiously:"]],
  ["Evaluation template", ["Option:", "Benefit:", "Evidence:", "Limit:", "Condition:", "Final judgement:"]],
  ["Recommendation template", ["Problem diagnosed:", "Recommended action:", "Reason:", "Resource fit:", "Monitoring method:", "Risk control:"]],
  ["AI-use log template", ["Tool used:", "Purpose:", "Prompt type:", "What changed:", "What I rewrote myself:", "What I can explain orally:"]],
  ["Teacher-feedback action template", ["Feedback point:", "Related paragraph:", "What the feedback means:", "Revision action:", "Evidence added:", "Final check:"]]
];

const tinyBooklets = [
  ["Task alignment", "Brief reading", "assignment brief, command word, assessment criterion", "task drift", "Does the paragraph answer the exact command word?", "Circle the command word and underline the sentence that answers it.", ["The paragraph explains the topic but not the task.", "The paragraph should answer the command word and task object directly."], ["This is related to business.", "This is relevant only if it answers the required assessment point."]],
  ["Evidence trail", "Evidence planning", "source log, date, brief evidence, case data", "source misuse", "Can the evidence be traced and explained?", "Add source, date and the sentence explaining relevance.", ["I found a quote.", "A quote needs interpretation, not decoration."], ["The evidence is enough.", "Evidence is enough only if it matches the task object and paragraph claim."]],
  ["Business application", "Business context", "business name, customer group, cost, staff or process affected", "application drift", "Is the point connected to the selected business?", "Name the business, customer group, cost or process affected.", ["This applies to many businesses.", "The paragraph should show why it applies to this business."], ["The business should do this.", "The recommendation needs a business-specific reason."]],
  ["Cautious language", "Academic phrasing", "conditional language, limits, uncertainty and evidence strength", "overclaiming", "Is the claim too absolute?", "Replace will definitely with may, could, is likely to, or depends on.", ["This will definitely increase sales.", "This could increase sales if the target group responds to the offer."], ["The business will make more profit.", "Profit may improve if additional revenue is higher than campaign cost."]],
  ["Customer group", "Marketing", "target segment, customer need, channel fit and response evidence", "vague customers", "Is the target customer specific enough?", "Replace customers with a defined segment and reason.", ["Customers are important.", "Repeat customers matter because they can reduce the need for constant new-customer acquisition."], ["The business should attract more people.", "The business should target a defined group whose needs match the offer."]],
  ["Finance logic", "Finance", "cash flow, fixed cost, variable cost, break-even and repayment risk", "weak finance writing", "Does the paragraph mention cost, cash flow or risk?", "Add one finance implication before the judgement.", ["More sales means more profit.", "Higher sales may still reduce profit if variable costs and promotion costs are too high."], ["The loan is good because it gives cash.", "A loan improves short-term cash but creates repayment pressure."]],
  ["Marketing logic", "Marketing", "channel choice, target customer, campaign cost and measurable response", "weak marketing writing", "Does the channel fit the audience?", "Explain why this channel reaches this group.", ["Social media is cheap and effective.", "Social media may be low-cost, but effectiveness depends on content quality and audience response."], ["The business should advertise more.", "The business should choose a channel that reaches the target segment at an affordable cost."]],
  ["HR diagnosis", "Human Resources", "skills gap, motivation issue, workload pressure or recruitment need", "weak HR writing", "Is the staff issue diagnosed before the solution?", "Name whether the problem is skill, motivation, workload or recruitment.", ["The company needs better staff.", "The staffing issue appears to relate to skills, workload or motivation."], ["Training will fix the problem.", "Training is suitable only if employees lack knowledge or procedure confidence."]],
  ["Operations bottleneck", "Operations", "capacity, quality, delay, waste and process constraint", "weak operations writing", "Does the paragraph identify a process problem?", "Add capacity, quality, delay or waste evidence.", ["The process is slow.", "The delay appears to occur at the order-processing stage."], ["The business should be more efficient.", "Efficiency can improve if the identified bottleneck is reduced."]],
  ["Customer service", "Customer Service", "complaint pattern, response time, retention and reputation", "weak customer service writing", "Does the service point connect to retention or reputation?", "Add a business consequence, not just service praise.", ["Good service is important.", "Service quality matters when it affects repeat purchase and complaints."], ["Bad reviews are bad.", "Negative reviews can reduce trust and make new-customer acquisition harder."]],
  ["Evaluation", "Evaluation", "trade-off, limitation, assumption and justified final judgement", "false evaluation", "Is there a real trade-off?", "Add one condition that could change the recommendation.", ["There are advantages and disadvantages.", "The main trade-off is between cost and speed."], ["This is a balanced answer.", "A balanced answer still needs a final justified judgement."]],
  ["Comparison", "Comparison", "same criterion, option A, option B, suitability and risk", "comparison drift", "Are two options judged against the same criterion?", "Use cost, suitability, speed or risk as the comparison basis.", ["Both options are good.", "Option A is more suitable if the business prioritises cost control."], ["It depends.", "It depends on budget, staff capacity and target-customer response."]],
  ["AI support log", "Academic integrity", "tool used, purpose, learner rewrite and centre policy", "AI and authorship risk", "Can the learner explain what support was used?", "Record what was checked and what was rewritten by the learner.", ["AI wrote this paragraph for clarity.", "AI may be used to check structure, but the learner must rewrite and own the argument."], ["I used AI for the final answer.", "AI use should follow the centre's policy and be recorded in the support log."]],
  ["Source hierarchy", "Evidence quality", "official brief, class material, credible source and case evidence", "source misuse", "Is the strongest available evidence being used?", "Replace a weak web claim with brief data, case evidence or a credible source.", ["According to a website, marketing is useful.", "Use the source to support a specific claim about the selected business."], ["This statistic proves the method works.", "Explain what the statistic can and cannot prove."]],
  ["Final file control", "Submission readiness", "file name, unit, task number, final version and upload format", "final submission risk", "Is the final version clearly named?", "Check file name, unit, task number and final upload version.", ["The file is uploaded.", "Check file name, version, unit, task number and submission format."], ["The assignment is finished.", "The final draft should be checked against the brief, evidence and file requirements."]],
  ["Teacher feedback", "Revision", "feedback point, paragraph location, revision action and evidence added", "feedback-to-action gap", "Has feedback been converted into an action?", "Write the exact revision action, not just 'improve analysis'.", ["My tutor said improve analysis.", "The learner should identify which claim needs more evidence or judgement."], ["I fixed the paragraph.", "State what was changed: evidence, application, limitation or final judgement."]],
  ["Paragraph order", "Paragraph structure", "claim, evidence, application, analysis and link back to task", "paragraph order risk", "Does evidence appear before judgement?", "Move judgement after evidence and application.", ["Therefore this is the best option.", "First explain the evidence and application before making the judgement."], ["The paragraph has many ideas.", "Order the ideas by function: point, evidence, application, evaluation."]],
  ["Academic phrasing", "Academic style", "precise verb, cautious claim, business implication and task link", "conversational phrasing", "Does the sentence sound too conversational?", "Replace good/bad/very important with a precise academic function.", ["This is good for the business.", "This may support customer retention by ..."], ["The company should do lots of marketing.", "The business should select a channel that matches ..."]],
  ["Integrity boundary", "Academic integrity", "traceable evidence, no invented numbers, no copied model answer", "integrity boundary risk", "Could any sentence look invented or copied?", "Remove unsupported numbers and generic model-answer language.", ["The survey shows 85% of customers agree.", "Use this only if the survey genuinely exists and is referenced."], ["This paragraph sounds like a model answer.", "Rewrite using the learner's own evidence and wording."]],
  ["Progression value", "University-readiness", "independent evidence use, judgement, responsibility and reflection", "progression-value gap", "Does this paragraph build skills useful for university study?", "Link the habit to evidence, independence and academic judgement.", ["This helps me pass.", "This habit supports independent academic writing beyond this assignment."], ["I followed the template.", "The learner should explain the judgement in their own words."]]
];

for (let cycle = 0; cycle < 20; cycle++) {
  const scenario = templateScenarios[cycle];
  append.push(`\n\n<div class="keep-with-next"><h2>Template Pack ${cycle + 1}. ${scenario}</h2><p>Use these templates with this sample context: ${scenario}. These templates are practice scaffolds, not submission-ready answers. Replace every field with the learner's own brief and evidence before writing.</p></div>\n`);
  for (const [name, fields] of templates) {
    append.push(`
<div class="mini-template"><strong>${name}</strong><table><tbody><tr><td>Context:</td><td>${scenario}</td></tr>${fields.map((f) => `<tr><td>${f}</td><td></td></tr>`).join("")}</tbody></table></div>
`);
  }
}

append.push(`

---

# Part VI. Tiny Review Booklets

These twenty compact review cards are designed for tutors or learners. Each card has a distinct review function. They are intended to be used after drafting one paragraph, not as filler pages.
`);

for (let i = 1; i <= tinyBooklets.length; i++) {
  const [focus, subject, evidenceMove, checklistLabel, question, action, avoidA, avoidB] = tinyBooklets[i - 1];
  const levelMove = ["completion", "application", "analysis", "evaluation", "final audit"][(i - 1) % 5];
  append.push(`

<div class="booklet-page">
<div class="keep-with-next"><h2>Tiny Booklet ${i}. ${focus}</h2></div>

<div class="tiny-booklet"><strong>Booklet use</strong><p>Use this page after writing one draft paragraph for ${subject}. Review move: ${levelMove}. Evidence route: ${evidenceMove}. Key question: ${question}</p><p>寫完一段後使用。本頁重點是：${action}</p></div>

<div class="two-mini">
<div class="mini-template"><strong>Paragraph audit</strong><ul><li>Claim: what does this paragraph actually say?</li><li>Application: which sentence connects it to ${subject}?</li><li>Evidence: which ${evidenceMove} supports the claim?</li><li>Depth: is the paragraph at ${levelMove} level?</li><li>Revision: what one sentence should be changed first?</li></ul></div>
<div class="avoid-card"><strong>避諱 checklist: ${checklistLabel}</strong><ul><li>Weak line to avoid: ${avoidA[0]}</li><li>Repair route: ${avoidA[1]}</li><li>Second risk: ${avoidB[0]}</li><li>No invented numbers, fake survey data or copied model paragraph.</li><li>Final test: can the learner explain the paragraph aloud?</li></ul></div>
</div>
</div>
`);
}

fs.writeFileSync(out, [md, append.join("\n"), "\n\n---\n\n", appendices].join("\n"), "utf8");
console.log(out);
