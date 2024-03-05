$('li.main-menu').mouseenter(function () {
    $('li.main-menu').removeClass('on')
    $('ul.sub-menu').removeClass('on')

    $(this).addClass('on')
    $(this).find('.sub-menu').addClass('on')
})

$('footer').mouseenter(function () {
    $('footer .ani').addClass('on')
    $('footer ul').addClass('on')
})

$('footer').mouseleave(function () {
    $('footer .ani').removeClass('on')
    $('footer ul').removeClass('on')
})