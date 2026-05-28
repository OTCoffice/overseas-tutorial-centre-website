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
