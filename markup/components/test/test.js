// $('#test-p').css('background-color', 'red');

(function($, viewport) {
    $(document).ready(function() {

        // Executes only in XS breakpoint
        if (viewport.is('xs')) {
            // ...
            $('#test-p').css('background-color', 'green');
        }

        // Executes in SM, MD and LG breakpoints
        if (viewport.is('>=sm')) {
            // ...
            $('#test-p').css('background-color', 'red');
        }

        // Executes in XS and SM breakpoints
        if (viewport.is('<md')) {
            // ...
            $('#test-p').css('background-color', 'blue');
        }

        // Execute code each time window size changes
        $(window).resize(
            viewport.changed(function() {
                // Executes only in XS breakpoint
        if (viewport.is('xs')) {
            // ...
            $('#test-p').css('background-color', 'green');
        }

        // Executes in SM, MD and LG breakpoints
        if (viewport.is('>=sm')) {
            // ...
            $('#test-p').css('background-color', 'red');
        }

        // Executes in XS and SM breakpoints
        if (viewport.is('<md')) {
            // ...
            $('#test-p').css('background-color', 'blue');
        }
            })
        );
    });
})(jQuery, ResponsiveBootstrapToolkit);
