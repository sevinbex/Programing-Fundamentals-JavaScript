function vacation(input) {
  let index = 0;
  let moneyNeeded = Number(input[index]);
  index++;
  let moneyHave = Number(input[index]);
  index++;
  let action = input[index];
  index++;
  let actionSum = Number(input[index]);
  index++;
  let days = 0;
  let spendCounter = 0;

  while (true) {
    days += 1;
    if (action === "spend") {
      moneyHave -= actionSum;
      spendCounter++;
      if (moneyHave < 0) {
        moneyHave = 0;
      }
    } else if (action === "save") {
      moneyHave += actionSum;
      spendCounter = 0;
    }
    if (spendCounter === 5) {
      console.log(`You can't save the money.`);
      console.log(`${days}`);
      return;
    }
    if (moneyHave >= moneyNeeded) {
      console.log(`You saved the money for ${days} days.`);
      return;
    }

    // days += 1;
    action = input[index];
    index++;
    actionSum = Number(input[index]);
    index++;
  }
}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacation([
//   "250",
//   "150",
//   "spend",
//   "50",
//   "spend",
//   "50",
//   "save",
//   "100",
//   "save",
//   "100",
// ]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
