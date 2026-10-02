"""Render the Singapore guide with the existing stacked Herald article layout."""
import json,re
from pathlib import Path
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parents[1]
a=json.loads((root/'content/canada-nz-ireland-masters-comparison.json').read_text())
base=json.loads((root/'content/singapore-paid-internship-guide.json').read_text())
s=(root/'zh/insights/singapore-paid-internship-mainland-chinese-guide/index.html').read_text()
old='https://overseasuk.com/zh/insights/'+base['slug']+'/'
url='https://overseasuk.com'+a['path']
from urllib.parse import quote
for before,after in [(base['titleZh'],a['titleZh']),(base['summaryZh'],a['summaryZh']),(base['slug'],a['slug']),(base['kicker'],a['kicker']),(base['author'],a['author']),(base['shareImageZh'],a['shareImageZh']),(base['socialImageVersion'],a['socialImageVersion'])]:
 s=s.replace(before,after).replace(quote(before,safe=''),quote(after,safe=''))
s=s.replace(old,url).replace(quote(old,safe=''),quote(url,safe='')).replace('2026年9月30日','2026年10月2日').replace('2026年9月號','2026年10月號')
soup=BeautifulSoup(s,'html.parser')
soup.find('meta',property='og:image:type')['content']='image/jpeg' if a['shareImageZh'].endswith('.jpg') else 'image/png'
cover=soup.select_one('.zh-herald-share-cover img');cover['width']=str(a['socialImageWidth']);cover['height']=str(a['socialImageHeight'])
for prop,key in [('og:image:width','socialImageWidth'),('og:image:height','socialImageHeight')]:soup.find('meta',property=prop)['content']=str(a[key])
soup.select_one('.zh-herald-meta strong').string='留學升學'
soup.select_one('.zh-herald-section-tag').string='留學升學'
soup.select_one('.zh-herald-tagline').string='留學升學 · 碩士規劃 · 畢業後工作'
for item in soup.select('.zh-herald-return-columns a'):
 item.attrs.pop('class',None)
 if item.get('href')=='/zh/insights/study/': item['class']='is-current'
byline=soup.select_one('.zh-herald-byline');byline.select('span')[-1].string='適合讀者：比較三國碩士的申請人'
main=soup.select_one('.zh-herald-main');main.clear()
for i,section in enumerate(a['bodyZh']):
 body='<section><h2 class="zh-herald-section-head" data-num="'+str(i+1)+'">'+section['heading']+'</h2>'
 for p in section['paragraphs']:body+=(p if p.startswith(('<div','<ol')) else '<p>'+p+'</p>')
 body+='</section>'
 main.append(BeautifulSoup(body,'html.parser'))
main.append(BeautifulSoup('<p class="zh-herald-disclaimer">'+a['factCheckNotes'][0]+'</p>','html.parser'))
side=soup.select_one('.zh-herald-side');side.clear()
for title,body in [('選校重點','先看專業、城市與全學程總成本。'),('工作安排','加拿大與紐西蘭符合資格的碩士可申請3年；愛爾蘭符合條件者最長合計24個月。'),('申請支援','<a href="/zh/services/masters-country-planning/">查看OTC免費碩士代辦 →</a>')]:
 side.append(BeautifulSoup('<div class="zh-herald-widget"><div class="zh-herald-widget-title">'+title+'</div><p>'+body+'</p></div>','html.parser'))
hub=soup.select_one('.zh-herald-reading-hub');hub.clear()
hub.append(BeautifulSoup('<h2>官方來源</h2><p>官方資料 · 資料核查：2026年10月2日</p><div class="zh-herald-reading-list">'+''.join('<a class="zh-herald-reading-item" href="'+u+'" target="_blank" rel="noopener"><strong>'+t+'</strong><span>'+u+'</span></a>' for t,u in a['resources'])+'</div>','html.parser'))
style=soup.new_tag('style');style.string='.article-'+a['slug']+' .article-service-table{overflow-x:auto;max-width:100%;margin:24px 0}.article-'+a['slug']+' table{min-width:740px;width:100%;border-collapse:collapse}.article-'+a['slug']+' th,.article-'+a['slug']+' td{padding:12px;vertical-align:top;text-align:left;border:1px solid #d5dce2;line-height:1.7;font-size:15px}.article-'+a['slug']+' th{background:#163347;color:#fff}.article-'+a['slug']+' caption{text-align:left;font-weight:600;margin-bottom:10px}.article-'+a['slug']+' .zh-herald-reading-item span{overflow-wrap:anywhere}.article-'+a['slug']+' .zh-herald-main{min-width:0}'
soup.head.append(style)
for img in soup.select('.zh-herald-share-cover img'): img['alt']=a['titleZh']
target=root/a['path'].strip('/')/'index.html';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(str(soup)+'\n')
entry={'type':'Insight','title':a['titleZh'],'url':a['path'],'desc':a['summaryZh']}
for file in ['search/index.html','zh/search/index.html']:
 p=root/file;html=p.read_text();pattern=r'(<script type="application/json" id="search-data">)([\s\S]*?)(</script>)';m=re.search(pattern,html);entries=json.loads(m[2]);entries=[e for e in entries if e['url']!=a['path']];entries.insert(0,entry);p.write_text(html[:m.start(2)]+json.dumps(entries,ensure_ascii=False).replace('<','\\u003c')+html[m.end(2):])
p=root/'sitemap.xml';s=p.read_text();record='<loc>'+url+'</loc>'
if record not in s:p.write_text(s.replace('</urlset>','<url>'+record+'</url>\n</urlset>'))
for file in ['zh/insights/index.html','zh/insights/study/index.html']:
 p=root/file;s=p.read_text()
 if a['path'] in s:continue
 item='<a href="'+a['path']+'"><b>NEW</b><span>2026-10-02</span><strong>'+a['titleZh']+'</strong><em>加拿大 · 紐西蘭 · 愛爾蘭</em></a>'
 if file.endswith('study/index.html'):
  s=s.replace('<div class="zh-review-column-list">','<div class="zh-review-column-list">'+item,1)
  s=re.sub(r'共 (\d+) 篇',lambda m:'共 '+str(int(m[1])+1)+' 篇',s,count=1)
 else:
  s=s.replace('<div class="zh-review-prelude">','<div class="zh-review-column-list">'+item+'</div><div class="zh-review-prelude">',1)
 p.write_text(s)
print('Rendered masters comparison, comparison table and Herald/search indexes.')
