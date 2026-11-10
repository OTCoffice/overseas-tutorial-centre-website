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
