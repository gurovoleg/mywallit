$(document).ready(function() {
	// Точка перелома между большими и мобильными экранами
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

	// Иконка с сердечком
	$('.toggle-heart-icon').on('click', function(){
		$(this).toggleClass('icon--red');
	});

	// Изменение картинки в блоке Фото товара в Каталоге
	$('.thumbnails__image').on('click',function(){
		var imgPath = $(this).attr('data-img-path');
		var mainImage = $('.switch-block__main-photo img')	
		
		mainImage.fadeOut(200, function(){
			mainImage.attr('src', imgPath).fadeIn(200);	
		});
	});	


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

	if($('.products-table-row').hasClass('products-table-row--open')){
		$('.products-table-row--open').find('.products-table-row__cell--link').text('Скрыть');
	} else {
		$(this).find('.products-table-row__cell--link').text('Подробнее');
	}
	// end card hover effect


	// Product counter
	(function productCounter() {
		var currentValue = parseInt($('.product-counter span').text());
		
		$('.product-counter > .btn-counter--plus').on('click', function(){
			updateCounter('up');	
		});
		
		$('.product-counter > .btn-counter--minus').on('click', function(){
			updateCounter('down');	
		});
		
		function updateCounter(action) {
		
			if (action == 'up') currentValue++;
			else if (currentValue > 1) currentValue--;

			$('.product-counter span').text(currentValue);	
		}
		
	}());
	//-- Product counter


	
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
  
	//- Show search result 
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
	//- Show search result 


	// Функция закрытия блока с поиском
	function headerSearchClose(){
		$('input.header-search__input').val('');
		$('.header-search-result-mobile').slideUp(400);
		$('.header-search-result-desktop').slideUp(400);
		
		setTimeout(function(){
			$('#header-search-section').fadeOut();	
		},400);
	}; 

	
	// Вызвать блок с поиском
	$('.toggle-search-block').on('click', function(){
		// закрываем навигацию
		$('.menu-level-2').fadeOut(100);
		$('#header-search-section').fadeIn();
	});

	// Закрыть блок с поиском
	$('.header-search__close').on('click', function(){
		headerSearchClose();
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

	// Отслеживаем клики вне области элементов и закрываем их
	$(document).on('click', function(e){
		
		// Навигация
		if (($('nav').has(e.target).length == 0) && e.target.id != 'toggle-menu') {
			
			if ($(window).width() > tabletWidth) {
				$('.menu-level-2').fadeOut();		
			} else {
				if (($('.bg-header-nav').css('display') == 'block')) {
					mobileNavToggle();
				}
			}
		}

		// Поиск
		if ( $('#header-search-section').has(e.target).length == 0) {
			var searchBlock = 'toggle-search-block';

			if ( !($(e.target).hasClass(searchBlock)) && $('.' + searchBlock).has(e.target).length == 0) {
				headerSearchClose();
			}
		}

	});

	// Обрабатываем переходы между мобильным и десктоп вариантами для навигации
	$(window).resize(function(){
		var w = $(window).width();
		
		// Переход на десктоп
		if ((w >= tabletWidth) && currentWindowSize <= tabletWidth)  {
		    $('#menu-level-1 ul').hide();
		    
		    // Проверка меню на открытость при переходе
		    if ($('.bg-header-nav').css('display') == 'block') {	
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



	// Фокус на custom checkbox
	$('.footer-subscribe--checkbox-custom')
		.on( 'focus', function(){ $(this).addClass( 'has-focus' ); })
		.on( 'blur', function(){ $(this).removeClass( 'has-focus' ); 
	});


	// Открываем фильтр на странице каталог при нажатии на Фильтр
	$('.catalog-filters__title').on('click', function(e){
		$('.catalog-filter').toggleClass('catalog-filter--show');
		
		if ( $(window).width() < tabletWidth ) {
			$("body").addClass('overflow-hidden');
		}
		
		$('.catalog-filter').css({'transition' : 'left 0.5s ease-in-out'});
	});

	// Закрываем фильтр при нажатии крестик
	$('#filter__close-icon').on('click', function(){
		$('.catalog-filter').toggleClass('catalog-filter--show');
		$("body").removeClass('overflow-hidden');
	});

	// Переход между мобильной версией и дестопом для городов и фильтра
	$(window).resize(function(){
		var w = $(window).width();
		
		// Переход на Desktop
		if (w >= tabletWidth) {
			$("body").removeClass('overflow-hidden');		
		}

		// Переход на планшет
		if (w < tabletWidth) {

			// Блоки с городами
			var isOpened = false;
			
			$('.city-selection-wrapper').each(function(){
				if ($(this).hasClass('d-block')) isOpened = true;
			})
			if (isOpened) $("body").addClass('overflow-hidden');			
			
			
			// Блок фильтр
			if ( $('.catalog-filter').hasClass('catalog-filter--show')) {
				$("body").addClass('overflow-hidden');
			} else {

				$('.catalog-filter').css({'transition' : 'none'});
			}

		}
		

		// if ( $('.catalog-filter').hasClass('catalog-filter--show') && w > 1152 ) {
		// 	$("body").css("overflow","auto");
		// }

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

    // Показать заказ на странице Заказа на мобильной версии
    $('#ordered-products-toggle').on('click', function(){
		$('#ordered-products').slideToggle();
	});

});