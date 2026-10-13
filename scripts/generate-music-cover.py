from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
im = Image.new('RGB', (1200, 630), '#102a3d')
d = ImageDraw.Draw(im)
font = '/Library/Fonts/Arial Unicode.ttf'
def text(x, y, value, size, color):
    d.text((x, y), value, font=ImageFont.truetype(font, size), fill=color)

d.rectangle((42, 40, 1158, 588), outline='#d7ad55', width=3)
text(80, 82, '海外督導雙語世界  /  招生部', 29, '#d7ad55')
text(78, 160, '音樂留學規劃', 67, '#fffaf0')
text(82, 264, '學歷與語言 · 試音與作品 · 西班牙院校實例', 29, '#dce6e7')
for i, (title, subtitle, color) in enumerate([
    ('本科交換', '保留學籍與學分規劃', '#426397'),
    ('本科申請', '入學考試與課程認可', '#39736b'),
    ('畢業升碩', '大二至畢業準備', '#996148'),
]):
    x = 82 + i * 348
    d.rectangle((x, 346, x + 320, 474), fill=color)
    text(x + 20, 359, title, 31, '#fffaf0')
    text(x + 20, 414, subtitle, 22, '#fffaf0')
text(82, 518, 'overseasuk.com/zh/subject-planning/music/', 25, '#dce6e7')
im.save(root / 'assets/social/music-study-planning-20261013-v1.png')
