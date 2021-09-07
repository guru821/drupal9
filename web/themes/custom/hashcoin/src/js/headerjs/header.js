(function($, Drupal) {
    Drupal.behaviors.custom = {
      attach: function(context, settings) {


        $('#block-hashcoin-main-menu > .menu li a').click(function (e) {
          e.preventDefault();
          $('#block-hashcoin-main-menu > .menu li a').removeClass('is-active');
          $(this).addClass('is-active');                
      });  

        }
      };
    })(jQuery, Drupal);   
  