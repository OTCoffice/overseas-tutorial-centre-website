# UK public colleges, batch 3 — verification record

Checked 30 October 2026. Evidence URLs and representative courses are retained in `content/public-school-uk-batch3.json`.

Government publication API reports an update at 10:53:34 UTC on 30 October 2026. The linked CSV is:
https://assets.publishing.service.gov.uk/media/6ae46be9976f73ef5cfb68ab/SP_-_Student_and_Child_Student_Web_Register_-_2026-10-30.csv

All six exact sponsor names in the data match Publicly funded college / Student rows. Five have Student Sponsor – Track Record status; St David's Catholic College has Student Sponsor status. No action-plan note is present for these six rows.

- New City College explicitly says it can issue CAS and provides course/age/visa mappings. Its fee table is headed 2027/28. Do not use the malformed AS fee cell; it is omitted.
- Capital City College: sponsor register plus international A-Level, application and fee pages support inclusion. Its visas-and-immigration endpoint returned 403 on two attempts; no claim relies on reading that page. Angel campus, three A Levels, ages 16–18, £13,500/year come from the international A-Level page; the fee year is not specified.
- Lincoln College explicitly states Student route sponsorship for selected full-time Level 3+ courses. £7,500/year is published but undated. The school states it does not use agents. Its student accommodation option is restricted to 18+; no claim is made that minor accommodation is arranged.
- Cardiff and Vale College lists international Level 3 tuition of £9,400/year, a separate EU/EEA price, and a £55 CAS charge. These are the school's displayed charges, not a statement of universal government CAS fees. The page does not specify an academic year.
- Gower College Swansea publishes 2026/27 and 2027/28 rates. £23,500/year for A Levels/BTEC in 2027/28 includes accommodation and named extras. Do not present this as tuition-only. Its application page explicitly sets CAS conditions.
- St David's is the Catholic Sixth Form College in Cardiff, not the independent school in Llandudno. Its application page gives CAS steps and a minimum £1,000 deposit, but no complete current tuition quote. The deposit is not shown as tuition.

Not included: Shrewsbury (international evidence not established during this check); Loughborough (current international course listing primarily degree programmes; no verified international fee used). No partner/agency agreement is claimed for this batch.

Web search services returned errors; official pages were read directly over HTTP. Desktop/mobile and deployed-page checks are recorded in the publishing PR; social composer checks are outside this change.
