
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create LIST
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Add Todo to Local Storage
    saveLocalTodos(todoInput.value);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    newTodo.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    newTodo.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);

    // Clear ToDo Input Value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    // Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("uncompleted")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    // CHECK --- Hey Do I already have an item there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    // CHECK --- Hey Do I already have an item there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.forEach(function(todo) {
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        // Create LIST
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Add Todo to Local Storage
        saveLocalTodos(todoInput.value);

        // Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add("complete-btn");
        newTodo.appendChild(completedButton);

        // Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        newTodo.appendChild(trashButton);

        // Append To List
        todoList.appendChild(todoDiv);
    });
}

