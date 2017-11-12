//Adapted from http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design
setTimeout(function() {
	var ink, d, x, y;
	$(".ripple-dark").mousedown(function(e){
    if($(this).find(".circle-dark").length === 0){
        $(this).prepend("<span class='circle-dark'></span>");
    }
         
    ink = $(this).find(".circle-dark");
    ink.removeClass("animate-dark");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate-dark");
});
}, 1000);
setTimeout(function() {
	var ink, d, x, y;
	$(".ripple-light").mousedown(function(e){
    if($(this).find(".circle-light").length === 0){
        $(this).prepend("<span class='circle-light'></span>");
    }
         
    ink = $(this).find(".circle-light");
    ink.removeClass("animate-light");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate-light");
});
}, 1000);