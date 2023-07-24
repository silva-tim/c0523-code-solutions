/* eslint-disable @typescript-eslint/no-empty-function */
import Stack from './lib/stack';

export function get2ndFromTop<T>(stack: Stack<T>): T | undefined {
  const temp = stack.pop();
  if (temp === undefined) {
    return undefined;
  }
  if (stack.peek() === undefined) {
    stack.push(temp);
    return undefined;
  }

  const temp2 = stack.peek();
  stack.push(temp);
  return temp2;
}

export function insertUnderTop<T>(stack: Stack<T>, value: T): void {
  const temp = stack.pop();
  if (temp === undefined) {
    return;
  }

  stack.push(value);
  stack.push(temp);
}
