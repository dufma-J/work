$('article div a').mouseenter(function () {
    $(this).addClass('on')
})

$('article div a').mouseleave(function () {
    $('article div a').removeClass('on')
})

$('.bar').click(function () {
    $(this).addClass('off')
    $('nav').addClass('on')
    $('section').addClass('on')
})

$('nav ul li').click(function () {
    let index = $(this).index()

    for (let i = 0; i < 3; i++) {
        $('#wrap').removeClass('on' + i);
    }
    $('#wrap').addClass('on' + index)

    $('article').removeClass('on')
    $('article').eq(index).addClass('on')

    $('nav').removeClass('on')
    $('section').removeClass('on')
    $('.bar').removeClass('off')
})