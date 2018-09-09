$(document).ready(function(){

	// Аккордеон страница Описание товара	
	(function() {

		$('.accordion-item__title').on('click',function(){
			var activeClass = 'accordion-item__title--active';
			var $item = $(this).next();
			
			if ( !($(this).hasClass(activeClass)) ) {
				$('.accordion').find('.accordion-item__content').slideUp();
				$('.accordion').find('.accordion-item__title').removeClass(activeClass);
				
				$(this).addClass(activeClass);
				$item.slideDown();
			} else {
				$(this).removeClass(activeClass);
				$item.slideUp();
			}
		});

	}());
	//-- Аккордеон страница Описание товара


	// Аккордеон страница Вакансии
	(function() {

		$('.job-accordeon-item__title').on('click',function(){
			var activeClass = 'is-opened',
			    $content = $(this).next(),
			    $icon = $(this).children('.content-icon');
			
			if ( !($icon.hasClass(activeClass)) ) {
				$('.job-accordeon').find('.job-accordeon-item__content').slideUp();
				$('.job-accordeon').find('.is-opened').removeClass(activeClass);
				
				$icon.addClass(activeClass);
				$content.slideDown();
			} else {
				$icon.removeClass(activeClass);
				$content.slideUp();
			}
		});

	}());
	//-- Аккордеон страница Вакансии

});