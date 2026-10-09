"""Export the current game's complete ending copy for editorial review."""
from pathlib import Path
import html
import json

ROOT = Path(__file__).resolve().parent
NAMES = {'openai': 'OpenAI', 'claude': 'Claude', 'deepseek': 'DeepSeek', 'kimi': 'Kimi', 'gemini': 'Gemini', 'qwen': '千问', 'huawei': '华为', 'xiaomi': '小米', 'xai': 'xAI', 'nvidia': '英伟达', 'independent': '单干'}
KINDS = {'breakthrough': '实现 AGI', 'open': '开放共享', 'control': '公司掌控', 'detached': '合作结束', 'compromise': '未实现 AGI，公司继续经营', 'fracture': '项目失败'}


def read_data(name):
    source = (ROOT / name).read_text(encoding='utf-8')
    return json.loads(source.split('=', 1)[1].strip().rstrip(';'))


def export(destination=None):
    destination = Path(destination or ROOT / 'dist')
    destination.mkdir(parents=True, exist_ok=True)
    story, worlds = read_data('story.js'), read_data('worldlines.js')
    assert {e['id'] for e in story['endings']} == {'bankrupt', 'burnout', 'lawsuit'}
    assert {w['id'] for w in worlds} == set(NAMES)
    records = [{**{k: e[k] for k in ('id', 'title', 'body')}, 'group': '通用失败', 'kind': '通用失败'} for e in story['endings']]
    for route, name in NAMES.items():
        world = next(w for w in worlds if w['id'] == route)
        for kind, label in KINDS.items():
            if kind in world['endings']:
                e = world['endings'][kind]
                records.append({'id': f'world_{route}_{kind}', 'title': e['title'], 'body': e['body'], 'group': name, 'kind': label})
    assert len(records) == 67 and len({e['id'] for e in records}) == 67
    groups = ['通用失败', *NAMES.values()]
    txt = ['明天 AGI · 全部 67 种结局文案', '按当前游戏源码原文导出，包含完整标题与正文。', '']
    sections = []
    for group in groups:
        txt += [group, '']
        articles = []
        for i, e in enumerate(records, 1):
            if e['group'] != group:
                continue
            txt += [f'{i:02d}. {e["title"]} · {e["kind"]}', e['body'], '']
            articles.append(f'<article id="{html.escape(e["id"])}" data-kind="{html.escape(e["kind"])}"><div class="eyebrow">{i:02d} / {html.escape(e["kind"])}</div><h3>{html.escape(e["title"])}</h3><p>{html.escape(e["body"])}</p></article>')
        sections.append(f'<section data-group="{html.escape(group)}"><h2>{html.escape(group)} <span>{len(articles)} 篇</span></h2>{"".join(articles)}</section>')
    options = ''.join(f'<option>{html.escape(group)}</option>' for group in groups)
    kind_options = ''.join(f'<option>{html.escape(kind)}</option>' for kind in ['通用失败', *KINDS.values()])
    page = '''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>明天 AGI · 67 种结局全文</title><link rel="icon" href="data:,"><style>
    :root{color-scheme:light;--ink:#25213b;--muted:#777185;--line:#e2dfe9;--accent:#4424a5}*{box-sizing:border-box}body{margin:0;background:#f7f6fa;color:var(--ink);font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif}main{max-width:960px;margin:auto;padding:55px 28px 80px}.kicker{color:var(--accent);font-size:13px;font-weight:750;letter-spacing:2px}h1{font-size:38px;line-height:1.3;margin:14px 0}header p{color:var(--muted);line-height:1.8}.filters{position:sticky;top:0;z-index:2;background:#f7f6faf5;backdrop-filter:blur(12px);border-bottom:1px solid var(--line);padding:20px 0 15px;display:flex;flex-wrap:wrap;gap:12px;align-items:end}.filters label{font-size:12px;color:var(--muted);display:grid;gap:6px}.search{flex:1;min-width:180px}select,input{font:inherit;font-size:15px;color:var(--ink);border:1px solid #cbc5d8;border-radius:7px;background:white;padding:10px 12px;min-height:42px;width:100%}#count{font-size:13px;color:var(--muted);margin:0 0 12px 2px}h2{font-size:25px;margin:38px 0 20px}h2 span{font-size:13px;color:var(--muted);font-weight:400;margin-left:10px}article{padding:25px 30px;margin:0 0 18px;background:white;border:1px solid var(--line);border-radius:10px;break-inside:avoid}.eyebrow{font-size:12px;color:var(--accent);font-weight:650;letter-spacing:.5px}h3{font-size:23px;line-height:1.45;margin:8px 0 15px}article p{margin:0;font-size:17px;line-height:1.95;white-space:pre-line}#empty{color:var(--muted);padding:40px 0}[hidden]{display:none!important}a{color:var(--accent)}@media(max-width:600px){main{padding:28px 18px}h1{font-size:29px}article{padding:22px}h3{font-size:21px}.filters{gap:8px}article p{font-size:16px}.search{flex-basis:100%}}@media print{body{background:white}main{padding:0;max-width:none}.filters,header p a{display:none}article{border:0;border-top:1px solid #ddd;padding:18px 0}h2{break-after:avoid}}
    </style></head><body><main><header><div class="kicker">明天 AGI / 结局文案</div><h1>全部 67 种结局</h1><p>当前全部 <strong>67</strong> 种结局。以下是游戏当前使用的完整文案，可按公司和结局类型筛选。<br><a href="endings.txt" download>下载纯文本全文</a></p></header><div class="filters"><label>公司 / 路线<select id="group"><option value="">全部路线</option>GROUP_OPTIONS</select></label><label>结局类型<select id="kind"><option value="">全部类型</option>KIND_OPTIONS</select></label><label class="search">查找文案<input id="query" type="search" placeholder="搜索标题或正文" autocomplete="off"></label><p id="count" aria-live="polite">67 / 67 篇</p></div>SECTIONS<p id="empty" hidden>没有找到匹配的文案。</p></main><script>
    const group=document.getElementById('group'),kind=document.getElementById('kind'),query=document.getElementById('query');
    function filter(){let total=0;for(const section of document.querySelectorAll('section')){let count=0;for(const card of section.querySelectorAll('article')){const match=(!group.value||section.dataset.group===group.value)&&(!kind.value||card.dataset.kind===kind.value)&&card.textContent.toLowerCase().includes(query.value.trim().toLowerCase());card.hidden=!match;if(match)count++;}section.hidden=!count;total+=count;}document.getElementById('count').textContent=total+' / 67 篇';document.getElementById('empty').hidden=total!==0;}
    [group,kind,query].forEach(control=>control.addEventListener('input',filter));
    </script></body></html>'''.replace('GROUP_OPTIONS', options).replace('KIND_OPTIONS', kind_options).replace('SECTIONS', ''.join(sections))
    (destination / 'endings.html').write_text(page, encoding='utf-8')
    (destination / 'endings.txt').write_text('\n'.join(txt), encoding='utf-8')
    (destination / 'endings.json').write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return len(records)


if __name__ == '__main__':
    print(f'Exported {export()} complete endings to dist/')
