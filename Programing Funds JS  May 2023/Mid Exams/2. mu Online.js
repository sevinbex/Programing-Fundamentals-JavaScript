function muOnline(input) {
  let actions = input.split("|");
  let health = 100;
  let adena = 0;

  for (let i = 0; i < actions.length; i++) {
    let command = actions[i].split(" ");
    let mobOrDrop = command[0];
    let amount = Number(command[1]);

    switch (mobOrDrop) {
      case "potion":
        if (health + amount > 100) {
          amount = 100 - health;
          health = 100;
        } else {
          health += amount;
        }
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        adena += amount;
        console.log(`You found ${amount} bitcoins.`);
        break;
      default:
        health -= amount;
        if (health > 0) {
          console.log(`You slayed ${mobOrDrop}.`);
        } else {
          console.log(`You died! Killed by ${mobOrDrop}.`);
          console.log(`Best room: ${i + 1}`);
          return;
        }
        break;
    }
  }

  console.log("You've made it!");
  console.log(`Bitcoins: ${adena}`);
  console.log(`Health: ${health}`);
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6
