/* exported countdown */
function countdown(number) {
  const numberArray = [];

  for (let i = number; i >= 0; i--) {
    numberArray.push(i);
  }
  return numberArray;
}
