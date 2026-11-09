from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,630),'#eef2ed');d=ImageDraw.Draw(im)
font='/Library/Fonts/Arial Unicode.ttf'
def text(x,y,s,size):d.text((x,y),s,font=ImageFont.truetype(font,size),fill='#163347')
d.rectangle((0,0,16,630),fill='#163347')
text(72,52,'OVERSEAS TUTORIAL CENTRE  /  STUDENT SERVICES',23)
d.line((72,111,1128,111),fill='#8fa4a1',width=2)
text(72,158,'設計申請｜藝術總監',53)
text(72,250,'作品集陪跑',42)
text(72,337,'選校  →  選題  →  回饋  →  編排  →  總審',29)
text(72,408,'八類專業  /  分類流程 · 階段成果 · 收費',26)
d.line((72,508,1128,508),fill='#8fa4a1',width=2)
text(72,544,'海外督導 OTC  ·  overseasuk.com',23)
im.save(root/'assets/social/art-portfolio-coaching-20260930-v1.png')

# Social artwork uses the 2026-10-31 layout independently of the page cover.
navy, gold, red, teal, cream = '#14283d', '#d7ad55', '#793c34', '#597c78', '#f7f5ef'
im = Image.new('RGB', (1200, 600), navy)
d = ImageDraw.Draw(im)
d.rectangle((706, 120, 926, 479), fill=red)
d.rectangle((926, 120, 976, 479), fill=gold)
d.rectangle((0, 475, 1199, 479), fill=gold)

def label(x, y, value, size, color):
    d.text((x, y), value, font=ImageFont.truetype(font, size), fill=color)

label(48, 183, '海外督導 OTC · 學生服務部', 15, gold)
label(48, 219, '設計申請｜藝術總監', 48, 'white')
label(48, 290, '藝術留學 · 作品集指導', 23, gold)
label(48, 336, '選校、創作回饋、作品集總審', 17, cream)
label(48, 388, 'overseasuk.com', 14, cream)

d.rectangle((752, 191, 1151, 408), fill=cream)
d.rectangle((752, 191, 1151, 195), fill=gold)
label(774, 211, '服務內容', 11, red)
for i, (item, accent) in enumerate(zip(
    ['藝術與設計選校', '八類作品集指導', '轉專業方向與課程', '申請材料與進度跟進'],
    [gold, teal, red, '#8d99ae'],
)):
    y = 238 + i * 38
    d.line((774, y, 1129, y), fill='#d6d1c4')
    d.rectangle((774, y + 11, 776, y + 25), fill=accent)
    label(786, y + 9, item, 12, navy)

im.save(root / 'assets/social/art-portfolio-share-safe-20261109.png', optimize=True)
