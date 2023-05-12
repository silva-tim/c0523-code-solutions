/* exported takeRight */
function takeRight(array, count) {
  const arr = [];

  if (count >= array.length) {
    return array;
  }

  for (let i = array.length - count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
