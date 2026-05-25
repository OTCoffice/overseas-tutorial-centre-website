const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manuscriptDir = path.join(root, "manuscript");
const markerStart = "<!-- OTC_CHINESE_EXPANSION_START -->";
const markerEnd = "<!-- OTC_CHINESE_EXPANSION_END -->";

const expansions = {
  "00_front_matter.md": `
## 中文擴充說明：本書不是題庫替代品

這本書的定位不是「把所有護理知識重新教一遍」，也不是替代 UWorld、Archer、Kaplan、Saunders 或任何官方資料。它要解決的是另一個更具體的問題：華語護理師在面對英文 NCLEX-RN 與 AHPRA/NMBA Stream B 路線時，經常不是完全不懂臨床，而是無法把已有的臨床經驗轉換成英文題幹中的安全判斷。

因此，本書每章都採用同一個節奏：先用中文拆解問題，再用英文保留核心考試語言，最後用錯題分類把失誤變成可複習的資料。讀者不應只看「正確答案」，而應記錄自己為什麼選錯：是沒有看見危險線索，還是看見了但沒有排序；是英文詞彙誤讀，還是把台灣病房中的實際分工直接套到 NCLEX 的 RN scope。

對 Stream B 考生來說，這種方法特別重要。你準備的不是單一筆試，而是一條由文件、英文、MCQ、OSCE 與註冊標準組成的路線。每一次練題，都應同時服務三件事：建立英文臨床語言、穩定 entry-level RN 判斷、為後續 OSCE 的口頭表達和安全行動打底。

## 使用節奏建議

如果你只有四週時間，不要試圖從頭到尾精讀。先讀 Chapter 1、2、3、4、10，建立路線、考試框架、錯題方法和時間表；再按弱項進入藥理、產兒、精神科、安全感染控制。如果你有八到十二週，可以每週固定完成兩章，並把 App 中的錯題標籤抄回本書的 worksheet。這本書的真正價值不在於讀完，而在於反覆使用。
`,

  "01_route_map.md": `
### 1.8 中文深讀：把「路線」和「備考」分開管理

很多考生一開始最焦慮的是：「我到底能不能走通？」但實務上，更有效的問題是：「我現在卡在哪一個節點？」Stream B 路線至少有三種不同性質的工作：第一是監管文件工作，例如 self-check、portfolio、身份與註冊證明、英文與近期執業證據；第二是考試工作，例如 NCLEX-RN 的 MCQ 準備；第三是臨床展示工作，例如 OSCE 所要求的溝通、安全、評估與行動。這三類工作會互相影響，但不能混成一團。

中文考生常見的時間浪費，是把所有問題都放進「我要趕快刷題」裡。文件還沒有整理，卻開始每天做大量題；英文標準還沒有確認，卻以為 NCLEX 通過後就萬事大吉；OSCE 仍在後面，卻完全不練口頭交代和安全語言。這種準備方式短期看起來很努力，長期卻容易反覆返工。

比較穩妥的做法是建立一張個人 route map。橫軸寫時間，縱軸分成 official process、NCLEX study、OSCE readiness、English evidence、finance and travel 五條線。每週檢查一次：哪一條線有新文件？哪一條線有官方 deadline？哪一條線只是社群傳言？只要你能把「官方要求」和「備考建議」分開，就不容易被焦慮帶著跑。

### 1.9 Route Map Example：台灣五專護理師的常見情境

假設一位台灣五專護理師已有臨床經驗，準備研究 AHPRA/NMBA Stream B。她的第一步不是立刻報名昂貴課程，而是先做 self-check，保存結果截圖與官方說明，整理自己的學歷、註冊、工作證明和英文狀態。第二步是把 NCLEX-RN 當作 MCQ 階段準備，而不是把它誤認為澳洲註冊本身。第三步是在刷題早期就保留 OSCE 意識：遇到安全題時，不只問「答案是什麼」，也問「如果站在考站裡，我要怎樣說出 assessment、action、escalation？」

這個例子不是承諾任何人都會被歸類為同一路線，也不是替代個案建議。它只是提醒：準備 Stream B 時，最重要的是讓每個行動都有官方位置。你讀 GCAN、準備英文、做 NCLEX 題、練 OSCE，都應能回答一句話：這一步在我的官方路線圖中服務哪一個缺口？

### 1.10 Supervisor Prompt / 督導討論題

請用中文回答以下問題，再把關鍵詞翻成英文：

1. 我目前最確定的官方節點是什麼？
2. 我目前只是聽說、尚未核實的資訊是什麼？
3. 如果今天停止刷題，我還有哪些文件或英文證明需要補齊？
4. 我的 NCLEX 錯題，哪些其實已經暴露了 OSCE 風險？
`,

  "02_2026_test_plan.md": `
### 2.7 中文深讀：不要把 Test Plan 當成考前公告

Test Plan 對很多考生來說很枯燥，因為它不像題庫那樣立即給你分數。但從學習設計角度看，Test Plan 是整個備考的骨架。它告訴你考試要測的是 entry-level RN 的安全能力，而不是測你能不能背出一本內外科教科書。這個差別會直接改變你的讀書方法。

如果你用傳統科目方式準備，很容易陷入「內科還沒讀完，所以不能開始做題」的拖延。但 NCLEX-RN 的題目常把不同科目的線索放在同一個情境裡：一個術後病人可能同時涉及 breathing、pain、infection、mobility、medication 和 discharge teaching。考試要看的不是你把每一科分開背完，而是你能不能在有限資訊中做出安全排序。

因此，本章建議你把 Client Needs 做成四欄筆記。第一欄寫英文名稱，第二欄寫中文理解，第三欄寫高頻題幹語言，第四欄寫自己的錯題例子。每做錯一道題，都不要只記疾病名稱，而要回到 Test Plan 問：這道題其實在測哪一類 client need？它是安全環境問題、心理社會問題、健康教育問題，還是生理穩定問題？

### 2.8 Bilingual Client Needs Mini Map

| English area | 中文理解 | 讀題時要問 |
| --- | --- | --- |
| Safe and Effective Care Environment | 安全有效照護環境 | 誰最危險？誰需要 RN？能不能委派？ |
| Health Promotion and Maintenance | 健康促進與維持 | 這是篩查、預防、教育還是成長發展？ |
| Psychosocial Integrity | 心理社會完整性 | 情緒、認知、危機或溝通是否影響安全？ |
| Physiological Integrity | 生理完整性 | 呼吸、循環、藥物、風險與急性變化在哪裡？ |

這張表不需要背得很漂亮，但要用到錯題本裡。當你發現自己連續錯在同一欄，就代表你不是「運氣不好」，而是有一種判斷模式需要重建。

### 2.9 Test Plan Review Drill

選三道最近做錯的題，逐題完成下列句子：

- This item mainly belongs to: ______.
- The most important cue was: ______.
- I missed it because: knowledge / English wording / priority / delegation / safety.
- 中文復盤：我當時把______誤認成______。

完成後，把三題放在一起看。若三題都與 priority 有關，下一週不要急著增加題量；先回到 Chapter 4 重建優先順序框架。
`,

  "03_clinical_judgment.md": `
### 3.7 中文深讀：臨床判斷不是直覺，而是可訓練的流程

有經驗的護理師常說「我一看就知道病人不對勁」。這種直覺很寶貴，但在 NCLEX-RN 中，直覺必須被翻譯成可以被考題測量的步驟。題目不會讓你走到病床前看一眼，而是給你幾行文字、幾個生命徵象、幾句病人陳述，要求你在英文資訊中做出安全選擇。

臨床判斷的第一步不是 answer，而是 cue。很多錯題不是因為考生不知道疾病，而是因為把 cue 的重量看錯了。例如，題幹同時出現「疼痛 5/10」、「想喝水」、「新發呼吸困難」、「家屬焦慮」時，四個資訊都是真實的，但不是同等重要。NCLEX 要測的是你能否把生理危險、急性變化和安全風險放在前面。

第二步是把 cue 變成 hypothesis。這裡不要急著診斷，因為 NCLEX-RN 測的是 nursing judgment。你不一定要說出完整醫學診斷，但要知道這個 cue 可能代表 oxygenation、perfusion、bleeding、infection、medication adverse effect 或 mental health crisis。第三步才是排序：哪一個 hypothesis 如果不處理，最可能造成 harm？

### 3.8 Worked Example：把錯題拆開

題幹：A client taking furosemide reports new muscle weakness.

錯誤直覺：病人只是覺得無力，可以等一下再看。

復盤流程：

1. Recognize cue: furosemide + new muscle weakness.
2. Analyze cue: 可能與 electrolyte imbalance 有關，尤其要想到 potassium loss。
3. Prioritize hypothesis: 電解質異常可能影響 cardiac rhythm，因此不是普通疲勞。
4. Take action: 優先評估、查看相關 labs、按情境通知 provider。
5. Wrong-answer tag: knowledge_gap + cue_recognition + prioritization.

中文關鍵句：我不是在背「furosemide 等於低鉀」這一個孤立知識，而是在練習「藥物 + 新症狀 + 心臟風險」這條推理鏈。

### 3.9 Clinical Judgment Journal

每次錯題後寫三句話即可：

- 我漏掉的 cue 是：______
- 我當時以為最重要的是：______
- 重新排序後，真正最重要的是：______

這三句比抄整段解析更有效，因為它們會暴露你的思考習慣。當同一種句型出現五次，你就找到自己的核心弱點了。
`,

  "04_prioritization_delegation.md": `
### 4.7 中文深讀：優先順序題的核心不是「哪個對」，而是「哪個先」

華語考生在 priority 題中最常見的失誤，是把四個選項都當成獨立知識判斷。其實很多 priority 題的四個選項都可能在某種情境下正確，但考試問的是 first、priority、most appropriate、immediate。這些詞不是裝飾，而是決定答案的方向。

看到 priority 題時，先不要讀選項。先問題幹中有沒有急性變化、新發症狀、呼吸循環問題、出血、感染、神經狀態改變、自傷他傷風險、藥物毒性或 unstable client。如果有，這些通常比 routine teaching、comfort、documentation、stable chronic problem 更靠前。

委派題也是同一個邏輯。NCLEX-RN 中的 RN 責任，不只是「我會不會做」，而是「這件事是否需要 RN judgment」。assessment、initial teaching、evaluation、unstable client、new symptom、complex decision 通常不能簡單交出去。UAP 更適合 stable client 的 routine ADL、測量、協助與回報，而不是分析或判斷。

### 4.8 Priority Ladder / 優先階梯

請按下列順序讀題：

1. Immediate threat to life: airway, breathing, circulation, severe bleeding, shock.
2. Safety threat: fall risk, infection spread, suicide risk, medication harm.
3. Acute change: new, worsening, unexpected, unstable.
4. Assessment before action: 當資訊不足且沒有立即生命危險時，先評估。
5. Teaching, comfort, documentation: 通常重要，但較少是 first priority。

這不是機械規則。真正考題仍要看 context。但當你完全不知道如何排序時，這個階梯能防止你被「看起來很專業但不緊急」的選項吸走。

### 4.9 Delegation Drill

把下列任務標成 RN / LPN-LVN / UAP / Do not delegate without more context：

- initial assessment of new chest pain.
- ambulating a stable postoperative client.
- teaching insulin injection to a newly diagnosed client.
- reporting a blood pressure reading.
- evaluating whether pain medication worked.

中文復盤：如果任務包含「首次、評估、教學、判斷、評價、不穩定」，就要高度懷疑需要 RN。若任務是「穩定、例行、可預期、可回報」，才可能考慮委派。
`,

  "05_ngn_case_method.md": `
### 5.6 中文深讀：NGN 長病例要讀成「時間線」，不是讀成故事

NGN case study 讓很多考生焦慮，因為文字長、資料多、題型變化大。但長病例並不等於每一句都同等重要。你要做的是把資料整理成時間線：病人原本怎樣，現在出現什麼變化，哪一個變化最危險，護理行動後結果是否改善。

第一遍讀病例，只抓身份和背景：年齡、主要問題、手術或診斷、重要病史。第二遍抓 abnormal cues：生命徵象、疼痛、呼吸、意識、尿量、出血、labs、藥物反應。第三遍抓 trend：是 stable、improving 還是 worsening。第四遍才看題目要求：highlight cues、choose actions、evaluate outcomes，還是 complete bow-tie。

NGN 的本質是連續判斷，不是單點選擇。前一題選錯 cue，後面 action 和 evaluation 就容易連環錯。因此練 NGN 時，不要只看最後答案；要標出自己在哪一步開始偏離。

### 5.7 Case Grid / 病例整理格

| 欄位 | 要填什麼 | 例子 |
| --- | --- | --- |
| Background | 病人基本情境 | postoperative, diabetic, pregnant |
| Current cues | 目前重要線索 | SpO2 88%, restless, new weakness |
| Trend | 變好或變壞 | increasing, decreasing, new onset |
| Risk hypothesis | 可能風險 | hypoxia, bleeding, sepsis |
| Nursing action | 現在行動 | assess, reposition, hold medication, notify |
| Evaluation | 如何判斷有效 | improved SpO2, stable vitals, less distress |

### 5.8 NGN 復盤問題

每做完一個 case，請回答：

1. 哪一個 cue 最早提示危險？
2. 我是否被不重要的背景資訊分散？
3. 我的 action 是否直接回應最危險的 hypothesis？
4. evaluation 是否和 action 對得上？

如果你答不出第 4 題，代表你可能只是在猜 action，而不是完整使用 clinical judgment cycle。
`,

  "06_pharmacology_language.md": `
### 6.7 中文深讀：藥理題要讀「風險模式」

藥理是華語考生最容易恐慌的部分，原因不是只有藥名多，而是英文商品名、通用名、藥物類別、副作用、病人教育和 lab monitoring 會混在一起。若你試圖逐個藥名硬背，很快會失去方向。更有效的方法是按風險模式整理。

第一類是 electrolyte and cardiac risk，例如 diuretics、digoxin、potassium 相關題。第二類是 bleeding risk，例如 anticoagulants、antiplatelets、thrombolytics。第三類是 respiratory/CNS depression，例如 opioids、benzodiazepines、sedatives。第四類是 toxicity and monitoring，例如 lithium、aminoglycosides、vancomycin、antiepileptics。第五類是 teaching safety，例如不要突然停藥、何時回報、如何避免交互作用。

看到藥理題時，不要先問「我背過這個藥嗎？」先問四個問題：這個藥最怕什麼 harm？需要看哪個 lab 或 assessment？病人哪句話表示 misunderstanding？如果出現 adverse cue，RN 的 first action 是什麼？

### 6.8 Medication Risk Card Template

每個高頻藥物或藥物類別，用一張卡即可：

| 欄位 | 內容 |
| --- | --- |
| Drug/class | 藥名或類別 |
| Purpose | 為什麼用 |
| Major harm | 最怕的安全風險 |
| Monitor | 需要看哪些 assessment/labs |
| Teaching phrase | 病人教育關鍵句 |
| Red flag | 需要追蹤或回報的語句 |

例：loop diuretics。Major harm 可寫 dehydration/electrolyte imbalance；Monitor 可寫 blood pressure、I&O、potassium、symptoms such as weakness；Red flag 可寫 new muscle weakness or irregular pulse。

### 6.9 Pharmacology Wrong-Answer Pattern

藥理錯題常見三種：

- 只記得用途，不記得 harm。
- 只看到副作用，沒有判斷 priority。
- 把病人教育題讀成普通常識題，忽略「needs further teaching」。

復盤時不要抄一整頁藥理。只要補一張 risk card，並把錯誤標籤寫在旁邊。十張高品質 risk cards，比一百個模糊藥名更有用。
`,

  "07_maternal_child.md": `
### 7.7 中文深讀：產兒題先抓「誰正在失去穩定」

Maternal-child 題目常讓非產兒專科背景的考生緊張，但 NCLEX-RN 不會要求你像專科醫師一樣處理所有細節。它更常測 entry-level RN 是否能辨識母體或胎兒正在失去穩定。你要先問：母親有沒有出血、感染、高血壓危象、seizure 風險？胎兒或新生兒有沒有 oxygenation、glucose、temperature 或 feeding 的危險？

產前題中，severe headache、visual changes、right upper quadrant pain、vaginal bleeding、decreased fetal movement 都不應被看成普通不適。產程題中，late decelerations、absent variability、prolonged deceleration 指向胎兒氧合或 uteroplacental perfusion 問題。產後題中，boggy uterus + heavy lochia 是出血安全線索。新生兒題中，grunting、retractions、cyanosis、jitteriness、poor feeding 都可能需要立即關注。

### 7.8 Safe Framing Note / 安全措辭

產兒題尤其需要避免把考試答案寫成臨床固定動作。真實臨床會受 facility protocol、provider/midwife guidance、病人狀態和當地規範影響。本書的表述應保持兩層：NCLEX-style context 中常期待哪個 immediate nursing action；真實臨床中仍需 assessment、protocol、團隊溝通與文件記錄。

例如 fundal massage：若題幹明確呈現 boggy uterus with heavy lochia，NCLEX-style 題目常期待 fundal massage 作為 immediate action。但書中不應讓讀者形成「任何產後出血都先按摩」的反射。更安全的中文表述是：先評估 fundus 和 bleeding pattern；若確認 uterine atony，按情境、流程與團隊指引採取相應行動。

### 7.9 Maternal-Child Mini Review Sheet

| 情境 | 先問什麼 |
| --- | --- |
| Pregnancy | 有沒有 preeclampsia、bleeding、infection、decreased fetal movement？ |
| Labor | 胎心變化是否提示 oxygenation/perfusion 問題？ |
| Postpartum | uterus、lochia、vitals 是否提示 hemorrhage？ |
| Newborn | breathing、temperature、glucose、feeding 是否穩定？ |

每次錯產兒題，只填這張表的一行。目標不是把所有週數一次背完，而是先建立安全線索雷達。
`,

  "08_mental_health_communication.md": `
### 8.6 中文深讀：治療性溝通不是「說好聽的話」

精神科與 therapeutic communication 題常讓中文考生困惑，因為日常中文溝通習慣中，我們很容易安慰、建議、轉移注意力，或用自己的經驗勸對方。但 NCLEX-RN 測的是安全、界線、傾聽與以病人為中心的溝通。最好的回答不一定最溫柔，而是最能讓病人表達、維持安全、避免評判。

危險句型包括 false reassurance、giving advice、why questions、changing subject、arguing with delusion、minimizing feelings。較安全的方向是 reflection、open-ended question、presenting reality without arguing、acknowledging feelings、direct safety assessment。

### 8.7 Safety Override / 安全優先於溝通技巧

如果題幹出現 suicidal ideation、homicidal ideation、command hallucination、violent behavior、severe withdrawal、acute confusion 或 immediate danger，溝通技巧要服從安全處理。這時不是單純選最會聊天的句子，而是要直接評估風險、維持安全、移除危險物、按流程通知團隊。

中文考生常怕直接問自殺會「提醒」病人，但在護理安全評估中，直接、清楚、非評判地詢問 suicidal thoughts 是重要做法。考題若問 suicidal client 的 response，通常安全方向比含糊安慰更重要。

### 8.8 Communication Translation Table

| 不安全直覺 | 更安全方向 |
| --- | --- |
| Don't worry, everything will be fine. | Tell me what worries you most right now. |
| Why did you do that? | What was happening before you felt this way? |
| You should call your family. | Who has supported you in the past? |
| That belief is not true. | I do not see that, but I can see it feels frightening to you. |

復盤時請問：我選的句子是在替病人做決定，還是在幫病人表達和保持安全？
`,

  "09_safety_infection_control.md": `
### 9.6 中文深讀：Safety 題不是常識題

Safety and infection control 看似簡單，實際上很容易失分，因為考生會用生活常識而不是護理安全框架作答。NCLEX-RN 的 safety 題通常要你辨識 harm before comfort：跌倒、誤吸、感染傳播、用藥錯誤、氧氣安全、約束、隔離、手衛生、標本和侵入性管路風險。

感染控制題尤其要注意 isolation language。standard precautions 是底線，不是選項中所有情境的完整答案。若題幹指向 airborne、droplet、contact 或 protective environment，必須按傳播途徑思考 PPE、房間安排、訪客和轉運。不要只背「戴手套」；要問病原體如何傳播。

### 9.7 Safety Cue Bank

看到下列詞語時，要放慢速度：

- new confusion, restlessness, dizziness.
- oxygen saturation dropping.
- fever with abnormal vital signs.
- saturated dressing or pad.
- absent bruit/thrill in AV fistula.
- difficulty swallowing after stroke.
- patient trying to get out of bed unassisted.
- wrong medication, allergy, unclear order.

這些不是背景噪音，而是可能改變 priority 的 cues。安全題的正確答案常常不是最完整的計劃，而是最先防止 harm 的行動。

### 9.8 Infection Control Mini Framework

| 問題 | 中文提示 |
| --- | --- |
| What is spreading? | 病原或風險是什麼？ |
| How does it spread? | 空氣、飛沫、接觸、血液體液？ |
| Who is vulnerable? | 哪個病人免疫低下或容易受害？ |
| What stops harm now? | PPE、隔離、手衛生、清潔、通報？ |

每次做感染控制錯題時，把題目放入這四格，不要只背答案。
`,

  "10_eight_week_planner.md": `
### 10.8 中文深讀：計劃要能抵抗焦慮

很多備考計劃失敗，不是因為考生不努力，而是因為計劃無法承受焦慮。第一天排得很滿，第三天開始落後，第七天覺得自己不適合考，然後換一套資源重新開始。這種循環比少讀幾小時更傷。

有效計劃應有三個特點：可衡量、可調整、可復盤。可衡量不是每天寫「讀內科」，而是寫「完成 50 題 mixed set，復盤 10 題錯題，整理 5 個 glossary terms」。可調整是每週根據錯題標籤改下一週重點，而不是死守原表。可復盤是能看出自己在哪裡進步，在哪裡只是重複犯錯。

### 10.9 每週最低有效任務

如果工作很忙，不要讓一天失敗拖垮整週。設定最低有效任務：

- 20 題 timed practice。
- 5 題錯題完整復盤。
- 5 個 bilingual glossary terms。
- 1 張 medication risk card 或 communication card。
- 10 分鐘口頭說出一題 OSCE-style assessment/action。

這個最低版本不能替代完整備考，但能保持學習連續性。對兼職工作、輪班或照顧家庭的考生，連續性比完美計劃更重要。

### 10.10 Weekly Review Questions

每週日回答：

1. 本週最常見錯題標籤是什麼？
2. 我是因為知識不會，還是因為英文題幹/優先順序失誤？
3. 下週要減少哪一類無效學習？
4. 哪一個主題需要請督導或 RN reviewer 解釋？

當你能連續四週回答這些問題，備考就不再只是刷題，而是在建立可監督的學習系統。
`,

  "11_osce_transition.md": `
### 11.6 中文深讀：NCLEX 後半步，就是 OSCE 的前半步

很多考生把 NCLEX-RN 和 OSCE 完全分開準備：前者刷題，後者等通過後再說。這樣做會浪費時間。雖然兩者形式不同，但底層能力相通：辨識線索、排序風險、採取安全行動、溝通、評估結果、按流程升級處理。

NCLEX 題目中的 rationales 可以轉成 OSCE 語言。比如一題問 hypoxia priority，筆試答案可能是 reposition/oxygen/notify according to context；OSCE 中你需要說出 assessment、immediate action、patient reassurance、team escalation、documentation。也就是說，NCLEX 錯題不是只為筆試服務，它還能提前暴露你是否會用英文說出安全實務。

### 11.7 OSCE Language Starter

把下列句型放進口頭練習：

- I am concerned about...
- I would assess...
- My immediate priority is...
- I would escalate to...
- I would document...
- I would evaluate whether...

中文考生練 OSCE 時常卡在「知道要做什麼，但說不出來」。所以從 NCLEX 階段開始，每週挑三道錯題，用英文說出一分鐘處理流程。說得不完美沒關係，重點是建立 clinical reasoning 的口頭通道。

### 11.8 NCLEX-to-OSCE Conversion Exercise

選一道錯題，完成：

| NCLEX element | OSCE expression |
| --- | --- |
| Key cue | I noticed... |
| Main risk | I am concerned about... |
| First action | My immediate action would be... |
| Escalation | I would inform/escalate to... |
| Evaluation | I would reassess... |

如果一題不能轉成 OSCE 表達，代表你可能只背了答案，還沒有真正掌握判斷。
`,

  "12_appendices_worksheets.md": `
### Appendix F: 中文錯題復盤模板

每題錯題請控制在五分鐘內完成，不要寫成小論文。

| 欄位 | 填寫 |
| --- | --- |
| 題號/來源 |  |
| 題型 | single / SATA / NGN case / bow-tie / matrix |
| 我選的答案 |  |
| 正確答案 |  |
| 我漏掉的 cue |  |
| 我誤解的英文詞 |  |
| 錯題標籤 | knowledge / cue / priority / delegation / safety / communication |
| 一句中文復盤 |  |
| 一句英文重寫 |  |

### Appendix G: Bilingual Glossary Builder

| English term | 中文理解 | 我的例題 | 是否會用英文解釋 |
| --- | --- | --- | --- |
| priority | 不是最完整，而是此刻最急最安全 |  |  |
| delegation | 按穩定性與 scope 分派任務 |  |  |
| further teaching | 病人仍有誤解，需要再教 |  |  |
| requires follow-up | 不正常或不安全，需要追蹤 |  |  |
| evaluate | 判斷行動是否有效 |  |  |

### Appendix H: Supervisor Review Record

若本書用於小組督導或內部課程，建議保留審核記錄：

| Date | Reviewer | Scope reviewed | Issues found | Action taken |
| --- | --- | --- | --- | --- |
|  | RN / nursing educator | clinical safety |  |  |
|  | English tutor | language clarity |  |  |
|  | Compliance reviewer | trademark/source disclaimer |  |  |

這張表不是形式主義。醫護教育產品必須能說清楚哪些內容經過臨床審核，哪些仍是學習草稿。公開銷售前，尤其要把高風險題、產兒題、藥理題、精神健康危機題交由合資格護理人員確認。
`
};

for (const [file, expansion] of Object.entries(expansions)) {
  const target = path.join(manuscriptDir, file);
  let text = fs.readFileSync(target, "utf8").trimEnd();
  const block = `${markerStart}\n${expansion.trim()}\n${markerEnd}`;
  const pattern = new RegExp(`\\n?${markerStart}[\\s\\S]*?${markerEnd}`, "m");
  if (pattern.test(text)) {
    text = text.replace(pattern, `\n\n${block}`);
  } else {
    text = `${text}\n\n${block}`;
  }
  fs.writeFileSync(target, `${text}\n`);
  console.log(`Expanded ${file}`);
}
