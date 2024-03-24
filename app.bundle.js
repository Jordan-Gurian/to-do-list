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
/* harmony import */ var _loadProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadProject.js */ "./src/loadProject.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");






function domManager() {

    const dialogProj = document.querySelector('.dialog-project');
    const sidebar = document.querySelector('.sidebar');
    const addProject = document.querySelector('.new-project');
    const newProject = document.createElement('button');
    newProject.textContent = 'Default';
    sidebar.appendChild(newProject);
    const thisProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](newProject.textContent);
    let sampleProj = thisProject;
    newProject.addEventListener('click', () => {
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_loadProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(thisProject)
        sampleProj = thisProject;
    })


    addProject.addEventListener('click', () => {
        dialogProj.showModal();
    });

    const closeButtonProj = document.querySelector('.close-project');

    closeButtonProj.addEventListener('click', () => {
        const projectInput = document.querySelector('#project-input');
        const sidebar = document.querySelector('.sidebar');
        const newProject = document.createElement('button');
        newProject.textContent = projectInput.value;
        sidebar.appendChild(newProject);
        const thisProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](newProject.textContent);
        newProject.addEventListener('click', () => {
            (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_loadProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(thisProject)
            sampleProj = thisProject;
        })
        dialogProj.close();
    });
//////////////////////////////////////////
    const todoButton = document.querySelector('.new-todo');

    const dialogTodo = document.querySelector('.dialog-todo');
    
    todoButton.addEventListener('click', () => {
        dialogTodo.showModal();
    });

    const closeButtonTodo = document.querySelector('.close-todo');


    closeButtonTodo.addEventListener('click', () => {
        const itemTitle = document.querySelector('#todo-title');
        const itemDescription = document.querySelector('#todo-description');
        const itemDue = document.querySelector('#todo-due');
        const itemPriority = document.querySelector('#todo-priority');
        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_3__["default"](itemTitle.value, itemDescription.value, itemDue.value, itemPriority.value);
        sampleProj.addTodo(todo);
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_loadProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleProj)
        dialogTodo.close();

    });


    const orderByPriorityButton = document.querySelector('.order-by-priority');
    orderByPriorityButton.addEventListener('click', () => {
        sampleProj.orderByPriority();
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_loadProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleProj)
    })


    const orderByDueButton = document.querySelector('.order-by-due');
    orderByDueButton.addEventListener('click', () => {
        sampleProj.orderByDate();
        (0,_deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_loadProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleProj)
    })

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







(0,_domManager_js__WEBPACK_IMPORTED_MODULE_3__["default"])();


/***/ }),

/***/ "./src/loadProject.js":
/*!****************************!*\
  !*** ./src/loadProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProject)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _deleteArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteArticle.js */ "./src/deleteArticle.js");



