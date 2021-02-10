$('.product-slider').slick({
	arrows: false,
	dots: true,
	speed: 1000,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});