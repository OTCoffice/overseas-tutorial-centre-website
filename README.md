# OTC Study Hub

Static Vercel prototype for OTC / Overseas Digital Hub.

## Routes

- /
- /study-guides/
- /publishing/
- /publishing/media/
- /publishing/bilingual-study-support-market-report/
- /zh/publishing/bilingual-study-support-market-report/
- /publishing/btec-level-3-business-assignment-writing-toolkit/
- /zh/publishing/btec-level-3-business-assignment-writing-toolkit/
- /publishing/btec-level-3-business-assignment-writing-toolkit/sample/
- /courses/
- /services/
- /zh/services/
- /university-applications/
- /study-group-2026-applications/
- /zh/study-group-2026-applications/
- /application-service-standards/
- /advanced-entry-china-programmes/
- /university-partnerships/
- /othm-level-5-business-management/
- /apps/
- /apps/ucbelt-speaking/
- /belt/
- /resources/
- /australia-business-landing/
- /ai-business-studio/
- /consultation-chat/
- /insights/
- /zh/insights/example-article/
- /search/
- /about/
- /lms-review/
- /lms-review/wang-zhuoying-summer-2026/

## Build

No build step is required. To regenerate static pages:

```bash
node generate-site.js
```

## 留學導報文章編輯 Prompt

發布或改稿前先做版面平衡檢查：如果正文只有 4-5 個短段落，而右側側欄同時出現速讀、類型卡、欄目定位、閱讀清單、英文對照和官方資源，頁面會變成左輕右重。這類實用清單文章應先補正文密度，例如加入可掃描表格、流程清單、提交前核對、常見錯誤修正或小案例；同時把側欄切到 `sidebarMode: "compact-practical"`，保留速讀、3-4 張重點卡和官方資源即可。

導報文章不要把自己放進 `relatedReadings`。樣本發布後用本地頁面檢查桌面版與手機版：主欄應有足夠閱讀重量，右側只作輔助速查，不能讓讀者感覺正文很薄、側欄反而像主內容。

## 新建網頁 Prompt：服務導覽台格局

新建 OTC 公開路線頁、服務頁、暑校頁、VET/TAFE 頁或 provider pathway 頁時，優先使用「服務導覽台 / Service Review Desk」格局：壓縮報頭、右側 4 個高價值入口、四項頂部 action strip、左側主流程、右側側欄導引。優先復用 `service-herald-grid`、`service-herald-main`、`service-guide-side`、`service-situation-grid`、`service-route-list`、`service-guide-card`、`service-side-links` 和 `service-mini-index`。

`/zh/australia-vet-tafe-pathways/` 及其所有子頁固定採用服務導覽台格局：總覽只做乾淨分流，詳細課程表、官方入口、文件清單和風險提示放在子頁。不要用散亂等寬卡片作為主要架構。若列出院校或 provider，必須顯示院校官方網站與「通過 OTC 辦理」或相應 OTC action button。

公開頁只說 OTC 進行文件初篩、官方來源核對、教育協調與個案跟進；不得披露上級代理鏈、私有平台、商業條款、內部轉介或後台交接記錄。移民、法律、稅務、就業合約、醫療註冊與專業執照等受監管事項，一律寫成官方核對或合資格人士轉介。
