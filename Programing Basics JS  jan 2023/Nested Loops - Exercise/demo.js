function uniquePinCode(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  for (let i = 222; i <= 999; i++) {
    let result = "";
    let curNumAsStr = i.toString();
    for (let index = 0; index < curNumAsStr.length; index++) {
      let curDigit = Number(curNumAsStr[index]);
      let position = index + 1;
      if (
        position === 1 &&
        curDigit % 2 === 0 &&
        curDigit !== 0 &&
        curDigit <= a
      ) {
        result += curDigit + " ";
      } else if (position === 2) {
        result += curDigit + " ";
      } else if (
        position === 3 &&
        curDigit % 2 === 0 &&
        curDigit !== 0 &&
        curDigit <= b
      ) {
        result += curDigit;
      } else {
        continue;
      }
    }
    console.log(result);
  }
}

uniquePinCode(["3", "5", "5"]);
