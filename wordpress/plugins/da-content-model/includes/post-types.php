<?php
/**
 * Custom Post Types.
 *
 * Regel: CPT nur für Inhalte, die mehrfach vorkommen, an mehreren Stellen
 * erscheinen oder eine eigene URL brauchen. Entscheidungen siehe
 * handoff/BETRIEBSKONZEPT-MCP.md.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function da_cm_labels( $singular, $plural, $feminine = false ) {
	$neu = $feminine ? 'Neue ' : 'Neuer ';
	return [
		'name'               => $plural,
		'singular_name'      => $singular,
		'menu_name'          => $plural,
		'add_new'            => 'Erstellen',
		'add_new_item'       => $neu . $singular,
		'edit_item'          => $singular . ' bearbeiten',
		'new_item'           => $neu . $singular,
		'view_item'          => $singular . ' ansehen',
		'view_items'         => $plural . ' ansehen',
		'search_items'       => $plural . ' durchsuchen',
		'not_found'          => 'Keine ' . $plural . ' gefunden',
		'not_found_in_trash' => 'Keine ' . $plural . ' im Papierkorb',
		'all_items'          => 'Alle ' . $plural,
		'archives'           => $plural,
		'attributes'         => 'Attribute',
		'insert_into_item'   => 'Einfügen',
		'featured_image'     => 'Titelbild',
		'set_featured_image' => 'Titelbild festlegen',
	];
}

function da_cm_register_post_types() {

	// Referenz: Projekt mit Kunde, Ergebnis und Kundenstimme. Archiv und Einzelseite.
	register_post_type( 'da_referenz', [
		'labels'              => da_cm_labels( 'Referenz', 'Referenzen', true ),
		'public'              => true,
		'has_archive'         => 'referenzen',
		'rewrite'             => [ 'slug' => 'referenzen', 'with_front' => false ],
		'menu_position'       => 20,
		'menu_icon'           => 'dashicons-portfolio',
		'supports'            => [ 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes' ],
		'taxonomies'          => [ 'zielgruppe', 'leistungsbereich' ],
		'show_in_rest'        => true,
		'rest_base'           => 'referenzen',
	] );

	// Leistung: Service-Karte mit eigener Seite unter /leistungen/<slug>/, kein Archiv.
	register_post_type( 'da_leistung', [
		'labels'              => da_cm_labels( 'Leistung', 'Leistungen', true ),
		'public'              => true,
		'has_archive'         => false,
		'rewrite'             => [ 'slug' => 'leistungen', 'with_front' => false ],
		'menu_position'       => 21,
		'menu_icon'           => 'dashicons-hammer',
		'supports'            => [ 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes' ],
		'taxonomies'          => [ 'zielgruppe' ],
		'show_in_rest'        => true,
		'rest_base'           => 'leistungen',
	] );

	// FAQ: Frage = Titel, Antwort = Inhalt. Nur als Loop, keine eigene URL.
	register_post_type( 'da_faq', [
		'labels'              => da_cm_labels( 'FAQ', 'FAQ' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'publicly_queryable'  => false,
		'exclude_from_search' => true,
		'has_archive'         => false,
		'rewrite'             => false,
		'menu_position'       => 22,
		'menu_icon'           => 'dashicons-editor-help',
		'supports'            => [ 'title', 'editor', 'revisions', 'page-attributes' ],
		'taxonomies'          => [ 'zielgruppe' ],
		'show_in_rest'        => true,
		'rest_base'           => 'faq',
	] );

	// Partner: Logo hell/dunkel und Link. Nur als Loop.
	register_post_type( 'da_partner', [
		'labels'              => da_cm_labels( 'Partner', 'Partner' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'publicly_queryable'  => false,
		'exclude_from_search' => true,
		'has_archive'         => false,
		'rewrite'             => false,
		'menu_position'       => 23,
		'menu_icon'           => 'dashicons-groups',
		'supports'            => [ 'title', 'page-attributes' ],
		'show_in_rest'        => true,
		'rest_base'           => 'partner',
	] );

	// Anfrage: Eingänge aus dem Digital-Check. Nicht öffentlich, nicht in REST.
	// Personenbezogene Daten: Löschfrist in der Datenschutzerklärung festlegen.
	register_post_type( 'da_anfrage', [
		'labels'              => da_cm_labels( 'Anfrage', 'Anfragen', true ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'publicly_queryable'  => false,
		'exclude_from_search' => true,
		'has_archive'         => false,
		'rewrite'             => false,
		'menu_position'       => 24,
		'menu_icon'           => 'dashicons-email-alt',
		'supports'            => [ 'title' ],
		'show_in_rest'        => false,
		'capability_type'     => 'post',
		'map_meta_cap'        => true,
	] );
}
add_action( 'init', 'da_cm_register_post_types' );
