/* -------------------------------------------------------------------
 * Plugin Name           : Hopper - Full Width Toggle Menu
 * Author Name           : Epic_Theme
 * Author URI            : https://codecanyon.net/user/epic_theme/
 * Created Date          : 16 January 2021
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */

/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Toggle Menu
*/

(function ($) {
  "use strict";

    // Call all ready functions
    hopper_menuToggle();
    
})(window.jQuery);

/* ------------------------------------------------------------------- */
/* 01.Toggle Menu
/* ------------------------------------------------------------------- */
function hopper_menuToggle() {
    "use-strict";

  // Variables
  let toggleMenu = document.querySelector('.toggle');
  let section = document.querySelector('#toggleMenu');

  toggleMenu.addEventListener('click',function(){
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
  })
      
  
}