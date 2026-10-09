from pathlib import Path
import base64, hashlib
from html import escape
root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + (root / 'style.css').read_text() + '\n</style>')
for name in ['story.js', 'strategies.js', 'partners.js', 'worldlines.js', 'worldline-engine.js', 'game.js', 'music.js', 'sound.js']:
    script = (root / name).read_text().replace('</script', '<\\/script')
    html = html.replace(f'<script src="{name}"></script>', '<script>\n' + script + '\n</script>')
for asset in (root / 'assets').rglob('*'):
    if asset.suffix in {'.png', '.svg', '.ico', '.ogg', '.m4a', '.wav'}:
        # Host MIME registries can label .m4a as LATM even though it is an MP4 container.
        mime = {'.m4a':'audio/mp4','.wav':'audio/wav','.ogg':'audio/ogg','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'}[asset.suffix]
        data = base64.b64encode(asset.read_bytes()).decode('ascii')
        html = html.replace('assets/' + asset.relative_to(root / 'assets').as_posix(), f'data:{mime};base64,{data}')
credit_files = ['assets/intro/CREDITS.txt', 'assets/cover/CREDITS.txt', 'assets/music/CREDITS.txt', 'assets/sfx/CREDITS.txt', 'assets/LOBE-ICONS-LICENSE.txt']
notices = '\n\n'.join((root / name).read_text(encoding='utf-8') for name in credit_files)
html = html.replace('</body>', '<template id="agi-third-party-notices"><pre>' + escape(notices) + '</pre></template>\n</body>')
(root / 'dist').mkdir(exist_ok=True)
build_id = hashlib.sha256(html.encode('utf-8')).hexdigest()[:12]
html = html.replace('<head>', f'<head>\n<meta name="agi-build" content="{build_id}">', 1)
output = root / 'dist' / 'index.html'
temporary = output.with_suffix('.tmp')
temporary.write_text(html)
temporary.replace(output)
from export_endings import export
export(root / 'dist')
print(f'Built dist/index.html (offline, no dependencies), build {build_id}')
