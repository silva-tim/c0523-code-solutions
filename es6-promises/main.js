import takeAChance from './take-a-chance.js';

const promise = takeAChance('Tim');
promise.then((value) => console.log(value));
promise.catch((error) => console.log(error.message));
