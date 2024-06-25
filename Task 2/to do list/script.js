// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listeners
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const todoText = todoInput.value.trim(); // Remove whitespace from input

    if (todoText !== '') {
        addTodoItem(todoText); // Add todo item
        todoInput.value = ''; // Clear input field
    }
});

// Function to add a new todo item
function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(todoItem);

    // Add event listener to delete button
    const deleteBtn = todoItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        todoItem.remove(); // Remove the todo item when delete button is clicked
    });
}
