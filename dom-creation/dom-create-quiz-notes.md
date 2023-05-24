# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No it doesn't insert it into the page it just creates it.

- How do you add an element as a child to another element?
  By using the .appendChild() method.

- What do you pass as the arguments to the `element.setAttribute()` method?
  The name of the attribute and the value you want to set the attribute to.

- What steps do you need to take in order to insert a new element into the page?
  You first have to create the element using the document.createElement method. Then you need to insert it using an insert method like .append();

- What is the `textContent` property of an element object for?
  It is used for getting and setting all text inside of an element.

- Name two ways to set the `class` attribute of a DOM element.
  You can use the .setAttribute('class', ...) method or the .className/.classList.add properties.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  The first advantage is you can create the same thing multiple times using different values for things that are going to have the same structure but different content. The second advantage is you can create things as you need them instead of having all elements of the HTML exist even if some of those elements won't be needed until a later point.

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
