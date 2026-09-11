# Bricks 2.4: Was den Handoff verändert

Stand: Release Candidate, September 2026. Quellen: Bricks-Changelogs 2.4-beta bis
2.4-rc, Bricks Academy (AI Abilities and Skills), BricksExtras, Bricksfusion.
Die Bricks-Seiten selbst sind aus der Cloud-Umgebung gesperrt; Details vor dem
ersten Einsatz am Staging verifizieren.

## AI Abilities und nativer MCP-Server

- Bricks stellt Builder-Aktionen über die WordPress Abilities API und einen
  MCP-Endpunkt bereit: `https://<site>/wp-json/bricks-mcp/v1/mcp`.
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

## Verbindung prüfen (bei 404 oder Verbindungsfehlern)

Ein 404 am MCP-Endpunkt hat fast immer eine dieser Ursachen. In dieser
Reihenfolge prüfen, jeder Schritt vom eigenen Rechner aus:

1. **GET im Browser ist kein Test.** Der Endpunkt spricht Streamable HTTP und
   antwortet nur auf POST mit JSON-RPC. Ein 404 oder 405 beim Öffnen der URL
   im Browser sagt nichts aus.
2. **Route registriert?** `curl -s https://<site>/wp-json/ | jq .namespaces`
   muss `bricks-mcp/v1` enthalten. Fehlt der Namespace: Bricks-Version unter
   2.4, MCP-Server unter Bricks › AI nicht eingeschaltet, oder ein
   Sicherheits-Plugin blockiert die REST-API für Gäste.
3. **Permalinks.** Steht WordPress auf „Einfach“, gibt es kein `/wp-json/`.
   Entweder Permalinks auf „Beitragsname“ stellen oder den Endpunkt als
   `https://<site>/?rest_route=/bricks-mcp/v1/mcp` eintragen.
4. **Handshake mit Anwendungspasswort** (curl fragt das Passwort ab, es
   landet nicht in der History):

   ```
   curl -i -u "<wp-benutzer>" -X POST https://<site>/wp-json/bricks-mcp/v1/mcp \
     -H "Content-Type: application/json" \
     -H "Accept: application/json, text/event-stream" \
     -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl","version":"1"}}}'
   ```

   200 mit `serverInfo`: Endpunkt in Ordnung, Problem liegt beim Client.
   401 `rest_forbidden`: Passwort, Benutzer ohne Builder-Zugang oder
   Ability für diesen Benutzer nicht freigegeben. 404 `rest_no_route`:
   zurück zu Schritt 2.
5. **Staging-Schutz.** Wartungsmodus, „Coming soon“ oder Basic Auth per
   .htaccess liefern für nicht eingeloggte Aufrufe 404, 401 oder 503. Für
   die MCP-Route eine Ausnahme setzen oder den Schutz auf Staging abschalten.
6. **Abgelaufene MCP-Sitzung.** Claude Code hält die `Mcp-Session-Id` fest.
   Wird der Server neu gestartet oder der Cache geleert, antwortet er auf die
   alte ID mit 404 „Session not found“, und `/mcp` zeigt trotzdem
   „connected“. Abhilfe: Claude Code neu starten oder den Server über `/mcp`
   neu verbinden.

**Client richtig wählen.** Ein claude.ai-Connector erwartet OAuth oder einen
Endpunkt ohne Anmeldung; ein Anwendungspasswort (Basic Auth) lässt sich dort
nicht hinterlegen. Der passende Ort ist die MCP-Konfiguration von Claude Code
auf dem eigenen Rechner, mit dem Passwort in einer Umgebungsvariable:

```json
{
  "mcpServers": {
    "bricks": {
      "type": "http",
      "url": "https://<site>/wp-json/bricks-mcp/v1/mcp",
      "headers": { "Authorization": "Basic ${BRICKS_MCP_AUTH}" }
    }
  }
}
```

`BRICKS_MCP_AUTH` ist `base64("<benutzer>:<anwendungspasswort>")` und steht
in der Shell-Umgebung, nicht in der Datei. Die Cloud-Umgebung von Claude Code
erreicht die Staging-Domain nur, wenn sie in der Netzwerkrichtlinie der
Umgebung freigegeben ist.

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
