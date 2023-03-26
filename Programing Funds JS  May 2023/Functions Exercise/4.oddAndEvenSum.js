function oddAndEvenSum(number) {
  let numberAsString = number.toString();
  let numberAsStringLength = numberAsString.length;
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < numberAsStringLength; i++) {
    let curDigit = Number(numberAsString[i]);

    if (curDigit % 2 == 0) {
      evenSum += curDigit;
    } else {
      oddSum += curDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
