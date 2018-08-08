$(document).ready(function() {
	// Init mixitup
	var mixer = mixitup('.port-body');

	// Init aos
	AOS.init({
		offset: 50,
		duration: 700
	});
	$('.multiple-items').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	      // You can unslick at a given breakpoint now by adding:
	      // settings: "unslick"
	      // instead of a settings object
	      ]
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
		
	$('#auto-type').easyTicker({
		direction: 'up',
		easing: 'swing',
		speed: 'slow',
		interval: 6000,
		height: 27,
		visible: 0,
		mousePause: 1,
		controls: {
			up: '',
			down: '',
			toggle: '',
			playText: 'Play',
			stopText: 'Stop'
		}
	});
	// Init Couter Up
	$('.counter-c').counterUp({
		delay: 10,
		time: 1000
	});
	// Init tabs
	$('.tabs').tabs();
	// Init 
	$('.materialboxed').materialbox();
	// Init
	$('.parallax').parallax();
	 // Init Tooltip
	 $('.tooltipped').tooltip();
	});
