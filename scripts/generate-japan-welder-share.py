from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
cn=Path('/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc')
en='/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'
navy, gold, cream, red = '#10243a','#bd9639','#fbf7ed','#822c30'
im=Image.new('RGB',(1200,440),navy);d=ImageDraw.Draw(im)
d.rectangle((0,40,1199,399),fill='#10334b')
d.line((0,41,1199,41),fill=gold,width=3);d.line((0,398,1199,398),fill=gold,width=3)
d.rectangle((142,43,154,396),fill=red)
def text(x,y,t,size,color=cream):
 f=ImageFont.truetype(en if t.isascii() else str(cn),size,index=0 if t.isascii() else 3)
 assert x+d.textlength(t,font=f)<=1020,(t,x+d.textlength(t,font=f))
 d.text((x,y),t,font=f,fill=color,anchor='lt')
text(180,82,'海外督導｜雙語世界',23,'#f4d78c')
text(180,142,'日本焊工',39)
text(180,204,'轉澳洲',36)
text(182,279,'Japan to Australia',20,'#f4d78c')
text(182,323,'移居指南 · overseasuk.com',20)
d.rectangle((688,83,1019,355),fill=cream);d.rectangle((688,83,693,355),fill=gold)
for i,(title,sub) in enumerate([('日本就業','日語、技能與合同'),('職業評估','培訓及有薪工作證明'),('190 / 491','分數門檻與邀請條件')]):
 y=110+i*77
 if i:d.line((712,y-12,996,y-12),fill='#d9ceba')
 text(712,y,title,23,navy);text(712,y+35,sub,17,'#526778')
im.save(root/'assets/social/japan-welder-australia-20261118-v1.png',optimize=True)
