# Bricks 2.4: Was den Handoff verändert

Stand: Release Candidate, September 2026. Quellen: Bricks-Changelogs 2.4-beta bis
2.4-rc, Bricks Academy (AI Abilities and Skills), BricksExtras, Bricksfusion.
Die Bricks-Seiten selbst sind aus der Cloud-Umgebung gesperrt; Details vor dem
ersten Einsatz am Staging verifizieren.

## AI Abilities und nativer MCP-Server

- Bricks stellt Builder-Aktionen über die WordPress Abilities API und den
  WordPress MCP Adapter bereit. Endpunkt (am Staging bestätigt):
  `https://<site>/wp-json/mcp/mcp-adapter-default-server` (setzt
  funktionierende Permalinks voraus; `index.php?rest_route=` ist nur eine
  Notlösung und kann die Brücke verwirren).
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
Bricks hat keinen OAuth-Server, der Handshake endet in einer 404-Schleife
(`/authorize`, `/register`). Auch Organisations-Connectors entfernen.

**Eine `.mcp.json` für beide Orte.** Direkte HTTP-Verbindung zum Endpunkt des
WordPress MCP Adapters, ohne npx-Brücke:

```json
{
  "mcpServers": {
    "relaunch-digital-avenue-de": {
      "type": "http",
      "url": "https://<site>/wp-json/mcp/mcp-adapter-default-server",
      "headers": { "Authorization": "Basic ${BRICKS_MCP_AUTH}" }
    }
  }
}
```

- **Auf dem eigenen Rechner:** `BRICKS_MCP_AUTH` ist Base64 von
  `<wp-benutzer>:<anwendungspasswort>`, gesetzt in der Shell, aus der Claude
  Code startet. Passwort abfragen, ohne dass es in der History landet:
  `read -rsp 'Anwendungspasswort: ' PW; export BRICKS_MCP_AUTH=$(printf '%s:%s' '<wp-benutzer>' "$PW" | base64); unset PW`
- **In der Cloud-Umgebung von Claude Code:** in den Umgebungseinstellungen
  unter „API-Anmeldedaten“ einen Eintrag für den Host anlegen, Typ Basic,
  Benutzer und Anwendungspasswort. Der Proxy ersetzt den Authorization-Header
  ausgehender Anfragen an diesen Host durch diese Anmeldung; die Variable muss
  dort nicht gesetzt sein. Dazu den Host in der Netzwerkrichtlinie freigeben.
  Änderungen gelten ab der nächsten Sitzung.
- Der WordPress-Anmeldename zählt, nicht der Anzeigename (Bricks › AI zeigt
  beides: „Anzeigename (login)“).

Die von Bricks vorgeschlagene stdio-Brücke `@automattic/mcp-wordpress-remote`
(Variablen `WP_API_URL`, `WP_API_USERNAME`, `WP_API_PASSWORD`) funktioniert
ebenfalls, braucht aber Node und die Variablen im jeweiligen Prozess.

**Voraussetzungen am Server**, in dieser Reihenfolge prüfen:

1. **Bricks › AI › „Enable Bricks abilities“ eingeschaltet.** Ohne den
   Schalter antwortet der Adapter, kennt aber keine Bricks-Abilities.
2. **Rewrite-Regeln.** `https://<site>/wp-json/` muss JSON liefern. Bei
   Plesk ohne `.htaccess` landet die Adresse in der Hoster-404, während
   `?rest_route=/` geht. Standard-`.htaccess` von WordPress anlegen.
3. **Authorization-Header an PHP.** Apache mit PHP-FPM verschluckt ihn; dann
   antwortet WordPress auf jede Anmeldung mit `rest_forbidden` statt
   `incorrect_password`. In die `.htaccess` vor den WordPress-Block:
   `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1` und im Rewrite-Block
   `RewriteCond %{HTTP:Authorization} ^(.*)` mit
   `RewriteRule ^ - [E=HTTP_AUTHORIZATION:%1]`; notfalls `CGIPassAuth On`.
4. **Handshake prüfen**, vom eigenen Rechner (curl fragt das Passwort ab):

   ```
   curl -i -u "<wp-benutzer>" -X POST https://<site>/wp-json/mcp/mcp-adapter-default-server \
     -H "Content-Type: application/json" \
     -H "Accept: application/json, text/event-stream" \
     -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl","version":"1"}}}'
   ```

   200 mit `serverInfo` heißt Server in Ordnung. 401 `incorrect_password`:
   Passwort oder Benutzer. 401 `rest_forbidden`: Header kommt nicht an
   (Punkt 3) oder, aus der Cloud, der Proxy ersetzt ihn durch eine veraltete
   Anmeldung. 404 mit HTML-Seite: Punkt 2. 404 `rest_no_route`: Adapter
   nicht aktiv.

Ein Passwort, das einmal im Chat, in einem Screenshot oder in einer Datei
stand, in WordPress widerrufen und neu anlegen.

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
