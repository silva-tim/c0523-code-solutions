# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The element that the event actually occured on.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because the event 'bubbles' up the chain of parent elements.

- What DOM element property tells you what type of element it is?
  The element.tagName property.

- What does the `element.closest()` method take as its argument and what does it return?
  The argument is any valid CSS selector and it returns the first ancestor element that matches the selector (or itself if itself matches the selector).

- How can you remove an element from the DOM?
  By using the element.remove() method on the element you want to remove.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You could add the event listener onto the parent element or a containing ancestor element so that every new clickable DOM element added would automatically have the event listener on it by leveraging the bubbling aspect of the DOM.

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
