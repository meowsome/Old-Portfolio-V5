document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function() {
            $('.loader-wrapper').fadeOut();
            $('body').css("overflow", "auto");
            $(".welcome-menu-item-about").addClass("slidein-0-1s");
            $(".welcome-menu-item-skills").addClass("slidein-0-2s");
            $(".welcome-menu-item-portfolio").addClass("slidein-0-3s");
            $(".welcome-menu-item-contact").addClass("slidein-0-4s");
            $(".welcome-menu .left").addClass("slidein-0-2s");
            $(".welcome").addClass("fadein-background");
        }, 1750);
    }
}
