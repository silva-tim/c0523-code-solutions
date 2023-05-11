/* exported isUpperCased */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
