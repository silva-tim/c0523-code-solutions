/* exported drop */
function drop(array, count) {
  const dropped = [];

  for (let i = count; i < array.length; i++) {
    dropped.push(array[i]);
  }
  return dropped;
}
