(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });



})(jQuery);

$(document).ready(function() {
    $("#tier_1_counter")
      .countdown("2017/04/15 17:00:00", function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });

    $("#tier_2_counter")
      .countdown("2017/04/22 17:00:00", function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });

    $("#tier_3_counter")
      .countdown("2017/04/29 17:00:00", function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });

    $("#tier_4_counter")
      .countdown("2017/05/6 17:00:00", function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });
});
