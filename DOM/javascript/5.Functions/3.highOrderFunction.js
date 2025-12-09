// function x() {
//     console.log("Namastey");
// }
// function y(x){
//     x();
// }

// DRY principle using higher order function
const sidesOfSquare = [10, 12, 14, 15, 24, 25, 16];

const areaOfSquare = function (sidesOfSquare){
    return sidesOfSquare * sidesOfSquare;
}

const perimeterOfSquare = function (sidesOfSquare){
    return 4 * sidesOfSquare;
}

Array.prototype.calculate = function (logic){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

// map function
console.log(sidesOfSquare.map(areaOfSquare));
// console.log(sidesOfSquare.map(perimeterOfSquare));


console.log("The area of squares are:", sidesOfSquare.calculate(areaOfSquare));
// console.log("The perimeter of squares are:", calculate(sidesOfSquare, perimeterOfSquare));