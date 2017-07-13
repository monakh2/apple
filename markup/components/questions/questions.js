var scrollWidth = 17;

function createPanels() {
	$('#accordion > div').removeClass().addClass('panel panel-default').find('[id^="collapse-"]').addClass('panel-collapse collapse');
	$('.icon-marck-blue, .icon-mail-blue').after('<div class="clearfix"></div>');

}
function createBlocks() {
	$('#accordion > div').removeClass().addClass('col-xs-6 col-md-3').find('[id^="collapse-"]').removeClass('panel-collapse collapse');
}
if ($(window).width() >= 480) {
	createBlocks();
}
else {
	createPanels();
}


$(window).on('resizeend', function () {
	if ($(window).width() >= 480) {
		createBlocks();
	} else {
		createPanels();
	}
});


// Wrap IIFE around your code
// (function($, viewport){
// 	$(document).ready(function() {
//
// 		// Executes only in XS breakpoint
// 		if(viewport.is('xs')) {
// 			// ...
// 		}
//
// 		// Executes in SM, MD and LG breakpoints
// 		if(viewport.is('>=sm')) {
// 			// ...
// 		}
//
// 		// Executes in XS and SM breakpoints
// 		if(viewport.is('<md')) {
// 			// ...
// 		}
//
// 		// Execute code each time window size changes
// 		$(window).resize(
// 			viewport.changed(function() {
// 				if(viewport.is('xs')) {
// 					// ...
// 				}
// 			})
// 		);
// 	});
// })(jQuery, ResponsiveBootstrapToolkit);
