# JavaScript: Variables & Hoisting

Today I learned about **variables** and **hoisting** in JavaScript.

## Hoisting

Hoisting is a behavior in JavaScript where **variable and function declarations are moved to the top of their scope during the compilation phase**, allowing them to be accessed before their actual declaration in the code.

### Memory Allocation

- **Variables**: During hoisting, memory is allocated, and variables are initialized with the value `undefined`.  
  ```javascript
  console.log(a); // undefined
  var a = 10;

- **Functions**: The entire function code is stored in memory, so function declarations can be called before they appear in the code.
```javascript
        greet(); // "Hello!"
        function greet() {
            console.log("Hello!");
        }