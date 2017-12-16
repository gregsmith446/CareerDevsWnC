var todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
}

// console.log('My todos:', todos);
    
displayTodos();


function addTodo() {
    todos.push('new todo');
}

addTodo('new todo')
displayTodos()

addTodo('new todo')
displayTodos()

addTodo('new todo')
displayTodos()

// console.log('My todos:', todos);

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('hello there');

addTodo('any thing at all here');

console.log('My todos:', todos);

function changeTodo(position, newValue) {
    // todos[0] = 'some new value';
    todos [position] = newValue;
}

changeTodo(0, 'changed')

changeTodo(0, 'changed again')

function deleteTodo(position) {
    todos.splice(position, 1);
}

deleteTodo(0)
deleteTodo(2)
deleteTodo(3)


console.log(todos)
