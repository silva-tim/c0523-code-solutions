/* exported lastChars */
function lastChars(length, string) {
  let finalWord = '';
  if (string.length - length < 0) {
    return string;
  }

  for (let i = string.length - length; i < string.length; i++) {
    finalWord += string[i];
  }
  return finalWord;
}
