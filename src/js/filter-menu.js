$(document).ready(function() {
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

	// Показать/закрыть категории фильтра
	$('.filter-menu-block__title').on('click', function(e){
		if (this == e.target) {
			if ($(window).width() <= tabletWidth){
				$(this).parent().children('.filter-submenu-block').slideToggle(150);
				$(this).children().toggleClass('is-opened');
			}
		}	
	});

	// Показать/закрыть категории фильтра по иконке
	$('.filter-item-toggle').on('click', function(e){
		$(this).parent().next().slideToggle(150);
		$(this).toggleClass('is-opened');
	});

	// Очищием форму
	$('.filter__clean-button a').on('click', function(e){
		e.preventDefault();
		$(".form-filter")[0].reset();	
	});

	// Показываем все внутренние меню при переходе на десктоп
	// а так же при обратном переходе свррачиваем меню и возвращаем крестик
	$(window).resize(function(){
		var w = $(window).outerWidth();

		if (w >= tabletWidth)  {
		    // console.log(w);
		    $('.catalog-filter').removeClass('catalog-filter--show')
		}
		// } else if (currentWindowSize >= tabletWidth) {
		// 	$('.filter-submenu-block').hide();
		// 	$('.filter-item-toggle').removeClass('is-opened');
		// }
		// currentWindowSize = w; 
	}); 

	
});
