$(document).ready(function() {
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});

	/* Show search result */
	$('input.header-search__input').keydown(function(){
		var inputVal = $(this).val().length;
		keycode = window.event.keyCode;
		console.log(keycode);

		if( $(document).width() <= 784 ) {
			$('.header-search-result-mobile').slideDown(400);
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-mobile').slideUp(400);
			}
		}

		if( $(document).width() > 784 ) {
			$('.header-search-result-desktop').slideDown(400).css("display", "flex");
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-desktop').slideUp(400);
			}
		}

		$(window).resize(function(){
			if( $(window).width() <= 784 ) {
				$('.header-search-result-desktop').css("display", "none");
				$('.header-search-result-mobile').css("display", "block");
			}
			if( $(window).width() > 784 ) {
				$('.header-search-result-desktop').css("display", "flex");
				$('.header-search-result-mobile').css("display", "none");
			}
		});
	});
	/* //Show search result */

});