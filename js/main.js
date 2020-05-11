$(document).ready(function() {
    $('.slider').slick();

    $('.slick-arrow').text('')

    $('.burger').click(function() {
        $('.burger').toggleClass('active')
        $('html').toggleClass('lock')
        $('body').toggleClass('lock')
        $('.nav').toggleClass('visible')
    })
})    

//let left = $('.code').css('left')

/*$(window).scroll(function() {

    const wt = $(window).scrollTop();
    const wh = $(window).height();
    const et = $('.code').offset().top;
    const eh = $('.code').outerHeight();


    if (wt + wh >= et) {
        if (left == '15%') {
            $('.code').css({left: '7%'})
        }
        else if (left == '7%') {
            $('.code').css({left: '0'})
        }
    }
    else if (wt + wh <= et + eh) {
        $('.code').css({left: left})
    }
})*/