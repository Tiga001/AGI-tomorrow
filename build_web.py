"""Build the link-to-play edition; build.py still creates the offline HTML."""
from pathlib import Path
import hashlib
import json
import re
import shutil

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / 'web-dist'
SCRIPTS = ['story.js', 'strategies.js', 'partners.js', 'worldlines.js',
           'worldline-engine.js', 'game.js', 'music.js', 'sound.js']


def build():
    sources = {name: (ROOT / name).read_text(encoding='utf-8')
               for name in ['index.html', 'style.css', *SCRIPTS]}
    assets = set(re.findall(r'assets/[\w./-]+\.(?:png|svg|ico|m4a|wav)',
                            '\n'.join(sources.values())))
    # Include the notices alongside the exact assets served to players.
    notices = {p.relative_to(ROOT).as_posix() for p in (ROOT / 'assets').rglob('*')
               if p.is_file() and (p.name == 'CREDITS.txt' or 'LICENSE' in p.name
                                   or p.name in {'sources.json', 'action-sources.json'})}
    digest = hashlib.sha256()
    for name in sorted(sources):
        digest.update(sources[name].encode('utf-8'))
    for name in sorted(assets | notices):
        digest.update((ROOT / name).read_bytes())
    build_id = digest.hexdigest()[:12]
    OUTPUT.mkdir(exist_ok=True)
    for name, content in sources.items():
        for resource in [*assets, *SCRIPTS, 'style.css']:
            content = content.replace(resource, resource + '?v=' + build_id)
        if name == 'index.html':
            content = content.replace('<head>', '<head>\n<meta name="agi-build" content="' + build_id + '">', 1)
        (OUTPUT / name).write_text(content, encoding='utf-8')
    for name in assets | notices:
        target = OUTPUT / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / name, target)
    (OUTPUT / '.nojekyll').touch()
    (OUTPUT / 'build.json').write_text(json.dumps({'build': build_id}, indent=2) + '\n')
    print('Built web-dist: ' + build_id + '; HTML ' + str((OUTPUT / 'index.html').stat().st_size) + ' bytes')


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pages', action='store_true', help='Copy the web build into docs for GitHub Pages.')
    args = parser.parse_args()
    build()
    if args.pages:
        shutil.copytree(OUTPUT, ROOT / 'docs', dirs_exist_ok=True)
        print('Updated docs for GitHub Pages.')
