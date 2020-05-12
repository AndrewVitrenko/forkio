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

    
    


    if (wt + wh >= et) {
        if (left == '15%') {
            
        }
        else if (left == '7%') {
            $('.code').css({left: '0'})
        }
    }
    else if (wt + wh <= et + eh) {
        $('.code').css({left: left})
    }
})*/

$(window).bind('mousewheel', function(event) {
    const et = $('.code').offset().top;
    const eh = $('.code').outerHeight();
    const wt = $(window).scrollTop();
    const wh = $(window).height();
    let left = $('.code').css('left')

    if (event.originalEvent.wheelDelta <= 0) {
        if (wt + wh >= et) {
            $('.code').css({left: left/2})
        }
    }
    else if (event.originalEvent.wheelDelta >= 0) {
        if (wt + wh <= et + eh) {
            $('.code').css({left: left})
        }
    }
})