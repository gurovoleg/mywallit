$(document).ready(function() {
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

	// Показать/закрыть категории фильтра
	$('.filter-menu-block__title').on('click', function(e){
		console.log('title click');
		console.log(this);
		console.log(e.target);
		
		if (this == e.target) {
			console.log('inside');
			if ($(window).width() <= tabletWidth){
				$(this).parent().children('.filter-submenu-block').slideToggle(150);
				$(this).children().toggleClass('is-opened');
			}
		}	
	});

	// Показать/закрыть категории фильтра по иконке
	$('.filter-icon-close').on('click', function(e){
		$(this).parent().next().slideToggle(150);
		$(this).toggleClass('is-opened');
	});

	// Показываем все внутренние меню при переходе на десктоп
	// а так же при обратном переходе свррачиваем меню и возвращаем крестик
	// $(window).resize(function(){
	// 	var w = $(window).width();
	
	// 	if (w >= tabletWidth)  {
	// 	    $('.filter-menu-l2').show();	
	// 	} else {
	// 		if (currentWindowSize >= tabletWidth) {
	// 			$('.filter-menu-l2').hide();
	// 			$('.filter-icon-close').removeClass('is-opened');
	// 		}
	// 	}
	// 	currentWindowSize = w; 

	// }); 

	// Очищием форму
	$('.filter__clean-button a').on('click', function(e){
		e.preventDefault();
		$(".form-filter")[0].reset();	
	});
	
});
