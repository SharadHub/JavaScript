// value type stored in stack
const name = "Sharad";
const age = 23;


// reference stored in heap
const person = {
    name : "sharad",
    age : 23,
}

let newName = name;
newName = "Bishal";

let newPerson = person;
newPerson.name = "Roman";

console.log(name, newName);
console.log(person, newPerson);