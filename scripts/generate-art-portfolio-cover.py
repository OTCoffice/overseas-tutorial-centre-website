from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,630),'#eef2ed');d=ImageDraw.Draw(im)
font='/Library/Fonts/Arial Unicode.ttf'
def text(x,y,s,size):d.text((x,y),s,font=ImageFont.truetype(font,size),fill='#163347')
d.rectangle((0,0,16,630),fill='#163347')
text(72,52,'OVERSEAS TUTORIAL CENTRE  /  STUDENT SERVICES',23)
d.line((72,111,1128,111),fill='#8fa4a1',width=2)
text(72,158,'設計申請｜藝術總監',53)
text(72,250,'作品集陪跑',42)
text(72,337,'選校  →  選題  →  回饋  →  編排  →  總審',29)
text(72,408,'八類專業  /  分類流程 · 階段成果 · 收費',26)
d.line((72,508,1128,508),fill='#8fa4a1',width=2)
text(72,544,'海外督導 OTC  ·  overseasuk.com',23)
im.save(root/'assets/social/art-portfolio-coaching-20260930-v1.png')
