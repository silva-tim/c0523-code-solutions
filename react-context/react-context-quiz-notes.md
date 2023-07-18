# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  To easily pass data from a parent component to one or more child elements without having to have the data travel the whole component tree.

- What values can be stored in context?
  Any values.

- How do you create context and make it available to the components?
  You create it by using the createContext function and then to use it you need to 'subscribe' to it by using useContext. The values it will reference are defined up the component tree in a <Context value={x}> that wraps the component using useContext.

- How do you access the context values?
  By using useContext.

- When would you use context? (in addition to the best answer: "rarely")
  For values that will be needed in multiple components are various levels of the component tree.

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
