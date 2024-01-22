let apiKey = "0e2f5167cc724e6dab0ded60ea20203d";
let userIcon = document.querySelector(".fa-user")
let userText = document.querySelector("#iconText")

const logo = document.querySelector(".logo");
let down = document.querySelector("#upDown #down");

let homePage = document.querySelector("#homePage")
let newUpdate = document.querySelector("#newUpdate")
let about = document.querySelector("#about")
let help = document.querySelector("#help")
let account = document.querySelector("#account")
let searchNews = document.querySelector(".searchNews #search");

let API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = "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";
let userSearch = "";

const handleSearch = async () =>
{
    userSearch = searchNews.value.trim();
    let option = 
    {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify(
            {
                model: "gpt-3.5-turbo",
                message:
                [
                    {
                        role: "user",
                        content: userSearch
                    }
                ]
            }
        )
    }; 
    fetch(API_URL,option).then(response => response.json()).then(data => console.log(data)).catch(error => error.message);
    // let response = await fetch(API_URL,option);
//    try {
//    } catch (error) {
//     console.log(error.message);
//    }
//    const {data} = await response.json();
//    console.log(data);
}

searchNews.addEventListener("click", handleSearch);


logo.addEventListener("mousemove", (event) =>
{
    logo.style.transform = "rotate(0turn)";
    logo.style.transition = "1.5s"
})

logo.addEventListener("mouseleave", (event) =>
{
    logo.style.transform = "rotate(0.5turn)"
})

userIcon.addEventListener("mousemove", () => {
    userText.style.opacity = 1
    userText.style.color = "gold"
    userText.style.transition = "1s"
})
userIcon.addEventListener("mouseleave", () => {
    userText.style.opacity = 0
})


function loadAnimation() {
    gsap.from("#home-page-text h1",
    {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 2,
        stagger: 0.3
    })
}

function animationPageTwo()
{
    gsap.from("#tradingNews",
    {
        x: -200,
        delay: 1,
        opacity: 0,
        duration: 2,
        y: -50
    })
}


loadAnimation();
animationPageTwo();


