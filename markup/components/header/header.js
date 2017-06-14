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