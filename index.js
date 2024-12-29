const formTodo = document.querySelector(".form-todo");
const todoText = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoText.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn Done">Done</button>
                    <button class="todo-btn Remove">Remove</button>
                </div>`
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi);            
    todoText.value = "";
});

todoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("Remove")){
        const targeted = document.querySelector("li");
        targeted.remove();
    }
    if(e.target.classList.contains("Done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
});