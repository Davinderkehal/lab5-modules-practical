// app.js
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Multiply: ', multiply(4, 5));  // Test the default export
addAndLogUpper(10,20);



console.log("Final");


console.log("Max: ", findMax([1213, 223, 3421, 44241, 51]));      
console.log("Reverse: ", reverseArray([11, 12, 13]));   
addAndLogUpper(10, 20);                                 

const array = [100, 200, 300, 400, 500];
const maxValue = findMax(array);
const multiplied = maxValue * 10;
console.log('Max multiplied by 10: ', toUpperCase(multiplied.toString())); 