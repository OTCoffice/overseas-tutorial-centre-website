"""Render the hub's share-only banner using its established academic palette.
Usage: python3 scripts/generate-art-study-share.py /path/to/regular.ttf [/path/to/semibold.ttf]
"""
from pathlib import Path
import sys, json
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
directory=json.loads((root/'content/art-study-programmes.json').read_text())
page=json.loads((root/'content/art-study-residency.json').read_text())
country_count=len(directory['countries'])
programme_count=sum(len(c['items']) for c in directory['countries'])
scale = 2
navy, red, blue, teal, gold, cream = '#19394d', '#9b5146', '#7893a4', '#527c72', '#c6a260', '#f7f4ed'
im = Image.new('RGB', (2400,1200), navy)
d = ImageDraw.Draw(im)
def box(rect, color): d.rectangle(tuple(int(v*scale) for v in rect), fill=color)
def text(x,y,s,size,color,weight=400):
    font_path=sys.argv[2] if weight>=600 and len(sys.argv)>2 else sys.argv[1]
    font=ImageFont.truetype(font_path,size*scale)
    if hasattr(font,'set_variation_by_axes'):
        try: font.set_variation_by_axes([weight])
        except OSError: pass
    d.text((x*scale,y*scale), s, font=font,fill=color)
# The 1200 x 360 banner sits inside a 1200 x 600 sharing canvas.
box((0,120,660,480),navy)
box((660,120,912,480),red)
box((912,120,960,480),gold)
box((0,475,1200,480),red)
text(48,184,'海外督導 OTC',14,gold)
text(48,216,'藝術遊學與駐村',42,'white',700)
text(48,286,f'{country_count} 國 · {programme_count} 個項目',18,'#e4c681')
text(48,329,'歐洲 · 亞洲 · 美洲 · 大洋洲',15,'#e8e9e5')
text(48,353,'項目篩選 · 申請陪跑',15,'#e8e9e5')
text(48,392,'overseasuk.com',13,'white')
box((751,193,1152,404),cream)
box((751,193,1152,197),gold)
text(773,212,'藝術與創作',11,red)
for i,(label,color) in enumerate(zip(['短期課程與工作坊','自費與徵選型駐村','作品、費用與住宿','資格與行前安排'],[gold,teal,red,blue])):
    y=239+i*38
    box((773,y,1130,y+0.5),'#d6d1c4')
    box((773,y+11,775,y+25),color)
    text(785,y+9,label,12,navy)
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/page['shareImageZh'].lstrip('/'))
