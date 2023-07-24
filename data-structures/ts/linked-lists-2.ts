/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1;
  while (true) {
    if (list.next !== null) {
      count++;
      list = list.next;
    } else {
      return count;
    }
  }
}
export function append<T>(list: LinkedList<T>, value: T): void {
  let running = true;
  while (running) {
    if (list.next === null) {
      list.next = new LinkedList(value);
      running = false;
    } else {
      list = list.next;
    }
  }
}

export function getTail<T>(list: LinkedList<T>): T | null {
  while (true) {
    if (list.next === null) {
      return list.data;
    } else {
      list = list.next;
    }
  }
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  while (true) {
    if (list.data === value) {
      return true;
    } else if (list.next === null) {
      return false;
    } else {
      list = list.next;
    }
  }
}
