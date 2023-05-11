/* exported filterOutNulls */
function filterOutNulls(values) {
  const valuesWithoutNull = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesWithoutNull.push(values[i]);
    }
  }
  return valuesWithoutNull;
}
