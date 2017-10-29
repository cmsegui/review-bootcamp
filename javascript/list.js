let todos = ["Make the bed"];

let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

function listTodos() {
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
}

function addTodo() {
    const newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("New todo has been added");
}

function deleteTodo() {
    let index = prompt("Enter index of todo to be deleted")
    todos.splice(index, 1);
    console.log("Todo has been deleted")
}