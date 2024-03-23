import './style.css';
import Project from './project.js';
import Todo from './todo.js';
import { compareAsc, format } from "date-fns";

const date1 = format(new Date(2017, 1, 11), "yyyy-MM-dd");
const date2 = format(new Date(2014, 1, 3), "yyyy-MM-dd");
const date3 = format(new Date(2014, 1, 1), "yyyy-MM-dd");

const defaultProject = Project('Default');

const testProject = Project('Test');

const test = Todo('myTitle', 'myDesc', date1, 2);
const test2 = Todo('Garbage', 'Take out trash', date2, 3);
const test3 = Todo('eyooo', 'Take out trash', date3, 2);


defaultProject.addTodo(test);
defaultProject.addTodo(test2);
defaultProject.addTodo(test3);

// console.log(defaultProject.todoList.sort(({due: a}, {due: b}) => compareAsc(a,b)))
// defaultProject.orderByDate();

// defaultProject.orderByPriority();
// console.log(defaultProject.todoList)

// console.log(defaultProject.todoList.length)

// defaultProject.moveTodo(test, testProject);

// console.log(defaultProject.todoList.length)

// console.log(testProject.todoList[0])

