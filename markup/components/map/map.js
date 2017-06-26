var coordinates_mark = [53.9463623, 27.6018749];
var coordinates_map_larg = [53.94651407, 27.59663701];
var coordinates_map_small = [53.9463623, 27.6018749];
var coordinates_map = coordinates_map_larg;


var map;
map = new GMaps({
	el: '#gmap',
	scrollwheel: false,
	lat: coordinates_map[0],
	lng: coordinates_map[1],
	zoom: 16,
	zoomControlOptions: {
		position: google.maps.ControlPosition.RIGHT_CENTER
	},
	mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		position: google.maps.ControlPosition.TOP_RIGHT
	}
});
map.drawOverlay({
	lat: coordinates_mark[0],
	lng: coordinates_mark[1],
	verticalAlign: 'top',
	horizontalAlign: 'center',
	content: '<div class="overlay arrow_box">220090, г. Минск, ул. Олешева, 14</div>'
});
