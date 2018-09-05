$('document').ready(function(){

	(function(){
		
		var animationSpeed = 300;
		
		// Выбор адреса доставки
		$('#delivery-pickup').on('click',function(){
			$(this).parent().children().removeClass('contacts-block--active');
			$(this).addClass('contacts-block--active');
			$('.form-group-user-address').slideUp(animationSpeed);
		});

		$('#delivery-courier').on('click',function(){
			$(this).parent().children().removeClass('contacts-block--active');
			$(this).addClass('contacts-block--active');
			$('.form-group-user-address').slideDown(animationSpeed);
		});


		// Выбор способа оплаты
		$('.payment-type').on('click',function(){
			$(this).parent().children().removeClass('payment-type--active');
			$(this).addClass('payment-type--active');
		});

		// Добавить комментарий
		$('.delivery-comments--link').on('click',function(e){
		
			e.preventDefault();

			if ( $('.comments-field').css('display') == 'none' ) {
			
				$('.icon-comments').addClass('icon-comments--minus')
				$('.icon-comments').removeClass('icon-comments--plus')
				$('.comments-field').slideDown(animationSpeed);
			
			} else {
				
				$('.icon-comments').addClass('icon-comments--plus');
				$('.icon-comments').removeClass('icon-comments--minus')
				$('.comments-field').slideUp(animationSpeed);
			
			}

		});

	}());

}); 