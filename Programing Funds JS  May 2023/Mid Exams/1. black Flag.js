function blackFlag(array) {
  let days = Number(array[0]);
  let dailyRaid = Number(array[1]);
  let expectedRaid = Number(array[2]);
  let totalRaided = 0;

  for (let i = 1; i <= days; i++) {
    totalRaided += dailyRaid;
    if (i % 3 == 0) {
      totalRaided += dailyRaid / 2;
    }
    if (i % 5 == 0) {
      totalRaided = totalRaided * 0.7;
    }
  }
  if (totalRaided >= expectedRaid) {
    console.log(`Ahoy! ${totalRaided.toFixed(2)} plunder gained.`);
  } else {
    let difference = (totalRaided / expectedRaid) * 100;
    console.log(`Collected only ${difference.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["5", "40", "100"]);

blackFlag(["10", "20", "380"]);
