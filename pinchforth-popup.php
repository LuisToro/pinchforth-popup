<?php
/*
Plugin Name: PinchForth Popup
Description: This plugin will add a popup form to your website.
Version: 1.0
Author: Luis Toro
*/

// If this file is called directly, abort.
if (!defined('WPINC')) {
  die;
}

// Load pluging assets files.
function my_popup_plugin_scripts()
{
  wp_enqueue_style('pinchforth-popup-css', plugins_url('/css/pinchforth-popup-style.css', __FILE__));
  wp_enqueue_script('pinchforth-popup-js', plugins_url('/js/pinchforth-popup-script.js', __FILE__), array('jquery'), '', true);
}
add_action('wp_enqueue_scripts', 'my_popup_plugin_scripts');

function my_popup_plugin_html()
{
?>
  <div id="pinchforth-modal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <picture>
        <img src="<?php echo plugins_url('/img/pinchforth-popup-image.webp', __FILE__); ?>" alt="hands holding a book">
      </picture>
      <div class="modal-content__copy-and-form">
        <div class="modal-content__copy">
          <h2>The Black Friday Sale is here</h2>
          <p>Subscribe and get our best price of the year</p>
        </div>
        <form id="pinchforth-form" class="modal-content__form" action="">
          <label for="email">EMAIL *</label>
          <input type="email" name="email" id="email" placeholder="Enter your email">
          <input type="submit" value="Get an EXTRA 20% off">
        </form>
      </div>
      <span class="close">&times;</span>
    </div>
  </div>
<?php
}
add_action('wp_footer', 'my_popup_plugin_html');
