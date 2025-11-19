// Spread

const arr = [1, 2, 3];
console.log(...arr);

const str = 'hello';
console.log([...str]);

// Rest

const func = (...data) => {
    console.log(data);
    
};
func(1, 2, 3, 4);

const data = {
    name: "Bishal",
    password: 1234,
    date: "2024-1-24",
};
const {name, ...rest} = data;
console.log(rest);

