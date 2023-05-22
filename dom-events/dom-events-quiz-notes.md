# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  So we can watch what is happening in the code. Use it for testing and debugging.

- What is the purpose of events and event handling?
  To execute specific code/functions when certain events occur. Gives functionality to elements.

- Are all possible parameters required to use a JavaScript method or function?
  No they are not all required.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The .addEventListener method allows functionality for events.

- What is a callback function?
  A function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  The event object is passed into the callback.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The element which the event is targeting. If I wasn't sure I could look up the question using MDN or read through previous documentation.

- What is the difference between these two snippets of code?
  `js
  element.addEventListener('click', handleClick)
  `
  `js
  element.addEventListener('click', handleClick())
  `
  The first one will work as intended and the second one will execute the function handleClick() when it is read instead of when the event occurs.

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
