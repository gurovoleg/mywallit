$(document).ready(function(){

	// Аккордеон	
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
	//-- Аккордеон

});