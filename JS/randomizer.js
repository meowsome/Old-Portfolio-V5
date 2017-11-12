//Adapted from https://css-tricks.com/snippets/php/randomize-background-image/ and https://stackoverflow.com/questions/21165832/pair-random-text-with-random-image-array
setTimeout(function() {
    var total_images = 4;
    var random_number = Math.floor((Math.random() * total_images));
    var random_img = new Array();
    var random_text = new Array();
    
    var total_quotes = 5;
    var random_quote = new Array();
    var random_quote_number = Math.floor((Math.random() * total_quotes));

    random_img[0] = '14369078_329106814102897_286983241_n.jpg';
    random_text[0] = '<a href="#">@coralzeit</a>';
    random_img[1] = '14701259_1862466893982490_3484458704697294848_n.jpg';
    random_text[1] = '<a href="https://www.instagram.com/p/BMCriPrBF0H" target="_blank">@cloudy.l_</a>';
    random_img[2] = 'IMG_8421.png';
    random_text[2] = '<a href="https://www.instagram.com/p/BMsCgXygK6w" target="_blank">@chitanaciru</a>';
    random_quote[0] = '<p style="margin-bottom:5px;">"I\'d rather be myself, myself and nasty. Not somebody else, however jolly."</p><p><b>-Aldous Huxley, Brave New World</b></p>';
    random_quote[1] = '<p style="margin-bottom:5px;">"You don\'t know my brain the way you know my name, you don\'t know my heart the way you know my face."</p><p><b>-Tyler Joseph, Message Man</b></p>';
    random_quote[2] = '<p style="margin-bottom:5px;">"I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can\'t see from the center."</p><p><b>-Kurt Vonnegut Jr., Player Piano</b></p>';
    random_quote[3] = '<p style="margin-bottom:5px;">"Sic semper tyrannis."</p><p><b>-Marcus Junius Brutus, Assassination of Julius Caesar</b></p>';
    random_quote[4] = '<p style="margin-bottom:5px;">"Everything was beautiful, and nothing hurt."</p><p><b>-Kurt Vonnegut Jr., Slaughterhouse-Five</b></p>';
    $('.footer-background').css({
        'background-image': 'url(images/footer/' + random_img[random_number] + ')'
    });
    $('.copyright').html(random_text[random_number]);
    $('.quote').html(random_quote[random_quote_number]);
    
}, 4000);