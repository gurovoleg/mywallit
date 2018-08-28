$(document).ready(function() {

		//-card hover effect
	$(".product-img").hover(
		function() {			
			if($(window).width() >= 1152){
			$this = $(this);
			$this.attr("src", $this.attr('data-hover'));
			}
		},
		function() {
			if($(window).width() >= 1152){
			$this = $(this);
			$this.attr("src", $this.attr('data-src'));
			}
		}
	);
	//-end card hover effect
	
	// Точка перелома между большими и мобильными экранами
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

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


	$('#toggle-menu').on('click', function(){
		$('.header-nav').slideToggle(200);
		// if ($('.header-nav').css('display') == 'none') {
		// 	$('.header-nav').show().animate({'left': '16px'},500);	
		// } else {
		// 	$('.header-nav').animate({'left': '-330px'},300).hide(500);	
		// }
		
	});

	// header menu navigation
	$('#menu-level-1 > li > a').on('click', function(){
		var $clickedItem = $(this);

		if ($(window).width() >= tabletWidth) {
			
			// Открываем подменю 2 уровня, если были закрыты после мобильного варианта
			$('#menu-level-2 ul').show();	
			
			// Проверяем, если клик по закрытому элемету, то сворачиваем открытые
			if ($clickedItem.next().css('display') == 'none' || $clickedItem.next().css('display') == undefined) {
				$('#menu-level-1 > li > ul').fadeOut();
				$clickedItem.next().fadeIn().css('display','flex');		
			} else {
				$clickedItem.next().fadeOut();		
			}
		} else {
			
			$clickedItem.next().slideToggle();	
		}
		
	});

	$('#menu-level-2 > li > a').on('click', function(){
		var $clickedItem = $(this);
			
		if ($(window).width() <= tabletWidth) {
			$clickedItem.parent().find('ul').slideToggle();	
		}
		
	});



	// При клике по области, которая не является меню или его частью, сворачиваем меню
	$(document).on('click', function(e){
		if ($('#menu-level-1').has(e.target).length == 0) {
			if ($(window).width() > tabletWidth) {
				$('#menu-level-1 > li > ul').fadeOut();		
			} else {
				$('#menu-level-1 > li > ul').slideUp();		

				// $('.header-nav').slideUp();		

			}
		}
		
	});

	// Закрываем все открытые меню при переходе с мобильного на большой экран
	$(window).resize(function(){
		var w = $(window).width();
		if ((w >= tabletWidth) && currentWindowSize <= tabletWidth)  {
		    $('#menu-level-1 ul').hide();
		    $('.header-nav').show();	
		}
		currentWindowSize = w;
	});

});