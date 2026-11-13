# 歐洲36國移居資料庫：發布核驗清單

更新：2026-11-12

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

## 2026-11-10 第四輪：法國、丹麥與英國國會答覆
- 法國 Talent – Salarié qualifié：依 CESEDA L421-9，可最長四年；需符合適用學歷、僱用及薪資門檻。Business France 2026-05-11 頁面列 €39,582（註明2025-08-31），Service-Public較舊頁面仍列 €43,243，官方口徑不一致，公開頁暫不標示固定門檻。https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771572/2026-01-01/ ; https://welcome.businessfrance.fr/simplanter-en-france/recruter-des-talents-internationaux/visas-et-titres-de-sejour/recrutement-salaries-etrangers/talent-salarie-qualifie/
- 丹麥 Positive List for Higher Education：必須取得當期清單職位的聘用、符合學歷與正常薪資條件；SIRI 頁面顯示費用 DKK 6,810、一般處理時間1個月（補件可能至3個月），清單職位有個別到期日。https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Positive-List-Higher-Education
- 英國2026-11-04國會答覆：政府擬對部分高合規大學畢業生恢復2年 Graduate visa，但細節與過渡安排未定；不得當作已生效例外。https://questions-statements.parliament.uk/written-questions/detail/2026-11-02/40095
- 上述核對仍不包括所有護照資格、個別申請費及永居年限；正式發布閘門未解除。

## 2026-11-10 第五輪：審核方法及官方英國法規
- 核驗級別須區分：(A) 僅有國家政府入口；(B) 有路線官方頁；(C) 官方原文已逐欄核實資格、費用、期限、國籍、家屬、工作、續簽、永居；(D) 官方更新日期及實際申請流程已覆核。只有 C/D 才可稱完整核驗。不得以網站可開啟或 RUN 的 verified 欄位代替 C。
- RUN 110條路線可能包含已關閉途徑；已關閉者仍應保留「已關閉／不可新申請」狀態，而不是算作可申請。
- 英國 Graduate：2026-10-29 更新的 Appendix Graduate GR 8.1 明定 2027-01-01 起一般18個月、博士3年；GR 8.2 允許受僱及自僱（不含職業運動員）；GR 9.4A 限制家屬新增。https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate
- 英國國會 2026-11-04 回覆提及擬對部分高合規大學畢業生延長為兩年，但過渡細節尚未公布，不能當作已實施。https://questions-statements.parliament.uk/written-questions/detail/2026-11-02/40095
- 原始 CSV 的完整取得及逐行官方來源核對尚未完成；禁止將現有36國目錄宣稱為110條逐項已核實。

## 2026-11-10 第六輪：原始資料結構與英國官方費用
- RUN 的 build_docs.py 直接讀取 data/programmes.json（99條）、src/extra_routes.json（11條），並把各條 status=closed 寫入 CSV。須以這兩份原始記錄為核驗底稿，不能把 README 的110條視為110條仍可申請。來源：https://github.com/BryceYuuu/RUN/blob/main/scripts/build_docs.py
- 英國 Graduate visa GOV.UK 目前明列：申請費 £937、IHS 通常每年 £1,035；2年（2026-12-31或以前申請）、18個月（2027-01-01起一般申請）、博士3年；一般8週審理；不可延長，可符合資格轉其他路線。來源：https://www.gov.uk/graduate-visa （核驗2026-11-10）。費用會更新，遞交前再次核實。
- 本輪網站已增加來源路徑與關閉狀態警示。仍未取得99+11條逐項政府核驗證據；不合併正式發布。

## 2026-11-10 第七輪：英國 Graduate 法規條件及費用逐欄
- Appendix Graduate GR 1.2–1.5：境內申請、Student/前Student許可、不可曾獲Graduate/Doctorate Extension；部分政府獎學金需要同意。
- GR 4.1–4.3：須為合資格高教機構且校方通知成功完成課程。
- GR 6.1：12個月及以下課程通常整個課程在英國；較長課程至少12個月；法規另有例外。
- GR 8.2：允許受僱、自僱及志願工作，但不允許職業運動員；無公共福利。
- 官方費用：£937；IHS 18個月£1,552.50、2年£2,070、3年£3,105。
- 法規來源：https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate
- 費用來源：https://www.gov.uk/graduate-visa/how-much-it-costs
- 這一輪只擴充已核實的英國特定路線欄位，並未完成36國110路線全量核驗。

## 2026-11-10 第八輪：11條補充路線已逐一辨識（來源級核對，非政府法規核驗）
來源：RUN `scripts/build_docs.py` 的 `EXTRA_META`，對照 `src/extra_routes.json`。以下為11條補充路線的確切 ID；全部仍須按官方主管機關逐欄核驗，不得因程式預設 `status: open` 就宣稱開放申請。

| 國家 | 路線 ID | 核驗狀態 |
|---|---|---|
| 西班牙 | `spain-non-lucrative-visa` | 待政府原文逐欄核驗 |
| 葡萄牙 | `portugal-d7-visa` | 待政府原文逐欄核驗 |
| 德國 | `germany-opportunity-card` | 待政府原文逐欄核驗 |
| 德國 | `germany-skilled-worker-18a-18b` | 待政府原文逐欄核驗 |
| 希臘 | `greece-fip` | 待政府原文逐欄核驗 |
| 意大利 | `italy-elective-residence` | 待政府原文逐欄核驗 |
| 馬耳他 | `malta-global-residence-programme` | 待政府原文逐欄核驗 |
| 愛沙尼亞 | `estonia-startup-visa` | 待政府原文逐欄核驗 |
| 英國 | `uk-skilled-worker` | 待政府原文逐欄核驗 |
| 英國 | `uk-global-talent` | 待政府原文逐欄核驗 |
| 英國 | `uk-hpi` | 待政府原文逐欄核驗 |

**已確認的資料品質風險：** RUN 的 `build_docs.py` 對11條補充路線統一寫入 `status: 'open'` 及 `verified: '2026-10'`；這是資料生成器預設值，不等於政府網站確認仍接受新申請。OTC 應獨立保存官方核驗狀態，不直接繼承上述欄位。
來源：https://github.com/BryceYuuu/RUN/blob/main/scripts/build_docs.py

## 2026-11-10 第九輪：英國 HPI、德國機會卡
- 英國 HPI：Appendix High Potential Individual 2026-10-29 更新，2026-11-01起年度上限8,000申請；申請前5年內合資格海外大學學位、Ecctis、英語B2、£1,270資金（符合在英居留12個月條件者有例外）、一般2年/博士3年、可工作自僱、非直接永居。必須依學位授予日期核對當年大學名單，不能只看2026名單。官方：https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-high-potential-individual ; https://www.gov.uk/government/publications/high-potential-individual-visa-global-universities-list/high-potential-individual-visa-global-universities-list-2026
- 德國 Chancenkarte：官方駐英說明首次最多1年、兼職20小時/週、每僱主最多2週試工；完全認可人才或積分制（至少6分、德語A1或英語B2），駐英申請資料列資金€1,091/月（可能變動），不接受將英國領事館文件要求無條件套用其他國家申請地。官方：https://uk.diplo.de/uk-en/02/visa/chancenkarte/2659588
- 本輪僅核對兩條路線主要條件，並非全部欄位完成；費用、不同護照與申請地、家屬、轉換和永居仍待逐條核驗。不得發布「110條全部完成」。

## 2026-11-10 第十輪：捷克及拉脫維亞數字遊民資格
- 捷克 Digital Nomad Programme：2026捷克工業與貿易部適用國籍清單列台灣，未列中國大陸或香港；適用高技能IT及行銷遠距工作者等特定類別。這是特定政府加速計劃，不等於所有捷克長期居留類別。官方：https://mpo.gov.cz/en/foreign-trade/economic-migration/economic-migration-and-government-programs--239491/ 。注意部分舊使館頁名單未更新，以當期主管部門版本優先。
- 拉脫維亞 Remote Work Long-Stay Visa：2026-06-15官方更新，首次1年；須OECD國家註冊的僱主或自僱業務、員工需證明至少6個月聘用，收入門檻€4,538/月，保險責任額至少€42,600；不得在拉脫維亞本地受僱。中國大陸僱主非OECD成員國註冊者不符合該僱主條件，但申請人國籍與僱主所在地應分開判斷。官方：https://www.pmlp.gov.lv/en/receiving-long-term-visa-remote-work 。
- 本輪核驗僅涵蓋官方頁明示的條件，申請費、家屬、續簽、永居、香港/台灣特殊文件等仍待核對。

## 2026-11-10 即時批次：六條新增官方核驗（部分欄位，非整條全量完成）

| 路線 | 2026年官方證據與適用限制 | 未核實欄位 |
|---|---|---|
| 匈牙利 White Card | OIF 官方：境外僱主或境外盈利公司遠距工作，前6個月及居留期間每月淨收入≥€3,000；首年最多1年，只可續1次；不得在匈牙利本地受僱或持當地公司股權；通常不能藉持卡人申請家庭團聚；White Card 不能申請 national residence card，且不能在境內轉其他居留目的。來源：https://oif.gov.hu/factsheets/white-card-residency-for-digital-nomads | 申請地別費用、護照及個案例外 |
| 西班牙 Telework/Digital Nomad Visa | 西班牙駐美使館2026年資料：本人200% SMI = €2,442/月；首名家屬+75% SMI（約€916），其後每名+25%；通常須與西班牙境外企業有至少3個月職業關係、關係預期持續至少1年。來源：https://www.exteriores.gob.es/Consulados/washington/en/ServiciosConsulares/Paginas/Consular/Telework-Visa.aspx | 申請地費用、社保協定、工作比例、永居及護照細節 |
| 葡萄牙遠距工作 D8 | 葡萄牙政府：前3個月平均月收入至少4倍最低工資；2026最低工資€920，推算門檻€3,680/月；AIMA指持有效居留簽證後取得遠距工作居留卡首次2年、可續3年。來源：https://www2.gov.pt/en/noticias/lei-dos-estrangeiros-pedidos-de-vistos-e-autorizacao-de-residencia-vao-ser-mais-simples ; https://www.dgert.gov.pt/retribuicao-minima-mensal-garantida-para-2026 ; https://aima.gov.pt/pt/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe | D8具體申請地、家屬、續簽材料及永居 |
| 英國 Skilled Worker | GOV.UK現行一般薪資門檻：£41,700或該職位going rate，以較高者為準；有合資格職位及獲批擔保僱主；特定新入職、博士、醫療教育等例外；現行 Appendix Skilled Worker SW21.1仍列5年定居期，Earned Settlement改革公告不可替代尚未修訂的正式規則；2027-03-26起部分定居申請英語B2。來源：https://www.gov.uk/skilled-worker-visa/your-job ; https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker | 職業碼、各種例外、家屬、個案工資及改革過渡 |
| 英國 Global Talent | 現行 Appendix GT：認可背書或合資格獎項；每次可申請最長5年，允許工作及自僱；定居通常依背書類型3或5年；2027-03-26起定居英語B2（豁免除外）。費用£766（背書£561+簽證£205，或獎項直接£766），另有IHS。來源：https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-global-talent ; https://www.gov.uk/global-talent | 各背書領域具體證據、家屬費用及改革過渡 |
| 英國 HPI | Appendix HPI：學位授予前5年內、授予當年的Global Universities List、Ecctis、英語B2、通常£1,270資金（在英持有效許可≥12月有例外）；8,000份/年上限；一般2年/博士3年，不能續，非直接定居；官方2026-10費表簽證費£880。來源：https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-high-potential-individual ; https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-october-2026 | Ecctis服務費、護照／申請地文件及個案限制 |

### 重要數據品質處理
- 匈牙利 White Card 不能當成「可帶家屬、可轉永居」路線；其通常不允許家庭團聚、不能申請 national residence card。
- 西班牙2026年200% SMI為€2,442，不應沿用2025年€2,368。
- 葡萄牙D8 2026年4倍最低工資=€3,680；須標明是由兩份官方資料計算而非直接照抄舊的固定門檻。
- 英國 Skilled Worker現行5年定居條款與2026年11月2日政府10年改革公告應分欄顯示，不能以新聞稿覆蓋正式規則。
- 上述六條只完成所列官方欄位，**沒有**完成110條全欄核驗。發佈閘門仍維持關閉。

