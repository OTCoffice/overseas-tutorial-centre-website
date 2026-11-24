#!/usr/bin/env python3
# US-study style 1200x600 share cards (navy, title left, card right, gold rule).
# Usage: python3 scripts/generate-us-style-share.py [slug ...]   (reads content/us-style-share-cards.json)
# head may contain \n for a deliberate two-line title. Output: assets/social/<slug>-share-<DATE>.png
import json, html, subprocess, os, sys
from PIL import Image

TPL = """<!DOCTYPE html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:600px;overflow:hidden}
body{background:#1b263d;position:relative;font-family:"Noto Serif CJK TC","Noto Serif CJK HK",serif}
.left{position:absolute;left:60px;top:120px;width:545px;height:340px;display:flex;flex-direction:column;justify-content:center}
.brand{color:#e3c97f;font-size:26px;font-weight:500;margin-bottom:10px;padding-left:3px}
.title{color:#fff;font-size:68px;font-weight:900;line-height:1.15;white-space:nowrap}
.en{color:#e3c97f;font-size:30px;font-weight:700;font-family:"Noto Serif","DejaVu Serif",serif;margin-top:14px;white-space:nowrap;padding-left:3px}
.url{color:#fff;font-size:23px;font-weight:700;font-family:"Noto Serif","DejaVu Serif",serif;letter-spacing:.5px;margin-top:36px;padding-left:3px}
.rule{position:absolute;left:0;right:0;top:476px;height:6px;background:#b39740}
.maroon{position:absolute;left:665px;top:120px;width:243px;height:356px;background:#74333a}
.goldb{position:absolute;left:908px;top:120px;width:47px;height:356px;background:#b39740}
.card{position:absolute;left:650px;top:159px;width:335px;height:286px;background:#f9f6ee;border-top:7px solid #b39740;padding:22px 30px 0}
.card h3{font-size:34px;font-weight:900;color:#1b263d;margin-bottom:16px}
.item{border-top:1px solid #ddd3bd;height:54px;display:flex;align-items:center;font-size:23px;color:#1b263d;font-weight:500;white-space:nowrap;overflow:hidden}
.item i{display:inline-block;flex:none;width:6px;height:22px;margin-right:16px}
</style></head><body>
<div class="left"><div class="brand">海外督導 OTC</div><div class="title" id="t">{head}</div><div class="en" id="e">{en}</div><div class="url">overseasuk.com</div></div>
<div class="rule"></div><div class="maroon"></div><div class="goldb"></div>
<div class="card"><h3>服務重點</h3>
<div class="item"><i style="background:#b39740"></i><span>{i0}</span></div>
<div class="item"><i style="background:#6f8279"></i><span>{i1}</span></div>
<div class="item"><i style="background:#74333a"></i><span>{i2}</span></div></div>
<script>
const W=540,t=document.getElementById('t');let f=t.innerHTML.includes('<br>')?60:68;
while(t.scrollWidth>W&&f>46){f-=2;t.style.fontSize=f+'px'}
if(t.scrollWidth>W){t.style.whiteSpace='normal';t.style.fontSize='54px';t.style.width=W+'px'}
const e=document.getElementById('e');let g=30;while(e.scrollWidth>W&&g>18){g-=1;e.style.fontSize=g+'px'}
document.querySelectorAll('.item span').forEach(s=>{let h=23;while(s.offsetLeft+s.scrollWidth>300&&h>15){h-=1;s.style.fontSize=h+'px'}});
</script></body></html>"""

ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'))
DATE=os.environ.get('SHARE_DATE','20261124')
spec = json.load(open(os.path.join(ROOT,'content/us-style-share-cards.json')))
import tempfile; TMP=tempfile.mkdtemp()
only = sys.argv[1:]
for o in spec:
    if only and o['slug'] not in only: continue
    e = lambda x: html.escape(x)
    h = TPL.replace('{head}', e(o['head']).replace('\n','<br>')).replace('{en}', e(o['en'])).replace('{i0}', e(o['items'][0])).replace('{i1}', e(o['items'][1])).replace('{i2}', e(o['items'][2]))
    hp = os.path.join(TMP, o['slug']+'.html'); open(hp, 'w').write(h)
    raw = os.path.join(TMP, o['slug']+'.png')
    subprocess.run(['google-chrome', '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                    '--force-device-scale-factor=1', '--window-size=1200,600', '--virtual-time-budget=2000',
                    f'--screenshot={raw}', 'file://' + hp], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL, check=True)
    im = Image.open(raw).convert('RGB'); assert im.size == (1200, 600)
    im.save(os.path.join(ROOT,"assets/social",f"{o['slug']}-share-{DATE}.png"), optimize=True)
    print('ok', o['slug'])
