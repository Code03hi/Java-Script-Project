const qrlImage = document.querySelector("#qrlImage");
const imgBox = document.querySelector(".imgBox");
const userInput = document.querySelector("#userInput");
const GenerateQR = document.querySelector("#GenerateQR");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const generateQR = () =>{
    let value = userInput.value;
    console.log(value)
    if(value != ""){
        qrlImage.src = ("src",`${url}+${value}`);
    }else{
        alert("Please Enter the text and URL before clicking the Generate Button");
    }
}

GenerateQR.addEventListener("click", generateQR);