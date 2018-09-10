// Add the reference to the "TodoInterface"
import {List} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
let task: Array<string> = [];
class Todo implements List {
    constructor(public task: Array<string>){}
    addTask(item : string) : number {
        return task.push(item);
    }
    listAllTasks(array: Array<string>): void {
        for (var i=0; i<array.length ; i++){
            console.log(array[i]);
        }
    }
    deleteTask(taskToDelete : string): number {
        for (var i= 0 ; i<task.length ; i++){
            if (task[i] === taskToDelete){
                task.splice(i,1);
            }   
        }
        return task.length;
    }
}


// Execution
let myTodos = new Todo(task);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks(task);
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks(task);

