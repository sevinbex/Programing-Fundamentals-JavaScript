function ivanova(input) {
  let days = Number(input[0]);
  let firstDayRanKM = Number(input[1]);
  let sum = firstDayRanKM;
  let distanceToGo = 1000;

  for (let i = 2; i <= days + 1; i++) {
    let currentPercent = Number(input[i]);
    let currentDayKm = (firstDayRanKM * currentPercent) / 100;
    firstDayRanKM += currentDayKm;
    sum += firstDayRanKM;

    // console.log(firstDayRanKM);
  }
  if (sum >= distanceToGo) {
    let moreRan = sum - distanceToGo;
    console.log(
      `You've done a great job running ${Math.ceil(moreRan)} more kilometers!`
    );
  } else {
    let kmsNeeded = distanceToGo - sum;
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        kmsNeeded
      )} more kilometers`
    );
  }
}

// ivanova(["5", "30", "10", "15", "20", "5", "12"]);
ivanova(["4", "100", "30", "50", "60", "80"]);
