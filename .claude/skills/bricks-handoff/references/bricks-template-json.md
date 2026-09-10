# Bricks-Template-JSON

Bricks exportiert Templates als JSON (Bricks, Templates, Zeile eines
Templates, Export). Das Format ist nicht öffentlich dokumentiert und
ändert sich zwischen Versionen. Deshalb:

1. In der Zielinstallation ein kleines Template anlegen (Section,
   Container, Heading, Text, Button) und exportieren.
2. Den Export im Projekt unter `handoff/reference-template.json` ablegen.
3. Struktur lesen: Elemente sind eine flache Liste mit `id`, `name`
   (Elementtyp), `parent`, `children`, `settings`. Global Classes werden
   über `settings._cssGlobalClasses` mit Klassen-IDs referenziert, die aus
   der Installation stammen.
4. Erst dann Templates erzeugen: Struktur aus dem Prototyp ableiten,
   Klassen-IDs aus dem Referenz-Export übernehmen, Import in Bricks
   testen, Ergebnis im Builder prüfen.

Ohne Referenz-Export keine Templates generieren. Ein Import mit falschen
IDs legt Klassen doppelt an oder verwirft Einstellungen still.
