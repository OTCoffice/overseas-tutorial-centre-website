from pathlib import Path
import os
from PIL import Image,ImageDraw,ImageFont
r=Path(__file__).resolve().parents[1]
cn=os.environ.get('OTC_CJK_FONT','/Users/rongrongxiao/Documents/Codex/2026-10-14/notion-chatgpt-codex/work/fonts/NotoSerifCJKtc-Regular.otf')
en=os.environ.get('OTC_EN_FONT','/System/Library/Fonts/Supplemental/Georgia.ttf')
im=Image.new('RGB',(1200,440),'#11263b');d=ImageDraw.Draw(im)
navy,gold,red,ivory='#11263b','#bc9839','#842d32','#faf6eb'
def t(x,y,s,n,c=ivory,font=cn):d.text((x,y),s,font=ImageFont.truetype(font,n),fill=c)
d.rectangle((696,40,953,399),fill=red);d.rectangle((954,40,993,399),fill=gold)
d.rectangle((670,78,1019,361),fill=ivory);d.rectangle((670,78,1019,84),fill=gold)
t(182,78,'海外督導｜雙語世界',23,'#f2cd70');t(180,130,'服務總台',57);t(184,213,'Service Desk',29,'#f2cd70',en);t(184,309,'overseasuk.com',22,ivory,en)
t(697,99,'服務導覽',28,navy)
for y,s,c in [(161,'留學規劃 · 簽證居留',gold),(221,'課程教學 · 生活監護','#56847d'),(281,'求職實習 · 專業合作',red)]:
 d.line((697,y-11,994,y-11),fill='#d6c9ae');d.rectangle((698,y+6,703,y+26),fill=c);t(718,y,s,22,navy)
d.rectangle((0,397,1199,401),fill=gold)
im.save(r/'assets/social/service-desk-us-style-20261122.png',optimize=True)
