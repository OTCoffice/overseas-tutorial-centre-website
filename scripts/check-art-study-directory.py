#!/usr/bin/env python3
"""Check the art directory and share-only image; platform previews remain separate."""
import argparse
import html
import json
import re
import struct
import urllib.request
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.links, self.details, self.meta, self.canonical = [], [], 0, {}, []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'a':
            self.links.append(a.get('href', ''))
        if tag == 'details':
            self.details += 1
        if tag == 'meta':
            key = a.get('property', a.get('name', ''))
            self.meta.setdefault(key, []).append(a.get('content', ''))
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a['href'])


def get(url):
    with urllib.request.urlopen(url, timeout=30) as response:
        assert response.status == 200, (url, response.status)
        return response.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--live', action='store_true')
    args = ap.parse_args()
    data = json.loads((ROOT / 'content/art-study-programmes.json').read_text())
    settings = json.loads((ROOT / 'content/art-study-residency.json').read_text())
    total = sum(len(c['items']) for c in data['countries'])
    assert len(data['countries']) == 14
    names = []
    for country in data['countries']:
        assert len(country['items']) >= 11, country['name']
        if country['id'] in ('france', 'italy'):
            assert len(country['items']) >= 20, country['name']
        for item in country['items']:
            if 'html' in item:
                names.append(html.unescape(re.search(r'<h3>(.*?)</h3>', item['html']).group(1)))
            else:
                for key in ('name', 'kind', 'fit', 'status', 'fee', 'url', 'detail'):
                    assert item.get(key), (country['id'], key)
                assert urlsplit(item['url']).scheme == 'https', item['url']
                names.append(item['name'])
            if country['id'] == 'uk':
                assert item['subregion'] in ('倫敦', '英格蘭其他地區', '蘇格蘭', '威爾斯')
    assert not [n for n, count in Counter(names).items() if count > 1], 'Duplicate programme names'
    base = 'https://overseasuk.com'
    url = base + settings['path']
    local = (ROOT / settings['path'].lstrip('/') / 'index.html').read_bytes()
    raw = get(url) if args.live else local
    if args.live:
        assert raw == local, 'Live HTML differs from the rendered source'
    text = raw.decode()
    page = Page(text)
    assert page.details == total, (page.details, total)
    assert len(page.ids) == len(set(page.ids)), 'Duplicate IDs'
    for link in page.links:
        if link.startswith('#'):
            assert link[1:] in page.ids, link
        if link.startswith('/'):
            path = ROOT / urlsplit(link).path.lstrip('/')
            assert path.exists(), link
    assert sum('wa.me/447947991572?text=' in link and '%EF%BC%9A' in link for link in page.links) == total, 'Programme-specific contact links missing'
    for name in names:
        assert name in html.unescape(text), name
    assert f'{total}個項目' in text
    assert str(total) in settings['summaryZh']
    assert page.canonical == [url]
    expected = base + settings['shareImageZh'] + '?' + settings['socialImageVersion']
    for key in ('og:image', 'og:image:secure_url', 'twitter:image', 'twitter:image:src'):
        assert page.meta[key] == [expected], key
    assert page.meta['twitter:card'] == ['summary_large_image']
    assert page.meta['og:image:width'] == ['1200'] and page.meta['og:image:height'] == ['600']
    image = (ROOT / settings['shareImageZh'].lstrip('/')).read_bytes()
    assert image.startswith(b'\x89PNG\r\n\x1a\n')
    assert struct.unpack('>II', image[16:24]) == (1200, 600)
    if args.live:
        assert get(expected) == image, 'Live share image differs from source'
    print(('LIVE' if args.live else 'LOCAL') + f' PASS: {total} programmes / 14 countries; counts, names, links, regions, metadata and share-only image.')
    print('Mobile and native social previews require separate visual verification.')


if __name__ == '__main__':
    main()
