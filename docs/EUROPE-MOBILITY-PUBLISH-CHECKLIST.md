# 歐洲36國移居資料庫：發布核驗清單

更新：2026-11-10

## 已完成
- [x] 建立36國總目錄，附公共機構／政府入口。
- [x] 中文服務總覽連結及靜態重新生成保留腳本。
- [x] Vercel 預覽部署 READY（不代表所有外部連結及政策核驗通過）。

## 尚未完成：不得標示「110條路線已核實」
- [x] 依 RUN 2026-11-03 README 對齊36國國家名單；修正安道爾、列支敦士登、土耳其取代先前誤列三國。110條路線仍未逐項核驗。
- [ ] 為每條路線建立：國家、官方類別名稱、申請人適用國籍、資格、費用、期限、工作權、家屬、續簽、永居時間計算、政府原文網址、查核日期。
- [ ] 核對每個外部政府入口是否可用、是否為適當主管機關、是否存在更新版本；現有入口不全是特定簽證頁。
- [ ] 區分現行規則、已公告未生效政策、諮詢／改革提案；尤其英國永居政策。
- [ ] 審查對中國大陸、香港、台灣護照持有人的資格差異。
- [ ] 核對第三方內容引用、版權與授權要求，避免大量複製。
- [ ] 檢查每個國家頁及每條路線的連結、手機排版、SEO、可訪問性。
- [ ] 核對預覽後才合併 PR，確認 production deployment READY 並測試正式網址。

## 編輯政策
沒有政府來源或尚未核實的路線，不得以「可申請」形式宣傳。OTC 僅提供教育規劃與官方資料整理；法律、移民代理、稅務及受監管事項應轉介合資格專業人士。

## 本輪實質核查（2026-11-10）
- 原項目： https://github.com/BryceYuuu/RUN （README 自述 2026-11-03 更新，110條；同頁另稱 programmes.csv 為99條，須查清差異，不可把99誤作110）。
- 英國： https://www.gov.uk/government/news/home-secretary-unveils-new-rules-for-migrants-settling-in-the-uk （2026-11-02官方公布 earned settlement，標準10年及若干3/5年情況；具體生效條款、過渡及學生簽證計算仍待逐條核實）。
- 本次只完成國家名單與上述官方公告的核對；其餘國家入口、110條路線資格與金額未完成官方逐項核驗，不可宣稱全部完成或直接發布為已驗證政策資料庫。

## 2026-11-10 第二輪：來源數量及英國簽證法規
- RUN README 明確交代：99條源自 LetsMigrate.org 的結構化資料，另11條為 RUN 自行補充；因此 99 + 11 = 110，兩個數字並非相互矛盾。但這只核實了來源口徑，並非110條政府政策均已核實。來源：https://github.com/BryceYuuu/RUN/blob/main/README.md
- Graduate visa 依官方頁面及 Appendix Graduate：2026-12-31或之前申請一般2年、2027-01-01起一般18個月、博士3年；不可延長，本身非直接永居途徑。來源：https://www.gov.uk/graduate-visa/overview 及 https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate
- Earned Settlement 2026-11-02諮詢回應列出10年基準改革框架，但官方 Next steps 仍需細化規則與操作安排；不應稱全部規定已全面生效。來源：https://www.gov.uk/government/consultations/earned-settlement
- 仍待完成：逐條官方原始法規核對、全部36國入口有效性、護照適用性、法律實施日期及端到端預覽測試。

## 2026-11-10 第三輪：3條路線官方核驗
| 國家 | 路線 | 已核實事項 | 官方來源 |
|---|---|---|---|
| 德國 | EU Blue Card | 2026一般年薪€50,700；符合條件的緊缺職業、新畢業生及特定IT人才€45,934.20；需另符合學歷、合約等條件 | https://www.germany.info/resource/blob/2435484/ac4c3cfa8a1147a2e4709b9f9d0617be/eu-blue-card-data.pdf |
| 愛爾蘭 | Third Level Graduate Programme | Level 8最多12個月；Level 9+最多24個月，第二年須符合條件；Stamp 1G可受僱不可自僱 | https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/third-level-graduate-programme/ ; https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/ |
| 荷蘭 | Orientation Year | 合資格畢業／研究後3年內可申請一年求職居留；期間可自由工作或自僱；不得延長 | https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year |

注意：德國官方不同入口有一處較低門檻數字出現 €45,943.20 與 €45,934.20 的差異；本次採用2026年德國使領館PDF及另一外交部頁面一致的 €45,934.20，申請前仍需以主管機關當期正式規則再次確認。此核驗僅涉及所列特定路線及欄位，不代表所有費用、國籍例外、永居條件或其他路線已核實。
