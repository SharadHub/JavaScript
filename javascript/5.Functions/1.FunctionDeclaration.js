function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Bishal Bista"));

// Converting Fahrenheit to Celcius

function fahrenheitToCelcius(Fahrenheit){
    return (Fahrenheit -32) * 5/9;
}
console.log(fahrenheitToCelcius(100))

// Shopping Discount Calculator

function calculateDiscount(price, discountPercent){
    if (discountPercent < 0 || discountPercent > 100){
        return "Invalid Discount Percentage";
    }
    return price - (price * (discountPercent/100));
}
console.log(calculateDiscount(4500, 10));

// Email Validator

function emailChecker(email){
    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }
            const  atPosition = email.indexOf("@");
            const dotPosition = email.lastIndexOf(".");

            return dotPosition > atPosition;
}
console.log(emailChecker("bishalbista737@gmail.com"));

// Word Counter

function countWords(sentence){
    if (typeof sentence != "string"){
        return 0;
    }
    const words = sentence.trim().split(/\s+/);
    return words.length;
}
console.log(countWords("I am learning Javascript"));

// Tip Calculator

function calculateTip(billAmount, tipPercent){
    const tipAmount = billAmount * tipPercent/100;
    return billAmount + tipAmount;
}
console.log(calculateTip(3000, 5));