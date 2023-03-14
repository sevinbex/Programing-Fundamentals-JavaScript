function goi(input) {
  let numCount = Number(input[0]);
  let sum = 0;
  let from0to9 = 0;
  let from10to19 = 0;
  let from20to29 = 0;
  let from30to39 = 0;
  let from40to50 = 0;
  let invalidNumbers = 0;

  for (let i = 1; i <= numCount; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 0 || currentNum > 50) {
      invalidNumbers += 1;
      sum /= 2;
    } else if (currentNum <= 9 && currentNum >= 0) {
      from0to9 += 1;
      sum += currentNum * 0.2;
    } else if (currentNum <= 19) {
      from10to19 += 1;
      sum += currentNum * 0.3;
    } else if (currentNum <= 29) {
      from20to29 += 1;
      sum += currentNum * 0.4;
    } else if (currentNum <= 39) {
      from30to39 += 1;
      sum += 50;
    } else if (currentNum <= 50) {
      from40to50 += 1;
      sum += 100;
    }
  }
  let from0to9Percent = (from0to9 / numCount) * 100;
  let from10to19Percent = (from10to19 / numCount) * 100;
  let from20to29Percent = (from20to29 / numCount) * 100;
  let from30to39Percent = (from30to39 / numCount) * 100;
  let from40to50Percent = (from40to50 / numCount) * 100;
  let invalidNumbersPercent = (invalidNumbers / numCount) * 100;
  console.log(sum.toFixed(2));
  console.log(`From 0 to 9: ${from0to9Percent.toFixed(2)}%`);
  console.log(`From 10 to 19: ${from10to19Percent.toFixed(2)}%`);
  console.log(`From 20 to 29: ${from20to29Percent.toFixed(2)}%`);
  console.log(`From 30 to 39: ${from30to39Percent.toFixed(2)}%`);
  console.log(`From 40 to 50: ${from40to50Percent.toFixed(2)}%`);
  console.log(`Invalid numbers: ${invalidNumbersPercent.toFixed(2)}%`);
}

goi(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
