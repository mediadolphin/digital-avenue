<?php
/**
 * Settings Page "Unternehmen": Daten, die es genau einmal gibt.
 *
 * Werte liegen in der Option da_unternehmen. In Bricks über den
 * Meta-Box-Provider als Dynamic Data nutzbar; die genaue Tag-Form am
 * Staging mit bricks/list-dynamic-data-tags prüfen.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'mb_settings_pages', function ( $settings_pages ) {
	$settings_pages[] = [
		'id'          => 'unternehmen',
		'option_name' => 'da_unternehmen',
		'menu_title'  => 'Unternehmen',
		'page_title'  => 'Unternehmensdaten',
		'icon_url'    => 'dashicons-building',
		'position'    => 25,
		'style'       => 'no-boxes',
		'columns'     => 1,
		'tabs'        => [
			'kontakt' => 'Kontakt',
			'social'  => 'Social Media',
			'team'    => 'Team',
			'recht'   => 'Rechtliches',
		],
	];
	return $settings_pages;
} );

add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {

	$meta_boxes[] = [
		'id'             => 'da_unternehmen_kontakt',
		'title'          => 'Kontakt',
		'settings_pages' => [ 'unternehmen' ],
		'tab'            => 'kontakt',
		'fields'         => [
			[ 'name' => 'Firmenname', 'id' => 'da_firma', 'type' => 'text', 'std' => 'Digital Avenue UG (haftungsbeschränkt)' ],
			[ 'name' => 'Straße und Hausnummer', 'id' => 'da_strasse', 'type' => 'text', 'columns' => 6 ],
			[ 'name' => 'PLZ und Ort', 'id' => 'da_plz_ort', 'type' => 'text', 'columns' => 6 ],
			[ 'name' => 'Zweiter Standort', 'id' => 'da_standort2', 'type' => 'text', 'desc' => 'Beispiel: Rostock' ],
			[ 'name' => 'Telefon (Anzeige)', 'id' => 'da_telefon', 'type' => 'text', 'columns' => 6, 'desc' => 'So, wie es auf der Seite steht.' ],
			[ 'name' => 'Telefon (Link)', 'id' => 'da_telefon_link', 'type' => 'text', 'columns' => 6, 'desc' => 'Nur Ziffern mit Ländervorwahl, Beispiel: +4940123456' ],
			[ 'name' => 'E-Mail', 'id' => 'da_email', 'type' => 'email' ],
			[ 'name' => 'Erreichbarkeit', 'id' => 'da_zeiten', 'type' => 'text', 'desc' => 'Beispiel: Mo bis Fr, 9 bis 17 Uhr' ],
			[ 'name' => 'Terminlink', 'id' => 'da_terminlink', 'type' => 'url', 'desc' => 'Kalender-Buchungsseite, falls vorhanden.' ],
		],
	];

	$meta_boxes[] = [
		'id'             => 'da_unternehmen_social',
		'title'          => 'Social Media',
		'settings_pages' => [ 'unternehmen' ],
		'tab'            => 'social',
		'fields'         => [
			[
				'name'   => 'Profile',
				'id'     => 'da_social',
				'type'   => 'group',
				'clone'  => true,
				'sort_clone' => true,
				'group_title' => '{netzwerk}',
				'fields' => [
					[
						'name'    => 'Netzwerk',
						'id'      => 'netzwerk',
						'type'    => 'select',
						'options' => [ 'linkedin' => 'LinkedIn', 'instagram' => 'Instagram', 'facebook' => 'Facebook', 'youtube' => 'YouTube', 'xing' => 'Xing' ],
						'columns' => 4,
					],
					[ 'name' => 'URL', 'id' => 'url', 'type' => 'url', 'columns' => 8 ],
				],
			],
		],
	];

	$meta_boxes[] = [
		'id'             => 'da_unternehmen_team',
		'title'          => 'Team',
		'settings_pages' => [ 'unternehmen' ],
		'tab'            => 'team',
		'fields'         => [
			[
				'name'   => 'Personen',
				'id'     => 'da_team',
				'type'   => 'group',
				'clone'  => true,
				'sort_clone' => true,
				'collapsible' => true,
				'group_title' => '{name}',
				'fields' => [
					[ 'name' => 'Name', 'id' => 'name', 'type' => 'text', 'columns' => 6 ],
					[ 'name' => 'Rolle', 'id' => 'rolle', 'type' => 'text', 'columns' => 6 ],
					[ 'name' => 'Foto', 'id' => 'foto', 'type' => 'single_image' ],
					[ 'name' => 'Kurzvorstellung', 'id' => 'text', 'type' => 'textarea', 'rows' => 4 ],
					[ 'name' => 'LinkedIn', 'id' => 'linkedin', 'type' => 'url' ],
				],
			],
		],
	];

	$meta_boxes[] = [
		'id'             => 'da_unternehmen_recht',
		'title'          => 'Rechtliches',
		'settings_pages' => [ 'unternehmen' ],
		'tab'            => 'recht',
		'fields'         => [
			[ 'name' => 'Vertretungsberechtigt', 'id' => 'da_vertretung', 'type' => 'text', 'std' => 'Nils Rudolph' ],
			[ 'name' => 'Registergericht und Nummer', 'id' => 'da_register', 'type' => 'text', 'desc' => 'Beispiel: Amtsgericht Hamburg, HRB 000000' ],
			[ 'name' => 'Umsatzsteuer-ID', 'id' => 'da_ustid', 'type' => 'text' ],
			[ 'name' => 'Löschfrist für Anfragen (Monate)', 'id' => 'da_loeschfrist', 'type' => 'number', 'std' => 12, 'desc' => 'Nach dieser Frist Anfragen im Admin löschen. Wird in der Datenschutzerklärung genannt.' ],
		],
	];

	return $meta_boxes;
} );
