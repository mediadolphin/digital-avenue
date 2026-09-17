# HubSpot – Importanleitung

Stand 13.09.2026. Die beiden Kontaktdateien sind UTF-8 mit BOM, kommagetrennt, mit genau einer Kopfzeile. Hamburg enthält 5.867, Rostock 1.024 Quelleinträge. Alle wurden erhalten. Die Dateien wurden strukturell geprüft, aber mangels Zugriff nicht im tatsächlichen HubSpot-Konto testimportiert.

## Was importiert wird

Kontakte mit Herkunft, Anschrift, Fachrichtung, Kampagnenvorschlag und offenen Prüfaufgaben. Die Kennung identifiziert einen Quelleintrag; derselbe Mensch kann mehrere Einträge besitzen. Es werden keine unbekannten Praxen erfunden und keine ungeprüften Unternehmensverknüpfungen angelegt. Telefonnummer, Website und E-Mail sind zunächst Recherchefelder, weil sie häufig zu Einrichtungen gehören. Der Datenimport ist keine Versandfreigabe.

## Vorbereitungen

1. Bestehende Kontakte exportieren und anhand von Name, Anschrift, Quell-URL und bekannten Praxisdaten abgleichen. Bei Treffern bestehende Record ID nutzen oder die da_quell_id nach bestätigter Zuordnung am bestehenden Kontakt hinterlegen. Eine neue Quell-ID erkennt vorhandene Kontakte ohne diese Kennung nicht automatisch. Die vorliegenden Dateien enthalten mangels Kontoexport keine Record IDs.
2. Feldmapping.csv öffnen. Alle da_-Felder als Kontakt-Eigenschaften vom Typ einzeiliger Text anlegen. **da_quell_id muss bei Anlage eindeutige Werte verlangen.** Fachgruppen und Kampagnenoptionen sind absichtlich Textlisten, keine Checkbox-Eigenschaften. Quellstand ist ISO-Datum als Text. Namen und PLZ nicht in Excel automatisch umformatieren.
3. Kontakte als Nicht-Marketingkontakte importieren, soweit im Konto vorhanden. Keine Einwilligungen, Abonnements oder Marketingfreigaben setzen. Vorhandene Widersprüche und Kontaktrechte bleiben maßgeblich; die da_-Felder ersetzen HubSpots Abonnementstatus nicht.
4. Automatische Unternehmenszuordnung für diesen Vorgang vermeiden. Die Dateien enthalten bewusst kein Standardfeld Email und keine Unternehmensdomain. da_email_quelle darf niemals auf Email gemappt werden: ein geteiltes Postfach ist keine persönliche Kontaktkennung.

## Importablauf

Import → Datei vom Computer → Kontakte. Zuerst Hamburg, danach Rostock. Jede Spalte exakt nach Feldmapping.csv zuordnen. da_quell_id ausdrücklich als eindeutige Kennung wählen. Den Dialog auf fehlende Eigenschaften, Zeichenkodierung und Dublettenwarnungen prüfen. Zuerst eine kleine Kopie mit zehn Zeilen importieren, Datensätze prüfen und erst danach dieselbe Gesamtdatei mit derselben Kennung verwenden. Für diesen Test keine alternative ID erzeugen.

Falls das Konto keine benutzerdefinierte eindeutige Kennung zulässt: nicht ohne Dublettenschutz wiederholt importieren. Für neue Kontakte ist ein einmaliger Import möglich; danach sofort HubSpot Record IDs exportieren, eindeutig den Quell-IDs zuordnen und Folgeimporte ausschließlich mit diesen Record IDs ausführen. Vorhandene Kontakte zuerst wie oben abgleichen. Keine erfundenen E-Mail-Adressen als Ersatzkennung.

Nach Import Quell-ID-Anzahlen je Region, Namen mit Umlauten, PLZ, leere Felder und recherchierte E-Mail-Felder kontrollieren. Export mit Record ID + da_quell_id als dauerhafte Zuordnung sichern. Fehlende Fachrichtungen sind 35 offene Fälle, keine Importfehler. Name und Titel stammen aus vorhandenen Aufbereitungen und sind vor persönlicher Anschrift zu prüfen. Die neutrale Anrede lautet „Guten Tag,“; automatisch geratenes Herr/Frau nicht verwenden.

## Praxisorganisationen und Aussendungen

Praxiszuordnung_RECHERCHE_KEIN_IMPORT.csv ist eine Arbeitsliste, kein Unternehmensimport. Pro Adresse können verschiedene Praxen existieren; eine Praxis kann mehrere Adressen haben. Erst nach Recherche Praxisname, Träger, Ansprechpartner und stabile Organisationskennung festlegen. Danach Unternehmensdatei und Kontaktzuordnungen aus bestätigten Daten erstellen. Bis dahin Kontakte direkt mit den da_-Eigenschaften segmentieren.

Vor Versand: tatsächliche ambulante Tätigkeit und Entscheider prüfen, bekannte Kunden und Widersprüche ausschließen, einen Empfänger je Praxis und Welle wählen, Ansprechpartner/Adresse bestätigen, Versandstatus ausdrücklich ändern. Pneumologie Eppendorf wird soweit über Domain/Name erkennbar als Bestandskunde markiert; weitere Bestandskunden sind nicht vollständig bekannt. Keine automatische Aussendung durch Import oder Workflow starten.

## Gespeicherte Ansichten

- Importkontrolle: da_import_charge = DA-2026-09-13.
- Offene Qualifizierung: da_versandstatus = Nicht freigegeben.
- Regionale Recherche: da_region = Hamburg oder Rostock.
- Fachkampagne: da_kampagne_vorschlag = K1/K2/K4/K5/K6; Vorschlag ist keine bestätigte Eignung.
- Sonderkampagnen K3 Wachstum, K7 Praxisstart, K8 Recruiting und K9 Betreuungswechsel/Telefonie erst nach dokumentiertem Anlass manuell vergeben.

Feldmapping.csv und Pruefbericht.json sind Dokumentation und keine Kontaktimporte.

Offizielle Grundlage: https://knowledge.hubspot.com/import-and-export/set-up-your-import-file und https://knowledge.hubspot.com/import-and-export/understand-the-import-tool (geprüft 13.09.2026).
