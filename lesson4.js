//OBJECTS + BOOLEANS - add an array of objects instead of just text
// add objects
// change the todoText property - changeTodod
// changed the completed property - toggleCompleted - booleans

var todolist = { //a variable with an array inside = an object
    todos: [], //array
    displayTodos: function() { //standalone function is a method. They don't need to be named aka "nameless" b/c we refer to it by the property name
        //propertyname "displayTodos"
        console.log("My Todos", "this.todos"); //displays the array in console.
    },
    addTodo: function(todoText) { //ADD method
        this.todos.push({
            todoText: todoText, //name of property: 
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { //CHANGE method 
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) { //DELETE method
        this.todos.splice(position, 1); //delte item by index number (0, 1, 2) and only delete 1
        this.displayTodos();
    },
    toggleCompleted: function(position) { //flips the false value of todo.completed when it is completed 
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};
