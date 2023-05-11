/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  const temp = chars[firstIndex];

  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;

  let finalWord = '';

  for (let i = 0; i < chars.length; i++) {
    finalWord += chars[i];
  }
  return finalWord;
}
