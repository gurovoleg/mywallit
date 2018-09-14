$(document).ready(function() {

// обработка нажатия на "Подробнее" / "Скрыть"
// Открытие информации о товаре при клике на весь ряд
$('.products-table-row').on('click', function(e){
	e.preventDefault();
	var rowProductLink = $(this).find($('.products-table-row__cell--link')).text();

	$(this).parents('.products-table-group').find('.thanks').slideToggle();
	$('.products-table-row').not($(this)).parents('.products-table-group').find('.thanks').slideUp();
	$(this).parents('.products-table-group').toggleClass('products-table-row--open');
	$('.products-table-row').not($(this)).parents('.products-table-group').removeClass('products-table-row--open');
	$(this).find('.products-table-row__cell--link').text(rowProductLink == 'Подробнее' ? 'Скрыть' : 'Подробнее'); // Меняем название ссылки в зависимости от того открыт блок или закрыть
	$('.products-table-row').not($(this)).find('.products-table-row__cell--link').text('Подробнее');

});
// END Открытие информации о товаре при клике на весь ряд
// END обработка нажатия на "Подробнее" / "Скрыть"

});