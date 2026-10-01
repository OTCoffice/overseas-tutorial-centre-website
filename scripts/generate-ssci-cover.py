from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,630),'#eef2ed');d=ImageDraw.Draw(im)
font='/Library/Fonts/Arial Unicode.ttf'
def text(x,y,s,size):d.text((x,y),s,font=ImageFont.truetype(font,size),fill='#163347')
d.rectangle((0,0,16,630),fill='#163347')
for i,c in enumerate(['#bb922d','#a94535','#42877d','#486b96']):d.rectangle((900+i*75,0,974+i*75,30),fill=c)
text(72,52,'OVERSEAS TUTORIAL CENTRE  /  ACADEMIC SUPERVISION',23)
d.line((72,111,1128,111),fill='#8fa4a1',width=2)
text(72,158,'SSCI 學術督導',53)
text(72,250,'選題・選刊・論文修改・投稿返修',42)
text(72,337,'研究問題  →  論證  →  稿件  →  投稿',29)
text(72,408,'研究與寫作支援',26)
d.line((72,508,1128,508),fill='#8fa4a1',width=2)
text(72,544,'海外督導 OTC  ·  overseasuk.com',23)
im.save(root/'assets/social/ssci-academic-supervision-20261001-v1.png')
