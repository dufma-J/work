var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

swiper.on('slideChange', function () {
    let idx = swiper.activeIndex;

    $('.nav-bar ul li a').removeClass('on');
    $('.nav-bar ul li a').eq(idx).addClass('on');
});

$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown();
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp();
});

$('.nav-bar li').click(function (e) {
    e.preventDefault();

    let i = $(this).index();
    swiper.slideTo(i, 500);

    $('.nav-bar ul li a').removeClass('on');
    $(this).find('a').addClass('on');
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: "vertical",
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

$('footer .family p').mouseenter(function(){
    $('footer .family ul').stop().show()
})
$('footer .family ul').mouseleave(function(){
    $(this).stop().hide()
})
