function bombNumbers(array, power) {
  let position = power[0];
  let detonation = power[1];
  let testArray = array.slice(0);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === position) {
      let spliced = array.splice(i - detonation, i + detonation);
      //   console.log(spliced);
    }
  }
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  console.log(sum);
}

bombNumbers(
  [1, 2, 2, 4, 2, 2, 2, 9],

  [4, 2]
);

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);

bombNumbers(
  [1, 7, 7, 1, 2, 3],

  [7, 1]
);

bombNumbers(
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],

  [2, 1]
);
