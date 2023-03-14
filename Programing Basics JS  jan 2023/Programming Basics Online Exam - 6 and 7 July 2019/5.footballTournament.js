function ft(input) {
  let teamName = input[0];
  let gameCount = Number(input[1]);
  let totalPoints = 0;
  let winGames = 0;
  let drawGames = 0;
  let lostGames = 0;

  if (gameCount < 1) {
    console.log(`${teamName} hasn't played any games during this season.`);
    return;
  }

  for (let i = 1; i <= gameCount; i++) {
    let currentResult = input[i + 1];

    // console.log(currentResult);

    switch (currentResult) {
      case "W":
        totalPoints += 3;
        winGames++;
        break;
      case "D":
        totalPoints += 1;
        drawGames++;
        break;
      case "L":
        lostGames++;
        break;
    }
  }

  let winPercent = (winGames / gameCount) * 100;
  console.log(`${teamName} has won ${totalPoints} points during this season.`);
  console.log("Total stats:");
  console.log(`## W: ${winGames}`);
  console.log(`## D: ${drawGames}`);
  console.log(`## L: ${lostGames}`);
  console.log(`Win rate: ${winPercent.toFixed(2)}%`);
}

// ft(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
// ft(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
ft(["Chelsea", "0"]);
