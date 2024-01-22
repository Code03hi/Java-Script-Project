let userTask = document.querySelector("#input-box");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector(".task");

const creatTask = (event) => {
    if(userTask.value === ''){
        alert("You must write something!")
    }else{
        const task = document.createElement("p");
        task.innerHTML = `${userTask.value}`;
        taskList.appendChild(task);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
        // task.addEventListener("click", () => {
        //     task.classList.add("checked");
        // });
        saveData();
    }
}

taskList.addEventListener("click" , (e) => {
    if(e.target.tagName == "P"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();

addTask.addEventListener("click" , creatTask);