## 2026-11-10 第十一輪：葡萄牙D7及西班牙非營利居留（部分官方核驗）
- 葡萄牙 D7 被動收入居留：葡萄牙政府官方簽證門戶列適用於退休人士或以宗教、資產、知識產權等收入生活者；須證明收入來源及足夠生活資金，簽證申請通常透過領事館。AIMA 2026居留卡指引對退休及自有收入類別列出居留卡首次2年、可續3年。注意 D7 是民間慣用名稱，實際須依官方簽證分類判斷；2026申請費、各家屬資金比例、居住天數及永居條件尚待核驗。官方：https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa ; https://aima.gov.pt/pt/viver/autorizacao-de-residencia-para-reformados-ou-titulares-de-rendimentos-proprios
- 西班牙非營利居留：西班牙領事館官方說明申請人需證明有足夠資金且不得在西班牙從事工作或專業活動；本人至少400% IPREM，家屬每人另100% IPREM。2026官方 IPREM 每月€600，推算本人每月€2,400、每名家屬€600（按12個月計本人€28,800、每名家屬€7,200），申請前須核對領事館對資金持有形式、完整期間及保險的要求。官方：https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Non-working-residence-visa.aspx ; https://www.sepe.es/HomeSepe/en/Personas/distributiva-prestaciones/Cuantias-anuales.html
- 兩條均不能宣傳為「不工作也保證永居」；仍需按居住、續簽、離境、家屬及國籍個案逐欄核驗。

## 2026-11-10 第十二輪：西班牙非營利居留／葡萄牙 D7 的續居、工作與家庭限制
- 西班牙非營利居留：依西班牙官方移民規則（RD 1155/2024，2025-05-20生效），首次非營利居留一般為1年，首次續期一般2年；申請人不得從事工作或職業活動。資金通常本人400% IPREM、每名家屬另100% IPREM；必須核對實際合法居住、保險及續期要求，不能僅憑持有居留卡推定已符合長期居留。官方：https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099 ; https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa
- 葡萄牙 D7：官方 AIMA 對退休及自有收入持有人的居留許可頁面，列首次2年及可續3年；家庭團聚需依 AIMA 另行申請，不能將家庭團聚當成自動權利。2025-10以後葡萄牙家庭團聚法規曾變更，須逐條核對最新條款與例外。官方：https://aima.gov.pt/pt/viver/autorizacao-de-residencia-para-reformados-ou-titulares-de-rendimentos-proprios ; https://aima.gov.pt/pt/viver/reagrupamento-familiar
- 資料庫必須把「首次簽證」、「首次居留許可」、「續期」及「長期居留／永居」拆成不同欄位。上述仍是指定欄位核驗，並非全部法律及護照適用性驗證。

## 2026-11-10 第十三輪：義大利 Elective Residence 與希臘 FIP，官方分類核對
- 義大利 Elective Residence Visa（residenza elettiva）：義大利外交部官方簽證資料庫將其歸類為長期居留簽證，供有充足、穩定、非工作收入且擬在義大利居住的人士；不得依此簽證在義大利工作。使領館對收入證明、住址及文件細節有領區差異；不宜把第三方常見的 €31,000 年收入數字當成普遍法定最低門檻。官方：https://vistoperitalia.esteri.it/home/en ; https://consnewyork.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/elective-residence/
- 希臘 Financially Independent Person（FIP）：依希臘移民法典 Law 5038/2023，具有足夠穩定收入者可申請相應居留類別，通常不允許在希臘受僱；須分辨原有 FIP 與近年修法後對應的居留類別、主管機關公布的最低資金及家屬比例。2026年收入門檻、居留續期與國籍例外尚未取得同一份現行政府文件的完整確認，因此標示「待核實」，不在公開頁寫固定金額。官方：https://migration.gov.gr/en/ ; https://www.et.gr/
- 兩條均完成官方類別及禁止本地工作的初步核對，並未達到核驗級別C/D。申請費、家庭團聚、永居及申請人國籍仍待核實。

## 2026-11-10 第十四輪：愛沙尼亞 Startup Visa 及馬耳他 GRP
- 愛沙尼亞 Startup Visa：官方 Startup Estonia 說明申請人須獲 Startup Committee 對創新、可擴展商業模式的資格認定；獲正面評估後，仍須向警方及邊防局申請簽證或居留，並非獲委員會認可即自動獲簽。Startup Visa 長期簽證最多可達365天，得依條件延長183天；創業居留許可可達5年，須按個案審核。官方：https://startupestonia.ee/visa/ ; https://www.politsei.ee/en/instructions/residence-permit-for-business
- 馬耳他 Global Residence Programme（GRP）：馬耳他稅務機關官方資料將其定位為針對非EU/EEA/瑞士人士的特殊稅務身份計劃，並非單靠投資即可直接取得永居。符合資格者需有馬耳他合資格物業（購置或租賃）、健康保險及稅務條件；對境外匯入馬耳他的特定收入適用15%稅率，最低年度稅額€15,000。需另核對居留身份與物業最低門檻，不能將稅務身份與移民居留混同。官方：https://mtca.gov.mt/personal-tax/individual/tax-programmes/global-residence-programme
- 本輪僅核實計劃性質與上述核心條件；中國大陸、香港、台灣的具體護照及居住地資格、所有申請費、家屬與永居仍待官方逐欄核實。

## 2026-11-10 第十五輪：愛沙尼亞創業簽證費用衝突與家屬核驗
- Startup Estonia 的外國創辦人頁（https://startupestonia.ee/startup-visa/foreign-founder/）在「required documents」列 D 簽證政府費 €100，但同一頁 FAQ 仍寫舊的 €80。**同一官方網站內數值衝突，不能把€80或€100宣稱為已完成最新法定費用核驗**；申請前須以申請地領館／PPA當期收費為準。
- 官方 2026-04-05 流程（https://startupestonia.ee/instructions/your-guide-to-navigating-estonias-startup-visa-program-a-step-by-step-process-for-aspiring-entrepreneurs/）確認：創業委員會核准後依國籍及既有居留決定境內或使館申請；D簽證可供最長1年合法停留；須在愛沙尼亞正式註冊公司後方可申請創業臨時居留許可，後者最長可達5年，非自動核發。
- 該2026流程列創辦人配偶申請同類簽證的資金證明 €704/月、子女不需另證明資金，婚姻／出生證明需合法化；實際領事館和申請人國籍要求仍須個別核對。
- 官方 FAQ（https://startupestonia.ee/frequently-asked-questions/）列創辦人一般生活費至少€800/月；持創業簽證的配偶如要受僱，須先由僱主辦短期僱用登記；持配偶團聚居留許可則可工作而無須另行登記。
- 本輪結論：家屬及流程欄位有進展；政府費用標示「官方頁內互相矛盾，待主管機關確認」，不計入完整核驗路線。

## 2026-11-10 第十六輪：瑞典工作許可與荷蘭 Highly Skilled Migrant（官方原文）
- 瑞典一般受僱工作許可：2026-06-01新規要求薪資至少達申請時瑞典中位數薪資90%，且仍須符合行業集體協議或慣常薪資。2026-06-16起官方基準月薪 SEK 34,470（中位數 SEK 38,300）。某些特定職業／申請人（包括符合條件的前學生或研究員等）可適用75%中位數豁免。已於2026-06-01前獲批工作許可且2026-06-01至12-01申請續簽者，適用過渡80%基準（目前SEK 30,640）；2026-12-02起續簽適用新規。來源：https://www.migrationsverket.se/en/word-explanations/salary-requirements-for-a-work-permit.html ; https://www.migrationsverket.se/en/word-explanations/a-good-living---maintenance-requirement-for-work-permits.html
- 荷蘭 Highly Skilled Migrant：必須由IND認可擔保雇主提交申請，具合格僱用合約、達到薪資門檻且符合市場薪資。IND 2026全年（不含假期津貼）月薪門檻：30歲以上 €5,942；30歲以下 €4,357；合資格降低門檻 €3,122。降低門檻並非所有畢業生都適用，需符合 Orientation Year 等指定條件。來源：https://ind.nl/en/residence-permits/work/highly-skilled-migrant ; https://ind.nl/en/required-amounts-income-requirements
- 兩條路線的護照、家屬、完整申請費、永居及全部例外尚未逐欄核實；不可標為完全核驗通過。

## 2026-11-10 第十七輪：芬蘭及挪威工作許可（官方逐欄部分核驗）
- 芬蘭 Specialist：Migri 2026稅前月薪最低€3,937（福利及每日津貼不計），須有已確認聘用及專業技能（通常高等教育或相當經驗）；首次許可最長2年；網申首次€530、續期€230，紙本首次€630、續期€430；符合條件可申請 fast track，官方稱兩週。官方：https://migri.fi/en/specialist/en
- 芬蘭一般受僱工作許可 TTOL：2026稅前月薪最低€1,600，且不得低於適用集體協議薪資；不可以其他福利或夜班津貼替代該基準。官方：https://migri.fi/en/working-in-finland/income-requirement
- 挪威 Skilled Worker（挪威僱主）：須有具體聘用，通常全職，至少80%可接受；須符合高等教育、至少3年對應職業教育或經嚴格審核的特殊資格；學位職位通常最多3年許可、職業教育職位通常最多1年；符合條件3年後可申請永居，但不是自動核發。官方：https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/
- 挪威 UDI 工資：要求碩士學位職位通常稅前年薪NOK 624,700；學士學位職位通常NOK 545,400；集體協議或地方行業正常工資亦須符合。特殊低薪例外須提出有力證據。官方：https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway
- 挪威 UDI 對中國等部分國家簽發的特定職業教育文件（例如廚師、汽車技工、木工等）有更嚴格的真實性審查；這是文件／資格風險而非中國國籍全面禁申。
- 本輪僅核對以上欄位；護照類別、家屬、各項申請費、續簽、居住連續性及完整永居條件尚未完成。不能計為整條 C/D 全面核驗。

## 2026-11-10 第十八輪：愛沙尼亞一般受僱居留（官方交叉核驗）
- 愛沙尼亞內政部官方移民說明：非EU人士短期受僱一般須事先登記並有合法停留依據；短期受僱可達455日內365日，季節性工作為365日內270日；通常須支付至少愛沙尼亞平均稅前工資，初創、研究、教師及部分其他類別有例外。https://siseministeerium.ee/en/activities/efficient-population-management/migration
- 超過12個月一般應申請受僱臨時居留許可，雇主通常須先取得失業保險基金核准；通常受移民配額及平均工資條件限制，初創企業員工、ICT專才等部分豁免。https://siseministeerium.ee/en/activities/efficient-population-management/migration
- 愛沙尼亞正式 Aliens Act §§116–119、176–178：一般居留條件包括實際居住地、足夠合法收入、醫療保險；受僱居留需具相應資格及工作條件，許可有效期可達5年，但不等於自動取得長期居留。https://www.riigiteataja.ee/public-api/api/v1/en/akt/530092025010/blob-html
- 官方 e-Residency 知識庫（2026-01-08更新）明確指出 e-Residency 數字身份證**不是**居留許可，也不賦予入境或居留權。https://learn.e-resident.gov.ee/hc/en-gb/articles/360000630337-Live-and-work-in-Estonia
- **資料品質警示：** Work in Estonia 一般指引含過去固定「€2,528」高技能工資示例，不應直接視為2026年最新數值。應以當期 Statistics Estonia 工資數據與PPA正式核准條件計算。
- 未完成：各國籍申請地、2026當期平均工資具體數額、申請費、家屬、續期與永居的全欄核實；本條狀態仍為部分核實。

## 2026-11-10 第十九輪：波蘭、立陶宛 EU Blue Card — 官方2026資料優先
- 波蘭 EU Blue Card：波蘭外國人事務辦理系統 MOS 當期英文官方問答列申請費 PLN 440，2026申請所需稅前年薪至少 PLN 160,264.08（即月薪 PLN 13,355.34）；具合資格高等教育或特定專業經驗、適當僱用與醫療保險。更換僱主可在維持高技能工作與薪資條件下進行，須在15個工作日內書面通知省長。失業保護期視持卡時間為3或6個月，須履行通報義務。來源：https://mos.cudzoziemcy.gov.pl/en/question-and-answer-database/permits-residence-and-work/eu-blue-card/
- **重要舊資料衝突：** 歐盟 EU Immigration Portal 2025-04-01 波蘭頁面仍列月薪 PLN 9,519.23、費用約€123，不能拿該舊數值覆蓋2026年波蘭主管部門資料。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-poland_en
- 立陶宛 EU Blue Card：2026-05-14修訂的外國人法律 Article 44¹ 明定至少6個月僱用承諾，一般月薪至少最近公告的全國平均稅前月薪1.5倍；列入指定高附加值緊缺職業清單者為1.2倍。具其他EU國藍卡的跨境流動有另外規則，不能把一般就業配額與藍卡門檻混同。來源：https://www.e-tar.lt/portal/li/legalActPrint?actualEditionId=XQMjqbJOlf&documentId=TAR.42837E5A79DD
- 立陶宛一般外國人受僱配額：2026年度24,706人，係普通工作路線配額，不得直接當作 EU Blue Card 配額。來源：https://socmin.lrv.lt/lt/veiklos-sritys/darbo-rinka-uzimtumas/uzimtumo-ir-darbo-rinkos-politika/uzsienieciu-idarbinimo-kvota-2025-m/
- 本輪兩國只核對官方薪資、費用或僱用條件及資料時效衝突；國籍、家屬、完整續期、永居及所有例外未完成，不能標示全欄通過。

