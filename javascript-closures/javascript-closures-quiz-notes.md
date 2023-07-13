# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  When a variable is declared it will determine scope.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure allows them to remember variables.

- What values does a closure contain?
  All the variables in the lexical scope of the function.

- When is a closure created?
  Whenever a function is created.

- How can you tell if a function will be created with a closure?
  If there are variables in the lexical scope of the function definition.

- In React, what is one important case where you need to know if a closure was created?
  In useEffect if a closure is created you might not update the variable which could lead to stale closures.

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
