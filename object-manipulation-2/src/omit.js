/* exported omit */
function omit(source, keys) {
  const newObj = {};

  for (const prop in source) {
    if (keys.includes(prop) === false) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