## 2026-11-10 第二十輪：捷克 Employee Card 與斯洛伐克 EU Blue Card
- 捷克 Employee Card：捷克內政部外國人門戶明示第三國國民可申請一般受僱居留，最長2年；境內行政費 CZK 2,500、境外領事費 CZK 5,000；一般審理60日、複雜案件90日。離職後如無自由進入勞動市場資格，須於90日內通報新工作或申請其他居留；境外申請有使館配額及管轄地限制，不能一概視為所有中國／香港／台灣居民可在任意使館提交。來源：https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/employee-card/
- 斯洛伐克 EU Blue Card：IOM Migration Information Centre 2026-07-15更新：至少6個月高技能工作聘用，薪資通常為斯洛伐克平均工資1.2倍，近三年大學畢業生可適用1倍；申請費€250，居留卡€10（一般）／€39（加急），完整申請後30日審理；一般最長5年。來源：https://mic.iom.sk/en/residence/temporary-residence/236-modra-karta-eu-2.html
- 版本衝突：斯洛伐克勞工部部分英文頁仍列舊的1.5倍薪資、至少一年聘用及三年許可，與2026更新的IOM及歐盟移民門戶不一致。應優先核對現行斯洛伐克法律及移民警察實務，不可將舊頁面當成現行規則。來源：https://employment.gov.sk/en/information-foreigners/employment/employment-third-country-national.html
- 待核：2026年適用平均工資具體歐元數額、家屬、國籍個案、永居、職業資格認可、捷克最低工資／工時及全部例外；本輪均為部分核驗，尚非 C/D 完整通過。

## 2026-11-10 第二十一輪：克羅地亞及羅馬尼亞 EU Blue Card（法規衝突核驗）
- 克羅地亞：2025-03 官方公報修訂《外國人法》第126條，最低高技能聘用合約6個月、一般薪資門檻為前一年官方平均稅前工資1.5倍；取得高等教育資格未滿3年者可適用一般門檻80%（須符合全部其他條件）。正式法規：https://narodne-novine.nn.hr/clanci/sluzbeni/full/2025_03_40_545.html
- 克羅地亞政府／Migracije 公共入口亦列6個月合約及換雇主後5個工作日通知：https://migracije.hr/third-country-nationals/?lang=en 。歐盟移民門戶2025-04-01克羅地亞頁仍列至少1年合約及2023年薪資數字，不應當成2026當期標準：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-croatia_en
- 羅馬尼亞：移民總局 IGI 官方目前列高技能工作居留期限為合約期限+3個月，最長3年；申請居留時須於簽證許可屆滿前至少30日遞交，居留卡行政費265 RON及相應費用另列。https://igi.mai.gov.ro/single-permit-eu-blue-card/
- 歐盟移民門戶2025-04-01羅馬尼亞頁仍列最長2年、2023年薪資門檻，不可直接沿用：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-romania_en
- **尚未核實**：克羅地亞2026當期平均工資及換算歐元門檻、羅馬尼亞2026藍卡薪資門檻與法規最新版本、兩國家屬／永居／國籍適用及全部費用。兩條均維持「部分核驗」而非C/D完整通過。

## 2026-11-10 第二十二輪：保加利亞與斯洛文尼亞官方工作路線
- 保加利亞 EU Blue Card：保加利亞勞工與社會政策部說明需符合高技能資格（高等教育一般至少3年），合同稅前薪資至少前12個月平均工資1.5倍；不要求先做勞動市場測試，也不對同一企業的此類聘用設定人數限制。來源：https://www.mlsp.government.bg/trudova-migraciq
- 保加利亞《外國人法》2025修訂後的Art.33j文本（第三方英文譯本，尚需正式公報原文核對）提到藍卡可最長5年、最短24個月及失業期間的特別保護；未以此譯本單獨宣稱法規條件全部完成。非官方譯本：https://www.immigration.bg/legislation/foreigners-act/
- 斯洛文尼亞 Single Permit：政府 GOV.SI 確認第三國人士一般需要合併居留及工作許可，由行政單位核發、就業服務局同意；可由雇主或本人依規定提交。部分季節工作及特定雙邊協議另有程序。來源：https://www.gov.si/en/topics/employment-and-work-of-foreign-nationals
- 斯洛文尼亞 EU Blue Card：2025年修訂 ZZSDT-E 將高技能聘用合約最低期限由1年縮短至6個月，ICT部分申請人可用近7年中至少3年的合資格工作經驗證明專業能力；此條本輪依2025修法解說核對，仍需對照正式斯洛文尼亞公報。來源：https://zdops.si/en/act-on-amendments-and-supplements-to-the-act-on-employment-self-employment-and-work-of-foreigners-zzsdt-e/
- 歐盟移民門戶斯洛文尼亞2025-04-01頁仍列1年合約，不可直接作為修法後最新標準：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-slovenia_en
- 未核：2026實際薪資數額、申請費、國籍及使館管轄、家屬、續簽、永居及正式公報最新全文；本輪為部分核實。

## 2026-11-10 第二十三輪：盧森堡、比利時高技能工作居留
- 盧森堡 EU Blue Card：2026-10-01 更新的 Guichet.lu 官方頁面確認至少6個月高技能聘用合約、專業資格及薪資門檻；**同一頁正文有 €65,562 與 €65,652 兩個不同數字**。2026-02-23部長規則於2026-03-03起適用的專業法務分析列 €65,652。正式發布前應取得規則原文並確認官網筆誤，不應不加說明宣稱€65,562已核實。官方：https://guichet.public.lu/en/citoyens/immigration/vivre/non-luxembourg/immigration/pays-tiers/hautement-qualifie/salarie-hautement-qualifie.html ；法規分析：https://www.arendt.com/news-insights/news/eu-blue-card-increase-of-minimum-salary-threshold-2/
- 盧森堡歐盟移民門戶仍列2024年€58,968，為過時數字，不得採用：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-luxembourg_en
- 比利時高度技術工作居留：由三個地區分別訂定薪資門檻。布魯塞爾官方列工作逾90天須申請single permit，區域先核工作授權，聯邦移民局另審居留，不能把區域批准當成已取得居留。https://economy-employment.brussels/single-permit-highly-qualified
- 佛蘭德官方列須有至少3年或相當級別的受認可高等教育資格，私人機構非認可證書不適用；合資格工資須可在聘用開始時確定，浮動獎金及費用津貼不一定計入；僱主提交single permit，工作及居留均獲准才可使用。https://www.vlaanderen.be/en/working-enterprise-and-investment/working/employing-a-foreigner-in-flanders/categories/highly-skilled
- 2026年區域薪資**次級交叉來源**：布魯塞爾高技能€3,703.44/月、Blue Card €4,748/月；瓦隆高技能€53,220/年、Blue Card €68,815/年（符合條件的較新畢業生€55,052）；佛蘭德高技能€48,912/年、Blue Card €63,586/年。此組數字由2026-01 KPMG/EY專業通報交叉支持，但**尚未逐一從三區正式公告確認，因此只能列待官方終核**。https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/01/fa26-018.pdf.coredownload.pdf
- 待核：盧森堡官方薪資筆誤、比利時三區薪資正式公告、申請費、家屬、護照及使館管轄、續期與永居。兩條維持部分核實。

## 2026-11-10 第二十四輪：奧地利 RWR Card 與愛爾蘭 Employment Permits
- 奧地利 Red-White-Red Card，Skilled Workers in Shortage Occupations：政府官方門戶確認至少55積分、完成相應緊缺職業培訓、具正式聘用與法定／集體協議工資；通常核發24個月。於過去24個月符合資格受僱至少21個月者，可申請 RWR Card Plus，取得不受單一僱主限制的勞動市場准入；並非自動取得永居。來源：https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/ （2026-11-10查閱）。注意頁面緊缺職業清單部分仍標2025，2026個別職業須查當年規章。
- 愛爾蘭 General Employment Permit：官方2025-12-02公告2026-03-01起一般最低年薪€36,605。來源：https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html
- 愛爾蘭 Critical Skills Employment Permit：官方列至少2年聘用、合資格職業或高薪類別；無需 Labour Market Needs Test。官方政策公告與申請頁列2026門檻€40,904，惟部門另有2026 Minimum Annual Remuneration 表列€40,909，數字相差€5。應核對正式 Employment Permits Regulations 最新修訂，不可直接視為已完成薪資欄位核驗。來源：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/ ; https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/
- 本輪兩國尚未完成護照適用性、費用、家屬、永居及全部例外核驗，狀態保持部分核實。

## 2026-11-10 第二十五輪：芬蘭與立陶宛畢業生求職居留
- 芬蘭 Migri「Application for students and researchers: residence permit to look for work」：申請人須已完成芬蘭學位或合資格研究，曾持學生或研究居留；如尚未找到工作，可申請求職／創業居留，最多2年，須在學生或研究居留到期後5年內申請。資金至少€800/月，申請2年示例為€19,200。來源：https://migri.fi/en/application-for-students-and-researchers-residence-permit-to-look-for-work ; https://www.suomi.fi/services/application-for-students-and-researchers-residence-permit-to-look-for-work-or-to-start-a-business-finnish-immigration-service/d24020b6-40ce-414e-bdf9-809da6248f34
- 芬蘭 Migri 亦提示「芬蘭完成學位」可涉及特定永久居留申請途徑，但須符合持續居留及融合等法定要求；不可把「畢業」或「兩年求職簽證」說成自動永居。來源：https://migri.fi/en/application-for-students-and-researchers-residence-permit-to-look-for-work
- 立陶宛：歐盟移民門戶及 Study in Lithuania 說明非EU畢業生可申請12個月臨時居留，用於求職或自僱；最後學年學生居留可延至畢業後3個月，部分推廣資料合稱「15個月」，但不是一張自動核發的15個月求職簽證。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-lithuania_en ; https://studyin.lt/about-lithuania/work-in-lithuania/
- 立陶宛不同公開入口對非EU在讀生每週工作時數出現20小時與40小時的差異，不能把畢業後求職居留的工作權與在讀生工作限制混同。須以當期立陶宛 Migration Department 法規及許可類型作最終核對。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-lithuania_en ; https://workinlithuania.com/relocation-for-students/
- 未完成：兩國各申請費、家庭成員、國籍例外、所有續簽／永居條件及立陶宛官方移民局當期法規逐欄核驗。此輪為部分核驗。

## 2026-11-10 第二十六輪：法國、德國畢業後求職居留
- 法國「recherche d'emploi ou création d'entreprise」（RECE）：法國 Service-Public 2026-05-21更新的官方說明，適用在法國取得至少碩士級別或指定職業學士文憑的非歐盟畢業生，以及符合條件的研究人員；居留許可有效12個月且不能續期。期間可從事與學業或研究相關的受僱工作或創業，工作需符合規定薪資門檻；取得合適工作後可轉換相應工作居留。官方：https://www.service-public.fr/particuliers/vosdroits/F17319
- 法國 RECE 官方另列：畢業生若已離法，可在畢業後4年內由境外申請相應長期簽證；在法國申請需符合原學生／研究居留與學位要求。上述不是所有法國本科畢業生均可直接申請。來源同上。
- 德國：德國官方 Make it in Germany 明確列在德國完成高等教育的非EU畢業生可申請最長18個月的求職居留，期間可從事任何類型工作；需證明生活費及其他居留要求。獲聘後可轉換合資格工作居留／EU Blue Card。官方：https://www.make-it-in-germany.com/en/study-vocational-training/studies-in-germany/prospects-after
- 德國2026年國外畢業生的機會卡與德國境內畢業生18個月求職居留是兩種不同制度，不得合併描述；18個月求職居留不代表自動獲得EU Blue Card或永居。
- 尚未完成：兩國當期申請費、法國工資門檻具體數值、家屬、個別護照和領事館管轄、全部永居規則。僅完成上述官方條件的部分核驗。

