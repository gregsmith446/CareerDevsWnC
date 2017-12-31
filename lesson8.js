//lesson 8 - REFACTORING
// working controls for .addTodo
// working controls for .changeTodo
// working controls for .deleteTodo
// working controls for .toggleCompleted
//PAGE will have INPUTS

//todolist object
var todolist = {
    todos: [],
    displayTodos: function() {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++) {
            // console.log(this.todos[i].todoText); //will log the text of the todoarray in the console
        }
        // if there are no todos aka if this.todos.length is equal to 0
        // if this.todos.length === 0, abbreivated version of text above meaning, if the array is empty, do this...
        // console.log ("your todo list is empty")
        // else
        // print todos as normal
        if (this.todos.length === 0) {
            console.log("your todo list is empty!");
        }
        else {
            // console.log("My list of todos:");
            for (var i = 0; i < this.todos.length; i++) {
                //check is .completed is true
                if (this.todos[i].completed === true) {
                    //print with (x)
                    console.log("(x)", this.todos[i].todoText);
                }
                else {
                    //print with ( )
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
    }
};

//refactored HTML DOM section with use of onclick=""
//going to use a new object that will "handle" these tasks

var handlers = {
    displayTodos: function() {
        todolist.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todolist.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todolist.deleteTodo(deleteTodoPositionInput.valueasNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    },
    toggleAll: function() {
        todolist.toggleAll();
    }
};
