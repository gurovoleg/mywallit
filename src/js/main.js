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

		if( $(document).width() < 1152 ) {
			$('.header-search-result-mobile').slideDown(400);
			$('.header-search').css({'border-bottom': '1px solid #C4C4C4',
									'box-shadow': 'none'});
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-mobile').slideUp(400);
				$('.header-search').css({'box-shadow': '0px 3px 10px -3px rgba(0, 0, 0, 0.3)',
											'border-bottom': 'none'});
			}
		}

		if( $(document).width() >= 1152 ) {
			$('.header-search-result-desktop').slideDown(400).css("display", "flex");
			$('.header-search').css({'border-bottom': '1px solid #C4C4C4',
									'box-shadow': 'none'});
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-desktop').slideUp(400);
				$('.header-search').css({'box-shadow': '0px 3px 10px -3px rgba(0, 0, 0, 0.3)',
											'border-bottom': 'none'});
			}
	}

	$('.header-search__close').on('click', function(){
		$('input.header-search__input').val('');
		$('.header-search-result-mobile').slideUp(400);
		$('.header-search-result-desktop').slideUp(400);
		$('.header-search').css({'box-shadow': '0px 3px 10px -3px rgba(0, 0, 0, 0.3)',
									'border-bottom': 'none'});
	});

	$(window).resize(function(){
		if( $(window).width() <= 1152 && $('input.header-search__input').val() != '') {
			$('.header-search-result-desktop').css("display", "none");
			$('.header-search-result-mobile').css("display", "block");
		}
		if( $(window).width() > 1152 && $('input.header-search__input').val() != '') {
			$('.header-search-result-desktop').css("display", "flex");
			$('.header-search-result-mobile').css("display", "none");
		}
	});
});
/* //Show search result */

});