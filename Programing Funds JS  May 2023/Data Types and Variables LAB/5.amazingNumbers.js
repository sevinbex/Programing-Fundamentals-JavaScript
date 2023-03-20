function amazingNumbers(num) {
  numToString = num.toString();
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

amazingNumbers(999);
