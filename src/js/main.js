$(document).ready(function() {
	// Точка перелома между большими и мобильными экранами
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();
	console.log(currentWindowSize);
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
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
			}
		}
		
	});

	// Закрываем все открытые меню при переходе с мобильного на большой экран
	$(window).resize(function(){
		var w = $(window).width();
		if ((w >= tabletWidth) && currentWindowSize <= tabletWidth)  {
		    $('#menu-level-1 ul').hide();
		}
		currentWindowSize = w;
	});

});