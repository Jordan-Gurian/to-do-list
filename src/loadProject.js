// import Todo from './todo.js';
// import deleteArticle from './deleteArticle.js';
// import localSave from './localSave.js';

// export default function loadProject(project) {
//     const content = document.querySelector('.content');

//     for (let todo of project.todoList) {
//         let newTodo = document.createElement('div');
//         let newTitle = document.createElement('div');
//         let newDescription = document.createElement('div');
//         let newDue = document.createElement('div');
//         let newPriority = document.createElement('div');
//         let deleteButton = document.createElement('button');

//         newTodo.classList.add('todo');
//         newTitle.classList.add('title'); 
//         newDescription.classList.add('description'); 
//         newDue.classList.add('due'); 
//         newPriority.classList.add('priority'); 
//         deleteButton.classList.add('delete-todo');

//         newTitle.textContent = todo.title;
//         newDescription.textContent = todo.description;
//         newDue.textContent = todo.due;
//         newPriority.textContent = todo.priority;
//         deleteButton.textContent = "Delete";

//         content.appendChild(newTodo);
//         newTodo.appendChild(newTitle);
//         newTodo.appendChild(newDescription);
//         newTodo.appendChild(newDue);
//         newTodo.appendChild(newPriority);
//         newTodo.appendChild(deleteButton);

//         deleteButton.addEventListener('click', () => {
//             project.deleteTodo(todo);
//             localSave("myProjects", projectArray);
//             newTodo.remove();
//         })

//     }


// }