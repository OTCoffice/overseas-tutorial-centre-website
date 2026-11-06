import json,re,urllib.request,concurrent.futures
from pathlib import Path
from urllib.parse import urljoin
from bs4 import BeautifulSoup
out=[]
ROOT=Path(__file__).resolve().parents[2]
import os
os.chdir(ROOT)
SOURCE_URLS={
 'sweden':'https://www.universityadmissions.se/en/find-out-more/swedish-universities/',
 'ireland':'https://hea.ie/higher-education-institutions/',
 'new-zealand':'https://www.universitiesnz.ac.nz/universities',
 'singapore':'https://www.moe.gov.sg/post-secondary/overview/autonomous-universities',
 'austria':'https://studyinaustria.at/en/study/institutions/universities'}
def soup(k):
 req=urllib.request.Request(SOURCE_URLS[k],headers={'User-Agent':'Mozilla/5.0'})
 with urllib.request.urlopen(req,timeout=25) as r:return BeautifulSoup(r.read(),'html.parser')
def add(c,n,url,source,scope,kind='高等教育機構',city=''):
 n=re.sub(r'\s+',' ',n).strip()
 if n:out.append(dict(country=c,name=n,url=url,source=source,scope=scope,kind=kind,city=city,checked='2026-11-06'))
source='https://www.universityadmissions.se/en/find-out-more/swedish-universities/'
for h in soup('sweden').select('.expandable-block h3'):
 a=next((a for a in h.parent.find_all('a',href=True) if a.get_text(strip=True)=='Website'),None)
 if h:add('瑞典',h.get_text(' ',strip=True),a['href'] if a else source,source,'Universityadmissions.se 列出的院校聯絡名單；含大學與大學學院')
source='https://hea.ie/higher-education-institutions/'
s=soup('ireland');archive=s.find(id='hei_archive');active=archive.find_previous_sibling('div')
for a in active.find_all('a',href=True):add('愛爾蘭',a.get_text(' ',strip=True),a['href'],source,'HEA依法合作或接受核心公共資助的機構；不含所有私立院校','HEA 合作／資助機構')
source='https://www.universitiesnz.ac.nz/universities'
for a in (soup('new-zealand').find('main') or soup('new-zealand')).find_all('a',href=True):
 if a['href'].startswith('http') and any(t in a['href'] for t in ['auckland.ac.nz','aut.ac.nz','waikato.ac.nz','massey.ac.nz','wgtn.ac.nz','canterbury.ac.nz','lincoln.ac.nz','otago.ac.nz']):add('紐西蘭',a.get_text(' ',strip=True),a['href'],source,'Universities New Zealand 八所大學；不含理工學院及其他高教機構','大學')
source='https://www.moe.gov.sg/post-secondary/overview/autonomous-universities'
for a in soup('singapore').find_all('a',href=True):
 if re.search(r'/autonomous-universities/[a-z]+$',a['href']):
  n=a.find(['h2','h3','h4','h5']);label=n.get_text(' ',strip=True) if n else a.get_text(' ',strip=True).split(')')[0]+')'
  add('新加坡',label,urljoin(source,a['href']),source,'MOE 六所自治大學；不含藝術大學與私立教育機構','自治大學')
source='https://studyinaustria.at/en/study/institutions/universities'
for a in soup('austria').find_all('a',href=True):
 if re.search(r'/institutions/universities/[^/]+$',a['href']):add('奧地利',a.get_text(' ',strip=True),urljoin(source,a['href']),source,'OeAD 公立大學目錄；私立大學、應用科技大學另列','公立大學')
def fetch(url):
 req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
 with urllib.request.urlopen(req,timeout=25) as r:return BeautifulSoup(r.read(),'html.parser')
def japan(offset):
 url=f'https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php?lang=en&offset={offset}&limit=25&narabikae=2&course=0&go=ofs'
 s=fetch(url);rows=[]
 for a in s.select('a.school-result-item'):
  n=a.select_one('.school-name');kind=a.select_one('.school-type');city=a.select_one('.school-location')
  if n:rows.append((n.get_text(' ',strip=True),urljoin(url,a['href']),kind.get_text(' ',strip=True) if kind else '',city.get_text(' ',strip=True) if city else ''))
 return rows
source='https://www.studyinjapan.go.jp/en/search-for-schools/school_search.php?lang=en'
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
 for rows in ex.map(japan,range(0,233,25)):
  for n,u,k,c in rows:add('日本',n,u,source,'JASSO 學校搜尋所列資料；含大學、研究所與短期大學，非日本全部院校',k,c)
def finland(page):
 url='https://www.studyinfinland.fi/universities'+('?page='+str(page) if page else '')
 s=fetch(url);rows=[]
 for h in s.select('.itemlist--details h3'):
  a=h.parent.select_one('.additional-links a');rows.append((h.get_text(' ',strip=True),urljoin(url,a['href'])))
 return rows
source='https://www.studyinfinland.fi/universities'
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
 for rows in ex.map(finland,range(4)):
  for n,u in rows:add('芬蘭',n,u,source,'Study in Finland 院校目錄的本次部分整理；含大學與應用科技大學，完整名單請查官方來源','應用科技大學' if 'Applied Sciences' in n else '大學')
# Hong Kong official list, including institutions outside UGC's eight universities.
source='https://www.edb.gov.hk/en/edu-system/postsecondary/local-higher-edu/institutions/index.html'
s=fetch(source);section=next(el.parent for el in s.find_all(string=True) if 'Centennial College' in el)
ul=section.find_parent('ul')
for li in ul.find_all('li',recursive=False):
 a=li.find('a',href=True);n=li.get_text(' ',strip=True);n=re.sub(r'\s*\([12]\)\s*','',n).strip();add('香港',n,urljoin(source,a['href']) if a else source,source,'教育局22所可頒授學位的高等教育院校；含公帑及自資院校','學位頒授院校')
# Iceland official national list.
source='https://island.is/en/universities';s=fetch(source)
for ul in s.find_all('ul'):
 if 'University of Akureyri' in ul.get_text():
  for li in ul.find_all('li',recursive=False):
   a=li.find('a',href=True);add('冰島',li.get_text(' ',strip=True),urljoin(source,a['href']) if a else source,source,'冰島政府列出的七所大學層級機構','大學層級機構')
  break
# Exact-source duplicate removal; retain school types and source boundaries.
unique={}
for r in out:unique[(r['country'],r['name'].casefold())]=r
out=list(unique.values());Path('content/university-official-catalogue.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
from collections import Counter
print(len(out),dict(Counter(r['country'] for r in out)))
