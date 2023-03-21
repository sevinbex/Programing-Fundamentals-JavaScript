function sumOfDigits(number) {
  let numberToString = number.toString();

  let sum = 0;

  for (let i = 0; i < numberToString.length; i++) {
    let curDigit = Number(numberToString[i]);
    sum += curDigit;
  }
  console.log(sum);
}

sumOfDigits(245678);
