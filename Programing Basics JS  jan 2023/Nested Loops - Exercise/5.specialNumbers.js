function specNumbers(input) {
  let n = Number(input[0]);
  let resultLast = "";
  for (let i = 1111; i <= 9999; i++) {
    let curNumAsStr = i.toString();
    let result = "";
    for (let index = 0; index < curNumAsStr.length; index++) {
      let curDigit = Number(curNumAsStr[index]);

      if (n % curDigit === 0) {
        result += curDigit;
      } else {
        continue;
      }
    }

    if (result.length === curNumAsStr.length) {
      resultLast += curNumAsStr + " ";
    }
  }
  console.log(resultLast);
}

specNumbers(["16"]);