## 2026-11-10 第二十七輪：法國 RECE 費用、工作薪資及德國求職許可細節
- 法國 Service-Public（2026-06-01核驗版本）明確：RECE 一年不可續；在法國申請居留卡費 €150（€50印花稅+€100稅）；從境外申請需先支付 VLS-TS 簽證費，入境驗證另繳 €100，不能把境內費用套用到境外。https://www.service-public.gouv.fr/particuliers/vosdroits/F17319
- RECE 工作權並非完全無限制：受僱職位須與學業／研究相關，且稅前月薪**高於** €2,800.53；符合條件時雇主無須另申請工作許可，不受學生964小時上限。該頁明示阿爾及利亞學生不適用此卡；其他國籍仍須按雙邊協定及居留身分核對。法國境內申請通常應在學生居留到期前2個月內提交；已離法畢業生可在取得合資格學位後4年內申請相應 VLS-TS。來源同上。
- 德國官方 Bundesportal：在德國完成學業後求職居留最多18個月，不能超過此最長期間續簽；期間可從事任何有報酬工作，並須有生活費及醫療保險。地方服務頁示例收費 €98，**屬地區頁面數字，不可作為全德統一收費**。https://verwaltung.bund.de/leistungsverzeichnis/EN/leistung/99010020001019/herausgeber/RP-246323131/region/070000000000 ; https://www.make-it-in-germany.com/en/staying-in-germany-after-studies
- 資料品質修正：前輪法國RECE若僅稱「可工作」而未列與學業相關及薪資條件，可能誤導；公開頁應補上。上述兩路線仍未全欄C/D核驗，家屬、永久居留及大陸／香港／台灣個案適用性未完成。

## 2026-11-10 第二十八輪：西班牙與葡萄牙畢業後求職（當期主管機關原文）
- 西班牙「autorización de residencia para búsqueda de empleo o inicio de proyecto empresarial」：西班牙移民部 Hoja 20（2025-09更新）明確合資格前提是持長期學生停留許可，於獲認可高等教育機構完成至少EQF 6學位；須有有效保險、足夠資金及合法居留。可在學生許可到期前60日或到期後90日內提交 EX-26；一般20日決定期限。有效24個月、**不可續期，且在此求職居留期間不允許工作**。找到工作後須另申請適用工作居留；此前已陪同學生的家屬可按條件繼續，但不授權家屬工作。資金本人100% IPREM（全期預付住宿可50%），首名家屬75%、其後每名50%。官方：https://inclusion.gob.es/en/web/migraciones/w/20.-autorizacion-de-residencia-para-busqueda-de-empleo-o-inicio-de-proyecto-empresarial
- 西班牙 EU Immigration Portal 學生頁仍寫畢業後求職居留12個月，與西班牙主管機關目前24個月明顯衝突；優先採用主管機關及現行法律。https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-spain_en
- 葡萄牙 AIMA Art.122(1)(p)：先前持葡萄牙第2或3周期高等教育（碩士、博士）或研究居留，完成學業／研究後，可申請最多**一年**求職或創業過渡期，須與學歷相容；官方列有效護照、住址、生活費證明、犯罪紀錄及完成學業證明。**不應把此條直接擴大到所有本科畢業生**，其申請路徑應另外核對。官方：https://aima.gov.pt/pt/trabalhar/tendo-beneficiado-de-ar-para-estudantes-do-2-o-ou-3-o-ciclos-do-ensino-superior-ou-de-ar-para-investigacao-e-concluido-os-estudo
- 葡萄牙 AIMA Art.91 當期高等教育學生居留一般有效3年（課程不足3年者依課程期間），學生可在不影響學業下從事受僱或自僱工作；EU Portal 舊頁仍列1年並指向已撤銷的SEF，屬過時來源。官方：https://aima.gov.pt/pt/estudar/autorizacao-de-residencia-emitida-a-estudantes-do-ensino-superior-art-o-91
- 未核：兩國完整收費、護照及使館管轄、個案家屬與永居、葡萄牙本科畢業後替代路線；上述路線仍為部分核實。

## 2026-11-10 第二十九輪：拉脫維亞、愛沙尼亞 EU Blue Card 正式法規對照
- 拉脫維亞 PMLP 2026-03-16 更新的2026-04-01起資金標準：EU Blue Card 一般薪資門檻 €2,723/月（前一年全國平均稅前薪資1.5倍）。須注意特定緊缺職業可適用1.2倍，需另查當期職業清單及實際金額。官方：https://www.pmlp.gov.lv/en/necessary-subsistence-0
- 拉脫維亞2026年《移民法》正式公報文本：EU Blue Card 居留一般為2年；合約較短時，居留可為合約期加3個月但不超過2年。部分 Blue Card 跨境流動及失業後保留資格有專門條件，不能把「失業即取消」當成所有情況的現行規則。來源：https://www.vestnesis.lv/op/2026/167.1
- 拉脫維亞 Integration and Inclusion Agency 的英語 Blue Card 頁仍列最長5年，與2026正式法律的2年規定存在明顯差異；正式發布前必須以現行法規及PMLP當期實務為準。來源：https://livelatvia.lv/living-in-latvia/work/european-union-blue-card/
- 愛沙尼亞《外國人法》2026年正式英文法規 §190⁶：合資格高技能聘用合約或具法律約束力的聘用承諾至少6個月；§190⁷：一般薪資至少 Statistics Estonia 最近公布平均稅前月薪1.5倍，特定高技能職業可用1.24倍。來源：https://www.riigiteataja.ee/public-api/api/v1/en/akt/501092026001/blob-html
- 歐盟移民門戶愛沙尼亞頁所列€2,748/月是2024門檻，不可當成2026現行數字；英國GOV.UK舊頁所列「至少1年合約」亦與2024修法後愛沙尼亞正式法律的6個月不符。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-estonia_en ; https://www.gov.uk/guidance/travel-to-estonia-for-work
- 本輪僅核實上述官方條款，兩國完整申請費、家屬、護照差異、2026愛沙尼亞實際工資門檻及永居仍未逐欄核實，故保持部分核驗。

## 2026-11-10 第三十輪：瑞典與芬蘭 EU Blue Card（直接讀取兩國移民局當期官方頁）
- 瑞典 Migrationsverket EU Blue Card：自2026-07-15起最低稅前月薪 SEK 53,625（全國平均稅前工資1.25倍）；至少6個月高技能聘用合同，至少180學分高等教育或5年相關專業經驗；須有或申請合適醫療保險。首次許可9個月至最多4年；僱主及職業受核准條件約束。申請費 SEK 2,000，成人家屬 SEK 1,500、子女 SEK 750；日本國民有費用豁免。家屬可一同申請，成年家屬及當年滿16歲的子女符合條件可工作。官方：https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/eu-blue-cards.html （2026-11-10讀取）
- 瑞典2026-06-01改革：一般工作許可90%中位數門檻**不等於**EU Blue Card門檻；後者仍依1.25倍平均工資、2026-07-15起 SEK 53,625/月。官方：https://www.migrationsverket.se/en/newsarchive/newrulesforworkpermitsfrom1june2026.5.4d7d222919d2a911cf74cf.html
- 瑞典歐盟移民門戶2025舊頁仍列至少1年聘用、1.5倍平均薪資及最多2年許可，與2026年瑞典主管機關資料衝突，應標記過時：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-sweden_en
- 芬蘭 Migri EU Blue Card：2026稅前月薪至少 €3,937（不計福利），至少6個月確認聘用；至少3年高等教育資格或通常至少5年相當專業經驗。許可最長2年，合約不足2年則合約期加3個月；網上首次€530、續期€230；紙本首次€630、續期€430；合資格可fast track。藍卡允許從事高技能工作，非綁定單一僱主；首次一般境外申請。官方：https://migri.fi/en/eu-blue-card （2026-11-10讀取）
- 本輪是直接核實兩國薪資、聘用、學歷、部分費用、期限、工作權及瑞典家屬；其他護照個案、續期細節、永居計算及完整家庭條件仍需逐欄核對。不可將兩條標為全欄C/D完成。

## 2026-11-10 第三十一輪：荷蘭 EU Blue Card（IND 官方逐欄核對）
- 官方來源：IND 2026-06-15更新 https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit 及 2026全年薪資表 https://ind.nl/en/required-amounts-income-requirements ；核驗2026-11-10。
- 2026月薪（不含假期津貼）：一般 €5,942，合資格較新畢業生減額 €4,754。減額須符合畢業或取得博士學位後3年內申請等特定條件，不能與荷蘭 Highly Skilled Migrant 減額 €3,122 混用。
- 最少6個月合資格高技能聘用；3年高等教育學歷（境外學歷須Nuffic評估），或一般5年相當工作經驗；IT管理或專業人士可在申請前7年內有3年相當經驗。醫生／律師等受監管職業仍需當地執業資格。
- Blue Card 僱主**無須**IND recognised sponsor 資格（Highly Skilled Migrant 才強制要求），但僱主仍是擔保人且須符合合規條件。申請費 €423。
- 決定期限：認可擔保人、長期跨國流動、符合條件的同步家屬申請一般30天；其他申請一般90天，資料不全可延長。
- 持卡人可在主職之外自僱，但必須繼續符合藍卡條件；為另一僱主額外工作，該僱主通常需另申請 TWV 工作許可。
- 失業求職保護：持卡未滿2年最多3個月；持卡2年或以上最多6個月，且不得超過卡本身有效期。
- **版本衝突**：歐盟移民門戶荷蘭2025頁仍寫至少12個月聘用，IND現行官方明確6個月，應採IND。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-netherlands_en
- 未完成：中國大陸／香港／台灣申請地MVV豁免、家屬個案文件、續期及永居全部條件，仍為部分核驗。

## 2026-11-10 第三十二輪：荷蘭 EU Blue Card MVV 國籍、跨境流動與長期居留（IND）
- IND MVV 豁免頁（2026-05-06）：僅因國籍豁免的名單包含澳洲、加拿大、日本、摩納哥、紐西蘭、梵蒂岡、英國、美國、韓國、瑞士及EU/EEA；**中國大陸、香港、台灣均不在按國籍自動豁免名單**。這不代表所有相關護照持有人都必須辦 MVV，持有荷蘭既有居留、其他EU國藍卡滿12個月等有個別豁免。官方：https://ind.nl/en/mvv-exemptions
- IND EU Blue Card 官方頁（2026-06-15）：持其他參與國藍卡至少12個月，可申請荷蘭長期流動；符合該條件者及其家屬可能豁免 MVV；IND 確認藍卡僱主不強制為 recognised sponsor，費用€423。官方：https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit
- IND 長期EU居留（2026-11-06）：一般要求至少5年合法居留，過往學生居留只計50%，其他臨時目的居留不計；藍卡跨國累計特殊情形：申請前至少連續2年在荷蘭持藍卡，之前在另一參與國至少連續12個月持藍卡，且5年內有合資格EU居留（包括部分其他高技能、研究、庇護、50%學生時間）；五年期間離開EU單次不得逾12個月、累計不得逾18個月。另一種情況為在荷蘭連續5年合法居留且現持藍卡，離境亦有相應12/18個月上限。來源：https://ind.nl/en/residence-permits/long-term-eu-residency/apply-for-a-residence-permit-for-long-term-eu-residents
- 荷蘭一般永久居留：IND 2026-05-20列一般5年連續合法居留、主居所、按時續簽、非臨時目的居留、收入、BRP登記、A2融合考試或豁免；申請費€254，審理期6個月。與EU長期居民制度的計算不同，不得混稱。官方：https://ind.nl/en/replace-extend-renew-and-change/permanent-residency/permanent-residence-permit
- IND 官方參與國清單：丹麥及愛爾蘭**未實施**EU Blue Card；不得在這兩國頁面虛構藍卡。來源：https://ind.nl/en/participating-countries-eu-blue-card
- 本輪已核對荷蘭藍卡國籍豁免、跨境及長期居留核心條件，但個別護照申請地、家屬收入、法律例外仍須核實，尚非全欄C/D完成。

## 2026-11-10 第三十三輪：荷蘭與瑞典藍卡家屬工作權（官方交叉核驗）
- 荷蘭 IND 配偶居留頁（本輪2026-11-10查閱）：如擔保人持 European Blue Card，配偶居留通常標示自由工作、無需另辦 TWV；但若擔保人持學生居留，配偶不得工作；持一般 GVVA 的配偶通常仍需雇主另辦 TWV。不能把所有家屬居留視為同一工作權。來源：https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner
- 荷蘭 IND 藍卡頁（2026-06-15更新）確認：雇主無須 recognised sponsor，至少6個月聘用；長期流動申請可於其他參與國持藍卡至少12個月後提出；部分合資格家屬可同時申請並適用30日決定期限，須符合完整文件及程序。來源：https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit
- 瑞典 Migrationsverket 藍卡頁：家屬可同時申請，通常包括配偶、登記伴侶、同居伴侶及18歲以下子女；核准家屬居留可與藍卡持有人相同期間，成人家屬及當年滿16歲子女可工作；擔保人須證明足夠收入負擔住房與家庭生活費，不能只看主申請人達到藍卡薪資門檻。來源：https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/eu-blue-cards.html
- 瑞典跨境流動：已在其他參與國持藍卡至少12個月者可向瑞典申請藍卡，須在入境後一個月內提出，申請前不可開始在瑞典工作。來源同上。
- 歐盟官方確認愛爾蘭、丹麥未實施 EU Blue Card，不得創建這兩國的藍卡服務頁。來源：https://ind.nl/en/participating-countries-eu-blue-card
- 本輪核實上述家屬工作權及流動規則；仍須按申請人的實際家庭關係、居留資格、個別國籍和材料核對。整體110條核驗未完成。

