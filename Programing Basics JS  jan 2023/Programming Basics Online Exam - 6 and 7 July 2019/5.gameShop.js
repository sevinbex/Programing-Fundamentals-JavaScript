function gs(input) {
  let gameCount = Number(input[0]);
  let Hearthstone = 0;
  let Fornite = 0;
  let Overwatch = 0;
  let Others = 0;
  for (let i = 1; i <= gameCount; i++) {
    let currentGame = input[i];
    // console.log(currentGame);

    switch (currentGame) {
      case "Hearthstone":
        Hearthstone++;
        break;
      case "Fornite":
        Fornite++;
        break;
      case "Overwatch":
        Overwatch++;
        break;
      default:
        Others++;
        break;
    }
  }
  let HSPercent = (Hearthstone / gameCount) * 100;
  let FNPercent = (Fornite / gameCount) * 100;
  let OWPercent = (Overwatch / gameCount) * 100;
  let OthersPercent = (Others / gameCount) * 100;

  console.log(`Hearthstone - ${HSPercent.toFixed(2)}%`);
  console.log(`Fornite - ${FNPercent.toFixed(2)}%`);
  console.log(`Overwatch - ${OWPercent.toFixed(2)}%`);
  console.log(`Others - ${OthersPercent.toFixed(2)}%`);
}

gs(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
