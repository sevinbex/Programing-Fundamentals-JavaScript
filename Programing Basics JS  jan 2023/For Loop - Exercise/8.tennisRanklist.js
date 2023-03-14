function tennisRanklist(input) {
  let tournamentCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let totalPoints = 0;
  let pointsAfterTournaments = 0;
  let tournamentsWon = 0;

  for (let i = 0; i < tournamentCount; i++) {
    let currentResult = input[i + 2];

    switch (currentResult) {
      case "W":
        pointsAfterTournaments += 2000;
        tournamentsWon++;
        break;
      case "F":
        pointsAfterTournaments += 1200;
        break;
      case "SF":
        pointsAfterTournaments += 720;
        break;
    }
  }
  totalPoints = startingPoints + pointsAfterTournaments;

  let averagePoints = Math.floor(pointsAfterTournaments / tournamentCount);

  let avgTournamentsWon = (tournamentsWon / tournamentCount) * 100;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${avgTournamentsWon.toFixed(2)}%`);
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
