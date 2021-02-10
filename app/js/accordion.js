
$(function () {
	
	'use strict';
	
	// Give Active Class
	$('.accordion-item').first().addClass('is-active');
	
	// Show First Info

	$('.accordion-content').first().show()
	.animate({width: '1038px'})
	.animate({width: '100%'}, 700);
	
	
	// Show Info On Click
	$('.accordion-item').click(function () {
		
		$(this).addClass("is-active").siblings('.accordion-item').removeClass('is-active');
		
		$(this).next().show().animate({width: '1038px'}).animate({width: '100%'}, 700).siblings('.accordion-content').animate({width: 0}, function () {
			
			$(this).hide();
			
		});
		
	});
	
});