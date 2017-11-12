//Adapted from https://stackoverflow.com/questions/7182342/how-to-detect-when-the-user-has-scrolled-to-a-certain-area-on-the-page-using-jqu
$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#welcome-menu').position().top) {
        $('.welcome-menu-item-about').css({
            'background-position': '0% 100%'
        });
        $('.welcome-menu .right').css({
            'transition': 'all 0.25s'
        });
        $('.welcome-menu .right').css({
            'margin-bottom': '35px'
        });
    } else {
        $('.welcome-menu-item-about').css({
            'background-position': '0% 0%'
        });
        $('.welcome-menu .right').css({
            'margin-bottom': '0'
        });
    }
})
$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#about').position().top) {
        $('.fixed-menu').css({
            'display': 'flex'
        });
        $('.fixed-menu-item-about').css({
            'background-position': '0% 0%'
        });
        $('.fixed-menu-item-skills').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-portfolio').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-contact').css({
            'background-position': '0% 100%'
        });
    } else {
        $('.fixed-menu').hide();
    }
})
$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#skills').position().top) {
        $('.fixed-menu-item-skills').css({
            'background-position': '0% 0%'
        });
        $('.fixed-menu-item-about').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-portfolio').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-contact').css({
            'background-position': '0% 100%'
        });
    }
})
$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#portfolio').position().top) {
        $('.fixed-menu-item-portfolio').css({
            'background-position': '0% 0%'
        });
        $('.fixed-menu-item-about').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-skills').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-contact').css({
            'background-position': '0% 100%'
        });
    }
})
$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#contact').position().top) {
        $('.fixed-menu-item-contact').css({
            'background-position': '0% 0%'
        });
        $('.fixed-menu-item-about').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-skills').css({
            'background-position': '0% 100%'
        });
        $('.fixed-menu-item-portfolio').css({
            'background-position': '0% 100%'
        });
    }
})

setTimeout(function () {
    $('.fixed-menu-item').on('touchstart', function () {
        setTimeout(function () {
            $('.menu-items').removeClass('menu-active');
        }, 10);
    });
}, 1000);
