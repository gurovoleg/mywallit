$(document).ready(function() {
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
	$('.goods-cart__page').animate({right: 0}, 100);
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
	$('.goods-cart__page').animate({right: -360}, 100);

	var w = $(window).width();
	if (w >= 786) {
	$('.goods-cart__page').animate({right: -560}, 100);

	}
	$('.blur-wrapper').removeClass('filter-blur');
	setTimeout(function(){
		$('.goods-cart__page-bg').css('display', 'none');
	}, 600);
	$('body').css('overflow', 'auto');
});

});