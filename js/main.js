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

let lastScrollPosition = 0
const left = parseFloat($('.code').css('left'))
console.log (left)


$(window).scroll(function() {
    const et = $('.code').offset().top;
    const eh = $('.code').outerHeight();
    const wt = $(window).scrollTop();
    const wh = $(window).height();

    if (wt > lastScrollPosition && wt + wh >= et) {
        const animatedleft = left/2
        console.log('down', animatedleft)
        $('.code').css('left', animatedleft)
    }
    else if (wt < lastScrollPosition && wt + wh <= et + eh) {
        console.log('up', left)
        $('.code').css('left', left)
    }

    lastScrollPosition = wt
})