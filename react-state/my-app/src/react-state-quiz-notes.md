# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that use the use keyword and are special functions that allow React to do unique things.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  They should always be at the top of your component and should only exist in components or other hooks.

- What is the purpose of state in React?
  To 'save' a particular value so that it won't be constantly changed with rerendering.

- Why can't we just maintain state in a local variable?
  Because it will keep getting rerendered and therefore reset to its default value.

- What two actions happen when you call a `state setter` function?
  The state update is queued and the state is updated.

- When does the local `state variable` get updated with the new value?
  After the rest of the function has been completed.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:
.

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
