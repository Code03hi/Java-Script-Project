const container  = document.querySelector(".container");
const textContainerList = document.querySelector(".textContainerList")
const createTextArea = document.querySelector("button .createTextArea");
const textContainer = document.querySelectorAll(".textContainer");


const showNotes = () =>{
    textContainerList.innerHTML = localStorage.getItem("note");
}

showNotes();

const updateStorage = () =>{
    console.log(textContainerList.innerHTML);
    localStorage.setItem("note",textContainerList.innerHTML);
}

const removeNote = (event) =>{
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        updateStorage();
    }
    else if(event.target.tagName === "P"){
        textContainer = document.querySelectorAll("textContainer");
        textContainer.forEach(Element => {
            Element.onkeyup = function(){
                updateStorage();
            }
        })
    }
}

const createText = () =>{
    const text = document.createElement("p");
    const deleteNote = document.createElement("img");
    deleteNote.classList.add("delete");
    text.classList.add("textContainer");
    deleteNote.setAttribute("src","ImageGene/delete.png");
    text.setAttribute("contenteditable","true");
    textContainerList.appendChild(text).appendChild(deleteNote);
    updateStorage();
}

createTextArea.addEventListener("click", createText);
textContainerList.addEventListener("click", removeNote);

