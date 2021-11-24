import CurrentDate from "./Date";
import Store from "./Store";

export default class UI {
  static handleDate() {
    const day = document.querySelector("#day");
    const month = document.querySelector("#month");

    day.innerText = `${CurrentDate.dayName()} ${CurrentDate.dayNumber()}`;

    month.innerText = CurrentDate.monthName();
  }

  static handleSideBar(clickedTab) {
    const tabButtons = document.querySelectorAll(".side-bar-btn");

    tabButtons.forEach((tab) => {
      if (tab.classList.contains("active-tab")) {
        tab.classList.remove("active-tab");
      }
    });

    clickedTab.classList.add("active-tab");

    const inProgressTab = document.querySelector("#in-progress-tab");
    const doneTab = document.querySelector("#done-tab");
    const emptySchedule = document.querySelector("#empty-schedule");

    if (clickedTab.id === "in-progress-tab-btn") {
      inProgressTab.style.display = "flex";
      doneTab.style.display = "none";

      this.displayInProgressTasks();
    } else {
      doneTab.style.display = "flex";
      inProgressTab.style.display = "none";
      emptySchedule.style.display = "none";

      this.displayDoneTasks();
    }
  }

  static handleColorSelection(colorElement) {
    const colors = document.querySelectorAll(".importance-color");

    colors.forEach((colorElement) => {
      if (colorElement.classList.contains("selected-color")) {
        colorElement.classList.remove("selected-color");
      }
    });

    colorElement.classList.add("selected-color");
  }

  static handleNotification(content, backgroundColor, sign) {
    const notificationMessage = document.querySelector("#notification-message");
    const notificationSign = document.createElement("i");

    notificationSign.classList.add("fas");
    notificationSign.classList.add(
      sign ? "fa-check-circle" : "fa-exclamation-circle"
    );

    notificationMessage.innerText = content;
    notificationMessage.style.backgroundColor = backgroundColor;
    notificationMessage.appendChild(notificationSign);
    notificationMessage.style.display = "flex";

    setTimeout(this.hideNotification, 3500);
  }

  static hideNotification() {
    const notificationMessage = document.querySelector("#notification-message");

    notificationMessage.style.display = "none";
  }

  static displayInProgressTasks() {
    const tasksContainer = document.querySelector("#tasks-container");
    const emptySchedule = document.querySelector("#empty-schedule");

    tasksContainer.innerHTML = "";

    const tasks = Store.getTasks();

    if (tasks.length === 0) {
      tasksContainer.style.display = "none";
      emptySchedule.style.display = "flex";
    } else {
      tasksContainer.style.display = "flex";
      emptySchedule.style.display = "none";

      tasks.forEach((task, index) => {
        UI.createInProgressTask(task, index);
      });
    }
  }

  static createInProgressTask(task, index) {
    const tasksContainer = document.querySelector("#tasks-container");

    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("span");
    const importanceSpan = document.createElement("span");
    const backDiv = document.createElement("div");
    const editTaskDiv = document.createElement("div");
    const editIcon = document.createElement("i");
    const deleteTaskDiv = document.createElement("div");
    const deleteIcon = document.createElement("i");
    const editInputContainer = document.createElement("div");
    const editInput = document.createElement("input");
    const editButton = document.createElement("button");
    const editButtonIcon = document.createElement("i");

    taskDiv.classList.add("task");
    taskTitle.classList.add("task-title");
    importanceSpan.classList.add("importance-level");
    importanceSpan.id = task.importance;
    backDiv.classList.add("back");
    editTaskDiv.classList.add("edit-task");
    editIcon.classList.add("fas");
    editIcon.classList.add("fa-pencil-alt");
    deleteTaskDiv.classList.add("delete-task");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash-alt");

    editInputContainer.classList.add("edit-input-container");
    editInput.classList.add("edit-input");
    editButton.classList.add("edit-button");
    editButtonIcon.classList.add("fas");
    editButtonIcon.classList.add("fa-pencil-alt");

    editInput.type = "text";
    editInput.maxLength = 15;

    taskTitle.innerText = task.title;
    taskDiv.setAttribute("data-index", index);

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(importanceSpan);
    taskDiv.appendChild(backDiv);
    taskDiv.appendChild(editInputContainer);

    backDiv.appendChild(editTaskDiv);
    backDiv.appendChild(deleteTaskDiv);

    editTaskDiv.appendChild(editIcon);
    deleteTaskDiv.appendChild(deleteIcon);

    editInputContainer.appendChild(editInput);
    editInputContainer.appendChild(editButton);
    editButton.appendChild(editButtonIcon);

    tasksContainer.appendChild(taskDiv);
  }

  static displayDoneTasks() {
    const doneTasksContainer = document.querySelector("#done-tasks-container");

    doneTasksContainer.innerHTML = "";

    const doneTasks = Store.getDoneTasks();

    doneTasks.forEach((task, index) => {
      this.createDoneTask(task, index);
    });
  }

  static createDoneTask(task, index) {
    const doneTasksContainer = document.querySelector("#done-tasks-container");

    const doneTaskDiv = document.createElement("div");
    const doneTaskTitle = document.createElement("span");
    const doneIcon = document.createElement("i");
    const backDiv = document.createElement("div");
    const deleteTaskDiv = document.createElement("div");

    const deleteIcon = document.createElement("i");

    doneTaskDiv.classList.add("done-task");
    doneTaskTitle.classList.add("done-task-name");
    doneIcon.classList.add("fas");
    doneIcon.classList.add("fa-check");
    backDiv.classList.add("back");
    deleteTaskDiv.classList.add("delete-task");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash-alt");

    doneTaskTitle.innerText = task.title;
    doneTaskDiv.setAttribute("data-index", index);

    doneTaskDiv.appendChild(doneTaskTitle);
    doneTaskDiv.appendChild(doneIcon);
    doneTaskDiv.appendChild(backDiv);
    backDiv.appendChild(deleteTaskDiv);
    deleteTaskDiv.appendChild(deleteIcon);

    doneTasksContainer.appendChild(doneTaskDiv);
  }

  static toggleActions(element) {
    if (element.classList.contains("task")) {
      element.children[2].style.display = "flex";

      element.addEventListener("mouseleave", () => {
        element.children[2].style.display = "none";
      });
    } else if (element.classList.contains("done-task")) {
      element.children[2].style.display = "flex";

      element.addEventListener("mouseleave", () => {
        element.children[2].style.display = "none";
      });
    }
  }

  static handleEditTask(element) {
    const editInputContainer = element.parentElement.nextSibling;
    const taskElement = element.parentElement.parentElement;
    const taskIndex = taskElement.getAttribute("data-index");
    const editInput = editInputContainer.children[0];
    const editButton = editInputContainer.children[1];

    const tasks = Store.getTasks();

    editInput.value = tasks[taskIndex].title;
    editInputContainer.style.display = "flex";

    editButton.addEventListener("click", () => {
      const editedValue = editInput.value;

      Store.editTask(editedValue, taskIndex);

      editInputContainer.style.display = "none";

      this.displayInProgressTasks();

      this.handleNotification("Success, you edited a task!", "#2ed573", true);
    });
  }

  static clearTaskTitleInput() {
    const taskTitle = document.querySelector("#task-title-input");

    taskTitle.value = "";
  }
}
