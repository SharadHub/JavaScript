var a = 40;
var b = "Bishal Bista";


let c = 10; // it does not overwrite var a
let d = "Sharad Bista"; // it does not overwrite var b


let age = 23;
console.log(age);

console.log(d)
console.log(c)

var a = 12; // overwrites the var a = 40

age = 22; // let age = 22 will throw an error because it can't be re-declared.
console.log(age);

console.log(a) // prints 12 as value of a
console.log(b)


// Block Scope

// Exercise: Declare let variable "score" = 5 inside a block { }.
// Try to print it outside the block and observe what happens.
{
    let score = 5;
    console.log(score);
}
// console.log(score); cannot call outside because let is block scope.


// Updating Value

// Exercise: Declare let variable "temperature" = 20.
// Update it to 25 and print both old and new values.
{
    let temperature = 20;
    console.log(temperature);
    temperature = 30;
    console.log(temperature);
}


// Loop Scope

// Exercise: Use a for loop with let i from 0 to 4.
// Inside the loop, print i. Also try printing i outside the loop.
for(let i=0; i<=4; i++){
    console.log(i);
}
// console.log(i);  cannot call outside because let is block scope.