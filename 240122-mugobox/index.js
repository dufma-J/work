$('div.chracter ul li a').click(function (e) {
    e.preventDefault()
    $('div.chracter ul li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')

    $('article').removeClass('on')
    $(href).find('article').addClass('on')
})

$('.ex-menu li a').click(function () {
    $('.ex-menu li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')

    $('.experience-img li').removeClass('on')
    $(href).addClass('on')
})

$('.quick ul li').click(function () {
    $('.quick ul li').fadeOut();
    let index = $(this).index()
    if (index === 0) {
        $('.quick ul li').eq(1).fadeIn()
    }
    else {
        $('.quick ul li').eq(0).fadeIn()
    }
})

$('.quick a.menu-on').click(function () {
    $('.menu').slideDown()
})

$('.quick a.menu-off').click(function () {
    $('.menu').slideUp()
})

