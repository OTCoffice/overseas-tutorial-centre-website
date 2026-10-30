"""Compact, square link-preview artwork. Use source Han Sans TC via OTC_CJK_FONT."""
import os
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[1]
FONT=os.environ.get('OTC_CJK_FONT','/tmp/bird-deps/SourceHanSansTC-Medium.otf')
navy='#142c43';paper='#f7f4ed';gold='#c5a157'
def font(n):return ImageFont.truetype(FONT,n)
def text(d,xy,t,n,c):d.text(xy,t,font=font(n),fill=c)
for slug,title,sub,items in [
 ('travel-planning',['旅遊規劃'],'按興趣安排你的旅程',['親子與遊學','藝文與美食','自然與海島','訪校與探親']),
 ('travel-services',['旅行服務'],'行程・住宿・活動預訂',['每日行程','交通住宿','主題體驗','預訂協助']),
 ('seoul-family-kpop',['首爾親子','K-Pop 體驗'],'舞蹈・妝髮・拍攝',['兒童舞蹈','偶像妝髮','造型拍攝','家庭同行'])]:
 im=Image.new('RGB',(1080,1080),paper);d=ImageDraw.Draw(im)
 d.rectangle((32,32,1047,1047),outline=gold,width=3)
 for i,c in enumerate([navy,'#a5503d','#55798b','#4e8078']):d.rectangle((60+i*240,62,60+(i+1)*240,73),fill=c)
 text(d,(78,112),'海外督導  OTC',37,navy)
 # Central layout keeps the subject legible at thumbnail size.
 y=230 if len(title)==1 else 175
 for line in title:text(d,(76,y),line,92,navy);y+=116
 text(d,(80,y+12),sub,35,'#6b5e45')
 top=540;w=444;h=122
 for i,label in enumerate(items):
  x=80+(i%2)*476;yy=top+(i//2)*150;c=[navy,'#a5503d','#55798b','#4e8078'][i]
  d.rectangle((x,yy,x+w,yy+h),fill=c)
  tw=d.textbbox((0,0),label,font=font(44))[2];text(d,(x+(w-tw)/2,yy+25),label,44,'#ffffff')
 d.line((80,885,1000,885),fill=gold,width=2)
 text(d,(80,918),'行程規劃與預訂協助',30,navy);text(d,(80,968),'overseasuk.com',29,'#63707a')
 target=ROOT/'assets/social'/f'{slug}-compact-link-20261030-v2.png';im.save(target,optimize=True)
 im.resize((360,360)).save(ROOT/'work'/f'{slug}-phone-preview.png')
 print(target.relative_to(ROOT))
