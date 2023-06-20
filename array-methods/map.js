const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const pricesObjects = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));
console.log('Price Objects:', pricesObjects);

const pricesFormatted = prices.map((element) => `$${element.toFixed(2)}`);
console.log('Formatted Prices:', pricesFormatted);
