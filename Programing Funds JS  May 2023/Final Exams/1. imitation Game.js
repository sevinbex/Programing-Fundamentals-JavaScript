function ig(array) {
  let word = array.shift();
  let command = array.shift();
  while (command !== "Decode") {
    let [action, ...arguments] = command.split("|");
    switch (action) {
      case "ChangeAll":
        while (word.indexOf(arguments[0]) >= 0) {
          word = word.replace(arguments[0], arguments[1]);
        }

        break;
      case "Insert":
        let firstPart = word.substring(0, arguments[0]);
        let secondPart = word.substring(arguments[0]);
        word = firstPart.concat(arguments[1]).concat(secondPart);
        // console.log(word);
        break;
      case "Move":
        let firstThree = word.slice(0, arguments[0]);
        let last = word.slice(arguments[0]);
        word = last + firstThree;
        // console.log(word);
        break;
    }
    command = array.shift();
  }

  console.log(`The decrypted message is: ${word}`);
}

// ig(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
ig(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
