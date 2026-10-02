"""Typeset the exact service title and scope using OTC's established text-cover layout."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os
root=Path(__file__).resolve().parents[1]
font=Path(os.environ.get('OTC_CJK_FONT','/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'))
if not font.exists():
    raise SystemExit('Set OTC_CJK_FONT to an installed Traditional Chinese font.')
im=Image.new('RGB',(1200,630),'#faf8f2')
d=ImageDraw.Draw(im)
def text(x,y,s,size,color='#163347'):
    d.text((x,y),s,font=ImageFont.truetype(str(font),size),fill=color)
d.rectangle((0,0,15,630),fill='#163347')
text(70,44,'OVERSEAS TUTORIAL CENTRE',25)
d.line((70,112,1130,112),fill='#b98c38',width=3)
text(70,151,'新加坡帶薪實習',65)
text(70,259,'TEP 資格・實習申請・行前準備',40)
for x,label,color in [(70,'資格核對','#b98c38'),(430,'申請準備','#ae5946'),(790,'行前支援','#54857c')]:
    d.rectangle((x,383,x+280,388),fill=color)
    text(x,408,label,29)
d.line((70,521,1130,521),fill='#b6bdbb',width=1)
text(70,550,'海外督導 OTC  ·  overseasuk.com',25)
im.save(root/'assets/social/singapore-internship-20261002-v1.png')