## 2026-11-10 第三十四輪：德國與奧地利技術人才家屬工作權（當期官方來源）
- 德國技術人才／EU Blue Card 家庭團聚：Make it in Germany 官方2026頁確認主申請人須有合資格工作居留或藍卡、醫療保險及家庭生活費；配偶一般須成年18歲，符合條件的技術人才配偶團聚**不需入境前德語證明**；配偶取得家屬居留後即可不受限制受僱。部分2024-03-01後首次獲發工作居留者可申請父母或岳父母／公婆團聚，但須另符合條件。來源：https://www.make-it-in-germany.com/en/visa-recognition/family-reunification/spouses-joining-non-eu-citizens
- 德國 EU Blue Card 2026正式官方頁：達B1德語及其他條件者最早21個月可申請 settlement permit；符合較低語言條件者通常27個月，仍須有相應養老保險供款及生活保障等。不能將「21個月」視為任何藍卡持有人自動取得永居。來源：https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card
- 奧地利 Red-White-Red Card Plus：主申請人持 RWR 或 EU Blue Card 並在過去24個月符合條件受僱至少21個月，可申請 RWR Plus，取得不受單一雇主限制的受僱及自僱工作權；主申請人轉換與家屬首次申請是不同情況。來源：https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/redwhiteredcardplus/
- 奧地利 RWR／藍卡持有人家屬可直接申請 RWR Plus；家屬通常限配偶、登記伴侶及未婚未成年子女，配偶／登記伴侶申請時至少21歲；家屬首次申請原則須A1德語，但 RWR Very Highly Qualified、EU Blue Card及Researcher的家屬有入境前德語豁免。首次家屬居留通常1年，符合在奧地利合法居住至少2年及Integration Agreement Module 1者可獲3年（仍受主申請人許可期限限制）。來源同上及 https://www.oesterreich.gv.at/en/themen/menschen_aus_anderen_staaten/aufenthalt/3/2/Seite.120307
- **版本及適用性注意**：歐盟移民門戶德國家庭團聚2025頁仍以一般A1德語描述配偶，須按當期技術人才特別豁免區分；不能把「一般配偶」與「藍卡／技術人才配偶」混同。來源：https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-germany_en
- 本輪核對的是家屬及轉換居留的主要條件，未完成各申請地費用、全部家庭關係證明、護照差異及永居例外；全量110條核驗仍未完成。

## 2026-11-10 第三十五輪：丹麥 Positive Lists 與愛爾蘭 2026 最低年薪
- 丹麥 SIRI 2026-07-01官方公告：高等教育 Positive List 有164個職位，Skilled Work Positive List 有63個職位；每年1月1日及7月1日更新，不應沿用2026-01-01的183/57或1月19日修正的180/54。來源：https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/06/The-Positive-Lists-are-updated-as-of-1-July-2026
- SIRI Skilled Work 正式申請頁：常規審理3個月、補件可至4個月，費用 DKK 6,810；工作須在當期清單，薪資及僱傭條款須符合丹麥同業標準。職業包括廚師、電工、汽車維修技師、部分金屬工種及護理相關職位；部分護理職業須丹麥執照，Social and Health Care Worker 另有1000個配額。官方：https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work/
- 2026-08-01起 Skilled Work Positive List 工資評估使用2026 Q1丹麥統計資料，不能假定所有工種有同一最低薪資；住房、車輛等非現金福利不可直接計入合格薪資。官方：https://nyidanmark.dk/en-GB/News-Front-Page/2026/06/Loenstatistk-positivlisten-for-faglaerte-august-2026
- 丹麥 Pay Limit Scheme 是**另一條**路線，2026最低 DKK 552,000/年（DKK 46,000/月）；不可將此數字套在 Positive List。官方：https://nyidanmark.dk/uk-UA/Words-and-concepts/SIRI/Minimum-amounts/Pay-Limit-Scheme%27s-minimum-amount
- SIRI官方工作計劃比較表：Positive List for higher education 有非自願失業後6個月求職安排，Skilled Work Positive List 無同類6個月求職安排；兩者一般最長4年並可續期，須符合許可條件。來源：https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Work-schemes-in-SIRI---an-overview/
- 愛爾蘭 DETE 2026 Minimum Annual Remuneration 官方表：GEP一般 €36,605；GEP Irish Graduate €34,009；CSEP with relevant degree €40,909；CSEP without relevant degree €68,911；Critical Skills Graduate €36,849；HCA/Home Carer/Care Worker €32,691；肉類及園藝操作工 €32,691。**修正前輪€40,904／€40,909衝突：DETE當期總表列€40,909，但正式對外仍須確認個別職位及有效申請日。** 來源：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/
- 尚未完成：兩國所有清單職業的逐項資格、申請地、家屬、國籍差異、永居及全額費用；上述為部分核驗，不得宣稱110條全數完成。

## 2026-11-10 第三十六輪：丹麥 Supplementary Pay Limit 及愛爾蘭費用／官方薪資衝突
- 丹麥 SIRI 2025-12官方通訊明確2026-01-01起 Supplementary Pay Limit Scheme最低 DKK 446,000/年；一般 Pay Limit Scheme為 DKK 552,000/年，兩者不得混用。SIRI 2026勞工方案申請費 DKK 6,810，隨行家屬申請費 DKK 3,080。來源：https://nyidanmark.dk/-/media/Files/SIRI/Diverse/Erhvervsforums-nyhedsbrev/Erhvervsforum-nyhedsbrev---december-2025.pdf ；https://nyidanmark.dk/uk-UA/Words-and-concepts/SIRI/Minimum-amounts/Pay-Limit-Scheme%27s-minimum-amount
- 愛爾蘭 DETE GEP 官方：初次許可最長24個月；新申請不超過6個月€500，超過6個月至24個月€1,000；續簽不超過6個月€750、超過6個月至36個月€1,500；一般至少提前12週申請；不成功通常退還90%申請費。持續合法持GEP並工作5年者可按條件申請Stamp 4，非自動永居。來源：https://www.enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/
- 愛爾蘭 DETE CSEP 官方：至少2年聘用邀請，免 Labour Market Needs Test，申請費€1,000；合規持有人可申請Stamp 4而非自動獲批；申請一般須在工作開始至少12週前提交。來源：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/
- **重大官方衝突，禁止直接定稿**：DETE 2026 MAR總表列相關學位CSEP €40,909、Critical Skills Graduate €36,849；但DETE當期CSEP專頁列 €40,904 及 €36,848，2025-12-02政府新聞稿也列€40,904。應在網站標示「以申請日Employment Permits Online核定的現行門檻為準」，正式發布前向DETE核實，避免只用總表掩蓋衝突。來源：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/ ；https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/ ；https://www.enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html
- **合規區分**：愛爾蘭工作許可並非入境簽證或居留許可，須按國籍判定是否另需簽證及入境後註冊居留；中國大陸、香港、台灣適用性需另逐項查愛爾蘭移民局，不應推斷。來源：上述DETE GEP/CSEP官方頁。
- 本輪屬新增官方證據及錯誤攔截，未完成全部110路線全欄核驗。

## 2026-11-10 第三十七輪：愛爾蘭 CSEP 官方薪資矛盾深入核查與中港簽證區別
- DETE「Minimum annual remuneration」2026表：相關學位CSEP €40,909，畢業生CSEP €36,849；https://www.enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/
- 同一主管機關 CSEP 申請專頁及官方CSEP申請文件核對表均列：相關學位 €40,904、畢業生 €36,848；39小時每週的薪資基準，40小時則官方清單示例最低 €41,953.60。2025-12-02正式新聞稿也列€40,904。故現有證據顯示「2026總表」與「專項頁、清單、新聞稿」不一致，不能直接判斷是政策修訂還是表格誤差。建議網站標示「2026官方資料有€40,904／€40,909差異，須以遞交時Employment Permits Online／DETE確認」，不應無條件給客戶保證。來源：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/ ; https://enterprise.gov.ie/en/publications/publication-files/critical-skills-employment-permits-checklist.pdf ; https://enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html
- DETE 2026-05-13生效的 Critical Skills Occupations List 以SOC2010分類，部分大類只有指定技能細分符合，不能單靠職稱類似就認定合資格。https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/highly-skilled-eligible-occupations-list/critical%20skills%20occupations%20list.html
- 愛爾蘭 ISD 免簽／需簽國籍官方頁指出簽證通常按國籍或旅行證件簽發國判定，已有有效 Irish Residence Permit 等另有豁免；簽證、工作許可、居留註冊是三件不同事。https://www.irishimmigration.ie/visa-non-visa-required-nationalities/
- ISD官方 Short Stay Visa Waiver FAQ 明確「香港、澳門特區國民已在無需簽證前往愛爾蘭的名單」；中國大陸護照不能據此推定免簽。**但此處僅確認入境簽證一般原則，不等於免除工作許可、就業許可或居留註冊。** https://www.irishimmigration.ie/coming-to-visit-ireland/frequently-asked-questions/
- ISD 北京簽證處受理中國大陸、香港、澳門、蒙古申請；有管轄範圍不等於各地國籍均需簽證。https://www.irishimmigration.ie/visa-offices/
- BIVS英愛簽證計劃只適用合資格短期停留及特定居民／簽證批註，**不可拿BIVS當作赴愛爾蘭工作簽證或居留途徑**。https://www.irishimmigration.ie/coming-to-visit-ireland/british-irish-visa-scheme/
- 台灣護照的最新愛爾蘭入境簽證狀態尚未從完整可檢索官方國籍表單取得，不作推斷；後續須查國籍互動表及特殊護照類型。
- 本輪屬官方文件矛盾及中港資格的部分核驗，110條全量核驗未完成。

## 2026-11-10 第三十八輪：愛爾蘭CSEP法規薪資交叉比對（改進證據等級）
- DETE 2026薪資總表仍列CSEP相關學位€40,909、近畢業生€36,849；官方 https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/
- DETE CSEP專頁仍列€40,904及€36,848，且明確2年job offer、申請費€1,000、無須Labour Market Needs Test、通常至少工作開始12週前申請。官方 https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/
- 2024 Employment Permits Regulations 的2026-03-01合併版本（Better Regulation**非政府網站，僅作法規檢索線索，尚須以Irish Statute Book正式修訂文本複核**）Schedule 8 Part 1亦列€40,904／€36,848及時薪€20.17／€18.17。https://service.betterregulation.com/document/827290
- DETE 2025-12-02官方政策新聞稿列€40,904。https://www.enterprise.gov.ie/en/news-and-events/department-news/2025/december/20251202.html
- 結論：**官方資料不一致仍未解除**。現有法規整合線索與專項頁較支持€40,904／€36,848，但因非政府整合法規來源不能當作最終權威，公開網站暫保留衝突標記並待 Irish Statute Book 正式修法及DETE確認；不得在個案報價中使用未經核定的數字。
- 愛爾蘭ISD最新國籍頁明確是否需入境簽證取決於國籍／旅行證件，已有Irish Residence Permit等另有豁免；中國大陸與香港不可混同。https://www.irishimmigration.ie/visa-non-visa-required-nationalities/
- ISD官方FAQ指出香港、澳門特區國民一般免愛爾蘭入境簽證；短期簽證豁免計劃及BIVS不可代替赴愛工作許可。https://www.irishimmigration.ie/coming-to-visit-ireland/frequently-asked-questions/
- 台灣護照愛爾蘭免簽狀態仍待直接從ISD完整國籍表讀取，**不使用台灣政府「愛爾蘭人訪台免簽」的反向資訊作推論**。
- 本輪屬法規與官方矛盾證據分級，非110條全欄核驗完成。

