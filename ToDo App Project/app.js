
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener('click', addTodo);

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
}




