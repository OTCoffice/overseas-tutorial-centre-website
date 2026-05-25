const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manuscriptDir = path.join(root, "manuscript");
const outFile = path.join(manuscriptDir, "31_500_page_working_compendium.md");

const domains = [
  {
    name: "Priority and Delegation",
    zh: "優先順序與委派",
    tags: ["prioritization", "delegation_scope", "safety"],
    cue: "new shortness of breath, low oxygen saturation, acute change, unstable client",
    risk: "impaired oxygenation or unsafe delay in care",
    action: "assess the client first, address airway/breathing/circulation as indicated, and escalate according to protocol",
    cn: "這類題的核心不是哪個選項也正確，而是哪個行動最先保護安全。看到 first、priority、new、sudden、worsening，要先找不穩定線索。",
    terms: ["priority", "first action", "unstable client", "RN assessment", "delegate"]
  },
  {
    name: "Question Language",
    zh: "題幹語言",
    tags: ["english_wording", "test_strategy"],
    cue: "requires follow-up, needs further teaching, expected, unexpected, contraindicated",
    risk: "answering the wrong task despite knowing the clinical content",
    action: "translate the task word first, then choose the clinical reasoning pathway",
    cn: "題幹詞控制答題方向。requires follow-up 是找異常或不安全；needs further teaching 是找病人錯誤理解；first 是找最先行動。",
    terms: ["requires follow-up", "further teaching", "expected finding", "contraindicated", "most appropriate"]
  },
  {
    name: "Pharmacology Safety",
    zh: "藥理安全",
    tags: ["pharmacology", "knowledge_gap", "safety"],
    cue: "new symptom after medication, bleeding, toxicity, respiratory depression, ototoxicity",
    risk: "medication harm, adverse effect or toxicity",
    action: "identify the likely harm, assess relevant data, hold/clarify/escalate according to protocol when unsafe",
    cn: "藥理題不要只背用途。先問這個藥最怕什麼 harm，需要監測什麼，病人哪句話顯示危險誤解。",
    terms: ["adverse effect", "toxicity", "monitor", "bleeding risk", "patient teaching"]
  },
  {
    name: "Maternal-Child Safety",
    zh: "產兒安全",
    tags: ["maternal_safety", "cue_recognition", "prioritization"],
    cue: "severe headache, visual changes, heavy lochia, boggy uterus, late decelerations, newborn retractions",
    risk: "maternal, fetal or newborn deterioration",
    action: "recognize red flags, assess promptly, initiate appropriate nursing actions and escalate per protocol",
    cn: "產兒題不是只背週數。先看母體、胎兒或新生兒是否正在失去穩定：出血、胎心、呼吸、血糖、感染與高血壓危象。",
    terms: ["heavy lochia", "boggy uterus", "late decelerations", "newborn distress", "per protocol"]
  },
  {
    name: "Mental Health Communication",
    zh: "精神健康與溝通",
    tags: ["therapeutic_communication", "mental_health", "safety"],
    cue: "suicidal ideation, delusion, panic, mania, command hallucination",
    risk: "self-harm, harm to others, escalation of distress or nontherapeutic communication",
    action: "maintain safety, ask direct risk questions when indicated, use calm therapeutic language and escalate appropriately",
    cn: "治療性溝通不是日常安慰。遇到自傷他傷風險，直接評估安全；遇到妄想，不爭辯也不強化妄想。",
    terms: ["therapeutic communication", "false reassurance", "suicidal ideation", "reflection", "open-ended question"]
  },
  {
    name: "Safety and Infection Control",
    zh: "安全與感染控制",
    tags: ["safety_infection", "cue_recognition"],
    cue: "fall risk, aspiration risk, isolation precautions, fever with abnormal vital signs, AV fistula absent thrill",
    risk: "preventable harm, infection transmission or systemic deterioration",
    action: "identify the route of harm, protect the client and others, and escalate concerning changes",
    cn: "安全題先問 harm 來源：跌倒、誤吸、出血、感染傳播、低氧、敗血症或管路損傷。感染控制先問傳播途徑。",
    terms: ["standard precautions", "airborne", "contact", "aspiration", "sepsis"]
  },
  {
    name: "NGN Case Reasoning",
    zh: "NGN 病例推理",
    tags: ["ngn", "clinical_judgment", "cue_recognition"],
    cue: "changing vital signs, trend data, new assessment finding, response after intervention",
    risk: "missing the case trend and selecting actions that do not match the main risk",
    action: "organize the case into cue, risk, action and evaluation before choosing options",
    cn: "NGN 長病例要讀成時間線。不要把所有資料看成同等重要，先找變化，再找主要風險，再選行動與評估結果。",
    terms: ["recognize cues", "analyze cues", "take action", "evaluate outcomes", "trend"]
  },
  {
    name: "OSCE Transition",
    zh: "OSCE 轉換",
    tags: ["osce_transition", "communication", "clinical_judgment"],
    cue: "can answer the MCQ but cannot explain the action aloud",
    risk: "knowledge remains passive and cannot be demonstrated in a station",
    action: "convert each wrong answer into an oral assessment-action-escalation-evaluation statement",
    cn: "如果能選對但說不出理由，OSCE 仍有風險。每道錯題都要練一句英文：I am concerned about..., I would assess..., I would escalate...",
    terms: ["assessment", "escalation", "handover", "reassessment", "documentation"]
  }
];

