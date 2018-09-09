$(document).ready(function() {

// обработка нажатия на "Подробнее" / "Скрыть"
$('.products-table-row__cell--link').on('click', function(){
	
	var rowProduct = $(this).parents('.products-table-group');
	var rowProductLink = $(this).text();
	rowProduct.find('.thanks').slideToggle(); // Показываем или убираем список заказа
	rowProduct.find('.products-table-row__cell--link').text(rowProductLink == 'Подробнее' ? 'Скрыть' : 'Подробнее'); // Меняем название ссылки в зависимости от того открыт блок или закрыт
	// rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
	// Ждем пока блок свернется и убираем серую заливку фона
	if ( $('.products-table-row__cell').hasClass('products-table-row--open')) {
		setTimeout(function(){
			rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
		}, 400);
	} else {
		rowProduct.find('.products-table-row__cell').toggleClass('products-table-row--open');
	}
		
	
});
// END обработка нажатия на "Подробнее" / "Скрыть"

});