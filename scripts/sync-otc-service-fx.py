#!/usr/bin/env python3
"""Refresh the dated six-currency estimate table; review and publish separately."""
import json, math, pathlib, urllib.request
url='https://open.er-api.com/v6/latest/CNY'
with urllib.request.urlopen(url,timeout=30) as response:
    source=json.load(response)
if source.get('result')!='success' or source.get('base_code')!='CNY':
    raise ValueError('Unexpected exchange-rate response')
rates={code:source['rates'][code] for code in ['CNY','GBP','USD','TWD','HKD','AUD','EUR']}
if not all(isinstance(v,(int,float)) and math.isfinite(v) and v>0 for v in rates.values()):
    raise ValueError('Invalid exchange rate')
result={'base':'CNY','asOf':source['time_last_update_utc'],'source':url,'provider':'ExchangeRate-API','rates':rates}
path=pathlib.Path(__file__).resolve().parents[1]/'content/otc-service-fx.json'
path.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(result['asOf'])
