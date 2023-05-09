function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet("Tim"):', greet('Tim'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  "getFirstName({firstName: 'Tim', lastName: 'Silva'}):",
  getFirstName({ firstName: 'Tim', lastName: 'Silva' })
);

function getLastElement(array) {
  return array.at(-1);
}

console.log(
  "getLastElement(['propane', 'and', 'propane', 'accessories']):",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
