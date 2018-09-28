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

	// end card hover effect

	// promo-code input		
	$('.ordered-promo-type__link').on('click', function(e){
		var inputPlaceholder = $(this).attr('data-placeholder');
		e.preventDefault();
		$(this).removeClass('passive-type');
		$(this).siblings('a').addClass('passive-type');
		$('.promo-input').siblings('span').text(inputPlaceholder);
	});	
	//end promo-code input


	// Product counter
	(function productCounter() {
		var currentValue, currentParent;

		$('.product-counter > .btn-counter--plus').on('click', function(){
			currentParent = $(this).parent();
			currentValue = currentParent.find('span').text();
			updateCounter('up');	
		});
		
		$('.product-counter > .btn-counter--minus').on('click', function(){
			currentParent = $(this).parent();
			currentValue = parseInt($(this).parent().find('span').text());
			updateCounter('down');	
		});
		
		function updateCounter(action) {
			
			if (action == 'up') currentValue++;
			else if (currentValue > 1) currentValue--;
			
			currentParent.find('span').text(currentValue);	
		}
		
	}());
	//-- Product counter
	
	// Scrollbar боковой панели (меню)
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	
	//Scrollbar mobile menu
	// $(".header-nav").niceScroll({
	// 		cursorcolor:"#ACACAC",
	// 		cursorwidth:"8px",
	// 		background:"#DBDBDB",
	// 		cursorborder:"none",
	// 		nativeparentscrolling: false,
	// 		cursorfixedheight: 70,
	// 		scrollspeed: 300,
	// 		autohidemode: "scroll",
	// 		cursorborderradius:4
	// });


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

			$('.bg-header-nav').addClass('d-block');
			
			$('.header-nav').animate().addClass('mobile-nav-open');	
			$('.blur-wrapper').addClass('filter-blur');
			$("body").addClass('overflow-hidden');		
			
		} else {
			
    		$('.header-nav').animate().removeClass('mobile-nav-open');
						
			setTimeout(function(){
				$('nav').appendTo('.bg-header-nav .container');
				$('.bg-header-nav').removeClass('d-block');
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
			} else 	if ($('.header-nav').hasClass('mobile-nav-open')) {
				mobileNavToggle();
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
		    $('#menu-level-1 ul').hide(); // сворачивает все меню при ресайзе
		    
		    // Проверка меню на открытость при переходе
	    	if ($('.header-nav').hasClass('mobile-nav-open')) {
	    		$('.header-nav').removeClass('mobile-nav-open');
	    		$('nav').appendTo('.bg-header-nav .container');
	    		$('.blur-wrapper').removeClass('filter-blur');
	    	}
				
		// Переход на мобильный
		} else if ((w < tabletWidth) && currentWindowSize >= tabletWidth)  {
		   	$('.bg-header-nav').removeClass('d-block');	
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
		// $('.catalog-filter').animate({left: 0}, 100);

		if ( $(window).width() < tabletWidth ) {
			$("body").addClass('overflow-hidden');
		}
		
		$('.catalog-filter').css({'transition' : 'left 0.5s ease-in-out'});
	});

	// Закрываем фильтр при нажатии крестик
	$('#filter__close-icon').on('click', function(){
		$('.catalog-filter').removeClass('catalog-filter--show');
		// $('.catalog-filter').animate({left: "-200vh"}, 100);
		$("body").removeClass('overflow-hidden');
	});

	// Переход между мобильной версией и дестопом для городов и фильтра
	$(window).resize(function(){
		var w = $(window).outerWidth();
		
		// Переход на Desktop (исключая открытую корзину)
		if ( w >= tabletWidth && $('.goods-cart__page-bg').css('display') == 'none' ) {
			$('body').removeClass('overflow-hidden');		
		}

		// Переход на планшет
		if (w < tabletWidth) {
			// Блоки с городами
			var isOpened = false;
			
			$('.city-selection-wrapper').each(function(){
				if ($(this).hasClass('d-block')) isOpened = true;
			})
			if (isOpened) $('body').addClass('overflow-hidden');	
			
			// Блок фильтр
			if ( $('.catalog-filter').hasClass('catalog-filter--show')) {
				console.log('add');
				$('body').addClass('overflow-hidden');
			} else {
				$('.catalog-filter').css({'transition' : 'none'});
			}
		}

	});

    // Удалению продукта из корзины
    $('.goods-cart__close-icon').on('click', function(){
    	$(this).parents('.goods-cart-wrapper').remove('.goods-cart-wrapper').fadeOut(1000);
    });

    // Показать заказ на странице Заказа на мобильной версии
    $('#ordered-products-toggle').on('click', function(){
		$('#ordered-products').slideToggle();
	});

	// Лейбл в textarea на странице Контакты
	
	$('.form-contact-page__textarea')
	.on('focus', function() {
		$('.form-contact-page__textarea-label').addClass('form-contact-page__textarea-label--focus');
		$('.form-contact-page__textarea-label').on('click', function() {
			$('.form-contact-page__textarea-label').addClass('form-contact-page__textarea-label--focus');
		});
		$('.form-contact-page__textarea').parent().find('.input-field__error-text').css('display', 'none');

	})
	.on('blur', function() {
		if( $('.form-contact-page__textarea').val() == '' ){
			$('.form-contact-page__textarea-label').removeClass('form-contact-page__textarea-label--focus');	
		}		
	})
	.on('keydown', function( event ){ 
		var keycode = event.which;
		var textareaVal = $('.form-contact-page__textarea').val().length;
		// textareaVal++;
		if ( keycode == 8 ) {
			console.log(textareaVal);
		}
		if( textareaVal == 1 && keycode == 8 ) {
			$('.form-contact-page__textarea').parent().find('.input-field__error-text').css('display', 'block');
		}
	});

	$('.form-contact-page__textarea-label')
	.on('click',function(){
	$('.form-contact-page__textarea-label').addClass('form-contact-page__textarea-label--focus');
	$(this).parent().find($('.form-contact-page__textarea')).select();

	})
	.on('blur', function(){
		$('.form-contact-page__textarea-label').removeClass('form-contact-page__textarea-label--focus');
	});
});