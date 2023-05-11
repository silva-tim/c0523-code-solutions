/* exported ransomCase */
function ransomCase(string) {
  const allLower = string.toLowerCase();
  let ransomWord = '';

  for (let i = 0; i < allLower.length; i++) {
    if (i % 2 !== 0) {
      ransomWord += allLower[i].toUpperCase();
    } else {
      ransomWord += allLower[i];
    }
  }
  return ransomWord;
}
