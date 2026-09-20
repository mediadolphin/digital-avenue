#!/usr/bin/env bash
# bricks-connect.sh: eine Bricks-Website (WordPress MCP Adapter) mit Claude Code verbinden.
#
# Befehle:
#   check    <site-url>                       Server-Voraussetzungen ohne Anmeldung prüfen
#   test     <site-url> -u <wp-login>         Handshake mit Anwendungspasswort, Abilities zählen
#   config   <site-url> [-n name] [-v VAR] [--write .mcp.json] [--force]
#                                             Eintrag für .mcp.json erzeugen oder einfügen
#   keychain <site-url> -u <wp-login> [-v VAR]
#                                             (macOS) Passwort im Schlüsselbund ablegen,
#                                             Zeile für die Shell-Konfiguration ausgeben
#   all      <site-url> -u <wp-login> [...]   check, test, config, keychain nacheinander
#
# Das Passwort wird immer abgefragt (ohne Echo) oder mit "-p -" von stdin gelesen.
# Es landet nie in Argumenten, Dateien, der Shell-History oder der Ausgabe.

set -u

SCRIPT_NAME=$(basename "$0")
ENDPOINT_PATH="/wp-json/mcp/mcp-adapter-default-server"
PROTO="2025-06-18"

usage() { sed -n '2,18p' "$0" | sed 's/^# \{0,1\}//'; exit "${1:-0}"; }
say()   { printf '%s\n' "$*"; }
ok()    { printf '  [OK]   %s\n' "$*"; }
warn()  { printf '  [WARN] %s\n' "$*"; }
fail()  { printf '  [FAIL] %s\n' "$*"; }
die()   { printf 'Fehler: %s\n' "$*" >&2; exit 2; }

need() { command -v "$1" >/dev/null 2>&1 || die "Programm fehlt: $1"; }
need curl

# ---------- Argumente ----------
[ $# -ge 1 ] || usage 1
CMD=$1; shift
case "$CMD" in check|test|config|keychain|all) ;; -h|--help|help) usage 0 ;; *) die "Unbekannter Befehl: $CMD" ;; esac
[ $# -ge 1 ] || die "Site-URL fehlt (z. B. https://mediadolphin.net)"
SITE=${1%/}; shift
case "$SITE" in http://*|https://*) ;; *) SITE="https://$SITE" ;; esac
HOST=$(printf '%s' "$SITE" | sed -E 's#^https?://##; s#/.*$##')
SLUG=$(printf '%s' "$HOST" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-//; s/-$//')
VAR_DEFAULT="BRICKS_MCP_AUTH_$(printf '%s' "$SLUG" | tr '[:lower:]-' '[:upper:]_')"

LOGIN=""; NAME="$SLUG"; VAR="$VAR_DEFAULT"; WRITE=""; FORCE=0; PW_FROM_STDIN=0
while [ $# -gt 0 ]; do
  case "$1" in
    -u|--user)   LOGIN=$2; shift 2 ;;
    -n|--name)   NAME=$2; shift 2 ;;
    -v|--var)    VAR=$2; shift 2 ;;
    -p)          [ "$2" = "-" ] || die "-p akzeptiert nur '-' (Passwort von stdin)"; PW_FROM_STDIN=1; shift 2 ;;
    --write)     WRITE=$2; shift 2 ;;
    --force)     FORCE=1; shift ;;
    -h|--help)   usage 0 ;;
    *) die "Unbekannte Option: $1" ;;
  esac
done

ENDPOINT="$SITE$ENDPOINT_PATH"
TMP=$(mktemp -d 2>/dev/null || mktemp -d -t bricks-connect)
trap 'rm -rf "$TMP"' EXIT

INIT_BODY='{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"'"$PROTO"'","capabilities":{},"clientInfo":{"name":"bricks-connect","version":"1"}}}'

