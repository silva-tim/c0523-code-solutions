/* exported chunk */
function chunk(array, size) {
  const arrayOfArrays = [];
  let i = 0;

  while (i < array.length) {
    const subArray = [];

    if (array.length - i >= size) {
      for (let j = 0; j < size; j++) {
        subArray.push(array[i]);
        i++;
      }
    } else {
      for (i; i < array.length; i++) {
        subArray.push(array[i]);
      }
    }

    arrayOfArrays.push(subArray);
  }
  return arrayOfArrays;
}
