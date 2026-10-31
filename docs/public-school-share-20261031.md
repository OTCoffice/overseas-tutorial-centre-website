# 公校聯盟分享題圖更新

沿用荷蘭 share-safe-v5 的1200×360主體及1200×600畫布，保留公校聯盟既有海軍藍、磚紅、藍灰、青綠、金與暖白配色。右側淺白框使用12px正文與11px標籤。可重現來源：scripts/generate-public-school-share.py，傳入Noto Sans TC可變字體。

只修改公校聯盟總覽OG／Twitter圖片、版本、尺寸及卡片類型；國別頁與總覽body保持不變，已與上一版本逐字節比較。JSON來源由renderer讀入，以免重建恢復舊圖。

驗證：來源、OG與Twitter一致；JPEG1200×600；summary_large_image；頁面body逐字節一致。通用check-herald-share本地檢查在「同圖須在正文顯示」失敗，此要求已被使用者「僅改分享圖，不改正文」指示取代，故不添加正文圖片來通過。平台草稿預覽未實測，不能宣稱裁切驗收通過。
