    // Фцнкция проверки наполненности корзины
		function scrollCart() {
		// Убираем скролл, если товар не выходит за пределы блока
		var heightCart = $('.goods-cart').innerHeight();
		var heightHeaderCart = $('.goods-cart__title').innerHeight();
		var heightFooterCart = $('.goods-cart__footer').innerHeight();
		var h = $(window).height();
		if (heightCart <= h) {
			$('.goods-cart').css('min-height', '0');
		}
	}
	// Открыть товары в корзине
	$('.menu-block.cart').on('click', function(){
		$('.goods-cart__page').animate().css('right', '0');
		$('.goods-cart__page-bg').css('display', 'block');
		$('.blur-wrapper').addClass('filter-blur');
		$('body').css('overflow', 'hidden');

		// Убираем скролл, если товар не выходит за пределы блока
		scrollCart();

	});

	// При удалении товара, проверяем помещается ли в зону видимости, если да, то убираем скролл
	$('.goods-cart__close-icon').on('click', function(){
		scrollCart();
	});


	// Вернуться на страницу из корзины
	$('.goods-cart__back-link-item').on('click', function(e){
		e.preventDefault();
		$('.goods-cart__page').css('right', '-360px');
		var w = $(window).width();
		if (w >= 786) {
			$('.goods-cart__page').css('right', '-560px');
		}
		$('.blur-wrapper').removeClass('filter-blur');
		setTimeout(function(){
			$('.goods-cart__page-bg').css('display', 'none');
		}, 600);
	});