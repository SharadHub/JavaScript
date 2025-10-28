# JavaScript Call Stack

## 📌 What is the Call Stack?
The **call stack** is a stack data structure (LIFO – Last In, First Out) that JavaScript uses to manage function execution.

- At the very **bottom of the stack**, we always have the **Global Execution Context** (created when the program starts).
- Each time a function is invoked, a new **execution context** is created and pushed onto the stack.
- Once the function finishes, its context is popped off the stack.
- This process ensures JavaScript executes functions in the correct order and keeps track of “where it is” in the program.


![Call Stack Output](/Call%20Stack/call-stack-in-console.png)
---