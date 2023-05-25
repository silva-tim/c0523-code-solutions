# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The element in which the event occurred on.

- What is the affect of setting an element to `display: none`?
  It hides the element from being seen.

- What does the `element.matches()` method take as an argument and what does it return?
  It takes any valid CSS selector as its argument and it returns true or false if the element its applied to matches the argument.

- How can you retrieve the value of an element's attribute?
  By using the element.getAttribute('attribute') method.

- At what steps of the solution would it be helpful to log things to the console?
  Inside the conditional statements/loops to see if the parts of our code we expect to run given certain circumstances actually run during those circumstances.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  I would have to query for the new tab and setup a new event listener to call the function to switch pages.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  I would have to query for each individual page to check the event.target against each and see which pages to turn off / on.

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
