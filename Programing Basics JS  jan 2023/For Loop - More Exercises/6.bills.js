function bills(input) {
  let monthsCount = Number(input[0]);
  let electricity = 0;
  let water = 0;
  let internet = 0;
  let others = 0;
  let othersToShow = 0;
  let sum = 0;

  for (let i = 1; i <= monthsCount; i++) {
    let currentElectricityBill = Number(input[i]);
    electricity += currentElectricityBill;
    // others += (currentElectricityBill + internet + water) * 1.2;
    water = water + 20;
    internet = internet + 15;
    others = (currentElectricityBill + 20 + 15) * 1.2;
    othersToShow += others;
  }

  sum = (electricity + water + internet + othersToShow) / monthsCount;

  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${othersToShow.toFixed(2)} lv`);
  console.log(`Average: ${sum.toFixed(2)} lv`);
}

// bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills([
  "8",
  "123.54",
  "231.54",
  "140.23",
  "100",
  "122.4",
  "430",
  "178.52",
  "64.2",
]);
