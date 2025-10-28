// Basic Declaration and Update
// Exercise: Declare a var variable called "city" and assign your city.
var city = "Bagmati";
console.log(city)
// Then update it to another city and print both values.
var city = "Harion";
console.log(city)

//Re-declaration
// Exercise: Declare a var variable "fruit" and assign "Apple".
var fruit = "Apple";
// Re-declare it with "Banana" and print the value.
var fruit = "Banana";
console.log(fruit);


// Function Scope
// Exercise: Create a function called showVarScope.
// Inside, declare a var variable "number" and assign 10.
// Print "number" inside and outside the function. Observe the behavior.
function showVarScope(){
    var number = 10;
    console.log(number);

}
showVarScope();
// console.log(number);