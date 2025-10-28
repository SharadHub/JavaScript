// Arrow function

const add = (a, b) => a + b;
console.log(add(2, 3));

// Square function in arrow method

const SQUARE = x => x*x;
console.log(SQUARE(4));


// Arrow function to calculate power with two parameters

const power = (base, exponent) => base**exponent;
console.log(power(2,3))

// to check if the number is even or not

const isEven = (a) => a % 2 === 0;
console.log(isEven(9));

// Return the largest number

const maxOfThree = (a, b, c) => (a > b? (a > c? a : c) : (b > c? b : c));
console.log(maxOfThree(30,89,45));

// 1. Write an arrow function sayHello that returns the string "Hello, World!".
const sayHello = () => `Hello, World!`;

// 2. Write an arrow function double that takes one number and returns twice its value.
const double = (a) => 2*a;
console.log(double(16));

//3. Write an arrow function subtract that takes two numbers and returns their difference.
const subtract = (j, k) => (j - k);
console.log(subtract(45, 35));

//4. Write an arrow function average that takes two numbers and returns their average.
const average = (e, f) => ((e + f)/2);
console.log(average(4, 5));

//5. Write an arrow function isPositive that returns true if a number is greater than zero, else false.
const isPositive = (i) => i > 0;
console.log(isPositive(-9));

//6. Write an arrow function minOfTwo that takes two numbers and returns the smaller one.
const minOfTwo = (p, q) => (p < q? p : q);
console.log(minOfTwo(23,24));

//7. Write an arrow function maxOfFour that takes four numbers and returns the largest using nested ternaries
const maxOfFour = (m, n, o, p) => (m > n? (m > o? (m > p? m : p) : (o > p? o : p)) : (n > o? (n > p? n : p) : (o > p? o : p)));
console.log(maxOfFour(99,999,456,345));

//8. Write an arrow function isLeapYear that checks whether a given year is a leap year.
// Hint: A leap year is divisible by 4, but not 100 unless also divisible by 400.
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeapYear(2024));

//9. Write an arrow function sumArray that takes an array of numbers and returns the total sum.
// Example: sumArray([1, 2, 3, 4]) → 10.
array = [22,18,20];
const sumArray = array.reduce((total, num) => total + num, 0);
console.log(sumArray);

//10. Write an arrow function filterEvens that takes an array of numbers and returns a new array containing only the even numbers.
// Example: filterEvens([1, 2, 3, 4, 5, 6]) → [2, 4, 6].

array2 = [12,13,14,15,17,18,19,10,16];
const filterEvens = array2.filter((even) => even%2===0);
console.log(filterEvens);