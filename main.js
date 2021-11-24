/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Store */ \"./src/modules/Store.js\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\n\r\n\r\n// Event: Display Tasks\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleDate();\r\n  _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayInProgressTasks();\r\n});\r\n\r\n// Event: Handle Side Bar\r\n\r\ndocument.querySelectorAll(\".side-bar-btn\").forEach((button) => {\r\n  button.addEventListener(\"click\", (e) => {\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleSideBar(e.target);\r\n  });\r\n});\r\n\r\n// Event: Handle Importance color\r\n\r\ndocument.querySelectorAll(\".importance-color\").forEach((color) => {\r\n  color.addEventListener(\"click\", (e) => {\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleColorSelection(e.target);\r\n  });\r\n});\r\n\r\n// Event: show In Progress Actions\r\n\r\ndocument.querySelector(\"#main-content\").addEventListener(\"contextmenu\", (e) => {\r\n  e.preventDefault();\r\n  _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleActions(e.target);\r\n});\r\n\r\n// Event: show Done Actions\r\n\r\ndocument.querySelector(\"#main-content\").addEventListener(\"contextmenu\", (e) => {\r\n  e.preventDefault();\r\n  _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleActions(e.target);\r\n});\r\n\r\n// Event: Аdd Task\r\n\r\ndocument.querySelector(\"#add-task-form\").addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n\r\n  const taskTitle = document.querySelector(\"#task-title-input\").value;\r\n  const selectedImportanceColor = document.querySelector(\".selected-color\").id;\r\n\r\n  if (taskTitle === \"\") {\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleNotification(\"Please enter a Task title!\", \"#ff4757\", false);\r\n  } else {\r\n    const task = new _modules_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskTitle, selectedImportanceColor);\r\n\r\n    _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(task);\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearTaskTitleInput();\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleNotification(\"Success, you added a task!\", \"#2ed573\", true);\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayInProgressTasks();\r\n  }\r\n});\r\n\r\n// Event: Finish a Task\r\n\r\ndocument.querySelector(\"#tasks-container\").addEventListener(\"dblclick\", (e) => {\r\n  if (e.target.classList.contains(\"task\")) {\r\n    _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].finishTask(e.target.getAttribute(\"data-index\"));\r\n\r\n    _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(e.target.getAttribute(\"data-index\"));\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayInProgressTasks();\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleNotification(\"Success, you finished a task!\", \"#2ed573\", true);\r\n  }\r\n});\r\n\r\n// Event: Remove a Task\r\n\r\ndocument.querySelector(\"#tasks-container\").addEventListener(\"click\", (e) => {\r\n  if (e.target.classList.contains(\"delete-task\")) {\r\n    _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(\r\n      e.target.parentElement.parentElement.getAttribute(\"data-index\")\r\n    );\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayInProgressTasks();\r\n\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleNotification(\"You deleted a task!\", \"#ff4757\", false);\r\n  }\r\n});\r\n\r\n// Event: Edit a Task\r\n\r\ndocument.querySelector(\"#tasks-container\").addEventListener(\"click\", (e) => {\r\n  if (e.target.classList.contains(\"edit-task\")) {\r\n    _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleEditTask(e.target);\r\n  }\r\n});\r\n\r\n// Event: Remove a Done Task\r\n\r\ndocument\r\n  .querySelector(\"#done-tasks-container\")\r\n  .addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"delete-task\")) {\r\n      _modules_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeDoneTask(\r\n        e.target.parentElement.parentElement.getAttribute(\"data-index\")\r\n      );\r\n\r\n      _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayDoneTasks();\r\n\r\n      _modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleNotification(\"You deleted a task!\", \"#ff4757\", false);\r\n    }\r\n  });\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Date.js":
/*!*****************************!*\
  !*** ./src/modules/Date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentDate)\n/* harmony export */ });\nclass CurrentDate {\r\n  static dayName() {\r\n    const currentDate = new Date();\r\n\r\n    const weekdayNames = [\r\n      \"Sunday\",\r\n      \"Monday\",\r\n      \"Tuesday\",\r\n      \"Wednesday\",\r\n      \"Thursday\",\r\n      \"Friday\",\r\n      \"Saturday\",\r\n    ];\r\n\r\n    const dayName = weekdayNames[currentDate.getDay()];\r\n\r\n    return dayName;\r\n  }\r\n\r\n  static dayNumber() {\r\n    const currentDate = new Date();\r\n\r\n    const dayNumber = currentDate.getDate();\r\n\r\n    return dayNumber;\r\n  }\r\n\r\n  static monthName() {\r\n    const currentDate = new Date();\r\n\r\n    const monthNames = [\r\n      \"January\",\r\n      \"February\",\r\n      \"March\",\r\n      \"April\",\r\n      \"May\",\r\n      \"June\",\r\n      \"July\",\r\n      \"August\",\r\n      \"September\",\r\n      \"October\",\r\n      \"November\",\r\n      \"December\",\r\n    ];\r\n\r\n    const monthName = monthNames[currentDate.getMonth()];\r\n\r\n    return monthName;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Date.js?");

/***/ }),

