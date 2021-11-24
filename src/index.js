import Store from "./modules/Store";
import Task from "./modules/Task";
import UI from "./modules/UI";

// Event: Display Tasks

document.addEventListener("DOMContentLoaded", () => {
  UI.handleDate();
  UI.displayInProgressTasks();
});

// Event: Handle Side Bar

document.querySelectorAll(".side-bar-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    UI.handleSideBar(e.target);
  });
});

// Event: Handle Importance color

document.querySelectorAll(".importance-color").forEach((color) => {
  color.addEventListener("click", (e) => {
    UI.handleColorSelection(e.target);
  });
});

// Event: show In Progress Actions

document.querySelector("#main-content").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  UI.toggleActions(e.target);
});

// Event: show Done Actions

document.querySelector("#main-content").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  UI.toggleActions(e.target);
});

// Event: Аdd Task

document.querySelector("#add-task-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const taskTitle = document.querySelector("#task-title-input").value;
  const selectedImportanceColor = document.querySelector(".selected-color").id;

  if (taskTitle === "") {
    UI.handleNotification("Please enter a Task title!", "#ff4757", false);
  } else {
    const task = new Task(taskTitle, selectedImportanceColor);

    Store.addTask(task);

    UI.clearTaskTitleInput();

    UI.handleNotification("Success, you added a task!", "#2ed573", true);

    UI.displayInProgressTasks();
  }
});

// Event: Finish a Task

document.querySelector("#tasks-container").addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("task")) {
    Store.finishTask(e.target.getAttribute("data-index"));

    Store.removeTask(e.target.getAttribute("data-index"));

    UI.displayInProgressTasks();

    UI.handleNotification("Success, you finished a task!", "#2ed573", true);
  }
});

// Event: Remove a Task

document.querySelector("#tasks-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-task")) {
    Store.removeTask(
      e.target.parentElement.parentElement.getAttribute("data-index")
    );

    UI.displayInProgressTasks();

    UI.handleNotification("You deleted a task!", "#ff4757", false);
  }
});

// Event: Edit a Task

document.querySelector("#tasks-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-task")) {
    UI.handleEditTask(e.target);
  }
});

// Event: Remove a Done Task

document
  .querySelector("#done-tasks-container")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
      Store.removeDoneTask(
        e.target.parentElement.parentElement.getAttribute("data-index")
      );

      UI.displayDoneTasks();

      UI.handleNotification("You deleted a task!", "#ff4757", false);
    }
  });
