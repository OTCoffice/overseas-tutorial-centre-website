"""Typeset the rental service share card using the 2026-10-31 crop-safe layout.
Usage: python3 scripts/generate-rental-share.py /path/to/NotoSansTC.ttf
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
text(48,184,'海外督導 OTC  ·  英國租房支援',14,gold)
text(48,218,'租房押金材料整理',42,'white',650)
text(48,286,'DPS 文件 · 海外租客支援',18,'#e4cf88')
text(48,333,'租約與通訊歸檔 · 退款材料整理',15,'#eeeeee')
text(48,359,'收費服務 · 按材料量書面報價',15,'#eeeeee')
text(48,401,'overseasuk.com',13,'white')
box((751,193,1152,404),cream);box((751,193,1152,197),gold)
text(773,212,'電子材料包',11,red,600)
for i,(label,color) in enumerate(zip(['事件時間線','證據目錄與文件分類','英文信件草稿','流程與待辦清單'],[gold,teal,red,'#8d99ae'])):
    y=239+i*38
    box((773,y,1130,y+0.5),'#d6d1c4');box((773,y+11,775,y+25),color)
    text(785,y+9,label,12,navy)
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social/uk-rental-deposit-share-20261102-v1.png',optimize=True)
