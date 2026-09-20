---
name: bricks-connect
description: Verbindet eine WordPress-Site mit Bricks 2.4 (WordPress MCP Adapter) mit Claude Code oder prüft eine bestehende Verbindung. Verwenden, wenn eine neue Bricks-Site angebunden werden soll, wenn der Nutzer die Client-Anleitung aus Bricks › AI („Prompt aus Bricks“, npx mcp-wordpress-remote, WP_API_URL) einfügt, wenn eine zweite Site auf demselben Server dazukommt, oder wenn die MCP-Verbindung zu einer Bricks-Site nicht startet (401, 404, rest_forbidden, „command not found“, TAR_ENTRY_ERROR, EBADENGINE). Erzeugt den Eintrag für .mcp.json, prüft Server-Voraussetzungen ohne Anmeldung, testet den Handshake mit Anwendungspasswort und legt das Passwort im macOS-Schlüsselbund ab.
---

**Voraussetzung:** Bricks 2.4 oder neuer, WordPress Abilities API und WordPress MCP Adapter aktiv, Bricks › AI eingeschaltet.

# Bricks-Site mit Claude Code verbinden

Ziel: eine Bricks-Site in wenigen Minuten anbinden, ohne dass ein Passwort
im Chat, in einer Datei oder im Repository landet, und ohne die
npx-Brücke, die Bricks › AI vorschlägt.

## Grundsätze

- **Direkte HTTP-Verbindung, keine npx-Brücke, kein claude.ai-Connector.**
  Ein Eintrag vom Typ `http` in `.mcp.json` zeigt auf
  `https://<site>/wp-json/mcp/mcp-adapter-default-server` und schickt
  `Authorization: Basic ${VARIABLE}`. Die Brücke
  `@automattic/mcp-wordpress-remote` braucht Node 20, einen intakten
  npx-Cache und Variablen im Prozess; bei zwei Sites startet sie parallel
  und zerstört ihren eigenen Cache. Der Connector versucht OAuth, das
  Bricks nicht kennt.
- **Eine Variable je Site.** `BRICKS_MCP_AUTH_<HOST>` (Host in
  Großbuchstaben, Punkte als Unterstrich), Inhalt Base64 von
  `<wp-login>:<anwendungspasswort>`. Die erste Site des Projekts darf
  historisch `BRICKS_MCP_AUTH` heißen.
- **Passwort nur im Schlüsselbund oder in der Shell-Sitzung.** Der Nutzer
  legt es selbst an; Claude fragt nie danach und bekommt es nie zu sehen.
  Steht ein Passwort im Chat, in einem Screenshot oder in einer Datei: in
  WordPress widerrufen, neues anlegen.
- **Der WordPress-Anmeldename zählt**, nicht der Anzeigename. Bricks › AI
  zeigt beides als „Anzeigename (login)“.
- **Zwei Sites auf demselben Server sind kein Problem.** Jede hat eigene
  Datenbank, eigenen Benutzer, eigenes Anwendungspasswort, eigenes Plugin.
  Der Eintrag ist je Site eigenständig.

## Skript

`scripts/bricks-connect.sh` bündelt die Schritte. Claude führt `check` und
`config` aus; `test` und `keychain` laufen im Terminal des Nutzers, weil
sie das Passwort abfragen.

```
bricks-connect.sh check    <site-url>                       Voraussetzungen ohne Anmeldung
bricks-connect.sh test     <site-url> -u <wp-login>         Handshake, Abilities zählen
bricks-connect.sh config   <site-url> [-n name] [-v VAR] [--write .mcp.json] [--force]
bricks-connect.sh keychain <site-url> -u <wp-login> [-v VAR]  macOS: Passwort ablegen
bricks-connect.sh all      <site-url> -u <wp-login>         alles nacheinander
```

Ausgabezeilen beginnen mit `[OK]`, `[WARN]` oder `[FAIL]`; Rückgabewert 0
bedeutet alles in Ordnung.

