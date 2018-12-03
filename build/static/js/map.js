// // Map
function initMap() {

	var centerLatLng = new google.maps.LatLng(61.782450, 34.383180);
	var mapOptions = {
		center: centerLatLng,
		zoom: 17.3,
		disableDefaultUI: true,
		styles: [
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#d59658"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"weight": 6.5
					}
				]
			}
		]
	
	};
	
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var myMarker = new google.maps.Marker({ 
		position: new google.maps.LatLng(61.782510, 34.384360), 
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP, 
			icon: "static/img/content/maps-and-flags.svg" 
	}); 
	
	}
	
	google.maps.event.addDomListener(window, "load", initMap);