# Stack vs Heap Memory in JavaScript

This folder demonstrates the difference between stack and heap memory allocation in JavaScript and how it affects variable assignment and copying.

## Topics Covered:
- Value types stored in the stack
- Reference types stored in the heap
- How primitive values are copied vs. how reference values are copied
- Implications of stack vs heap storage on variable assignments

## Key Concepts:
- **Stack Memory**: Used for primitive data types (string, number, boolean, undefined, null, symbol, bigint)
  - Values are stored directly in the variable
  - Copying creates a completely separate copy
  - Changes to the copy don't affect the original
- **Heap Memory**: Used for reference types (objects, arrays, functions)
  - Variables store references to the actual data location
  - Copying creates a new reference to the same data
  - Changes to the copy affect the original (and vice versa)
- Understanding this concept is crucial for avoiding unexpected behavior when working with objects and arrays

## How to Use:
Run the `script.js` file to see the difference between copying primitive values (which creates independent copies) versus copying object references (which point to the same object in memory).