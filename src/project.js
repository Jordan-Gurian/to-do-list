import { compareAsc, format } from "date-fns";

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

    const orderByDate = function() {
        todoList.sort(({due: a}, {due: b}) => compareAsc(a,b))
    }

    const orderByPriority = function() {
        todoList.sort(({priority: a}, {priority: b}) => b-a)
    }

    return { title, todoList, addTodo, deleteTodo, moveTodo, orderByDate, orderByPriority}
}