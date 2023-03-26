function checkSign(numOne, numTwo, numThree) {
  function power1(a, b) {
    let firstResult = a * b;
    return firstResult;
  }

  let pow = power1(numOne, numTwo);

  function final(ab, c) {
    let finalResult = ab * c;
    return finalResult;
  }

  let result = final(pow, numThree);
  if (result < 0) {
    return "Negative";
  } else {
    return "Positive";
  }
}

checkSign(-5, -12, -15);
