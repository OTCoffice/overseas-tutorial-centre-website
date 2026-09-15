#!/usr/bin/env python3
"""Publication gate for an article's visible cover and static share metadata.
This does not replace visual inspection of an unsent platform composer.
"""
import argparse, json, struct, sys, urllib.request
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.meta={};self.images=[];self.canonical=[];self.in_head=False;self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='head':self.in_head=True
        if tag=='meta' and self.in_head:
            k=a.get('property',a.get('name',''));self.meta.setdefault(k,[]).append(a.get('content',''))
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='img':self.images.append(a)
    def handle_endtag(self,tag):
        if tag=='head':self.in_head=False

def verify(text,a,base,locale='zh'):
    p=Page(text);expected=urljoin(base,a.get('path') or ('/zh' if locale=='zh' else '')+'/insights/'+a['slug']+'/')
    assert p.canonical==[expected], 'Canonical missing, duplicated or incorrect'
    def one(k):
        v=p.meta.get(k,[]);assert len(v)==1 and v[0],f'Missing/duplicate {k}';return v[0]
    assert one('og:url')==expected
    assert one('twitter:card')=='summary_large_image'
    for k in ('og:title','og:description','twitter:title','twitter:description'):one(k)
    image=one('og:image');assert image==one('twitter:image'),'OG/Twitter images differ'
    assert image.startswith('https://'),'Image must be public HTTPS'
    field='shareImageZh' if locale=='zh' else 'shareImage'
    assert a.get(field),'Article source must explicitly set '+field
    assert urlsplit(image).path==urlsplit(a[field]).path,'Source image and metadata differ'
    assert a.get('socialImageVersion'),'Explicit image revision required'
    hero=[x for x in p.images if urljoin(expected,x.get('src',''))==image]
    assert hero and hero[0].get('alt'),'Same image must render in article with alt'
    assert one('og:image:type') in ('image/png','image/jpeg')
    dims=(int(one('og:image:width')),int(one('og:image:height')))
    assert dims==(int(hero[0].get('width',0)),int(hero[0].get('height',0))),'Hero dimensions differ'
    assert dims==(a['socialImageWidth'],a['socialImageHeight']),'Source dimensions differ'
    return image,dims,one('og:image:type')

def image_size(data):
    if data.startswith(b'\x89PNG\r\n\x1a\n'):return struct.unpack('>II',data[16:24]),'image/png'
    if data[:2]==b'\xff\xd8':
        i=2
        while i<len(data):
            if data[i]!=255:i+=1;continue
            while data[i]==255:i+=1
            marker=data[i];i+=1
            if marker in (0xd8,0xd9):continue
            n=int.from_bytes(data[i:i+2],'big')
            if marker in (0xc0,0xc1,0xc2):return (int.from_bytes(data[i+5:i+7],'big'),int.from_bytes(data[i+3:i+5],'big')),'image/jpeg'
            if n<2:break
            i+=n
    raise AssertionError('Image is not supported PNG/JPEG')

def get(url,ua):
    with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':ua}),timeout=30) as r:
        assert r.status==200,f'{url}: HTTP {r.status}'
        return r.read(),r.headers.get_content_type()

def main():
    ap=argparse.ArgumentParser();ap.add_argument('article');ap.add_argument('--live',action='store_true');ap.add_argument('--base',default='https://overseasuk.com');ap.add_argument('--locale',choices=['zh','en'],default='zh');arg=ap.parse_args()
    a=json.loads(Path(arg.article).read_text());route=a.get('path') or ('/zh' if arg.locale=='zh' else '')+'/insights/'+a['slug']+'/'
    if not arg.live:
        image,dims,mime=verify((ROOT/route[1:]/'index.html').read_text(),a,arg.base,arg.locale)
        data=(ROOT/urlsplit(image).path[1:]).read_bytes();assert image_size(data)==(dims,mime)
        assert len(data)<5_000_000,'Image exceeds 5 MB'
        print('PASS local: visible cover, source, metadata, image bytes and dimensions')
    else:
        from urllib.robotparser import RobotFileParser
        for ua in ['Mozilla/5.0','Twitterbot/1.0']:
            page,mime=get(arg.base+route,ua);assert mime=='text/html'
            image,dims,kind=verify(page.decode(),a,arg.base,arg.locale)
            data,mime=get(image,ua);assert mime==kind and image_size(data)==(dims,kind)
            assert len(data)<5_000_000
            print('PASS live GET:',ua,'article +',image)
        robots,_=get(arg.base+'/robots.txt','Twitterbot/1.0');rp=RobotFileParser();rp.parse(robots.decode().splitlines());assert rp.can_fetch('Twitterbot',arg.base+route) and rp.can_fetch('Twitterbot',image),'robots blocks crawler'
    print('Platform composer preview remains a separate, required visual check.')
if __name__=='__main__':
    try:main()
    except (AssertionError,KeyError,ValueError,OSError) as e:print('FAIL:',e,file=sys.stderr);sys.exit(1)
