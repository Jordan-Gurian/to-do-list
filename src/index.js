import './style.css';
import Project from './project.js';
import Todo from './todo.js';


const defaultProject = Project('Default');

const testProject = Project('Test');

const test = Todo('myTitle', 'myDesc', 'myDate', 'high');
const test2 = Todo('Garbage', 'Take out trash', '7/7/24', 'medium');

defaultProject.addTodo(test);
defaultProject.addTodo(test2);
// console.log(defaultProject.todoList.length)

// defaultProject.moveTodo(test, testProject);

// console.log(defaultProject.todoList.length)

// console.log(testProject.todoList[0])

