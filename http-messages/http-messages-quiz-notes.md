# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A service/resource requester.

- What is a server?
  A service/resource provider.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  It uses the GET method of HTTP to get the contents of the website.

- What three things are on the start-line of an HTTP **request** message?
  The HTTP method, the request target, and the HTTP version(protocol version).

- What three things are on the start-line of an HTTP **response** message?
  The protocol version(HTTP version), a status code indicating the success/failure of a request(ex. 404), and a purely informational text to explain the status code(ex. Not Found).

- What are HTTP headers?
  Additional parts of HTTP requests/responses that include context or metadata to the message such as preferred media formats, returned media formats etc.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  Official documentation on MDN, HTTPie, or other trustworthy sources.

- Is a body required for a valid HTTP request or response message?
  No it is not required in order to be a valid message, often a GET method will not include a body.

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
