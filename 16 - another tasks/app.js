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
        const task = toDoList.getTaskById.call(this, id);
        if (task) {
            Object.assign(task, updatedTask);
        }
    },
    sortByOrder: function () {
        this.tasks.sort((a, b) => a.order - b.order);
    }
};




const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание',
        order: 0
}]
};

toDoList.addTask.call(newTask, ({ id: 2, name: 'Покупка 1', description: 'Купить хлеб', order: 1 }));
toDoList.addTask.call(newTask, ({ id: 3, name: 'Покупка 2', description: 'упить молоко', order: 2 }));
toDoList.addTask.call(newTask, ({ id: 4, name: 'Покупка 3', description: 'Купить яблоки', order: 3 }));

console.log(newTask.tasks);
toDoList.removeTaskById.call(newTask, (2));
console.log(newTask.tasks);
toDoList.updateTaskById.call(newTask, 1, { order: 4 });
console.log(newTask.tasks);
toDoList.sortByOrder.call(newTask);
console.log(newTask.tasks);