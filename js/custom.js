$(document).ready(function(){               
    $(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({

		full_width: true,
		time_constant: 100
	});

	$('.carousel').carousel({
		indicators: true,
	    padding: 200    
	});
	autoplay();

	function autoplay() {
	    $('.carousel').carousel('next');
	    setTimeout(autoplay, 5000);
	}
});

