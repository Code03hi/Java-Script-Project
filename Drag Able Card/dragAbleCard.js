const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper i")
const cardImageWidth = document.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false,startX,startScrollLeft,timeoutId;

// get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / cardImageWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerView).reverse().forEach(card => 
    {
        carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
    })

// Insert copies of the first few cards to end of the caeousel for infinite scrolling 
carouselChildren.slice(0, cardPerView).forEach(card =>
    {
        carousel.insertAdjacentHTML("beforeend",card.outerHTML)
    })

arrowBtn.forEach(btn => 
    {
        btn.addEventListener("click", (event) =>
        {
            carousel.scrollLeft += (btn.id === "left") ? cardImageWidth : cardImageWidth ;
        })
    })

const dragstart = (event) =>
{
    isDragging = true;
    carousel.classList.add("dragging")
    startX = event.pageX;
    startScrollLeft = carousel.scrollLeft
}

const dragging = (event) =>
{
    if(!dragging) return;
    carousel.scrollLeft = startScrollLeft - (event.pageX - startX)
    // carousel.scrollLeft = event.pageX;
}

const dragstop = () =>
{
    isDragging = false;
    carousel.classList.remove("dragging")
}

const moveLeft = (event) =>
{
    carousel.scrollLeft = carousel.scrollLeft + 355;
}

const moveRight = (event) =>
{
    carousel.scrollLeft = carousel.scrollTo - 355;
}

const autoPlay = () =>
{
    if(window.innerWidth < 800) return; // Return if the window is smaller than 800
    // Autoplay the carousel after 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += cardImageWidth,500);   
}

autoPlay();

const infiniteScroll = () =>
{
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0)
    {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition")
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth)
    {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition")
    }

    // Clear existing timeout and start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragstop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
