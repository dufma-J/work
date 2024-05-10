var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        slideChange: function() {
            let activeSlide = this.slides[this.activeIndex]
            gsap.set[activeSlide.querySelectorAll('.slide-text h3')]
    
            const split = new SplitText(activeSlide.querySelectorAll('.slide-text h3'), { type: 'chars' })
    
            gsap.from(split.chars, {
                x: -100,
                opactiy: 0,
                duration: 1,
                stagger: {
                    each: 0.02,
                    from: 'start'
                }
            })
        }
    }
});

var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    loop: true,
    speed: 750,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.main-menu>a').mouseenter(function () {
    $(this).css('color', '#BF2A4C')
})
$('.main-menu>a').mouseleave(function () {
    $(this).css('color', '#000')
})


$('header').mouseenter(function () {
    $('header h1 img').attr('src', './image/logo_black.png')
    $(this).addClass('on')
    $('.main-menu>a').css('color', '#000')
    $('.header-btn').css('color', '#000')
})
$('header').mouseleave(function () {
    $('header h1 img').attr('src', './image/logo.png')
    $(this).removeClass('on')
    $('.main-menu>a').css('color', '#fff')
    $('.header-btn').css('color', '#fff')
})

$('.sect3-menu li a').mouseenter(function () {
    $('.sect3-menu li a').removeClass('on')
    $(this).addClass('on')
})

let tab_btn = document.querySelector('.tab-btn')

tab_btn.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        let tab_btns = document.querySelectorAll('.tab-btn li a');
        tab_btns.forEach(btn => btn.classList.remove('on'));
        e.target.classList.add('on');

        let tab_menu = document.querySelectorAll('.content li');
        let index = Array.from(tab_btns).indexOf(e.target);

        if (index >= 0 && index < tab_menu.length) {
            tab_menu.forEach(item => item.classList.remove('on'));
            tab_menu[index].classList.add('on');
        }
    }
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('wheel', e => {
        e.preventDefault()
        let delta = e.deltaY;
        let next = delta > 0 ? section.nextElementSibling : section.previousElementSibling
        if (next) scrollToSmooth(next.offsetTop)
    })
})

function scrollToSmooth(top) {
    document.querySelector('html').style.scrollBehavior = 'smooth'
    window.scrollTo({ top, behavior: 'smooth' })
    setTimeout(() => document.querySelector('html').style.scrollBehavior = 'auto', 750)
}