# 首頁內容分類調整（2026-10-01）

用戶要求：先調整內容分類及子頁對應；保留已核准頁頭，不改版式。

## 行業用語參考

- IDP 香港：https://www.idp.com/hongkong/ — 留學諮詢、選校及申請服務。
- Immigration Advice Service：https://iasservices.org.uk/ — 按簽證／居留類別組織服務；不將同行資質套用到 OTC。
- Kings Education：https://www.kingseducation.com/ — 學術課程與英語課程分開，藝術為學科方向。
- 參考分類和服務名稱，不複製同行文案、認可或保證。

## 首頁分類及目的頁

| 分類 | 目的頁 |
| --- | --- |
| 留學規劃與申請 | /zh/study-planning/、/zh/countries/、/zh/subject-planning/、/zh/services/#study |
| 移民與簽證 | /zh/services/#visa、/zh/immigration-info/ |
| 課程與教學 | /zh/teaching/、/zh/othm-qualifications/ |
| 翻譯與商務溝通 | /zh/services/language-context-studio/ |
| 編輯與出版 | /zh/services/#publishing |
| 海外生活與就業支援 | /zh/services/#living |
| 院校與機構合作 | /zh/education-partners/ |
| 資訊與學習資源 | 留學導報、全站目錄的學習工具、海外書局、課程資料 |

藝術與設計保留於 /zh/subject-planning/#art，連結原有專業申請頁。原服務 URL 保留。學科與國家不再各自作首頁一級業務。

服務總覽及關於頁採用相同三項主業名稱。新增教學總覽以現有子頁模板呈現，連結既有課程詳頁。

## 保留項目

首頁全部內嵌 CSS、共用 styles.css、頁頭 HTML、字體、顏色、欄寬及響應式規則不改。首頁原有課程、工具、出版等錨點保留，改為相應分類入口。/zh/ 仍由既有 Vercel 設定導向根首頁。

## 檢查

- 首頁 CSS 及 masthead 與原版逐字比較相同。
- 桌面 1440px 與手機 390px：首頁、服務總覽、教學總覽、學科總覽、關於頁無水平溢出。
- 核對更新頁面的站內連結、錨點及新教學頁的搜尋、目錄和 sitemap 記錄。
- 本輪不是全站每篇服務文案重寫；深層頁原有內容保留。
