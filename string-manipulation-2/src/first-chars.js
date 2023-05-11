/* exported firstChars */
function firstChars(length, string) {
  let finalString = '';

  for (let i = 0; i < length && i < string.length; i++) {
    finalString += string[i];
  }
  return finalString;
}
