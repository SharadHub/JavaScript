# Type Coercion in JavaScript

This folder demonstrates implicit type coercion in JavaScript, where the language automatically converts values from one type to another during operations.

## Topics Covered:
- Implicit type coercion during arithmetic and string operations
- How JavaScript automatically converts types in expressions
- Common scenarios where type coercion occurs
- Differences between type coercion and explicit type conversion

## Key Concepts:
- **Implicit Coercion**: Automatic type conversion performed by JavaScript during operations
- When using the `+` operator with a string and a number, JavaScript converts the number to a string
- When using arithmetic operators like `*`, `/`, `-` with strings containing numbers, JavaScript converts the string to a number
- JavaScript tries to make operations "work" by converting types automatically
- Understanding coercion helps predict and avoid unexpected behavior
- The `Number()` function can be used to explicitly convert strings to numbers

## How to Use:
Run the `script.js` file to see examples of how JavaScript automatically converts types during different operations. Notice how the same value can be treated differently depending on the context.