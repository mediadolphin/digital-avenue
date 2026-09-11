<?php
/**
 * Taxonomien.
 *
 * zielgruppe verbindet Referenzen, Leistungen, FAQ und Beiträge mit den drei
 * Landingpages. leistungsbereich filtert das Referenz-Archiv.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function da_cm_register_taxonomies() {

	register_taxonomy( 'zielgruppe', [ 'da_referenz', 'da_leistung', 'da_faq', 'post' ], [
		'labels'            => [
			'name'          => 'Zielgruppen',
			'singular_name' => 'Zielgruppe',
			'menu_name'     => 'Zielgruppen',
			'all_items'     => 'Alle Zielgruppen',
			'edit_item'     => 'Zielgruppe bearbeiten',
			'add_new_item'  => 'Neue Zielgruppe',
			'search_items'  => 'Zielgruppen durchsuchen',
		],
		'hierarchical'      => true, // Checkboxen im Editor, feste Liste.
		'public'            => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'rewrite'           => [ 'slug' => 'fuer', 'with_front' => false ],
	] );

	register_taxonomy( 'leistungsbereich', [ 'da_referenz' ], [
		'labels'            => [
			'name'          => 'Leistungsbereiche',
			'singular_name' => 'Leistungsbereich',
			'menu_name'     => 'Leistungsbereiche',
			'all_items'     => 'Alle Leistungsbereiche',
			'edit_item'     => 'Leistungsbereich bearbeiten',
			'add_new_item'  => 'Neuer Leistungsbereich',
			'search_items'  => 'Leistungsbereiche durchsuchen',
		],
		'hierarchical'      => true,
		'public'            => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'rewrite'           => [ 'slug' => 'leistungsbereich', 'with_front' => false ],
	] );
}
add_action( 'init', 'da_cm_register_taxonomies' );

/**
 * Feste Zielgruppen und erste Leistungsbereiche anlegen. Läuft bei der
 * Aktivierung, legt nichts doppelt an.
 */
function da_cm_seed_terms() {
	$zielgruppen = [
		'praxen'      => 'Praxen',
		'kanzleien'   => 'Kanzleien',
		'mittelstand' => 'Mittelstand',
	];
	foreach ( $zielgruppen as $slug => $name ) {
		if ( ! term_exists( $slug, 'zielgruppe' ) ) {
			wp_insert_term( $name, 'zielgruppe', [ 'slug' => $slug ] );
		}
	}

	$bereiche = [
		'website'         => 'Website',
		'sichtbarkeit'    => 'Sichtbarkeit',
		'digitalisierung' => 'Digitalisierung',
		'betreuung'       => 'Betreuung',
	];
	foreach ( $bereiche as $slug => $name ) {
		if ( ! term_exists( $slug, 'leistungsbereich' ) ) {
			wp_insert_term( $name, 'leistungsbereich', [ 'slug' => $slug ] );
		}
	}
}
