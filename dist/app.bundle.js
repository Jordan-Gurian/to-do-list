"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["app"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/deleteArticle.js":
/*!******************************!*\
  !*** ./src/deleteArticle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteContent)
/* harmony export */ });
function deleteContent() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    return content;
}

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domManager)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteArticle.js */ "./src/deleteArticle.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _localSave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localSave.js */ "./src/localSave.js");
/* harmony import */ var _localLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localLoad.js */ "./src/localLoad.js");


// import loadProject from './loadProject.js';





function domManager() {
    const dialogProj = document.querySelector('.dialog-project');
    const projectTabs = document.querySelector('.project-tab');
    const addProject = document.querySelector('.new-project');
    const newProject = document.createElement('button');
    const projectForm = document.querySelector('.project-form')
    const todoForm = document.querySelector('.todo-form')
    let myProjects = (0,_localLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])("myProjects");
    let sampleProj;

    const startUp = function () {
        if (myProjects.length === 0) {
            const thisProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Default');
            myProjects.push(thisProject);
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
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
        const newProject = document.createElement('button');
        newProject.classList.add('project-button')
        newProject.textContent = project.title;



        projectTabs.appendChild(newProject);

        newProject.addEventListener('click', () => {
            (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
            loadProject(project)
            sampleProj = project;
        });

        if (project.title != "Default") {
            const deleteProject = document.createElement('button');
            deleteProject.classList.add('project-button');
            deleteProject.textContent = "Delete";
            projectTabs.appendChild(deleteProject);

            deleteProject.addEventListener('click', () => {
                removeProjectFromList(project);
                newProject.remove();
                deleteProject.remove();
                (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                loadProject(myProjects[0]);
                (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
            });
        }
        else {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('project-button');
            emptyDiv.classList.add('empty-div');
            emptyDiv.textContent = "";
            projectTabs.appendChild(emptyDiv);
        }


    }
    


    addProject.addEventListener('click', () => {
        projectForm.reset();
        dialogProj.showModal();
    });

    projectForm.onsubmit = function() {
        const newProject = document.querySelector('#project-input');
        const thisProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](newProject.value);
        createProjectButton(thisProject);
        myProjects.push(thisProject);
        (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
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
        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](itemTitle.value, itemDescription.value, itemDue.value, itemPriority.value);
        return todo
    }

    todoForm.onsubmit = function() {
        const todo = createTodo();
        sampleProj.addTodo(todo);
        (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        loadProject(sampleProj)
        dialogTodo.close();
    };


    const orderByPriorityButton = document.querySelector('.order-by-priority');
    orderByPriorityButton.addEventListener('click', () => {
        sampleProj.orderByPriority();
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
        loadProject(sampleProj)

    })


    const orderByDueButton = document.querySelector('.order-by-due');
    orderByDueButton.addEventListener('click', () => {
        sampleProj.orderByDate();
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
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
                (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
                newTodo.remove();
            });
        }
    }

    return {startUp}
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");






const dom = new _domManager_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
dom.startUp();


/***/ }),

/***/ "./src/localLoad.js":
/*!**************************!*\
  !*** ./src/localLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localLoad)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


function localLoad(param) {
    let allProjects = [];
    const projectsJSON =  localStorage.getItem(param);
    if (projectsJSON === null) {
        return allProjects
    }
    else {
        const projectList = JSON.parse(projectsJSON);
        for (let project of projectList) {
            const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](project.title);
            for (let todo of project.todoList) {
                newProject.addTodo(todo);
            }
            allProjects.push(newProject);
        }
    }
    return allProjects;
}

/***/ }),

