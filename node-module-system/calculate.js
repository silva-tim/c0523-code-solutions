import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

let result;
const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    result = add(firstNumber, secondNumber);
    break;
  case 'minus':
    result = subtract(firstNumber, secondNumber);
    break;
  case 'times':
    result = multiply(firstNumber, secondNumber);
    break;
  case 'over':
    result = divide(firstNumber, secondNumber);
    break;
}

console.log('result:', result);
