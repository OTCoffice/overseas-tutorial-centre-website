import json,pathlib,re
r=pathlib.Path(__file__).resolve().parents[1]
# Coordinates are display anchors; not legal boundary assertions.
rows='''australia|澳洲|Australia|036|134|-25
new-zealand|紐西蘭|New Zealand|554|173|-41
canada|加拿大|Canada|124|-106|57
usa|美國|United States|840|-98|39
uk|英國|United Kingdom|826|-3|55
ireland|愛爾蘭|Ireland|372|-8|53
netherlands|荷蘭|Netherlands|528|5|52
france|法國|France|250|2|47
germany|德國|Germany|276|10|51
belgium|比利時|Belgium|056|4.5|50.5
austria|奧地利|Austria|040|14|48
czechia|捷克|Czechia|203|15|50
poland|波蘭|Poland|616|19|52
hungary|匈牙利|Hungary|348|19|47
slovakia|斯洛伐克|Slovakia|703|19|49
luxembourg|盧森堡|Luxembourg|442|6|49.8
sweden|瑞典|Sweden|752|16|62
denmark|丹麥|Denmark|208|10|56
norway|挪威|Norway|578|9|62
finland|芬蘭|Finland|246|26|64
italy|意大利|Italy|380|12|43
japan|日本|Japan|392|138|37
south-korea|韓國|South Korea|410|128|36
taiwan|台灣|Taiwan|158|121|23.7
hong-kong|香港|Hong Kong|344|114.2|22.3
argentina|阿根廷|Argentina|032|-64|-35
chile|智利|Chile|152|-71|-32
nepal|尼泊爾|Nepal|524|84|28
thailand|泰國|Thailand|764|101|16
malaysia|馬來西亞|Malaysia|458|102|4
sri-lanka|斯里蘭卡|Sri Lanka|144|81|8
uae|阿聯酋|United Arab Emirates|784|54|24
turkiye|土耳其|Türkiye|792|35|39
portugal|葡萄牙|Portugal|620|-8|40
spain|西班牙|Spain|724|-4|40
estonia|愛沙尼亞|Estonia|233|26|59
croatia|克羅埃西亞|Croatia|191|16|45
malta|馬爾他|Malta|470|14.4|35.9
latvia|拉脫維亞|Latvia|428|25|57
romania|羅馬尼亞|Romania|642|25|46
slovenia|斯洛維尼亞|Slovenia|705|15|46
iceland|冰島|Iceland|352|-19|65
costa-rica|哥斯大黎加|Costa Rica|188|-84|10
brazil|巴西|Brazil|076|-52|-13
colombia|哥倫比亞|Colombia|170|-74|4
barbados|巴貝多|Barbados|052|-59.5|13.2
antigua-barbuda|安地卡及巴布達|Antigua and Barbuda|028|-61.8|17
mauritius|模里西斯|Mauritius|480|57.5|-20
namibia|納米比亞|Namibia|516|17|-22
south-africa|南非|South Africa|710|25|-29
singapore|新加坡|Singapore|702|103.8|1.3
greece|希臘|Greece|300|23|39
egypt|埃及|Egypt|818|30|27'''
countries={}
for line in rows.splitlines():
 id,name,en,num,lon,lat=line.split('|');countries[id]={'id':id,'name':name,'en':en,'mapId':num,'coord':[float(lon),float(lat)],'region':'europe','routes':[]}
for group in json.load(open('content/country-study-destinations.json')):
 for s in group['countries']:
  c=next(c for c in countries.values() if c['en']==s['en']);c['region']=group['id']
  c['routes'].append({'id':'study','type':'study','title':'留學與院校申請','summary':s['desc'],'links':[{'label':t,'url':u,'official':u.startswith('https:')} for t,u in s['links']]})
for s in json.load(open('content/work-travel-destinations.json')):
 c=countries[s['id']];c['region']={'north-america':'americas','south-america':'americas','latin-america':'americas','middle-east':'asia'}.get(s['region'],s['region'])
 for i,p in enumerate(s['programs']):
  c['routes'].append({'id':'work-'+str(i),'type':'travel' if p['type']=='stay' else 'work','title':p['title'],'summary':p['summary'],'conditions':p.get('scope',''),'links':[{'label':'官方計劃資料','url':p['official'],'official':True},{'label':'OTC 打工度假聯盟','url':'/zh/work-travel-alliance/','official':False}]})
for c in countries.values():
 migration=pathlib.Path('zh/immigration-alliance')/c['id']/'index.html'
 if migration.exists():c['routes'].append({'id':'immigrate','type':'immigrate','title':'移民與居留','summary':'查閱 OTC 國別居留資料、適用路線及官方來源。資格與費用請按具體計劃確認。','links':[{'label':c['name']+'移民與居留','url':'/'+str(migration.parent)+'/','official':False}]})
 # Travel support is a universal administrative service, not a visa eligibility claim.
 c['routes'].append({'id':'travel','type':'travel','title':'旅行規劃','summary':'行程、交通與住宿規劃。是否需要簽證及入境條件，須按護照、居留身份和出發日期另行核實。','links':[{'label':'OTC 旅行服務','url':'/zh/services/travel-services/','official':False}]})
# Reuse the existing Finland service and its sources.
f=countries['finland']['routes'][0]; f['links'].insert(0,{'label':'芬蘭留學服務','url':'/zh/study-in-finland/','official':False})
a={'updated':'2026-11-27','countries':list(countries.values()),'sourceNote':'整合 OTC 既有國別留學與打工度假資料；整合日期不代表逐項政策已重新核實。請開啟官方來源確認當期資格、費用及受理安排。','jobs':[{'name':'英國 · Find a job','url':'https://findajob.dwp.gov.uk/'},{'name':'加拿大 · Job Bank','url':'https://www.jobbank.gc.ca/'},{'name':'歐洲 · EURES','url':'https://eures.europa.eu/'},{'name':'澳洲 · Workforce Australia','url':'https://www.workforceaustralia.gov.au/'},{'name':'德國 · Make it in Germany','url':'https://www.make-it-in-germany.com/en/working-in-germany/job-listings'}]}
(r/'assets/global-guide/data.json').write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
print(len(a['countries']),'destinations',sum(len(c['routes']) for c in a['countries']),'routes')
