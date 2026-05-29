# OTC Web Page Build Prompt: Service Desk Layout

Date: 2026-05-29

Use this prompt when creating new OTC public service, route, VET/TAFE, summer-school or provider pathway pages.

## Layout Rule

New public route pages should use the `服務導覽台 / Service Review Desk` structure:

- Compressed strong hero, not a long landing-page hero.
- Hero right-side panel with 4 high-value entry buttons.
- A compact four-item top strip for urgent/primary actions.
- Main content arranged as a left editorial/service flow plus a right sidebar.
- Use `service-herald-grid`, `service-herald-main`, `service-guide-side`, `service-situation-grid`, `service-route-list`, `service-guide-card`, `service-side-links`, and `service-mini-index` where possible.
- Do not use scattered equal cards as the primary structure for route systems.
- Cards can remain inside the main flow, but the page must feel like an operating desk: choose route, check official source, prepare file, contact OTC.

## VET / TAFE Specific Rule

For `/zh/australia-vet-tafe-pathways/` and all child pages:

- Use the service-desk layout consistently.
- The hub is only a clean dispatcher; detailed course tables and long explanations live on subpages.
- Each subpage should include: route purpose, official source links, file checklist, risk boundary, and next-step buttons.
- If a page lists providers or institutions, show the official website and an OTC handling button.
- Do not disclose upstream agency chains, private platforms, commercial terms or internal handoff records on public pages.
- Public wording: OTC performs file screening, official-source checking, education coordination and case follow-up.
- Regulated matters such as migration, law, tax, employment contracts, health registration and professional licensing must be framed as referral or official-source checks.

## Private School Alliance Specific Rule

For `/zh/private-school-alliance/` and its country/provider child pages:

- Do not use the summer-school visual grid as the main structure. Summer-school pages are for short-term programmes; private-school pages are long-term K-12 family decision desks.
- Use a compressed service-desk hero: `海外督導｜私校聯盟`, one concise positioning line, and a right-side panel with four high-value links.
- Immediately after the hero, use a compact four-item decision strip:
  - 國家地區 / country and city fit
  - 課程體系 / IB, AP, American, British, bilingual, local diploma
  - 年級入口 / primary, middle school, high school transfer and graduation risk
  - 住宿照護 / boarding, day school, school bus, parent stay, guardianship, emergency contact
- The private-school decision strip must feel light, not boxed-in: no card border, no top colour bar, no bottom colour bar. Use transparent blocks with a separated slim vertical colour bar on the right side for category identity.
- On private-school country pages, keep the hero decision strip as the country/route quick strip. The sidebar `實用入口` group should be a single clean text line, not bordered buttons: `文件清單`, `課程銜接`, `長線規劃`, `服務導覽`. Keep it borderless, aligned and link-led so it saves vertical space.
- Main body should be left editorial/service flow plus right sidebar:
  - Left: country/region entries, curriculum-system comparison, provider samples, links to deeper country/provider pages.
  - Right: family screening checklist, academic/support resources, file checklist, curriculum support, service desk links and decision order. Avoid wasting sidebar space on long repeated country/region labels.
- Do not use decorative country images or stock photos in the country/region entry strip. Use compact text-led cards with short codes such as `VN`, `AU`, `UK`, `SEA`.
- Country/provider candidate blocks must be compressed and academically refined: no thick cards, no heavy boxed blocks. The `院校 / 路線候選` area should read as a fine academic index/list: location in small left text, school name in modest weight, one concise family-fit line, and school type as quiet grey small text on the right, separated by hairline rules and slim accents.
- The private-school alliance main page should use the same fine index language as country pages. Do not use a timeline-looking country grid or heavy region cards for the country/region dispatcher; use `private-school-candidate-list` / `private-school-candidate-record` style rows for each country or region.
- On the private-school alliance main page, country/region entries should be more compressed than country pages because there are many of them. Use two-column fine index rows on desktop where possible to save vertical space.
- The main-page right sidebar should create a dense internal link network: route countries, Europe subregions, summer-school/study-planning/curriculum/service links and anchor links. Prefer text links with small arrows and hairline separators; avoid boxed cards except for very short family-screening ledgers.
- The private-school main page hero buttons should be compressed into one horizontal row with short labels such as `精選樣本`, `暑校聯盟`, `提交需求`; use primary / secondary / outline hierarchy.
- Add small country flag markers to the main country index where appropriate, use subtle hover backgrounds, and give the curriculum-system rows distinct colors for IB, AP/US, A-Level/UK and bilingual routes.
- The main-page sidebar may include a compact tag cloud and a micro enquiry CTA, but keep them as small soft modules with text arrows rather than heavy framed cards.
- For the country child pages, do not implement `院校 / 路線候選` by reusing `service-situation-grid` cards. Use a dedicated candidate-list structure so old card CSS cannot contaminate the four-line record. Each record must render vertically: city, school name, family-fit sentence, quiet school-type line.
- Do not duplicate `院校 / 路線候選` and `課程與年級核對` on country pages. Merge them into one `院校 / 路線索引` section with tiny course/status hints. Country pages should remain clean as indexes; detailed year-level, fee, accommodation, official website and file-check logic belongs in the individual school/provider subpages.
- On country pages, the opening line `某國私校路線先看這幾個入口` must not be followed by exposed descriptive paragraphs or button-like boxes. Use clean text-only disclosure toggles such as `官方核對`, `年級入口`, `住宿照護`, `文件節奏`; keep the summaries aligned, borderless and compact, and reveal the explanation only on click.
- Country-page sidebars should use useful text-style disclosure links for service questions, not repeated country labels. Good sidebar toggles include English readiness, legal/referral boundary, free OTC handling scope, summer-school-before-main-school logic, guardianship, file timing and emergency-contact checks.
- School names in the country index must be smaller and black/heavy UI type, not oversized display text.
- The application-process section title should be `海外督導 OTC 免費代辦流程`, not a vague `OTC 怎麼辦理`. Use a thin horizontal line-flow with clickable disclosure toggles, not cards: family screening -> official-source check -> file preparation -> free submission/follow-up -> academic/tutor/professional referral support. Show only the numbered step title by default; reveal the tiny helper text on click.
- Each provider/country page must show official school website links, campus/programme notes, OTC initial screening/contact buttons and clear caution that OTC is not claiming official partnership unless explicitly documented.
- When expanding the private-school alliance, generate three layers where possible: main alliance desk, country/region child pages, and individual school/provider child pages. Keep all three visually consistent with the same compressed hero, right-side service panel, light decision strip and source-note boundary.
- Maintain a separate backend contact/status list for relationship evidence. Mark `signed agreement`, `materials received`, `outreach sent`, `agent terms requested`, `second-tier / upstream route`, or `candidate only` internally, but never expose upstream platform names, commission terms, email-thread details or third-party handoff information on the public website.
- Deep narrative belongs in `留學導報` articles. The private-school alliance page should dispatch and structure decisions; the article explains the school story and how families should read the claims.
- Never imply guaranteed admission, visa outcome, scholarship, university progression or formal agent status. Use official-source language and state that campus, curriculum, accreditation and outcomes must be checked by year group and intake.

## Visual Density Rule

- Avoid a sparse, plain grid of repeated cards.
- Add side navigation, quick links, official source panels and action strips.
- Keep text compact but information-rich.
- Use tables only when comparing official institutions, course families, fee/entry logic or checklist rows.
- A public route page should be scan-friendly within 10 seconds.
