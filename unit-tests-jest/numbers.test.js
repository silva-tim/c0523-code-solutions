import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a formatted dollar amount', () => {
    const amount = 123.112;
    const result = toDollars(amount);
    expect(result).toEqual('$123.11');
  });
});

describe('divideBy', () => {
  it('returns array of divided numbers', () => {
    const numbers = [2, 4, 5, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 2.5, 5]);
  });
});

describe('multiplyBy', () => {
  it('returns object of multiplied numbers', () => {
    const obj = { a: 2.5, b: 2, c: 0, d: 'hello', e: false };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 5, b: 4, c: 0, d: 'hello', e: false });
  });
});
