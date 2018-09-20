ymaps.ready(init); 
var myMap;

function init() {  
	myMap = new ymaps.Map ("map", { 
		center: [55.771771, 37.590232],  // Координаты объекта
		zoom: 11  // Маштаб карты
	}); 

	myMap.controls.add( 
		new ymaps.control.ZoomControl() 
	); 

	office1 = new ymaps.Placemark([55.788368, 37.508930], { // Координаты метки объекта
		balloonContent: '<div class="ya_map">улица Зорге, 22А</div>', iconContent: "1" // Надпись метки
	},{preset: 'islands#blueCircleIcon'}); // Тип метки

	// ,
	// }

	office2 = new ymaps.Placemark([55.729077, 37.574813], { // Координаты метки объекта
		balloonContent: '<div class="ya_map">Район Хамовники</div>', iconContent: "2" // Надпись метки
	},{preset: 'islands#blueCircleIcon'}); // Тип метки

	office3 = new ymaps.Placemark([55.733609, 37.633715], { // Координаты метки объекта
		balloonContent: '<div class="ya_map">Район Замоскворечье</div>', iconContent: "3" // Надпись метки
	},{preset: 'islands#blueCircleIcon'}); // Тип метки
	
	myMap.geoObjects.add(office1);
	myMap.geoObjects.add(office2); 
	myMap.geoObjects.add(office3);

	// myPlacemark.balloon.open(); 
}; 