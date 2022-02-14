window.addEventListener("DOMContentLoaded", function (){
    const input = document.querySelector("#input-todo");
    const btn = document.querySelector("button");
    const todolist = document.querySelector(".todo-list");

    btn.addEventListener("click", function () { 
        const userInput = input.value;
        const toDoTask = document.createElement("li")
        toDoTask.innerHTML = userInput
        todolist.appendChild(toDoTask)
        input.value = "";
    });
    
});