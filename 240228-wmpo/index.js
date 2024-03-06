var swiper = new Swiper(".mySwiper", {
    speed: 500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

let navA = document.querySelectorAll('.nav li a')

navA.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        let href = this.getAttribute('href')
        let secTop = document.querySelector(href).offsetTop

        document.querySelector('html').style.scrollBehavior = 'smooth'
        window.scrollTo({ top: secTop, behavior: 'smooth' })

        document.querySelectorAll('.nav li a.on').forEach(link => link.classList.remove('on'))
        this.classList.add('on')
    })
})

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY

    document.querySelectorAll('section').forEach(function (section, i) {
        let secTop = section.offsetTop

        if (scrollTop >= secTop) {
            navA.forEach(navLink => { navLink.classList.remove('on') })

            document.querySelectorAll('.nav li').item(i).querySelector('a').classList.add('on');
            document.querySelectorAll('.nav a').forEach(navItem => { navItem.style.border = '6px solid rgba(0, 0, 0, 0)' })

            let onNavItem = document.querySelector('.nav a.on')
            let onHeader = document.querySelector('header h1 a')
            if (onNavItem) {
                let onColor = '#333'
                let onPosition = '-641px -288px'
                if (i == 2 || i == 4) {
                    onColor = '#fff'
                    onPosition = '-641px -258px'
                }
                onNavItem.style.border = '4px solid ' + onColor
                onHeader.style.backgroundPosition = onPosition
            }
        }
    })
})

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