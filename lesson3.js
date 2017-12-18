//GOALS OF VERSION 3 - OBJECTS - object of text
// STORES the todos array on an object
// has a DISPLAY todos method
// has an ADD todos method
// has a CHANGE todos method
// has a DELETE todos method


var todolist = { //a variable with an array inside = an object
    todos: ["item 1", "item 2", "item 3"], //array
    displayTodos: function() { //standalone function is a method. They don't need to be named aka "nameless" b/c we refer to it by the property name
        //propertyname "displayTodos"
        console.log("My Todos", "this.todos"); //displays the array in console.
    },
    addTodo: function(todo) { //ADD method
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) { //CHANGE method 
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) { //DELETE method
        this.todos.splice(position, 1); //delte item by index number (0, 1, 2) and only delete 1
        this.displayTodos();
    },

};
