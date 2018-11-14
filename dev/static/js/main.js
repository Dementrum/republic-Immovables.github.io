$(document).ready(function () {
    svg4everybody({});
});


function initMap() {
	
	var centerLatLng = new google.maps.LatLng(61.782793, 34.383885);
	var mapOptions = {
		center: centerLatLng,
		zoom: 16.7,
		disableDefaultUI: true,
<<<<<<< HEAD
		
=======
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
	
>>>>>>> 5fe0168ff579756aaa0aaef5358a0bfb6260ae90
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

// // Form

// $(document).ready(function() {
// 	// Test for placeholder support
//     $.support.placeholder = (function(){
//         var i = document.createElement('input');
//         return 'placeholder' in i;
//     })();

//     // Hide labels by default if placeholders are supported
//     if($.support.placeholder) {
//         $('.form-label').each(function(){
//             $(this).addClass('js-hide-label');
//         });  

//         // Code for adding/removing classes here
//         $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
//             // Cache our selectors
//             var $this = $(this),
//                 $parent = $this.parent().find("label");
					
// 						switch(e.type) {
// 							case 'keyup': {
// 								 $parent.toggleClass('js-hide-label', $this.val() == '');
// 							} break;
// 							case 'blur': {
// 								if( $this.val() == '' ) {
//                     $parent.addClass('js-hide-label');
//                 } else {
//                     $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
//                 }
// 							} break;
// 							case 'focus': {
// 								if( $this.val() !== '' ) {
//                     $parent.removeClass('js-unhighlight-label');
//                 }
// 							} break;
// 							default: break;
// 						}
// 						// previous implementation with ifs
//             if (e.type == 'keyup') {
//                 if( $this.val() == '' ) {
//                     $parent.addClass('js-hide-label'); 
//                 } else {
//                     $parent.removeClass('js-hide-label');   
//                 }                     
//             } 
//             else if (e.type == 'blur') {
//                 if( $this.val() == '' ) {
//                     $parent.addClass('js-hide-label');
//                 } 
//                 else {
//                     $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
//                 }
//             } 
//             else if (e.type == 'focus') {
//                 if( $this.val() !== '' ) {
//                     $parent.removeClass('js-unhighlight-label');
//                 }
//             }
//         });
//     } 
// });

