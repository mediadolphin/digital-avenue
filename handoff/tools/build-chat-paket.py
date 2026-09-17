#!/usr/bin/env python3
"""Bündelt die Projektdateien für das Claude-Projektwissen in eine Markdown-Datei.
Aufruf: python3 handoff/tools/build-chat-paket.py
Ergebnis: handoff/chat-paket/digital-avenue-projektwissen.md
Die Datei im Claude-Projekt als Projektwissen hochladen und bei Änderungen ersetzen."""
import datetime, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FILES = [
    ("Projektstand", "handoff/STATUS.md"),
    ("Merkregeln und Entscheidungen", "handoff/MERKREGELN.md"),
    ("Briefing", "BRIEFING.md"),
    ("Kampagne: Start", "handoff/kampagne/00_START_HIER.md"),
    ("Kampagne: Konzept", "handoff/kampagne/01_Kampagnenkonzept.md"),
    ("Kampagne: Mailingtexte", "handoff/kampagne/02_Mailingtexte.md"),
    ("Kampagne: Landingpage-Texte", "handoff/kampagne/03_Landingpage_Texte.md"),
    ("Technisches Protokoll Bricks", "handoff/import/README.md"),
]

def demote(md):
    """Überschriften eine Ebene tiefer, damit die Teildateien unter H1-Abschnitten stehen."""
    return re.sub(r"^(#{1,5}) ", lambda m: "#" + m.group(1) + " ", md, flags=re.M)

parts = [f"# Digital Avenue: Projektwissen für den Chat\n\nStand {datetime.date.today():%d.%m.%Y}. "
         "Automatisch aus dem Repository `mediadolphin/digital-avenue` gebündelt "
         "(`handoff/tools/build-chat-paket.py`). Bei jedem neuen Thema zuerst "
         "„Projektstand“ und „Merkregeln“ lesen.\n\n## Inhalt\n\n"
         + "\n".join(f"{i+1}. {t} (`{p}`)" for i, (t, p) in enumerate(FILES)) + "\n"]
for title, path in FILES:
    full = os.path.join(ROOT, path)
    if not os.path.exists(full):
        continue
    parts.append(f"\n\n---\n\n# {title}\n\nQuelle: `{path}`\n\n" + demote(open(full, encoding="utf-8").read().strip()))
out = os.path.join(ROOT, "handoff/chat-paket/digital-avenue-projektwissen.md")
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, "w", encoding="utf-8").write("\n".join(parts) + "\n")
print(out, f"{os.path.getsize(out)//1024} KB")
