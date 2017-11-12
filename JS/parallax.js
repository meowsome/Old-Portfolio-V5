// Adapted from https://codepen.io/MarcelSchulz/pen/lCvwq
setTimeout(function () {
    $(document).ready(function () {
        var scrolled = $(window).scrollTop();
        var half = $('.welcome-background').height() * -0.05;
        $('.welcome-background').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
    });
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        var half = $('.welcome-background').height() * -0.05;
        $('.welcome-background').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
    });
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        var half = $('.footer-background').height() * 2.4;
        $('.footer-background').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
    });
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        var half = $('.parallax').height() * 3;
        $('.parallax').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
    });
}, 1000);
