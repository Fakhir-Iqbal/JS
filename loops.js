//\\  ----> Loops <---- //\\

/* 


//\\  ----> USECASE <---- //\\

Loops in JavaScript are like a way to repeat actions automatically. They let you execute the same code multiple
times as long as a certain condition is met. This is really useful for handling tasks like going through a list
of numbers, checking each element of an array, or performing the same operation on a group of objects. For 
example, if you need to add up all numbers in an array, or find a specific value, loops let you do it quickly 
and efficiently without writing the same code over and over.



//\\  ----> METHODS <---- //\\


    1 => for LOOP        =====>     when you know how many times you need to repeat a certain block of code. It takes three statements.
    2 => while LOOP      =====>     when you don’t know how many times you need to repeat a block of code, but you know the condition that will end the loop.
    3 => do-while LOOP   =====>     similar to a while loop, but the block of code is executed at least once, even if the condition is false.
    4 => for-in LOOP     =====>     Iterating over object properties
    5 => for-of LOOP     =====>   	Iterating over iterable objects like arrays, strings, sets, or maps
    6 => forEach         =====>     forEach loop is a method on arrays that executes a function for each element in the array.
    7 => map             =====>	    map is a method on arrays that creates a new array by executing a function on each element in the array.



//\\  ----> EXAPMLES <---- //\\



let i = 0; 

for ( i ; i <= 30; i++) {
    console.log(i);
}
while (i <= 30) {
    console.log(i);
    i++;
}
do {
    console.log(i);
    i++;
} while (i <= 30);

const numbers = [1, 2, 3];
numbers.forEach((num) => {    //when you just want to iterate over an array and perform some action
    console.log(num * 2); 
});

const number = [1, 2, 3];
const doubled = number.map((num) => num * 2); // when you want to transform an array into a new array. It's typically used when you're taking one array and converting it into another with some kind of modification.
console.log(doubled); // [2, 4, 6] 



*/