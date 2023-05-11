/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (Object.hasOwn(target, key) === false) {
      target[key] = source[key];
    }
  }
}
