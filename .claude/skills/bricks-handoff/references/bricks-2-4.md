# Bricks 2.4: Was den Handoff verändert

Stand: Release Candidate, September 2026. Quellen: Bricks-Changelogs 2.4-beta bis
2.4-rc, Bricks Academy (AI Abilities and Skills), BricksExtras, Bricksfusion.
Die Bricks-Seiten selbst sind aus der Cloud-Umgebung gesperrt; Details vor dem
ersten Einsatz am Staging verifizieren.

## AI Abilities und nativer MCP-Server

- Bricks stellt Builder-Aktionen über die WordPress Abilities API und den
  WordPress MCP Adapter bereit. Endpunkt (am Staging bestätigt):
  `https://<site>/index.php?rest_route=/mcp/mcp-adapter-default-server`.
  Der Client spricht ihn nicht direkt an, sondern über die stdio-Brücke
  `@automattic/mcp-wordpress-remote` (npx), die Benutzer und Passwort aus der
  Prozessumgebung liest (`WP_API_URL`, `WP_API_USERNAME`, `WP_API_PASSWORD`).
- Authentifizierung mit einem WordPress-Anwendungspasswort (Benutzer › Profil).
  Das Passwort gehört in die MCP-Konfiguration des Clients (Umgebungsvariable
  oder Header), nie in URL, Kommandozeile, Repository oder Chat.
- Abilities (Stand RC): Seite, Element, Template, Component, Global Data,
  Design System, Dynamic Data, Query Loop, Navigationsmenü, WooCommerce-Setup,
  Remote Templates, Import/Export, HTML-zu-Bricks. Einzeln schaltbar unter
  Bricks › AI, dort auch Verbindungsstatus und Client-Anleitung.
- Folge für diesen Skill: Phase 3 bis 5 können statt über JSON-Importe direkt
  über MCP laufen, sofern die Staging-Domain aus der Umgebung erreichbar ist.
  Reihenfolge bleibt gleich: erst Design System (Farben, Variablen, Global
  Classes), dann Components, dann Templates und Seiten. Ohne MCP-Zugang gilt
  weiter der Dateiweg aus `frameworks.md`.

## Verbindung einrichten und prüfen

**Nicht als claude.ai-Connector.** Ein Connector startet einen OAuth-Handshake;
Bricks hat keinen OAuth-Server, der Handshake endet in einer 404-Schleife.
Der Server gehört in die MCP-Konfiguration von Claude Code (Terminal oder
Desktop-App), Vorlage in `.mcp.json` im Projekt:

```json
{
  "mcpServers": {
    "relaunch-digital-avenue-de": {
      "command": "npx",
      "args": ["-y", "@automattic/mcp-wordpress-remote@latest"],
      "env": {
        "WP_API_URL": "https://<site>/index.php?rest_route=/mcp/mcp-adapter-default-server",
        "WP_API_USERNAME": "${WP_API_USERNAME}",
        "WP_API_PASSWORD": "${WP_API_PASSWORD}"
      }
    }
  }
}
```

Benutzer und Anwendungspasswort stehen nur in der Shell-Umgebung des
Rechners, der Claude Code startet, nie in der Datei, im Repository oder im
Chat. Passwort abfragen, ohne dass es in der History landet:

```
read -rsp 'Anwendungspasswort: ' WP_API_PASSWORD; export WP_API_PASSWORD; export WP_API_USERNAME=<wp-benutzer>
```

Bricks erzeugt unter Bricks › AI eine fertige Client-Anleitung. Sie enthält
das Passwort im Klartext: nur als Vorlage nutzen, Passwort durch die Variable
ersetzen. Ein Passwort, das einmal im Chat oder in einer Datei stand, in
WordPress widerrufen und neu anlegen.

Prüfen: Claude Code im Projekt neu starten, `/mcp` aufrufen, dann im Chat
„Liste die verfügbaren Bricks-Abilities“. Erscheint keine Liste, ist der
Client nicht verbunden. Typische Ursachen:

1. **npx fehlt.** Node.js 18 oder neuer muss auf dem Rechner installiert sein.
2. **401 rest_forbidden.** Passwort falsch, Benutzer ohne Builder-Zugang oder
   Ability für diesen Benutzer unter Bricks › AI nicht freigegeben.
3. **404 rest_no_route.** MCP Adapter nicht aktiv oder Bricks-Version unter
   2.4. Test ohne Anmeldung vom eigenen Rechner:
   `curl -s "https://<site>/index.php?rest_route=/" | jq .namespaces`
   muss einen `mcp`-Namespace zeigen.
4. **Staging-Schutz.** Wartungsmodus, Coming-soon-Plugin oder Basic Auth per
   .htaccess sperren nicht eingeloggte Aufrufe. Für die MCP-Route Ausnahme
   setzen.
5. **Cloud-Umgebung.** Claude Code in der Cloud erreicht die Domain nur, wenn
   sie in der Netzwerkrichtlinie der Umgebung freigegeben ist und die beiden
   Variablen dort als Umgebungsvariablen hinterlegt sind. Stand 11.09.2026:
   `relaunch.digital-avenue.de` ist gesperrt (Proxy 403).

## HTML-zu-Bricks

Eine Ability wandelt HTML in Bricks-Elemente um. Damit lässt sich ein Prototyp
abschnittsweise übertragen. Vorgehen: einen Abschnitt (Hero) umwandeln, im
Builder prüfen, ob Klassen als Global Classes erkannt und Bilder als Medien
angelegt wurden. Erst dann breit einsetzen.

## CSS Sync (bidirektional)

Custom CSS an Elementen und Global Classes wird mit den Style-Controls
synchronisiert: unterstützte Deklarationen erscheinen in den Controls,
Änderungen an Controls schreiben ins CSS zurück, Unbekanntes bleibt stehen.
Custom CSS hat bei Konflikten Vorrang. Breakpoint und Pseudoklasse werden
berücksichtigt; verschachtelte Media Queries werden responsiven Controls
zugeordnet. Folge: Prototyp-CSS je Klasse in die Global Class einfügen,
Bricks erzeugt die Controls.

## Globaler Import/Export

- Vereinheitlichter Export für komplette Design Systems samt
  Builder-Konfiguration (Layouts, Profile).
- Components lassen sich im Component Manager aus einer anderen
  Bricks-Installation importieren, mit verschachtelten Abhängigkeiten, Global
  Classes, Variablen, Paletten und optional Bildern.
- Folge: Design System einmal auf einer Werkstatt-Installation bauen und in
  Kundenprojekte ziehen.

## Weitere Punkte

- Bricks Browser: zentrale Übersicht für Seiten, Templates, Components,
  Post-Types, mit Medien-Workflow.
- Builder-Layouts und Interface-Profile, speicher- und exportierbar.
- Stile kopieren und verschieben inklusive Breakpoints, Selektoren und
  Pseudoklassen; beim Einfügen Breakpoint erhalten oder auf den aktiven
  anwenden; zusammenführen oder überschreiben.
- Offcanvas-Richtung je Breakpoint; Ausgabe-Reihenfolge der Global Classes
  folgt dem Class Manager (Modifier wie `.on-dark` nach der Basisklasse
  einsortieren); Farbpaletten im Variablen-Manager und Sync mit Gutenberg;
  SVG-Uploads in eigenen Icon-Sets; Cloudflare Turnstile im Formular verzögert.
- Seit 2.2 vorhanden: Color Manager mit Hell- und Dunkelwert je Farbe, Element
  „Toggle – Mode“, Attribut `data-brx-theme` auf `html`, localStorage `brx_mode`.
