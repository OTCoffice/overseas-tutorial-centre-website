#!/usr/bin/env python3
"""Build the public, four-page East Sussex parent guide. Requires ReportLab."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfdoc
import os
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
root=Path(__file__).resolve().parents[1]
out=root/'assets/college-guides/east-sussex-2027-zh.pdf'
# Use a locally supplied Noto Sans TC TrueType font; ReportLab embeds subsets.
font_path=os.environ.get('OTC_CJK_FONT')
if not font_path:
    raise SystemExit('Set OTC_CJK_FONT to NotoSansTC[wght].ttf (Google Fonts, OFL).')
from fontTools.ttLib import TTFont as FontToolsFont
from fontTools.varLib.instancer import instantiateVariableFont
from io import BytesIO
font=FontToolsFont(font_path)
if 'fvar' in font:
    font=instantiateVariableFont(font, {'wght':400}, inplace=True)
font_data=BytesIO();font.save(font_data);font_data.seek(0)
pdfmetrics.registerFont(TTFont('OTC-TC',font_data))
original_format=pdfdoc.PDFStream.format
def ascii_stream(self, document):
    if self.filters and pdfdoc.PDFBase85Encode not in self.filters:
        self.filters=[pdfdoc.PDFBase85Encode]+list(self.filters)
    return original_format(self, document)
pdfdoc.PDFStream.format=ascii_stream
W,H=595.276,841.89
navy=HexColor('#19394d');gold=HexColor('#b7892c'); muted=HexColor('#536980')
c=canvas.Canvas(str(out),pagesize=(W,H),pageCompression=1,invariant=1)
c.setTitle('East Sussex College Group | OTC | 2027 Parent Guide');c.setAuthor('Overseas Tutorial Centre Ltd')
body=ParagraphStyle('body',fontName='OTC-TC',fontSize=10.5,leading=17,textColor=navy,wordWrap='CJK')
small=ParagraphStyle('small',parent=body,fontSize=9,leading=14)
y=0
def page(n,title):
 global y
 c.setFillColor(HexColor('#fbf9f4'));c.rect(0,0,W,H,fill=1,stroke=0)
 c.setFillColor(navy);c.rect(0,H-106,W,106,fill=1,stroke=0)
 c.setFillColor(HexColor('#8b392f'));c.rect(W-68,H-106,38,106,fill=1,stroke=0)
 c.setFillColor(gold);c.rect(W-30,H-106,9,106,fill=1,stroke=0)
 c.setFillColor(white);c.setFont('OTC-TC',10);c.drawString(40,H-30,'海外督導 OTC｜2027 入學家長手冊')
 c.setFont('OTC-TC',21);c.drawString(40,H-61,'East Sussex College Group')
 c.setFont('OTC-TC',12);c.drawString(40,H-87,title)
 c.setStrokeColor(gold);c.line(40,43,W-40,43)
 c.setFont('OTC-TC',8);c.setFillColor(muted);c.drawString(40,28,'Overseas Tutorial Centre｜修訂：2026-11-18｜費用以校方正式帳單為準')
 c.drawRightString(W-40,28,str(n));y=H-130

def p(t,style=body):
 global y
 para=Paragraph(t,style);w,h=para.wrap(W-80,H);para.drawOn(c,40,y-h);y-=h+11

def heading(t):
 global y
 y-=7;c.setFont('OTC-TC',14);c.setFillColor(navy);c.drawString(40,y-15,t);y-=27

def table(rows,widths):
 global y
 cells=[[Paragraph(str(x),small) for x in r] for r in rows]
 tb=Table(cells,colWidths=widths,hAlign='LEFT')
 tb.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor('#e7edef')),('VALIGN',(0,0),(-1,-1),'TOP'),('BOTTOMPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),9),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('LINEBELOW',(0,0),(-1,-1),.4,HexColor('#d4dadd'))]))
 w,h=tb.wrap(W-80,H);tb.drawOn(c,40,y-h);y-=h+14

def end():
 assert y>57, f'Page overflow: {y}'
 c.showPage()
page(1,'正式合作院校｜Lewes・Eastbourne・Hastings')
p('East Sussex College Group 是 OTC 正式合作院校。雙方已完成代理協議簽署，校方已確認 OTC 可公開推廣並協助學生申請。')
heading('課程與預算')
table([['項目','家長參考'],['A-Level 公開學費','非歐盟學生 £9,500／學年（2027-28）'],['首年示例預算','£17,330：學費＋42週寄宿及付款費＋首次安排費'],['兩年示例預算','£34,600：假設兩年學費及住宿單價相同；非全包報價'],['課程選擇','A-Level、International Study Year、English Language Plus、UAL藝術與設計預科；按課程確認校區及資格。']],[140,W-220])
heading('免費基本申請')
p('經 OTC 申請本手冊所列、經校方確認可接受 OTC 代辦的課程，可免費獲得課程與校區查詢、材料清單及完整性檢查、遞交協調、補件及錄取進度跟進。')
heading('家庭直接付款')
p('家庭按學院正式帳單列明的金額、期限及收款資料，直接向學院支付學費及帳單內其他費用。OTC 協助核對付款通知與申請進度，不從家庭應付學費中扣減任何款項。付款及退款條件以校方正式文件為準。')
p('適合比較公立學院課程、本地學習環境及寄宿家庭生活的家庭。國際學生仍須繳付學費，並非傳統寄宿中學的全包安排。',small)
end()
page(2,'課程、校區與入學要求')
heading('A-Level 選科')
p('一般修讀兩年、通常三科。校方表示 Lewes 是完整兩年 A-Level 的主要校區，設有國際學生升學支援。Eastbourne 及 Hastings 亦有 A-Level 課程；各校區科目不同，不能把集團課程清單視為每個校區均可選讀。')
p('攝影須單獨核對：既有資料曾把 Photography A-Level 列於 Hastings。Lewes 有攝影工作室，不代表2027年一定開設該科。攝影所在校區、與歷史／心理學等科目的組合、課表及跨校區修讀安排，均須招生處書面確認。')
table([['項目','公開資料與申請限制'],['一般門檻','16歲起；三科A-Level英語程度相當於IELTS Academic 5.5，單項至少5.0；完成兩年高中或同等資格。香港學生另按完成中四或同等資格評估。'],['2027入學待核實','學歷等值、先修成績、英語證明、攝影作品、面試／測試、名額與截止日期。課程頁仍顯示舊開課日期，不代表2027個別安排已確認。'],['未成年學生','住宿、家長同意、照顧與監督安排由校方確認。']],[115,W-195])
heading('申請流程')
p('1. 提供年齡、在讀年級、最近成績、英語程度、入學時間、優先三科及替代科、年度預算。')
p('2. 核對校區、選科與資格；準備申請表、護照、成績、英語證明及適用作品集。')
p('3. 取得錄取與正式費用資料後，確認付款、住宿及退款條件；需要簽證者按校方要求辦理CAS。')
p('錄取及CAS由校方決定，簽證由主管機關審批。',small)
end()
page(3,'學費、住宿與預算')
table([['項目','公開價格／假設'],['A-Level／AS-Level','非歐盟學生 £9,500／學年；兩年一併預訂可按校方條件鎖定第二年學費，須書面確認。'],['含餐寄宿家庭','2027年8月27日起 £180／週，另有付款費 £5／週；首次安排費 £60。'],['其他住宿','Lewes Caburn House自炊住宿 £150／週；18歲或以上，房源及入住週數待確認。'],['Enhanced Support Package','£1,000；部分學生可能須選用，適用情況及收費周期待核實。']],[155,W-235])
heading('兩年示例')
table([['計算','金額'],['每年學費＋42週寄宿及付款費','£9,500＋£185×42＝£17,270'],['首年另加首次安排費','£17,270＋£60＝£17,330'],['兩年示例小計','£17,270×2＋£60＝£34,600']],[W-220,140])
p('42週為預算假設；兩年示例假設學費及住宿單價不變、首次安排費只收一次。第二年住宿價格、入住週數及個別額外費用待核實。以上不是兩年全包報價。')
heading('另付費用')
p('考試、材料、適用教材、額外支援、簽證及醫療附加費、機票、交通、零用、額外假期住宿及另行委託的額外服務費不包含在上述小計。特別飲食、聖誕住宿及住宿變更等按校方條件另計。')
p('需Student Route簽證者，公開費表列明CAS前須付首年課程費押金，其中£1,000不退，另有£55 CAS管理費。實際付款期限與退款條件以正式文件為準。',small)
end()
page(4,'校區、服務與官方資料')
heading('校區與生活')
p('Lewes：位於市鎮內，設科學實驗室、藝術及攝影工作室、表演藝術設施與健身房。地址：1 Mountfield Road, Lewes, BN7 2XH。')
p('Hastings：設 Station Plaza 及 Ore Valley。Station Plaza 鄰近火車站及巴士站，地址：Station Approach, Hastings, TN34 1BA。Eastbourne 的課程及授課地點另按申請確認。')
p('住宿地址會影響通勤。火車及巴士路線、車程和費用，須按最終住宿、授課校區及出行日期另查。')
heading('服務範圍')
p('免費基本申請不包括學費、住宿、校方申請或CAS費、考試、翻譯認證、簽證及其他第三方費用。另行委託的深度升學規劃、作品集輔導、語言或學科培訓、簽證及監護服務，須另行確認範圍與收費，不強制綁定。')
heading('資料連結')
links=[('OTC 院校頁與免費申請協助','https://overseasuk.com/zh/public-school-alliance/uk/east-sussex/'),('2027-28 官方費用表','https://www.escg.ac.uk/docs/international/international-fees-27-28/'),('A-Level 課程與一般門檻','https://international.escg.ac.uk/international-courses/a-levels/'),('官方申請程序與退款政策','https://international.escg.ac.uk/apply/how-to-apply/'),('OTC 服務範圍與另付費用','https://overseasuk.com/zh/application-fees/')]
for label,url in links:p('<link href="'+url+'" color="#19394d"><u>'+label+'</u></link>',small)
heading('聯絡 OTC')
p('電郵：office@overseasuk.com　微信：overseasus<br/>WhatsApp：+44 7947 991572　網站：overseasuk.com')
p('合作與費用核查：2026年11月18日。2027個人入學資格、選科及最終費用以招生部書面確認為準。本手冊為OTC家長參考資料，並非校方錄取或報價文件。',small)
end();c.save()
# ASCII-only PDF is byte-for-byte safe through UTF-8 repository content transport.
# Replace the optional four-byte binary header comment without shifting xref offsets.
data=out.read_bytes().replace(b'\x93\x8c\x8b\x9e',b'OTC ')
data.decode('ascii');out.write_bytes(data)
print(out, len(data),'bytes; four pages')
