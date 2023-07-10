# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware are functions that have access to the request object, the response object, and the next middleware function in the request-response cycle.

- What is Express middleware useful for?
  It is useful for handling HTTP requests because it has access to the actual request and the response objects and can change them.

- How do you mount a middleware with an Express application?
  By using the app.use() and app.method() methods you can mount a middleware to an Express application.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  It passes the req and res objects to the middleware so that it can manipulate the requests/responses.

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
