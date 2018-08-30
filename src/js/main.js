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
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

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


	$('#toggle-menu').on('click', function(){
		$('.header-nav').slideToggle(100);
		$('#header-search-section').fadeOut(100);
	});

	// header menu navigation
	$('#menu-level-1 > li > a').on('click', function(){
		var $clickedItem = $(this);
		$('#header-search-section').fadeOut(100);
		

		if ($(window).width() >= tabletWidth) {
			
			// Открываем подменю 2 уровня, если были закрыты после мобильного варианта
			$('#menu-level-2 ul').show();	
			
			// Проверяем, если клик по закрытому элемету, то сворачиваем открытые
			if ($clickedItem.next().css('display') == 'none' || $clickedItem.next().css('display') == undefined) {
				$('#menu-level-1 > li > ul').fadeOut(100);
				$clickedItem.next().fadeIn(100).css('display','flex');		
			} else {
				$clickedItem.next().fadeOut(100);		
			}
		} else {
			
			$clickedItem.next().slideToggle(100);	
		}
		
	});

	$('#menu-level-2 > li > a').on('click', function(){
		var $clickedItem = $(this);
			
		if ($(window).width() <= tabletWidth) {
			$clickedItem.parent().find('ul').slideToggle(100);	
		}
		
	});



	// При клике по области, которая не является меню или его частью, сворачиваем меню
	$(document).on('click', function(e){
		if (($('#menu-level-1').has(e.target).length == 0) && ($('#toggle-menu').has(e.target).length == 0)) {
			if ($(window).width() > tabletWidth) {
				$('#menu-level-1 > li > ul').fadeOut();		
			} else {
				$('#menu-level-1 > li > ul').slideUp();		
				$('.header-nav').slideUp();		

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


	// Вызываем меню с поиском
	$('.toggle-search-block').on('click', function(){
		console.log('search');
		$('#header-search-section').fadeToggle();
	});


	// Фокус на custom checkbox
	$('.footer-subscribe--checkbox-custom')
		.on( 'focus', function(){ $(this).addClass( 'has-focus' ); })
		.on( 'blur', function(){ $(this).removeClass( 'has-focus' ); 
	});

	// UI KID input
	$('.input-field')
	.on('focus', function(){
		$(this).addClass('input-field--has-focus');
	})
	.on('blur', function(){
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		$(this).removeClass('input-field--has-focus');
		if(pattern.test($(this).val())){
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-success');
			$('.input-field--success-icon').show();
			$(this).addClass('input-field--success');
		} else {
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-error');
			$('.input-field--error-icon').show();
			$(this).addClass('input-field--error');
			$('.input-field__error-text').show();
		}
		if ($(this).val() == '') {
			$(this).removeClass('input-field--has-focus');
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			$('.input-field--error-icon').hide();
			$('.input-field__error-text').hide();
		}
	})
	.on( 'keydown', function(){
		var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var inputVal = $(this).val().length;
		if ( keycode == '13') {
			if(pattern.test($(this).val())){
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-success');
				$('.input-field--success-icon').show();
				$(this).addClass('input-field--success');
			} else {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$('.input-field--error-icon').show();
				$(this).addClass('input-field--error');
				$('.input-field__error-text').show();
			}
		} else {
			$(this).removeClass('input-field--success');
			$(this).removeClass('input-field--has-focus-success');
			$('.input-field--success-icon').hide();
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			$('.input-field--error-icon').hide();
			$('.input-field__error-text').hide();
		}
	});


});