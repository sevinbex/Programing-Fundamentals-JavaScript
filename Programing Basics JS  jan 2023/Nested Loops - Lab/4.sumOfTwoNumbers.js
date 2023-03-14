function sotn(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combinationNumber = 0;
  for (let n1 = start; n1 <= end; n1++) {
    for (let n2 = start; n2 <= end; n2++) {
      combinationNumber++;
      let sum = n1 + n2;
      if (sum === magicNumber) {
        console.log(
          `Combination N:${combinationNumber} (${n1} + ${n2} = ${magicNumber})`
        );
        return;
      }
    }
  }
  console.log(
    `${combinationNumber} combinations - neither equals ${magicNumber}`
  );
}
// sotn(["1", "10", "5"]);
// sotn(["88", "888", "1000"]);
// sotn(["23", "24", "20"]);
sotn(["88", "888", "2000"]);
