# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Using the function keyword and the name starts with a capital letter. The function should return JSX matching what you want your component to be.

- How do you use JSX in a React component?
  You write it similar to HTML and it creates the actual HTML that matches what you want in your component.

- How do you declare the props a React component needs?
  You declare them in the parameters part of the component definition.

- How do you pass props to a React component?
  You pass them by adding the name of the prop and the value to the component in the parent.

- How do you include JavaScript expressions in JSX?
  You can 'break into' JavaScript by adding curly braces.

- What are React hooks and what are the three "Rules of Hooks"?
  React hooks are functions that start with use and allow the use of several React features without creating classes. The rules are: always define hooks at the top of your component with the use keyword, only define hooks in components or other hooks and hooks cannot be conditional so they must always run.

- How do you manage state in a React component?
  By using the use state hook to set and update the value of state.

- How do you handle events in React?
  You can either create the event handler in the component or in the parent and pass the function down as a prop.

- How do you let a parent component know that an event happened?
  By passing the event into the component as a prop.

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
