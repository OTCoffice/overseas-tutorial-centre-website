# OTC website publishing instructions

## 官網文案規則（使用者確認，2026-09-30）

所有 OTC 官網新建與修改任務，先讀 [網頁製作 Prompt](docs/WEB-COPY-STYLE-ZH.md)，預設沿用繁體中文、簡短名詞標題、自然精簡文案，避免套話及重複提醒。使用者當次要求優先。
Notion 原稿：https://www.notion.so/3eafd1e7e12081fa89a0c2d394fd3e4c

For every new or updated Herald article, follow [docs/HERALD-PUBLISHING-WORKFLOW.md](docs/HERALD-PUBLISHING-WORKFLOW.md).

Required before declaring sharing verified:
- Article-specific cover visible in the article, with OG and Twitter image metadata pointing to the same public, versioned image.
- Pass `python3 scripts/check-herald-share.py content/ARTICLE.json` and repeat with `--live` after deployment.
- Visually inspect desktop/mobile and the user-specified social platform's unsent composer preview; HTTP success is not proof of a rendered card.
- Record unchecked or failing platform previews as pending; never invent a successful result or a cache diagnosis.
- Do not post to social accounts without explicit authorization. Preserve existing user drafts.
- Retain unrelated content and concurrent changes; never force-push to publish an article.

For user-assigned prospect enquiries, complete the linked article AND the relevant service page before sending the pair in the existing DM conversation. Each page needs its own topic-specific visible cover and matching OG/Twitter image. Service pages must explain scope, free versus third-party costs, steps and a working contact action; use `path` in the service JSON to run the share checker. Read workflow section 7. This standing workflow covers assigned prospects only, not unsolicited bulk outreach or public social posts.

## Fast publishing (default for individual articles/services)

Use `node scripts/render-herald.cjs --article content/ARTICLE.json --service content/SERVICE.json` after preparing the approved content and each page's cover. `--service` is optional and uses a matching `.cjs` renderer. Do not run `node generate-site.js` for one article; it regenerates hundreds of unrelated pages and images. Use `--dry-run` to verify rendering without writes. The targeted command runs local cover checks and upserts only the selected search/sitemap records. New articles still need registration in `insightsArticles` and links in the Herald/category indexes.

Reuse the existing Herald and service-desk templates. Keep wording plain. Batch the approved page pair in one commit/deployment. Test each X preview directly in a fresh empty compose page; do not spend repeated cycles on the home composer. Leave the empty composer between the two preview checks so each URL gets a fresh card. Never publish the test drafts. Preserve user drafts. A failed platform preview remains pending and must be reported accurately.


## 分享條位置（2026-11-14）

新建與修改頁面時，社媒分享條放在正文與聯絡區之後、網站 footer 之前，且每頁只保留一組。共用 `pageShell` 預設 `shareAtBottom: true`；獨立 HTML 同步處理。保留分享、Email 與複製連結功能，手機版允許換行。


## Mandatory page creation / revision gate (2026-11-15, user correction)

**This is a blocking instruction for every OTC website page, not a suggestion.** Always read `docs/WEB-COPY-STYLE-ZH.md` and inspect the current approved reference page **before** modifying source or output. Follow the user's named reference (e.g. 「美國留學」) literally; find that actual page and its image/stylesheet first. If unable to locate the exact reference, do not improvise a visually unrelated cover.

1. **Find source of truth**: inspect `AGENTS.md`, the style document, the exact reference page, target page, its renderer/source, existing cover and shared footer. Avoid editing generated HTML alone if the renderer will overwrite it.
2. **No unrelated image reuse**: image file, visible headline, H1, page title, canonical, OG/Twitter title/description and link destination must all refer to the **same exact subject**. European mobility MUST NOT use a Europe exchange, agriculture, study-abroad-US, or any unrelated service image. An existing file is not a shortcut for a new page-specific asset.
3. **User's latest cover spec wins**: for named US-study visual reference, use the approved navy/brick red/gold/warm-white academic header, Noto Serif TC Chinese and Georgia English. Share cover **1200×440**, active content y=40–399, preserve x=180–1020 safety, max 3 short right-hand information items. Match actual image dimensions. The latest user instruction can override dimensions.
4. **Separate header from share cover**: editing share preview does not authorize redesign of the webpage hero. Preserve the authentic OTC service-desk layout and palette. No made-up oversized card-based design or unrelated scenic illustrations.
5. **Verify before commit**: check actual image bytes, PNG/JPG MIME and dimensions; inspect the image visually; verify that the rendered page loads the real file. OG/Twitter images and text must match the page and the intended share cover. Do not point og:image at SVG when platform support is uncertain. Never publish broken or mismatched images.
6. **Footer utilities mandatory**: exactly one `page-utility-bar` after main/contact and before `site-footer`, using existing OTC CSS and working page URL for all share targets, email and copy link; do not show it near the hero.
7. **Publishing QA**: inspect desktop and mobile, check all source/renderer regeneration behavior, links, image fetch, live deployment commit, and *actual* social share preview. Do not say fixed/live/verified merely because GitHub accepted a commit. Record any unchecked item.
8. **Publication safeguards**: policy route verification and site layout changes are distinct. Do not silently turn unverified immigration route data into verified claims when publishing a layout fix.

**Incident to prevent repeating:** On 2026-11-15 the Europe 36-country page wrongly borrowed an unrelated Europe Exchange cover, used wrong headline and off-standard dimensions, and its styling and footer share bar were repeatedly altered without first following the approved reference. Corrective work MUST use the actual US-study reference and pass the checks above; no fallback to another existing-topic image.

## 頁面精簡與通用聯絡資訊（2026-11-18 使用者確認，適用所有新建及修改頁面）

以下要求今後一律遵守；與舊版範本中要求保留框列、快捷列或聯絡側欄的規則衝突時，以本節為準。同步修改原稿／產生器與輸出頁面，避免重新產生後復原舊版。

1. **頁頭不堆重複或空泛的框。** 不為填滿版面增加沒有實際內容的卡片、色框、小標或快捷入口；同一組資訊不可在題頭、快捷列及側欄反覆呈現。沒有獨立用途的框列直接刪除，讓讀者從簡潔題頭直接進入正文。不得因沿用範本而強行保留。
2. **費用說明只寫一次。** 在正文集中說明免費範圍、後續報價及第三方費用；不在頁頭、側欄、提示框或頁末再次重述同一收費內容。需要導引時可連至該費用段落，不複製說明。
3. **「相關服務」只放服務連結。** 僅列相關服務頁名稱與連結；不得混入 WhatsApp、電話、Email、微信、聯絡卡或重複的服務／費用介紹。
4. **通用聯絡方式統一放在通用頁腳。** 公司電話、WhatsApp、Email、微信、地址等共用資料使用網站統一 footer 聯絡區；不散放在正文、服務側欄或「相關服務」內，也不為單頁另造一組聯絡資訊。

提交前核對桌面與手機：頁頭無重複框列、費用說明僅一處、「相關服務」沒有聯絡資料、通用聯絡方式僅位於共用頁腳。社媒分享、Email 分享及複製本頁連結仍使用 footer 前唯一的分享條；分享功能不等於公司聯絡方式。
