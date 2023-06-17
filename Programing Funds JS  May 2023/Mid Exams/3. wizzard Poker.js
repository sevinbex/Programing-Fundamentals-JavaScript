function wizardPoker(array) {
  let deck = array.shift().split(":");
  let index = 0;
  let card = [];
  let newDeck = [];

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");

    if (command[0] === "Add") {
      if (deck.includes(command[1])) {
        index = deck.indexOf(command[1]);
        card = deck.splice(index, 1);
        newDeck.push(card[0]);
      } else {
        console.log(`Card not found.`);
      }
    } else if (command[0] === "Insert") {
      if (deck.includes(command[1])) {
        if (Number(command[2]) >= 0 && Number(command[2]) < deck.length) {
          index = deck.indexOf(command[1]);
          card = deck.splice(index, 1);
          newDeck.splice(Number(command[2]), 0, card[0]);
        } else {
          console.log("Error!");
        }
      } else {
        console.log("Error!");
      }
    } else if (command[0] === "Remove") {
      index = newDeck.indexOf(command[1]);

      if (index >= 0) {
        newDeck.splice(index, 1);
      } else {
        console.log(`Card not found.`);
      }
    } else if (command[0] === "Swap") {
      if (newDeck.includes(command[1]) && newDeck.includes(command[2])) {
        let firstCardIndex = newDeck.indexOf(command[1]);
        let firstCard = newDeck.splice(firstCardIndex, 1);
        let secondCardIndex = newDeck.indexOf(command[2]);
        let secondCard = newDeck.splice(secondCardIndex, 1);

        newDeck.splice(secondCardIndex, 0, firstCard[0]);
        newDeck.splice(firstCardIndex, 0, secondCard[0]);
      }
    } else if (command[0] === "Shuffle") {
      newDeck.reverse();
    } else if (command[0] === "Ready") {
      console.log(newDeck.join(" "));
      return;
    }
  }
}

wizardPoker([
  "Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
  "Remove Pounce",
  "Add Pounce",
  "Remove Pounce",
  "Add Pounce",
  "Add Wrath",
  "Add Lifeweaver",
  "Add Exodia",
  "Remove Exodia",
  "Remove Exodia",
  "Add Exodia",
  "Insert Pop 2",
  "Swap Wrath Lifeweaver",
  "Swap Exodia Wrath",
  "Ready",
]);
