$(window).on("load",function(){

    $(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	$(".testimonials-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});

});

