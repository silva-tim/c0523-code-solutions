# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  So that we can see what is happening in the code while it is executing.

- What is a "model"?
  A model is a basic representation of the whole document.

- Which "document" is being referred to in the phrase Document Object Model?
  The HTML page.

- What is the word "object" referring to in the phrase Document Object Model?
  The object is referring to the fact that all things on an HTML page are treated as objects including elements, text, and comments.

- What is a DOM Tree?
  The DOM tree is the structure of the HTML document where all things are treated as objects. All things on the HTML page are nodes, any elements with
  children elements are nodes with children/branches.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector();

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll();

- Why might you want to assign the return value of a DOM query to a variable?
  So that you can manipulate the element using JavaScript.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Because in order to access the HTML elements in the JavaScript, the browser needs to parse them first.

- What does `document.querySelector()` take as its argument and what does it return?
  Any valid CSS selector and it returns the first element that matches that css selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Any valid CSS selector and it returns all elements that match that css selector.

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
