# OTC 系統診斷程序

## 現行可用方式：ChatGPT 訂閱 + 檔案交接

學生完成 App 後下載原始 JSON。OTC 收件後，可在目前工作對話交給助手處理；或使用 `/apps/english-four-skills-check/diagnostic/` 工作台。

1. 匯入原始 JSON，下載初評工作單。把工作單附到 ChatGPT，要求回傳純 JSON 檔。
2. 匯入初評 JSON，程式檢查引文是否存在於原稿，下載包含原稿及初稿的複核工作單。
3. 將複核工作單交到 ChatGPT，取得 `report` 與 `changes`。
4. 匯入複核 JSON，檢查後下載 HTML 與 JSON。HTML 用瀏覽器列印為 PDF。

目前需交接檔案，不是網站無人值守生成。ChatGPT 月費不包含 API 用量。工作台不自動把檔案上傳；下載的工作單含原稿，傳送前確認授權和必要資料。不要使用學生真名或證件。

## 本機執行

需 Node.js 22+，在網站專案根目錄：

```
node scripts/diagnostic-workflow.cjs prepare source.json - work/case-001
node scripts/diagnostic-workflow.cjs review source.json draft.json work/case-001
node scripts/diagnostic-workflow.cjs finalize source.json reviewed.json work/case-001
```

每個個案用獨立資料夾。不要把真實學生檔案 commit 或發布到網站。

## 口說界線

訂閱工作台版本尚未處理音訊。原始 JSON 的 recordingPresent 只表示當時 App 頁面有檔案，不代表已收到音訊。本程序一律把未收到的音訊標為缺件；不評發音、流暢度或口說分數。

`lib/english-diagnostic.cjs` 保留日後 API 路徑：可接收兩份各不超過 2 MB 的音檔，轉寫後只分析文字內容與組織；聲學評閱尚未實作。需要服務端 API 金鑰及獨立費用，此路徑未部署成公開接口。`generate()` 使用兩次實際模型呼叫並記錄 response ID。未驗證真實 API 生成，不宣稱已上線。

## 樣本與验证

sample-report 的數據及文字全為虛構。原始 TXT/JSON 使用 App 當前報告函式生成，擴充診斷樣本不是實際 API 執行。初評、複核及樣本 JSON 可下載作功能測試。不要把樣本當學生測試成績或假教師簽名。

測試：`node --test tests/english-diagnostic.cjs`。範圍為程式資料一致性、缺件限制、引文、雙階段接口模擬與 HTML 轉義；不是測驗信效度、真實語音或實際 API 成功率驗證。
