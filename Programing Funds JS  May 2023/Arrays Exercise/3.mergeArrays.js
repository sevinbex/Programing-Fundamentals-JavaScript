function merge(array1, array2) {
  let finalArray = [];

  for (let i = 0; i <= array1.length - 1; i++) {
    if (i % 2 == 0) {
      finalArray.push(Number(array1[i]) + Number(array2[i]));
    } else {
      finalArray.push(array1[i] + array2[i]);
    }
  }
  console.log(finalArray.join(" - "));
}

merge(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);

merge(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
