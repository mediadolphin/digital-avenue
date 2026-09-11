<?php
/**
 * Plugin Name: Digital Avenue Content Model
 * Description: Custom Post Types, Taxonomien, Meta-Box-Felder und Settings Page für digital-avenue.de. Datenmodell als Code, versioniert im Repository.
 * Version: 0.1.0
 * Requires at least: 6.9
 * Requires PHP: 7.4
 * Author: Digital Avenue UG
 * Text Domain: da-content-model
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DA_CM_VERSION', '0.1.0' );
define( 'DA_CM_DIR', plugin_dir_path( __FILE__ ) );

require_once DA_CM_DIR . 'includes/post-types.php';
require_once DA_CM_DIR . 'includes/taxonomies.php';
require_once DA_CM_DIR . 'includes/fields.php';
require_once DA_CM_DIR . 'includes/settings-pages.php';

/**
 * Hinweis im Admin, wenn Meta Box fehlt. Die Post-Typen funktionieren auch
 * ohne Meta Box, die Felder und die Settings Page nicht.
 */
add_action( 'admin_notices', function () {
	if ( defined( 'RWMB_VER' ) ) {
		return;
	}
	echo '<div class="notice notice-warning"><p><strong>Digital Avenue Content Model:</strong> Meta Box ist nicht aktiv. Felder und Settings Page werden nicht geladen.</p></div>';
} );

/**
 * Aktivierung: Post-Typen registrieren, Permalinks neu schreiben, feste
 * Zielgruppen anlegen.
 */
register_activation_hook( __FILE__, function () {
	da_cm_register_post_types();
	da_cm_register_taxonomies();
	da_cm_seed_terms();
	flush_rewrite_rules();
} );

register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );
