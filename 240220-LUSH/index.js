$("article").mCustomScrollbar({
    theme: "minimal-dark",
    axis: "xy"
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper2", {
    direction: "vertical",
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

$('.menu1 li').click(function () {
    $('.menu1 li a').removeClass('on')
    $(this).find('a').addClass('on')

    let idx = $(this).index()

    let idx_result = idx * 380;
    $('section').animate({ 'left': - idx_result + 'px' });

    if (idx !== 0) {
        $('.button li a.left').addClass('on')
    }

    if (idx === 0) {
        $('.button li a.left').removeClass('on')
    }
})

let count = 0;

$('.button li a.left').click(function () {
    if (count !== 0) {
        count++;
        $('section').animate({ 'left': count * 380 + 'px' });

        if (count === 0) {
            $('.button li a.left').removeClass('on')
        }
    }
})

$('.button li a.right').click(function () {
    count--;

    if (count !== 0) {
        $('.button li a.left').addClass('on')
    }

    if (count === -5) {
        $('section').animate({ 'left': -1710 + 'px' });
        count = 0;
    }

    $('section').animate({ 'left': count * 380 + 'px' });

    if (count === 0) {
        $('.button li a.left').removeClass('on')
    }
})