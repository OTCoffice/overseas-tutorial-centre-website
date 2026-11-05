"""Render the established OTC share-card template for country guides and directories."""
from pathlib import Path
import json,sys
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).resolve().parents[1]
fontdir=Path(sys.argv[1]).parent
navy,red,blue,teal,gold,cream='#162e43','#a5503d','#557989','#4e7e76','#cba34d','#f7f4ed'
entries=[('global','社工升學與職業規劃','8個國家與地區','按目的地查閱 · 升學與職涯',['國家與地區入口','各國院校與課程','專業資格與語言','工作與居留規劃'])]
for d in json.loads((root/'content/social-work-destinations.json').read_text()):
 if d['slug']=='australia':continue
 entries += [(d['slug'],d['name']+'社工規劃','課程認可 · 專業資格 · 就業','升學與職涯 · 工作與居留',['升學與專業資格','語言與實習','薪資與求職','畢業後工作與居留']), (d['slug']+'-courses',d['name']+'社工院校與課程',str(len(d['courses']))+'項課程 · 官方申請資料','課程用途 · 入行與進修',['院校與課程名稱','入行與進修分類','國際生與授課模式','課程官方連結'])]
entries=[(slug,title,('29項資格 · 18個院校及教學單位' if slug=='hong-kong-courses' else sub),summary,(['7項社工碩士','13項學士與銜接','9項高級文憑','認可與招生官方連結'] if slug=='hong-kong-courses' else labels)) for slug,title,sub,summary,labels in entries]
if len(sys.argv)>2: entries=[e for e in entries if e[0]==sys.argv[2]]
for slug,title,sub,summary,labels in entries:
 im=Image.new('RGB',(2400,1200),navy);draw=ImageDraw.Draw(im)
 def box(rect,color):draw.rectangle(tuple(round(x*2) for x in rect),fill=color)
 def font(size,bold=False):return ImageFont.truetype(str(fontdir/('NotoSansTC-600.ttf' if bold else 'NotoSansTC-400.ttf')),size*2)
 def text(x,y,t,size,color,bold=False):draw.text((x*2,y*2),t,font=font(size,bold),fill=color)
 box((660,120,912,480),red);box((912,120,960,480),gold);box((0,475,1200,480),gold)
 text(48,160,'海外督導 OTC｜社工規劃',14,gold)
 size=40
 while draw.textlength(title,font=font(size,True))>590*2:size-=1
 text(48,219,title,size,'white',True);text(48,322,sub,17,'#e4c681');text(48,359,summary,15,'#e8e9e5');text(48,403,'overseasuk.com',13,'white')
 box((751,193,1152,404),cream);box((751,193,1152,197),gold);text(773,212,'升學與職涯資料',11,red)
 for i,label in enumerate(labels):
  y=239+i*38;box((773,y,1130,y+.5),'#d6d1c4');box((773,y+11,775,y+25),[gold,teal,red,blue][i]);text(785,y+9,label,12,navy)
 im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social'/('social-work-'+slug+'-share-20261105'+('-v2' if slug=='hong-kong-courses' else '')+'.jpg'),quality=95)
print('Generated',len(entries),'share cards')
