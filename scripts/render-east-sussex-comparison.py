#!/usr/bin/env python3
"""Refresh this existing Herald article from its JSON without rebuilding other pages."""
from pathlib import Path
import json,re,html
root=Path(__file__).resolve().parents[1]
a=json.loads((root/'content/uk-public-sixth-form-colleges-2027.json').read_text())
p=root/'zh/insights/uk-public-sixth-form-colleges-2027/index.html';s=p.read_text()
for section in a['bodyZh']:
 pattern=r'(<section[^>]*>\s*<h2[^>]*>'+re.escape(section['heading'])+r'</h2>)([\s\S]*?)(</section>)'
 def update(m):
  paragraphs=iter(section['paragraphs'])
  assert len(re.findall(r'<p>[\s\S]*?</p>',m[2]))==len(section['paragraphs'])
  body=re.sub(r'<p>[\s\S]*?</p>',lambda _: '<p>'+next(paragraphs)+'</p>',m[2])
  return m[1]+body+m[3]
 s,n=re.subn(pattern,update,s);assert n==1,section['heading']
# The original sidebar printed URLs as text; make all five resources usable links.
marker='<div class="zh-herald-widget-title">'+('院校與家長手冊' if '院校與家長手冊' in s else '官方查詢資源')+'</div>'
start=s.index(marker)
end=s.index('</aside>',start)
resources='\n'.join('<div class="zh-herald-resource-item"><div class="zh-herald-resource-icon">↗</div><div><a class="zh-herald-resource-name" href="'+html.escape(u,quote=True)+'">'+html.escape(t)+'</a></div></div>' for t,u in a['resources'])
s=s[:start]+'<div class="zh-herald-widget-title">院校與家長手冊</div>\n'+resources+'\n</div>\n'+s[end:]
p.write_text(s)
print('Updated East Sussex paragraphs and resources in existing comparison layout.')
