/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  const temp = queue.dequeue();
  if (temp === undefined) {
    return;
  }
  queue.enqueue(temp);
}

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) {
    return undefined;
  }

  for (let i = index; i > 0; i--) {
    const temp = queue.dequeue();
    if (temp === undefined) {
      return;
    }
    queue.enqueue(temp);
  }

  return queue.dequeue();
}
