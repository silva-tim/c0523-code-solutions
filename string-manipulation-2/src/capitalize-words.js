/* exported capitalizeWords */
function capitalizeWords(string) {
  const allLower = string.toLowerCase();
  const words = allLower.split(' ');
  let finalString = words[0][0].toUpperCase() + words[0].slice(1);

  for (let i = 1; i < words.length; i++) {
    finalString += ' ' + words[i][0].toUpperCase() + words[i].slice(1);
  }
  return finalString;
}
