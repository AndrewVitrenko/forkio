$(document).ready(function() {
    $('.slider').slick();

    $('.slick-arrow').text('')
})

let lastScrollPosition = 0;

$(window).scroll(function() {

    const wt = $(window).scrollTop();
    const wh = $(window).height();
    const et = $('.code').offset().top;
    const eh = $('.code').outerHeight();

    if (wt + wh >= et && wt >= lastScrollPosition) {
        $('.code').css({left: '7%'})
        lastScrollPosition = wt;
    }
    else if (wt <= et + eh && wt <= lastScrollPosition) {
        $('.code').css({left: '15%'})
    }
})