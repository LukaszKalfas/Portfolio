$(function() {

      var $button = $('<div class="btnScroll"></div>')
      var $arrow = $('<i class="fas fa-angle-double-up"></i>')

      $button.css({
            'background': 'rgba(143, 135, 126, 0.432)',
            'padding': '10px',
            'position': 'fixed',
            'right': '30px',
            'bottom': '20px',
            'border-radius': '3px',
            'display': 'none'
      });
      $arrow.css({
            'color': '#f3f3f3',
            'font-size': '20px'
      })
   $button.prepend($arrow);   
   $button.appendTo('body');

      $(window).scroll(function () {
            if ($(this).scrollTop() >= $('#about').offset().top + $('#about').height())  {
                  $button.fadeIn();
            } else {
                  $button.fadeOut();
            }
      });

      $button.on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
      })
});