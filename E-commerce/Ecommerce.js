const categories = ["All Categories", "Alexa Skill", "Amazon Device",
    "Amazon Fashion", "Amazon Fresh", "Amazon Pharmacy"];

const imageSliderContainer = ["Image/p1.jpg", "Image/p2.jpg", "Image/p3.jpg", "Image/p4.jpg", "Image/p5.jpg", "Image/p6.jpg", "Image/p7.jpg", "Image/p8.jpg"];
const imageSliderTextAndOffer = [""];
const imageSlide = document.querySelector("#imageSlide");
let imagesIndex = Math.floor(Math.random() * imageSliderContainer.length - 1);

let list = true;
const languageShow = document.querySelectorAll("#language");
const languageOption = document.querySelector(".Language .languageOption");
const Language = document.querySelector("#defualt");
const ItemCategories = document.querySelector("#ItemCategories");
let cat = document.createElement("option");
const allItem = document.querySelector("#allItem");
const all = document.querySelector(".all");
const allSectionOptions = document.querySelector(".allSectionBar");
const allSectionClose = document.querySelector("#close");
const arrowLeft = document.querySelector(".fa-arrow-right");
const arrowRight = document.querySelector(".fa-arrow-left");
const onClick = document.querySelectorAll("#imageSlider .fa-solid");

function item() {
    if (list) {
        for (let key = 0; key < categories.length; key++) {
            cat.value = categories[key];
            cat.innerHTML = categories[key];
            cat.setAttribute("id", key);
            ItemCategories.append(cat);
            cat = document.createElement("option");
        }
        list = false;
    }
    else {
        for (let key = 0; key < categories.length; key++) {
            console.log(key);
            const element = document.getElementById(`${key}`);
            element.remove();
        }
        list = true;
    }
}

const updateImageOnRightSide = () => {
    imageSlide.setAttribute("src", imageSliderContainer[imageSlide == -1 ? imageSlide + 2 : imageSlide]);
    imagesIndex = Math.floor(Math.random() * imageSliderContainer.length - 1);
    console.log(imagesIndex);
    arrowLeft.style.transition = "0.5s";
    arrowLeft.style.background = "#3f3d3d";
    console.log("hello");
    setTimeout(() => {
        arrowLeft.style.background = "red";
    }, 300)
}


const updateImageOnLeftSide = () => {
    console.log(imagesIndex);
    imageSlide.setAttribute("src", imageSliderContainer[imageSlide == -1 ? imageSlide + 2 : imageSlide]);
    imagesIndex = Math.floor(Math.random() * imageSliderContainer.length - 1);
    arrowRight.style.transition = "0.5s";
    arrowRight.style.background = "#3f3d3d";
    console.log("hello");
    setTimeout(() => {
        arrowRight.style.background = "red";
    }, 300)
}

const showOptionPanel = () => {
    allSectionOptions.style.opacity = "1";
}

const closeOptionPanel = () => {
    allSectionOptions.style.opacity = "0";
}

const updateLanguage = () => {
    languageShow.forEach((option) => {
        option.addEventListener("click", () => {
            setTimeout(() => {
                languageOption.style.opacity = "0";
            },1000)
        })
    })
}

const showLanguageOption = () =>{
    updateLanguage();
    languageOption.style.opacity = "1";
}

Language.addEventListener("click", showLanguageOption);
arrowRight.addEventListener("click", updateImageOnLeftSide)
arrowLeft.addEventListener("click", updateImageOnRightSide)
all.addEventListener("click", showOptionPanel)
allSectionClose.addEventListener("click", closeOptionPanel);
ItemCategories.addEventListener("click", item);