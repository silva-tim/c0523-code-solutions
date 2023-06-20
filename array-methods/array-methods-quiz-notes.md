# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?
    It cycles through every element in the array and executes a function on each element.

  - What should the callback function do?
    It should execute its code on each element in the array changing the original array.

  - What is `Array.forEach` useful for?
    If every element in an array needs to have code executed on it and you don't need to keep the original array. Or if the code in the callback function won't change the variable. (Example: console log)

- `Array.map`:

  - What does `Array.map` do?
    It cycles through every element in an array and executes a function on each element. It then adds the result to a new array.

  - What should the callback function return?
    A new transformed version of the original variable.

  - What is `Array.map` useful for?
    Because it doesn't affect the original array, array map is useful for cases where you need to execute specific code on every element in an array and also need to keep the original array intact.

- `Array.filter`:

  - What does `Array.filter` do?
    It cycles through every element in an array and checks to see if it passes a function test. If the element passes the test provided in the callback function then the element is added to a new array.

  - What should the callback function return?
    A true or false statement indicating whether or not the variable passed the test.

  - What is `Array.filter` useful for?
    It is useful for finding all elements in an array that match a specific requirement.

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
