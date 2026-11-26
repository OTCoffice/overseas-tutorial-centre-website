# 韓國本科頁修訂依據

日期：2026-11-26。路徑：`/zh/services/korea-undergraduate-application/`。
原稿：`content/korea-undergraduate-service.json`；directory 是唯一正文來源，刪除重複的舊 sections。
重建：`node scripts/render-korea-undergraduate-service.cjs`。

## 同行參考

- PAPAGO：https://lovelovekorea.com/university 。實讀其資格、文件、語言與升學規劃分類，補齊新生／插班、費用、文件與服務資訊；不搬用統一語言或美元存款數字。
- GAJA Korea：https://www.gajakr.com/faq 。實讀新生／插班、申請時間、財力、住宿及退費問答，用於補充讀者問題；不沿用一概 TOPIK 3 入學／4 畢業、固定月份與兼職時數。
- 啟德頁面直連遭封鎖；未將搜尋摘要作為已閱讀內容或正式資料依據。

## 官方核對與內容取捨

- 延世 UIC 國際新生：https://uic.yonsei.ac.kr/admission.php?mid=m04_02_02 。2027 起要求認可英語或替代證明，不能沿用 2026 語言材料 optional；正規高中、國籍、正本截止及面試規則分別核對。2027 春季網申 2026-09-22、正本 10-02 已截止，不當作仍受理；秋季日程按後續公告。
- 延世 UIC 費用：https://uic.yonsei.ac.kr/admission.php?mid=m04_03 。2026 國際生途徑首學期學費 8,416,000 韓元，之後 8,202,000；雜費另列，不把此表套用其他學院或學校。
- 延世一般本科費用：https://www.yonsei.ac.kr/sites/en_sc/down/2026_fee1.pdf 。留意 Global Basic Education Division 首年安排，不能只列其他學院低費用而忽略實際新生收費。
- 光云 2026 秋季簡章：https://oia.kw.ac.kr/admission/download2/202602_KWU_Admission_Guide_CN.pdf 。下載並實讀語言替代、插班學分、文件及有條件錄取規則；條件錄取本身不能轉 D-2，須達指定條件後升讀本科。正文標明年度，只作制度例子，不作 2027 當期保證。
- 慶熙當期本科簡章：https://globalcenter.khu.ac.kr/gglobalcenter/user/contents/view.do?menuNo=8000020 。作校考及語言替代的官方查閱入口；未沿用疫情頁面的固定考試形式／日期。
- GKS-U 2027 公告：https://www.studyinkorea.go.kr/ko/notice/scholarshipsRead.do?bbsId=BBSMSTR_000000000461&nttId=4522 。本科指南已公布，與尚待下一年度公告的碩士情況區分；各途徑截止另查，不宣稱仍開放。
- 簽證：https://www.studyinkorea.go.kr/en/plan/visaAndStay.do 。本科 D-2-2、語學 D-4-1 分開；財力及受理材料按適用地區及個案確認。
- 生活費：https://www.studyinkorea.go.kr/ko/life/livingExpense.do 。75–100 萬韓元／月作規劃參考，標示住宿、城市差異，並與簽證財力門檻分開。

刪除未能核實當期適用範圍的西江免語言學部、西京美容預錄取與固定招生月份斷言。保留原有 OTC 合作院校標準申請免費、第三方費用另計及額外服務事先報價的口徑，不新增價格。

正文共用卡片渲染器及主站 header/footer；短名「韓國本科」與服務入口一致。分享圖沿用美國留學款 1200×600 PNG，只用於分享 metadata；Threads 僅檢查未發送預覽。
