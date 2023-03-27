function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
  function add(a, b) {
    return a + b;
  }
  let sum = add(firstNumber, secondNumber);

  function subtract(ab, c) {
    return ab - c;
  }

  let result = subtract(sum, thirdNumber);
  console.log(result);
  // let secondSum = add (firstNumber,thirdNumber)
  console.log(sum);
  // console.log (secondSum)
}

addAndSubtract(23, 6, 10);
