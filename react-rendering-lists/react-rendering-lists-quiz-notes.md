# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When you have a collection of data that you want to show.

- Why is it important for React components to be data-driven?
  So they can be easily reused with new data instead of having to recreate the same thing several times. Easy to change things when the data changes.

- Where in the component code would a list of React components typically be built?
  Inside of the JSX portion of the component.

- What `Array` method is commonly used to create a list of React components?
  The map() array method is used.

- Why do components in a list need to have unique keys?
  To help React identify which data goes with which element. This is helpful in situations where the elements may move around.

- What is the best value to use as a "key" prop when rendering lists?
  The best value for keys is either database id's or generated id's if the data is persistent locally. Its important to not generate ids when rendering or else the keys will constantly change which would defeat the purpose of the keys.

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
