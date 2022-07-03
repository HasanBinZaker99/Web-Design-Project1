$(document).ready(
	(function () {
	  "use strict";
	  //meanmenu
	  $("#navbar nav").meanmenu();
	  if ($(".slider-area").length) {
		$(".slider-area").owlCarousel({
		  items: 1,
		  animateOut: "fadeOut",
		  animateIn: "fadeIn",
		  loop: true,
		  margin: 0,
		  nav: false,
		  singleItem: true,
		  smartSpeed: 500,
		  autoplay: true,
		  autoplayTimeout: 6000,
		});
	  }
	  //Isotope
	})(jQuery)
  );

  $(document).ready(function($){
	"use strict";

	//To Initialize the ISO Tope
	$('.project-list').isotope();

	$('.project-titles8 li').on('click',function(){
		$('.project-titles8 li').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-list').isotope({
			filter:selector
		});
	});

}(jQuery));

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: true
    });
});

// Mean menu
$(document).ready(function($){
	"use strict";

  //jQuery Sticky Area
  $(".sticky-area").sticky({
    topSpacing: 0,
  });
  // SCROLLTO THE TOP

  // Show or hide the sticky footer button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
      $(".scroll-top").fadeIn(100);
    } else {
      $(".scroll-top").fadeOut(100);
    }
  });

  // Animate the scroll to top
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });
			  // Preloader JS
			  function preloader() {
				if ($("#preloader").length) {
				  $(window).on("load", function () {
					$("#preloader").fadeOut();
					$("#preloader").delay(5000).fadeOut("slow");
				  });
				}
			  }
			  preloader();
});