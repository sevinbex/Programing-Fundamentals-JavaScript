function theLift(input) {
  let peopleWait = Number(input.shift());
  let wagons = input.shift();
  let wagonsToManipulate = wagons.split(" ").map(Number);

  for (let i = 0; i < wagonsToManipulate.length; i++) {
    if (wagonsToManipulate[i] < 4) {
      let peopleGoOn = 4 - wagonsToManipulate[i];
      wagonsToManipulate[i] += peopleGoOn;
      peopleWait -= peopleGoOn;
    } else {
      break;
    }

    if (peopleWait < 4) {
      wagonsToManipulate[i + 1] += peopleWait;
      peopleWait = 0;
      break;
    }
  }
  if (peopleWait > 0) {
    console.log(`There isn't enough space! 10 people in a queue!`);
    console.log(wagonsToManipulate.join(" "));
  } else {
    console.log(`The lift has empty spots!`);
    console.log(wagonsToManipulate.join(" "));
  }
}

theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);
