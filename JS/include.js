$(document).ready(function () {
    w3.includeHTML();
    
    emergence.init({
        reset: false,
        offsetBottom: 150,
        handheld: false,
    });
});

// Twitter
setTimeout(function () {
    var script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
}, 1000);