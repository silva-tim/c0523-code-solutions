const student = {
  firstName: 'Tim',
  lastName: 'Silva',
  age: 21,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Admin at Financial Advisory Firm';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

const vehicle = {
  make: 'BMW',
  model: 'M4',
  year: '2023',
};

vehicle['color'] = 'Green';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Oscar',
  type: 'Dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
