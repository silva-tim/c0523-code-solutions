const books = [
  {
    isbn: '9780060933272',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '9781573226127',
    title: 'Lord of the Flies',
    author: 'William Golding',
  },
  {
    isbn: '9781405855365',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const jsonString = JSON.stringify(books);

console.log('JSON String:', jsonString);
console.log('typeof JSON String:', typeof jsonString);

const newJSON = '{"id": 202526, "name": "Tim Silva"}';

console.log('newJSON:', newJSON);
console.log('typeof newJSON:', typeof newJSON);

const parsedJSON = JSON.parse(newJSON);
console.log('parsedJSON:', parsedJSON);
console.log('typeof parsedJSON:', typeof parsedJSON);
