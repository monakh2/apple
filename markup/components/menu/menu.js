if ($(window).width() <= 768 -17 ) {
	makePanels();
	moveToTop();

} else {
	makeDropdown();
	moveToBottom();
}

$(window).on('resizeend', function () {
	if ($(window).width() <= 768-17) {
		makePanels();
		moveToTop();
	} else {
		makeDropdown();
		moveToBottom();
	}
});

function makePanels() {
	var mainMenu   = $('.main-menu');
	var liDropdown = $('.main-menu > .dropdown');

	mainMenu.removeClass('nav navbar-nav')
		.removeAttr('data-hover')
		.addClass('panel-group list-unstyled')
		.attr('id', 'menu-accordion');

	liDropdown.removeClass('dropdown')
		.addClass('panel panel-default')
		.find('.dropdown-toggle').each(function (index) {
		$(this).wrap('<div class="panel-heading"></div>')
			.removeClass('dropdown-toggle')
			.addClass('accordion-toggle collapsed')
			.attr('data-toggle', 'collapse')
			.attr('data-parent', '#menu-accordion')
			.removeAttr('role')
			.attr('href', '#menu-collapse-' + index);
	});

	liDropdown.find('.dropdown-menu').each(function (index) {
		$(this).removeClass('dropdown-menu dropdownhover-bottom')
			.addClass('list-unstyled')
			.removeAttr('role')
			.wrap('<div class="panel-collapse collapse" aria-expanded="false">')
			.parent('.panel-collapse')
			.attr('id', 'menu-collapse-' + index);
	});
}

function makeDropdown() {
	var mainMenu = $('.main-menu');
	mainMenu.removeClass('panel-group list-unstyled')
		.removeAttr('id')
		.attr('data-hover', 'dropdown')
		.addClass('nav navbar-nav')
		.find('.panel').each(function (index) {
		var list = $(this).find('ul.list-unstyled');
		$(this).removeClass('panel panel-default')
			.addClass('dropdown')
			.find('.accordion-toggle')
			.unwrap()
			.attr('href', '#')
			.removeClass('accordion-toggle collapsed')
			.removeAttr('data-parent')
			.addClass('dropdown-toggle')
			.attr('role', 'button')
			.attr('data-toggle', 'dropdown');

		list.unwrap()
			.addClass('dropdown-menu dropdownhover-bottom')
			.removeClass('list-unstyled')
			.attr('role', 'menu');
	});
}

function moveToTop() {
	$('#page-menu').insertAfter($('#header'));

}
function moveToBottom() {
	$('#page-menu').insertAfter($('#slider'));
}