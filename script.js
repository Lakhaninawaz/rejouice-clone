function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoScroll()


function cursorEffect() {
    var page1Content = document.querySelector(".page1-content")
    var cursor = document.querySelector(".cursor")

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()

function cursorEffectPage5() {
    var page5 = document.querySelector(".page5")
    var cursor2 = document.querySelector(".page5 .cursor2")

    page5.addEventListener("mousemove", function (dets) {
        console.log(dets);
        console.log(cursor2)
        gsap.to(cursor2, {
            x: dets.x-50+"px",
            y: dets.y-100+"px"
        })
    })

    page5.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1
        })
    })

    page5.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffectPage5()

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: ".elem",
            scroller: "#main",
            start: "top 80%",
            end: "top 47%",
            // markers: true,
            scrub: 2
        }
    })
    gsap.from(".page2-top h3,.page2-top h4", {
        y: 70,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: "#main",
            start: "top 80%",
            end: "top 77%",
            // markers: true,
            scrub: 2
        }
    })

    gsap.to('.line', {
        width: 94+"vw",
        duration: 1,
        scrollTrigger: {
            trigger: ".line",
            scroller: "#main",
            start: "top 92%",
            end: "top 89%",
            // markers: true,
            duration: 5,
            scrub: 1
        },
        easeIn: true
    })
}
page2Animation()

function page3Animation() {
    gsap.from(".page3-top h1", {
        y: 120,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "#main",
            start: "top 80%",
            end: "top 47%",
            // markers: true,
            scrub: 2
        }
    })
}
page3Animation()

function page4Animation() {
    gsap.from(".elem2 h1", {
        y: 120,
        stagger: 0.5,
        duration: 2,
        scrollTrigger: {
            trigger: ".page4-top",
            scroller: "#main",
            start: "top 80%",
            end: "top 47%",
            // markers: true,
            scrub: 2
        }
    })
    gsap.from(".page4-top h3", {
        y: 70,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".page4",
            scroller: "#main",
            start: "top 80%",
            end: "top 77%",
            // markers: true,
            scrub: 2
        }
    })

    gsap.to('.line2', {
        width: 94+"vw",
        duration: 1,
        scrollTrigger: {
            trigger: ".line2",
            scroller: "#main",
            start: "top 92%",
            end: "top 89%",
            // markers: true,
            duration: 5,
            scrub: 1
        },
    })
}
page4Animation()

function svgMove(){
    gsap.to('.abs', {
        rotate: 360,
        duration: 5,
        ease: "power1.in",
        scrollTrigger:{
            trigger: ".page5",
            scroller: "#main",
            start: "top 40%",
            end: "top 70%",
            scrub: 2
        }
    })
}
svgMove()


function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 600,
            disableOnInteraction: false,
          },
      });
}
sliderAnimation()

var tl = gsap.timeline()

tl.from(".loader h3",{
    x:50,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

tl.to(".loader h3", {
    x: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})

tl.to(".loader",{
    opacity: 0
})

tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger: 0.1,
    duration:0.5,
    delay: -0.5
})

tl.to(".loader",{
    display: "none"
})


function menuAnim(){
    const menuBtn = document.querySelector('.page1 .page1-content nav #menu')
    const menu = document.querySelector('.page1 .menu')
    const closeBtn = document.querySelector('.page1 .menu .menu-header #close a')
    const video = document.querySelector('.page1 .menu .menu-sec .vid video')
    const playReel = document.querySelector('.page1 .menu .menu-sec .vid .play')
    const smallLinks = document.querySelector('.page1 .menu .small-links')
    const Links = document.querySelectorAll('.page1 .menu .menu-sec .links h3 , .page1 .menu .menu-sec .links button')
    const border = document.querySelector('.page1 .menu .menu-border') 
  
  
  menuBtn.addEventListener('click',() => {
    menu.classList.add('active')
    menu.style.transition = `height .5s ease`
    
    gsap.from(video,{
      scale:.1,
      duration:1
    })
    gsap.from(playReel,{
      y:-100,
      duration:1.1
    })
    gsap.from(smallLinks,{
      x:200,
      duration:2,
      delay:-.4
    })
    gsap.from(Links,{
      y:100,
      duration:.7,
      stagger:.1
    })
    gsap.to(border,{
     width:95+"vw",
     duration:1.5,
     delay:-.1
    })
  
  })
  closeBtn.addEventListener('click',() => {
    menu.classList.remove('active') 
  })
  
  }
  menuAnim()