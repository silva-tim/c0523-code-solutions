/* exported tail */
function tail(array) {
  const newArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i + 1];
  }
  return newArray;
}
