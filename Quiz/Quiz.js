const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "shark", correct: false, },
            { text: "blue whale", correct: true, },
            { text: "elephent", correct: false, },
            { text: "giraffe", correct: false, },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            { text: "vatican city", correct: true, },
            { text: "bhutan", correct: false, },
            { text: "nepal", correct: false, },
            { text: "sri lanka", correct: false, },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "kalahari", correct: false, },
            { text: "gobi", correct: false, },
            { text: "sahar", correct: false, },
            { text: "antarctica", correct: true, },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "asia", correct: false, },
            { text: "australia", correct: true, },
            { text: "arctic", correct: false, },
            { text: "africa", correct: false, },
        ]
    }
]

const question = document.querySelector("#question");
const QuestionOption = document.querySelector(".QuestionOption");
const anwserButton = document.querySelectorAll(".btn");
const nextQuestion = document.querySelector("#nextQuestion")

let currentQuestionIndex;
let score;

function showQuestion() {
    resetState();
    let questionContainer = questions[currentQuestionIndex+1];
    let questionNo = (1 + 1) + currentQuestionIndex;
    question.innerHTML = questionNo + ". " + questionContainer.question;
    currentQuestionIndex++;
    console.log(currentQuestionIndex)
    questionContainer.answer.forEach(element => {
        const option = document.createElement("p");
        option.innerHTML = element.text;
        option.classList.add("btn");
        QuestionOption.appendChild(option);
        if(element.correct){
            option.dataset.correct = element.correct;
        }
        option.addEventListener("click" , selectedOption)
    })
}


function selectedOption(event){
    let select = event.target;
    console.log(select);
    nextQuestion.style.display = "";
    const isCorrect = select.dataset.correct === "true";
    if(isCorrect){
        select.classList.add("correct")
    }else{
        select.classList.add("incorrect")
    }
    Array.from(QuestionOption.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disable = true;
    });
    nextQuestion.style.display = "block";
}

function startQuiz(){
    nextQuestion.style.display = "none";
    let status = true;
    if(status){
        currentQuestionIndex = 0;
        score = 0;
        status = false;
    }
    showQuestion();
}

function resetState(){
    while(QuestionOption.firstChild){
        QuestionOption.removeChild(QuestionOption.firstChild);
    }
}


nextQuestion.addEventListener("click",startQuiz);


// const QuestionOption = document.querySelector(".QuestionOption");
// const updateQuestion = () => {
//     QuestionOption[1].innerHTML = 
// }


// const anwser = ["Blue whale", "", "", "", "", ""]
// const userAnwser = [];
// const options = [["sharke", "Tiger", "Lion", "Ant"],
// ["parrot", "crow", "eagle", "sperrwo"]]
// // const questions = ["Which animal is biggest in this world", "Which bird is biggest in this world"]

// const selectedOption = document.querySelectorAll("#st");
// const nextQuestion = document.querySelector("#nextQuestion");

// const handleAnotherQuestion = () => {
//     nextQuestion.style.opacity = "0";
//     question.innerHTML = "2. " + questions[1] + '?';
//     let j = 0;
//     for (let row = 0; row < options.length; row++) {
//         for (let column = 0; column < 4; column++) {
//             options1St.innerHTML = options[row][column]
//             options2Nd.innerHTML = options[row][column]
//             options3Rd.innerHTML = options[row][column]
//             options4Th.innerHTML = options[row][column]
//         }
//     }
// }

// options1St.addEventListener("click", () => {
//     nextQuestion.style.opacity = "1";
//     nextQuestion.style.transition = "all 0.5s ease-in";
// })
// nextQuestion.addEventListener("click", handleAnotherQuestion);
