const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log('Even Numbers:', evenNumbers);

const namesWithNoD = names.filter(
  (element) => element.toLowerCase().includes('d') === false
);
console.log('Names with no D:', namesWithNoD);
