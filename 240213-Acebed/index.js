var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".shape2",
        prevEl: ".shape1",
    },
    loop: true,
});

var swiper = new Swiper(".mySwiper3", {
    spaceBetween: -550,
    navigation: {
        nextEl: ".shape2",
        prevEl: ".shape1",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});

var swiper = new Swiper(".mySwiper4", {
    on:{
        slideChange:function(){
            let a_idx = this.activeIndex;

            let allTabs = document.querySelectorAll('.slide_4 .tab li a')
            allTabs.forEach(tab => {
                tab.classList.remove('on')
            })

            allTabs[a_idx].classList.add('on')
        }
    }
});

var btnPrev = document.querySelector('a.prev')
var btnNext = document.querySelector('a.next')

btnPrev.addEventListener('mouseover', function () {
    this.querySelector('span').style.opacity = 1;
    this.querySelector('path').setAttribute('d', 'M 40 10 Q 10 65 40 140');
})
btnPrev.addEventListener('mouseout', function () {
    this.querySelector('span').style.opacity = 0;
    this.querySelector('path').setAttribute('d', 'M 40 10 Q 40 65 40 140');
})

btnNext.addEventListener('mouseover', function () {
    this.querySelector('span').style.opacity = 1;
    this.querySelector('path').setAttribute('d', 'M 10 10 Q 40 65 10 140');
})
btnNext.addEventListener('mouseout', function () {
    this.querySelector('span').style.opacity = 0;
    this.querySelector('path').setAttribute('d', 'M 10 10 Q 10 65 10 140');
})

$('.left-menu li').mouseenter(function () {
    $('.left-menu li span:nth-child(1)').removeClass('on')
    $('.left-menu li span:nth-child(2)').addClass('on')

    $('.left-menu').addClass('on')
    $('header').addClass('on')

    $('.left-menu .sub-menu').stop().slideDown()
    $('h1').hide()
})
$('.left-menu').mouseleave(function () {
    $('.left-menu li span:nth-child(2)').removeClass('on')
    $('.left-menu li span:nth-child(1)').addClass('on')

    $('.left-menu').removeClass('on')
    $('header').removeClass('on')

    $('.left-menu .sub-menu').stop().slideUp()
    $('h1').show()
})

$('.right-menu li').mouseenter(function () {
    $('.right-menu li span:nth-child(1)').removeClass('on')
    $('.right-menu li span:nth-child(2)').addClass('on')

    $('.right-menu').addClass('on')
    $('header').addClass('on')

    $('.right-menu .sub-menu').stop().slideDown()
    $('h1').hide()
})
$('.right-menu').mouseleave(function () {
    $('.right-menu li span:nth-child(2)').removeClass('on')
    $('.right-menu li span:nth-child(1)').addClass('on')

    $('.right-menu').removeClass('on')
    $('header').removeClass('on')

    $('.right-menu .sub-menu').stop().slideUp()
    $('h1').show()
})

$('.slide_2 .menu li').click(function (e) {
    e.preventDefault()

    $('.slide_2 .menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()

    $('.slide_2 .video').animate({
        'margin-left': -idx * 100 + '%'
    }, 600);

    $('.slide_2 .content li').removeClass('off')
    $('.slide_2 .content li.on').addClass('off')
    $('.slide_2 .content li').removeClass('on')
    $('.slide_2 .content li').eq(idx).addClass('on')
})

// let menuItems = document.querySelectorAll('.slide_2 .menu li')
// menuItems.forEach(function (menuItem) {
//     menuItem.addEventListener('click', function (e) {
//         e.preventDefault();

//         menuItems.forEach(item => {
//             item.classList.remove('on');
//         });
//         this.classList.add('on');

//         var idx = Array.from(menuItems).indexOf(this);

//         var videoElement = document.querySelector('.slide_2 .video');
//         videoElement.style.marginLeft = -idx * 100 + '%';

//         var contentItems = document.querySelectorAll('.slide_2 .content li');
//         contentItems.forEach(Item => {
//             Item.classList.remove('on');
//         });
//         contentItems[idx].classList.add('on');
//     });
// });

$('.slide_3 .tab li a').click(function(e){
    e.preventDefault()

    $('.tab li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')

    $('.swiper').removeClass('on')
    $(href).addClass('on')
})

$('.slide_4 .tab li').click(function(e){
    e.preventDefault()

    $('.tab li').find('a').removeClass('on')
    $(this).find('a').addClass('on')

    let idx = $(this).index()
    let translateValue = -710 * idx;

    $('.slide_4 .swiper-wrapper').animate({
        'left': translateValue + 'px'
    }, 600);
})