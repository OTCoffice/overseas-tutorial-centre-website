from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
cn=sys.argv[1] if len(sys.argv)>1 else '/Users/rongrongxiao/Library/Fonts/NotoSerifCJK.ttc'
en=sys.argv[2] if len(sys.argv)>2 else '/System/Library/Fonts/Supplemental/Georgia Bold.ttf'
im=Image.new('RGB',(1200,440),'#10243a');d=ImageDraw.Draw(im)
def text(x,y,t,size,color='#fbf7ed',bold=False):
 f=ImageFont.truetype(en if t.isascii() else cn,size,index=28 if size>=30 and not t.isascii() else 13 if not t.isascii() else 0)
 d.text((x,y),t,font=f,fill=color,anchor='lt',stroke_width=0)
d.rectangle((700,40,959,399),fill='#822c30');d.rectangle((960,40,1009,399),fill='#bd9639');d.line((0,399,1199,399),fill='#bd9639',width=4)
text(182,84,'海外督導｜雙語世界',24,'#f4d78c');text(180,140,'加拿大語校',55);text(183,218,'Canada Language Schools',22,'#f4d78c');text(183,304,'overseasuk.com',21)
d.rectangle((690,77,1018,362),fill='#fbf7ed');d.rectangle((690,77,1018,83),fill='#bd9639');text(716,105,'語校目錄',31,'#10243a')
for i,t in enumerate(['英語與法語課程','省份與城市搜尋','院校資料與申請']):
 y=170+i*55;d.line((716,y-10,990,y-10),fill='#d9ceba');d.rectangle((716,y+4,722,y+25),fill=['#bd9639','#557e77','#822c30'][i]);text(738,y,t,25,'#10243a')
im.save(root/'assets/social/canada-language-schools-share-20261117.png',optimize=True)
# Each school profile retains its own exact subject in social metadata.
import json
for school in json.loads((root/'content/canada-language-directory.json').read_text())['schools']:
 card=im.copy();dc=ImageDraw.Draw(card);dc.rectangle((176,130,682,280),fill='#10243a')
 size=30
 words=school['name'].split();lines=[];line=''
 ff=ImageFont.truetype(en,size)
 for word in words:
  trial=(line+' '+word).strip()
  if dc.textbbox((0,0),trial,font=ff)[2]>495 and line:lines.append(line);line=word
  else:line=trial
 if line:lines.append(line)
 if len(lines)>3:
  size=23;ff=ImageFont.truetype(en,size);lines=[];line=''
  for word in words:
   trial=(line+' '+word).strip()
   if dc.textbbox((0,0),trial,font=ff)[2]>495 and line:lines.append(line);line=word
   else:line=trial
  if line:lines.append(line)
 assert len(lines)<=4, school['name']
 for i,line in enumerate(lines):dc.text((182,142+i*(size+8)),line,font=ff,fill='#fbf7ed',anchor='lt')
 card.save(root/('assets/social/canada-language-'+school['slug']+'-20261117.png'),optimize=True)
