$(document).ready(function() {
	
	// Точка перелома между большими и мобильными экранами
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

	//-card hover effect
	$(".product-img").hover(
		function() {			
			if($(window).width() >= tabletWidth){
			$this = $(this);
			$this.attr("src", $this.attr('data-hover'));
			}
		},
		function() {
			if($(window).width() >= tabletWidth){
			$this = $(this);
			$this.attr("src", $this.attr('data-src'));
			}
		}
	);
	//-end card hover effect
	
	
	// Scrollbar боковой панели (меню)
	$(".left-panel").customScrollbar({preventDefaultScroll: true});
	
	
	// Убрать/Добавить боковую панель (меню)
	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});
  
	/* Show search result */
	$('input.header-search__input').keydown(function(){
		var inputVal = $(this).val().length;
		keycode = window.event.keyCode;

		if( $(document).width() < tabletWidth ) {
			$('.header-search-result-mobile').slideDown(400);
			
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-mobile').slideUp(400);
			}
		}

		if( $(document).width() >= tabletWidth ) {
			$('.header-search-result-desktop').slideDown(400).css("display", "flex");
			
			if( keycode == 8 && inputVal == 1 ) {
				$('.header-search-result-desktop').slideUp(400);
			}
		}

		$('.header-search__close').on('click', function(){
			$('input.header-search__input').val('');
			$('.header-search-result-mobile').slideUp(400);
			$('.header-search-result-desktop').slideUp(400);
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


	// Функия показа меню на мобильных экранах
	function mobileNavToggle() {
		if ($('.bg-header-nav').css('display') == 'none') {
			
			$('nav').insertBefore('.blur-wrapper')

			$('.bg-header-nav').show();
			$('.header-nav').animate().addClass('mobile-nav-open')	
			$('.blur-wrapper').addClass('filter-blur')		
			
		} else {
			
			$('.header-nav').animate().removeClass('mobile-nav-open');
								
			setTimeout(function(){
				$('nav').appendTo('.bg-header-nav .container');
				$('.bg-header-nav').hide();
				$('.blur-wrapper').removeClass('filter-blur');			
			}, 500);
		}
	}


	// Открываем меню на мобильных экранах
	$('#toggle-menu').on('click', function(){
		mobileNavToggle();
		// Убираем блок с поиском
		$('#header-search-section').fadeOut(100);
	});

	


	// Обработка меню 2 уровня
	$('#menu-level-1 > li > a').on('click', function(){
		var $clickedItem = $(this);
		$('#header-search-section').fadeOut(100);

		if ($(window).width() >= tabletWidth) {
			// Открываем подменю 2 уровня, если были закрыты после мобильного варианта
			$('.menu-level-2 ul').show();	
			
			// Проверяем, если клик по закрытому элемету, то сворачиваем открытые
			if ($clickedItem.parent().find('.menu-level-2').css('display') == 'none' || $clickedItem.parent().find('.menu-level-2').css('display') == undefined) {
				$('.menu-level-2').fadeOut(100);
				$clickedItem.parent().find('.menu-level-2').fadeIn(100).css('display','flex');		
			} else {
				$clickedItem.parent().find('.menu-level-2').fadeOut(100);		
			}
		
		} else {
			
			if ($clickedItem.parent().find('.menu-level-2').css('display') == 'none' || $clickedItem.parent().find('.menu-level-2').css('display') == undefined) {
				$('.menu-level-2').slideUp(200);
			}
			$clickedItem.parent().find('.menu-level-2').slideToggle(200);

		}
	});

	
	// Обработка меню 3 уровня
	$('.menu-level-2 > li > a').on('click', function(){
		var $clickedItem = $(this);
			
		if ($(window).width() <= tabletWidth) {
			// Проверяем, если клик по закрытому элемету, то сворачиваем открытые
			if ($clickedItem.parent().find('.menu-level-3').css('display') == 'none') {
				$('.menu-level-3').slideUp(200);
			}
			$clickedItem.parent().find('.menu-level-3').slideToggle(100);	
		}
		
	});

	// При клике по области, которая не является меню или его частью, сворачиваем меню
	$(document).on('click', function(e){
		if (($('nav').has(e.target).length == 0) && ($('#toggle-menu').has(e.target).length == 0)) {
			
			if ($(window).width() > tabletWidth) {
				$('.menu-level-2').fadeOut();		
			} else {
				if (($('.bg-header-nav').css('display') == 'block')) {
					mobileNavToggle();
				}
			}
		}
	});

	// Закрываем все открытые меню при переходе с мобильного на большой экран
	$(window).resize(function(){
		var w = $(window).width();
		if ((w >= tabletWidth) && currentWindowSize <= tabletWidth)  {
		    $('#menu-level-1 ul').hide();
		    $('.bg-header-nav').show();	
		} else {
			if ((w < tabletWidth) && currentWindowSize >= tabletWidth)  {
		    	$('.bg-header-nav').hide();	
			}
		}

		currentWindowSize = w;
	});


	// Вызываем меню с поиском
	$('.toggle-search-block').on('click', function(){
		// закрываем навинацию
		$('.menu-level-2').fadeOut(100);
		$('#header-search-section').fadeToggle();
	});

	// Фокус на input
	$('.footer-subscribe--input')
		.on( 'keydown', function(){
			var inputVal = $(this).val().length;
			keycode = window.event.keyCode;
			if( keycode != 9 ) {
				$('.footer-subscribe--checkbox-label-focus').fadeIn(400);
			}
			if( keycode == 8 && inputVal == 1 ) {
				$('.footer-subscribe--checkbox-label-focus').fadeOut(400);
			}
		})
		.on( 'blur', function(){ 
			$(this).removeClass( 'has-focus' ); 

	});

});