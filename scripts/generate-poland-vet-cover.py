from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,440),'#102d42');d=ImageDraw.Draw(im)
navy,gold,ivory,red='#17374b','#c7a25c','#f6f1e7','#a75542'
d.rectangle((0,40,1199,399),fill=navy)
d.rectangle((170,70,176,370),fill=gold)
d.line((180,40,1020,40),fill=gold,width=2);d.line((180,399,1020,399),fill=gold,width=2)
def cn(n):return ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc',n,index=3)
def en(n):return ImageFont.truetype('/usr/share/fonts/truetype/liberation2/LiberationSerif-Regular.ttf',n)
d.text((195,80),'OVERSEAS TUTORIAL CENTRE',font=en(18),fill=gold)
d.text((195,133),'波蘭英語獸醫',font=cn(35),fill=ivory)
d.text((195,205),'華沙 SGGW',font=cn(35),fill=ivory)
d.text((195,300),'5.5年課程 · 專業註冊',font=cn(20),fill=ivory)
d.text((195,340),'Veterinary Medicine',font=en(23),fill=gold)
d.rectangle((718,90,1017,363),fill=ivory);d.rectangle((718,90,725,363),fill=red)
d.text((746,110),'STUDY GUIDE',font=en(22),fill=navy)
for i,label in enumerate(['課程與學費','申請與住宿','英歐註冊要求']):
 y=166+i*55;d.rectangle((746,y,752,y+31),fill=red if i!=1 else gold);d.text((766,y),label,font=cn(21),fill=navy)
im.save(root/'assets/social/poland-veterinary-sggw-20261116.png',optimize=True)
