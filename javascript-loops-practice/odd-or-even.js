/* exported oddOrEven */
function oddOrEven(numbers) {
  const typeOfNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    typeOfNumber.push(numbers[i] % 2 === 0 ? 'even' : 'odd');
  }
  return typeOfNumber;
}
