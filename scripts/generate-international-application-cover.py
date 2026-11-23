"""Render the service-specific typographic cover using the approved service-desk palette."""
from pathlib import Path
import os
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
font=os.environ.get('OTC_CJK_FONT','/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc')
index=3 if font.endswith('.ttc') else 0
navy,gold,red,ivory='#11263b','#bc9839','#842d32','#faf6eb'
im=Image.new('RGB',(1200,440),navy);d=ImageDraw.Draw(im)
def text(x,y,label,size,color=ivory):
    f=ImageFont.truetype(font,size,index=index)
    assert x+d.textlength(label,font=f)<=1020, 'Text exceeds safe area'
    d.text((x,y),label,font=f,fill=color)
d.rectangle((696,40,953,399),fill=red);d.rectangle((954,40,993,399),fill=gold)
d.rectangle((670,78,1019,361),fill=ivory);d.rectangle((670,78,1019,84),fill=gold)
text(182,78,'海外督導｜雙語世界',23,'#f2cd70')
text(180,132,'海外工作與國際項目',27)
text(180,186,'專業陪跑',54)
text(184,309,'文件準備 · 申請跟進',23,'#f2cd70')
text(697,99,'服務內容',28,navy)
for y,label,color in [(161,'CV · PS 文件優化',gold),(221,'資格認證資料','#56847d'),(281,'填表與持續跟進',red)]:
    d.line((697,y-11,994,y-11),fill='#d6c9ae')
    d.rectangle((698,y+6,703,y+26),fill=color);text(718,y,label,22,navy)
d.rectangle((0,397,1199,401),fill=gold)
im.save(root/'assets/social/international-application-support-20261123.png',optimize=True)
