// $(document).ready(function(){
	$('.banner-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		customPaging : function(slider, i) {
			return '';
		},
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><a><div class="h1" style="visibility:hidden";>LEARN MORE</div><div class="arrow"><div class="head"></div></div></a></div>',
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><a><div class="h1" style="visibility:hidden";>LEARN MORE</div><div class="arrow"><div class="head"></div></div></a></div>',
		responsive: [ 
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false
				}
			}
		]
	});
// });
