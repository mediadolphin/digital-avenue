#!/usr/bin/env node
// Node-Port der Regeln aus svg-bricks-optimizer.html (Browser-Tool), damit der
// Import-Build dieselben Bricks-fertigen SVGs erzeugt.
// Regeln: width/height am Root entfernen, viewBox sicherstellen, version/xml:space/
// enable-background/data-name entfernen, fill und stroke auf currentColor (außer
// none, currentColor, transparent, inherit, url()), Inline-Styles ebenso, jede
// Form ohne Klasse bekommt bx1, bx2 …, ungenutzte xlink-Namespaces entfernen.
// Aufruf als Modul: optimizeSVG(text) → { output, changes }
// Aufruf als CLI:   node svg-bricks-optimize.mjs <ein.svg> [<aus.svg>]

const NEUTRAL = new Set(['none', 'currentcolor', 'transparent', 'inherit']);
const SHAPES = new Set(['path', 'circle', 'rect', 'ellipse', 'polygon', 'polyline', 'line']);
const skipColor = v => !v || NEUTRAL.has(v.trim().toLowerCase()) || v.trim().toLowerCase().startsWith('url(');

function patchAttrs(attrs, c, tag) {
  attrs = attrs.replace(/\sdata-name="[^"]*"/g, '');
  attrs = attrs.replace(/\sfill="([^"]*)"/g, (m, v) => skipColor(v) ? m : (c.fill++, ' fill="currentColor"'));
  attrs = attrs.replace(/\sstroke="([^"]*)"/g, (m, v) => skipColor(v) ? m : (c.stroke++, ' stroke="currentColor"'));
  attrs = attrs.replace(/\sstyle="([^"]*)"/g, (m, style) => {
    const next = style
      .replace(/\bfill\s*:\s*([^;]+)/gi, (_, v) => skipColor(v.trim()) ? `fill:${v.trim()}` : 'fill:currentColor')
      .replace(/\bstroke\s*:\s*([^;]+)/gi, (_, v) => skipColor(v.trim()) ? `stroke:${v.trim()}` : 'stroke:currentColor');
    if (next !== style) c.style++;
    return ` style="${next}"`;
  });
  if (SHAPES.has(tag) && !/\sclass="/.test(attrs)) { c.counter++; c.classes++; attrs += ` class="bx${c.counter}"`; }
  return attrs;
}

export function optimizeSVG(input) {
  let text = input.trim().replace(/^<\?xml[^?]*\?>\s*/i, '').replace(/<!--[\s\S]*?-->/g, '');
  const rootMatch = text.match(/<svg\b([^>]*)>/i);
  if (!rootMatch) return { output: input, changes: [{ text: 'Parse-Fehler – kein gültiges SVG', type: 'amber' }] };
  const log = [];
  let root = rootMatch[1];
  const attr = n => (root.match(new RegExp(`\\s${n}="([^"]*)"`)) || [])[1];
  const w = attr('width'), h = attr('height'), vb = attr('viewBox');
  if (!vb && (w || h)) {
    const nw = parseFloat(w) || 24, nh = parseFloat(h) || 24;
    root += ` viewBox="0 0 ${nw} ${nh}"`; log.push({ text: `viewBox="0 0 ${nw} ${nh}" gesetzt`, type: 'blue' });
  }
  if (w) { root = root.replace(/\swidth="[^"]*"/, ''); log.push({ text: `width="${w}" entfernt`, type: 'green' }); }
  if (h) { root = root.replace(/\sheight="[^"]*"/, ''); log.push({ text: `height="${h}" entfernt`, type: 'green' }); }
  for (const a of ['version', 'xml:space', 'enable-background', 'data-name']) {
    const re = new RegExp(`\\s${a.replace(':', '\\:')}="[^"]*"`);
    if (re.test(root)) { root = root.replace(re, ''); log.push({ text: `${a} entfernt`, type: 'green' }); }
  }
  const c = { fill: 0, stroke: 0, style: 0, classes: 0, counter: 0 };
  let body = text.slice(rootMatch.index + rootMatch[0].length);
  body = body.replace(/<([a-zA-Z][\w:-]*)\b([^>]*?)(\/?)>/g, (m, tag, attrs, self) => {
    if (tag.startsWith('/')) return m;
    return `<${tag}${patchAttrs(attrs, c, tag.toLowerCase())}${self}>`;
  });
  if (c.fill) log.push({ text: `${c.fill}× fill → currentColor`, type: 'blue' });
  if (c.stroke) log.push({ text: `${c.stroke}× stroke → currentColor`, type: 'blue' });
  if (c.style) log.push({ text: `${c.style}× Inline-Style bereinigt`, type: 'blue' });
  if (c.classes) log.push({ text: `${c.classes}× CSS-Klasse vergeben`, type: 'green' });
  if (!log.length) log.push({ text: 'Keine Änderungen nötig', type: 'green' });
  // Leere Elemente selbstschließend wie der XMLSerializer des Browsers.
  body = body.replace(/<([a-zA-Z][\w:-]*)\b([^>]*?)><\/\1>/g, '<$1$2/>');
  let out = `<svg${root}>${body}`;
  if (!out.includes('xlink:')) out = out.replace(/ xmlns:xlink="[^"]*"/g, '');
  if (!/\sxmlns="/.test(root)) out = out.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  return { output: out.trim(), changes: log };
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  const { readFileSync, writeFileSync } = await import('node:fs');
  const [src, dst] = process.argv.slice(2);
  if (!src) { console.error('Nutzung: svg-bricks-optimize.mjs <ein.svg> [<aus.svg>]'); process.exit(1); }
  const { output, changes } = optimizeSVG(readFileSync(src, 'utf8'));
  if (dst) writeFileSync(dst, output + '\n'); else console.log(output);
  console.error(changes.map(c => c.text).join(', '));
}
