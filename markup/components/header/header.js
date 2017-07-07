if ($(window).width() <= 1200) {
makeHeaderFluid();
} else {
makeHeaderBlock();
}


$(window).on('resizeend', function () {
	if ($(window).width() <= 1200) {
		makeHeaderFluid();
	} else {
makeHeaderBlock();
	}
});

function makeHeaderFluid() {
	$('#header > div').removeClass('container').addClass('container-fluid');
}
function makeHeaderBlock() {
	$('#header > div').removeClass('container-fluid').addClass('container');
}