## 2026-11-10 第三十九輪：正式愛爾蘭法規 S.I. 643/2025 解決CSEP證據缺口
- **找到正式一手法律文本**：Irish Statute Book / legislation.ie 《Employment Permits (Amendment) (No. 5) Regulations 2025》S.I. No. 643/2025，Regulation 21 新增 Schedule 8 Part 1，正式列出 Critical Skills（相關合資格職業／學歷）最低年薪 €40,904、最低時薪 €20.17；符合申請前12個月取得Level 8或以上相應學歷的畢業生 €36,848、最低時薪 €18.17。官方原始PDF：https://www.legislation.ie/eli/2025/si/643/made/en/pdf ；正式網頁：https://www.irishstatutebook.ie/eli/2025/si/643/made/en/print
- Irish European Migration Network 確認 S.I.643/2025於2026-03-01生效；同時確認一般GEP €36,605，其他CSEP較高門檻 €68,911，特定照護／園藝／肉類工種 €32,691。來源：https://emn.ie/legislation/employment-permits-amendment-no-5-regulations-2025/
- DETE CSEP專頁及2026申請清單亦列€40,904／€36,848：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/ ; https://enterprise.gov.ie/en/publications/publication-files/critical-skills-employment-permits-checklist.pdf
- **未解的發布資料品質差異**：DETE總表仍列€40,909／€36,849：https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/minimum-annual-remuneration/ 。本輪有了正式法規支持，按已核實的2026-03-01修法可採€40,904／€36,848為法規基準；但仍應檢查2026-03-01後是否另有修法，並在實際遞交前按DETE申請系統確認。不得宣稱兩頁已一致。
- **額外資料矛盾**：DETE CSEP申請清單近畢業生最低時薪文字為€18.27，而S.I.643/2025正式Schedule 8列€18.17，故公開資訊應優先使用法規值，並標記申請系統須複核。https://enterprise.gov.ie/en/publications/publication-files/critical-skills-employment-permits-checklist.pdf
- 本輪正式法律核對補上前輪重大證據缺口，但仍非110條全欄完成或已發布。

## 2026-11-10 第四十輪：正式發布後精簡卡片及官方來源再核
- 西班牙移民部 Hoja 20：高等教育EQF至少6級、原持長期學生停留；求職／創業居留24個月不可續，期間不得工作，家屬亦不因該居留取得工作權；求職成功須另轉適用居留。官方：https://inclusion.gob.es/web/migraciones/w/20.-autorizacion-de-residencia-para-busqueda-de-empleo-o-inicio-de-proyecto-empresarial
- 荷蘭 IND 2026官方薪資表：EU Blue Card一般€5,942/月，符合特定條件減額€4,754/月；與Highly Skilled Migrant的€3,122減額不能混用。官方：https://ind.nl/en/news/fees-and-required-amounts-for-2026-known ; https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit
- 瑞典移民局2026當期EU Blue Card頁：2026-07-15起薪資SEK53,625/月，聘用至少6個月，高等教育180學分或至少5年相關經驗；官方：https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/eu-blue-cards.html
- 注意瑞典官方部分僱主續期頁仍誤寫「2025-07-15起SEK53,625」，但2026申請頁明確寫2026-07-15，且2026-06-01改革公告表示EU Blue Card當時薪資已是SEK53,625。日期有官網內部不一致；對外採申請頁日期並註明按當期主管機關複核。來源：https://www.migrationsverket.se/en/employers/extending-a-permit/eu-blue-cards.html ; https://www.migrationsverket.se/en/newsarchive/newrulesforworkpermitsfrom1june2026.5.4d7d222919d2a911cf74cf.html
- 上述三條已在正式頁增加精簡可視卡片並附直接官方連結；仍不得標記所有申請資格／費用／國籍全欄完成。

## 2026-11-10 第四十一輪：瑞士第三國技術工作配額及挪威技術人才薪資
- 瑞士聯邦移民局 SEM 2025-11-19正式宣布2026年第三國（非EU/EFTA）高技能勞工年度配額8,500，其中B居留4,500、L短期4,000；英國國籍另有獨立3,500配額（B 2,100，L 1,400），不能把英國護照直接歸入8,500。來源：https://www.sem.admin.ch/en/newnsb/7HwBjdg5HpBA
- 瑞士 SEM 工作準入官方條件：第三國一般須高技能、僱主證明已嘗試聘請瑞士／EU/EFTA合資格勞工且無合適人選、符合當地正常薪資和工作條件，並受配額及經濟利益審查。不能把「取得聘書」說成直接有工作權。來源：https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/grundlagen_zur_arbeitsmarktzulassung.html ; https://www.sem.admin.ch/sem/en/home/overview-arbeit.html
- 挪威 UDI 技術工作居留：通常須具體單一僱主聘用，工作一般全職但可接受至少80%，具相關職業教育、學位或相當技能；部分需專業認證。來源：https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/
- 挪威 UDI 當期薪資：有集體協議按協議；沒有則按當地正常薪資。要求碩士的職位至少NOK 624,700/年、要求學士的職位至少NOK 545,400/年（稅前），若有充分證據證明當地同業較低薪資正常，可個別例外。不可說所有職位統一門檻。來源：https://www.udi.no/en/word-definitions/pay-and-working-conditions-in-norway
- 挪威 UDI對部分國家發出的餐飲、汽修、建築等職業文件有特別查驗風險提示，名單包含China；此為文件審核警示，**不是中國籍全面禁止申請**。來源：https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/
- 已把瑞士與挪威新增至官網精簡已核實卡片；護照簽證、家屬、申請費、續期與永居仍待逐欄核實。

## 2026-11-11 第四十二輪：110條索引建立，三條此前未核對的RUN補充路線官方初核

**版本控制／發布安全警示：** 2026-11-11讀取GitHub發現 PR #107 已於2026-11-10 10:07:36 UTC合併至main（PR狀態為closed/merged），而且此前main已部署過公開36國索引。因此不能把PR #107仍未合併視為事實，也不能稱本輪「尚未發布」。依最新使用者指示，本輪改在獨立審核分支 `audit/europe-mobility-110-official-checks` 保存證據，**不修改main、不合併、不另行發布**。日後需另行評估既有公開頁是否應繼續展示或降級為未核實目錄。PR: https://github.com/OTCoffice/overseas-tutorial-centre-website/pull/107

**原始範圍（2026-11-11從原始JSON直接讀取）：** `BryceYuuu/RUN/data/programmes.json` 共99筆、36國，當中原來源標示open 94、closed 5；`src/extra_routes.json` 共11筆，合計110筆。原來源的 `status` 只是RUN欄位，**不是主管機關的現況結論**。99筆原始資料在原來源標作closed的ID：`cyprus-investment-programme`、`ireland-immigrant-investor-programme`、`montenegro-citizenship-by-investment`、`spain-golden-visa`、`uk-tier-1-investor-visa`，**各自仍需政府再查核**。新增 `docs/europe-mobility-110-route-audit.csv`，110個唯一ID各一列；本輪新增三條B級部分官方核實，**C/D級「全欄完成」尚無可確認個案，不得報110條已完成**。來源：https://github.com/BryceYuuu/RUN/blob/main/data/programmes.json ; https://github.com/BryceYuuu/RUN/blob/main/src/extra_routes.json （取得日期2026-11-11）。

### 42-A 西班牙 `spain-non-lucrative-visa` — 現行（已核實主要條件；其餘未確認）

- **國籍**：官方Hoja 6以非EU／EEA／瑞士公民為基本範圍；中國大陸、香港特區及台灣護照持有人的*一般第三國規則*可作為初篩，但三類護照的正式適用性、入境簽證地點、翻譯認證與領區個別申請指示**分別待核，不可標「三地完全通過」**。
- **資格及資金**：居住西班牙、不從事工作或專業活動；本人每月資金400% IPREM、每位家屬加100% IPREM；須當地認可醫保、無犯罪紀錄及其他法定條件。用於比較的2026年€600 IPREM估算為本人€2,400/月、每名家屬+€600/月；最終仍須以遞交年度IPREM及所屬領館材料為準。遠距受僱亦不能自行假定獲許可。
- **費用**：初次居留審理費 Modelo 790-052 2.1.1，續期 Modelo 790-052 2.2.1；簽證費、製卡費及所屬領館幣別/減免**未核**，不提供單一固定申請總費用。
- **期限／工作權／家屬**：首次通常1年，完全**不授予工作權**；可與符合條件家屬一併申請，但家屬具體證明及其工作權須核實。
- **續期／永居**：續期一般2年；須維持經濟能力、保險等且續期指引要求一年內在西班牙實際居住超過183天（核對適用計算期）。長期居留為另行申請制度，一般連續合法居留5年及缺席限制，**不是NLV自動轉永居**。
- **生效／來源**：Hoja 6／7最後更新2025-05，以Royal Decree 1155/2024 Articles 60–64為法規依據；本輪查核2026-11-11。
  1. 西班牙移民部初次：https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-no-lucrativa
  2. 西班牙移民部續期：https://www.inclusion.gob.es/web/migraciones/w/renovacion-de-la-autorizacion-de-residencia-temporal-no-lucrativa
  3. 西班牙移民部長期居留：https://ciudadaniaexterior.inclusion.gob.es/en/web/migraciones/w/49.-autorizacion-de-residencia-de-larga-duracion-nacional
- **待補**：三地領館國籍細節、最新IPREM、費用全額、家屬工作權、續期居住計算、另申請長居的個案細節。核驗級別：**B（部分欄位）**。

### 42-B 愛沙尼亞 `estonia-startup-visa` — 現行（D簽證核心條件已核；居留許可未核完）

- **國籍**：創業者官方計劃面向非EU創業者；三地護照在**短期入境**有明顯不同：香港特區護照及有身分證號的台灣護照在指定條件下可短期90/180天免簽；中國大陸普通護照不在該短期一般免簽清單。**短期免簽不代表免D簽證或已可在愛沙尼亞長住／工作**。三地創辦人領事館D簽證與居留材料仍需分別核查。
- **資格／審查**：Startup Committee依科技、創新、可規模化及全球成長模式審核，預計10個工作日出具startup code；傳統單純餐飲／常規顧問生意不自動合格。先取得核准碼，再按需辦D簽證或創業居留；e-Residency不是簽證或實體居留權。
- **資金與費用：重要更正**。愛沙尼亞外交部當期D簽證表：`Start-up business`創辦人 **€880／月**，配偶 **€704／月**；普通長期D簽證費 **€120**（6–11歲 €60）；不要照抄Startup Estonia較舊頁面的€800/月、€80或€100等不同舊費。D簽證表上`Short term employment in Start-up company`的€880是**一次性**，不可誤套為創辦人`Start-up business`月額。創業委員會審查不另收費（Startup Estonia說明）。
- **期限／工作權**：外交部D簽證最多12個月內居住365天；連續D簽證總居留上限730天內548天；創辦與一般雇主工作不同，合法工作可能需相關登記或其他許可，**不可宣傳為任意雇主開放工作**。
- **家屬／續期／永居**：官方創業計劃一般可安排配偶、未成年子女等合規家屬，但不同許可的家屬流程須逐案核對；D簽證延長條件、創業暫住證初次及續期費用、創業居留有效期及長期居留計算**尚未由當期主管機關逐欄完成**，不能把RUN「2+3年」當保證或直接永居。
- **生效／來源**：外交部2026-11-11即時查閱的當期D簽證頁；Startup Estonia頁顯示約2023年既有內容，數字存在過時風險。
  1. MFA D簽及2026財力/費用：https://vm.ee/en/consular-visa-and-travel-information/visa-information/application-long-stay-d-visa
  2. MFA按護照短期免簽：https://vm.ee/en/consular-visa-and-travel-information/visa-information/who-does-not-need-visa-visit-estonia
  3. Startup Estonia 創辦人流程（非主管機關的當期費率優先來源）：https://startupestonia.ee/startup-visa/foreign-founder/
- **待補**：三地領館D簽證完整申請方式；TRP現行國家規費、家屬、工作登記、續期、長居法律；核驗級別：**B（部分欄位）**。

### 42-C 馬耳他 `malta-global-residence-programme` — 現行稅務制度（「移民／永居路線」分類需糾正）

- **路線性質／國籍**：MTCA官方明確GRP是非EU/EEA/瑞士且不是長期居民人士的**特別稅務待遇**；三地一般屬非EU類別，但中國大陸、香港、台灣個別護照、資金、移民居留卡及領事入境身份均**未完成**獨立確認。
- **資格／財力**：需有足額固定資源、合格房產、保險，透過持牌 Authorised Registered Mandatory 提交；MTCA目前仍掛載**2020年版**官方指南（Version 2.0）：買房一般€275,000、南部／戈佐€220,000；租房一般€9,600/年、南部／戈佐€8,750/年，租約至少12個月。**以上均屬官網現有歷史指南數值，尚未以2026有效法規逐一確認，切勿宣稱當期固定門檻。**
- **行政費／稅**：2020指南行政費一般€6,000；只有**南部馬耳他符合資格「已購置」房產且申請時已完成購買**，才可按該指南使用€5,500減額，不適用所有Gozo租房／南部租房。符合課稅條件的匯入海外來源收入按15%及每年最低稅€15,000（仍須審核最新法規及其他所得之稅率）。來源屬舊指南，不應直接標2026法規已核實數值。
- **期限／工作／家屬／永居**：GRP批予的是特別稅務身份，**不是單憑參與就獲工作許可、移民永居或自動家庭居留權**；工作需另符合工作許可，居留身分、家屬實際居留許可、稅務續享條件及年限另查主管機關。不得與MPRP混同。
- **生效／來源**：MTCA目前GRP專頁及其連結的 **2020 Version 2.0** 舊指南，於2026-11-11查核；2026適用法律文本、生效日期與修訂歷史未完成對照。
  1. MTCA GRP現行專頁：https://mtca.gov.mt/personal-tax/individual/special-schemes/global-residence-programme-rules
  2. MTCA專門計劃性質：https://mtca.gov.mt/personal-tax/individual/special-schemes
  3. MTCA舊版官方PDF（2020，需按當期法規覆核）：https://mtca.gov.mt/docs/default-source/documents/personal-tax/individual/special-schemes/the-global-residence-programme/guidelines-grp.pdf
