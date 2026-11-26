"""Portable Pillow backend for the common US-style share-card specification."""
import os
from PIL import Image, ImageDraw, ImageFont

def render(o, target):
    cn=os.environ.get('OTC_CJK_FONT','/Users/rongrongxiao/Library/Fonts/NotoSerifCJK.ttc')
    en=os.environ.get('OTC_EN_FONT','/System/Library/Fonts/Supplemental/Georgia Bold.ttf')
    im=Image.new('RGB',(1200,600),'#10243a'); d=ImageDraw.Draw(im)
    def font(size,bold=False,latin=False):
        return ImageFont.truetype(en if latin else cn,size,index=0 if latin else 28 if bold else 13)
    def put(x,y,t,size,color='#fbf7ed',bold=False,latin=False,maxwidth=540):
        f=font(size,bold,latin)
        while d.textlength(t,font=f)>maxwidth and size>15:
            size-=1;f=font(size,bold,latin)
        d.text((x,y),t,font=f,fill=color,anchor='lt')
    d.rectangle((665,120,907,475),fill='#822c30');d.rectangle((908,120,954,475),fill='#bd9639')
    d.rectangle((0,476,1199,481),fill='#bd9639')
    put(63,175,'海外督導 OTC',26,'#f4d78c')
    lines=o['head'].split('\n');sz=68 if len(lines)==1 else 54
    for i,line in enumerate(lines):put(60,232+i*63,line,sz,bold=True)
    put(63,322 if len(lines)==1 else 370,o['en'],30,'#f4d78c',latin=True)
    put(63,401 if len(lines)==1 else 435,'overseasuk.com',23,latin=True)
    d.rectangle((650,159,984,444),fill='#fbf7ed');d.rectangle((650,159,984,165),fill='#bd9639')
    put(680,190,'服務重點',34,'#10243a',bold=True,maxwidth=275)
    for i,t in enumerate(o['items']):
        y=255+i*54;d.line((680,y-10,953,y-10),fill='#d9ceba')
        d.rectangle((680,y+4,685,y+25),fill=['#bd9639','#557e77','#822c30'][i])
        put(701,y,t,23,'#10243a',maxwidth=252)
    im.save(target,optimize=True)
