$(document).ready(function() {
	
	$('#map').height($('.cnt-form').height());
	// Code for about me section
	$('.about-me .bio-col .social-link a').hover(function() {
		$(this).toggleClass('pulse');
	});
	// code for go top button
	$('.go-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 999);
	});

	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll >= 400) {
			$('.site-nav').addClass('active');
		} else {
			$('.site-nav').removeClass('active');
		}
	});
	// Code for testimonial
	// $('.testimonial .tml-body .slider-nav .single-client').addClass('pulse');
	$('.blog .blog-body .single-item .card-image').hover(function() {
		$(this).children('.blog-c-img').toggleClass('pulse');

	});
	$('.contect .single-item').hover(function(){
		$(this).children('.icon').toggleClass('pulse');
	});
});

