function messageTranslator(input) {
  let numberMessages = Number(input.shift());
  let pattern = /![A-Z][a-z]{2,}!:\[(?<name>[A-Za-z]{8,})\]/gm;
  let rezult = [];

  for (let i = 0; i < numberMessages; i++) {
    let element = input[i];

    let match = pattern.exec(element);

    if (match !== null) {
      let char = match.groups["name"];
      for (let chares of char) {
        let digits = chares.charCodeAt();
        rezult.push(digits);
      }
      console.log(`Send: ${rezult.join(" ")}`);
    } else {
      console.log(`The message is invalid`);
    }
  }
}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
