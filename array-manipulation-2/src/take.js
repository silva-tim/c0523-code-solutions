/* exported take */
function take(array, count) {
  const array2 = [];

  for (let i = 0; i < count && i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
}
