function oscars(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let juryCount = Number(input[2]);

  for (let i = 0; i < juryCount * 2; i += 2) {
    let juryNamePoints = input[i + 3];
    let juryPoints = Number(input[i + 4]);

    academyPoints += (juryNamePoints.length * juryPoints) / 2;
    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (academyPoints < 1250.5) {
    let pointsNeed = 1250.5 - academyPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeed.toFixed(1)} more!`);
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
