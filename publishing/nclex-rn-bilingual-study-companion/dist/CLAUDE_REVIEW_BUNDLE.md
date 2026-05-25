# Claude Review Bundle

Project: NCLEX-RN Clinical Judgment Bilingual Study Companion
Generated for external review.


---

## File: production/CLAUDE_REVIEW_PROMPT.md

```md
# Claude Review Prompt

請你作為「護理教育出版審稿人 + 數字學習產品審核人 + 合規風險審核人」，審核以下項目：

Project:
`NCLEX-RN Clinical Judgment Bilingual Study Companion: Stream B Route Edition`

Location:
`publishing/nclex-rn-bilingual-study-companion/`

## 1. Review Scope

請審核以下文件：

- `README_PROJECT.md`
- `manuscript/00_front_matter.md`
- `manuscript/01_route_map.md`
- `manuscript/02_2026_test_plan.md`
- `manuscript/03_clinical_judgment.md`
- `manuscript/04_prioritization_delegation.md`
- `manuscript/05_ngn_case_method.md`
- `manuscript/06_pharmacology_language.md`
- `manuscript/07_maternal_child.md`
- `manuscript/08_mental_health_communication.md`
- `manuscript/09_safety_infection_control.md`
- `manuscript/10_eight_week_planner.md`
- `manuscript/11_osce_transition.md`
- `manuscript/12_appendices_worksheets.md`
- `app-content/glossary.csv`
- `app-content/wrong_answer_taxonomy.json`
- `app-content/question_bank_seed.json`
- `app-content/question_bank_beta_20.json`
- `app-content/question_bank_expansion_30.json`
- `app-content/question_bank_expansion_50.json`
- `app-prototype/index.html`
- `production/release_plan.md`
- `production/build_manuscript.js`
- `production/generate_expansion_50.js`
- `dist/NCLEX_RN_Bilingual_Study_Companion_Working_Manuscript.html`

## 2. Context

本項目是海外督導學習中心 / 海外書局策劃的獨立雙語教育產品，服務華語護理背景考生，尤其是研究 AHPRA/NMBA Stream B、NCLEX-RN、OSCE、GCAN 與澳洲 RN 路線的人群。

目前狀態：

- 12 章書稿骨架及初稿。
- 500 題 beta 題池，分布於三個 JSON 題庫文件。
- App 原型可載入三個題庫 JSON。
- App 原型含分類 dashboard、錯題隊列、學員報告與本機進度提示。
- RN review sample packet 可由 `production/build_rn_review_sample.js` 生成。
- Clinical risk review queue 可由 `production/build_clinical_risk_review_queue.js` 生成。
- Public demo 50 題白名單可由 `production/build_public_demo_bank.js` 生成，App 預設載入 demo 題池。
- HTML working manuscript build script 已建立。
- 此版本尚未公開銷售，需先審核。

## 3. Review Priorities

請優先找問題，不要只做正面總結。請按嚴重程度排序。

### A. Clinical / Nursing Safety

請檢查：

- 題目、解析、術語是否存在明顯臨床錯誤。
- prioritization、delegation、pharmacology、maternal-child、mental health、infection control 題是否有不安全或過度簡化之處。
- 哪些題目必須由註冊護士/護理教育者再審。
- 是否有可能誤導考生在真實臨床中作出危險行動的表述。

### B. Exam Accuracy

請檢查：

- 2026 NCLEX-RN 題量、CAT、NGN、partial-credit、clinical judgment 表述是否準確。
- 是否把 NCLEX-RN 寫成 AHPRA 註冊結果或保證。
- 是否需要更清楚區分 NCSBN / Pearson VUE / Ahpra / NMBA / ANMAC。
- 是否有過度自信的考試策略建議。

### C. AHPRA/NMBA Stream B Compliance

請檢查：

- Stream B / OBA / MCQ / OSCE / registration 的描述是否合規。
- 是否有「通過 NCLEX 即等於澳洲 RN」的暗示。
- 是否有對 ATT 有效期、dashboard、OSCE 銜接的過度簡化。
- 是否需要加強「以個人 Ahpra/NMBA 通知為準」。

### D. Copyright / IP / Trademark

請檢查：

- 是否有可能侵犯 NCLEX、NCSBN、Pearson VUE、AHPRA、NMBA、ANMAC 或商業題庫品牌權益的表述。
- 是否需要更明確表示「not affiliated / no endorsement」。
- 題目是否看起來像對商業 QBank 的改寫或近似題。
- 書名或 App 名是否有商標風險。

### E. Pedagogy / Bilingual Quality

請檢查：

- 中文解釋是否自然、清楚、適合台灣/華語護理背景讀者。
- 英文術語是否保留得當。
- 是否有過多直譯、過度簡化或中英混雜造成歧義。
- 書稿是否形成可持續學習路徑，而不是零散筆記。

### F. App UX / Data Structure

請檢查：

- `app-prototype/index.html` 是否有明顯功能缺陷。
- 三個題庫 JSON 的結構是否一致、可擴展。
- answer / options / wrong_tags / rationale 欄位是否足夠。
- 是否需要增加 topic filter、review mode、reset progress、export weak tags。

## 4. Required Output Format

請用以下格式輸出：

### Executive Verdict

一句話判斷：目前是否可以進入 beta reader review？

### Critical Issues

列出 P0/P1 問題。每條包含：

- Severity: P0/P1/P2/P3
- File:
- Location or search term:
- Problem:
- Recommended fix:

### Clinical Review Needed

列出需要註冊護士或護理教育者重點審閱的題目 ID / 章節。

### Compliance Fixes

列出必須改的 disclaimer、商標、官方關係、結果承諾等。

### Pedagogical Improvements

列出如何讓書更好學、App 更好用。

### App/Product Improvements

列出 App 下一步最值得做的功能。

### Go / No-Go Recommendation

請在以下三者中選一個：

- Go to limited internal review
- Hold for clinical rewrite
- Not ready

並說明原因。

## 5. Important Instruction

請不要假設這是官方 NCLEX 或 AHPRA 資料。請以獨立教育出版物的標準審核，重點找風險、錯誤和可能誤導讀者之處。

```


---

## File: production/CLAUDE_REVIEW_FIX_LOG.md

```md
# Claude Review Response Log

Date: 2026-05-24  
Project: NCLEX-RN Clinical Judgment Bilingual Study Companion

## Accepted fixes applied

- Added independent-study-guide wording to the working subtitle to reduce any risk of implied Ahpra/NMBA or NCSBN endorsement.
- Added a Stream B / OBA individual-case caveat to Chapter 1: the candidate's Ahpra/NMBA assessment outcome letter, dashboard and official instructions are authoritative.
- Revised Chapter 7 postpartum bleeding language so fundal assessment comes first and fundal massage is framed as an NCLEX-style action after suspected atony, not a universal reflex.
- Expanded the beta question rationale for boggy uterus / heavy lochia with the same protocol-sensitive nuance.
- Expanded the AV fistula rationale to include arm protection: no blood pressure, venepuncture or tight compression on the fistula arm.
- Expanded the pharmacology tinnitus row to include salicylate toxicity, aminoglycosides and loop-diuretic related ototoxicity.
- Added visible app notice that prototype progress is stored only on the local browser/device and may be lost if cache is cleared.
- Added reset-progress and copy-weak-summary controls to the app prototype for internal testing.

## Held for official-source verification

- Claude recommended changing NCLEX-RN item count from 85-150 to 85-145. This was not applied. Current public NCSBN 2026 Candidate Bulletin was checked on 2026-05-24 and still supports 85-150 for this working draft. Chapter 2 now includes a source-control note requiring re-check before any public release.

## Still requiring human nursing review

- MC007 late decelerations / intrauterine resuscitation.
- P003 thyroidectomy / hypocalcemia.
- Chapter 7.4 postpartum bleeding and fundal massage wording after revision.
- Chapter 8.4 suicidal ideation / direct risk assessment and Australian escalation framing.
- PH012 lithium toxicity, including whether to add lithium-level, fluid and sodium-context notes.

```


---

## File: production/generate_500_question_banks.js

```md
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "app-content");

const bankSpecs = [
  { file: "question_bank_beta_20.json", target: 20, version: "0.2", status: "20 original core beta items for editorial and nursing review", prefix: "CORE" },
  { file: "question_bank_expansion_30.json", target: 180, version: "0.5", status: "180-item expanded bilingual beta practice pool for editorial and nursing review", prefix: "AUTO30" },
  { file: "question_bank_expansion_50.json", target: 300, version: "0.6", status: "300-item expanded bilingual beta practice pool for editorial and nursing review", prefix: "AUTO50" }
];

const disclaimer = "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Generated expansion items require RN/nursing educator review before public release.";

function readBank(file) {
  const p = path.join(contentDir, file);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function manualItems(bank) {
  return bank.items.filter((item) => !/^AUTO\d+_/.test(item.id));
}

function optionSet(correct, correctZh, distractors, offset) {
  const labels = ["A", "B", "C", "D"];
  const wrong = distractors.slice(0, 3);
  const rows = wrong.map((d) => ({ en: d[0], zh: d[1], correct: false }));
  rows.splice(offset % 4, 0, { en: correct, zh: correctZh, correct: true });
  return {
    options: rows.map((row, idx) => [labels[idx], row.en, row.zh]),
    answer: [labels[rows.findIndex((row) => row.correct)]]
  };
}

function mk(id, category, stem, stemZh, correct, correctZh, rationale, rationaleZh, tags, distractors, offset) {
  const choices = optionSet(correct, correctZh, distractors, offset);
  return {
    id,
    category,
    stem,
    stem_zh: stemZh,
    options: choices.options,
    answer: choices.answer,
    rationale,
    rationale_zh: rationaleZh,
    wrong_tags: tags,
    generated: true,
    review_status: "needs_nursing_review"
  };
}

const genericPriorityDistractors = [
  ["Document the finding and reassess at the end of the shift.", "記錄該發現並在班末再評估。"],
  ["Provide routine discharge teaching.", "提供例行出院教學。"],
  ["Ask family members what they prefer.", "詢問家屬偏好。"],
  ["Offer comfort measures only.", "只提供舒適措施。"],
  ["Delay action until the next scheduled round.", "延後到下一次例行巡房再處理。"]
];

const priority = [
  ["postoperative client", "new shortness of breath and oxygen saturation 88%", "術後病人", "新發呼吸困難且血氧 88%", "Assess respiratory status and escalate care.", "評估呼吸狀態並升級處理。", "New dyspnea with low oxygen saturation is an immediate breathing concern.", "新發呼吸困難合併低血氧是立即的 breathing 風險。"],
  ["client with diabetes", "confusion, sweating and trembling", "糖尿病病人", "混亂、出汗與顫抖", "Check the blood glucose level.", "檢查血糖。", "These cues suggest possible hypoglycemia and require immediate assessment.", "這些線索提示可能低血糖，需要立即評估。"],
  ["client receiving anticoagulation", "sudden severe headache and confusion", "接受抗凝治療的病人", "突然嚴重頭痛與混亂", "Assess for bleeding and notify the provider promptly.", "評估出血並及時通知醫師/團隊。", "Neurologic change during anticoagulation may indicate serious bleeding.", "抗凝期間出現神經狀態變化可能提示嚴重出血。"],
  ["client with chronic kidney disease", "palpitations and potassium 6.3 mEq/L", "慢性腎病病人", "心悸且鉀 6.3 mEq/L", "Place the client on cardiac monitoring and escalate care.", "進行心電監測並升級處理。", "Hyperkalemia can cause life-threatening dysrhythmias.", "高血鉀可造成危及生命的心律不整。"],
  ["client with possible stroke", "new facial droop and slurred speech", "疑似中風病人", "新發臉歪與言語含糊", "Note time of onset and activate stroke protocol.", "記錄發作時間並啟動中風流程。", "Stroke symptoms require rapid time-sensitive response.", "中風症狀需要快速且有時間敏感性的處理。"],
  ["client after a fall", "new hip pain and external rotation of the leg", "跌倒後病人", "新發髖部疼痛且腿部外旋", "Keep the client still and assess neurovascular status.", "保持病人不動並評估神經血管狀態。", "The cues may indicate fracture; movement can worsen injury.", "這些線索可能提示骨折，移動可能加重傷害。"],
  ["client with asthma", "wheezing and speaking in short phrases", "哮喘病人", "喘鳴且只能短句說話", "Assess breathing and administer prescribed rescue therapy per protocol.", "評估呼吸並按醫囑/流程給予急救治療。", "Short phrases and wheezing indicate respiratory distress.", "只能短句說話與喘鳴提示呼吸窘迫。"],
  ["client with abdominal pain", "rigid abdomen and hypotension", "腹痛病人", "腹部僵硬且低血壓", "Assess circulation and escalate care immediately.", "評估循環並立即升級處理。", "Rigid abdomen with hypotension suggests acute instability.", "腹部僵硬合併低血壓提示急性不穩定。"],
  ["client with chest pressure", "diaphoresis and nausea", "胸部壓迫感病人", "出汗與噁心", "Assess cardiac status and obtain emergency help per protocol.", "評估心臟狀態並按流程尋求緊急協助。", "Chest pressure with diaphoresis and nausea may indicate acute coronary syndrome.", "胸部壓迫感合併出汗和噁心可能提示急性冠脈綜合徵。"],
  ["client with a tracheostomy", "high-pitched noise and anxiety", "氣切病人", "高音調聲音與焦慮", "Assess airway patency.", "評估呼吸道通暢。", "A high-pitched sound can signal airway obstruction.", "高音調聲音可能提示呼吸道阻塞。"],
  ["client with infection", "new confusion, fever and blood pressure 86/52", "感染病人", "新發混亂、發燒且血壓 86/52", "Assess perfusion and activate sepsis response per protocol.", "評估灌流並按流程啟動敗血症處理。", "Infection plus hypotension and mental-status change is concerning for sepsis.", "感染合併低血壓和意識變化令人擔心敗血症。"],
  ["client receiving a blood transfusion", "chills, fever and back pain", "輸血中病人", "寒顫、發燒與背痛", "Stop the transfusion and follow reaction protocol.", "停止輸血並按輸血反應流程處理。", "These findings may indicate a transfusion reaction.", "這些發現可能提示輸血反應。"],
  ["client with head injury", "increasing drowsiness and vomiting", "頭部外傷病人", "嗜睡加重與嘔吐", "Assess neurologic status and escalate care.", "評估神經狀態並升級處理。", "Worsening neurologic cues after head injury may indicate increased intracranial pressure.", "頭傷後神經線索惡化可能提示顱內壓升高。"],
  ["client with COPD", "increasing work of breathing and restlessness", "COPD 病人", "呼吸做功增加且不安", "Assess respiratory status first.", "先評估呼吸狀態。", "Restlessness can be a cue of hypoxia or distress.", "不安可能是低氧或窘迫的線索。"],
  ["client with vomiting and diarrhea", "dizziness and poor skin turgor", "嘔吐腹瀉病人", "頭暈且皮膚彈性差", "Assess hydration status and vital signs.", "評估水合狀態與生命徵象。", "Fluid loss can cause dehydration and perfusion problems.", "體液流失可造成脫水和灌流問題。"],
  ["client after thyroidectomy", "tingling around the mouth and muscle twitching", "甲狀腺切除後病人", "口周麻與肌肉抽動", "Assess for hypocalcemia and maintain airway readiness.", "評估低血鈣並保持 airway 準備。", "Tingling and twitching can indicate hypocalcemia after thyroid surgery.", "甲狀腺術後口周麻和抽動可能提示低血鈣。"]
];

const pharmacology = [
  ["digoxin", "before administration", "給藥前", "Check the apical pulse.", "檢查心尖脈。", "Digoxin can affect heart rate and rhythm; apical pulse assessment supports safe administration.", "Digoxin 可影響心率與心律，心尖脈評估有助安全給藥。"],
  ["warfarin", "black stools", "黑便", "Assess for bleeding and review anticoagulation instructions.", "評估出血並複核抗凝相關指示。", "Black stools may indicate gastrointestinal bleeding.", "黑便可能提示胃腸道出血。"],
  ["insulin lispro", "meal timing", "進餐時間", "Administer close to mealtime as prescribed.", "按處方接近進餐時間給藥。", "Rapid-acting insulin is timed with meals to reduce hypoglycemia risk.", "速效胰島素需配合進餐以降低低血糖風險。"],
  ["prednisone", "stopping when feeling better", "感覺好些就停藥", "Teach not to stop abruptly without provider guidance.", "教導不要未經指示突然停藥。", "Abrupt steroid discontinuation can create adrenal-suppression risk.", "突然停用類固醇可帶來腎上腺抑制風險。"],
  ["gentamicin", "ringing in ears", "耳鳴", "Report possible ototoxicity promptly.", "及時回報可能耳毒性。", "Aminoglycosides may be associated with ototoxicity.", "Aminoglycoside 可能與耳毒性相關。"],
  ["metformin", "scheduled contrast study", "即將做造影檢查", "Clarify provider instructions regarding metformin and kidney risk.", "確認關於 metformin 與腎功能風險的醫囑。", "Metformin around contrast studies may require specific instructions.", "造影檢查前後 metformin 可能需要特別指示。"],
  ["lithium", "vomiting, diarrhea and tremor", "嘔吐、腹瀉與顫抖", "Suspect lithium toxicity and escalate assessment.", "懷疑 lithium 中毒並升級評估。", "GI symptoms with tremor can suggest lithium toxicity.", "胃腸症狀合併顫抖可提示 lithium 中毒。"],
  ["nitroglycerin", "use with erectile dysfunction medication", "與勃起功能障礙藥合用", "Teach that this combination can cause severe hypotension.", "教導此組合可能造成嚴重低血壓。", "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.", "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。"],
  ["furosemide", "new muscle weakness", "新發肌肉無力", "Assess potassium and cardiac risk.", "評估鉀與心臟風險。", "Loop diuretics can contribute to potassium loss.", "袢利尿劑可造成鉀流失。"],
  ["spironolactone", "salt substitute use", "使用代鹽", "Teach that many salt substitutes contain potassium.", "教導許多代鹽含鉀。", "Potassium-sparing diuretics increase hyperkalemia risk.", "保鉀利尿劑會增加高血鉀風險。"],
  ["opioid analgesic", "respiratory rate 8/min", "呼吸 8 次/分", "Assess sedation and respiratory status immediately.", "立即評估鎮靜與呼吸狀態。", "Respiratory depression is a priority opioid safety concern.", "呼吸抑制是 opioid 的優先安全風險。"],
  ["ACE inhibitor", "persistent dry cough", "持續乾咳", "Recognize a possible medication effect and follow up.", "辨識可能藥物效應並追蹤。", "A dry cough can occur with ACE inhibitors.", "ACE inhibitor 可造成乾咳。"]
];

const safety = [
  ["C. difficile infection", "contact precautions and soap-and-water hand hygiene", "C. difficile 感染", "接觸隔離與肥皂水洗手", "Use contact precautions and soap-and-water hand hygiene.", "使用接觸隔離並用肥皂水洗手。", "C. difficile spores are not reliably removed by alcohol rub alone.", "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。"],
  ["airborne infection concern", "negative-pressure room as available", "空氣傳播感染風險", "可用時負壓房", "Place the client in airborne precautions according to protocol.", "按流程安排空氣隔離。", "Airborne precautions generally require special room ventilation.", "空氣隔離通常需要特殊通風安排。"],
  ["confused client trying to climb out of bed", "least restrictive fall-prevention measures", "混亂且試圖下床病人", "限制最少的防跌措施", "Assess causes and implement least restrictive safety measures.", "評估原因並採取限制最少的安全措施。", "Fall prevention starts with assessment and least restrictive interventions.", "防跌應從評估與限制最少的措施開始。"],
  ["seizure in bed", "injury prevention and side positioning when possible", "床上抽搐", "防傷並可行時側臥", "Protect from injury and support airway safety.", "保護病人免受傷並支持 airway 安全。", "Do not place objects in the mouth during a seizure.", "抽搐時不要把物品放入口中。"],
  ["home oxygen", "open flame nearby", "居家氧氣", "附近有明火", "Keep oxygen away from flames and heat sources.", "讓氧氣遠離火源與熱源。", "Oxygen supports combustion and creates fire risk.", "氧氣助燃並帶來火災風險。"],
  ["enteral feeding", "aspiration prevention", "管灌", "預防誤吸", "Keep the head of bed elevated as prescribed.", "按規定抬高床頭。", "Head elevation helps reduce aspiration risk.", "抬高床頭有助降低誤吸風險。"],
  ["needlestick injury", "exposure response", "針刺傷", "暴露處理", "Wash the area and report immediately according to protocol.", "清洗部位並立即按流程報告。", "Occupational exposure requires prompt reporting and protocol-based follow-up.", "職業暴露需要及時報告與按流程追蹤。"],
  ["pressure injury prevention", "immobility", "壓傷預防", "不能活動", "Reposition regularly and protect skin integrity.", "定期翻身並保護皮膚完整性。", "Regular repositioning reduces prolonged pressure.", "定期翻身可減少長時間受壓。"]
];

const maternal = [
  ["postpartum client", "boggy uterus and heavy lochia", "產後病人", "子宮鬆軟且惡露多", "Assess the fundus and massage if atony is confirmed per protocol.", "評估宮底，若確認 atony 則按流程按摩宮底。", "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.", "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。"],
  ["laboring client", "recurrent late decelerations", "產程中病人", "反覆 late decelerations", "Reposition and initiate intrauterine resuscitation actions per protocol.", "變換體位並按流程啟動宮內復甦措施。", "Late decelerations may suggest uteroplacental insufficiency.", "Late decelerations 可能提示子宮胎盤供血不足。"],
  ["pregnant client", "severe headache and visual changes", "孕婦", "嚴重頭痛與視覺變化", "Assess blood pressure and report promptly.", "評估血壓並及時回報。", "These cues can indicate preeclampsia and require prompt evaluation.", "這些線索可能提示子癲前症，需要及時評估。"],
  ["newborn", "jitteriness and poor feeding", "新生兒", "顫抖且餵食差", "Check blood glucose.", "檢查血糖。", "Jitteriness and poor feeding may indicate neonatal hypoglycemia.", "顫抖和餵食差可能提示新生兒低血糖。"],
  ["newborn", "grunting and nasal flaring", "新生兒", "呻吟與鼻翼煽動", "Assess respiratory status immediately.", "立即評估呼吸狀態。", "Grunting and nasal flaring are respiratory distress cues.", "呻吟與鼻翼煽動是呼吸窘迫線索。"],
  ["parent of an infant", "placing the infant to sleep", "嬰兒家長", "安置嬰兒睡眠", "Place the infant on the back to sleep.", "讓嬰兒仰睡。", "Back-to-sleep positioning supports infant sleep safety.", "仰睡有助嬰兒睡眠安全。"]
];

const therapeutic = [
  ["I am scared about the procedure.", "我很害怕這個操作。", "Tell me what worries you most right now.", "告訴我你現在最擔心的是什麼。", "Open-ended exploration acknowledges emotion and gathers information.", "開放式探索能承認情緒並收集資訊。"],
  ["No one listens to me.", "沒有人聽我說。", "I can see this is frustrating. Tell me what happened.", "我看得出這讓你很沮喪，告訴我發生了什麼。", "Acknowledging feeling and inviting expression is therapeutic.", "承認感受並邀請表達具有治療性。"],
  ["I do not want to live anymore.", "我不想活了。", "Are you thinking about harming yourself?", "你是否正在想傷害自己？", "Direct suicide-risk assessment is appropriate and safety focused.", "直接評估自殺風險是合適且以安全為中心的。"],
  ["You are trying to poison me.", "你們想毒害我。", "I am not trying to harm you. Tell me what worries you about the medication.", "我不是要傷害你。告訴我你對藥物擔心什麼。", "Do not argue with delusional content; explore concern and maintain safety.", "不要與妄想內容爭辯；探索擔憂並維持安全。"],
  ["I feel ashamed that I need help.", "我覺得需要幫助很丟臉。", "Many people need support during illness. What kind of help feels hardest to accept?", "很多人在生病時需要支持。哪類幫助最讓你難接受？", "The response normalizes support and explores feelings.", "此回應正常化支持並探索感受。"],
  ["I am angry that the plan changed.", "計劃改變讓我很生氣。", "You sound angry about the change. Let's talk through what changed.", "你聽起來對變化很生氣。我們一起談談改變了什麼。", "Reflection plus clear invitation supports communication.", "反映情緒並清楚邀請溝通有助治療性交流。"]
];

const delegation = [
  ["initial assessment of a newly admitted client", "新入院病人的初始評估", "Keep the task with the RN.", "由 RN 保留該任務。", "Initial assessment requires RN judgment.", "初始評估需要 RN 判斷。"],
  ["routine ambulation of a stable client", "穩定病人的例行行走協助", "Delegate with clear reporting instructions.", "可委派並給出清楚回報指示。", "Stable routine tasks may be delegated when clear parameters are provided.", "穩定例行任務可在明確參數下委派。"],
  ["teaching a new insulin injection technique", "教新的胰島素注射技巧", "Keep the teaching with the RN.", "由 RN 保留教學。", "Initial teaching requires RN responsibility.", "初始教學屬 RN 職責。"],
  ["evaluating whether pain medication worked", "評估止痛藥是否有效", "Keep evaluation with the RN.", "由 RN 保留評價。", "Evaluation of response to medication requires nursing judgment.", "評價藥物反應需要護理判斷。"],
  ["obtaining routine vital signs on a stable client", "為穩定病人測量例行生命徵象", "Delegate with parameters for reporting abnormal values.", "可委派並設定異常值回報標準。", "UAP may collect routine data but must report abnormal findings.", "UAP 可收集例行資料，但需回報異常。"],
  ["care of a client with sudden respiratory distress", "突然呼吸窘迫病人的照護", "Assign to an RN for immediate assessment.", "分配給 RN 立即評估。", "Unstable respiratory status requires RN assessment.", "不穩定呼吸狀態需要 RN 評估。"]
];

const osce = [
  ["patient identification", "病人身份確認", "Can you tell me your full name and date of birth?", "請告訴我你的全名和出生日期？", "Two identifiers support safety before care.", "兩項身份識別有助照護前安全。"],
  ["consent before wound assessment", "傷口評估前徵求同意", "I need to check your wound now; is that okay?", "我現在需要檢查你的傷口，可以嗎？", "Permission and explanation support dignity and consent.", "徵求同意與解釋有助尊嚴和同意。"],
  ["pain assessment", "疼痛評估", "Can you rate your pain from 0 to 10?", "請用 0 到 10 評分你的疼痛。", "A clear pain scale supports focused assessment.", "清楚的疼痛量表有助重點評估。"],
  ["SBAR escalation", "SBAR 升級通報", "The blood pressure is 88/54 and heart rate is 122.", "血壓 88/54，心率 122。", "Objective data makes escalation clearer.", "客觀資料讓升級通報更清楚。"],
  ["hand hygiene explanation", "手部衛生解釋", "I clean my hands before care to reduce infection risk.", "我在照護前清潔雙手，以降低感染風險。", "The explanation links the action to patient safety.", "此解釋將行動與病人安全連結。"]
];

const english = [
  ["requires follow-up", "需要追蹤", "an abnormal or unsafe finding that needs further action", "需要進一步行動的異常或不安全發現"],
  ["expected finding", "預期發現", "a finding consistent with the condition or treatment", "與情況或治療相符的發現"],
  ["priority action", "優先行動", "the safest and most urgent nursing action now", "此刻最安全且最緊急的護理行動"],
  ["further teaching", "需要進一步教學", "a statement showing misunderstanding or unsafe practice", "顯示誤解或不安全做法的陳述"],
  ["best response", "最佳回應", "the response that is safest and most therapeutic in context", "該情境中最安全且最具治療性的回應"]
];

function generatedItem(prefix, number, globalIndex) {
  const id = `${prefix}_${String(number).padStart(3, "0")}`;
  const lane = globalIndex % 9;
  if (lane === 0) {
    const s = priority[globalIndex % priority.length];
    return mk(id, "prioritization", `The nurse is caring for a ${s[0]} with ${s[1]}. What should the nurse do first?`, `護理師照護一位${s[2]}，出現${s[3]}。護理師應先做什麼？`, s[4], s[5], s[6], s[7], ["prioritization", "cue_recognition"], genericPriorityDistractors, globalIndex);
  }
  if (lane === 1) {
    const s = pharmacology[globalIndex % pharmacology.length];
    return mk(id, "pharmacology", `A client taking ${s[0]} needs nursing follow-up related to ${s[1]}. Which action is most appropriate?`, `使用 ${s[0]} 的病人因${s[2]}需要護理追蹤。哪項行動最合適？`, s[3], s[4], s[5], s[6], ["pharmacology", "knowledge_gap"], [["Ignore the finding if the client feels well.", "若病人感覺良好則忽略。"], ["Give an extra dose without an order.", "未經醫囑額外給藥。"], ["Teach that this is never clinically important.", "教導這永遠不具臨床重要性。"], ["Delay follow-up until the next appointment only.", "只延後到下次門診再追蹤。"]], globalIndex);
  }
  if (lane === 2) {
    const s = safety[globalIndex % safety.length];
    return mk(id, "safety_infection", `Which nursing action is most appropriate for ${s[0]} when the issue is ${s[1]}?`, `當問題是${s[3]}時，對於${s[2]}哪項護理行動最合適？`, s[4], s[5], s[6], s[7], ["safety_infection"], [["Document only.", "只記錄。"], ["Use no special safety measures.", "不採取特別安全措施。"], ["Ask another patient to supervise.", "請另一位病人監督。"], ["Remove the call bell.", "移除呼叫鈴。"]], globalIndex);
  }
  if (lane === 3) {
    const s = maternal[globalIndex % maternal.length];
    return mk(id, "maternal_child", `A ${s[0]} has ${s[1]}. What is the best nursing response?`, `一位${s[2]}出現${s[3]}。最佳護理反應是？`, s[4], s[5], s[6], s[7], ["maternal_child", "prioritization"], [["Reassure that this is always expected.", "安慰說這永遠是預期現象。"], ["Wait until the next routine check.", "等到下一次例行檢查。"], ["Focus only on discharge paperwork.", "只處理出院文件。"], ["Tell the client to ignore the symptom.", "告訴病人忽略症狀。"]], globalIndex);
  }
  if (lane === 4) {
    const s = therapeutic[globalIndex % therapeutic.length];
    return mk(id, "therapeutic_communication", `A client says, "${s[0]}" Which response is most therapeutic?`, `病人說：「${s[1]}」哪個回應最具治療性？`, s[2], s[3], s[4], s[5], ["therapeutic_communication"], [["Do not worry about it.", "不要擔心。"], ["Other people have worse problems.", "其他人的問題更嚴重。"], ["You should not feel that way.", "你不應該有這種感覺。"], ["Let's ignore that and move on.", "我們忽略它繼續吧。"]], globalIndex);
  }
  if (lane === 5) {
    const s = delegation[globalIndex % delegation.length];
    return mk(id, "delegation_scope", `The RN is considering delegation of ${s[0]}. Which decision is safest?`, `RN 正在考慮委派${s[1]}。哪個決定最安全？`, s[2], s[3], s[4], s[5], ["delegation_scope"], [["Delegate without giving report parameters.", "未提供回報標準直接委派。"], ["Ask the family to decide scope.", "請家屬決定職責範圍。"], ["Assign based only on who is nearby.", "只按誰離得近來分配。"], ["Skip supervision after delegation.", "委派後不再監督。"]], globalIndex);
  }
  if (lane === 6) {
    const p = priority[globalIndex % priority.length];
    const s = safety[(globalIndex + 3) % safety.length];
    const opts = optionSet(`Assess and act on ${p[1]}; apply ${s[1]} if relevant.`, `評估並處理${p[3]}；如相關則採取${s[3]}。`, [["Focus on nonurgent teaching first.", "先做非緊急教學。"], ["Ignore abnormal cues.", "忽略異常線索。"], ["Choose the longest option without reasoning.", "不推理，只選最長選項。"]], globalIndex);
    return {
      id,
      category: "ngn",
      stem: "Which action best reflects clinical judgment in this mixed safety case?",
      stem_zh: "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      case: `A ${p[0]} has ${p[1]}. The care plan also includes ${s[1]}.`,
      case_zh: `一位${p[2]}出現${p[3]}。照護計劃也包含${s[3]}。`,
      options: opts.options,
      answer: opts.answer,
      rationale: "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      rationale_zh: "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      wrong_tags: ["ngn", "cue_recognition", "prioritization"],
      generated: true,
      review_status: "needs_nursing_review"
    };
  }
  if (lane === 7) {
    const s = osce[globalIndex % osce.length];
    return mk(id, "osce_transition", `Which phrase best demonstrates ${s[0]} in an OSCE-style interaction?`, `在 OSCE 式互動中，哪句話最能展現${s[1]}？`, s[2], s[3], s[4], s[5], ["osce_transition", "therapeutic_communication"], [["You do not need to know why.", "你不需要知道原因。"], ["I will do this without explaining.", "我不解釋就做。"], ["This is just paperwork.", "這只是文書。"], ["Everyone else accepts this.", "其他人都接受這樣。"]], globalIndex);
  }
  const s = english[globalIndex % english.length];
  return mk(id, "english_wording", `In an NCLEX-style stem, the phrase "${s[0]}" most closely means:`, `在 NCLEX 式題幹中，「${s[0]}」最接近的意思是：`, s[2], s[3], `The command phrase "${s[0]}" directs what kind of answer the learner should select.`, `指令詞「${s[0]}」會決定考生應選哪一類答案。`, ["english_wording", "test_strategy"], [["the answer with the most medical jargon", "醫學術語最多的答案"], ["the answer preferred by family members", "家屬偏好的答案"], ["a reason to stop reading the stem", "停止閱讀題幹的理由"], ["a guarantee of exam success", "考試成功保證"]], globalIndex);
}

function expandBank(spec, globalStart) {
  const bank = readBank(spec.file);
  if (spec.prefix === "CORE") {
    bank.version = spec.version;
    bank.status = spec.status;
    bank.disclaimer = disclaimer;
    if (bank.items.length !== spec.target) throw new Error(`${spec.file} expected ${spec.target} items, found ${bank.items.length}`);
    return { bank, nextGlobal: globalStart };
  }

  const base = manualItems(bank);
  if (base.length > spec.target) throw new Error(`${spec.file} has more manual items than target`);
  const generated = [];
  let n = 1;
  let global = globalStart;
  while (base.length + generated.length < spec.target) {
    generated.push(generatedItem(spec.prefix, n, global));
    n += 1;
    global += 1;
  }
  bank.version = spec.version;
  bank.status = spec.status;
  bank.disclaimer = disclaimer;
  bank.items = base.concat(generated);
  return { bank, nextGlobal: global };
}

let globalIndex = 0;
const written = [];
for (const spec of bankSpecs) {
  const result = expandBank(spec, globalIndex);
  globalIndex = result.nextGlobal;
  fs.writeFileSync(path.join(contentDir, spec.file), `${JSON.stringify(result.bank, null, 2)}\n`);
  written.push([spec.file, result.bank.items.length]);
}

const all = written.flatMap(([file]) => readBank(file).items.map((item) => item.id));
const unique = new Set(all);
if (all.length !== unique.size) {
  throw new Error(`Duplicate question IDs found: total ${all.length}, unique ${unique.size}`);
}

for (const [file, count] of written) {
  console.log(`${file}: ${count}`);
}
console.log(`Total: ${all.length}`);

```


---

## File: production/build_rn_review_sample.js

```md
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "app-content");
const outDir = path.join(root, "dist", "rn_review");

const files = [
  "question_bank_beta_20.json",
  "question_bank_expansion_30.json",
  "question_bank_expansion_50.json"
];

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function loadItems() {
  return files.flatMap((file) => {
    const json = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf8"));
    return json.items.map((item) => ({ ...item, source_file: file }));
  });
}

function itemWeight(item) {
  if (!item.generated) return 0;
  if (item.category === "maternal_child") return 1;
  if (item.category === "pharmacology") return 2;
  if (item.category === "prioritization") return 3;
  if (item.category === "ngn") return 4;
  return 5;
}

function sampleByCategory(items, perCategory = 6) {
  const grouped = new Map();
  for (const item of items) {
    if (!grouped.has(item.category)) grouped.set(item.category, []);
    grouped.get(item.category).push(item);
  }
  const sample = [];
  for (const [category, group] of [...grouped.entries()].sort()) {
    const sorted = group
      .slice()
      .sort((a, b) => itemWeight(a) - itemWeight(b) || a.id.localeCompare(b.id));
    sample.push(...sorted.slice(0, Math.min(perCategory, sorted.length)).map((item) => ({ ...item, review_category: category })));
  }
  return sample;
}

function buildCsv(sample) {
  const header = [
    "review_status",
    "reviewer_name",
    "review_date",
    "item_id",
    "category",
    "source_file",
    "generated",
    "stem",
    "stem_zh",
    "answer",
    "rationale",
    "rationale_zh",
    "clinical_safety_notes",
    "language_notes",
    "approved_for_beta"
  ];
  const rows = sample.map((item) => [
    "pending",
    "",
    "",
    item.id,
    item.category,
    item.source_file,
    item.generated ? "yes" : "no",
    item.stem,
    item.stem_zh || item.stemZh || "",
    (item.answer || []).join("|"),
    item.rationale,
    item.rationale_zh || item.rationaleZh || "",
    "",
    "",
    ""
  ]);
  return [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function buildMarkdown(sample, allItems) {
  const counts = {};
  for (const item of allItems) counts[item.category] = (counts[item.category] || 0) + 1;
  const sampleCounts = {};
  for (const item of sample) sampleCounts[item.category] = (sampleCounts[item.category] || 0) + 1;
  const categoryLines = Object.keys(counts).sort().map((category) => {
    return `- ${category}: ${sampleCounts[category] || 0} sampled / ${counts[category]} total`;
  }).join("\n");
  const items = sample.map((item, index) => {
    const options = (item.options || []).map(([label, en, zh]) => `  - ${label}. ${en} / ${zh}`).join("\n");
    return [
      `### ${index + 1}. ${item.id} (${item.category})`,
      "",
      `Source: \`${item.source_file}\` · Generated: ${item.generated ? "yes" : "no"}`,
      "",
      `Stem: ${item.stem}`,
      "",
      `中文: ${item.stem_zh || item.stemZh || ""}`,
      "",
      "Options:",
      options,
      "",
      `Answer: ${(item.answer || []).join(", ")}`,
      "",
      `Rationale: ${item.rationale}`,
      "",
      `中文解析: ${item.rationale_zh || item.rationaleZh || ""}`,
      "",
      "Reviewer decision:",
      "",
      "- [ ] Approved for beta",
      "- [ ] Approved with edits",
      "- [ ] Hold / rewrite",
      "",
      "Clinical safety notes:",
      "",
      "Language / bilingual clarity notes:",
      ""
    ].join("\n");
  }).join("\n\n---\n\n");
  return [
    "# RN / Nursing Educator Review Sample",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    "Purpose: structured clinical safety and bilingual clarity review for the 500-item NCLEX-RN bilingual beta question pool.",
    "",
    "This is an internal review packet. It is not an official NCLEX, NCSBN, Pearson VUE, Ahpra, NMBA or ANMAC document.",
    "",
    "## Sampling Summary",
    "",
    categoryLines,
    "",
    "## Review Instructions",
    "",
    "- Check clinical safety first.",
    "- Check whether the stated answer is defensible for NCLEX-style reasoning.",
    "- Check whether bilingual wording could mislead Chinese-speaking nurses.",
    "- Mark any item that needs real-world protocol nuance, e.g. per facility policy, provider guidance or jurisdictional scope differences.",
    "- Do not approve any item that appears copied or too close to a commercial QBank style.",
    "",
    "## Sampled Items",
    "",
    items
  ].join("\n");
}

