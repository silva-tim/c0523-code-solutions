# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  It is a global object that references and has various properties for the currently executing process.

- How do you access the `process` object in a Node.js program?
  By referencing the variable process as you would with any other JavaScript object.

- What is the data type of `process.argv` in Node.js?
  It is an array.

- How do you access the command line arguments in a Node.js program?
  By accessing them at process.argv[i]. Argv is an array with the first two indeces being the process.execPath and the path to the file that has the code for the current process. All the remaining indeces will be command line arguments that the user can add.

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
