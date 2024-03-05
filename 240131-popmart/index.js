$('h1 img').mouseenter(function () {
    $('h1 img').attr('src', './img/logo_offf.png')
})
$('h1 img').mouseleave(function () {
    $('h1 img').attr('src', './img/logo_oon.png')
})

$('.main-img').mouseenter(function () {
    $('main .content2 li:nth-child(1) .text-box').animate({ 'height': '150px' }, 350)
})
$('.main-img').mouseleave(function () {
    $('main .content2 li:nth-child(1) .text-box').animate({ 'height': '0px' }, 350)
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});


$('.main-btn ul li:nth-child(1) a').click(function () {
    main_Hide()
    best_Show()
    line_Show()
})

$('section.best .btn').click(function () {
    line_Hide()
    best_Hide()
    main_Show()
})

$('.main-btn ul li:nth-child(2) a').click(function () {
    main_Hide()
    slide_Show()
})

$('section.slide .close').click(function () {
    slide_Hide()
    main_Show()
})

$('.mySwiper .swiper-slide').mouseenter(function () {
    $(this).find('p').fadeIn()
})
$('.mySwiper .swiper-slide').mouseleave(function () {
    $(this).find('p').fadeOut()
})



//main 안의 컨텐츠 함수
function main_Hide() {
    $('main .content1').css({
        'transition': '0.5s',
        'transform': 'translate(-1500px, -50%)'
    })
    $('main .content2').css({
        'transition': '0.5s',
        'transform': 'translateX(1500px)'
    })
}
function main_Show() {
    $('main .content1').css({ 'transform': 'translate(-50%, -50%)' })
    $('main .content2').css({ 'transform': 'translateX(0px)' })
}

//section.best 함수
function best_Hide() {
    $('section.best').css(({ 'transform': 'translate(-50%, -1500px)' }))
}
function best_Show() {
    $('section.best').css(({ 'transform': 'translate(-50%, -50%)' }))
}

// section.slide 함수
function slide_Hide() {
    $('section.slide').animate({ 'height': '0vh' }, 250, function () {
        $('section.slide').fadeOut(250)
    })
}

function slide_Show() {
    $('section.slide').fadeIn(500, function () {
        $('section.slide').animate({ 'height': '50vh' }, 500)
    })
}

// line 함수
function line_Hide() {
    $('.left').animate({ 'height': '0%' }, 300)
    $('.bottom').animate({ 'width': '0%' }, 300)
    $('.right').animate({ 'height': '0%' }, 300)
    $('.top').animate({ 'width': '0%' }, 300)
    $('section.best').animate({ 'top': '-100%' }, 500, function () {
        $('.best-content1').fadeOut(500)
        $('.best-content1 .btn').fadeOut(500)
        $('.best-btn').fadeOut(500)
        $('.best-content2').animate({ 'opacity': '0' }, 300)
    })
}

function line_Show() {
    $('section.best').animate({ 'top': '50%' }, 250, function () {
        $('.top').animate({ 'width': '100%' }, 750, function () {
            $('.right').animate({ 'height': '100%' }, 300, function () {
                $('.bottom').animate({ 'width': '100%' }, 300, function () {
                    $('.left').animate({ 'height': '100%' }, 300, function () {
                        $('.best-content1').fadeIn(250, function () {
                            $('.best-content1 .btn').fadeIn(500)
                            $('.best-btn').fadeIn(500)
                            $('.best-content2').animate({ 'opacity': '1' }, 300)
                        })
                    })
                })
            })
        })
    })
}







