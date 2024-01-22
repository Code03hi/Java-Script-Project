const password  = document.querySelector("#password");
const generatePassword = document.querySelector("#generate")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_=+-";
let comingRandomPassword = upperCase + lowerCase + number + symbol;

function createPassword() {
    let passwordCreated = "";
    passwordCreated += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwordCreated += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passwordCreated += number[Math.floor(Math.random() * number.length)];
    passwordCreated += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > passwordCreated.length){
        passwordCreated += comingRandomPassword[Math.floor(Math.random()* comingRandomPassword.length)];
    }
    password.value = passwordCreated;
    // return password;
}

const copyPassword = () => {
    password.select();
    document.execCommand("copy");
}

// const freshLayout = () =>{
//     password.value = "";
// }

// const forCreation = () => {
//     console.log("hello")
//     for(let i=0;i<3;i++){
//         comingRandomPassword += createPassword();
//     }
//     console.log(comingRandomPassword);
//     password.value = comingRandomPassword;
//     console.log(password.innerHTML);
// }

// generatePassword.addEventListener("click",createPassword);