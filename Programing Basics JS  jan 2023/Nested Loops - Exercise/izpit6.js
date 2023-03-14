function ninenizinAmci(input) {
  let n = Number(input[0]);
  //   let sum1 = a * 1000 + b * 100 + c * 10 + d;
  for (let a = 1; a <= 9; a++) {
    for (let b = 9; b >= a; b--) {
      for (let c = 0; c <= 9; c++) {
        for (let d = 9; d >= c; d--) {
          let sum = a + b + c + d;
          let pow = a * b * c * d;
          let razdelim = Math.trunc(pow / sum);
          if (pow === sum && n % 10 === 5) {
            let sum1 = a * 1000 + b * 100 + c * 10 + d;
            console.log(sum1);
            // console.log(`${a}${b}${c}${d}`);
            return;
          }
          if (razdelim === 3 && n % 3 === 0) {
            let sum2 = d * 1000 + c * 100 + b * 10 + a;
            // console.log(`${d}${c}${b}${a}`);
            console.log(sum2);

            return;
          }
        }
      }
    }
    // console.log("Nothing found");
  }
  console.log("Nothing found");
}

ninenizinAmci(["123"]);
ninenizinAmci(["145"]);
ninenizinAmci(["214"]);
