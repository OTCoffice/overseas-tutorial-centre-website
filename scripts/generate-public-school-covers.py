"""Render precise typographic share cards; pass a Traditional Chinese font path."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import sys
font=sys.argv[1]
for slug,title,sub,labels in [
 ('public-school-uk','英國公校','三批十八個公立機構',['代表性課程','國際生學費','校區限制','CAS資格']),
 ('public-school-alliance','公校聯盟','英國十八個機構・德國分類',['英國公校','德國公校','費用比較','申請服務'])]:
 im=Image.new('RGB',(1080,1080),'#f7f4ed');d=ImageDraw.Draw(im);colors=['#162e43','#a5503d','#557989','#4e7e76'];d.rectangle((32,32,1047,1047),outline='#cba34d',width=3)
 for i,c in enumerate(colors):d.rectangle((60+i*240,62,300+i*240,73),fill=c)
 def txt(x,y,t,size,c='#162e43'):d.text((x,y),t,font=ImageFont.truetype(font,size),fill=c)
 txt(80,120,'海外督導 OTC',40);txt(80,245,title,108);txt(80,405,sub,36)
 for i,t in enumerate(labels):
  x=80+(i%2)*476;y=550+(i//2)*150;d.rectangle((x,y,x+445,y+121),fill=colors[i]);txt(x+32,y+26,t,46,'white')
 txt(80,920,'overseasuk.com',36)
 im.save(Path(__file__).resolve().parents[1]/'assets/social'/f'{slug}-20261030-b3.png')
