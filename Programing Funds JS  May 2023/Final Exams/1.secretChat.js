function secretChat(array) {
  let secretMessage = array.shift();
  //   console.log(secretMessage);

  let command = array.shift();

  while (command !== "Reveal") {
    let commandSplitted = command.split(":|:");
    let action = commandSplitted[0];

    switch (action) {
      case "ChangeAll":
        let toBeChanged = commandSplitted[1];
        let newLetter = commandSplitted[2];
        while (secretMessage.indexOf(toBeChanged) >= 0) {
          secretMessage = secretMessage.replace(toBeChanged, newLetter);
        }
        console.log(secretMessage);
        break;
      case "Reverse":
        let substring = commandSplitted[1];
        if (secretMessage.includes(substring)) {
          secretMessage = secretMessage.replace(substring, "");
          let reversed = reverseStr(substring);
          secretMessage += reversed;
          console.log(secretMessage);
        } else {
          console.log("error");
        }
        break;
      case "InsertSpace":
        let index = commandSplitted[1];
        let leftSide = secretMessage.substring(0, index);
        let rightSide = secretMessage.substring(index);
        secretMessage = leftSide + " " + rightSide;
        console.log(secretMessage);
        break;
    }
    // console.log(secretMessage);
    command = array.shift();
  }

  function reverseStr(text) {
    return text.split("").reverse().join("");
  }
  console.log(`You have a new text message: ${secretMessage}`);
}

// secretChat([
//   "heVVodar!gniV",

//   "ChangeAll:|:V:|:l",

//   "Reverse:|:!gnil",

//   "InsertSpace:|:5",

//   "Reveal",
// ]);

secretChat([
  "Hiware?uiy",

  "ChangeAll:|:i:|:o",

  "Reverse:|:?uoy",

  "Reverse:|:jd",

  "InsertSpace:|:3",

  "InsertSpace:|:7",

  "Reveal",
]);
