document.addEventListener("DOMContentLoaded", function() {
    function init() {
        gsap.registerPlugin(ScrollTrigger);
    
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true
        });
        locoScroll.on("scroll", ScrollTrigger.update);
    
        ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
        });
    
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
        ScrollTrigger.refresh();
    }

  
    init();

    var Typing = new Typed(".multitext",{
        strings : ["Nintendo Switch","Gaming Console","Playing Remote"],
        loop :true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 1500,
    })
    function wrapWordsInSpan(selector) {
        var clutter = "";
        var h1Element = document.querySelector(selector);
        h1Element.textContent.split(" ").forEach(function(dets){
            clutter += `<span> ${dets} </span>`;
        });
        h1Element.innerHTML = clutter;
    }
    
    function applyGsapAnimation(selector, triggerSelector) {
        gsap.to(selector, {
            scrollTrigger: {
                trigger: triggerSelector,
                start: 'top bottom',
                end: 'bottom top',
                scroller: '.main',
                scrub: 2,
                // markers: true,
            },
            stagger: .2,
            color: '#000000'
        });
    }
    
    // Wrap words in span tags
    wrapWordsInSpan('.newstexta h1');
    wrapWordsInSpan('.newstextb h1');
    wrapWordsInSpan('.newstextc h1');
    wrapWordsInSpan('.newstextd h1');
    
    // Apply GSAP animation
    applyGsapAnimation(".newstexta h1 span", ".newstexta h1 span");
    applyGsapAnimation(".newstextb h1 span", ".newstextb h1 span");
    applyGsapAnimation(".newstextc h1 span", ".newstextc h1 span");
    applyGsapAnimation(".newstextd h1 span", ".newstextd h1 span");

    function setupCursorInteractions() {
        const cursor = document.querySelector("#cursor");
       
        const main = document.querySelector(".main");

        

        if (main) {
            main.addEventListener("mousemove", (e) => {
                gsap.to(cursor, { x: e.x, y: e.y, duration: -1 });
            });
        }
    }

    setupCursorInteractions();
    function  loadervideo() {
        const loader = document.querySelector(".loadervideo")
        gsap.to(loader, {
            y:"-100%",
            // opacity:0,
            duration:1,
            delay:5
            // display:"hidden"
        })
        
    }

    loadervideo();

    

});