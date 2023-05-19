/* exported union */
function union(first, second) {
  const combinedUniqueArray = [];

  for (let i = 0; i < first.length; i++) {
    if (!combinedUniqueArray.includes(first[i])) {
      combinedUniqueArray.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!combinedUniqueArray.includes(second[i])) {
      combinedUniqueArray.push(second[i]);
    }
  }
  return combinedUniqueArray;
}
