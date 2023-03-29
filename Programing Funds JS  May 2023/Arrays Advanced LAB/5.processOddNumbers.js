function processOddNumbers(array) {
  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    let currentDigit = Number(array[i]);
    if (i % 2 !== 0) {
      finalArray.push(currentDigit * 2);
    }
  }
  finalArray.reverse();
  console.log(finalArray.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
