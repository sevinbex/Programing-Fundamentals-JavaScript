function evenOddSumming(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    let curNum = Number(array[i]);

    if (curNum % 2 == 0) {
      newArray[i] = curNum += i;
    } else {
      newArray[i] = curNum -= i;
    }
  }

  let sum1 = 0;
  let sum2 = 0;
  for (digit of array) {
    sum1 += digit;
  }
  for (digit of newArray) {
    sum2 += digit;
  }
  console.log(newArray);
  console.log(sum1);
  console.log(sum2);
}

evenOddSumming([5, 15, 23, 56, 35]);
