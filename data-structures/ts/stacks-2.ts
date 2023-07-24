import Stack from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  let running = true;
  while (running) {
    if (stack.pop() !== undefined) {
      count++;
    } else {
      running = false;
    }
  }
  return count;
}

export function maxValue(stack: Stack<number>): number | undefined {
  let highest = -Infinity;
  while (true) {
    const check = stack.pop();
    if (check === undefined) {
      return highest;
    } else if (check > highest) {
      highest = check;
    }
  }
}
