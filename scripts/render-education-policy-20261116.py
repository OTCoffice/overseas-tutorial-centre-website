"""Publish the four November policy stories using the existing Herald shell."""
from pathlib import Path
from html import escape as e
from urllib.parse import quote
import re,json
root=Path(__file__).resolve().parents[1]
def read(p): return (root/p).read_text()
def write(p,s):
    p=root/p
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(s)
def replace(s,pattern,new):
    s,n=re.subn(pattern,lambda _:new,s,count=1,flags=re.S)
    assert n,pattern
    return s
old=json.loads(read('content/us-swt-china-participation-2025.json'))
template=read(old['path'].strip('/')+'/index.html')
day='2026-11-16'
data=json.loads(read('content/education-policy-20261116.json'))
entries=[]
for a in data:
    slug=a['slug']
    route='/zh/insights/'+slug+'/'
    cover='/assets/social/'+slug+'-20261116.png'
    version='v=20261116-1'
    kicker='留學導報 · '+a['region']+'政策'
    replacements=[(old['titleZh'],a['title']),(old['summaryZh'],a['summary']),(old['kicker'],kicker),(old['shareImageZh'],cover),(old['socialImageVersion'],version),(old['slug'],slug)]
    s=template
    for before,after in replacements:
        s=s.replace(before,e(after,quote=True)).replace(quote(before,safe=''),quote(after,safe=''))
    s=s.replace('20261030-2','20261116-1').replace('2026年10月號','2026年11月號').replace('留學升學 · 暑期交流 · 官方數據','留學申請 · 學生簽證 · 政策動態').replace('適合讀者：準備赴美暑期工作交流的學生','2026年11月16日').replace('閱讀時間約 5 分鐘','閱讀時間約 2 分鐘')
    s=s.replace('name="twitter:card" content="summary"','name="twitter:card" content="summary_large_image"').replace('property="og:image:height" content="600"','property="og:image:height" content="440"')
    s=replace(s,r'<figure class="zh-herald-share-cover">.*?</figure>',f'<figure class="zh-herald-share-cover"><img alt="{e(a["title"])}" width="1200" height="440" src="{cover}?{version}"></figure>')
    body=''.join(f'<section><h2 class="zh-herald-section-head" data-num="{i}">{e(h)}</h2><p>{e(p)}</p></section>' for i,(h,p) in enumerate(a['sections'],1))
    s=replace(s,r'<main class="zh-herald-main">.*?</main>','<main class="zh-herald-main">'+body+'</main>')
    s=replace(s,r'<aside class="zh-herald-side[^"]*">.*?</aside>','')
    s=replace(s,r'<div class="zh-herald-body-grid">','<div class="zh-herald-body-grid" style="display:block">')
    sources=''.join(f'<a class="zh-herald-reading-item" href="{e(u)}" rel="noopener" target="_blank"><strong>{e(t)}</strong></a>' for t,u in a['sources'])
    s=replace(s,r'<section class="zh-herald-infographic zh-herald-reading-hub">.*?</section>','<section class="zh-herald-infographic zh-herald-reading-hub"><h2>官方資料</h2><p>核查日期：2026年11月16日</p><div class="zh-herald-reading-list">'+sources+'</div></section>')
    share=re.search(r'<div class="page-utility-bar".*?(?=<div class="zh-herald-page)',s,re.S)[0].strip()
    s=s.replace(share,'',1)
    s=replace(s,r'<div class="oeh-share-row".*?(?=<footer class="zh-herald-footer">)','')
    s=s.replace('<footer class="site-footer">',share+'\n<footer class="site-footer">',1)
    s=replace(s,r'<style>.*?</style>',f'<style>.article-{slug} .zh-herald-share-cover{{max-width:600px;margin:1rem auto}}.article-{slug} .zh-herald-share-cover img{{display:block;width:100%;height:auto;aspect-ratio:30/11}}</style>')
    assert s.count('data-page-share=')==1 and old['slug'] not in s and '2,323' not in s and 'site-footer' in s
    write(route.strip('/')+'/index.html',s)
    m={**a,'path':route,'titleZh':a['title'],'summaryZh':a['summary'],'shareImageZh':cover,'socialImageVersion':version,'socialImageWidth':1200,'socialImageHeight':440}
    write('content/'+slug+'.json',json.dumps(m,ensure_ascii=False,indent=2)+'\n')
    entries.append(dict(type='Insight',title=a['title'],url=route,desc=a['summary']))
for f in ['zh/insights/index.html','zh/insights/study/index.html']:
    s=read(f)
    for entry in entries:
        s=re.sub(r'<a href="'+re.escape(entry['url'])+r'">.*?</a>','',s,flags=re.S)
    items=''.join(f'<a href="{x["url"]}"><b>NEW</b><span>{day}</span><strong>{e(x["title"])}</strong><em>{e(a["region"])} · 簽證政策</em></a>' for x,a in zip(entries,data))
    needle='<div class="zh-review-column-list">'
    assert needle in s
    write(f,s.replace(needle,needle+items,1))
for f in ['search/index.html','zh/search/index.html']:
    s=read(f)
    m=re.search(r'(<script type="application/json" id="search-data">)(.*?)(</script>)',s,re.S)
    old_entries=[x for x in json.loads(m[2]) if x['url'] not in {ent['url'] for ent in entries}]
    write(f,s[:m.start(2)]+json.dumps(entries+old_entries,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')+s[m.end(2):])
s=read('sitemap.xml')
for x in entries:
    loc='<loc>https://overseasuk.com'+x['url']+'</loc>'
    if loc not in s: s=s.replace('</urlset>','  <url>'+loc+'</url>\n</urlset>')
write('sitemap.xml',s)
