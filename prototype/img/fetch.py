"""Lädt die Motive aus sources.json, verkleinert sie und legt sie als JPEG ab.
Erzeugt außerdem einen Kontaktbogen (contact-sheet.jpg) zur Sichtung."""
import json, io, os, sys
import requests
from PIL import Image, ImageOps, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
src = json.load(open(os.path.join(HERE, "sources.json"), encoding="utf-8"))
thumbs = []
for item in src["images"]:
    name, url = item["name"], item["url"]
    width = int(item.get("width", 1600))
    quality = int(item.get("quality", 80))
    out = os.path.join(HERE, name + ".jpg")
    if os.path.exists(out) and not item.get("force"):
        img = Image.open(out)
    else:
        r = requests.get(url, timeout=120)
        r.raise_for_status()
        img = Image.open(io.BytesIO(r.content)).convert("RGB")
        if img.width > width:
            img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
        img.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
        print(f"{name}: {img.width}x{img.height}, {os.path.getsize(out)//1024} KB")
    t = ImageOps.fit(img.copy(), (360, 270), Image.LANCZOS)
    ImageDraw.Draw(t).text((8, 8), name, fill=(255, 255, 255))
    ImageDraw.Draw(t).text((7, 7), name, fill=(25, 36, 43))
    thumbs.append(t)

cols = 3
rows = (len(thumbs) + cols - 1) // cols
sheet = Image.new("RGB", (cols * 372, rows * 282), (242, 239, 233))
for i, t in enumerate(thumbs):
    sheet.paste(t, (6 + (i % cols) * 372, 6 + (i // cols) * 282))
sheet.save(os.path.join(HERE, "contact-sheet.jpg"), "JPEG", quality=70)
print("Kontaktbogen:", len(thumbs), "Motive")
