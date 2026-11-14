from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,600),'#173447');d=ImageDraw.Draw(im)
font='/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'
bold='/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
def text(x,y,s,n=24,color='#f9f4e9',weight=False):
    d.text((x,y),s,font=ImageFont.truetype(bold if weight else font,n,index=3),fill=color)
d.rectangle((0,120,1199,479),fill='#1c3b50');d.rectangle((44,153,50,445),fill='#c8a05c')
text(76,161,'OTC · 海外督導',22,color='#dcc395')
text(76,209,'海外寄宿家庭',49,weight=True)
text(76,290,'按國家與地區查閱住宿服務',25)
text(76,346,'英愛參考價 · 住宿需求 · 供應商詢問',19)
text(76,406,'overseasuk.com',17,color='#cbd8dd')
for i,(label,detail,color) in enumerate([('歐洲','英國 · 愛爾蘭 · 法國 · 西班牙','#b38a3e'),('澳紐','澳洲 · 紐西蘭','#a75842'),('北美','加拿大 · 美國','#526d94'),('亞洲','日本 · 韓國','#42796f')]):
    y=150+i*76;d.rectangle((704,y,1154,y+66),fill='#f7f4ed');d.rectangle((704,y,711,y+66),fill=color)
    text(730,y+5,label,21,color='#173447',weight=True);text(730,y+35,detail,17,color='#4b5e6a')
(root/'assets/social').mkdir(parents=True,exist_ok=True)
im.save(root/'assets/social/homestay-20261114.png',optimize=True)
