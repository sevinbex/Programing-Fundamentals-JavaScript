function targetMoving(input) {
  let targets = input.shift().split(" ").map(Number);
  let command = input.shift().split(" ");

  while (command[0] != "End") {
    let action = command[0];
    let indexOfTarget = Number(command[1]);
    let damage = Number(command[2]);
    let exists = false;
    for (let i = 0; i < targets.length; i++) {
      if (i == indexOfTarget) {
        exists = true;
        break;
      }
    }
    switch (action) {
      case "Shoot":
        if (exists) {
          let target = targets[indexOfTarget];
          let targetAfterDamage = target - damage;
          if (targetAfterDamage > 0) {
            targets.splice(indexOfTarget, 1, targetAfterDamage);
          } else {
            targets.splice(indexOfTarget, 1);
          }
        } else {
          targets.splice(indexOfTarget, 1);
          break;
        }
        break;
      case "Add":
        if (exists) {
          targets.splice(indexOfTarget, 0, damage);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if (exists) {
          if (
            indexOfTarget - damage <= 0 &&
            indexOfTarget + damage <= 0 &&
            indexOfTarget + damage < targets.length &&
            indexOfTarget - damage < targets.length
          ) {
            console.log("Strike missed!");
          } else {
            let strikeLength = damage * 2 + 1;
            targets.splice(indexOfTarget - 1, strikeLength);
          }
        }
    }
    command = input.shift().split(" ");
  }
  console.log(targets.join("|"));
}

targetMoving([
  "52 74 23 44 96 110",

  "Shoot 5 10",

  "Shoot 1 80",

  "Strike 2 1",

  "Add 22 3",

  "End",
]);

targetMoving(["1 2 3 4 5", "Strike 0 1", "End"]);
