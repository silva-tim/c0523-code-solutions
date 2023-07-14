# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create = INSERT | Read = SELECT | Update = UPDATE | Delete = DELETE

- How do you add a row to a SQL table?
  By using the INSERT operation in sql followed by what table, what columns, and then VALUES with the values.

- How do you add multiple rows to a SQL table at once?
  Using a single INSERT operation you can include multiple rows of values in the VALUES clause to add multiple rows at a time.

- How do you update rows in a database table?
  By using the UPDATE operation followed by the table and then SET with the column and value to change to.

- How do you delete rows from a database table?
  By using the DELECT operation followed by FROM (table) and a WHERE indicating what rows to delete.

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  So that you don't delete the entire table.

- How do you accidentally delete or update all rows in a table?
  By not including a WHERE clause.

- How do you get back the modified row without a separate `select` statement?
  By adding a RETURNING clause.

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
