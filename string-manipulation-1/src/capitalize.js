/* exported capitalize */
function capitalize(word) {
  const firstChar = word[0];
  const restOfWord = word.slice(1).toLowerCase();
  const capWord = firstChar.toUpperCase() + restOfWord;

  return capWord;
}