## Ablauf

### 0. Eingaben einsammeln

Gebraucht werden Site-URL, WordPress-Anmeldename und ein Servername
(Standard: Host mit Bindestrichen, etwa `mediadolphin-net`).

Fügt der Nutzer die Client-Anleitung aus Bricks › AI ein, daraus
ablesen: `WP_API_URL` ist die Site, `WP_API_USERNAME` der Anmeldename.
Den `npx`-Block ignorieren. Enthält die Anleitung ein Passwort, den Nutzer
bitten, es zu widerrufen, bevor es weitergeht.

### 1. Server prüfen (Claude, ohne Anmeldung)

```bash
.claude/skills/bricks-connect/scripts/bricks-connect.sh check https://<site>
```

| Ergebnis | Bedeutung | Nächster Schritt |
|---|---|---|
| REST-Wurzel `[OK]`, Endpunkt 401 `[OK]` | Server bereit | Schritt 2 |
| HTML-404 auf `/wp-json/` | Rewrite-Regeln fehlen (typisch Plesk ohne `.htaccess`) | Standard-`.htaccess` von WordPress anlegen, Permalinks einmal speichern |
| `rest_no_route` | MCP-Adapter-Plugin oder Abilities API nicht aktiv | Plugins im Admin aktivieren |
| Handshake ohne Anmeldung 200 `[WARN]` | Aus der Cloud-Umgebung setzt der Proxy die Anmeldung ein; vom Mac aus wäre der Endpunkt offen | In der Cloud normal; vom Mac aus den Server prüfen |
| Keine Verbindung (403 CONNECT) | Cloud-Netzwerkrichtlinie kennt den Host nicht | Host freigeben oder vom Mac prüfen |

Aus der Cloud-Umgebung sagt der Test nur etwas über Erreichbarkeit und
Rewrite. Anmeldung und Bricks › AI werden vom Mac aus geprüft.

### 2. Eintrag anlegen (Claude)

```bash
.claude/skills/bricks-connect/scripts/bricks-connect.sh config https://<site> --write .mcp.json
```

Das fügt den Server in die `.mcp.json` des Projekts ein, bestehende
Einträge bleiben. Für eine Site, die zu einem anderen Projekt gehört, in
dessen Repository schreiben. Soll die Site in jedem Projekt verfügbar sein,
den ausgegebenen Block ohne `--write` nehmen und mit
`claude mcp add-json -s user <name> '<block>'` auf Benutzerebene anlegen.

### 3. Passwort ablegen und testen (Nutzer im Terminal)

In WordPress: Benutzer › Profil › Anwendungspasswörter, Name „Claude Code
<Rechner>“, Passwort kopieren. Dann im Terminal:

```bash
.claude/skills/bricks-connect/scripts/bricks-connect.sh keychain https://<site> -u <wp-login>
.claude/skills/bricks-connect/scripts/bricks-connect.sh test     https://<site> -u <wp-login>
```

`keychain` speichert das Passwort im macOS-Schlüsselbund (Dienst
`bricks-mcp/<host>`) und gibt die `export`-Zeile für `~/.zshrc` aus, die
die Variable beim Start jeder Shell aus dem Schlüsselbund baut. Danach
neues Terminal, Claude Code daraus starten.

Ohne Schlüsselbund geht die Variable für eine Sitzung so, ohne History:

```bash
read -rsp 'Anwendungspasswort: ' PW; export BRICKS_MCP_AUTH_<HOST>=$(printf '%s:%s' '<wp-login>' "$PW" | base64); unset PW
```

`test` meldet bei Erfolg Servername, Anzahl der direkten Tools, Anzahl der
Abilities und die Bricks-Version. Fehlerbilder:

