"""Render the two US study share cards. Pass a Traditional Chinese font path."""
from pathlib import Path
import sys

from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1] / "assets/social"
navy, red, gold, cream = "#10243a", "#822c30", "#bd9639", "#fbf7ed"

for slug, title, subtitle, panel, details in (
    ("us-study", "美國留學", "United States", "留學規劃",
     ("本科與研究生申請", "社區大學與轉學", "美國院校目錄")),
    ("us-university-directory", "美國院校目錄", "U.S. University Directory", "120 所院校",
     ("中英文校名與城市搜尋", "獨立院校專頁", "官方本科招生入口")),
):
    canvas = Image.new("RGB", (1200, 600), navy)
    draw = ImageDraw.Draw(canvas)

    def text(x, y, value, size, color):
        font = ImageFont.truetype(sys.argv[1], size)
        draw.text((x, y), value, font=font, fill=color, anchor="lt")

    draw.rectangle((665, 120, 907, 476), fill=red)
    draw.rectangle((908, 120, 954, 476), fill=gold)
    draw.rectangle((0, 476, 1199, 481), fill=gold)
    text(62, 173, "海外督導 OTC", 25, "#f4d78c")
    text(60, 231, title, 67, "#ffffff")
    text(63, 322, subtitle, 29, "#f4d78c")
    text(64, 401, "overseasuk.com", 23, "#ffffff")
    draw.rectangle((748, 159, 1140, 444), fill=cream)
    draw.rectangle((748, 159, 1140, 165), fill=gold)
    text(778, 188, panel, 36, navy)
    for i, detail in enumerate(details):
        y = 254 + i * 54
        draw.line((779, y - 10, 1109, y - 10), fill="#d9ceba", width=1)
        draw.rectangle((779, y + 5, 784, y + 26), fill=(gold, "#557e77", red)[i])
        text(800, y, detail, 25, navy)

    canvas.save(root / f"{slug}-share-20261114-v1.png", optimize=True)
