#!/usr/bin/env python3
"""Ruft eine Ability des Bricks-MCP-Adapters direkt auf und schreibt das Ergebnis als JSON.

Nutzen: große Seitenbäume als Datei lesen, per Skript ändern und mit
bricks/set-page-elements zurückschreiben, ohne sie durch den Chat zu kopieren.

Anmeldung: In der Cloud-Sitzung setzt der Proxy die hinterlegte Anmeldung ein.
Lokal kommt sie aus der Umgebungsvariable BRICKS_MCP_AUTH (Base64 von
benutzer:anwendungspasswort). Nie Zugangsdaten in Dateien oder Argumente.

Aufruf: mcpcall.py <ability> <params.json|-> [out.json]
Beispiel: echo '{"postId":2}' | mcpcall.py bricks/get-page-elements - home.json
"""
import json, sys, urllib.request, os, tempfile
URL = "https://relaunch.digital-avenue.de/wp-json/mcp/mcp-adapter-default-server"
HDR = {"Content-Type": "application/json", "Accept": "application/json, text/event-stream",
       "Authorization": "Basic " + os.environ.get("BRICKS_MCP_AUTH", "proxy")}
SESS = os.path.join(tempfile.gettempdir(), "da-mcp-session")
def post(body, sid=None):
    h = dict(HDR)
    if sid: h["Mcp-Session-Id"] = sid
    req = urllib.request.Request(URL, data=json.dumps(body).encode(), headers=h, method="POST")
    with urllib.request.urlopen(req, timeout=120) as r:
        raw = r.read().decode(); sid2 = r.headers.get("Mcp-Session-Id")
    if raw.startswith("event:") or "\ndata:" in raw or raw.startswith("data:"):
        raw = [l[5:].strip() for l in raw.splitlines() if l.startswith("data:")][-1]
    return (json.loads(raw) if raw.strip() else {}), sid2
def session():
    if os.path.exists(SESS): return open(SESS).read().strip()
    res, sid = post({"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"da-script","version":"1"}}})
    post({"jsonrpc":"2.0","method":"notifications/initialized"}, sid)
    open(SESS,"w").write(sid or ""); return sid
ability, pfile = sys.argv[1], sys.argv[2]
params = json.load(sys.stdin if pfile == "-" else open(pfile))
sid = session()
res, _ = post({"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"mcp-adapter-execute-ability","arguments":{"ability_name":ability,"parameters":params}}}, sid)
if "error" in res and "session" in json.dumps(res["error"]).lower():
    os.remove(SESS); sid = session()
    res, _ = post({"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"mcp-adapter-execute-ability","arguments":{"ability_name":ability,"parameters":params}}}, sid)
txt = res.get("result", {}).get("content", [{}])[0].get("text") if "result" in res else json.dumps(res)
try: data = json.loads(txt)
except Exception: data = {"raw": txt}
out = sys.argv[3] if len(sys.argv) > 3 else None
if out: json.dump(data, open(out, "w"), ensure_ascii=False, indent=1); print("ok ->", out, "success=", data.get("success") if isinstance(data, dict) else "?")
else: print(json.dumps(data, ensure_ascii=False)[:3000])
