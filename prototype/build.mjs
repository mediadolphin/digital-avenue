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

// 3) Style Guide -----------------------------------------------------------
// Rendert Farben, Typografie und alle Komponenten mit dem echten CSS; die Komponenten
// werden aus den Seitenquellen extrahiert, damit Guide und Seiten nie auseinanderlaufen.
{
  const guideSrc = read('src/styleguide.html');
  const rawTokens = readFileSync(join(root, '../design-system/colors_and_type.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const grab = (selectorRe) => {
    const vars = {};
    for (const m of rawTokens.matchAll(new RegExp(`(?:^|})\\s*${selectorRe}\\s*\\{([^}]*)\\}`, 'g'))) {
      for (const d of m[1].split(';')) { const i = d.indexOf(':'); if (i < 0) continue; const k = d.slice(0, i).trim(), v = d.slice(i + 1).trim(); if (k.startsWith('--') && v) vars[k] = v; }
    }
    return vars;
  };
  const light = grab(':root'), dark = grab(':root\\[data-brx-theme="dark"\\]');
  const GROUPS = [
    ['Marke: Teal', { '--da-teal': 'Markenfarbe, Links, Icons, H1-Betonung', '--da-teal-hover': 'Hover für Text und Kontur', '--da-teal-fill': 'Gefüllte Flächen mit weißem Text', '--da-teal-fill-hover': 'Hover der gefüllten Flächen', '--da-teal-text': 'Eyebrow, Zähler, Karten-Fuß', '--da-teal-subtle': 'Zähler-Kreis, Ghost-Hover, Code', '--da-teal-dark': 'Nav/Footer-Blau, Chip-Text, Sand-Button-Text', '--da-teal-deeper': 'Tiefste Fläche: Concierge, Deep-Kachel, Dialog-Backdrop' }],
    ['Akzent: Sand', { '--da-sand': 'Eyebrow auf dunkel, Haken im Check, Footer-Hover', '--da-sand-hover': 'Hover Sand-Button', '--da-sand-text': 'Labels (tile-num, sc-label, ref-kind), Tags', '--da-sand-dark': 'Reserve', '--da-sand-subtle': 'Sand-Kachel, Tag-Hintergrund, Light-Button-Hover' }],
    ['Akzent: Plum (angelegt, nicht eingesetzt)', { '--da-plum': 'Reserve', '--da-plum-hover': '', '--da-plum-light': 'Badge im Style Guide', '--da-plum-text': '', '--da-plum-subtle': '' }],
    ['Flächen und Text', { '--da-bg': 'Seitenhintergrund, Felder', '--da-bg-alt': 'Wechselnde Abschnitte, Leitbild', '--da-card-bg': 'Karten, Kacheln, Dialog, Tabs', '--da-text': 'Überschriften, Fließtext', '--da-muted': 'Absätze, Labels, Wortmarken', '--da-border': 'Konturen, Trennlinien' }],
    ['Hero-Verlauf', { '--da-hero-from': 'Hero oben', '--da-hero-to': 'Hero unten' }],
    ['Navigation und Footer', { '--da-nav-bg': 'Footer-Hintergrund', '--da-nav-text': 'Footer-Titel', '--da-nav-muted': 'Footer-Links und -Text', '--da-nav-border': 'Footer-Trennlinie' }],
    ['Schatten- und Glasfarben (Hell/Dunkel im Color Manager)', { '--da-ink-soft': 'Leichte Schattenebene', '--da-ink': 'Mittlere Schattenebene', '--da-ink-strong': 'Kräftige Schattenebene', '--da-teal-glow': 'Schein des Primär-Buttons', '--da-teal-glow-strong': 'Schein beim Hover', '--da-nav-shadow': 'Navigation beim Scrollen', '--da-glass': 'Service-Karte auf Fotos', '--da-glass-border': 'Rand der Glaskarte', '--da-glass-sand': 'Glaskarte Variante sand', '--da-chip-bg': 'Mosaik-Chip', '--da-chip-text': 'Text im Mosaik-Chip', '--da-step-bg': 'Kreis der Schritt-Nummer', '--da-deep-border': 'Rand dunkler Flächen, hell unsichtbar', '--da-wordmark': 'Text-Wortmarken der Referenzen', '--da-glow-sand': 'Hero-Schein Start', '--da-glow-sand-soft': 'Hero-Schein Landingpage' }],
    ['Status', { '--da-success': 'Status „erledigt“, Erfolgskreis', '--da-success-subtle': 'Erfolgskreis-Hintergrund', '--da-warning': 'Badge im Style Guide', '--da-warning-subtle': '', '--da-error': 'Formularfehler', '--da-error-subtle': '' }],
  ];
  const colors = GROUPS.map(([title, map]) => `<div class="sg-group-title">${title}</div><div class="sg-swatches">` +
    Object.entries(map).map(([k, use]) => `<div class="sg-swatch"><div class="sg-swatch-color" style="background:var(${k})"></div><div class="sg-swatch-body"><b>${k}</b><span>Hell ${light[k] || '–'}</span><span>Dunkel ${dark[k] || 'wie hell'}</span>${use ? `<span style="margin-top:4px;color:var(--da-text)">${use}</span>` : ''}</div></div>`).join('') + '</div>').join('');

  const icons = [...partial('head').matchAll(/<symbol id="([\w-]+)"/g)].map((m) => `<div class="sg-icon"><svg><use href="#${m[1]}"/></svg>${m[1]}</div>`).join('');

  const sectionOf = (page, n) => {
    const src = read(`src/pages/${page}.html`);
    const blocks = [...src.matchAll(/<section[\s\S]*?<\/section>/g)].map((m) => m[0]);
    if (!blocks[n]) throw new Error(`Abschnitt ${n} in ${page} fehlt`);
    return blocks[n].replace(/\{\{CHECK_SECTION\}\}/g, partial('check-section'));
  };
  const dialogDemo = partial('check-dialog').match(/<dialog[\s\S]*?<\/dialog>/)[0]
    .replace('<dialog class="check-dialog"', '<dialog class="check-dialog" open')
    .replace(/id="/g, 'id="sg-').replace(/for="/g, 'for="sg-').replace(/aria-labelledby="/g, 'aria-labelledby="sg-')
    .replace(/name="audience"/g, 'name="sg-audience"').replace(/ data-close-check/g, '').replace(/<form class="form"/, '<form class="form" onsubmit="return false"');

  const today = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const fill = (s) => s
    .replace('{{DATE}}', today).replace('{{COLORS}}', colors).replace('{{ICONS}}', icons)
    .replace(/\{\{SEC:(\w+):(\d+)\}\}/g, (_, p, n) => sectionOf(p, Number(n)))
    .replace('{{NAV}}', partial('nav')).replace('{{FOOTER}}', partial('footer'))
    .replace('{{CHECK_SECTION}}', partial('check-section')).replace('{{DIALOG_DEMO}}', dialogDemo);
  const guideBody = fill(guideSrc);
  const guideHead = partial('head')
    .replace('{{TITLE}}', 'Style Guide – Digital Avenue').replace('{{DESC}}', 'Farben, Typografie und Komponenten des Digital-Avenue-Redesigns.').replace('{{PAGE}}', 'styleguide')
    .replace('<link rel="stylesheet" href="css/site.css">', '<link rel="stylesheet" href="css/site.css">\n<link rel="stylesheet" href="css/styleguide.css">');
  writeFileSync(join(root, 'styleguide.html'), guideHead + guideBody + partial('check-dialog'));

  const guideCss = read('css/styleguide.css');
  const guideBundle = `<title>Digital Avenue Style Guide</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap">
<style>${tokensCss}\n${siteCss}\n${guideCss}</style>
${guideHead.slice(guideHead.indexOf('<script>'), guideHead.indexOf('</script>') + 9)}
${sprite}
${rewriteLinks(guideBody)}
${rewriteLinks(partial('check-dialog')).replace('<script src="js/site.js"></script>', `<script>${read('js/site.js')}</script>`).replace(/<\/body>\s*<\/html>\s*$/, '')}`;
  writeFileSync(join(root, 'dist/styleguide.html'), guideBundle);
  console.log(`Style Guide: styleguide.html, dist/styleguide.html (${(guideBundle.length / 1024 / 1024).toFixed(2)} MB)`);
}
