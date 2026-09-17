<?php
/**
 * Plugin Name: Digital Avenue Parameter
 * Plugin URI:  https://digital-avenue.de
 * Description: Zentrale Unternehmensparameter (Telefon, E-Mail, Servicezeiten, Serviceversprechen) an einer Stelle pflegen und per Shortcode [da key="…"] oder Bricks-Echo-Tag {echo:da_param('…')} überall ausgeben.
 * Version:     1.0.0
 * Author:      Digital Avenue UG (haftungsbeschränkt)
 * License:     GPL-2.0-or-later
 * Text Domain: da-parameter
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class DA_Parameter {

	const OPTION = 'da_parameter';

	/**
	 * Registry aller Parameter: Schlüssel => [Label, Standardwert, Beschreibung, mehrzeilig?].
	 * Neue Parameter hier ergänzen; sie erscheinen automatisch in der Einstellungsseite.
	 */
	public static function registry() {
		return array(
			'firma'              => array( 'Firma', 'Digital Avenue UG (haftungsbeschränkt)', 'Vollständiger Firmenname mit Rechtsform.', false ),
			'ansprechpartner'    => array( 'Ansprechpartner', 'Nils Rudolph', 'Name für Briefe, E-Mails und persönliche Ansprache.', false ),
			'telefon'            => array( 'Telefon (Anzeige)', '+49 (40) 41343870', 'So wird die Nummer angezeigt.', false ),
			'telefon_link'       => array( 'Telefon (Link)', '+494041343870', 'Nummer ohne Leerzeichen und Klammern für tel:-Links.', false ),
			'email'              => array( 'E-Mail', 'post@digital-avenue.de', '', false ),
			'adresse'            => array( 'Postanschrift', '', 'Straße, PLZ Ort. Pflicht für Impressum, Footer und Briefe.', true ),
			'standorte'          => array( 'Standorte', 'Hamburg und Rostock', 'Kurzform für Texte, z. B. „in Hamburg und Rostock“.', false ),
			'servicezeiten'      => array( 'Servicezeiten (lang)', 'Montag bis Freitag, 08:00 bis 18:00 Uhr', '', false ),
			'servicezeiten_kurz' => array( 'Servicezeiten (kurz)', 'Mo–Fr 08–18 Uhr', '', false ),
			'feiertage'          => array( 'Feiertagsregel', 'ausgenommen gesetzliche Feiertage', '', false ),
			'reaktionszeit'      => array( 'Reaktionszeit', 'innerhalb einer Stunde', 'Zugesagte Frist für die persönliche Rückmeldung.', false ),
			'serviceversprechen' => array( 'Serviceversprechen (ganzer Satz)', 'Persönliche Rückmeldung innerhalb einer Stunde während unserer Servicezeiten: Montag bis Freitag, 08:00 bis 18:00 Uhr, ausgenommen gesetzliche Feiertage.', 'Wird auf Landingpages, im Concierge-Block und in Mailings verwendet. Rückmeldung bedeutet keine vollständige Umsetzung.', true ),
			'datenschutz_url'    => array( 'Datenschutz-URL', '/datenschutz/', '', false ),
			'impressum_url'      => array( 'Impressum-URL', '/impressum/', '', false ),
			'kampagnen_formular_hinweis' => array( 'Formularhinweis Patientendaten', 'Bitte übermitteln Sie hier keine Patienten- oder Gesundheitsdaten.', 'Sichtbarer Hinweis über Kontaktformularen.', false ),
		);
	}

	public static function init() {
		add_shortcode( 'da', array( __CLASS__, 'shortcode' ) );
		add_action( 'admin_menu', array( __CLASS__, 'admin_menu' ) );
		add_action( 'admin_init', array( __CLASS__, 'admin_init' ) );
		// Bricks: {echo:da_param('telefon')} in jedem Textfeld erlauben.
		add_filter( 'bricks/code/echo_function_names', array( __CLASS__, 'bricks_echo_whitelist' ) );
	}

	/** Wert eines Parameters, gespeichert oder Standard. */
	public static function get( $key, $default = '' ) {
		$registry = self::registry();
		$options  = get_option( self::OPTION, array() );
		if ( isset( $options[ $key ] ) && '' !== trim( (string) $options[ $key ] ) ) {
			return (string) $options[ $key ];
		}
		if ( isset( $registry[ $key ] ) ) {
			return (string) $registry[ $key ][1];
		}
		return (string) $default;
	}

	/** [da key="telefon"] · [da key="telefon" link="1"] · [da key="email" link="1"] · [da key="adresse" br="1"] */
	public static function shortcode( $atts ) {
		$atts = shortcode_atts(
			array(
				'key'     => '',
				'default' => '',
				'link'    => '',
				'br'      => '',
				'class'   => '',
			),
			$atts,
			'da'
		);
		$key   = sanitize_key( $atts['key'] );
		$value = self::get( $key, $atts['default'] );
		if ( '' === $value ) {
			return '';
		}
		$class = $atts['class'] ? ' class="' . esc_attr( $atts['class'] ) . '"' : '';
		if ( $atts['link'] ) {
			if ( 'telefon' === $key ) {
				return '<a href="tel:' . esc_attr( self::get( 'telefon_link' ) ) . '"' . $class . '>' . esc_html( $value ) . '</a>';
			}
			if ( 'email' === $key ) {
				return '<a href="mailto:' . esc_attr( $value ) . '"' . $class . '>' . esc_html( $value ) . '</a>';
			}
		}
		$out = esc_html( $value );
		if ( $atts['br'] ) {
			$out = nl2br( $out );
		}
		return $out;
	}

	public static function bricks_echo_whitelist( $names ) {
		$names[] = 'da_param';
		return $names;
	}

	public static function admin_menu() {
		add_options_page( 'Digital Avenue Parameter', 'DA Parameter', 'manage_options', 'da-parameter', array( __CLASS__, 'render_page' ) );
	}

	public static function admin_init() {
		register_setting( 'da_parameter_group', self::OPTION, array( 'sanitize_callback' => array( __CLASS__, 'sanitize' ) ) );
	}

	public static function sanitize( $input ) {
		$clean = array();
		foreach ( self::registry() as $key => $def ) {
			if ( ! isset( $input[ $key ] ) ) {
				continue;
			}
			$clean[ $key ] = $def[3] ? sanitize_textarea_field( $input[ $key ] ) : sanitize_text_field( $input[ $key ] );
		}
		return $clean;
	}

	public static function render_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		$options = get_option( self::OPTION, array() );
		echo '<div class="wrap"><h1>Digital Avenue Parameter</h1>';
		echo '<p>Diese Werte erscheinen überall, wo <code>[da key="…"]</code> oder in Bricks <code>{echo:da_param(\'…\')}</code> steht. Leere Felder fallen auf den Standardwert zurück.</p>';
		echo '<form method="post" action="options.php">';
		settings_fields( 'da_parameter_group' );
		echo '<table class="form-table" role="presentation">';
		foreach ( self::registry() as $key => $def ) {
			list( $label, $default, $desc, $multiline ) = $def;
			$value = isset( $options[ $key ] ) ? $options[ $key ] : '';
			$name  = self::OPTION . '[' . $key . ']';
			echo '<tr><th scope="row"><label for="da_' . esc_attr( $key ) . '">' . esc_html( $label ) . '</label><br><code style="font-weight:normal">[da key="' . esc_html( $key ) . '"]</code></th><td>';
			if ( $multiline ) {
				echo '<textarea id="da_' . esc_attr( $key ) . '" name="' . esc_attr( $name ) . '" rows="3" class="large-text" placeholder="' . esc_attr( $default ) . '">' . esc_textarea( $value ) . '</textarea>';
			} else {
				echo '<input type="text" id="da_' . esc_attr( $key ) . '" name="' . esc_attr( $name ) . '" value="' . esc_attr( $value ) . '" class="regular-text" placeholder="' . esc_attr( $default ) . '">';
			}
			if ( $desc ) {
				echo '<p class="description">' . esc_html( $desc ) . '</p>';
			}
			echo '</td></tr>';
		}
		echo '</table>';
		submit_button( 'Parameter speichern' );
		echo '</form></div>';
	}
}

/** Template-Funktion: da_param('telefon') */
function da_param( $key, $default = '' ) {
	return DA_Parameter::get( $key, $default );
}

DA_Parameter::init();
