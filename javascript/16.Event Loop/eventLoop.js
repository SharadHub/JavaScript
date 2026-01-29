// console.log("start");

// setTimeout(function c(){
//     console.log("callback");
// })

// console.log("end");


// console.log("start");

// document.getElementById("btn")
// .addEventListener("click", function b(){
//     console.log("callback");
// });

// console.log("end");

// fetch() function

console.log("start");

setTimeout(function cT(){
    console.log("callback");
}, 5000);

fetch("https://api.netflix.com")
.then(function cA(){
    console.log("B Netflix");
});

console.log("end");