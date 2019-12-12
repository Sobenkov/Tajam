$(function() {

	// slieder intro

	let slider = $("#introSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		autoplay: true,
  			autoplaySpeed: 5000,
  		dots: true,

	});

	// slider reviews
	let reviewsSlider = $("#reviewsSlider");

	reviewsSlider.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,  
	  asNavFor: '#photoSlider',
	});

	let photoSlider = $("#photoSlider");
	photoSlider.slick({
		asNavFor: '#reviewsSlider',
		slidesToShow: 3,
  		centerMode: true,
  		slidesToScroll: 1,               
  		dots: false,
  		infinite: true, 
  		variableWidth: true,  
  		arrows:true,
  		autoplay: true,
  			autoplaySpeed: 5000,
  		 nextArrow: '.slick_next',
 		 prevArrow: '.slick_prev',
});

	//fixed header 

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});
	
	// smooth scroll

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 60
		}, 700);

	});	

});