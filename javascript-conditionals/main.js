/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}
console.log('isUnderFive(2):', isUnderFive(2));
console.log('isUnderFive(6):', isUnderFive(6));

function isEven(number) {
  if (number % 2) {
    return false;
  }
  return true;
}
console.log('isEven(1):', isEven(1));
console.log('isEven(2)', isEven(2));

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  }
  return false;
}
console.log("startsWithJ('Tim'):", startsWithJ('Tim'));
console.log("startsWithJ('JavaScript'):", startsWithJ('JavaScript'));

const person1 = { name: 'Tim', age: 21 };
const person2 = { name: 'Joe', age: 13 };

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
console.log('isOldEnoughToDrink of 21 year old:', isOldEnoughToDrink(person1));
console.log('isOldEnoughToDrink of 13 year old:', isOldEnoughToDrink(person2));

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
console.log('isOldEnoughToDrive of 21 year old:', isOldEnoughToDrive(person1));
console.log('isOldEnoughToDrive of 13 year old:', isOldEnoughToDrive(person2));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
console.log(
  'isOldEnoughToDrinkAndDrive of 21 year old:',
  isOldEnoughToDrinkAndDrive(person1)
);
console.log(
  'isOldEnoughToDrinkAndDrive of 13 year old:',
  isOldEnoughToDrinkAndDrive(person2)
);

function categorizeAcidity(pH) {
  if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else return 'invalid pH level';
}

console.log('categorizeAcidity(2):', categorizeAcidity(2));
console.log('categorizeAcidity(7):', categorizeAcidity(7));
console.log('categorizeAcidity(9):', categorizeAcidity(9));
console.log('categorizeAcidiy(200):', categorizeAcidity(200));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log("introduceWarnerBro('yakko'):", introduceWarnerBro('yakko'));
console.log("introduceWarnerBro('dot'):", introduceWarnerBro('dot'));
console.log("introduceWarnerBro('Tim'):", introduceWarnerBro('Tim'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Skyfall';
    case 'comedy':
      return '21 Jump Street';
    case 'horror':
      return 'Midsommar';
    case 'drama':
      return 'Interstellar';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Passengers';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log("recommendMovie('action'):", recommendMovie('action'));
console.log("recommendMovie('mystery'):", recommendMovie('mystery'));
