// Baut die Prototyp-Seiten aus src/ und erzeugt zusätzlich ein Einzeldatei-Bundle
// (dist/digital-avenue-prototyp.html) mit Hash-Routing und eingebetteten Bildern.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(root, p), 'utf8');
const partial = (n) => read(`src/partials/${n}.html`);

const PAGES = [
  { file: 'index.html', route: 'start' },
  { file: 'praxen.html', route: 'praxen' },
  { file: 'kanzleien.html', route: 'kanzleien' },
  { file: 'mittelstand.html', route: 'mittelstand' },
];

function parsePage(src) {
  const meta = {};
  src = src.replace(/^\{\{(\w+)=(.*)\}\}\s*$/gm, (_, k, v) => { meta[k] = v; return ''; });
  return { meta, body: src.trim() };
}

// 1) Mehrseitige Variante -------------------------------------------------
const pages = PAGES.map((p) => {
  const { meta, body } = parsePage(read(`src/pages/${p.file}`));
  const main = body.replace('{{CHECK_SECTION}}', partial('check-section'));
  const html = partial('head')
    .replace('{{TITLE}}', meta.TITLE).replace('{{DESC}}', meta.DESC).replace('{{PAGE}}', meta.PAGE)
    + partial('nav') + main + partial('footer') + partial('check-dialog');
  writeFileSync(join(root, p.file), html);
  return { ...p, meta, main };
});
console.log('Seiten gebaut:', pages.map((p) => p.file).join(', '));

// 2) Einzeldatei-Bundle für die Vorschau ---------------------------------
const b64 = (p) => readFileSync(join(root, p)).toString('base64');
const dataUri = (p, mime) => `data:${mime};base64,${b64(p)}`;

let tokensCss = readFileSync(join(root, '../design-system/colors_and_type.css'), 'utf8')
  .replace(/@import[^;]+;/g, '')
  .replace("url('fonts/Manrope-VariableFont_wght.woff2')", `url('${dataUri('../design-system/fonts/Manrope-VariableFont_wght.woff2', 'font/woff2')}')`);
let siteCss = read('css/site.css').replace(/@import[^;]+;/, '');
const svgCache = {};
const svgUri = (p) => svgCache[p] ??= 'data:image/svg+xml;base64,' + b64(p);

const rewriteLinks = (html) => html
  .replace(/href="index\.html#([\w-]+)"/g, 'href="#start/$1"')
  .replace(/href="index\.html"/g, 'href="#start"')
  .replace(/href="(praxen|kanzleien|mittelstand)\.html(#[\w-]+)?"/g, (_, r, a) => `href="#${r}${a ? '/' + a.slice(1) : ''}"`)
  .replace(/src="\.\.\/design-system\/assets\/([\w.-]+\.svg)"/g, (_, f) => `src="${svgUri('../design-system/assets/' + f)}"`)
  .replace(/src="img\/([\w.-]+\.jpg)"/g, (_, f) => existsSync(join(root, 'img', f)) ? `src="${dataUri('img/' + f, 'image/jpeg')}"` : `src="" data-missing="${f}"`);

const head = partial('head');
const sprite = head.slice(head.indexOf('<svg'), head.indexOf('</svg>') + 6);
const mains = pages.map((p) => `<div class="route" data-route="${p.route}" data-title="${p.meta.TITLE.replace(/"/g, '&quot;')}" hidden>${p.main}</div>`).join('\n');

const router = `
<script>
(function(){
  var routes = document.querySelectorAll('.route');
  function show(){
    var h = (location.hash || '#start').slice(1).split('/');
    var r = h[0], anchor = h[1];
    var found = false;
    routes.forEach(function(el){ var on = el.getAttribute('data-route') === r; el.hidden = !on; if (on) { found = true; document.title = el.getAttribute('data-title'); document.body.setAttribute('data-page', r); } });
    if (!found) { routes[0].hidden = false; document.body.setAttribute('data-page', 'start'); }
    document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach(function(a){ a.removeAttribute('aria-current'); if (a.getAttribute('data-page') === (found ? r : 'start')) a.setAttribute('aria-current','page'); });
    document.querySelectorAll('.route:not([hidden]) .reveal').forEach(function(el){ el.classList.add('in'); });
    if (anchor) { var t = document.getElementById(anchor); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
})();
</script>`;

const bundle = `<title>Digital Avenue Prototyp</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap">
<style>${tokensCss}\n${siteCss}\n.route[hidden]{display:none}\n:root{color-scheme:light}</style>
${sprite}
${rewriteLinks(partial('nav'))}
${rewriteLinks(mains.replace(/\{\{CHECK_SECTION\}\}/g, partial('check-section')))}
${rewriteLinks(partial('footer'))}
${rewriteLinks(partial('check-dialog')).replace('<script src="js/site.js"></script>', `<script>${read('js/site.js')}</script>`).replace(/<\/body>\s*<\/html>\s*$/, '')}
${router}`;

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist/digital-avenue-prototyp.html'), bundle);
const missing = [...bundle.matchAll(/data-missing="([^"]+)"/g)].map((m) => m[1]);
console.log(`Bundle: ${(bundle.length / 1024 / 1024).toFixed(2)} MB`, missing.length ? `– fehlende Bilder: ${[...new Set(missing)].join(', ')}` : '');
