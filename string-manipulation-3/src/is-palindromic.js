/* exported isPalindromic */
function isPalindromic(string) {
  const chars = string.split('');

  // Removes any spaces from array
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      chars.splice(i, 1);
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
