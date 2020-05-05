$(document).ready(function() {
    $('.slider').slick();

    $('.slick-arrow').text('')
})

const htmlScrollHeight = screen.height

$(window).scroll(function() {
    //let scrollHeight = $('header').outerHeight(true) + $('.using_range').outerHeight(true) + $('.example h3').outerHeight(true) + $('.example').outerHeight(true) * 0.22;

    const topHeight = $('.code').offset().top / 2

    if ($(window).scrollTop() >= topHeight && $(window).scrollTop() <= topHeight + $('.code').height()*2) {
        // console.log($('.code').offset().top / 2)
        // console.log($(window).scrollTop())
        $('.code').css({left: '7%'})
    }
    else {
        $('.code').css({left: '15%'})
    }
})