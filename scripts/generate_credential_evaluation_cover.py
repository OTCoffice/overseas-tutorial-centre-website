from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/social/credential-evaluation-document-coordination-20260927.png"
FONT = "/Users/rongrongxiao/Library/Fonts/NotoSansCJK.ttc"

canvas = Image.new("RGB", (1200, 630), "#f5f0e7")
draw = ImageDraw.Draw(canvas)
navy = "#173f42"
gold = "#b78b42"
ink = "#162328"
muted = "#5d6667"

draw.rectangle((0, 0, 1200, 18), fill=navy)
draw.rectangle((0, 18, 36, 630), fill=navy)
draw.rectangle((1000, 0, 1200, 630), fill="#e5dbca")
draw.line((84, 132, 950, 132), fill=gold, width=3)
draw.line((84, 522, 950, 522), fill="#a9a093", width=1)

def font(size, index=0):
    return ImageFont.truetype(FONT, size=size, index=index)

draw.text((84, 56), "海外督導 OTC  |  CREDENTIAL EVALUATION DESK", font=font(23), fill=navy)
draw.text((84, 166), "學歷認證與補件協調", font=font(54), fill=ink)
draw.text((84, 243), "WES 文件驗證 · 院校重送 · 截止日跟進", font=font(30), fill=navy)
draw.text((84, 321), "拒件不一定等於學歷被否定。", font=font(30), fill=ink)
draw.text((84, 373), "先核對傳送渠道、寄件權限、文件狀態與案件匹配，", font=font(24), fill=muted)
draw.text((84, 412), "再同步協調評估機構、原校與收件院校。", font=font(24), fill=muted)
draw.text((84, 548), "流程、報價及委託協議  |  overseasuk.com", font=font(22), fill=navy)

draw.text((1036, 70), "OTC", font=font(40), fill=navy)
draw.text((1036, 130), "DOCUMENT", font=font(18), fill=muted)
draw.text((1036, 158), "COORDINATION", font=font(18), fill=muted)
draw.rectangle((1036, 230, 1152, 234), fill=gold)
for y, label in [(272, "01 DIAGNOSE"), (318, "02 RESEND"), (364, "03 FOLLOW UP"), (410, "04 RECORD")]:
    draw.text((1036, y), label, font=font(16), fill=ink)

OUT.parent.mkdir(parents=True, exist_ok=True)
canvas.save(OUT, "PNG", optimize=True)
print(OUT)
