const num1 = 3;
const num2 = 5;
const num3 = 93;
const maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

const heroes = ['Batman', 'Superman', 'Ironman', 'Captain America'];
let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

const library = [
  { title: "Harry Potter and The Sorcerer's Stone", author: 'J.K. Rowling' },
  { title: 'Of Mice and Men', author: 'John Steinbeck' },
  { title: 'Percy Jackson and the Lightning Thief', author: 'Rick Riordan' },
];
const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

const fullName = 'Tim Silva';
const firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
