// Constant Declaration

// Exercise: Declare const PI = 3.14.
// Try to update it to 3.1415 and observe the error.
const pi = 3.14;
// pi = 3.1415; // cannot re declare const variables


// Const Object

// Exercise: Declare const person = {name: "Alice"}.
// Change the name property to "Bob" and print person.
const person = {name: "Alice"};
person.name = "Bob"; // parameters can be modified
console.log(person)


// Const Array

// Exercise: Declare const numbers = [1,2,3].
// Add 4 to the array and print it.
// Try reassigning numbers = [5,6,7] and observe the error.
const numbers = [1,2,3];
numbers.push(4);
console.log(numbers)