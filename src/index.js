// import renderUI from "./modules/UI";

// document.addEventListener("DOMContentLoaded", renderUI.homePage);

const tabs = document.querySelectorAll(".side-bar-btn");
const colors = document.querySelectorAll(".importance-color");
const tasks = document.querySelectorAll(".task");
const doneTasks = document.querySelectorAll(".done-task");

tabs.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeActiveTab();
    e.target.classList.add("active-tab");
  });
});

colors.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeSelectedColor();
    e.target.classList.add("selected-color");
  });
});

tasks.forEach((task) => {
  task.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

doneTasks.forEach((task) => {
  task.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

function removeActiveTab() {
  tabs.forEach((button) => {
    if (button.classList.contains("active-tab"))
      button.classList.remove("active-tab");
  });
}

function removeSelectedColor() {
  colors.forEach((button) => {
    if (button.classList.contains("selected-color"))
      button.classList.remove("selected-color");
  });
}
