function club(input) {
  let index = 0;

  let desiredMoney = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let totalSum = 0;

  while (command !== "Party!") {
    let cocktailName = command;
    let cocktailCount = Number(input[index]);
    let cocktailPrice = cocktailName.length;
    let orderBill = cocktailCount * cocktailPrice;
    if (orderBill % 2 !== 0) {
      orderBill *= 0.75;
    }
    totalSum += orderBill;
    if (totalSum >= desiredMoney) {
      console.log("Target acquired.");
      console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
      return;
    }
    index++;
    command = input[index];
    index++;
    cocktailCount = Number(input[index]);
    // if (command === "Party") {
    //   let moneyNeeded = desiredMoney - totalSum;
    //   console.log(`We need ${moneyNeeded} leva more.`);
    // }
  }
  if (command === "Party!") {
    let moneyNeeded = desiredMoney - totalSum;
    console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
    console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
  }
}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
