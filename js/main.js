$(document).ready(function () {
      $('.menu').on('click', function () {
            $('.bar').toggleClass('open');
            $('nav').toggleClass('open');
      });

      $('a[href^="#"]').bind('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                  scrollTop: $(target).offset().top
            }, 600, function () {
                  location.hash = target ; //attach the hash (#jumptarget) to the pageurl
            });
            $('.bar').removeClass('open');
            $('nav').removeClass('open');
      });

      $('.download a[href$=".pdf"]')
            .attr('download', '')   // set atribute download
            .attr('target', '_blank');
});
