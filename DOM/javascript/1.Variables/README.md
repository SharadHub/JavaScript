# JavaScript: Variables – var, let, const

In JavaScript, variables can be declared using **`var`**, **`let`**, or **`const`**. Understanding their differences is key to writing clean, bug-free code.

---

## 1️⃣ `var`

- Function-scoped variable.  
- Can be **re-declared** and **overwritten** within the same scope.  
- Existed before ES6 and is still valid in modern JavaScript, but its use is **discouraged** because it can cause unexpected bugs.  
- Mainly used for **function-scoped logic**, though modern developers rarely use it.

---

## 2️⃣ `let`

- Block-scoped variable (only accessible within the block it was declared).
- Can be updated but cannot be re-declared in the same scope.
- Preferred for variables whose values change over time.
- Ideal for loops, conditions, or any block-scoped logic.

---

## 3️⃣ `const`

- Block-scoped variable.
- Cannot be updated or re-declared.
- Must be initialized at the time of declaration.
- For objects/arrays: the reference cannot change, but the properties/elements can be modified.

---