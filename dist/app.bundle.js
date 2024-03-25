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
        const sidebar = document.querySelector('.sidebar');
        const newProject = document.createElement('button');
        newProject.classList.add('.project-button')
        newProject.textContent = project.title;



        sidebar.appendChild(newProject);

        newProject.addEventListener('click', () => {
            (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
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
                (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                loadProject(myProjects[0]);
                (0,_localSave_js__WEBPACK_IMPORTED_MODULE_3__["default"])("myProjects", myProjects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0JBQW9CLG1EQUFNO0FBQzFCLHFCQUFxQixtREFBTTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QjtBQUM5QixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckQxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsU2F2ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZUFzYy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gY29udGVudDtcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGRlbGV0ZUFydGljbGUgZnJvbSAnLi9kZWxldGVBcnRpY2xlLmpzJztcbi8vIGltcG9ydCBsb2FkUHJvamVjdCBmcm9tICcuL2xvYWRQcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbG9jYWxTYXZlIGZyb20gJy4vbG9jYWxTYXZlLmpzJztcbmltcG9ydCBsb2NhbExvYWQgZnJvbSAnLi9sb2NhbExvYWQuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbU1hbmFnZXIoKSB7XG4gICAgY29uc3QgZGlhbG9nUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcHJvamVjdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxuICAgIGxldCBteVByb2plY3RzID0gbG9jYWxMb2FkKFwibXlQcm9qZWN0c1wiKTtcbiAgICBsZXQgc2FtcGxlUHJvajtcblxuICAgIGNvbnN0IHN0YXJ0VXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteVByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgdGhpc1Byb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuICAgICAgICAgICAgbXlQcm9qZWN0cy5wdXNoKHRoaXNQcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG15UHJvamVjdHMpIHsgXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHNhbXBsZVByb2ogPSBteVByb2plY3RzWzBdO1xuICAgICAgICBsb2FkUHJvamVjdChzYW1wbGVQcm9qKTtcbiAgICBcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0RnJvbUxpc3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IG15UHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgbXlQcm9qZWN0cy5zcGxpY2UoaXRlbUluZGV4LCAxKVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnLnByb2plY3QtYnV0dG9uJylcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cblxuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgc2FtcGxlUHJvaiA9IHByb2plY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlICE9IFwiRGVmYXVsdFwiKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJy5kZWxldGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3RGcm9tTGlzdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KG15UHJvamVjdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbXB0eURpdi5jbGFzc0xpc3QuYWRkKCcuZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgIGVtcHR5RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZW1wdHlEaXYpO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBcblxuXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgZGlhbG9nUHJvai5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3QudmFsdWUpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHRoaXNQcm9qZWN0KTtcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKHRoaXNQcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTYXZlKFwibXlQcm9qZWN0c1wiLCBteVByb2plY3RzKTtcbiAgICB9O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuXG4gICAgY29uc3QgZGlhbG9nVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdG9kbycpO1xuICAgIFxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgICAgIGRpYWxvZ1RvZG8uc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWR1ZScpO1xuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oaXRlbVRpdGxlLnZhbHVlLCBpdGVtRGVzY3JpcHRpb24udmFsdWUsIGl0ZW1EdWUudmFsdWUsIGl0ZW1Qcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgfVxuXG4gICAgdG9kb0Zvcm0ub25zdWJtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oKTtcbiAgICAgICAgc2FtcGxlUHJvai5hZGRUb2RvKHRvZG8pO1xuICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgIGxvYWRQcm9qZWN0KHNhbXBsZVByb2opXG4gICAgICAgIGRpYWxvZ1RvZG8uY2xvc2UoKTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBvcmRlckJ5UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItYnktcHJpb3JpdHknKTtcbiAgICBvcmRlckJ5UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhbXBsZVByb2oub3JkZXJCeVByaW9yaXR5KCk7XG4gICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgbG9jYWxTYXZlKFwibXlQcm9qZWN0c1wiLCBteVByb2plY3RzKTtcbiAgICAgICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvailcblxuICAgIH0pXG5cblxuICAgIGNvbnN0IG9yZGVyQnlEdWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItYnktZHVlJyk7XG4gICAgb3JkZXJCeUR1ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2FtcGxlUHJvai5vcmRlckJ5RGF0ZSgpO1xuICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgIGxvY2FsU2F2ZShcIm15UHJvamVjdHNcIiwgbXlQcm9qZWN0cyk7XG4gICAgICAgIGxvYWRQcm9qZWN0KHNhbXBsZVByb2opXG4gICAgfSlcblxuICAgIGNvbnN0IGxvYWRQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LnRvZG9MaXN0KSB7XG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgICAgICAgICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgICAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpOyBcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7IFxuICAgICAgICAgICAgbmV3RHVlLmNsYXNzTGlzdC5hZGQoJ2R1ZScpOyBcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7IFxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgXG4gICAgICAgICAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBuZXdEdWUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZTtcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3RHVlKTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICBsb2NhbFNhdmUoXCJteVByb2plY3RzXCIsIG15UHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIG5ld1RvZG8ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7c3RhcnRVcH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkb21NYW5hZ2VyIGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5cbmNvbnN0IGRvbSA9IG5ldyBkb21NYW5hZ2VyKCk7XG5kb20uc3RhcnRVcCgpO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxMb2FkKHBhcmFtKSB7XG4gICAgbGV0IGFsbFByb2plY3RzID0gW107XG4gICAgY29uc3QgcHJvamVjdHNKU09OID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKTtcbiAgICBpZiAocHJvamVjdHNKU09OID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0c1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2RvTGlzdCkge1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsU2F2ZShuYW1lLCBwYXJhbSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtKSk7XG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKHRvZG8pIHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGl0ZW1JbmRleCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlVG9kbyA9IGZ1bmN0aW9uKHRvZG8sIGRlc3RQcm9qZWN0KSB7XG4gICAgICAgIGRlc3RQcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlckJ5RGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zb3J0KCh7ZHVlOiBhfSwge2R1ZTogYn0pID0+IGNvbXBhcmVBc2MoYSxiKSlcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlckJ5UHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3Quc29ydCgoe3ByaW9yaXR5OiBhfSwge3ByaW9yaXR5OiBifSkgPT4gYi1hKVxuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlLCB0b2RvTGlzdCwgYWRkVG9kbywgZGVsZXRlVG9kbywgbW92ZVRvZG8sIG9yZGVyQnlEYXRlLCBvcmRlckJ5UHJpb3JpdHl9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgc3RhdHVzID0gJ2luY29tcGxldGUnO1xuXG4gICAgY29uc3QgbWFya0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ2NvbXBsZXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUR1ZSA9IGZ1bmN0aW9uKG5ld0R1ZSkge1xuICAgICAgICB0aGlzLmR1ZSA9IG5ld0R1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uKG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgc3RhdHVzLCBcbiAgICAgICAgbWFya0NvbXBsZXRlLCBjaGFuZ2VEdWUsIGNoYW5nZVByaW9yaXR5fVxufSIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBkaWZmID0gX2RhdGVMZWZ0LmdldFRpbWUoKSAtIF9kYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzYztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=