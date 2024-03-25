import Project from './project.js';
import deleteArticle from './deleteArticle.js';
// import loadProject from './loadProject.js';
import Todo from './todo.js';
import localSave from './localSave.js';
import localLoad from './localLoad.js';


export default function domManager() {
    const dialogProj = document.querySelector('.dialog-project');
    const sidebar = document.querySelector('.sidebar');
    const addProject = document.querySelector('.new-project');
    const newProject = document.createElement('button');
    const projectForm = document.querySelector('.project-form')
    const todoForm = document.querySelector('.todo-form')
    let myProjects = localLoad("myProjects");
    let sampleProj;

    const startUp = function () {
        if (myProjects.length === 0) {
            const thisProject = new Project('Default');
            myProjects.push(thisProject);
            localSave("myProjects", myProjects);
        }

        for (let project of myProjects) { 
            createProjectButton(project);
        }
        sampleProj = myProjects[0];
        loadProject(sampleProj);
    
    }

    const removeProjectFromList = function(project) {
        const itemIndex = myProjects.indexOf(project);
        myProjects.splice(itemIndex, 1)
    }

    const createProjectButton = function(project) {
        const sidebar = document.querySelector('.sidebar');
        const newProject = document.createElement('button');
        newProject.classList.add('.project-button')
        newProject.textContent = project.title;



        sidebar.appendChild(newProject);

        newProject.addEventListener('click', () => {
            deleteArticle();
            localSave("myProjects", myProjects);
            loadProject(project)
            sampleProj = project;
        });

        if (project.title != "Default") {
            const deleteProject = document.createElement('button');
            deleteProject.classList.add('.delete-project');
            deleteProject.textContent = "Delete";
            sidebar.appendChild(deleteProject);

            deleteProject.addEventListener('click', () => {
                removeProjectFromList(project);
                newProject.remove();
                deleteProject.remove();
                deleteArticle();
                loadProject(myProjects[0]);
                localSave("myProjects", myProjects);
            });
        }
        else {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('.delete-project');
            emptyDiv.textContent = "";
            sidebar.appendChild(emptyDiv);
        }


    }
    


    addProject.addEventListener('click', () => {
        projectForm.reset();
        dialogProj.showModal();
    });

    projectForm.onsubmit = function() {
        const newProject = document.querySelector('#project-input');
        const thisProject = new Project(newProject.value);
        createProjectButton(thisProject);
        myProjects.push(thisProject);
        localSave("myProjects", myProjects);
    };
//////////////////////////////////////////
    const todoButton = document.querySelector('.new-todo');

    const dialogTodo = document.querySelector('.dialog-todo');
    
    todoButton.addEventListener('click', () => {
        todoForm.reset();
        dialogTodo.showModal();
    });


    const createTodo = function() {
        const itemTitle = document.querySelector('#todo-title');
        const itemDescription = document.querySelector('#todo-description');
        const itemDue = document.querySelector('#todo-due');
        const itemPriority = document.querySelector('#todo-priority');
        const todo = new Todo(itemTitle.value, itemDescription.value, itemDue.value, itemPriority.value);
        return todo
    }

    todoForm.onsubmit = function() {
        const todo = createTodo();
        sampleProj.addTodo(todo);
        localSave("myProjects", myProjects);
        deleteArticle();
        loadProject(sampleProj)
        dialogTodo.close();
    };


    const orderByPriorityButton = document.querySelector('.order-by-priority');
    orderByPriorityButton.addEventListener('click', () => {
        sampleProj.orderByPriority();
        deleteArticle();
        localSave("myProjects", myProjects);
        loadProject(sampleProj)

    })


    const orderByDueButton = document.querySelector('.order-by-due');
    orderByDueButton.addEventListener('click', () => {
        sampleProj.orderByDate();
        deleteArticle();
        localSave("myProjects", myProjects);
        loadProject(sampleProj)
    })

    const loadProject = function(project) {
        const content = document.querySelector('.content');
    
        for (let todo of project.todoList) {
            let newTodo = document.createElement('div');
            let newTitle = document.createElement('div');
            let newDescription = document.createElement('div');
            let newDue = document.createElement('div');
            let newPriority = document.createElement('div');
            let deleteButton = document.createElement('button');
    
            newTodo.classList.add('todo');
            newTitle.classList.add('title'); 
            newDescription.classList.add('description'); 
            newDue.classList.add('due'); 
            newPriority.classList.add('priority'); 
            deleteButton.classList.add('delete-todo');
    
            newTitle.textContent = todo.title;
            newDescription.textContent = todo.description;
            newDue.textContent = todo.due;
            newPriority.textContent = todo.priority;
            deleteButton.textContent = "Delete";
    
            content.appendChild(newTodo);
            newTodo.appendChild(newTitle);
            newTodo.appendChild(newDescription);
            newTodo.appendChild(newDue);
            newTodo.appendChild(newPriority);
            newTodo.appendChild(deleteButton);
    
            deleteButton.addEventListener('click', () => {
                project.deleteTodo(todo);
                localSave("myProjects", myProjects);
                newTodo.remove();
            });
        }
    }

    return {startUp}
}
