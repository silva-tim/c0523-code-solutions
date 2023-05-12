/* exported reverseWords */
function reverseWords(string) {
  const words = string.split(' ');
  let reversedString = '';

  for (let i = 0; i < words.length; i++) {
    const chars = words[i].split('');
    chars.reverse();

    for (let j = 0; j < chars.length; j++) {
      reversedString += chars[j];
    }

    if (i !== words.length - 1) {
      reversedString += ' ';
    }
  }
  return reversedString;
}
