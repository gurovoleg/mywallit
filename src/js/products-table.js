$(document).ready(function() {

// обработка нажатия на "Подробнее" / "Скрыть"

// $('.products-table-row__cell--link').on('click', function(){
// 	var rowProduct = $(this).parents('.products-table-group');
// 	var rowProductLink = $(this).text();
	
// 	rowProduct.find('.thanks').slideToggle(); // Показываем или убираем список заказа
// 	rowProduct.find('.products-table-row__cell--link').text(rowProductLink == 'Подробнее' ? 'Скрыть' : 'Подробнее'); // Меняем название ссылки в зависимости от того открыт блок или закрыт
// 	// rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
// 	// Ждем пока блок свернется и убираем серую заливку фона
// 	if ( $('.products-table-row__cell').hasClass('products-table-row--open')) {
// 		setTimeout(function(){
// 			rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
// 		}, 400);
// 	} else {
// 		rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
// 	}
	
// });

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