/***/ "./src/modules/Store.js":
/*!******************************!*\
  !*** ./src/modules/Store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\r\n  static getTasks() {\r\n    let tasks;\r\n    if (localStorage.getItem(\"tasks\") === null) {\r\n      tasks = [];\r\n    } else {\r\n      tasks = JSON.parse(localStorage.getItem(\"tasks\"));\r\n    }\r\n\r\n    return tasks;\r\n  }\r\n\r\n  static addTask(task) {\r\n    const tasks = this.getTasks();\r\n\r\n    tasks.push(task);\r\n\r\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\r\n  }\r\n\r\n  static finishTask(index) {\r\n    const tasks = this.getTasks();\r\n\r\n    const finishedTask = tasks.splice(index, 1)[0];\r\n\r\n    this.addDoneTask(finishedTask);\r\n  }\r\n\r\n  static removeTask(index) {\r\n    const tasks = this.getTasks();\r\n\r\n    tasks.splice(index, 1);\r\n\r\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\r\n  }\r\n\r\n  static editTask(editedValue, index) {\r\n    const tasks = this.getTasks();\r\n\r\n    tasks[index].title = editedValue;\r\n\r\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\r\n  }\r\n\r\n  static getDoneTasks() {\r\n    let tasks;\r\n    if (localStorage.getItem(\"done-tasks\") === null) {\r\n      tasks = [];\r\n    } else {\r\n      tasks = JSON.parse(localStorage.getItem(\"done-tasks\"));\r\n    }\r\n\r\n    return tasks;\r\n  }\r\n\r\n  static addDoneTask(task) {\r\n    const doneTasks = this.getDoneTasks();\r\n\r\n    doneTasks.push(task);\r\n\r\n    localStorage.setItem(\"done-tasks\", JSON.stringify(doneTasks));\r\n  }\r\n\r\n  static removeDoneTask(index) {\r\n    const doneTasks = this.getDoneTasks();\r\n\r\n    doneTasks.splice(index, 1);\r\n\r\n    localStorage.setItem(\"done-tasks\", JSON.stringify(doneTasks));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Store.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, importance) {\r\n    this.title = title;\r\n    this.importance = importance;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ \"./src/modules/Date.js\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ \"./src/modules/Store.js\");\n\r\n\r\n\r\nclass UI {\r\n  static handleDate() {\r\n    const day = document.querySelector(\"#day\");\r\n    const month = document.querySelector(\"#month\");\r\n\r\n    day.innerText = `${_Date__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dayName()} ${_Date__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dayNumber()}`;\r\n\r\n    month.innerText = _Date__WEBPACK_IMPORTED_MODULE_0__[\"default\"].monthName();\r\n  }\r\n\r\n  static handleSideBar(clickedTab) {\r\n    const tabButtons = document.querySelectorAll(\".side-bar-btn\");\r\n\r\n    tabButtons.forEach((tab) => {\r\n      if (tab.classList.contains(\"active-tab\")) {\r\n        tab.classList.remove(\"active-tab\");\r\n      }\r\n    });\r\n\r\n    clickedTab.classList.add(\"active-tab\");\r\n\r\n    const inProgressTab = document.querySelector(\"#in-progress-tab\");\r\n    const doneTab = document.querySelector(\"#done-tab\");\r\n    const emptySchedule = document.querySelector(\"#empty-schedule\");\r\n\r\n    if (clickedTab.id === \"in-progress-tab-btn\") {\r\n      inProgressTab.style.display = \"flex\";\r\n      doneTab.style.display = \"none\";\r\n\r\n      this.displayInProgressTasks();\r\n    } else {\r\n      doneTab.style.display = \"flex\";\r\n      inProgressTab.style.display = \"none\";\r\n      emptySchedule.style.display = \"none\";\r\n\r\n      this.displayDoneTasks();\r\n    }\r\n  }\r\n\r\n  static handleColorSelection(colorElement) {\r\n    const colors = document.querySelectorAll(\".importance-color\");\r\n\r\n    colors.forEach((colorElement) => {\r\n      if (colorElement.classList.contains(\"selected-color\")) {\r\n        colorElement.classList.remove(\"selected-color\");\r\n      }\r\n    });\r\n\r\n    colorElement.classList.add(\"selected-color\");\r\n  }\r\n\r\n  static handleNotification(content, backgroundColor, sign) {\r\n    const notificationMessage = document.querySelector(\"#notification-message\");\r\n    const notificationSign = document.createElement(\"i\");\r\n\r\n    notificationSign.classList.add(\"fas\");\r\n    notificationSign.classList.add(\r\n      sign ? \"fa-check-circle\" : \"fa-exclamation-circle\"\r\n    );\r\n\r\n    notificationMessage.innerText = content;\r\n    notificationMessage.style.backgroundColor = backgroundColor;\r\n    notificationMessage.appendChild(notificationSign);\r\n    notificationMessage.style.display = \"flex\";\r\n\r\n    setTimeout(this.hideNotification, 3500);\r\n  }\r\n\r\n  static hideNotification() {\r\n    const notificationMessage = document.querySelector(\"#notification-message\");\r\n\r\n    notificationMessage.style.display = \"none\";\r\n  }\r\n\r\n  static displayInProgressTasks() {\r\n    const tasksContainer = document.querySelector(\"#tasks-container\");\r\n    const emptySchedule = document.querySelector(\"#empty-schedule\");\r\n\r\n    tasksContainer.innerHTML = \"\";\r\n\r\n    const tasks = _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n\r\n    if (tasks.length === 0) {\r\n      tasksContainer.style.display = \"none\";\r\n      emptySchedule.style.display = \"flex\";\r\n    } else {\r\n      tasksContainer.style.display = \"flex\";\r\n      emptySchedule.style.display = \"none\";\r\n\r\n      tasks.forEach((task, index) => {\r\n        UI.createInProgressTask(task, index);\r\n      });\r\n    }\r\n  }\r\n\r\n  static createInProgressTask(task, index) {\r\n    const tasksContainer = document.querySelector(\"#tasks-container\");\r\n\r\n    const taskDiv = document.createElement(\"div\");\r\n    const taskTitle = document.createElement(\"span\");\r\n    const importanceSpan = document.createElement(\"span\");\r\n    const backDiv = document.createElement(\"div\");\r\n    const editTaskDiv = document.createElement(\"div\");\r\n    const editIcon = document.createElement(\"i\");\r\n    const deleteTaskDiv = document.createElement(\"div\");\r\n    const deleteIcon = document.createElement(\"i\");\r\n    const editInputContainer = document.createElement(\"div\");\r\n    const editInput = document.createElement(\"input\");\r\n    const editButton = document.createElement(\"button\");\r\n    const editButtonIcon = document.createElement(\"i\");\r\n\r\n    taskDiv.classList.add(\"task\");\r\n    taskTitle.classList.add(\"task-title\");\r\n    importanceSpan.classList.add(\"importance-level\");\r\n    importanceSpan.id = task.importance;\r\n    backDiv.classList.add(\"back\");\r\n    editTaskDiv.classList.add(\"edit-task\");\r\n    editIcon.classList.add(\"fas\");\r\n    editIcon.classList.add(\"fa-pencil-alt\");\r\n    deleteTaskDiv.classList.add(\"delete-task\");\r\n    deleteIcon.classList.add(\"fas\");\r\n    deleteIcon.classList.add(\"fa-trash-alt\");\r\n\r\n    editInputContainer.classList.add(\"edit-input-container\");\r\n    editInput.classList.add(\"edit-input\");\r\n    editButton.classList.add(\"edit-button\");\r\n    editButtonIcon.classList.add(\"fas\");\r\n    editButtonIcon.classList.add(\"fa-pencil-alt\");\r\n\r\n    editInput.type = \"text\";\r\n    editInput.maxLength = 15;\r\n\r\n    taskTitle.innerText = task.title;\r\n    taskDiv.setAttribute(\"data-index\", index);\r\n\r\n    taskDiv.appendChild(taskTitle);\r\n    taskDiv.appendChild(importanceSpan);\r\n    taskDiv.appendChild(backDiv);\r\n    taskDiv.appendChild(editInputContainer);\r\n\r\n    backDiv.appendChild(editTaskDiv);\r\n    backDiv.appendChild(deleteTaskDiv);\r\n\r\n    editTaskDiv.appendChild(editIcon);\r\n    deleteTaskDiv.appendChild(deleteIcon);\r\n\r\n    editInputContainer.appendChild(editInput);\r\n    editInputContainer.appendChild(editButton);\r\n    editButton.appendChild(editButtonIcon);\r\n\r\n    tasksContainer.appendChild(taskDiv);\r\n  }\r\n\r\n  static displayDoneTasks() {\r\n    const doneTasksContainer = document.querySelector(\"#done-tasks-container\");\r\n\r\n    doneTasksContainer.innerHTML = \"\";\r\n\r\n    const doneTasks = _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getDoneTasks();\r\n    console.log(doneTasks);\r\n\r\n    doneTasks.forEach((task, index) => {\r\n      this.createDoneTask(task, index);\r\n    });\r\n  }\r\n\r\n  static createDoneTask(task, index) {\r\n    const doneTasksContainer = document.querySelector(\"#done-tasks-container\");\r\n\r\n    const doneTaskDiv = document.createElement(\"div\");\r\n    const doneTaskTitle = document.createElement(\"span\");\r\n    const doneIcon = document.createElement(\"i\");\r\n    const backDiv = document.createElement(\"div\");\r\n    const deleteTaskDiv = document.createElement(\"div\");\r\n\r\n    const deleteIcon = document.createElement(\"i\");\r\n\r\n    doneTaskDiv.classList.add(\"done-task\");\r\n    doneTaskTitle.classList.add(\"done-task-name\");\r\n    doneIcon.classList.add(\"fas\");\r\n    doneIcon.classList.add(\"fa-check\");\r\n    backDiv.classList.add(\"back\");\r\n    deleteTaskDiv.classList.add(\"delete-task\");\r\n    deleteIcon.classList.add(\"fas\");\r\n    deleteIcon.classList.add(\"fa-trash-alt\");\r\n\r\n    doneTaskTitle.innerText = task.title;\r\n    doneTaskDiv.setAttribute(\"data-index\", index);\r\n\r\n    doneTaskDiv.appendChild(doneTaskTitle);\r\n    doneTaskDiv.appendChild(doneIcon);\r\n    doneTaskDiv.appendChild(backDiv);\r\n    backDiv.appendChild(deleteTaskDiv);\r\n    deleteTaskDiv.appendChild(deleteIcon);\r\n\r\n    doneTasksContainer.appendChild(doneTaskDiv);\r\n  }\r\n\r\n  static toggleActions(element) {\r\n    if (element.classList.contains(\"task\")) {\r\n      element.children[2].style.display = \"flex\";\r\n\r\n      element.addEventListener(\"mouseleave\", () => {\r\n        element.children[2].style.display = \"none\";\r\n      });\r\n    } else if (element.classList.contains(\"done-task\")) {\r\n      element.children[2].style.display = \"flex\";\r\n\r\n      element.addEventListener(\"mouseleave\", () => {\r\n        element.children[2].style.display = \"none\";\r\n      });\r\n    }\r\n  }\r\n\r\n  static handleEditTask(element) {\r\n    const editInputContainer = element.parentElement.nextSibling;\r\n    const taskElement = element.parentElement.parentElement;\r\n    const taskIndex = taskElement.getAttribute(\"data-index\");\r\n    const editInput = editInputContainer.children[0];\r\n    const editButton = editInputContainer.children[1];\r\n\r\n    const tasks = _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n\r\n    editInput.value = tasks[taskIndex].title;\r\n    editInputContainer.style.display = \"flex\";\r\n\r\n    editButton.addEventListener(\"click\", () => {\r\n      const editedValue = editInput.value;\r\n\r\n      _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editTask(editedValue, taskIndex);\r\n\r\n      editInputContainer.style.display = \"none\";\r\n\r\n      this.displayInProgressTasks();\r\n\r\n      this.handleNotification(\"Success, you edited a task!\", \"#2ed573\", true);\r\n    });\r\n  }\r\n\r\n  static clearTaskTitleInput() {\r\n    const taskTitle = document.querySelector(\"#task-title-input\");\r\n\r\n    taskTitle.value = \"\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;