// $('#test-p').text('Делаю Блоки');

(function($, viewport) {
    $(document).ready(function() {
        // Executes only in XS breakpoint
        if (viewport.is('>=xs')) {
			$('#test-p').text('Делаю разметку для ТОЛЬКО ДЛЯ МАЛЕНЬНИХ экранов (xs)');
        }

        // Executes in SM, MD and LG breakpoints
        // if (viewport.is('>=sm')) {
        //  $('#test-p').text('Делаю разметку для ВСЕХ ЭКРАНОВ БОЛЬШЕ МАЛЕНЬНИХ экранов (>xs)');
        // }

        // Executes in XS and SM breakpoints
        // if (viewport.is('<md')) {
        //     $('#test-p').text('Делаю разметку для СРЕДНИХ экранов (xs)');
        // }
    });
})(jQuery, ResponsiveBootstrapToolkit);
