function getRangeReport(start, end) {
  const properties = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  }

  let tempNum = 0;

  for (let i = start; i <= end; i++) {
    properties.range.push(i);
    tempNum += i;

    if (i % 2 === 0) {
      properties.evens.push(i);
    } else {
      properties.odds.push(i)
    }
  }

  properties.total = tempNum;
  properties.average = tempNum / (properties.range.length);
  return properties;
}
