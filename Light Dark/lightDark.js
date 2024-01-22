let action = document.querySelector("#icon")
let body = document.querySelector("body")


action.addEventListener("click", (event) =>
{
    console.log("hii " + action.className)
    if(action.className == "fa-regular fa-moon")
    {
        action.classList.remove("fa-moon")
        action.classList.add("fa-sun")
        action.style.color = "black"
        body.style.transition = "2s"
        body.style.backgroundColor = "white"
    }else if(action.className == "fa-regular fa-sun")
    {
        action.classList.remove("fa-sun")
        action.classList.add("fa-moon")
        action.style.color = "white"
        body.style.transition = "2s"
        body.style.backgroundColor = "black"
    }
})