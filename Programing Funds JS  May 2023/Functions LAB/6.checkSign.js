function checkSign(numOne, numTwo, numThree) {
  let double = () => numOne * numTwo;
  let result = numThree * double();

  if (result < 0) {
    return "Negative";
  } else {
    return "Positive";
  }
}

checkSign(5, 12, -15);
