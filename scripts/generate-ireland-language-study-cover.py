from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,440),'#11273b');d=ImageDraw.Draw(im)
navy,gold,red,cream='#11273b','#bd9637','#802d31','#fcf8ed'
d.rectangle((665,40,908,399),fill=red);d.rectangle((908,40,955,399),fill=gold);d.rectangle((0,396,1199,399),fill=gold)
cn='/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc'
cb='/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
en='/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'
def t(x,y,s,n,color=cream,bold=False): d.text((x,y),s,font=ImageFont.truetype(cb if bold else cn,n,index=3),fill=color)
t(180,78,'海外督導 OTC · 寒暑校聯盟',20,gold)
t(180,130,'愛爾蘭',46,bold=True);t(180,190,'語言遊學',46,bold=True)
d.text((182,273),'Ireland · English Study',font=ImageFont.truetype(en,23),fill=gold)
d.text((182,340),'overseasuk.com',font=ImageFont.truetype(en,20),fill=cream)
d.rectangle((697,95,1019,346),fill=cream);d.rectangle((697,95,1019,100),fill=gold)
t(720,114,'課程與申請',26,navy,True)
for i,(s,c) in enumerate([('短期英語與寒暑校',gold),('25週成人英語',red),('免費代辦與費用', '#557e77')]):
 y=174+i*51;d.line((720,y-5,994,y-5),fill='#d3c8b2');d.rectangle((721,y+9,726,y+30),fill=c);t(739,y,s,22,navy)
im.save(root/'assets/social/ireland-language-study-20261117.png',optimize=True)
