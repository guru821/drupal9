Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
        $().ready(function () {
            $('.slick-carousel').slick({
                autoplay: true,
                arrows: false,
                centerPadding: "0px",
                dots: true,
                slidesToShow: 1,
                infinite: true
            });
        });
    }
};

//# sourceMappingURL=custom.js.map
