// var, let and const.

let firstName = "Sharad";
let lastName = "Bista";

console.log(firstName, lastName, age)

var age = 30;
//cannot access 'age' before initialization. if we use let age = 30

// re-assigning variables
age = 40;

console.log(age);

//in array
const arr = [1,2,3,4];
arr.push(5);
console.log(arr);

// in object

const person = {
    name:"Bishal",
}

console.log(person)

person.name = "Sharad";
person.email = "bishalbista@gmail.com";
console.log(person)

// declaring multiple variables

let name, contact, rollNo;

name = "Bishal";
contact = 9800000000;
rollNo = 21;

console.log(name, contact, rollNo)
