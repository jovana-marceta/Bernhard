
$('.gallery-slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	centerMode: true,
	centerPadding: '0px',
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><a><div class="h1" style="visibility:hidden";>LEARN MORE</div><div class="arrow"><div class="head"></div></div></a></div>',
	nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><a><div class="h1" style="visibility:hidden";>LEARN MORE</div><div class="arrow"><div class="head"></div></div></a></div>',
	responsive: [
		{
			breakpoint: 780,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			}
		}
	]
});
	  