const fs = require("fs");
const path = require("path");

const dir = __dirname;
const source = path.join(dir, "OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Manuscript_Draft_v0_2.md");
const out = path.join(dir, "OTC_BTEC_Level_3_Business_Assignment_Writing_Toolkit_Expanded_Review_v0_3.md");

let md = fs.readFileSync(source, "utf8");

md = md
  .replace("Draft v0.2 · 25 May 2026", "Expanded review draft v0.3 · 26 May 2026")
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

# Part II. Mini Stickers, Tiny Booklets and Academic Writing Templates

This expanded review section turns the manuscript into a working companion rather than a plain reading document. The pages below are designed as reusable classroom, tutoring and self-study inserts.

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

The phrasebook is organised by academic function. Learners should choose a function first, then adapt the sentence to the assignment brief and business evidence.
`);

for (let block = 0; block < 14; block++) {
  const [theme, context, cn] = phraseCycleThemes[block];
  append.push(`\n\n## Phrasebook Cycle ${block + 1}. ${theme}\n\nFocus: ${context}. ${cn}\n`);
  for (const [fn, phrase, note] of phraseFunctions) {
    append.push(`
<div class="phrase-card"><strong>${fn}</strong><p>${phrase}</p><p>${note}</p><p>Practice line for ${theme.toLowerCase()}: In this case, the learner can explain __________________ by using evidence about ${context}.</p></div>
`);
  }
}

append.push(`

---

# Part IV. Avoidance Booklet

This small booklet records expressions that usually weaken assignment writing. It is designed for checking a draft before submission.
`);

for (let cycle = 0; cycle < 12; cycle++) {
  const [theme, risk, cn] = avoidCycleThemes[cycle];
  append.push(`\n\n## Avoidance Set ${cycle + 1}. ${theme}\n\nRisk focus: ${risk}. ${cn}\n`);
  for (const [weak, stronger, note] of avoidItems) {
    append.push(`
<div class="avoid-card"><strong>避諱：${weak}</strong><p>Use instead: ${stronger}</p><p>${note}</p><p>Rewrite practice for ${theme}: ________________________________</p></div>
`);
  }
}

append.push(`

---

# Part V. Mini Templates

The following templates are small, repeatable writing tools. They should be completed with the learner's own assignment brief, evidence and business case.
`);

const templates = [
  ["Brief-to-paragraph template", ["Command word:", "Task object:", "Business context:", "Evidence:", "Paragraph function:", "Integrity check:"]],
  ["Evidence discipline template", ["Claim:", "Evidence source:", "Evidence type:", "What it proves:", "What it does not prove:", "How to phrase it cautiously:"]],
  ["Evaluation template", ["Option:", "Benefit:", "Evidence:", "Limit:", "Condition:", "Final judgement:"]],
  ["Recommendation template", ["Problem diagnosed:", "Recommended action:", "Reason:", "Resource fit:", "Monitoring method:", "Risk control:"]],
  ["AI-use log template", ["Tool used:", "Purpose:", "Prompt type:", "What changed:", "What I rewrote myself:", "What I can explain orally:"]],
  ["Teacher-feedback action template", ["Feedback point:", "Related paragraph:", "What the feedback means:", "Revision action:", "Evidence added:", "Final check:"]]
];

for (let cycle = 0; cycle < 20; cycle++) {
  const scenario = templateScenarios[cycle];
  append.push(`\n\n## Template Pack ${cycle + 1}. ${scenario}\n\nUse these templates with this sample context: ${scenario}. Replace the scenario with the learner's actual brief before writing.\n`);
  for (const [name, fields] of templates) {
    append.push(`
<div class="mini-template"><strong>${name}</strong><table><tbody><tr><td>Context:</td><td>${scenario}</td></tr>${fields.map((f) => `<tr><td>${f}</td><td></td></tr>`).join("")}</tbody></table></div>
`);
  }
}

append.push(`

---

# Part VI. Tiny Review Booklets

These pages are designed as detachable review booklets for tutors or learners. Each booklet repeats the same discipline: task, evidence, writing function, boundary and revision action.
`);

for (let i = 1; i <= 60; i++) {
  const [focus, question, action] = bookletFocuses[(i - 1) % bookletFocuses.length];
  const scenario = templateScenarios[(i - 1) % templateScenarios.length];
  const subject = subjects[(i - 1) % subjects.length][0];
  const avoidA = avoidItems[(i - 1) % avoidItems.length];
  const avoidB = avoidItems[i % avoidItems.length];
  const levelMove = ["completion", "application", "analysis", "evaluation", "final audit"][(i - 1) % 5];
  const evidenceMove = ["brief evidence", "case evidence", "customer evidence", "financial evidence", "teacher feedback", "source log"][(i - 1) % 6];
  append.push(`

## Tiny Booklet ${i}. ${focus}

<div class="tiny-booklet"><strong>Booklet use</strong><p>Use this page after writing one draft paragraph for ${subject}. Review context: ${scenario}. Review move: ${levelMove}. Evidence route: ${evidenceMove}. Key question: ${question}</p><p>寫完一段後使用。本頁重點是：${action}</p></div>

<div class="two-mini">
<div class="mini-template"><strong>Paragraph audit</strong><ul><li>Claim: what does this paragraph actually say?</li><li>Application: which sentence connects it to ${scenario}?</li><li>Evidence: which ${evidenceMove} supports the claim?</li><li>Depth: is the paragraph at ${levelMove} level?</li><li>Revision: what one sentence should be changed first?</li></ul></div>
<div class="avoid-card"><strong>避諱 checklist</strong><ul><li>Weak line to avoid: ${avoidA[0]}</li><li>Repair route: ${avoidA[1]}</li><li>Second risk: ${avoidB[0]}</li><li>No invented numbers, fake survey data or copied model paragraph.</li><li>Final test: can the learner explain the paragraph aloud?</li></ul></div>
</div>
`);
}

fs.writeFileSync(out, md + append.join("\n"), "utf8");
console.log(out);
