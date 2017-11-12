//Adapted from http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/
setTimeout(function() {
    $('.masterTooltip').hover(function () {
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .show();
    }, function () {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX - 35;
        var mousey = e.pageY - 50;
        $('.tooltip')
            .css({
                top: mousey,
                left: mousex
            })
    });
}, 2000);
