//todolist object holds the data and sets up the buttons
var todolist = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // Case 1: if everything is true, make everything false
        if (completedTodos === totalTodos) {
            // make everything false.
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            // Case 2: otherwise, make everything true
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }

        }
    }
};

//handles the user interactions
var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todolist.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput = '';
        view.displayTodos();

    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todolist.deleteTodo(deleteTodoPositionInput.valueasNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();

    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();

    },
    toggleAll: function() {
        todolist.toggleAll();
        view.displayTodos();
    }
};

//this method takes the array and displays it on our screen
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (var i = 0; i < todolist.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todolist.todos[i];
            var todoTextWithCompletion

            if (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( )" + todo.todoText;
            }
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    }
};

var todosUl = document.querySelector("ul");

todosUl.addEventListener("click", function(event) {
    console.log(event.target.parentNode.id);
    
});
