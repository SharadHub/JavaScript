const cart = ["pants", "t-shirt", "shoes"];

const promise = createOrder(cart); // no longer take callback function

// Promise Chaining
promise.then(function(orderId){ // promise
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (updateWalletBalance){
    return updateWalletBalance()
});

// we can write above code also as:
promise
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => paymentInfo(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));


























// const GITHUB_API = "https://api.github.com/users/SharadHub";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function(data){
//     console.log(data);
// });
