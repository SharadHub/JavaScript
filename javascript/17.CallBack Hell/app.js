// console.log("Hello World");

// setTimeout(function(){
//     console.log("I am learning JavaScript");
// },5000);

// const cart = ["shoes", "pants", "t-shirt"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

const cart = ["shoes", "pants", "t-shirt"];

api.createOrder(cart, function () {
  api.proceedToPayment()
})
