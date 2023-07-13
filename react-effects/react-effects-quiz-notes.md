# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  During the commit phase of the initial render of the component.

- What is a React Effect?
  An effect is a hook in React that allows third party events to happen when a component is rendered(or rerendered).

- When should you use an Effect and when should you not use an Effect?
  You should use an effect when you want to 'step out' of your React code to do some third party event based on an update to the React code. They should not be used when they are just affecting some state based on some other state within the React code.

- When do Effects run?
  Effects run after the committing part of the render/rerender cycle where the DOM is actually updated.

- What function is used to declare an Effect?
  The useEffect function from React.

- What are Effect dependencies and how do you declare them?
  Dependencies are specific variables that determine when effect should be updated. You declare them by putting them in an array after the callback function.

- Why would you want to clean up from an Effect?
  So that you ensure your third party connections/events are controlled to be in the state you want them in before the component unmounts. Otherwise the third party would never get the information it needs when the component is unmounted.

- How do you clean up from an Effect?
  By adding a return statement with a function that does the cleanup.

- When does the cleanup function run?
  Every time before effect runs again and right before the component is unmounted.

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
