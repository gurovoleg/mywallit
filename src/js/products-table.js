$(document).ready(function() {

// обработка нажатия на "Подробнее" / "Скрыть"
// Открытие информации о товаре при клике на весь ряд
$('.products-table-row').on('click', function(e){
	e.preventDefault();
	var rowProduct = $(this).find($('.products-table-row__cell--link')).parents('.products-table-group');
	var rowProductLink = $(this).find($('.products-table-row__cell--link')).text();


	rowProduct.find('.thanks').slideToggle(); // Показываем или убираем список заказа

	$(this).find('.products-table-row__cell--link').text(rowProductLink == 'Подробнее' ? 'Скрыть' : 'Подробнее'); // Меняем название ссылки в зависимости от того открыт блок или закрыть

	if ( rowProduct.hasClass('products-table-row--open') ) {

		setTimeout(function(){
			rowProduct.toggleClass('products-table-row--open');
		}, 400);
	} else {
		rowProduct.toggleClass('products-table-row--open');
	}


});
// END Открытие информации о товаре при клике на весь ряд

// END обработка нажатия на "Подробнее" / "Скрыть"

});