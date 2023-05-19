# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  Static positioning.

- How does setting `position: relative` on an element affect document flow?
  It won't affect the document flow.

- How does setting `position: relative` on an element affect where it appears on the page?
  It starts from its normal position as if it were static and using the offsets we can move it relative to where it started.

- How does setting `position: absolute` on an element affect document flow?
  It no longer exists on the same layer as the document flow, it can overlap other elements.

- How does setting `position: absolute` on an element affect where it appears on the page?
  It starts in its highest/most left part of it's container. Using offsets we can move it relative to the container element.

- How do you constrain an absolutely positioned element to a containing block?
  You must set a position property that isn't static to the containing block, otherwise it will behave as though the main container
  is the containing block.

- What are the four box offset properties?
  Top, left, right, bottom.

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
