$(document).ready(function () {
    svg4everybody({});
});


function initMap() {
	
	var centerLatLng = new google.maps.LatLng(61.782793, 34.383885);
	var mapOptions = {
		center: centerLatLng,
		zoom: 16.7,
		disableDefaultUI: true,
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var marker = new google.maps.Marker({
		position: centerLatLng,
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP, 
    icon: "static/img/content/maps-and-flags.svg"
    
	});

}

google.maps.event.addDomListener(window, "load", initMap);



