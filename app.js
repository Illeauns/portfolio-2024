$(document).ready(function () {
    var cursor = $('.cursor');

    $(window).mousemove(function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
    $(window).mouseleave(function () {
        cursor.css({ opacity: "0" });
    });
    $(window).mouseenter(function () {
        cursor.css({ opacity: "1" });
    });
    $(".link")
        .mouseenter(function () {
            cursor.css({
                transform: "scale(2.8)"
            });
        })
        .mouseleave(function () {
            cursor.css({
                transform: "scale(1)"
            });
        });
});

// $(window).scroll(function () {

//     // selectors
//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.panel');

//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + ($window.height() / 2);

//     $panel.each(function () {
//         var $this = $(this);

//         // if position is within range of this panel.
//         // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//         if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

//             // Remove all classes on body with color-
//             $body.removeClass(function (index, css) {
//                 return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
//             });


//             // Add class of currently active div
//             $body.addClass('color-' + $(this).data('color'));
//             $('.radial-gradient2').fadeIn()
//         }
//     });

// }).scroll();


(function () {
    $('.hamburger-wrapper').on('click', function () {
        $('.hamburger-menu').toggleClass('animate');
        $('.mobile-menu-overlay').toggleClass('visible');
    })
    $('.mobile-menu-overlay > ul > li > a').on('click', function () {
        $('.hamburger-menu').removeClass('animate');
        $('.mobile-menu-overlay').removeClass('visible');
    })
})();

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('sticky')
    } else{
        $('.navbar').removeClass('sticky')
    }
});