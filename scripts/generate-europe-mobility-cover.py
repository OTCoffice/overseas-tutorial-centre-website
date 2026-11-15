from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
target = root / "assets/social/europe-mobility-36-us-study-style-20261115.png"
target.parent.mkdir(parents=True, exist_ok=True)
im = Image.new("RGB", (1200, 440), "#102d42")
d = ImageDraw.Draw(im)
navy, gold, ivory, red, teal = "#17374b", "#c7a25c", "#f6f1e7", "#a75542", "#527e80"
d.rectangle((0, 40, 1199, 399), fill=navy)
d.rectangle((36, 66, 43, 372), fill=gold)
d.rectangle((49, 66, 52, 372), fill=red)
d.line((55, 40, 1163, 40), fill=gold, width=2)
d.line((55, 399, 1163, 399), fill=gold, width=2)
d.rectangle((729, 87, 1139, 362), fill=ivory)
d.rectangle((729, 87, 736, 362), fill=red)
d.rectangle((746, 97, 1122, 100), fill=gold)
cn = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
cnr = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
def font(n, bold=False):
    return ImageFont.truetype(cn if bold else cnr, n, index=3)
serif = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
d.text((182, 81), "OVERSEAS TUTORIAL CENTRE", font=ImageFont.truetype(serif, 19), fill=gold)
d.text((182, 131), "歐洲36國", font=font(47, True), fill=ivory)
d.text((182, 207), "移居與居留路線", font=font(43, True), fill=ivory)
d.line((183, 270, 625, 270), fill=gold, width=2)
d.text((182, 289), "留學轉工作 · 技術人才 · 創業／自僱", font=font(22), fill=ivory)
d.text((182, 327), "數字遊民 · 官方資料持續核驗", font=font(20), fill=ivory)
d.text((762, 115), "EUROPE MOBILITY", font=ImageFont.truetype(serif, 19), fill=navy)
d.line((763, 154, 1104, 154), fill="#c9b99c")
for i, (label, color) in enumerate([
    ("36國官方政策入口", red),
    ("工作與經商居留", gold),
    ("資格及永居條件", teal),
]):
    y = 169 + i * 52
    d.rectangle((764, y, 775, y + 37), fill=color)
    d.text((791, y + 1), label, font=font(22, True), fill=navy)
d.text((762, 335), "overseasuk.com", font=ImageFont.truetype(serif, 16), fill="#60717a")
im = im.quantize(colors=16, method=Image.Quantize.MEDIANCUT)
im.save(target, optimize=True, compress_level=9)
print(target, target.stat().st_size)
