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
