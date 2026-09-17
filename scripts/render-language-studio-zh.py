"""Render the Chinese mirror from the existing English service page."""
import json, re
from pathlib import Path
from urllib.parse import quote

root = Path(__file__).resolve().parents[1]
en_route = '/services/language-context-studio/'
zh_route = '/zh/services/language-context-studio/'
en_file = root / en_route.strip('/') / 'index.html'
en = en_file.read_text()
alternates = f'<link rel="alternate" hreflang="en" href="https://overseasuk.com{en_route}">\n<link rel="alternate" hreflang="zh-Hant" href="https://overseasuk.com{zh_route}">'
en = re.sub(r'<link rel="alternate" hreflang="(?:en|zh-Hant)"[^>]+>\s*', '', en)
en = en.replace('</head>', alternates + '\n</head>')
en = en.replace('<a href="/zh/" >中文</a>', f'<a href="{zh_route}" >中文</a>')
en_file.write_text(en)
zh = en.replace('<html lang="en">', '<html lang="zh-Hant">')
# Update canonical, share and copy URLs before reinstating reciprocal alternates.
zh = zh.replace('https://overseasuk.com' + en_route, 'https://overseasuk.com' + zh_route)
zh = zh.replace(quote('https://overseasuk.com' + en_route, safe=''), quote('https://overseasuk.com' + zh_route, safe=''))
zh = re.sub(r'<link rel="alternate" hreflang="(?:en|zh-Hant)"[^>]+>\s*', '', zh)
zh = zh.replace('</head>', alternates + '\n</head>')
zh_index = (root / 'zh/services/index.html').read_text()
for tag, cls in [('header', 'site-header'), ('footer', 'site-footer')]:
    pattern = rf'<{tag} class="{cls}">.*?</{tag}>'
    replacement = re.search(pattern, zh_index, re.S).group(0)
    if tag == 'header': replacement = replacement.replace('<a href="/zh/" >中文</a>', f'<a href="{en_route}" >English</a>')
    zh = re.sub(pattern, lambda _: replacement, zh, count=1, flags=re.S)
translations = {
 'Language & Context Studio | OTC Services': '中英翻譯與商務溝通服務｜海外督導 OTC',
 'Professional Chinese-English translation, bilingual editing and tone calibration for government, publishing, academic and legal-context documents.': '專業中英翻譯、雙語編修、商務文件與對外溝通支援，適用於企業、機構、出版、學術及法律語境文件。',
 'OTC Service / 01': '海外督導服務 / 01',
 'Language & Context Studio': '中英翻譯與商務溝通服務',
 'Back to all services': '返回全部服務', 'Back to parent page': '返回服務總覽',
 'Flagship translation service': '專業翻譯與文件服務',
 'From £180 / document review': '文件審閱 £180 起', '1-10 working days': '1–10 個工作日',
 'Buy / enquire': '服務諮詢', 'Ask OTC first': '先向海外督導諮詢',
 'Service Overview': '服務概覽', 'What this service does': '我們提供甚麼協助',
 'A professional language and context service for documents where tone, authority, precision and institutional risk matter as much as literal meaning.': '協助處理重要文件的翻譯與語境表達，同時兼顧用詞準確、語氣、文件權威性及機構溝通風險。',
 'Workflow': '工作流程', 'Process': '服務步驟',
 'Document intake and purpose check': '接收文件並確認用途',
 'Audience, jurisdiction and terminology calibration': '核對讀者、適用地區及專業用語',
 'Translation / bilingual editing / rewriting': '翻譯、雙語編修及文字整理',
 'Editorial review with query notes': '編輯覆核並列出待確認事項',
 'Final clean copy and tracked-change copy': '交付定稿及修訂標記版本',
 'Outputs': '交付內容', 'Deliverables': '您會收到的文件',
 'Bilingual final document': '中英文對照定稿', 'Tracked-change editorial file': '修訂標記文件',
 'Terminology and style notes': '術語與文風說明', 'Optional publication-ready layout': '可另選出版排版服務',
 'Portfolio': '文件類型', 'Example finished work': '可協助處理的文件示例',
 'Government or institution profile': '政府或機構介紹', 'Academic article / abstract / conference text': '學術文章、摘要及會議稿件',
 'Legal-context supporting document': '法律語境的輔助文件', 'Publishing manuscript sample': '出版稿件',
 '>Sample<': '>示例<', 'Fees': '費用', 'Indicative pricing': '參考收費',
 'Document review: from £180': '文件審閱：£180 起',
 'Premium translation/editing: quoted by word count and risk level': '專業翻譯及編修：按字數與文件風險程度報價',
 'Institutional retainer: by monthly scope': '機構長期合作：按每月工作範圍議定',
 'Final fees depend on document volume, urgency, risk level, meeting time, third-party costs and whether certified/legal/regulatory professionals are required.': '最終費用按文件量、急迫程度、風險、會議時間、第三方費用，以及是否需要認證、法律或其他專業人士參與而定。',
 'Share this page': '分享此頁', '>Share<': '>分享<', '>Email<': '>電郵<', '>Copy link<': '>複製連結<',
 'Email copied': '電郵內容已複製', 'Email ready': '電郵內容已備妥', 'Copy failed': '未能複製', 'Copied': '已複製'
}
# Leave the approved bilingual policy unchanged.
start, end = '<!-- OTC BUSINESS CONFIDENTIALITY START -->', '<!-- OTC BUSINESS CONFIDENTIALITY END -->'
before, rest = zh.split(start, 1)
policy, after = rest.split(end, 1)
for old, new in translations.items():
    before = before.replace(old, new)
    after = after.replace(old, new)
before = before.replace('href="/services/"', 'href="/zh/services/"')
old_share_title = quote('Language & Context Studio | OTC Services', safe='')
before = before.replace(old_share_title, quote('中英翻譯與商務溝通服務｜海外督導 OTC', safe=''))
zh = before + start + policy + end + after
destination = root / zh_route.strip('/') / 'index.html'
destination.parent.mkdir(parents=True, exist_ok=True)
destination.write_text(zh)
# Chinese service directory should stay within the Chinese mirror.
idx = root / 'zh/services/index.html'
idx.write_text(idx.read_text().replace(f'href="{en_route}', f'href="{zh_route}'))
sitemap = root / 'sitemap.xml'
xml = sitemap.read_text()
url = 'https://overseasuk.com' + zh_route
if f'<loc>{url}</loc>' not in xml:
    sitemap.write_text(xml.replace('</urlset>', f'  <url><loc>{url}</loc></url>\n</urlset>'))
search = root / 'search/index.html'
html = search.read_text()
match = re.search(r'(<script type="application/json" id="search-data">)(.*?)(</script>)', html, re.S)
items = json.loads(match.group(2))
items = [item for item in items if item.get('url') != zh_route]
items.insert(0, {'type':'Page', 'title':'中英翻譯與商務溝通服務｜資訊保密規則', 'url':zh_route, 'desc':'海外督導中英翻譯、商務文件與對外聯絡服務：流程、費用及十項中英文資訊保密規則。'})
search.write_text(html[:match.start(2)] + json.dumps(items, ensure_ascii=False, separators=(',', ':')) + html[match.end(2):])
print('Chinese mirror, reciprocal links, sitemap and search entry updated.')