# json_get <datei> <python-ausdruck auf d>  (leer, wenn kein JSON oder Pfad fehlt)
json_get() {
  command -v python3 >/dev/null 2>&1 || { printf ''; return; }
  python3 - "$1" "$2" <<'PY' 2>/dev/null
import json, sys
try:
    d = json.load(open(sys.argv[1]))
    v = eval(sys.argv[2], {}, {"d": d})
    print(v if v is not None else "")
except Exception:
    print("")
PY
}

# ---------- check ----------
do_check() {
  local rc=0 code ctype
  say "Prüfe $SITE"

  code=$(curl -sS -o "$TMP/root" -w '%{http_code}' --max-time 20 "$SITE/wp-json/" 2>"$TMP/err") || { fail "Keine Verbindung zu $SITE ($(head -1 "$TMP/err"))"; return 1; }
  ctype=$(curl -sS -o /dev/null -w '%{content_type}' --max-time 20 "$SITE/wp-json/")
  if [ "$code" = "200" ] && [ -n "$(json_get "$TMP/root" 'd.get("name")')" ]; then
    ok "REST-Wurzel liefert JSON: $(json_get "$TMP/root" 'd.get("name")')"
  elif [ "$code" = "404" ] && printf '%s' "$ctype" | grep -qi 'text/html'; then
    fail "$SITE/wp-json/ liefert eine HTML-404-Seite: Rewrite-Regeln fehlen (Standard-.htaccess anlegen, Permalinks speichern)."; rc=1
  else
    fail "$SITE/wp-json/ antwortet mit HTTP $code ($ctype), erwartet 200 mit JSON."; rc=1
  fi

  code=$(curl -sS -o "$TMP/init" -w '%{http_code}' --max-time 20 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -d "$INIT_BODY")
  ctype=$(curl -sS -o /dev/null -w '%{content_type}' --max-time 20 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -d "$INIT_BODY")
  local wpcode; wpcode=$(json_get "$TMP/init" 'd.get("code")')
  local server; server=$(json_get "$TMP/init" 'd["result"]["serverInfo"]["name"]')
  case "$code" in
    401)
      ok "MCP Adapter aktiv, Anmeldung verlangt (WordPress-Code: ${wpcode:-unbekannt})." ;;
    200)
      if [ -n "$server" ]; then
        warn "Handshake ohne Anmeldung erfolgreich ($server). Entweder setzt ein Proxy die Anmeldung ein (Cloud-Umgebung) oder der Endpunkt ist offen."
      else
        fail "HTTP 200, aber keine MCP-Antwort. Antwort: $(head -c 200 "$TMP/init")"; rc=1
      fi ;;
    404)
      if [ "$wpcode" = "rest_no_route" ]; then
        fail "rest_no_route: WordPress MCP Adapter (Plugin) nicht aktiv oder Abilities API fehlt."; rc=1
      elif printf '%s' "$ctype" | grep -qi 'text/html'; then
        fail "HTML-404 vom Hoster: Rewrite-Regeln fehlen."; rc=1
      else
        fail "HTTP 404: $(head -c 200 "$TMP/init")"; rc=1
      fi ;;
    *)
      fail "Endpunkt antwortet mit HTTP $code: $(head -c 200 "$TMP/init")"; rc=1 ;;
  esac
  say "Endpunkt: $ENDPOINT"
  return $rc
}

# ---------- test ----------
read_password() {
  if [ "$PW_FROM_STDIN" = 1 ]; then
    IFS= read -r PW
  else
    [ -t 0 ] || die "Kein Terminal für die Passwortabfrage; mit '-p -' von stdin lesen."
    printf 'Anwendungspasswort für %s@%s: ' "$LOGIN" "$HOST" >&2
    IFS= read -rs PW; printf '\n' >&2
  fi
  [ -n "$PW" ] || die "Leeres Passwort."
}

# curl mit Anmeldung, ohne dass das Passwort in argv erscheint (curl-Config über stdin)
curl_auth() {
  { printf 'user = "%s:%s"\n' "$LOGIN" "$(printf '%s' "$PW" | sed 's/"/\\"/g')"; } | curl -sS -K - "$@"
}

