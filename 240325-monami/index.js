$('.item-list li').click(function () {
    $(this).parents('section').find('.item-list li').removeClass('on');
    $(this).addClass('on');

    let index = $(this).index();

    for (let i = 0; i < 3; i++) {
        $(this).parents('section').find('figure').removeClass('bg' + i);
    }
    $(this).parents('section').find('figure').addClass('bg' + index);

    $(this).parents('section').find('.desc').removeClass('on');
    $(this).parents('section').find('.desc').eq(index).addClass('on')
});

$('.arrow a.pre').click(function () {
    $('.section-wrap').animate({ 'margin-left': '0%' }, function () {
        $('section').last().prependTo('.section-wrap')
        $('.section-wrap').css({ 'margin-left': '-100%' })
    })
})

$('.arrow a.nex').click(function () {
    $('.section-wrap').animate({ 'margin-left': '-100%' }, function () {
        $('section').first().appendTo('.section-wrap')
        $('.section-wrap').css({ 'margin-left': '0%' })
    })
})