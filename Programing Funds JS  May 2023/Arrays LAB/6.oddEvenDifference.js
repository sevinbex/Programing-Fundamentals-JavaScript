function oddEvenDifference(array) {
  let oddSum = 0;
  let evenSum = 0;
  //   let OddSum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    let curDigit = Number(array[i]);
    if (curDigit % 2 == 0) {
      evenSum += curDigit;
    } else {
      oddSum += curDigit;
    }
  }
  console.log(evenSum - oddSum);
}

// oddEvenDifference([1, 2, 3, 4, 5, 6]);
oddEvenDifference([3, 5, 7, 9]);
