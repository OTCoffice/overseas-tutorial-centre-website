from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).resolve().parents[1]
for slug,title,sub in [('canada-schools','加拿大中小學留學','公校教育局  ·  私立學校  ·  監護住宿'),('canada-private-schools','私校聯盟｜加拿大','安大略省  ·  卑詩省  ·  魁北克省'),('canada-school-application','加拿大中小學申請','免費代辦  ·  入學跟進  ·  服務與費用')]:
 im=Image.new('RGB',(1200,630),'#102a3d');d=ImageDraw.Draw(im)
 f='/Library/Fonts/Arial Unicode.ttf'
 def txt(x,y,s,z,color):d.text((x,y),s,font=ImageFont.truetype(f,z),fill=color)
 d.rectangle((44,42,1156,586),outline='#d7ad55',width=3)
 for i,c in enumerate(['#c6a252','#39736b','#a36750','#758aa6']):d.rectangle((880+i*60,90,920+i*60,460),fill=c)
 txt(85,100,'OVERSEAS TUTORIAL CENTRE',25,'#d7ad55')
 txt(85,198,title,56,'#fffaf0');txt(85,305,sub,27,'#dbe5e7')
 d.line((85,405,825,405),fill='#d7ad55',width=2)
 txt(85,453,'海外督導 OTC｜海圖規劃',28,'#fffaf0');txt(85,515,'overseasuk.com',23,'#dbe5e7')
 im.save(root/'assets/social'/f'{slug}-20261004-v1.png')
