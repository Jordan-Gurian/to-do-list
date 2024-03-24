import Project from './project.js';
import deleteArticle from './deleteArticle.js';
import loadProject from './loadProject.js';
import Todo from './todo.js';


export default function domManager() {

    const dialogProj = document.querySelector('.dialog-project');
    const sidebar = document.querySelector('.sidebar');
    const addProject = document.querySelector('.new-project');
    const newProject = document.createElement('button');
    const projectForm = document.querySelector('.project-form')
    const todoForm = document.querySelector('.todo-form')


    newProject.classList.add('.project-button')
    newProject.textContent = 'Default';
    sidebar.appendChild(newProject);
    const thisProject = new Project(newProject.textContent);
    let sampleProj = thisProject;
    newProject.addEventListener('click', () => {
        deleteArticle();
        loadProject(thisProject)
        sampleProj = thisProject;
    })


    addProject.addEventListener('click', () => {
        projectForm.reset();
        dialogProj.showModal();
    });

    projectForm.onsubmit = function() {
        const projectInput = document.querySelector('input[name="project-input"]');
        const sidebar = document.querySelector('.sidebar');
        const newProject = document.createElement('button');
        newProject.classList.add('.project-button')
        newProject.textContent = projectInput.value;
        sidebar.appendChild(newProject);
        const thisProject = new Project(newProject.textContent);
        newProject.addEventListener('click', () => {
            deleteArticle();
            loadProject(thisProject)
            sampleProj = thisProject;
        })
    };
//////////////////////////////////////////
    const todoButton = document.querySelector('.new-todo');

    const dialogTodo = document.querySelector('.dialog-todo');
    
    todoButton.addEventListener('click', () => {
        todoForm.reset();
        dialogTodo.showModal();
    });

    todoForm.onsubmit = function() {
        const itemTitle = document.querySelector('#todo-title');
        const itemDescription = document.querySelector('#todo-description');
        const itemDue = document.querySelector('#todo-due');
        const itemPriority = document.querySelector('#todo-priority');
        const todo = new Todo(itemTitle.value, itemDescription.value, itemDue.value, itemPriority.value);
        sampleProj.addTodo(todo);
        deleteArticle();
        loadProject(sampleProj)
        dialogTodo.close();
    };


    const orderByPriorityButton = document.querySelector('.order-by-priority');
    orderByPriorityButton.addEventListener('click', () => {
        sampleProj.orderByPriority();
        deleteArticle();
        loadProject(sampleProj)
    })


    const orderByDueButton = document.querySelector('.order-by-due');
    orderByDueButton.addEventListener('click', () => {
        sampleProj.orderByDate();
        deleteArticle();
        loadProject(sampleProj)
    })

}
