"""The in-page masthead and social card share one versioned image."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import os
root=Path(__file__).resolve().parents[1]
font=Path(os.environ.get('OTC_CJK_FONT','/workspace/scratch/NotoSansTC-600.ttf'))
im=Image.new('RGB',(1200,630),'#163347');d=ImageDraw.Draw(im)
def text(x,y,s,size,color='#ffffff'):
 d.text((x,y),s,font=ImageFont.truetype(str(font),size),fill=color)
d.rectangle((0,0,12,630),fill='#b98c38')
text(64,48,'OTC  ·  海外督導',32,'#e6c575')
d.line((64,120,1136,120),fill='#b98c38',width=2)
text(64,176,'新加坡工作准證',88)
text(64,310,'EP・S Pass・求職與申請支援',42,'#f3ede0')
for x,label,color in [(64,'雇主聘用','#b98c38'),(430,'薪資與資格','#ae5946'),(796,'簽發與入職','#54857c')]:
 d.rectangle((x,429,x+306,433),fill=color);text(x,459,label,34)
text(64,566,'OVERSEAS TUTORIAL CENTRE  ·  overseasuk.com',25,'#d3dde3')
im.save(root/'assets/social/singapore-work-pass-20261020-v1.png')