/***/ "./src/localSave.js":
/*!**************************!*\
  !*** ./src/localSave.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localSave)
/* harmony export */ });
function localSave(name, param) {
    localStorage.setItem(name, JSON.stringify(param));
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");


function Project(title) {
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
        todoList.sort(({due: a}, {due: b}) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.compareAsc)(a,b))
    }

    const orderByPriority = function() {
        todoList.sort(({priority: a}, {priority: b}) => b-a)
    }

    return { title, todoList, addTodo, deleteTodo, moveTodo, orderByDate, orderByPriority}
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title, description, due, priority) {
    let status = 'incomplete';

    const markComplete = function() {
        this.status = 'complete'
    }

    const changeDue = function(newDue) {
        this.due = newDue;
    }

    const changePriority = function(newPriority) {
        this.priority = newPriority;
    }

    return {title, description, due, priority, status, 
        markComplete, changeDue, changePriority}
}

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0JBQW9CLG1EQUFNO0FBQzFCLHFCQUFxQixtREFBTTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QjtBQUM5QixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckQxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kZWxldGVBcnRpY2xlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxTYXZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb21wYXJlQXNjLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBjb250ZW50O1xufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgZGVsZXRlQXJ0aWNsZSBmcm9tICcuL2RlbGV0ZUFydGljbGUuanMnO1xuLy8gaW1wb3J0IGxvYWRQcm9qZWN0IGZyb20gJy4vbG9hZFByb2plY3QuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBsb2NhbFNhdmUgZnJvbSAnLi9sb2NhbFNhdmUuanMnO1xuaW1wb3J0IGxvY2FsTG9hZCBmcm9tICcuL2xvY2FsTG9hZC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tTWFuYWdlcigpIHtcbiAgICBjb25zdCBkaWFsb2dQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWInKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICBsZXQgbXlQcm9qZWN0cyA9IGxvY2FsTG9hZChcIm15UHJvamVjdHNcIik7XG4gICAgbGV0IHNhbXBsZVByb2o7XG5cbiAgICBjb25zdCBzdGFydFVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICAgICAgICAgIG15UHJvamVjdHMucHVzaCh0aGlzUHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBteVByb2plY3RzKSB7IFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzYW1wbGVQcm9qID0gbXlQcm9qZWN0c1swXTtcbiAgICAgICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvaik7XG4gICAgXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEZyb21MaXN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBteVByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIG15UHJvamVjdHMuc3BsaWNlKGl0ZW1JbmRleCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKVxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuXG5cbiAgICAgICAgcHJvamVjdFRhYnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgc2FtcGxlUHJvaiA9IHByb2plY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlICE9IFwiRGVmYXVsdFwiKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgICAgIHByb2plY3RUYWJzLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3RGcm9tTGlzdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KG15UHJvamVjdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbXB0eURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICAgICAgZW1wdHlEaXYuY2xhc3NMaXN0LmFkZCgnZW1wdHktZGl2Jyk7XG4gICAgICAgICAgICBlbXB0eURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0VGFicy5hcHBlbmRDaGlsZChlbXB0eURpdik7XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIFxuXG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICBkaWFsb2dQcm9qLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24odGhpc1Byb2plY3QpO1xuICAgICAgICBteVByb2plY3RzLnB1c2godGhpc1Byb2plY3QpO1xuICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgIH07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJyk7XG5cbiAgICBjb25zdCBkaWFsb2dUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10b2RvJyk7XG4gICAgXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgZGlhbG9nVG9kby5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZHVlJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhpdGVtVGl0bGUudmFsdWUsIGl0ZW1EZXNjcmlwdGlvbi52YWx1ZSwgaXRlbUR1ZS52YWx1ZSwgaXRlbVByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRvZG9cbiAgICB9XG5cbiAgICB0b2RvRm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0b2RvID0gY3JlYXRlVG9kbygpO1xuICAgICAgICBzYW1wbGVQcm9qLmFkZFRvZG8odG9kbyk7XG4gICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvailcbiAgICAgICAgZGlhbG9nVG9kby5jbG9zZSgpO1xuICAgIH07XG5cblxuICAgIGNvbnN0IG9yZGVyQnlQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1ieS1wcmlvcml0eScpO1xuICAgIG9yZGVyQnlQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2FtcGxlUHJvai5vcmRlckJ5UHJpb3JpdHkoKTtcbiAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICBsb2FkUHJvamVjdChzYW1wbGVQcm9qKVxuXG4gICAgfSlcblxuXG4gICAgY29uc3Qgb3JkZXJCeUR1ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1ieS1kdWUnKTtcbiAgICBvcmRlckJ5RHVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzYW1wbGVQcm9qLm9yZGVyQnlEYXRlKCk7XG4gICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgbG9jYWxTYXZlKFwibXlQcm9qZWN0c1wiLCBteVByb2plY3RzKTtcbiAgICAgICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvailcbiAgICB9KVxuXG4gICAgY29uc3QgbG9hZFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIFxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb0xpc3QpIHtcbiAgICAgICAgICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgICAgICAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7IFxuICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTsgXG4gICAgICAgICAgICBuZXdEdWUuY2xhc3NMaXN0LmFkZCgnZHVlJyk7IFxuICAgICAgICAgICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTsgXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICBcbiAgICAgICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIG5ld0R1ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlO1xuICAgICAgICAgICAgbmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChuZXdEdWUpO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgbmV3VG9kby5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGFydFVwfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGRvbU1hbmFnZXIgZnJvbSAnLi9kb21NYW5hZ2VyLmpzJztcblxuY29uc3QgZG9tID0gbmV3IGRvbU1hbmFnZXIoKTtcbmRvbS5zdGFydFVwKCk7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbExvYWQocGFyYW0pIHtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBwcm9qZWN0c0pTT04gPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyYW0pO1xuICAgIGlmIChwcm9qZWN0c0pTT04gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UocHJvamVjdHNKU09OKTtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LnRvZG9MaXN0KSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsUHJvamVjdHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxTYXZlKG5hbWUsIHBhcmFtKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW0pKTtcbn0iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uKHRvZG8pIHtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gZnVuY3Rpb24odG9kbykge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0b2RvTGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaXRlbUluZGV4LCAxKVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmVUb2RvID0gZnVuY3Rpb24odG9kbywgZGVzdFByb2plY3QpIHtcbiAgICAgICAgZGVzdFByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyQnlEYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9MaXN0LnNvcnQoKHtkdWU6IGF9LCB7ZHVlOiBifSkgPT4gY29tcGFyZUFzYyhhLGIpKVxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyQnlQcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zb3J0KCh7cHJpb3JpdHk6IGF9LCB7cHJpb3JpdHk6IGJ9KSA9PiBiLWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRvZG9MaXN0LCBhZGRUb2RvLCBkZWxldGVUb2RvLCBtb3ZlVG9kbywgb3JkZXJCeURhdGUsIG9yZGVyQnlQcmlvcml0eX1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkge1xuICAgIGxldCBzdGF0dXMgPSAnaW5jb21wbGV0ZSc7XG5cbiAgICBjb25zdCBtYXJrQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnY29tcGxldGUnXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRHVlID0gZnVuY3Rpb24obmV3RHVlKSB7XG4gICAgICAgIHRoaXMuZHVlID0gbmV3RHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZnVuY3Rpb24obmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBzdGF0dXMsIFxuICAgICAgICBtYXJrQ29tcGxldGUsIGNoYW5nZUR1ZSwgY2hhbmdlUHJpb3JpdHl9XG59IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICpcbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IGRpZmYgPSBfZGF0ZUxlZnQuZ2V0VGltZSgpIC0gX2RhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb21wYXJlQXNjO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==