let task = [];
function addTask(item) {
    return task.push(item);
}
function listAllTasks(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
function deleteTask(taskToDelete) {
    for (var i = 0; i < task.length; i++) {
        if (task[i] === taskToDelete) {
            task.splice(i, 1);
        }
    }
    return task.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(task);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(task);
