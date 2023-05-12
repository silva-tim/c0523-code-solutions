/* exported unique */
function unique(array) {
  const uniArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniArr.includes(array[i])) {
      uniArr.push(array[i]);
    }
  }
  return uniArr;
}
