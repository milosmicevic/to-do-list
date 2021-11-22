/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import renderUI from \"./modules/UI\";\n\n// document.addEventListener(\"DOMContentLoaded\", renderUI.homePage);\n\nconst tabs = document.querySelectorAll(\".side-bar-btn\");\nconst colors = document.querySelectorAll(\".importance-color\");\nconst tasks = document.querySelectorAll(\".task\");\nconst doneTasks = document.querySelectorAll(\".done-task\");\n\ntabs.forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    removeActiveTab();\n    e.target.classList.add(\"active-tab\");\n  });\n});\n\ncolors.forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    removeSelectedColor();\n    e.target.classList.add(\"selected-color\");\n  });\n});\n\ntasks.forEach((task) => {\n  task.addEventListener(\"click\", (e) => {\n    console.log(e.target);\n  });\n});\n\ndoneTasks.forEach((task) => {\n  task.addEventListener(\"click\", (e) => {\n    console.log(e.target);\n  });\n});\n\nfunction removeActiveTab() {\n  tabs.forEach((button) => {\n    if (button.classList.contains(\"active-tab\"))\n      button.classList.remove(\"active-tab\");\n  });\n}\n\nfunction removeSelectedColor() {\n  colors.forEach((button) => {\n    if (button.classList.contains(\"selected-color\"))\n      button.classList.remove(\"selected-color\");\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;