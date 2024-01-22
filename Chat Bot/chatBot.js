// let chatbotToggler = document.querySelector(".chatbot-toggler");
let chatbot = document.querySelector(".chatbot");


const OPENAI_API_KEY = "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";
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotClose = document.querySelector(".closeBtn");

let chatInputHeight = chatInput.scrollHeight;

let userMessage;

const generateResponse = async (incomingMessage) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingMessage.querySelector("p");

    const requestOption =
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify(
            {
                model: "gpt-3.5-turbo",
                messages: 
                [
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            }
        )
    };

    // Send POST request to API, get response
    fetch(API_URL, requestOption).then(res => res.json()).then(data => {
        // console.log(data);
        // console.log(data.choices[0].message.content);
        messageElement.textContent = data.choices[0].message.content;
    }).catch(error => {
        console.log(error.message);
        messageElement.textContent = "Oops! Something went wrong. Please try again...";
    }).finally( () => chatbox.scrollTo(0,chatbox.scrollHeight));
    // const response = await fetch(API_URL,requestOption);
    // const {data} = await response.json();
    // console.log(data);
    // let getReponseFromAI = ;
}

const createChatLive = (message, className) => {
    // Create a chat <li> element with passed message and classname
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`  
    // if (className === "incoming") {
    //     console.log(message);
    //     generateResponse();
    // }
    chatLi.innerHTML = chatContent;
    try {
        chatLi.querySelector("p").textContent = message;
    } catch (error) {
        error.message;
    }
    return chatLi; 
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.innerHTML = "";
    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLive(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLive("Thinking...", "incoming");
        generateResponse(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        chatbox.appendChild(incomingChatLi);
    }, 600)
}

sendChatBtn.addEventListener("click", handleChat)

chatInput.addEventListener("input", () =>
{
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${chatInputHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
})


// chatbotClose.addEventListener
chatbotToggler.addEventListener("click", (event) => {
    document.body.classList.toggle("show-chatbot");
    // if (chatbot.style.opacity == 0) {
    //     chatbot.style.opacity = 1;
    //     chatbotToggler.classList.remove("material-symbols-outlined")
    //     // chatbotToggler.classList.add("")
    //     // chatbot.style.transition = "1s";
    // }
    // else if (chatbot.style.opacity == 1) {
    //     chatbot.style.opacity = 0;
    //     // chatbot.style.transition = "1s";
    // }
})