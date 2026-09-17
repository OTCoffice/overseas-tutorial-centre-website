"""Update the bilingual policy section without regenerating unrelated pages."""
import json, re
from html import escape
from pathlib import Path

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'content/business-confidentiality.json').read_text())
start = '<!-- OTC BUSINESS CONFIDENTIALITY START -->'
end = '<!-- OTC BUSINESS CONFIDENTIALITY END -->'
items = []
for i, (zh_title, en_title, zh, en) in enumerate(data['rules'], 1):
    items.append(f'<section class="otc-confidentiality-rule"><h3>{i}. <span lang="zh-Hant">{escape(zh_title)}</span><br><span lang="en">{escape(en_title)}</span></h3><p lang="zh-Hant">{escape(zh)}</p><p lang="en">{escape(en)}</p></section>')
section = start + '''
<section id="business-confidentiality" aria-labelledby="business-confidentiality-title" style="scroll-margin-top:6rem">
<style>#business-confidentiality{min-width:0;overflow-wrap:anywhere}#business-confidentiality p{font-size:1rem;line-height:1.8}#business-confidentiality h3{font-size:1.2rem;line-height:1.5}.otc-confidentiality-rule{border-top:1px solid #cbd5e1;padding-top:1rem;margin-top:1.5rem}</style>
<div class="eyebrow">Business communication · Confidentiality</div>
<h2 id="business-confidentiality-title"><span lang="zh-Hant">商業溝通服務資訊保密規則</span><br><span lang="en">Confidentiality Rules for Business Communication Services</span></h2>
<p>Overseas Tutorial Centre Ltd · 海外督導<br>Version / 版本: ''' + escape(data['version']) + '''</p>
<p lang="zh-Hant">適用於中英文翻譯、代寫及代發電郵、詢價、對外聯絡和合作洽談。</p>
<p lang="en">Applies to Chinese-English translation, email drafting and sending on behalf of clients, quotation enquiries, external liaison and partnership discussions.</p>
''' + '\n'.join(items) + '''
<p lang="zh-Hant"><strong>執行原則：先核實、先確認、少披露、留紀錄；未經授權，不擴大使用。</strong></p>
<p lang="en"><strong>Working principles: verify facts, obtain approval, minimise disclosure and keep records. Do not extend use beyond the authorised scope.</strong></p>
<p><a href="mailto:office@overseasuk.com?subject=Business%20communication%20and%20confidentiality">商務溝通諮詢 / Business communication enquiry</a></p>
</section>
''' + end
page = root / 'services/language-context-studio/index.html'
html = page.read_text()
if start in html:
    html = re.sub(re.escape(start) + '.*?' + re.escape(end), lambda _: section, html, flags=re.S)
else:
    anchor = '          </article>\n        </div>\n      </main>'
    assert html.count(anchor) == 1
    html = html.replace(anchor, section + '\n' + anchor)
page.write_text(html)
for route in ['services/index.html', 'zh/services/index.html']:
    page = root / route
    html = page.read_text()
    marker = '<!-- OTC CONFIDENTIALITY LINK -->'
    link = marker + '<section class="band compact-band"><h2>商務溝通與資訊保密 / Business Communication &amp; Confidentiality</h2><p>中英文翻譯、代寫電郵、詢價與對外聯絡：先確認再發送，只披露必要資訊。<br>Translation, email drafting, quotation enquiries and external liaison: approval before sending and only necessary disclosure.</p><p><a href="/services/language-context-studio/#business-confidentiality">閱讀中英文保密規則 / Read our bilingual confidentiality rules →</a></p></section>'
    if marker not in html:
        assert html.count('</main>') == 1
        html = html.replace('</main>', link + '</main>')
        page.write_text(html)
print('Updated policy and two service-directory links.')
