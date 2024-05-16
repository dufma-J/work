const ani1 = gsap.timeline()
ani1.from('#sec1 h1', { autoAlpha: 0, xPercent: -100, xPercent: -100, duration: 1.0 }, 'text')
    .from('#sec1 p', { autoAlpha: 0, yPercent: 100, xPercent: -100, duration: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani1,
    trigger: '#sec1',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani2 = gsap.timeline()
ani2.from('#sec2 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec2 p', { autoAlpha: 0, duration: 1.0, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani2,
    trigger: '#sec2',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani3 = gsap.timeline()
ani3.from('#sec3 h2', { autoAlpha: 0, yPercent: -100, duration: 1.0 }, 'text')
    .from('#sec3 p', { autoAlpha: 0, yPercent: -100, duration: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani3,
    trigger: '#sec3',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani4 = gsap.timeline()
ani4.from('#sec4 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec4 ul', { autoAlpha: 0, duration: 1.0, delay: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani4,
    trigger: '#sec4',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani7 = gsap.timeline()
ani7.from('#sec7 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec7 p', { autoAlpha: 0, yPercent: -100, duration: 0.5, delay: 0.5 }, 'text')
    .from('#sec7 ul', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani7,
    trigger: '#sec7',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani8 = gsap.timeline()
ani8.from('#sec8 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec8 img', { autoAlpha: 0, duration: 0.5, delay: 0.5 }, 'text')
    .from('#sec8 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani8,
    trigger: '#sec8',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani9 = gsap.timeline()
ani9.from('#sec9 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec9 div', { autoAlpha: 0, duration: 0.5, delay: 0.5 }, 'text')
    .from('#sec9 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani9,
    trigger: '#sec9',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani10 = gsap.timeline()
ani10.from('#sec10 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec10 img', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
    .from('#sec10 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani10,
    trigger: '#sec10',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani11 = gsap.timeline()
ani11.from('#sec11 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec11 img', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
    .from('#sec11 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani11,
    trigger: '#sec11',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani12 = gsap.timeline()
ani12.from('#sec12 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec12 img', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
    .from('#sec12 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani12,
    trigger: '#sec12',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani13 = gsap.timeline()
ani13.from('#sec13 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec13 img', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
    .from('#sec13 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani13,
    trigger: '#sec13',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani14 = gsap.timeline()
ani14.from('#sec14 h2', { autoAlpha: 0, yPercent: -100, duration: 0.5 }, 'text')
    .from('#sec14 img', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
    .from('#sec14 p', { autoAlpha: 0, duration: 0.5, delay: 1.0 }, 'text')
ScrollTrigger.create({
    animation: ani14,
    trigger: '#sec14',
    toggleActions: 'play pause none',
    start: 'top bottom'
})