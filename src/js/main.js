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

	
	//Scrollbar mobile menu
	$(".header-nav").niceScroll({
			cursorcolor:"#ACACAC",
			cursorwidth:"8px",
			background:"#DBDBDB",
			cursorborder:"none",
			nativeparentscrolling: false,
			cursorfixedheight: 70,
			scrollspeed: 300,
			autohidemode: "scroll",
			cursorborderradius:4
	});


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
			
			if( keycode == 8 && inputVal <= 1 ) {
				$('.header-search-result-mobile').slideUp(400);
			}
		}

		if( $(document).width() >= tabletWidth ) {
			$('.header-search-result-desktop').slideDown(400).css("display", "flex");
			
			if( keycode == 8 && inputVal <= 1 ) {
				$('.header-search-result-desktop').slideUp(400);
			}
		}
	});	


	$('.header-search__close').on('click', function(){
		$('input.header-search__input').val('');
		$('.header-search-result-mobile').slideUp(400);
		$('.header-search-result-desktop').slideUp(400);
		
		setTimeout(function(){
			$('#header-search-section').fadeToggle();	
		},400);
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

	/* //Show search result */


	// Функия показа меню на мобильных экранах
	function mobileNavToggle() {
		if ($('.bg-header-nav').css('display') == 'none') {
			
			$('nav').insertBefore('.blur-wrapper')

			$('.bg-header-nav').show();
			$('.header-nav').animate().addClass('mobile-nav-open');	
			$('.blur-wrapper').addClass('filter-blur');
			$("body").addClass('overflow-hidden');		
			
		} else {
			
			$('.header-nav').animate().removeClass('mobile-nav-open');
								
			setTimeout(function(){
				$('nav').appendTo('.bg-header-nav .container');
				$('.bg-header-nav').hide();
				$('.blur-wrapper').removeClass('filter-blur');
				$("body").removeClass('overflow-hidden');			
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
		if (($('nav').has(e.target).length == 0) && e.target.id != 'toggle-menu') {
			
			if ($(window).width() > tabletWidth) {
			
				$('.menu-level-2').fadeOut();		
			
			} else {

				if (($('.bg-header-nav').css('display') == 'block')) {
					mobileNavToggle();
				}

			}
		}
	});

	// Обрабатываем переходы между мобильным и десктоп вариантами 
	$(window).resize(function(){
		var w = $(window).width();
		
		// Переход на десктоп
		if ((w >= tabletWidth) && currentWindowSize <= tabletWidth)  {
		    $('#menu-level-1 ul').hide();
		    
		    // Проверка меню на открытость при переходе
		    if ($('.bg-header-nav').css('display') == 'block') {
		    	console.log('sfsf');	
		    	$('nav').appendTo('.bg-header-nav .container');
		    	$('.blur-wrapper').removeClass('filter-blur');
		    }
				
			$('.bg-header-nav').show();			    
	
		// Переход на мобильный
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

	// Фокус на custom checkbox
	$('.footer-subscribe--checkbox-custom')
		.on( 'focus', function(){ $(this).addClass( 'has-focus' ); })
		.on( 'blur', function(){ $(this).removeClass( 'has-focus' ); 
	});

	// Выпадающий список
	var activeText = $('.drop-down-item--active').text();
	$('.drop-down-check').text(activeText);
	// показывается список
	$('.drop-down').on('click', function(){
		$('drop-down-item-block').slideDown();
	});

	$(document).on('mouseup', function (e){
		if (!$('.drop-down').is(e.target)
			&& $('.drop-down').has(e.target).length === 0) {
		}
	});

	$('.drop-down-check').on('click', function(){
		$('.drop-down-item-block').toggleClass('drop-down-item-block--show');
	});
	// при клике на элемент списка
	$('.drop-down-item').on('click', function(e){
		e.preventDefault();
		var clickedElemnt = e.target.getAttribute('class');
		var filterActive = 'drop-down-item--active';
		var activeText = $(this).text();
		// снятие и установка активного элемента списка
		if ( clickedElemnt.indexOf(filterActive) == -1 ) {
			$(this).parent().children('.drop-down-item').removeClass('drop-down-item--active');
			$(this).addClass('drop-down-item--active');
			$('.drop-down-check').text(activeText);
		}

		$('.drop-down-item-block').toggleClass('drop-down-item-block--show');

    });

});