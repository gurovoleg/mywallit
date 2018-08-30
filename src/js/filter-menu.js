$(document).ready(function() {
	var tabletWidth = 1152;
	var currentWindowSize = $(window).width();

	$(document).on('click',function(e){
		console.log(e.target);
	})

	// Показать/закрыть категории фильтра
	$('.filter-menu-l1 li').on('click', function(e){
		if (this == e.target) {
			if ($(window).width() <= tabletWidth){
				$(this).find('ul').slideToggle();
				$(this).children(':first').toggleClass('is-opened');
			}
		}	
	});

	// Показать/закрыть категории фильтра по иконке
	$('.filter-icon-close').on('click', function(e){
		$(this).parent().find('ul').slideToggle();
		$(this).toggleClass('is-opened');
	});

	// Показываем все внутренние меню при переходе на десктоп
	// а так же при обратном переходе свррачиваем меню и возвращаем крестик
	$(window).resize(function(){
		var w = $(window).width();
	
		if (w >= tabletWidth)  {
		    $('.filter-menu-l2').show();	
		} else {
			if (currentWindowSize >= tabletWidth) {
				$('.filter-menu-l2').hide();
				$('.filter-icon-close').removeClass('is-opened');
			}
		}
		currentWindowSize = w;

	}); 

	// Очищием форму
	$('.filter__clean-button a').on('click', function(e){
		e.preventDefault();
		$(".form-filter")[0].reset();	
	});
	

});
