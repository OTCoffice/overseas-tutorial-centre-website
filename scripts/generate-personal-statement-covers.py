from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json
root=Path(__file__).resolve().parents[1]
for loc in ['zh','en']:
 im=Image.new('RGB',(1200,630),'#f3f5f3');d=ImageDraw.Draw(im)
 def txt(x,y,text,size,zh=False):
  font='/Library/Fonts/Arial Unicode.ttf' if zh else '/System/Library/Fonts/Avenir Next.ttc'
  d.text((x,y),text,font=ImageFont.truetype(font,size),fill='#163347')
 d.rectangle((0,0,18,630),fill='#173649');d.line((75,130,1125,130),fill='#98a9ab',width=2)
 txt(75,61,'OVERSEAS TUTORIAL CENTRE  /  STUDENT SERVICES',24)
 txt(75,177,'Personal Statement',66)
 txt(75,280,'個人陳述與申請文書協助' if loc=='zh' else 'Application Writing Support',44,loc=='zh')
 txt(75,382,'構思  ·  初稿回饋  ·  英文修改' if loc=='zh' else 'Planning  /  Draft feedback  /  English editing',30,loc=='zh')
 d.line((75,490,1125,490),fill='#98a9ab',width=2)
 txt(75,534,'OTC  /  overseasuk.com',25);txt(650,535,'WHATSAPP  +44 7947 991572',23)
 image=f'/assets/social/personal-statement-support-{loc}-20260930-v2.png'
 im.save(root/image.lstrip('/'))
 p=root/f'content/personal-statement-{loc}.json';a=json.loads(p.read_text());a['shareImageZh']=image;a['socialImageVersion']='v=20260930-2';p.write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
