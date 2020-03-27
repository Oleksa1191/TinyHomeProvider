(function ($) {
    "use strict";

    $(document).ready(function () {
        /*$('#responsive-menu-button').sidr({
           name: 'sidr-main',
           source: '#navigation'
         });*/



        var carousel = $(".testimonials-box .owl-carousel");
        carousel.owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            stagePadding: 40,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
        checkClasses();
        carousel.on('translated.owl.carousel', function (event) {
            checkClasses();
        });

        function checkClasses() {
            var total = $('.testimonials-box .owl-stage .owl-item.active').length;
            $('.testimonials-box .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');
            $('.testimonials-box .owl-stage .owl-item.active').each(function (index) {
                if (index === 0) {
                    // this is the first one
                    $(this).addClass('firstActiveItem');
                }
                if (index === total - 1 && total > 1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem');
                }
            });
        }

    });



})(jQuery);
