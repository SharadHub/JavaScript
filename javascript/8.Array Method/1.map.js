// Double the elements of array 

const arr = [1, 2, 3, 4,5];
const doubleNumber = arr.map(a => a * 2);
console.log(doubleNumber);

// String elements of array into uppercase

const names = ["Bishal", "Aayush", "Ankit"];
const name = names.map(u => u.toUpperCase());
console.log(name);

// User List

function userList(){
    const users = [
        {id: 1, name: "Bishal Bista", age: 23},
        {id: 2, name: "Basanta Bista", age: 25},
        {id: 3, name: "Bikash Bista", age: 24}
    ]
    return users.map(user => ({
        id: user.id,
        Name: user.name,
        Age: user.age
    }));
}
console.log(userList());

// Displaying Items

function FruitList(){
    const fruits = [
        "Apple", "Banana", "Grape"
    ];
    return fruits.map((fruit, i) =>{
        return fruit;
    });
}
console.log(FruitList());

// Exercise 1: Goal: Create a navigation bar using map()

// Given:
const todos = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Master Array Methods", done: false },
  { id: 3, text: "Build Portfolio", done: false }
];

function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ color: todo.done ? "green" : "red" }}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
