//Adapted from https://goo.gl/wFkfkB
setTimeout(function () {
    $('a.external').click(function (e) {
        $('.project-overlay').show();
        $('body').css('overflow', 'hidden');
        e.preventDefault();
        var url = this.href;
        if (url.match(/\.(jpg|gif|png)$/)) {
            $('.project-image-view-image').css('display', 'flex');
            $('.project-overlay-content').load('html/projects/image-view.html');
            $('.project-image-view-image').html('<img class="project-image-featured" src="' + url + '">');
        } else {
            $('.project-overlay-content').load(url);
        }
    });
    $('.x-button').click(function (e) {
        $('.project-overlay').scrollTop(0);
        $('.project-image-view-image').fadeOut();
        $('.project-overlay').fadeOut();
        $('body').css('overflow', 'auto');
        
    });
}, 3000);
