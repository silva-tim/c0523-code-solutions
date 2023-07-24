export function getTop(stack) {
  return stack.peek();
}

export function addToTop(stack, value) {
  stack.push(value);
}

export function takeTop(stack) {
  return stack.pop();
}

export function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}
