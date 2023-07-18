# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  By putting the fetch call inside of a useEffect hook we are able to load in the data for a component. Putting the fetch inside of useEffect allows us to make calls from events on a component like state changing.

- What browser function can be used to make HTTP requests to a server in React?
  The fetch function can be used in React to make HTTP requests to a server.

- How do you use `useEffect` to load component data just once when the component mounts?
  By not adding anything to the dependency array the useEffect hook will only ever run once when the component mounts.

- How do you use `useEffect` to load component data every time the data key changes?
  By adding the data key into the useEffect dependency array this will cause a new fetch call each time the data key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Using a data management library like React Query or Vercel SWR.

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
