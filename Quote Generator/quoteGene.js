const quoteContent = document.querySelector("#content");
const quoteAuthor = document.querySelector("#author");
const generaterNewQuote = document.querySelector("#generaterNewQuote");
let api_url = "https://api.quotable.io/random"

const generateQuote = async () => {
    let response = await fetch(api_url);
    let data = await response.json();
    let content = data.content;
    let author = data.author;
    quoteContent.innerHTML = content;
    console.log(quoteContent.innerHTML);
    quoteAuthor.innerHTML = author;
}


generaterNewQuote.addEventListener("click",generateQuote);