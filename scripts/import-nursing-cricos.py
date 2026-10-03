"""Import the official CRICOS export; select non-expired ASCED 0603 records.
Usage: python3 scripts/import-nursing-cricos.py SOURCE_DIRECTORY METADATA_JSON
Source files: CRICOS Courses.csv, CRICOS Institutions.csv, CRICOS Course Locations.csv.
"""
import csv,json,sys,hashlib,re
from pathlib import Path
root=Path(__file__).resolve().parents[1];source=Path(sys.argv[1]);meta=json.loads(Path(sys.argv[2]).read_text())
def read(name):return list(csv.DictReader((source/name).open(encoding='utf-8-sig')))
all_courses=read('CRICOS Courses.csv');providers={x['CRICOS Provider Code']:x for x in read('CRICOS Institutions.csv')};locations={}
for x in read('CRICOS Course Locations.csv'):locations.setdefault((x['CRICOS Provider Code'],x['CRICOS Course Code']),[]).append(x)
selected=[x for x in all_courses if x['Expired']=='No' and any(x[f'Field of Education {i} Narrow Field'].startswith('0603') for i in (1,2))]
levels={'Certificate IV':4,'Diploma':5,'Advanced Diploma':6,'Associate Degree':6,'Bachelor Degree':7,'Bachelor Honours Degree':8,'Graduate Certificate':8,'Graduate Diploma':8,'Masters Degree (Coursework)':9,'Masters Degree (Research)':9,'Doctoral Degree':10,'Non AQF Award':None}
notes=json.loads((root/'content/nursing-course-notes.json').read_text());notes_by_code={x['code']:x for x in notes if x.get('code')}
def website(s):
 s=s.strip()
 if not s:return ''
 if not s.startswith(('https://','http://')):s='https://'+s
 return s
out=[]
for x in selected:
 p=providers[x['CRICOS Provider Code']];ls=locations.get((x['CRICOS Provider Code'],x['CRICOS Course Code']),[])
 fs=[x[f'Field of Education {i} Detailed Field'] for i in (1,2) if x[f'Field of Education {i} Narrow Field'].startswith('0603')]
 note=notes_by_code.get(x['CRICOS Course Code'],{})
 out.append(dict(school=(p['Trading Name'] if p['Trading Name'].strip().upper() not in ('', 'NA', 'N/A') and len(p['Trading Name']) <= 90 else x['Institution Name']),legalName=x['Institution Name'],providerCode=x['CRICOS Provider Code'],country='澳洲',state=' '.join(sorted({l['Location State'] for l in ls})),level=levels[x['Course Level']],courseLevel=x['Course Level'],name=x['Course Name'],code=x['CRICOS Course Code'],qualificationCode=x['VET National Code'],fields=fs,locations=[dict(name=l['Location Name'],city=l['Location City'],state=l['Location State']) for l in ls],weeks=x['Duration (Weeks)'],tuition=x['Tuition Fee'],nonTuition=x['Non Tuition Fee'],totalCost=x['Estimated Total Course Cost'],website=website(p['Website']),url=note.get('url',''),note=note.get('note',''),exitOnly='exit only' in x['Course Name'].lower(),expired=False,sourceDate='2026-09-30'))
out.sort(key=lambda x:(x['level'] if x['level'] is not None else 99,x['courseLevel'],x['legalName'],x['name'],x['code']))
assert len({(x['providerCode'],x['code']) for x in out})==len(out)
(root/'content/nursing-course-data.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
resources=[r for r in meta['resources'] if r['name'] in ['CRICOS Courses.csv','CRICOS Institutions.csv','CRICOS Course Locations.csv']]
manifest=dict(dataset='Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS)',publisher='Australian Government Department of Education',source='https://data.gov.au/data/dataset/cricos',snapshot='2026-09-30',retrieved='2026-10-03',license=meta['license_title'],licenseUrl=meta['license_url'],selection="Expired = No; Field of Education 1 or 2 Narrow Field starts with 0603",totalCourses=len(out),totalProviders=len({x['providerCode'] for x in out}),totalLocations=sum(len(x['locations']) for x in out),exitOnly=sum(x['exitOnly'] for x in out),resources=[dict(name=r['name'],url=r['url'],modified=r.get('last_modified'),sha256=hashlib.sha256((source/r['name']).read_bytes()).hexdigest()) for r in resources])
(root/'content/nursing-cricos-source.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
with (root/'assets/data/nursing-cricos-20260930.csv').open('w',encoding='utf-8-sig',newline='') as f:
 w=csv.writer(f);w.writerow(['Source snapshot','CRICOS Provider Code','Institution Name','CRICOS Course Code','Course Name','Course Level','AQF Level','Nursing Field of Education','States','Registered duration (weeks)','Registered tuition AUD (whole course)','Registered non-tuition AUD','Exit-only qualification','Institution website','Source'])
 for x in out:w.writerow([x['sourceDate'],x['providerCode'],x['legalName'],x['code'],x['name'],x['courseLevel'],x['level'] or 'Non AQF', '; '.join(x['fields']),x['state'],x['weeks'],x['tuition'],x['nonTuition'],'Yes' if x['exitOnly'] else 'No',x['website'],manifest['source']])
print(json.dumps({k:manifest[k] for k in ['totalCourses','totalProviders','totalLocations','exitOnly']}))
