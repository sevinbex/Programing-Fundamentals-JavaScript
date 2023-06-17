function boss(input) {
  let numberString = Number(input.shift());
  let pattern = /\|(?<name>[A-Z]{4,})\|\:\#(?<string>[A-z]+\s{1}[A-z]+)\#/gm;
  let match = pattern.exec(input);

  while (match !== null) {
    let name = match.groups["name"];
    let string = match.groups["string"];
    let strength = name.length;
    let armor = string.length;

    console.log(`${name} , The ${string}`);
    console.log(`>> Strength: ${strength}`);
    console.log(`>> Armor: ${armor}`);

    match = pattern.exec(input);
  }
  console.log(`Access denied!`);
}

boss([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