const allItems = loadItems();
const ids = new Set(allItems.map((item) => item.id));
if (ids.size !== allItems.length) throw new Error("Duplicate item IDs found");

const sample = sampleByCategory(allItems, 6);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "rn_review_sample.csv"), buildCsv(sample));
fs.writeFileSync(path.join(outDir, "rn_review_sample.md"), buildMarkdown(sample, allItems));

console.log(`Items total: ${allItems.length}`);
console.log(`Sample total: ${sample.length}`);
console.log(`Wrote ${path.join(outDir, "rn_review_sample.csv")}`);
console.log(`Wrote ${path.join(outDir, "rn_review_sample.md")}`);

```


---

## File: production/build_clinical_risk_review_queue.js

```md
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "app-content");
const outDir = path.join(root, "dist", "rn_review");
const files = [
  "question_bank_beta_20.json",
  "question_bank_expansion_30.json",
  "question_bank_expansion_50.json"
];

const highCategory = new Set(["pharmacology", "maternal_child", "prioritization", "ngn", "safety_infection"]);
const mediumCategory = new Set(["delegation_scope", "osce_transition", "therapeutic_communication", "mixed_review"]);

const highKeywords = [
  "airway", "breathing", "oxygen", "saturation", "respiratory", "shortness of breath", "tracheostomy",
  "bleeding", "blood transfusion", "anticoagulation", "heparin", "warfarin", "black stools",
  "sepsis", "shock", "hypotension", "perfusion", "stroke", "head injury", "intracranial", "pulmonary embolism",
  "potassium", "hyperkalemia", "hypokalemia", "hypoglycemia", "blood glucose", "lithium", "digoxin", "gentamicin",
  "metformin", "nitroglycerin", "vancomycin", "opioid", "prednisone", "insulin",
  "postpartum", "boggy", "fundal", "uterine", "late decelerations", "preeclampsia", "newborn", "hypoglycemia",
  "suicidal", "harm yourself", "seizure", "C. difficile", "airborne", "aspiration"
];

const mediumKeywords = [
  "delegate", "delegation", "UAP", "LPN", "LVN", "scope", "assignment",
  "teach", "teaching", "evaluate", "assessment", "OSCE", "SBAR", "escalation",
  "therapeutic", "panic", "delusion", "mania", "consent", "identity"
];

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function loadItems() {
  return files.flatMap((file) => {
    const json = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf8"));
    return json.items.map((item) => ({ ...item, source_file: file }));
  });
}

function itemText(item) {
  return [
    item.id,
    item.category,
    item.stem,
    item.stem_zh || item.stemZh || "",
    item.rationale,
    item.rationale_zh || item.rationaleZh || "",
    ...(item.options || []).flat()
  ].join(" ").toLowerCase();
}

function matchedKeywords(text, keywords) {
  return keywords.filter((keyword) => text.includes(keyword.toLowerCase()));
}

function scoreItem(item) {
  const text = itemText(item);
  const highMatches = matchedKeywords(text, highKeywords);
  const mediumMatches = matchedKeywords(text, mediumKeywords);
  let score = 0;
  const reasons = [];

  if (highCategory.has(item.category)) {
    score += 40;
    reasons.push(`high-risk category: ${item.category}`);
  } else if (mediumCategory.has(item.category)) {
    score += 20;
    reasons.push(`medium-risk category: ${item.category}`);
  }
  if (highMatches.length) {
    score += highMatches.length * 8;
    reasons.push(`high-risk keywords: ${highMatches.slice(0, 8).join(", ")}`);
  }
  if (mediumMatches.length) {
    score += mediumMatches.length * 4;
    reasons.push(`scope/communication keywords: ${mediumMatches.slice(0, 8).join(", ")}`);
  }
  if (item.generated) {
    score += 10;
    reasons.push("generated expansion item");
  } else {
    score += 4;
    reasons.push("manual core item");
  }

  const risk_level = score >= 58 ? "high" : score >= 28 ? "medium" : "low";
  const review_priority = risk_level === "high" ? "review before beta" : risk_level === "medium" ? "review before public release" : "spot-check";
  return { ...item, risk_score: score, risk_level, review_priority, risk_reasons: reasons.join("; ") };
}

