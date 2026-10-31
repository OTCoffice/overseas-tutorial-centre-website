"""Render the hub's share-only banner using its established academic palette.
Usage: python3 scripts/generate-public-school-share.py /path/to/NotoSansTC.ttf
"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
scale = 2
navy, red, blue, teal, gold, cream = '#162e43', '#a5503d', '#557989', '#4e7e76', '#cba34d', '#f7f4ed'
im = Image.new('RGB', (2400,1200), navy)
d = ImageDraw.Draw(im)
def box(rect, color): d.rectangle(tuple(int(v*scale) for v in rect), fill=color)
def text(x,y,s,size,color,weight=400):
    font=ImageFont.truetype(sys.argv[1],size*scale)
    if hasattr(font,'set_variation_by_axes'):
        try: font.set_variation_by_axes([weight])
        except OSError: pass
    d.text((x*scale,y*scale), s, font=font,fill=color)
# The 1200 x 360 banner sits inside a 1200 x 600 sharing canvas.
box((0,120,660,480),navy)
box((660,120,912,480),red)
box((912,120,960,480),gold)
box((0,475,1200,480),gold)
text(48,184,'海外督導 OTC',14,gold)
text(48,216,'公校聯盟',46,'white',700)
text(48,286,'八國公立教育 · 國際學生',18,'#e4c681')
text(48,329,'地區與學校 · 入學與簽證',15,'#e8e9e5')
text(48,353,'選校諮詢 · 申請服務',15,'#e8e9e5')
text(48,392,'overseasuk.com',13,'white')
box((751,193,1152,404),cream)
box((751,193,1152,197),gold)
text(773,212,'選校與諮詢',11,red)
for i,(label,color) in enumerate(zip(['地區與學校','入學與簽證','收費諮詢','申請服務'],[gold,teal,red,blue])):
    y=239+i*38
    box((773,y,1130,y+0.5),'#d6d1c4')
    box((773,y+11,775,y+25),color)
    text(785,y+9,label,12,navy)
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social/public-school-alliance-share-20261031.jpg',quality=95)
