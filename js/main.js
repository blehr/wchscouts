$(document).ready(function() {
    $('.scouts').on('click', function() {
        $('.cub p').addClass('bounceOutRight');
        $('.boy p').addClass('bounceOutLeft');
    });

    $('a').click(function(e) {
        e.preventDefault(); // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href
        // do something while timeOut ticks ...
        setTimeout(function() {
            window.location = goTo;
        }, 1500);
    });

    $('.cub a').hover(function() {
        $('.confirm').toggleClass('confirmHide').text('For boys grades 1 through 5');
    });

    $('.boy a').hover(function() {
        $('.confirm').toggleClass('confirmHide').text('For boys grades 6 through 12');
    });

});