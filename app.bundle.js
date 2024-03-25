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
    const sidebar = document.querySelector('.sidebar');
    const addProject = document.querySelector('.new-project');
    const newProject = document.createElement('button');
    const projectForm = document.querySelector('.project-form')
    const todoForm = document.querySelector('.todo-form')
    let myProjects = (0,_localLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])("myProjects");
    let sampleProj = myProjects[0];

    const startUp = function () {
        if (myProjects.length === 0) {
            newProject.classList.add('.project-button')
            newProject.textContent = 'Default';
            sidebar.appendChild(newProject);
            const thisProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](newProject.textContent);
            myProjects.push(thisProject);
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
    
            let sampleProj = thisProject;
            newProject.addEventListener('click', () => {
                (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                loadProject(thisProject)
                sampleProj = thisProject;
        })

    }

    for (let project of myProjects) { 
        createProjectButton(project);
    }
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

        const deleteProject = document.createElement('button');
        deleteProject.classList.add('.delete-project')
        deleteProject.textContent = "Delete";

        sidebar.appendChild(newProject);
        sidebar.appendChild(deleteProject);

        newProject.addEventListener('click', () => {
            (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
            loadProject(project)
            sampleProj = project;
        });

        deleteProject.addEventListener('click', () => {
            removeProjectFromList(project);
            newProject.remove();
            deleteProject.remove();
            (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            loadProject(myProjects[0]);
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
        })

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
    if (projectsJSON === "undefined") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0JBQW9CLG1EQUFNO0FBQzFCLHFCQUFxQixtREFBTTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QjtBQUM5QixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckQxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsU2F2ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZUFzYy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gY29udGVudDtcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGRlbGV0ZUFydGljbGUgZnJvbSAnLi9kZWxldGVBcnRpY2xlLmpzJztcbi8vIGltcG9ydCBsb2FkUHJvamVjdCBmcm9tICcuL2xvYWRQcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbG9jYWxTYXZlIGZyb20gJy4vbG9jYWxTYXZlLmpzJztcbmltcG9ydCBsb2NhbExvYWQgZnJvbSAnLi9sb2NhbExvYWQuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbU1hbmFnZXIoKSB7XG4gICAgY29uc3QgZGlhbG9nUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcHJvamVjdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxuICAgIGxldCBteVByb2plY3RzID0gbG9jYWxMb2FkKFwibXlQcm9qZWN0c1wiKTtcbiAgICBsZXQgc2FtcGxlUHJvaiA9IG15UHJvamVjdHNbMF07XG5cbiAgICBjb25zdCBzdGFydFVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnLnByb2plY3QtYnV0dG9uJylcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgY29uc3QgdGhpc1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIG15UHJvamVjdHMucHVzaCh0aGlzUHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgIFxuICAgICAgICAgICAgbGV0IHNhbXBsZVByb2ogPSB0aGlzUHJvamVjdDtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KHRoaXNQcm9qZWN0KVxuICAgICAgICAgICAgICAgIHNhbXBsZVByb2ogPSB0aGlzUHJvamVjdDtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgbXlQcm9qZWN0cykgeyBcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KTtcbiAgICB9XG4gICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvaik7XG4gICAgXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEZyb21MaXN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBteVByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIG15UHJvamVjdHMuc3BsaWNlKGl0ZW1JbmRleCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJy5wcm9qZWN0LWJ1dHRvbicpXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCcuZGVsZXRlLXByb2plY3QnKVxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdClcbiAgICAgICAgICAgIHNhbXBsZVByb2ogPSBwcm9qZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEZyb21MaXN0KHByb2plY3QpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChteVByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG5cblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIGRpYWxvZ1Byb2ouc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGhpc1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbih0aGlzUHJvamVjdCk7XG4gICAgICAgIG15UHJvamVjdHMucHVzaCh0aGlzUHJvamVjdCk7XG4gICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgfTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcblxuICAgIGNvbnN0IGRpYWxvZ1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRvZG8nKTtcbiAgICBcbiAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgICAgICBkaWFsb2dUb2RvLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kdWUnKTtcbiAgICAgICAgY29uc3QgaXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGl0ZW1UaXRsZS52YWx1ZSwgaXRlbURlc2NyaXB0aW9uLnZhbHVlLCBpdGVtRHVlLnZhbHVlLCBpdGVtUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICByZXR1cm4gdG9kb1xuICAgIH1cblxuICAgIHRvZG9Gb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKCk7XG4gICAgICAgIHNhbXBsZVByb2ouYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgbG9jYWxTYXZlKFwibXlQcm9qZWN0c1wiLCBteVByb2plY3RzKTtcbiAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICBsb2FkUHJvamVjdChzYW1wbGVQcm9qKVxuICAgICAgICBkaWFsb2dUb2RvLmNsb3NlKCk7XG4gICAgfTtcblxuXG4gICAgY29uc3Qgb3JkZXJCeVByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWJ5LXByaW9yaXR5Jyk7XG4gICAgb3JkZXJCeVByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzYW1wbGVQcm9qLm9yZGVyQnlQcmlvcml0eSgpO1xuICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgIGxvYWRQcm9qZWN0KHNhbXBsZVByb2opXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBvcmRlckJ5RHVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWJ5LWR1ZScpO1xuICAgIG9yZGVyQnlEdWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhbXBsZVByb2oub3JkZXJCeURhdGUoKTtcbiAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICBsb2FkUHJvamVjdChzYW1wbGVQcm9qKVxuICAgIH0pXG5cbiAgICBjb25zdCBsb2FkUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgXG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2RvTGlzdCkge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTsgXG4gICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpOyBcbiAgICAgICAgICAgIG5ld0R1ZS5jbGFzc0xpc3QuYWRkKCdkdWUnKTsgXG4gICAgICAgICAgICBuZXdQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpOyBcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdG9kbycpO1xuICAgIFxuICAgICAgICAgICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbmV3RHVlLnRleHRDb250ZW50ID0gdG9kby5kdWU7XG4gICAgICAgICAgICBuZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIFxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKG5ld0R1ZSk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTYXZlKFwibXlQcm9qZWN0c1wiLCBteVByb2plY3RzKTtcbiAgICAgICAgICAgICAgICBuZXdUb2RvLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXJ0VXB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZG9tTWFuYWdlciBmcm9tICcuL2RvbU1hbmFnZXIuanMnO1xuXG5jb25zdCBkb20gPSBuZXcgZG9tTWFuYWdlcigpO1xuZG9tLnN0YXJ0VXAoKTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsTG9hZChwYXJhbSkge1xuICAgIGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJhbSk7XG4gICAgaWYgKHByb2plY3RzSlNPTiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShwcm9qZWN0c0pTT04pO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb0xpc3QpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbGxQcm9qZWN0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbFNhdmUobmFtZSwgcGFyYW0pIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShwYXJhbSkpO1xufSIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG4gICAgbGV0IHRvZG9MaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24odG9kbykge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRvZG9MaXN0LmluZGV4T2YodG9kbyk7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpdGVtSW5kZXgsIDEpXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVRvZG8gPSBmdW5jdGlvbih0b2RvLCBkZXN0UHJvamVjdCkge1xuICAgICAgICBkZXN0UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJCeURhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3Quc29ydCgoe2R1ZTogYX0sIHtkdWU6IGJ9KSA9PiBjb21wYXJlQXNjKGEsYikpXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJCeVByaW9yaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9MaXN0LnNvcnQoKHtwcmlvcml0eTogYX0sIHtwcmlvcml0eTogYn0pID0+IGItYSlcbiAgICB9XG5cbiAgICByZXR1cm4geyB0aXRsZSwgdG9kb0xpc3QsIGFkZFRvZG8sIGRlbGV0ZVRvZG8sIG1vdmVUb2RvLCBvcmRlckJ5RGF0ZSwgb3JkZXJCeVByaW9yaXR5fVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5KSB7XG4gICAgbGV0IHN0YXR1cyA9ICdpbmNvbXBsZXRlJztcblxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICdjb21wbGV0ZSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VEdWUgPSBmdW5jdGlvbihuZXdEdWUpIHtcbiAgICAgICAgdGhpcy5kdWUgPSBuZXdEdWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBmdW5jdGlvbihuZXdQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIHN0YXR1cywgXG4gICAgICAgIG1hcmtDb21wbGV0ZSwgY2hhbmdlRHVlLCBjaGFuZ2VQcmlvcml0eX1cbn0iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKlxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgZGlmZiA9IF9kYXRlTGVmdC5nZXRUaW1lKCkgLSBfZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVBc2M7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9