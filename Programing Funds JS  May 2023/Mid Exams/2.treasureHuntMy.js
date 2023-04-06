function treasureHunt(input) {
  let chest = input.shift().split("|");
  let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

  for (let i = 0; i < input.length - 1; i++) {
    let [command, ...elements] = input[i].split(" ");
    let index = Number(elements[0]);
    switch (command) {
      case "Loot":
        for (let item of elements) {
          if (!chest.includes(item)) {
            chest.unshift(item);
          }
        }
        break;
      case "Drop":
        index = Number(elements[0]);
        if (isIndexValid(index, chest)) {
          let dropped = chest.splice(index, 1);
          chest.push(...dropped);
        }
        break;
      case "Steal":
        index = Number(elements[0]);
        let stealedTresure = chest.slice(-index);
        chest.splice(-index);
        console.log(stealedTresure.join(", "));
        break;
    }
  }
  total = chest.reduce((sum, chest) => sum + chest.length, 0) / chest.length;

  if (chest.length > 0) {
    console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}

// treasureHunt([
//   "Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!",
// ]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
