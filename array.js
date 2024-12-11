//\\  ----> ARRAY IN JS <---- //\\

/*

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f']; 

let arr3 = [
            {title: 'Jhon',
             age: 20,
             gender: 'male',
             address: 'New York' 
            },
            {title: 'Jake',
                age: 10,
                gender: 'male',
                address: 'UK' 
            },
        ]; 



//\\  ----> METHODS <---- //\\


at() 
concat()
includes() 
push() 
pop()  
shift()  
unshift() 
some() 
every()  
filter()  
find()  
indexOf() 
lastIndexOf() 
map()  
slice()  
splice()  
tosplice()  
reverse() 
sort() 
flat()  
fill() 
join() 
tosorted() 
toreversed() 
toString()  
toLocaleString()
reduce()
forEach()

//\\  ----> METHODS WITH USECASE <---- //\\

at(index):
Use Case: Accesses the element at the specified index.
Returns: The value at the specified index.


concat(array):
Use Case: Merges two arrays into one.
Returns: A new array with elements from both arrays.


includes(value):
Use Case: Checks if a specified value is present in the array.
Returns: true if the value is found, otherwise false.


push(value):
Use Case: Adds a value to the end of the array.
Returns: The new length of the array.


pop():
Use Case: Removes the last value from the array.
Returns: The removed value.


shift():
Use Case: Removes the first value from the array.
Returns: The removed value.


unshift(value):
Use Case: Adds a value to the beginning of the array.
Returns: The new length of the array.


every(callback):
Use Case: Checks if all elements in the array match a condition.
Returns: true if all elements match the condition, otherwise false.


some(callback):
Use Case: Checks if at least one element in the array matches a condition.
Returns: true if at least one element matches the condition, otherwise false.


filter(callback):
Use Case: Creates a new array with elements that match a condition.
Returns: A new array with the filtered elements.


find(callback):
Use Case: Finds and returns the first element that matches a condition.
Returns: The first element that matches the condition.


indexOf(value):
Use Case: Finds the first index of the specified value.
Returns: The index of the first occurrence of the value, or -1 if not found.


lastIndexOf(value):
Use Case: Finds the last index of the specified value.
Returns: The index of the last occurrence of the value, or -1 if not found.


map(callback):
Use Case: Creates a new array with the results of calling a function for every element in the array.
Returns: A new array with the transformed elements.


slice(start, end):
Use Case: Creates a new array from a portion of the original array.
Returns: A new array with the sliced elements.


splice(start, deleteCount, [item1], [item2], ...):
Use Case: Changes the contents of an array by removing, replacing, or adding elements.
Returns: The updated array after the splice operation.


reverse():
Use Case: Reverses the order of the elements in the array.
Returns: The reversed array.


sort():
Use Case: Sorts the elements of the array.
Returns: The sorted array.


flat():
Use Case: Flattens a nested array into a single level.
Returns: A new flat array.


fill(value, start, end):
Use Case: Fills the elements of the array with a static value.
Returns: The updated array.


join(separator):
Use Case: Converts the array elements into a string.
Returns: A string of the array elements joined by the specified separator.


reduce(callback, initialValue):
Use Case: Reduces the array to a single value by executing a function on each element.
Returns: The accumulated value after applying the function on all elements.


forEach(callback):
Use Case: Executes a function for each element in the array.
Returns: undefined (no new array is returned).

*/





//\\  ----> EXAMPLE <---- //\\


// let tasks = [1, [2, [3, 4]], 5, 'villa', 'banana', 7, 8, 'apple'];

// console.log(tasks.at(-1));
// console.log(tasks.at(-2));
// tasks.push(5, 6, 7)
// tasks.pop()
// tasks.shift()
// tasks.unshift('apple', 'banana')
// console.log(tasks.includes(3));
// console.log(tasks.indexOf('banana'));
// console.log(tasks.lastIndexOf('villa'));
// console.log(tasks.flat(3));
// console.log(tasks.fill('done', 2, 3))
// console.log(tasks.reverse());
// console.log(tasks.slice(1 , 3));
// console.log(tasks.splice(1,0 ,"hello" ,'world'));
// console.log(tasks.sort());
// console.log(tasks.some((value) => value > 10));
// console.log(tasks.every(value => typeof value === 'number')); 
// tasks.forEach((item, index) => console.log(item));
// tasks.map((item, index) => item * 2);
// console.log(tasks.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
// console.log(tasks.find((value) => value > 5));
// console.log(tasks.filter(val => typeof val === 'number')); 










