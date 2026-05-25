# Release Plan

## Phase 0: Foundation Pack

Current output:

- project map.
- front matter.
- twelve manuscript chapters.
- controlled vocabulary seed.
- wrong-answer taxonomy.
- seed question bank.
- 500-item beta practice pool across 11 categories, split across three JSON banks as 20 + 180 + 300.
- 50-item public demo candidate pool excluding high-risk clinical items.
- first app prototype.
- working manuscript HTML build script.

## Phase 1: Manuscript Expansion

Target: 120-180 page MVP.

Chapter expansion list:

1. Route map and Stream B process.
2. 2026 NCLEX-RN test plan.
3. Clinical judgment model.
4. Prioritization and delegation.
5. NGN case method.
6. Pharmacology for Chinese-speaking nurses.
7. Maternal-child high-yield framework.
8. Mental health and therapeutic communication.
9. Infection control and safety.
10. 8-12 week study planner.
11. OSCE transition after NCLEX-RN.
12. Appendices: glossary, worksheets, official links.

## Phase 2: App MVP

Target features:

- bilingual question mode.
- glossary flashcards.
- wrong-answer tag log.
- topic filter.
- ATT countdown.
- local storage progress.
- exportable weak-area summary.

Current app prototype status:

- Loads `question_bank_beta_20.json`, `question_bank_expansion_30.json` and `question_bank_expansion_50.json`, currently totaling 500 beta items.
- Loads `question_bank_public_demo_50.json` as the default public demo pool.
- Falls back to embedded starter items if JSON fetch fails.
- Tracks done/correct counts and weak tags in browser local storage.
- Supports multi-answer NGN-style cue recognition items.
- Supports category filtering, wrong-answer-only review, pool shuffle and weak-area summary copy.
- Includes a category review dashboard showing total items, attempted items, accuracy, wrong-answer queue and completion bar by category.
- Loads searchable glossary terms from `app-content/glossary.csv`.
- Allows switching between Public Demo Pool and Full Internal Pool.

Do not build initially:

- official CAT simulator claim.
- pass prediction.
- user account system.
- payment wall.
- copied commercial questions.

## Phase 3: Review

Required review layers:

1. Editorial review: bilingual clarity and structure.
2. Source review: official claims checked.
3. Nursing reviewer: clinical safety and terminology.
4. Compliance review: disclaimers, trademark language, no guarantee.

Review packet:

- `production/build_clinical_risk_review_queue.js` generates a high/medium/low clinical risk queue for all 500 items.
- `production/build_public_demo_bank.js` generates a 50-item public demo candidate bank from non-high-risk items.
- `production/build_rn_review_sample.js` generates a stratified RN / nursing educator review sample.
- Output files live in `dist/rn_review/`.
- Each sampled item should be marked approved, approved with edits, or hold/rewrite before public beta use.
- All high-risk items should be reviewed before beta use; medium-risk items should be reviewed before public release.

## Phase 4: Beta Release

Beta package:

- 500-page working manuscript HTML for internal review.
- editorial index CSV / Markdown for page-unit review.
- clinical risk review queue for the 500-item beta pool.
- PDF sample: first 40-60 pages.
- Web app demo: 50 public low-risk questions.
- lead magnet: 8-week planner.
- feedback form.

Success signals:

- 50+ signups from relevant audience.
- 10+ qualified feedback responses.
- 5+ route-review enquiries.
- clear weak-area demand pattern.

Current release decision:

- Go to controlled beta review.
- Do not sell as final edition until RN / nursing educator review, source review, bilingual editorial review and compliance review are complete.
- Public wording should use "working manuscript", "beta review edition", "public preview" or "demo"; avoid "official", "approved", "guaranteed", "pass-assured" or similar wording.
