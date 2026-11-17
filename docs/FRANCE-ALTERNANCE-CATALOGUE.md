# France Alternance catalogue — 17 November 2026

Source: Réseau des Carif-Oref, public catalogue API and documentation:
- https://catalogue-apprentissage.intercariforef.org/
- https://catalogue-apprentissage.intercariforef.org/api/docs/
- https://www.data.gouv.fr/dataservices/catalogue-apprentissage

`python3 scripts/sync-france-alternance.py --as-of 2026-11-17` reads every page matching `catalogue_published=true`, a diploma label containing MASTER and at least one session end on/after the selected date. All 2,398 source IDs were unique. Exact provider legal name + course title + city + RNCP group them into 1,896 offerings, with 162 distinct provider names across 16 regions. Provider names are not a university count. Source periods include ongoing and future sessions, not open application places. 621 grouped offerings have a start date in 2027. Start dates must not be used as application deadlines. M1/M2 and overseas eligibility are not inferred from catalogue membership.

The public data file includes factual names, dates, qualification labels and source links, and omits contacts and narrative course descriptions. CSV is UTF-8 with BOM. Do not republish prospect conversations or customer records here.

The catalogue covers apprenticeship records, not every professionnalisation course or every institution-only listing. For national master searches and current campaigns use:
- https://monmaster.gouv.fr/formation
- https://information.monmaster.gouv.fr/faq/etudier-en-alternance/
- https://information.monmaster.gouv.fr/faq/candidater/

## Individually checked examples and limitations

These provide useful checks beyond bulk catalogue inclusion. Do not convert any into an unconditional overseas admission claim.
- iaelyon, Marketing Vente: M1/M2, French; separate institutional entry and recruitment conditions. https://iae.univ-lyon3.fr/master-marketing-vente-alternance
- Université Paris-Saclay, M2 ISD apprenticeship: French; relevant M1 or equivalent prerequisites; the inspected 2026 campaign was closed. https://www.universite-paris-saclay.fr/formation/master/informatique/m2-informatique-pour-la-science-des-donnees-isd-voie-par-apprentissage
- Dauphine-PSL, M2 Supply Chain Internationale 217: Bac+4/equivalent in listed relevant subjects; apprenticeship age requirement; French/English admissions calendars differ and must be confirmed. https://dauphine.psl.eu/formations/masters/affaires-internationales-et-developpement/m2-supplychain-internationale/admissions
- IAE Nantes CGAO: does NOT accept direct recruitment via Campus France; foreign candidates must already have the specified French-study/licence background. https://iae.univ-nantes.fr/nos-formations/offre-de-formation/master-controle-de-gestion-et-audit-organisationnel
- IAE Nantes MSI: M1 initial study; M2 alternance is professionnalisation only, not apprenticeship; French evidence requirements apply. https://iae.univ-nantes.fr/nos-formations/offre-de-formation/master-management-des-systemes-dinformation
- IAE Lille MB2I: M1 initial or alternance; M2 alternance; about 25% in English, not an English-only course. https://iaelille.fr/nos-formations/master-marketing-business-to-business-international-et-innovation/
- IAE Lille MBX: M1/M2 in alternance; some English courses; 2027/28 deadlines were listed as forthcoming. https://iaelille.fr/nos-formations/master-marketing-management-branding-et-experience-client-mbx/

## Rendering

`node scripts/render-herald.cjs --service content/france-study-work-settlement-service-zh.json` renders the existing service page. Preserve its native hero. The catalogue renderer is included as a source-driven section, with a separate browser script for filtering and pagination. The header, catalogue and each course link to `/client-portal/?entry=france-alternance`; course links add only the public course name, never customer data or authentication credentials.

## Client centre

The client centre has an authenticated dashboard, profile arrays, per-case programmes/tasks, documents and conversations. Only `shared=true` routes and tasks are returned to a client. Internal assessments/actions/logs remain excluded. Profile writes require verified identity, exact case ownership, same-origin and revision checks. No data from the inspected Xiaoxi account was copied into source, fixtures or production.

## 客戶與顧問端驗收補充（2026-11-17）

文件中心加入分類篩選；顧問「文件與版本」直接列出個案附件，留言頁專注對話。客戶個人資料表格在切換頁籤或個案時保留未儲存的輸入，離開瀏覽器頁面時提醒。遇到較新版本時保留草稿，使用者可另行載入最新版；顧問編輯視窗開啟期間停用全局更新，避免使用新工作區版本提交舊編輯內容。

本機使用虛構個案及記憶體 API 驗收：顧問公開候選項目及待辦→客戶重新載入可見；客戶保存背景→顧問更新可見；兩視窗修改同一資料→舊版本遭拒，重新載入仍保留草稿，明確捨棄後顯示新版本。此驗收未新增正式帳戶、未寄出郵件，也未寫入正式客戶資料；正式登入後的全流程仍需授權帳戶驗收。
