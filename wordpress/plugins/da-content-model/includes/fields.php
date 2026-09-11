<?php
/**
 * Meta-Box-Felder je Post-Typ und Term-Meta.
 *
 * Feld-IDs sind zugleich die Meta-Keys, die Bricks als Dynamic Data
 * ({mb_<id>}) und als Loop-Quelle (mb_<id> für Gruppen) sieht. Vor dem
 * Einsatz in Bricks die Tags mit bricks/list-dynamic-data-tags auslesen.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {

	// Referenz.
	$meta_boxes[] = [
		'title'      => 'Projekt',
		'id'         => 'da_referenz_projekt',
		'post_types' => [ 'da_referenz' ],
		'context'    => 'normal',
		'fields'     => [
			[
				'name'          => 'Kunde',
				'id'            => 'da_kunde',
				'type'          => 'text',
				'admin_columns' => [ 'position' => 'after title', 'sort' => true ],
			],
			[
				'name' => 'Website des Kunden',
				'id'   => 'da_website',
				'type' => 'url',
			],
			[
				'name' => 'Kurzbeschreibung',
				'id'   => 'da_kurz',
				'type' => 'textarea',
				'rows' => 3,
				'desc' => 'Ein bis zwei Sätze für die Referenzkarte.',
			],
			[
				'name'             => 'Logo (hell)',
				'id'               => 'da_logo',
				'type'             => 'single_image',
				'desc'             => 'Für den hellen Modus, SVG oder PNG.',
			],
			[
				'name'             => 'Logo (dunkel)',
				'id'               => 'da_logo_dark',
				'type'             => 'single_image',
				'desc'             => 'Variante für den Dunkelmodus. Leer lassen, wenn das helle Logo ausreicht.',
			],
			[
				'name'   => 'Ergebnisse',
				'id'     => 'da_ergebnisse',
				'type'   => 'group',
				'clone'  => true,
				'sort_clone' => true,
				'max_clone'  => 4,
				'collapsible' => true,
				'group_title' => '{wert} {label}',
				'fields' => [
					[ 'name' => 'Wert', 'id' => 'wert', 'type' => 'text', 'desc' => 'Beispiel: +38 %', 'columns' => 4 ],
					[ 'name' => 'Beschriftung', 'id' => 'label', 'type' => 'text', 'desc' => 'Beispiel: mehr Terminanfragen', 'columns' => 8 ],
				],
			],
			[
				'name'             => 'Galerie',
				'id'               => 'da_galerie',
				'type'             => 'image_advanced',
				'max_file_uploads' => 8,
			],
		],
	];

	$meta_boxes[] = [
		'title'      => 'Kundenstimme',
		'id'         => 'da_referenz_stimme',
		'post_types' => [ 'da_referenz' ],
		'context'    => 'normal',
		'fields'     => [
			[
				'name'   => 'Stimme',
				'id'     => 'da_stimme',
				'type'   => 'group',
				'fields' => [
					[ 'name' => 'Zitat', 'id' => 'text', 'type' => 'textarea', 'rows' => 4 ],
					[ 'name' => 'Name', 'id' => 'name', 'type' => 'text', 'columns' => 6 ],
					[ 'name' => 'Rolle', 'id' => 'rolle', 'type' => 'text', 'columns' => 6, 'desc' => 'Beispiel: Inhaberin, Zahnarztpraxis Musterstadt' ],
					[ 'name' => 'Foto', 'id' => 'foto', 'type' => 'single_image' ],
					[ 'name' => 'Auf der Startseite zeigen', 'id' => 'featured', 'type' => 'switch', 'style' => 'rounded' ],
				],
			],
		],
	];

	// Leistung.
	$meta_boxes[] = [
		'title'      => 'Karte',
		'id'         => 'da_leistung_karte',
		'post_types' => [ 'da_leistung' ],
		'context'    => 'normal',
		'fields'     => [
			[
				'name'    => 'Icon',
				'id'      => 'da_icon',
				'type'    => 'select',
				'options' => da_cm_icon_options(),
				'desc'    => 'Name aus dem Icon-Set des Design Systems (handoff/export/icons).',
				'admin_columns' => [ 'position' => 'after title' ],
			],
			[
				'name' => 'Kurztext',
				'id'   => 'da_kurz',
				'type' => 'textarea',
				'rows' => 3,
				'desc' => 'Text auf der Service-Karte.',
			],
			[
				'name'  => 'Punkte',
				'id'    => 'da_punkte',
				'type'  => 'text',
				'clone' => true,
				'sort_clone' => true,
				'max_clone'  => 5,
				'desc'  => 'Stichpunkte auf der Karte, drei bis fünf.',
			],
			[
				'name' => 'Link-Text',
				'id'   => 'da_cta',
				'type' => 'text',
				'std'  => 'Mehr erfahren',
			],
		],
	];

	// FAQ.
	$meta_boxes[] = [
		'title'      => 'Einsatz',
		'id'         => 'da_faq_einsatz',
		'post_types' => [ 'da_faq' ],
		'context'    => 'side',
		'fields'     => [
			[
				'name' => 'Auch im Digital-Check zeigen',
				'id'   => 'da_im_check',
				'type' => 'switch',
				'style' => 'rounded',
			],
		],
	];

	// Partner.
	$meta_boxes[] = [
		'title'      => 'Logo und Link',
		'id'         => 'da_partner_logo',
		'post_types' => [ 'da_partner' ],
		'context'    => 'normal',
		'fields'     => [
			[ 'name' => 'Logo (hell)', 'id' => 'da_logo', 'type' => 'single_image' ],
			[ 'name' => 'Logo (dunkel)', 'id' => 'da_logo_dark', 'type' => 'single_image' ],
			[ 'name' => 'Website', 'id' => 'da_url', 'type' => 'url', 'admin_columns' => [ 'position' => 'after title' ] ],
		],
	];

	// Anfrage aus dem Digital-Check. Die Bricks-Formular-Aktion "create-post"
	// schreibt in diese Meta-Keys.
	$meta_boxes[] = [
		'title'      => 'Kontakt',
		'id'         => 'da_anfrage_kontakt',
		'post_types' => [ 'da_anfrage' ],
		'context'    => 'normal',
		'fields'     => [
			[
				'name'    => 'Status',
				'id'      => 'da_status',
				'type'    => 'select',
				'options' => [
					'neu'          => 'Neu',
					'kontaktiert'  => 'Kontaktiert',
					'termin'       => 'Termin vereinbart',
					'abgeschlossen'=> 'Abgeschlossen',
					'kein-bedarf'  => 'Kein Bedarf',
				],
				'std'     => 'neu',
				'admin_columns' => [ 'position' => 'after title', 'filterable' => true ],
			],
			[
				'name'    => 'Zielgruppe',
				'id'      => 'da_zielgruppe',
				'type'    => 'select',
				'options' => [ 'praxen' => 'Praxis', 'kanzleien' => 'Kanzlei', 'mittelstand' => 'Mittelstand', 'sonstige' => 'Sonstige' ],
				'admin_columns' => [ 'position' => 'after da_status', 'filterable' => true ],
			],
			[ 'name' => 'Name', 'id' => 'da_name', 'type' => 'text', 'columns' => 6 ],
			[ 'name' => 'Unternehmen', 'id' => 'da_firma', 'type' => 'text', 'columns' => 6 ],
			[ 'name' => 'E-Mail', 'id' => 'da_email', 'type' => 'email', 'columns' => 6, 'admin_columns' => [ 'position' => 'after da_zielgruppe' ] ],
			[ 'name' => 'Telefon', 'id' => 'da_telefon', 'type' => 'text', 'columns' => 6 ],
			[ 'name' => 'Website', 'id' => 'da_website', 'type' => 'url' ],
			[ 'name' => 'Nachricht', 'id' => 'da_nachricht', 'type' => 'textarea', 'rows' => 6 ],
			[ 'name' => 'Quelle', 'id' => 'da_quelle', 'type' => 'text', 'desc' => 'Seite, von der die Anfrage kam. Wird vom Formular gesetzt.' ],
			[ 'name' => 'Interne Notiz', 'id' => 'da_notiz', 'type' => 'textarea', 'rows' => 4 ],
		],
	];

	// Term-Meta für Zielgruppen: Link zur Landingpage und Kurzname.
	$meta_boxes[] = [
		'title'      => 'Landingpage',
		'id'         => 'da_zielgruppe_meta',
		'taxonomies' => [ 'zielgruppe' ],
		'fields'     => [
			[
				'name'       => 'Landingpage',
				'id'         => 'da_landingpage',
				'type'       => 'post',
				'post_type'  => 'page',
				'field_type' => 'select_advanced',
				'desc'       => 'Seite, auf die Karten und Chips dieser Zielgruppe verlinken.',
			],
			[
				'name' => 'Anrede in der Ansprache',
				'id'   => 'da_ansprache',
				'type' => 'text',
				'desc' => 'Beispiel: für Praxen',
			],
		],
	];

	return $meta_boxes;
} );

/**
 * Icon-Auswahl für Leistungen. Schlüssel = Dateiname in handoff/export/icons.
 */
function da_cm_icon_options() {
	return [
		''            => 'Kein Icon',
		'shield'      => 'Schild (Sicherheit, Datenschutz)',
		'clock'       => 'Uhr (Zeit, Erreichbarkeit)',
		'check'       => 'Haken (Qualität, erledigt)',
		'star'        => 'Stern (Bewertung, Sichtbarkeit)',
		'calendar'    => 'Kalender (Termine)',
		'phone'       => 'Telefon (Kontakt)',
		'mail'        => 'Brief (E-Mail)',
		'pin'         => 'Standort',
		'wrench'      => 'Werkzeug (Technik, Betreuung)',
		'arrow-right' => 'Pfeil',
	];
}