do_test() {
  local rc=0 code
  [ -n "$LOGIN" ] || die "WordPress-Anmeldename fehlt (-u <login>, der Login-Name, nicht der Anzeigename)."
  read_password
  say "Handshake als $LOGIN an $ENDPOINT"

  code=$(curl_auth -o "$TMP/tinit" -D "$TMP/thead" -w '%{http_code}' --max-time 30 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -d "$INIT_BODY")
  local wpcode; wpcode=$(json_get "$TMP/tinit" 'd.get("code")')
  local server; server=$(json_get "$TMP/tinit" 'd["result"]["serverInfo"]["name"]')
  case "$code" in
    200)
      [ -n "$server" ] && ok "Anmeldung angenommen: $server" || { fail "HTTP 200 ohne serverInfo: $(head -c 200 "$TMP/tinit")"; return 1; } ;;
    401)
      case "$wpcode" in
        incorrect_password|invalid_username) fail "401 $wpcode: Benutzer oder Anwendungspasswort falsch." ;;
        rest_forbidden|rest_not_logged_in)   fail "401 $wpcode: Authorization-Header kommt nicht bei PHP an (Apache/PHP-FPM: SetEnvIf/CGIPassAuth in .htaccess), oder aus der Cloud: der Proxy setzt eine veraltete Anmeldung ein." ;;
        *) fail "401 ${wpcode:-ohne Code}: $(head -c 200 "$TMP/tinit")" ;;
      esac; return 1 ;;
    *) fail "HTTP $code: $(head -c 200 "$TMP/tinit")"; return 1 ;;
  esac

  local sid; sid=$(tr -d '\r' < "$TMP/thead" | awk -F': ' 'tolower($1)=="mcp-session-id"{print $2}' | tail -1)
  [ -n "$sid" ] || { warn "Keine Mcp-Session-Id im Handshake; Abilities lassen sich so nicht zählen."; return 0; }

  curl_auth -o "$TMP/tools" --max-time 30 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -H "Mcp-Session-Id: $sid" \
        -d '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'
  local ntools nbricks
  ntools=$(json_get "$TMP/tools" 'len(d["result"]["tools"])')
  nbricks=$(json_get "$TMP/tools" 'len([t for t in d["result"]["tools"] if t["name"].startswith("bricks-")])')
  if [ -z "$ntools" ]; then
    warn "tools/list ohne Ergebnis: $(head -c 200 "$TMP/tools")"
  elif [ "${nbricks:-0}" = "0" ]; then
    fail "Adapter meldet $ntools Tools, aber kein einziges bricks-*: unter Bricks › AI „Enable Bricks abilities“ einschalten."; rc=1
  else
    ok "$ntools direkte Tools, davon $nbricks von Bricks."
    curl_auth -o "$TMP/status" --max-time 30 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -H "Mcp-Session-Id: $sid" \
        -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"mcp-adapter-execute-ability","arguments":{"ability_name":"bricks/list-ability-status","parameters":{}}}}'
    local txt; txt=$(json_get "$TMP/status" 'd["result"]["content"][0]["text"]')
    if [ -n "$txt" ]; then
      printf '%s' "$txt" > "$TMP/status.json"
      local total enabled
      total=$(json_get "$TMP/status.json" 'd["data"]["total"]'); enabled=$(json_get "$TMP/status.json" 'd["data"]["enabled"]')
      [ -n "$total" ] && ok "Abilities: $enabled von $total aktiviert (Rest unter Bricks › AI abgeschaltet)."
    fi
    curl_auth -o "$TMP/version" --max-time 30 -X POST "$ENDPOINT" \
        -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -H "Mcp-Session-Id: $sid" \
        -d '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"mcp-adapter-execute-ability","arguments":{"ability_name":"bricks/get-mcp-version","parameters":{}}}}'
    txt=$(json_get "$TMP/version" 'd["result"]["content"][0]["text"]')
    if [ -n "$txt" ]; then
      printf '%s' "$txt" > "$TMP/version.json"
      local bv wv
      bv=$(json_get "$TMP/version.json" 'd["data"]["bricksVersion"]'); wv=$(json_get "$TMP/version.json" 'd["data"]["wordpressVersion"]')
      [ -n "$bv" ] && ok "Bricks $bv, WordPress $wv."
    fi
  fi
  unset PW
  return $rc
}

