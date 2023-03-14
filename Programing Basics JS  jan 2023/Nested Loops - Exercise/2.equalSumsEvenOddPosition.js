function sumOfNumbers(input) {
  let lower = Number(input[0]);
  let upper = Number(input[1]);
  let result = "";
  for (let currNum = lower; currNum <= upper; currNum++) {
    let oddSum = 0;
    let evenSum = 0;

    let currNumAsStr = currNum.toString();

    for (let index = 0; index < currNumAsStr.length; index++) {
      let currDigit = Number(currNumAsStr[index]);
      let possition = index + 1;

      if (possition % 2 === 0) {
        evenSum += currDigit;
      } else {
        oddSum += currDigit;
      }
    }
    if (oddSum === evenSum) {
      result += currNumAsStr + " ";
    }
  }
  console.log(result);
}

sumOfNumbers(["100000", "100050"]);
