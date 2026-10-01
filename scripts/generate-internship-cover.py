from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,630),'#eef2ed');d=ImageDraw.Draw(im)
font='/Library/Fonts/Arial Unicode.ttf'
def text(x,y,s,size):d.text((x,y),s,font=ImageFont.truetype(font,size),fill='#163347')
d.rectangle((0,0,16,630),fill='#163347')
text(72,52,'OVERSEAS TUTORIAL CENTRE  /  CAREERS & INTERNSHIPS',23)
d.line((72,111,1128,111),fill='#8fa4a1',width=2)
text(72,158,'實習陪跑',53)
text(72,250,'申請準備・面試・實習復盤',42)
text(72,337,'方向  →  申請  →  面試  →  在崗  →  成果',29)
text(72,408,'海外就業與落地服務部',26)
d.line((72,508,1128,508),fill='#8fa4a1',width=2)
text(72,544,'海外督導 OTC  ·  overseasuk.com',23)
im.save(root/'assets/social/internship-coaching-20261001-v1.png')
