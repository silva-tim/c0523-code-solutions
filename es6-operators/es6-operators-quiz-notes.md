# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are operators that take two boolean operands and return one of the operands based on their truthyness/falsyness. They can be used outside of if statements to test the truthyness of variables.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  A short-circuit evaluation is when the operator gets a truthy or falsy value that ends the comparison (short circuiting it) and returns the original value of the operand that caused the short-circuit. In && statements its the first 'falsy' value and in || statements its the first 'truthy' statement.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It is an operator that returns the right hand operand if the first operand is undefined or null. Otherwise it will return the first operand. It differs from the or operator because it doesn't consider 'empty' values to be 'falsy' and only considers null or undefined as 'falsy' values.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator is an operator that takes three operands, a condition and then two expressions, one that will execute if the condition is 'truthy' and another that will execute if the condition is 'falsy'. Its different because it is an expression and if/else is a statement.

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining operator is an operator that will either act as a normal chaining operator or if the object/function that called this is undefined or null then it will short-circuit and return undefined. It would be used if there is a possibilty for the calling object/function to be undefined when the function is called. This will prevent an error and instead just return undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread syntax is a syntax operator that allows iterables to be expanded in a place where zero or more elements are expected. You can use it with arrays and objects to take an existing array/object and add all the parts of the array/object into a new array/object and 'spread' them out(as opposed to having a nested array/object).

- What data types can be spread into an array? Into an object?
  Only iterables can be spread into an array or object.

- How does spread syntax differ from rest syntax?
  Spread syntax takes iterables and 'spreads' their properties/values effectively expanding the iterable whereas rest is the opposite in that it takes several arguments and condenses them down into an iterable like an array or object.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
