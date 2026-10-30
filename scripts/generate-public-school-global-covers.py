"""Generate compact country-specific share cards with a supplied Traditional Chinese font."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import json,sys
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content/public-school-global.json').read_text())
for c in data+[dict(code='uk',name='英國公校',region='歐洲'),dict(code='alliance',name='公校聯盟',region='八國公立教育')]:
 im=Image.new('RGB',(1080,1080),'#f7f4ed');d=ImageDraw.Draw(im);colors=['#162e43','#a5503d','#557989','#4e7e76']
 d.rectangle((32,32,1047,1047),outline='#cba34d',width=3)
 for i,color in enumerate(colors):d.rectangle((60+i*240,62,300+i*240,73),fill=color)
 def txt(x,y,t,size,color='#162e43'):d.text((x,y),t,font=ImageFont.truetype(sys.argv[1],size),fill=color)
 txt(80,120,'海外督導 OTC',40);txt(80,245,c['name'],100);txt(80,405,c['region']+'・國際學生',36)
 labels=['地區與學校','入學與簽證','收費諮詢','申請服務']
 for i,t in enumerate(labels):
  x=80+i%2*476;y=550+i//2*150;d.rectangle((x,y,x+445,y+121),fill=colors[i]);txt(x+32,y+26,t,46,'white')
 txt(80,920,'overseasuk.com',36)
 im.save(root/'assets/social'/f'public-school-{c["code"]}-20261030-global.png')
