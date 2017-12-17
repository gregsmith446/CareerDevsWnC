// for loop review
// i = 0               // initilization - create a variable to track how many times we should do something
// say "hey if i < 3   // condition - whether to keep going or not
// increase i by 1     // final-expression, what to do

// 0 hey
// 1 hey
// 2 hey

// for (initilization; condition; final-expression) {
//     //the work you want to repeat here;
// }

// for (var i=0; i < 3; i = i + 1) { //i = i + 1 is the same as i++
//     console.log("hey");
// }

// var testArray = ["item 1", "item 2", "item 3"]

// for (var i = 0; i < 3; i++) {
//     console.log(testArray[i]); //item 1 item 2 item 3
// }

// for (var i = 0; i < testArray.length; i++) { //better than i < 3
//     console.log(testArray[i]); //item 1 item 2 item 3
// }


// Version 5 - LOOPS OF LOGIC
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

var todolist = {
    todos: [],
    displayTodos: function() {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText); //will log the text of the todoarray in the console
        }
        // if there are no todos aka if this.todos.length is equal to 0
        // if this.todos.length === 0, abbreivated version of text above meaning, if the array is empty, do this...
        // console.log ("your todo list is empty")
        // else
        // print todos as normal
        if (this.todos.length === 0) {
            console.log("your todo list is empty");
        }
        else {
            console.log("My list of todos:");
            for (var i = 0; i < this.todos.length; i++) {
                //check is .completed is true
                if (this.todos[i].completed === true) {
                    //print with (x)
                    console.log("(x)", "this.todos[i].todoText");
                }
                else {
                    //print with ( )
                    console.log("( )", "this.todos[i].todoText");
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
    }
};

// simple breakdown of an if, else statement - they are very flexible forms of logic
// if (condition) {
// code that runs if condition true
// } else }
// code that runs if condition is false
// }


// todoList.toggleCompleted(1); // this lets us 'check' and 'uncheck' the selected 'todo'
