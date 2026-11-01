# 藝術遊學與國際駐村：公開頁驗收

驗收日期：2026-11-01（Europe/London）。
公開頁：https://overseasuk.com/zh/services/art-study-residency/

## 部署與來源

PR #74 已合併，merge commit `548368a7de5c6b352803b5e4d8bb320edbb1f804`。本輪核對 main `84b7100b7855a1fdfaeb7cefb4760a846d8d94eb`。
公開 HTML HTTP 200，與該 main 的 `zh/services/art-study-residency/index.html` 逐位元組一致；兩者 SHA-256 均為 `362b7896013101d6ed5274cc461eee9041baf150672165bfda0cecffc02987b2`。這證明本服務頁已上線包含 PR #74 的內容，不表示全站所有頁面都經逐一驗收。

## 已完成

- 公開頁實際 DOM 有39個項目詳情；全部逐一點開，39/39 open=true，內部官方連結均可見。
- 英國15項：倫敦6、英格蘭其他地區2、蘇格蘭6、威爾斯1。
- 14國導航全部逐一點擊，網址片段正確且目標存在。英國落點實測距視窗頂部約90px，未被頁首遮住。
- 無缺失頁內錨點、無重複ID；站內連結均有對應原始碼頁面。
- 桌面1363px視窗實際目視檢查，彩色頁首與卡片排版保留，未見橫向溢出。
- OG、Twitter及secure_url均指向本頁專屬版本圖片 `https://overseasuk.com/assets/social/art-study-residency-share-20261101.png?v=20261101-global39`；Twitter card為summary_large_image。標題、描述與canonical頁面用途一致。
- 圖片HTTP 200，實際PNG尺寸1200×600（2:1），與main圖片逐位元組一致。目視確認14國39項、藝術遊學與駐村文字，以及原有深藍、磚紅、金色構圖。
- Threads網頁版未發送composer實測：成功生成本頁專屬圖片、正確標題及overseasuk.com網域；未抓取首頁圖片，主要標題及畫面完整。測試完成後清除本次文字與卡片，選擇Don't save退出；沒有發布貼文。

## 官方連結可達性

39個項目共43條不同官方來源連結，逐條HTTP請求：33條200、10條403，無404。HTTP成功只證明可達，不表示已測試報名表提交或有可報名名額。

403待人工驗證：UAL、RCA、The Place、West Dean、St Ives School of Painting、Cove Park、HANGAR、Arteles、Art Omi、Prairie Ronde。403本身不足以判定失效或反機器人原因，因此未擅自替換已有官方連結。

## 待驗收及限制

- 手機實機與手機寬度排版：現有瀏覽器API沒有視窗尺寸／手機模擬功能；僅核對原始碼有viewport及700px/900px響應式規則，不能宣稱手機目視驗收通過。
- Threads手機App與微信原生分享：未實測；網頁版Threads成功不代替這兩項。
- X原生卡片：僅標籤核對，未測composer。
- OTC聯絡入口：已核對WhatsApp號碼+44 7947 991572、預填藝術遊學查詢文字及mailto:office@overseasuk.com。嘗試開啟WhatsApp時，環境阻擋非HTTP(S)應用協定跳轉，未能完成外部App啟動驗收；未發送訊息。電郵App啟動亦未測。

## 本輪處理

沒有證實需要修改的頁面錯誤，保留已完成的內容、設計與圖片，未重新製作或為驗收而修改功能。此提交只記錄驗收事實；未完成項目仍保持待驗收。
