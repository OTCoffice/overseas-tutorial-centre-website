# NCLEX-RN Clinical Judgment Bilingual Study Companion

Project status: large-scale manuscript and companion app initiated  
Date started: 2026-05-24  
Publishing line: Overseas Supervision / Overseas Publishing House  
Working language: Chinese main text with English nursing terminology retained

## Working Title

《NCLEX-RN 臨床判斷雙語備考指南：AHPRA Stream B 路線版（獨立學習指南）》

English title:

`NCLEX-RN Clinical Judgment Bilingual Study Companion: Stream B Route Edition (Independent Study Guide)`

## Product Architecture

This project is designed as a large publishing-and-app package, not a single article.

1. Book: bilingual study companion, 120-180 pages for MVP, expandable to 300+ pages.
2. App: mobile-friendly web app with original bilingual drills, glossary, wrong-answer taxonomy and ATT countdown planner.
3. Workbook: printable Stream B / NCLEX / OSCE planning sheets.
4. Future expansion: OSCE vocabulary, station-prep language, care-plan writing and tutor cohort materials.

## Core Reader

- Chinese-speaking nurses researching Ahpra/NMBA Stream B.
- Taiwan junior-college / diploma-trained nursing graduates with clinical experience.
- Learners who may already use UWorld, Archer, Kaplan, Saunders or SimpleNursing but need bilingual interpretation and route planning.
- Health and community-services learners comparing Australia RN, VET/TAFE, GCAN and OSCE routes.

## Editorial Boundary

This project is an independent educational resource. It is not an official NCSBN, Pearson VUE, Ahpra, NMBA, ANMAC or immigration authority publication. It does not guarantee NCLEX-RN pass, OSCE pass, Australian registration, skills assessment, visa grant or employment.

All practice items must be original. Do not copy, paraphrase or reverse-engineer commercial QBank questions.

## File Map

- `manuscript/00_front_matter.md`: title page, copyright page, disclaimer, preface.
- `manuscript/01_route_map.md`: Stream B / NCLEX / OSCE route map.
- `manuscript/02_2026_test_plan.md`: 2026 NCLEX-RN Test Plan bilingual interpretation.
- `manuscript/03_clinical_judgment.md`: clinical judgment model and Chinese explanation.
- `manuscript/04_prioritization_delegation.md`: prioritization, delegation and scope.
- `manuscript/05_ngn_case_method.md`: NGN case-study reading method.
- `manuscript/06_pharmacology_language.md`: pharmacology language and medication-risk framework.
- `manuscript/07_maternal_child.md`: maternal-child safety cues.
- `manuscript/08_mental_health_communication.md`: mental health and therapeutic communication.
- `manuscript/09_safety_infection_control.md`: safety and infection control.
- `manuscript/10_eight_week_planner.md`: 8-12 week study planner and tracker.
- `manuscript/11_osce_transition.md`: transition from NCLEX-RN to OSCE.
- `manuscript/12_appendices_worksheets.md`: source checklist, study audit and worksheets.
- `app-content/glossary.csv`: bilingual controlled vocabulary.
- `app-content/question_bank_seed.json`: original seed practice items.
- `app-content/question_bank_beta_20.json`: 20 original core beta items for editorial and nursing review.
- `app-content/question_bank_expansion_30.json`: expanded to 180 items; includes manually authored items plus generated bilingual beta items requiring RN review.
- `app-content/question_bank_expansion_50.json`: expanded to 300 items; includes manually authored items plus generated bilingual beta items requiring RN review.
- `app-content/question_bank_public_demo_50.json`: low-risk 50-item public demo candidate pool.
- `app-content/wrong_answer_taxonomy.json`: app diagnostic taxonomy.
- `app-prototype/index.html`: first local browser app prototype.
- `production/release_plan.md`: publishing roadmap, review workflow and product tiers.
- `production/generate_500_question_banks.js`: reproducible generator for the 500-item three-bank beta pool.
- `production/build_rn_review_sample.js`: creates stratified RN / nursing educator review packets.
- `production/build_clinical_risk_review_queue.js`: creates high/medium/low clinical risk review queues for the 500-item pool.
- `production/build_public_demo_bank.js`: builds the 50-item public demo candidate pool from non-high-risk reviewed metadata.
