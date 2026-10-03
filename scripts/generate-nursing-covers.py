from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).resolve().parents[1]
font='/Library/Fonts/Arial Unicode.ttf'
for slug,title,sub in [('nursing-hub','海外護士發展','國家比較  /  申請背景  /  服務與費用'),('nursing-australia','澳洲護士','護理課程  /  專業註冊  /  求職與移民')]:
 im=Image.new('RGB',(1200,630),'#142b40');d=ImageDraw.Draw(im)
 d.rectangle((30,30,1170,600),outline='#d7ad55',width=2)
 d.rectangle((73,162,79,350),fill='#d7ad55')
 def text(x,y,t,size,color='#ffffff'):
  f=ImageFont.truetype(font,size);assert d.textbbox((x,y),t,font=f)[2]<1135;d.text((x,y),t,font=f,fill=color)
 text(76,75,'OVERSEAS TUTORIAL CENTRE',25,'#d7ad55')
 text(105,165,title,64)
 text(107,273,'留學・註冊・就業・移民',35)
 colors=['#b98a3c','#538578','#b45a43','#728aa8']
 for i,c in enumerate(colors):d.rectangle((75+i*262,400,75+i*262+248,409),fill=c)
 text(76,448,sub,27,'#e9e2d4')
 text(76,548,'海外督導 OTC',23,'#d7ad55');text(867,548,'overseasuk.com',23,'#d7ad55')
 im.save(root/'assets/social'/f'{slug}-20261003-v1.png')
