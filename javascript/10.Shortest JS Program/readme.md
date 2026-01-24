# Shortest JavaScript Program

An empty JavaScript file also creates the Global Execution Context.

I got to know that while running empty js file, "window"(in browsers) and "this" get initialized by JavaScript engine.
In browser non-module scripts, this at the global level points to window.
Hence:
```
window === this //true

Global Space is any code in the JavaScript which is not inside of any functions.