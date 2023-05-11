/* exported capitalizeWord */
function capitalizeWord(word) {
  const allLower = word.toLowerCase();
  const firstChar = word[0].toUpperCase();

  if (allLower === 'javascript') {
    return 'JavaScript';
  }

  return firstChar + allLower.slice(1);
}
