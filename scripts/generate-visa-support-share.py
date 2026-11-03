"""Generate a share-only 1200x600 card. Usage: python3 scripts/generate-visa-support-share.py /path/to/NotoSansTC.ttf"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
scale = 2
navy, red, gold, cream = '#091827', '#7d211d', '#c49a2a', '#f7f4ed'
im = Image.new('RGB', (2400,1200), navy)
d = ImageDraw.Draw(im)
def box(rect, color): d.rectangle(tuple(int(v*scale) for v in rect), fill=color)
def text(x,y,s,size,color):
    font=ImageFont.truetype(sys.argv[1],size*scale)
    d.text((x*scale,y*scale),s,font=font,fill=color)
# 360px banner, padded above and below. Essential copy remains inside x=300..900
# so a centred square crop retains the service identity.
box((660,120,912,480),red)
box((912,120,960,480),gold)
box((0,476,1200,480),red)
box((64,200,72,400),gold)
text(330,177,'海外督導 OTC',18,gold)
text(326,214,'簽證陪跑',54,'white')
text(330,295,'文件有清單，準備有次序。',22,'#e4c681')
text(330,342,'文件整理 · 申請進度 · 行前準備',18,'#e8e9e5')
text(330,395,'overseasuk.com',16,'white')
box((751,193,1152,404),cream)
box((751,193,1152,197),gold)
text(773,212,'服務與安排',11,red)
for i,(label,color) in enumerate(zip(['適用情境','交付內容','服務流程','費用說明'],[gold,'#4e7e76',red,'#557989'])):
    y=239+i*38
    box((773,y,1130,y+0.5),'#d6d1c4')
    box((773,y+11,775,y+25),color)
    text(785,y+9,label,12,navy)
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social/visa-support-share-safe-20261103.png',optimize=True)
