/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const chars1 = firstString.split('');
  const chars2 = secondString.split('');

  for (let i = 0; i < chars1.length || i < chars2.length; i++) {
    if (chars1[i] === ' ') {
      chars1.splice(i, 1);
    }

    if (chars2[i] === ' ') {
      chars2.splice(i, 1);
    }
  }

  chars1.sort();
  chars2.sort();

  for (let i = 0; i < chars1.length; i++) {
    if (chars1[i] !== chars2[i]) {
      return false;
    }
  }
  return true;
}
