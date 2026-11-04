"""Visa share artwork matching the work-travel alliance native four-column hero.
Usage: python3 scripts/generate-visa-support-share.py /path/to/NotoSansTC.ttf
"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
s=2
im=Image.new('RGB',(2400,1200),'#091827');d=ImageDraw.Draw(im)
def box(r,c):d.rectangle(tuple(round(v*s) for v in r),fill=c)
def text(x,y,t,n,c):d.text((x*s,y*s),t,font=ImageFont.truetype(sys.argv[1],n*s),fill=c)
# Match alliance: left navy gradient, red/gold bands and four translucent panels.
for x in range(504):
    f=x/503;c=tuple(round(a+(b-a)*f) for a,b in zip((9,24,39),(12,53,78)))
    box((x,120,x+1,480),c)
box((504,120,696,480),'#7d211d');box((696,120,732,480),'#c49a2a')
text(24,155,'OTC · 海外督導',16,'white')
text(24,198,'簽證陪跑',32,'white')
text(24,253,'各國簽證諮詢與申請協助',18,'#e4c681')
text(24,296,'簽證診斷、材料審閱與申請陪跑',14,'#d4dce2')
text(24,322,'旅遊 · 探親 · 留學 · 工作 · 居留',14,'#d4dce2')
box((24,385,146,428),'#b98c26');text(42,398,'免費了解服務',14,'#102b3b')
text(24,447,'overseasuk.com',12,'#d4dce2')
labels=[('諮詢範圍','各國簽證與申請需求','#d7ad55'),('服務內容','診斷、材料與申請','#4e7e76'),('辦理流程','準備、提交與跟進','#b5533f'),('服務費用','諮詢與第三方費用','#8195b3')]
for i,(label,desc,color) in enumerate(labels):
    x=350+i*208
    overlay=Image.new('RGBA',im.size,(0,0,0,0));od=ImageDraw.Draw(overlay)
    od.rectangle((x*s,148*s,(x+200)*s,452*s),fill=(235,232,217,28),outline=(210,215,218,110),width=1*s)
    im=Image.alpha_composite(im.convert('RGBA'),overlay).convert('RGB');d=ImageDraw.Draw(im)
    box((x,148,x+4,452),color)
    d.ellipse(((x+14)*s,278*s,(x+42)*s,306*s),fill='#56616a',outline='#8e969c',width=s)
    text(x+19,285,f'0{i+1}',10,'white')
    text(x+49,276,label,14,'white');text(x+49,307,desc,12,'#d4dce2')
box((0,476,1200,480),'#af302c')
im.resize((1200,600),Image.Resampling.LANCZOS).save(root/'assets/social/visa-support-alliance-style-20261104.png',optimize=True)
