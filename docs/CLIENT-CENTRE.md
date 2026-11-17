# OTC 客戶中心

入口 `/client-portal/`，管理頁 `/client-portal/manage/`。沿用官網服務頁的視覺與頁尾；內部管理頁沿用原學生工作台，支援多類客戶服務。

## 帳戶與權限

使用 Neon Auth 電郵與密碼登入，所有個案 API 另行要求電郵已驗證。密碼、驗證碼及 session 均由 Neon 處理，網站不另存密碼。驗證與密碼重設使用電郵 OTP。客戶只看 clientId 等於自己穩定帳戶 ID 的個案；不按電郵自動認領既有個案。

管理員角色存於 otc_portal_members，以帳戶 ID 綁定。第一次啟用時，只有 OTC_PORTAL_OWNER_EMAIL 指定、且已驗證的官網持有人可建立首個管理員角色；角色建立後不會因更改電郵而轉移。其他管理員需由持有人另行分配，沒有公開升權 API。

## 服務與文件

客戶可新增服務需求、查看進度及下一步、留言和上傳文件。建立需求不代表正式委託或對外提交。管理員選擇已驗證帳戶分配個案，填寫「對客公開摘要」及「對客下一步／待辦」。內部背景、風險、待辦、操作預覽和批准紀錄不會傳至客戶 API。

文件預設不公開。管理員明確勾選「對客公開全部版本」後，該個案客戶可下載整組版本；勾選前請核對歷史版本。客戶的個案留言供雙方查看。上傳只作內部協調，不會寄信、付款或向院校／政府提交。

附件目前存於私有 Postgres bytea，單份 2 MB、每個案最多 100 份。下載須再核對帳戶、個案及發布權限，沒有公開檔案網址。規模擴大時可遷至私有物件儲存，維持相同權限邊界。

## 製作與部署

- `npm run build:portal` 重新產生前端 bundle 與入口頁。
- 首頁仍由 content/chinese-home.cjs 產生；site.js 的導覽含客戶中心。
- `npm run test:portal` 執行個案權限、資料投影、跨站操作及身份測試。
- `node scripts/client-portal-migrate.mjs` 建立資料表，不會覆寫既有個案；執行前配置 DATABASE_URL（本地可用 .env.local）。
- `node scripts/preview-client-portal.mjs` 啟動 localhost:4317 預覽，只限本機。正式 Cookie 使用 HTTPS。

前端成品已提交，正式部署不執行全站重建。新增 API 使用 Vercel Node 的 api/*.js，服務共用模組位於 lib/*.mjs。預覽與正式環境的 Neon 分支可能不同，應分開確認 schema 和帳戶設定。

必需環境變數：DATABASE_URL、NEON_AUTH_BASE_URL、NEON_AUTH_COOKIE_SECRET、OTC_PORTAL_OWNER_EMAIL。只在部署平台與忽略的本地環境檔管理，不可提交值。

## 寄件服務

目前使用 Neon 共享寄件服務提供驗證及密碼重設。它有共享寄送額度；大量正式客戶上線前應在 Neon 配置 OTC 的自有 SMTP 寄件服務，並實測驗證、重設及垃圾郵件情況。介面不承諾無限寄送。

原 ChatGPT 私人學生工作台保持獨立，沒有自動匯入其私有正式個案。需要遷移時，由持有人匯出、核對後逐案分配，文件亦須重新核對存取權。
