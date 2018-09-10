// Add the reference to the interface

import {TodoItemInterface, TodoListInterface} from './interfaces'
let task: Array<string> = [];

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
    constructor(public title : string, public status: boolean, public updatedAt : Date){}
    toggleStatus(): void {
        if(this.status === true){
            this.status = false
            this.updatedAt = new Date;
        } 
    }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
    constructor(public TodoItem : Array<string>){}
    addTask(TodoItem : string): number{
        return task.push(TodoItem);
    }
}

// addTask(TodoItem: string): number,
// listAllTasks(array: Array<string>): void,
// deleteTask(item : string): void,
// listUncomplete(array: Array<string>), void
// }
// Execution
let task1 = new TodoItem('This is our first task');
// let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
// let task3 = new TodoItem('Finish this iteration 1!! 🤓');
// let task4 = new TodoItem('Finish this iteration 2!! 🤓');
// let task5 = new TodoItem('Finish this iteration 3!! 🤓');

// let myTodos = new TodoList();

// console.log("Number of items:", myTodos.addTask(task1));
// console.log("Number of items:", myTodos.addTask(task2));
// console.log("Number of items:", myTodos.addTask(task3));
// console.log("Number of items:", myTodos.addTask(task4));
// console.log("Number of items:", myTodos.addTask(task5));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask(task3));
// console.log("Number of items:", myTodos.deleteTask(task4));
// console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
