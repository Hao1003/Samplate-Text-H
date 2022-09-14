$(document).ready(function() {
	// Scroll Events
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};
		//Scroll Effects
	});
	$("nav.menu ul li a").click(function(){
		$("a.active").removeClass("active");
		$(this).addClass('active');
   
	});


	// Navigation
	$('i.fa.fa-bars').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('.menu-mobie').toggleClass('open');
		$('.overlay').toggleClass('active');
		if ($('.menu-mobie').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('.menu-mobie').removeClass('open');
			})
		}
	});


	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();



});
