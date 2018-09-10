// Iteration 1
// 1. Create an array of strings

let task: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(item : string) : number {
    return task.push(item);
}

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks(array: Array<string>) : void {
    for (var i=0; i<array.length ; i++){
        console.log(array[i]);
    }
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(taskToDelete : string) : number {
    for (var i= 0 ; i<task.length ; i++){
        if (task[i] === taskToDelete){
            task.splice(i,1);
        }   
    }
    return task.length;
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));

listAllTasks(task);

console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));

listAllTasks(task);
