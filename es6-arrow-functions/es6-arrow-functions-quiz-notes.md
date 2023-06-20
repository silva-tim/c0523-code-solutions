# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (parameters) => {code};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It will not require a return statement.

- When using _concise body syntax_, how do you return an object literal?
  You wrap the object literal/curly brackets in parenthesis otherwise the JavaScript engine won't be able to distinguish the object from a code block.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42 is the arrow function.

  - How many arguments does the arrow function take?
    It takes no arguments.

  - What value does it return?
    It returns the value 42.

  - How many arguments are passed to the function `foo`?
    One argument is passed to the function `foo`.

  - What type of argument is passed to the function `foo`?
    A callback arrow function is the type of argument passed to `foo`.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    The arrow function is (y) => {console.log(`4y = ${4 * y}`)}

  - How many arguments does the arrow function take?
    It takes one argument.

  - What value does it return?
    It doesn't return any value.

  - How many arguments are passed to the function `bar`?
    One argument is passed to the function `bar`.

  - What type of argument is passed to the function `bar`?
    A callback arrow function is the type of argument passed to the function `bar`.

  - When does the arrow function's code get executed?
    When bar is called.

- How does the value of `this` differ between standard functions and arrow functions?
  The `this` value for a standard function is defined by itself but in an arrow function the `this` value is defined by the context in which the arrow function is in.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