//\\  ----> PRACTISE QUESTION <---- //\\

// Start with let arr = [1, 2, 3, 4, 5].
// Remove the last element using pop().
// Add two new values using push().
// Remove the first element using shift().
// Add one value at the beginning using unshift().
// Concatenate with another array [6, 7, 8] using concat().
// Reverse the array.
// What is the final state of the array?
// Given let array = [10, 20, 30, 40, 10].
// Find the first occurrence of 10 using indexOf().
// Find the last occurrence of 10 using lastIndexOf().
// Check if 30 exists using includes().
// Fill the array with 0.
// Reverse the array.
// What is the final array?
// Given let numbers = [1, [2, [3, 4]], 5, [6, 7, 8]].
// Convert the nested array to a flat array using flat().
// Fill the entire array with 0.
// Convert the filled array to a string using join() and toString().
// Convert the array to a locale-specific string format.
// What is the output?
// Start with let array = [2, 4, 6, 8, 10].
// Check if 5 is in the array using includes().
// Fill the array with 5.
// Find the first and last occurrence of 5 using indexOf() and lastIndexOf().
// Reverse the array.
// Concatenate with another array [12, 14] using concat().
// Add 15 to the end using push().
// What is the final array?
// Given let numbers = [10, 20, 30, 40, 50].
// Join the array into a string with ,.
// Concatenate [60, 70] to the end using concat().
// Fill the array with 5.
// Reverse the filled array.
// Remove the first element using shift().
// Add 5 to the beginning using unshift().
// Check if 30 is in the array using includes().
// Get the element at index 2 using at().
// What is the final state of the array?









//\\  ----> QUESTION <---- //\\


// Find the task with id 3 and return its title.
// Add a new task at the end of the array with these properties:
// { id: 6, title: 'Task 6', priority: 'medium', completed: false }.
// Remove the first task from the array.
// Check if there is any task with priority set to 'high' and log the result.
// Verify if all tasks in the array are marked as completed.
// Sort the tasks in ascending order of their id.
// Extract all tasks with priority set to 'low'.
// Create a new array with only the titles of all tasks.
// Flatten this nested array: [ [1, 2], [3, 4, [5, 6]], 7 ].
// Replace all false values in the completed field with true for all tasks.
// Find the index of the task with id 5.
// Add a high-priority task at the beginning of the array.
// Remove 2 tasks starting from the second position and insert a new task:
// { id: 7, title: 'Task 7', priority: 'low', completed: true }.
// Reverse the order of the tasks in the array.
// Find the sum of all task IDs.
// Return the first task where completed is false.
// Modify the tasks array to add a dueDate field to each task and set it to '2024-12-31'.
// Check if the array contains a task with the title 'Task 10'.
// Filter out tasks that are not completed.
// Log the final state of the tasks array.





//\\  ----> ANSWERS <---- //\\

// let tasks = [
//     { id: 1, title: 'Task 1', priority: 'high', completed: false },
//     { id: 2, title: 'Task 2', priority: 'low', completed: true },
//     { id: 3, title: 'Task 3', priority: 'medium', completed: false },
//     { id: 4, title: 'Task 4', priority: 'high', completed: true },
//     { id: 5, title: 'Task 5', priority: 'low', completed: false },
//   ];

  
// console.log(tasks[3].title);
// tasks.push({ id: 6, title: 'Task 6', priority: 'medium', completed: false });
// tasks.shift();
// console.log(tasks.map((item, i)=> item.priority = 'High' ));
// console.log(tasks.every((item, i)=> item.completed === true));
// tasks.sort((a, b) => a.id - b.id); // Sort tasks by ID in ascending order
// console.log(tasks.filter((item, i)=> item.priority == 'low'));
// console.log(tasks.flat()); 
// console.log(tasks.map((item, i)=> item.completed === true));
// console.log(tasks.at(5));
// let taskTitles = tasks.map(task => task.title);
// console.log(tasks.reverse());
// console.log(tasks.splice(0 , 2, { id: 7, title: 'Task 7', priority: 'low', completed: true }));
// console.log(tasks.reverse());
// console.log(tasks.reduce((accumulator , item)=> accumulator + item.id, 0));
// console.log(tasks.find((item ,i)=> item.completed === false));
// tasks.map(item => item.date = '2024-12-31');
// console.log(tasks.find((item, i)=> item.title == 'Tasks 10'));
// console.log(tasks.filter((item,i)=> item === false));
// console.log(tasks);
