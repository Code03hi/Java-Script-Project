const scroll = new LocomotiveScroll({
    el: document.querySelector("#parent"),
    smooth: true
});

function videoconAnimation() {
    let videoContainetr = document.querySelector("#video-container")
    let playBtn = document.querySelector(".play")

    videoContainetr.addEventListener("mouseenter", () => {
        gsap.to(playBtn,
            {
                opacity: "1",
                scale: "1"
            })
    })

    videoContainetr.addEventListener("mouseleave", () => {
        gsap.to(playBtn,
            {
                opacity: "0",
                scale: "0"
            })
    })

    videoContainetr.addEventListener("mousemove", (event) => {
        gsap.to(playBtn,
            {
                left: event.clientX - 80,
                top: event.clientY - 100 
            })
    })
}

videoconAnimation()

function loadAnimation() {
    gsap.from("#p1 h1",
        {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 0.9,
            stagger: 0.3
        })
    gsap.from("#p1 #video-container",
    {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })    
}

loadAnimation()




