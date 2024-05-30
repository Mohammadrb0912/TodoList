let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todolist');
let filterOption = document.querySelector('.filter-todos');


todoButton.addEventListener('click' , function(e){
    e.preventDefault();
    
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    let newTodo = `
    <li>${todoInput.value}</li>
                <span><i class="fa-sharp fa-regular fa-square-check"></i></span>
                <span><i class="fa-regular fa-trash-can"></i></span>
    `;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    todoInput.value = "";
   
})


todoList.addEventListener('click' , function(e){
    e.preventDefault();
    let classList = [...e.target.classList];
    let item = e.target;
    
    if (classList[2] === "fa-square-check") {
        let todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    } else if (classList[1] === "fa-trash-can") {
        let todo = item.parentElement.parentElement;
        todo.remove();
    }

})


filterOption.addEventListener('click' , function(e){
    
    let todos = [...todoList.childNodes];
    todos.forEach (todo => {
        switch(e.target.value) {
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
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
                break;
        }
    });
})

function saveLocalTodo(todo){
   // localStorage.getItem('todos')
   //   localStorage.setItem('todos' , ,JSON.stringify(todos))

   
}