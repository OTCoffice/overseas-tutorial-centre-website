# Chapter 28

## 500 題題庫藍圖與章節索引

### 28.1 為什麼需要藍圖

若題庫只是一堆題目，學員很快會變成隨機刷題。真正有教學價值的 500 題題庫應有藍圖：每題屬於哪個主題、對應哪個章節、測哪種 clinical judgment、主要錯題標籤是什麼、是否需要 RN review。這樣題庫才可教、可審、可更新。

### 28.2 題庫分配建議

| Domain | Suggested items | Book chapters |
| --- | --- | --- |
| Question language | 50 | 14 |
| Clinical judgment / NGN | 80 | 3, 5, 23 |
| Priority / delegation | 80 | 4, 19, 26 |
| Pharmacology | 70 | 6, 20, 27 |
| Safety / infection | 70 | 9, 20, 26 |
| Maternal-child | 50 | 7, 21, 27 |
| Mental health / communication | 50 | 8, 21, 27 |
| Process / OSCE / study strategy | 50 | 1, 10, 11, 16, 17 |

這不是固定比例，但可以作為第一版內部題庫審核藍圖。

### 28.3 題目元資料欄位

每題建議至少包含：

- id
- domain
- category
- stem
- stem_zh
- options
- answer
- rationale
- rationale_zh
- wrong_tags
- clinical_risk_level
- reviewer_status
- source_note
- linked_chapter

這些欄位可以讓 App 顯示題目，也能讓 RN reviewer 篩選高風險內容。若沒有 reviewer_status，題目不應進入正式公開題庫。

### 28.4 Clinical Risk Level

Low risk:

- 題幹語言。
- study strategy。
- basic glossary。
- route map caveat。

Medium risk:

- priority/delegation。
- general safety。
- OSCE phrasing。

High risk:

- pharmacology toxicity。
- maternal hemorrhage。
- fetal monitoring。
- suicide/self-harm。
- sepsis。
- infection precautions。
- pediatric/newborn deterioration。

高風險題必須進入 RN review queue。

### 28.5 題庫與 App 的呈現原則

公開 demo 只顯示低風險或已審核題。完整題庫即使存在，也不應默認公開。App 應清楚標明題池模式，例如 public demo pool、internal review pool、supervised cohort pool。不同題池的 reviewer status 不同，不能混淆。

### 28.6 章節索引示例

| If learner misses... | Send them to... |
| --- | --- |
| first/priority wording | Chapter 14, 26 |
| delegation scope | Chapter 4, 19, 26 |
| NGN long case confusion | Chapter 5, 23 |
| medication adverse effects | Chapter 6, 20, 27 |
| postpartum bleeding | Chapter 7, 21, 27 |
| suicidal ideation response | Chapter 8, 21, 27 |
| airborne/contact/droplet confusion | Chapter 9, 20 |
| no study structure | Chapter 10, 24 |
| cannot explain answer orally | Chapter 11, 22 |

### 28.7 題目審核工作流

1. Draft item written.
2. Internal educational editor checks clarity and bilingual wording.
3. Item assigned risk level.
4. RN reviewer checks high/medium risk items.
5. Compliance editor checks trademark/source/disclaimer issues.
6. Item enters beta bank.
7. Learner feedback collected.
8. Item revised or retired.

每道題都應有版本記錄。若 RN reviewer 修改 rationale，保留原因。若題目被退回，標記 reject reason。

### 28.8 題庫報告模板

| Domain | Total | Reviewed | Needs revision | Approved |
| --- | --- | --- | --- | --- |
| Question language |  |  |  |  |
| Clinical judgment |  |  |  |  |
| Priority/delegation |  |  |  |  |
| Pharmacology |  |  |  |  |
| Maternal-child |  |  |  |  |
| Mental health |  |  |  |  |
| Safety/infection |  |  |  |  |

這張表可以放入出版管理區，作為內部質控證據。

### 28.9 本章總結

500 題題庫不是數量工程，而是質控工程。真正能支撐出版和課程的題庫，需要 metadata、審核、章節索引和風險分級。沒有這些，題量越大，風險越高。
