# 客戶中心正式發票

2026-11-21：新增「發票與付款」。後端使用 production 的 OTC_LIVE_STRIPE_SECRET_KEY，固定核對英國 OTC 商戶 acct_1Ud3jy3kRyy5p3ml，不回退至測試金鑰。

GET /api/client-invoices 每次使用 Neon 新鮮 session，要求已驗證電郵；Stripe 客戶和發票的電郵、customer ID、livemode 均核對。不接受瀏覽器指定的電郵或客戶編號，不公開草稿、內部 metadata、地址或付款方式。回應不快取。

付款在 Stripe Hosted Invoice Page 完成。頁面每分鐘、重新取得焦點及手動重新整理時重新讀取 Stripe；不以跳轉成功判定付款成功。此版本採即時查詢，沒有背景 webhook 同步或自動入帳 Notion。付款失敗顯示錯誤並註明舊資料。

每個 Stripe 客戶最多顯示最近 100 張，若有較早紀錄會明示。Stripe email 查詢區分大小寫；新發票的收件電郵應使用與已驗證帳戶相同的小寫電郵。如需更換收件電郵，須由顧問在 Stripe 核對修改。

驗收：27 項測試通過；正式 API 唯讀核對既有首期發票已付清；本地非正式驗收資料完成桌面及 390px 手機畫面檢查。不代客登入、不建立真實付款、不變更既有發票。正式客戶本人登入後的驗收仍須以其帳戶完成。
