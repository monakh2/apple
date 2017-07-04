/* =================================
 popover/clicover
 ==================================== */
$('.popover-markup>.trigger').clickover({
	placement: 'bottom',
	width: 270,
	html: true,
	title: function () {
		return $(this).parent().find('.head').html();
	},
	content: function () {
		return $(this).parent().find('.content').html();
	}
});

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