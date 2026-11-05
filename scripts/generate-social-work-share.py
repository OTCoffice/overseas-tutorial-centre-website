"""UK directory and school share cards. Existing OTC share-safe layout, no page body changes.
Usage: python3 scripts/generate-uk-school-share.py /path/to/NotoSansTC.ttf
"""
from pathlib import Path
import json,sys
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).resolve().parents[1]
navy,red,blue,teal,gold,cream='#162e43','#a5503d','#557989','#4e7e76','#cba34d','#f7f4ed'
fontpath=sys.argv[1];scale=2
schools=json.loads((root/'content/public-school-uk-schools.json').read_text())['schools']
names={'hruc':'HRUC','kingston':'Kingston College','wqe':'WQE College','chichester-worthing':'Worthing College','st-davids':'St David’s Catholic\nSixth Form College','cardiff-and-vale':'Cardiff and Vale\nCollege','cambridge-regional':'Cambridge Regional\nCollege','east-sussex':'East Sussex\nCollege Group','gower-swansea':'Gower College\nSwansea'}
entries=[dict(slug='uk',name='社工升學與職業規劃',location='澳洲 · 課程認可與就業準備',path='/zh/subject-planning/social-work/')]
metadata={}
for s in entries:
 im=Image.new('RGB',(2400,1200),navy);d=ImageDraw.Draw(im)
 def box(rect,color):d.rectangle(tuple(round(v*scale) for v in rect),fill=color)
 def font(size,weight=400):
  static=Path(fontpath).parent/('NotoSansTC-600.ttf' if weight>=600 else 'NotoSansTC-400.ttf')
  if static.exists():return ImageFont.truetype(str(static),size*scale)
  f=ImageFont.truetype(fontpath,size*scale)
  f.set_variation_by_axes([weight])
  return f
 def text(x,y,value,size,color,weight=400):d.text((x*scale,y*scale),value,font=font(size,weight),fill=color)
 box((660,120,912,480),red);box((912,120,960,480),gold);box((0,475,1200,480),gold)
 text(48,160,'海外督導 OTC｜職業規劃',14,gold)
 title=names.get(s['slug'],s['name']);size=46 if s['slug']=='uk' else 34
 lines=title.split('\n')
 while max(d.textlength(line,font=font(size,700)) for line in lines)>590*scale:size-=1
 for i,line in enumerate(lines):text(48,208+i*49,line,size,'white',700)
 loc=s['location'].replace('／英格蘭中部','').replace('／英格蘭北部','')
 if s['slug']=='cardiff-and-vale':loc='Cardiff／威爾斯'
 locsize=17
 while d.textlength(loc,font=font(locsize))>590*scale:locsize-=1
 text(48,322,loc,locsize,'#e4c681')
 text(48,359,'實習與英文 · 薪資與移民',15,'#e8e9e5');text(48,403,'overseasuk.com',13,'white')
 box((751,193,1152,404),cream);box((751,193,1152,197),gold)
 text(773,212,'澳洲社工' if s['slug']=='uk' else '學校資料',11,red)
 for i,(label,color) in enumerate(zip(['本科與轉專業碩士' if s['slug']=='uk' else '課程與選科','AASW 職業評估','薪資統計與就業','技術移民條件'],[gold,teal,red,blue])):
  y=239+i*38;box((773,y,1130,y+.5),'#d6d1c4');box((773,y+11,775,y+25),color);text(785,y+9,label,12,navy)
 name='social-work-share-20261105.jpg'
 im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social'/name,quality=95)
 metadata[s['path']]={'shareImageZh':'/assets/social/'+name,'socialImageVersion':'v=20261104-share-safe','socialImageWidth':1200,'socialImageHeight':600,'twitterCard':'summary_large_image'}

print('Generated',len(metadata),'share cards')
