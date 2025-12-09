// const colors = ['red', 'blue'];

// const firstColor = colors[0];
// const secondColor = colors[1];
// const thirdColor = colors[2];

// const [firstColor, secondColor, thirdColor = "green"] = colors;

console.log(firstColor, secondColor, thirdColor);
console.log(colors);
colors.forEach(color => console.log(color));


// let a = 5;
// let b = 10;

// [a, b] = [10, 5];
console.log(a, b)


// nested array
const matrix = [[1, 2], [3, 4]];

// const [[a, b], [c, d]] = matrix;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const [a, , c] = [1, 2, 3];
console.log(a, c);

const colors = ['red', 'blue', 'green', 'yellow'];

const [first, , , fourth] = colors;

console.log(first, fourth);
