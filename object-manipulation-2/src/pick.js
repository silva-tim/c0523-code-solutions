/* exported pick */
function pick(source, keys) {
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    if (Object.hasOwn(source, keys[i]) && source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
