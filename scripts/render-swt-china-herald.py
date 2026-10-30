"""Render one SWT article from JSON using the existing Herald layout."""
import html,json,re
from pathlib import Path
from urllib.parse import quote
root=Path(__file__).resolve().parents[1]
a=json.loads((root/'content/us-swt-china-participation-2025.json').read_text())
base=json.loads((root/'content/singapore-paid-internship-guide.json').read_text())
s=(root/'zh/insights/singapore-paid-internship-mainland-chinese-guide/index.html').read_text()
for before,after in [(base['titleZh'],a['titleZh']),(base['summaryZh'],a['summaryZh']),(base['kicker'],a['kicker']),(base['author'],a['author']),(base['shareImageZh'],a['shareImageZh']),(base['socialImageVersion'],a['socialImageVersion']),(base['slug'],a['slug'])]:
 s=s.replace(before,after).replace(quote(before,safe=''),quote(after,safe=''))
s=s.replace('2026年10月2日','2026年10月30日').replace('2026年9月號','2026年10月號').replace('適合讀者：大陸高校學生、中國籍海外留學生','適合讀者：準備赴美暑期工作交流的學生').replace('留學升學 · 海外實習 · 國際交流','留學升學 · 暑期交流 · 官方數據')
for key,value,is_name in [('twitter:card','summary',True),('og:image:type','image/png',False),('og:image:width','800',False),('og:image:height','800',False)]:
 attr='name' if is_name else 'property'
 pattern=r'<meta\b(?=[^>]*\b'+attr+r'="'+re.escape(key)+r'")[^>]*>'
 s,count=re.subn(pattern,lambda m:'<meta '+attr+'="'+key+'" content="'+value+'">',s,count=1)
 assert count==1,key

cover='<figure class="zh-herald-share-cover"><img alt="'+html.escape(a['socialTitleZh'],quote=True)+'" fetchpriority="high" width="800" height="800" loading="eager" src="'+a['shareImageZh']+'?'+a['socialImageVersion']+'"/></figure>'
s,n=re.subn(r'<figure class="zh-herald-share-cover">[\s\S]*?</figure>',lambda m:cover,s,count=1);assert n==1
sections=[]
for i,sec in enumerate(a['bodyZh'],1):
 paras=''.join(p if p.startswith(('<div','<ol','<ul')) else '<p>'+p+'</p>' for p in sec['paragraphs'])
 sections.append('<section><h2 class="zh-herald-section-head" data-num="'+str(i)+'">'+html.escape(sec['heading'])+'</h2>'+paras+'</section>')
main='<main class="zh-herald-main">'+''.join(sections)+'<p class="zh-herald-disclaimer">'+html.escape(a['factCheckNotes'][0])+'</p></main>'
s,n=re.subn(r'<main class="zh-herald-main">[\s\S]*?</main>',lambda m:main,s,count=1);assert n==1
side='<aside class="zh-herald-side is-compact"><div class="zh-herald-widget"><div class="zh-herald-widget-title">2025年</div><p>中國來源新增交流訪客：2,323人。</p></div><div class="zh-herald-widget"><div class="zh-herald-widget-title">統計口徑</div><p>報名、錄取、簽證和參加人數各不相同。</p></div><div class="zh-herald-widget"><div class="zh-herald-widget-title">項目申請</div><p><a href="/zh/us-swt-work-travel-support/">查看OTC美國SWT服務 →</a></p></div></aside>'
s,n=re.subn(r'<aside class="zh-herald-side[^"]*">[\s\S]*?</aside>',lambda m:side,s,count=1);assert n==1
links=''.join('<a class="zh-herald-reading-item" href="'+html.escape(u,quote=True)+'" target="_blank" rel="noopener"><strong>'+html.escape(t)+'</strong><span>'+html.escape(u)+'</span></a>' for t,u in a['resources'])
hub='<section class="zh-herald-infographic zh-herald-reading-hub"><h2>資料來源</h2><p>資料核查：2026年10月30日</p><div class="zh-herald-reading-list">'+links+'</div></section>'
s,n=re.subn(r'<section class="zh-herald-infographic zh-herald-reading-hub">[\s\S]*?</section>',lambda m:hub,s,count=1);assert n==1
style='<style>.article-'+a['slug']+' .zh-herald-share-cover{max-width:360px;margin:18px auto}.article-'+a['slug']+' .zh-herald-share-cover img{display:block;width:100%;height:auto}.article-'+a['slug']+' .article-service-table{overflow-x:auto;max-width:100%;margin:18px 0}.article-'+a['slug']+' table{min-width:490px;width:100%;border-collapse:collapse}.article-'+a['slug']+' th,.article-'+a['slug']+' td{padding:10px;text-align:left;vertical-align:top;border:1px solid #d5dce2;line-height:1.6;font-size:14px}.article-'+a['slug']+' th{background:#163347;color:#fff}.article-'+a['slug']+' caption{text-align:left;font-weight:600;margin-bottom:8px}.article-'+a['slug']+' .zh-herald-reading-item span{overflow-wrap:anywhere}.article-'+a['slug']+' .zh-herald-main{min-width:0}</style>'
s=s.replace('</head>',style+'</head>',1)
target=root/a['path'].strip('/')/'index.html';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(s)
entry={'type':'Insight','title':a['titleZh'],'url':a['path'],'desc':a['summaryZh']}
for file in ['search/index.html','zh/search/index.html']:
 p=root/file;data=p.read_text();m=re.search(r'(<script type="application/json" id="search-data">)([\s\S]*?)(</script>)',data);assert m,file
 entries=json.loads(m[2]);entries=[e for e in entries if e['url']!=a['path']];entries.insert(0,entry)
 p.write_text(data[:m.start(2)]+json.dumps(entries,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')+data[m.end(2):])
p=root/'sitemap.xml';s=p.read_text();url='https://overseasuk.com'+a['path'];record='<loc>'+url+'</loc>'
if record not in s:p.write_text(s.replace('</urlset>','  <url>'+record+'</url>\n</urlset>'))
item='<a href="'+a['path']+'"><b>NEW</b><span>2026-10-30</span><strong>'+html.escape(a['titleZh'])+'</strong><em>美國 · 暑期工作交流</em></a>'
for file in ['zh/insights/index.html','zh/insights/study/index.html']:
 p=root/file;s=p.read_text()
 if a['path'] not in s:
  needle='<div class="zh-review-column-list">';assert needle in s,file
  s=s.replace(needle,needle+item,1)
  if file.endswith('study/index.html'):s=re.sub(r'共 (\d+) 篇',lambda m:'共 '+str(int(m[1])+1)+' 篇',s,count=1)
  p.write_text(s)
print('Rendered SWT article, Herald indexes, search and sitemap.')
