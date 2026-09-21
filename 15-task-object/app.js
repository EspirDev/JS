const toDoList = {
  tasks: [],
  addTask: function (task) {
    this.tasks.push(task);
  },
  getTaskById: function (id) {
    return this.tasks.find(task => task.id === id);
  },
    removeTaskById: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },
  updateTaskById: function (id, updatedTask) {
    const task = this.getTaskById(id);
    if (task) {
      Object.assign(task, updatedTask);
    }
  },
  sortByPriority: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};


toDoList.addTask({title: 'Купить хлеб', id: 1, priority: 1 });
toDoList.addTask({title: 'Купить молоко', id: 2, priority: 2 });
toDoList.addTask({title: 'Купить яблоки', id: 3, priority: 3 });

console.log(toDoList.tasks);
toDoList.removeTaskById(2);
console.log(toDoList.tasks);
toDoList.updateTaskById(1, { priority: 4 });
toDoList.sortByPriority();
console.log(toDoList.tasks);