function buildCsv(items) {
  const header = [
    "risk_level",
    "risk_score",
    "review_priority",
    "review_status",
    "reviewer_name",
    "review_date",
    "item_id",
    "category",
    "source_file",
    "generated",
    "risk_reasons",
    "stem",
    "stem_zh",
    "answer",
    "rationale",
    "rationale_zh",
    "clinical_safety_notes",
    "required_revision",
    "approved_for_beta"
  ];
  const rows = items.map((item) => [
    item.risk_level,
    item.risk_score,
    item.review_priority,
    "pending",
    "",
    "",
    item.id,
    item.category,
    item.source_file,
    item.generated ? "yes" : "no",
    item.risk_reasons,
    item.stem,
    item.stem_zh || item.stemZh || "",
    (item.answer || []).join("|"),
    item.rationale,
    item.rationale_zh || item.rationaleZh || "",
    "",
    "",
    ""
  ]);
  return [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function buildMarkdown(items) {
  const counts = items.reduce((acc, item) => {
    acc[item.risk_level] = (acc[item.risk_level] || 0) + 1;
    return acc;
  }, {});
  const byCategory = items.reduce((acc, item) => {
    const key = `${item.risk_level}:${item.category}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const categoryLines = Object.entries(byCategory)
    .sort()
    .map(([key, count]) => `- ${key}: ${count}`)
    .join("\n");
  const topHigh = items
    .filter((item) => item.risk_level === "high")
    .slice(0, 40)
    .map((item, index) => `${index + 1}. ${item.id} (${item.category}) score ${item.risk_score}: ${item.risk_reasons}`)
    .join("\n");
  return [
    "# Clinical Risk Review Queue",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    "Purpose: prioritize RN / nursing educator review for the 500-item NCLEX-RN bilingual beta pool.",
    "",
    "This queue is an internal clinical safety tool. It is not an official NCLEX, NCSBN, Pearson VUE, Ahpra, NMBA or ANMAC document.",
    "",
    "## Risk Counts",
    "",
    `- high: ${counts.high || 0}`,
    `- medium: ${counts.medium || 0}`,
    `- low: ${counts.low || 0}`,
    "",
    "## Risk By Category",
    "",
    categoryLines,
    "",
    "## Review Order",
    "",
    "1. Review all high-risk items before beta use.",
    "2. Review all medium-risk items before public release.",
    "3. Spot-check low-risk English/test-strategy items for bilingual clarity and originality.",
    "",
    "## First 40 High-Risk Items",
    "",
    topHigh || "No high-risk items found."
  ].join("\n");
}

const scored = loadItems().map(scoreItem).sort((a, b) => {
  const rank = { high: 0, medium: 1, low: 2 };
  return rank[a.risk_level] - rank[b.risk_level] || b.risk_score - a.risk_score || a.id.localeCompare(b.id);
});

const ids = new Set(scored.map((item) => item.id));
if (ids.size !== scored.length) throw new Error("Duplicate item IDs found");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "clinical_risk_review_queue.csv"), buildCsv(scored));
fs.writeFileSync(path.join(outDir, "clinical_risk_review_queue.md"), buildMarkdown(scored));

const counts = scored.reduce((acc, item) => {
  acc[item.risk_level] = (acc[item.risk_level] || 0) + 1;
  return acc;
}, {});
console.log(`Items total: ${scored.length}`);
console.log(`Risk counts: ${JSON.stringify(counts)}`);
console.log(`Wrote ${path.join(outDir, "clinical_risk_review_queue.csv")}`);
console.log(`Wrote ${path.join(outDir, "clinical_risk_review_queue.md")}`);

```


---

## File: production/build_public_demo_bank.js

```md
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

```


---

## File: README_PROJECT.md

```md
# NCLEX-RN Clinical Judgment Bilingual Study Companion

Project status: large-scale manuscript and companion app initiated  
Date started: 2026-05-24  
Publishing line: Overseas Supervision / Overseas Publishing House  
Working language: Chinese main text with English nursing terminology retained

## Working Title

《NCLEX-RN 臨床判斷雙語備考指南：AHPRA Stream B 路線版（獨立學習指南）》

English title:

`NCLEX-RN Clinical Judgment Bilingual Study Companion: Stream B Route Edition (Independent Study Guide)`

## Product Architecture

This project is designed as a large publishing-and-app package, not a single article.

1. Book: bilingual study companion, 120-180 pages for MVP, expandable to 300+ pages.
2. App: mobile-friendly web app with original bilingual drills, glossary, wrong-answer taxonomy and ATT countdown planner.
3. Workbook: printable Stream B / NCLEX / OSCE planning sheets.
4. Future expansion: OSCE vocabulary, station-prep language, care-plan writing and tutor cohort materials.

## Core Reader

- Chinese-speaking nurses researching Ahpra/NMBA Stream B.
- Taiwan junior-college / diploma-trained nursing graduates with clinical experience.
- Learners who may already use UWorld, Archer, Kaplan, Saunders or SimpleNursing but need bilingual interpretation and route planning.
- Health and community-services learners comparing Australia RN, VET/TAFE, GCAN and OSCE routes.

## Editorial Boundary

This project is an independent educational resource. It is not an official NCSBN, Pearson VUE, Ahpra, NMBA, ANMAC or immigration authority publication. It does not guarantee NCLEX-RN pass, OSCE pass, Australian registration, skills assessment, visa grant or employment.

All practice items must be original. Do not copy, paraphrase or reverse-engineer commercial QBank questions.

## File Map

- `manuscript/00_front_matter.md`: title page, copyright page, disclaimer, preface.
- `manuscript/01_route_map.md`: Stream B / NCLEX / OSCE route map.
- `manuscript/02_2026_test_plan.md`: 2026 NCLEX-RN Test Plan bilingual interpretation.
- `manuscript/03_clinical_judgment.md`: clinical judgment model and Chinese explanation.
- `manuscript/04_prioritization_delegation.md`: prioritization, delegation and scope.
- `manuscript/05_ngn_case_method.md`: NGN case-study reading method.
- `manuscript/06_pharmacology_language.md`: pharmacology language and medication-risk framework.
- `manuscript/07_maternal_child.md`: maternal-child safety cues.
- `manuscript/08_mental_health_communication.md`: mental health and therapeutic communication.
- `manuscript/09_safety_infection_control.md`: safety and infection control.
- `manuscript/10_eight_week_planner.md`: 8-12 week study planner and tracker.
- `manuscript/11_osce_transition.md`: transition from NCLEX-RN to OSCE.
- `manuscript/12_appendices_worksheets.md`: source checklist, study audit and worksheets.
- `app-content/glossary.csv`: bilingual controlled vocabulary.
- `app-content/question_bank_seed.json`: original seed practice items.
- `app-content/question_bank_beta_20.json`: 20 original core beta items for editorial and nursing review.
- `app-content/question_bank_expansion_30.json`: expanded to 180 items; includes manually authored items plus generated bilingual beta items requiring RN review.
- `app-content/question_bank_expansion_50.json`: expanded to 300 items; includes manually authored items plus generated bilingual beta items requiring RN review.
- `app-content/question_bank_public_demo_50.json`: low-risk 50-item public demo candidate pool.
- `app-content/wrong_answer_taxonomy.json`: app diagnostic taxonomy.
- `app-prototype/index.html`: first local browser app prototype.
- `production/release_plan.md`: publishing roadmap, review workflow and product tiers.
- `production/generate_500_question_banks.js`: reproducible generator for the 500-item three-bank beta pool.
- `production/build_rn_review_sample.js`: creates stratified RN / nursing educator review packets.
- `production/build_clinical_risk_review_queue.js`: creates high/medium/low clinical risk review queues for the 500-item pool.
- `production/build_public_demo_bank.js`: builds the 50-item public demo candidate pool from non-high-risk reviewed metadata.

```


---

## File: production/release_plan.md

```md
# Release Plan

## Phase 0: Foundation Pack

Current output:

- project map.
- front matter.
- twelve manuscript chapters.
- controlled vocabulary seed.
- wrong-answer taxonomy.
- seed question bank.
- 500-item beta practice pool across 11 categories, split across three JSON banks as 20 + 180 + 300.
- 50-item public demo candidate pool excluding high-risk clinical items.
- first app prototype.
- working manuscript HTML build script.

## Phase 1: Manuscript Expansion

Target: 120-180 page MVP.

Chapter expansion list:

1. Route map and Stream B process.
2. 2026 NCLEX-RN test plan.
3. Clinical judgment model.
4. Prioritization and delegation.
5. NGN case method.
6. Pharmacology for Chinese-speaking nurses.
7. Maternal-child high-yield framework.
8. Mental health and therapeutic communication.
9. Infection control and safety.
10. 8-12 week study planner.
11. OSCE transition after NCLEX-RN.
12. Appendices: glossary, worksheets, official links.

## Phase 2: App MVP

Target features:

- bilingual question mode.
- glossary flashcards.
- wrong-answer tag log.
- topic filter.
- ATT countdown.
- local storage progress.
- exportable weak-area summary.

Current app prototype status:

- Loads `question_bank_beta_20.json`, `question_bank_expansion_30.json` and `question_bank_expansion_50.json`, currently totaling 500 beta items.
- Loads `question_bank_public_demo_50.json` as the default public demo pool.
- Falls back to embedded starter items if JSON fetch fails.
- Tracks done/correct counts and weak tags in browser local storage.
- Supports multi-answer NGN-style cue recognition items.
- Supports category filtering, wrong-answer-only review, pool shuffle and weak-area summary copy.
- Includes a category review dashboard showing total items, attempted items, accuracy, wrong-answer queue and completion bar by category.
- Loads searchable glossary terms from `app-content/glossary.csv`.
- Allows switching between Public Demo Pool and Full Internal Pool.

Do not build initially:

- official CAT simulator claim.
- pass prediction.
- user account system.
- payment wall.
- copied commercial questions.

## Phase 3: Review

Required review layers:

1. Editorial review: bilingual clarity and structure.
2. Source review: official claims checked.
3. Nursing reviewer: clinical safety and terminology.
4. Compliance review: disclaimers, trademark language, no guarantee.

Review packet:

- `production/build_clinical_risk_review_queue.js` generates a high/medium/low clinical risk queue for all 500 items.
- `production/build_public_demo_bank.js` generates a 50-item public demo candidate bank from non-high-risk items.
- `production/build_rn_review_sample.js` generates a stratified RN / nursing educator review sample.
- Output files live in `dist/rn_review/`.
- Each sampled item should be marked approved, approved with edits, or hold/rewrite before public beta use.
- All high-risk items should be reviewed before beta use; medium-risk items should be reviewed before public release.

## Phase 4: Beta Release

Beta package:

- PDF sample: first 40-60 pages.
- Web app demo: 30-50 questions.
- lead magnet: 8-week planner.
- feedback form.

Success signals:

- 50+ signups from relevant audience.
- 10+ qualified feedback responses.
- 5+ route-review enquiries.
- clear weak-area demand pattern.

```


---

## File: manuscript/00_front_matter.md

```md
# NCLEX-RN 臨床判斷雙語備考指南

## AHPRA Stream B 路線版（獨立學習指南）

NCLEX-RN Clinical Judgment Bilingual Study Companion  
Stream B Route Edition (Independent Study Guide)

Overseas Supervision Learning Centre  
Overseas Publishing House  
First working manuscript, 2026

---

## Publication Notice

This working manuscript is an independent bilingual educational resource prepared by Overseas Supervision Learning Centre and Overseas Publishing House. It is intended to support Chinese-speaking learners who are preparing for NCLEX-RN within a wider Ahpra/NMBA Stream B planning context.

This publication is not an official NCSBN, Pearson VUE, Ahpra, NMBA, ANMAC, Australian Government, nursing board or migration-authority document. No endorsement, approval, sponsorship or official relationship is implied.

本書為海外督導學習中心與海外書局策劃的獨立雙語教育輔助材料，供華語護理背景讀者理解 NCLEX-RN、AHPRA/NMBA Stream B、OSCE 及相關學習規劃。它不是 NCSBN、Pearson VUE、AHPRA、NMBA、ANMAC、澳洲政府、護理監管機構或移民部門的官方材料，也不代表任何官方背書、批准、贊助或合作關係。

## No Guaranteed Outcome

This book and any companion app do not guarantee:

- NCLEX-RN pass.
- OSCE pass.
- Ahpra/NMBA registration.
- ANMAC skills assessment.
- visa grant.
- employment.
- course admission.

本書與配套 App 不承諾 NCLEX-RN 通過、不承諾 OSCE 通過、不承諾澳洲註冊、不承諾 ANMAC 職業評估、不承諾簽證、不承諾就業，也不承諾任何課程錄取結果。

## How to Use This Book

Use this book as a bilingual map, not as a replacement for official instructions. The safest study order is:

1. Read your own Ahpra/NMBA dashboard and official correspondence.
2. Read the current NCSBN / NCLEX test plan and candidate bulletin.
3. Use this book to interpret the test language, clinical-judgment logic and study method.
4. Use a reputable question bank or course for large-volume practice if appropriate.
5. Use this book and the companion app to classify mistakes, build terminology and prepare the OSCE transition.

## Preface

很多華語護理師面對 NCLEX-RN 時，第一反應是「英文很難」。但真正的難點不只在英文，而在三層語境同時轉換：

第一層，是語言。題幹中的 priority、delegation、therapeutic communication、unstable client、expected finding、requires follow-up 這些詞，不是普通英文，它們是護理判斷的訊號。

第二層，是角色。NCLEX-RN 測的是 entry-level registered nurse 的安全實務能力。考生需要知道哪些事必須由 RN 做，哪些可以 delegate，哪些情況必須先 assessment，哪些情況已經進入立即風險。

第三層，是路線。對 AHPRA/NMBA Stream B 考生而言，NCLEX-RN 不是孤立的美國考試，而是 OBA 路線中的 MCQ 階段。通過筆試後，還有 OSCE、註冊申請、英文與文件標準，以及個人的澳洲職涯與移民規劃。

本書要做的，不是替代題庫，而是幫讀者建立一張地圖：你正在考什麼、題目如何讓你犯錯、錯題如何分類、官方時間線如何倒排、筆試之後如何銜接 OSCE。

如果你已經具備護理背景，本書不會把你當作零基礎學生。它會尊重你的臨床經驗，同時幫你把經驗翻譯成 NCLEX-RN 可以測量的 clinical judgment。

```


---

## File: manuscript/01_route_map.md

```md
# Chapter 1

## AHPRA Stream B / NCLEX-RN / OSCE 路線圖

### 1.1 本章目標

讀完本章，你應能回答四個問題：

1. Stream B 是什麼，不是什麼？
2. NCLEX-RN 在 AHPRA/NMBA OBA 路線中扮演什麼角色？
3. 為什麼通過 NCLEX-RN 後仍需 OSCE？
4. 如何把自己的備考時間放進官方流程，而不是只跟著社群經驗跑？

### 1.2 Stream B 不是失敗，而是評估路線

AHPRA / NMBA 對 internationally qualified nurses and midwives 的評估，核心不是問你「是不是護士」，而是評估你的資格、註冊、經驗與標準能否滿足澳洲註冊要求。

Stream B 通常表示：你的資格與護理或助產相關，但尚未被直接認定為與澳洲批准課程 substantially equivalent，或未被直接認為基於相似能力標準。這並不代表你沒有機會，而是代表你需要完成 outcomes-based assessment。

對 RN 方向而言，這條路通常包括：

- Orientation Part 1
- Portfolio
- MCQ examination, currently commonly delivered through NCLEX-RN for registered nurse candidates
- OSCE
- registration application and standards

> Compliance note: The components listed here describe the typical public Stream B / OBA structure at the time of writing. Your individual Ahpra/NMBA assessment outcome letter, online dashboard and official instructions are authoritative. Requirements may differ by case and can change without notice.

> 合規提示：本章列出的組成部分，是按撰寫時公開資料整理的典型 Stream B / OBA 路線。你的個人 AHPRA/NMBA 評估結果信、線上帳戶指示與官方通知才是最終依據；不同個案的要求可能不同，也可能因政策更新而改變。

中文理解可以這樣記：

> Stream B 不是「你不合格」，而是「你需要用考試和文件證明你達到澳洲入門 RN 安全實務標準」。

### 1.3 NCLEX-RN 是 MCQ 階段，不是整個註冊

在 Stream B OBA 路線中，NCLEX-RN 是 registered nurse MCQ examination 的承接方式。這意味著，它是澳洲註冊流程中的一個重要考試節點，但不是註冊本身。

這個區分非常重要，因為很多考生會把「通過 NCLEX」直接想像成「已經成為澳洲 RN」。實際上，對 Stream B 考生來說，通過 NCLEX-RN 後還需要完成 OSCE，之後才有資格進入澳洲註冊申請階段。

更穩妥的說法是：

- NCLEX-RN: 筆試，測 entry-level RN 的知識、能力與臨床判斷。
- OSCE: 臨床實作考，測你能否在接近澳洲入門 RN 的情境中展示安全實務。
- Ahpra/NMBA registration: 由監管機構按文件、標準與審核結果作出決定。

### 1.4 台灣五專背景的關鍵問題

台灣五專護理背景常見優勢：

- 早期進入護理專業訓練。
- 有臨床實習與工作經驗。
- 對病房節奏、生命徵象、基本照護與醫療團隊有現場理解。

常見挑戰：

- 原始學歷層級與澳洲 AQF / entry-to-practice 標準的對應需要個案審查。
- 英文題幹與美式 nursing scope 不熟。
- delegation、therapeutic communication、priority setting 需要轉換。
- NCLEX-RN 通過後還要準備 OSCE，不能把所有精力只放在筆試。

### 1.5 ATT 倒排：不要只聽固定天數說法

NCLEX-RN 的 Authorization to Test (ATT) 有起止日期。考生必須在自己的 ATT 有效期內完成考試。不同監管機構、不同階段可能有不同安排，因此最安全做法是以自己的官方通知為準。

本書建議用「ATT countdown」而不是「固定 180 天」做計劃：

- ATT - 12 weeks: 完成 test plan 導讀與基線測試。
- ATT - 10 weeks: 完成第一輪內容弱點定位。
- ATT - 8 weeks: 開始混合題組與 timed practice。
- ATT - 6 weeks: 每週至少一次完整模擬。
- ATT - 4 weeks: 以 NGN case studies、錯題類型和高頻弱項為主。
- ATT - 2 weeks: 穩定作息、減少新材料、整理考場策略。
- ATT - 3 days: 只做輕量回顧，不再追逐陌生資源。

### 1.6 Route Map Worksheet

Fill this table before you start buying resources.

| Question | Your answer |
| --- | --- |
| Have you completed Ahpra/NMBA self-check? |  |
| Current stream result or expected stream |  |
| Portfolio status |  |
| NCLEX-RN eligibility status |  |
| ATT start date |  |
| ATT expiry date |  |
| Planned exam date |  |
| Current English test status |  |
| OSCE preparation start date |  |
| Main weak area |  |
| Main support needed |  |

### 1.7 Chapter Summary

Stream B is a structured assessment route. NCLEX-RN is a major milestone, but it is not the whole road. A serious candidate must plan across three clocks at the same time:

1. official Ahpra/NMBA process clock.
2. NCLEX-RN ATT/exam clock.
3. OSCE and registration-readiness clock.

The rest of this book focuses on the second clock while never forgetting the first and third.

```


---

## File: manuscript/02_2026_test_plan.md

```md
# Chapter 2

## 2026 NCLEX-RN Test Plan 雙語解讀

### 2.1 先把考試想清楚

NCLEX-RN is a variable-length computerized adaptive test. In plain Chinese:

> NCLEX-RN 不是固定題量考試，而是電腦根據你的作答表現調整後續題目難度，直到系統能作出通過或未通過判斷，或達到最大題量/時間規則。

2026 Candidate Bulletin 的核心行政資訊：

- Exam format: CAT, computer-based.
- Length: 85-150 items.
- Time limit: 5 hours.
- Breaks: optional, included in total time.
- Scoring: includes partial-credit scoring for items with more than one key.

> Source-control note: This working draft keeps the 85-150 item range after checking the current public NCSBN 2026 Candidate Bulletin on 2026-05-24. Before publication, verify the latest NCSBN candidate bulletin and test plan again, because administrative exam parameters can change.

### 2.2 Test Plan 是地圖，不是裝飾文件

很多考生一開始就買題庫，卻不讀 test plan。這會讓備考變成「被題目牽著走」。Test plan 的功能是告訴你：

- 考試要測哪些 client needs。
- clinical judgment 如何被放入考題。
- 題目如何分類。
- entry-level RN 的安全實務能力是什麼。

對華語考生而言，test plan 的價值還有一層：它能幫你建立英文護理語言的官方詞彙系統。你不必一開始背完整文件，但應該知道每個大類在問什麼。

### 2.3 Client Needs 不是普通科目

NCLEX-RN 的內容不是按「內科、外科、產科、兒科」這種傳統科目切分，而是按 client needs 組織。這對台灣考生很重要，因為你的學校學習記憶可能是科目制，但考試思路是安全照護需求制。

常見大方向包括：

- Safe and Effective Care Environment
- Health Promotion and Maintenance
- Psychosocial Integrity
- Physiological Integrity

中文不要只翻譯成名詞，要理解成問題：

- 這個照護環境是否安全有效？
- 病人目前需要健康促進、篩查或教育嗎？
- 心理社會狀態是否影響安全、溝通與依從性？
- 生理穩定性是否受到威脅？

### 2.4 NGN 的核心：Clinical Judgment

Next Generation NCLEX 的核心不是題型花樣，而是 clinical judgment。題型變化只是表面，真正被測的是你能否按護理流程思考。

可以把 clinical judgment 分成六個動作：

1. Recognize cues: 找到有意義的線索。
2. Analyze cues: 判斷線索代表什麼。
3. Prioritize hypotheses: 哪個問題最急、最危險、最可能。
4. Generate solutions: 可以做什麼。
5. Take action: 現在最該做什麼。
6. Evaluate outcomes: 做完後如何評估是否有效。

中文考生最常卡在第 1 和第 3 步：

- 線索找太多，分不出重要性。
- 看到熟悉疾病就急著選治療，忽略 priority 或 safety。
- 把「正確的護理知識」誤認成「此刻最優先的護理行動」。

### 2.5 Mini Drill: 找 cues

Read the stem:

> A client who is 2 hours postoperative after abdominal surgery reports increasing shortness of breath and appears restless. The oxygen saturation is 88% on room air.

Do not answer yet. First classify the cues.

| Cue | Why it matters |
| --- | --- |
| 2 hours postoperative | recent surgery, risk window |
| increasing shortness of breath | respiratory concern, worsening trend |
| restless | possible hypoxia / distress |
| oxygen saturation 88% | objective abnormal oxygenation |

Question to ask:

> Is this a comfort problem, education problem, psychosocial problem or immediate physiological safety problem?

Expected reasoning:

This is an immediate physiological safety problem. Airway/breathing and oxygenation come before routine teaching, discharge planning or nonurgent communication.

### 2.6 Chapter Summary

The 2026 NCLEX-RN should be studied through official structure:

- CAT format.
- 85-150 items.
- 5-hour total limit.
- clinical judgment.
- client needs.
- NGN item formats.
- partial-credit scoring.

Your goal is not to memorise every fact. Your goal is to become consistent at safe entry-level RN judgment under English-language exam pressure.

Before this chapter is printed or released outside internal review, re-check the current NCSBN candidate bulletin and test plan against the numbers above.

```


---

## File: manuscript/03_clinical_judgment.md

```md
# Chapter 3

## Clinical Judgment：把臨床經驗轉成考試可測量的判斷

### 3.1 為什麼有經驗也會錯題

有臨床經驗的考生常說：「我在病房知道要怎麼做，但題目一看就錯。」這不是你沒有能力，而是考試把臨床情境壓縮成文字，要求你在有限線索中選出最安全、最標準、最符合 RN 職責的行動。

臨床現場可以問同事、看醫囑、回頭補資料；考試題目通常只給你幾句話。它不測你是否能照顧所有真實細節，而是測你是否能在有限資訊下做 entry-level safe decision。

### 3.2 Clinical Judgment 六步中文化

| English | 中文工作定義 | 考題中的表現 |
| --- | --- | --- |
| Recognize cues | 找出重要線索 | abnormal vitals, new symptoms, risk factors |
| Analyze cues | 解釋線索意義 | hypoxia? sepsis? bleeding? anxiety? |
| Prioritize hypotheses | 排序可能問題 | which is most urgent or dangerous? |
| Generate solutions | 想出可行行動 | assess, position, notify, teach, delegate |
| Take action | 選現在要做的事 | first, priority, immediate, best |
| Evaluate outcomes | 評估是否有效 | expected response, follow-up, reassess |

### 3.3 考題動詞是導航

題幹動詞通常已經告訴你考點：

- first: 先做什麼，通常是 priority。
- priority: 最重要，不一定是唯一正確。
- best: 在多個可行選項中選最合適。
- immediate: 需要立刻處理。
- requires follow-up: 哪個發現不正常，需要追蹤。
- indicates understanding: 哪句話顯示病人真正理解。

中文考生要避免把所有題都當知識題。看到 first / priority / immediate，就要進入安全排序模式。

### 3.4 Wrong Answer Taxonomy

本書與 App 使用以下錯題分類：

1. Knowledge gap: 不知道疾病、藥物或程序。
2. English wording: 英文題幹或選項理解錯。
3. Cue recognition: 沒抓到關鍵線索。
4. Prioritization: 線索抓到了，但優先順序錯。
5. Delegation/scope: 不知道 RN、LPN/LVN、UAP 分工。
6. Safety/infection control: 忽略安全或感染控制。
7. Psychosocial communication: 溝通語氣不 therapeutic。
8. Test strategy: 題型、時間或焦慮造成錯誤。

每一題練習後，都要標記錯因。不要只寫「粗心」。粗心不是診斷，不能幫你進步。

### 3.5 Mini Drill

Question:

The nurse receives four client messages. Which client should the nurse assess first?

A. A client with chronic arthritis reporting pain rated 5/10.  
B. A client taking furosemide reporting muscle weakness.  
C. A client scheduled for discharge asking about medication timing.  
D. A client with insomnia requesting a sleep aid.

Reasoning:

- A: pain, but chronic and moderate.
- B: furosemide can cause hypokalemia; muscle weakness may signal electrolyte problem with cardiac risk.
- C: education, not immediate.
- D: comfort/sleep, not immediate.

Best answer: B.

Wrong-answer tags if missed:

- Knowledge gap: did not link furosemide to potassium loss.
- Cue recognition: missed muscle weakness as significant.
- Prioritization: chose comfort or education before safety risk.

### 3.6 Chapter Summary

Clinical judgment is not a slogan. It is a repeatable reading process:

1. Find cues.
2. Interpret risk.
3. Rank danger.
4. Choose safe RN action.
5. Review why other answers are less urgent.

The app will turn this process into structured drill logs.


```


---

## File: manuscript/04_prioritization_delegation.md

```md
# Chapter 4

## Prioritization and Delegation

### 4.1 優先順序不是口號

很多考生知道 ABC, Maslow, safety，但真正做題時仍然錯。原因是規則不能機械套用。NCLEX-RN 問的是具體情境中「現在最安全的 RN 行動」。

常用排序工具：

- ABC: airway, breathing, circulation.
- Safety: fall, aspiration, bleeding, infection, violence, medication error.
- Acute vs chronic: acute deterioration often outranks stable chronic condition.
- Unstable vs stable: unstable client needs RN attention.
- Expected vs unexpected: unexpected finding may require follow-up.
- Nursing process: assessment often before intervention, unless immediate life risk.

### 4.2 Chinese Trap: 正確但不優先

很多錯誤選項不是錯知識，而是「正確但不優先」。

Example:

病人術後呼吸急促、SpO2 下降。選項中可能有：

- Teach incentive spirometer.
- Raise head of bed and assess respiratory status.
- Document the finding.
- Encourage oral fluids.

Teach incentive spirometer 是正確護理內容，但如果病人正在低氧，當下優先是改善/評估 breathing，而不是教學。

### 4.3 Delegation: RN 不能交出去的事

General NCLEX-style principle:

RN keeps tasks involving:

- initial assessment.
- unstable client assessment.
- teaching.
- evaluation.
- clinical judgment.
- care planning.
- sterile or complex procedures depending on jurisdiction and setting.

UAP / assistant-level staff may perform routine, stable, predictable tasks such as:

- bathing.
- feeding stable clients without aspiration risk.
- ambulation assistance for stable clients.
- measuring routine vital signs in stable situations.
- reporting observations to RN.

The exact scope may vary by jurisdiction and facility, but NCLEX-RN questions usually test entry-level safety boundaries.

### 4.4 Mini Drill: Delegation

Question:

Which task is most appropriate for the RN to delegate to unlicensed assistive personnel?

A. Teach a new diabetic client how to inject insulin.  
B. Assess a client with new chest pain.  
C. Assist a stable postoperative client to ambulate.  
D. Evaluate whether pain medication was effective.

Best answer: C.

Why:

- Teaching is RN responsibility.
- New chest pain is unstable and requires RN assessment.
- Stable ambulation assistance can be delegated.
- Evaluation of medication effectiveness requires nursing judgment.

### 4.5 Priority Phrases

| Phrase in stem | How to think |
| --- | --- |
| immediately | safety / life risk first |
| first | assessment or immediate safety action |
| best | choose the safest, most complete option |
| requires follow-up | identify abnormal/unexpected |
| further teaching | identify misunderstanding |
| assign/delegate | match task to stability and scope |

### 4.6 Chapter Summary

Prioritization and delegation are the heart of NCLEX-RN for many international nurses. Do not only ask, "Is this answer true?" Ask:

- Is this the safest action now?
- Is this client stable?
- Is this task within RN responsibility?
- Can this be delegated?
- Does the option assess before intervening when appropriate?


```


---

## File: manuscript/05_ngn_case_method.md

```md
# Chapter 5

## NGN Case Study Reading Method

### 5.1 不要被病例長度嚇到

NGN case study 看起來很長，但它不是要你背更多內容。它要測的是動態判斷：新的資料出現後，你能否重新排序風險。

中文考生常犯兩個錯：

1. 把所有資料都當同等重要。
2. 看到熟悉疾病就套模板，忽略題目中正在變化的 cues。

### 5.2 Four-Pass Reading Method

Pass 1: Identify setting and client.

- Where is the client?
- Why are they receiving care?
- Is this emergency, postop, maternity, paediatric, psychiatric or chronic care?

Pass 2: Mark abnormal cues.

- Vital signs.
- new symptoms.
- lab values.
- mental status.
- medication risk.
- change from baseline.

Pass 3: Rank immediate danger.

- airway/breathing/circulation.
- neurological change.
- bleeding.
- sepsis/infection.
- medication toxicity.
- suicide/violence risk.

Pass 4: Match action to RN role.

- assess.
- notify provider.
- implement safety action.
- hold medication.
- teach.
- delegate.
- evaluate.

### 5.3 Mini Case

Client:

A 62-year-old client is 1 day postoperative after bowel surgery. The client reports increasing abdominal pain. Temperature is 38.6 C. Heart rate is 118/min. Blood pressure is 92/58 mmHg. The dressing has a small amount of serosanguineous drainage. The client is restless.

Step 1: Setting

- Postoperative bowel surgery.

Step 2: Abnormal cues

- increasing abdominal pain.
- fever.
- tachycardia.
- hypotension.
- restlessness.

Step 3: Danger

Possible infection/sepsis, bleeding or postoperative complication. Hypotension + tachycardia + restlessness are urgent.

Step 4: Likely safe direction

Assess quickly, maintain safety, notify provider/rapid response according to context, do not treat as routine pain only.

### 5.4 App Drill Design

The companion app will turn each NGN case into cue cards:

- Cue list.
- Risk interpretation.
- Priority hypothesis.
- First nursing action.
- Wrong-answer tag.

The learner should not only know the answer. The learner should be able to say:

> I chose this because these cues indicate immediate physiological risk, and this action is within RN responsibility now.

### 5.5 Chapter Summary

NGN is not a separate monster. It is clinical judgment made visible. If you can train cue recognition, risk ranking and action matching, long cases become manageable.


```


---

## File: manuscript/06_pharmacology_language.md

```md
# Chapter 6

## Pharmacology Language：藥理不是背藥名，而是抓風險

### 6.1 為什麼華語考生容易怕藥理

NCLEX-RN 的藥理題常讓華語考生焦慮，原因不只是藥名多，而是英文藥名、藥物類別、病人安全線索與護理行動同時出現。你可能知道某類藥「大概做什麼」，但題目問的是：現在要先評估什麼？哪個症狀需要 follow-up？哪個教育句子表示理解錯誤？

本章不嘗試做完整藥典。它提供一個 bilingual pharmacology reading system，幫你把藥理題分成可處理的幾類。

### 6.2 藥理題常考四件事

1. Purpose: 這個藥為什麼給？
2. Risk: 最大安全風險是什麼？
3. Monitoring: 給藥前後要看什麼？
4. Teaching: 病人需要知道什麼，哪句話表示誤解？

看到藥名時，先問這四句，而不是立刻背所有副作用。

### 6.3 高頻風險語言

| English signal | 中文理解 | Nursing action |
| --- | --- | --- |
| bleeding gums, black stools | 出血風險 | check anticoagulant / platelet issue |
| muscle weakness | 可能電解質問題 | consider potassium, diuretics |
| ringing in ears | 耳鳴 | consider salicylate toxicity, aminoglycosides or loop-diuretic related ototoxicity |
| dry cough | 乾咳 | possible ACE inhibitor effect |
| grapefruit juice | 葡萄柚汁 | interaction risk |
| photosensitivity | 光敏感 | sun protection teaching |
| orthostatic hypotension | 姿勢性低血壓 | fall prevention teaching |

### 6.4 藥物類別比單一藥名更重要

先用類別建立框架：

- Diuretics: fluids, electrolytes, blood pressure.
- Anticoagulants: bleeding, INR/aPTT depending on drug/context, injury prevention.
- Antihypertensives: hypotension, dizziness, pulse, fall risk.
- Insulin: timing, hypoglycemia, glucose monitoring.
- Opioids: respiratory depression, sedation, constipation, safety.
- Antibiotics: allergy, culture timing, completion, adverse reactions.
- Steroids: infection risk, glucose, tapering, long-term effects.

### 6.5 Mini Drill

Question:

A client taking warfarin reports black, tarry stools. Which action should the nurse take first?

A. Encourage the client to eat more leafy green vegetables.  
B. Document the finding as an expected effect.  
C. Assess for bleeding and notify the provider.  
D. Teach the client to take the medication with food.

Best answer: C.

Reasoning:

Black, tarry stools may indicate gastrointestinal bleeding. Warfarin is associated with bleeding risk. This is not routine diet teaching; it requires safety assessment and follow-up.

Wrong-answer tags:

- knowledge_gap: did not connect warfarin with bleeding.
- cue_recognition: missed black stools.
- prioritization: chose teaching before safety.

### 6.6 Study Method

For each medication class, make a 5-line card:

1. Class and examples.
2. Why used.
3. Major danger.
4. What to monitor.
5. Patient teaching sentence.

Do not write long paragraphs. Pharmacology memory improves when each card has the same structure.

```


---

## File: manuscript/07_maternal_child.md

```md
# Chapter 7

## Maternal-Child Nursing：產兒題的安全線索

### 7.1 產兒題不只是記週數

華語考生常把 maternal-child nursing 當成「週數、發育、疫苗、產程」的記憶題。NCLEX-RN 的產兒題當然需要基礎知識，但更常測安全線索：出血、胎兒窘迫、感染、子癲前症、產後併發症、新生兒呼吸與餵養風險。

本章先建立安全框架，之後再進入細節。

### 7.2 Pregnancy: red flags

| Cue | Why it matters |
| --- | --- |
| severe headache, visual changes | possible preeclampsia |
| right upper quadrant pain | possible severe preeclampsia/HELLP concern |
| vaginal bleeding | placental or pregnancy complication |
| decreased fetal movement | fetal well-being concern |
| fever and uterine tenderness | infection concern |
| regular contractions before term | preterm labor concern |

### 7.3 Labor: fetal monitoring language

NCLEX-RN 題目常用胎心監測考安全判斷。不要只背名詞，要知道方向：

- Reassuring: moderate variability, accelerations.
- Concerning: recurrent late decelerations, absent variability, prolonged deceleration.
- Nursing actions may include repositioning, stopping oxytocin, IV fluids, oxygen according to protocol/context, notifying provider.

中文理解：

> 若題目顯示胎兒供氧或 uteroplacental perfusion 受威脅，優先處理是改善胎兒氧合與通知團隊，而不是一般安慰或常規文件。

### 7.4 Postpartum: bleeding is priority

產後題常見 priority：

- boggy uterus.
- heavy lochia.
- tachycardia/hypotension.
- dizziness.
- saturated pads.

Assessment of the fundus and bleeding pattern comes first. If a boggy uterus / uterine atony is confirmed, NCLEX-style questions often expect fundal massage as an immediate nursing action, while real clinical practice follows facility protocol and provider or midwifery guidance.

### 7.5 Newborn: breathing and glucose

新生兒題的高頻安全線索：

- grunting, nasal flaring, retractions.
- cyanosis.
- poor feeding, jitteriness.
- temperature instability.
- hypoglycemia risk.

對新生兒來說，呼吸困難與低血糖線索都很重要。不要把所有 crying / feeding / diaper questions 看成 routine。

### 7.6 Mini Drill

Question:

A postpartum client has a boggy uterus and heavy lochia. What should the nurse do first?

A. Encourage oral fluids.  
B. Massage the fundus.  
C. Assist the client to shower.  
D. Document the finding.

Best answer: B.

Reasoning:

A boggy uterus with heavy lochia suggests uterine atony and bleeding risk. In this NCLEX-style context, fundal massage is the expected immediate nursing action for suspected atony, while real clinical practice should follow facility protocol and provider or midwifery guidance after assessment.

Wrong-answer tags:

- cue_recognition.
- prioritization.
- safety_infection.

```


---

## File: manuscript/08_mental_health_communication.md

```md
# Chapter 8

## Mental Health and Therapeutic Communication

### 8.1 精神科與溝通題的核心

Mental health 題不是要你說漂亮話，而是要測安全、治療性溝通、界線、風險評估和不帶評判的回應。華語考生容易用日常安慰方式作答，例如「不要擔心」「一切會好」「你應該想開點」。在 NCLEX-RN 中，這些常常不是最佳答案。

治療性溝通的方向是：

- acknowledge feelings.
- use open-ended questions.
- encourage expression.
- focus on safety when risk exists.
- avoid false reassurance.
- avoid giving personal advice.
- avoid arguing with delusions.

### 8.2 Dangerous Communication Patterns

| Pattern | Why it is weak |
| --- | --- |
| "Don't worry." | false reassurance |
| "You should..." | advice-giving |
| "Why did you..." | may sound blaming |
| "That is not true." | arguing, especially with delusion |
| "Let's talk about something else." | blocks expression |

### 8.3 Safer Response Patterns

| Situation | Better response |
| --- | --- |
| Anxiety | "Tell me what you are most worried about right now." |
| Grief | "This sounds very painful. Would you like to talk about it?" |
| Hallucination | "I do not hear the voice, but I can see this is frightening for you." |
| Suicidal thought | "Do you have a plan to harm yourself?" |
| Anger | "I can see you are upset. I want to understand what happened." |

### 8.4 Safety Overrides Communication

If a client expresses suicidal ideation, homicidal ideation, severe self-neglect, violence risk or acute confusion, safety assessment becomes priority. Therapeutic words matter, but the nurse must assess risk directly.

Chinese-speaking learners may feel direct suicide questions are impolite. In NCLEX-RN logic, direct risk assessment is therapeutic and safe.

### 8.5 Mini Drill

Question:

A client says, "I cannot go on anymore. I have been thinking about ending my life." Which response is best?

A. "You have so much to live for."  
B. "Do you have a plan to harm yourself?"  
C. "Try not to think that way."  
D. "I will tell your family to stay with you."

Best answer: B.

Reasoning:

Direct suicide risk assessment is required. False reassurance and advice-giving do not assess immediate safety.

Wrong-answer tags:

- therapeutic_communication.
- safety_infection.
- prioritization.


```


---

## File: manuscript/09_safety_infection_control.md

```md
# Chapter 9

## Safety and Infection Control

### 9.1 Safety is not a small topic

NCLEX-RN treats safety as a foundation of nursing practice. Safety may appear in medication administration, falls, infection control, restraints, emergency response, oxygen use, aspiration, isolation and client identification.

Chinese-speaking learners should build one reflex:

> Before choosing a comfortable, educational or administrative answer, check whether any option prevents immediate harm.

### 9.2 Standard Safety Checks

High-frequency safety areas:

- two identifiers before medication or procedure.
- fall precautions.
- aspiration precautions.
- oxygen/fire safety.
- seizure precautions.
- restraint rules.
- medication rights.
- allergies.
- hand hygiene.
- isolation/PPE.

### 9.3 Infection Control Language

Common terms:

- standard precautions.
- contact precautions.
- droplet precautions.
- airborne precautions.
- private room.
- N95 / respirator.
- gown and gloves.
- negative-pressure room.

Do not memorize only organism names. Learn the logic:

- Contact: touch/contaminated surfaces.
- Droplet: larger respiratory droplets.
- Airborne: smaller particles requiring airborne room/respirator.

### 9.4 Mini Drill

Question:

Which action should the nurse take before administering medication to a client?

A. Ask the client if the medication looks familiar.  
B. Use two approved client identifiers.  
C. Ask the family to confirm the client's room number.  
D. Check whether the client has eaten.

Best answer: B.

Reasoning:

Medication safety requires two approved identifiers. Room number and family confirmation are not sufficient identifiers.

Wrong-answer tags:

- safety_infection.
- test_strategy.

### 9.5 Mini Drill: Infection Control

Question:

A client is suspected of having tuberculosis. Which precaution should the nurse anticipate?

A. Contact precautions only.  
B. Droplet precautions only.  
C. Airborne precautions with appropriate respirator use.  
D. Standard precautions only.

Best answer: C.

Reasoning:

Tuberculosis requires airborne precautions. The nurse should use appropriate respiratory protection and follow facility isolation procedures.

Wrong-answer tags:

- knowledge_gap.
- safety_infection.


```


---

## File: manuscript/10_eight_week_planner.md

```md
# Chapter 10

## 8-12 Week Study Planner

### 10.1 不要用焦慮做計劃

很多考生一看到 ATT 倒數，就開始買更多資源、加入更多群組、聽更多不同建議。真正有效的備考不是資源越多越好，而是流程穩定、錯題可追蹤、弱點能被反覆修正。

本章提供一個 8-12 週備考模板。請按自己的 ATT 有效日期、工作時間、家庭責任與英語水平調整。

### 10.2 Week 1-2: Baseline and Test Plan

Goals:

- Read official test plan summary.
- Do one baseline mixed set.
- Build wrong-answer taxonomy.
- Set ATT countdown.
- Start glossary cards.

Daily pattern:

- 30-50 questions.
- full rationale review.
- 10 glossary cards.
- one weak-topic note.

### 10.3 Week 3-5: Content Repair

Focus areas:

- pharmacology classes.
- prioritization.
- delegation.
- safety/infection.
- maternal-child.
- mental health communication.

Daily pattern:

- 50-75 questions.
- tag every wrong answer.
- review one content area.
- write 3 bilingual teaching sentences.

### 10.4 Week 6-8: Mixed Timed Practice

Focus:

- timed mixed sets.
- NGN case studies.
- endurance.
- less translation, more direct English reading.

Weekly tasks:

- one full-length or CAT-style practice session.
- one weak-tag review.
- one rest/recovery half-day.
- one OSCE vocabulary preview.

### 10.5 Week 9-12: Final Consolidation

If you have 12 weeks, use the final month for consolidation:

- stop collecting new resources.
- repeat missed topics.
- focus on sleep and test rhythm.
- practice with English interface.
- rehearse test-day logistics.

### 10.6 Weekly Tracker

| Week | Main goal | Questions | Weak tags | Action next week |
| --- | --- | --- | --- | --- |
| 1 | Baseline |  |  |  |
| 2 | Test plan |  |  |  |
| 3 | Pharmacology |  |  |  |
| 4 | Priority/delegation |  |  |  |
| 5 | Safety/infection |  |  |  |
| 6 | NGN cases |  |  |  |
| 7 | Mixed timed sets |  |  |  |
| 8 | Readiness review |  |  |  |

### 10.7 Chapter Summary

The goal is not to feel busy. The goal is to reduce predictable errors:

- fewer missed cues.
- fewer priority mistakes.
- fewer delegation errors.
- faster English reading.
- better test stamina.


```


---

## File: manuscript/11_osce_transition.md

```md
# Chapter 11

## After NCLEX-RN: OSCE Transition

### 11.1 NCLEX 通過後不要停

對 Ahpra/NMBA Stream B 考生而言，NCLEX-RN 是重要里程碑，但不是終點。OSCE 會要求你在臨床情境中展示安全、溝通、評估、執行與專業判斷。

如果 NCLEX 備考只訓練選擇題，而完全不練 oral clinical language，OSCE 轉換會很吃力。

### 11.2 NCLEX and OSCE share a foundation

Shared skills:

- recognize cues.
- prioritize risk.
- communicate clearly.
- stay within RN scope.
- document and escalate appropriately.
- protect patient safety.

Difference:

- NCLEX: choose best answer.
- OSCE: perform, speak, assess, explain and respond.

### 11.3 Start OSCE Vocabulary Early

Even during NCLEX prep, collect phrases:

- "Can you tell me your full name and date of birth?"
- "I am going to assess your breathing now."
- "Can you rate your pain from 0 to 10?"
- "I am concerned about this change and will escalate it."
- "Do you have any allergies?"
- "I will explain each step before I proceed."

Chinese-speaking candidates often know the clinical action but need fluent, safe, respectful English phrasing.

### 11.4 OSCE Transition Worksheet

| NCLEX topic | OSCE skill link | Phrase to practise |
| --- | --- | --- |
| prioritization | escalation | "I am concerned because..." |
| medication safety | allergy/checks | "Before I administer this..." |
| respiratory distress | focused assessment | "I need to check your oxygen level." |
| mental health | risk assessment | "Have you thought about harming yourself?" |
| infection control | PPE explanation | "I am using this protective equipment because..." |

### 11.5 Chapter Summary

Do not treat NCLEX and OSCE as two unrelated battles. NCLEX builds decision logic; OSCE asks you to perform that logic in spoken clinical practice.

The companion app will later add OSCE phrase cards and station-readiness checklists.


```


---

## File: manuscript/12_appendices_worksheets.md

```md
# Chapter 12

## Appendices and Worksheets

### Appendix A: Official Source Checklist

Before finalising any plan, check:

- NCSBN / NCLEX current test plan.
- NCLEX Candidate Bulletin.
- Ahpra/NMBA IQNM pages.
- NMBA RN MCQ page.
- NMBA OSCE page.
- Pearson VUE NCLEX scheduling instructions.
- Your own Ahpra/NMBA dashboard.
- Your own ATT email or authorization record.

### Appendix B: Study Resource Audit

| Resource | Purpose | Use / do not use |
| --- | --- | --- |
| Official test plan | exam map | must read |
| Candidate bulletin | rules and administration | must read |
| Main QBank | high-volume practice | choose one primary |
| Video course | weak-topic explanation | optional |
| This book | bilingual bridge and route planning | use with official sources |
| Companion app | mistake diagnosis and glossary | use daily |

### Appendix C: Wrong Answer Review Sheet

Question ID:

Topic:

My answer:

Correct answer:

Why I chose my answer:

Correct reasoning:

Wrong tag:

- [ ] knowledge gap
- [ ] English wording
- [ ] cue recognition
- [ ] prioritization
- [ ] delegation/scope
- [ ] safety/infection control
- [ ] therapeutic communication
- [ ] test strategy

Action:

### Appendix D: ATT Countdown Planner

ATT expiry date:

Planned exam date:

Days remaining:

Final 14-day plan:

| Day | Task | Done |
| --- | --- | --- |
| -14 | Full mixed practice and review |  |
| -13 | Weak topic 1 |  |
| -12 | NGN case set |  |
| -11 | Pharmacology review |  |
| -10 | Safety/infection review |  |
| -9 | Delegation/prioritization |  |
| -8 | Rest and light cards |  |
| -7 | Timed mixed set |  |
| -6 | Review top weak tags |  |
| -5 | Mental health communication |  |
| -4 | Maternal-child review |  |
| -3 | Logistics and light review |  |
| -2 | Sleep rhythm, no new resources |  |
| -1 | Rest, documents, route check |  |

### Appendix E: Controlled Vocabulary Starter

Do not translate these terms loosely. Keep the English term visible until you can recognize it quickly in a question:

- prioritization
- delegation
- unstable
- expected finding
- requires follow-up
- further teaching
- therapeutic communication
- infection control
- airway
- circulation
- adverse effect
- contraindication
- evaluate
- implement
- assess


```


---

## File: app-content/glossary.csv

```csv
term,zh,category,study_note
clinical judgment,臨床判斷,core,"The ability to recognize cues, analyze them, prioritize hypotheses, take action and evaluate outcomes."
cue,線索,NGN,"A piece of patient data that may change nursing priority."
prioritization,優先順序,core,"Choosing what matters most now, not simply what is true."
delegation,委派/授權執行,scope,"Assigning appropriate tasks based on client stability and staff scope."
scope of practice,執業範圍,scope,"What a role is allowed and expected to do safely."
therapeutic communication,治療性溝通,communication,"Communication that supports safety, trust and client-centered care."
unstable client,不穩定病人,priority,"A client with changing, acute or high-risk condition requiring RN attention."
expected finding,預期發現,assessment,"A finding consistent with the condition or treatment."
unexpected finding,非預期發現,assessment,"A finding that may indicate complication or deterioration."
requires follow-up,需要追蹤,question-language,"Often asks which finding is abnormal or unsafe."
further teaching,需要進一步教學,question-language,"Often asks which statement shows misunderstanding."
airway,呼吸道,ABC,"First part of ABC priority logic."
breathing,呼吸,ABC,"Oxygenation and ventilation concerns."
circulation,循環,ABC,"Perfusion, bleeding, shock and pulse concerns."
infection control,感染控制,safety,"Precautions, isolation, hand hygiene and exposure prevention."
readiness assessment,備考狀態測評,study-tool,"Commercial readiness scores are signals, not guarantees."
ATT,Authorization to Test 考試授權,process,"Candidates must follow their own ATT validity dates."
OSCE,客觀結構式臨床考試,process,"Stream B candidates still need OSCE after MCQ/NCLEX-RN before registration eligibility."
NCLEX-RN,註冊護士執照考試,process,"An exam used by nursing regulatory bodies; this product is an independent study aid."
NCSBN,美國國家護理委員會全國理事會,process,"The organization that develops NCLEX; always check official materials."
Pearson VUE,考試預約與考場服務機構,process,"Testing vendor for NCLEX scheduling and test delivery."
Ahpra,澳洲健康從業者監管機構,process,"Australian regulator; individual dashboard and correspondence are authoritative."
NMBA,澳洲護理與助產委員會,process,"Nursing and midwifery board; registration requirements can change."
OBA,outcomes-based assessment 成果導向評估,process,"Assessment pathway that may include orientation, portfolio, MCQ and OSCE components."
MCQ,multiple-choice question 選擇題,process,"For Stream B RN candidates, the MCQ stage is commonly linked with NCLEX-RN."
portfolio,文件組合,process,"Candidate evidence reviewed by regulator; requirements are individual-case specific."
registration standard,註冊標準,process,"Official standard for registration such as English language and recency requirements."
recency of practice,近期執業要求,process,"Evidence of recent practice according to regulator instructions."
NCLEX test plan,NCLEX 考試大綱,study-tool,"Official map of content categories, clinical judgment and item writing."
candidate bulletin,考生手冊,study-tool,"Official exam administration guide; verify before registration and publication."
client needs,病人需求類別,core,"NCLEX content framework organized around safe client care needs."
Safe and Effective Care Environment,安全有效照護環境,client-needs,"Client-needs area covering management of care and safety."
Health Promotion and Maintenance,健康促進與維持,client-needs,"Client-needs area covering prevention, development and education."
Psychosocial Integrity,心理社會完整性,client-needs,"Client-needs area covering coping, communication and mental health."
Physiological Integrity,生理完整性,client-needs,"Client-needs area covering basic care, pharmacology and physiological adaptation."
management of care,照護管理,client-needs,"Coordination, delegation, supervision and prioritization of safe care."
safety and infection control,安全與感染控制,client-needs,"Prevent harm, reduce infection risk and respond to hazards."
basic care and comfort,基本照護與舒適,client-needs,"Assistance with ADLs, comfort and non-pharmacological care."
pharmacological therapies,藥物治療,client-needs,"Medication purpose, risk, monitoring and teaching."
reduction of risk potential,降低潛在風險,client-needs,"Identify findings that may signal complications."
physiological adaptation,生理適應,client-needs,"Respond to acute illness, instability and pathophysiological changes."
recognize cues,辨識線索,clinical-judgment,"Find relevant information in the stem or case."
analyze cues,分析線索,clinical-judgment,"Interpret what cues mean clinically."
prioritize hypotheses,排序假設,clinical-judgment,"Decide which explanation is most urgent or likely."
generate solutions,產生處理方案,clinical-judgment,"Identify safe possible nursing actions."
take action,採取行動,clinical-judgment,"Choose what to do now."
evaluate outcomes,評估結果,clinical-judgment,"Judge whether the action worked and what to do next."
ABC,呼吸道-呼吸-循環,priority,"Priority framework for airway, breathing and circulation."
Maslow,馬斯洛需求層次,priority,"Priority tool; physiological safety usually comes before education or comfort."
acute,急性,priority,"New or rapidly changing; often higher priority than chronic stable issues."
chronic,慢性,priority,"Long-standing; priority depends on stability and current change."
stable,穩定,priority,"Predictable condition without acute change."
unstable,不穩定,priority,"Changing, acute or high-risk condition requiring prompt RN attention."
first action,第一步行動,question-language,"Often asks what the nurse should do before other correct actions."
priority,優先事項,question-language,"Choose the most urgent or safest option in context."
most appropriate,最合適,question-language,"Select the option best aligned with safety, scope and context."
needs further teaching,需要進一步教學,question-language,"A statement showing misunderstanding or unsafe practice."
contraindicated,禁忌/不適合,question-language,"Should not be done because it may cause harm."
report promptly,及時回報,question-language,"Escalate concerning findings according to protocol."
per protocol,按流程,compliance,"Signals facility policy or official instructions must guide the action."
provider notification,通知醫師/團隊,scope,"Important escalation action, but nursing assessment or immediate safety action may come first."
RN assessment,RN 評估,scope,"Initial or complex assessment that should remain with the RN."
UAP,無照護理輔助人員,scope,"Assistive personnel; appropriate for stable routine tasks under direction."
LPN/LVN,實務護士/職業護士,scope,"Scope varies by jurisdiction and facility; stable predictable care may be appropriate."
teaching,教學,scope,"Initial or complex teaching generally requires RN responsibility."
evaluation,評價,scope,"Judging response or effectiveness requires RN judgment."
SBAR,情境-背景-評估-建議,communication,"Structured escalation format: Situation, Background, Assessment, Recommendation."
open-ended question,開放式問題,communication,"Invites expression without forcing yes/no answers."
reflection,反映情緒,communication,"Restate feeling or meaning to support therapeutic communication."
false reassurance,虛假安慰,communication,"Saying everything will be fine without evidence; usually nontherapeutic."
closed question,封閉式問題,communication,"Useful for specific safety checks but less exploratory."
suicidal ideation,自殺意念,mental-health,"Requires direct risk assessment and safety escalation."
panic,恐慌,mental-health,"Use calm, simple communication and stay with the client."
delusion,妄想,mental-health,"Do not argue; acknowledge concern and maintain safety."
mania,躁症,mental-health,"Low-stimulation environment and brief clear directions support safety."
sepsis,敗血症,safety,"Infection plus abnormal vitals or mental-status change requires prompt response."
shock,休克,safety,"Poor perfusion state requiring urgent assessment and escalation."
hypoxia,低氧,safety,"Low oxygenation; restlessness may be an early cue."
aspiration,誤吸,safety,"Risk when food, fluid or secretions enter the airway."
airborne precautions,空氣隔離,infection-control,"Used for airborne infection concerns, usually with special ventilation."
contact precautions,接觸隔離,infection-control,"Used when organisms spread by direct or indirect contact."
droplet precautions,飛沫隔離,infection-control,"Droplet spread precautions; follow facility policy."
negative-pressure room,負壓房,infection-control,"Room type often used for airborne precautions."
hand hygiene,手部衛生,infection-control,"Core infection prevention action before and after care."
soap and water,肥皂水洗手,infection-control,"Important when spores such as C. difficile are involved."
PPE,個人防護裝備,infection-control,"Gloves, gown, mask or eye protection according to risk."
hyperkalemia,高血鉀,lab-values,"Can cause life-threatening dysrhythmias."
hypokalemia,低血鉀,lab-values,"Can cause weakness and dysrhythmia risk."
hypoglycemia,低血糖,lab-values,"May cause sweating, tremor, confusion and urgent safety risk."
hyperglycemia,高血糖,lab-values,"May require assessment for dehydration, DKA or HHS context."
SpO2,血氧飽和度,lab-values,"Oxygen saturation; low values require respiratory assessment."
INR,國際標準化比值,lab-values,"Used to monitor warfarin anticoagulation."
aPTT,活化部分凝血活酶時間,lab-values,"Often associated with heparin monitoring."
BGL,血糖,lab-values,"Blood glucose level; local abbreviation may vary."
creatinine,肌酐,lab-values,"Kidney function marker important for medication safety."
digoxin,地高辛,pharmacology,"Assess apical pulse and watch toxicity cues according to context."
heparin,肝素,pharmacology,"Anticoagulant; bleeding signs require prompt follow-up."
warfarin,華法林,pharmacology,"Anticoagulant; INR and bleeding education matter."
insulin lispro,速效胰島素 lispro,pharmacology,"Rapid-acting insulin timed near meals as prescribed."
prednisone,潑尼松,pharmacology,"Steroid; do not stop abruptly without provider guidance."
gentamicin,慶大霉素,pharmacology,"Aminoglycoside; monitor ototoxicity and nephrotoxicity."
lithium,鋰鹽,pharmacology,"Toxicity may include GI symptoms, tremor and neurologic changes."
metformin,二甲雙胍,pharmacology,"Contrast studies and kidney issues may require special instructions."
nitroglycerin,硝酸甘油,pharmacology,"Avoid combination with PDE-5 inhibitors due to severe hypotension risk."
furosemide,呋塞米,pharmacology,"Loop diuretic; monitor fluid status and potassium."
spironolactone,螺內酯,pharmacology,"Potassium-sparing diuretic; hyperkalemia teaching matters."
vancomycin,萬古黴素,pharmacology,"Monitor infusion reaction and kidney-related safety per protocol."
uterine atony,子宮收縮乏力,maternal-child,"Boggy uterus with heavy lochia suggests bleeding risk."
fundal assessment,宮底評估,maternal-child,"Assess fundus and bleeding pattern before acting."
late decelerations,晚期減速,maternal-child,"May suggest uteroplacental insufficiency."
preeclampsia,子癲前症,maternal-child,"Headache, visual changes or RUQ pain can be warning cues."
newborn hypoglycemia,新生兒低血糖,maternal-child,"Jitteriness and poor feeding can be concerning cues."
grunting,呼吸呻吟,maternal-child,"Newborn respiratory distress cue."
nasal flaring,鼻翼煽動,maternal-child,"Respiratory distress cue."
acrocyanosis,肢端發紺,maternal-child,"Can be expected shortly after birth if central color is normal."
case study,案例題,NGN,"Multi-part item using evolving patient information."
bowtie item,Bowtie 題型,NGN,"NGN item linking condition, actions and parameters."
matrix item,矩陣題,NGN,"Item requiring multiple judgments across rows or columns."
highlight item,標註題,NGN,"Item asking learner to select relevant text."
drag and drop,拖放題,NGN,"Item requiring ordering, matching or categorizing."
partial credit,部分給分,NGN,"Some items award credit for partially correct responses."
distractor,干擾選項,test-strategy,"Wrong option designed to attract a predictable error."
wrong-answer taxonomy,錯題分類法,test-strategy,"System for tagging why an answer was missed."
knowledge gap,知識缺口,test-strategy,"Error caused by missing content knowledge."
cue recognition error,線索辨識錯誤,test-strategy,"Error caused by missing or misreading important data."
priority error,優先順序錯誤,test-strategy,"Error caused by choosing a true but nonurgent action."
scope error,職責範圍錯誤,test-strategy,"Error caused by delegating or assigning outside safe scope."
test anxiety,考試焦慮,test-strategy,"Emotional pressure that can impair reading and decision consistency."
readiness signal,備考信號,test-strategy,"Progress indicator, not a guarantee of passing."
OSCE station,OSCE 考站,osce,"Structured clinical performance task."
patient identification,病人身份確認,osce,"Use two identifiers before care."
consent,同意,osce,"Explain and obtain permission before assessment or procedure."
privacy,隱私,osce,"Protect dignity, curtains, exposure and confidentiality."
escalation,升級通報,osce,"Seek senior or provider help when risk exceeds routine nursing action."

```


---

## File: app-content/wrong_answer_taxonomy.json

```json
{
  "version": "0.1",
  "taxonomy": [
    {
      "id": "knowledge_gap",
      "label": "Knowledge gap",
      "label_zh": "知識缺口",
      "description": "The learner did not know the condition, medication, procedure or nursing principle."
    },
    {
      "id": "english_wording",
      "label": "English wording",
      "label_zh": "英文題幹理解",
      "description": "The learner misunderstood key words such as first, priority, expected, follow-up or further teaching."
    },
    {
      "id": "cue_recognition",
      "label": "Cue recognition",
      "label_zh": "線索辨識",
      "description": "The learner missed the most important cue or treated all cues as equal."
    },
    {
      "id": "prioritization",
      "label": "Prioritization",
      "label_zh": "優先順序",
      "description": "The learner identified the issue but chose a non-urgent or less safe action."
    },
    {
      "id": "delegation_scope",
      "label": "Delegation / scope",
      "label_zh": "委派與職責邊界",
      "description": "The learner assigned an RN task to another role or failed to delegate a routine stable task."
    },
    {
      "id": "safety_infection",
      "label": "Safety / infection control",
      "label_zh": "安全與感染控制",
      "description": "The learner missed fall risk, aspiration risk, isolation, hand hygiene, medication safety or similar safety concern."
    },
    {
      "id": "therapeutic_communication",
      "label": "Therapeutic communication",
      "label_zh": "治療性溝通",
      "description": "The learner chose a response that blocks feelings, gives false reassurance, argues or changes subject too quickly."
    },
    {
      "id": "test_strategy",
      "label": "Test strategy",
      "label_zh": "考試策略",
      "description": "The mistake came from rushing, overthinking, changing answers without evidence or mismanaging time."
    }
  ]
}


```


---

## File: app-content/question_bank_beta_20.json

```json
{
  "version": "0.2",
  "status": "20 original core beta items for editorial and nursing review",
  "disclaimer": "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Generated expansion items require RN/nursing educator review before public release.",
  "items": [
    {
      "id": "P001",
      "category": "prioritization",
      "stem": "The nurse receives reports on four clients. Which client should the nurse assess first?",
      "stem_zh": "護理師收到四位病人的情況回報。應先評估哪一位？",
      "options": [
        [
          "A",
          "A client with chronic arthritis reporting pain rated 5/10.",
          "慢性關節炎病人回報疼痛 5/10。"
        ],
        [
          "B",
          "A client taking furosemide reporting new muscle weakness.",
          "正在使用 furosemide 的病人出現新的肌肉無力。"
        ],
        [
          "C",
          "A client scheduled for discharge asking about medication timing.",
          "準備出院的病人詢問服藥時間。"
        ],
        [
          "D",
          "A client with insomnia requesting a sleep aid.",
          "失眠病人要求安眠藥。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Furosemide can contribute to potassium loss. New muscle weakness may signal an electrolyte problem with cardiac risk.",
      "rationale_zh": "Furosemide 可能造成鉀流失。新的肌肉無力可能提示電解質問題並帶有心律風險。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "P002",
      "category": "prioritization",
      "stem": "Which client should the nurse see first?",
      "stem_zh": "護理師應先看哪位病人？",
      "options": [
        [
          "A",
          "A client with pneumonia whose oxygen saturation decreased from 94% to 88%.",
          "肺炎病人血氧從 94% 降至 88%。"
        ],
        [
          "B",
          "A client with diabetes requesting a bedtime snack.",
          "糖尿病病人要求睡前點心。"
        ],
        [
          "C",
          "A client with a cast reporting mild itching under the cast.",
          "石膏病人回報石膏下輕微癢。"
        ],
        [
          "D",
          "A client with hypertension asking about a low-sodium diet.",
          "高血壓病人詢問低鈉飲食。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "A falling oxygen saturation is an immediate breathing concern and outranks teaching or comfort needs.",
      "rationale_zh": "血氧下降屬於立即 breathing 風險，優先於教學或舒適需求。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "P003",
      "category": "prioritization",
      "stem": "A client 6 hours after thyroidectomy reports tingling around the mouth. What should the nurse do first?",
      "stem_zh": "甲狀腺切除術後 6 小時病人回報口周麻刺感。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding as expected.",
          "記錄為預期現象。"
        ],
        [
          "B",
          "Assess for signs of hypocalcemia and notify the provider.",
          "評估低血鈣徵象並通知醫師/團隊。"
        ],
        [
          "C",
          "Encourage the client to cough deeply.",
          "鼓勵病人深咳。"
        ],
        [
          "D",
          "Offer warm fluids.",
          "提供溫熱飲品。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Tingling after thyroidectomy may indicate hypocalcemia from parathyroid disruption and requires prompt assessment.",
      "rationale_zh": "甲狀腺術後口周麻刺可能提示副甲狀腺受影響導致低血鈣，需要及時評估。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "D001",
      "category": "delegation_scope",
      "stem": "Which task is most appropriate for the RN to delegate to unlicensed assistive personnel?",
      "stem_zh": "下列哪項最適合由 RN 委派給無照護理輔助人員？",
      "options": [
        [
          "A",
          "Teach a newly diagnosed diabetic client how to inject insulin.",
          "教新診斷糖尿病病人如何注射胰島素。"
        ],
        [
          "B",
          "Assess a client with new chest pain.",
          "評估新發胸痛病人。"
        ],
        [
          "C",
          "Assist a stable postoperative client to ambulate.",
          "協助穩定的術後病人下床行走。"
        ],
        [
          "D",
          "Evaluate whether pain medication was effective.",
          "評估止痛藥是否有效。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Routine assistance with ambulation for a stable client is appropriate. Teaching, new symptom assessment and evaluation require RN judgment.",
      "rationale_zh": "穩定病人的例行行走協助可委派。教學、新症狀評估與療效評價需要 RN 判斷。",
      "wrong_tags": [
        "delegation_scope"
      ]
    },
    {
      "id": "D002",
      "category": "delegation_scope",
      "stem": "Which assignment should the charge nurse give to an experienced LPN/LVN rather than UAP?",
      "stem_zh": "下列哪項更適合分配給有經驗的 LPN/LVN，而不是 UAP？",
      "options": [
        [
          "A",
          "Feeding a stable client who needs tray setup.",
          "協助穩定病人進食並擺放餐盤。"
        ],
        [
          "B",
          "Reinforcing teaching about a dressing change after RN instruction.",
          "在 RN 教學後補強換藥說明。"
        ],
        [
          "C",
          "Taking routine vital signs for a stable client.",
          "為穩定病人量例行生命徵象。"
        ],
        [
          "D",
          "Transporting a discharged client by wheelchair.",
          "用輪椅送出院病人。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Depending on jurisdiction and facility policy, LPN/LVN may reinforce teaching after RN instruction; UAP should not teach.",
      "rationale_zh": "依地區與機構規範，LPN/LVN 可在 RN 教學後補強說明；UAP 不應承擔教學。",
      "wrong_tags": [
        "delegation_scope",
        "english_wording"
      ]
    },
    {
      "id": "PH001",
      "category": "pharmacology",
      "stem": "A client taking warfarin reports black, tarry stools. Which action should the nurse take first?",
      "stem_zh": "服用 warfarin 的病人回報黑色柏油樣大便。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Encourage more leafy green vegetables.",
          "鼓勵多吃綠葉蔬菜。"
        ],
        [
          "B",
          "Document as an expected effect.",
          "記錄為預期作用。"
        ],
        [
          "C",
          "Assess for bleeding and notify the provider.",
          "評估出血並通知醫師/團隊。"
        ],
        [
          "D",
          "Teach the client to take the medication with food.",
          "教病人隨餐服藥。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Black, tarry stools may indicate gastrointestinal bleeding, a serious risk with anticoagulant therapy.",
      "rationale_zh": "黑色柏油樣便可能提示胃腸道出血，是抗凝治療的重要風險。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "PH002",
      "category": "pharmacology",
      "stem": "Which finding in a client receiving opioid analgesia requires immediate follow-up?",
      "stem_zh": "使用 opioid 止痛藥的病人，下列哪個發現需要立即追蹤？",
      "options": [
        [
          "A",
          "Respiratory rate 8/min.",
          "呼吸頻率 8 次/分。"
        ],
        [
          "B",
          "Constipation for 1 day.",
          "便秘 1 天。"
        ],
        [
          "C",
          "Mild nausea.",
          "輕微噁心。"
        ],
        [
          "D",
          "Pain reduced from 8/10 to 4/10.",
          "疼痛從 8/10 降至 4/10。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Respiratory depression is a priority safety concern with opioids.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "safety_infection"
      ]
    },
    {
      "id": "PH003",
      "category": "pharmacology",
      "stem": "Which statement by a client taking an ACE inhibitor requires further teaching?",
      "stem_zh": "服用 ACE inhibitor 的病人哪句話表示需要進一步教學？",
      "options": [
        [
          "A",
          "I will report swelling of my lips or face.",
          "我會回報嘴唇或臉部腫脹。"
        ],
        [
          "B",
          "I may feel dizzy when standing quickly.",
          "我快速站起來可能會頭暈。"
        ],
        [
          "C",
          "I will use a salt substitute freely.",
          "我會自由使用代鹽。"
        ],
        [
          "D",
          "I will tell my provider if I develop a persistent cough.",
          "如果出現持續咳嗽我會告知醫師/團隊。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Some salt substitutes contain potassium, which can be risky with ACE inhibitors.",
      "rationale_zh": "部分代鹽含鉀，ACE inhibitor 使用者需謹慎。",
      "wrong_tags": [
        "knowledge_gap",
        "english_wording"
      ]
    },
    {
      "id": "MH001",
      "category": "therapeutic_communication",
      "stem": "A client says, 'I cannot go on anymore. I have been thinking about ending my life.' Which response is best?",
      "stem_zh": "病人說：『我撐不下去了，一直在想結束生命。』最佳回應是？",
      "options": [
        [
          "A",
          "You have so much to live for.",
          "你還有很多值得活下去的理由。"
        ],
        [
          "B",
          "Do you have a plan to harm yourself?",
          "你有傷害自己的計劃嗎？"
        ],
        [
          "C",
          "Try not to think that way.",
          "不要那樣想。"
        ],
        [
          "D",
          "I will tell your family to stay with you.",
          "我會叫你的家人陪你。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Direct suicide risk assessment is required and therapeutic when safety is at risk.",
      "rationale_zh": "有自殺意念時需要直接評估風險，這是安全且治療性的做法。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "MH002",
      "category": "therapeutic_communication",
      "stem": "A client with hallucinations says, 'The voices are telling me I am worthless.' Which response is best?",
      "stem_zh": "有幻聽的病人說：『那些聲音說我一文不值。』最佳回應是？",
      "options": [
        [
          "A",
          "Those voices are not real.",
          "那些聲音不是真的。"
        ],
        [
          "B",
          "Try to ignore them.",
          "試著不要理它們。"
        ],
        [
          "C",
          "I do not hear the voices, but I can see this is frightening for you.",
          "我沒有聽到那些聲音，但我看得出這讓你很害怕。"
        ],
        [
          "D",
          "Why do you believe the voices?",
          "你為什麼相信那些聲音？"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response acknowledges the client's experience without arguing with the hallucination.",
      "rationale_zh": "此回應承認病人的感受，但不與幻聽內容爭辯。",
      "wrong_tags": [
        "therapeutic_communication"
      ]
    },
    {
      "id": "S001",
      "category": "safety_infection",
      "stem": "Which action should the nurse take before administering medication to a client?",
      "stem_zh": "給藥前護理師應先做哪件事？",
      "options": [
        [
          "A",
          "Ask if the medication looks familiar.",
          "詢問病人藥物是否看起來熟悉。"
        ],
        [
          "B",
          "Use two approved client identifiers.",
          "使用兩項核准的病人身份識別。"
        ],
        [
          "C",
          "Ask the family to confirm the room number.",
          "請家屬確認房號。"
        ],
        [
          "D",
          "Check whether the client has eaten.",
          "確認病人是否進食。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Medication safety requires two approved identifiers. Room number is not sufficient.",
      "rationale_zh": "給藥安全需要兩項核准身份識別，房號不足以確認身份。",
      "wrong_tags": [
        "safety_infection"
      ]
    },
    {
      "id": "S002",
      "category": "safety_infection",
      "stem": "A client is suspected of having tuberculosis. Which precaution should the nurse anticipate?",
      "stem_zh": "病人疑似結核病。護理師應預期哪種隔離措施？",
      "options": [
        [
          "A",
          "Contact precautions only.",
          "僅接觸隔離。"
        ],
        [
          "B",
          "Droplet precautions only.",
          "僅飛沫隔離。"
        ],
        [
          "C",
          "Airborne precautions with appropriate respirator use.",
          "空氣隔離並使用適當呼吸防護。"
        ],
        [
          "D",
          "Standard precautions only.",
          "僅標準防護。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Tuberculosis requires airborne precautions with appropriate respiratory protection.",
      "rationale_zh": "結核病需要空氣隔離及適當呼吸防護。",
      "wrong_tags": [
        "knowledge_gap",
        "safety_infection"
      ]
    },
    {
      "id": "MC001",
      "category": "maternal_child",
      "stem": "A postpartum client has a boggy uterus and heavy lochia. What should the nurse do first?",
      "stem_zh": "產後病人子宮鬆軟且惡露量多。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Encourage oral fluids.",
          "鼓勵口服液體。"
        ],
        [
          "B",
          "Massage the fundus.",
          "按摩子宮底。"
        ],
        [
          "C",
          "Assist the client to shower.",
          "協助病人淋浴。"
        ],
        [
          "D",
          "Document the finding.",
          "記錄此發現。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A boggy uterus with heavy lochia suggests uterine atony and bleeding risk. In this NCLEX-style context, fundal massage is the expected immediate nursing action for suspected atony, while real clinical practice should follow facility protocol and provider or midwifery guidance after assessment.",
      "rationale_zh": "子宮鬆軟合併惡露量多提示子宮收縮乏力與出血風險，應立即按摩子宮底。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "MC002",
      "category": "maternal_child",
      "stem": "Which prenatal finding should the nurse report immediately?",
      "stem_zh": "下列哪個產前發現應立即回報？",
      "options": [
        [
          "A",
          "Mild ankle swelling at the end of the day.",
          "傍晚輕微腳踝水腫。"
        ],
        [
          "B",
          "Severe headache with visual changes.",
          "嚴重頭痛合併視覺變化。"
        ],
        [
          "C",
          "Increased urinary frequency early in pregnancy.",
          "孕早期尿頻增加。"
        ],
        [
          "D",
          "Mild nausea in the morning.",
          "早晨輕微噁心。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Severe headache with visual changes may indicate preeclampsia and requires prompt follow-up.",
      "rationale_zh": "嚴重頭痛合併視覺變化可能提示子癲前症，需要立即追蹤。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "NGN001",
      "category": "ngn",
      "stem": "Which cues require immediate nursing attention? Select all that apply.",
      "stem_zh": "哪些線索需要立即護理關注？可多選。",
      "case": "A client is 2 hours postoperative after abdominal surgery. The client reports increasing shortness of breath, appears restless and has an oxygen saturation of 88% on room air.",
      "case_zh": "病人腹部手術後 2 小時，回報呼吸越來越困難，表現不安，室內空氣下血氧飽和度 88%。",
      "options": [
        [
          "A",
          "2 hours postoperative",
          "術後 2 小時"
        ],
        [
          "B",
          "Increasing shortness of breath",
          "呼吸困難加重"
        ],
        [
          "C",
          "Restlessness",
          "不安"
        ],
        [
          "D",
          "Oxygen saturation 88% on room air",
          "室內空氣下血氧 88%"
        ]
      ],
      "answer": [
        "B",
        "C",
        "D"
      ],
      "rationale": "Worsening shortness of breath, restlessness and low oxygen saturation indicate immediate breathing/oxygenation concern.",
      "rationale_zh": "呼吸困難加重、不安與血氧偏低提示立即 breathing/oxygenation 風險。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "NGN002",
      "category": "ngn",
      "stem": "Which findings are most concerning? Select all that apply.",
      "stem_zh": "哪些發現最令人擔心？可多選。",
      "case": "A client 1 day after bowel surgery reports increasing abdominal pain. Temperature is 38.6 C, heart rate 118/min, blood pressure 92/58 mmHg and the client is restless.",
      "case_zh": "腸道手術後第 1 天病人回報腹痛加重。體溫 38.6 C、心率 118/分、血壓 92/58 mmHg，並且不安。",
      "options": [
        [
          "A",
          "Increasing abdominal pain",
          "腹痛加重"
        ],
        [
          "B",
          "Temperature 38.6 C",
          "體溫 38.6 C"
        ],
        [
          "C",
          "Heart rate 118/min",
          "心率 118/分"
        ],
        [
          "D",
          "Blood pressure 92/58 mmHg",
          "血壓 92/58 mmHg"
        ]
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ],
      "rationale": "Together these cues suggest possible postoperative complication, infection/sepsis or perfusion concern and need urgent attention.",
      "rationale_zh": "這些線索合併提示可能術後併發症、感染/敗血症或灌流問題，需要緊急關注。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "E001",
      "category": "english_wording",
      "stem": "The question asks which statement by the client indicates a need for further teaching. What is the question asking you to find?",
      "stem_zh": "題目問病人哪句話 indicates a need for further teaching。這是在問你找什麼？",
      "options": [
        [
          "A",
          "The statement that is correct.",
          "正確的句子。"
        ],
        [
          "B",
          "The statement that shows misunderstanding.",
          "顯示誤解的句子。"
        ],
        [
          "C",
          "The statement that is most polite.",
          "最有禮貌的句子。"
        ],
        [
          "D",
          "The statement that repeats the nurse's words.",
          "重複護理師原話的句子。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Further teaching means the client has misunderstood or needs more instruction.",
      "rationale_zh": "Further teaching 表示病人有誤解或仍需更多教學。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ]
    },
    {
      "id": "E002",
      "category": "english_wording",
      "stem": "In an NCLEX question, the word 'priority' usually means:",
      "stem_zh": "NCLEX 題目中的 priority 通常表示：",
      "options": [
        [
          "A",
          "The answer that is easiest to do.",
          "最容易做的答案。"
        ],
        [
          "B",
          "The answer that is safest or most urgent now.",
          "此刻最安全或最緊急的答案。"
        ],
        [
          "C",
          "The answer that includes the most information.",
          "包含最多資訊的答案。"
        ],
        [
          "D",
          "The answer that is usually done at discharge.",
          "通常出院時做的答案。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Priority asks for the safest or most urgent nursing action in context.",
      "rationale_zh": "Priority 問的是該情境中最安全或最緊急的護理行動。",
      "wrong_tags": [
        "english_wording",
        "prioritization"
      ]
    },
    {
      "id": "OS001",
      "category": "osce_transition",
      "stem": "Which phrase is most appropriate when escalating a concerning change in a client's condition?",
      "stem_zh": "當病人狀況出現令人擔心的變化，需要升級通報時，哪句話最合適？",
      "options": [
        [
          "A",
          "I think something is weird, but I am not sure.",
          "我覺得有點怪，但我不確定。"
        ],
        [
          "B",
          "The client is probably fine, but can you come later?",
          "病人大概沒事，你晚點能來嗎？"
        ],
        [
          "C",
          "I am concerned because the oxygen saturation has dropped to 88% and the client is increasingly short of breath.",
          "我擔心是因為血氧降至 88%，且病人呼吸困難加重。"
        ],
        [
          "D",
          "The family is worried, so you should see the client.",
          "家屬很擔心，所以你應該來看。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Escalation should be specific, objective and linked to clinical concern.",
      "rationale_zh": "升級通報應具體、客觀，並連到臨床風險。",
      "wrong_tags": [
        "therapeutic_communication",
        "cue_recognition",
        "osce_transition"
      ]
    },
    {
      "id": "T001",
      "category": "test_strategy",
      "stem": "A learner often changes correct answers to wrong answers without new evidence. Which strategy is best?",
      "stem_zh": "學員常在沒有新證據時把正確答案改成錯誤答案。最佳策略是？",
      "options": [
        [
          "A",
          "Always change the first answer.",
          "永遠改第一直覺答案。"
        ],
        [
          "B",
          "Never review flagged questions.",
          "永遠不要回看標記題。"
        ],
        [
          "C",
          "Change an answer only when a specific cue proves the first choice is unsafe or incorrect.",
          "只有當具體線索證明原答案不安全或錯誤時才改。"
        ],
        [
          "D",
          "Choose the longest option.",
          "選最長的選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Answer changes should be evidence-based, not anxiety-based.",
      "rationale_zh": "改答案應基於證據，而不是焦慮。",
      "wrong_tags": [
        "test_strategy"
      ]
    }
  ]
}

```


---

## File: app-content/question_bank_public_demo_50.json

```json
{
  "version": "0.1",
  "status": "50-item public demo candidate pool for website/app preview; excludes high-risk clinical items and still requires editorial review before publication.",
  "disclaimer": "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Demo items do not predict exam, registration, visa or employment outcomes.",
  "selection_policy": {
    "source_pool": "500-item internal beta pool",
    "excluded_risk_level": "high",
    "excluded_categories": [
      "pharmacology",
      "maternal_child",
      "prioritization",
      "ngn",
      "safety_infection"
    ],
    "intended_use": "public demo, lead magnet, website preview and low-risk app showcase"
  },
  "items": [
    {
      "id": "E002",
      "category": "english_wording",
      "stem": "In an NCLEX question, the word 'priority' usually means:",
      "stem_zh": "NCLEX 題目中的 priority 通常表示：",
      "options": [
        [
          "A",
          "The answer that is easiest to do.",
          "最容易做的答案。"
        ],
        [
          "B",
          "The answer that is safest or most urgent now.",
          "此刻最安全或最緊急的答案。"
        ],
        [
          "C",
          "The answer that includes the most information.",
          "包含最多資訊的答案。"
        ],
        [
          "D",
          "The answer that is usually done at discharge.",
          "通常出院時做的答案。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Priority asks for the safest or most urgent nursing action in context.",
      "rationale_zh": "Priority 問的是該情境中最安全或最緊急的護理行動。",
      "wrong_tags": [
        "english_wording",
        "prioritization"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "E003",
      "category": "english_wording",
      "stem": "The phrase 'expected finding' in a question usually asks the learner to identify:",
      "stem_zh": "題目中的 expected finding 通常要求考生辨識：",
      "options": [
        [
          "A",
          "A normal or anticipated finding for the condition or treatment.",
          "對該情況或治療而言正常/可預期的發現。"
        ],
        [
          "B",
          "The most dangerous finding.",
          "最危險的發現。"
        ],
        [
          "C",
          "The finding that requires immediate provider notification.",
          "需立即通知醫師/團隊的發現。"
        ],
        [
          "D",
          "The finding the family expects.",
          "家屬期待的發現。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Expected finding means anticipated or consistent with the condition/treatment, not necessarily urgent.",
      "rationale_zh": "Expected finding 表示與情況/治療一致或可預期，不一定緊急。",
      "wrong_tags": [
        "english_wording"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "E006",
      "category": "english_wording",
      "stem": "The phrase 'requires immediate intervention' most closely means:",
      "stem_zh": "requires immediate intervention 最接近的意思是：",
      "options": [
        [
          "A",
          "Needs action now to prevent harm.",
          "需要現在行動以防傷害。"
        ],
        [
          "B",
          "Can wait until discharge.",
          "可等到出院。"
        ],
        [
          "C",
          "Is only a documentation issue.",
          "只是記錄問題。"
        ],
        [
          "D",
          "Is always psychosocial only.",
          "永遠只是心理社會問題。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Immediate intervention means prompt action is needed for safety or clinical risk.",
      "rationale_zh": "Immediate intervention 表示因安全或臨床風險需要及時處理。",
      "wrong_tags": [
        "english_wording"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "E007",
      "category": "english_wording",
      "stem": "The phrase 'no further action is needed' is safest only when:",
      "stem_zh": "no further action is needed 只有在什麼情況下才安全？",
      "options": [
        [
          "A",
          "The finding is expected and no safety concern exists.",
          "該發現可預期且無安全風險。"
        ],
        [
          "B",
          "The option is short.",
          "選項很短。"
        ],
        [
          "C",
          "The client is upset.",
          "病人不高興。"
        ],
        [
          "D",
          "The nurse is busy.",
          "護理師很忙。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "No further action is appropriate only when the finding is expected and safe.",
      "rationale_zh": "只有當發現可預期且安全時，才適合不需進一步行動。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "T001",
      "category": "test_strategy",
      "stem": "A learner often changes correct answers to wrong answers without new evidence. Which strategy is best?",
      "stem_zh": "學員常在沒有新證據時把正確答案改成錯誤答案。最佳策略是？",
      "options": [
        [
          "A",
          "Always change the first answer.",
          "永遠改第一直覺答案。"
        ],
        [
          "B",
          "Never review flagged questions.",
          "永遠不要回看標記題。"
        ],
        [
          "C",
          "Change an answer only when a specific cue proves the first choice is unsafe or incorrect.",
          "只有當具體線索證明原答案不安全或錯誤時才改。"
        ],
        [
          "D",
          "Choose the longest option.",
          "選最長的選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Answer changes should be evidence-based, not anxiety-based.",
      "rationale_zh": "改答案應基於證據，而不是焦慮。",
      "wrong_tags": [
        "test_strategy"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "T003",
      "category": "test_strategy",
      "stem": "Which study behavior is most likely to improve clinical judgment consistency?",
      "stem_zh": "哪種學習行為最可能提升臨床判斷穩定性？",
      "options": [
        [
          "A",
          "Tagging every missed question by error type.",
          "按錯因標記每一道錯題。"
        ],
        [
          "B",
          "Only counting how many questions were completed.",
          "只計算完成題數。"
        ],
        [
          "C",
          "Changing resources every two days.",
          "每兩天換一套資源。"
        ],
        [
          "D",
          "Skipping all rationales after correct answers.",
          "答對後完全不看解析。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Error tagging reveals patterns and makes future review targeted.",
      "rationale_zh": "錯因標記能揭示模式，讓後續複習更有針對性。",
      "wrong_tags": [
        "test_strategy"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "T005",
      "category": "test_strategy",
      "stem": "Which behavior best supports timed-practice improvement?",
      "stem_zh": "哪種行為最能支持限時練習進步？",
      "options": [
        [
          "A",
          "Review why each wrong option was tempting.",
          "複盤每個錯誤選項為何有誘惑性。"
        ],
        [
          "B",
          "Only celebrate the score.",
          "只看分數。"
        ],
        [
          "C",
          "Skip all questions with long stems.",
          "跳過所有長題幹。"
        ],
        [
          "D",
          "Translate every word in the final week.",
          "最後一週逐字翻譯每個詞。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Understanding distractors improves reasoning and reduces repeat mistakes.",
      "rationale_zh": "理解干擾選項能提升推理並減少重複錯誤。",
      "wrong_tags": [
        "test_strategy"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "T006",
      "category": "test_strategy",
      "stem": "Which review method is best for NGN case studies?",
      "stem_zh": "NGN case studies 最佳複習方法是？",
      "options": [
        [
          "A",
          "Write the key cues and why they matter.",
          "寫下關鍵線索及其重要性。"
        ],
        [
          "B",
          "Only memorize the final answer.",
          "只背最終答案。"
        ],
        [
          "C",
          "Skip long cases.",
          "跳過長病例。"
        ],
        [
          "D",
          "Read rationales without noting errors.",
          "看解析但不記錯因。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "NGN improvement depends on cue recognition and reasoning, not answer memorization only.",
      "rationale_zh": "NGN 進步取決於線索辨識和推理，而不只是背答案。",
      "wrong_tags": [
        "test_strategy",
        "cue_recognition"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 4
    },
    {
      "id": "E004",
      "category": "english_wording",
      "stem": "When a question asks for the 'best' response, the learner should choose the option that is:",
      "stem_zh": "當題目問 best response 時，考生應選：",
      "options": [
        [
          "A",
          "Always the longest option.",
          "永遠最長的選項。"
        ],
        [
          "B",
          "The safest and most therapeutic in the given context.",
          "該情境中最安全且最具治療性的選項。"
        ],
        [
          "C",
          "The option with the most medical terms.",
          "醫學術語最多的選項。"
        ],
        [
          "D",
          "The option that gives personal advice.",
          "提供個人建議的選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Best asks for the most appropriate response in context, often combining safety and therapeutic communication.",
      "rationale_zh": "Best 問的是情境中最合適的回應，常結合安全與治療性溝通。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 8
    },
    {
      "id": "E005",
      "category": "english_wording",
      "stem": "When an option says 'notify the provider,' what should the learner check first?",
      "stem_zh": "選項寫 notify the provider 時，考生應先檢查什麼？",
      "options": [
        [
          "A",
          "Whether nursing assessment or immediate safety action is needed first.",
          "是否需先做護理評估或立即安全行動。"
        ],
        [
          "B",
          "Whether it is the longest option.",
          "是否最長。"
        ],
        [
          "C",
          "Whether it sounds dramatic.",
          "是否聽起來嚴重。"
        ],
        [
          "D",
          "Whether the family asked for it.",
          "是否家屬要求。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Notification may be correct, but the nurse often needs focused assessment or immediate safety intervention first.",
      "rationale_zh": "通知可能正確，但護理師常需先做重點評估或立即安全處理。",
      "wrong_tags": [
        "english_wording",
        "prioritization"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 8
    },
    {
      "id": "E001",
      "category": "english_wording",
      "stem": "The question asks which statement by the client indicates a need for further teaching. What is the question asking you to find?",
      "stem_zh": "題目問病人哪句話 indicates a need for further teaching。這是在問你找什麼？",
      "options": [
        [
          "A",
          "The statement that is correct.",
          "正確的句子。"
        ],
        [
          "B",
          "The statement that shows misunderstanding.",
          "顯示誤解的句子。"
        ],
        [
          "C",
          "The statement that is most polite.",
          "最有禮貌的句子。"
        ],
        [
          "D",
          "The statement that repeats the nurse's words.",
          "重複護理師原話的句子。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Further teaching means the client has misunderstood or needs more instruction.",
      "rationale_zh": "Further teaching 表示病人有誤解或仍需更多教學。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 12
    },
    {
      "id": "T002",
      "category": "test_strategy",
      "stem": "A learner's wrong-answer log shows repeated 'English wording' mistakes. Which action is most useful?",
      "stem_zh": "學員錯題紀錄反覆出現 English wording 錯誤。哪項最有用？",
      "options": [
        [
          "A",
          "Ignore the wording and do more random questions only.",
          "忽略題幹，只多做隨機題。"
        ],
        [
          "B",
          "Build a list of command phrases such as first, priority, follow-up and further teaching.",
          "建立 first、priority、follow-up、further teaching 等指令詞清單。"
        ],
        [
          "C",
          "Stop reading rationales.",
          "停止看解析。"
        ],
        [
          "D",
          "Translate every word slowly during timed practice.",
          "限時練習時逐字慢慢翻譯。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Repeated wording mistakes need targeted command-phrase training, not only more random practice.",
      "rationale_zh": "反覆題幹理解錯誤需要針對指令詞訓練，而不只是多做隨機題。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 12
    },
    {
      "id": "T004",
      "category": "test_strategy",
      "stem": "Which approach is best after missing multiple pharmacology questions?",
      "stem_zh": "連續錯多道藥理題後，哪種方法最好？",
      "options": [
        [
          "A",
          "Create class-based medication cards.",
          "建立按藥物類別整理的卡片。"
        ],
        [
          "B",
          "Stop studying pharmacology.",
          "停止學藥理。"
        ],
        [
          "C",
          "Memorize only one drug name.",
          "只背一個藥名。"
        ],
        [
          "D",
          "Switch resources every hour.",
          "每小時換資源。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Class-based medication cards help organize purpose, risks, monitoring and teaching.",
      "rationale_zh": "按類別整理藥卡有助於組織用途、風險、監測與教學。",
      "wrong_tags": [
        "test_strategy",
        "knowledge_gap"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 12
    },
    {
      "id": "AUTO30_018",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_027",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_036",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_063",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_072",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_081",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "AUTO30_108",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "low",
      "public_demo_risk_score": 10
    },
    {
      "id": "OS002",
      "category": "osce_transition",
      "stem": "Which sentence best demonstrates patient identification before a procedure?",
      "stem_zh": "哪句話最能展現操作前確認病人身份？",
      "options": [
        [
          "A",
          "You look like the right patient.",
          "你看起來像是正確的病人。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期。"
        ],
        [
          "C",
          "Your family says you are the patient.",
          "你的家人說你就是這位病人。"
        ],
        [
          "D",
          "The room number matches, so we can start.",
          "房號一致，所以可以開始。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Using two identifiers such as full name and date of birth supports patient safety before procedures.",
      "rationale_zh": "使用全名與出生日期等兩項身份識別有助於操作前病人安全。",
      "wrong_tags": [
        "osce_transition",
        "safety_infection"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "OS003",
      "category": "osce_transition",
      "stem": "Which phrase is best when explaining hand hygiene to a patient?",
      "stem_zh": "向病人解釋手部衛生時，哪句話最合適？",
      "options": [
        [
          "A",
          "I wash my hands because the rules say so.",
          "我洗手只是因為規定如此。"
        ],
        [
          "B",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "C",
          "It probably does not matter.",
          "這大概不重要。"
        ],
        [
          "D",
          "You do not need to know why.",
          "你不需要知道原因。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The phrase is clear, respectful and links the action to infection risk reduction.",
      "rationale_zh": "此句清楚、尊重，並把行動連到降低感染風險。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication",
        "safety_infection"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "MH002",
      "category": "therapeutic_communication",
      "stem": "A client with hallucinations says, 'The voices are telling me I am worthless.' Which response is best?",
      "stem_zh": "有幻聽的病人說：『那些聲音說我一文不值。』最佳回應是？",
      "options": [
        [
          "A",
          "Those voices are not real.",
          "那些聲音不是真的。"
        ],
        [
          "B",
          "Try to ignore them.",
          "試著不要理它們。"
        ],
        [
          "C",
          "I do not hear the voices, but I can see this is frightening for you.",
          "我沒有聽到那些聲音，但我看得出這讓你很害怕。"
        ],
        [
          "D",
          "Why do you believe the voices?",
          "你為什麼相信那些聲音？"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response acknowledges the client's experience without arguing with the hallucination.",
      "rationale_zh": "此回應承認病人的感受，但不與幻聽內容爭辯。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "MH003",
      "category": "therapeutic_communication",
      "stem": "A client is crying after receiving a serious diagnosis. Which response is most therapeutic?",
      "stem_zh": "病人收到嚴重診斷後哭泣。哪個回應最具治療性？",
      "options": [
        [
          "A",
          "You should be strong for your family.",
          "你應該為家人堅強。"
        ],
        [
          "B",
          "At least treatment is available.",
          "至少還有治療。"
        ],
        [
          "C",
          "This is a lot to take in. I can sit with you for a moment.",
          "這確實很難承受，我可以陪你坐一會兒。"
        ],
        [
          "D",
          "Let's talk about your insurance forms.",
          "我們談談你的保險表格。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response acknowledges emotion and offers presence without false reassurance or changing the subject.",
      "rationale_zh": "此回應承認情緒並提供陪伴，沒有虛假安慰或轉移話題。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "MH005",
      "category": "therapeutic_communication",
      "stem": "A client says, 'No one understands how scared I am before surgery.' Which response is most therapeutic?",
      "stem_zh": "病人說：『沒有人理解我手術前有多害怕。』哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Everyone is scared before surgery.",
          "每個人手術前都害怕。"
        ],
        [
          "B",
          "You should trust the surgeon.",
          "你應該相信外科醫師。"
        ],
        [
          "C",
          "Tell me what worries you the most right now.",
          "告訴我你現在最擔心的是什麼。"
        ],
        [
          "D",
          "Let's not think about fear.",
          "我們不要想害怕這件事。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Open-ended exploration acknowledges fear and invites expression.",
      "rationale_zh": "開放式探索承認恐懼並鼓勵表達。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "MH006",
      "category": "therapeutic_communication",
      "stem": "A client says, 'I am angry that no one listens.' Which response is best?",
      "stem_zh": "病人說：『我很生氣，沒有人聽我說。』最佳回應是？",
      "options": [
        [
          "A",
          "Calm down first.",
          "你先冷靜。"
        ],
        [
          "B",
          "I can see you are angry. Tell me what happened.",
          "我看得出你很生氣，告訴我發生了什麼。"
        ],
        [
          "C",
          "There is no reason to be angry.",
          "沒有理由生氣。"
        ],
        [
          "D",
          "Other clients have worse problems.",
          "其他病人問題更嚴重。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The response acknowledges emotion and invites expression.",
      "rationale_zh": "此回應承認情緒並邀請表達。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "MH009",
      "category": "therapeutic_communication",
      "stem": "A client refuses medication and says, 'You are trying to poison me.' Which response is most therapeutic?",
      "stem_zh": "病人拒藥並說：『你們想毒害我。』哪個回應最具治療性？",
      "options": [
        [
          "A",
          "That is ridiculous.",
          "這太荒謬了。"
        ],
        [
          "B",
          "I am not trying to poison you. Tell me what worries you about the medication.",
          "我不是要毒害你。告訴我你對藥物擔心什麼。"
        ],
        [
          "C",
          "Take it or you cannot eat.",
          "不吃藥就不能吃飯。"
        ],
        [
          "D",
          "Your belief is completely false.",
          "你的想法完全錯誤。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The response does not argue with the belief and explores the client's concern.",
      "rationale_zh": "此回應不與信念爭辯，並探索病人擔憂。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 28
    },
    {
      "id": "OS001",
      "category": "osce_transition",
      "stem": "Which phrase is most appropriate when escalating a concerning change in a client's condition?",
      "stem_zh": "當病人狀況出現令人擔心的變化，需要升級通報時，哪句話最合適？",
      "options": [
        [
          "A",
          "I think something is weird, but I am not sure.",
          "我覺得有點怪，但我不確定。"
        ],
        [
          "B",
          "The client is probably fine, but can you come later?",
          "病人大概沒事，你晚點能來嗎？"
        ],
        [
          "C",
          "I am concerned because the oxygen saturation has dropped to 88% and the client is increasingly short of breath.",
          "我擔心是因為血氧降至 88%，且病人呼吸困難加重。"
        ],
        [
          "D",
          "The family is worried, so you should see the client.",
          "家屬很擔心，所以你應該來看。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Escalation should be specific, objective and linked to clinical concern.",
      "rationale_zh": "升級通報應具體、客觀，並連到臨床風險。",
      "wrong_tags": [
        "therapeutic_communication",
        "cue_recognition",
        "osce_transition"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 48
    },
    {
      "id": "OS004",
      "category": "osce_transition",
      "stem": "Which phrase best explains a pain assessment?",
      "stem_zh": "哪句話最能解釋疼痛評估？",
      "options": [
        [
          "A",
          "I need you to pick a number because the form says so.",
          "表格要求，所以你選數字。"
        ],
        [
          "B",
          "Can you rate your pain from 0 to 10, where 0 is no pain and 10 is the worst pain?",
          "請用 0 到 10 評分你的疼痛，0 是不痛，10 是最嚴重。"
        ],
        [
          "C",
          "Pain is not important right now.",
          "疼痛現在不重要。"
        ],
        [
          "D",
          "Your pain score should be low.",
          "你的疼痛分數應該低。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The phrase is clear, patient-centered and clinically useful.",
      "rationale_zh": "此句清楚、以病人為中心且具臨床用途。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 32
    },
    {
      "id": "OS005",
      "category": "osce_transition",
      "stem": "Which phrase best shows escalation using objective data?",
      "stem_zh": "哪句話最能用客觀資料做升級通報？",
      "options": [
        [
          "A",
          "The client looks bad.",
          "病人看起來不好。"
        ],
        [
          "B",
          "The family is nervous.",
          "家屬很緊張。"
        ],
        [
          "C",
          "The blood pressure is 88/54 and the heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "D",
          "I just feel worried.",
          "我只是覺得擔心。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Objective vital-sign data makes escalation clearer and safer.",
      "rationale_zh": "客觀生命徵象讓升級通報更清楚且安全。",
      "wrong_tags": [
        "osce_transition",
        "cue_recognition"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 32
    },
    {
      "id": "OS006",
      "category": "osce_transition",
      "stem": "Which phrase best asks permission before assessment?",
      "stem_zh": "評估前哪句話最能表達徵求同意？",
      "options": [
        [
          "A",
          "I am going to check your wound now; is that okay?",
          "我現在要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "I do not need to explain this.",
          "我不需要解釋。"
        ],
        [
          "C",
          "You have no choice.",
          "你沒有選擇。"
        ],
        [
          "D",
          "I will do it quickly without telling you.",
          "我不告訴你，快速做完。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity, consent and OSCE communication.",
      "rationale_zh": "徵求同意與解釋有助於尊嚴、同意與 OSCE 溝通。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 36
    },
    {
      "id": "D002",
      "category": "delegation_scope",
      "stem": "Which assignment should the charge nurse give to an experienced LPN/LVN rather than UAP?",
      "stem_zh": "下列哪項更適合分配給有經驗的 LPN/LVN，而不是 UAP？",
      "options": [
        [
          "A",
          "Feeding a stable client who needs tray setup.",
          "協助穩定病人進食並擺放餐盤。"
        ],
        [
          "B",
          "Reinforcing teaching about a dressing change after RN instruction.",
          "在 RN 教學後補強換藥說明。"
        ],
        [
          "C",
          "Taking routine vital signs for a stable client.",
          "為穩定病人量例行生命徵象。"
        ],
        [
          "D",
          "Transporting a discharged client by wheelchair.",
          "用輪椅送出院病人。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Depending on jurisdiction and facility policy, LPN/LVN may reinforce teaching after RN instruction; UAP should not teach.",
      "rationale_zh": "依地區與機構規範，LPN/LVN 可在 RN 教學後補強說明；UAP 不應承擔教學。",
      "wrong_tags": [
        "delegation_scope",
        "english_wording"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 56
    },
    {
      "id": "D003",
      "category": "delegation_scope",
      "stem": "Which client should the RN assign to another RN rather than to an LPN/LVN?",
      "stem_zh": "下列哪位病人應由 RN 接手，而不是分配給 LPN/LVN？",
      "options": [
        [
          "A",
          "A stable client needing a scheduled oral antibiotic.",
          "穩定病人需定時口服抗生素。"
        ],
        [
          "B",
          "A client admitted from the emergency department with new stroke symptoms.",
          "急診收入、有新發中風症狀的病人。"
        ],
        [
          "C",
          "A client needing routine wound dressing reinforcement.",
          "需要例行傷口敷料加強的病人。"
        ],
        [
          "D",
          "A stable client requesting assistance with hygiene.",
          "穩定病人需要個人清潔協助。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A newly admitted unstable client with neurologic changes requires RN assessment and judgment.",
      "rationale_zh": "新入院且有神經變化的不穩定病人需要 RN 評估與判斷。",
      "wrong_tags": [
        "delegation_scope",
        "prioritization"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 52
    },
    {
      "id": "D004",
      "category": "delegation_scope",
      "stem": "Which instruction should the RN give to UAP when delegating care?",
      "stem_zh": "RN 委派照護給 UAP 時，哪項指示最合適？",
      "options": [
        [
          "A",
          "Assess whether the client is ready for discharge.",
          "評估病人是否可出院。"
        ],
        [
          "B",
          "Tell me if the client becomes dizzy while walking.",
          "如果病人行走時頭暈，請告訴我。"
        ],
        [
          "C",
          "Decide whether the medication should be held.",
          "決定是否暫停藥物。"
        ],
        [
          "D",
          "Teach the client how to use the inhaler.",
          "教病人使用吸入器。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "UAP may report observations during a delegated routine task; assessment, medication decisions and teaching remain RN responsibilities.",
      "rationale_zh": "UAP 可在例行任務中回報觀察；評估、藥物決策與教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 52
    },
    {
      "id": "D005",
      "category": "delegation_scope",
      "stem": "Which task should the RN keep rather than delegate?",
      "stem_zh": "哪項任務應由 RN 保留而不是委派？",
      "options": [
        [
          "A",
          "Initial assessment of a newly admitted client.",
          "新入院病人的初始評估。"
        ],
        [
          "B",
          "Obtaining a stable client's weight.",
          "測量穩定病人體重。"
        ],
        [
          "C",
          "Assisting with routine feeding.",
          "協助例行進食。"
        ],
        [
          "D",
          "Transporting a stable client.",
          "運送穩定病人。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial assessment requires RN judgment and should not be delegated.",
      "rationale_zh": "初始評估需要 RN 判斷，不應委派。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 40
    },
    {
      "id": "D006",
      "category": "delegation_scope",
      "stem": "The RN delegates vital signs to UAP. Which instruction is best?",
      "stem_zh": "RN 委派 UAP 量生命徵象。哪項指示最好？",
      "options": [
        [
          "A",
          "Report systolic blood pressure below 90 immediately.",
          "收縮壓低於 90 立即回報。"
        ],
        [
          "B",
          "Decide whether to hold medications.",
          "決定是否停藥。"
        ],
        [
          "C",
          "Assess the cause of fever.",
          "評估發燒原因。"
        ],
        [
          "D",
          "Teach the client about hypertension.",
          "教病人高血壓知識。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Delegated tasks should include clear reporting parameters. Medication decisions, assessment and teaching remain RN functions.",
      "rationale_zh": "委派任務應有明確回報標準；藥物決策、評估與教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope",
        "safety_infection"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 52
    },
    {
      "id": "D008",
      "category": "delegation_scope",
      "stem": "Which statement by UAP requires RN follow-up?",
      "stem_zh": "UAP 哪句話需要 RN 追蹤？",
      "options": [
        [
          "A",
          "I will report if the client becomes short of breath.",
          "如果病人呼吸困難我會回報。"
        ],
        [
          "B",
          "I will teach the client how to use the incentive spirometer.",
          "我會教病人使用 incentive spirometer。"
        ],
        [
          "C",
          "I will help the stable client bathe.",
          "我會協助穩定病人洗澡。"
        ],
        [
          "D",
          "I will record the intake amount.",
          "我會記錄攝入量。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Teaching requires RN responsibility and should not be performed by UAP.",
      "rationale_zh": "教學屬 RN 職責，不應由 UAP 執行。",
      "wrong_tags": [
        "delegation_scope",
        "english_wording"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 44
    },
    {
      "id": "MH001",
      "category": "therapeutic_communication",
      "stem": "A client says, 'I cannot go on anymore. I have been thinking about ending my life.' Which response is best?",
      "stem_zh": "病人說：『我撐不下去了，一直在想結束生命。』最佳回應是？",
      "options": [
        [
          "A",
          "You have so much to live for.",
          "你還有很多值得活下去的理由。"
        ],
        [
          "B",
          "Do you have a plan to harm yourself?",
          "你有傷害自己的計劃嗎？"
        ],
        [
          "C",
          "Try not to think that way.",
          "不要那樣想。"
        ],
        [
          "D",
          "I will tell your family to stay with you.",
          "我會叫你的家人陪你。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Direct suicide risk assessment is required and therapeutic when safety is at risk.",
      "rationale_zh": "有自殺意念時需要直接評估風險，這是安全且治療性的做法。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection",
        "prioritization"
      ],
      "source_file": "question_bank_beta_20.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 40
    },
    {
      "id": "MH004",
      "category": "therapeutic_communication",
      "stem": "A client with mania is pacing and speaking rapidly. Which nursing approach is best?",
      "stem_zh": "躁症病人來回踱步、語速很快。最佳護理方式是？",
      "options": [
        [
          "A",
          "Use long detailed explanations.",
          "使用很長很詳細的解釋。"
        ],
        [
          "B",
          "Provide a calm environment and brief clear directions.",
          "提供安靜環境與簡短清楚指令。"
        ],
        [
          "C",
          "Encourage a large stimulating group activity.",
          "鼓勵參加大型刺激性團體活動。"
        ],
        [
          "D",
          "Argue until the client sits down.",
          "爭辯直到病人坐下。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A calm, low-stimulation environment and brief directions support safety and communication.",
      "rationale_zh": "安靜低刺激環境與簡短指令有助於安全與溝通。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection"
      ],
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 32
    },
    {
      "id": "MH007",
      "category": "therapeutic_communication",
      "stem": "Which response is best for a client expressing fear before a procedure?",
      "stem_zh": "病人在操作前表達恐懼，哪個回應最佳？",
      "options": [
        [
          "A",
          "Tell me what you understand about the procedure.",
          "告訴我你對這個操作的理解。"
        ],
        [
          "B",
          "It is not scary.",
          "這不可怕。"
        ],
        [
          "C",
          "Everyone does fine.",
          "每個人都沒事。"
        ],
        [
          "D",
          "Do not ask questions now.",
          "現在不要問問題。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Assessing understanding helps identify concerns and supports teaching.",
      "rationale_zh": "評估理解有助於找出擔憂並支持教學。",
      "wrong_tags": [
        "therapeutic_communication",
        "english_wording"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 36
    },
    {
      "id": "MH008",
      "category": "therapeutic_communication",
      "stem": "A client with panic reports feeling unable to breathe. Which action is best?",
      "stem_zh": "恐慌病人表示覺得無法呼吸。哪項行動最佳？",
      "options": [
        [
          "A",
          "Stay with the client and speak in a calm, simple manner.",
          "陪伴病人並用平靜簡短語言說話。"
        ],
        [
          "B",
          "Tell the client to stop overreacting.",
          "告訴病人不要反應過度。"
        ],
        [
          "C",
          "Leave the client alone to calm down.",
          "讓病人獨自冷靜。"
        ],
        [
          "D",
          "Use complex explanations.",
          "使用複雜解釋。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Presence and calm simple communication support safety during panic.",
      "rationale_zh": "陪伴與簡短平靜溝通有助於恐慌時的安全。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection"
      ],
      "source_file": "question_bank_expansion_50.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 32
    },
    {
      "id": "AUTO30_008",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 38
    },
    {
      "id": "AUTO30_017",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 42
    },
    {
      "id": "AUTO30_026",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 34
    },
    {
      "id": "AUTO30_035",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 34
    },
    {
      "id": "AUTO30_044",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 42
    },
    {
      "id": "AUTO30_053",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 38
    },
    {
      "id": "AUTO30_062",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 42
    },
    {
      "id": "AUTO30_071",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 34
    },
    {
      "id": "AUTO30_006",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review",
      "source_file": "question_bank_expansion_30.json",
      "public_demo_candidate": true,
      "public_demo_risk_level": "medium",
      "public_demo_risk_score": 54
    }
  ]
}

```


---

## File: app-content/question_bank_expansion_30.json

```json
{
  "version": "0.5",
  "status": "180-item expanded bilingual beta practice pool for editorial and nursing review",
  "disclaimer": "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Generated expansion items require RN/nursing educator review before public release.",
  "items": [
    {
      "id": "P004",
      "category": "prioritization",
      "stem": "Which client should the nurse assess first after receiving shift report?",
      "stem_zh": "交班後護理師應先評估哪位病人？",
      "options": [
        [
          "A",
          "A client with COPD whose oxygen saturation is 89% and who is using accessory muscles.",
          "COPD 病人血氧 89%，並使用輔助呼吸肌。"
        ],
        [
          "B",
          "A client with a sprained ankle requesting an ice pack.",
          "腳踝扭傷病人要求冰敷。"
        ],
        [
          "C",
          "A client with stable angina asking about diet.",
          "穩定型心絞痛病人詢問飲食。"
        ],
        [
          "D",
          "A client with constipation requesting prune juice.",
          "便秘病人要求西梅汁。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Accessory muscle use with low oxygen saturation indicates breathing distress and requires priority assessment.",
      "rationale_zh": "血氧低且使用輔助呼吸肌提示呼吸窘迫，需要優先評估。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "P005",
      "category": "prioritization",
      "stem": "A client with diabetes is confused, diaphoretic and trembling. What should the nurse do first?",
      "stem_zh": "糖尿病病人混亂、出汗、顫抖。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Check the blood glucose level.",
          "檢查血糖。"
        ],
        [
          "B",
          "Provide discharge teaching.",
          "提供出院教學。"
        ],
        [
          "C",
          "Document the symptoms.",
          "記錄症狀。"
        ],
        [
          "D",
          "Encourage the client to rest.",
          "鼓勵病人休息。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The cues suggest possible hypoglycemia. Assessment of blood glucose is the immediate priority.",
      "rationale_zh": "這些線索提示可能低血糖，立即檢查血糖是優先行動。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "knowledge_gap"
      ]
    },
    {
      "id": "P006",
      "category": "prioritization",
      "stem": "A client receiving a blood transfusion develops chills, fever and back pain. What is the priority action?",
      "stem_zh": "輸血中的病人出現寒顫、發燒和背痛。優先行動是？",
      "options": [
        [
          "A",
          "Slow the transfusion rate.",
          "減慢輸血速度。"
        ],
        [
          "B",
          "Stop the transfusion.",
          "停止輸血。"
        ],
        [
          "C",
          "Offer warm blankets only.",
          "只提供溫毯。"
        ],
        [
          "D",
          "Document and reassess in 1 hour.",
          "記錄並 1 小時後再評估。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "These signs may indicate a transfusion reaction. Stop the transfusion and follow protocol.",
      "rationale_zh": "這些徵象可能提示輸血反應，應停止輸血並按流程處理。",
      "wrong_tags": [
        "knowledge_gap",
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "D003",
      "category": "delegation_scope",
      "stem": "Which client should the RN assign to another RN rather than to an LPN/LVN?",
      "stem_zh": "下列哪位病人應由 RN 接手，而不是分配給 LPN/LVN？",
      "options": [
        [
          "A",
          "A stable client needing a scheduled oral antibiotic.",
          "穩定病人需定時口服抗生素。"
        ],
        [
          "B",
          "A client admitted from the emergency department with new stroke symptoms.",
          "急診收入、有新發中風症狀的病人。"
        ],
        [
          "C",
          "A client needing routine wound dressing reinforcement.",
          "需要例行傷口敷料加強的病人。"
        ],
        [
          "D",
          "A stable client requesting assistance with hygiene.",
          "穩定病人需要個人清潔協助。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A newly admitted unstable client with neurologic changes requires RN assessment and judgment.",
      "rationale_zh": "新入院且有神經變化的不穩定病人需要 RN 評估與判斷。",
      "wrong_tags": [
        "delegation_scope",
        "prioritization"
      ]
    },
    {
      "id": "D004",
      "category": "delegation_scope",
      "stem": "Which instruction should the RN give to UAP when delegating care?",
      "stem_zh": "RN 委派照護給 UAP 時，哪項指示最合適？",
      "options": [
        [
          "A",
          "Assess whether the client is ready for discharge.",
          "評估病人是否可出院。"
        ],
        [
          "B",
          "Tell me if the client becomes dizzy while walking.",
          "如果病人行走時頭暈，請告訴我。"
        ],
        [
          "C",
          "Decide whether the medication should be held.",
          "決定是否暫停藥物。"
        ],
        [
          "D",
          "Teach the client how to use the inhaler.",
          "教病人使用吸入器。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "UAP may report observations during a delegated routine task; assessment, medication decisions and teaching remain RN responsibilities.",
      "rationale_zh": "UAP 可在例行任務中回報觀察；評估、藥物決策與教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ]
    },
    {
      "id": "PH004",
      "category": "pharmacology",
      "stem": "Which assessment is most important before administering digoxin?",
      "stem_zh": "給 digoxin 前最重要的評估是什麼？",
      "options": [
        [
          "A",
          "Apical pulse.",
          "心尖脈。"
        ],
        [
          "B",
          "Temperature.",
          "體溫。"
        ],
        [
          "C",
          "Bowel sounds.",
          "腸鳴音。"
        ],
        [
          "D",
          "Pain score.",
          "疼痛分數。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Digoxin can affect heart rate and rhythm. The apical pulse should be assessed before administration.",
      "rationale_zh": "Digoxin 可影響心率與心律，給藥前需評估心尖脈。",
      "wrong_tags": [
        "knowledge_gap",
        "prioritization"
      ]
    },
    {
      "id": "PH005",
      "category": "pharmacology",
      "stem": "A client receiving heparin has a sudden severe headache and confusion. What is the nurse's priority?",
      "stem_zh": "使用 heparin 的病人突然嚴重頭痛並意識混亂。護理師優先處理是？",
      "options": [
        [
          "A",
          "Assess for bleeding and notify the provider immediately.",
          "評估出血並立即通知醫師/團隊。"
        ],
        [
          "B",
          "Give the next heparin dose early.",
          "提前給下一劑 heparin。"
        ],
        [
          "C",
          "Encourage the client to sleep.",
          "鼓勵病人睡覺。"
        ],
        [
          "D",
          "Document as a common side effect.",
          "記錄為常見副作用。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Severe headache and confusion may indicate serious bleeding, including intracranial bleeding, in a client receiving anticoagulation.",
      "rationale_zh": "抗凝治療中嚴重頭痛和混亂可能提示嚴重出血，包括顱內出血。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "safety_infection"
      ]
    },
    {
      "id": "PH006",
      "category": "pharmacology",
      "stem": "Which statement by a client taking prednisone requires further teaching?",
      "stem_zh": "服用 prednisone 的病人哪句話表示需要進一步教學？",
      "options": [
        [
          "A",
          "I will report signs of infection.",
          "我會回報感染徵象。"
        ],
        [
          "B",
          "I should stop the medication suddenly when I feel better.",
          "我覺得好些時應突然停藥。"
        ],
        [
          "C",
          "My blood glucose may be affected.",
          "我的血糖可能受影響。"
        ],
        [
          "D",
          "I will take it as prescribed.",
          "我會按處方服用。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Steroids should not be stopped abruptly without provider guidance due to adrenal suppression risk.",
      "rationale_zh": "類固醇不應未經指示突然停用，因有腎上腺抑制風險。",
      "wrong_tags": [
        "knowledge_gap",
        "english_wording"
      ]
    },
    {
      "id": "PH007",
      "category": "pharmacology",
      "stem": "A client with diabetes is prescribed insulin lispro. Which timing instruction is most appropriate?",
      "stem_zh": "糖尿病病人使用 insulin lispro。哪項時間指導最合適？",
      "options": [
        [
          "A",
          "Take it shortly before eating.",
          "接近進餐前使用。"
        ],
        [
          "B",
          "Take it only at bedtime.",
          "只在睡前使用。"
        ],
        [
          "C",
          "Take it after skipping a meal.",
          "跳餐後使用。"
        ],
        [
          "D",
          "Take it once a week.",
          "每週一次使用。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Rapid-acting insulin is usually administered close to mealtime to reduce hypoglycemia risk.",
      "rationale_zh": "速效胰島素通常接近進餐時間使用，以降低低血糖風險。",
      "wrong_tags": [
        "knowledge_gap",
        "safety_infection"
      ]
    },
    {
      "id": "S003",
      "category": "safety_infection",
      "stem": "Which client should be placed near the nurses' station for safety?",
      "stem_zh": "哪位病人基於安全考量應安排靠近護理站？",
      "options": [
        [
          "A",
          "A confused client who repeatedly tries to get out of bed.",
          "混亂且反覆嘗試下床的病人。"
        ],
        [
          "B",
          "A stable client waiting for discharge paperwork.",
          "穩定等待出院文件的病人。"
        ],
        [
          "C",
          "A client requesting a private room for rest.",
          "要求單人房休息的病人。"
        ],
        [
          "D",
          "A client with mild seasonal allergies.",
          "輕微季節性過敏病人。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Confusion and repeated attempts to get out of bed increase fall risk and require safety planning.",
      "rationale_zh": "混亂且反覆下床增加跌倒風險，需要安全安排。",
      "wrong_tags": [
        "safety_infection",
        "cue_recognition"
      ]
    },
    {
      "id": "S004",
      "category": "safety_infection",
      "stem": "A client with C. difficile infection is admitted. Which precaution is most appropriate?",
      "stem_zh": "C. difficile 感染病人入院。最合適的防護措施是？",
      "options": [
        [
          "A",
          "Contact precautions and handwashing with soap and water.",
          "接觸隔離並用肥皂和水洗手。"
        ],
        [
          "B",
          "Airborne precautions only.",
          "僅空氣隔離。"
        ],
        [
          "C",
          "No special precautions.",
          "無需特別防護。"
        ],
        [
          "D",
          "Use alcohol hand rub only after care.",
          "照護後只用酒精乾洗手。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile requires contact precautions; soap and water are important because spores are not reliably removed by alcohol hand rub alone.",
      "rationale_zh": "C. difficile 需接觸隔離；孢子不能單靠酒精乾洗手可靠去除，肥皂水洗手重要。",
      "wrong_tags": [
        "knowledge_gap",
        "safety_infection"
      ]
    },
    {
      "id": "S005",
      "category": "safety_infection",
      "stem": "Which action reduces aspiration risk for a client receiving enteral feeding?",
      "stem_zh": "哪項措施可降低管灌病人誤吸風險？",
      "options": [
        [
          "A",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "B",
          "Place the client flat after feeding.",
          "餵食後讓病人平躺。"
        ],
        [
          "C",
          "Give all medications rapidly together.",
          "所有藥物快速一起給。"
        ],
        [
          "D",
          "Ignore coughing during feeding.",
          "餵食中咳嗽不需理會。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Elevating the head of bed helps reduce aspiration risk during enteral feeding.",
      "rationale_zh": "抬高床頭有助於降低管灌時誤吸風險。",
      "wrong_tags": [
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "MC003",
      "category": "maternal_child",
      "stem": "Which newborn finding requires immediate follow-up?",
      "stem_zh": "下列哪個新生兒發現需要立即追蹤？",
      "options": [
        [
          "A",
          "Acrocyanosis shortly after birth.",
          "出生後短時間四肢末端發紺。"
        ],
        [
          "B",
          "Respiratory grunting and nasal flaring.",
          "呼吸呻吟與鼻翼煽動。"
        ],
        [
          "C",
          "Sleeping between feedings.",
          "兩次餵奶間睡覺。"
        ],
        [
          "D",
          "Passing meconium in the first day.",
          "第一天排胎便。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Grunting and nasal flaring indicate respiratory distress and require immediate assessment.",
      "rationale_zh": "呼吸呻吟與鼻翼煽動提示呼吸窘迫，需要立即評估。",
      "wrong_tags": [
        "maternal_child",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "MC004",
      "category": "maternal_child",
      "stem": "A pregnant client reports decreased fetal movement. What should the nurse do?",
      "stem_zh": "孕婦回報胎動減少。護理師應怎麼做？",
      "options": [
        [
          "A",
          "Tell the client this is always normal near term.",
          "告訴病人臨近足月這一定正常。"
        ],
        [
          "B",
          "Advise prompt evaluation according to protocol.",
          "按流程建議及時評估。"
        ],
        [
          "C",
          "Suggest waiting one week.",
          "建議等一週。"
        ],
        [
          "D",
          "Document without follow-up.",
          "記錄但不追蹤。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Decreased fetal movement may indicate fetal well-being concern and requires timely evaluation.",
      "rationale_zh": "胎動減少可能提示胎兒狀況問題，需要及時評估。",
      "wrong_tags": [
        "maternal_child",
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "MH003",
      "category": "therapeutic_communication",
      "stem": "A client is crying after receiving a serious diagnosis. Which response is most therapeutic?",
      "stem_zh": "病人收到嚴重診斷後哭泣。哪個回應最具治療性？",
      "options": [
        [
          "A",
          "You should be strong for your family.",
          "你應該為家人堅強。"
        ],
        [
          "B",
          "At least treatment is available.",
          "至少還有治療。"
        ],
        [
          "C",
          "This is a lot to take in. I can sit with you for a moment.",
          "這確實很難承受，我可以陪你坐一會兒。"
        ],
        [
          "D",
          "Let's talk about your insurance forms.",
          "我們談談你的保險表格。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response acknowledges emotion and offers presence without false reassurance or changing the subject.",
      "rationale_zh": "此回應承認情緒並提供陪伴，沒有虛假安慰或轉移話題。",
      "wrong_tags": [
        "therapeutic_communication"
      ]
    },
    {
      "id": "MH004",
      "category": "therapeutic_communication",
      "stem": "A client with mania is pacing and speaking rapidly. Which nursing approach is best?",
      "stem_zh": "躁症病人來回踱步、語速很快。最佳護理方式是？",
      "options": [
        [
          "A",
          "Use long detailed explanations.",
          "使用很長很詳細的解釋。"
        ],
        [
          "B",
          "Provide a calm environment and brief clear directions.",
          "提供安靜環境與簡短清楚指令。"
        ],
        [
          "C",
          "Encourage a large stimulating group activity.",
          "鼓勵參加大型刺激性團體活動。"
        ],
        [
          "D",
          "Argue until the client sits down.",
          "爭辯直到病人坐下。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A calm, low-stimulation environment and brief directions support safety and communication.",
      "rationale_zh": "安靜低刺激環境與簡短指令有助於安全與溝通。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection"
      ]
    },
    {
      "id": "NGN003",
      "category": "ngn",
      "stem": "Which cues suggest possible sepsis? Select all that apply.",
      "stem_zh": "哪些線索提示可能敗血症？可多選。",
      "case": "An older adult with a urinary tract infection is newly confused. Temperature is 38.9 C, heart rate 122/min, blood pressure 88/54 mmHg and respirations 26/min.",
      "case_zh": "泌尿道感染的老年病人新發混亂。體溫 38.9 C、心率 122/分、血壓 88/54 mmHg、呼吸 26/分。",
      "options": [
        [
          "A",
          "New confusion",
          "新發混亂"
        ],
        [
          "B",
          "Temperature 38.9 C",
          "體溫 38.9 C"
        ],
        [
          "C",
          "Heart rate 122/min",
          "心率 122/分"
        ],
        [
          "D",
          "Blood pressure 88/54 mmHg",
          "血壓 88/54 mmHg"
        ]
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ],
      "rationale": "Infection with mental status change, fever, tachycardia and hypotension is concerning for sepsis and poor perfusion.",
      "rationale_zh": "感染合併意識變化、發燒、心動過速與低血壓提示敗血症與灌流不良風險。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "NGN004",
      "category": "ngn",
      "stem": "Which actions are appropriate first-line nursing actions? Select all that apply.",
      "stem_zh": "哪些屬於合適的第一線護理行動？可多選。",
      "case": "A client with asthma is wheezing, speaking in short phrases and has oxygen saturation 90%.",
      "case_zh": "哮喘病人喘鳴，只能短句說話，血氧 90%。",
      "options": [
        [
          "A",
          "Position the client upright.",
          "讓病人採直立坐姿。"
        ],
        [
          "B",
          "Assess respiratory status.",
          "評估呼吸狀態。"
        ],
        [
          "C",
          "Delay care until discharge teaching is complete.",
          "延後處理直到完成出院教學。"
        ],
        [
          "D",
          "Administer prescribed rescue medication per protocol.",
          "按醫囑/流程給予急救藥物。"
        ]
      ],
      "answer": [
        "A",
        "B",
        "D"
      ],
      "rationale": "Respiratory distress requires positioning, assessment and prescribed/protocol treatment. Teaching is not first priority during distress.",
      "rationale_zh": "呼吸窘迫需體位、評估與按醫囑/流程處理；教學不是此刻優先。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ]
    },
    {
      "id": "E003",
      "category": "english_wording",
      "stem": "The phrase 'expected finding' in a question usually asks the learner to identify:",
      "stem_zh": "題目中的 expected finding 通常要求考生辨識：",
      "options": [
        [
          "A",
          "A normal or anticipated finding for the condition or treatment.",
          "對該情況或治療而言正常/可預期的發現。"
        ],
        [
          "B",
          "The most dangerous finding.",
          "最危險的發現。"
        ],
        [
          "C",
          "The finding that requires immediate provider notification.",
          "需立即通知醫師/團隊的發現。"
        ],
        [
          "D",
          "The finding the family expects.",
          "家屬期待的發現。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Expected finding means anticipated or consistent with the condition/treatment, not necessarily urgent.",
      "rationale_zh": "Expected finding 表示與情況/治療一致或可預期，不一定緊急。",
      "wrong_tags": [
        "english_wording"
      ]
    },
    {
      "id": "E004",
      "category": "english_wording",
      "stem": "When a question asks for the 'best' response, the learner should choose the option that is:",
      "stem_zh": "當題目問 best response 時，考生應選：",
      "options": [
        [
          "A",
          "Always the longest option.",
          "永遠最長的選項。"
        ],
        [
          "B",
          "The safest and most therapeutic in the given context.",
          "該情境中最安全且最具治療性的選項。"
        ],
        [
          "C",
          "The option with the most medical terms.",
          "醫學術語最多的選項。"
        ],
        [
          "D",
          "The option that gives personal advice.",
          "提供個人建議的選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Best asks for the most appropriate response in context, often combining safety and therapeutic communication.",
      "rationale_zh": "Best 問的是情境中最合適的回應，常結合安全與治療性溝通。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ]
    },
    {
      "id": "OS002",
      "category": "osce_transition",
      "stem": "Which sentence best demonstrates patient identification before a procedure?",
      "stem_zh": "哪句話最能展現操作前確認病人身份？",
      "options": [
        [
          "A",
          "You look like the right patient.",
          "你看起來像是正確的病人。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期。"
        ],
        [
          "C",
          "Your family says you are the patient.",
          "你的家人說你就是這位病人。"
        ],
        [
          "D",
          "The room number matches, so we can start.",
          "房號一致，所以可以開始。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Using two identifiers such as full name and date of birth supports patient safety before procedures.",
      "rationale_zh": "使用全名與出生日期等兩項身份識別有助於操作前病人安全。",
      "wrong_tags": [
        "osce_transition",
        "safety_infection"
      ]
    },
    {
      "id": "OS003",
      "category": "osce_transition",
      "stem": "Which phrase is best when explaining hand hygiene to a patient?",
      "stem_zh": "向病人解釋手部衛生時，哪句話最合適？",
      "options": [
        [
          "A",
          "I wash my hands because the rules say so.",
          "我洗手只是因為規定如此。"
        ],
        [
          "B",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "C",
          "It probably does not matter.",
          "這大概不重要。"
        ],
        [
          "D",
          "You do not need to know why.",
          "你不需要知道原因。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The phrase is clear, respectful and links the action to infection risk reduction.",
      "rationale_zh": "此句清楚、尊重，並把行動連到降低感染風險。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication",
        "safety_infection"
      ]
    },
    {
      "id": "T002",
      "category": "test_strategy",
      "stem": "A learner's wrong-answer log shows repeated 'English wording' mistakes. Which action is most useful?",
      "stem_zh": "學員錯題紀錄反覆出現 English wording 錯誤。哪項最有用？",
      "options": [
        [
          "A",
          "Ignore the wording and do more random questions only.",
          "忽略題幹，只多做隨機題。"
        ],
        [
          "B",
          "Build a list of command phrases such as first, priority, follow-up and further teaching.",
          "建立 first、priority、follow-up、further teaching 等指令詞清單。"
        ],
        [
          "C",
          "Stop reading rationales.",
          "停止看解析。"
        ],
        [
          "D",
          "Translate every word slowly during timed practice.",
          "限時練習時逐字慢慢翻譯。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Repeated wording mistakes need targeted command-phrase training, not only more random practice.",
      "rationale_zh": "反覆題幹理解錯誤需要針對指令詞訓練，而不只是多做隨機題。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ]
    },
    {
      "id": "T003",
      "category": "test_strategy",
      "stem": "Which study behavior is most likely to improve clinical judgment consistency?",
      "stem_zh": "哪種學習行為最可能提升臨床判斷穩定性？",
      "options": [
        [
          "A",
          "Tagging every missed question by error type.",
          "按錯因標記每一道錯題。"
        ],
        [
          "B",
          "Only counting how many questions were completed.",
          "只計算完成題數。"
        ],
        [
          "C",
          "Changing resources every two days.",
          "每兩天換一套資源。"
        ],
        [
          "D",
          "Skipping all rationales after correct answers.",
          "答對後完全不看解析。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Error tagging reveals patterns and makes future review targeted.",
      "rationale_zh": "錯因標記能揭示模式，讓後續複習更有針對性。",
      "wrong_tags": [
        "test_strategy"
      ]
    },
    {
      "id": "MIX001",
      "category": "mixed_review",
      "stem": "Which finding in a client with heart failure requires the most immediate follow-up?",
      "stem_zh": "心衰病人下列哪個發現最需要立即追蹤？",
      "options": [
        [
          "A",
          "Sudden weight gain and increasing shortness of breath.",
          "體重突然增加且呼吸困難加重。"
        ],
        [
          "B",
          "Requests information about a low-sodium diet.",
          "詢問低鈉飲食。"
        ],
        [
          "C",
          "Mild fatigue after physical therapy.",
          "物理治療後輕微疲倦。"
        ],
        [
          "D",
          "Asks when family can visit.",
          "詢問家屬何時可探視。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Sudden weight gain with worsening dyspnea suggests fluid overload and respiratory compromise.",
      "rationale_zh": "體重突然增加合併呼吸困難加重提示液體負荷與呼吸風險。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "knowledge_gap"
      ]
    },
    {
      "id": "MIX002",
      "category": "mixed_review",
      "stem": "Which client statement after stroke discharge teaching indicates understanding?",
      "stem_zh": "中風出院教學後，病人哪句話表示理解？",
      "options": [
        [
          "A",
          "If one side of my face droops, I should seek emergency help.",
          "如果一側臉下垂，我應尋求緊急協助。"
        ],
        [
          "B",
          "I should wait a few days if my speech becomes slurred.",
          "如果說話含糊，我應等幾天。"
        ],
        [
          "C",
          "Weakness on one side is normal and never urgent.",
          "單側無力很正常，永遠不緊急。"
        ],
        [
          "D",
          "I only need help if I have pain.",
          "只有疼痛才需要求助。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Facial droop, slurred speech or unilateral weakness may signal stroke and require emergency response.",
      "rationale_zh": "臉歪、語言含糊或單側無力可能提示中風，需要緊急處理。",
      "wrong_tags": [
        "knowledge_gap",
        "english_wording",
        "safety_infection"
      ]
    },
    {
      "id": "MIX003",
      "category": "mixed_review",
      "stem": "A client with chronic kidney disease reports palpitations and weakness. Which lab value is most concerning?",
      "stem_zh": "慢性腎病病人回報心悸和無力。哪個化驗值最令人擔心？",
      "options": [
        [
          "A",
          "Potassium 6.2 mEq/L.",
          "鉀 6.2 mEq/L。"
        ],
        [
          "B",
          "Sodium 138 mEq/L.",
          "鈉 138 mEq/L。"
        ],
        [
          "C",
          "Hemoglobin 12.8 g/dL.",
          "血紅蛋白 12.8 g/dL。"
        ],
        [
          "D",
          "Calcium 9.4 mg/dL.",
          "鈣 9.4 mg/dL。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Hyperkalemia can cause life-threatening dysrhythmias and is a priority concern.",
      "rationale_zh": "高血鉀可造成危及生命的心律不整，是優先風險。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "S006",
      "category": "safety_infection",
      "stem": "Which action is most important before transferring a client from bed to chair for the first time after surgery?",
      "stem_zh": "術後第一次協助病人從床移到椅子前，哪項最重要？",
      "options": [
        [
          "A",
          "Assess dizziness and orthostatic tolerance.",
          "評估頭暈與姿勢耐受。"
        ],
        [
          "B",
          "Ask the family to lift the client quickly.",
          "請家屬快速抱起病人。"
        ],
        [
          "C",
          "Remove all assistive devices.",
          "移除所有輔助設備。"
        ],
        [
          "D",
          "Turn off the call bell.",
          "關掉呼叫鈴。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "First transfer after surgery requires safety assessment to reduce fall and orthostatic risk.",
      "rationale_zh": "術後第一次轉移需先做安全評估，以降低跌倒與姿勢性低血壓風險。",
      "wrong_tags": [
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "PH008",
      "category": "pharmacology",
      "stem": "Which client statement about nitroglycerin requires further teaching?",
      "stem_zh": "關於 nitroglycerin，病人哪句話表示需要進一步教學？",
      "options": [
        [
          "A",
          "I will sit down before taking it.",
          "服用前我會先坐下。"
        ],
        [
          "B",
          "I will keep it in the original dark container.",
          "我會保存在原本的避光容器。"
        ],
        [
          "C",
          "I can take it with erectile dysfunction medication whenever needed.",
          "需要時我可以和勃起功能障礙藥一起服用。"
        ],
        [
          "D",
          "I will seek emergency help if chest pain is not relieved as instructed.",
          "若胸痛未按指示緩解，我會尋求緊急協助。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Nitroglycerin should not be combined with PDE-5 inhibitor erectile dysfunction medications due to severe hypotension risk.",
      "rationale_zh": "Nitroglycerin 不應與 PDE-5 inhibitor 類勃起功能障礙藥合用，因可能造成嚴重低血壓。",
      "wrong_tags": [
        "knowledge_gap",
        "english_wording",
        "safety_infection"
      ]
    },
    {
      "id": "MH005",
      "category": "therapeutic_communication",
      "stem": "A client says, 'No one understands how scared I am before surgery.' Which response is most therapeutic?",
      "stem_zh": "病人說：『沒有人理解我手術前有多害怕。』哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Everyone is scared before surgery.",
          "每個人手術前都害怕。"
        ],
        [
          "B",
          "You should trust the surgeon.",
          "你應該相信外科醫師。"
        ],
        [
          "C",
          "Tell me what worries you the most right now.",
          "告訴我你現在最擔心的是什麼。"
        ],
        [
          "D",
          "Let's not think about fear.",
          "我們不要想害怕這件事。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Open-ended exploration acknowledges fear and invites expression.",
      "rationale_zh": "開放式探索承認恐懼並鼓勵表達。",
      "wrong_tags": [
        "therapeutic_communication"
      ]
    },
    {
      "id": "AUTO30_001",
      "category": "prioritization",
      "stem": "The nurse is caring for a postoperative client with new shortness of breath and oxygen saturation 88%. What should the nurse do first?",
      "stem_zh": "護理師照護一位術後病人，出現新發呼吸困難且血氧 88%。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess respiratory status and escalate care.",
          "評估呼吸狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "New dyspnea with low oxygen saturation is an immediate breathing concern.",
      "rationale_zh": "新發呼吸困難合併低血氧是立即的 breathing 風險。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_002",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_003",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_004",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_005",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_006",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_007",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with asthma has wheezing and speaking in short phrases. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位哮喘病人出現喘鳴且只能短句說話。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on wheezing and speaking in short phrases; apply negative-pressure room as available if relevant.",
          "評估並處理喘鳴且只能短句說話；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_008",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_009",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_010",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with a tracheostomy with high-pitched noise and anxiety. What should the nurse do first?",
      "stem_zh": "護理師照護一位氣切病人，出現高音調聲音與焦慮。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess airway patency.",
          "評估呼吸道通暢。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A high-pitched sound can signal airway obstruction.",
      "rationale_zh": "高音調聲音可能提示呼吸道阻塞。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_011",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_012",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_013",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_014",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_015",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_016",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after thyroidectomy has tingling around the mouth and muscle twitching. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位甲狀腺切除後病人出現口周麻與肌肉抽動。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on tingling around the mouth and muscle twitching; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理口周麻與肌肉抽動；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_017",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_018",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_019",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving anticoagulation with sudden severe headache and confusion. What should the nurse do first?",
      "stem_zh": "護理師照護一位接受抗凝治療的病人，出現突然嚴重頭痛與混亂。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess for bleeding and notify the provider promptly.",
          "評估出血並及時通知醫師/團隊。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Neurologic change during anticoagulation may indicate serious bleeding.",
      "rationale_zh": "抗凝期間出現神經狀態變化可能提示嚴重出血。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_020",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_021",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_022",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_023",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_024",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_025",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chest pressure has diaphoresis and nausea. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位胸部壓迫感病人出現出汗與噁心。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on diaphoresis and nausea; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理出汗與噁心；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_026",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_027",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_028",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving a blood transfusion with chills, fever and back pain. What should the nurse do first?",
      "stem_zh": "護理師照護一位輸血中病人，出現寒顫、發燒與背痛。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Stop the transfusion and follow reaction protocol.",
          "停止輸血並按輸血反應流程處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "These findings may indicate a transfusion reaction.",
      "rationale_zh": "這些發現可能提示輸血反應。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_029",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_030",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_031",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_032",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_033",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_034",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with diabetes has confusion, sweating and trembling. The care plan also includes open flame nearby.",
      "case_zh": "一位糖尿病病人出現混亂、出汗與顫抖。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on confusion, sweating and trembling; apply open flame nearby if relevant.",
          "評估並處理混亂、出汗與顫抖；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_035",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_036",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_037",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with possible stroke with new facial droop and slurred speech. What should the nurse do first?",
      "stem_zh": "護理師照護一位疑似中風病人，出現新發臉歪與言語含糊。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Note time of onset and activate stroke protocol.",
          "記錄發作時間並啟動中風流程。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Stroke symptoms require rapid time-sensitive response.",
      "rationale_zh": "中風症狀需要快速且有時間敏感性的處理。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_038",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_039",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_040",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_041",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_042",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_043",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with infection has new confusion, fever and blood pressure 86/52. The care plan also includes aspiration prevention.",
      "case_zh": "一位感染病人出現新發混亂、發燒且血壓 86/52。照護計劃也包含預防誤吸。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on new confusion, fever and blood pressure 86/52; apply aspiration prevention if relevant.",
          "評估並處理新發混亂、發燒且血壓 86/52；如相關則採取預防誤吸。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_044",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_045",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_046",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with COPD with increasing work of breathing and restlessness. What should the nurse do first?",
      "stem_zh": "護理師照護一位COPD 病人，出現呼吸做功增加且不安。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess respiratory status first.",
          "先評估呼吸狀態。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Restlessness can be a cue of hypoxia or distress.",
      "rationale_zh": "不安可能是低氧或窘迫的線索。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_047",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_048",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for pressure injury prevention when the issue is immobility?",
      "stem_zh": "當問題是不能活動時，對於壓傷預防哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Reposition regularly and protect skin integrity.",
          "定期翻身並保護皮膚完整性。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure.",
      "rationale_zh": "定期翻身可減少長時間受壓。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_049",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_050",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_051",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_052",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chronic kidney disease has palpitations and potassium 6.3 mEq/L. The care plan also includes exposure response.",
      "case_zh": "一位慢性腎病病人出現心悸且鉀 6.3 mEq/L。照護計劃也包含暴露處理。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on palpitations and potassium 6.3 mEq/L; apply exposure response if relevant.",
          "評估並處理心悸且鉀 6.3 mEq/L；如相關則採取暴露處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_053",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_054",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_055",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with asthma with wheezing and speaking in short phrases. What should the nurse do first?",
      "stem_zh": "護理師照護一位哮喘病人，出現喘鳴且只能短句說話。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess breathing and administer prescribed rescue therapy per protocol.",
          "評估呼吸並按醫囑/流程給予急救治療。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Short phrases and wheezing indicate respiratory distress.",
      "rationale_zh": "只能短句說話與喘鳴提示呼吸窘迫。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_056",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_057",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for C. difficile infection when the issue is contact precautions and soap-and-water hand hygiene?",
      "stem_zh": "當問題是接觸隔離與肥皂水洗手時，對於C. difficile 感染哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Use contact precautions and soap-and-water hand hygiene.",
          "使用接觸隔離並用肥皂水洗手。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile spores are not reliably removed by alcohol rub alone.",
      "rationale_zh": "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_058",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_059",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_060",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_061",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with head injury has increasing drowsiness and vomiting. The care plan also includes immobility.",
      "case_zh": "一位頭部外傷病人出現嗜睡加重與嘔吐。照護計劃也包含不能活動。",
      "options": [
        [
          "A",
          "Assess and act on increasing drowsiness and vomiting; apply immobility if relevant.",
          "評估並處理嗜睡加重與嘔吐；如相關則採取不能活動。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_062",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_063",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_064",
      "category": "prioritization",
      "stem": "The nurse is caring for a client after thyroidectomy with tingling around the mouth and muscle twitching. What should the nurse do first?",
      "stem_zh": "護理師照護一位甲狀腺切除後病人，出現口周麻與肌肉抽動。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Assess for hypocalcemia and maintain airway readiness.",
          "評估低血鈣並保持 airway 準備。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Tingling and twitching can indicate hypocalcemia after thyroid surgery.",
      "rationale_zh": "甲狀腺術後口周麻和抽動可能提示低血鈣。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_065",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_066",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for airborne infection concern when the issue is negative-pressure room as available?",
      "stem_zh": "當問題是可用時負壓房時，對於空氣傳播感染風險哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Place the client in airborne precautions according to protocol.",
          "按流程安排空氣隔離。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Airborne precautions generally require special room ventilation.",
      "rationale_zh": "空氣隔離通常需要特殊通風安排。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_067",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_068",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_069",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_070",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after a fall has new hip pain and external rotation of the leg. The care plan also includes contact precautions and soap-and-water hand hygiene.",
      "case_zh": "一位跌倒後病人出現新發髖部疼痛且腿部外旋。照護計劃也包含接觸隔離與肥皂水洗手。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on new hip pain and external rotation of the leg; apply contact precautions and soap-and-water hand hygiene if relevant.",
          "評估並處理新發髖部疼痛且腿部外旋；如相關則採取接觸隔離與肥皂水洗手。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_071",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_072",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_073",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chest pressure with diaphoresis and nausea. What should the nurse do first?",
      "stem_zh": "護理師照護一位胸部壓迫感病人，出現出汗與噁心。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess cardiac status and obtain emergency help per protocol.",
          "評估心臟狀態並按流程尋求緊急協助。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Chest pressure with diaphoresis and nausea may indicate acute coronary syndrome.",
      "rationale_zh": "胸部壓迫感合併出汗和噁心可能提示急性冠脈綜合徵。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_074",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_075",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_076",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_077",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_078",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_079",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with vomiting and diarrhea has dizziness and poor skin turgor. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位嘔吐腹瀉病人出現頭暈且皮膚彈性差。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on dizziness and poor skin turgor; apply negative-pressure room as available if relevant.",
          "評估並處理頭暈且皮膚彈性差；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_080",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_081",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_082",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with diabetes with confusion, sweating and trembling. What should the nurse do first?",
      "stem_zh": "護理師照護一位糖尿病病人，出現混亂、出汗與顫抖。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Check the blood glucose level.",
          "檢查血糖。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "These cues suggest possible hypoglycemia and require immediate assessment.",
      "rationale_zh": "這些線索提示可能低血糖，需要立即評估。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_083",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_084",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_085",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_086",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_087",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_088",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with abdominal pain has rigid abdomen and hypotension. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位腹痛病人出現腹部僵硬且低血壓。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on rigid abdomen and hypotension; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理腹部僵硬且低血壓；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_089",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_090",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_091",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with infection with new confusion, fever and blood pressure 86/52. What should the nurse do first?",
      "stem_zh": "護理師照護一位感染病人，出現新發混亂、發燒且血壓 86/52。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess perfusion and activate sepsis response per protocol.",
          "評估灌流並按流程啟動敗血症處理。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Infection plus hypotension and mental-status change is concerning for sepsis.",
      "rationale_zh": "感染合併低血壓和意識變化令人擔心敗血症。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_092",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_093",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_094",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_095",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_096",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_097",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A postoperative client has new shortness of breath and oxygen saturation 88%. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位術後病人出現新發呼吸困難且血氧 88%。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on new shortness of breath and oxygen saturation 88%; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理新發呼吸困難且血氧 88%；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_098",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_099",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_100",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chronic kidney disease with palpitations and potassium 6.3 mEq/L. What should the nurse do first?",
      "stem_zh": "護理師照護一位慢性腎病病人，出現心悸且鉀 6.3 mEq/L。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Place the client on cardiac monitoring and escalate care.",
          "進行心電監測並升級處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Hyperkalemia can cause life-threatening dysrhythmias.",
      "rationale_zh": "高血鉀可造成危及生命的心律不整。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_101",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_102",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_103",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_104",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_105",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_106",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with a tracheostomy has high-pitched noise and anxiety. The care plan also includes open flame nearby.",
      "case_zh": "一位氣切病人出現高音調聲音與焦慮。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on high-pitched noise and anxiety; apply open flame nearby if relevant.",
          "評估並處理高音調聲音與焦慮；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_107",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_108",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_109",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with head injury with increasing drowsiness and vomiting. What should the nurse do first?",
      "stem_zh": "護理師照護一位頭部外傷病人，出現嗜睡加重與嘔吐。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess neurologic status and escalate care.",
          "評估神經狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Worsening neurologic cues after head injury may indicate increased intracranial pressure.",
      "rationale_zh": "頭傷後神經線索惡化可能提示顱內壓升高。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_110",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_111",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_112",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_113",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_114",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_115",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client receiving anticoagulation has sudden severe headache and confusion. The care plan also includes aspiration prevention.",
      "case_zh": "一位接受抗凝治療的病人出現突然嚴重頭痛與混亂。照護計劃也包含預防誤吸。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on sudden severe headache and confusion; apply aspiration prevention if relevant.",
          "評估並處理突然嚴重頭痛與混亂；如相關則採取預防誤吸。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_116",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_117",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_118",
      "category": "prioritization",
      "stem": "The nurse is caring for a client after a fall with new hip pain and external rotation of the leg. What should the nurse do first?",
      "stem_zh": "護理師照護一位跌倒後病人，出現新發髖部疼痛且腿部外旋。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Keep the client still and assess neurovascular status.",
          "保持病人不動並評估神經血管狀態。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The cues may indicate fracture; movement can worsen injury.",
      "rationale_zh": "這些線索可能提示骨折，移動可能加重傷害。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_119",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_120",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for pressure injury prevention when the issue is immobility?",
      "stem_zh": "當問題是不能活動時，對於壓傷預防哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Reposition regularly and protect skin integrity.",
          "定期翻身並保護皮膚完整性。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure.",
      "rationale_zh": "定期翻身可減少長時間受壓。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_121",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_122",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_123",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_124",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client receiving a blood transfusion has chills, fever and back pain. The care plan also includes exposure response.",
      "case_zh": "一位輸血中病人出現寒顫、發燒與背痛。照護計劃也包含暴露處理。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on chills, fever and back pain; apply exposure response if relevant.",
          "評估並處理寒顫、發燒與背痛；如相關則採取暴露處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_125",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_126",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_127",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with vomiting and diarrhea with dizziness and poor skin turgor. What should the nurse do first?",
      "stem_zh": "護理師照護一位嘔吐腹瀉病人，出現頭暈且皮膚彈性差。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess hydration status and vital signs.",
          "評估水合狀態與生命徵象。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fluid loss can cause dehydration and perfusion problems.",
      "rationale_zh": "體液流失可造成脫水和灌流問題。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_128",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_129",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for C. difficile infection when the issue is contact precautions and soap-and-water hand hygiene?",
      "stem_zh": "當問題是接觸隔離與肥皂水洗手時，對於C. difficile 感染哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Use contact precautions and soap-and-water hand hygiene.",
          "使用接觸隔離並用肥皂水洗手。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile spores are not reliably removed by alcohol rub alone.",
      "rationale_zh": "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_130",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_131",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_132",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_133",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with possible stroke has new facial droop and slurred speech. The care plan also includes immobility.",
      "case_zh": "一位疑似中風病人出現新發臉歪與言語含糊。照護計劃也包含不能活動。",
      "options": [
        [
          "A",
          "Assess and act on new facial droop and slurred speech; apply immobility if relevant.",
          "評估並處理新發臉歪與言語含糊；如相關則採取不能活動。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_134",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_135",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_136",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with abdominal pain with rigid abdomen and hypotension. What should the nurse do first?",
      "stem_zh": "護理師照護一位腹痛病人，出現腹部僵硬且低血壓。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Assess circulation and escalate care immediately.",
          "評估循環並立即升級處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Rigid abdomen with hypotension suggests acute instability.",
      "rationale_zh": "腹部僵硬合併低血壓提示急性不穩定。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_137",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_138",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for airborne infection concern when the issue is negative-pressure room as available?",
      "stem_zh": "當問題是可用時負壓房時，對於空氣傳播感染風險哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Place the client in airborne precautions according to protocol.",
          "按流程安排空氣隔離。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Airborne precautions generally require special room ventilation.",
      "rationale_zh": "空氣隔離通常需要特殊通風安排。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_139",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_140",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_141",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_142",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with COPD has increasing work of breathing and restlessness. The care plan also includes contact precautions and soap-and-water hand hygiene.",
      "case_zh": "一位COPD 病人出現呼吸做功增加且不安。照護計劃也包含接觸隔離與肥皂水洗手。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on increasing work of breathing and restlessness; apply contact precautions and soap-and-water hand hygiene if relevant.",
          "評估並處理呼吸做功增加且不安；如相關則採取接觸隔離與肥皂水洗手。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_143",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_144",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_145",
      "category": "prioritization",
      "stem": "The nurse is caring for a postoperative client with new shortness of breath and oxygen saturation 88%. What should the nurse do first?",
      "stem_zh": "護理師照護一位術後病人，出現新發呼吸困難且血氧 88%。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess respiratory status and escalate care.",
          "評估呼吸狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "New dyspnea with low oxygen saturation is an immediate breathing concern.",
      "rationale_zh": "新發呼吸困難合併低血氧是立即的 breathing 風險。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_146",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_147",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_148",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_149",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO30_150",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    }
  ]
}

```


---

## File: app-content/question_bank_expansion_50.json

```json
{
  "version": "0.6",
  "status": "300-item expanded bilingual beta practice pool for editorial and nursing review",
  "disclaimer": "Independent educational practice items. Not official NCLEX questions and not copied from any commercial QBank. Generated expansion items require RN/nursing educator review before public release.",
  "items": [
    {
      "id": "P007",
      "category": "prioritization",
      "stem": "A client with a tracheostomy is making a high-pitched noise and appears anxious. What should the nurse do first?",
      "stem_zh": "氣切病人發出高音調聲音並顯得焦慮。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess airway patency.",
          "評估呼吸道通暢。"
        ],
        [
          "B",
          "Offer a writing board.",
          "提供書寫板。"
        ],
        [
          "C",
          "Document anxiety.",
          "記錄焦慮。"
        ],
        [
          "D",
          "Call dietary services.",
          "聯絡膳食部門。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "A high-pitched noise with anxiety may indicate airway obstruction. Airway assessment is priority.",
      "rationale_zh": "高音調聲音合併焦慮可能提示呼吸道阻塞，優先評估 airway。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ]
    },
    {
      "id": "P008",
      "category": "prioritization",
      "stem": "Which client should the nurse assess first on a medical unit?",
      "stem_zh": "內科病房中護理師應先評估哪位病人？",
      "options": [
        [
          "A",
          "A client with potassium 2.8 mEq/L and muscle cramps.",
          "鉀 2.8 mEq/L 且肌肉抽筋的病人。"
        ],
        [
          "B",
          "A client requesting a second pillow.",
          "要求第二個枕頭的病人。"
        ],
        [
          "C",
          "A client asking about visiting hours.",
          "詢問探視時間的病人。"
        ],
        [
          "D",
          "A client with dry skin requesting lotion.",
          "皮膚乾燥要求乳液的病人。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Severe hypokalemia can cause dysrhythmias and requires prompt assessment.",
      "rationale_zh": "嚴重低血鉀可造成心律不整，需要及時評估。",
      "wrong_tags": [
        "knowledge_gap",
        "prioritization"
      ]
    },
    {
      "id": "P009",
      "category": "prioritization",
      "stem": "A client with a head injury becomes increasingly drowsy and vomits. What is the priority?",
      "stem_zh": "頭部外傷病人越來越嗜睡並嘔吐。優先處理是？",
      "options": [
        [
          "A",
          "Assess neurological status and escalate care.",
          "評估神經狀態並升級處理。"
        ],
        [
          "B",
          "Offer clear fluids.",
          "提供清流質。"
        ],
        [
          "C",
          "Encourage sleep.",
          "鼓勵睡覺。"
        ],
        [
          "D",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Worsening drowsiness and vomiting after head injury may indicate increased intracranial pressure.",
      "rationale_zh": "頭傷後嗜睡加重和嘔吐可能提示顱內壓升高。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "P010",
      "category": "prioritization",
      "stem": "Which postoperative finding requires immediate follow-up?",
      "stem_zh": "術後哪個發現需要立即追蹤？",
      "options": [
        [
          "A",
          "Urine output 15 mL/hr for 2 hours.",
          "尿量連續 2 小時每小時 15 mL。"
        ],
        [
          "B",
          "Incisional pain 3/10 after analgesia.",
          "止痛後切口疼痛 3/10。"
        ],
        [
          "C",
          "Mild thirst.",
          "輕微口渴。"
        ],
        [
          "D",
          "Requests family visit.",
          "要求家屬探視。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Low urine output may indicate poor perfusion or fluid imbalance and requires prompt follow-up.",
      "rationale_zh": "尿量低可能提示灌流不足或液體失衡，需要及時追蹤。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "D005",
      "category": "delegation_scope",
      "stem": "Which task should the RN keep rather than delegate?",
      "stem_zh": "哪項任務應由 RN 保留而不是委派？",
      "options": [
        [
          "A",
          "Initial assessment of a newly admitted client.",
          "新入院病人的初始評估。"
        ],
        [
          "B",
          "Obtaining a stable client's weight.",
          "測量穩定病人體重。"
        ],
        [
          "C",
          "Assisting with routine feeding.",
          "協助例行進食。"
        ],
        [
          "D",
          "Transporting a stable client.",
          "運送穩定病人。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial assessment requires RN judgment and should not be delegated.",
      "rationale_zh": "初始評估需要 RN 判斷，不應委派。",
      "wrong_tags": [
        "delegation_scope"
      ]
    },
    {
      "id": "D006",
      "category": "delegation_scope",
      "stem": "The RN delegates vital signs to UAP. Which instruction is best?",
      "stem_zh": "RN 委派 UAP 量生命徵象。哪項指示最好？",
      "options": [
        [
          "A",
          "Report systolic blood pressure below 90 immediately.",
          "收縮壓低於 90 立即回報。"
        ],
        [
          "B",
          "Decide whether to hold medications.",
          "決定是否停藥。"
        ],
        [
          "C",
          "Assess the cause of fever.",
          "評估發燒原因。"
        ],
        [
          "D",
          "Teach the client about hypertension.",
          "教病人高血壓知識。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Delegated tasks should include clear reporting parameters. Medication decisions, assessment and teaching remain RN functions.",
      "rationale_zh": "委派任務應有明確回報標準；藥物決策、評估與教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope",
        "safety_infection"
      ]
    },
    {
      "id": "D007",
      "category": "delegation_scope",
      "stem": "Which client is most appropriate for an experienced LPN/LVN under RN supervision?",
      "stem_zh": "哪位病人最適合在 RN 監督下由有經驗 LPN/LVN 照護？",
      "options": [
        [
          "A",
          "A stable client receiving routine oral medications.",
          "穩定且需例行口服藥的病人。"
        ],
        [
          "B",
          "A client with sudden respiratory distress.",
          "突然呼吸窘迫的病人。"
        ],
        [
          "C",
          "A new admission requiring initial assessment.",
          "需要初始評估的新入院病人。"
        ],
        [
          "D",
          "A client requiring complex discharge teaching.",
          "需要複雜出院教學的病人。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Stable, predictable care is more appropriate than unstable assessment or complex teaching.",
      "rationale_zh": "穩定且可預期的照護較合適；不穩定評估和複雜教學不適合。",
      "wrong_tags": [
        "delegation_scope",
        "prioritization"
      ]
    },
    {
      "id": "D008",
      "category": "delegation_scope",
      "stem": "Which statement by UAP requires RN follow-up?",
      "stem_zh": "UAP 哪句話需要 RN 追蹤？",
      "options": [
        [
          "A",
          "I will report if the client becomes short of breath.",
          "如果病人呼吸困難我會回報。"
        ],
        [
          "B",
          "I will teach the client how to use the incentive spirometer.",
          "我會教病人使用 incentive spirometer。"
        ],
        [
          "C",
          "I will help the stable client bathe.",
          "我會協助穩定病人洗澡。"
        ],
        [
          "D",
          "I will record the intake amount.",
          "我會記錄攝入量。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Teaching requires RN responsibility and should not be performed by UAP.",
      "rationale_zh": "教學屬 RN 職責，不應由 UAP 執行。",
      "wrong_tags": [
        "delegation_scope",
        "english_wording"
      ]
    },
    {
      "id": "PH009",
      "category": "pharmacology",
      "stem": "A client taking spironolactone asks about diet. Which food should the nurse caution about?",
      "stem_zh": "服用 spironolactone 的病人詢問飲食。護理師應提醒哪類食物？",
      "options": [
        [
          "A",
          "High-potassium foods.",
          "高鉀食物。"
        ],
        [
          "B",
          "Low-fiber foods.",
          "低纖食物。"
        ],
        [
          "C",
          "Foods with vitamin C.",
          "含維生素 C 食物。"
        ],
        [
          "D",
          "Dairy products only.",
          "僅乳製品。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Spironolactone is potassium-sparing; excessive potassium intake may increase hyperkalemia risk.",
      "rationale_zh": "Spironolactone 保鉀，過多鉀攝入可能增加高血鉀風險。",
      "wrong_tags": [
        "knowledge_gap",
        "pharmacology"
      ]
    },
    {
      "id": "PH010",
      "category": "pharmacology",
      "stem": "Which finding should the nurse monitor for a client taking gentamicin?",
      "stem_zh": "使用 gentamicin 的病人應監測哪項發現？",
      "options": [
        [
          "A",
          "Hearing changes.",
          "聽力變化。"
        ],
        [
          "B",
          "Increased appetite.",
          "食慾增加。"
        ],
        [
          "C",
          "Hair growth.",
          "毛髮增長。"
        ],
        [
          "D",
          "Improved sleep.",
          "睡眠改善。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides such as gentamicin can be associated with ototoxicity and nephrotoxicity.",
      "rationale_zh": "Gentamicin 等 aminoglycoside 可能與耳毒性和腎毒性相關。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition"
      ]
    },
    {
      "id": "PH011",
      "category": "pharmacology",
      "stem": "Which client statement about metformin requires follow-up before a contrast study?",
      "stem_zh": "使用 metformin 的病人在造影檢查前哪句話需要追蹤？",
      "options": [
        [
          "A",
          "I take metformin for diabetes.",
          "我因糖尿病服用 metformin。"
        ],
        [
          "B",
          "I will bring my medication list.",
          "我會帶藥物清單。"
        ],
        [
          "C",
          "I will report kidney problems.",
          "我會回報腎臟問題。"
        ],
        [
          "D",
          "I understand my provider may give special instructions.",
          "我知道醫師/團隊可能有特別指示。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Metformin use around contrast studies may require provider instructions due to kidney/lactic acidosis concerns.",
      "rationale_zh": "Metformin 在造影檢查前後可能需特殊指示，涉及腎功能/乳酸酸中毒風險。",
      "wrong_tags": [
        "knowledge_gap",
        "safety_infection"
      ]
    },
    {
      "id": "PH012",
      "category": "pharmacology",
      "stem": "A client taking lithium reports vomiting, diarrhea and tremor. What should the nurse suspect?",
      "stem_zh": "服用 lithium 的病人回報嘔吐、腹瀉和顫抖。護理師應懷疑什麼？",
      "options": [
        [
          "A",
          "Lithium toxicity.",
          "Lithium 中毒。"
        ],
        [
          "B",
          "Expected improvement.",
          "預期改善。"
        ],
        [
          "C",
          "Low risk finding.",
          "低風險發現。"
        ],
        [
          "D",
          "Need for extra salt restriction only.",
          "只需額外限鹽。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Gastrointestinal symptoms and tremor may indicate lithium toxicity and require prompt follow-up.",
      "rationale_zh": "胃腸症狀與顫抖可能提示 lithium 中毒，需要及時追蹤。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "S007",
      "category": "safety_infection",
      "stem": "Which room assignment is best for a client requiring airborne precautions?",
      "stem_zh": "需要空氣隔離的病人最適合哪種房間？",
      "options": [
        [
          "A",
          "Negative-pressure private room as available.",
          "可用時安排負壓單人房。"
        ],
        [
          "B",
          "Shared room with any stable client.",
          "與任何穩定病人共用房。"
        ],
        [
          "C",
          "Room near cafeteria.",
          "靠近餐廳房間。"
        ],
        [
          "D",
          "No specific room needed.",
          "不需特定房間。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Airborne precautions commonly require a negative-pressure room according to facility protocol.",
      "rationale_zh": "空氣隔離通常需按機構流程安排負壓房。",
      "wrong_tags": [
        "safety_infection",
        "knowledge_gap"
      ]
    },
    {
      "id": "S008",
      "category": "safety_infection",
      "stem": "A confused client pulls at IV tubing. Which action is best first?",
      "stem_zh": "混亂病人拉扯 IV 管路。最先合適的行動是？",
      "options": [
        [
          "A",
          "Assess causes and use least restrictive safety measures.",
          "評估原因並使用限制最少的安全措施。"
        ],
        [
          "B",
          "Apply restraints immediately without assessment.",
          "未評估立即約束。"
        ],
        [
          "C",
          "Ignore the behavior.",
          "忽略行為。"
        ],
        [
          "D",
          "Remove the call light.",
          "移除呼叫鈴。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Safety care should assess causes and use least restrictive interventions before restraints unless immediate danger requires otherwise.",
      "rationale_zh": "安全處理應先評估原因並採用限制最少措施，除非有立即危險。",
      "wrong_tags": [
        "safety_infection",
        "prioritization"
      ]
    },
    {
      "id": "S009",
      "category": "safety_infection",
      "stem": "Which action is best when a client begins to have a seizure in bed?",
      "stem_zh": "病人在床上開始抽搐時，哪項最合適？",
      "options": [
        [
          "A",
          "Protect the client from injury and turn to side if possible.",
          "保護病人免受傷並可行時側臥。"
        ],
        [
          "B",
          "Put a spoon in the client's mouth.",
          "把湯匙放進病人口中。"
        ],
        [
          "C",
          "Hold the client down firmly.",
          "用力壓住病人。"
        ],
        [
          "D",
          "Leave to find family first.",
          "先離開去找家屬。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Seizure safety focuses on injury prevention, airway support and not placing objects in the mouth.",
      "rationale_zh": "癲癇安全重點是防傷、支持 airway，不把物品放入口中。",
      "wrong_tags": [
        "safety_infection",
        "knowledge_gap"
      ]
    },
    {
      "id": "S010",
      "category": "safety_infection",
      "stem": "Which action supports oxygen safety at home?",
      "stem_zh": "哪項支持居家氧氣安全？",
      "options": [
        [
          "A",
          "Keep oxygen away from open flames.",
          "讓氧氣遠離明火。"
        ],
        [
          "B",
          "Smoke near oxygen if window is open.",
          "窗戶打開即可在氧氣旁吸菸。"
        ],
        [
          "C",
          "Use petroleum jelly near oxygen tubing.",
          "在氧氣管附近使用凡士林。"
        ],
        [
          "D",
          "Store oxygen beside a heater.",
          "把氧氣放在暖爐旁。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion; keep it away from flames and heat sources.",
      "rationale_zh": "氧氣助燃，應遠離火源與熱源。",
      "wrong_tags": [
        "safety_infection",
        "english_wording"
      ]
    },
    {
      "id": "MC005",
      "category": "maternal_child",
      "stem": "A newborn is jittery and has poor feeding. Which assessment is priority?",
      "stem_zh": "新生兒顫抖且餵食差。優先評估是？",
      "options": [
        [
          "A",
          "Blood glucose.",
          "血糖。"
        ],
        [
          "B",
          "Hair color.",
          "髮色。"
        ],
        [
          "C",
          "Parent preference for clothing.",
          "家長衣物偏好。"
        ],
        [
          "D",
          "Room decoration.",
          "房間裝飾。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Jitteriness and poor feeding may indicate hypoglycemia in a newborn.",
      "rationale_zh": "新生兒顫抖和餵食差可能提示低血糖。",
      "wrong_tags": [
        "maternal_child",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "MC006",
      "category": "maternal_child",
      "stem": "Which postpartum finding should the nurse report promptly?",
      "stem_zh": "產後哪個發現應及時回報？",
      "options": [
        [
          "A",
          "Saturating a perineal pad in 15 minutes.",
          "15 分鐘浸透一片產墊。"
        ],
        [
          "B",
          "Mild afterpains while breastfeeding.",
          "哺乳時輕微宮縮痛。"
        ],
        [
          "C",
          "Fatigue after visitors leave.",
          "訪客離開後疲倦。"
        ],
        [
          "D",
          "Moderate thirst.",
          "中等口渴。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Rapid pad saturation suggests excessive bleeding and requires prompt action.",
      "rationale_zh": "產墊快速浸透提示出血過多，需要及時處理。",
      "wrong_tags": [
        "maternal_child",
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "MC007",
      "category": "maternal_child",
      "stem": "A laboring client has recurrent late decelerations. Which action is appropriate?",
      "stem_zh": "產程中胎心反覆 late decelerations。哪項行動合適？",
      "options": [
        [
          "A",
          "Reposition the client and notify the provider per protocol.",
          "協助變換體位並按流程通知醫師/團隊。"
        ],
        [
          "B",
          "Encourage pushing regardless of dilation.",
          "不管開指情況鼓勵用力。"
        ],
        [
          "C",
          "Ignore if the mother feels well.",
          "若產婦感覺良好就忽略。"
        ],
        [
          "D",
          "Offer routine discharge teaching.",
          "提供例行出院教學。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Late decelerations may indicate uteroplacental insufficiency and require intrauterine resuscitation actions and escalation.",
      "rationale_zh": "Late decelerations 可能提示子宮胎盤供血不足，需要相應處理和升級通報。",
      "wrong_tags": [
        "maternal_child",
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "MC008",
      "category": "maternal_child",
      "stem": "Which instruction is important for a parent placing an infant to sleep?",
      "stem_zh": "家長安置嬰兒睡眠時哪項指導重要？",
      "options": [
        [
          "A",
          "Place the infant on the back to sleep.",
          "讓嬰兒仰睡。"
        ],
        [
          "B",
          "Use loose blankets around the face.",
          "臉周圍放鬆散毯子。"
        ],
        [
          "C",
          "Place pillows in the crib.",
          "嬰兒床放枕頭。"
        ],
        [
          "D",
          "Use prone position routinely.",
          "例行趴睡。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Back-to-sleep positioning reduces sleep-related infant risk.",
      "rationale_zh": "仰睡可降低嬰兒睡眠相關風險。",
      "wrong_tags": [
        "maternal_child",
        "safety_infection"
      ]
    },
    {
      "id": "MH006",
      "category": "therapeutic_communication",
      "stem": "A client says, 'I am angry that no one listens.' Which response is best?",
      "stem_zh": "病人說：『我很生氣，沒有人聽我說。』最佳回應是？",
      "options": [
        [
          "A",
          "Calm down first.",
          "你先冷靜。"
        ],
        [
          "B",
          "I can see you are angry. Tell me what happened.",
          "我看得出你很生氣，告訴我發生了什麼。"
        ],
        [
          "C",
          "There is no reason to be angry.",
          "沒有理由生氣。"
        ],
        [
          "D",
          "Other clients have worse problems.",
          "其他病人問題更嚴重。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The response acknowledges emotion and invites expression.",
      "rationale_zh": "此回應承認情緒並邀請表達。",
      "wrong_tags": [
        "therapeutic_communication"
      ]
    },
    {
      "id": "MH007",
      "category": "therapeutic_communication",
      "stem": "Which response is best for a client expressing fear before a procedure?",
      "stem_zh": "病人在操作前表達恐懼，哪個回應最佳？",
      "options": [
        [
          "A",
          "Tell me what you understand about the procedure.",
          "告訴我你對這個操作的理解。"
        ],
        [
          "B",
          "It is not scary.",
          "這不可怕。"
        ],
        [
          "C",
          "Everyone does fine.",
          "每個人都沒事。"
        ],
        [
          "D",
          "Do not ask questions now.",
          "現在不要問問題。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Assessing understanding helps identify concerns and supports teaching.",
      "rationale_zh": "評估理解有助於找出擔憂並支持教學。",
      "wrong_tags": [
        "therapeutic_communication",
        "english_wording"
      ]
    },
    {
      "id": "MH008",
      "category": "therapeutic_communication",
      "stem": "A client with panic reports feeling unable to breathe. Which action is best?",
      "stem_zh": "恐慌病人表示覺得無法呼吸。哪項行動最佳？",
      "options": [
        [
          "A",
          "Stay with the client and speak in a calm, simple manner.",
          "陪伴病人並用平靜簡短語言說話。"
        ],
        [
          "B",
          "Tell the client to stop overreacting.",
          "告訴病人不要反應過度。"
        ],
        [
          "C",
          "Leave the client alone to calm down.",
          "讓病人獨自冷靜。"
        ],
        [
          "D",
          "Use complex explanations.",
          "使用複雜解釋。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Presence and calm simple communication support safety during panic.",
      "rationale_zh": "陪伴與簡短平靜溝通有助於恐慌時的安全。",
      "wrong_tags": [
        "therapeutic_communication",
        "safety_infection"
      ]
    },
    {
      "id": "MH009",
      "category": "therapeutic_communication",
      "stem": "A client refuses medication and says, 'You are trying to poison me.' Which response is most therapeutic?",
      "stem_zh": "病人拒藥並說：『你們想毒害我。』哪個回應最具治療性？",
      "options": [
        [
          "A",
          "That is ridiculous.",
          "這太荒謬了。"
        ],
        [
          "B",
          "I am not trying to poison you. Tell me what worries you about the medication.",
          "我不是要毒害你。告訴我你對藥物擔心什麼。"
        ],
        [
          "C",
          "Take it or you cannot eat.",
          "不吃藥就不能吃飯。"
        ],
        [
          "D",
          "Your belief is completely false.",
          "你的想法完全錯誤。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The response does not argue with the belief and explores the client's concern.",
      "rationale_zh": "此回應不與信念爭辯，並探索病人擔憂。",
      "wrong_tags": [
        "therapeutic_communication"
      ]
    },
    {
      "id": "NGN005",
      "category": "ngn",
      "stem": "Which cues suggest fluid volume overload? Select all that apply.",
      "stem_zh": "哪些線索提示液體負荷過多？可多選。",
      "options": [
        [
          "A",
          "Crackles in lungs.",
          "肺部 crackles。"
        ],
        [
          "B",
          "Sudden weight gain.",
          "體重突然增加。"
        ],
        [
          "C",
          "Peripheral edema.",
          "周邊水腫。"
        ],
        [
          "D",
          "Dry mucous membranes only.",
          "僅黏膜乾燥。"
        ]
      ],
      "answer": [
        "A",
        "B",
        "C"
      ],
      "rationale": "Crackles, sudden weight gain and edema are consistent with fluid overload.",
      "rationale_zh": "肺部 crackles、體重突然增加與水腫符合液體負荷過多。",
      "wrong_tags": [
        "cue_recognition",
        "knowledge_gap"
      ]
    },
    {
      "id": "NGN006",
      "category": "ngn",
      "stem": "Which findings indicate possible hypoglycemia? Select all that apply.",
      "stem_zh": "哪些發現提示可能低血糖？可多選。",
      "options": [
        [
          "A",
          "Sweating.",
          "出汗。"
        ],
        [
          "B",
          "Trembling.",
          "顫抖。"
        ],
        [
          "C",
          "Confusion.",
          "混亂。"
        ],
        [
          "D",
          "Warm dry skin with fruity breath only.",
          "只有皮膚溫暖乾燥且水果味呼吸。"
        ]
      ],
      "answer": [
        "A",
        "B",
        "C"
      ],
      "rationale": "Sweating, trembling and confusion are common hypoglycemia cues.",
      "rationale_zh": "出汗、顫抖和混亂是常見低血糖線索。",
      "wrong_tags": [
        "cue_recognition",
        "knowledge_gap"
      ]
    },
    {
      "id": "NGN007",
      "category": "ngn",
      "stem": "Which actions are appropriate for a client with suspected stroke symptoms? Select all that apply.",
      "stem_zh": "疑似中風症狀病人，哪些行動合適？可多選。",
      "options": [
        [
          "A",
          "Note the time symptoms began.",
          "記錄症狀開始時間。"
        ],
        [
          "B",
          "Perform focused neurologic assessment.",
          "做重點神經評估。"
        ],
        [
          "C",
          "Delay care until family arrives.",
          "延後到家屬到達。"
        ],
        [
          "D",
          "Activate emergency/stroke protocol according to facility policy.",
          "按機構政策啟動急救/中風流程。"
        ]
      ],
      "answer": [
        "A",
        "B",
        "D"
      ],
      "rationale": "Stroke care requires time awareness, focused assessment and rapid protocol activation.",
      "rationale_zh": "中風照護需要掌握時間、重點評估並快速啟動流程。",
      "wrong_tags": [
        "prioritization",
        "safety_infection"
      ]
    },
    {
      "id": "NGN008",
      "category": "ngn",
      "stem": "Which cues are concerning in a client with possible pulmonary embolism? Select all that apply.",
      "stem_zh": "疑似肺栓塞病人哪些線索令人擔心？可多選。",
      "options": [
        [
          "A",
          "Sudden shortness of breath.",
          "突發呼吸困難。"
        ],
        [
          "B",
          "Chest pain with breathing.",
          "呼吸時胸痛。"
        ],
        [
          "C",
          "Oxygen saturation 86%.",
          "血氧 86%。"
        ],
        [
          "D",
          "Requests television remote.",
          "要求電視遙控器。"
        ]
      ],
      "answer": [
        "A",
        "B",
        "C"
      ],
      "rationale": "Sudden dyspnea, pleuritic chest pain and low oxygen saturation are concerning respiratory/perfusion cues.",
      "rationale_zh": "突發呼吸困難、呼吸性胸痛與低血氧提示呼吸/灌流風險。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "E005",
      "category": "english_wording",
      "stem": "When an option says 'notify the provider,' what should the learner check first?",
      "stem_zh": "選項寫 notify the provider 時，考生應先檢查什麼？",
      "options": [
        [
          "A",
          "Whether nursing assessment or immediate safety action is needed first.",
          "是否需先做護理評估或立即安全行動。"
        ],
        [
          "B",
          "Whether it is the longest option.",
          "是否最長。"
        ],
        [
          "C",
          "Whether it sounds dramatic.",
          "是否聽起來嚴重。"
        ],
        [
          "D",
          "Whether the family asked for it.",
          "是否家屬要求。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Notification may be correct, but the nurse often needs focused assessment or immediate safety intervention first.",
      "rationale_zh": "通知可能正確，但護理師常需先做重點評估或立即安全處理。",
      "wrong_tags": [
        "english_wording",
        "prioritization"
      ]
    },
    {
      "id": "E006",
      "category": "english_wording",
      "stem": "The phrase 'requires immediate intervention' most closely means:",
      "stem_zh": "requires immediate intervention 最接近的意思是：",
      "options": [
        [
          "A",
          "Needs action now to prevent harm.",
          "需要現在行動以防傷害。"
        ],
        [
          "B",
          "Can wait until discharge.",
          "可等到出院。"
        ],
        [
          "C",
          "Is only a documentation issue.",
          "只是記錄問題。"
        ],
        [
          "D",
          "Is always psychosocial only.",
          "永遠只是心理社會問題。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Immediate intervention means prompt action is needed for safety or clinical risk.",
      "rationale_zh": "Immediate intervention 表示因安全或臨床風險需要及時處理。",
      "wrong_tags": [
        "english_wording"
      ]
    },
    {
      "id": "OS004",
      "category": "osce_transition",
      "stem": "Which phrase best explains a pain assessment?",
      "stem_zh": "哪句話最能解釋疼痛評估？",
      "options": [
        [
          "A",
          "I need you to pick a number because the form says so.",
          "表格要求，所以你選數字。"
        ],
        [
          "B",
          "Can you rate your pain from 0 to 10, where 0 is no pain and 10 is the worst pain?",
          "請用 0 到 10 評分你的疼痛，0 是不痛，10 是最嚴重。"
        ],
        [
          "C",
          "Pain is not important right now.",
          "疼痛現在不重要。"
        ],
        [
          "D",
          "Your pain score should be low.",
          "你的疼痛分數應該低。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The phrase is clear, patient-centered and clinically useful.",
      "rationale_zh": "此句清楚、以病人為中心且具臨床用途。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ]
    },
    {
      "id": "OS005",
      "category": "osce_transition",
      "stem": "Which phrase best shows escalation using objective data?",
      "stem_zh": "哪句話最能用客觀資料做升級通報？",
      "options": [
        [
          "A",
          "The client looks bad.",
          "病人看起來不好。"
        ],
        [
          "B",
          "The family is nervous.",
          "家屬很緊張。"
        ],
        [
          "C",
          "The blood pressure is 88/54 and the heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "D",
          "I just feel worried.",
          "我只是覺得擔心。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Objective vital-sign data makes escalation clearer and safer.",
      "rationale_zh": "客觀生命徵象讓升級通報更清楚且安全。",
      "wrong_tags": [
        "osce_transition",
        "cue_recognition"
      ]
    },
    {
      "id": "T004",
      "category": "test_strategy",
      "stem": "Which approach is best after missing multiple pharmacology questions?",
      "stem_zh": "連續錯多道藥理題後，哪種方法最好？",
      "options": [
        [
          "A",
          "Create class-based medication cards.",
          "建立按藥物類別整理的卡片。"
        ],
        [
          "B",
          "Stop studying pharmacology.",
          "停止學藥理。"
        ],
        [
          "C",
          "Memorize only one drug name.",
          "只背一個藥名。"
        ],
        [
          "D",
          "Switch resources every hour.",
          "每小時換資源。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Class-based medication cards help organize purpose, risks, monitoring and teaching.",
      "rationale_zh": "按類別整理藥卡有助於組織用途、風險、監測與教學。",
      "wrong_tags": [
        "test_strategy",
        "knowledge_gap"
      ]
    },
    {
      "id": "T005",
      "category": "test_strategy",
      "stem": "Which behavior best supports timed-practice improvement?",
      "stem_zh": "哪種行為最能支持限時練習進步？",
      "options": [
        [
          "A",
          "Review why each wrong option was tempting.",
          "複盤每個錯誤選項為何有誘惑性。"
        ],
        [
          "B",
          "Only celebrate the score.",
          "只看分數。"
        ],
        [
          "C",
          "Skip all questions with long stems.",
          "跳過所有長題幹。"
        ],
        [
          "D",
          "Translate every word in the final week.",
          "最後一週逐字翻譯每個詞。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Understanding distractors improves reasoning and reduces repeat mistakes.",
      "rationale_zh": "理解干擾選項能提升推理並減少重複錯誤。",
      "wrong_tags": [
        "test_strategy"
      ]
    },
    {
      "id": "MIX004",
      "category": "mixed_review",
      "stem": "Which client with abdominal pain should be assessed first?",
      "stem_zh": "腹痛病人中哪位應先評估？",
      "options": [
        [
          "A",
          "A client with rigid abdomen and hypotension.",
          "腹部僵硬且低血壓的病人。"
        ],
        [
          "B",
          "A client with mild gas after eating beans.",
          "吃豆後輕微脹氣病人。"
        ],
        [
          "C",
          "A client asking for antacid refill.",
          "要求補充制酸劑的病人。"
        ],
        [
          "D",
          "A client with chronic constipation asking about fiber.",
          "慢性便秘病人詢問纖維。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Rigid abdomen with hypotension suggests possible acute abdomen/perfusion concern.",
      "rationale_zh": "腹部僵硬合併低血壓提示可能急腹症/灌流風險。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "MIX005",
      "category": "mixed_review",
      "stem": "Which discharge statement after heart failure teaching requires further teaching?",
      "stem_zh": "心衰出院教學後哪句話表示需要進一步教學？",
      "options": [
        [
          "A",
          "I will weigh myself daily.",
          "我會每天量體重。"
        ],
        [
          "B",
          "I will call if I gain weight suddenly.",
          "如果體重突然增加我會聯絡。"
        ],
        [
          "C",
          "I can stop my medication when swelling improves.",
          "水腫改善後我可以停藥。"
        ],
        [
          "D",
          "I will follow the sodium plan.",
          "我會遵守鈉攝入計劃。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Stopping medication without provider guidance shows misunderstanding.",
      "rationale_zh": "未經指示自行停藥表示理解錯誤。",
      "wrong_tags": [
        "english_wording",
        "knowledge_gap"
      ]
    },
    {
      "id": "MIX006",
      "category": "mixed_review",
      "stem": "Which client with chest discomfort requires immediate assessment?",
      "stem_zh": "胸部不適病人中哪位需要立即評估？",
      "options": [
        [
          "A",
          "Chest pressure with sweating and nausea.",
          "胸部壓迫感合併出汗和噁心。"
        ],
        [
          "B",
          "Brief discomfort after spicy food now resolved.",
          "辛辣食物後短暫不適現已緩解。"
        ],
        [
          "C",
          "Muscle soreness after exercise yesterday.",
          "昨天運動後肌肉痠痛。"
        ],
        [
          "D",
          "Requests information about cholesterol.",
          "詢問膽固醇資訊。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Chest pressure with diaphoresis and nausea may indicate acute coronary syndrome.",
      "rationale_zh": "胸部壓迫感合併出汗和噁心可能提示急性冠脈綜合徵。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "MIX007",
      "category": "mixed_review",
      "stem": "Which finding in a client with diabetes requires immediate action?",
      "stem_zh": "糖尿病病人哪個發現需要立即處理？",
      "options": [
        [
          "A",
          "Blood glucose 48 mg/dL with confusion.",
          "血糖 48 mg/dL 且混亂。"
        ],
        [
          "B",
          "Asks about foot care.",
          "詢問足部照護。"
        ],
        [
          "C",
          "Requests meal plan copy.",
          "要求飲食計劃副本。"
        ],
        [
          "D",
          "Reports mild thirst after exercise.",
          "運動後輕微口渴。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Symptomatic hypoglycemia requires immediate treatment.",
      "rationale_zh": "有症狀低血糖需要立即處理。",
      "wrong_tags": [
        "knowledge_gap",
        "prioritization"
      ]
    },
    {
      "id": "P011",
      "category": "prioritization",
      "stem": "A client after hip replacement reports sudden shortness of breath and chest pain. What is priority?",
      "stem_zh": "髖關節置換術後病人突發呼吸困難和胸痛。優先是？",
      "options": [
        [
          "A",
          "Assess respiratory status and escalate care.",
          "評估呼吸狀態並升級處理。"
        ],
        [
          "B",
          "Encourage ambulation.",
          "鼓勵行走。"
        ],
        [
          "C",
          "Provide routine pain teaching.",
          "提供例行疼痛教學。"
        ],
        [
          "D",
          "Offer a snack.",
          "提供點心。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Postoperative sudden dyspnea and chest pain may suggest pulmonary embolism and require urgent assessment.",
      "rationale_zh": "術後突發呼吸困難和胸痛可能提示肺栓塞，需要緊急評估。",
      "wrong_tags": [
        "cue_recognition",
        "prioritization"
      ]
    },
    {
      "id": "P012",
      "category": "prioritization",
      "stem": "A client with a new arteriovenous fistula has no bruit or thrill. What should the nurse do?",
      "stem_zh": "新建動靜脈瘻病人聽不到 bruit、摸不到 thrill。護理師應怎麼做？",
      "options": [
        [
          "A",
          "Notify the provider promptly.",
          "及時通知醫師/團隊。"
        ],
        [
          "B",
          "Take blood pressure on that arm.",
          "在該手臂量血壓。"
        ],
        [
          "C",
          "Apply tight compression.",
          "施加緊壓。"
        ],
        [
          "D",
          "Document as expected.",
          "記錄為預期。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Absence of bruit/thrill may indicate fistula occlusion and requires prompt follow-up. Protect the fistula arm: do not use it for blood pressure, venepuncture or tight compression.",
      "rationale_zh": "bruit/thrill 消失可能提示瘻管阻塞，需要及時追蹤。保護瘻管側手臂：不要在該側量血壓、抽血/穿刺或施加緊壓。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition"
      ]
    },
    {
      "id": "PH013",
      "category": "pharmacology",
      "stem": "A client taking levothyroxine asks when to take it. Which instruction is best?",
      "stem_zh": "服用 levothyroxine 的病人詢問何時服用。哪項指導最好？",
      "options": [
        [
          "A",
          "Take it consistently in the morning before breakfast as prescribed.",
          "按處方固定早晨早餐前服用。"
        ],
        [
          "B",
          "Take it only when tired.",
          "只在疲倦時服用。"
        ],
        [
          "C",
          "Stop when symptoms improve.",
          "症狀改善後停用。"
        ],
        [
          "D",
          "Take with all supplements together.",
          "與所有補充劑一起服用。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Levothyroxine is typically taken consistently before breakfast; consistency supports absorption and dosing.",
      "rationale_zh": "Levothyroxine 通常固定早餐前服用；固定方式有助於吸收與劑量穩定。",
      "wrong_tags": [
        "knowledge_gap"
      ]
    },
    {
      "id": "PH014",
      "category": "pharmacology",
      "stem": "Which finding suggests possible vancomycin infusion reaction?",
      "stem_zh": "哪個發現提示可能 vancomycin 輸注反應？",
      "options": [
        [
          "A",
          "Flushing and itching during infusion.",
          "輸注中潮紅與瘙癢。"
        ],
        [
          "B",
          "Improved appetite.",
          "食慾改善。"
        ],
        [
          "C",
          "Hair growth.",
          "毛髮增長。"
        ],
        [
          "D",
          "Clear urine only.",
          "只有尿液清澈。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Flushing and itching during vancomycin infusion may indicate infusion reaction and requires follow-up per protocol.",
      "rationale_zh": "Vancomycin 輸注中潮紅和瘙癢可能提示輸注反應，需按流程追蹤。",
      "wrong_tags": [
        "knowledge_gap",
        "cue_recognition"
      ]
    },
    {
      "id": "S011",
      "category": "safety_infection",
      "stem": "Which action is best after a needlestick injury?",
      "stem_zh": "針刺傷後哪項行動最佳？",
      "options": [
        [
          "A",
          "Wash the area and report according to protocol immediately.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "B",
          "Ignore it if there is no pain.",
          "無疼痛則忽略。"
        ],
        [
          "C",
          "Wait until the end of the week.",
          "等到週末。"
        ],
        [
          "D",
          "Cover it and tell no one.",
          "包紮但不告知。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Needlestick injuries require immediate first aid and reporting according to exposure protocol.",
      "rationale_zh": "針刺傷需要立即初步處理並按暴露流程報告。",
      "wrong_tags": [
        "safety_infection"
      ]
    },
    {
      "id": "S012",
      "category": "safety_infection",
      "stem": "Which intervention helps prevent pressure injury?",
      "stem_zh": "哪項干預有助於預防壓傷？",
      "options": [
        [
          "A",
          "Reposition an immobile client regularly.",
          "定期為不能活動病人翻身。"
        ],
        [
          "B",
          "Leave moisture on the skin.",
          "讓皮膚保持潮濕。"
        ],
        [
          "C",
          "Avoid nutrition assessment.",
          "避免營養評估。"
        ],
        [
          "D",
          "Keep wrinkles under the client.",
          "讓床單皺褶留在身下。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure and pressure-injury risk.",
      "rationale_zh": "定期翻身可減少長時間受壓與壓傷風險。",
      "wrong_tags": [
        "safety_infection"
      ]
    },
    {
      "id": "MC009",
      "category": "maternal_child",
      "stem": "Which newborn temperature requires nursing intervention?",
      "stem_zh": "哪個新生兒體溫需要護理處理？",
      "options": [
        [
          "A",
          "36.0 C with poor feeding.",
          "36.0 C 且餵食差。"
        ],
        [
          "B",
          "36.8 C with normal feeding.",
          "36.8 C 且餵食正常。"
        ],
        [
          "C",
          "37.0 C after skin-to-skin care.",
          "皮膚接觸照護後 37.0 C。"
        ],
        [
          "D",
          "36.9 C and sleeping calmly.",
          "36.9 C 且安睡。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Low temperature with poor feeding may indicate newborn instability and requires intervention.",
      "rationale_zh": "低體溫合併餵食差可能提示新生兒不穩定，需要處理。",
      "wrong_tags": [
        "maternal_child",
        "cue_recognition"
      ]
    },
    {
      "id": "MC010",
      "category": "maternal_child",
      "stem": "A parent asks when to seek help for an infant. Which statement indicates understanding?",
      "stem_zh": "家長詢問何時需為嬰兒求助。哪句話表示理解？",
      "options": [
        [
          "A",
          "I will seek help if the baby has difficulty breathing.",
          "如果寶寶呼吸困難我會求助。"
        ],
        [
          "B",
          "I will wait a week if the baby turns blue.",
          "如果寶寶發紫我會等一週。"
        ],
        [
          "C",
          "Poor feeding is never important.",
          "餵食差永遠不重要。"
        ],
        [
          "D",
          "Fever in a young infant can always wait.",
          "小嬰兒發燒永遠可以等。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Difficulty breathing is an urgent infant warning sign.",
      "rationale_zh": "呼吸困難是嬰兒緊急警訊。",
      "wrong_tags": [
        "maternal_child",
        "safety_infection"
      ]
    },
    {
      "id": "E007",
      "category": "english_wording",
      "stem": "The phrase 'no further action is needed' is safest only when:",
      "stem_zh": "no further action is needed 只有在什麼情況下才安全？",
      "options": [
        [
          "A",
          "The finding is expected and no safety concern exists.",
          "該發現可預期且無安全風險。"
        ],
        [
          "B",
          "The option is short.",
          "選項很短。"
        ],
        [
          "C",
          "The client is upset.",
          "病人不高興。"
        ],
        [
          "D",
          "The nurse is busy.",
          "護理師很忙。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "No further action is appropriate only when the finding is expected and safe.",
      "rationale_zh": "只有當發現可預期且安全時，才適合不需進一步行動。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ]
    },
    {
      "id": "T006",
      "category": "test_strategy",
      "stem": "Which review method is best for NGN case studies?",
      "stem_zh": "NGN case studies 最佳複習方法是？",
      "options": [
        [
          "A",
          "Write the key cues and why they matter.",
          "寫下關鍵線索及其重要性。"
        ],
        [
          "B",
          "Only memorize the final answer.",
          "只背最終答案。"
        ],
        [
          "C",
          "Skip long cases.",
          "跳過長病例。"
        ],
        [
          "D",
          "Read rationales without noting errors.",
          "看解析但不記錯因。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "NGN improvement depends on cue recognition and reasoning, not answer memorization only.",
      "rationale_zh": "NGN 進步取決於線索辨識和推理，而不只是背答案。",
      "wrong_tags": [
        "test_strategy",
        "cue_recognition"
      ]
    },
    {
      "id": "OS006",
      "category": "osce_transition",
      "stem": "Which phrase best asks permission before assessment?",
      "stem_zh": "評估前哪句話最能表達徵求同意？",
      "options": [
        [
          "A",
          "I am going to check your wound now; is that okay?",
          "我現在要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "I do not need to explain this.",
          "我不需要解釋。"
        ],
        [
          "C",
          "You have no choice.",
          "你沒有選擇。"
        ],
        [
          "D",
          "I will do it quickly without telling you.",
          "我不告訴你，快速做完。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity, consent and OSCE communication.",
      "rationale_zh": "徵求同意與解釋有助於尊嚴、同意與 OSCE 溝通。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ]
    },
    {
      "id": "MIX008",
      "category": "mixed_review",
      "stem": "Which client statement about antibiotics requires further teaching?",
      "stem_zh": "關於抗生素，病人哪句話表示需要進一步教學？",
      "options": [
        [
          "A",
          "I will finish the course as prescribed.",
          "我會按處方完成療程。"
        ],
        [
          "B",
          "I will report rash or breathing difficulty.",
          "若出現皮疹或呼吸困難我會回報。"
        ],
        [
          "C",
          "I can stop when I feel better after one day.",
          "一天後感覺好轉即可停藥。"
        ],
        [
          "D",
          "I will ask before taking other medications.",
          "服用其他藥前我會詢問。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Stopping antibiotics early can contribute to treatment failure and resistance concerns.",
      "rationale_zh": "過早停用抗生素可能導致治療失敗並增加耐藥風險。",
      "wrong_tags": [
        "knowledge_gap",
        "english_wording"
      ]
    },
    {
      "id": "AUTO50_001",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with asthma has wheezing and speaking in short phrases. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位哮喘病人出現喘鳴且只能短句說話。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on wheezing and speaking in short phrases; apply negative-pressure room as available if relevant.",
          "評估並處理喘鳴且只能短句說話；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_002",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_003",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_004",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with a tracheostomy with high-pitched noise and anxiety. What should the nurse do first?",
      "stem_zh": "護理師照護一位氣切病人，出現高音調聲音與焦慮。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess airway patency.",
          "評估呼吸道通暢。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A high-pitched sound can signal airway obstruction.",
      "rationale_zh": "高音調聲音可能提示呼吸道阻塞。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_005",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_006",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_007",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_008",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_009",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_010",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after thyroidectomy has tingling around the mouth and muscle twitching. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位甲狀腺切除後病人出現口周麻與肌肉抽動。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on tingling around the mouth and muscle twitching; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理口周麻與肌肉抽動；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_011",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_012",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_013",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving anticoagulation with sudden severe headache and confusion. What should the nurse do first?",
      "stem_zh": "護理師照護一位接受抗凝治療的病人，出現突然嚴重頭痛與混亂。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess for bleeding and notify the provider promptly.",
          "評估出血並及時通知醫師/團隊。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Neurologic change during anticoagulation may indicate serious bleeding.",
      "rationale_zh": "抗凝期間出現神經狀態變化可能提示嚴重出血。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_014",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_015",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_016",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_017",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_018",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_019",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chest pressure has diaphoresis and nausea. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位胸部壓迫感病人出現出汗與噁心。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on diaphoresis and nausea; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理出汗與噁心；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_020",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_021",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_022",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving a blood transfusion with chills, fever and back pain. What should the nurse do first?",
      "stem_zh": "護理師照護一位輸血中病人，出現寒顫、發燒與背痛。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Stop the transfusion and follow reaction protocol.",
          "停止輸血並按輸血反應流程處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "These findings may indicate a transfusion reaction.",
      "rationale_zh": "這些發現可能提示輸血反應。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_023",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_024",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_025",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_026",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_027",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_028",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with diabetes has confusion, sweating and trembling. The care plan also includes open flame nearby.",
      "case_zh": "一位糖尿病病人出現混亂、出汗與顫抖。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on confusion, sweating and trembling; apply open flame nearby if relevant.",
          "評估並處理混亂、出汗與顫抖；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_029",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_030",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_031",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with possible stroke with new facial droop and slurred speech. What should the nurse do first?",
      "stem_zh": "護理師照護一位疑似中風病人，出現新發臉歪與言語含糊。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Note time of onset and activate stroke protocol.",
          "記錄發作時間並啟動中風流程。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Stroke symptoms require rapid time-sensitive response.",
      "rationale_zh": "中風症狀需要快速且有時間敏感性的處理。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_032",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_033",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_034",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_035",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_036",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_037",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with infection has new confusion, fever and blood pressure 86/52. The care plan also includes aspiration prevention.",
      "case_zh": "一位感染病人出現新發混亂、發燒且血壓 86/52。照護計劃也包含預防誤吸。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on new confusion, fever and blood pressure 86/52; apply aspiration prevention if relevant.",
          "評估並處理新發混亂、發燒且血壓 86/52；如相關則採取預防誤吸。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_038",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_039",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_040",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with COPD with increasing work of breathing and restlessness. What should the nurse do first?",
      "stem_zh": "護理師照護一位COPD 病人，出現呼吸做功增加且不安。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess respiratory status first.",
          "先評估呼吸狀態。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Restlessness can be a cue of hypoxia or distress.",
      "rationale_zh": "不安可能是低氧或窘迫的線索。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_041",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_042",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for pressure injury prevention when the issue is immobility?",
      "stem_zh": "當問題是不能活動時，對於壓傷預防哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Reposition regularly and protect skin integrity.",
          "定期翻身並保護皮膚完整性。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure.",
      "rationale_zh": "定期翻身可減少長時間受壓。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_043",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_044",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_045",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_046",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chronic kidney disease has palpitations and potassium 6.3 mEq/L. The care plan also includes exposure response.",
      "case_zh": "一位慢性腎病病人出現心悸且鉀 6.3 mEq/L。照護計劃也包含暴露處理。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on palpitations and potassium 6.3 mEq/L; apply exposure response if relevant.",
          "評估並處理心悸且鉀 6.3 mEq/L；如相關則採取暴露處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_047",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_048",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_049",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with asthma with wheezing and speaking in short phrases. What should the nurse do first?",
      "stem_zh": "護理師照護一位哮喘病人，出現喘鳴且只能短句說話。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess breathing and administer prescribed rescue therapy per protocol.",
          "評估呼吸並按醫囑/流程給予急救治療。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Short phrases and wheezing indicate respiratory distress.",
      "rationale_zh": "只能短句說話與喘鳴提示呼吸窘迫。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_050",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_051",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for C. difficile infection when the issue is contact precautions and soap-and-water hand hygiene?",
      "stem_zh": "當問題是接觸隔離與肥皂水洗手時，對於C. difficile 感染哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Use contact precautions and soap-and-water hand hygiene.",
          "使用接觸隔離並用肥皂水洗手。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile spores are not reliably removed by alcohol rub alone.",
      "rationale_zh": "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_052",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_053",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_054",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_055",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with head injury has increasing drowsiness and vomiting. The care plan also includes immobility.",
      "case_zh": "一位頭部外傷病人出現嗜睡加重與嘔吐。照護計劃也包含不能活動。",
      "options": [
        [
          "A",
          "Assess and act on increasing drowsiness and vomiting; apply immobility if relevant.",
          "評估並處理嗜睡加重與嘔吐；如相關則採取不能活動。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_056",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_057",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_058",
      "category": "prioritization",
      "stem": "The nurse is caring for a client after thyroidectomy with tingling around the mouth and muscle twitching. What should the nurse do first?",
      "stem_zh": "護理師照護一位甲狀腺切除後病人，出現口周麻與肌肉抽動。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Assess for hypocalcemia and maintain airway readiness.",
          "評估低血鈣並保持 airway 準備。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Tingling and twitching can indicate hypocalcemia after thyroid surgery.",
      "rationale_zh": "甲狀腺術後口周麻和抽動可能提示低血鈣。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_059",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_060",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for airborne infection concern when the issue is negative-pressure room as available?",
      "stem_zh": "當問題是可用時負壓房時，對於空氣傳播感染風險哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Place the client in airborne precautions according to protocol.",
          "按流程安排空氣隔離。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Airborne precautions generally require special room ventilation.",
      "rationale_zh": "空氣隔離通常需要特殊通風安排。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_061",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_062",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_063",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_064",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after a fall has new hip pain and external rotation of the leg. The care plan also includes contact precautions and soap-and-water hand hygiene.",
      "case_zh": "一位跌倒後病人出現新發髖部疼痛且腿部外旋。照護計劃也包含接觸隔離與肥皂水洗手。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on new hip pain and external rotation of the leg; apply contact precautions and soap-and-water hand hygiene if relevant.",
          "評估並處理新發髖部疼痛且腿部外旋；如相關則採取接觸隔離與肥皂水洗手。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_065",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_066",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_067",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chest pressure with diaphoresis and nausea. What should the nurse do first?",
      "stem_zh": "護理師照護一位胸部壓迫感病人，出現出汗與噁心。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess cardiac status and obtain emergency help per protocol.",
          "評估心臟狀態並按流程尋求緊急協助。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Chest pressure with diaphoresis and nausea may indicate acute coronary syndrome.",
      "rationale_zh": "胸部壓迫感合併出汗和噁心可能提示急性冠脈綜合徵。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_068",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_069",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_070",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_071",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_072",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_073",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with vomiting and diarrhea has dizziness and poor skin turgor. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位嘔吐腹瀉病人出現頭暈且皮膚彈性差。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on dizziness and poor skin turgor; apply negative-pressure room as available if relevant.",
          "評估並處理頭暈且皮膚彈性差；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_074",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_075",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_076",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with diabetes with confusion, sweating and trembling. What should the nurse do first?",
      "stem_zh": "護理師照護一位糖尿病病人，出現混亂、出汗與顫抖。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Check the blood glucose level.",
          "檢查血糖。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "These cues suggest possible hypoglycemia and require immediate assessment.",
      "rationale_zh": "這些線索提示可能低血糖，需要立即評估。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_077",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_078",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_079",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_080",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_081",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_082",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with abdominal pain has rigid abdomen and hypotension. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位腹痛病人出現腹部僵硬且低血壓。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on rigid abdomen and hypotension; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理腹部僵硬且低血壓；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_083",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_084",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_085",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with infection with new confusion, fever and blood pressure 86/52. What should the nurse do first?",
      "stem_zh": "護理師照護一位感染病人，出現新發混亂、發燒且血壓 86/52。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess perfusion and activate sepsis response per protocol.",
          "評估灌流並按流程啟動敗血症處理。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Infection plus hypotension and mental-status change is concerning for sepsis.",
      "rationale_zh": "感染合併低血壓和意識變化令人擔心敗血症。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_086",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_087",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_088",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_089",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_090",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_091",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A postoperative client has new shortness of breath and oxygen saturation 88%. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位術後病人出現新發呼吸困難且血氧 88%。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on new shortness of breath and oxygen saturation 88%; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理新發呼吸困難且血氧 88%；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_092",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_093",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_094",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chronic kidney disease with palpitations and potassium 6.3 mEq/L. What should the nurse do first?",
      "stem_zh": "護理師照護一位慢性腎病病人，出現心悸且鉀 6.3 mEq/L。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Place the client on cardiac monitoring and escalate care.",
          "進行心電監測並升級處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Hyperkalemia can cause life-threatening dysrhythmias.",
      "rationale_zh": "高血鉀可造成危及生命的心律不整。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_095",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_096",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_097",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_098",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_099",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_100",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with a tracheostomy has high-pitched noise and anxiety. The care plan also includes open flame nearby.",
      "case_zh": "一位氣切病人出現高音調聲音與焦慮。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on high-pitched noise and anxiety; apply open flame nearby if relevant.",
          "評估並處理高音調聲音與焦慮；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_101",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_102",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_103",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with head injury with increasing drowsiness and vomiting. What should the nurse do first?",
      "stem_zh": "護理師照護一位頭部外傷病人，出現嗜睡加重與嘔吐。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess neurologic status and escalate care.",
          "評估神經狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Worsening neurologic cues after head injury may indicate increased intracranial pressure.",
      "rationale_zh": "頭傷後神經線索惡化可能提示顱內壓升高。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_104",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_105",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_106",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_107",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_108",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_109",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client receiving anticoagulation has sudden severe headache and confusion. The care plan also includes aspiration prevention.",
      "case_zh": "一位接受抗凝治療的病人出現突然嚴重頭痛與混亂。照護計劃也包含預防誤吸。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on sudden severe headache and confusion; apply aspiration prevention if relevant.",
          "評估並處理突然嚴重頭痛與混亂；如相關則採取預防誤吸。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_110",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_111",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_112",
      "category": "prioritization",
      "stem": "The nurse is caring for a client after a fall with new hip pain and external rotation of the leg. What should the nurse do first?",
      "stem_zh": "護理師照護一位跌倒後病人，出現新發髖部疼痛且腿部外旋。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Keep the client still and assess neurovascular status.",
          "保持病人不動並評估神經血管狀態。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The cues may indicate fracture; movement can worsen injury.",
      "rationale_zh": "這些線索可能提示骨折，移動可能加重傷害。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_113",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_114",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for pressure injury prevention when the issue is immobility?",
      "stem_zh": "當問題是不能活動時，對於壓傷預防哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Reposition regularly and protect skin integrity.",
          "定期翻身並保護皮膚完整性。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure.",
      "rationale_zh": "定期翻身可減少長時間受壓。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_115",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_116",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_117",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_118",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client receiving a blood transfusion has chills, fever and back pain. The care plan also includes exposure response.",
      "case_zh": "一位輸血中病人出現寒顫、發燒與背痛。照護計劃也包含暴露處理。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on chills, fever and back pain; apply exposure response if relevant.",
          "評估並處理寒顫、發燒與背痛；如相關則採取暴露處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_119",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_120",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_121",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with vomiting and diarrhea with dizziness and poor skin turgor. What should the nurse do first?",
      "stem_zh": "護理師照護一位嘔吐腹瀉病人，出現頭暈且皮膚彈性差。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess hydration status and vital signs.",
          "評估水合狀態與生命徵象。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fluid loss can cause dehydration and perfusion problems.",
      "rationale_zh": "體液流失可造成脫水和灌流問題。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_122",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_123",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for C. difficile infection when the issue is contact precautions and soap-and-water hand hygiene?",
      "stem_zh": "當問題是接觸隔離與肥皂水洗手時，對於C. difficile 感染哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Use contact precautions and soap-and-water hand hygiene.",
          "使用接觸隔離並用肥皂水洗手。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile spores are not reliably removed by alcohol rub alone.",
      "rationale_zh": "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_124",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_125",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_126",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_127",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with possible stroke has new facial droop and slurred speech. The care plan also includes immobility.",
      "case_zh": "一位疑似中風病人出現新發臉歪與言語含糊。照護計劃也包含不能活動。",
      "options": [
        [
          "A",
          "Assess and act on new facial droop and slurred speech; apply immobility if relevant.",
          "評估並處理新發臉歪與言語含糊；如相關則採取不能活動。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_128",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_129",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_130",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with abdominal pain with rigid abdomen and hypotension. What should the nurse do first?",
      "stem_zh": "護理師照護一位腹痛病人，出現腹部僵硬且低血壓。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Assess circulation and escalate care immediately.",
          "評估循環並立即升級處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Rigid abdomen with hypotension suggests acute instability.",
      "rationale_zh": "腹部僵硬合併低血壓提示急性不穩定。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_131",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_132",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for airborne infection concern when the issue is negative-pressure room as available?",
      "stem_zh": "當問題是可用時負壓房時，對於空氣傳播感染風險哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Place the client in airborne precautions according to protocol.",
          "按流程安排空氣隔離。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Airborne precautions generally require special room ventilation.",
      "rationale_zh": "空氣隔離通常需要特殊通風安排。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_133",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_134",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_135",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_136",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with COPD has increasing work of breathing and restlessness. The care plan also includes contact precautions and soap-and-water hand hygiene.",
      "case_zh": "一位COPD 病人出現呼吸做功增加且不安。照護計劃也包含接觸隔離與肥皂水洗手。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on increasing work of breathing and restlessness; apply contact precautions and soap-and-water hand hygiene if relevant.",
          "評估並處理呼吸做功增加且不安；如相關則採取接觸隔離與肥皂水洗手。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_137",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_138",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_139",
      "category": "prioritization",
      "stem": "The nurse is caring for a postoperative client with new shortness of breath and oxygen saturation 88%. What should the nurse do first?",
      "stem_zh": "護理師照護一位術後病人，出現新發呼吸困難且血氧 88%。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess respiratory status and escalate care.",
          "評估呼吸狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "New dyspnea with low oxygen saturation is an immediate breathing concern.",
      "rationale_zh": "新發呼吸困難合併低血氧是立即的 breathing 風險。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_140",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_141",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_142",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_143",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_144",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_145",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with asthma has wheezing and speaking in short phrases. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位哮喘病人出現喘鳴且只能短句說話。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on wheezing and speaking in short phrases; apply negative-pressure room as available if relevant.",
          "評估並處理喘鳴且只能短句說話；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_146",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_147",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_148",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with a tracheostomy with high-pitched noise and anxiety. What should the nurse do first?",
      "stem_zh": "護理師照護一位氣切病人，出現高音調聲音與焦慮。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess airway patency.",
          "評估呼吸道通暢。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "A high-pitched sound can signal airway obstruction.",
      "rationale_zh": "高音調聲音可能提示呼吸道阻塞。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_149",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_150",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_151",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_152",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_153",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_154",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after thyroidectomy has tingling around the mouth and muscle twitching. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位甲狀腺切除後病人出現口周麻與肌肉抽動。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on tingling around the mouth and muscle twitching; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理口周麻與肌肉抽動；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_155",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_156",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_157",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving anticoagulation with sudden severe headache and confusion. What should the nurse do first?",
      "stem_zh": "護理師照護一位接受抗凝治療的病人，出現突然嚴重頭痛與混亂。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess for bleeding and notify the provider promptly.",
          "評估出血並及時通知醫師/團隊。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Neurologic change during anticoagulation may indicate serious bleeding.",
      "rationale_zh": "抗凝期間出現神經狀態變化可能提示嚴重出血。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_158",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_159",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_160",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_161",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_162",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_163",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chest pressure has diaphoresis and nausea. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位胸部壓迫感病人出現出汗與噁心。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on diaphoresis and nausea; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理出汗與噁心；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_164",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_165",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_166",
      "category": "prioritization",
      "stem": "The nurse is caring for a client receiving a blood transfusion with chills, fever and back pain. What should the nurse do first?",
      "stem_zh": "護理師照護一位輸血中病人，出現寒顫、發燒與背痛。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Stop the transfusion and follow reaction protocol.",
          "停止輸血並按輸血反應流程處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "These findings may indicate a transfusion reaction.",
      "rationale_zh": "這些發現可能提示輸血反應。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_167",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_168",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_169",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_170",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_171",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_172",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with diabetes has confusion, sweating and trembling. The care plan also includes open flame nearby.",
      "case_zh": "一位糖尿病病人出現混亂、出汗與顫抖。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on confusion, sweating and trembling; apply open flame nearby if relevant.",
          "評估並處理混亂、出汗與顫抖；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_173",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_174",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_175",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with possible stroke with new facial droop and slurred speech. What should the nurse do first?",
      "stem_zh": "護理師照護一位疑似中風病人，出現新發臉歪與言語含糊。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Note time of onset and activate stroke protocol.",
          "記錄發作時間並啟動中風流程。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Stroke symptoms require rapid time-sensitive response.",
      "rationale_zh": "中風症狀需要快速且有時間敏感性的處理。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_176",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_177",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_178",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_179",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_180",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_181",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with infection has new confusion, fever and blood pressure 86/52. The care plan also includes aspiration prevention.",
      "case_zh": "一位感染病人出現新發混亂、發燒且血壓 86/52。照護計劃也包含預防誤吸。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on new confusion, fever and blood pressure 86/52; apply aspiration prevention if relevant.",
          "評估並處理新發混亂、發燒且血壓 86/52；如相關則採取預防誤吸。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_182",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_183",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_184",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with COPD with increasing work of breathing and restlessness. What should the nurse do first?",
      "stem_zh": "護理師照護一位COPD 病人，出現呼吸做功增加且不安。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Assess respiratory status first.",
          "先評估呼吸狀態。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Restlessness can be a cue of hypoxia or distress.",
      "rationale_zh": "不安可能是低氧或窘迫的線索。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_185",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_186",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for pressure injury prevention when the issue is immobility?",
      "stem_zh": "當問題是不能活動時，對於壓傷預防哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Reposition regularly and protect skin integrity.",
          "定期翻身並保護皮膚完整性。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Regular repositioning reduces prolonged pressure.",
      "rationale_zh": "定期翻身可減少長時間受壓。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_187",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_188",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_189",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_190",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with chronic kidney disease has palpitations and potassium 6.3 mEq/L. The care plan also includes exposure response.",
      "case_zh": "一位慢性腎病病人出現心悸且鉀 6.3 mEq/L。照護計劃也包含暴露處理。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on palpitations and potassium 6.3 mEq/L; apply exposure response if relevant.",
          "評估並處理心悸且鉀 6.3 mEq/L；如相關則採取暴露處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_191",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_192",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_193",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with asthma with wheezing and speaking in short phrases. What should the nurse do first?",
      "stem_zh": "護理師照護一位哮喘病人，出現喘鳴且只能短句說話。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess breathing and administer prescribed rescue therapy per protocol.",
          "評估呼吸並按醫囑/流程給予急救治療。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Short phrases and wheezing indicate respiratory distress.",
      "rationale_zh": "只能短句說話與喘鳴提示呼吸窘迫。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_194",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_195",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for C. difficile infection when the issue is contact precautions and soap-and-water hand hygiene?",
      "stem_zh": "當問題是接觸隔離與肥皂水洗手時，對於C. difficile 感染哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Use contact precautions and soap-and-water hand hygiene.",
          "使用接觸隔離並用肥皂水洗手。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "C. difficile spores are not reliably removed by alcohol rub alone.",
      "rationale_zh": "C. difficile 孢子不能可靠地只靠酒精乾洗手去除。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_196",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_197",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_198",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_199",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with head injury has increasing drowsiness and vomiting. The care plan also includes immobility.",
      "case_zh": "一位頭部外傷病人出現嗜睡加重與嘔吐。照護計劃也包含不能活動。",
      "options": [
        [
          "A",
          "Assess and act on increasing drowsiness and vomiting; apply immobility if relevant.",
          "評估並處理嗜睡加重與嘔吐；如相關則採取不能活動。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_200",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_201",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_202",
      "category": "prioritization",
      "stem": "The nurse is caring for a client after thyroidectomy with tingling around the mouth and muscle twitching. What should the nurse do first?",
      "stem_zh": "護理師照護一位甲狀腺切除後病人，出現口周麻與肌肉抽動。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Assess for hypocalcemia and maintain airway readiness.",
          "評估低血鈣並保持 airway 準備。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Tingling and twitching can indicate hypocalcemia after thyroid surgery.",
      "rationale_zh": "甲狀腺術後口周麻和抽動可能提示低血鈣。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_203",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_204",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for airborne infection concern when the issue is negative-pressure room as available?",
      "stem_zh": "當問題是可用時負壓房時，對於空氣傳播感染風險哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Place the client in airborne precautions according to protocol.",
          "按流程安排空氣隔離。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Airborne precautions generally require special room ventilation.",
      "rationale_zh": "空氣隔離通常需要特殊通風安排。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_205",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_206",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_207",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_208",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client after a fall has new hip pain and external rotation of the leg. The care plan also includes contact precautions and soap-and-water hand hygiene.",
      "case_zh": "一位跌倒後病人出現新發髖部疼痛且腿部外旋。照護計劃也包含接觸隔離與肥皂水洗手。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on new hip pain and external rotation of the leg; apply contact precautions and soap-and-water hand hygiene if relevant.",
          "評估並處理新發髖部疼痛且腿部外旋；如相關則採取接觸隔離與肥皂水洗手。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_209",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates SBAR escalation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現SBAR 升級通報？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "The blood pressure is 88/54 and heart rate is 122.",
          "血壓 88/54，心率 122。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Objective data makes escalation clearer.",
      "rationale_zh": "客觀資料讓升級通報更清楚。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_210",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"best response\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「best response」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "the response that is safest and most therapeutic in context",
          "該情境中最安全且最具治療性的回應"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"best response\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「best response」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_211",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chest pressure with diaphoresis and nausea. What should the nurse do first?",
      "stem_zh": "護理師照護一位胸部壓迫感病人，出現出汗與噁心。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess cardiac status and obtain emergency help per protocol.",
          "評估心臟狀態並按流程尋求緊急協助。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Chest pressure with diaphoresis and nausea may indicate acute coronary syndrome.",
      "rationale_zh": "胸部壓迫感合併出汗和噁心可能提示急性冠脈綜合徵。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_212",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_213",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for confused client trying to climb out of bed when the issue is least restrictive fall-prevention measures?",
      "stem_zh": "當問題是限制最少的防跌措施時，對於混亂且試圖下床病人哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Assess causes and implement least restrictive safety measures.",
          "評估原因並採取限制最少的安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Fall prevention starts with assessment and least restrictive interventions.",
      "rationale_zh": "防跌應從評估與限制最少的措施開始。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_214",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_215",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "B",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_216",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_217",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with vomiting and diarrhea has dizziness and poor skin turgor. The care plan also includes negative-pressure room as available.",
      "case_zh": "一位嘔吐腹瀉病人出現頭暈且皮膚彈性差。照護計劃也包含可用時負壓房。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Assess and act on dizziness and poor skin turgor; apply negative-pressure room as available if relevant.",
          "評估並處理頭暈且皮膚彈性差；如相關則採取可用時負壓房。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_218",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates pain assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現疼痛評估？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "This is just paperwork.",
          "這只是文書。"
        ],
        [
          "D",
          "Can you rate your pain from 0 to 10?",
          "請用 0 到 10 評分你的疼痛。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "A clear pain scale supports focused assessment.",
      "rationale_zh": "清楚的疼痛量表有助重點評估。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_219",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"further teaching\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「further teaching」最接近的意思是：",
      "options": [
        [
          "A",
          "a statement showing misunderstanding or unsafe practice",
          "顯示誤解或不安全做法的陳述"
        ],
        [
          "B",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "The command phrase \"further teaching\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「further teaching」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_220",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with diabetes with confusion, sweating and trembling. What should the nurse do first?",
      "stem_zh": "護理師照護一位糖尿病病人，出現混亂、出汗與顫抖。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Check the blood glucose level.",
          "檢查血糖。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "These cues suggest possible hypoglycemia and require immediate assessment.",
      "rationale_zh": "這些線索提示可能低血糖，需要立即評估。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_221",
      "category": "pharmacology",
      "stem": "A client taking opioid analgesic needs nursing follow-up related to respiratory rate 8/min. Which action is most appropriate?",
      "stem_zh": "使用 opioid analgesic 的病人因呼吸 8 次/分需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Assess sedation and respiratory status immediately.",
          "立即評估鎮靜與呼吸狀態。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Respiratory depression is a priority opioid safety concern.",
      "rationale_zh": "呼吸抑制是 opioid 的優先安全風險。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_222",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for seizure in bed when the issue is injury prevention and side positioning when possible?",
      "stem_zh": "當問題是防傷並可行時側臥時，對於床上抽搐哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ],
        [
          "D",
          "Protect from injury and support airway safety.",
          "保護病人免受傷並支持 airway 安全。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Do not place objects in the mouth during a seizure.",
      "rationale_zh": "抽搐時不要把物品放入口中。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_223",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "B",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_224",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ],
        [
          "C",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_225",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_226",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with abdominal pain has rigid abdomen and hypotension. The care plan also includes least restrictive fall-prevention measures.",
      "case_zh": "一位腹痛病人出現腹部僵硬且低血壓。照護計劃也包含限制最少的防跌措施。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "C",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ],
        [
          "D",
          "Assess and act on rigid abdomen and hypotension; apply least restrictive fall-prevention measures if relevant.",
          "評估並處理腹部僵硬且低血壓；如相關則採取限制最少的防跌措施。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_227",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates consent before wound assessment in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現傷口評估前徵求同意？",
      "options": [
        [
          "A",
          "I need to check your wound now; is that okay?",
          "我現在需要檢查你的傷口，可以嗎？"
        ],
        [
          "B",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Permission and explanation support dignity and consent.",
      "rationale_zh": "徵求同意與解釋有助尊嚴和同意。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_228",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"priority action\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「priority action」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the safest and most urgent nursing action now",
          "此刻最安全且最緊急的護理行動"
        ],
        [
          "C",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "The command phrase \"priority action\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「priority action」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_229",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with infection with new confusion, fever and blood pressure 86/52. What should the nurse do first?",
      "stem_zh": "護理師照護一位感染病人，出現新發混亂、發燒且血壓 86/52。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Assess perfusion and activate sepsis response per protocol.",
          "評估灌流並按流程啟動敗血症處理。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Infection plus hypotension and mental-status change is concerning for sepsis.",
      "rationale_zh": "感染合併低血壓和意識變化令人擔心敗血症。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_230",
      "category": "pharmacology",
      "stem": "A client taking nitroglycerin needs nursing follow-up related to use with erectile dysfunction medication. Which action is most appropriate?",
      "stem_zh": "使用 nitroglycerin 的病人因與勃起功能障礙藥合用需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "C",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ],
        [
          "D",
          "Teach that this combination can cause severe hypotension.",
          "教導此組合可能造成嚴重低血壓。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Nitroglycerin and PDE-5 inhibitors can create dangerous hypotension.",
      "rationale_zh": "Nitroglycerin 與 PDE-5 inhibitor 可造成危險低血壓。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_231",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for home oxygen when the issue is open flame nearby?",
      "stem_zh": "當問題是附近有明火時，對於居家氧氣哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Keep oxygen away from flames and heat sources.",
          "讓氧氣遠離火源與熱源。"
        ],
        [
          "B",
          "Document only.",
          "只記錄。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Oxygen supports combustion and creates fire risk.",
      "rationale_zh": "氧氣助燃並帶來火災風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_232",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Check blood glucose.",
          "檢查血糖。"
        ],
        [
          "C",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_233",
      "category": "therapeutic_communication",
      "stem": "A client says, \"I feel ashamed that I need help.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「我覺得需要幫助很丟臉。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "Many people need support during illness. What kind of help feels hardest to accept?",
          "很多人在生病時需要支持。哪類幫助最讓你難接受？"
        ],
        [
          "D",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The response normalizes support and explores feelings.",
      "rationale_zh": "此回應正常化支持並探索感受。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_234",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of care of a client with sudden respiratory distress. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派突然呼吸窘迫病人的照護。哪個決定最安全？",
      "options": [
        [
          "A",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "B",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "C",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ],
        [
          "D",
          "Assign to an RN for immediate assessment.",
          "分配給 RN 立即評估。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Unstable respiratory status requires RN assessment.",
      "rationale_zh": "不穩定呼吸狀態需要 RN 評估。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_235",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A postoperative client has new shortness of breath and oxygen saturation 88%. The care plan also includes injury prevention and side positioning when possible.",
      "case_zh": "一位術後病人出現新發呼吸困難且血氧 88%。照護計劃也包含防傷並可行時側臥。",
      "options": [
        [
          "A",
          "Assess and act on new shortness of breath and oxygen saturation 88%; apply injury prevention and side positioning when possible if relevant.",
          "評估並處理新發呼吸困難且血氧 88%；如相關則採取防傷並可行時側臥。"
        ],
        [
          "B",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_236",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates patient identification in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現病人身份確認？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "Can you tell me your full name and date of birth?",
          "請告訴我你的全名和出生日期？"
        ],
        [
          "C",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Two identifiers support safety before care.",
      "rationale_zh": "兩項身份識別有助照護前安全。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_237",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"expected finding\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「expected finding」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a finding consistent with the condition or treatment",
          "與情況或治療相符的發現"
        ],
        [
          "D",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The command phrase \"expected finding\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「expected finding」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_238",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with chronic kidney disease with palpitations and potassium 6.3 mEq/L. What should the nurse do first?",
      "stem_zh": "護理師照護一位慢性腎病病人，出現心悸且鉀 6.3 mEq/L。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "B",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "C",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ],
        [
          "D",
          "Place the client on cardiac monitoring and escalate care.",
          "進行心電監測並升級處理。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Hyperkalemia can cause life-threatening dysrhythmias.",
      "rationale_zh": "高血鉀可造成危及生命的心律不整。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_239",
      "category": "pharmacology",
      "stem": "A client taking gentamicin needs nursing follow-up related to ringing in ears. Which action is most appropriate?",
      "stem_zh": "使用 gentamicin 的病人因耳鳴需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Report possible ototoxicity promptly.",
          "及時回報可能耳毒性。"
        ],
        [
          "B",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Aminoglycosides may be associated with ototoxicity.",
      "rationale_zh": "Aminoglycoside 可能與耳毒性相關。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_240",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for enteral feeding when the issue is aspiration prevention?",
      "stem_zh": "當問題是預防誤吸時，對於管灌哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Keep the head of bed elevated as prescribed.",
          "按規定抬高床頭。"
        ],
        [
          "C",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Head elevation helps reduce aspiration risk.",
      "rationale_zh": "抬高床頭有助降低誤吸風險。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_241",
      "category": "maternal_child",
      "stem": "A postpartum client has boggy uterus and heavy lochia. What is the best nursing response?",
      "stem_zh": "一位產後病人出現子宮鬆軟且惡露多。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Assess the fundus and massage if atony is confirmed per protocol.",
          "評估宮底，若確認 atony 則按流程按摩宮底。"
        ],
        [
          "D",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Boggy uterus with heavy lochia suggests uterine atony and bleeding risk.",
      "rationale_zh": "子宮鬆軟合併惡露多提示子宮收縮乏力與出血風險。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_242",
      "category": "therapeutic_communication",
      "stem": "A client says, \"No one listens to me.\" Which response is most therapeutic?",
      "stem_zh": "病人說：「沒有人聽我說。」哪個回應最具治療性？",
      "options": [
        [
          "A",
          "Do not worry about it.",
          "不要擔心。"
        ],
        [
          "B",
          "Other people have worse problems.",
          "其他人的問題更嚴重。"
        ],
        [
          "C",
          "You should not feel that way.",
          "你不應該有這種感覺。"
        ],
        [
          "D",
          "I can see this is frustrating. Tell me what happened.",
          "我看得出這讓你很沮喪，告訴我發生了什麼。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Acknowledging feeling and inviting expression is therapeutic.",
      "rationale_zh": "承認感受並邀請表達具有治療性。",
      "wrong_tags": [
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_243",
      "category": "delegation_scope",
      "stem": "The RN is considering delegation of teaching a new insulin injection technique. Which decision is safest?",
      "stem_zh": "RN 正在考慮委派教新的胰島素注射技巧。哪個決定最安全？",
      "options": [
        [
          "A",
          "Keep the teaching with the RN.",
          "由 RN 保留教學。"
        ],
        [
          "B",
          "Delegate without giving report parameters.",
          "未提供回報標準直接委派。"
        ],
        [
          "C",
          "Ask the family to decide scope.",
          "請家屬決定職責範圍。"
        ],
        [
          "D",
          "Assign based only on who is nearby.",
          "只按誰離得近來分配。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Initial teaching requires RN responsibility.",
      "rationale_zh": "初始教學屬 RN 職責。",
      "wrong_tags": [
        "delegation_scope"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_244",
      "category": "ngn",
      "stem": "Which action best reflects clinical judgment in this mixed safety case?",
      "stem_zh": "在這個混合安全情境中，哪項行動最能體現臨床判斷？",
      "case": "A client with a tracheostomy has high-pitched noise and anxiety. The care plan also includes open flame nearby.",
      "case_zh": "一位氣切病人出現高音調聲音與焦慮。照護計劃也包含附近有明火。",
      "options": [
        [
          "A",
          "Focus on nonurgent teaching first.",
          "先做非緊急教學。"
        ],
        [
          "B",
          "Assess and act on high-pitched noise and anxiety; apply open flame nearby if relevant.",
          "評估並處理高音調聲音與焦慮；如相關則採取附近有明火。"
        ],
        [
          "C",
          "Ignore abnormal cues.",
          "忽略異常線索。"
        ],
        [
          "D",
          "Choose the longest option without reasoning.",
          "不推理，只選最長選項。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Clinical judgment requires recognizing urgent cues, prioritizing safety and applying the relevant protocol-sensitive intervention.",
      "rationale_zh": "臨床判斷需要辨識緊急線索、排序安全風險，並採取相關且符合流程的干預。",
      "wrong_tags": [
        "ngn",
        "cue_recognition",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_245",
      "category": "osce_transition",
      "stem": "Which phrase best demonstrates hand hygiene explanation in an OSCE-style interaction?",
      "stem_zh": "在 OSCE 式互動中，哪句話最能展現手部衛生解釋？",
      "options": [
        [
          "A",
          "You do not need to know why.",
          "你不需要知道原因。"
        ],
        [
          "B",
          "I will do this without explaining.",
          "我不解釋就做。"
        ],
        [
          "C",
          "I clean my hands before care to reduce infection risk.",
          "我在照護前清潔雙手，以降低感染風險。"
        ],
        [
          "D",
          "This is just paperwork.",
          "這只是文書。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "The explanation links the action to patient safety.",
      "rationale_zh": "此解釋將行動與病人安全連結。",
      "wrong_tags": [
        "osce_transition",
        "therapeutic_communication"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_246",
      "category": "english_wording",
      "stem": "In an NCLEX-style stem, the phrase \"requires follow-up\" most closely means:",
      "stem_zh": "在 NCLEX 式題幹中，「requires follow-up」最接近的意思是：",
      "options": [
        [
          "A",
          "the answer with the most medical jargon",
          "醫學術語最多的答案"
        ],
        [
          "B",
          "the answer preferred by family members",
          "家屬偏好的答案"
        ],
        [
          "C",
          "a reason to stop reading the stem",
          "停止閱讀題幹的理由"
        ],
        [
          "D",
          "an abnormal or unsafe finding that needs further action",
          "需要進一步行動的異常或不安全發現"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "The command phrase \"requires follow-up\" directs what kind of answer the learner should select.",
      "rationale_zh": "指令詞「requires follow-up」會決定考生應選哪一類答案。",
      "wrong_tags": [
        "english_wording",
        "test_strategy"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_247",
      "category": "prioritization",
      "stem": "The nurse is caring for a client with head injury with increasing drowsiness and vomiting. What should the nurse do first?",
      "stem_zh": "護理師照護一位頭部外傷病人，出現嗜睡加重與嘔吐。護理師應先做什麼？",
      "options": [
        [
          "A",
          "Assess neurologic status and escalate care.",
          "評估神經狀態並升級處理。"
        ],
        [
          "B",
          "Document the finding and reassess at the end of the shift.",
          "記錄該發現並在班末再評估。"
        ],
        [
          "C",
          "Provide routine discharge teaching.",
          "提供例行出院教學。"
        ],
        [
          "D",
          "Ask family members what they prefer.",
          "詢問家屬偏好。"
        ]
      ],
      "answer": [
        "A"
      ],
      "rationale": "Worsening neurologic cues after head injury may indicate increased intracranial pressure.",
      "rationale_zh": "頭傷後神經線索惡化可能提示顱內壓升高。",
      "wrong_tags": [
        "prioritization",
        "cue_recognition"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_248",
      "category": "pharmacology",
      "stem": "A client taking warfarin needs nursing follow-up related to black stools. Which action is most appropriate?",
      "stem_zh": "使用 warfarin 的病人因黑便需要護理追蹤。哪項行動最合適？",
      "options": [
        [
          "A",
          "Ignore the finding if the client feels well.",
          "若病人感覺良好則忽略。"
        ],
        [
          "B",
          "Assess for bleeding and review anticoagulation instructions.",
          "評估出血並複核抗凝相關指示。"
        ],
        [
          "C",
          "Give an extra dose without an order.",
          "未經醫囑額外給藥。"
        ],
        [
          "D",
          "Teach that this is never clinically important.",
          "教導這永遠不具臨床重要性。"
        ]
      ],
      "answer": [
        "B"
      ],
      "rationale": "Black stools may indicate gastrointestinal bleeding.",
      "rationale_zh": "黑便可能提示胃腸道出血。",
      "wrong_tags": [
        "pharmacology",
        "knowledge_gap"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_249",
      "category": "safety_infection",
      "stem": "Which nursing action is most appropriate for needlestick injury when the issue is exposure response?",
      "stem_zh": "當問題是暴露處理時，對於針刺傷哪項護理行動最合適？",
      "options": [
        [
          "A",
          "Document only.",
          "只記錄。"
        ],
        [
          "B",
          "Use no special safety measures.",
          "不採取特別安全措施。"
        ],
        [
          "C",
          "Wash the area and report immediately according to protocol.",
          "清洗部位並立即按流程報告。"
        ],
        [
          "D",
          "Ask another patient to supervise.",
          "請另一位病人監督。"
        ]
      ],
      "answer": [
        "C"
      ],
      "rationale": "Occupational exposure requires prompt reporting and protocol-based follow-up.",
      "rationale_zh": "職業暴露需要及時報告與按流程追蹤。",
      "wrong_tags": [
        "safety_infection"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    },
    {
      "id": "AUTO50_250",
      "category": "maternal_child",
      "stem": "A newborn has jitteriness and poor feeding. What is the best nursing response?",
      "stem_zh": "一位新生兒出現顫抖且餵食差。最佳護理反應是？",
      "options": [
        [
          "A",
          "Reassure that this is always expected.",
          "安慰說這永遠是預期現象。"
        ],
        [
          "B",
          "Wait until the next routine check.",
          "等到下一次例行檢查。"
        ],
        [
          "C",
          "Focus only on discharge paperwork.",
          "只處理出院文件。"
        ],
        [
          "D",
          "Check blood glucose.",
          "檢查血糖。"
        ]
      ],
      "answer": [
        "D"
      ],
      "rationale": "Jitteriness and poor feeding may indicate neonatal hypoglycemia.",
      "rationale_zh": "顫抖和餵食差可能提示新生兒低血糖。",
      "wrong_tags": [
        "maternal_child",
        "prioritization"
      ],
      "generated": true,
      "review_status": "needs_nursing_review"
    }
  ]
}

```


---

## File: app-prototype/index.html

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NCLEX-RN Bilingual Clinical Judgment Trainer | Prototype</title>
  <style>
    :root {
      --ink: #17324d;
      --muted: #5d6b78;
      --line: #d7e2ea;
      --paper: #f7fafc;
      --accent: #0f766e;
      --warn: #8a4b0f;
      --white: #ffffff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.55;
    }
    header {
      padding: 28px 18px;
      background: var(--white);
      border-bottom: 1px solid var(--line);
    }
    .wrap { max-width: 1040px; margin: 0 auto; }
    .eyebrow { text-transform: uppercase; letter-spacing: .08em; color: var(--accent); font-size: 12px; font-weight: 700; }
    h1 { margin: 8px 0 10px; font-size: clamp(28px, 4vw, 44px); line-height: 1.08; }
    h2 { margin-top: 0; }
    .grid { display: grid; grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr); gap: 18px; padding: 18px; }
    .card {
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 18px;
    }
    .notice {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: var(--warn);
      border-radius: 8px;
      padding: 12px;
      margin-top: 12px;
    }
    .question-stem { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
    .zh { color: var(--muted); }
    button {
      border: 1px solid var(--line);
      background: var(--white);
      color: var(--ink);
      border-radius: 7px;
      padding: 10px 12px;
      cursor: pointer;
      font: inherit;
    }
    button.primary { background: var(--accent); border-color: var(--accent); color: white; }
    button.option {
      display: block;
      width: 100%;
      text-align: left;
      margin: 8px 0;
    }
    button.option.selected { border-color: var(--accent); box-shadow: 0 0 0 2px rgba(15, 118, 110, .15); }
    .actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
    .actions button.danger { color: #991b1b; border-color: #fecaca; background: #fff5f5; }
    .result { margin-top: 14px; padding: 12px; border-radius: 8px; background: #ecfeff; border: 1px solid #a5f3fc; }
    .tag { display: inline-block; margin: 4px 4px 0 0; padding: 4px 8px; border-radius: 999px; background: #e6f4f1; color: #115e59; font-size: 13px; }
    .stat { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .stat div { background: #f8fafc; border: 1px solid var(--line); padding: 10px; border-radius: 8px; }
    .category-dashboard { margin-top: 14px; display: grid; gap: 8px; }
    .category-row { display: grid; grid-template-columns: minmax(110px, 1.2fr) repeat(4, minmax(42px, .5fr)); gap: 6px; align-items: center; padding: 8px; border: 1px solid var(--line); border-radius: 8px; background: #fbfdff; font-size: 13px; }
    .category-row:not(.header) { cursor: pointer; }
    .category-row:not(.header):hover { border-color: var(--accent); box-shadow: 0 0 0 2px rgba(15, 118, 110, .08); }
    .category-row.header { background: #edf7f5; color: var(--accent); font-weight: 700; }
    .category-name { font-weight: 700; overflow-wrap: anywhere; }
    .mini-bar { grid-column: 1 / -1; height: 6px; background: #edf2f7; border-radius: 999px; overflow: hidden; }
    .mini-bar span { display: block; height: 100%; background: var(--accent); border-radius: 999px; }
    .report-box { white-space: pre-wrap; background: #f8fafc; border: 1px solid var(--line); border-radius: 8px; padding: 12px; max-height: 360px; overflow: auto; font: 13px ui-monospace, SFMono-Regular, Menlo, monospace; }
    select, input[type="search"], input[type="date"] { width: 100%; padding: 10px; border: 1px solid var(--line); border-radius: 7px; font: inherit; background: var(--white); }
    label { display: block; margin-top: 12px; color: var(--muted); font-size: 14px; }
    .toolbar { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
    .toolbar .wide { grid-column: 1 / -1; }
    @media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
    @media (max-width: 560px) { .toolbar { grid-template-columns: 1fr; } .toolbar .wide { grid-column: auto; } }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <div class="eyebrow">Overseas Supervision · Prototype</div>
      <h1>NCLEX-RN Bilingual Clinical Judgment Trainer</h1>
      <p>雙語臨床判斷練習原型：題目、錯題分類、術語卡與 ATT 倒數。Independent educational prototype, not an official NCLEX product.</p>
      <div class="notice">本工具為獨立教育輔助原型，不是 NCSBN、Pearson VUE、AHPRA、NMBA 或 ANMAC 官方工具，不承諾考試、註冊、簽證或就業結果。</div>
    </div>
  </header>

  <main class="wrap grid">
    <section class="card" id="practice">
      <h2>Practice Drill</h2>
      <div class="toolbar">
        <label>Question Pool / 題池
          <select id="poolMode">
            <option value="demo">Public Demo Pool / 公開展示題池</option>
            <option value="full">Full Internal Pool / 內部完整題池</option>
          </select>
        </label>
        <label>Category / 分類
          <select id="categoryFilter">
            <option value="all">All categories / 全部分類</option>
          </select>
        </label>
        <label>Mode / 模式
          <select id="modeFilter">
            <option value="all">All items / 全部題目</option>
            <option value="wrong">Wrong answers only / 只練錯題</option>
          </select>
        </label>
        <div class="actions wide">
          <button id="shuffleBtn">Shuffle pool / 打亂題池</button>
        </div>
      </div>
      <div id="question"></div>
      <div class="actions">
        <button class="primary" id="checkBtn">Check / 查看解析</button>
        <button id="nextBtn">Next / 下一題</button>
        <button id="markReviewBtn">Flag for review / 標記複習</button>
      </div>
      <div id="result"></div>
    </section>

    <aside class="card">
      <h2>Study Dashboard</h2>
      <p class="notice">Progress is stored only in this browser/device. Clearing cache, changing browser or reinstalling a wrapped app may reset records. 進度只儲存在本裝置瀏覽器；清除快取、更換瀏覽器或重新安裝封裝 App 可能會重置記錄。</p>
      <div class="stat">
        <div><strong id="doneCount">0</strong><br><span class="zh">已練習</span></div>
        <div><strong id="correctCount">0</strong><br><span class="zh">答對</span></div>
      </div>
      <h3>ATT Countdown</h3>
      <p class="zh">輸入自己的 ATT expiry date，按個人有效期倒排，不使用固定天數承諾。</p>
      <input id="attDate" type="date">
      <p id="attOutput"></p>
      <h3>Weak Tags</h3>
      <div id="weakTags"></div>
      <h3>Category Review</h3>
      <div id="categoryDashboard" class="category-dashboard"></div>
      <div class="actions">
        <button id="copySummaryBtn">Copy weak summary / 複製弱項摘要</button>
        <button id="copyReportBtn">Copy learner report / 複製學員報告</button>
        <button id="showReportBtn">Show report / 顯示報告</button>
        <button class="danger" id="resetBtn">Reset progress / 重置進度</button>
      </div>
    </aside>

    <section class="card">
      <h2>Learner Report</h2>
      <p class="zh">本報告只依本裝置練習記錄生成，不能作為通過預測或官方評估。</p>
      <div id="learnerReport" class="report-box">No report generated yet / 尚未生成報告。</div>
    </section>

    <section class="card">
      <h2>Glossary Flashcards</h2>
      <label>Search glossary / 搜尋術語
        <input id="glossarySearch" type="search" placeholder="clinical judgment / 優先順序">
      </label>
      <div id="glossary"></div>
    </section>
  </main>

  <script>
    const fallbackItems = [
      {
        id: "P001",
        type: "single",
        category: "prioritization",
        stem: "The nurse receives reports on four clients. Which client should the nurse assess first?",
        stemZh: "護理師收到四位病人的情況回報。應先評估哪一位？",
        options: [
          ["A", "A client with chronic arthritis reporting pain rated 5/10.", "慢性關節炎病人回報疼痛 5/10。"],
          ["B", "A client taking furosemide reporting new muscle weakness.", "正在使用 furosemide 的病人出現新的肌肉無力。"],
          ["C", "A client scheduled for discharge asking about medication timing.", "準備出院的病人詢問服藥時間。"],
          ["D", "A client with insomnia requesting a sleep aid.", "失眠病人要求安眠藥。"]
        ],
        answer: ["B"],
        rationale: "Furosemide can contribute to potassium loss. New muscle weakness may signal an electrolyte problem with cardiac risk.",
        rationaleZh: "Furosemide 可能造成鉀流失。新的肌肉無力可能提示電解質問題並帶有心律風險。",
        tags: ["knowledge_gap", "cue_recognition", "prioritization"]
      },
      {
        id: "D001",
        type: "single",
        category: "delegation_scope",
        stem: "Which task is most appropriate for the RN to delegate to unlicensed assistive personnel?",
        stemZh: "下列哪項最適合由 RN 委派給無照護理輔助人員？",
        options: [
          ["A", "Teach a newly diagnosed diabetic client how to inject insulin.", "教新診斷糖尿病病人如何注射胰島素。"],
          ["B", "Assess a client with new chest pain.", "評估新發胸痛病人。"],
          ["C", "Assist a stable postoperative client to ambulate.", "協助穩定的術後病人下床行走。"],
          ["D", "Evaluate whether pain medication was effective.", "評估止痛藥是否有效。"]
        ],
        answer: ["C"],
        rationale: "Routine assistance with ambulation for a stable client is appropriate. Teaching, new symptom assessment and evaluation require RN judgment.",
        rationaleZh: "穩定病人的例行行走協助可委派。教學、新症狀評估與療效評價需要 RN 判斷。",
        tags: ["delegation_scope"]
      },
      {
        id: "NGN001",
        type: "multi",
        category: "ngn",
        stem: "Which cues require immediate nursing attention? Select all that apply.",
        stemZh: "哪些線索需要立即護理關注？可多選。",
        caseText: "A client is 2 hours postoperative after abdominal surgery. The client reports increasing shortness of breath, appears restless and has an oxygen saturation of 88% on room air.",
        caseTextZh: "病人腹部手術後 2 小時，回報呼吸越來越困難，表現不安，室內空氣下血氧飽和度 88%。",
        options: [
          ["A", "2 hours postoperative", "術後 2 小時"],
          ["B", "Increasing shortness of breath", "呼吸困難加重"],
          ["C", "Restlessness", "不安"],
          ["D", "Oxygen saturation 88% on room air", "室內空氣下血氧 88%"]
        ],
        answer: ["B", "C", "D"],
        rationale: "Worsening shortness of breath, restlessness and low oxygen saturation indicate immediate breathing/oxygenation concern.",
        rationaleZh: "呼吸困難加重、不安與血氧偏低提示立即的 breathing/oxygenation 風險。",
        tags: ["cue_recognition", "prioritization", "safety_infection"]
      }
    ];

    let glossary = [
      ["clinical judgment", "臨床判斷", "core", "Recognize cues, analyze them, prioritize hypotheses, take action and evaluate outcomes."],
      ["prioritization", "優先順序", "core", "Choose what is safest and most urgent now."],
      ["delegation", "委派/授權執行", "scope", "Assign suitable tasks based on stability and scope."],
      ["requires follow-up", "需要追蹤", "question-language", "Usually asks which finding is abnormal or unsafe."],
      ["ATT", "Authorization to Test 考試授權", "process", "Use your own validity dates for planning."]
    ];

    function emptyProgress() {
      return { done: 0, correct: 0, tags: {}, wrongIds: {}, reviewIds: {}, byCategory: {} };
    }

    const defaultProgress = emptyProgress();
    let index = 0;
    let allItems = fallbackItems;
    let fullItems = fallbackItems;
    let demoItems = fallbackItems;
    let items = fallbackItems;
    let selected = new Set();
    let activeCategory = "all";
    let activeMode = "all";
    let activePool = "demo";
    let progress = loadProgress();

    function loadProgress() {
      try {
        const raw = localStorage.getItem("nclexPrototypeProgress");
        if (!raw) return emptyProgress();
        const parsed = JSON.parse(raw);
        return {
          done: Number(parsed.done) || 0,
          correct: Number(parsed.correct) || 0,
          tags: parsed.tags && typeof parsed.tags === "object" ? parsed.tags : {},
          wrongIds: parsed.wrongIds && typeof parsed.wrongIds === "object" ? parsed.wrongIds : {},
          reviewIds: parsed.reviewIds && typeof parsed.reviewIds === "object" ? parsed.reviewIds : {},
          byCategory: parsed.byCategory && typeof parsed.byCategory === "object" ? parsed.byCategory : {}
        };
      } catch (error) {
        console.warn("Progress storage unavailable:", error.message);
        return emptyProgress();
      }
    }

    function save() {
      try {
        localStorage.setItem("nclexPrototypeProgress", JSON.stringify(progress));
      } catch (error) {
        console.warn("Progress could not be saved:", error.message);
      }
      renderStats();
    }

    function renderQuestion() {
      selected = new Set();
      const q = items[index];
      if (!q) {
        document.getElementById("question").innerHTML = `<p class="notice">No items match this filter yet. 沒有符合目前篩選條件的題目。</p>`;
        document.getElementById("result").innerHTML = "";
        return;
      }
      const caseText = q.caseText || q.case || "";
      const caseTextZh = q.caseTextZh || q.case_zh || "";
      const stemZh = q.stemZh || q.stem_zh || "";
      const rationaleZh = q.rationaleZh || q.rationale_zh || "";
      const tags = q.tags || q.wrong_tags || [];
      const opts = q.options.map(([id, en, zh]) => `<button class="option" data-id="${id}"><strong>${id}.</strong> ${en}<br><span class="zh">${zh}</span></button>`).join("");
      document.getElementById("question").innerHTML = `
        ${caseText ? `<p>${caseText}<br><span class="zh">${caseTextZh}</span></p>` : ""}
        <p class="eyebrow">${q.id} · ${q.category} · ${index + 1}/${items.length} in current pool · ${allItems.length} ${activePool === "demo" ? "demo" : "internal"} items</p>
        <div class="question-stem">${q.stem}</div>
        <p class="zh">${stemZh}</p>
        ${opts}
      `;
      document.getElementById("result").innerHTML = "";
      document.querySelectorAll(".option").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          if (selected.has(id)) selected.delete(id); else selected.add(id);
          btn.classList.toggle("selected");
        });
      });
    }

    function check() {
      const q = items[index];
      if (!q) return;
      const answer = [...q.answer].sort().join(",");
      const got = [...selected].sort().join(",");
      const correct = answer === got;
      const rationaleZh = q.rationaleZh || q.rationale_zh || "";
      const tags = q.tags || q.wrong_tags || [];
      progress.done += 1;
      if (!progress.byCategory[q.category]) progress.byCategory[q.category] = { done: 0, correct: 0, wrong: 0 };
      progress.byCategory[q.category].done += 1;
      if (correct) progress.correct += 1;
      if (correct) {
        progress.byCategory[q.category].correct += 1;
        delete progress.wrongIds[q.id];
      } else {
        progress.byCategory[q.category].wrong += 1;
        progress.wrongIds[q.id] = (progress.wrongIds[q.id] || 0) + 1;
        tags.forEach(tag => progress.tags[tag] = (progress.tags[tag] || 0) + 1);
      }
      save();
      document.getElementById("result").innerHTML = `
        <div class="result">
          <strong>${correct ? "Correct / 答對" : "Review / 需要複盤"}</strong>
          <p>Answer: ${q.answer.join(", ")}</p>
          <p>${q.rationale}<br><span class="zh">${rationaleZh}</span></p>
          <div>${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      `;
    }

    function next() {
      if (!items.length) return;
      index = (index + 1) % items.length;
      renderQuestion();
    }

    function renderStats() {
      document.getElementById("doneCount").textContent = progress.done;
      document.getElementById("correctCount").textContent = progress.correct;
      const tags = Object.entries(progress.tags).sort((a, b) => b[1] - a[1]);
      const wrongCount = Object.keys(progress.wrongIds || {}).length;
      document.getElementById("weakTags").innerHTML = tags.length
        ? `<p class="zh">${wrongCount} items currently in wrong-answer queue / ${wrongCount} 題在錯題隊列</p>${tags.map(([tag, count]) => `<span class="tag">${tag}: ${count}</span>`).join("")}`
        : `<p class="zh">尚無錯題標籤。</p>`;
      renderCategoryDashboard();
    }

    function categoryRows() {
      const totals = {};
      for (const item of allItems) {
        totals[item.category] = (totals[item.category] || 0) + 1;
      }
      return Object.entries(totals).sort(([a], [b]) => a.localeCompare(b)).map(([category, total]) => {
        const stats = progress.byCategory?.[category] || { done: 0, correct: 0, wrong: 0 };
        const wrongQueue = Object.keys(progress.wrongIds || {}).filter((id) => {
          const item = allItems.find((candidate) => candidate.id === id);
          return item && item.category === category;
        }).length;
        const accuracy = stats.done ? Math.round((stats.correct / stats.done) * 100) : 0;
        const completion = total ? Math.min(100, Math.round((stats.done / total) * 100)) : 0;
        return { category, total, done: stats.done || 0, accuracy, wrongQueue, completion };
      });
    }

    function renderCategoryDashboard() {
      const rows = categoryRows();
      document.getElementById("categoryDashboard").innerHTML = `
        <div class="category-row header">
          <span>Category</span><span>Total</span><span>Done</span><span>Acc</span><span>Wrong</span>
        </div>
        ${rows.map((row) => `
          <div class="category-row" data-category="${row.category}">
            <span class="category-name">${row.category}</span>
            <span>${row.total}</span>
            <span>${row.done}</span>
            <span>${row.accuracy}%</span>
            <span>${row.wrongQueue}</span>
            <div class="mini-bar" title="${row.completion}% completed"><span style="width:${row.completion}%"></span></div>
          </div>
        `).join("")}
      `;
      document.querySelectorAll(".category-row[data-category]").forEach((row) => {
        row.addEventListener("click", () => {
          document.getElementById("categoryFilter").value = row.dataset.category;
          document.getElementById("modeFilter").value = "all";
          applyFilters();
        });
      });
    }

    function weakSummaryText() {
      const tags = Object.entries(progress.tags).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const accuracy = progress.done ? Math.round((progress.correct / progress.done) * 100) : 0;
      const weakLines = tags.length ? tags.map(([tag, count]) => `- ${tag}: ${count}`).join("\n") : "- No weak tags yet / 尚無錯題標籤";
      const categoryLines = categoryRows().map((row) => `- ${row.category}: done ${row.done}/${row.total}, accuracy ${row.accuracy}%, wrong queue ${row.wrongQueue}`).join("\n");
      return `NCLEX-RN Bilingual Trainer weak-area summary\nPool mode: ${activePool}\nDone: ${progress.done}\nCorrect: ${progress.correct}\nAccuracy: ${accuracy}%\nWrong-answer queue: ${Object.keys(progress.wrongIds || {}).length}\nFlagged for review: ${Object.keys(progress.reviewIds || {}).length}\nWeak tags:\n${weakLines}\nCategory review:\n${categoryLines}`;
    }

    function learnerReportText() {
      const now = new Date().toISOString().slice(0, 10);
      const accuracy = progress.done ? Math.round((progress.correct / progress.done) * 100) : 0;
      const rows = categoryRows();
      const weakest = rows
        .filter((row) => row.done > 0)
        .sort((a, b) => a.accuracy - b.accuracy || b.wrongQueue - a.wrongQueue)
        .slice(0, 3);
      const untouched = rows.filter((row) => row.done === 0).map((row) => row.category);
      const tagLines = Object.entries(progress.tags)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([tag, count]) => `- ${tag}: ${count}`)
        .join("\n") || "- No weak tags recorded yet.";
      const categoryLines = rows.map((row) => {
        return `- ${row.category}: ${row.done}/${row.total} done, ${row.accuracy}% accuracy, ${row.wrongQueue} in wrong queue, ${row.completion}% completion`;
      }).join("\n");
      const recommendation = weakest.length
        ? weakest.map((row) => `- Prioritize ${row.category}: accuracy ${row.accuracy}%, wrong queue ${row.wrongQueue}.`).join("\n")
        : "- Start with prioritization, pharmacology and NGN cue recognition to establish a baseline.";
      return [
        "NCLEX-RN Bilingual Clinical Judgment Trainer",
        "Learner Progress Report / 學員進度報告",
        `Generated: ${now}`,
        "",
        "Independent educational report. Not an official NCLEX, Ahpra, NMBA or ANMAC assessment. No pass, registration, visa or employment outcome is guaranteed.",
        "",
        `Overall practice: ${progress.done} items attempted / ${progress.correct} correct / ${accuracy}% accuracy`,
        `Question pool: ${allItems.length} ${activePool === "demo" ? "public demo" : "internal beta"} items`,
        `Wrong-answer queue: ${Object.keys(progress.wrongIds || {}).length}`,
        `Flagged for review: ${Object.keys(progress.reviewIds || {}).length}`,
        "",
        "Category progress:",
        categoryLines,
        "",
        "Top weak tags:",
        tagLines,
        "",
        "Suggested next focus:",
        recommendation,
        untouched.length ? `\nUntouched categories: ${untouched.join(", ")}` : "",
        "",
        "Supervisor note / 督導提示:",
        "Use this report to guide discussion and revision planning. It is a local practice record, not a readiness guarantee."
      ].filter(Boolean).join("\n");
    }

    async function copyWeakSummary() {
      const text = weakSummaryText();
      try {
        await navigator.clipboard.writeText(text);
        document.getElementById("attOutput").textContent = "Weak summary copied / 弱項摘要已複製";
      } catch (error) {
        window.prompt("Copy weak summary / 複製弱項摘要", text);
      }
    }

    async function copyLearnerReport() {
      const text = learnerReportText();
      document.getElementById("learnerReport").textContent = text;
      try {
        await navigator.clipboard.writeText(text);
        document.getElementById("attOutput").textContent = "Learner report copied / 學員報告已複製";
      } catch (error) {
        window.prompt("Copy learner report / 複製學員報告", text);
      }
    }

    function showLearnerReport() {
      document.getElementById("learnerReport").textContent = learnerReportText();
    }

    function markCurrentForReview() {
      const q = items[index];
      if (!q) return;
      progress.reviewIds[q.id] = (progress.reviewIds[q.id] || 0) + 1;
      save();
      document.getElementById("attOutput").textContent = `${q.id} flagged for review / 已標記複習`;
    }

    function resetProgress() {
      if (!window.confirm("Reset all local progress on this browser/device? 是否重置本裝置瀏覽器中的全部進度？")) return;
      progress = emptyProgress();
      save();
      applyFilters();
    }

    function renderGlossary(query = "") {
      const q = query.trim().toLowerCase();
      const filtered = glossary.filter(([en, zh, category, note]) => {
        const haystack = `${en} ${zh} ${category} ${note}`.toLowerCase();
        return !q || haystack.includes(q);
      });
      document.getElementById("glossary").innerHTML = filtered.map(([en, zh, category, note]) => `
        <p><strong>${en}</strong> / ${zh} <span class="tag">${category}</span><br><span class="zh">${note}</span></p>
      `).join("") || `<p class="zh">No matching term / 沒有符合術語。</p>`;
    }

    function parseCsv(text) {
      const rows = [];
      let row = [];
      let cell = "";
      let inQuotes = false;
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        const next = text[i + 1];
        if (ch === "\"" && inQuotes && next === "\"") {
          cell += "\"";
          i += 1;
        } else if (ch === "\"") {
          inQuotes = !inQuotes;
        } else if (ch === "," && !inQuotes) {
          row.push(cell);
          cell = "";
        } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
          if (ch === "\r" && next === "\n") i += 1;
          row.push(cell);
          if (row.some((value) => value.trim())) rows.push(row);
          row = [];
          cell = "";
        } else {
          cell += ch;
        }
      }
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      return rows;
    }

    async function loadGlossary() {
      try {
        const response = await fetch("../app-content/glossary.csv", { cache: "no-store" });
        if (!response.ok) throw new Error("glossary.csv unavailable");
        const rows = parseCsv(await response.text());
        const [, ...data] = rows;
        glossary = data
          .filter((row) => row.length >= 4)
          .map(([term, zh, category, note]) => [term, zh, category, note]);
      } catch (error) {
        console.warn("Using fallback glossary:", error.message);
      }
      renderGlossary(document.getElementById("glossarySearch").value);
    }

    function renderFilters() {
      const categories = [...new Set(allItems.map((item) => item.category))].sort();
      const select = document.getElementById("categoryFilter");
      select.innerHTML = `<option value="all">All categories / 全部分類</option>` + categories.map((category) => {
        const count = allItems.filter((item) => item.category === category).length;
        return `<option value="${category}">${category} (${count})</option>`;
      }).join("");
      select.value = activeCategory;
    }

    function applyFilters() {
      activePool = document.getElementById("poolMode").value;
      allItems = activePool === "demo" ? demoItems : fullItems;
      activeCategory = document.getElementById("categoryFilter").value;
      activeMode = document.getElementById("modeFilter").value;
      items = allItems.filter((item) => {
        const categoryMatch = activeCategory === "all" || item.category === activeCategory;
        const modeMatch = activeMode === "all" || Boolean(progress.wrongIds && progress.wrongIds[item.id]);
        return categoryMatch && modeMatch;
      });
      index = 0;
      renderQuestion();
      renderStats();
    }

    function switchPool() {
      activePool = document.getElementById("poolMode").value;
      allItems = activePool === "demo" ? demoItems : fullItems;
      activeCategory = "all";
      document.getElementById("categoryFilter").value = "all";
      renderFilters();
      applyFilters();
    }

    function shufflePool() {
      items = [...items].sort(() => Math.random() - 0.5);
      index = 0;
      renderQuestion();
    }

    document.getElementById("checkBtn").addEventListener("click", check);
    document.getElementById("nextBtn").addEventListener("click", next);
    document.getElementById("copySummaryBtn").addEventListener("click", copyWeakSummary);
    document.getElementById("copyReportBtn").addEventListener("click", copyLearnerReport);
    document.getElementById("showReportBtn").addEventListener("click", showLearnerReport);
    document.getElementById("markReviewBtn").addEventListener("click", markCurrentForReview);
    document.getElementById("resetBtn").addEventListener("click", resetProgress);
    document.getElementById("poolMode").addEventListener("change", switchPool);
    document.getElementById("categoryFilter").addEventListener("change", applyFilters);
    document.getElementById("modeFilter").addEventListener("change", applyFilters);
    document.getElementById("shuffleBtn").addEventListener("click", shufflePool);
    document.getElementById("glossarySearch").addEventListener("input", (event) => renderGlossary(event.target.value));
    document.getElementById("attDate").addEventListener("change", (event) => {
      const date = new Date(event.target.value + "T00:00:00");
      const now = new Date();
      const days = Math.ceil((date - now) / 86400000);
      document.getElementById("attOutput").textContent = Number.isFinite(days)
        ? `${days} days until ATT expiry / 距離 ATT 到期約 ${days} 天`
        : "";
    });

    async function loadBetaItems() {
      try {
        const files = ["question_bank_beta_20.json", "question_bank_expansion_30.json", "question_bank_expansion_50.json"];
        const banks = await Promise.all(files.map(async (file) => {
          const response = await fetch(`../app-content/${file}`, { cache: "no-store" });
          if (!response.ok) throw new Error(`${file} unavailable`);
          return response.json();
        }));
        const merged = banks.flatMap((bank) => Array.isArray(bank.items) ? bank.items : []);
        const demoResponse = await fetch("../app-content/question_bank_public_demo_50.json", { cache: "no-store" });
        const demoBank = demoResponse.ok ? await demoResponse.json() : null;
        const demoMerged = demoBank && Array.isArray(demoBank.items) ? demoBank.items : [];
        if (merged.length) fullItems = merged;
        if (demoMerged.length) demoItems = demoMerged;
      } catch (error) {
        console.warn("Using fallback items:", error.message);
      }
      activePool = document.getElementById("poolMode").value;
      allItems = activePool === "demo" ? demoItems : fullItems;
      items = allItems;
      renderFilters();
      applyFilters();
      renderStats();
      loadGlossary();
    }

    loadBetaItems();
  </script>
</body>
</html>

```
