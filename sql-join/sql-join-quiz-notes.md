# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A reference to a primary key in another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  By using the JOIN key and if the foreign key matches the exact name of the primary key than you use USING to specify what column to compare. If they don't have the same name you can use ON "foreignKey" = "primaryKey".

- How do you temporarily rename columns or tables in a SQL statement?
  By using the AS keyword inbetween the original name and the alias.

- How do you create a one-to-many relationship between two tables?
  Store a list of foreign keys in one table that can be used more than once and that references primary keys in another table.

- How do you create a many-to-many relationship between two tables?
  By introducing an third "join" table that contains a foreign key to one table and another foreign key to the other table.

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
