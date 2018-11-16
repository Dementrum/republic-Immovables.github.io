$(document).ready(function () {
    svg4everybody({});
});

// $(function () {
// 	ymaps.ready(init);
// 	function init(){ 
// 			// Создание карты.    
// 			var myMap = new ymaps.Map("map", {
// 					// Координаты центра карты.
// 					// Порядок по умолчанию: «широта, долгота».
// 					// Чтобы не определять координаты центра карты вручную,
// 					// воспользуйтесь инструментом Определение координат.
// 					center: [55.76, 37.64],
// 					// Уровень масштабирования. Допустимые значения:
// 					// от 0 (весь мир) до 19.
// 					zoom: 7
// 			});
// 	}

// });
// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(61.782793, 34.383885);
	var uluru = (61.782793, 34.383871);
	var marker = new google.maps.Marker({position: uluru, map: map})
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 16.7              // Зум по умолчанию. Возможные значения от 0 до 21
	
	};
	
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);













