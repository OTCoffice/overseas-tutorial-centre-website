from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os
root=Path(__file__).resolve().parents[1]
regular=os.environ.get('OTC_CJK_FONT','/workspace/scratch/NotoSansTC-400.ttf')
bold=os.environ.get('OTC_CJK_BOLD','/workspace/scratch/NotoSansTC-600.ttf')
f=lambda p,n:ImageFont.truetype(p,n)
im=Image.new('RGB',(800,800),'#f7f4ed');d=ImageDraw.Draw(im)
navy='#172e43'; gold='#bf9850'; muted='#5b6870'
d.rectangle((24,24,775,775),outline=gold,width=2)
d.rectangle((46,46,754,55),fill=navy);d.rectangle((340,46,505,55),fill='#aa4d39');d.rectangle((505,46,630,55),fill=gold);d.rectangle((630,46,754,55),fill='#507f79')
d.text((59,92),'海外留學導報  /  海外督導 OTC',font=f(regular,25),fill=navy)
d.text((56,175),'美國暑期打工',font=f(bold,66),fill=navy)
d.text((56,260),'中國學生數據',font=f(bold,66),fill=navy)
d.line((58,374,742,374),fill=gold,width=2)
d.text((58,408),'2025 年',font=f(regular,34),fill=muted)
d.text((56,470),'2,323 人',font=f(bold,82),fill='#a84b39')
d.text((60,594),'SWT 新增交流訪客',font=f(regular,34),fill=navy)
d.text((60,647),'資料來源：美國國務院',font=f(regular,25),fill=muted)
d.text((60,718),'overseasuk.com',font=f(regular,24),fill=muted)
p=root/'assets/social/us-swt-china-participants-20261030-v1.png';p.parent.mkdir(parents=True,exist_ok=True);im.save(p,optimize=True)
