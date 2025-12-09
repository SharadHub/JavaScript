// ***Swapping values inside array***
const colors = ["red", "green", "yellow", "blue", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

const [firstColour, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColour);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);


// ***Extract values from objects***

const person1 = {
    firstName: "Bishal",
    lastName: "Bista",
    age: 23,
    job: "Frontend Developer",
}

const person2 = {
    firstName: "Iron",
    lastName: "Man",
    age: 30,
}

const {firstName, lastName, age, job} = person1;

// const {firstName, lastName, age, job = "Unemployed"} = person2;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ***Destructure in function parameters

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
    
}
// displayPerson(person1);
displayPerson(person2);