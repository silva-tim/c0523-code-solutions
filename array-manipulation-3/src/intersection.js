/* exported intersection */
function intersection(first, second) {
  const uniqueBothArray = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i]) && !uniqueBothArray.includes(first[i])) {
      uniqueBothArray.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i]) && !uniqueBothArray.includes(second[i])) {
      uniqueBothArray.push(second[i]);
    }
  }
  return uniqueBothArray;
}
