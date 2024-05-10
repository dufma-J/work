$('.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown(400)
    $('header').addClass('on')
});
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp(400)
    $('header').removeClass('on')
});

$('.brand-list li').click(function (e) {
    e.preventDefault()

    updateDotPosition();

    $('.brand-list li').removeClass('on')
    $(this).addClass('on')

    updateDotPosition();

    let idx = $(this).index()
    $('.brand-contents li').removeClass('on')
    $('.brand-contents li').eq(idx).addClass('on')

    // .dot의 위치를 업데이트하는 함수
    function updateDotPosition() {
        // 현재 .on 클래스를 가진 li의 왼쪽 위치를 가져옴
        var onLiCenter = $('.brand-list li.on').position().left + ($('.brand-list li.on').outerWidth() / 2);

        // .dot의 위치를 조절
        $('.dot').css('left', onLiCenter - ($('.dot').outerWidth() / 2) + 'px');
    }
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

