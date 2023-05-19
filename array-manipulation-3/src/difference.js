/* exported difference */
function difference(first, second) {
  const diffArr = [];

  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffArr.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      diffArr.push(second[i]);
    }
  }

  return diffArr;
}
