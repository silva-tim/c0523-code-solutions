function ExampleConstructor() {}

console.log(
  'value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);
console.log(
  'typeof ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const exampleVariable = new ExampleConstructor();
console.log('value of exampleVariable:', exampleVariable);

const isInstance = exampleVariable instanceof ExampleConstructor;
console.log('value of isInstance:', isInstance);
