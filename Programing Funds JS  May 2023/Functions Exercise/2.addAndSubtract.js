function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
  function add(a, b) {
    let sumOfTwoNumbers = a + b;
    return sumOfTwoNumbers;
  }

  let sum = add(firstNumber, secondNumber);
  let result = sum - thirdNumber;
  console.log(result);
}
addAndSubtract(23, 6, 10);
