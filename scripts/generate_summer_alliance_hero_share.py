from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path("/Users/rongrongxiao/Documents/New project/otc-study-hub")
OUT_DIR = ROOT / "assets" / "social"


def pick_font(candidates, size):
    for candidate in candidates:
      path = Path(candidate)
      if path.exists():
        return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


SERIF_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Songti.ttc",
    "/System/Library/Fonts/Supplemental/STSong.ttc",
    "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
]

SANS_CANDIDATES = [
    "/System/Library/Fonts/PingFang.ttc",
    "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]


def wrap_text(draw, text, font, max_width):
    words = list(text)
    lines = []
    line = ""
    for word in words:
        test = line + word
        if draw.textbbox((0, 0), test, font=font)[2] <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def draw_multiline(draw, text, font, fill, x, y, max_width, line_gap=8):
    lines = wrap_text(draw, text, font, max_width)
    cursor_y = y
    for line in lines:
        draw.text((x, cursor_y), line, font=font, fill=fill)
        bbox = draw.textbbox((x, cursor_y), line, font=font)
        cursor_y += (bbox[3] - bbox[1]) + line_gap
    return cursor_y


def render_card(draw, rect, index, title, blurb, fonts):
    x1, y1, x2, y2 = rect
    draw.rounded_rectangle(rect, radius=8, fill="#fffdf8", outline="#d8c8ab", width=1)
    small = fonts["small_gold"]
    strong = fonts["card_title"]
    body = fonts["card_body"]
    draw.text((x1 + 16, y1 + 12), f"{index:02d}", font=small, fill="#9b7630")
    draw.text((x1 + 16, y1 + 30), title, font=strong, fill="#13233a")
    draw_multiline(draw, blurb, body, "#596473", x1 + 16, y1 + 56, x2 - x1 - 32, line_gap=4)


def build_share(filename, section_tag, hero_title, hero_subtitle, standfirst, cards):
    width, height = 1200, 630
    img = Image.new("RGB", (width, height), "#fbf7ef")
    draw = ImageDraw.Draw(img)

    fonts = {
        "mast_en": pick_font(SERIF_CANDIDATES, 12),
        "mast_zh": pick_font(SANS_CANDIDATES, 30),
        "mast_tag": pick_font(SANS_CANDIDATES, 11),
        "meta": pick_font(SANS_CANDIDATES, 11),
        "meta_strong": pick_font(SANS_CANDIDATES, 13),
        "section": pick_font(SERIF_CANDIDATES, 12),
        "hero_title": pick_font(SANS_CANDIDATES, 44),
        "hero_subtitle": pick_font(SERIF_CANDIDATES, 21),
        "standfirst": pick_font(SANS_CANDIDATES, 16),
        "small_gold": pick_font(SANS_CANDIDATES, 11),
        "card_title": pick_font(SANS_CANDIDATES, 16),
        "card_body": pick_font(SANS_CANDIDATES, 13),
    }

    # masthead
    draw.rectangle((0, 0, width, 78), fill="#1a1410")
    draw.rectangle((0, 78, width, 102), fill="#b5272d")
    draw.text((44, 14), "OTC STUDY HUB", font=fonts["mast_en"], fill="#e8b84b")
    draw.text((44, 28), "海外督導 OTC", font=fonts["mast_zh"], fill="#ffffff")
    draw.text((44, 60), "Summer Alliance Desk", font=fonts["mast_tag"], fill="#9a8870")

    meta_x = width - 44
    meta_lines = [
        (hero_title, fonts["meta_strong"], "#e8b84b"),
        (hero_subtitle, fonts["meta"], "#9a8870"),
        ("OTC Study Hub", fonts["meta"], "#9a8870"),
        ("overseasuk.com/summer-school-alliance", fonts["meta"], "#9a8870"),
    ]
    meta_y = 16
    for text, font, color in meta_lines:
        bbox = draw.textbbox((0, 0), text, font=font)
        draw.text((meta_x - (bbox[2] - bbox[0]), meta_y), text, font=font, fill=color)
        meta_y += 16

    draw.text((44, 84), section_tag, font=fonts["section"], fill="#ffffff")
    draw.line((430, 90, width - 92, 90), fill=(255, 255, 255, 80), width=1)
    draw.text((width - 66, 84), "2026", font=fonts["mast_tag"], fill=(255, 255, 255, 180))

    # hero body
    draw.text((44, 138), hero_title, font=fonts["hero_title"], fill="#111111")
    draw.text((44, 192), hero_subtitle, font=fonts["hero_subtitle"], fill="#8d734b")
    draw_multiline(draw, standfirst, fonts["standfirst"], "#3d2f22", 44, 234, 1110, line_gap=8)
    draw.line((44, 308, 1156, 308), fill="#c8b89a", width=1)

    # cards
    card_w = 352
    card_h = 104
    gap_x = 20
    gap_y = 16
    start_x = 44
    start_y = 334
    for i, card in enumerate(cards):
        row = i // 3
        col = i % 3
        x1 = start_x + col * (card_w + gap_x)
        y1 = start_y + row * (card_h + gap_y)
        render_card(draw, (x1, y1, x1 + card_w, y1 + card_h), i + 1, card["title"], card["blurb"], fonts)

    img.save(OUT_DIR / filename)


build_share(
    "us-summer-alliance-hero-share-20260528-v4.png",
    "United States · Summer School Hub · Pre-College",
    "海外督導｜暑校聯盟｜美國",
    "United States Summer Alliance 2026",
    "美國暑校項目多、節奏快、費用高，先把學術強度、住宿安排、城市節奏、英文門檻與文件要求看清楚，後面的 shortlist 和報名才會穩。",
    [
        {"title": "收費說明", "blurb": "美國通常是幾條線裡成本最高的一組。"},
        {"title": "標準流程", "blurb": "先分 pre-college、immersion 或學科探索，再做 shortlist。"},
        {"title": "適合家庭", "blurb": "更適合美本目標較清楚、願意提早規劃的家庭。"},
        {"title": "路線分類", "blurb": "名校學術型、校園 immersion 型、學科探索型、長線前置型。"},
        {"title": "減壓流程", "blurb": "先把英文、住宿、城市與文件風險講清楚。"},
        {"title": "常見問題", "blurb": "先看名校、credit-bearing、第一次是否適合這幾件事。"},
    ],
)

build_share(
    "malaysia-summer-alliance-hero-share-20260528-v3.png",
    "Malaysia · School-Break · English · Pre-University",
    "海外督導｜暑校聯盟｜馬來西亞",
    "Malaysia Summer Alliance 2026",
    "馬來西亞這條線更適合先做英語、先看課堂、先試 school-break route 的家庭。先把年齡段、日校或住宿、城市節奏和預算看清楚，後面的項目選擇會省力很多。",
    [
        {"title": "收費說明", "blurb": "成本比英美澳加更可控。"},
        {"title": "標準流程", "blurb": "先分年齡，再分 low-age、teen、holiday 或 pre-university。"},
        {"title": "適合家庭", "blurb": "更適合第一次做國際暑校、重視低風險試水的家庭。"},
        {"title": "路線分類", "blurb": "Low-age English、Teen Holiday、Camp Route、Pre-University。"},
        {"title": "減壓流程", "blurb": "先把年齡、英文、住宿方式和家長預期講清楚。"},
        {"title": "常見問題", "blurb": "低齡能不能做、值不值得先從這條線開始，都能先看清。"},
    ],
)
