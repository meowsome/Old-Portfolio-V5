//Adapted from https://codepen.io/chrisboon27/pen/rEDIC
//Customization help from BucketMuncher (http://bucketmuncher.tumblr.com)
setTimeout(function() {
    var smooth = 5;
    var movementStrength = 25;
    var newvalueX = 0;
    var newvalueY = 0;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(window).mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var valueX = width * pageX * -1 - 25;
        var valueY = height * pageY * -1 - 300;
        if (newvalueX == 0) {
            newvalueX = valueX;
        }
        if (newvalueY == 0) {
            newvalueY = valueY;
        }
        newvalueX = (smooth * newvalueX + valueX) / (smooth + 1);
        newvalueY = (smooth * newvalueY + valueY) / (smooth + 1);
        $('.DIV GOES HERE').css("background-position", newvalueX + "px " + newvalueY + "px");
    });
}, 1000);