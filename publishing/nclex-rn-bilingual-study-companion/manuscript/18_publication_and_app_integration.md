# Chapter 18

## 書籍、App 與出版產品整合

### 18.1 為什麼要書和 App 一起做

單純書籍的問題是互動不足，讀者看完之後不一定知道自己哪裡弱。單純 App 的問題是容易變成刷題工具，缺少章節框架、合規說明和深度復盤。對 NCLEX-RN 這類高壓考試，最合適的產品形態不是二選一，而是書本提供方法，App 提供練習，督導提供解釋，題庫提供資料。

本書可以作為主教材；App 可以作為低風險 demo、錯題標籤工具、glossary trigger 和 learner report 生成器；完整題庫可以作為內部審核後的擴展產品；督導班可以把書和 App 放進實際學習節奏。這樣形成一條產品線，而不是孤立的一本 PDF。

### 18.2 讀者旅程

第一層：公開文章。讀者通過澳洲 RN、GCAN、AHPRA Stream B、NCLEX-RN 備考文章進入。

第二層：新書預告頁。讀者理解產品不是官方工具，而是 bilingual clinical judgment support。

第三層：公開 App demo。讀者試用 50 題低風險題，看到錯題標籤、關聯詞彙、learner report。

第四層：書本/Workbook。讀者購買或加入小組後，用本書系統學習。

第五層：督導小組或課程。讀者帶著錯題報告進入討論，形成持續學習。

第六層：內部完整題庫。只有在 RN review 和合規審核完成後，才逐步開放。

### 18.3 App 功能與章節對應

| App function | Book chapter | Learning purpose |
| --- | --- | --- |
| Question drill | Chapter 3-9 | 練 clinical judgment |
| Wrong tags | Chapter 13, 16 | 找主要錯因 |
| Related glossary after wrong answer | Chapter 14 | 在錯題時補詞彙 |
| ATT countdown | Chapter 1, 10 | 時間規劃 |
| Learner report | Chapter 16, 17 | 督導討論 |
| Wrong-answer-only mode | Chapter 13 | 重複修補弱項 |

這種對應關係能讓 App 不只是工具，而是書本的一部分。每個按鈕都應回答「它服務哪一章的學習方法？」

### 18.4 書籍版式建議

正式版不宜做成密密麻麻的講義。建議每章使用以下結構：

- Chapter opener：本章要解決什麼錯誤。
- Core framework：核心概念與中文拆解。
- Bilingual terms：保留英文考試詞。
- Worked example：一題完整拆解。
- Wrong-answer tags：錯因分類。
- Supervisor prompt：督導討論題。
- App drill：對應練習模式。
- Review sheet：可填寫表格。

每章都按同一節奏，讀者會更容易形成習慣。排版上，中文主體應舒適可讀，英文詞彙保持醒目但不要喧賓奪主。醫護教育書不需要過度花哨，重點是清楚、穩定、可信。

### 18.5 版本管理

建議分成四個版本：

v0.1 internal skeleton：章節骨架與合規框架。

v0.2 expanded Chinese review draft：中文主體與 workbook 擴寫。

v0.3 RN review draft：臨床高風險內容送 RN / nursing educator review。

v1.0 public beta：只公開審核後內容、低風險 demo 題、明確 disclaimers。

每個版本都應保留 changelog。尤其是臨床內容修正，例如 item count、fundal massage 表述、Stream B 流程 caveat、local progress storage disclaimer，都應記錄何時修正、為什麼修正。

### 18.6 出版物組合

可以設計三個層級：

Starter PDF：80-120 頁，包含 route map、test language、clinical judgment、wrong-answer workbook、demo app access。

Study Companion：200-300 頁，包含完整章節、更多 worked examples、glossary、worksheets、題庫使用指南。

Supervised Cohort Pack：給督導班使用，包含 teacher notes、learner reports、review records、weekly lesson plan、RN review log。

不要一開始就承諾「大型全科 NCLEX 百科」。更好的品牌定位是：Chinese-speaking Stream B nurses 的 clinical judgment bridge。

### 18.7 Payhip / Public Listing 文字邊界

產品頁可以寫：

> An independent bilingual study companion for Chinese-speaking nurses preparing for NCLEX-RN within an AHPRA/NMBA Stream B-aware learning context.

中文可以寫：

> 本書是面向華語護理師的 NCLEX-RN 臨床判斷雙語備考指南，特別關注 AHPRA/NMBA Stream B 考生常見的英文題幹、優先順序、委派、藥理風險、NGN 病例與 OSCE 轉換問題。

必須避免：

- 保證通過。
- 暗示官方授權。
- 暗示題目來自真題。
- 暗示完成本書即可完成註冊或移民。

### 18.8 App Demo 的公開策略

公開 App demo 應保持低風險：題量少、題目原創、明確 disclaimers、無 pass prediction、無高風險臨床承諾。它的功能不是替代完整產品，而是讓讀者理解學習方法。尤其是 Glossary Flashcards，現在只在答錯時出現關聯詞彙，這個設計很好，因為它避免頁面像字典，也讓詞彙學習服務錯題復盤。

未來 App 可增加：

- topic filter.
- wrong-answer-only queue.
- glossary search in report page.
- export learner report.
- supervisor view.
- local storage warning.
- optional account/sync only在合規評估後。

### 18.9 隱私與資料

若 App 只用 localStorage，必須提醒使用者：資料儲存在本裝置，清除快取會重置。若未來加入帳號、同步、督導報告或 email subscription，就會涉及個人資料與學習記錄，必須有清楚 privacy notice。醫護相關學習資料可能暴露個人職涯、考試、移民和健康壓力狀態，不應隨意收集。

若督導班保存 learner report，建議最小化資料：只保存學習所需資訊，避免不必要的身份、醫療或移民敏感資料。分享案例時使用匿名化處理。

### 18.10 本章總結

本產品真正有價值的地方，不是單本書、單個 App 或單篇文章，而是它們之間的結構：文章引流，書本建立方法，App 生成錯題資料，督導把資料變成行動，RN review 確保臨床安全。這樣的產品線，比單純賣一本題庫更可信，也更適合海外督導學習中心的定位。
