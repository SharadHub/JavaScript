// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000); // this prints value of i after 2 sec
// }
// x();

// printing numbers in different timeline using var
function setting() {
  for (var x = 1; x <= 5; x++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(x);
  }
}
setting();

// printing numbers in different timeline using var
// function set() {
//   for (let j = 100; j <= 500; j++) {
//     setTimeout(function () {
//       console.log(j);
//     }, j * 100);
//   }
// }
// set();
