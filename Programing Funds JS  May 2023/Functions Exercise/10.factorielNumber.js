function factoriel(number1, number2) {
  let firstDigit = 1;
  let sum1 = 1;
  let sum2 = 1;

  for (let i = 2; i <= number1; i++) {
    sum1 = sum1 * i;
    // console.log(sum1);
  }

  for (let i = 2; i <= number2; i++) {
    sum2 = sum2 * i;
    // console.log(sum2);
  }

  console.log((sum1 / sum2).toFixed(2));
}

factoriel(6, 2);
