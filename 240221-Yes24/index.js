var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 14,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    effect: "fade",
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    thumbs: {
        swiper: swiper,
    },
});

$('.slide-wrap').mouseenter(function () {
    $(this).stop().animate({ 'bottom': '0px' }, 500);
    $(this).css({ 'background-color': 'rgba(0,0,0,0.5)' });
});

$('.slide-wrap').mouseleave(function () {
    $(this).stop().animate({ 'bottom': '-145px' }, 500);
    $(this).css({ 'background-color': 'rgba(0,0,0,0.0)' });
});


tabFunction('#whathot')
tabFunction('#ranking')

function tabFunction(tab) {
    $(tab).find('.tab-menu li a').click(function (e) {
        e.preventDefault();
        let href = $(this).attr('href')

        $(tab).find('.tab-menu li a').removeClass('on')
        $(this).addClass('on')

        $(tab).find('.tab').removeClass('on')
        $(href).addClass('on')
    })
}

$('#region .list li a').mouseenter(function () {
    $('#region .list li a .content').stop().slideUp()
    $(this).find('.content').stop().slideDown()
})

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop()
    $('h5').text(scrollTop)

    if (scrollTop >= 700) {
        $('header').addClass('black')
        $('header img').removeClass('on')
        $('header .black').addClass('on')

        $('#search').addClass('on')
    }

    if (scrollTop < 700) {
        $('header').removeClass('black')
        $('header img').removeClass('on')
        $('header .white').addClass('on')

        $('#search').removeClass('on')
    }

})


