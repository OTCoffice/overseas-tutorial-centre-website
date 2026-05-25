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
