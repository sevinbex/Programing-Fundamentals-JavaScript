function trekkingMania(input) {
  let groupCount = Number(input[0]);

  let musalla = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let i = 1; i <= groupCount; i++) {
    let currentCount = Number(input[i]);
    // console.log(currentCount);
    if (currentCount <= 5) {
      musalla += currentCount;
    } else if (currentCount <= 12) {
      monblan += currentCount;
    } else if (currentCount <= 25) {
      kilimanjaro += currentCount;
    } else if (currentCount <= 40) {
      k2 += currentCount;
    } else if (currentCount > 40) {
      everest += currentCount;
    }
  }
  let peopleCount = musalla + monblan + kilimanjaro + k2 + everest;

  let musallaPercent = (musalla / peopleCount) * 100;
  let monblanPercent = (monblan / peopleCount) * 100;
  let kilimanjaroPercent = (kilimanjaro / peopleCount) * 100;
  let k2Percent = (k2 / peopleCount) * 100;
  let everestPercent = (everest / peopleCount) * 100;

  console.log(`${musallaPercent.toFixed(2)}%`);
  console.log(`${monblanPercent.toFixed(2)}%`);
  console.log(`${kilimanjaroPercent.toFixed(2)}%`);
  console.log(`${k2Percent.toFixed(2)}%`);
  console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania([
  "10",

  "10",

  "5",

  "1",

  "100",

  "12",

  "26",
  "17",
  "37",
  "40",
  "78",
]);
