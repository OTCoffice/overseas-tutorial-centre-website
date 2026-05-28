from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "reports" / "pdf"
PDF_OUT = OUT_DIR / "OTC_United_States_Summer_Alliance_One_Pager_2026-05-28.pdf"
HTML_OUT = OUT_DIR / "OTC_United_States_Summer_Alliance_One_Pager_2026-05-28.html"

NAVY = colors.HexColor("#0f2740")
GOLD = colors.HexColor("#b99552")
IVORY = colors.HexColor("#fbf8f1")
TEXT = colors.HexColor("#243142")
MUTED = colors.HexColor("#5f6b78")
LINE = colors.HexColor("#d8d4cb")


def build_pdf():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(PDF_OUT),
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
    )

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="Kicker", fontName="Helvetica-Bold", fontSize=8.5, textColor=GOLD, spaceAfter=4, leading=10))
    styles.add(ParagraphStyle(name="Hero", fontName="Helvetica-Bold", fontSize=22, textColor=NAVY, leading=25, spaceAfter=5))
    styles.add(ParagraphStyle(name="SubHero", fontName="Helvetica", fontSize=10.5, textColor=MUTED, leading=14, spaceAfter=10))
    styles.add(ParagraphStyle(name="BodyTight", fontName="Helvetica", fontSize=9.5, textColor=TEXT, leading=12, spaceAfter=4))
    styles.add(ParagraphStyle(name="SectionHead", fontName="Helvetica-Bold", fontSize=10.5, textColor=NAVY, leading=12, spaceBefore=6, spaceAfter=4))
    styles.add(ParagraphStyle(name="Mini", fontName="Helvetica", fontSize=8.5, textColor=MUTED, leading=10.5, spaceAfter=2))

    story = []
    story.append(Paragraph("INTERNATIONAL SUMMER ALLIANCE", styles["Kicker"]))
    story.append(Paragraph("OTC United States Summer Alliance", styles["Hero"]))
    story.append(Paragraph(
        "A provider-facing and family-screened United States summer framework covering elite academic routes, pre-college campus programmes, subject exploration and longer-form university preparation.",
        styles["SubHero"],
    ))

    meta = Table([[
        Paragraph("<b>Prepared by</b><br/>Maria Shaw<br/>Overseas Office", styles["BodyTight"]),
        Paragraph("<b>Organisation</b><br/>Overseas Tutorial Centre Ltd (OTC)", styles["BodyTight"]),
        Paragraph("<b>Contact</b><br/>office@overseasuk.com<br/>overseasuk.com", styles["BodyTight"]),
    ]], colWidths=[58 * mm, 68 * mm, 48 * mm])
    meta.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), IVORY),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(meta)
    story.append(Spacer(1, 5))

    two_col = Table([[
        Paragraph(
            "<b>What OTC is building</b><br/>"
            "OTC is organising United States summer enquiries into clearer family-facing routes so families can distinguish between elite academic programmes, pre-college campus life, institute-style subject exploration and longer-form preparation before they shortlist providers.",
            styles["BodyTight"],
        ),
        Paragraph(
            "<b>Why the United States</b><br/>"
            "For many families, the United States remains the strongest market for visible pre-college branding, subject breadth and campus experience. The challenge is not availability, but choosing the right academic density, supervision model, city and price level before applying.",
            styles["BodyTight"],
        ),
    ]], colWidths=[86 * mm, 86 * mm])
    two_col.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(two_col)
    story.append(Spacer(1, 5))

    story.append(Paragraph("Route Structure", styles["SectionHead"]))
    structure = Table([[
        Paragraph("<b>01</b><br/>Elite academic route", styles["BodyTight"]),
        Paragraph("<b>02</b><br/>Pre-college campus route", styles["BodyTight"]),
        Paragraph("<b>03</b><br/>Subject exploration route", styles["BodyTight"]),
        Paragraph("<b>04</b><br/>Research / long-form preparation", styles["BodyTight"]),
    ]], colWidths=[43 * mm, 46 * mm, 44 * mm, 43 * mm])
    structure.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), IVORY),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(structure)
    story.append(Spacer(1, 4))

    story.append(Paragraph("Initial United States Focus", styles["SectionHead"]))
    rows = [
        [
            Paragraph("<b>Yale Young Global Scholars</b><br/><font size='8'>Elite academic / residential</font>", styles["BodyTight"]),
            Paragraph("A strong high-academic route for families looking at serious discussion, interdisciplinary learning and top-tier peer environment.", styles["Mini"]),
        ],
        [
            Paragraph("<b>Columbia Pre-College</b><br/><font size='8'>NYC residential / commuter / College Edge</font>", styles["BodyTight"]),
            Paragraph("Useful for families who want clear New York positioning, visible pre-college structure and differentiated campus/city options.", styles["Mini"]),
        ],
        [
            Paragraph("<b>Brown Pre-College</b><br/><font size='8'>Research / leadership / STEM / pre-bacc</font>", styles["BodyTight"]),
            Paragraph("An unusually broad route family that supports academic, leadership and longer-form progression demand in one ecosystem.", styles["Mini"]),
        ],
        [
            Paragraph("<b>Berkeley / UCLA / UChicago</b><br/><font size='8'>Campus / institute / immersion routes</font>", styles["BodyTight"]),
            Paragraph("Strong West Coast and Chicago route mix for campus life, subject institutes and different academic intensities.", styles["Mini"]),
        ],
    ]
    target_table = Table(rows, colWidths=[62 * mm, 110 * mm])
    target_table.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("BACKGROUND", (0, 0), (0, -1), IVORY),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(target_table)
    story.append(Spacer(1, 4))

    story.append(Paragraph("What direct cooperation would improve", styles["SectionHead"]))
    story.append(Paragraph(
        "Clearer family screening before high-value enquiries reach admissions teams · better expectation-setting around age, housing, supervision and visa timing · more accurate matching between academic strength and route intensity · stronger referral quality for serious-fit families.",
        styles["BodyTight"],
    ))

    story.append(Paragraph("Current cooperation boundary", styles["SectionHead"]))
    story.append(Paragraph(
        "OTC is currently approaching United States summer routes through a careful family-screening and provider-contact model. No public promise is made regarding guaranteed placement, exclusive representation, commission structure or direct appointment without written provider confirmation.",
        styles["BodyTight"],
    ))

    story.append(Spacer(1, 4))
    footer = Table([[
        Paragraph(
            "<b>Next step</b><br/>"
            "OTC seeks a practical first discussion on family-facing referral flow, suitable student profile, admissions routing, housing / supervision explanation and whether selected United States summer routes may support a more direct cooperation structure.",
            styles["BodyTight"],
        )
    ]], colWidths=[172 * mm])
    footer.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, -1), colors.whitesmoke),
        ("BOX", (0, 0), (-1, -1), 0.6, NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(footer)

    doc.build(story)


def build_html():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    html = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>OTC United States Summer Alliance One-Pager</title>
  <style>
    body { margin: 0; background: #f3efe7; font-family: "Helvetica Neue", Arial, sans-serif; color: #243142; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; background: #fff; padding: 14mm; box-sizing: border-box; }
    .kicker { color: #b99552; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; }
    h1 { color: #0f2740; font-size: 34px; margin: 6px 0 4px; line-height: 1.05; }
    .sub { color: #5f6b78; font-size: 15px; line-height: 1.45; margin-bottom: 12px; }
    .meta, .two, .structure, .targets, .footer { display: grid; gap: 0; border: 1px solid #d8d4cb; }
    .meta { grid-template-columns: 1fr 1.2fr 1fr; background: #fbf8f1; }
    .two { grid-template-columns: 1fr 1fr; margin-top: 10px; }
    .structure { grid-template-columns: repeat(4, 1fr); margin-top: 10px; background: #fbf8f1; }
    .targets { grid-template-columns: 205px 1fr; margin-top: 8px; }
    .meta > div, .two > div, .structure > div, .targets > div, .footer > div { padding: 10px 11px; border-right: 1px solid #d8d4cb; border-bottom: 1px solid #d8d4cb; }
    .meta > div:last-child, .two > div:last-child, .structure > div:last-child { border-right: none; }
    .section { color: #0f2740; font-size: 15px; font-weight: 700; margin: 12px 0 6px; }
    .body { font-size: 13px; line-height: 1.5; }
    .targets .left { background: #fbf8f1; font-weight: 700; color: #0f2740; }
    .footer { margin-top: 10px; background: #0f2740; color: #f8f4ed; }
    .footer .body { color: #f8f4ed; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="kicker">INTERNATIONAL SUMMER ALLIANCE</div>
    <h1>OTC United States Summer Alliance</h1>
    <div class="sub">A provider-facing and family-screened United States summer framework covering elite academic routes, pre-college campus programmes, subject exploration and longer-form university preparation.</div>

    <div class="meta">
      <div><strong>Prepared by</strong><br>Maria Shaw<br>Overseas Office</div>
      <div><strong>Organisation</strong><br>Overseas Tutorial Centre Ltd (OTC)</div>
      <div><strong>Contact</strong><br>office@overseasuk.com<br>overseasuk.com</div>
    </div>

    <div class="two">
      <div class="body"><strong>What OTC is building</strong><br>OTC is organising United States summer enquiries into clearer family-facing routes so families can distinguish between elite academic programmes, pre-college campus life, institute-style subject exploration and longer-form preparation before they shortlist providers.</div>
      <div class="body"><strong>Why the United States</strong><br>For many families, the United States remains the strongest market for visible pre-college branding, subject breadth and campus experience. The challenge is not availability, but choosing the right academic density, supervision model, city and price level before applying.</div>
    </div>

    <div class="section">Route Structure</div>
    <div class="structure body">
      <div><strong>01</strong><br>Elite academic route</div>
      <div><strong>02</strong><br>Pre-college campus route</div>
      <div><strong>03</strong><br>Subject exploration route</div>
      <div><strong>04</strong><br>Research / long-form preparation</div>
    </div>

    <div class="section">Initial United States Focus</div>
    <div class="targets body">
      <div class="left">Yale Young Global Scholars</div><div>A strong high-academic route for families looking at serious discussion, interdisciplinary learning and top-tier peer environment.</div>
      <div class="left">Columbia Pre-College</div><div>Useful for families who want clear New York positioning, visible pre-college structure and differentiated campus/city options.</div>
      <div class="left">Brown Pre-College</div><div>An unusually broad route family that supports academic, leadership and longer-form progression demand in one ecosystem.</div>
      <div class="left">Berkeley / UCLA / UChicago</div><div>Strong West Coast and Chicago route mix for campus life, subject institutes and different academic intensities.</div>
    </div>

    <div class="section">What direct cooperation would improve</div>
    <div class="body">Clearer family screening before high-value enquiries reach admissions teams · better expectation-setting around age, housing, supervision and visa timing · more accurate matching between academic strength and route intensity · stronger referral quality for serious-fit families.</div>

    <div class="section">Current cooperation boundary</div>
    <div class="body">OTC is currently approaching United States summer routes through a careful family-screening and provider-contact model. No public promise is made regarding guaranteed placement, exclusive representation, commission structure or direct appointment without written provider confirmation.</div>

    <div class="footer">
      <div class="body"><strong>Next step</strong><br>OTC seeks a practical first discussion on family-facing referral flow, suitable student profile, admissions routing, housing / supervision explanation and whether selected United States summer routes may support a more direct cooperation structure.</div>
    </div>
  </div>
</body>
</html>
"""
    HTML_OUT.write_text(html, encoding="utf-8")


if __name__ == "__main__":
    build_pdf()
    build_html()
    print(PDF_OUT)
    print(HTML_OUT)
