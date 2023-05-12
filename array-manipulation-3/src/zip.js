/* exported zip */
function zip(first, second) {
  const zippedArray = [];

  for (let i = 0; i < first.length && i < second.length; i++) {
    const tempArray = [];
    tempArray.push(first[i], second[i]);
    zippedArray.push(tempArray);
  }
  return zippedArray;
}
