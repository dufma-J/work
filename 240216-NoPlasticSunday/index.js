var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

$('#section2 .banner li img').mouseenter(function () {
    $('#section2 .banner li img').removeClass('on')
    $(this).removeClass('off').addClass('on')
})

$('.nav li a').click(function () {
    $('.nav li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')
    let secTop = $(href).offset().top
    $('html').stop().animate({ 'scrollTop': secTop })

})

// $(window).scroll(function () {
//     let scrollTop = $(this).scrollTop()
//     $('h5').text(scrollTop)

//     $('section').each(function (i) {
//         let secTop = $(this).offset().top

//         if (scrollTop >= secTop) {
//             $('.nav li a').removeClass('on')
//             $('.nav li').eq(i).find('a').addClass('on')

//             if (i == 0) {
//                 $('header').css({ 'background': '#fff' })
//                 $('.top-btn').css({ 'display': 'none' })
//             }
//             if (i == 1) { $('.top-btn').css({ 'display': 'block' }) }
//             if (i == 2) {
//                 $('header').css({ 'background': '#f5f5f5' })
//             }
//             if (i == 3) {
//                 $('header').css({ 'background': '#fff' })
//             }
//             if (i == 4) {
//                 $('header').css({ 'background': '#fff500' })
//             }
//             if (i == 5) {
//                 $('header').css({ 'background': '#fff' })
//             }
//             if (i == 6) {
//                 $('header').css({ 'background': '#f5f5f5' })
//             }
//         }
//     })
// })

const sections = document.querySelectorAll('section')
const navItems = document.querySelectorAll('.nav li')

document.querySelector('.nav').addEventListener('click', function(e){
    let anchor = e.target.closest('li a')
    if (anchor){
        e.preventDefault()

        let href = anchor.getAttribute('href')
        let secTop = document.querySelector(href).offsetTop
        window.scrollTo({top : secTop, behavior : 'smooth'})
    }
})

window.addEventListener('scroll', function(){
    let scrTop = window.scrollY
    let h = this.window.innerHeight

    sections.forEach(function(section, i){
        section.classList.remove('on')
        
        let secTop = section.offsetTop
        if (scrTo >= secTop){
            navItems.forEach(function(navItem){
                navItem.querySelector('a').classList.remove('on')
            })
            navItems[i].querySelector('a').classList.add('on')
        }
    })
})

sections.forEach(function(section){
    section.addEventListener('wheel', function(e){
        e.preventDefault()

        let delta = e.deltaY
        let targetSection = delta < 0
        ? section.previousElementSibling
        : section.nextElementSibling

        if(targetSection){
            let targetTop = targetSection.offsetTop
            window.scrollTo({top : secTop, behavior : 'smooth'})
        }
    })
})


$('section').mousewheel(function (e, delta) {
    if (delta > 0) {
        let prev = $(this).prev().offset().top
        $('html').stop().animate({ 'scrollTop': prev }, 750)
    }
    else if (delta < 0) {
        let next = $(this).next().offset().top
        $('html').stop().animate({ 'scrollTop': next }, 750)
    }
})

$('.top-btn a').click(function () {
    $('html').stop().animate({ 'scrollTop': 0 }, 750)
})