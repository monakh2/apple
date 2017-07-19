// (function ($, viewport) {
// 	$(document).ready(function () {
// 		// Executes only in XS breakpoint
// 		if (viewport.is('xs')) {
// 			$('#test-p').text('Делаю разметку ДЛЯ МАЛЕНЬНИХ экранов (xs) от 480 до 768');
// 		}
// 		// Executes only in XXS breakpoint
// 		if (viewport.is('>=xxs')) {
// 			$('#test-p').text('Делаю разметку ДЛЯ экранов (xxs) >= 480');
// 		}
// 		$(window).resize(
// 			viewport.changed(function () {
// 				console.log('Current breakpoint: ', viewport.current());
// 			})
// 		);
// 		// Execute code each time window size changes
// 		$(window).resize(
// 			viewport.changed(function() {
// 				// Executes only in XS breakpoint
// 				if (viewport.is('xs')) {
// 					$('#test-p').text('Делаю разметку ДЛЯ МАЛЕНЬНИХ экранов (xs) от 480 до 768');
// 				}
// 				// Executes only in XXS breakpoint
// 				if (viewport.is('>=xxs')) {
// 					$('#test-p').text('Делаю разметку ДЛЯ экранов (xxs) >= 480');
// 				}
// 			})
// 		);
// 	});
// })(jQuery, ResponsiveBootstrapToolkit);
