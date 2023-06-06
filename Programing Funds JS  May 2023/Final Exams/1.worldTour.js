function wt(input) {
  let originalPlan = input.shift();
  //   console.log(originalPlan);
  let command = input.shift();
  while (command !== "Travel") {
    let tokens = command.split(":");
    // console.log(tokens);
    command = input.shift();
    let startIndex;
    let endIndex;
    switch (tokens[0]) {
      case "Add Stop":
        if (Number(tokens[1]) < 0 || Number(tokens[1]) > originalPlan.length) {
          console.log(originalPlan);
          break;
        }
        let firstPart = originalPlan.substring(0, tokens[1]);
        let secondPart = originalPlan.substring(tokens[1]);
        originalPlan = firstPart.concat(tokens[2]).concat(secondPart);
        console.log(originalPlan);
        break;

      case "Remove Stop":
        startIndex = Number(tokens[1]);
        endIndex = Number(tokens[2]);
        if (!originalPlan[startIndex] || !originalPlan[endIndex]) {
          console.log(originalPlan);
          break;
        }
        let subStr = originalPlan.substring(startIndex, endIndex + 1);
        originalPlan = originalPlan.replace(subStr, "");
        console.log(originalPlan);
        break;

      case "Switch":
        let toChange = tokens[1];
        let newChange = tokens[2];

        let pattern = new RegExp(toChange, "g");
        originalPlan = originalPlan.replace(pattern, newChange);
        console.log(originalPlan);
        break;
    }
  }
  console.log(`Ready for world tour! Planned stops: ${originalPlan}`);
}

wt([
  "Hawai::Cyprys-Greece",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
