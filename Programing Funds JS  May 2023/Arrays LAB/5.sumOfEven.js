function sumOfEvens(array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    let curDigit = Number(array[i]);
    if (curDigit % 2 == 0) {
      sum += curDigit;
    }
  }
  console.log(sum);
}

sumOfEvens(["1", "2", "3", "4", "5", "6"]);
sumOfEvens(["3", "5", "7", "9"]);