# ---------- config ----------
snippet() {
  cat <<JSON
{
  "mcpServers": {
    "$NAME": {
      "type": "http",
      "url": "$ENDPOINT",
      "headers": {
        "Authorization": "Basic \${$VAR}"
      }
    }
  }
}
JSON
}

do_config() {
  if [ -z "$WRITE" ]; then
    say "Eintrag für .mcp.json (Servername $NAME, Variable $VAR):"
    snippet
    return 0
  fi
  need python3
  [ -f "$WRITE" ] || printf '{"mcpServers":{}}\n' > "$WRITE"
  python3 - "$WRITE" "$NAME" "$ENDPOINT" "$VAR" "$FORCE" <<'PY' || return 1
import json, sys
path, name, url, var, force = sys.argv[1:6]
with open(path) as f:
    data = json.load(f)
servers = data.setdefault("mcpServers", {})
if name in servers and force != "1":
    sys.exit(f"Fehler: Server '{name}' existiert schon in {path}; mit --force überschreiben.")
servers[name] = {"type": "http", "url": url, "headers": {"Authorization": "Basic ${" + var + "}"}}
with open(path, "w") as f:
    json.dump(data, f, indent=2, ensure_ascii=False); f.write("\n")
print(f"  [OK]   '{name}' in {path} eingetragen (Variable {var}).")
PY
}

# ---------- keychain ----------
do_keychain() {
  [ "$(uname -s)" = "Darwin" ] || { warn "Schlüsselbund nur unter macOS. Alternative für die Shell:"; alt_shell_line; return 0; }
  [ -n "$LOGIN" ] || die "WordPress-Anmeldename fehlt (-u <login>)."
  local service="bricks-mcp/$HOST"
  say "Lege Anwendungspasswort im Schlüsselbund ab (Dienst $service, Konto $LOGIN)."
  if [ "$PW_FROM_STDIN" = 1 ] || [ -n "${PW:-}" ]; then
    [ -n "${PW:-}" ] || read_password
    security add-generic-password -U -a "$LOGIN" -s "$service" -w "$PW" || return 1
  else
    security add-generic-password -U -a "$LOGIN" -s "$service" -w || return 1
  fi
  ok "Gespeichert. Diese Zeile in ~/.zshrc (oder ~/.bash_profile) aufnehmen:"
  printf '\nexport %s="$(printf '"'"'%%s:%%s'"'"' '"'"'%s'"'"' "$(security find-generic-password -s '"'"'%s'"'"' -w)" | base64)"\n\n' "$VAR" "$LOGIN" "$service"
  say "Danach ein neues Terminal öffnen und Claude Code daraus starten."
}

alt_shell_line() {
  cat <<EOT

  read -rsp 'Anwendungspasswort: ' PW; export $VAR=\$(printf '%s:%s' '${LOGIN:-<wp-login>}' "\$PW" | base64); unset PW

EOT
}

# ---------- Ablauf ----------
rc=0
case "$CMD" in
  check)    do_check || rc=$? ;;
  test)     do_test || rc=$? ;;
  config)   do_config || rc=$? ;;
  keychain) do_keychain || rc=$? ;;
  all)
    do_check || rc=$?
    say
    do_test || rc=$?
    say
    do_config || rc=$?
    say
    if [ "$(uname -s)" = "Darwin" ]; then do_keychain || rc=$?; else alt_shell_line; fi
    ;;
esac
exit $rc
