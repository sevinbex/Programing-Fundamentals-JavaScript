function balls(input) {
  let ballsCount = Number(input[0]);
  let totalPoints = 0;
  let red = 0;
  let orange = 0;
  let yellow = 0;
  let white = 0;
  let others = 0;
  let black = 0;

  for (let i = 1; i <= ballsCount; i++) {
    let currentColour = input[i];
    // console.log(currentColour);
    switch (currentColour) {
      case "red":
        totalPoints += 5;
        red++;
        break;
      case "orange":
        totalPoints += 10;
        orange++;
        break;
      case "yellow":
        totalPoints += 15;
        yellow++;
        break;
      case "white":
        totalPoints += 20;
        white++;
        break;
      case "black":
        totalPoints = Math.floor(totalPoints / 2);
        black++;
        break;
      default:
        others++;
        break;
    }
  }
  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${red}`);
  console.log(`Orange balls: ${orange}`);
  console.log(`Yellow balls: ${yellow}`);
  console.log(`White balls: ${white}`);
  console.log(`Other colors picked: ${others}`);
  console.log(`Divides from black balls: ${black}`);
}

// balls(["3", "white", "black", "pink"]);
// balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
balls([
  "10",
  "white",
  "white",
  "ee",
  "red",
  "orange",
  "red",
  "black",
  "black",
  "black",
  "black",
]);
