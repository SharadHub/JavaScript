let x;
let a;

x = 20 + '20'; // js automatically changes number 20 to string 20

x = 20 + Number('20'); // chnage into number
console.log(x, typeof x);


a = 5 * '5'; // js changes string five to number 5
console.log(a, typeof a);