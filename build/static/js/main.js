$(document).ready(function () {
    svg4everybody({});
});

// Map
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
		position: new google.maps.LatLng(61.782793, 34.383885), 
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP, 
    icon: "static/img/content/maps-and-flags.svg" 
	}); 

}

google.maps.event.addDomListener(window, "load", initMap);

// Scroll
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1200);
	});
});
// Active class when scrolling

var menu_selector = "#menu"; 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^='#']").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});

$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".fixed").addClass("scrolled");
    } else {
      $(".fixed").removeClass("scrolled");
    }
  });
});
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

