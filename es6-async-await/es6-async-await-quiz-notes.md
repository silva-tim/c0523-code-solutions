# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Async is used to create asynchronous functions, await is the keyword to set up the part of the function to be asynchronous.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and await allows you to write code that looks synchronous. Promise.then and Promise.catch are methods. Async and await return a response value and not a promise.

- When do you use `async`?
  At the beginning of a function that you want to have asynchronous capabilities. Might be used for fetching from an api.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await before a promise that you want to wait for. You can't use await outside of async functions. If you use them in synchronous functions you will get an error.

- How do you handle errors with `await`?
  Using try{}catch{} you can easily handle errors for await.

- What do `try`, `catch` and `throw` do? When do you use them?
  Try will run some code and if an exception is thrown then the code in the catch section will run. Throw is to throw a user defined exception and it will halt execution of the current scope. Anytime you are doing error handling.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The promise rejection will be lost and won't be able to be used.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async/await because it makes the most sense to me and is very simple to use.

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