const stems = [
  "The nurse reviews a client scenario and must decide the safest first action.",
  "A learner missed this item during mixed practice and brings it to supervision.",
  "A bilingual candidate reads the stem correctly but chooses a correct action too late.",
  "A Stream B candidate wants to convert the item into OSCE-style language.",
  "The app marks this item as wrong and shows related glossary terms."
];

function pageFor(n) {
  const domain = domains[(n - 1) % domains.length];
  const stem = stems[(n - 1) % stems.length];
  const caseNo = String(n).padStart(3, "0");
  const variant = ((n - 1) % 10) + 1;
  return `:::page Page Unit ${caseNo} · ${domain.name}

## Page Unit ${caseNo}: ${domain.zh} / ${domain.name}

### Learning Focus

${domain.cn}

### Scenario

${stem} The relevant cue cluster is: **${domain.cue}**. The likely learning risk is **${domain.risk}**.

中文情境：這一頁不是要求死背答案，而是訓練你把題幹中的 cue 轉成安全判斷。請先用中文說出「我看到什麼線索」，再用英文說出 main risk。

### Mini Question

What should the learner identify before choosing an answer?

A. The option that looks longest and most detailed.  
B. The cue that changes safety priority in this context.  
C. The answer that sounds most familiar from school.  
D. The action that avoids all escalation.

**Best answer: B.**

### Rationale / 解析

The learner should identify the cue that changes safety priority. In this domain, the cue cluster points toward **${domain.risk}**. The safer reasoning path is to **${domain.action}**.

中文解析：本題的訓練重點是先找會改變 priority 的 cue，而不是先看哪個選項最像課本句子。若你選 A，可能被長選項吸引；若選 C，可能只靠熟悉感；若選 D，則可能害怕升級處理而延誤安全行動。

### Wrong-Answer Tags

${domain.tags.map((tag) => `- ${tag}`).join("\n")}

### Bilingual Terms

${domain.terms.map((term) => `- ${term}`).join("\n")}

### Supervisor Prompt

1. 中文：這題最重要的 cue 是什麼？  
2. English: What is the main risk?  
3. 中文：哪個錯誤選項看起來正確但不優先？  
4. English: Say the first safe action in one sentence.

### OSCE Conversion

I am concerned about ${domain.risk}. I would ${domain.action}, then reassess the client and document the findings.

### Workbook Space

| My missed cue | My wrong reason | My next action |
| --- | --- | --- |
|  |  |  |

Page note ${variant}: This item is an original educational drill for internal review. It is not an official NCLEX item and does not predict exam performance.

:::
`;
}

let out = `# Part VIII\n\n## 500-Page Working Compendium: Case Drills, Glossary, Worksheets and Supervisor Pages\n\n> Internal expanded draft. The page units below are original educational drills for structure, supervision and review. High-risk clinical pages require RN / nursing educator review before publication.\n\n`;

for (let i = 1; i <= 470; i += 1) {
  out += pageFor(i) + "\n";
}

fs.writeFileSync(outFile, out);
console.log(`Wrote ${outFile}`);
console.log("Page units: 470");