function loadProject(project) {
    const content = document.querySelector('.content');

    for (let todo of project.todoList) {
        let newTodo = document.createElement('div');
        let newTitle = document.createElement('div');
        let newDescription = document.createElement('div');
        let newDue = document.createElement('div');
        let newPriority = document.createElement('div');

        newTodo.classList.add('todo');
        newTitle.classList.add('title'); 
        newDescription.classList.add('description'); 
        newDue.classList.add('due'); 
        newPriority.classList.add('priority'); 

        newTitle.textContent = todo.title;
        newDescription.textContent = todo.description;
        newDue.textContent = todo.due;
        newPriority.textContent = todo.priority;

        content.appendChild(newTodo);
        newTodo.appendChild(newTitle);
        newTodo.appendChild(newDescription);
        newTodo.appendChild(newDue);
        newTodo.appendChild(newPriority);
    }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RlbGV0ZUFydGljbGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2FkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZUFzYy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gY29udGVudDtcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGRlbGV0ZUFydGljbGUgZnJvbSAnLi9kZWxldGVBcnRpY2xlLmpzJztcbmltcG9ydCBsb2FkUHJvamVjdCBmcm9tICcuL2xvYWRQcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tTWFuYWdlcigpIHtcblxuICAgIGNvbnN0IGRpYWxvZ1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXByb2plY3QnKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBjb25zdCB0aGlzUHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3QudGV4dENvbnRlbnQpO1xuICAgIGxldCBzYW1wbGVQcm9qID0gdGhpc1Byb2plY3Q7XG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICBsb2FkUHJvamVjdCh0aGlzUHJvamVjdClcbiAgICAgICAgc2FtcGxlUHJvaiA9IHRoaXNQcm9qZWN0O1xuICAgIH0pXG5cblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1Byb2ouc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvblByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcHJvamVjdCcpO1xuXG4gICAgY2xvc2VCdXR0b25Qcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICAgICAgbG9hZFByb2plY3QodGhpc1Byb2plY3QpXG4gICAgICAgICAgICBzYW1wbGVQcm9qID0gdGhpc1Byb2plY3Q7XG4gICAgICAgIH0pXG4gICAgICAgIGRpYWxvZ1Byb2ouY2xvc2UoKTtcbiAgICB9KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcblxuICAgIGNvbnN0IGRpYWxvZ1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRvZG8nKTtcbiAgICBcbiAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dUb2RvLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b25Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRvZG8nKTtcblxuXG4gICAgY2xvc2VCdXR0b25Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZHVlJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhpdGVtVGl0bGUudmFsdWUsIGl0ZW1EZXNjcmlwdGlvbi52YWx1ZSwgaXRlbUR1ZS52YWx1ZSwgaXRlbVByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgc2FtcGxlUHJvai5hZGRUb2RvKHRvZG8pO1xuICAgICAgICBkZWxldGVBcnRpY2xlKCk7XG4gICAgICAgIGxvYWRQcm9qZWN0KHNhbXBsZVByb2opXG4gICAgICAgIGRpYWxvZ1RvZG8uY2xvc2UoKTtcblxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBvcmRlckJ5UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXItYnktcHJpb3JpdHknKTtcbiAgICBvcmRlckJ5UHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhbXBsZVByb2oub3JkZXJCeVByaW9yaXR5KCk7XG4gICAgICAgIGRlbGV0ZUFydGljbGUoKTtcbiAgICAgICAgbG9hZFByb2plY3Qoc2FtcGxlUHJvailcbiAgICB9KVxuXG5cbiAgICBjb25zdCBvcmRlckJ5RHVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyLWJ5LWR1ZScpO1xuICAgIG9yZGVyQnlEdWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhbXBsZVByb2oub3JkZXJCeURhdGUoKTtcbiAgICAgICAgZGVsZXRlQXJ0aWNsZSgpO1xuICAgICAgICBsb2FkUHJvamVjdChzYW1wbGVQcm9qKVxuICAgIH0pXG5cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkb21NYW5hZ2VyIGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5cblxuZG9tTWFuYWdlcigpO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBkZWxldGVBcnRpY2xlIGZyb20gJy4vZGVsZXRlQXJ0aWNsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2RvTGlzdCkge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBuZXdEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7IFxuICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpOyBcbiAgICAgICAgbmV3RHVlLmNsYXNzTGlzdC5hZGQoJ2R1ZScpOyBcbiAgICAgICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTsgXG5cbiAgICAgICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBuZXdEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIG5ld0R1ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlO1xuICAgICAgICBuZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKG5ld0R1ZSk7XG4gICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKHRvZG8pIHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGl0ZW1JbmRleCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlVG9kbyA9IGZ1bmN0aW9uKHRvZG8sIGRlc3RQcm9qZWN0KSB7XG4gICAgICAgIGRlc3RQcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlckJ5RGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvTGlzdC5zb3J0KCh7ZHVlOiBhfSwge2R1ZTogYn0pID0+IGNvbXBhcmVBc2MoYSxiKSlcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlckJ5UHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0xpc3Quc29ydCgoe3ByaW9yaXR5OiBhfSwge3ByaW9yaXR5OiBifSkgPT4gYi1hKVxuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlLCB0b2RvTGlzdCwgYWRkVG9kbywgZGVsZXRlVG9kbywgbW92ZVRvZG8sIG9yZGVyQnlEYXRlLCBvcmRlckJ5UHJpb3JpdHl9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgc3RhdHVzID0gJ2luY29tcGxldGUnO1xuXG4gICAgY29uc3QgbWFya0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ2NvbXBsZXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUR1ZSA9IGZ1bmN0aW9uKG5ld0R1ZSkge1xuICAgICAgICB0aGlzLmR1ZSA9IG5ld0R1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGZ1bmN0aW9uKG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgc3RhdHVzLCBcbiAgICAgICAgbWFya0NvbXBsZXRlLCBjaGFuZ2VEdWUsIGNoYW5nZVByaW9yaXR5fVxufSIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBkaWZmID0gX2RhdGVMZWZ0LmdldFRpbWUoKSAtIF9kYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZUFzYztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=