# Claude Research Brief - Malaysia / Singapore / Thailand Summer Alliance Expansion

Date: 2026-05-29

Purpose: produce official-source research that Codex can import directly into OTC Summer School Alliance pages. Keep output compact. Do not write long explanations.

## Task

Research more **Malaysia, Singapore and Thailand** short summer / holiday / bilingual programmes suitable for Chinese-speaking families, including:

- English summer camps
- STEM / leadership / future-skills camps
- international-school holiday camps
- bilingual kindergarten / early-years holiday programmes
- parent-child bilingual kindergarten / nursery / playgroup options
- family-accompanied short bilingual programmes

Use **official provider pages only**. If you must rely on a search result snippet because the official page cannot be opened, mark `source_status=search_snippet_needs_official_check`.

Do **not** describe any provider as OTC partner. Use `candidate only`.

## Target Regions

1. Malaysia
2. Singapore
3. Thailand

## Priority Provider Types

- British Council / reputable English providers
- international schools with holiday camps
- bilingual kindergartens and early-years centres
- university / polytechnic / STEM camp providers
- providers that can accept overseas Chinese-speaking families
- providers with clear safeguarding / parent-accompanied / accommodation notes

## Required Output

Return only these sections:

### 1. CSV

Use exactly this header:

```csv
region,provider,official_url,city_or_campus,age_range,programme_type,residential_day_parent_child,dates_2026_or_next_available,fee_public_or_tbc,english_or_bilingual_requirement,application_route,why_fit_chinese_families,risk_or_unknown,source_status
```

Rules:

- 8-12 rows per country if possible.
- Include early-years / kindergarten / parent-child options where official pages support it.
- Mark all uncertain fields as `TBC`.
- Keep each cell short.
- If age is under 6, explicitly mention whether parent accompaniment appears needed or TBC.
- If programme is day-only, state accommodation / guardian is separate.
- If 2026 dates are closed, mark next usable intake or `2027 pipeline`.

### 2. Top 5 Per Country

For each country, rank the 5 best candidates for OTC:

- rank
- provider
- one-line reason
- key risk

### 3. Bilingual Early-Years Notes

For Malaysia / Singapore / Thailand, list:

- best cities or districts
- whether parent-child mode is realistic
- whether international families can easily join
- risks: childcare licensing, language mix, parent visa/stay, guardian, medical insurance

### 4. Missing Email Questions

Write a compact provider email question list for:

- summer camp providers
- bilingual kindergarten / early-years providers
- parent-child programme providers

## Search Hints

Suggested official-source search targets:

- Singapore: British Council Singapore camps, MindChamps holiday programmes, EtonHouse holiday camps, MapleBear Singapore, Odyssey The Global Preschool, Canadian International School camps, Stamford American camps, XCL World Academy camps, Tanglin Trust camps, coding / STEM camps for children.
- Malaysia: British Council Malaysia holiday courses, ELC International School camps, Alice Smith School camps, Garden International School camps, Nexus International School Malaysia camps, IGB International School camps, Marlborough College Malaysia camps, language centres in Kuala Lumpur / Penang / Johor, bilingual kindergartens / Montessori / Reggio centres with holiday programmes.
- Thailand: British Council Thailand camps, Bangkok Patana camps, NIST / ISB / Shrewsbury Bangkok camps, Harrow Bangkok camps, Rugby School Thailand camps, Bangkok bilingual kindergarten holiday programmes, Chiang Mai bilingual / international preschool camps, Phuket / Bangkok family English camps.

## Tone / Safety

- Official facts only.
- No invented partnerships.
- No broad marketing prose.
- No copied long website text.
- Keep concise for direct Codex import.

