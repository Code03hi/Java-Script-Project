const add = document.querySelector("#add")
const remove = document.querySelector("#remove")
const userType = document.querySelector("#userType")
const heart = document.querySelector("#heart")
const userImage = document.querySelector("#likeImage")
let check = 0
let heartStatus = 0


userImage.addEventListener("click", () =>
{
    userImage.addEventListener("click", () =>
    {
        if(heartStatus == 0)
        {
            heart.style.transition = "2s"
            heart.style.scale = "1"
            heart.style.transform = "translate(-50%,-50%) scale(1)"
            console.log("hello")
            heartStatus = 1 
            heart.style.opacity = '1';
        }
        setTimeout(() =>
        {
            heart.style.transition = "2s"
            heart.style.scale = "1"
            console.log("hello")
            heartStatus = 0
            heart.style.opacity = '0';
        },2000)
    })
})

add.addEventListener("click", (event) =>
{
    if(check == 0)
    {
        userType.textContent = "Friend"
        userType.style.color = "green"
        add.innerHTML = "Remove Friend"
        check = 1
    }
    else
    {
        check = 0
        add.innerHTML = "Add Friend"
        userType.style.color = "red"
        userType.textContent = "Stranger"
    }
})


