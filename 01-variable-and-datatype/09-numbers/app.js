let x;

const num = 5;

// Convert number to string
x = num.toString();

// Get the length of the toString function
x = num.toString.length;

// Format number to specified decimal places
x = num.toFixed(2);

// Format number to specified precision
x = num.toPrecision(2);

// Format number in exponential notation
x = num.toExponential(2);

// Format number as a locale-specific string
x = num.toLocaleString('ar-EG');

// Return the primitive number value
x = num.valueOf();

// Largest representable positive number
x = Number.MAX_VALUE;

// Smallest representable positive number
x = Number.MIN_VALUE;

// Output the result
console.log(x);