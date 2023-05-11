/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const addedSuffix = [];

  for (let i = 0; i < words.length; i++) {
    addedSuffix.push(words[i] + suffix);
  }
  return addedSuffix;
}
