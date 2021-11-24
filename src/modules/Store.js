export default class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    return tasks;
  }

  static addTask(task) {
    const tasks = this.getTasks();

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static finishTask(index) {
    const tasks = this.getTasks();

    const finishedTask = tasks.splice(index, 1)[0];

    this.addDoneTask(finishedTask);
  }

  static removeTask(index) {
    const tasks = this.getTasks();

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static editTask(editedValue, index) {
    const tasks = this.getTasks();

    tasks[index].title = editedValue;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static getDoneTasks() {
    let tasks;
    if (localStorage.getItem("done-tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("done-tasks"));
    }

    return tasks;
  }

  static addDoneTask(task) {
    const doneTasks = this.getDoneTasks();

    doneTasks.push(task);

    localStorage.setItem("done-tasks", JSON.stringify(doneTasks));
  }

  static removeDoneTask(index) {
    const doneTasks = this.getDoneTasks();

    doneTasks.splice(index, 1);

    localStorage.setItem("done-tasks", JSON.stringify(doneTasks));
  }
}
