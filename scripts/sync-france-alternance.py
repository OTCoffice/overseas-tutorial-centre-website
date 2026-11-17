#!/usr/bin/env python3
import urllib.request,urllib.parse,json,concurrent.futures,pathlib,collections,argparse,csv,io
parser=argparse.ArgumentParser();parser.add_argument('--as-of',required=True);args=parser.parse_args();root=pathlib.Path(__file__).resolve().parents[1]
base='https://catalogue-apprentissage.intercariforef.org/api/v1/entity/formations'
query={'diplome':{'$regex':'MASTER','$options':'i'},'catalogue_published':True,'date_fin':{'$gte':args.as_of+'T00:00:00.000Z'}}
fields=['id','_id','cle_ministere_educatif','diplome','intitule_rco','intitule_long','rncp_code','rncp_intitule','region','localite','num_departement','nom_departement','etablissement_formateur_enseigne','etablissement_formateur_entreprise_raison_sociale','etablissement_gestionnaire_enseigne','etablissement_gestionnaire_entreprise_raison_sociale','date_debut','date_fin','duree','annee','last_update_at','catalogue_published','onisep_url','conditions_specifiques']
def fetch(page):
 p={'query':json.dumps(query),'select':json.dumps({x:1 for x in fields}),'limit':1000,'page':page}
 u=base+'?'+urllib.parse.urlencode(p)
 r=json.load(urllib.request.urlopen(u,timeout=60));return r
first=fetch(1);pages=int(first['pagination']['nombre_de_page']);raw=first['formations']
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
 for r in ex.map(fetch,range(2,pages+1)):raw.extend(r['formations'])
assert len(raw)==first['pagination']['total']
assert len({r['_id'] for r in raw})==len(raw)

groups={}
for x in raw:
 provider=(x.get('etablissement_formateur_entreprise_raison_sociale') or x.get('etablissement_formateur_enseigne') or x.get('etablissement_gestionnaire_entreprise_raison_sociale') or '機構名稱待確認').strip()
 title=(x.get('intitule_rco') or x.get('intitule_long')or'').strip()
 city=(x.get('localite')or'').strip();rncp=x.get('rncp_code')or''
 key=(provider.casefold(),title.casefold(),city.casefold(),rncp)
 if not title:continue
 row=groups.setdefault(key,{'institution':provider,'title':title,'city':city,'region':x.get('region')or'未列地區','department':x.get('nom_departement')or'','diploma':x.get('diplome')or'','rncp':rncp,'starts':[],'ends':[],'sources':[],'years':[],'durations':[]})
 for field,src in [('starts','date_debut'),('ends','date_fin')]:
  row[field]=sorted(set(row[field]+[str(v)[:10]for v in x.get(src,[])if v]))
 for field,src in [('years','annee'),('durations','duree')]:
  if x.get(src):row[field]=sorted(set(row[field]+[str(x[src])]))
 source='https://catalogue-apprentissage.intercariforef.org/formation/'+urllib.parse.quote(x['cle_ministere_educatif'],safe='')
 if source not in row['sources']:row['sources'].append(source)
rows=sorted(groups.values(),key=lambda r:(r['institution'],r['title'],r['city']))
meta={'checked':args.as_of,'source':'https://catalogue-apprentissage.intercariforef.org/','api':base,'rawCount':len(raw),'offerCount':len(rows),'institutionCount':len(set(x['institution']for x in rows)),'query':query,'unit':'相同培訓機構、課程原名、城市及 RNCP 代碼合併；不同來源期次保留日期與連結。'}
(root/'content/france-alternance-catalogue.json').write_text(json.dumps({'meta':meta,'offers':rows},ensure_ascii=False,separators=(',',':'))+'\n')
out=root/'assets/data';out.mkdir(exist_ok=True)
f=io.StringIO();w=csv.writer(f);w.writerow(['機構','課程原名','城市','地區','文憑類別','RNCP','開始日期（非報名截止日）','結束日期','官方來源'])
for r in rows:w.writerow([r['institution'],r['title'],r['city'],r['region'],r['diploma'],r['rncp'],' / '.join(r['starts']),' / '.join(r['ends']),' | '.join(r['sources'])])
(out/('france-alternance-master-'+args.as_of.replace('-','')+'.csv')).write_text('\ufeff'+f.getvalue())
print(meta)
