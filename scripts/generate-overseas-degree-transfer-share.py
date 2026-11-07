"""Typeset the university application service share card using the 2026-10-31 crop-safe layout.
Usage: python3 scripts/generate-university-application-share.py /path/to/NotoSansTC.ttf
"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
scale=2
navy,gold,red,teal,cream='#101b2e','#b69c44','#77362e','#557e77','#f7f5ef'
im=Image.new('RGB',(1200*scale,600*scale),navy);d=ImageDraw.Draw(im)
def box(rect,color):d.rectangle(tuple(round(v*scale) for v in rect),fill=color)
def text(x,y,s,size,color,weight=400):
    font=ImageFont.truetype(sys.argv[1],size*scale)
    if hasattr(font,'set_variation_by_axes'):
        try:font.set_variation_by_axes([weight])
        except OSError:pass
    d.text((x*scale,y*scale),s,font=font,fill=color)
box((660,120,912,480),red);box((912,120,960,480),gold)
box((0,475,1200,480),red)
text(48,184,'海外督導雙語世界  ·  招生部',14,gold)
text(48,218,'海外專升本',42,'white',650)
text(48,286,'韓外大插班 · 新加坡 SIM',18,'#e4cf88')
text(48,333,'入學年級 · 學分抵免',15,'#eeeeee')
text(48,359,'免費代辦範圍 · 申請與補件',15,'#eeeeee')
text(48,401,'overseasuk.com',13,'white')
box((751,193,1152,404),cream);box((751,193,1152,197),gold)
text(773,212,'申請規劃',11,red,600)
for i,(label,color) in enumerate(zip(['院校與課程比較','入學條件與文件清單','申請時間與優先次序','錄取條件與後續跟進'],[gold,teal,red,'#8d99ae'])):
    y=239+i*38
    box((773,y,1130,y+0.5),'#d6d1c4');box((773,y+11,775,y+25),color)
    text(785,y+9,label,12,navy)
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social/overseas-degree-transfer-20261107.png',optimize=True)
