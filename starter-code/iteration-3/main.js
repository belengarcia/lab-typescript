let task = [];
class TodoItem {
    constructor(title, status, updatedAt) {
        this.title = title;
        this.status = status;
        this.updatedAt = updatedAt;
    }
    toggleStatus() {
        if (this.status === true) {
            this.status = false;
            this.updatedAt = new Date;
        }
    }
}
class TodoList {
    constructor(TodoItem) {
        this.TodoItem = TodoItem;
    }
    addTask(TodoItem) {
        return task.push(TodoItem);
    }
}
let task1 = new TodoItem('This is our first task');