- **待補**：現行法規及核准費率、三地護照適用／居留卡、年費稅務合規及個案工作權。**類別標「稅務計劃，不等於移民或永居」；級別B僅限稅務類型／舊官方指南，移民路線C級未完成。**

### 發布閘門及進度（截至2026-11-11）
- 索引：已直接載入來源99+11共**110**個原始路線記錄；原始來源36國、RUN標示closed 5筆（**尚未政府驗證關閉狀態**）；原來源open 94+額外11，**不代表政府確認可新申請**。
- 本輪三條從`未政府核實`推進為`政府部分欄位已核`；**尚未完成三地護照／費用／家屬／續簽／永居全欄任何一條**，不宣稱有C/D全欄完成。
- 尚未完成：110條每條C/D級官方驗證；逐國可用政府鏈接、法律生效日、閉路狀態；每國頁面／手機排版／導航／SEO／可訪問性及production客觀測試。
- **本輪嚴格只變更GitHub審核分支，不做合併、官網正式發布或部署。** 實際PR #107此前已合併及公開，需人工確認後續處理，不得假定其「未合併」。

## 2026-11-12 第四十三輪：官方驗證三項已關閉投資路線

**研究範圍**：再次讀取 GitHub PR #107（2026-11-10已合併）、draft PR #108、本清單，以及 BryceYuuu/RUN 的 data/programmes.json（99）及 src/extra_routes.json（11）；與現行官方來源逐條比對。本輪驗證的是「首次／新投資申請關閉」及明列的舊案過渡條款，非11項條件C/D全欄完成。政府網址查核日：2026-11-12。

### 1. 西班牙 Spain Golden Visa — spain-golden-visa
- **當前狀態／生效日**：官方確認「已關閉新申請」；Ley 14/2013第63–67條自2025-04-03失去內容，含房產及其他投資類型。不能只說「停止房產投資」。
- **中國大陸／香港／台灣**：三地護照均無新申請途徑；為全路線關閉，並非針對個別國籍的禁令。西班牙駐北京領館2025-03-13公告BLS收件自2025-03-21停辦，這是當地收件日，與法律2025-04-03生效日不同。
- **資格／薪資資金／費用**：新案均不適用。歷史€500,000房產投資不是2026仍開放的門檻；舊案的當期費率、文件及資金來源仍待查。
- **期限／工作權**：新案均不適用。舊有效簽證仍維持原有效期；舊案工作權須按簽發時批准條件查核。
- **家屬**：2025-04-03前已提交的投資人或家屬申請按當時法規處理，仍須實際審理，不保證核發。
- **續簽**：對2025-04-03仍有效的既有房產投資許可，過渡條款按首次核發時規則處理續簽；不應延伸為所有投資或新家屬無條件可續。
- **永居**：並非投資許可即自動永居；舊案實際居留、稅務及申請條件尚未逐欄核實。
- **政府證據**：BOE整合法規（第63–67條、生效日期）https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074&p=20250409&tn=1 ；西班牙移民部UGE過渡規則 https://ciudadaniaexterior.inclusion.gob.es/web/unidadgrandesempresas/inversores ；2025-04-02政府公告 https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/vivienda-agenda-urbana/paginas/2025/020425-fin-golden-visa.aspx ；北京領館通告 https://www.exteriores.gob.es/Consulados/pekin/es/Comunicacion/Noticias/Paginas/Articulos/Eliminaci%C3%B3n-de-la-%E2%80%9CGolden-Visa%E2%80%9D--%E5%8F%96%E6%B6%88%E6%8A%95%E8%B5%84%E7%A7%BB%E6%B0%91%E2%80%9C%E9%BB%84%E9%87%91%E7%AD%BE%E8%AF%81%E2%80%9D.aspx

### 2. 愛爾蘭 Immigrant Investor Programme — ireland-immigrant-investor-programme
- **當前狀態／生效日**：司法部2023-02-14公告，從2023-02-15營業結束起關閉一般新IIP申請；不是2026仍開放的方案。
- **中國大陸／香港／台灣**：三地新申請均不適用，原因是全計劃停止新案；舊制的非EEA身分適用不等於今日能新申請。
- **資格／薪資資金**：2023關閉公告記載歷史淨資產至少€2m及通常投資€1m至少3年、捐贈€500k（特定合計€400k）。**這些是舊制歷史數字，不能當2026新客申請條件**。
- **費用**：新案不適用；舊案當期手續費、稅務及許可費未核。
- **期限／工作權／家屬**：舊批核及2023關閉時待審案件可依法繼續處理；許可類別、家庭成員、工作權需依個案另查，不作自動永居承諾。
- **續簽／永居**：舊案維持居留義務、轉永居或入籍條件未完整核實。
- **過渡**：官網關閉公告提及少數既發展項目／部分基金的3個月善後安排；這不是2026新申請窗口。
- **政府證據**：司法部／移民局2023-02-14關閉公告 https://www.irishimmigration.ie/minister-harris-announces-closure-of-the-immigrant-investor-programme/ ；既有案件善後 https://www.irishimmigration.ie/processing-of-iip-applications-on-hand-following-the-closure-of-the-programme/

### 3. 英國 Tier 1 (Investor) — uk-tier-1-investor-visa
- **當前狀態／生效日**：2022-02-17英國時間16:00起停止所有國籍首次申請及其他簽證轉入，官方2026頁面仍列「You can no longer apply for a new Tier 1 (Investor) visa」。
- **中國大陸／香港／台灣**：三地均不能首次申請，乃全類別關閉，不是護照個別限制。
- **資格／薪資資金**：新案不適用；舊案投資£2m/£5m/£10m及工作條件依起初核發日期、規則及個案。不可當作2026新投資移民門檻。
- **費用**：新案不適用；舊案ILR或家屬當期費用須另依Home Office費表查核。
- **期限／工作權**：既有有效持有人依原條件可受僱，但不得當職業運動員／教練，醫牙科訓練職位亦可能受限制；不得領取公共福利。
- **家屬**：依現行附屬規則，舊持有人伴侶及受撫養子女在符合要求下可以申請；並非自動批准。
- **續簽**：2025-11-11更新的Home Office caseworker guidance第1節明確要求既有Investor entry clearance或leave to remain申請在2026-02-17前提交；截至2026-11-12已過期。GOV.UK目前路線總覽僅列舊持有人的ILR及家屬，**不應沿用2022舊指南誤稱現可續簽**。
- **永居／期限**：舊制符合資格者按2/3/5年條件個別審理；caseworker guidance列既有Investor ILR必須在2028-02-17前提交。法律變更與實際資格需按個案再次查核。
- **政府證據**：GOV.UK當期總覽 https://www.gov.uk/tier-1-investor ；Home Office 2025-11-11更新審案指引（第1、3、39–41節）https://www.gov.uk/government/publications/tier-1-investor-caseworker-guidance/tier-1-investor-caseworker-guidance-accessible ；2022關閉公告 https://www.gov.uk/government/news/tier-1-investor-visa-route-closes-over-security-concerns ；2022年正式規則CP632說明 https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-cp-632-17-february-2022/explanatory-memorandum-to-the-statement-of-changes-in-immigration-rules-cp-632-accessible-version

### 本輪CSV、進度及後續
- 本輪修改三筆原標RUN-closed記錄，狀態改為 **officially_closed_to_new_legacy_...**，核驗級別記 **closure_officially_verified_legacy_fields_pending**，核對日2026-11-12，並存入每筆官方URL。未把這三條標成11欄全量驗證。
- 110路線總索引完整；CSV明確列 **3條新案關閉有官方證據、3條B級部分欄位核實、2條仍只有RUN原標closed待政府核實、102條尚未在CSV更新官方逐條核驗狀態**。Markdown此前其他政策段落有部分核對，不等於該路線整條已驗證。**全部欄位達C/D級：0/110**。
- 待查：Cyprus Investment Programme、Montenegro Citizenship by Investment 兩條政府關閉狀態（特別避免混淆黑山2026投資「居留」與已終止的投資「入籍」）；上述三條舊案細節（費用、護照地別文件、家屬與續居）；其餘未核驗路線的資格、資金、工作權、永居與生效日期。
- **發佈閘門仍關閉。** PR #107已於2026-11-10合併，不能回頭以其已合併分支作工作流；本輪只在 draft PR #108 分支新增核對證據，未更新main、未合併、未部署。

## 2026-11-12 第四十四輪：塞浦路斯與黑山投資入籍停辦（政府當期回查）

### 4. 塞浦路斯 Cyprus Investment Programme — cyprus-investment-programme
- **官方狀態／生效**：塞浦路斯財政部域名的CIP服務供應商登記機關明文稱，部長會議2020-10-13決定**自2020-11-01終止**Cyprus Investment Programme，**2020-11-01後不得按該計畫提交任何新投資入籍申請**。這是投資歸化／入籍計畫，**不得混寫成當期可投資取得居留卡**。
- **國籍適用（中國大陸、香港、台灣）**：三地均無新申請資格，因整個特殊投資入籍計畫停止，不是某護照特別遭禁。舊案個別受理資格未查。
- **資格、薪資／投資資金、費用、期限**：新申請**不適用**；原計畫投資額、背景查核、費用與舊案審理標準不應當作2026新申請報價。
- **工作權／家屬／續簽／永居**：此計畫屬「入籍」而不是「簽證－續居－永居」常規階段，不能以標準移民卡欄位推斷其權利；已申請案件、家屬歸化及撤銷程序各自待核。另有一般歸化與居留路線，但與此CIP不是同一項目。
- **來源（2026-11-12核對）**：財政部域名官設CIP Registry（Important note明文） https://cipregistry.mof.gov.cy/en/ ；塞浦路斯審計機關官方2022特別報告：https://www.audit.gov.cy/audit/audit.nsf/2822715F2B2EAA98C22588BB00375007/%24file/2022%2008%2022%20Audit%20of%20the%20CIP%20-%20EN.pdf （**PDF細節未在本輪逐頁核查，僅記錄佐證連結**）。
- **結論**：官方可驗證「已停止新投資入籍」，舊案細目與任何其他居留路線仍待核，級別不升至全欄C/D。

### 5. 黑山 Montenegro Citizenship by Investment — montenegro-citizenship-by-investment
- **官方狀態／生效**：黑山政府2023-06-30第59次內閣會議公告明列特殊投資入籍計畫**於2022-12-31結束**，此前提交的舊案因需繼續審核，代理牌照保留直至舊案裁決。黑山政府2026-08-20公布的截至2026-07-31項目財務狀況報告簡介再次明確寫「計畫持續至2022-12-31」。故2026沒有該項目新的入籍申請入口。
- **國籍適用（中國大陸、香港、台灣）**：三地均不能以已終止計畫提交新入籍申請；不是針對個別護照的限制。
- **資格／資金／費用／期限**：新案不適用。政府2019創設方案原定以發展計畫投資＋捐贈、有限申請數量實施，歷史資金門檻和中介費不得當2026開放招募金額。
- **工作權／家屬／續簽／永居**：投資「入籍」與投資「臨時居留／工作許可」性質不同，不得換用欄位。舊入籍申請、家屬及國籍撤銷流程另查，不自動推論。RUN提到2026年黑山外國人法Article 70g的某類投資**居留／工作**安排，須另立路線及核定適用護照／EU公民限制，**不是原投資入籍計畫復辦**。
- **來源（2026-11-12核對）**：
  1. 政府2023-06-30第59次會議（正式說明結束及舊案處理）：https://www.gov.me/clanak/saopstenje-sa-59-sjednice-vlade-crne-gore
  2. 政府2026-08-20發布財務報告官方頁面（非下載PDF內容，簡介明確寫結束日）：https://www.gov.me/en/documents/f0fd1706-7c5d-4e0c-9910-756f7833d7ed
  3. 政府2019年原計畫公告（**僅作歷史來源**）：https://www.gov.me/en/article/195254--development-programme-for-acquisition-of-montenegrin-citizenship-by-admission-for-investment-purposes-launched
