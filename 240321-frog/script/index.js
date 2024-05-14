const ani0 = gsap.timeline()
ani0.from('#title h1', { autoAlpha: 0, xPercent: -300, duration: 0.5 }, 'text')
    .from('#title h2', { autoAlpha: 0, xPercent: -300, duration: 0.5 }, 'text')
    .from('#title p', { autoAlpha: 0, xPercent: -300, duration: 0.5 }, 'text')
    .from('#title .lotus1', { duration: 0.5, x: 1000, borderRadius: 999, rotation: 365 })
    .from('#title .effect', { autoAlpha: 0, duration: 1 })
ScrollTrigger.create({
    animation: ani0,
    trigger: '#title',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani1 = gsap.timeline()
ani1.from('#sec1 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec1 ul', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani1,
    trigger: '#sec1',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani2 = gsap.timeline()
ani2.from('#sec2 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec2 ul', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani2,
    trigger: '#sec2',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani3 = gsap.timeline()
ani3.from('#sec3 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec3 ul', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani3,
    trigger: '#sec3',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani4 = gsap.timeline()
ani4.from('#sec4 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec4 .wrap', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani4,
    trigger: '#sec4',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani5 = gsap.timeline()
ani5.from('#sec5 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec5 .per1', { autoAlpha: 0, xPercent: 100, duration: 0.5, delay: 0.5 }, 'text')
    .from('#sec5 .per2', { autoAlpha: 0, xPercent: 100, duration: 0.5, delay: 1 }, 'text')
ScrollTrigger.create({
    animation: ani5,
    trigger: '#sec5',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani6 = gsap.timeline()
ani6.from('#sec6 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5, stagger: 0.3 }, 'text')
    .from('#sec6 img', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani6,
    trigger: '#sec6',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani7 = gsap.timeline()
ani7.from('#sec7 h1', { autoAlpha: 0, yPercent: -100, duration: 0.5, stagger: 0.3 }, 'text')
    .from('#sec7 li', { autoAlpha: 0, delay: 0.5, duration: 0.5, stagger: 0.3 }, 'text')
ScrollTrigger.create({
    animation: ani7,
    trigger: '#sec7',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani8 = gsap.timeline()
ani8.from('#sec8 .title', { autoAlpha: 0, yPercent: -100, duration: 0.5, stagger: 0.3 }, 'text')
    .from('#sec8 .box', { autoAlpha: 0, yPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani8,
    trigger: '#sec8',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani9 = gsap.timeline()
ani9.from('#sec9 .app_text', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec9 .app_img', { autoAlpha: 0, xPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani9,
    trigger: '#sec9',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani10 = gsap.timeline()
ani10.from('#sec10 .app_text', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec10 .app_img', { autoAlpha: 0, xPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani10,
    trigger: '#sec10',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani11 = gsap.timeline()
ani11.from('#sec11 .app_text', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec11 .app_img', { autoAlpha: 0, xPercent: -100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani11,
    trigger: '#sec11',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani12 = gsap.timeline()
ani12.from('#sec12 .app_text', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec12 .app_img', { autoAlpha: 0, xPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani12,
    trigger: '#sec12',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani13 = gsap.timeline()
ani13.from('#sec13 img', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec13 ul', { autoAlpha: 0, xPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani13,
    trigger: '#sec13',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani14 = gsap.timeline()
ani14.from('#sec14 img', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec14 p', { autoAlpha: 0, yPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani14,
    trigger: '#sec14',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani15 = gsap.timeline()
ani15.from('#sec15 img', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec15 p', { autoAlpha: 0, yPercent: 100, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani15,
    trigger: '#sec15',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani16 = gsap.timeline()
ani16.from('#sec16 img', { autoAlpha: 0, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani16,
    trigger: '#sec16',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})