| Meldung | Ursache | Abhilfe |
|---|---|---|
| 401 `incorrect_password` / `invalid_username` | Passwort oder Anmeldename | Anmeldename (login) prüfen, Passwort neu anlegen |
| 401 `rest_forbidden` vom Mac | Authorization-Header erreicht PHP nicht (Apache mit PHP-FPM) | `.htaccess` vor dem WordPress-Block: `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`; im Rewrite-Block `RewriteCond %{HTTP:Authorization} ^(.*)` und `RewriteRule ^ - [E=HTTP_AUTHORIZATION:%1]`; notfalls `CGIPassAuth On` |
| 401 `rest_forbidden` nur aus der Cloud | Proxy setzt eine veraltete Anmeldung ein | Umgebungseinstellungen aktualisieren (Schritt 4) |
| Tools ohne `bricks-*` | Bricks › AI, „Enable Bricks abilities“ aus | Schalter einschalten |
| Abilities „x von y aktiviert“ mit großem Rest | Abilities einzeln abgeschaltet | Unter Bricks › AI prüfen, nur bewusst deaktivieren |

### 4. Cloud-Umgebung von Claude Code (falls genutzt)

In den Umgebungseinstellungen unter „API-Anmeldedaten“ einen Eintrag für
den Host anlegen: Typ Basic, Benutzer und Anwendungspasswort. Den Host in
der Netzwerkrichtlinie freigeben. Der Proxy ersetzt den Authorization-
Header an diesen Host; die Variable muss dort nicht gesetzt sein. Gilt ab
der nächsten Sitzung.

### 5. In der Sitzung verifizieren (Claude)

Nach Neustart von Claude Code (oder `/mcp`) erscheinen die Tools als
`mcp__<servername>__…`. Prüfen:

```
mcp-adapter-execute-ability
  ability_name: "bricks/get-mcp-version"
mcp-adapter-execute-ability
  ability_name: "bricks/list-ability-status"
```

Erwartet: Bricks 2.4+, `abilitiesApiActive: true`, Abilities überwiegend
aktiviert. Dann `bricks/get-design-context` lesend aufrufen und dem Nutzer
zusammenfassen, was die Site schon enthält. Nichts schreiben.

### 6. Festhalten

Im Projekt der Site notieren (Status- oder Merkregel-Datei): Servername,
Variable, Anmeldename, Datum, Ergebnis von `test`. Kein Passwort.

## Häufige Fehlerbilder aus Logs

- `sh: mcp-wordpress-remote: command not found`, `TAR_ENTRY_ERROR ENOENT`,
  `Cannot cd into …/_npx/…`: die npx-Brücke wird benutzt und ihr Cache ist
  zerstört, meist weil zwei Server gleichzeitig starten. Umstellen auf den
  HTTP-Eintrag. Cache aufräumen mit `rm -rf ~/.npm/_npx`.
- `EBADENGINE … required: { node: '>=20' }`: Node zu alt für die Brücke.
  Mit dem HTTP-Eintrag ist Node nicht mehr beteiligt.
- OAuth-Schleife mit `/authorize` und `/register` im Log: die Site wurde als
  claude.ai-Connector angelegt. Connector entfernen, HTTP-Eintrag nutzen.
- `Missing Mcp-Session-Id header` bei eigenen curl-Tests: der Handshake
  liefert die Session-ID im Antwort-Header, jede weitere Anfrage schickt
  sie als `Mcp-Session-Id` mit. Das Skript macht das automatisch.

## Nicht tun

- Kein Passwort in Chat, `.mcp.json`, Umgebungsdatei im Repository oder
  Kommandozeilenargument. Das Skript liest es nur ohne Echo oder von stdin.
- Keine Verbindungstests aus der Cloud als Beleg für den Server nehmen; der
  Proxy verfälscht die Anmeldung.
- Nicht `index.php?rest_route=` als Endpunkt eintragen; Rewrite reparieren.
- Den Servernamen einer bestehenden Site nicht umbenennen; Berechtigungen
  und Merkregeln verweisen auf den Namen.