- **結論**：官方可驗證「已停止新投資入籍」，不升至全欄C/D；歷史申請文件及2026其他種類居留待核。

### 第44輪後總進度與保護措施（2026-11-12）
- 已對照RUN的99+11原始資料，共36國、110路線。RUN原標 **5條closed** 現均已有當期政府官方HTML證據證明 **5條已停止新申請**（西班牙投資居留、愛爾蘭IIP、英國Tier1 Investor、塞浦路斯投資入籍、黑山投資入籍）；不代表它們的舊案所有欄位都已核驗。
- CSV：**5條官方確認新申請已關閉（舊案待補）**、**3條B級部分欄位核對**、**102條尚待逐條錄入官方核驗狀態**。先前checklist可能有零散部分證據，仍不能因此標記整條完整。
- 全部資格、費用、工作、家屬、續簽、永居與國籍等十一類欄位皆完成 C/D 級的路線：**0/110**。待發布審核與網站手機/SEO/連結測試均未完成。
- **只更新draft PR #108審核分支，維持DO NOT MERGE / DO NOT DEPLOY。** 2026-11-12全程未修改main、未新發網站、未把已關閉項目當作當期銷售項目。


## 2026-11-13 第四十五輪：克羅地亞、拉脫維亞、斯洛文尼亞數字遊民路線（官方主管機關）

**範圍與證據基準**：已讀取 GitHub PR #107（2026-11-10 已合併，不可再對其已關閉分支作未合併承諾）、draft PR #108、既有核驗清單、BryceYuuu/RUN \`data/programmes.json\`（99條）及 \`src/extra_routes.json\`（11條）。三個 RUN slug 確認原本屬待核。2026-11-13直接核對 Croatia MUP、Croatia MFA、Latvia OCMA/MFA、Slovenia Interior Ministry/駐北京大使館官方HTML。僅將**有官方證據的核心欄位**推進為B級部分核實，並非11欄C/D完成。

### 45-A 克羅地亞 \`croatia-digital-nomad-temporary-stay\` — 現行／B部分核實
- **對象及中國大陸／香港／台灣**：MUP定義為非EU/EEA/瑞士第三國公民，為**非克羅地亞註冊**企業（包括本人境外企業）透過通信科技遠距工作、**不向克羅地亞僱主提供服務**。中國大陸普通護照在MUP指示明列通常須簽證：先駐外館申請數字遊民臨時居留（也可網上遞交，但短期C簽不延長合法居留），獲批後通常取D簽；有效其他申根國生物識別居留卡／D簽可能有例外。香港SAR護照MFA官方確認可90/180天短期免簽，並可循非需入境簽證者的當地合法居留申請程序。台灣護照**獨立入境/申請地點尚待克方當期官方領館精確確認**；不得把申根免簽當長居許可。
- **資格／文件**：有效護照須超過擬居留期限至少3個月、涵蓋克國醫療保險、境外聘用／服務合約或境外公司註冊加遠距工作證明、資金、已認證無犯罪紀錄及克國地址；材料用克羅地亞或英文，其他語言須授權翻譯。
- **資金**：MUP依Official Gazette 14/21及3/26計算前一年平均淨月薪的2.5倍；當期**€3,622.50/月**；每名額外家屬加前一年平均淨月薪的10%（不是主申請人門檻的10%）。12個月存款替代證明€43,470，18個月€65,205；或月收入銀行流水／至少6個月工資單。
- **費用**：在使領館遞交：批核€55.74，需D簽時另€93.00；如辦卡€41.14，VFS代辦服務費另算。境內警局遞交：批核€46.45+證卡行政費€9.29+普通製卡€31.85（加急€59.73取代普通製卡費）。**不同遞交位置不能簡單把所有費用合計為一個通用包價**。
- **期限／工作權**：最長18個月（實際可能更短）；只能保持符合境外雇主／境外公司遠距工作定義，不得藉此擔任當地僱主職位。
- **家屬**：主申請人**先獲批**數字遊民臨時居留後，其配偶、符合條件的事實伴侶及未成年子女等近親可申請家庭團聚；提前遞交的家屬申請依MUP明文會被拒；家屬本地工作權待核，不得推斷自動可受聘。
- **續期／再申請**：原核准不足18個月時可申請最多6個月延長，須最遲在原許可屆滿**60天前**向警局親自遞交。另據MUP指示，上一許可結束後等6個月才可重新申請數字遊民類別，實際銜接他類居留須個案核查。
- **長居/永居**：克國長期居留另有通常5年連續合法居留、缺席限制、語言/財力等規則，官方同時排除若干臨時居留類別，**數字遊民時段能否計入須依實際許可性質及當期法律另外核實**；不可當作自動永居。永久居留（permanent stay）又有不同法定對象，不能混寫。
- **生效及狀態**：MUP當期頁引Official Gazette 3/26，但**許可18個月政策的確切原始法律生效日未完成獨立核對**；狀態現行，等級B。
- **官方來源（2026-11-13查閱）**：
  1. https://mup.gov.hr/aliens-281621/stay-and-work-281622/temporary-stay-of-digital-nomads/286833
  2. https://mvep.gov.hr/en/services-for-citizens/consular-information-22802/visas-22807/visa-requirements-overview-22879/22879?country=66
  3. https://mup.gov.hr/aliens-281621/stay-and-work/temporary-stay-for-the-purpose-of-family-reunification/281662
  4. https://mup.gov.hr/aliens-281621/stay-and-work/long-term-residence-and-permanent-stay/281682
- **未解**：台灣個別護照分類/領區、家屬工作權、18個月法律生效日、數字遊民計入長居年資及各領館實際服務費。

### 45-B 拉脫維亞 \`latvia-remote-work-visa\` — 現行／B部分核實
- **資格及國籍**：OCMA官網2026-06-15更新的remote work D簽：面向第三國公民，但**境外雇主須在OECD會員國註冊，或申請人的自僱登記須在OECD會員國**。這是*雇主/自僱登記地*門檻，**不是申請人的護照國籍須為OECD國家**。若僅持中國大陸、香港、台灣本地公司/登記（非OECD會員管轄區），不能憑「有遠距收入」推斷合格；持任一上述護照但受僱於符合規定的OECD企業者可進一步個案初篩，三地D簽領事受理仍待核。
- **三地短期入境差異**：Latvia MFA 2026-03-26名單列香港SAR護照可短期免簽；台灣護照**須載有身分證號**才在短期免簽範圍；中國大陸普通護照未列入一般短期免簽名單（外交、公務護照另表）。**短期免簽不等於可以無D簽數字遊民居留／當地就業**。
- **薪資/資金**：OCMA按上年度平均稅前月薪×2.5，2026頁當期為**€4,538/月**；受僱者須OECD國家稅務或社保機構證明及雇主證明已受僱至少6個月、薪資達標及可遠距工作；自僱者須OECD國家稅局確認過去6個月收入達標。
- **費用／保險**：OCMA費表更新2026-03-18，普通D簽國家費**€90**，在拉脫維亞合法期限屆滿少於3工作日前遞交特定D簽則€180；其他外包/翻譯/材料費未核。醫療保險須覆蓋拉國及申根、保險責任限額至少€42,600。
- **期限／工作權**：D簽最多**1年**。OCMA明確寫持遠距工作簽**不得在拉脫維亞就業**；不能把已允許境外遠距工作說成當地開放勞工市場。
- **家屬／續期／永居**：遠距工作簽的隨行家屬、可否按同類再申請及再申請間隔，尚未在現行專頁核實；D簽本身**不是永居許可**，不得推導可直接計入永居年資。
- **生效／法改**：現行D簽專頁2026-06-15；2026-09-15生效的New Immigration Law由OCMA官方明確表示**D簽申請程序維持不變**，但居留證及永居制度有變；其新150,000歐元國家替代投資基金尚未成立，不得混寫成此路線的財力門檻或已可申請的投資方案。
- **官方來源（2026-11-13查閱）**：
  1. https://www.pmlp.gov.lv/en/receiving-long-term-visa-remote-work
  2. https://www.pmlp.gov.lv/en/state-fees-issuance-visa-and-services-related-thereto-0
  3. https://www.mfa.gov.lv/en/countries-and-territories-whose-citizens-may-enter-latvia-without-visa
  4. https://www.pmlp.gov.lv/en/article/new-immigration-law-takes-effect-key-changes-and-regulations
- **未解**：三地D簽申請領區和配額、特殊背景審查、家屬可否隨行/相關工作權、同類續簽方式、轉其他居留的長居計算。此路線**僅可向有合格OECD雇主或登記地者推介**，級別B。

### 45-C 斯洛文尼亞 \`slovenia-digital-nomad-permit\` — 現行／B部分核實；另有未生效政策提案
- **路線法定性質/生效**：內政部2025-11-21正式宣布，依外國人法新增51.a條**自2025-11-21施行**數字遊民**臨時居留許可（不是D簽證）**；非EU/EEA公民，可為境外企業受僱、簽民事合約或在境外自僱，透過ICT遠距工作，不進入斯國本地勞工市場。
- **中國大陸／香港／台灣**：2026年斯國駐北京使館：中國大陸普通護照須短期簽；香港特區及台灣護照一般短期免簽。此為**短期入境差異**，不是數字遊民臨時居留的自動核准。居留許可通用於第三國人士，三地各自領區、台灣護照具體註記、證件認可及個別文件尚待核。
- **財力/費用**：法律說明要有每月**至少斯國平均淨月薪2倍**的合法資金，依官方公報最新公布的平均稅前工資折算；**本輪未取得應用當期公報數字，不刊登固定€門檻**。駐北京使館2026-11-13可查到一般首次臨時居留申請費€102、卡費€15、歐洲境外領卡送達另€13；屬該領館的一般收費表，**仍需核實數字遊民類別有無特例及其他領館收費**。
- **期限／工作權**：最多1年，**不能續簽同一居留**，前次屆滿6個月後才可重新申請該類；在當前有效期內可另申請不同目的的臨時居留（例如有資格的當地受僱），但須獲另類許可，不可直接在當地就業。
- **家屬**：數字遊民可**即時申請家屬團聚**，不受通常持證居留時間門檻的限制；家屬獨立工作權、文件、費用及期限未完成。
- **永居**：臨時居留不等於永居；單次最長1年且原類別不可續。不同居留類別合法居留年資如何計算與缺席限制未核，不得宣稱「住滿5年直升永居」。
- **2026年10月22日政府提案（未確認已生效）**：斯政府宣布一般家屬團聚事先居留期擬由1年延為3年，並提高一般生活費基準及語言要求；這是**Proposal for the Act Amending the Foreigners Act**，不能當作已生效規則或直接否定2025數字遊民即時家屬團聚的官方明文。提案後續國會立法及對數字遊民例外的影響待查。
- **官方來源（2026-11-13查閱）**：
  1. https://www.gov.si/en/news/2025-11-21-temporary-residence-permit-for-digital-nomads/
  2. https://www.gov.si/en/representations/embassy-beijing/visa-information-of-the-embassy-beijing/
  3. https://www.gov.si/en/news/2026-10-22-17th-regular-session-of-the-government-of-the-republic-of-slovenia/
- **未解**：当期官方薪資公報、斯國當地/其他領館行政費、香港台灣領事申辦文件、家屬就業權、轉另種居留及永居年資、2026年新提案法案立法結果。

### 45輪後CSV狀態、限制及下一次優先任務（2026-11-13）
- 索引來源仍為RUN 99+11 **110/110**，涵蓋**36國**。CSV對應：**5條政府官方確認停止新申請（舊案欄位未核完）；6條B級部分核實（前三條+本輪三條）；99條尚未逐條錄入官方核驗；全欄C/D完成0/110**。
- 本輪具體寫入CSV三個slug，保留原RUN狀態原欄，不把RUN「open」視為當期政府已核准；所有新資料標日期2026-11-13及主管機關 URL。
- 優先待辦：①克羅地亞台灣護照和數字遊民長居年資；②拉脫維亞OECD公司認定及家屬／再申請；③斯洛文尼亞2026公報淨薪資門檻及10月提案立法狀況；④逐條覆核其餘99筆RUN資料的國籍和工作/續居權。
- **發布閘門鎖定**：PR #107已合併（歷史事實），所有本輪變更只在**Draft PR #108 的 \`audit/europe-mobility-110-official-checks\` 分支**，未改main、未合併、未部署或做全站驗收測試。網站不得聲稱110條全部通過或全部開放。
