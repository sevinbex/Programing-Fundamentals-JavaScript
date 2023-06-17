function puppy(input) {
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let weightOfPig = Number(input[3]) * 1000;

  let foodPerDay = 300;

  for (let i = 1; i <= 30; i++) {
    food -= foodPerDay;

    if (i % 2 == 0) {
      let hayPer2Days = 0.05 * food;
      hay -= hayPer2Days;
    }
    if (i % 3 == 0) {
      let coverPer3Days = weightOfPig / 3;
      cover -= coverPer3Days;
    }
  }
  let foodInKg = food / 1000;
  let coverInKg = cover / 1000;
  let hayInKg = hay / 1000;
  if (food <= 0 || hay <= 0 || cover <= 0) {
    console.log(`Merry must go to the pet store!`);
  } else {
    // console.log(
    //   `${foodInKg.toFixed(2)} ${hayInKg.toFixed(2)} ${coverInKg.toFixed(2)}`
    // );
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(
        2
      )}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`
    );
  }
}

puppy(["10", "5", "5.2", "1"]);
puppy(["1", "1.5", "3", "1.5"]);
puppy(["9", "5", "5.2", "1"]);
