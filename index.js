var tl = gsap.timeline();

tl.from(".elems h1 , .elems p",{
    y:0,
    opacity:0,
    duration:2,
    delay:2,
    stagger:2
})