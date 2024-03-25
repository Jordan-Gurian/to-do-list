import Project from './project.js';

export default function localLoad(param) {
    let allProjects = [];
    const projectsJSON =  localStorage.getItem(param);
    if (projectsJSON === null) {
        return allProjects
    }
    else {
        const projectList = JSON.parse(projectsJSON);
        for (let project of projectList) {
            const newProject = new Project(project.title);
            for (let todo of project.todoList) {
                newProject.addTodo(todo);
            }
            allProjects.push(newProject);
        }
    }
    return allProjects;
}