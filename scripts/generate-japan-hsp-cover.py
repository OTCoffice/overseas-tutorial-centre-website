from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
r=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,440),'#102d42');d=ImageDraw.Draw(im)
navy,gold,ivory,red,teal='#17374b','#c7a25c','#f6f1e7','#a75542','#527e80'
f='/Library/Fonts/Arial Unicode.ttf'
def text(x,y,s,size,color=ivory):d.text((x,y),s,font=ImageFont.truetype(f,size),fill=color)
d.rectangle((0,40,1199,399),fill=navy)
d.rectangle((135,65,143,375),fill=gold);d.rectangle((149,65,153,375),fill=red)
d.line((160,40,1060,40),fill=gold,width=2);d.line((160,399,1060,399),fill=gold,width=2)
text(185,82,'OTC · 海外督導',24,gold)
text(182,137,'日本高度人才1號',45)
text(185,215,'Highly Skilled Professional',22)
text(185,279,'申請條件 · 家屬 · 永住',25)
text(185,331,'overseasuk.com',20,gold)
d.rectangle((742,88,1018,361),fill=ivory);d.rectangle((742,88,749,361),fill=red)
for y,s,c in [(123,'三類活動',red),(194,'70／80分',gold),(265,'自動積分試算',teal)]:
 d.rectangle((765,y+3,772,y+34),fill=c);text(788,y,s,25,navy)
im.save(r/'assets/social/japan-hsp-20261122.png')
