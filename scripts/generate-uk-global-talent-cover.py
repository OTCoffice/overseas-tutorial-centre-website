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
text(64,176,'英國 Global Talent',70)
text(64,310,'學術研究・文社科博士・材料準備',42,'#f3ede0')
for x,label,color in [(64,'學術 CV','#b98c38'),(430,'研究與成果','#ae5946'),(796,'推薦信準備','#54857c')]:
 d.rectangle((x,429,x+306,433),fill=color);text(x,459,label,34)
text(64,566,'OVERSEAS TUTORIAL CENTRE  ·  overseasuk.com',25,'#d3dde3')
im.save(root/'assets/social/uk-global-talent-20261020-v1.png')
