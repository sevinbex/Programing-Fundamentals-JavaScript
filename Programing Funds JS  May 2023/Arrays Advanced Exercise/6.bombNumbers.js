function bombNumbers(array, power) {
  let bomb = power[0];
  let detonation = power[1];
  let indexOfBomb = array.indexOf(bomb);
  // console.log(indexOfBomb);
  while (indexOfBomb !== -1) {
    let startExplosionIndex = Math.max(0, indexOfBomb - detonation);
    // console.log(startExplosionIndex);
    let explosionLength = detonation * 2 + 1;
    // console.log(explosionLength);
    array.splice(startExplosionIndex, explosionLength);
    indexOfBomb = array.indexOf(bomb);
  }
  let sum = array.reduce((a, b) => a + b, 0);
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
