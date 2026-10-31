# Korea K–12 directory update — 2026-10-31

Source records: `content/korea-schools.json` (30 schools/campuses; 30 primary, 29 middle, 28 high school offerings). Each school is counted once across its stages; KIS Seoul and Pangyo are distinct admissions campuses. Sources are official school pages, the Korean Ministry of Education ISI directory and selected awarding-body curriculum records.

The preserved country gateway now includes region navigation, search, stage filtering, named WhatsApp application contact buttons, an email contact option, application documents and service scope/fees. University content remains below the directory. The service desk and both search datasets link to the K–12 application section.

## Qualifications and research limits

- SFS, YISS and ICSU explicitly do not sponsor student visas. NLCS Jeju states visa support after an offer. Other records do not imply confirmed visa sponsorship.
- KIS Seoul ends at Grade 5; UHIS at Year 9. Schools/campuses are not counted as separate primary and secondary institutions.
- BHA accepts boys and girls; 2026–27 boarding age/grade limits differ. Details are dated and linked.
- GIFS, Calvin Manitoba and Cheongna Dalton school/grade information is verified in the official register; detailed current admissions retrieval was limited. Their entries explicitly require obtaining the current school checklist rather than asserting open admission or eligibility.
- OTC listing is independent information, not an agency-contract claim. Fees require a written service scope; no blanket free K–12 application promise is made.
- Document rules differ: SFS/NLCS may require translations and notarisation, while current Chadwick rules generally do not require prior translation of report cards. Individual school requirements prevail.

## Validation

- Node syntax checks passed for the directory renderer, client filter and targeted build.
- Browser DOM verified 30 cards, no duplicate IDs or broken in-page anchors, and every school button includes that school's name in its WhatsApp draft.
- Browser filtering: all high schools = 28; Ulsan + high school = 0 with empty-state message; Seoul Campus search = 1.
- Desktop and 390px iframe mobile viewport visually inspected; both report document scroll width equal to viewport width. This is responsive viewport QA, not a physical-device test.
- No applications, prospect messages or WhatsApp messages were sent during testing.

Render only this update with `node scripts/render-korea-schools.cjs`. The generator is also registered at the end of `generate-site.js` but a full-site build is unnecessary.
