=== Digital Avenue Parameter ===
Requires at least: 6.0
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later

Zentrale Unternehmensparameter pflegen und per Shortcode ausgeben.

== Verwendung ==

Einstellungen › DA Parameter: Werte eintragen. Leere Felder nutzen den Standardwert.

Shortcode:      [da key="telefon"]            Anzeige
                [da key="telefon" link="1"]   als tel:-Link
                [da key="email" link="1"]     als mailto:-Link
                [da key="adresse" br="1"]     Zeilenumbrüche erhalten
Bricks:         {echo:da_param('serviceversprechen')}   in jedem Textfeld
PHP:            da_param('servicezeiten_kurz')

Schlüssel: firma, ansprechpartner, telefon, telefon_link, email, adresse,
standorte, servicezeiten, servicezeiten_kurz, feiertage, reaktionszeit,
serviceversprechen, datenschutz_url, impressum_url, kampagnen_formular_hinweis.
