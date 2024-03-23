export default function Project(title) {
    let todoList = [];

    const addTodo = function(todo) {
        todoList.push(todo);
    }

    const deleteTodo = function(todo) {
        const itemIndex = todoList.indexOf(todo);
        todoList.splice(itemIndex, 1)
    }
    
    const moveTodo = function(todo, destProject) {
        destProject.addTodo(todo);
        this.deleteTodo(todo);
    }

    return { title, todoList, addTodo, deleteTodo, moveTodo}
}