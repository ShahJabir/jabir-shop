<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'e?9.%KI2DR*m.pCI7T%06vcX|b2x^p_=/C*y1qz&z`E9tr4-p{(.9}m,U8%$5F]t' );
define( 'SECURE_AUTH_KEY',   'js|0DoadG~=@PsAa#^4!Iup/{Vt(*p~Tgnt;+WD(hISHAJ2fNn48[g#O>ju8@5)G' );
define( 'LOGGED_IN_KEY',     '.=]owsez}4`lWI3&61$x-Rm?k6lny1J{dg54eMAW9&6vUlY=fR}mEUlqp%GAXKz{' );
define( 'NONCE_KEY',         'h#wqK%N!+>RN!JgOM*s+2@L.6$/5[+%EaC|#&>>rUY`M}kt8btmI_aYj>&-f5JrV' );
define( 'AUTH_SALT',         'FtE|2<47h8%jeYl_!S=[/N,4Q+7W1BOry+rm]*2kBW)~iYW7{x{h9 aYOh3V*h$w' );
define( 'SECURE_AUTH_SALT',  '^RF4{10na96K4M[E*6,p]&fRaq_`5YKL8t4n/WTW=:Dqv:rrEM!p}`r/Vv*G!+Ps' );
define( 'LOGGED_IN_SALT',    'NpNp7Bwdqs<i;=ZWq-ptoXrJv5JIfD#vF/=N=Q~?uu]cUEk-g4Se6;Ry<kUx-CxS' );
define( 'NONCE_SALT',        ' B!OcHjTI`;4fzVF^wKk+:UqHW0jRlt<4>/mM~Ft8ZD)`)U=*JsqCewn@]e2Q#BV' );
define( 'WP_CACHE_KEY_SALT', 'MlMQSOk/1i:HSg}n{=A~3`1>:w4fV&0X1z5,]cJCC)<!35]rq4uIH:!g_@Xe`5K$' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
