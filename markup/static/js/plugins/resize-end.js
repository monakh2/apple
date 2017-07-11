"use strict";

var TIMEOUT = 500,
    EVENT_KEY = 'resizeend',
    $window = $(window),
    timer;

window.addEventListener('resize', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
        $(window).trigger(EVENT_KEY);
    }, TIMEOUT);
});